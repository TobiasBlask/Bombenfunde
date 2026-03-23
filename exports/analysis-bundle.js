window.UXO_ANALYSIS_DATA = {
  "summary": {
    "schema_version": "uxopro.analysis-result.v1",
    "created_at": "2026-03-23T09:04:04Z",
    "profile": "crater_v1",
    "project_root": "/Users/tobias-benediktblask/Downloads/Weinsberg",
    "handoff": "handoff/web-calibration.json",
    "candidate_count": 153,
    "area_count": 153,
    "baseline_date": "1944-12-24",
    "images_processed": 3,
    "per_image": [
      {
        "image": "Historisch 1944-12-24",
        "date": "1944-12-24",
        "path": "1944-12-24 Weinsberg 106G-3896_3149 M900_preview.png",
        "candidate_count": 55,
        "preview": "preview/analysis/1944-12-24 Weinsberg 106G-3896_3149 M900_preview_analysis_preview.png"
      },
      {
        "image": "Historisch 1945-03-19",
        "date": "1945-03-19",
        "path": "1945-03-19 Weinsberg US34-3594_4160 M100_preview.png",
        "candidate_count": 73,
        "preview": "preview/analysis/1945-03-19 Weinsberg US34-3594_4160 M100_preview_analysis_preview.png"
      },
      {
        "image": "Historisch 1945-04-09",
        "date": "1945-04-09",
        "path": "1945-04-09 Weinsberg US34-3762_3166 M100_preview.png",
        "candidate_count": 50,
        "preview": "preview/analysis/1945-04-09 Weinsberg US34-3762_3166 M100_preview_analysis_preview.png"
      }
    ],
    "status_counts": {
      "candidate_high": 1,
      "candidate_medium": 107,
      "candidate_low": 45
    },
    "outputs": {
      "findings_geojson": "exports/findings.auto.geojson",
      "areas_geojson": "exports/areas.auto.geojson",
      "summary_json": "exports/analysis-summary.json",
      "bundle_js": "exports/analysis-bundle.js",
      "preview_dir": "preview/analysis"
    }
  },
  "findings": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_high",
          "score": 0.34,
          "support_count": 2,
          "radius_m": 10.4,
          "dates": "1945-03-19, 1945-04-09",
          "first_seen": "1945-03-19",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "ja",
          "interpretation": "Baseline-frei und in mehreren Bilddaten sichtbar.",
          "images": "Historisch 1945-03-19, Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3079, \"radius_m\": 15.4}, {\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3722, \"radius_m\": 5.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.266849154011918,
            49.15648592802174
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4368,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.4368, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.27835540689272,
            49.13916362386243
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4364,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.4364, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.277605352973875,
            49.13888396843686
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4357,
          "support_count": 1,
          "radius_m": 15.4,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.4357, \"radius_m\": 15.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.288956028904947,
            49.15750435352974
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4333,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.4333, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.2769618954975,
            49.138654466686305
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4312,
          "support_count": 2,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.4325, \"radius_m\": 9.6}, {\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.43, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.278026863147575,
            49.139034308321435
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4235,
          "support_count": 2,
          "radius_m": 5.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.4452, \"radius_m\": 5.3}, {\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.4018, \"radius_m\": 5.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.263049747091106,
            49.15394363137597
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4219,
          "support_count": 2,
          "radius_m": 7.5,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.4247, \"radius_m\": 5.3}, {\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.4191, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.263066033426218,
            49.15365821746921
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4211,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.4211, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.277276474708172,
            49.13876666754213
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4153,
          "support_count": 1,
          "radius_m": 21.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.4153, \"radius_m\": 21.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.288342688715952,
            49.14287138315801
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4153,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.4153, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.299330378543635,
            49.14962934707967
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4138,
          "support_count": 2,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.4361, \"radius_m\": 5.5}, {\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3915, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.274599570771187,
            49.13660914037961
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4078,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.4078, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.278755780433576,
            49.13930642492571
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.407,
          "support_count": 1,
          "radius_m": 5.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.407, \"radius_m\": 5.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.263435494163426,
            49.15368139829274
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4,
          "support_count": 2,
          "radius_m": 5.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.431, \"radius_m\": 5.3}, {\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.369, \"radius_m\": 5.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.262580937853853,
            49.15457135267612
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3989,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3989, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.279999798221233,
            49.13975012822948
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3971,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3971, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.271836516953863,
            49.13716770650362
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3971,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3971, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.279656620900502,
            49.13962772731809
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3963,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3963, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.275107691495277,
            49.13672826997273
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.393,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.393, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.279084658699277,
            49.13942372579911
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3929,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3929, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.301163730961646,
            49.14740785154744
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.39,
          "support_count": 1,
          "radius_m": 21.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.39, \"radius_m\": 21.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.288941956086715,
            49.1431093896535
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3898,
          "support_count": 1,
          "radius_m": 21.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3898, \"radius_m\": 21.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.294279826570316,
            49.155532096176586
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3838,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3838, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.262764923290717,
            49.1540853615235
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3833,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3833, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.271410968871596,
            49.13765542412452
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3794,
          "support_count": 1,
          "radius_m": 14.9,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3794, \"radius_m\": 14.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.294096639799887,
            49.15581859846107
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3777,
          "support_count": 1,
          "radius_m": 15.4,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3777, \"radius_m\": 15.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.289223039466371,
            49.157198405780996
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3765,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3765, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.270609937187327,
            49.13857348082269
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3759,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3759, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.296156969983324,
            49.149253325180666
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3744,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3744, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.271152302390217,
            49.1379518799333
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.372,
          "support_count": 2,
          "radius_m": 7.5,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3966, \"radius_m\": 9.6}, {\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3474, \"radius_m\": 5.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.298482311421337,
            49.15064519560154
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3708,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3708, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.272226618677042,
            49.1367428258995
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3707,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3707, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.28740508782657,
            49.163890118799245
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3706,
          "support_count": 1,
          "radius_m": 5.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3706, \"radius_m\": 5.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.265940913285158,
            49.15626123222987
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3691,
          "support_count": 2,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3701, \"radius_m\": 9.9}, {\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.368, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.25875205195863,
            49.15334129614518
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3683,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3683, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.27596096164536,
            49.13829746396321
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3671,
          "support_count": 2,
          "radius_m": 5.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3692, \"radius_m\": 5.3}, {\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3649, \"radius_m\": 5.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.269622779790227,
            49.15758615132529
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3668,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3668, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.264201683713175,
            49.145917934408004
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3623,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3623, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.263901296831573,
            49.14626220566982
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3582,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3582, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.262399362423569,
            49.147983561978876
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3574,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3574, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.276161942745969,
            49.1598397176209
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3572,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3572, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.28780726459144,
            49.15100360535669
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3561,
          "support_count": 1,
          "radius_m": 15.4,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3561, \"radius_m\": 15.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.288655642023345,
            49.15784854474708
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3551,
          "support_count": 2,
          "radius_m": 5.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3614, \"radius_m\": 5.3}, {\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3487, \"radius_m\": 5.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.300631575815217,
            49.14809071682019
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3543,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3543, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.285574905503056,
            49.1415242940847
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3531,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3531, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.267508015008337,
            49.15660954974987
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3527,
          "support_count": 1,
          "radius_m": 21.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3527, \"radius_m\": 21.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.263156284602557,
            49.15452823601247
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3521,
          "support_count": 1,
          "radius_m": 14.9,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3521, \"radius_m\": 14.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.27650824291273,
            49.13855333296585
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3518,
          "support_count": 1,
          "radius_m": 21.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3518, \"radius_m\": 21.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.274654209560865,
            49.1592709386408
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3516,
          "support_count": 2,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3524, \"radius_m\": 9.9}, {\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3508, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.268582656642323,
            49.15701067083432
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3516,
          "support_count": 1,
          "radius_m": 9.6,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3516, \"radius_m\": 9.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.26271301389661,
            49.15437018405938
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.351,
          "support_count": 2,
          "radius_m": 5.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3526, \"radius_m\": 5.3}, {\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3494, \"radius_m\": 5.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.300459258140888,
            49.148297424679406
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3508,
          "support_count": 1,
          "radius_m": 14.9,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3508, \"radius_m\": 14.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.280570467481935,
            49.139977936224845
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3503,
          "support_count": 1,
          "radius_m": 15.4,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3503, \"radius_m\": 15.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.261923892718176,
            49.1545252184547
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3492,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3492, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.264379737076153,
            49.155441887715405
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3474,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3474, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.26279153418566,
            49.147534096720406
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3462,
          "support_count": 1,
          "radius_m": 15.4,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3462, \"radius_m\": 15.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.261573057809894,
            49.15439426570318
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3461,
          "support_count": 1,
          "radius_m": 15.4,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3461, \"radius_m\": 15.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.287362309616453,
            49.15933047915509
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.346,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.346, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.259862737632018,
            49.15375587103947
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3456,
          "support_count": 1,
          "radius_m": 5.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3456, \"radius_m\": 5.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.29879895775431,
            49.15028907840778
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3453,
          "support_count": 1,
          "radius_m": 15.4,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3453, \"radius_m\": 15.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.26404352028905,
            49.15531639132852
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3434,
          "support_count": 1,
          "radius_m": 15.4,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3434, \"radius_m\": 15.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.264774426347973,
            49.15558920956087
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3434,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3434, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.29025160811562,
            49.15044573143438
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3427,
          "support_count": 2,
          "radius_m": 5.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3432, \"radius_m\": 5.3}, {\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3422, \"radius_m\": 5.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.300833772410598,
            49.147848166974214
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.34,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.34, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.274517076153419,
            49.13702755414796
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3399,
          "support_count": 1,
          "radius_m": 21.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3399, \"radius_m\": 21.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.275314551973318,
            49.15945785760169
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3398,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3398, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.288411578654808,
            49.15233207501543
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3386,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3386, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.266120822123401,
            49.14371842356866
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3359,
          "support_count": 1,
          "radius_m": 5.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3359, \"radius_m\": 5.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.299750069483048,
            49.14914814919042
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3354,
          "support_count": 1,
          "radius_m": 21.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.3354, \"radius_m\": 21.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.262761274597,
            49.154957652918796
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3346,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3346, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.28701677487493,
            49.15206486731651
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3344,
          "support_count": 1,
          "radius_m": 15.4,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3344, \"radius_m\": 15.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.263341850472486,
            49.15505448582546
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3337,
          "support_count": 1,
          "radius_m": 15.4,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3337, \"radius_m\": 15.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.263736539744302,
            49.155201807670934
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.333,
          "support_count": 2,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3354, \"radius_m\": 5.5}, {\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3306, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.282148801093069,
            49.15195837447179
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3304,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3304, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.293177174541412,
            49.15133519491188
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3267,
          "support_count": 1,
          "radius_m": 15.4,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3267, \"radius_m\": 15.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.26040360811562,
            49.153957756531405
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3241,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3241, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.270159356864925,
            49.1390898877154
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3232,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3232, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.289800644246803,
            49.150429478877314
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3226,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3226, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.291605075041687,
            49.151293321305985
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3223,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3223, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.290951694830461,
            49.1543071687087
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3209,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3209, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.285745445803222,
            49.152211380724445
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3182,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3182, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.292817548082269,
            49.15059246035952
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3181,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3181, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.287655576431352,
            49.15199912269463
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3175,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3175, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.289978323513063,
            49.15073667017777
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3167,
          "support_count": 2,
          "radius_m": 7.7,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3256, \"radius_m\": 5.5}, {\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3077, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.28954014600471,
            49.15077302157852
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3151,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3151, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.288454410227903,
            49.15092830322942
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3148,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3148, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.291627166759312,
            49.14718168028869
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3146,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3146, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.293028667593108,
            49.15095016430535
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3144,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3144, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.288790499166204,
            49.15087631099114
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3106,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3106, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.285240341300723,
            49.15239042676727
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3092,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3092, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.273792444135632,
            49.13676964922578
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3083,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3083, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.296033623123959,
            49.14901712373961
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3078,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3078, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.291556529738745,
            49.147662377161545
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3077,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3077, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.288244185658698,
            49.15181322940143
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.304,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.304, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.284384578654809,
            49.14688610413481
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3038,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3038, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.284805362423569,
            49.151378703438795
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3029,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3029, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.288043927737633,
            49.152042698904125
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3005,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3005, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.290530119510839,
            49.151614535535
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3002,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.3002, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.285698075597555,
            49.14731313556262
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2972,
          "support_count": 1,
          "radius_m": 21.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.2972, \"radius_m\": 21.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.295136093385214,
            49.1545271917834
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2881,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.2881, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.288532983324068,
            49.15277036700582
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2879,
          "support_count": 1,
          "radius_m": 9.9,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.2879, \"radius_m\": 9.9}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.291135200667036,
            49.15400807217895
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2838,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.2838, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.287777516953863,
            49.15028260997941
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2824,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.2824, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.291857403557533,
            49.15089315155323
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2797,
          "support_count": 1,
          "radius_m": 21.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.2797, \"radius_m\": 21.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.294462684269039,
            49.14505419465017
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.272,
          "support_count": 1,
          "radius_m": 22.1,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.272, \"radius_m\": 22.1}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.290047633129515,
            49.15421049778318
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2607,
          "support_count": 1,
          "radius_m": 21.3,
          "dates": "1945-04-09",
          "first_seen": "1945-04-09",
          "last_seen": "1945-04-09",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-04-09",
          "source_records": "[{\"image\": \"Historisch 1945-04-09\", \"date\": \"1945-04-09\", \"score\": 0.2607, \"radius_m\": 21.3}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.298957425236242,
            49.1499209644287
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2525,
          "support_count": 1,
          "radius_m": 5.5,
          "dates": "1945-03-19",
          "first_seen": "1945-03-19",
          "last_seen": "1945-03-19",
          "baseline_seen": "nein",
          "persistence": "nein",
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert.",
          "images": "Historisch 1945-03-19",
          "source_records": "[{\"image\": \"Historisch 1945-03-19\", \"date\": \"1945-03-19\", \"score\": 0.2525, \"radius_m\": 5.5}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.293515205669816,
            49.151081113774225
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4161,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.4161, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.27170775709314,
            49.15640855530263
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4149,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.4149, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.27179350129202,
            49.155318278585696
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4146,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.4146, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.271680116145063,
            49.1568332479461
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4138,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.4138, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.271661898247466,
            49.15711315900657
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4125,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.4125, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.272582514718666,
            49.1436497042919
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4121,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.4121, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.271821142253694,
            49.154893585928626
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4119,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.4119, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.271763975719324,
            49.15577192756028
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4074,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.4074, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.271852872070548,
            49.154178918924444
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4066,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.4066, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.2721496927754,
            49.14984553457313
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4053,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.4053, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.272190526014235,
            49.14921814769338
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4033,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.4033, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.272123936424752,
            49.150241270912666
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4024,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.4024, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.271997039282523,
            49.1521909962928
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4013,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.4013, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.271636770112849,
            49.157499243227896
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3928,
          "support_count": 1,
          "radius_m": 13.6,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3928, \"radius_m\": 13.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.272497408723455,
            49.14427585864731
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3925,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3925, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.271910027555919,
            49.15375504859751
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3925,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3925, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.272047604228277,
            49.15164123735039
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3856,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3856, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.293925764877716,
            49.14418585602278
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3823,
          "support_count": 1,
          "radius_m": 19.4,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3823, \"radius_m\": 19.4}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.2722508228523,
            49.1487460165029
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3603,
          "support_count": 1,
          "radius_m": 13.6,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3603, \"radius_m\": 13.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.27155070625179,
            49.158821581685956
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3445,
          "support_count": 1,
          "radius_m": 13.6,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3445, \"radius_m\": 13.6}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.271757373987958,
            49.156100510392264
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3398,
          "support_count": 1,
          "radius_m": 4.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3398, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.29081603465887,
            49.1581111248742
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3365,
          "support_count": 1,
          "radius_m": 4.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3365, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.2808844752078,
            49.157834333019
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3329,
          "support_count": 2,
          "radius_m": 4.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3402, \"radius_m\": 4.8}, {\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3255, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.291532396499699,
            49.15841152105159
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3322,
          "support_count": 1,
          "radius_m": 8.7,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3322, \"radius_m\": 8.7}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.273051238527302,
            49.158254217837346
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3318,
          "support_count": 1,
          "radius_m": 8.7,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3318, \"radius_m\": 8.7}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.273434295558554,
            49.158274563807765
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3263,
          "support_count": 2,
          "radius_m": 4.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3298, \"radius_m\": 4.8}, {\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3228, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.292112469983868,
            49.15816171016225
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3262,
          "support_count": 1,
          "radius_m": 8.7,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3262, \"radius_m\": 8.7}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.28694982244722,
            49.14392396521259
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3254,
          "support_count": 2,
          "radius_m": 6.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3416, \"radius_m\": 8.7}, {\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3092, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.274053528427922,
            49.15834065211358
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3252,
          "support_count": 2,
          "radius_m": 4.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3309, \"radius_m\": 4.8}, {\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3196, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.281345720462179,
            49.15782851938867
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3228,
          "support_count": 1,
          "radius_m": 4.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3228, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.291934104686655,
            49.15842271688088
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.321,
          "support_count": 1,
          "radius_m": 8.7,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.321, \"radius_m\": 8.7}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.287731975044192,
            49.14394573924152
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3206,
          "support_count": 2,
          "radius_m": 8.7,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3207, \"radius_m\": 8.7}, {\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3206, \"radius_m\": 8.7}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.288366569784172,
            49.14396340546712
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3198,
          "support_count": 1,
          "radius_m": 8.7,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3198, \"radius_m\": 8.7}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.28349717337623,
            49.14381817848592
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3196,
          "support_count": 1,
          "radius_m": 8.7,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3196, \"radius_m\": 8.7}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.282639347536351,
            49.14382330727188
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3172,
          "support_count": 1,
          "radius_m": 8.7,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3172, \"radius_m\": 8.7}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.28882403716072,
            49.14397614071588
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3171,
          "support_count": 1,
          "radius_m": 8.7,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3171, \"radius_m\": 8.7}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.278772229168142,
            49.143725321693445
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3152,
          "support_count": 2,
          "radius_m": 4.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3349, \"radius_m\": 4.8}, {\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.2954, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.290647930938697,
            49.1583092256372
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3145,
          "support_count": 2,
          "radius_m": 8.7,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3349, \"radius_m\": 8.7}, {\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.2941, \"radius_m\": 8.7}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.293088540789428,
            49.15829677540986
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3136,
          "support_count": 1,
          "radius_m": 8.7,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3136, \"radius_m\": 8.7}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.286476950874752,
            49.1439204710263
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3133,
          "support_count": 3,
          "radius_m": 4.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.33, \"radius_m\": 4.8}, {\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3058, \"radius_m\": 4.8}, {\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3041, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.28149609762858,
            49.15805944287569
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3111,
          "support_count": 1,
          "radius_m": 4.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3111, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.274538055823738,
            49.14358810871211
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3099,
          "support_count": 1,
          "radius_m": 4.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3099, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.274936510911967,
            49.143599201150295
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3051,
          "support_count": 1,
          "radius_m": 4.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3051, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.293065938769638,
            49.15943093949606
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3036,
          "support_count": 2,
          "radius_m": 4.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3061, \"radius_m\": 4.8}, {\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.3011, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.2741019144392,
            49.14357596713961
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate",
          "objektklasse": "bombenkrater_kandidat",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.2908,
          "support_count": 1,
          "radius_m": 4.8,
          "dates": "1944-12-24",
          "first_seen": "1944-12-24",
          "last_seen": "1944-12-24",
          "baseline_seen": "ja",
          "persistence": "nein",
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich.",
          "images": "Historisch 1944-12-24",
          "source_records": "[{\"image\": \"Historisch 1944-12-24\", \"date\": \"1944-12-24\", \"score\": 0.2908, \"radius_m\": 4.8}]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.273519153485614,
            49.14356941349604
          ]
        }
      }
    ]
  },
  "areas": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_high",
          "score": 0.34,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Baseline-frei und in mehreren Bilddaten sichtbar."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.267151340358954,
                49.15648592802174
              ],
              [
                9.267136550306402,
                49.15654699857399
              ],
              [
                9.267093627902138,
                49.156602091115076
              ],
              [
                9.26702677469015,
                49.156645812803234
              ],
              [
                9.26694253472862,
                49.156673883855
              ],
              [
                9.266849154011918,
                49.15668355648024
              ],
              [
                9.266755773295216,
                49.156673883855
              ],
              [
                9.266671533333687,
                49.156645812803234
              ],
              [
                9.266604680121699,
                49.156602091115076
              ],
              [
                9.266561757717435,
                49.15654699857399
              ],
              [
                9.266546967664883,
                49.15648592802174
              ],
              [
                9.266561757717435,
                49.15642485746949
              ],
              [
                9.266604680121699,
                49.1563697649284
              ],
              [
                9.266671533333687,
                49.15632604324024
              ],
              [
                9.266755773295216,
                49.156297972188476
              ],
              [
                9.266849154011918,
                49.156288299563236
              ],
              [
                9.26694253472862,
                49.156297972188476
              ],
              [
                9.26702677469015,
                49.15632604324024
              ],
              [
                9.267093627902138,
                49.1563697649284
              ],
              [
                9.267136550306402,
                49.15642485746949
              ],
              [
                9.267151340358954,
                49.15648592802174
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4368,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.278657487610857,
                49.13916362386243
              ],
              [
                9.278642702728153,
                49.13922469441468
              ],
              [
                9.278599795327366,
                49.13927978695577
              ],
              [
                9.278532965483842,
                49.139323508643926
              ],
              [
                9.278448754968297,
                49.13935157969569
              ],
              [
                9.27835540689272,
                49.13936125232093
              ],
              [
                9.278262058817143,
                49.13935157969569
              ],
              [
                9.278177848301597,
                49.139323508643926
              ],
              [
                9.278111018458073,
                49.13927978695577
              ],
              [
                9.278068111057287,
                49.13922469441468
              ],
              [
                9.278053326174582,
                49.13916362386243
              ],
              [
                9.278068111057287,
                49.13910255331018
              ],
              [
                9.278111018458073,
                49.13904746076909
              ],
              [
                9.278177848301597,
                49.139003739080934
              ],
              [
                9.278262058817143,
                49.13897566802917
              ],
              [
                9.27835540689272,
                49.13896599540393
              ],
              [
                9.278448754968297,
                49.13897566802917
              ],
              [
                9.278532965483842,
                49.139003739080934
              ],
              [
                9.278599795327366,
                49.13904746076909
              ],
              [
                9.278642702728153,
                49.13910255331018
              ],
              [
                9.278657487610857,
                49.13916362386243
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4364,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.277907431987547,
                49.13888396843686
              ],
              [
                9.277892647188263,
                49.13894503898911
              ],
              [
                9.27784974002958,
                49.139000131530196
              ],
              [
                9.277782910563138,
                49.139043853218354
              ],
              [
                9.277698700522745,
                49.13907192427012
              ],
              [
                9.277605352973875,
                49.13908159689536
              ],
              [
                9.277512005425006,
                49.13907192427012
              ],
              [
                9.277427795384613,
                49.139043853218354
              ],
              [
                9.27736096591817,
                49.139000131530196
              ],
              [
                9.277318058759487,
                49.13894503898911
              ],
              [
                9.277303273960204,
                49.13888396843686
              ],
              [
                9.277318058759487,
                49.13882289788461
              ],
              [
                9.27736096591817,
                49.13876780534352
              ],
              [
                9.277427795384613,
                49.13872408365536
              ],
              [
                9.277512005425006,
                49.138696012603596
              ],
              [
                9.277605352973875,
                49.138686339978356
              ],
              [
                9.277698700522745,
                49.138696012603596
              ],
              [
                9.277782910563138,
                49.13872408365536
              ],
              [
                9.27784974002958,
                49.13876780534352
              ],
              [
                9.277892647188263,
                49.13882289788461
              ],
              [
                9.277907431987547,
                49.13888396843686
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4357,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.289258221465351,
                49.15750435352974
              ],
              [
                9.289243431108696,
                49.15756542408199
              ],
              [
                9.289200507821889,
                49.157620516623076
              ],
              [
                9.289133653235305,
                49.157664238311234
              ],
              [
                9.289049411541685,
                49.157692309363
              ],
              [
                9.288956028904947,
                49.15770198198824
              ],
              [
                9.288862646268209,
                49.157692309363
              ],
              [
                9.288778404574588,
                49.157664238311234
              ],
              [
                9.288711549988005,
                49.157620516623076
              ],
              [
                9.288668626701197,
                49.15756542408199
              ],
              [
                9.288653836344542,
                49.15750435352974
              ],
              [
                9.288668626701197,
                49.15744328297749
              ],
              [
                9.288711549988005,
                49.1573881904364
              ],
              [
                9.288778404574588,
                49.15734446874824
              ],
              [
                9.288862646268209,
                49.157316397696476
              ],
              [
                9.288956028904947,
                49.15730672507124
              ],
              [
                9.289049411541685,
                49.157316397696476
              ],
              [
                9.289133653235305,
                49.15734446874824
              ],
              [
                9.289200507821889,
                49.1573881904364
              ],
              [
                9.289243431108696,
                49.15744328297749
              ],
              [
                9.289258221465351,
                49.15750435352974
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4333,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.277263973112406,
                49.138654466686305
              ],
              [
                9.277249188381584,
                49.138715537238554
              ],
              [
                9.277206281421579,
                49.13877062977964
              ],
              [
                9.27713945226459,
                49.1388143514678
              ],
              [
                9.277055242614127,
                49.138842422519566
              ],
              [
                9.2769618954975,
                49.138852095144806
              ],
              [
                9.276868548380873,
                49.138842422519566
              ],
              [
                9.27678433873041,
                49.1388143514678
              ],
              [
                9.276717509573421,
                49.13877062977964
              ],
              [
                9.276674602613417,
                49.138715537238554
              ],
              [
                9.276659817882594,
                49.138654466686305
              ],
              [
                9.276674602613417,
                49.138593396134056
              ],
              [
                9.276717509573421,
                49.138538303592966
              ],
              [
                9.27678433873041,
                49.13849458190481
              ],
              [
                9.276868548380873,
                49.13846651085304
              ],
              [
                9.2769618954975,
                49.1384568382278
              ],
              [
                9.277055242614127,
                49.13846651085304
              ],
              [
                9.27713945226459,
                49.13849458190481
              ],
              [
                9.277206281421579,
                49.138538303592966
              ],
              [
                9.277249188381584,
                49.138593396134056
              ],
              [
                9.277263973112406,
                49.138654466686305
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4312,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.278328943077547,
                49.139034308321435
              ],
              [
                9.278314158233417,
                49.139095378873684
              ],
              [
                9.278271250944583,
                49.13915047141477
              ],
              [
                9.278204421275426,
                49.13919419310293
              ],
              [
                9.278120210979596,
                49.1392222641547
              ],
              [
                9.278026863147575,
                49.139231936779936
              ],
              [
                9.277933515315555,
                49.1392222641547
              ],
              [
                9.277849305019725,
                49.13919419310293
              ],
              [
                9.277782475350568,
                49.13915047141477
              ],
              [
                9.277739568061733,
                49.139095378873684
              ],
              [
                9.277724783217604,
                49.139034308321435
              ],
              [
                9.277739568061733,
                49.138973237769186
              ],
              [
                9.277782475350568,
                49.1389181452281
              ],
              [
                9.277849305019725,
                49.13887442353994
              ],
              [
                9.277933515315555,
                49.13884635248817
              ],
              [
                9.278026863147575,
                49.13883667986293
              ],
              [
                9.278120210979596,
                49.13884635248817
              ],
              [
                9.278204421275426,
                49.13887442353994
              ],
              [
                9.278271250944583,
                49.1389181452281
              ],
              [
                9.278314158233417,
                49.138973237769186
              ],
              [
                9.278328943077547,
                49.139034308321435
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4235,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.26335191792923,
                49.15394363137597
              ],
              [
                9.263337128635738,
                49.154004701928216
              ],
              [
                9.263294208434353,
                49.154059794469305
              ],
              [
                9.263227358653428,
                49.15410351615746
              ],
              [
                9.263143123015292,
                49.15413158720923
              ],
              [
                9.263049747091106,
                49.15414125983447
              ],
              [
                9.26295637116692,
                49.15413158720923
              ],
              [
                9.262872135528784,
                49.15410351615746
              ],
              [
                9.26280528574786,
                49.154059794469305
              ],
              [
                9.262762365546473,
                49.154004701928216
              ],
              [
                9.262747576252982,
                49.15394363137597
              ],
              [
                9.262762365546473,
                49.15388256082372
              ],
              [
                9.26280528574786,
                49.15382746828263
              ],
              [
                9.262872135528784,
                49.15378374659447
              ],
              [
                9.26295637116692,
                49.153755675542705
              ],
              [
                9.263049747091106,
                49.153746002917465
              ],
              [
                9.263143123015292,
                49.153755675542705
              ],
              [
                9.263227358653428,
                49.15378374659447
              ],
              [
                9.263294208434353,
                49.15382746828263
              ],
              [
                9.263337128635738,
                49.15388256082372
              ],
              [
                9.26335191792923,
                49.15394363137597
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4219,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.263368202523353,
                49.15365821746921
              ],
              [
                9.263353413315071,
                49.153719288021456
              ],
              [
                9.263310493360976,
                49.153774380562545
              ],
              [
                9.263243643965213,
                49.1538181022507
              ],
              [
                9.263159408812408,
                49.15384617330247
              ],
              [
                9.263066033426218,
                49.15385584592771
              ],
              [
                9.26297265804003,
                49.15384617330247
              ],
              [
                9.262888422887224,
                49.1538181022507
              ],
              [
                9.262821573491461,
                49.153774380562545
              ],
              [
                9.262778653537366,
                49.153719288021456
              ],
              [
                9.262763864329084,
                49.15365821746921
              ],
              [
                9.262778653537366,
                49.15359714691696
              ],
              [
                9.262821573491461,
                49.15354205437587
              ],
              [
                9.262888422887224,
                49.15349833268771
              ],
              [
                9.26297265804003,
                49.153470261635945
              ],
              [
                9.263066033426218,
                49.153460589010706
              ],
              [
                9.263159408812408,
                49.153470261635945
              ],
              [
                9.263243643965213,
                49.15349833268771
              ],
              [
                9.263310493360976,
                49.15354205437587
              ],
              [
                9.263353413315071,
                49.15359714691696
              ],
              [
                9.263368202523353,
                49.15365821746921
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4211,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.277578553006917,
                49.13876666754213
              ],
              [
                9.277563768242624,
                49.13882773809438
              ],
              [
                9.277520861185488,
                49.13888283063547
              ],
              [
                9.277454031877213,
                49.138926552323625
              ],
              [
                9.277369822036116,
                49.13895462337539
              ],
              [
                9.277276474708172,
                49.13896429600063
              ],
              [
                9.277183127380228,
                49.13895462337539
              ],
              [
                9.277098917539131,
                49.138926552323625
              ],
              [
                9.277032088230856,
                49.13888283063547
              ],
              [
                9.27698918117372,
                49.13882773809438
              ],
              [
                9.276974396409427,
                49.13876666754213
              ],
              [
                9.27698918117372,
                49.13870559698988
              ],
              [
                9.277032088230856,
                49.13865050444879
              ],
              [
                9.277098917539131,
                49.13860678276063
              ],
              [
                9.277183127380228,
                49.13857871170887
              ],
              [
                9.277276474708172,
                49.13856903908363
              ],
              [
                9.277369822036116,
                49.13857871170887
              ],
              [
                9.277454031877213,
                49.13860678276063
              ],
              [
                9.277520861185488,
                49.13865050444879
              ],
              [
                9.277563768242624,
                49.13870559698988
              ],
              [
                9.277578553006917,
                49.13876666754213
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4153,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.288644792034933,
                49.14287138315801
              ],
              [
                9.288630006046064,
                49.14293245371026
              ],
              [
                9.288587095435066,
                49.14298754625135
              ],
              [
                9.288520260591518,
                49.143031267939506
              ],
              [
                9.288436043775574,
                49.14305933899127
              ],
              [
                9.288342688715952,
                49.14306901161651
              ],
              [
                9.28824933365633,
                49.14305933899127
              ],
              [
                9.288165116840386,
                49.143031267939506
              ],
              [
                9.288098281996838,
                49.14298754625135
              ],
              [
                9.28805537138584,
                49.14293245371026
              ],
              [
                9.28804058539697,
                49.14287138315801
              ],
              [
                9.28805537138584,
                49.14281031260576
              ],
              [
                9.288098281996838,
                49.14275522006467
              ],
              [
                9.288165116840386,
                49.142711498376514
              ],
              [
                9.28824933365633,
                49.14268342732475
              ],
              [
                9.288342688715952,
                49.14267375469951
              ],
              [
                9.288436043775574,
                49.14268342732475
              ],
              [
                9.288520260591518,
                49.142711498376514
              ],
              [
                9.288587095435066,
                49.14275522006467
              ],
              [
                9.288630006046064,
                49.14281031260576
              ],
              [
                9.288644792034933,
                49.14287138315801
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4153,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.2996325230681,
                49.14962934707967
              ],
              [
                9.29961773506249,
                49.149690417631916
              ],
              [
                9.299574818598684,
                49.149745510173005
              ],
              [
                9.299507974639177,
                49.14978923186116
              ],
              [
                9.299423746336451,
                49.14981730291293
              ],
              [
                9.299330378543635,
                49.14982697553817
              ],
              [
                9.299237010750819,
                49.14981730291293
              ],
              [
                9.299152782448093,
                49.14978923186116
              ],
              [
                9.299085938488586,
                49.149745510173005
              ],
              [
                9.29904302202478,
                49.149690417631916
              ],
              [
                9.29902823401917,
                49.14962934707967
              ],
              [
                9.29904302202478,
                49.14956827652742
              ],
              [
                9.299085938488586,
                49.14951318398633
              ],
              [
                9.299152782448093,
                49.14946946229817
              ],
              [
                9.299237010750819,
                49.149441391246405
              ],
              [
                9.299330378543635,
                49.149431718621166
              ],
              [
                9.299423746336451,
                49.149441391246405
              ],
              [
                9.299507974639177,
                49.14946946229817
              ],
              [
                9.299574818598684,
                49.14951318398633
              ],
              [
                9.29961773506249,
                49.14956827652742
              ],
              [
                9.2996325230681,
                49.14962934707967
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4138,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.274901635921038,
                49.13660914037961
              ],
              [
                9.274886851800298,
                49.13667021093186
              ],
              [
                9.274843946610826,
                49.13672530347295
              ],
              [
                9.274777120211501,
                49.13676902516111
              ],
              [
                9.2746929140359,
                49.136797096212874
              ],
              [
                9.274599570771187,
                49.13680676883811
              ],
              [
                9.274506227506475,
                49.136797096212874
              ],
              [
                9.274422021330873,
                49.13676902516111
              ],
              [
                9.274355194931548,
                49.13672530347295
              ],
              [
                9.274312289742076,
                49.13667021093186
              ],
              [
                9.274297505621336,
                49.13660914037961
              ],
              [
                9.274312289742076,
                49.13654806982736
              ],
              [
                9.274355194931548,
                49.136492977286274
              ],
              [
                9.274422021330873,
                49.136449255598116
              ],
              [
                9.274506227506475,
                49.13642118454635
              ],
              [
                9.274599570771187,
                49.13641151192111
              ],
              [
                9.2746929140359,
                49.13642118454635
              ],
              [
                9.274777120211501,
                49.136449255598116
              ],
              [
                9.274843946610826,
                49.136492977286274
              ],
              [
                9.274886851800298,
                49.13654806982736
              ],
              [
                9.274901635921038,
                49.13660914037961
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4078,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.279057862022078,
                49.13930642492571
              ],
              [
                9.279043077096775,
                49.139367495477956
              ],
              [
                9.279000169572363,
                49.139422588019045
              ],
              [
                9.278933339536287,
                49.1394663097072
              ],
              [
                9.278849128778111,
                49.13949438075897
              ],
              [
                9.278755780433576,
                49.13950405338421
              ],
              [
                9.27866243208904,
                49.13949438075897
              ],
              [
                9.278578221330864,
                49.1394663097072
              ],
              [
                9.278511391294789,
                49.139422588019045
              ],
              [
                9.278468483770377,
                49.139367495477956
              ],
              [
                9.278453698845073,
                49.13930642492571
              ],
              [
                9.278468483770377,
                49.13924535437346
              ],
              [
                9.278511391294789,
                49.13919026183237
              ],
              [
                9.278578221330864,
                49.13914654014421
              ],
              [
                9.27866243208904,
                49.139118469092445
              ],
              [
                9.278755780433576,
                49.139108796467205
              ],
              [
                9.278849128778111,
                49.139118469092445
              ],
              [
                9.278933339536287,
                49.13914654014421
              ],
              [
                9.279000169572363,
                49.13919026183237
              ],
              [
                9.279043077096775,
                49.13924535437346
              ],
              [
                9.279057862022078,
                49.13930642492571
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.407,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.26373766340196,
                49.15368139829274
              ],
              [
                9.263722874186758,
                49.15374246884499
              ],
              [
                9.263679954212577,
                49.15379756138608
              ],
              [
                9.263613104785533,
                49.153841283074236
              ],
              [
                9.26352886959331,
                49.153869354126
              ],
              [
                9.263435494163426,
                49.15387902675124
              ],
              [
                9.263342118733542,
                49.153869354126
              ],
              [
                9.26325788354132,
                49.153841283074236
              ],
              [
                9.263191034114275,
                49.15379756138608
              ],
              [
                9.263148114140094,
                49.15374246884499
              ],
              [
                9.263133324924892,
                49.15368139829274
              ],
              [
                9.263148114140094,
                49.15362032774049
              ],
              [
                9.263191034114275,
                49.1535652351994
              ],
              [
                9.26325788354132,
                49.153521513511244
              ],
              [
                9.263342118733542,
                49.15349344245948
              ],
              [
                9.263435494163426,
                49.15348376983424
              ],
              [
                9.26352886959331,
                49.15349344245948
              ],
              [
                9.263613104785533,
                49.153521513511244
              ],
              [
                9.263679954212577,
                49.1535652351994
              ],
              [
                9.263722874186758,
                49.15362032774049
              ],
              [
                9.26373766340196,
                49.15368139829274
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.4,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.262883112521097,
                49.15457135267612
              ],
              [
                9.262868323040195,
                49.15463242322837
              ],
              [
                9.262825402294922,
                49.15468751576946
              ],
              [
                9.262758551666876,
                49.15473123745762
              ],
              [
                9.2626743149613,
                49.154759308509384
              ],
              [
                9.262580937853853,
                49.15476898113462
              ],
              [
                9.262487560746406,
                49.154759308509384
              ],
              [
                9.26240332404083,
                49.15473123745762
              ],
              [
                9.262336473412784,
                49.15468751576946
              ],
              [
                9.262293552667511,
                49.15463242322837
              ],
              [
                9.26227876318661,
                49.15457135267612
              ],
              [
                9.262293552667511,
                49.15451028212387
              ],
              [
                9.262336473412784,
                49.154455189582784
              ],
              [
                9.26240332404083,
                49.154411467894626
              ],
              [
                9.262487560746406,
                49.15438339684286
              ],
              [
                9.262580937853853,
                49.15437372421762
              ],
              [
                9.2626743149613,
                49.15438339684286
              ],
              [
                9.262758551666876,
                49.154411467894626
              ],
              [
                9.262825402294922,
                49.154455189582784
              ],
              [
                9.262868323040195,
                49.15451028212387
              ],
              [
                9.262883112521097,
                49.15457135267612
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3989,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.28030188251413,
                49.13975012822948
              ],
              [
                9.280287097456464,
                49.13981119878173
              ],
              [
                9.28024418954792,
                49.13986629132282
              ],
              [
                9.280177358913548,
                49.139910013010976
              ],
              [
                9.280093147401471,
                49.13993808406274
              ],
              [
                9.279999798221233,
                49.13994775668798
              ],
              [
                9.279906449040995,
                49.13993808406274
              ],
              [
                9.279822237528919,
                49.139910013010976
              ],
              [
                9.279755406894546,
                49.13986629132282
              ],
              [
                9.279712498986003,
                49.13981119878173
              ],
              [
                9.279697713928336,
                49.13975012822948
              ],
              [
                9.279712498986003,
                49.13968905767723
              ],
              [
                9.279755406894546,
                49.13963396513614
              ],
              [
                9.279822237528919,
                49.139590243447984
              ],
              [
                9.279906449040995,
                49.13956217239622
              ],
              [
                9.279999798221233,
                49.13955249977098
              ],
              [
                9.280093147401471,
                49.13956217239622
              ],
              [
                9.280177358913548,
                49.139590243447984
              ],
              [
                9.28024418954792,
                49.13963396513614
              ],
              [
                9.280287097456464,
                49.13968905767723
              ],
              [
                9.28030188251413,
                49.13975012822948
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3971,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272139958546585,
                49.13716770650362
              ],
              [
                9.272125107057937,
                49.13722905464928
              ],
              [
                9.272082006359176,
                49.13728439761102
              ],
              [
                9.272014875446997,
                49.13732831803412
              ],
              [
                9.271930285562815,
                49.13735651668158
              ],
              [
                9.271836516953863,
                49.13736623327329
              ],
              [
                9.271742748344911,
                49.13735651668158
              ],
              [
                9.27165815846073,
                49.13732831803412
              ],
              [
                9.271591027548551,
                49.13728439761102
              ],
              [
                9.27154792684979,
                49.13722905464928
              ],
              [
                9.271533075361141,
                49.13716770650362
              ],
              [
                9.27154792684979,
                49.137106358357954
              ],
              [
                9.271591027548551,
                49.13705101539622
              ],
              [
                9.27165815846073,
                49.137007094973114
              ],
              [
                9.271742748344911,
                49.13697889632566
              ],
              [
                9.271836516953863,
                49.136969179733946
              ],
              [
                9.271930285562815,
                49.13697889632566
              ],
              [
                9.272014875446997,
                49.137007094973114
              ],
              [
                9.272082006359176,
                49.13705101539622
              ],
              [
                9.272125107057937,
                49.137106358357954
              ],
              [
                9.272139958546585,
                49.13716770650362
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3971,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.279958704447353,
                49.13962772731809
              ],
              [
                9.2799439194262,
                49.13968879787034
              ],
              [
                9.279901011623625,
                49.13974389041143
              ],
              [
                9.279834181154301,
                49.13978761209959
              ],
              [
                9.279749969850199,
                49.139815683151355
              ],
              [
                9.279656620900502,
                49.139825355776594
              ],
              [
                9.279563271950805,
                49.139815683151355
              ],
              [
                9.279479060646702,
                49.13978761209959
              ],
              [
                9.279412230177378,
                49.13974389041143
              ],
              [
                9.279369322374803,
                49.13968879787034
              ],
              [
                9.279354537353651,
                49.13962772731809
              ],
              [
                9.279369322374803,
                49.139566656765844
              ],
              [
                9.279412230177378,
                49.139511564224755
              ],
              [
                9.279479060646702,
                49.1394678425366
              ],
              [
                9.279563271950805,
                49.13943977148483
              ],
              [
                9.279656620900502,
                49.13943009885959
              ],
              [
                9.279749969850199,
                49.13943977148483
              ],
              [
                9.279834181154301,
                49.1394678425366
              ],
              [
                9.279901011623625,
                49.139511564224755
              ],
              [
                9.2799439194262,
                49.139566656765844
              ],
              [
                9.279958704447353,
                49.13962772731809
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3963,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.275409757371115,
                49.13672826997273
              ],
              [
                9.275394973214842,
                49.13678934052498
              ],
              [
                9.27535206792225,
                49.13684443306607
              ],
              [
                9.275285241362315,
                49.136888154754224
              ],
              [
                9.275201034984331,
                49.13691622580599
              ],
              [
                9.275107691495277,
                49.13692589843123
              ],
              [
                9.275014348006223,
                49.13691622580599
              ],
              [
                9.27493014162824,
                49.136888154754224
              ],
              [
                9.274863315068304,
                49.13684443306607
              ],
              [
                9.274820409775712,
                49.13678934052498
              ],
              [
                9.27480562561944,
                49.13672826997273
              ],
              [
                9.274820409775712,
                49.13666719942048
              ],
              [
                9.274863315068304,
                49.13661210687939
              ],
              [
                9.27493014162824,
                49.13656838519123
              ],
              [
                9.275014348006223,
                49.13654031413947
              ],
              [
                9.275107691495277,
                49.13653064151423
              ],
              [
                9.275201034984331,
                49.13654031413947
              ],
              [
                9.275285241362315,
                49.13656838519123
              ],
              [
                9.27535206792225,
                49.13661210687939
              ],
              [
                9.275394973214842,
                49.13666719942048
              ],
              [
                9.275409757371115,
                49.13672826997273
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.393,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.279386741002728,
                49.13942372579911
              ],
              [
                9.279371956042432,
                49.13948479635136
              ],
              [
                9.27932904841647,
                49.13953988889245
              ],
              [
                9.279262218222225,
                49.13958361058061
              ],
              [
                9.279178007264743,
                49.139611681632374
              ],
              [
                9.279084658699277,
                49.13962135425761
              ],
              [
                9.278991310133812,
                49.139611681632374
              ],
              [
                9.27890709917633,
                49.13958361058061
              ],
              [
                9.278840268982085,
                49.13953988889245
              ],
              [
                9.278797361356123,
                49.13948479635136
              ],
              [
                9.278782576395827,
                49.13942372579911
              ],
              [
                9.278797361356123,
                49.13936265524686
              ],
              [
                9.278840268982085,
                49.139307562705774
              ],
              [
                9.27890709917633,
                49.139263841017616
              ],
              [
                9.278991310133812,
                49.13923576996585
              ],
              [
                9.279084658699277,
                49.13922609734061
              ],
              [
                9.279178007264743,
                49.13923576996585
              ],
              [
                9.279262218222225,
                49.139263841017616
              ],
              [
                9.27932904841647,
                49.139307562705774
              ],
              [
                9.279371956042432,
                49.13936265524686
              ],
              [
                9.279386741002728,
                49.13942372579911
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3929,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.301465861939233,
                49.14740785154744
              ],
              [
                9.301451074596654,
                49.14746892209969
              ],
              [
                9.30140816005704,
                49.14752401464078
              ],
              [
                9.301341319094533,
                49.14756773632894
              ],
              [
                9.301257094568248,
                49.1475958073807
              ],
              [
                9.301163730961646,
                49.14760548000594
              ],
              [
                9.301070367355043,
                49.1475958073807
              ],
              [
                9.300986142828759,
                49.14756773632894
              ],
              [
                9.300919301866251,
                49.14752401464078
              ],
              [
                9.300876387326637,
                49.14746892209969
              ],
              [
                9.300861599984058,
                49.14740785154744
              ],
              [
                9.300876387326637,
                49.14734678099519
              ],
              [
                9.300919301866251,
                49.147291688454104
              ],
              [
                9.300986142828759,
                49.147247966765946
              ],
              [
                9.301070367355043,
                49.14721989571418
              ],
              [
                9.301163730961646,
                49.14721022308894
              ],
              [
                9.301257094568248,
                49.14721989571418
              ],
              [
                9.301341319094533,
                49.147247966765946
              ],
              [
                9.30140816005704,
                49.147291688454104
              ],
              [
                9.301451074596654,
                49.14734678099519
              ],
              [
                9.301465861939233,
                49.14740785154744
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.39,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.289244060856637,
                49.1431093896535
              ],
              [
                9.289229274796753,
                49.14317046020575
              ],
              [
                9.289186363979663,
                49.14322555274684
              ],
              [
                9.289119528815123,
                49.143269274435
              ],
              [
                9.289035311594702,
                49.143297345486765
              ],
              [
                9.288941956086715,
                49.143307018112004
              ],
              [
                9.288848600578728,
                49.143297345486765
              ],
              [
                9.288764383358307,
                49.143269274435
              ],
              [
                9.288697548193767,
                49.14322555274684
              ],
              [
                9.288654637376677,
                49.14317046020575
              ],
              [
                9.288639851316793,
                49.1431093896535
              ],
              [
                9.288654637376677,
                49.143048319101254
              ],
              [
                9.288697548193767,
                49.142993226560165
              ],
              [
                9.288764383358307,
                49.14294950487201
              ],
              [
                9.288848600578728,
                49.14292143382024
              ],
              [
                9.288941956086715,
                49.142911761195
              ],
              [
                9.289035311594702,
                49.14292143382024
              ],
              [
                9.289119528815123,
                49.14294950487201
              ],
              [
                9.289186363979663,
                49.142993226560165
              ],
              [
                9.289229274796753,
                49.143048319101254
              ],
              [
                9.289244060856637,
                49.1431093896535
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3898,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.294582007098382,
                49.155532096176586
              ],
              [
                9.29456721733063,
                49.155593166728835
              ],
              [
                9.29452429575289,
                49.155648259269924
              ],
              [
                9.294457443828243,
                49.15569198095808
              ],
              [
                9.294373205488858,
                49.15572005200985
              ],
              [
                9.294279826570316,
                49.15572972463509
              ],
              [
                9.294186447651773,
                49.15572005200985
              ],
              [
                9.294102209312388,
                49.15569198095808
              ],
              [
                9.294035357387742,
                49.155648259269924
              ],
              [
                9.29399243581,
                49.155593166728835
              ],
              [
                9.293977646042249,
                49.155532096176586
              ],
              [
                9.29399243581,
                49.15547102562434
              ],
              [
                9.294035357387742,
                49.15541593308325
              ],
              [
                9.294102209312388,
                49.15537221139509
              ],
              [
                9.294186447651773,
                49.155344140343324
              ],
              [
                9.294279826570316,
                49.155334467718085
              ],
              [
                9.294373205488858,
                49.155344140343324
              ],
              [
                9.294457443828243,
                49.15537221139509
              ],
              [
                9.29452429575289,
                49.15541593308325
              ],
              [
                9.29456721733063,
                49.15547102562434
              ],
              [
                9.294582007098382,
                49.155532096176586
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3838,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.263067094993389,
                49.1540853615235
              ],
              [
                9.263052305657583,
                49.15414643207575
              ],
              [
                9.263009385333397,
                49.15420152461684
              ],
              [
                9.262942535361207,
                49.154245246304995
              ],
              [
                9.262858299482062,
                49.15427331735676
              ],
              [
                9.262764923290717,
                49.154282989982
              ],
              [
                9.262671547099373,
                49.15427331735676
              ],
              [
                9.262587311220228,
                49.154245246304995
              ],
              [
                9.262520461248037,
                49.15420152461684
              ],
              [
                9.262477540923852,
                49.15414643207575
              ],
              [
                9.262462751588046,
                49.1540853615235
              ],
              [
                9.262477540923852,
                49.15402429097125
              ],
              [
                9.262520461248037,
                49.15396919843016
              ],
              [
                9.262587311220228,
                49.153925476742
              ],
              [
                9.262671547099373,
                49.15389740569024
              ],
              [
                9.262764923290717,
                49.153887733065
              ],
              [
                9.262858299482062,
                49.15389740569024
              ],
              [
                9.262942535361207,
                49.153925476742
              ],
              [
                9.263009385333397,
                49.15396919843016
              ],
              [
                9.263052305657583,
                49.15402429097125
              ],
              [
                9.263067094993389,
                49.1540853615235
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3833,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.271714413450143,
                49.13765542412452
              ],
              [
                9.271699561815357,
                49.13771677227018
              ],
              [
                9.271656460692492,
                49.13777211523192
              ],
              [
                9.271589329119754,
                49.13781603565502
              ],
              [
                9.271504738403218,
                49.13784423430248
              ],
              [
                9.271410968871596,
                49.13785395089419
              ],
              [
                9.271317199339974,
                49.13784423430248
              ],
              [
                9.271232608623437,
                49.13781603565502
              ],
              [
                9.2711654770507,
                49.13777211523192
              ],
              [
                9.271122375927835,
                49.13771677227018
              ],
              [
                9.271107524293049,
                49.13765542412452
              ],
              [
                9.271122375927835,
                49.13759407597885
              ],
              [
                9.2711654770507,
                49.13753873301712
              ],
              [
                9.271232608623437,
                49.137494812594014
              ],
              [
                9.271317199339974,
                49.13746661394656
              ],
              [
                9.271410968871596,
                49.137456897354845
              ],
              [
                9.271504738403218,
                49.13746661394656
              ],
              [
                9.271589329119754,
                49.137494812594014
              ],
              [
                9.271656460692492,
                49.13753873301712
              ],
              [
                9.271699561815357,
                49.13759407597885
              ],
              [
                9.271714413450143,
                49.13765542412452
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3794,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.294398822075763,
                49.15581859846107
              ],
              [
                9.29438403222247,
                49.155879669013316
              ],
              [
                9.29434111039647,
                49.155934761554406
              ],
              [
                9.294274258085151,
                49.15597848324256
              ],
              [
                9.294190019258533,
                49.15600655429433
              ],
              [
                9.294096639799887,
                49.15601622691957
              ],
              [
                9.294003260341242,
                49.15600655429433
              ],
              [
                9.293919021514624,
                49.15597848324256
              ],
              [
                9.293852169203305,
                49.155934761554406
              ],
              [
                9.293809247377306,
                49.155879669013316
              ],
              [
                9.293794457524012,
                49.15581859846107
              ],
              [
                9.293809247377306,
                49.15575752790882
              ],
              [
                9.293852169203305,
                49.15570243536773
              ],
              [
                9.293919021514624,
                49.15565871367957
              ],
              [
                9.294003260341242,
                49.155630642627806
              ],
              [
                9.294096639799887,
                49.155620970002566
              ],
              [
                9.294190019258533,
                49.155630642627806
              ],
              [
                9.294274258085151,
                49.15565871367957
              ],
              [
                9.29434111039647,
                49.15570243536773
              ],
              [
                9.29438403222247,
                49.15575752790882
              ],
              [
                9.294398822075763,
                49.15581859846107
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3777,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.289525230160166,
                49.157198405780996
              ],
              [
                9.289510439894867,
                49.157259476333245
              ],
              [
                9.289467516873193,
                49.157314568874334
              ],
              [
                9.289400662699563,
                49.15735829056249
              ],
              [
                9.289316421526296,
                49.15738636161426
              ],
              [
                9.289223039466371,
                49.1573960342395
              ],
              [
                9.289129657406447,
                49.15738636161426
              ],
              [
                9.28904541623318,
                49.15735829056249
              ],
              [
                9.28897856205955,
                49.157314568874334
              ],
              [
                9.288935639037875,
                49.157259476333245
              ],
              [
                9.288920848772577,
                49.157198405780996
              ],
              [
                9.288935639037875,
                49.15713733522875
              ],
              [
                9.28897856205955,
                49.15708224268766
              ],
              [
                9.28904541623318,
                49.1570385209995
              ],
              [
                9.289129657406447,
                49.157010449947734
              ],
              [
                9.289223039466371,
                49.157000777322494
              ],
              [
                9.289316421526296,
                49.157010449947734
              ],
              [
                9.289400662699563,
                49.1570385209995
              ],
              [
                9.289467516873193,
                49.15708224268766
              ],
              [
                9.289510439894867,
                49.15713733522875
              ],
              [
                9.289525230160166,
                49.157198405780996
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3765,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.27091338738647,
                49.13857348082269
              ],
              [
                9.270898535476592,
                49.13863482896836
              ],
              [
                9.27085543355538,
                49.138690171930094
              ],
              [
                9.270788300739188,
                49.1387340923532
              ],
              [
                9.270703708455809,
                49.13876229100065
              ],
              [
                9.270609937187327,
                49.138772007592365
              ],
              [
                9.270516165918846,
                49.13876229100065
              ],
              [
                9.270431573635467,
                49.1387340923532
              ],
              [
                9.270364440819275,
                49.138690171930094
              ],
              [
                9.270321338898063,
                49.13863482896836
              ],
              [
                9.270306486988185,
                49.13857348082269
              ],
              [
                9.270321338898063,
                49.13851213267703
              ],
              [
                9.270364440819275,
                49.13845678971529
              ],
              [
                9.270431573635467,
                49.13841286929219
              ],
              [
                9.270516165918846,
                49.13838467064473
              ],
              [
                9.270609937187327,
                49.13837495405302
              ],
              [
                9.270703708455809,
                49.13838467064473
              ],
              [
                9.270788300739188,
                49.13841286929219
              ],
              [
                9.27085543355538,
                49.13845678971529
              ],
              [
                9.270898535476592,
                49.13851213267703
              ],
              [
                9.27091338738647,
                49.13857348082269
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3759,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.296459112214656,
                49.149253325180666
              ],
              [
                9.29644432432128,
                49.149314395732915
              ],
              [
                9.29640140818319,
                49.149369488274004
              ],
              [
                9.296334564730996,
                49.14941320996216
              ],
              [
                9.296250337067525,
                49.14944128101393
              ],
              [
                9.296156969983324,
                49.14945095363917
              ],
              [
                9.296063602899123,
                49.14944128101393
              ],
              [
                9.295979375235651,
                49.14941320996216
              ],
              [
                9.295912531783458,
                49.149369488274004
              ],
              [
                9.295869615645367,
                49.149314395732915
              ],
              [
                9.295854827751992,
                49.149253325180666
              ],
              [
                9.295869615645367,
                49.14919225462842
              ],
              [
                9.295912531783458,
                49.14913716208733
              ],
              [
                9.295979375235651,
                49.14909344039917
              ],
              [
                9.296063602899123,
                49.149065369347404
              ],
              [
                9.296156969983324,
                49.149055696722165
              ],
              [
                9.296250337067525,
                49.149065369347404
              ],
              [
                9.296334564730996,
                49.14909344039917
              ],
              [
                9.29640140818319,
                49.14913716208733
              ],
              [
                9.29644432432128,
                49.14919225462842
              ],
              [
                9.296459112214656,
                49.149253325180666
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3744,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.271455748783717,
                49.1379518799333
              ],
              [
                9.271440897060101,
                49.13801322807896
              ],
              [
                9.27139779567944,
                49.1380685710407
              ],
              [
                9.271330663705177,
                49.1381124914638
              ],
              [
                9.27124607248269,
                49.13814069011126
              ],
              [
                9.271152302390217,
                49.13815040670297
              ],
              [
                9.271058532297744,
                49.13814069011126
              ],
              [
                9.270973941075257,
                49.1381124914638
              ],
              [
                9.270906809100994,
                49.1380685710407
              ],
              [
                9.270863707720332,
                49.13801322807896
              ],
              [
                9.270848855996716,
                49.1379518799333
              ],
              [
                9.270863707720332,
                49.13789053178763
              ],
              [
                9.270906809100994,
                49.137835188825896
              ],
              [
                9.270973941075257,
                49.13779126840279
              ],
              [
                9.271058532297744,
                49.13776306975534
              ],
              [
                9.271152302390217,
                49.137753353163625
              ],
              [
                9.27124607248269,
                49.13776306975534
              ],
              [
                9.271330663705177,
                49.13779126840279
              ],
              [
                9.27139779567944,
                49.137835188825896
              ],
              [
                9.271440897060101,
                49.13789053178763
              ],
              [
                9.271455748783717,
                49.1379518799333
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.372,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.298784462141093,
                49.15064519560154
              ],
              [
                9.298769673832265,
                49.15070626615379
              ],
              [
                9.298726756488483,
                49.15076135869488
              ],
              [
                9.29865991115838,
                49.15080508038304
              ],
              [
                9.298575681128604,
                49.1508331514348
              ],
              [
                9.298482311421337,
                49.15084282406004
              ],
              [
                9.29838894171407,
                49.1508331514348
              ],
              [
                9.298304711684294,
                49.15080508038304
              ],
              [
                9.29823786635419,
                49.15076135869488
              ],
              [
                9.298194949010409,
                49.15070626615379
              ],
              [
                9.29818016070158,
                49.15064519560154
              ],
              [
                9.298194949010409,
                49.15058412504929
              ],
              [
                9.29823786635419,
                49.1505290325082
              ],
              [
                9.298304711684294,
                49.150485310820045
              ],
              [
                9.29838894171407,
                49.15045723976828
              ],
              [
                9.298482311421337,
                49.15044756714304
              ],
              [
                9.298575681128604,
                49.15045723976828
              ],
              [
                9.29865991115838,
                49.150485310820045
              ],
              [
                9.298726756488483,
                49.1505290325082
              ],
              [
                9.298769673832265,
                49.15058412504929
              ],
              [
                9.298784462141093,
                49.15064519560154
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3708,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272530057668696,
                49.1367428258995
              ],
              [
                9.272515206307352,
                49.13680417404517
              ],
              [
                9.272472105978046,
                49.136859517006904
              ],
              [
                9.272404975641306,
                49.13690343743001
              ],
              [
                9.27232038648222,
                49.13693163607746
              ],
              [
                9.272226618677042,
                49.136941352669176
              ],
              [
                9.272132850871865,
                49.13693163607746
              ],
              [
                9.272048261712778,
                49.13690343743001
              ],
              [
                9.271981131376037,
                49.136859517006904
              ],
              [
                9.271938031046732,
                49.13680417404517
              ],
              [
                9.271923179685388,
                49.1367428258995
              ],
              [
                9.271938031046732,
                49.13668147775384
              ],
              [
                9.271981131376037,
                49.1366261347921
              ],
              [
                9.272048261712778,
                49.136582214369
              ],
              [
                9.272132850871865,
                49.13655401572154
              ],
              [
                9.272226618677042,
                49.13654429912983
              ],
              [
                9.27232038648222,
                49.13655401572154
              ],
              [
                9.272404975641306,
                49.136582214369
              ],
              [
                9.272472105978046,
                49.1366261347921
              ],
              [
                9.272515206307352,
                49.13668147775384
              ],
              [
                9.272530057668696,
                49.1367428258995
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3707,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.287707319354254,
                49.163890118799245
              ],
              [
                9.287692527090405,
                49.163951189351494
              ],
              [
                9.287649598268702,
                49.16400628189258
              ],
              [
                9.28758273506132,
                49.16405000358074
              ],
              [
                9.28749848250486,
                49.164078074632506
              ],
              [
                9.28740508782657,
                49.164087747257746
              ],
              [
                9.28731169314828,
                49.164078074632506
              ],
              [
                9.28722744059182,
                49.16405000358074
              ],
              [
                9.287160577384439,
                49.16400628189258
              ],
              [
                9.287117648562736,
                49.163951189351494
              ],
              [
                9.287102856298887,
                49.163890118799245
              ],
              [
                9.287117648562736,
                49.163829048246996
              ],
              [
                9.287160577384439,
                49.163773955705906
              ],
              [
                9.28722744059182,
                49.16373023401775
              ],
              [
                9.28731169314828,
                49.16370216296598
              ],
              [
                9.28740508782657,
                49.16369249034074
              ],
              [
                9.28749848250486,
                49.16370216296598
              ],
              [
                9.28758273506132,
                49.16373023401775
              ],
              [
                9.287649598268702,
                49.163773955705906
              ],
              [
                9.287692527090405,
                49.163829048246996
              ],
              [
                9.287707319354254,
                49.163890118799245
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3706,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.26624309826138,
                49.15626123222987
              ],
              [
                9.266228308275922,
                49.15632230278212
              ],
              [
                9.266185386066367,
                49.15637739532321
              ],
              [
                9.266118533157647,
                49.15642111701137
              ],
              [
                9.266034293578256,
                49.156449188063135
              ],
              [
                9.265940913285158,
                49.156458860688375
              ],
              [
                9.26584753299206,
                49.156449188063135
              ],
              [
                9.26576329341267,
                49.15642111701137
              ],
              [
                9.26569644050395,
                49.15637739532321
              ],
              [
                9.265653518294394,
                49.15632230278212
              ],
              [
                9.265638728308936,
                49.15626123222987
              ],
              [
                9.265653518294394,
                49.156200161677624
              ],
              [
                9.26569644050395,
                49.156145069136535
              ],
              [
                9.26576329341267,
                49.15610134744838
              ],
              [
                9.26584753299206,
                49.15607327639661
              ],
              [
                9.265940913285158,
                49.15606360377137
              ],
              [
                9.266034293578256,
                49.15607327639661
              ],
              [
                9.266118533157647,
                49.15610134744838
              ],
              [
                9.266185386066367,
                49.156145069136535
              ],
              [
                9.266228308275922,
                49.156200161677624
              ],
              [
                9.26624309826138,
                49.15626123222987
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3691,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.259054219122618,
                49.15334129614518
              ],
              [
                9.25903943000895,
                49.15340236669743
              ],
              [
                9.258996510329437,
                49.15345745923852
              ],
              [
                9.258929661361348,
                49.153501180926675
              ],
              [
                9.258845426747445,
                49.15352925197844
              ],
              [
                9.25875205195863,
                49.15353892460368
              ],
              [
                9.258658677169816,
                49.15352925197844
              ],
              [
                9.258574442555913,
                49.153501180926675
              ],
              [
                9.258507593587824,
                49.15345745923852
              ],
              [
                9.25846467390831,
                49.15340236669743
              ],
              [
                9.258449884794643,
                49.15334129614518
              ],
              [
                9.25846467390831,
                49.15328022559293
              ],
              [
                9.258507593587824,
                49.15322513305184
              ],
              [
                9.258574442555913,
                49.15318141136368
              ],
              [
                9.258658677169816,
                49.15315334031192
              ],
              [
                9.25875205195863,
                49.15314366768668
              ],
              [
                9.258845426747445,
                49.15315334031192
              ],
              [
                9.258929661361348,
                49.15318141136368
              ],
              [
                9.258996510329437,
                49.15322513305184
              ],
              [
                9.25903943000895,
                49.15328022559293
              ],
              [
                9.259054219122618,
                49.15334129614518
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3683,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.276263037084444,
                49.13829746396321
              ],
              [
                9.276248252460114,
                49.13835853451546
              ],
              [
                9.276205345809162,
                49.13841362705655
              ],
              [
                9.276138517133534,
                49.13845734874471
              ],
              [
                9.27605430808962,
                49.138485419796474
              ],
              [
                9.27596096164536,
                49.138495092421714
              ],
              [
                9.2758676152011,
                49.138485419796474
              ],
              [
                9.275783406157187,
                49.13845734874471
              ],
              [
                9.275716577481559,
                49.13841362705655
              ],
              [
                9.275673670830606,
                49.13835853451546
              ],
              [
                9.275658886206276,
                49.13829746396321
              ],
              [
                9.275673670830606,
                49.13823639341096
              ],
              [
                9.275716577481559,
                49.138181300869874
              ],
              [
                9.275783406157187,
                49.138137579181716
              ],
              [
                9.2758676152011,
                49.13810950812995
              ],
              [
                9.27596096164536,
                49.13809983550471
              ],
              [
                9.27605430808962,
                49.13810950812995
              ],
              [
                9.276138517133534,
                49.138137579181716
              ],
              [
                9.276205345809162,
                49.138181300869874
              ],
              [
                9.276248252460114,
                49.13823639341096
              ],
              [
                9.276263037084444,
                49.13829746396321
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3671,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.269924972849692,
                49.15758615132529
              ],
              [
                9.26991018246861,
                49.15764722187754
              ],
              [
                9.269867259110917,
                49.15770231441863
              ],
              [
                9.269800404413926,
                49.157746036106786
              ],
              [
                9.269716162581183,
                49.15777410715855
              ],
              [
                9.269622779790227,
                49.15778377978379
              ],
              [
                9.269529396999271,
                49.15777410715855
              ],
              [
                9.269445155166528,
                49.157746036106786
              ],
              [
                9.269378300469537,
                49.15770231441863
              ],
              [
                9.269335377111844,
                49.15764722187754
              ],
              [
                9.269320586730762,
                49.15758615132529
              ],
              [
                9.269335377111844,
                49.15752508077304
              ],
              [
                9.269378300469537,
                49.15746998823195
              ],
              [
                9.269445155166528,
                49.157426266543794
              ],
              [
                9.269529396999271,
                49.15739819549203
              ],
              [
                9.269622779790227,
                49.15738852286679
              ],
              [
                9.269716162581183,
                49.15739819549203
              ],
              [
                9.269800404413926,
                49.157426266543794
              ],
              [
                9.269867259110917,
                49.15746998823195
              ],
              [
                9.26991018246861,
                49.15752508077304
              ],
              [
                9.269924972849692,
                49.15758615132529
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3668,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.264505178887381,
                49.145917934408004
              ],
              [
                9.264490324776267,
                49.14597928255367
              ],
              [
                9.264447216466818,
                49.146034625515405
              ],
              [
                9.264380073700716,
                49.14607854593851
              ],
              [
                9.264295468879716,
                49.146106744585964
              ],
              [
                9.264201683713175,
                49.14611646117768
              ],
              [
                9.264107898546634,
                49.146106744585964
              ],
              [
                9.264023293725634,
                49.14607854593851
              ],
              [
                9.263956150959531,
                49.146034625515405
              ],
              [
                9.263913042650083,
                49.14597928255367
              ],
              [
                9.263898188538969,
                49.145917934408004
              ],
              [
                9.263913042650083,
                49.14585658626234
              ],
              [
                9.263956150959531,
                49.1458012433006
              ],
              [
                9.264023293725634,
                49.1457573228775
              ],
              [
                9.264107898546634,
                49.145729124230044
              ],
              [
                9.264201683713175,
                49.14571940763833
              ],
              [
                9.264295468879716,
                49.145729124230044
              ],
              [
                9.264380073700716,
                49.1457573228775
              ],
              [
                9.264447216466818,
                49.1458012433006
              ],
              [
                9.264490324776267,
                49.14585658626234
              ],
              [
                9.264505178887381,
                49.145917934408004
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3623,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.264204794114434,
                49.14626220566982
              ],
              [
                9.264189939900117,
                49.146323553815485
              ],
              [
                9.264146831291155,
                49.14637889677722
              ],
              [
                9.26407968805855,
                49.146422817200325
              ],
              [
                9.263995082649725,
                49.14645101584778
              ],
              [
                9.263901296831573,
                49.14646073243949
              ],
              [
                9.263807511013422,
                49.14645101584778
              ],
              [
                9.263722905604597,
                49.146422817200325
              ],
              [
                9.263655762371991,
                49.14637889677722
              ],
              [
                9.26361265376303,
                49.146323553815485
              ],
              [
                9.263597799548712,
                49.14626220566982
              ],
              [
                9.26361265376303,
                49.14620085752416
              ],
              [
                9.263655762371991,
                49.14614551456242
              ],
              [
                9.263722905604597,
                49.14610159413932
              ],
              [
                9.263807511013422,
                49.14607339549186
              ],
              [
                9.263901296831573,
                49.14606367890015
              ],
              [
                9.263995082649725,
                49.14607339549186
              ],
              [
                9.26407968805855,
                49.14610159413932
              ],
              [
                9.264146831291155,
                49.14614551456242
              ],
              [
                9.264189939900117,
                49.14620085752416
              ],
              [
                9.264204794114434,
                49.14626220566982
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3582,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.262702870250312,
                49.147983561978876
              ],
              [
                9.26268801551994,
                49.14804491012454
              ],
              [
                9.26264490541333,
                49.14810025308628
              ],
              [
                9.262577759848083,
                49.14814417350938
              ],
              [
                9.262493151499958,
                49.148172372156836
              ],
              [
                9.262399362423569,
                49.14818208874855
              ],
              [
                9.262305573347179,
                49.148172372156836
              ],
              [
                9.262220964999054,
                49.14814417350938
              ],
              [
                9.262153819433808,
                49.14810025308628
              ],
              [
                9.262110709327198,
                49.14804491012454
              ],
              [
                9.262095854596826,
                49.147983561978876
              ],
              [
                9.262110709327198,
                49.14792221383321
              ],
              [
                9.262153819433808,
                49.147866870871475
              ],
              [
                9.262220964999054,
                49.14782295044837
              ],
              [
                9.262305573347179,
                49.147794751800916
              ],
              [
                9.262399362423569,
                49.1477850352092
              ],
              [
                9.262493151499958,
                49.147794751800916
              ],
              [
                9.262577759848083,
                49.14782295044837
              ],
              [
                9.26264490541333,
                49.147866870871475
              ],
              [
                9.26268801551994,
                49.14792221383321
              ],
              [
                9.262702870250312,
                49.147983561978876
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3574,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.276464149555654,
                49.1598397176209
              ],
              [
                9.276449358501589,
                49.15990078817315
              ],
              [
                9.27640643319082,
                49.159955880714236
              ],
              [
                9.276339575451845,
                49.159999602402394
              ],
              [
                9.276255329785977,
                49.16002767345416
              ],
              [
                9.276161942745969,
                49.1600373460794
              ],
              [
                9.27606855570596,
                49.16002767345416
              ],
              [
                9.275984310040092,
                49.159999602402394
              ],
              [
                9.275917452301117,
                49.159955880714236
              ],
              [
                9.275874526990348,
                49.15990078817315
              ],
              [
                9.275859735936283,
                49.1598397176209
              ],
              [
                9.275874526990348,
                49.15977864706865
              ],
              [
                9.275917452301117,
                49.15972355452756
              ],
              [
                9.275984310040092,
                49.1596798328394
              ],
              [
                9.27606855570596,
                49.159651761787636
              ],
              [
                9.276161942745969,
                49.159642089162396
              ],
              [
                9.276255329785977,
                49.159651761787636
              ],
              [
                9.276339575451845,
                49.1596798328394
              ],
              [
                9.27640643319082,
                49.15972355452756
              ],
              [
                9.276449358501589,
                49.15977864706865
              ],
              [
                9.276464149555654,
                49.1598397176209
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3572,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.28810941749709,
                49.15100360535669
              ],
              [
                9.288094629081275,
                49.15106467590894
              ],
              [
                9.288051711427011,
                49.15111976845003
              ],
              [
                9.287984865613318,
                49.15116349013819
              ],
              [
                9.287900634974186,
                49.151191561189954
              ],
              [
                9.28780726459144,
                49.15120123381519
              ],
              [
                9.287713894208693,
                49.151191561189954
              ],
              [
                9.287629663569561,
                49.15116349013819
              ],
              [
                9.287562817755868,
                49.15111976845003
              ],
              [
                9.287519900101604,
                49.15106467590894
              ],
              [
                9.287505111685789,
                49.15100360535669
              ],
              [
                9.287519900101604,
                49.15094253480444
              ],
              [
                9.287562817755868,
                49.150887442263354
              ],
              [
                9.287629663569561,
                49.150843720575196
              ],
              [
                9.287713894208693,
                49.15081564952343
              ],
              [
                9.28780726459144,
                49.15080597689819
              ],
              [
                9.287900634974186,
                49.15081564952343
              ],
              [
                9.287984865613318,
                49.150843720575196
              ],
              [
                9.288051711427011,
                49.150887442263354
              ],
              [
                9.288094629081275,
                49.15094253480444
              ],
              [
                9.28810941749709,
                49.15100360535669
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3561,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.288957836683725,
                49.15784854474708
              ],
              [
                9.28894304622429,
                49.15790961529933
              ],
              [
                9.288900122639202,
                49.15796470784042
              ],
              [
                9.288833267588037,
                49.15800842952858
              ],
              [
                9.288749025309011,
                49.158036500580344
              ],
              [
                9.288655642023345,
                49.158046173205584
              ],
              [
                9.288562258737679,
                49.158036500580344
              ],
              [
                9.288478016458653,
                49.15800842952858
              ],
              [
                9.288411161407488,
                49.15796470784042
              ],
              [
                9.2883682378224,
                49.15790961529933
              ],
              [
                9.288353447362965,
                49.15784854474708
              ],
              [
                9.2883682378224,
                49.15778747419483
              ],
              [
                9.288411161407488,
                49.157732381653744
              ],
              [
                9.288478016458653,
                49.15768865996559
              ],
              [
                9.288562258737679,
                49.15766058891382
              ],
              [
                9.288655642023345,
                49.15765091628858
              ],
              [
                9.288749025309011,
                49.15766058891382
              ],
              [
                9.288833267588037,
                49.15768865996559
              ],
              [
                9.288900122639202,
                49.157732381653744
              ],
              [
                9.28894304622429,
                49.15778747419483
              ],
              [
                9.288957836683725,
                49.15784854474708
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3551,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.3009337109568,
                49.14809071682019
              ],
              [
                9.300918923410421,
                49.14815178737244
              ],
              [
                9.300876008279355,
                49.14820687991353
              ],
              [
                9.300809166395638,
                49.14825060160169
              ],
              [
                9.300724940708564,
                49.148278672653454
              ],
              [
                9.300631575815217,
                49.148288345278694
              ],
              [
                9.30053821092187,
                49.148278672653454
              ],
              [
                9.300453985234796,
                49.14825060160169
              ],
              [
                9.30038714335108,
                49.14820687991353
              ],
              [
                9.300344228220013,
                49.14815178737244
              ],
              [
                9.300329440673634,
                49.14809071682019
              ],
              [
                9.300344228220013,
                49.14802964626794
              ],
              [
                9.30038714335108,
                49.147974553726854
              ],
              [
                9.300453985234796,
                49.147930832038696
              ],
              [
                9.30053821092187,
                49.14790276098693
              ],
              [
                9.300631575815217,
                49.14789308836169
              ],
              [
                9.300724940708564,
                49.14790276098693
              ],
              [
                9.300809166395638,
                49.147930832038696
              ],
              [
                9.300876008279355,
                49.147974553726854
              ],
              [
                9.300918923410421,
                49.14802964626794
              ],
              [
                9.3009337109568,
                49.14809071682019
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3543,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.285877000610247,
                49.1415242940847
              ],
              [
                9.285862215023291,
                49.141585364636946
              ],
              [
                9.285819305578691,
                49.141640457178035
              ],
              [
                9.285752472551852,
                49.14168417886619
              ],
              [
                9.285668258025096,
                49.14171224991796
              ],
              [
                9.285574905503056,
                49.1417219225432
              ],
              [
                9.285481552981016,
                49.14171224991796
              ],
              [
                9.28539733845426,
                49.14168417886619
              ],
              [
                9.285330505427421,
                49.141640457178035
              ],
              [
                9.28528759598282,
                49.141585364636946
              ],
              [
                9.285272810395865,
                49.1415242940847
              ],
              [
                9.28528759598282,
                49.14146322353245
              ],
              [
                9.285330505427421,
                49.14140813099136
              ],
              [
                9.28539733845426,
                49.1413644093032
              ],
              [
                9.285481552981016,
                49.141336338251435
              ],
              [
                9.285574905503056,
                49.141326665626195
              ],
              [
                9.285668258025096,
                49.141336338251435
              ],
              [
                9.285752472551852,
                49.1413644093032
              ],
              [
                9.285819305578691,
                49.14140813099136
              ],
              [
                9.285862215023291,
                49.14146322353245
              ],
              [
                9.285877000610247,
                49.1415242940847
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3531,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.267810202109564,
                49.15660954974987
              ],
              [
                9.2677954120201,
                49.156670620302116
              ],
              [
                9.26775248950871,
                49.156725712843205
              ],
              [
                9.26768563612987,
                49.15676943453136
              ],
              [
                9.267601395958097,
                49.15679750558313
              ],
              [
                9.267508015008337,
                49.15680717820837
              ],
              [
                9.267414634058577,
                49.15679750558313
              ],
              [
                9.267330393886803,
                49.15676943453136
              ],
              [
                9.267263540507964,
                49.156725712843205
              ],
              [
                9.267220617996575,
                49.156670620302116
              ],
              [
                9.26720582790711,
                49.15660954974987
              ],
              [
                9.267220617996575,
                49.15654847919762
              ],
              [
                9.267263540507964,
                49.15649338665653
              ],
              [
                9.267330393886803,
                49.15644966496837
              ],
              [
                9.267414634058577,
                49.156421593916605
              ],
              [
                9.267508015008337,
                49.156411921291365
              ],
              [
                9.267601395958097,
                49.156421593916605
              ],
              [
                9.26768563612987,
                49.15644966496837
              ],
              [
                9.26775248950871,
                49.15649338665653
              ],
              [
                9.2677954120201,
                49.15654847919762
              ],
              [
                9.267810202109564,
                49.15660954974987
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3527,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.263458459006783,
                49.15452823601247
              ],
              [
                9.263443669538754,
                49.154589306564716
              ],
              [
                9.263400748830842,
                49.154644399105806
              ],
              [
                9.263333898260981,
                49.15468812079396
              ],
              [
                9.263249661628729,
                49.15471619184573
              ],
              [
                9.263156284602557,
                49.15472586447097
              ],
              [
                9.263062907576385,
                49.15471619184573
              ],
              [
                9.262978670944133,
                49.15468812079396
              ],
              [
                9.262911820374272,
                49.154644399105806
              ],
              [
                9.26286889966636,
                49.154589306564716
              ],
              [
                9.262854110198331,
                49.15452823601247
              ],
              [
                9.26286889966636,
                49.15446716546022
              ],
              [
                9.262911820374272,
                49.15441207291913
              ],
              [
                9.262978670944133,
                49.15436835123097
              ],
              [
                9.263062907576385,
                49.154340280179206
              ],
              [
                9.263156284602557,
                49.154330607553966
              ],
              [
                9.263249661628729,
                49.154340280179206
              ],
              [
                9.263333898260981,
                49.15436835123097
              ],
              [
                9.263400748830842,
                49.15441207291913
              ],
              [
                9.263443669538754,
                49.15446716546022
              ],
              [
                9.263458459006783,
                49.15452823601247
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3521,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.276810319911252,
                49.13855333296585
              ],
              [
                9.276795535210598,
                49.1386144035181
              ],
              [
                9.276752628338144,
                49.13866949605919
              ],
              [
                9.276685799317518,
                49.138713217747345
              ],
              [
                9.276601589838883,
                49.13874128879911
              ],
              [
                9.27650824291273,
                49.13875096142435
              ],
              [
                9.276414895986576,
                49.13874128879911
              ],
              [
                9.276330686507942,
                49.138713217747345
              ],
              [
                9.276263857487315,
                49.13866949605919
              ],
              [
                9.276220950614862,
                49.1386144035181
              ],
              [
                9.276206165914207,
                49.13855333296585
              ],
              [
                9.276220950614862,
                49.1384922624136
              ],
              [
                9.276263857487315,
                49.13843716987251
              ],
              [
                9.276330686507942,
                49.13839344818435
              ],
              [
                9.276414895986576,
                49.13836537713259
              ],
              [
                9.27650824291273,
                49.13835570450735
              ],
              [
                9.276601589838883,
                49.13836537713259
              ],
              [
                9.276685799317518,
                49.13839344818435
              ],
              [
                9.276752628338144,
                49.13843716987251
              ],
              [
                9.276795535210598,
                49.1384922624136
              ],
              [
                9.276810319911252,
                49.13855333296585
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3518,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.27495641289996,
                49.1592709386408
              ],
              [
                9.274941622015758,
                49.15933200919305
              ],
              [
                9.274898697197951,
                49.15938710173414
              ],
              [
                9.27483184022678,
                49.1594308234223
              ],
              [
                9.274747595528403,
                49.159458894474064
              ],
              [
                9.274654209560865,
                49.1594685670993
              ],
              [
                9.274560823593326,
                49.159458894474064
              ],
              [
                9.27447657889495,
                49.1594308234223
              ],
              [
                9.274409721923778,
                49.15938710173414
              ],
              [
                9.274366797105971,
                49.15933200919305
              ],
              [
                9.274352006221768,
                49.1592709386408
              ],
              [
                9.274366797105971,
                49.15920986808855
              ],
              [
                9.274409721923778,
                49.159154775547464
              ],
              [
                9.27447657889495,
                49.159111053859306
              ],
              [
                9.274560823593326,
                49.15908298280754
              ],
              [
                9.274654209560865,
                49.1590733101823
              ],
              [
                9.274747595528403,
                49.15908298280754
              ],
              [
                9.27483184022678,
                49.159111053859306
              ],
              [
                9.274898697197951,
                49.159154775547464
              ],
              [
                9.274941622015758,
                49.15920986808855
              ],
              [
                9.27495641289996,
                49.1592709386408
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3516,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.268884846190748,
                49.15701067083432
              ],
              [
                9.268870055981509,
                49.15707174138657
              ],
              [
                9.268827133122521,
                49.157126833927656
              ],
              [
                9.268760279202283,
                49.157170555615814
              ],
              [
                9.268676038348309,
                49.15719862666758
              ],
              [
                9.268582656642323,
                49.15720829929282
              ],
              [
                9.268489274936337,
                49.15719862666758
              ],
              [
                9.268405034082363,
                49.157170555615814
              ],
              [
                9.268338180162125,
                49.157126833927656
              ],
              [
                9.268295257303137,
                49.15707174138657
              ],
              [
                9.268280467093899,
                49.15701067083432
              ],
              [
                9.268295257303137,
                49.15694960028207
              ],
              [
                9.268338180162125,
                49.15689450774098
              ],
              [
                9.268405034082363,
                49.15685078605282
              ],
              [
                9.268489274936337,
                49.156822715001056
              ],
              [
                9.268582656642323,
                49.156813042375816
              ],
              [
                9.268676038348309,
                49.156822715001056
              ],
              [
                9.268760279202283,
                49.15685078605282
              ],
              [
                9.268827133122521,
                49.15689450774098
              ],
              [
                9.268870055981509,
                49.15694960028207
              ],
              [
                9.268884846190748,
                49.15701067083432
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3516,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.263015187336704,
                49.15437018405938
              ],
              [
                9.263000397915862,
                49.15443125461163
              ],
              [
                9.262957477344894,
                49.15448634715272
              ],
              [
                9.262890626988332,
                49.15453006884088
              ],
              [
                9.262806390624847,
                49.15455813989264
              ],
              [
                9.26271301389661,
                49.15456781251788
              ],
              [
                9.262619637168372,
                49.15455813989264
              ],
              [
                9.262535400804888,
                49.15453006884088
              ],
              [
                9.262468550448325,
                49.15448634715272
              ],
              [
                9.262425629877358,
                49.15443125461163
              ],
              [
                9.262410840456516,
                49.15437018405938
              ],
              [
                9.262425629877358,
                49.15430911350713
              ],
              [
                9.262468550448325,
                49.15425402096604
              ],
              [
                9.262535400804888,
                49.154210299277885
              ],
              [
                9.262619637168372,
                49.15418222822612
              ],
              [
                9.26271301389661,
                49.15417255560088
              ],
              [
                9.262806390624847,
                49.15418222822612
              ],
              [
                9.262890626988332,
                49.154210299277885
              ],
              [
                9.262957477344894,
                49.15425402096604
              ],
              [
                9.263000397915862,
                49.15430911350713
              ],
              [
                9.263015187336704,
                49.15437018405938
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.351,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.300761394542972,
                49.148297424679406
              ],
              [
                9.300746606934899,
                49.148358495231655
              ],
              [
                9.300703691624793,
                49.148413587772744
              ],
              [
                9.300636849462213,
                49.1484573094609
              ],
              [
                9.300552623423751,
                49.14848538051267
              ],
              [
                9.300459258140888,
                49.14849505313791
              ],
              [
                9.300365892858025,
                49.14848538051267
              ],
              [
                9.300281666819563,
                49.1484573094609
              ],
              [
                9.300214824656983,
                49.148413587772744
              ],
              [
                9.300171909346878,
                49.148358495231655
              ],
              [
                9.300157121738804,
                49.148297424679406
              ],
              [
                9.300171909346878,
                49.14823635412716
              ],
              [
                9.300214824656983,
                49.14818126158607
              ],
              [
                9.300281666819563,
                49.14813753989791
              ],
              [
                9.300365892858025,
                49.148109468846144
              ],
              [
                9.300459258140888,
                49.148099796220905
              ],
              [
                9.300552623423751,
                49.148109468846144
              ],
              [
                9.300636849462213,
                49.14813753989791
              ],
              [
                9.300703691624793,
                49.14818126158607
              ],
              [
                9.300746606934899,
                49.14823635412716
              ],
              [
                9.300761394542972,
                49.148297424679406
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3508,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.28087255316336,
                49.139977936224845
              ],
              [
                9.280857768037732,
                49.140039006777094
              ],
              [
                9.280814859931963,
                49.14009409931818
              ],
              [
                9.280748028990404,
                49.14013782100634
              ],
              [
                9.280663817091252,
                49.14016589205811
              ],
              [
                9.280570467481935,
                49.14017556468335
              ],
              [
                9.280477117872618,
                49.14016589205811
              ],
              [
                9.280392905973466,
                49.14013782100634
              ],
              [
                9.280326075031907,
                49.14009409931818
              ],
              [
                9.280283166926138,
                49.140039006777094
              ],
              [
                9.28026838180051,
                49.139977936224845
              ],
              [
                9.280283166926138,
                49.139916865672596
              ],
              [
                9.280326075031907,
                49.13986177313151
              ],
              [
                9.280392905973466,
                49.13981805144335
              ],
              [
                9.280477117872618,
                49.13978998039158
              ],
              [
                9.280570467481935,
                49.139780307766344
              ],
              [
                9.280663817091252,
                49.13978998039158
              ],
              [
                9.280748028990404,
                49.13981805144335
              ],
              [
                9.280814859931963,
                49.13986177313151
              ],
              [
                9.280857768037732,
                49.139916865672596
              ],
              [
                9.28087255316336,
                49.139977936224845
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3503,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.262226067103995,
                49.1545252184547
              ],
              [
                9.262211277636867,
                49.15458628900695
              ],
              [
                9.262168356931568,
                49.15464138154804
              ],
              [
                9.26210150636578,
                49.1546851032362
              ],
              [
                9.262017269738658,
                49.15471317428796
              ],
              [
                9.261923892718176,
                49.1547228469132
              ],
              [
                9.261830515697694,
                49.15471317428796
              ],
              [
                9.261746279070572,
                49.1546851032362
              ],
              [
                9.261679428504785,
                49.15464138154804
              ],
              [
                9.261636507799485,
                49.15458628900695
              ],
              [
                9.261621718332357,
                49.1545252184547
              ],
              [
                9.261636507799485,
                49.15446414790245
              ],
              [
                9.261679428504785,
                49.15440905536136
              ],
              [
                9.261746279070572,
                49.154365333673205
              ],
              [
                9.261830515697694,
                49.15433726262144
              ],
              [
                9.261923892718176,
                49.1543275899962
              ],
              [
                9.262017269738658,
                49.15433726262144
              ],
              [
                9.26210150636578,
                49.154365333673205
              ],
              [
                9.262168356931568,
                49.15440905536136
              ],
              [
                9.262211277636867,
                49.15446414790245
              ],
              [
                9.262226067103995,
                49.1545252184547
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3492,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.264681917053908,
                49.155441887715405
              ],
              [
                9.264667127313091,
                49.155502958267654
              ],
              [
                9.264624205813517,
                49.15555805080874
              ],
              [
                9.264557354010615,
                49.1556017724969
              ],
              [
                9.26447311582464,
                49.15562984354867
              ],
              [
                9.264379737076153,
                49.155639516173906
              ],
              [
                9.264286358327666,
                49.15562984354867
              ],
              [
                9.264202120141691,
                49.1556017724969
              ],
              [
                9.264135268338789,
                49.15555805080874
              ],
              [
                9.264092346839215,
                49.155502958267654
              ],
              [
                9.264077557098398,
                49.155441887715405
              ],
              [
                9.264092346839215,
                49.155380817163156
              ],
              [
                9.264135268338789,
                49.15532572462207
              ],
              [
                9.264202120141691,
                49.15528200293391
              ],
              [
                9.264286358327666,
                49.15525393188214
              ],
              [
                9.264379737076153,
                49.155244259256904
              ],
              [
                9.26447311582464,
                49.15525393188214
              ],
              [
                9.264557354010615,
                49.15528200293391
              ],
              [
                9.264624205813517,
                49.15532572462207
              ],
              [
                9.264667127313091,
                49.155380817163156
              ],
              [
                9.264681917053908,
                49.155441887715405
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3474,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.26309503925918,
                49.147534096720406
              ],
              [
                9.26308018466356,
                49.14759544486607
              ],
              [
                9.263037074948016,
                49.14765078782781
              ],
              [
                9.26296992999187,
                49.14769470825091
              ],
              [
                9.262885322411256,
                49.147722906898366
              ],
              [
                9.26279153418566,
                49.14773262349008
              ],
              [
                9.262697745960063,
                49.147722906898366
              ],
              [
                9.262613138379448,
                49.14769470825091
              ],
              [
                9.262545993423302,
                49.14765078782781
              ],
              [
                9.262502883707759,
                49.14759544486607
              ],
              [
                9.262488029112138,
                49.147534096720406
              ],
              [
                9.262502883707759,
                49.14747274857474
              ],
              [
                9.262545993423302,
                49.147417405613005
              ],
              [
                9.262613138379448,
                49.1473734851899
              ],
              [
                9.262697745960063,
                49.147345286542446
              ],
              [
                9.26279153418566,
                49.147335569950734
              ],
              [
                9.262885322411256,
                49.147345286542446
              ],
              [
                9.26296992999187,
                49.1473734851899
              ],
              [
                9.263037074948016,
                49.147417405613005
              ],
              [
                9.26308018466356,
                49.14747274857474
              ],
              [
                9.26309503925918,
                49.147534096720406
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3462,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.261875231396887,
                49.15439426570318
              ],
              [
                9.261860441968857,
                49.15445533625543
              ],
              [
                9.261817521377024,
                49.15451042879652
              ],
              [
                9.261750670987961,
                49.15455415048468
              ],
              [
                9.261666434583526,
                49.154582221536444
              ],
              [
                9.261573057809894,
                49.15459189416168
              ],
              [
                9.261479681036262,
                49.154582221536444
              ],
              [
                9.261395444631827,
                49.15455415048468
              ],
              [
                9.261328594242764,
                49.15451042879652
              ],
              [
                9.261285673650931,
                49.15445533625543
              ],
              [
                9.2612708842229,
                49.15439426570318
              ],
              [
                9.261285673650931,
                49.15433319515093
              ],
              [
                9.261328594242764,
                49.154278102609844
              ],
              [
                9.261395444631827,
                49.154234380921686
              ],
              [
                9.261479681036262,
                49.15420630986992
              ],
              [
                9.261573057809894,
                49.15419663724468
              ],
              [
                9.261666434583526,
                49.15420630986992
              ],
              [
                9.261750670987961,
                49.154234380921686
              ],
              [
                9.261817521377024,
                49.154278102609844
              ],
              [
                9.261860441968857,
                49.15433319515093
              ],
              [
                9.261875231396887,
                49.15439426570318
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3461,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.28766451331885,
                49.15933047915509
              ],
              [
                9.287649722416868,
                49.15939154970734
              ],
              [
                9.287606797547456,
                49.159446642248426
              ],
              [
                9.287539940495911,
                49.159490363936584
              ],
              [
                9.287455695696258,
                49.15951843498835
              ],
              [
                9.287362309616453,
                49.15952810761359
              ],
              [
                9.287268923536649,
                49.15951843498835
              ],
              [
                9.287184678736995,
                49.159490363936584
              ],
              [
                9.28711782168545,
                49.159446642248426
              ],
              [
                9.287074896816039,
                49.15939154970734
              ],
              [
                9.287060105914057,
                49.15933047915509
              ],
              [
                9.287074896816039,
                49.15926940860284
              ],
              [
                9.28711782168545,
                49.15921431606175
              ],
              [
                9.287184678736995,
                49.15917059437359
              ],
              [
                9.287268923536649,
                49.159142523321826
              ],
              [
                9.287362309616453,
                49.15913285069659
              ],
              [
                9.287455695696258,
                49.159142523321826
              ],
              [
                9.287539940495911,
                49.15917059437359
              ],
              [
                9.287606797547456,
                49.15921431606175
              ],
              [
                9.287649722416868,
                49.15926940860284
              ],
              [
                9.28766451331885,
                49.15933047915509
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.346,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.260164907324825,
                49.15375587103947
              ],
              [
                9.260150118087388,
                49.15381694159172
              ],
              [
                9.260107198048683,
                49.15387203413281
              ],
              [
                9.260040348521139,
                49.15391575582097
              ],
              [
                9.25995611320228,
                49.153943826872734
              ],
              [
                9.259862737632018,
                49.15395349949797
              ],
              [
                9.259769362061755,
                49.153943826872734
              ],
              [
                9.259685126742896,
                49.15391575582097
              ],
              [
                9.259618277215353,
                49.15387203413281
              ],
              [
                9.259575357176647,
                49.15381694159172
              ],
              [
                9.25956056793921,
                49.15375587103947
              ],
              [
                9.259575357176647,
                49.15369480048722
              ],
              [
                9.259618277215353,
                49.153639707946134
              ],
              [
                9.259685126742896,
                49.153595986257976
              ],
              [
                9.259769362061755,
                49.15356791520621
              ],
              [
                9.259862737632018,
                49.15355824258097
              ],
              [
                9.25995611320228,
                49.15356791520621
              ],
              [
                9.260040348521139,
                49.153595986257976
              ],
              [
                9.260107198048683,
                49.153639707946134
              ],
              [
                9.260150118087388,
                49.15369480048722
              ],
              [
                9.260164907324825,
                49.15375587103947
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3456,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.299101106302196,
                49.15028907840778
              ],
              [
                9.299086318099667,
                49.15035014896003
              ],
              [
                9.299043401064376,
                49.15040524150112
              ],
              [
                9.29897655621476,
                49.15044896318928
              ],
              [
                9.298892326790432,
                49.15047703424104
              ],
              [
                9.29879895775431,
                49.15048670686628
              ],
              [
                9.298705588718187,
                49.15047703424104
              ],
              [
                9.29862135929386,
                49.15044896318928
              ],
              [
                9.298554514444243,
                49.15040524150112
              ],
              [
                9.298511597408952,
                49.15035014896003
              ],
              [
                9.298496809206423,
                49.15028907840778
              ],
              [
                9.298511597408952,
                49.15022800785553
              ],
              [
                9.298554514444243,
                49.15017291531444
              ],
              [
                9.29862135929386,
                49.150129193626285
              ],
              [
                9.298705588718187,
                49.15010112257452
              ],
              [
                9.29879895775431,
                49.15009144994928
              ],
              [
                9.298892326790432,
                49.15010112257452
              ],
              [
                9.29897655621476,
                49.150129193626285
              ],
              [
                9.299043401064376,
                49.15017291531444
              ],
              [
                9.299086318099667,
                49.15022800785553
              ],
              [
                9.299101106302196,
                49.15028907840778
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3453,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.264345699501225,
                49.15531639132852
              ],
              [
                9.264330909797877,
                49.15537746188077
              ],
              [
                9.264287988407046,
                49.15543255442186
              ],
              [
                9.264221136773516,
                49.155476276110015
              ],
              [
                9.26413689880096,
                49.15550434716178
              ],
              [
                9.26404352028905,
                49.15551401978702
              ],
              [
                9.26395014177714,
                49.15550434716178
              ],
              [
                9.263865903804584,
                49.155476276110015
              ],
              [
                9.263799052171054,
                49.15543255442186
              ],
              [
                9.263756130780223,
                49.15537746188077
              ],
              [
                9.263741341076875,
                49.15531639132852
              ],
              [
                9.263756130780223,
                49.15525532077627
              ],
              [
                9.263799052171054,
                49.15520022823518
              ],
              [
                9.263865903804584,
                49.15515650654702
              ],
              [
                9.26395014177714,
                49.15512843549526
              ],
              [
                9.26404352028905,
                49.15511876287002
              ],
              [
                9.26413689880096,
                49.15512843549526
              ],
              [
                9.264221136773516,
                49.15515650654702
              ],
              [
                9.264287988407046,
                49.15520022823518
              ],
              [
                9.264330909797877,
                49.15525532077627
              ],
              [
                9.264345699501225,
                49.15531639132852
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3434,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.265076607224458,
                49.15558920956087
              ],
              [
                9.265061817439653,
                49.15565028011312
              ],
              [
                9.265018895812425,
                49.15570537265421
              ],
              [
                9.264952043810695,
                49.15574909434237
              ],
              [
                9.264867805374182,
                49.155777165394134
              ],
              [
                9.264774426347973,
                49.155786838019374
              ],
              [
                9.264681047321764,
                49.155777165394134
              ],
              [
                9.264596808885251,
                49.15574909434237
              ],
              [
                9.264529956883521,
                49.15570537265421
              ],
              [
                9.264487035256293,
                49.15565028011312
              ],
              [
                9.264472245471488,
                49.15558920956087
              ],
              [
                9.264487035256293,
                49.155528139008624
              ],
              [
                9.264529956883521,
                49.155473046467534
              ],
              [
                9.264596808885251,
                49.15542932477938
              ],
              [
                9.264681047321764,
                49.15540125372761
              ],
              [
                9.264774426347973,
                49.15539158110237
              ],
              [
                9.264867805374182,
                49.15540125372761
              ],
              [
                9.264952043810695,
                49.15542932477938
              ],
              [
                9.265018895812425,
                49.155473046467534
              ],
              [
                9.265061817439653,
                49.155528139008624
              ],
              [
                9.265076607224458,
                49.15558920956087
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3434,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.29055375761889,
                49.15044573143438
              ],
              [
                9.2905389693696,
                49.15050680198663
              ],
              [
                9.290496052198606,
                49.15056189452772
              ],
              [
                9.29042920713763,
                49.15060561621588
              ],
              [
                9.290344977446972,
                49.15063368726764
              ],
              [
                9.29025160811562,
                49.15064335989288
              ],
              [
                9.290158238784267,
                49.15063368726764
              ],
              [
                9.29007400909361,
                49.15060561621588
              ],
              [
                9.290007164032634,
                49.15056189452772
              ],
              [
                9.28996424686164,
                49.15050680198663
              ],
              [
                9.28994945861235,
                49.15044573143438
              ],
              [
                9.28996424686164,
                49.15038466088213
              ],
              [
                9.290007164032634,
                49.15032956834104
              ],
              [
                9.29007400909361,
                49.150285846652885
              ],
              [
                9.290158238784267,
                49.15025777560112
              ],
              [
                9.29025160811562,
                49.15024810297588
              ],
              [
                9.290344977446972,
                49.15025777560112
              ],
              [
                9.29042920713763,
                49.150285846652885
              ],
              [
                9.290496052198606,
                49.15032956834104
              ],
              [
                9.2905389693696,
                49.15038466088213
              ],
              [
                9.29055375761889,
                49.15044573143438
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3427,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.301135906073135,
                49.147848166974214
              ],
              [
                9.301121118599147,
                49.14790923752646
              ],
              [
                9.301078203678165,
                49.14796433006755
              ],
              [
                9.30101136212166,
                49.14800805175571
              ],
              [
                9.300927136846894,
                49.148036122807476
              ],
              [
                9.300833772410598,
                49.148045795432715
              ],
              [
                9.300740407974303,
                49.148036122807476
              ],
              [
                9.300656182699537,
                49.14800805175571
              ],
              [
                9.300589341143032,
                49.14796433006755
              ],
              [
                9.30054642622205,
                49.14790923752646
              ],
              [
                9.300531638748062,
                49.147848166974214
              ],
              [
                9.30054642622205,
                49.147787096421965
              ],
              [
                9.300589341143032,
                49.147732003880876
              ],
              [
                9.300656182699537,
                49.14768828219272
              ],
              [
                9.300740407974303,
                49.14766021114095
              ],
              [
                9.300833772410598,
                49.14765053851571
              ],
              [
                9.300927136846894,
                49.14766021114095
              ],
              [
                9.30101136212166,
                49.14768828219272
              ],
              [
                9.301078203678165,
                49.147732003880876
              ],
              [
                9.301121118599147,
                49.147787096421965
              ],
              [
                9.301135906073135,
                49.147848166974214
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.34,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.27482051688814,
                49.13702755414796
              ],
              [
                9.274805665441484,
                49.13708890229363
              ],
              [
                9.274762564864593,
                49.137144245255364
              ],
              [
                9.274695434142233,
                49.13718816567847
              ],
              [
                9.274610844497232,
                49.13721636432592
              ],
              [
                9.274517076153419,
                49.137226080917635
              ],
              [
                9.274423307809606,
                49.13721636432592
              ],
              [
                9.274338718164605,
                49.13718816567847
              ],
              [
                9.274271587442245,
                49.137144245255364
              ],
              [
                9.274228486865354,
                49.13708890229363
              ],
              [
                9.274213635418699,
                49.13702755414796
              ],
              [
                9.274228486865354,
                49.1369662060023
              ],
              [
                9.274271587442245,
                49.13691086304056
              ],
              [
                9.274338718164605,
                49.13686694261746
              ],
              [
                9.274423307809606,
                49.13683874397
              ],
              [
                9.274517076153419,
                49.13682902737829
              ],
              [
                9.274610844497232,
                49.13683874397
              ],
              [
                9.274695434142233,
                49.13686694261746
              ],
              [
                9.274762564864593,
                49.13691086304056
              ],
              [
                9.274805665441484,
                49.1369662060023
              ],
              [
                9.27482051688814,
                49.13702755414796
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3399,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.27561675645295,
                49.15945785760169
              ],
              [
                9.275601965512925,
                49.159518928153936
              ],
              [
                9.275559040533116,
                49.159574020695025
              ],
              [
                9.275492183309622,
                49.15961774238318
              ],
              [
                9.2754079382933,
                49.15964581343495
              ],
              [
                9.275314551973318,
                49.15965548606019
              ],
              [
                9.275221165653337,
                49.15964581343495
              ],
              [
                9.275136920637015,
                49.15961774238318
              ],
              [
                9.275070063413521,
                49.159574020695025
              ],
              [
                9.275027138433712,
                49.159518928153936
              ],
              [
                9.275012347493687,
                49.15945785760169
              ],
              [
                9.275027138433712,
                49.15939678704944
              ],
              [
                9.275070063413521,
                49.15934169450835
              ],
              [
                9.275136920637015,
                49.15929797282019
              ],
              [
                9.275221165653337,
                49.159269901768425
              ],
              [
                9.275314551973318,
                49.159260229143186
              ],
              [
                9.2754079382933,
                49.159269901768425
              ],
              [
                9.275492183309622,
                49.15929797282019
              ],
              [
                9.275559040533116,
                49.15934169450835
              ],
              [
                9.275601965512925,
                49.15939678704944
              ],
              [
                9.27561675645295,
                49.15945785760169
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3398,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.288713739662999,
                49.15233207501543
              ],
              [
                9.28869895085062,
                49.15239314556768
              ],
              [
                9.288656032045472,
                49.15244823810877
              ],
              [
                9.28858918443924,
                49.152491959796926
              ],
              [
                9.288504951541377,
                49.15252003084869
              ],
              [
                9.288411578654808,
                49.15252970347393
              ],
              [
                9.288318205768238,
                49.15252003084869
              ],
              [
                9.288233972870374,
                49.152491959796926
              ],
              [
                9.288167125264144,
                49.15244823810877
              ],
              [
                9.288124206458996,
                49.15239314556768
              ],
              [
                9.288109417646616,
                49.15233207501543
              ],
              [
                9.288124206458996,
                49.15227100446318
              ],
              [
                9.288167125264144,
                49.15221591192209
              ],
              [
                9.288233972870374,
                49.152172190233934
              ],
              [
                9.288318205768238,
                49.15214411918217
              ],
              [
                9.288411578654808,
                49.15213444655693
              ],
              [
                9.288504951541377,
                49.15214411918217
              ],
              [
                9.28858918443924,
                49.152172190233934
              ],
              [
                9.288656032045472,
                49.15221591192209
              ],
              [
                9.28869895085062,
                49.15227100446318
              ],
              [
                9.288713739662999,
                49.15233207501543
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3386,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.266424303826591,
                49.14371842356866
              ],
              [
                9.266409450374796,
                49.14377977171432
              ],
              [
                9.266366343978763,
                49.14383511467606
              ],
              [
                9.266299204192876,
                49.14387903509916
              ],
              [
                9.26621460312717,
                49.14390723374662
              ],
              [
                9.266120822123401,
                49.14391695033833
              ],
              [
                9.266027041119633,
                49.14390723374662
              ],
              [
                9.265942440053927,
                49.14387903509916
              ],
              [
                9.26587530026804,
                49.14383511467606
              ],
              [
                9.265832193872006,
                49.14377977171432
              ],
              [
                9.265817340420211,
                49.14371842356866
              ],
              [
                9.265832193872006,
                49.14365707542299
              ],
              [
                9.26587530026804,
                49.143601732461256
              ],
              [
                9.265942440053927,
                49.14355781203815
              ],
              [
                9.266027041119633,
                49.1435296133907
              ],
              [
                9.266120822123401,
                49.143519896798985
              ],
              [
                9.26621460312717,
                49.1435296133907
              ],
              [
                9.266299204192876,
                49.14355781203815
              ],
              [
                9.266366343978763,
                49.143601732461256
              ],
              [
                9.266409450374796,
                49.14365707542299
              ],
              [
                9.266424303826591,
                49.14371842356866
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3359,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.300052211072984,
                49.14914814919042
              ],
              [
                9.300037423211,
                49.149209219742666
              ],
              [
                9.299994507164014,
                49.149264312283755
              ],
              [
                9.299927663853717,
                49.14930803397191
              ],
              [
                9.299843436369045,
                49.14933610502368
              ],
              [
                9.299750069483048,
                49.14934577764892
              ],
              [
                9.299656702597051,
                49.14933610502368
              ],
              [
                9.29957247511238,
                49.14930803397191
              ],
              [
                9.299505631802083,
                49.149264312283755
              ],
              [
                9.299462715755096,
                49.149209219742666
              ],
              [
                9.299447927893112,
                49.14914814919042
              ],
              [
                9.299462715755096,
                49.14908707863817
              ],
              [
                9.299505631802083,
                49.14903198609708
              ],
              [
                9.29957247511238,
                49.14898826440892
              ],
              [
                9.299656702597051,
                49.148960193357155
              ],
              [
                9.299750069483048,
                49.148950520731916
              ],
              [
                9.299843436369045,
                49.148960193357155
              ],
              [
                9.299927663853717,
                49.14898826440892
              ],
              [
                9.299994507164014,
                49.14903198609708
              ],
              [
                9.300037423211,
                49.14908707863817
              ],
              [
                9.300052211072984,
                49.14914814919042
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3354,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.263063451620754,
                49.154957652918796
              ],
              [
                9.263048662024515,
                49.155018723471045
              ],
              [
                9.263005740944527,
                49.155073816012134
              ],
              [
                9.262938889795144,
                49.15511753770029
              ],
              [
                9.26285465243265,
                49.15514560875206
              ],
              [
                9.262761274597,
                49.1551552813773
              ],
              [
                9.262667896761352,
                49.15514560875206
              ],
              [
                9.262583659398857,
                49.15511753770029
              ],
              [
                9.262516808249474,
                49.155073816012134
              ],
              [
                9.262473887169486,
                49.155018723471045
              ],
              [
                9.262459097573247,
                49.154957652918796
              ],
              [
                9.262473887169486,
                49.15489658236655
              ],
              [
                9.262516808249474,
                49.15484148982546
              ],
              [
                9.262583659398857,
                49.1547977681373
              ],
              [
                9.262667896761352,
                49.154769697085534
              ],
              [
                9.262761274597,
                49.154760024460295
              ],
              [
                9.26285465243265,
                49.154769697085534
              ],
              [
                9.262938889795144,
                49.1547977681373
              ],
              [
                9.263005740944527,
                49.15484148982546
              ],
              [
                9.263048662024515,
                49.15489658236655
              ],
              [
                9.263063451620754,
                49.154957652918796
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3346,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.287318934253333,
                49.15206486731651
              ],
              [
                9.28730414552072,
                49.15212593786876
              ],
              [
                9.287261226947068,
                49.15218103040985
              ],
              [
                9.287194379701397,
                49.15222475209801
              ],
              [
                9.287110147257867,
                49.15225282314977
              ],
              [
                9.28701677487493,
                49.15226249577501
              ],
              [
                9.286923402491993,
                49.15225282314977
              ],
              [
                9.286839170048463,
                49.15222475209801
              ],
              [
                9.286772322802792,
                49.15218103040985
              ],
              [
                9.28672940422914,
                49.15212593786876
              ],
              [
                9.286714615496527,
                49.15206486731651
              ],
              [
                9.28672940422914,
                49.15200379676426
              ],
              [
                9.286772322802792,
                49.15194870422317
              ],
              [
                9.286839170048463,
                49.151904982535015
              ],
              [
                9.286923402491993,
                49.15187691148325
              ],
              [
                9.28701677487493,
                49.15186723885801
              ],
              [
                9.287110147257867,
                49.15187691148325
              ],
              [
                9.287194379701397,
                49.151904982535015
              ],
              [
                9.287261226947068,
                49.15194870422317
              ],
              [
                9.28730414552072,
                49.15200379676426
              ],
              [
                9.287318934253333,
                49.15206486731651
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3344,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.263644028086947,
                49.15505448582546
              ],
              [
                9.263629238461798,
                49.15511555637771
              ],
              [
                9.263586317297905,
                49.1551706489188
              ],
              [
                9.263519466017838,
                49.155214370606956
              ],
              [
                9.263435228490675,
                49.15524244165872
              ],
              [
                9.263341850472486,
                49.15525211428396
              ],
              [
                9.263248472454297,
                49.15524244165872
              ],
              [
                9.263164234927133,
                49.155214370606956
              ],
              [
                9.263097383647066,
                49.1551706489188
              ],
              [
                9.263054462483174,
                49.15511555637771
              ],
              [
                9.263039672858024,
                49.15505448582546
              ],
              [
                9.263054462483174,
                49.15499341527321
              ],
              [
                9.263097383647066,
                49.15493832273212
              ],
              [
                9.263164234927133,
                49.154894601043964
              ],
              [
                9.263248472454297,
                49.1548665299922
              ],
              [
                9.263341850472486,
                49.15485685736696
              ],
              [
                9.263435228490675,
                49.1548665299922
              ],
              [
                9.263519466017838,
                49.154894601043964
              ],
              [
                9.263586317297905,
                49.15493832273212
              ],
              [
                9.263629238461798,
                49.15499341527321
              ],
              [
                9.263644028086947,
                49.15505448582546
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3337,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.264038718257474,
                49.155201807670934
              ],
              [
                9.264023928588339,
                49.15526287822318
              ],
              [
                9.263981007296794,
                49.15531797076427
              ],
              [
                9.263914155817904,
                49.15536169245243
              ],
              [
                9.263829918040207,
                49.155389763504196
              ],
              [
                9.263736539744302,
                49.155399436129436
              ],
              [
                9.263643161448398,
                49.155389763504196
              ],
              [
                9.2635589236707,
                49.15536169245243
              ],
              [
                9.263492072191811,
                49.15531797076427
              ],
              [
                9.263449150900266,
                49.15526287822318
              ],
              [
                9.26343436123113,
                49.155201807670934
              ],
              [
                9.263449150900266,
                49.155140737118685
              ],
              [
                9.263492072191811,
                49.155085644577596
              ],
              [
                9.2635589236707,
                49.15504192288944
              ],
              [
                9.263643161448398,
                49.15501385183767
              ],
              [
                9.263736539744302,
                49.15500417921243
              ],
              [
                9.263829918040207,
                49.15501385183767
              ],
              [
                9.263914155817904,
                49.15504192288944
              ],
              [
                9.263981007296794,
                49.155085644577596
              ],
              [
                9.264023928588339,
                49.155140737118685
              ],
              [
                9.264038718257474,
                49.155201807670934
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.333,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.282450959821944,
                49.15195837447179
              ],
              [
                9.28243617112112,
                49.15201944502404
              ],
              [
                9.282393252639727,
                49.15207453756513
              ],
              [
                9.282326405537752,
                49.152118259253285
              ],
              [
                9.28224217327529,
                49.15214633030505
              ],
              [
                9.282148801093069,
                49.15215600293029
              ],
              [
                9.282055428910848,
                49.15214633030505
              ],
              [
                9.281971196648385,
                49.152118259253285
              ],
              [
                9.28190434954641,
                49.15207453756513
              ],
              [
                9.281861431065018,
                49.15201944502404
              ],
              [
                9.281846642364194,
                49.15195837447179
              ],
              [
                9.281861431065018,
                49.15189730391954
              ],
              [
                9.28190434954641,
                49.15184221137845
              ],
              [
                9.281971196648385,
                49.15179848969029
              ],
              [
                9.282055428910848,
                49.15177041863853
              ],
              [
                9.282148801093069,
                49.15176074601329
              ],
              [
                9.28224217327529,
                49.15177041863853
              ],
              [
                9.282326405537752,
                49.15179848969029
              ],
              [
                9.282393252639727,
                49.15184221137845
              ],
              [
                9.28243617112112,
                49.15189730391954
              ],
              [
                9.282450959821944,
                49.15195837447179
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3304,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.293479329469422,
                49.15133519491188
              ],
              [
                9.293464540954627,
                49.15139626546413
              ],
              [
                9.293421623013106,
                49.15145135800522
              ],
              [
                9.293354776752004,
                49.151495079693376
              ],
              [
                9.293270545549102,
                49.15152315074514
              ],
              [
                9.293177174541412,
                49.15153282337038
              ],
              [
                9.293083803533722,
                49.15152315074514
              ],
              [
                9.292999572330821,
                49.151495079693376
              ],
              [
                9.292932726069719,
                49.15145135800522
              ],
              [
                9.292889808128198,
                49.15139626546413
              ],
              [
                9.292875019613403,
                49.15133519491188
              ],
              [
                9.292889808128198,
                49.15127412435963
              ],
              [
                9.292932726069719,
                49.15121903181854
              ],
              [
                9.292999572330821,
                49.151175310130384
              ],
              [
                9.293083803533722,
                49.15114723907862
              ],
              [
                9.293177174541412,
                49.15113756645338
              ],
              [
                9.293270545549102,
                49.15114723907862
              ],
              [
                9.293354776752004,
                49.151175310130384
              ],
              [
                9.293421623013106,
                49.15121903181854
              ],
              [
                9.293464540954627,
                49.15127412435963
              ],
              [
                9.293479329469422,
                49.15133519491188
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3267,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.260705779039908,
                49.153957756531405
              ],
              [
                9.260690989742198,
                49.154018827083654
              ],
              [
                9.260648069528575,
                49.15407391962474
              ],
              [
                9.260581219728587,
                49.1541176413129
              ],
              [
                9.260496984066432,
                49.15414571236467
              ],
              [
                9.26040360811562,
                49.154155384989906
              ],
              [
                9.260310232164809,
                49.15414571236467
              ],
              [
                9.260225996502653,
                49.1541176413129
              ],
              [
                9.260159146702666,
                49.15407391962474
              ],
              [
                9.260116226489043,
                49.154018827083654
              ],
              [
                9.260101437191333,
                49.153957756531405
              ],
              [
                9.260116226489043,
                49.153896685979156
              ],
              [
                9.260159146702666,
                49.15384159343807
              ],
              [
                9.260225996502653,
                49.15379787174991
              ],
              [
                9.260310232164809,
                49.15376980069814
              ],
              [
                9.26040360811562,
                49.1537601280729
              ],
              [
                9.260496984066432,
                49.15376980069814
              ],
              [
                9.260581219728587,
                49.15379787174991
              ],
              [
                9.260648069528575,
                49.15384159343807
              ],
              [
                9.260690989742198,
                49.153896685979156
              ],
              [
                9.260705779039908,
                49.153957756531405
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3241,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.270462810225778,
                49.1390898877154
              ],
              [
                9.270447958161155,
                49.139151235861064
              ],
              [
                9.270404855790854,
                49.1392065788228
              ],
              [
                9.270337722275192,
                49.139250499245904
              ],
              [
                9.27025312911043,
                49.13927869789336
              ],
              [
                9.270159356864925,
                49.13928841448507
              ],
              [
                9.27006558461942,
                49.13927869789336
              ],
              [
                9.269980991454657,
                49.139250499245904
              ],
              [
                9.269913857938995,
                49.1392065788228
              ],
              [
                9.269870755568695,
                49.139151235861064
              ],
              [
                9.269855903504071,
                49.1390898877154
              ],
              [
                9.269870755568695,
                49.139028539569736
              ],
              [
                9.269913857938995,
                49.138973196608
              ],
              [
                9.269980991454657,
                49.138929276184896
              ],
              [
                9.27006558461942,
                49.13890107753744
              ],
              [
                9.270159356864925,
                49.13889136094573
              ],
              [
                9.27025312911043,
                49.13890107753744
              ],
              [
                9.270337722275192,
                49.138929276184896
              ],
              [
                9.270404855790854,
                49.138973196608
              ],
              [
                9.270447958161155,
                49.139028539569736
              ],
              [
                9.270462810225778,
                49.1390898877154
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3232,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.290102793650952,
                49.150429478877314
              ],
              [
                9.290088005406513,
                49.15049054942956
              ],
              [
                9.2900450882496,
                49.15054564197065
              ],
              [
                9.28997824321055,
                49.15058936365881
              ],
              [
                9.289894013547526,
                49.150617434710576
              ],
              [
                9.289800644246803,
                49.150627107335815
              ],
              [
                9.28970727494608,
                49.150617434710576
              ],
              [
                9.289623045283056,
                49.15058936365881
              ],
              [
                9.289556200244006,
                49.15054564197065
              ],
              [
                9.289513283087093,
                49.15049054942956
              ],
              [
                9.289498494842654,
                49.150429478877314
              ],
              [
                9.289513283087093,
                49.150368408325065
              ],
              [
                9.289556200244006,
                49.150313315783976
              ],
              [
                9.289623045283056,
                49.15026959409582
              ],
              [
                9.28970727494608,
                49.15024152304405
              ],
              [
                9.289800644246803,
                49.15023185041881
              ],
              [
                9.289894013547526,
                49.15024152304405
              ],
              [
                9.28997824321055,
                49.15026959409582
              ],
              [
                9.2900450882496,
                49.150313315783976
              ],
              [
                9.290088005406513,
                49.150368408325065
              ],
              [
                9.290102793650952,
                49.150429478877314
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3226,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.291907229714308,
                49.151293321305985
              ],
              [
                9.291892441212013,
                49.151354391858234
              ],
              [
                9.291849523306768,
                49.15140948439932
              ],
              [
                9.291782677102166,
                49.15145320608748
              ],
              [
                9.291698445970457,
                49.15148127713925
              ],
              [
                9.291605075041687,
                49.15149094976449
              ],
              [
                9.291511704112917,
                49.15148127713925
              ],
              [
                9.291427472981209,
                49.15145320608748
              ],
              [
                9.291360626776607,
                49.15140948439932
              ],
              [
                9.291317708871361,
                49.151354391858234
              ],
              [
                9.291302920369066,
                49.151293321305985
              ],
              [
                9.291317708871361,
                49.151232250753736
              ],
              [
                9.291360626776607,
                49.15117715821265
              ],
              [
                9.291427472981209,
                49.15113343652449
              ],
              [
                9.291511704112917,
                49.15110536547272
              ],
              [
                9.291605075041687,
                49.151095692847484
              ],
              [
                9.291698445970457,
                49.15110536547272
              ],
              [
                9.291782677102166,
                49.15113343652449
              ],
              [
                9.291849523306768,
                49.15117715821265
              ],
              [
                9.291892441212013,
                49.151232250753736
              ],
              [
                9.291907229714308,
                49.151293321305985
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3223,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.291253867886159,
                49.1543071687087
              ],
              [
                9.29123907848413,
                49.15436823926095
              ],
              [
                9.291196157967763,
                49.154423331802036
              ],
              [
                9.29112930769624,
                49.154467053490194
              ],
              [
                9.291045071439914,
                49.15449512454196
              ],
              [
                9.290951694830461,
                49.1545047971672
              ],
              [
                9.290858318221009,
                49.15449512454196
              ],
              [
                9.290774081964683,
                49.154467053490194
              ],
              [
                9.29070723169316,
                49.154423331802036
              ],
              [
                9.290664311176792,
                49.15436823926095
              ],
              [
                9.290649521774764,
                49.1543071687087
              ],
              [
                9.290664311176792,
                49.15424609815645
              ],
              [
                9.29070723169316,
                49.15419100561536
              ],
              [
                9.290774081964683,
                49.1541472839272
              ],
              [
                9.290858318221009,
                49.154119212875436
              ],
              [
                9.290951694830461,
                49.1541095402502
              ],
              [
                9.291045071439914,
                49.154119212875436
              ],
              [
                9.29112930769624,
                49.1541472839272
              ],
              [
                9.291196157967763,
                49.15419100561536
              ],
              [
                9.29123907848413,
                49.15424609815645
              ],
              [
                9.291253867886159,
                49.1543071687087
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3209,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.286047606075256,
                49.152211380724445
              ],
              [
                9.286032817298906,
                49.152272451276694
              ],
              [
                9.285989898598324,
                49.15232754381778
              ],
              [
                9.285923051154953,
                49.15237126550594
              ],
              [
                9.285838818462306,
                49.15239933655771
              ],
              [
                9.285745445803222,
                49.152409009182946
              ],
              [
                9.285652073144139,
                49.15239933655771
              ],
              [
                9.285567840451492,
                49.15237126550594
              ],
              [
                9.285500993008121,
                49.15232754381778
              ],
              [
                9.285458074307538,
                49.152272451276694
              ],
              [
                9.285443285531189,
                49.152211380724445
              ],
              [
                9.285458074307538,
                49.152150310172196
              ],
              [
                9.285500993008121,
                49.15209521763111
              ],
              [
                9.285567840451492,
                49.15205149594295
              ],
              [
                9.285652073144139,
                49.15202342489118
              ],
              [
                9.285745445803222,
                49.152013752265944
              ],
              [
                9.285838818462306,
                49.15202342489118
              ],
              [
                9.285923051154953,
                49.15205149594295
              ],
              [
                9.285989898598324,
                49.15209521763111
              ],
              [
                9.286032817298906,
                49.152150310172196
              ],
              [
                9.286047606075256,
                49.152211380724445
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3182,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.293119698480403,
                49.15059246035952
              ],
              [
                9.293104910187315,
                49.15065353091177
              ],
              [
                9.293061992889216,
                49.15070862345286
              ],
              [
                9.292995147630267,
                49.150752345141015
              ],
              [
                9.292910917690149,
                49.15078041619278
              ],
              [
                9.292817548082269,
                49.15079008881802
              ],
              [
                9.292724178474389,
                49.15078041619278
              ],
              [
                9.292639948534271,
                49.150752345141015
              ],
              [
                9.292573103275322,
                49.15070862345286
              ],
              [
                9.292530185977222,
                49.15065353091177
              ],
              [
                9.292515397684134,
                49.15059246035952
              ],
              [
                9.292530185977222,
                49.15053138980727
              ],
              [
                9.292573103275322,
                49.15047629726618
              ],
              [
                9.292639948534271,
                49.15043257557802
              ],
              [
                9.292724178474389,
                49.15040450452626
              ],
              [
                9.292817548082269,
                49.15039483190102
              ],
              [
                9.292910917690149,
                49.15040450452626
              ],
              [
                9.292995147630267,
                49.15043257557802
              ],
              [
                9.293061992889216,
                49.15047629726618
              ],
              [
                9.293104910187315,
                49.15053138980727
              ],
              [
                9.293119698480403,
                49.15059246035952
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3181,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.28795773540876,
                49.15199912269463
              ],
              [
                9.287942946695773,
                49.15206019324688
              ],
              [
                9.287900028179077,
                49.15211528578797
              ],
              [
                9.287833181022119,
                49.15215900747613
              ],
              [
                9.287748948690373,
                49.152187078527895
              ],
              [
                9.287655576431352,
                49.152196751153134
              ],
              [
                9.28756220417233,
                49.152187078527895
              ],
              [
                9.287477971840584,
                49.15215900747613
              ],
              [
                9.287411124683626,
                49.15211528578797
              ],
              [
                9.28736820616693,
                49.15206019324688
              ],
              [
                9.287353417453943,
                49.15199912269463
              ],
              [
                9.28736820616693,
                49.151938052142384
              ],
              [
                9.287411124683626,
                49.151882959601295
              ],
              [
                9.287477971840584,
                49.15183923791314
              ],
              [
                9.28756220417233,
                49.15181116686137
              ],
              [
                9.287655576431352,
                49.15180149423613
              ],
              [
                9.287748948690373,
                49.15181116686137
              ],
              [
                9.287833181022119,
                49.15183923791314
              ],
              [
                9.287900028179077,
                49.151882959601295
              ],
              [
                9.287942946695773,
                49.151938052142384
              ],
              [
                9.28795773540876,
                49.15199912269463
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3175,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.290280474790707,
                49.15073667017777
              ],
              [
                9.290265686454573,
                49.15079774073002
              ],
              [
                9.29022276903155,
                49.15085283327111
              ],
              [
                9.290155923578023,
                49.15089655495927
              ],
              [
                9.290071693392727,
                49.15092462601103
              ],
              [
                9.289978323513063,
                49.15093429863627
              ],
              [
                9.289884953633399,
                49.15092462601103
              ],
              [
                9.289800723448103,
                49.15089655495927
              ],
              [
                9.289733877994577,
                49.15085283327111
              ],
              [
                9.289690960571553,
                49.15079774073002
              ],
              [
                9.289676172235419,
                49.15073667017777
              ],
              [
                9.289690960571553,
                49.15067559962552
              ],
              [
                9.289733877994577,
                49.15062050708443
              ],
              [
                9.289800723448103,
                49.150576785396275
              ],
              [
                9.289884953633399,
                49.15054871434451
              ],
              [
                9.289978323513063,
                49.15053904171927
              ],
              [
                9.290071693392727,
                49.15054871434451
              ],
              [
                9.290155923578023,
                49.150576785396275
              ],
              [
                9.29022276903155,
                49.15062050708443
              ],
              [
                9.290265686454573,
                49.15067559962552
              ],
              [
                9.290280474790707,
                49.15073667017777
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3167,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.289842297504055,
                49.15077302157852
              ],
              [
                9.28982750915707,
                49.15083409213077
              ],
              [
                9.289784591702555,
                49.15088918467186
              ],
              [
                9.289717746199983,
                49.15093290636002
              ],
              [
                9.289633515952882,
                49.150960977411785
              ],
              [
                9.28954014600471,
                49.150970650037024
              ],
              [
                9.289446776056536,
                49.150960977411785
              ],
              [
                9.289362545809436,
                49.15093290636002
              ],
              [
                9.289295700306864,
                49.15088918467186
              ],
              [
                9.28925278285235,
                49.15083409213077
              ],
              [
                9.289237994505363,
                49.15077302157852
              ],
              [
                9.28925278285235,
                49.150711951026274
              ],
              [
                9.289295700306864,
                49.150656858485185
              ],
              [
                9.289362545809436,
                49.15061313679703
              ],
              [
                9.289446776056536,
                49.15058506574526
              ],
              [
                9.28954014600471,
                49.15057539312002
              ],
              [
                9.289633515952882,
                49.15058506574526
              ],
              [
                9.289717746199983,
                49.15061313679703
              ],
              [
                9.289784591702555,
                49.150656858485185
              ],
              [
                9.28982750915707,
                49.150711951026274
              ],
              [
                9.289842297504055,
                49.15077302157852
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3151,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.288756562674292,
                49.15092830322942
              ],
              [
                9.288741774280956,
                49.15098937378167
              ],
              [
                9.288698856691923,
                49.15104446632276
              ],
              [
                9.288632010979834,
                49.15108818801092
              ],
              [
                9.288547780468729,
                49.15111625906268
              ],
              [
                9.288454410227903,
                49.15112593168792
              ],
              [
                9.288361039987077,
                49.15111625906268
              ],
              [
                9.288276809475972,
                49.15108818801092
              ],
              [
                9.288209963763883,
                49.15104446632276
              ],
              [
                9.28816704617485,
                49.15098937378167
              ],
              [
                9.288152257781514,
                49.15092830322942
              ],
              [
                9.28816704617485,
                49.15086723267717
              ],
              [
                9.288209963763883,
                49.15081214013608
              ],
              [
                9.288276809475972,
                49.150768418447925
              ],
              [
                9.288361039987077,
                49.15074034739616
              ],
              [
                9.288454410227903,
                49.15073067477092
              ],
              [
                9.288547780468729,
                49.15074034739616
              ],
              [
                9.288632010979834,
                49.150768418447925
              ],
              [
                9.288698856691923,
                49.15081214013608
              ],
              [
                9.288741774280956,
                49.15086723267717
              ],
              [
                9.288756562674292,
                49.15092830322942
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3148,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.29192929635778,
                49.14718168028869
              ],
              [
                9.291914509082702,
                49.14724275084094
              ],
              [
                9.291871594738977,
                49.14729784338203
              ],
              [
                9.291804754081573,
                49.147341565070185
              ],
              [
                9.291720529939743,
                49.14736963612195
              ],
              [
                9.291627166759312,
                49.14737930874719
              ],
              [
                9.291533803578881,
                49.14736963612195
              ],
              [
                9.291449579437051,
                49.147341565070185
              ],
              [
                9.291382738779648,
                49.14729784338203
              ],
              [
                9.291339824435923,
                49.14724275084094
              ],
              [
                9.291325037160844,
                49.14718168028869
              ],
              [
                9.291339824435923,
                49.14712060973644
              ],
              [
                9.291382738779648,
                49.14706551719535
              ],
              [
                9.291449579437051,
                49.14702179550719
              ],
              [
                9.291533803578881,
                49.14699372445543
              ],
              [
                9.291627166759312,
                49.14698405183019
              ],
              [
                9.291720529939743,
                49.14699372445543
              ],
              [
                9.291804754081573,
                49.14702179550719
              ],
              [
                9.291871594738977,
                49.14706551719535
              ],
              [
                9.291914509082702,
                49.14712060973644
              ],
              [
                9.29192929635778,
                49.14718168028869
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3146,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.293330820172825,
                49.15095016430535
              ],
              [
                9.293316031772964,
                49.1510112348576
              ],
              [
                9.293273114164993,
                49.15106632739869
              ],
              [
                9.293206268423408,
                49.151110049086846
              ],
              [
                9.293122037875134,
                49.15113812013861
              ],
              [
                9.293028667593108,
                49.15114779276385
              ],
              [
                9.29293529731108,
                49.15113812013861
              ],
              [
                9.292851066762807,
                49.151110049086846
              ],
              [
                9.292784221021222,
                49.15106632739869
              ],
              [
                9.292741303413251,
                49.1510112348576
              ],
              [
                9.29272651501339,
                49.15095016430535
              ],
              [
                9.292741303413251,
                49.1508890937531
              ],
              [
                9.292784221021222,
                49.15083400121201
              ],
              [
                9.292851066762807,
                49.150790279523854
              ],
              [
                9.29293529731108,
                49.15076220847209
              ],
              [
                9.293028667593108,
                49.15075253584685
              ],
              [
                9.293122037875134,
                49.15076220847209
              ],
              [
                9.293206268423408,
                49.150790279523854
              ],
              [
                9.293273114164993,
                49.15083400121201
              ],
              [
                9.293316031772964,
                49.1508890937531
              ],
              [
                9.293330820172825,
                49.15095016430535
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3144,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.289092651295498,
                49.15087631099114
              ],
              [
                9.289077862917681,
                49.150937381543386
              ],
              [
                9.28903494537369,
                49.150992474084475
              ],
              [
                9.288968099731752,
                49.15103619577263
              ],
              [
                9.288883869309043,
                49.1510642668244
              ],
              [
                9.288790499166204,
                49.15107393944964
              ],
              [
                9.288697129023365,
                49.1510642668244
              ],
              [
                9.288612898600656,
                49.15103619577263
              ],
              [
                9.288546052958718,
                49.150992474084475
              ],
              [
                9.288503135414727,
                49.150937381543386
              ],
              [
                9.28848834703691,
                49.15087631099114
              ],
              [
                9.288503135414727,
                49.15081524043889
              ],
              [
                9.288546052958718,
                49.1507601478978
              ],
              [
                9.288612898600656,
                49.15071642620964
              ],
              [
                9.288697129023365,
                49.150688355157875
              ],
              [
                9.288790499166204,
                49.150678682532636
              ],
              [
                9.288883869309043,
                49.150688355157875
              ],
              [
                9.288968099731752,
                49.15071642620964
              ],
              [
                9.28903494537369,
                49.1507601478978
              ],
              [
                9.289077862917681,
                49.15081524043889
              ],
              [
                9.289092651295498,
                49.15087631099114
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3106,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.285542502664825,
                49.15239042676727
              ],
              [
                9.285527713835025,
                49.15245149731952
              ],
              [
                9.285484794979325,
                49.15250658986061
              ],
              [
                9.285417947294354,
                49.152550311548765
              ],
              [
                9.285333714297273,
                49.15257838260053
              ],
              [
                9.285240341300723,
                49.15258805522577
              ],
              [
                9.285146968304172,
                49.15257838260053
              ],
              [
                9.285062735307092,
                49.152550311548765
              ],
              [
                9.28499588762212,
                49.15250658986061
              ],
              [
                9.28495296876642,
                49.15245149731952
              ],
              [
                9.28493817993662,
                49.15239042676727
              ],
              [
                9.28495296876642,
                49.15232935621502
              ],
              [
                9.28499588762212,
                49.15227426367393
              ],
              [
                9.285062735307092,
                49.15223054198577
              ],
              [
                9.285146968304172,
                49.15220247093401
              ],
              [
                9.285240341300723,
                49.15219279830877
              ],
              [
                9.285333714297273,
                49.15220247093401
              ],
              [
                9.285417947294354,
                49.15223054198577
              ],
              [
                9.285484794979325,
                49.15227426367393
              ],
              [
                9.285527713835025,
                49.15232935621502
              ],
              [
                9.285542502664825,
                49.15239042676727
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3092,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.274095883291492,
                49.13676964922578
              ],
              [
                9.274081031922112,
                49.13683099737145
              ],
              [
                9.274037931569483,
                49.136886340333184
              ],
              [
                9.273970801196414,
                49.13693026075629
              ],
              [
                9.273886211991552,
                49.13695845940374
              ],
              [
                9.273792444135632,
                49.136968175995456
              ],
              [
                9.273698676279711,
                49.13695845940374
              ],
              [
                9.273614087074849,
                49.13693026075629
              ],
              [
                9.27354695670178,
                49.136886340333184
              ],
              [
                9.273503856349151,
                49.13683099737145
              ],
              [
                9.273489004979771,
                49.13676964922578
              ],
              [
                9.273503856349151,
                49.13670830108012
              ],
              [
                9.27354695670178,
                49.13665295811838
              ],
              [
                9.273614087074849,
                49.13660903769528
              ],
              [
                9.273698676279711,
                49.136580839047824
              ],
              [
                9.273792444135632,
                49.13657112245611
              ],
              [
                9.273886211991552,
                49.136580839047824
              ],
              [
                9.273970801196414,
                49.13660903769528
              ],
              [
                9.274037931569483,
                49.13665295811838
              ],
              [
                9.274081031922112,
                49.13670830108012
              ],
              [
                9.274095883291492,
                49.13676964922578
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3083,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.296335763914865,
                49.14901712373961
              ],
              [
                9.29632097609199,
                49.14907819429186
              ],
              [
                9.296278060158496,
                49.14913328683295
              ],
              [
                9.29621121702497,
                49.14917700852111
              ],
              [
                9.296126989763042,
                49.14920507957287
              ],
              [
                9.296033623123959,
                49.14921475219811
              ],
              [
                9.295940256484876,
                49.14920507957287
              ],
              [
                9.295856029222948,
                49.14917700852111
              ],
              [
                9.295789186089422,
                49.14913328683295
              ],
              [
                9.295746270155929,
                49.14907819429186
              ],
              [
                9.295731482333053,
                49.14901712373961
              ],
              [
                9.295746270155929,
                49.14895605318736
              ],
              [
                9.295789186089422,
                49.14890096064627
              ],
              [
                9.295856029222948,
                49.148857238958115
              ],
              [
                9.295940256484876,
                49.14882916790635
              ],
              [
                9.296033623123959,
                49.14881949528111
              ],
              [
                9.296126989763042,
                49.14882916790635
              ],
              [
                9.29621121702497,
                49.148857238958115
              ],
              [
                9.296278060158496,
                49.14890096064627
              ],
              [
                9.29632097609199,
                49.14895605318736
              ],
              [
                9.296335763914865,
                49.14901712373961
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3078,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.291858662268368,
                49.147662377161545
              ],
              [
                9.291843874849828,
                49.147723447713794
              ],
              [
                9.291800960089763,
                49.14777854025488
              ],
              [
                9.291734118783895,
                49.14782226194304
              ],
              [
                9.291649893824951,
                49.14785033299481
              ],
              [
                9.291556529738745,
                49.147860005620046
              ],
              [
                9.291463165652539,
                49.14785033299481
              ],
              [
                9.291378940693596,
                49.14782226194304
              ],
              [
                9.291312099387728,
                49.14777854025488
              ],
              [
                9.291269184627662,
                49.147723447713794
              ],
              [
                9.291254397209123,
                49.147662377161545
              ],
              [
                9.291269184627662,
                49.147601306609296
              ],
              [
                9.291312099387728,
                49.14754621406821
              ],
              [
                9.291378940693596,
                49.14750249238005
              ],
              [
                9.291463165652539,
                49.14747442132828
              ],
              [
                9.291556529738745,
                49.147464748703044
              ],
              [
                9.291649893824951,
                49.14747442132828
              ],
              [
                9.291734118783895,
                49.14750249238005
              ],
              [
                9.291800960089763,
                49.14754621406821
              ],
              [
                9.291843874849828,
                49.147601306609296
              ],
              [
                9.291858662268368,
                49.147662377161545
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3077,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.288546343502299,
                49.15181322940143
              ],
              [
                9.288531554844806,
                49.151874299953676
              ],
              [
                9.288488636489156,
                49.151929392494765
              ],
              [
                9.288421789583031,
                49.15197311418292
              ],
              [
                9.288337557567354,
                49.15200118523469
              ],
              [
                9.288244185658698,
                49.15201085785993
              ],
              [
                9.288150813750041,
                49.15200118523469
              ],
              [
                9.288066581734364,
                49.15197311418292
              ],
              [
                9.28799973482824,
                49.151929392494765
              ],
              [
                9.28795681647259,
                49.151874299953676
              ],
              [
                9.287942027815097,
                49.15181322940143
              ],
              [
                9.28795681647259,
                49.15175215884918
              ],
              [
                9.28799973482824,
                49.15169706630809
              ],
              [
                9.288066581734364,
                49.15165334461993
              ],
              [
                9.288150813750041,
                49.151625273568165
              ],
              [
                9.288244185658698,
                49.151615600942925
              ],
              [
                9.288337557567354,
                49.151625273568165
              ],
              [
                9.288421789583031,
                49.15165334461993
              ],
              [
                9.288488636489156,
                49.15169706630809
              ],
              [
                9.288531554844806,
                49.15175215884918
              ],
              [
                9.288546343502299,
                49.15181322940143
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.304,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.284686706450975,
                49.14688610413481
              ],
              [
                9.284671919264108,
                49.14694717468706
              ],
              [
                9.284629005176381,
                49.147002267228146
              ],
              [
                9.284562164917704,
                49.147045988916304
              ],
              [
                9.284477941278297,
                49.14707405996807
              ],
              [
                9.284384578654809,
                49.14708373259331
              ],
              [
                9.28429121603132,
                49.14707405996807
              ],
              [
                9.284206992391914,
                49.147045988916304
              ],
              [
                9.284140152133237,
                49.147002267228146
              ],
              [
                9.28409723804551,
                49.14694717468706
              ],
              [
                9.284082450858643,
                49.14688610413481
              ],
              [
                9.28409723804551,
                49.14682503358256
              ],
              [
                9.284140152133237,
                49.14676994104147
              ],
              [
                9.284206992391914,
                49.14672621935331
              ],
              [
                9.28429121603132,
                49.146698148301546
              ],
              [
                9.284384578654809,
                49.14668847567631
              ],
              [
                9.284477941278297,
                49.146698148301546
              ],
              [
                9.284562164917704,
                49.14672621935331
              ],
              [
                9.284629005176381,
                49.14676994104147
              ],
              [
                9.284671919264108,
                49.14682503358256
              ],
              [
                9.284686706450975,
                49.14688610413481
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3038,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.28510751761694,
                49.151378703438795
              ],
              [
                9.285092729089158,
                49.151439773991044
              ],
              [
                9.285049811109944,
                49.15149486653213
              ],
              [
                9.284982964790135,
                49.15153858822029
              ],
              [
                9.28489873351326,
                49.151566659272056
              ],
              [
                9.284805362423569,
                49.151576331897296
              ],
              [
                9.284711991333879,
                49.151566659272056
              ],
              [
                9.284627760057003,
                49.15153858822029
              ],
              [
                9.284560913737193,
                49.15149486653213
              ],
              [
                9.28451799575798,
                49.151439773991044
              ],
              [
                9.284503207230198,
                49.151378703438795
              ],
              [
                9.28451799575798,
                49.151317632886546
              ],
              [
                9.284560913737193,
                49.151262540345456
              ],
              [
                9.284627760057003,
                49.1512188186573
              ],
              [
                9.284711991333879,
                49.15119074760553
              ],
              [
                9.284805362423569,
                49.15118107498029
              ],
              [
                9.28489873351326,
                49.15119074760553
              ],
              [
                9.284982964790135,
                49.1512188186573
              ],
              [
                9.285049811109944,
                49.151262540345456
              ],
              [
                9.285092729089158,
                49.151317632886546
              ],
              [
                9.28510751761694,
                49.151378703438795
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3029,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.288346086980823,
                49.152042698904125
              ],
              [
                9.288331298254828,
                49.152103769456374
              ],
              [
                9.288288379700383,
                49.152158861997464
              ],
              [
                9.288221532484624,
                49.15220258368562
              ],
              [
                9.288137300078786,
                49.15223065473739
              ],
              [
                9.288043927737633,
                49.15224032736263
              ],
              [
                9.28795055539648,
                49.15223065473739
              ],
              [
                9.287866322990642,
                49.15220258368562
              ],
              [
                9.287799475774882,
                49.152158861997464
              ],
              [
                9.287756557220437,
                49.152103769456374
              ],
              [
                9.287741768494442,
                49.152042698904125
              ],
              [
                9.287756557220437,
                49.15198162835188
              ],
              [
                9.287799475774882,
                49.15192653581079
              ],
              [
                9.287866322990642,
                49.15188281412263
              ],
              [
                9.28795055539648,
                49.151854743070864
              ],
              [
                9.288043927737633,
                49.151845070445624
              ],
              [
                9.288137300078786,
                49.151854743070864
              ],
              [
                9.288221532484624,
                49.15188281412263
              ],
              [
                9.288288379700383,
                49.15192653581079
              ],
              [
                9.288331298254828,
                49.15198162835188
              ],
              [
                9.288346086980823,
                49.152042698904125
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3005,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.290832276142572,
                49.151614535535
              ],
              [
                9.290817487544391,
                49.15167560608725
              ],
              [
                9.290774569360874,
                49.15173069862834
              ],
              [
                9.290707722722855,
                49.1517744203165
              ],
              [
                9.290623491045007,
                49.151802491368265
              ],
              [
                9.290530119510839,
                49.151812163993505
              ],
              [
                9.29043674797667,
                49.151802491368265
              ],
              [
                9.290352516298823,
                49.1517744203165
              ],
              [
                9.290285669660804,
                49.15173069862834
              ],
              [
                9.290242751477287,
                49.15167560608725
              ],
              [
                9.290227962879106,
                49.151614535535
              ],
              [
                9.290242751477287,
                49.151553464982754
              ],
              [
                9.290285669660804,
                49.151498372441665
              ],
              [
                9.290352516298823,
                49.15145465075351
              ],
              [
                9.29043674797667,
                49.15142657970174
              ],
              [
                9.290530119510839,
                49.1514169070765
              ],
              [
                9.290623491045007,
                49.15142657970174
              ],
              [
                9.290707722722855,
                49.15145465075351
              ],
              [
                9.290774569360874,
                49.151498372441665
              ],
              [
                9.290817487544391,
                49.151553464982754
              ],
              [
                9.290832276142572,
                49.151614535535
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.3002,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.286000205997592,
                49.14731313556262
              ],
              [
                9.285985418683282,
                49.14737420611487
              ],
              [
                9.285942504225703,
                49.14742929865596
              ],
              [
                9.285875663390966,
                49.147473020344115
              ],
              [
                9.285791439025683,
                49.14750109139588
              ],
              [
                9.285698075597555,
                49.14751076402112
              ],
              [
                9.285604712169427,
                49.14750109139588
              ],
              [
                9.285520487804144,
                49.147473020344115
              ],
              [
                9.285453646969406,
                49.14742929865596
              ],
              [
                9.285410732511828,
                49.14737420611487
              ],
              [
                9.285395945197518,
                49.14731313556262
              ],
              [
                9.285410732511828,
                49.14725206501037
              ],
              [
                9.285453646969406,
                49.14719697246928
              ],
              [
                9.285520487804144,
                49.14715325078112
              ],
              [
                9.285604712169427,
                49.14712517972936
              ],
              [
                9.285698075597555,
                49.14711550710412
              ],
              [
                9.285791439025683,
                49.14712517972936
              ],
              [
                9.285875663390966,
                49.14715325078112
              ],
              [
                9.285942504225703,
                49.14719697246928
              ],
              [
                9.285985418683282,
                49.14725206501037
              ],
              [
                9.286000205997592,
                49.14731313556262
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2972,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.29543826778307,
                49.1545271917834
              ],
              [
                9.295423478315353,
                49.15458826233565
              ],
              [
                9.295380557608345,
                49.15464335487674
              ],
              [
                9.295313707039893,
                49.1546870765649
              ],
              [
                9.295229470409415,
                49.15471514761666
              ],
              [
                9.295136093385214,
                49.1547248202419
              ],
              [
                9.295042716361012,
                49.15471514761666
              ],
              [
                9.294958479730534,
                49.1546870765649
              ],
              [
                9.294891629162082,
                49.15464335487674
              ],
              [
                9.294848708455074,
                49.15458826233565
              ],
              [
                9.294833918987358,
                49.1545271917834
              ],
              [
                9.294848708455074,
                49.15446612123115
              ],
              [
                9.294891629162082,
                49.15441102869006
              ],
              [
                9.294958479730534,
                49.154367307001905
              ],
              [
                9.295042716361012,
                49.15433923595014
              ],
              [
                9.295136093385214,
                49.1543295633249
              ],
              [
                9.295229470409415,
                49.15433923595014
              ],
              [
                9.295313707039893,
                49.154367307001905
              ],
              [
                9.295380557608345,
                49.15441102869006
              ],
              [
                9.295423478315353,
                49.15446612123115
              ],
              [
                9.29543826778307,
                49.1545271917834
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2881,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.288835147005601,
                49.15277036700582
              ],
              [
                9.288820358062377,
                49.15283143755807
              ],
              [
                9.288777438877512,
                49.15288653009916
              ],
              [
                9.288710590679852,
                49.15293025178732
              ],
              [
                9.288626357036744,
                49.15295832283908
              ],
              [
                9.288532983324068,
                49.15296799546432
              ],
              [
                9.288439609611391,
                49.15295832283908
              ],
              [
                9.288355375968283,
                49.15293025178732
              ],
              [
                9.288288527770623,
                49.15288653009916
              ],
              [
                9.288245608585758,
                49.15283143755807
              ],
              [
                9.288230819642534,
                49.15277036700582
              ],
              [
                9.288245608585758,
                49.15270929645357
              ],
              [
                9.288288527770623,
                49.15265420391248
              ],
              [
                9.288355375968283,
                49.152610482224325
              ],
              [
                9.288439609611391,
                49.15258241117256
              ],
              [
                9.288532983324068,
                49.15257273854732
              ],
              [
                9.288626357036744,
                49.15258241117256
              ],
              [
                9.288710590679852,
                49.152610482224325
              ],
              [
                9.288777438877512,
                49.15265420391248
              ],
              [
                9.288820358062377,
                49.15270929645357
              ],
              [
                9.288835147005601,
                49.15277036700582
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2879,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.291437371898244,
                49.15400807217895
              ],
              [
                9.291422582585515,
                49.154069142731196
              ],
              [
                9.291379662328294,
                49.154124235272285
              ],
              [
                9.291312812460408,
                49.15416795696044
              ],
              [
                9.29122857671269,
                49.15419602801221
              ],
              [
                9.291135200667036,
                49.15420570063745
              ],
              [
                9.29104182462138,
                49.15419602801221
              ],
              [
                9.290957588873663,
                49.15416795696044
              ],
              [
                9.290890739005777,
                49.154124235272285
              ],
              [
                9.290847818748556,
                49.154069142731196
              ],
              [
                9.290833029435827,
                49.15400807217895
              ],
              [
                9.290847818748556,
                49.1539470016267
              ],
              [
                9.290890739005777,
                49.15389190908561
              ],
              [
                9.290957588873663,
                49.15384818739745
              ],
              [
                9.29104182462138,
                49.153820116345685
              ],
              [
                9.291135200667036,
                49.153810443720445
              ],
              [
                9.29122857671269,
                49.153820116345685
              ],
              [
                9.291312812460408,
                49.15384818739745
              ],
              [
                9.291379662328294,
                49.15389190908561
              ],
              [
                9.291422582585515,
                49.1539470016267
              ],
              [
                9.291437371898244,
                49.15400807217895
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2838,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.288079665462302,
                49.15028260997941
              ],
              [
                9.288064877261702,
                49.15034368053166
              ],
              [
                9.288021960232015,
                49.15039877307275
              ],
              [
                9.287955115391124,
                49.15044249476091
              ],
              [
                9.287870885977796,
                49.150470565812675
              ],
              [
                9.287777516953863,
                49.150480238437915
              ],
              [
                9.28768414792993,
                49.150470565812675
              ],
              [
                9.287599918516602,
                49.15044249476091
              ],
              [
                9.28753307367571,
                49.15039877307275
              ],
              [
                9.287490156646024,
                49.15034368053166
              ],
              [
                9.287475368445424,
                49.15028260997941
              ],
              [
                9.287490156646024,
                49.150221539427164
              ],
              [
                9.28753307367571,
                49.150166446886075
              ],
              [
                9.287599918516602,
                49.15012272519792
              ],
              [
                9.28768414792993,
                49.15009465414615
              ],
              [
                9.287777516953863,
                49.15008498152091
              ],
              [
                9.287870885977796,
                49.15009465414615
              ],
              [
                9.287955115391124,
                49.15012272519792
              ],
              [
                9.288021960232015,
                49.150166446886075
              ],
              [
                9.288064877261702,
                49.150221539427164
              ],
              [
                9.288079665462302,
                49.15028260997941
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2824,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.292159555789535,
                49.15089315155323
              ],
              [
                9.292144767406691,
                49.150954222105476
              ],
              [
                9.29210184984811,
                49.151009314646565
              ],
              [
                9.29203500418345,
                49.15105303633472
              ],
              [
                9.29195077373211,
                49.15108110738649
              ],
              [
                9.291857403557533,
                49.15109078001173
              ],
              [
                9.291764033382956,
                49.15108110738649
              ],
              [
                9.291679802931615,
                49.15105303633472
              ],
              [
                9.291612957266954,
                49.151009314646565
              ],
              [
                9.291570039708374,
                49.150954222105476
              ],
              [
                9.29155525132553,
                49.15089315155323
              ],
              [
                9.291570039708374,
                49.15083208100098
              ],
              [
                9.291612957266954,
                49.15077698845989
              ],
              [
                9.291679802931615,
                49.15073326677173
              ],
              [
                9.291764033382956,
                49.150705195719965
              ],
              [
                9.291857403557533,
                49.150695523094726
              ],
              [
                9.29195077373211,
                49.150705195719965
              ],
              [
                9.29203500418345,
                49.15073326677173
              ],
              [
                9.29210184984811,
                49.15077698845989
              ],
              [
                9.292144767406691,
                49.15083208100098
              ],
              [
                9.292159555789535,
                49.15089315155323
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2797,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.294764800895637,
                49.14505419465017
              ],
              [
                9.294750014255447,
                49.14511526520242
              ],
              [
                9.29470710175424,
                49.14517035774351
              ],
              [
                9.294640263966626,
                49.14521407943167
              ],
              [
                9.294556043440942,
                49.14524215048343
              ],
              [
                9.294462684269039,
                49.14525182310867
              ],
              [
                9.294369325097136,
                49.14524215048343
              ],
              [
                9.294285104571452,
                49.14521407943167
              ],
              [
                9.294218266783838,
                49.14517035774351
              ],
              [
                9.29417535428263,
                49.14511526520242
              ],
              [
                9.294160567642441,
                49.14505419465017
              ],
              [
                9.29417535428263,
                49.14499312409792
              ],
              [
                9.294218266783838,
                49.14493803155683
              ],
              [
                9.294285104571452,
                49.144894309868675
              ],
              [
                9.294369325097136,
                49.14486623881691
              ],
              [
                9.294462684269039,
                49.14485656619167
              ],
              [
                9.294556043440942,
                49.14486623881691
              ],
              [
                9.294640263966626,
                49.144894309868675
              ],
              [
                9.29470710175424,
                49.14493803155683
              ],
              [
                9.294750014255447,
                49.14499312409792
              ],
              [
                9.294764800895637,
                49.14505419465017
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.272,
          "support_count": 1,
          "radius_m": 22.1,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.290351179106725,
                49.15421049778318
              ],
              [
                9.290336322509136,
                49.15427184592885
              ],
              [
                9.290293206983652,
                49.15432718889058
              ],
              [
                9.290226052978312,
                49.154371109313686
              ],
              [
                9.290141433995046,
                49.15439930796114
              ],
              [
                9.290047633129515,
                49.154409024552855
              ],
              [
                9.289953832263983,
                49.15439930796114
              ],
              [
                9.289869213280717,
                49.154371109313686
              ],
              [
                9.289802059275377,
                49.15432718889058
              ],
              [
                9.289758943749893,
                49.15427184592885
              ],
              [
                9.289744087152304,
                49.15421049778318
              ],
              [
                9.289758943749893,
                49.15414914963752
              ],
              [
                9.289802059275377,
                49.15409380667578
              ],
              [
                9.289869213280717,
                49.15404988625268
              ],
              [
                9.289953832263983,
                49.15402168760522
              ],
              [
                9.290047633129515,
                49.15401197101351
              ],
              [
                9.290141433995046,
                49.15402168760522
              ],
              [
                9.290226052978312,
                49.15404988625268
              ],
              [
                9.290293206983652,
                49.15409380667578
              ],
              [
                9.290336322509136,
                49.15414914963752
              ],
              [
                9.290351179106725,
                49.15421049778318
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2607,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.29925957153914,
                49.1499209644287
              ],
              [
                9.299244783446488,
                49.14998203498095
              ],
              [
                9.299201866730074,
                49.15003712752204
              ],
              [
                9.29913502237712,
                49.1500808492102
              ],
              [
                9.299050793578626,
                49.150108920261964
              ],
              [
                9.298957425236242,
                49.1501185928872
              ],
              [
                9.298864056893859,
                49.150108920261964
              ],
              [
                9.298779828095364,
                49.1500808492102
              ],
              [
                9.29871298374241,
                49.15003712752204
              ],
              [
                9.298670067025997,
                49.14998203498095
              ],
              [
                9.298655278933344,
                49.1499209644287
              ],
              [
                9.298670067025997,
                49.14985989387645
              ],
              [
                9.29871298374241,
                49.149804801335364
              ],
              [
                9.298779828095364,
                49.149761079647206
              ],
              [
                9.298864056893859,
                49.14973300859544
              ],
              [
                9.298957425236242,
                49.1497233359702
              ],
              [
                9.299050793578626,
                49.14973300859544
              ],
              [
                9.29913502237712,
                49.149761079647206
              ],
              [
                9.299201866730074,
                49.149804801335364
              ],
              [
                9.299244783446488,
                49.14985989387645
              ],
              [
                9.29925957153914,
                49.1499209644287
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_medium",
          "score": 0.2525,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.293817359048186,
                49.151081113774225
              ],
              [
                9.293802570609236,
                49.151142184326474
              ],
              [
                9.293759652887825,
                49.15119727686756
              ],
              [
                9.293692806969553,
                49.15124099855572
              ],
              [
                9.29360857619864,
                49.15126906960749
              ],
              [
                9.293515205669816,
                49.151278742232726
              ],
              [
                9.293421835140993,
                49.15126906960749
              ],
              [
                9.29333760437008,
                49.15124099855572
              ],
              [
                9.293270758451808,
                49.15119727686756
              ],
              [
                9.293227840730397,
                49.151142184326474
              ],
              [
                9.293213052291447,
                49.151081113774225
              ],
              [
                9.293227840730397,
                49.151020043221976
              ],
              [
                9.293270758451808,
                49.15096495068089
              ],
              [
                9.29333760437008,
                49.15092122899273
              ],
              [
                9.293421835140993,
                49.15089315794096
              ],
              [
                9.293515205669816,
                49.150883485315724
              ],
              [
                9.29360857619864,
                49.15089315794096
              ],
              [
                9.293692806969553,
                49.15092122899273
              ],
              [
                9.293759652887825,
                49.15096495068089
              ],
              [
                9.293802570609236,
                49.151020043221976
              ],
              [
                9.293817359048186,
                49.151081113774225
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4161,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272009942968142,
                49.15640855530263
              ],
              [
                9.271995152938691,
                49.15646962585488
              ],
              [
                9.271952230601476,
                49.15652471839597
              ],
              [
                9.271885377493916,
                49.15656844008413
              ],
              [
                9.271801137663974,
                49.156596511135895
              ],
              [
                9.27170775709314,
                49.156606183761134
              ],
              [
                9.271614376522304,
                49.156596511135895
              ],
              [
                9.271530136692363,
                49.15656844008413
              ],
              [
                9.271463283584803,
                49.15652471839597
              ],
              [
                9.271420361247587,
                49.15646962585488
              ],
              [
                9.271405571218137,
                49.15640855530263
              ],
              [
                9.271420361247587,
                49.156347484750384
              ],
              [
                9.271463283584803,
                49.156292392209295
              ],
              [
                9.271530136692363,
                49.15624867052114
              ],
              [
                9.271614376522304,
                49.15622059946937
              ],
              [
                9.27170775709314,
                49.15621092684413
              ],
              [
                9.271801137663974,
                49.15622059946937
              ],
              [
                9.271885377493916,
                49.15624867052114
              ],
              [
                9.271952230601476,
                49.156292392209295
              ],
              [
                9.271995152938691,
                49.156347484750384
              ],
              [
                9.272009942968142,
                49.15640855530263
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4149,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272095680515708,
                49.155318278585696
              ],
              [
                9.272080890811797,
                49.155379349137945
              ],
              [
                9.27203796941933,
                49.155434441679034
              ],
              [
                9.271971117783252,
                49.15547816336719
              ],
              [
                9.271886879807486,
                49.15550623441896
              ],
              [
                9.27179350129202,
                49.1555159070442
              ],
              [
                9.271700122776554,
                49.15550623441896
              ],
              [
                9.271615884800788,
                49.15547816336719
              ],
              [
                9.27154903316471,
                49.155434441679034
              ],
              [
                9.271506111772243,
                49.155379349137945
              ],
              [
                9.271491322068332,
                49.155318278585696
              ],
              [
                9.271506111772243,
                49.15525720803345
              ],
              [
                9.27154903316471,
                49.15520211549236
              ],
              [
                9.271615884800788,
                49.1551583938042
              ],
              [
                9.271700122776554,
                49.155130322752434
              ],
              [
                9.27179350129202,
                49.155120650127195
              ],
              [
                9.271886879807486,
                49.155130322752434
              ],
              [
                9.271971117783252,
                49.1551583938042
              ],
              [
                9.27203796941933,
                49.15520211549236
              ],
              [
                9.272080890811797,
                49.15525720803345
              ],
              [
                9.272095680515708,
                49.155318278585696
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4146,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.271982304611042,
                49.1568332479461
              ],
              [
                9.271967514454783,
                49.15689431849835
              ],
              [
                9.271924591749544,
                49.15694941103944
              ],
              [
                9.271857738068778,
                49.1569931327276
              ],
              [
                9.271773497516556,
                49.157021203779365
              ],
              [
                9.271680116145063,
                49.157030876404605
              ],
              [
                9.271586734773571,
                49.157021203779365
              ],
              [
                9.271502494221348,
                49.1569931327276
              ],
              [
                9.271435640540583,
                49.15694941103944
              ],
              [
                9.271392717835344,
                49.15689431849835
              ],
              [
                9.271377927679085,
                49.1568332479461
              ],
              [
                9.271392717835344,
                49.156772177393854
              ],
              [
                9.271435640540583,
                49.156717084852765
              ],
              [
                9.271502494221348,
                49.15667336316461
              ],
              [
                9.271586734773571,
                49.15664529211284
              ],
              [
                9.271680116145063,
                49.1566356194876
              ],
              [
                9.271773497516556,
                49.15664529211284
              ],
              [
                9.271857738068778,
                49.15667336316461
              ],
              [
                9.271924591749544,
                49.156717084852765
              ],
              [
                9.271967514454783,
                49.156772177393854
              ],
              [
                9.271982304611042,
                49.1568332479461
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4138,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.271964088421168,
                49.15711315900657
              ],
              [
                9.271949298181326,
                49.15717422955882
              ],
              [
                9.271906375233524,
                49.15722932209991
              ],
              [
                9.271839521174956,
                49.15727304378807
              ],
              [
                9.271755280146673,
                49.15730111483983
              ],
              [
                9.271661898247466,
                49.15731078746507
              ],
              [
                9.271568516348259,
                49.15730111483983
              ],
              [
                9.271484275319976,
                49.15727304378807
              ],
              [
                9.271417421261408,
                49.15722932209991
              ],
              [
                9.271374498313605,
                49.15717422955882
              ],
              [
                9.271359708073764,
                49.15711315900657
              ],
              [
                9.271374498313605,
                49.15705208845432
              ],
              [
                9.271417421261408,
                49.15699699591323
              ],
              [
                9.271484275319976,
                49.156953274225074
              ],
              [
                9.271568516348259,
                49.15692520317331
              ],
              [
                9.271661898247466,
                49.15691553054807
              ],
              [
                9.271755280146673,
                49.15692520317331
              ],
              [
                9.271839521174956,
                49.156953274225074
              ],
              [
                9.271906375233524,
                49.15699699591323
              ],
              [
                9.271949298181326,
                49.15705208845432
              ],
              [
                9.271964088421168,
                49.15711315900657
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4125,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272884622782536,
                49.1436497042919
              ],
              [
                9.272869836561433,
                49.14371077484415
              ],
              [
                9.272826925276474,
                49.14376586738524
              ],
              [
                9.272760089383207,
                49.1438095890734
              ],
              [
                9.27267587124454,
                49.143837660125165
              ],
              [
                9.272582514718666,
                49.143847332750404
              ],
              [
                9.272489158192792,
                49.143837660125165
              ],
              [
                9.272404940054125,
                49.1438095890734
              ],
              [
                9.272338104160857,
                49.14376586738524
              ],
              [
                9.272295192875898,
                49.14371077484415
              ],
              [
                9.272280406654795,
                49.1436497042919
              ],
              [
                9.272295192875898,
                49.143588633739654
              ],
              [
                9.272338104160857,
                49.143533541198565
              ],
              [
                9.272404940054125,
                49.14348981951041
              ],
              [
                9.272489158192792,
                49.14346174845864
              ],
              [
                9.272582514718666,
                49.1434520758334
              ],
              [
                9.27267587124454,
                49.14346174845864
              ],
              [
                9.272760089383207,
                49.14348981951041
              ],
              [
                9.272826925276474,
                49.143533541198565
              ],
              [
                9.272869836561433,
                49.143588633739654
              ],
              [
                9.272884622782536,
                49.1436497042919
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4121,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272123318886623,
                49.154893585928626
              ],
              [
                9.272108529309513,
                49.154954656480875
              ],
              [
                9.272065608285036,
                49.155009749021964
              ],
              [
                9.271998757222116,
                49.15505347071012
              ],
              [
                9.271914519968572,
                49.15508154176189
              ],
              [
                9.271821142253694,
                49.15509121438713
              ],
              [
                9.271727764538817,
                49.15508154176189
              ],
              [
                9.271643527285272,
                49.15505347071012
              ],
              [
                9.271576676222352,
                49.155009749021964
              ],
              [
                9.271533755197876,
                49.154954656480875
              ],
              [
                9.271518965620766,
                49.154893585928626
              ],
              [
                9.271533755197876,
                49.15483251537638
              ],
              [
                9.271576676222352,
                49.15477742283529
              ],
              [
                9.271643527285272,
                49.15473370114713
              ],
              [
                9.271727764538817,
                49.154705630095364
              ],
              [
                9.271821142253694,
                49.154695957470125
              ],
              [
                9.271914519968572,
                49.154705630095364
              ],
              [
                9.271998757222116,
                49.15473370114713
              ],
              [
                9.272065608285036,
                49.15477742283529
              ],
              [
                9.272108529309513,
                49.15483251537638
              ],
              [
                9.272123318886623,
                49.154893585928626
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4119,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272066157710482,
                49.15577192756028
              ],
              [
                9.272051367871121,
                49.15583299811253
              ],
              [
                9.272008446085565,
                49.15588809065362
              ],
              [
                9.271941593837235,
                49.15593181234178
              ],
              [
                9.271857355089987,
                49.15595988339354
              ],
              [
                9.271763975719324,
                49.15596955601878
              ],
              [
                9.271670596348661,
                49.15595988339354
              ],
              [
                9.271586357601413,
                49.15593181234178
              ],
              [
                9.271519505353083,
                49.15588809065362
              ],
              [
                9.271476583567527,
                49.15583299811253
              ],
              [
                9.271461793728166,
                49.15577192756028
              ],
              [
                9.271476583567527,
                49.15571085700803
              ],
              [
                9.271519505353083,
                49.15565576446694
              ],
              [
                9.271586357601413,
                49.155612042778785
              ],
              [
                9.271670596348661,
                49.15558397172702
              ],
              [
                9.271763975719324,
                49.15557429910178
              ],
              [
                9.271857355089987,
                49.15558397172702
              ],
              [
                9.271941593837235,
                49.155612042778785
              ],
              [
                9.272008446085565,
                49.15565576446694
              ],
              [
                9.272051367871121,
                49.15571085700803
              ],
              [
                9.272066157710482,
                49.15577192756028
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4074,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272155044343918,
                49.154178918924444
              ],
              [
                9.272140254980181,
                49.15423998947669
              ],
              [
                9.272097334574934,
                49.15429508201778
              ],
              [
                9.272030484476486,
                49.15433880370594
              ],
              [
                9.271946248438248,
                49.154366874757706
              ],
              [
                9.271852872070548,
                49.154376547382945
              ],
              [
                9.271759495702849,
                49.154366874757706
              ],
              [
                9.27167525966461,
                49.15433880370594
              ],
              [
                9.271608409566163,
                49.15429508201778
              ],
              [
                9.271565489160915,
                49.15423998947669
              ],
              [
                9.271550699797178,
                49.154178918924444
              ],
              [
                9.271565489160915,
                49.154117848372195
              ],
              [
                9.271608409566163,
                49.154062755831106
              ],
              [
                9.27167525966461,
                49.15401903414295
              ],
              [
                9.271759495702849,
                49.15399096309118
              ],
              [
                9.271852872070548,
                49.15398129046594
              ],
              [
                9.271946248438248,
                49.15399096309118
              ],
              [
                9.272030484476486,
                49.15401903414295
              ],
              [
                9.272097334574934,
                49.154062755831106
              ],
              [
                9.272140254980181,
                49.154117848372195
              ],
              [
                9.272155044343918,
                49.154178918924444
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4066,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272451838618284,
                49.14984553457313
              ],
              [
                9.272437050548147,
                49.14990660512538
              ],
              [
                9.272394133897073,
                49.14996169766647
              ],
              [
                9.27232728964589,
                49.15000541935463
              ],
              [
                9.272243060975631,
                49.15003349040639
              ],
              [
                9.2721496927754,
                49.15004316303163
              ],
              [
                9.27205632457517,
                49.15003349040639
              ],
              [
                9.27197209590491,
                49.15000541935463
              ],
              [
                9.271905251653727,
                49.14996169766647
              ],
              [
                9.271862335002654,
                49.14990660512538
              ],
              [
                9.271847546932516,
                49.14984553457313
              ],
              [
                9.271862335002654,
                49.14978446402088
              ],
              [
                9.271905251653727,
                49.14972937147979
              ],
              [
                9.27197209590491,
                49.149685649791635
              ],
              [
                9.27205632457517,
                49.14965757873987
              ],
              [
                9.2721496927754,
                49.14964790611463
              ],
              [
                9.272243060975631,
                49.14965757873987
              ],
              [
                9.27232728964589,
                49.149685649791635
              ],
              [
                9.272394133897073,
                49.14972937147979
              ],
              [
                9.272437050548147,
                49.14978446402088
              ],
              [
                9.272451838618284,
                49.14984553457313
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4053,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272492668031044,
                49.14921814769338
              ],
              [
                9.272477880148168,
                49.14927921824563
              ],
              [
                9.272434964040547,
                49.14933431078672
              ],
              [
                9.272368120635813,
                49.14937803247488
              ],
              [
                9.272283893032144,
                49.149406103526644
              ],
              [
                9.272190526014235,
                49.14941577615188
              ],
              [
                9.272097158996326,
                49.149406103526644
              ],
              [
                9.272012931392657,
                49.14937803247488
              ],
              [
                9.271946087987923,
                49.14933431078672
              ],
              [
                9.271903171880302,
                49.14927921824563
              ],
              [
                9.271888383997426,
                49.14921814769338
              ],
              [
                9.271903171880302,
                49.14915707714113
              ],
              [
                9.271946087987923,
                49.149101984600044
              ],
              [
                9.272012931392657,
                49.149058262911886
              ],
              [
                9.272097158996326,
                49.14903019186012
              ],
              [
                9.272190526014235,
                49.14902051923488
              ],
              [
                9.272283893032144,
                49.14903019186012
              ],
              [
                9.272368120635813,
                49.149058262911886
              ],
              [
                9.272434964040547,
                49.149101984600044
              ],
              [
                9.272477880148168,
                49.14915707714113
              ],
              [
                9.272492668031044,
                49.14921814769338
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4033,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272426084681076,
                49.150241270912666
              ],
              [
                9.272411296492816,
                49.150302341464915
              ],
              [
                9.272368379498939,
                49.150357434006004
              ],
              [
                9.272301534713826,
                49.15040115569416
              ],
              [
                9.272217305370777,
                49.15042922674593
              ],
              [
                9.272123936424752,
                49.15043889937117
              ],
              [
                9.272030567478726,
                49.15042922674593
              ],
              [
                9.271946338135677,
                49.15040115569416
              ],
              [
                9.271879493350564,
                49.150357434006004
              ],
              [
                9.271836576356687,
                49.150302341464915
              ],
              [
                9.271821788168428,
                49.150241270912666
              ],
              [
                9.271836576356687,
                49.15018020036042
              ],
              [
                9.271879493350564,
                49.15012510781933
              ],
              [
                9.271946338135677,
                49.15008138613117
              ],
              [
                9.272030567478726,
                49.150053315079404
              ],
              [
                9.272123936424752,
                49.150043642454165
              ],
              [
                9.272217305370777,
                49.150053315079404
              ],
              [
                9.272301534713826,
                49.15008138613117
              ],
              [
                9.272368379498939,
                49.15012510781933
              ],
              [
                9.272411296492816,
                49.15018020036042
              ],
              [
                9.272426084681076,
                49.150241270912666
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4024,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272299199430226,
                49.1521909962928
              ],
              [
                9.27228441065996,
                49.15225206684505
              ],
              [
                9.272241491977038,
                49.15230715938614
              ],
              [
                9.272174644561172,
                49.1523508810743
              ],
              [
                9.272090411903186,
                49.152378952126064
              ],
              [
                9.271997039282523,
                49.1523886247513
              ],
              [
                9.27190366666186,
                49.152378952126064
              ],
              [
                9.271819434003874,
                49.1523508810743
              ],
              [
                9.271752586588008,
                49.15230715938614
              ],
              [
                9.271709667905085,
                49.15225206684505
              ],
              [
                9.27169487913482,
                49.1521909962928
              ],
              [
                9.271709667905085,
                49.15212992574055
              ],
              [
                9.271752586588008,
                49.152074833199464
              ],
              [
                9.271819434003874,
                49.152031111511306
              ],
              [
                9.27190366666186,
                49.15200304045954
              ],
              [
                9.271997039282523,
                49.1519933678343
              ],
              [
                9.272090411903186,
                49.15200304045954
              ],
              [
                9.272174644561172,
                49.152031111511306
              ],
              [
                9.272241491977038,
                49.152074833199464
              ],
              [
                9.27228441065996,
                49.15212992574055
              ],
              [
                9.272299199430226,
                49.1521909962928
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.4013,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.271938962642075,
                49.157499243227896
              ],
              [
                9.271924172286946,
                49.157560313780145
              ],
              [
                9.271881249004567,
                49.157615406321234
              ],
              [
                9.271814394424881,
                49.15765912800939
              ],
              [
                9.271730152739954,
                49.15768719906116
              ],
              [
                9.271636770112849,
                49.1576968716864
              ],
              [
                9.271543387485744,
                49.15768719906116
              ],
              [
                9.271459145800817,
                49.15765912800939
              ],
              [
                9.271392291221131,
                49.157615406321234
              ],
              [
                9.271349367938752,
                49.157560313780145
              ],
              [
                9.271334577583623,
                49.157499243227896
              ],
              [
                9.271349367938752,
                49.15743817267565
              ],
              [
                9.271392291221131,
                49.15738308013456
              ],
              [
                9.271459145800817,
                49.1573393584464
              ],
              [
                9.271543387485744,
                49.157311287394634
              ],
              [
                9.271636770112849,
                49.157301614769395
              ],
              [
                9.271730152739954,
                49.157311287394634
              ],
              [
                9.271814394424881,
                49.1573393584464
              ],
              [
                9.271881249004567,
                49.15738308013456
              ],
              [
                9.271924172286946,
                49.15743817267565
              ],
              [
                9.271938962642075,
                49.157499243227896
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3928,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272799520604705,
                49.14427585864731
              ],
              [
                9.272784734196767,
                49.14433692919956
              ],
              [
                9.27274182236959,
                49.14439202174065
              ],
              [
                9.272674985631795,
                49.14443574342881
              ],
              [
                9.272590766428964,
                49.144463814480574
              ],
              [
                9.272497408723455,
                49.14447348710581
              ],
              [
                9.272404051017945,
                49.144463814480574
              ],
              [
                9.272319831815114,
                49.14443574342881
              ],
              [
                9.27225299507732,
                49.14439202174065
              ],
              [
                9.272210083250142,
                49.14433692919956
              ],
              [
                9.272195296842204,
                49.14427585864731
              ],
              [
                9.272210083250142,
                49.14421478809506
              ],
              [
                9.27225299507732,
                49.144159695553974
              ],
              [
                9.272319831815114,
                49.144115973865816
              ],
              [
                9.272404051017945,
                49.14408790281405
              ],
              [
                9.272497408723455,
                49.14407823018881
              ],
              [
                9.272590766428964,
                49.14408790281405
              ],
              [
                9.272674985631795,
                49.144115973865816
              ],
              [
                9.27274182236959,
                49.144159695553974
              ],
              [
                9.272784734196767,
                49.14421478809506
              ],
              [
                9.272799520604705,
                49.14427585864731
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3925,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272212197243709,
                49.15375504859751
              ],
              [
                9.272197408006518,
                49.15381611914976
              ],
              [
                9.272154487968525,
                49.15387121169085
              ],
              [
                9.272087638442091,
                49.153914933379006
              ],
              [
                9.27200340312463,
                49.15394300443077
              ],
              [
                9.271910027555919,
                49.15395267705601
              ],
              [
                9.271816651987207,
                49.15394300443077
              ],
              [
                9.271732416669746,
                49.153914933379006
              ],
              [
                9.271665567143312,
                49.15387121169085
              ],
              [
                9.27162264710532,
                49.15381611914976
              ],
              [
                9.271607857868128,
                49.15375504859751
              ],
              [
                9.27162264710532,
                49.15369397804526
              ],
              [
                9.271665567143312,
                49.15363888550417
              ],
              [
                9.271732416669746,
                49.153595163816014
              ],
              [
                9.271816651987207,
                49.15356709276425
              ],
              [
                9.271910027555919,
                49.15355742013901
              ],
              [
                9.27200340312463,
                49.15356709276425
              ],
              [
                9.272087638442091,
                49.153595163816014
              ],
              [
                9.272154487968525,
                49.15363888550417
              ],
              [
                9.272197408006518,
                49.15369397804526
              ],
              [
                9.272212197243709,
                49.15375504859751
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3925,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272349761022868,
                49.15164123735039
              ],
              [
                9.272334972416717,
                49.15170230790264
              ],
              [
                9.272292054210068,
                49.15175740044373
              ],
              [
                9.272225207536017,
                49.151801122131886
              ],
              [
                9.272140975812771,
                49.15182919318365
              ],
              [
                9.272047604228277,
                49.15183886580889
              ],
              [
                9.271954232643782,
                49.15182919318365
              ],
              [
                9.271870000920536,
                49.151801122131886
              ],
              [
                9.271803154246486,
                49.15175740044373
              ],
              [
                9.271760236039837,
                49.15170230790264
              ],
              [
                9.271745447433686,
                49.15164123735039
              ],
              [
                9.271760236039837,
                49.15158016679814
              ],
              [
                9.271803154246486,
                49.15152507425705
              ],
              [
                9.271870000920536,
                49.151481352568894
              ],
              [
                9.271954232643782,
                49.15145328151713
              ],
              [
                9.272047604228277,
                49.15144360889189
              ],
              [
                9.272140975812771,
                49.15145328151713
              ],
              [
                9.272225207536017,
                49.151481352568894
              ],
              [
                9.272292054210068,
                49.15152507425705
              ],
              [
                9.272334972416717,
                49.15158016679814
              ],
              [
                9.272349761022868,
                49.15164123735039
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3856,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.294227876210252,
                49.14418585602278
              ],
              [
                9.294213089829173,
                49.14424692657503
              ],
              [
                9.294170178079932,
                49.14430201911612
              ],
              [
                9.294103341463531,
                49.144345740804276
              ],
              [
                9.294019122413664,
                49.14437381185604
              ],
              [
                9.293925764877716,
                49.14438348448128
              ],
              [
                9.29383240734177,
                49.14437381185604
              ],
              [
                9.293748188291902,
                49.144345740804276
              ],
              [
                9.2936813516755,
                49.14430201911612
              ],
              [
                9.29363843992626,
                49.14424692657503
              ],
              [
                9.29362365354518,
                49.14418585602278
              ],
              [
                9.29363843992626,
                49.14412478547053
              ],
              [
                9.2936813516755,
                49.14406969292944
              ],
              [
                9.293748188291902,
                49.144025971241284
              ],
              [
                9.29383240734177,
                49.14399790018952
              ],
              [
                9.293925764877716,
                49.14398822756428
              ],
              [
                9.294019122413664,
                49.14399790018952
              ],
              [
                9.294103341463531,
                49.144025971241284
              ],
              [
                9.294170178079932,
                49.14406969292944
              ],
              [
                9.294213089829173,
                49.14412478547053
              ],
              [
                9.294227876210252,
                49.14418585602278
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3823,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272552961989936,
                49.1487460165029
              ],
              [
                9.272538174247977,
                49.14880708705515
              ],
              [
                9.272495258549313,
                49.148862179596236
              ],
              [
                9.272428415781542,
                49.148905901284394
              ],
              [
                9.272344188980496,
                49.14893397233616
              ],
              [
                9.2722508228523,
                49.1489436449614
              ],
              [
                9.272157456724104,
                49.14893397233616
              ],
              [
                9.272073229923057,
                49.148905901284394
              ],
              [
                9.272006387155287,
                49.148862179596236
              ],
              [
                9.271963471456623,
                49.14880708705515
              ],
              [
                9.271948683714664,
                49.1487460165029
              ],
              [
                9.271963471456623,
                49.14868494595065
              ],
              [
                9.272006387155287,
                49.14862985340956
              ],
              [
                9.272073229923057,
                49.1485861317214
              ],
              [
                9.272157456724104,
                49.148558060669636
              ],
              [
                9.2722508228523,
                49.1485483880444
              ],
              [
                9.272344188980496,
                49.148558060669636
              ],
              [
                9.272428415781542,
                49.1485861317214
              ],
              [
                9.272495258549313,
                49.14862985340956
              ],
              [
                9.272538174247977,
                49.14868494595065
              ],
              [
                9.272552961989936,
                49.1487460165029
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3603,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.271852906849068,
                49.158821581685956
              ],
              [
                9.27183811609906,
                49.158882652238205
              ],
              [
                9.271795191670698,
                49.158937744779294
              ],
              [
                9.271728335306104,
                49.15898146646745
              ],
              [
                9.27164409137206,
                49.15900953751922
              ],
              [
                9.27155070625179,
                49.15901921014446
              ],
              [
                9.271457321131521,
                49.15900953751922
              ],
              [
                9.271373077197477,
                49.15898146646745
              ],
              [
                9.271306220832884,
                49.158937744779294
              ],
              [
                9.271263296404522,
                49.158882652238205
              ],
              [
                9.271248505654514,
                49.158821581685956
              ],
              [
                9.271263296404522,
                49.15876051113371
              ],
              [
                9.271306220832884,
                49.15870541859262
              ],
              [
                9.271373077197477,
                49.15866169690446
              ],
              [
                9.271457321131521,
                49.158633625852694
              ],
              [
                9.27155070625179,
                49.158623953227455
              ],
              [
                9.27164409137206,
                49.158633625852694
              ],
              [
                9.271728335306104,
                49.15866169690446
              ],
              [
                9.271795191670698,
                49.15870541859262
              ],
              [
                9.27183811609906,
                49.15876051113371
              ],
              [
                9.271852906849068,
                49.158821581685956
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3445,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.272059557983669,
                49.156100510392264
              ],
              [
                9.272044768046198,
                49.15616158094451
              ],
              [
                9.272001845975916,
                49.1562166734856
              ],
              [
                9.271934993284114,
                49.15626039517376
              ],
              [
                9.271850753978061,
                49.156288466225526
              ],
              [
                9.271757373987958,
                49.156298138850765
              ],
              [
                9.271663993997855,
                49.156288466225526
              ],
              [
                9.271579754691802,
                49.15626039517376
              ],
              [
                9.271512902,
                49.1562166734856
              ],
              [
                9.271469979929718,
                49.15616158094451
              ],
              [
                9.271455189992247,
                49.156100510392264
              ],
              [
                9.271469979929718,
                49.156039439840015
              ],
              [
                9.271512902,
                49.155984347298926
              ],
              [
                9.271579754691802,
                49.15594062561077
              ],
              [
                9.271663993997855,
                49.155912554559
              ],
              [
                9.271757373987958,
                49.15590288193376
              ],
              [
                9.271850753978061,
                49.155912554559
              ],
              [
                9.271934993284114,
                49.15594062561077
              ],
              [
                9.272001845975916,
                49.155984347298926
              ],
              [
                9.272044768046198,
                49.156039439840015
              ],
              [
                9.272059557983669,
                49.156100510392264
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3398,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.29111823092133,
                49.1581111248742
              ],
              [
                9.29110344038348,
                49.15817219542645
              ],
              [
                9.291060516570836,
                49.15822728796754
              ],
              [
                9.290993661165242,
                49.1582710096557
              ],
              [
                9.290909418439607,
                49.158299080707465
              ],
              [
                9.29081603465887,
                49.158308753332705
              ],
              [
                9.290722650878134,
                49.158299080707465
              ],
              [
                9.2906384081525,
                49.1582710096557
              ],
              [
                9.290571552746906,
                49.15822728796754
              ],
              [
                9.290528628934261,
                49.15817219542645
              ],
              [
                9.290513838396413,
                49.1581111248742
              ],
              [
                9.290528628934261,
                49.158050054321954
              ],
              [
                9.290571552746906,
                49.157994961780865
              ],
              [
                9.2906384081525,
                49.15795124009271
              ],
              [
                9.290722650878134,
                49.15792316904094
              ],
              [
                9.29081603465887,
                49.1579134964157
              ],
              [
                9.290909418439607,
                49.15792316904094
              ],
              [
                9.290993661165242,
                49.15795124009271
              ],
              [
                9.291060516570836,
                49.157994961780865
              ],
              [
                9.29110344038348,
                49.158050054321954
              ],
              [
                9.29111823092133,
                49.1581111248742
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3365,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.281186669781471,
                49.157834333019
              ],
              [
                9.28117187932628,
                49.157895403571246
              ],
              [
                9.281128955753507,
                49.157950496112335
              ],
              [
                9.281062100721527,
                49.15799421780049
              ],
              [
                9.280977858466672,
                49.15802228885226
              ],
              [
                9.2808844752078,
                49.1580319614775
              ],
              [
                9.28079109194893,
                49.15802228885226
              ],
              [
                9.280706849694074,
                49.15799421780049
              ],
              [
                9.280639994662094,
                49.157950496112335
              ],
              [
                9.280597071089321,
                49.157895403571246
              ],
              [
                9.28058228063413,
                49.157834333019
              ],
              [
                9.280597071089321,
                49.15777326246675
              ],
              [
                9.280639994662094,
                49.15771816992566
              ],
              [
                9.280706849694074,
                49.1576744482375
              ],
              [
                9.28079109194893,
                49.157646377185735
              ],
              [
                9.2808844752078,
                49.157636704560495
              ],
              [
                9.280977858466672,
                49.157646377185735
              ],
              [
                9.281062100721527,
                49.1576744482375
              ],
              [
                9.281128955753507,
                49.15771816992566
              ],
              [
                9.28117187932628,
                49.15777326246675
              ],
              [
                9.281186669781471,
                49.157834333019
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3329,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.29183459459499,
                49.15841152105159
              ],
              [
                9.291819803967437,
                49.15847259160384
              ],
              [
                9.291776879894456,
                49.15852768414493
              ],
              [
                9.29171002408338,
                49.15857140583309
              ],
              [
                9.291625780846811,
                49.15859947688485
              ],
              [
                9.291532396499699,
                49.15860914951009
              ],
              [
                9.291439012152587,
                49.15859947688485
              ],
              [
                9.291354768916017,
                49.15857140583309
              ],
              [
                9.291287913104942,
                49.15852768414493
              ],
              [
                9.291244989031961,
                49.15847259160384
              ],
              [
                9.291230198404408,
                49.15841152105159
              ],
              [
                9.291244989031961,
                49.15835045049934
              ],
              [
                9.291287913104942,
                49.15829535795825
              ],
              [
                9.291354768916017,
                49.158251636270094
              ],
              [
                9.291439012152587,
                49.15822356521833
              ],
              [
                9.291532396499699,
                49.15821389259309
              ],
              [
                9.291625780846811,
                49.15822356521833
              ],
              [
                9.29171002408338,
                49.158251636270094
              ],
              [
                9.291776879894456,
                49.15829535795825
              ],
              [
                9.291819803967437,
                49.15835045049934
              ],
              [
                9.29183459459499,
                49.15841152105159
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3322,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.27335343566282,
                49.158254217837346
              ],
              [
                9.273338645082243,
                49.158315288389595
              ],
              [
                9.273295721145589,
                49.158370380930684
              ],
              [
                9.273228865546844,
                49.15841410261884
              ],
              [
                9.273144622577828,
                49.15844217367061
              ],
              [
                9.273051238527302,
                49.15845184629585
              ],
              [
                9.272957854476775,
                49.15844217367061
              ],
              [
                9.272873611507759,
                49.15841410261884
              ],
              [
                9.272806755909015,
                49.158370380930684
              ],
              [
                9.27276383197236,
                49.158315288389595
              ],
              [
                9.272749041391783,
                49.158254217837346
              ],
              [
                9.27276383197236,
                49.1581931472851
              ],
              [
                9.272806755909015,
                49.15813805474401
              ],
              [
                9.272873611507759,
                49.15809433305585
              ],
              [
                9.272957854476775,
                49.158066262004084
              ],
              [
                9.273051238527302,
                49.158056589378845
              ],
              [
                9.273144622577828,
                49.158066262004084
              ],
              [
                9.273228865546844,
                49.15809433305585
              ],
              [
                9.273295721145589,
                49.15813805474401
              ],
              [
                9.273338645082243,
                49.1581931472851
              ],
              [
                9.27335343566282,
                49.158254217837346
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3318,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.27373649281821,
                49.158274563807765
              ],
              [
                9.273721702231558,
                49.158335634360014
              ],
              [
                9.27367877827727,
                49.158390726901104
              ],
              [
                9.273611922651064,
                49.15843444858926
              ],
              [
                9.273527679647442,
                49.15846251964103
              ],
              [
                9.273434295558554,
                49.15847219226627
              ],
              [
                9.273340911469665,
                49.15846251964103
              ],
              [
                9.273256668466043,
                49.15843444858926
              ],
              [
                9.273189812839837,
                49.158390726901104
              ],
              [
                9.273146888885549,
                49.158335634360014
              ],
              [
                9.273132098298897,
                49.158274563807765
              ],
              [
                9.273146888885549,
                49.158213493255516
              ],
              [
                9.273189812839837,
                49.15815840071443
              ],
              [
                9.273256668466043,
                49.15811467902627
              ],
              [
                9.273340911469665,
                49.158086607974504
              ],
              [
                9.273434295558554,
                49.158076935349264
              ],
              [
                9.273527679647442,
                49.158086607974504
              ],
              [
                9.273611922651064,
                49.15811467902627
              ],
              [
                9.27367877827727,
                49.15815840071443
              ],
              [
                9.273721702231558,
                49.158213493255516
              ],
              [
                9.27373649281821,
                49.158274563807765
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3263,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.292414666554963,
                49.15816171016225
              ],
              [
                9.29239987600201,
                49.158222780714496
              ],
              [
                9.292356952145527,
                49.158277873255585
              ],
              [
                9.292290096671652,
                49.15832159494374
              ],
              [
                9.29220585385998,
                49.15834966599551
              ],
              [
                9.292112469983868,
                49.15835933862075
              ],
              [
                9.292019086107757,
                49.15834966599551
              ],
              [
                9.291934843296085,
                49.15832159494374
              ],
              [
                9.29186798782221,
                49.158277873255585
              ],
              [
                9.291825063965726,
                49.158222780714496
              ],
              [
                9.291810273412773,
                49.15816171016225
              ],
              [
                9.291825063965726,
                49.15810063961
              ],
              [
                9.29186798782221,
                49.15804554706891
              ],
              [
                9.291934843296085,
                49.15800182538075
              ],
              [
                9.292019086107757,
                49.157973754328985
              ],
              [
                9.292112469983868,
                49.157964081703746
              ],
              [
                9.29220585385998,
                49.157973754328985
              ],
              [
                9.292290096671652,
                49.15800182538075
              ],
              [
                9.292356952145527,
                49.15804554706891
              ],
              [
                9.29239987600201,
                49.15810063961
              ],
              [
                9.292414666554963,
                49.15816171016225
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3262,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.287251932183118,
                49.14392396521259
              ],
              [
                9.287237145880182,
                49.14398503576484
              ],
              [
                9.287194234357727,
                49.14404012830593
              ],
              [
                9.287127398094555,
                49.14408384999409
              ],
              [
                9.287043179489778,
                49.144111921045855
              ],
              [
                9.28694982244722,
                49.144121593671095
              ],
              [
                9.28685646540466,
                49.144111921045855
              ],
              [
                9.286772246799885,
                49.14408384999409
              ],
              [
                9.286705410536712,
                49.14404012830593
              ],
              [
                9.286662499014257,
                49.14398503576484
              ],
              [
                9.286647712711321,
                49.14392396521259
              ],
              [
                9.286662499014257,
                49.143862894660344
              ],
              [
                9.286705410536712,
                49.143807802119255
              ],
              [
                9.286772246799885,
                49.1437640804311
              ],
              [
                9.28685646540466,
                49.14373600937933
              ],
              [
                9.28694982244722,
                49.14372633675409
              ],
              [
                9.287043179489778,
                49.14373600937933
              ],
              [
                9.287127398094555,
                49.1437640804311
              ],
              [
                9.287194234357727,
                49.143807802119255
              ],
              [
                9.287237145880182,
                49.143862894660344
              ],
              [
                9.287251932183118,
                49.14392396521259
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3254,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.27435572609081,
                49.15834065211358
              ],
              [
                9.274340935484421,
                49.15840172266583
              ],
              [
                9.27429801147286,
                49.15845681520692
              ],
              [
                9.274231155757446,
                49.158500536895076
              ],
              [
                9.274146912641415,
                49.15852860794684
              ],
              [
                9.274053528427922,
                49.15853828057208
              ],
              [
                9.27396014421443,
                49.15852860794684
              ],
              [
                9.273875901098398,
                49.158500536895076
              ],
              [
                9.273809045382984,
                49.15845681520692
              ],
              [
                9.273766121371423,
                49.15840172266583
              ],
              [
                9.273751330765034,
                49.15834065211358
              ],
              [
                9.273766121371423,
                49.15827958156133
              ],
              [
                9.273809045382984,
                49.15822448902024
              ],
              [
                9.273875901098398,
                49.158180767332084
              ],
              [
                9.27396014421443,
                49.15815269628032
              ],
              [
                9.274053528427922,
                49.15814302365508
              ],
              [
                9.274146912641415,
                49.15815269628032
              ],
              [
                9.274231155757446,
                49.158180767332084
              ],
              [
                9.27429801147286,
                49.15822448902024
              ],
              [
                9.274340935484421,
                49.15827958156133
              ],
              [
                9.27435572609081,
                49.15834065211358
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3252,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.281647915000379,
                49.15782851938867
              ],
              [
                9.281633124546923,
                49.15788958994092
              ],
              [
                9.28159020097919,
                49.15794468248201
              ],
              [
                9.281523345955057,
                49.15798840417017
              ],
              [
                9.28143910371009,
                49.158016475221935
              ],
              [
                9.281345720462179,
                49.158026147847174
              ],
              [
                9.281252337214267,
                49.158016475221935
              ],
              [
                9.281168094969301,
                49.15798840417017
              ],
              [
                9.281101239945167,
                49.15794468248201
              ],
              [
                9.281058316377434,
                49.15788958994092
              ],
              [
                9.281043525923979,
                49.15782851938867
              ],
              [
                9.281058316377434,
                49.157767448836424
              ],
              [
                9.281101239945167,
                49.157712356295335
              ],
              [
                9.281168094969301,
                49.15766863460718
              ],
              [
                9.281252337214267,
                49.15764056355541
              ],
              [
                9.281345720462179,
                49.15763089093017
              ],
              [
                9.28143910371009,
                49.15764056355541
              ],
              [
                9.281523345955057,
                49.15766863460718
              ],
              [
                9.28159020097919,
                49.157712356295335
              ],
              [
                9.281633124546923,
                49.157767448836424
              ],
              [
                9.281647915000379,
                49.15782851938867
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3228,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.292236302850256,
                49.15842271688088
              ],
              [
                9.29222151221936,
                49.15848378743313
              ],
              [
                9.292178588136677,
                49.158538879974216
              ],
              [
                9.29211173231049,
                49.158582601662374
              ],
              [
                9.292027489054878,
                49.15861067271414
              ],
              [
                9.291934104686655,
                49.15862034533938
              ],
              [
                9.291840720318433,
                49.15861067271414
              ],
              [
                9.29175647706282,
                49.158582601662374
              ],
              [
                9.291689621236634,
                49.158538879974216
              ],
              [
                9.29164669715395,
                49.15848378743313
              ],
              [
                9.291631906523055,
                49.15842271688088
              ],
              [
                9.29164669715395,
                49.15836164632863
              ],
              [
                9.291689621236634,
                49.15830655378754
              ],
              [
                9.29175647706282,
                49.15826283209938
              ],
              [
                9.291840720318433,
                49.158234761047616
              ],
              [
                9.291934104686655,
                49.15822508842238
              ],
              [
                9.292027489054878,
                49.158234761047616
              ],
              [
                9.29211173231049,
                49.15826283209938
              ],
              [
                9.292178588136677,
                49.15830655378754
              ],
              [
                9.29222151221936,
                49.15836164632863
              ],
              [
                9.292236302850256,
                49.15842271688088
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.321,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.288034084912836,
                49.14394573924152
              ],
              [
                9.288019298603404,
                49.14400680979377
              ],
              [
                9.287976387062093,
                49.14406190233486
              ],
              [
                9.287909550769553,
                49.14410562402302
              ],
              [
                9.287825332127772,
                49.144133695074785
              ],
              [
                9.287731975044192,
                49.144143367700025
              ],
              [
                9.287638617960612,
                49.144133695074785
              ],
              [
                9.28755439931883,
                49.14410562402302
              ],
              [
                9.287487563026291,
                49.14406190233486
              ],
              [
                9.28744465148498,
                49.14400680979377
              ],
              [
                9.287429865175548,
                49.14394573924152
              ],
              [
                9.28744465148498,
                49.143884668689275
              ],
              [
                9.287487563026291,
                49.143829576148185
              ],
              [
                9.28755439931883,
                49.14378585446003
              ],
              [
                9.287638617960612,
                49.14375778340826
              ],
              [
                9.287731975044192,
                49.14374811078302
              ],
              [
                9.287825332127772,
                49.14375778340826
              ],
              [
                9.287909550769553,
                49.14378585446003
              ],
              [
                9.287976387062093,
                49.143829576148185
              ],
              [
                9.288019298603404,
                49.143884668689275
              ],
              [
                9.288034084912836,
                49.14394573924152
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3206,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.28866867976052,
                49.14396340546712
              ],
              [
                9.288653893445815,
                49.14402447601937
              ],
              [
                9.288610981889207,
                49.14407956856046
              ],
              [
                9.288544145572839,
                49.144123290248615
              ],
              [
                9.288459926901034,
                49.14415136130038
              ],
              [
                9.288366569784172,
                49.14416103392562
              ],
              [
                9.28827321266731,
                49.14415136130038
              ],
              [
                9.288188993995504,
                49.144123290248615
              ],
              [
                9.288122157679137,
                49.14407956856046
              ],
              [
                9.288079246122528,
                49.14402447601937
              ],
              [
                9.288064459807824,
                49.14396340546712
              ],
              [
                9.288079246122528,
                49.14390233491487
              ],
              [
                9.288122157679137,
                49.14384724237378
              ],
              [
                9.288188993995504,
                49.14380352068562
              ],
              [
                9.28827321266731,
                49.14377544963386
              ],
              [
                9.288366569784172,
                49.14376577700862
              ],
              [
                9.288459926901034,
                49.14377544963386
              ],
              [
                9.288544145572839,
                49.14380352068562
              ],
              [
                9.288610981889207,
                49.14384724237378
              ],
              [
                9.288653893445815,
                49.14390233491487
              ],
              [
                9.28866867976052,
                49.14396340546712
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3198,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.283799282467196,
                49.14381817848592
              ],
              [
                9.283784496195826,
                49.14387924903817
              ],
              [
                9.283741584764977,
                49.14393434157926
              ],
              [
                9.283674748644483,
                49.14397806326742
              ],
              [
                9.283590530219493,
                49.144006134319184
              ],
              [
                9.28349717337623,
                49.144015806944424
              ],
              [
                9.283403816532966,
                49.144006134319184
              ],
              [
                9.283319598107976,
                49.14397806326742
              ],
              [
                9.283252761987482,
                49.14393434157926
              ],
              [
                9.283209850556633,
                49.14387924903817
              ],
              [
                9.283195064285263,
                49.14381817848592
              ],
              [
                9.283209850556633,
                49.14375710793367
              ],
              [
                9.283252761987482,
                49.143702015392584
              ],
              [
                9.283319598107976,
                49.143658293704426
              ],
              [
                9.283403816532966,
                49.14363022265266
              ],
              [
                9.28349717337623,
                49.14362055002742
              ],
              [
                9.283590530219493,
                49.14363022265266
              ],
              [
                9.283674748644483,
                49.143658293704426
              ],
              [
                9.283741584764977,
                49.143702015392584
              ],
              [
                9.283784496195826,
                49.14375710793367
              ],
              [
                9.283799282467196,
                49.14381817848592
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3196,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.282941456658586,
                49.14382330727188
              ],
              [
                9.282926670385685,
                49.14388437782413
              ],
              [
                9.282883758950396,
                49.14393947036522
              ],
              [
                9.282816922822985,
                49.143983192053376
              ],
              [
                9.282732704389277,
                49.14401126310514
              ],
              [
                9.282639347536351,
                49.14402093573038
              ],
              [
                9.282545990683426,
                49.14401126310514
              ],
              [
                9.282461772249718,
                49.143983192053376
              ],
              [
                9.282394936122307,
                49.14393947036522
              ],
              [
                9.282352024687018,
                49.14388437782413
              ],
              [
                9.282337238414117,
                49.14382330727188
              ],
              [
                9.282352024687018,
                49.14376223671963
              ],
              [
                9.282394936122307,
                49.14370714417854
              ],
              [
                9.282461772249718,
                49.143663422490384
              ],
              [
                9.282545990683426,
                49.14363535143862
              ],
              [
                9.282639347536351,
                49.14362567881338
              ],
              [
                9.282732704389277,
                49.14363535143862
              ],
              [
                9.282816922822985,
                49.143663422490384
              ],
              [
                9.282883758950396,
                49.14370714417854
              ],
              [
                9.282926670385685,
                49.14376223671963
              ],
              [
                9.282941456658586,
                49.14382330727188
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3172,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.28912614721471,
                49.14397614071588
              ],
              [
                9.289111360896205,
                49.14403721126813
              ],
              [
                9.28906844932857,
                49.14409230380922
              ],
              [
                9.289001612995024,
                49.144136025497374
              ],
              [
                9.288917394301574,
                49.14416409654914
              ],
              [
                9.28882403716072,
                49.14417376917438
              ],
              [
                9.288730680019867,
                49.14416409654914
              ],
              [
                9.288646461326417,
                49.144136025497374
              ],
              [
                9.288579624992872,
                49.14409230380922
              ],
              [
                9.288536713425236,
                49.14403721126813
              ],
              [
                9.288521927106732,
                49.14397614071588
              ],
              [
                9.288536713425236,
                49.14391507016363
              ],
              [
                9.288579624992872,
                49.14385997762254
              ],
              [
                9.288646461326417,
                49.14381625593438
              ],
              [
                9.288730680019867,
                49.14378818488262
              ],
              [
                9.28882403716072,
                49.14377851225738
              ],
              [
                9.288917394301574,
                49.14378818488262
              ],
              [
                9.289001612995024,
                49.14381625593438
              ],
              [
                9.28906844932857,
                49.14385997762254
              ],
              [
                9.289111360896205,
                49.14391507016363
              ],
              [
                9.28912614721471,
                49.14397614071588
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3171,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.27907433769301,
                49.143725321693445
              ],
              [
                9.279059551449345,
                49.143786392245694
              ],
              [
                9.279016640098906,
                49.14384148478678
              ],
              [
                9.278949804103652,
                49.14388520647494
              ],
              [
                9.278865585836472,
                49.14391327752671
              ],
              [
                9.278772229168142,
                49.143922950151946
              ],
              [
                9.278678872499812,
                49.14391327752671
              ],
              [
                9.278594654232633,
                49.14388520647494
              ],
              [
                9.278527818237379,
                49.14384148478678
              ],
              [
                9.27848490688694,
                49.143786392245694
              ],
              [
                9.278470120643275,
                49.143725321693445
              ],
              [
                9.27848490688694,
                49.143664251141196
              ],
              [
                9.278527818237379,
                49.14360915860011
              ],
              [
                9.278594654232633,
                49.14356543691195
              ],
              [
                9.278678872499812,
                49.14353736586018
              ],
              [
                9.278772229168142,
                49.143527693234944
              ],
              [
                9.278865585836472,
                49.14353736586018
              ],
              [
                9.278949804103652,
                49.14356543691195
              ],
              [
                9.279016640098906,
                49.14360915860011
              ],
              [
                9.279059551449345,
                49.143664251141196
              ],
              [
                9.27907433769301,
                49.143725321693445
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3152,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.29095012840984,
                49.1583092256372
              ],
              [
                9.290935337812835,
                49.158370296189446
              ],
              [
                9.290892413828509,
                49.158425388730535
              ],
              [
                9.290825558155515,
                49.15846911041869
              ],
              [
                9.290741315092937,
                49.15849718147046
              ],
              [
                9.290647930938697,
                49.1585068540957
              ],
              [
                9.290554546784456,
                49.15849718147046
              ],
              [
                9.290470303721879,
                49.15846911041869
              ],
              [
                9.290403448048885,
                49.158425388730535
              ],
              [
                9.290360524064559,
                49.158370296189446
              ],
              [
                9.290345733467554,
                49.1583092256372
              ],
              [
                9.290360524064559,
                49.15824815508495
              ],
              [
                9.290403448048885,
                49.15819306254386
              ],
              [
                9.290470303721879,
                49.1581493408557
              ],
              [
                9.290554546784456,
                49.158121269803935
              ],
              [
                9.290647930938697,
                49.158111597178696
              ],
              [
                9.290741315092937,
                49.158121269803935
              ],
              [
                9.290825558155515,
                49.1581493408557
              ],
              [
                9.290892413828509,
                49.15819306254386
              ],
              [
                9.290935337812835,
                49.15824815508495
              ],
              [
                9.29095012840984,
                49.1583092256372
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3145,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.293390738184607,
                49.15829677540986
              ],
              [
                9.29337594759132,
                49.15835784596211
              ],
              [
                9.293333023617784,
                49.1584129385032
              ],
              [
                9.293266167961596,
                49.158456660191355
              ],
              [
                9.293181924920194,
                49.15848473124312
              ],
              [
                9.293088540789428,
                49.15849440386836
              ],
              [
                9.292995156658662,
                49.15848473124312
              ],
              [
                9.292910913617261,
                49.158456660191355
              ],
              [
                9.292844057961073,
                49.1584129385032
              ],
              [
                9.292801133987536,
                49.15835784596211
              ],
              [
                9.29278634339425,
                49.15829677540986
              ],
              [
                9.292801133987536,
                49.15823570485761
              ],
              [
                9.292844057961073,
                49.15818061231652
              ],
              [
                9.292910913617261,
                49.15813689062836
              ],
              [
                9.292995156658662,
                49.1581088195766
              ],
              [
                9.293088540789428,
                49.15809914695136
              ],
              [
                9.293181924920194,
                49.1581088195766
              ],
              [
                9.293266167961596,
                49.15813689062836
              ],
              [
                9.293333023617784,
                49.15818061231652
              ],
              [
                9.29337594759132,
                49.15823570485761
              ],
              [
                9.293390738184607,
                49.15829677540986
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3136,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.286779060589348,
                49.1439204710263
              ],
              [
                9.286764274287455,
                49.14398154157855
              ],
              [
                9.286721362768025,
                49.14403663411964
              ],
              [
                9.286654526509565,
                49.144080355807795
              ],
              [
                9.286570307910727,
                49.14410842685956
              ],
              [
                9.286476950874752,
                49.1441180994848
              ],
              [
                9.286383593838776,
                49.14410842685956
              ],
              [
                9.286299375239938,
                49.144080355807795
              ],
              [
                9.286232538981478,
                49.14403663411964
              ],
              [
                9.286189627462049,
                49.14398154157855
              ],
              [
                9.286174841160156,
                49.1439204710263
              ],
              [
                9.286189627462049,
                49.14385940047405
              ],
              [
                9.286232538981478,
                49.14380430793296
              ],
              [
                9.286299375239938,
                49.1437605862448
              ],
              [
                9.286383593838776,
                49.14373251519304
              ],
              [
                9.286476950874752,
                49.1437228425678
              ],
              [
                9.286570307910727,
                49.14373251519304
              ],
              [
                9.286654526509565,
                49.1437605862448
              ],
              [
                9.286721362768025,
                49.14380430793296
              ],
              [
                9.286764274287455,
                49.14385940047405
              ],
              [
                9.286779060589348,
                49.1439204710263
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3133,
          "support_count": 3,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.281798293575708,
                49.15805944287569
              ],
              [
                9.281783503053294,
                49.15812051342794
              ],
              [
                9.281740579285438,
                49.15817560596903
              ],
              [
                9.281673723949604,
                49.158219327657186
              ],
              [
                9.281589481311874,
                49.15824739870895
              ],
              [
                9.28149609762858,
                49.15825707133419
              ],
              [
                9.281402713945285,
                49.15824739870895
              ],
              [
                9.281318471307555,
                49.158219327657186
              ],
              [
                9.28125161597172,
                49.15817560596903
              ],
              [
                9.281208692203865,
                49.15812051342794
              ],
              [
                9.281193901681451,
                49.15805944287569
              ],
              [
                9.281208692203865,
                49.15799837232344
              ],
              [
                9.28125161597172,
                49.15794327978235
              ],
              [
                9.281318471307555,
                49.15789955809419
              ],
              [
                9.281402713945285,
                49.15787148704243
              ],
              [
                9.28149609762858,
                49.15786181441719
              ],
              [
                9.281589481311874,
                49.15787148704243
              ],
              [
                9.281673723949604,
                49.15789955809419
              ],
              [
                9.281740579285438,
                49.15794327978235
              ],
              [
                9.281783503053294,
                49.15799837232344
              ],
              [
                9.281798293575708,
                49.15805944287569
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3111,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.274840163512094,
                49.14358810871211
              ],
              [
                9.274825377309373,
                49.14364917926436
              ],
              [
                9.274782466077749,
                49.14370427180545
              ],
              [
                9.274715630267558,
                49.143747993493605
              ],
              [
                9.274631412233571,
                49.14377606454537
              ],
              [
                9.274538055823738,
                49.14378573717061
              ],
              [
                9.274444699413905,
                49.14377606454537
              ],
              [
                9.274360481379919,
                49.143747993493605
              ],
              [
                9.274293645569728,
                49.14370427180545
              ],
              [
                9.274250734338104,
                49.14364917926436
              ],
              [
                9.274235948135383,
                49.14358810871211
              ],
              [
                9.274250734338104,
                49.14352703815986
              ],
              [
                9.274293645569728,
                49.14347194561877
              ],
              [
                9.274360481379919,
                49.14342822393061
              ],
              [
                9.274444699413905,
                49.14340015287885
              ],
              [
                9.274538055823738,
                49.14339048025361
              ],
              [
                9.274631412233571,
                49.14340015287885
              ],
              [
                9.274715630267558,
                49.14342822393061
              ],
              [
                9.274782466077749,
                49.14347194561877
              ],
              [
                9.274825377309373,
                49.14352703815986
              ],
              [
                9.274840163512094,
                49.14358810871211
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3099,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.275238618667947,
                49.143599201150295
              ],
              [
                9.275223832461915,
                49.143660271702544
              ],
              [
                9.275180921220688,
                49.14371536424363
              ],
              [
                9.275114085395536,
                49.14375908593179
              ],
              [
                9.275029867342697,
                49.14378715698356
              ],
              [
                9.274936510911967,
                49.143796829608796
              ],
              [
                9.274843154481237,
                49.14378715698356
              ],
              [
                9.274758936428398,
                49.14375908593179
              ],
              [
                9.274692100603247,
                49.14371536424363
              ],
              [
                9.27464918936202,
                49.143660271702544
              ],
              [
                9.274634403155988,
                49.143599201150295
              ],
              [
                9.27464918936202,
                49.143538130598046
              ],
              [
                9.274692100603247,
                49.14348303805696
              ],
              [
                9.274758936428398,
                49.1434393163688
              ],
              [
                9.274843154481237,
                49.14341124531703
              ],
              [
                9.274936510911967,
                49.14340157269179
              ],
              [
                9.275029867342697,
                49.14341124531703
              ],
              [
                9.275114085395536,
                49.1434393163688
              ],
              [
                9.275180921220688,
                49.14348303805696
              ],
              [
                9.275223832461915,
                49.143538130598046
              ],
              [
                9.275238618667947,
                49.143599201150295
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3051,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.29336814308502,
                49.15943093949606
              ],
              [
                9.293353352153035,
                49.15949201004831
              ],
              [
                9.293310427196557,
                49.1595471025894
              ],
              [
                9.2932435700094,
                49.15959082427756
              ],
              [
                9.293159325038864,
                49.159618895329324
              ],
              [
                9.293065938769638,
                49.15962856795456
              ],
              [
                9.292972552500412,
                49.159618895329324
              ],
              [
                9.292888307529877,
                49.15959082427756
              ],
              [
                9.29282145034272,
                49.1595471025894
              ],
              [
                9.292778525386241,
                49.15949201004831
              ],
              [
                9.292763734454256,
                49.15943093949606
              ],
              [
                9.292778525386241,
                49.15936986894381
              ],
              [
                9.29282145034272,
                49.159314776402724
              ],
              [
                9.292888307529877,
                49.159271054714566
              ],
              [
                9.292972552500412,
                49.1592429836628
              ],
              [
                9.293065938769638,
                49.15923331103756
              ],
              [
                9.293159325038864,
                49.1592429836628
              ],
              [
                9.2932435700094,
                49.159271054714566
              ],
              [
                9.293310427196557,
                49.159314776402724
              ],
              [
                9.293353352153035,
                49.15936986894381
              ],
              [
                9.29336814308502,
                49.15943093949606
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.3036,
          "support_count": 2,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.274404022053536,
                49.14357596713961
              ],
              [
                9.274389235854436,
                49.14363703769186
              ],
              [
                9.274346324633328,
                49.14369213023295
              ],
              [
                9.274279488839511,
                49.14373585192111
              ],
              [
                9.27419527082616,
                49.14376392297287
              ],
              [
                9.2741019144392,
                49.14377359559811
              ],
              [
                9.27400855805224,
                49.14376392297287
              ],
              [
                9.273924340038889,
                49.14373585192111
              ],
              [
                9.273857504245072,
                49.14369213023295
              ],
              [
                9.273814593023964,
                49.14363703769186
              ],
              [
                9.273799806824863,
                49.14357596713961
              ],
              [
                9.273814593023964,
                49.14351489658736
              ],
              [
                9.273857504245072,
                49.14345980404627
              ],
              [
                9.273924340038889,
                49.143416082358115
              ],
              [
                9.27400855805224,
                49.14338801130635
              ],
              [
                9.2741019144392,
                49.14337833868111
              ],
              [
                9.27419527082616,
                49.14338801130635
              ],
              [
                9.274279488839511,
                49.143416082358115
              ],
              [
                9.274346324633328,
                49.14345980404627
              ],
              [
                9.274389235854436,
                49.14351489658736
              ],
              [
                9.274404022053536,
                49.14357596713961
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "feature_type": "impact_candidate_zone",
          "objektklasse": "bombenkrater_verdachtsflaeche",
          "analysis_profile": "crater_v1",
          "analysis_status": "candidate_low",
          "score": 0.2908,
          "support_count": 1,
          "radius_m": 22.0,
          "interpretation": "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                9.273821261059997,
                49.14356941349604
              ],
              [
                9.273806474862852,
                49.14363048404829
              ],
              [
                9.27376356364742,
                49.14368557658938
              ],
              [
                9.273696727862442,
                49.143729298277535
              ],
              [
                9.273612509860227,
                49.1437573693293
              ],
              [
                9.273519153485614,
                49.14376704195454
              ],
              [
                9.273425797111,
                49.1437573693293
              ],
              [
                9.273341579108786,
                49.143729298277535
              ],
              [
                9.273274743323809,
                49.14368557658938
              ],
              [
                9.273231832108376,
                49.14363048404829
              ],
              [
                9.273217045911231,
                49.14356941349604
              ],
              [
                9.273231832108376,
                49.14350834294379
              ],
              [
                9.273274743323809,
                49.1434532504027
              ],
              [
                9.273341579108786,
                49.14340952871454
              ],
              [
                9.273425797111,
                49.14338145766278
              ],
              [
                9.273519153485614,
                49.14337178503754
              ],
              [
                9.273612509860227,
                49.14338145766278
              ],
              [
                9.273696727862442,
                49.14340952871454
              ],
              [
                9.27376356364742,
                49.1434532504027
              ],
              [
                9.273806474862852,
                49.14350834294379
              ],
              [
                9.273821261059997,
                49.14356941349604
              ]
            ]
          ]
        }
      }
    ]
  }
};
