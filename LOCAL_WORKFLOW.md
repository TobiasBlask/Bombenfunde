# Lokaler Fachworkflow + Web-App

## Zielbild
Die schwere Facharbeit bleibt lokal. Die Web-App ist Projekt-, Review- und Freigabelayer.

## Allgemeiner Projektordner
Lokale Fachprojekte liegen gesammelt unter:
- [projects](/Users/tobias-benediktblask/Downloads/Weinsberg/projects)

Jedes Gutachten bekommt darunter seinen eigenen Unterordner.

## Lokal
- Original-TIFFs verwalten
- Bilder in QGIS georeferenzieren
- Zeitvergleich und Befundkartierung durchführen
- Derivate erzeugen:
  - `report.html`
  - `report.pdf`
  - `findings.geojson`
  - `areas.geojson`
  - `preview/*.png`
  - optionale `cog/*.tif`

## Web-App
- Projekte anlegen
- Paketimport aus lokalem Workflow
- Status und Rollen steuern
- Artefakte prüfen
- Gutachten freigeben

## Minimales Projektpaket
Die App importiert ein JSON-Manifest. Darin stehen nur Metadaten und Artefaktpfade, nicht die schweren TIFFs selbst.

Beispielstruktur:

```text
projects/
  _template/
  weinsberg-baufeld-nord/
    inputs/
      *.tif
    qgis/
      weinsberg.qgz
    exports/
      report.html
      report.pdf
      findings.geojson
      areas.geojson
    preview/
      master.png
      series-1945-03-19.png
    uxopro-export.config.json
    uxopro-project-package.json
```

## Importlogik
- `project`: Stammdaten fuer Name, Ort, Bereich und Workflow-Stufe
- `pipeline`: lokaler Bearbeitungsstand
- `stats`: Umfang der Bildserie und der Befunde
- `artifacts`: ausgabefaehige Dateien fuer Review, QGIS oder Freigabe

## Empfehlung
- TIFFs bleiben lokal oder in separatem Archiv-Storage
- Die App bekommt nur kleine bis mittlere Derivate
- Die Freigabe basiert auf den importierten HTML/PDF/GeoJSON-Artefakten

## Codex als Startpunkt
Ja. Codex kann den Export direkt aus dem lokalen Projektordner fahren.

Der Exporter liegt hier:
- [tools/export_local_package.py](/Users/tobias-benediktblask/Downloads/Weinsberg/tools/export_local_package.py)
- Projektordner-Initializer:
  [tools/init_project.py](/Users/tobias-benediktblask/Downloads/Weinsberg/tools/init_project.py)

Optional kann jedes Projekt eine kleine Konfigurationsdatei bekommen:
- [uxopro-export.config.json](/Users/tobias-benediktblask/Downloads/Weinsberg/uxopro-export.config.json)

Minimaler Aufruf:

```bash
python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/init_project.py \
  --root /Users/tobias-benediktblask/Downloads/Weinsberg/projects \
  --name "Weinsberg - Baufeld Nord" \
  --location "Weinsberg" \
  --scope "Flst. 218/4"

python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/export_local_package.py \
  --root /Users/tobias-benediktblask/Downloads/Weinsberg/projects/weinsberg-baufeld-nord
```

Voraussetzung fuer den Minimalaufruf:
- Im Projektordner liegt eine `uxopro-export.config.json`.

Typischer Aufruf ohne Config:

```bash
python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/export_local_package.py \
  --root /PFAD/ZUM/PROJEKT \
  --name "Weinsberg - Baufeld Nord" \
  --location "Weinsberg" \
  --scope "Flst. 218/4, Bahnhofsnaehe" \
  --stage analysis \
  --assigned-to "gutachter@example.com" \
  --master-image "Historisch 1945-04-09" \
  --georef-status complete \
  --analysis-status in_review \
  --export-status html_ready \
  --review-status pending \
  --findings-points 63 \
  --area-features 9
```

Ergebnis:
- Der Exporter schreibt `uxopro-project-package.json` in den Projektordner.
- Diese Datei wird in der App ueber `Projektpaket importieren` eingelesen.

## Praktischer Codex-Ablauf
1. Codex arbeitet im lokalen Projektordner.
2. QGIS/Analyse erzeugt HTML, PDF, GeoJSON, Previews.
3. Codex fuehrt genau einen Export aus:

```bash
python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/export_local_package.py --root /Users/tobias-benediktblask/Downloads/Weinsberg/projects/<projekt-slug>
```

4. Die App importiert `uxopro-project-package.json`.
