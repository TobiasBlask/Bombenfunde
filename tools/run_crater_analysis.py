#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import math
import re
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

WEB_CALIBRATION_SCHEMA_VERSION = "uxopro.web-calibration.v1"
ANALYSIS_RESULT_SCHEMA_VERSION = "uxopro.analysis-result.v1"
DEFAULT_CONFIG_NAME = "uxopro-export.config.json"
DEFAULT_HANDOFF_PATH = "handoff/web-calibration.json"
DEFAULT_PROFILE = "crater_v1"

PROFILES = {
    "crater_v1": {
        "max_image_size": 1800,
        "blur_radii": [2.5, 4.5, 7.0, 10.0],
        "dog_quantile": 0.997,
        "min_dog": 0.028,
        "min_ring_contrast": 0.015,
        "min_darkness": 0.08,
        "nms_radius_factor": 2.2,
        "per_scale_limit": 28,
        "cluster_distance_m": 24.0,
        "area_buffer_m": 22.0,
        "min_cluster_score_high": 0.18,
        "min_cluster_score_medium": 0.11,
    }
}


@dataclass
class ImageSource:
    name: str
    file_hint: str
    note: str
    date: str
    corners: list[list[float]]
    original_corners: list[list[float]]
    path: Path
    width: int
    height: int


@dataclass
class Candidate:
    image_name: str
    image_path: str
    date: str
    x: float
    y: float
    radius_px: float
    lat: float
    lon: float
    radius_m: float
    score: float
    dog_score: float
    ring_contrast: float
    darkness: float


def iso_now() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generischer lokaler Worker fuer eine erste Bombenkrater-Kandidatenanalyse."
    )
    parser.add_argument("--root", required=True, help="Lokaler Projektordner")
    parser.add_argument("--handoff", default=DEFAULT_HANDOFF_PATH, help="Pfad zur Web-Kalibrierung relativ zu --root oder absolut")
    parser.add_argument("--config", default="", help=f"Projekt-Config, Standard: <root>/{DEFAULT_CONFIG_NAME}")
    parser.add_argument("--profile", default="", help=f"Analyseprofil, Standard: {DEFAULT_PROFILE}")
    parser.add_argument("--overwrite", action="store_true", help="Vorhandene Ergebnisdateien ueberschreiben")
    parser.add_argument("--max-images", type=int, default=0, help="Optional: nur die ersten N kalibrierten Bilder analysieren")
    return parser.parse_args()


def resolve_path(root: Path, path_arg: str) -> Path:
    path = Path(path_arg).expanduser()
    if not path.is_absolute():
        path = (root / path).resolve()
    return path


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=True) + "\n", encoding="utf-8")


def load_config(root: Path, config_arg: str) -> tuple[Path, dict]:
    path = resolve_path(root, config_arg) if config_arg else root / DEFAULT_CONFIG_NAME
    if not path.exists():
        return path, {}
    return path, load_json(path)


def save_config(path: Path, payload: dict) -> None:
    save_json(path, payload)


def parse_date(text: str) -> str:
    match = re.search(r"(19\d{2})[-_](\d{2})[-_](\d{2})", text)
    if not match:
        return ""
    return f"{match.group(1)}-{match.group(2)}-{match.group(3)}"


def sort_key_date(value: str) -> tuple:
    if not value:
        return (1, "9999-99-99")
    return (0, value)


def validate_handoff(payload: dict) -> dict:
    schema_version = payload.get("schema_version") or payload.get("schemaVersion")
    if schema_version != WEB_CALIBRATION_SCHEMA_VERSION:
        raise SystemExit(f"Nicht unterstuetzte Web-Kalibrierung: {schema_version!r}")
    calibration = payload.get("calibration") or {}
    images = calibration.get("images") or []
    if not images:
        raise SystemExit("Die Web-Kalibrierung enthaelt keine Bilder.")
    return payload


def collect_project_files(root: Path) -> list[Path]:
    files: list[Path] = []
    for path in root.rglob("*"):
        if not path.is_file():
            continue
        if ".git" in path.parts:
            continue
        if path.name.startswith("."):
            continue
        files.append(path)
    return files


def find_matching_image(root: Path, file_hint: str, name: str) -> Path | None:
    hint = Path(file_hint).name if file_hint else ""
    candidates = []
    for path in collect_project_files(root):
        lower = path.name.lower()
        if path.suffix.lower() not in {".png", ".jpg", ".jpeg", ".webp", ".tif", ".tiff"}:
            continue
        if hint and path.name == hint:
            candidates.append((0, path))
            continue
        if hint and hint.lower() in lower:
            candidates.append((1, path))
            continue
        if name and all(token in lower for token in re.findall(r"[a-z0-9]+", name.lower())[:3]):
            candidates.append((2, path))
    if not candidates:
        return None
    candidates.sort(key=lambda item: (item[0], len(item[1].parts), item[1].name))
    return candidates[0][1]


def normalize_corner(corner: Iterable[float]) -> list[float]:
    values = list(corner)
    return [float(values[0]), float(values[1])]


def load_image_sources(root: Path, handoff: dict, max_images: int = 0) -> list[ImageSource]:
    images = handoff["calibration"]["images"]
    sources: list[ImageSource] = []
    for image in images:
        path = find_matching_image(root, image.get("file", ""), image.get("name", ""))
        if not path:
            continue
        with Image.open(path) as img:
            width, height = img.size
        date = parse_date(image.get("name", "")) or parse_date(image.get("file", "")) or parse_date(path.name)
        sources.append(
            ImageSource(
                name=image.get("name", path.stem),
                file_hint=image.get("file", ""),
                note=image.get("note", ""),
                date=date,
                corners=[normalize_corner(c) for c in image.get("corners", [])],
                original_corners=[normalize_corner(c) for c in image.get("original_corners", image.get("corners", []))],
                path=path,
                width=width,
                height=height,
            )
        )
    sources.sort(key=lambda item: sort_key_date(item.date))
    return sources[:max_images] if max_images > 0 else sources


def resize_grayscale(path: Path, max_size: int) -> tuple[np.ndarray, tuple[int, int], tuple[int, int]]:
    with Image.open(path) as img:
        img = img.convert("L")
        original_size = img.size
        if max(img.size) > max_size:
            scale = max_size / max(img.size)
            new_size = (max(1, int(round(img.size[0] * scale))), max(1, int(round(img.size[1] * scale))))
            img = img.resize(new_size, Image.Resampling.LANCZOS)
        working_size = img.size
        array = np.asarray(img, dtype=np.float32) / 255.0
    return array, original_size, working_size


def blur_array(array: np.ndarray, radius: float) -> np.ndarray:
    image = Image.fromarray(np.clip(array * 255.0, 0, 255).astype(np.uint8), mode="L")
    blurred = image.filter(ImageFilter.GaussianBlur(radius=radius))
    return np.asarray(blurred, dtype=np.float32) / 255.0


def build_integral(array: np.ndarray) -> np.ndarray:
    return np.pad(array.cumsum(axis=0).cumsum(axis=1), ((1, 0), (1, 0)), mode="constant")


def rect_mean(integral: np.ndarray, x0: int, y0: int, x1: int, y1: int) -> float:
    x0 = max(0, min(x0, integral.shape[1] - 1))
    y0 = max(0, min(y0, integral.shape[0] - 1))
    x1 = max(x0 + 1, min(x1, integral.shape[1] - 1))
    y1 = max(y0 + 1, min(y1, integral.shape[0] - 1))
    total = integral[y1, x1] - integral[y0, x1] - integral[y1, x0] + integral[y0, x0]
    area = max(1, (x1 - x0) * (y1 - y0))
    return float(total / area)


def annulus_means(integral: np.ndarray, x: int, y: int, center_radius: int, outer_radius: int) -> tuple[float, float]:
    center = rect_mean(integral, x - center_radius, y - center_radius, x + center_radius + 1, y + center_radius + 1)
    outer = rect_mean(integral, x - outer_radius, y - outer_radius, x + outer_radius + 1, y + outer_radius + 1)
    outer_area = max(1, (2 * outer_radius + 1) ** 2 - (2 * center_radius + 1) ** 2)
    center_total = center * ((2 * center_radius + 1) ** 2)
    outer_total = outer * ((2 * outer_radius + 1) ** 2)
    ring = (outer_total - center_total) / outer_area
    return center, ring


def select_local_maxima(score: np.ndarray, threshold: float, suppress_radius: int, limit: int) -> list[tuple[int, int, float]]:
    ys, xs = np.where(score >= threshold)
    ranked = sorted(((int(x), int(y), float(score[y, x])) for x, y in zip(xs, ys)), key=lambda item: item[2], reverse=True)
    chosen: list[tuple[int, int, float]] = []
    radius_sq = max(1, suppress_radius) ** 2
    for x, y, value in ranked:
        if any((x - cx) ** 2 + (y - cy) ** 2 <= radius_sq for cx, cy, _ in chosen):
            continue
        chosen.append((x, y, value))
        if len(chosen) >= limit:
            break
    return chosen


def bilinear_latlon(corners: list[list[float]], u: float, v: float) -> tuple[float, float]:
    nw, ne, sw, se = corners
    top_lat = nw[0] * (1 - u) + ne[0] * u
    top_lon = nw[1] * (1 - u) + ne[1] * u
    bottom_lat = sw[0] * (1 - u) + se[0] * u
    bottom_lon = sw[1] * (1 - u) + se[1] * u
    lat = top_lat * (1 - v) + bottom_lat * v
    lon = top_lon * (1 - v) + bottom_lon * v
    return lat, lon


def distance_m(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    mean_lat = math.radians((lat1 + lat2) / 2.0)
    dx = (lon2 - lon1) * 111320.0 * math.cos(mean_lat)
    dy = (lat2 - lat1) * 111320.0
    return math.hypot(dx, dy)


def pixel_radius_to_m(corners: list[list[float]], width: int, height: int, radius_px: float) -> float:
    if width <= 1 or height <= 1:
        return radius_px
    top = distance_m(*corners[0], *corners[1]) / (width - 1)
    bottom = distance_m(*corners[2], *corners[3]) / (width - 1)
    left = distance_m(*corners[0], *corners[2]) / (height - 1)
    right = distance_m(*corners[1], *corners[3]) / (height - 1)
    meters_per_px = (top + bottom + left + right) / 4.0
    return max(1.0, radius_px * meters_per_px)


def detect_candidates_for_image(source: ImageSource, profile: dict) -> tuple[list[Candidate], tuple[int, int], tuple[int, int]]:
    array, original_size, working_size = resize_grayscale(source.path, profile["max_image_size"])
    inverted = 1.0 - array
    integral = build_integral(array)
    candidates: list[Candidate] = []
    width, height = working_size

    for radius in profile["blur_radii"]:
        dog = np.maximum(0.0, blur_array(inverted, radius) - blur_array(inverted, radius * 1.75))
        threshold = max(float(np.quantile(dog, profile["dog_quantile"])), profile["min_dog"])
        picks = select_local_maxima(
            dog,
            threshold=threshold,
            suppress_radius=max(3, int(round(radius * profile["nms_radius_factor"]))),
            limit=profile["per_scale_limit"],
        )
        for x, y, dog_score in picks:
            center_mean, ring_mean = annulus_means(
                integral,
                x,
                y,
                center_radius=max(2, int(round(radius))),
                outer_radius=max(4, int(round(radius * 2.4))),
            )
            darkness = max(0.0, 1.0 - center_mean)
            ring_contrast = max(0.0, ring_mean - center_mean)
            if ring_contrast < profile["min_ring_contrast"] or darkness < profile["min_darkness"]:
                continue
            combined = float(dog_score * 0.55 + ring_contrast * 0.30 + darkness * 0.15)
            u = x / max(1, width - 1)
            v = y / max(1, height - 1)
            lat, lon = bilinear_latlon(source.corners, u, v)
            radius_m = pixel_radius_to_m(source.corners, width, height, radius * 1.8)
            candidates.append(
                Candidate(
                    image_name=source.name,
                    image_path=str(source.path),
                    date=source.date,
                    x=float(x),
                    y=float(y),
                    radius_px=float(radius * 1.8),
                    lat=lat,
                    lon=lon,
                    radius_m=radius_m,
                    score=combined,
                    dog_score=float(dog_score),
                    ring_contrast=float(ring_contrast),
                    darkness=float(darkness),
                )
            )

    deduped: list[Candidate] = []
    candidates.sort(key=lambda item: item.score, reverse=True)
    for candidate in candidates:
        if any((candidate.x - existing.x) ** 2 + (candidate.y - existing.y) ** 2 <= (max(candidate.radius_px, existing.radius_px) * 1.6) ** 2 for existing in deduped):
            continue
        deduped.append(candidate)
    return deduped, original_size, working_size


def cluster_candidates(candidates: list[Candidate], profile: dict, baseline_date: str) -> list[dict]:
    clusters: list[dict] = []
    for candidate in sorted(candidates, key=lambda item: item.score, reverse=True):
        chosen = None
        best_distance = None
        for cluster in clusters:
            dist = distance_m(candidate.lat, candidate.lon, cluster["lat"], cluster["lon"])
            if dist <= profile["cluster_distance_m"] and (best_distance is None or dist < best_distance):
                chosen = cluster
                best_distance = dist
        if chosen is None:
            chosen = {
                "candidates": [],
                "lat": candidate.lat,
                "lon": candidate.lon,
                "score_sum": 0.0,
                "radius_m_sum": 0.0,
            }
            clusters.append(chosen)
        chosen["candidates"].append(candidate)
        total_score = chosen["score_sum"] + candidate.score
        if total_score > 0:
            chosen["lat"] = (chosen["lat"] * chosen["score_sum"] + candidate.lat * candidate.score) / total_score
            chosen["lon"] = (chosen["lon"] * chosen["score_sum"] + candidate.lon * candidate.score) / total_score
        chosen["score_sum"] = total_score
        chosen["radius_m_sum"] += candidate.radius_m

    features: list[dict] = []
    for index, cluster in enumerate(clusters, start=1):
        dates = sorted({candidate.date for candidate in cluster["candidates"] if candidate.date}, key=sort_key_date)
        images = sorted({candidate.image_name for candidate in cluster["candidates"]})
        support_count = len(cluster["candidates"])
        avg_score = cluster["score_sum"] / max(1, support_count)
        avg_radius_m = cluster["radius_m_sum"] / max(1, support_count)
        seen_in_baseline = any(candidate.date == baseline_date for candidate in cluster["candidates"] if baseline_date)
        persistence = len(dates) >= 2
        if not seen_in_baseline and persistence and avg_score >= profile["min_cluster_score_high"]:
            status = "candidate_high"
            interpretation = "Baseline-frei und in mehreren Bilddaten sichtbar."
        elif not seen_in_baseline and avg_score >= profile["min_cluster_score_medium"]:
            status = "candidate_medium"
            interpretation = "Nicht in der Baseline sichtbar, aber bislang nur begrenzt abgesichert."
        else:
            status = "candidate_low"
            interpretation = "Schwacher oder nur einbildiger Kandidat; fachliche Nachpruefung erforderlich."
        features.append(
            {
                "id": f"auto-crater-{index:03d}",
                "lat": cluster["lat"],
                "lon": cluster["lon"],
                "score": round(avg_score, 4),
                "support_count": support_count,
                "radius_m": round(avg_radius_m, 1),
                "dates": dates,
                "images": images,
                "first_seen": dates[0] if dates else "",
                "last_seen": dates[-1] if dates else "",
                "baseline_seen": seen_in_baseline,
                "persistence": persistence,
                "status": status,
                "interpretation": interpretation,
                "sources": [
                    {
                        "image": candidate.image_name,
                        "date": candidate.date,
                        "score": round(candidate.score, 4),
                        "radius_m": round(candidate.radius_m, 1),
                    }
                    for candidate in sorted(cluster["candidates"], key=lambda item: (sort_key_date(item.date), -item.score))
                ],
            }
        )
    features.sort(key=lambda item: ({"candidate_high": 0, "candidate_medium": 1, "candidate_low": 2}[item["status"]], -item["score"]))
    return features


def make_point_feature(cluster: dict, profile_name: str) -> dict:
    return {
        "type": "Feature",
        "properties": {
            "feature_type": "impact_candidate",
            "objektklasse": "bombenkrater_kandidat",
            "analysis_profile": profile_name,
            "analysis_status": cluster["status"],
            "score": cluster["score"],
            "support_count": cluster["support_count"],
            "radius_m": cluster["radius_m"],
            "dates": ", ".join(cluster["dates"]),
            "first_seen": cluster["first_seen"],
            "last_seen": cluster["last_seen"],
            "baseline_seen": "ja" if cluster["baseline_seen"] else "nein",
            "persistence": "ja" if cluster["persistence"] else "nein",
            "interpretation": cluster["interpretation"],
            "images": ", ".join(cluster["images"]),
            "source_records": json.dumps(cluster["sources"], ensure_ascii=True),
        },
        "geometry": {"type": "Point", "coordinates": [cluster["lon"], cluster["lat"]]},
    }


def make_circle_polygon(lat: float, lon: float, radius_m: float, steps: int = 20) -> list[list[float]]:
    lat_scale = radius_m / 111320.0
    lon_scale = radius_m / (111320.0 * max(0.1, math.cos(math.radians(lat))))
    points = []
    for idx in range(steps):
        angle = 2 * math.pi * idx / steps
        points.append([lon + lon_scale * math.cos(angle), lat + lat_scale * math.sin(angle)])
    points.append(points[0])
    return points


def make_area_feature(cluster: dict, profile: dict, profile_name: str) -> dict:
    radius = max(profile["area_buffer_m"], cluster["radius_m"])
    return {
        "type": "Feature",
        "properties": {
            "feature_type": "impact_candidate_zone",
            "objektklasse": "bombenkrater_verdachtsflaeche",
            "analysis_profile": profile_name,
            "analysis_status": cluster["status"],
            "score": cluster["score"],
            "support_count": cluster["support_count"],
            "radius_m": radius,
            "interpretation": cluster["interpretation"],
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [make_circle_polygon(cluster["lat"], cluster["lon"], radius)],
        },
    }


def write_geojson(path: Path, features: list[dict]) -> None:
    save_json(path, {"type": "FeatureCollection", "features": features})


def draw_preview(source: ImageSource, working_size: tuple[int, int], candidates: list[Candidate], out_path: Path) -> None:
    with Image.open(source.path) as img:
        base = img.convert("RGB")
        if base.size != working_size:
            base = base.resize(working_size, Image.Resampling.LANCZOS)
        draw = ImageDraw.Draw(base)
        for candidate in candidates:
            color = (236, 83, 42) if candidate.score >= 0.18 else (244, 184, 64)
            r = max(6.0, candidate.radius_px)
            draw.ellipse((candidate.x - r, candidate.y - r, candidate.x + r, candidate.y + r), outline=color, width=3)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        base.save(out_path)


def update_project_config(config: dict, summary: dict) -> dict:
    updated = dict(config)
    updated["analysis_profile"] = summary["profile"]
    updated["analysis_status"] = "candidates_generated"
    updated["findings_points"] = summary["candidate_count"]
    updated["area_features"] = summary["area_count"]
    updated["export_status"] = "analysis_outputs_ready"
    base_note = updated.get("pipeline_note", "").strip()
    extra_note = f"Automatische Kandidatenanalyse am {summary['created_at']} erzeugt."
    if extra_note not in base_note:
        updated["pipeline_note"] = f"{base_note} {extra_note}".strip()
    return updated


def run_analysis(root: Path, handoff_path: Path, config_path: Path, config: dict, profile_name: str, max_images: int, overwrite: bool) -> dict:
    profile = PROFILES[profile_name]
    handoff = validate_handoff(load_json(handoff_path))
    sources = load_image_sources(root, handoff, max_images=max_images)
    if not sources:
        raise SystemExit("Keine passenden Bilddateien fuer die Web-Kalibrierung gefunden.")

    baseline_date = sources[0].date if sources else ""
    all_candidates: list[Candidate] = []
    per_image_summary = []
    preview_dir = root / "preview" / "analysis"
    exports_dir = root / "exports"
    exports_dir.mkdir(parents=True, exist_ok=True)

    for source in sources:
        candidates, _, working_size = detect_candidates_for_image(source, profile)
        all_candidates.extend(candidates)
        preview_path = preview_dir / f"{source.path.stem}_analysis_preview.png"
        draw_preview(source, working_size, candidates, preview_path)
        per_image_summary.append(
            {
                "image": source.name,
                "date": source.date,
                "path": str(source.path.relative_to(root)),
                "candidate_count": len(candidates),
                "preview": str(preview_path.relative_to(root)),
            }
        )

    clusters = cluster_candidates(all_candidates, profile, baseline_date=baseline_date)
    point_features = [make_point_feature(cluster, profile_name) for cluster in clusters]
    area_features = [make_area_feature(cluster, profile, profile_name) for cluster in clusters]

    findings_path = exports_dir / "findings.auto.geojson"
    areas_path = exports_dir / "areas.auto.geojson"
    summary_path = exports_dir / "analysis-summary.json"
    if not overwrite:
        for path in (findings_path, areas_path, summary_path):
            if path.exists():
                raise SystemExit(f"Datei existiert bereits: {path}. Fuer Ueberschreiben --overwrite setzen.")

    write_geojson(findings_path, point_features)
    write_geojson(areas_path, area_features)
    summary_payload = {
        "schema_version": ANALYSIS_RESULT_SCHEMA_VERSION,
        "created_at": iso_now(),
        "profile": profile_name,
        "project_root": str(root),
        "handoff": str(handoff_path.relative_to(root)),
        "candidate_count": len(point_features),
        "area_count": len(area_features),
        "baseline_date": baseline_date,
        "images_processed": len(sources),
        "per_image": per_image_summary,
        "status_counts": {
            "candidate_high": sum(1 for item in clusters if item["status"] == "candidate_high"),
            "candidate_medium": sum(1 for item in clusters if item["status"] == "candidate_medium"),
            "candidate_low": sum(1 for item in clusters if item["status"] == "candidate_low"),
        },
        "outputs": {
            "findings_geojson": str(findings_path.relative_to(root)),
            "areas_geojson": str(areas_path.relative_to(root)),
            "summary_json": str(summary_path.relative_to(root)),
            "preview_dir": str(preview_dir.relative_to(root)),
        },
    }
    save_json(summary_path, summary_payload)

    updated_config = update_project_config(config, summary_payload)
    save_config(config_path, updated_config)
    return summary_payload


def main() -> int:
    args = parse_args()
    root = Path(args.root).expanduser().resolve()
    handoff_path = resolve_path(root, args.handoff)
    config_path, config = load_config(root, args.config)
    profile_name = args.profile or config.get("analysis_profile", DEFAULT_PROFILE)
    if profile_name not in PROFILES:
        raise SystemExit(f"Unbekanntes Analyseprofil: {profile_name}")
    result = run_analysis(
        root=root,
        handoff_path=handoff_path,
        config_path=config_path,
        config=config,
        profile_name=profile_name,
        max_images=args.max_images,
        overwrite=args.overwrite,
    )
    print(f"Analyseprofil: {result['profile']}")
    print(f"Bilder verarbeitet: {result['images_processed']}")
    print(f"Kandidaten: {result['candidate_count']}")
    print(f"Verdachtsflaechen: {result['area_count']}")
    print(f"Ausgaben: {json.dumps(result['outputs'], ensure_ascii=True)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
