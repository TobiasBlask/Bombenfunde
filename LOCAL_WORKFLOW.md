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

## Was heute wirklich verkabelt ist
- Die App kann eine projektbezogene Web-Kalibrierung exportieren.
- Diese Datei wird lokal mit `tools/import_web_calibration.py` in den Projektordner uebernommen.
- Daraus entstehen lokal:
  - `handoff/web-calibration.json`
  - `handoff/analysis-job.json`
- Danach kann `tools/run_crater_analysis.py` eine erste generische Kandidatenanalyse fahren.
- Nach der lokalen Bearbeitung erzeugt `tools/export_local_package.py` das Rueckimport-Paket fuer die App.

## Was die App nicht selbst tut
- keine echte TIFF-Georeferenzierung
- keine automatische Bombenkrater-Erkennung im Browser
- keine multitemporale QGIS-Analyse

Diese Schritte bleiben lokal und gehoeren in den Worker-/Desktop-Prozess.

## Minimales Projektpaket
Die App importiert ein JSON-Manifest. Darin stehen nur Metadaten und Artefaktpfade, nicht die schweren TIFFs selbst.

Beispielstruktur:

```text
projects/
  _template/
  weinsberg-baufeld-nord/
    inputs/
      *.tif
    handoff/
      web-calibration.json
      analysis-job.json
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

## Echter Uebergang Web -> Lokal -> App

1. In der App ein Projekt oeffnen.
2. Masterbild und weitere historische Bilder online kalibrieren.
3. In der App `Web-Kalibrierung fuer lokalen Worker exportieren`.
4. Die exportierte Datei lokal in das Projekt uebernehmen:

```bash
python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/import_web_calibration.py \
  --root /Users/tobias-benediktblask/Downloads/Weinsberg/projects/<projekt-slug> \
  --input /PFAD/ZUR/<projekt-id>_web_calibration.json
```

5. Lokale Facharbeit fahren:
   - QGIS-Georeferenzierung
   - Bildvergleich
   - Befundkartierung
   - optional generischen Worker starten:

```bash
python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/run_crater_analysis.py \
  --root /Users/tobias-benediktblask/Downloads/Weinsberg/projects/<projekt-slug> \
  --overwrite
```

   - HTML/PDF/GeoJSON/Preview erzeugen

6. Rueckimport-Paket erzeugen:

```bash
python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/export_local_package.py \
  --root /Users/tobias-benediktblask/Downloads/Weinsberg/projects/<projekt-slug>
```

7. `uxopro-project-package.json` wieder in die App importieren.

## Codex als Startpunkt
Ja. Codex kann den Export direkt aus dem lokalen Projektordner fahren.

Der Exporter liegt hier:
- [tools/export_local_package.py](/Users/tobias-benediktblask/Downloads/Weinsberg/tools/export_local_package.py)
- [tools/import_web_calibration.py](/Users/tobias-benediktblask/Downloads/Weinsberg/tools/import_web_calibration.py)
- [tools/run_crater_analysis.py](/Users/tobias-benediktblask/Downloads/Weinsberg/tools/run_crater_analysis.py)
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
python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/import_web_calibration.py \
  --root /PFAD/ZUM/PROJEKT \
  --input /PFAD/ZUR/gut-weinsberg-002_web_calibration.json

python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/run_crater_analysis.py \
  --root /PFAD/ZUM/PROJEKT \
  --overwrite

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
- `tools/import_web_calibration.py` schreibt den Web-Handoff in `handoff/` und aktualisiert die Projekt-Config.
- `tools/run_crater_analysis.py` erzeugt erste Kandidaten als `exports/findings.auto.geojson`, `exports/areas.auto.geojson`, `exports/analysis-summary.json` und Analyse-Previews.
- Der Exporter schreibt `uxopro-project-package.json` in den Projektordner.
- Diese Datei wird in der App ueber `Projektpaket importieren` eingelesen.

## Praktischer Codex-Ablauf
1. Codex arbeitet im lokalen Projektordner.
2. App-Kalibrierung wird einmal lokal uebernommen:

```bash
python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/import_web_calibration.py \
  --root /Users/tobias-benediktblask/Downloads/Weinsberg/projects/<projekt-slug> \
  --input /PFAD/ZUR/<projekt-id>_web_calibration.json
```

3. Optional laeuft zuerst die generische Kandidatenanalyse:

```bash
python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/run_crater_analysis.py \
  --root /Users/tobias-benediktblask/Downloads/Weinsberg/projects/<projekt-slug> \
  --overwrite
```

4. QGIS/Analyse verfeinert oder ersetzt diese Ergebnisse.
5. Codex fuehrt genau einen Export aus:

```bash
python3 /Users/tobias-benediktblask/Downloads/Weinsberg/tools/export_local_package.py --root /Users/tobias-benediktblask/Downloads/Weinsberg/projects/<projekt-slug>
```

6. Die App importiert `uxopro-project-package.json`.
