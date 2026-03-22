# Projekt-Template

Dieses Template definiert die lokale Standardstruktur für ein Gutachtenprojekt.

## Ordner
- `inputs/`: Original-TIFFs und sonstige Eingangsdateien
- `qgis/`: QGIS-Projekt, GCP-Dateien, Georeferenzierung
- `handoff/`: Übergabedateien aus der Web-App und Analyse-Jobs für den lokalen Worker
- `exports/`: HTML, PDF, GeoJSON und sonstige freizugebende Ausgaben
- `preview/`: kleine Vorschauen für App und Review
- `notes/`: Methodik, Beobachtungen, To-dos
- `archive/`: ältere Zwischenstände, nicht mehr aktive Ausgaben

## Dateien
- `uxopro-export.config.json`: Metadaten für den Paketexport
- `handoff/web-calibration.json`: aus der App exportierter Web-Kalibrierstand
- `handoff/analysis-job.json`: lokaler Arbeitsauftrag für QGIS/Codex
- `exports/analysis-summary.json`: maschinenlesbare Zusammenfassung des Analyse-Runs
- `uxopro-project-package.json`: von Codex/Exporter erzeugtes Importpaket für die App
