#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
import shutil
from pathlib import Path

TEMPLATE_DIR = Path("/Users/tobias-benediktblask/Downloads/Weinsberg/projects/_template")


def slugify(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "projekt"


def write_text(path: Path, content: str) -> None:
    path.write_text(content.rstrip() + "\n", encoding="utf-8")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Legt einen neuen lokalen Projektordner unter projects/ an.")
    parser.add_argument("--root", default="/Users/tobias-benediktblask/Downloads/Weinsberg/projects", help="Allgemeiner Projektordner")
    parser.add_argument("--name", required=True, help="Projektname")
    parser.add_argument("--location", required=True, help="Ort")
    parser.add_argument("--scope", required=True, help="Bereich / Flurstück / Untersuchungsraum")
    parser.add_argument("--slug", default="", help="Optionaler Ordnername")
    parser.add_argument("--assigned-to", default="", help="Gutachter")
    parser.add_argument("--created-by", default="", help="Antragsteller / Ersteller")
    parser.add_argument("--stage", default="intake", help="Initiale Workflow-Stufe")
    parser.add_argument("--master-image", default="Historisch 1945-04-09", help="Vorgeschlagenes Masterbild")
    return parser.parse_args()


def build_config(args: argparse.Namespace) -> dict:
    return {
        "name": args.name,
        "location": args.location,
        "scope": args.scope,
        "stage": args.stage,
        "assigned_to": args.assigned_to,
        "created_by": args.created_by,
        "visibility": "internal",
        "master_image": args.master_image,
        "analysis_profile": "crater_v1",
        "georef_status": "pending",
        "web_calibration_status": "pending",
        "web_calibration_exported_at": "",
        "images_web_calibrated": 0,
        "analysis_status": "pending",
        "export_status": "pending",
        "review_status": "pending",
        "findings_points": 0,
        "area_features": 0,
        "note": "Lokales QGIS-/Analyseprojekt fuer die App freigeben.",
        "pipeline_note": "Projekt angelegt; lokaler Workflow kann starten."
    }


def build_readme(args: argparse.Namespace, slug: str) -> str:
    return f"""# {args.name}

## Stammdaten
- Ort: {args.location}
- Bereich: {args.scope}
- Ordner: {slug}
- Initiale Stage: {args.stage}

## Lokaler Ablauf
1. TIFFs nach `inputs/`
2. Web-Kalibrierung nach `handoff/web-calibration.json`
3. QGIS-Projekt nach `qgis/`
4. Exporte nach `exports/`
5. Previews nach `preview/`
6. Paket exportieren:

```bash
python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/import_web_calibration.py \
  --root . \
  --input handoff/web-calibration.json

python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/run_crater_analysis.py \
  --root . \
  --overwrite

python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/export_local_package.py --root .
```

## App
Die Web-App importiert spaeter `uxopro-project-package.json`.
"""


def main() -> int:
    args = parse_args()
    root = Path(args.root).expanduser().resolve()
    slug = args.slug or slugify(args.name)
    project_dir = root / slug

    if not TEMPLATE_DIR.exists():
        raise SystemExit(f"Template fehlt: {TEMPLATE_DIR}")
    if project_dir.exists():
        raise SystemExit(f"Projektordner existiert bereits: {project_dir}")

    root.mkdir(parents=True, exist_ok=True)
    shutil.copytree(TEMPLATE_DIR, project_dir)

    config_path = project_dir / "uxopro-export.config.json"
    readme_path = project_dir / "README.md"

    write_text(readme_path, build_readme(args, slug))
    write_text(config_path, json.dumps(build_config(args), indent=2, ensure_ascii=True))

    print(f"Projekt angelegt: {project_dir}")
    print(f"Config: {config_path}")
    print(f"README: {readme_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
