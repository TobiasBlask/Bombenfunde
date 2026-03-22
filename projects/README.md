# Projektordner

Unter `projects/` liegt jedes Gutachten in einem eigenen Unterordner.

Beispiel:

```text
projects/
  _template/
  weinsberg-innenstadt-bahntrasse/
  heilbronn-baufeld-sued/
```

## Regel
- Ein Projektordner enthält alle lokalen Fachdaten für genau **ein** Gutachten.
- Original-TIFFs, QGIS, Previews, Exporte und Notizen bleiben zusammen.
- Die Web-App importiert später nur das Manifest `uxopro-project-package.json`.

## Standardstruktur pro Projekt

```text
<projekt>/
  inputs/
  qgis/
  exports/
  preview/
  notes/
  archive/
  uxopro-export.config.json
  uxopro-project-package.json
  README.md
```

## Erzeugung
Neue Projektordner werden mit dem Initializer erstellt:

```bash
python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/init_project.py \
  --root /Users/tobias-benediktblask/Downloads/Weinsberg/projects \
  --name "Weinsberg - Baufeld Nord" \
  --location "Weinsberg" \
  --scope "Flst. 218/4"
```
