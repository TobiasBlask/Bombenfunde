#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
from datetime import datetime, timezone
from pathlib import Path

WEB_CALIBRATION_SCHEMA_VERSION = "uxopro.web-calibration.v1"
ANALYSIS_HANDOFF_SCHEMA_VERSION = "uxopro.analysis-handoff.v1"
DEFAULT_CONFIG_NAME = "uxopro-export.config.json"


def iso_now() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=True) + "\n", encoding="utf-8")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Uebernimmt eine aus der Web-App exportierte Kalibrierung in einen lokalen Projektordner."
    )
    parser.add_argument("--root", required=True, help="Lokaler Projektordner")
    parser.add_argument("--input", required=True, help="Pfad zur exportierten Web-Kalibrierung")
    parser.add_argument("--config", default="", help=f"Optionale Projekt-Config, Standard: <root>/{DEFAULT_CONFIG_NAME}")
    parser.add_argument("--master-image", default="", help="Optionales Masterbild-Override")
    parser.add_argument("--georef-status", default="ready_for_local_georef", help="Neuer Georeferenzierungsstatus in der Projekt-Config")
    parser.add_argument("--analysis-status", default="pending", help="Neuer Analyse-Status in der Projekt-Config")
    return parser.parse_args()


def resolve_config_path(root: Path, config_arg: str) -> Path:
    if not config_arg:
        return root / DEFAULT_CONFIG_NAME
    path = Path(config_arg).expanduser()
    if not path.is_absolute():
        path = (root / path).resolve()
    return path


def validate_payload(payload: dict) -> dict:
    schema_version = payload.get("schema_version") or payload.get("schemaVersion")
    if schema_version != WEB_CALIBRATION_SCHEMA_VERSION:
        raise SystemExit(f"Nicht unterstuetzte Kalibrierdatei: {schema_version!r}")
    project = payload.get("project") or {}
    calibration = payload.get("calibration") or {}
    images = calibration.get("images") or []
    if not project.get("name"):
        raise SystemExit("In der Web-Kalibrierung fehlt `project.name`.")
    if not calibration.get("master_image"):
        raise SystemExit("In der Web-Kalibrierung fehlt `calibration.master_image`.")
    if not images:
        raise SystemExit("In der Web-Kalibrierung fehlen `calibration.images`.")
    return payload


def load_or_init_config(config_path: Path) -> dict:
    if not config_path.exists():
        return {}
    return load_json(config_path)


def build_analysis_handoff(root: Path, payload: dict) -> dict:
    project = payload["project"]
    calibration = payload["calibration"]
    return {
        "schema_version": ANALYSIS_HANDOFF_SCHEMA_VERSION,
        "created_at": iso_now(),
        "source_web_calibration": "handoff/web-calibration.json",
        "project": {
            "id": project.get("id", ""),
            "name": project.get("name", ""),
            "location": project.get("location", ""),
            "scope": project.get("scope", ""),
            "local_root": str(root),
        },
        "inputs": {
            "tiff_root": "inputs/",
            "qgis_root": "qgis/",
            "preview_root": "preview/",
            "gcp_targets_expected": "exports/ or root-level GCP CSV",
        },
        "calibration": {
            "master_image": calibration.get("master_image", ""),
            "selected_image": calibration.get("selected_image", ""),
            "direct_mode": calibration.get("direct_mode", ""),
            "calibrated_images": calibration.get("calibrated_images", 0),
            "images": calibration.get("images", []),
            "geo_targets": calibration.get("geo_targets", []),
        },
        "expected_outputs": [
            "exports/report.html",
            "exports/report.pdf",
            "exports/findings.geojson",
            "exports/areas.geojson",
            "preview/*.png",
            "uxopro-project-package.json",
        ],
        "worker_steps": [
            "Masterbild in QGIS oder lokalem Georeferenzierungsprozess mit der Web-Kalibrierung als Startlage setzen.",
            "Folgebilder an das Masterbild oder dessen Kontrollpunkte annaehern.",
            "Multitemporale Auswertung und Befundkartierung lokal durchfuehren.",
            "Exporte in exports/ und preview/ schreiben.",
            "Danach tools/export_local_package.py fuer den Rueckimport in die App ausfuehren.",
        ],
    }


def update_config(config: dict, payload: dict, georef_status: str, analysis_status: str, master_image_override: str) -> dict:
    calibration = payload["calibration"]
    calibrated_images = calibration.get("calibrated_images", 0) or len(calibration.get("images", []))
    config = dict(config)
    config["master_image"] = master_image_override or calibration.get("master_image", config.get("master_image", ""))
    config["georef_status"] = georef_status
    config["analysis_status"] = analysis_status or config.get("analysis_status", "pending")
    config["web_calibration_status"] = "imported"
    config["web_calibration_exported_at"] = payload.get("exported_at", "")
    config["images_web_calibrated"] = calibrated_images
    base_note = config.get("pipeline_note", "").strip()
    extra_note = f"Web-Kalibrierung am {payload.get('exported_at', iso_now())} lokal uebernommen."
    if extra_note not in base_note:
        config["pipeline_note"] = f"{base_note} {extra_note}".strip()
    return config


def main() -> int:
    args = parse_args()
    root = Path(args.root).expanduser().resolve()
    input_path = Path(args.input).expanduser().resolve()
    config_path = resolve_config_path(root, args.config)
    handoff_dir = root / "handoff"

    if not root.exists():
        raise SystemExit(f"Projektordner existiert nicht: {root}")
    if not input_path.exists():
        raise SystemExit(f"Kalibrierdatei existiert nicht: {input_path}")

    payload = validate_payload(load_json(input_path))
    payload["project"]["local_root"] = str(root)

    handoff_path = handoff_dir / "web-calibration.json"
    analysis_job_path = handoff_dir / "analysis-job.json"
    save_json(handoff_path, payload)
    save_json(analysis_job_path, build_analysis_handoff(root, payload))

    config = load_or_init_config(config_path)
    updated_config = update_config(config, payload, args.georef_status, args.analysis_status, args.master_image)
    save_json(config_path, updated_config)

    print(f"Web-Kalibrierung uebernommen: {handoff_path}")
    print(f"Analyse-Handoff erzeugt: {analysis_job_path}")
    print(f"Projekt-Config aktualisiert: {config_path}")
    print("Naechster Schritt: lokale Georeferenzierung/Analyse fahren und danach export_local_package.py ausfuehren.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
