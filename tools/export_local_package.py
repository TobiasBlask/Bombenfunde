#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from datetime import datetime, timezone
from pathlib import Path

SCHEMA_VERSION = "uxopro.local-package.v1"
DEFAULT_STAGE = "sources"
DEFAULT_MASTER_IMAGE = "Historisch 1945-04-09"
DEFAULT_CONFIG_NAME = "uxopro-export.config.json"

ARTIFACT_RULES = [
    ("interactive_html", lambda path: path.suffix.lower() in {".html", ".htm"} and "index" not in path.name.lower()),
    ("report_pdf", lambda path: path.suffix.lower() == ".pdf"),
    ("findings_geojson", lambda path: path.suffix.lower() in {".geojson", ".json"} and "find" in path.name.lower()),
    ("areas_geojson", lambda path: path.suffix.lower() in {".geojson", ".json"} and "area" in path.name.lower()),
    ("gcp_csv", lambda path: path.suffix.lower() == ".csv" and "gcp" in path.name.lower()),
    ("preview_image", lambda path: path.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"} and ("preview" in path.name.lower() or "contactsheet" in path.name.lower())),
    ("qgis_project", lambda path: path.suffix.lower() in {".qgz", ".qgs"}),
]


def iso_now() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def slugify(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "projekt"


def classify_artifact(path: Path) -> str | None:
    for kind, matcher in ARTIFACT_RULES:
        if matcher(path):
            return kind
    return None


def artifact_label(kind: str, path: Path) -> str:
    labels = {
        "interactive_html": "HTML Gutachten",
        "report_pdf": "PDF Gutachten",
        "findings_geojson": "Befunde GeoJSON",
        "areas_geojson": "Verdachtsflächen GeoJSON",
        "gcp_csv": "GCP-Zielpunkte",
        "preview_image": f"Preview {path.stem}",
        "qgis_project": "QGIS Projekt",
    }
    return labels.get(kind, path.name)


def artifact_role(kind: str) -> str:
    return {
        "interactive_html": "review",
        "report_pdf": "release",
        "findings_geojson": "analysis",
        "areas_geojson": "analysis",
        "gcp_csv": "georef",
        "preview_image": "preview",
        "qgis_project": "analysis",
    }.get(kind, "artifact")


def collect_files(root: Path) -> list[Path]:
    files: list[Path] = []
    for candidate in root.rglob("*"):
        if not candidate.is_file():
            continue
        if ".git" in candidate.parts:
            continue
        if candidate.name.startswith("."):
            continue
        files.append(candidate)
    return sorted(files)


def detect_artifacts(root: Path) -> list[dict]:
    artifacts: list[dict] = []
    for path in collect_files(root):
        if path.suffix.lower() in {".tif", ".tiff"}:
            continue
        lower_name = path.name.lower()
        if "_annot_helper" in lower_name or "_preview_grid" in lower_name:
            continue
        kind = classify_artifact(path)
        if not kind:
            continue
        relative = path.relative_to(root).as_posix()
        artifacts.append(
            {
                "kind": kind,
                "label": artifact_label(kind, path),
                "path": relative,
                "role": artifact_role(kind),
                "description": "",
                "generatedAt": datetime.fromtimestamp(path.stat().st_mtime, timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
                "sizeBytes": path.stat().st_size,
            }
        )
    # Stable order: HTML, PDF, GeoJSON, CSV, previews, rest
    rank = {
        "interactive_html": 0,
        "report_pdf": 1,
        "findings_geojson": 2,
        "areas_geojson": 3,
        "gcp_csv": 4,
        "preview_image": 5,
        "qgis_project": 6,
    }
    artifacts.sort(key=lambda item: (rank.get(item["kind"], 99), item["path"]))
    return artifacts


def count_images(root: Path) -> tuple[int, int]:
    tif_files = [path for path in root.rglob("*") if path.is_file() and path.suffix.lower() in {".tif", ".tiff"} and ".git" not in path.parts]
    georef_like = [path for path in root.rglob("*") if path.is_file() and path.suffix.lower() in {".qgz", ".qgs", ".gpkg", ".geojson"} and ".git" not in path.parts]
    return len(tif_files), len(georef_like)


def derive_flags(artifacts: list[dict]) -> tuple[bool, bool]:
    has_html = any(item["kind"] == "interactive_html" for item in artifacts)
    has_pdf = any(item["kind"] == "report_pdf" for item in artifacts)
    return has_html, has_pdf


def load_config(root: Path, config_path: str) -> dict:
    path = Path(config_path).expanduser() if config_path else root / DEFAULT_CONFIG_NAME
    if not path.is_absolute():
        path = (root / path).resolve()
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8"))


def resolve_value(args: argparse.Namespace, config: dict, key: str, default=None):
    arg_value = getattr(args, key, None)
    if arg_value not in (None, ""):
        return arg_value
    config_value = config.get(key)
    if config_value not in (None, ""):
        return config_value
    return default


def build_payload(args: argparse.Namespace) -> dict:
    root = Path(args.root).expanduser().resolve()
    config = load_config(root, args.config)
    artifacts = detect_artifacts(root)
    tif_count, georef_count = count_images(root)
    html_ready, pdf_ready = derive_flags(artifacts)
    name = resolve_value(args, config, "name")
    location = resolve_value(args, config, "location")
    scope = resolve_value(args, config, "scope")
    if not name or not location or not scope:
        raise SystemExit("Fehlende Pflichtfelder: name, location und scope muessen per CLI oder Config gesetzt sein.")
    project_id = resolve_value(args, config, "project_id") or f"gut-{slugify(name)}"
    stage = resolve_value(args, config, "stage", DEFAULT_STAGE)
    assigned_to = resolve_value(args, config, "assigned_to", "")
    created_by = resolve_value(args, config, "created_by", "")
    visibility = resolve_value(args, config, "visibility", "internal")
    note = resolve_value(args, config, "note", "Lokales QGIS-/Analyseprojekt fuer die App freigeben.")
    master_image = resolve_value(args, config, "master_image", DEFAULT_MASTER_IMAGE)
    georef_status = resolve_value(args, config, "georef_status", "in_progress")
    analysis_status = resolve_value(args, config, "analysis_status", "pending")
    export_status = resolve_value(args, config, "export_status", "pending")
    review_status = resolve_value(args, config, "review_status", "pending")
    pipeline_note = resolve_value(args, config, "pipeline_note", "Erzeugt mit dem lokalen Codex-Exporter.")
    findings_points = int(resolve_value(args, config, "findings_points", 0))
    area_features = int(resolve_value(args, config, "area_features", 0))
    payload = {
        "schema_version": SCHEMA_VERSION,
        "exported_at": iso_now(),
        "project": {
            "id": project_id,
            "name": name,
            "location": location,
            "scope": scope,
            "stage": stage,
            "note": note,
            "assigned_to": assigned_to,
            "created_by": created_by,
            "visibility": visibility,
            "htmlReady": html_ready,
            "pdfReady": pdf_ready,
        },
        "pipeline": {
            "mode": "local-desktop",
            "local_root": str(root),
            "master_image": master_image,
            "georef_status": georef_status,
            "analysis_status": analysis_status,
            "export_status": export_status,
            "review_status": review_status,
            "last_run_at": iso_now(),
            "note": pipeline_note,
        },
        "stats": {
            "images_total": tif_count,
            "images_georeferenced": georef_count,
            "findings_points": findings_points,
            "area_features": area_features,
            "artifacts": len(artifacts),
        },
        "artifacts": artifacts,
    }
    return payload


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Erzeugt ein uxopro.local-package.v1 Manifest fuer die Web-App."
    )
    parser.add_argument("--root", default=".", help="Projektordner mit lokalen Dateien")
    parser.add_argument("--config", default="", help=f"Optionale Konfigurationsdatei, Standard: <root>/{DEFAULT_CONFIG_NAME}")
    parser.add_argument("--name", default="", help="Projektname")
    parser.add_argument("--location", default="", help="Ort")
    parser.add_argument("--scope", default="", help="Bereich / Flurstück / Untersuchungsraum")
    parser.add_argument("--stage", default=DEFAULT_STAGE, help="Workflow-Stufe fuer die App")
    parser.add_argument("--project-id", default="", help="Optionale Projekt-ID")
    parser.add_argument("--assigned-to", default="", help="Gutachter oder Bearbeiter")
    parser.add_argument("--created-by", default="", help="Antragsteller / Ersteller")
    parser.add_argument("--visibility", default="internal", choices=["internal", "private", "public"], help="Sichtbarkeit in der App")
    parser.add_argument("--master-image", default=DEFAULT_MASTER_IMAGE, help="Masterbild fuer Georeferenzierung")
    parser.add_argument("--georef-status", default="in_progress", help="Status der Georeferenzierung")
    parser.add_argument("--analysis-status", default="pending", help="Status der Analyse")
    parser.add_argument("--export-status", default="pending", help="Status der Exporte")
    parser.add_argument("--review-status", default="pending", help="Status des Reviews")
    parser.add_argument("--findings-points", type=int, default=0, help="Anzahl kartierter Punktbefunde")
    parser.add_argument("--area-features", type=int, default=0, help="Anzahl Verdachtsflaechen")
    parser.add_argument("--note", default="Lokales QGIS-/Analyseprojekt fuer die App freigeben.", help="Projektnotiz")
    parser.add_argument("--pipeline-note", default="Erzeugt mit dem lokalen Codex-Exporter.", help="Notiz zur lokalen Pipeline")
    parser.add_argument("--out", default="", help="Ausgabedatei, Standard: <root>/uxopro-project-package.json")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    payload = build_payload(args)
    root = Path(args.root).expanduser().resolve()
    out_path = Path(args.out).expanduser().resolve() if args.out else root / "uxopro-project-package.json"
    out_path.write_text(json.dumps(payload, indent=2, ensure_ascii=True) + "\n", encoding="utf-8")
    print(f"Paket geschrieben: {out_path}")
    print(f"Artefakte: {len(payload['artifacts'])}")
    print(f"TIFFs: {payload['stats']['images_total']}")
    print(f"Georeferenzierungs-/GIS-Dateien: {payload['stats']['images_georeferenced']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
