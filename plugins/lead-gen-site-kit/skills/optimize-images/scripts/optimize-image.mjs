#!/usr/bin/env node
// ============================================================
// SEO image pipeline for lead-generation websites.
// From the Lead Gen course kit.
//
// Bakes image best practice into every photo you ship:
//   1. Resizes down to a sensible web width (never upscales).
//   2. Converts to WebP (small, sharp, broad browser support).
//   3. Strips ALL the original camera/phone metadata (privacy +
//      bytes), then writes back ONLY a clean, curated EXIF set:
//        - ImageDescription: keyword-rich, doubles as the record
//          of the intended alt text.
//        - Artist + Copyright: the brand.
//        - GPS (optional): where the photo was genuinely taken,
//          or the country centre for brand images.
//
// Filenames are the other half of image SEO and are NOT handled
// here on purpose: pass an already keyword-rich, hyphenated --out
// name (e.g. [service-keyword]-job-before.webp). The matching
// alt text lives on the <img> in the component.
//
// Setup: npm i -D sharp, then set BRAND below (or pass --brand).
//
// Usage:
//   node scripts/optimize-image.mjs \
//     --in "/path/to/source.jpg" \
//     --out "public/images/[service-keyword]-job-before.webp" \
//     --desc "[What the photo shows] before the [service]" \
//     [--brand "Your Brand"] [--width 1000] [--quality 80] \
//     [--lat -25.2744 --lng 133.7751] [--datum WGS-84]
//
// Omit --lat/--lng to skip the geotag.
// ============================================================
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { statSync } from "node:fs";

const DEFAULT_BRAND = "Your Brand"; // set this once per project

// ---- args ----
const args = {};
for (let i = 2; i < process.argv.length; i++) {
  const a = process.argv[i];
  if (a.startsWith("--")) args[a.slice(2)] = process.argv[++i];
}
const inPath = args.in;
const outPath = args.out;
const desc = args.desc;
if (!inPath || !outPath || !desc) {
  console.error("Required: --in <src> --out <public/images/name.webp> --desc \"keyword-rich description\"");
  process.exit(1);
}

const brand = args.brand ?? DEFAULT_BRAND;
if (brand === "Your Brand") {
  console.warn("WARN: brand not set. Pass --brand or set DEFAULT_BRAND in this script.");
}
const width = Number(args.width ?? 1000);
const quality = Number(args.quality ?? 80);
const hasGeo = args.lat !== undefined && args.lng !== undefined;
const lat = hasGeo ? Number(args.lat) : null;
const lng = hasGeo ? Number(args.lng) : null;
const datum = args.datum ?? "WGS-84";

// ---- decimal degrees -> EXIF rational DMS string ("deg/1 min/1 sec/100") ----
function toDMSRational(dec) {
  const abs = Math.abs(dec);
  const d = Math.floor(abs);
  const minFloat = (abs - d) * 60;
  const m = Math.floor(minFloat);
  const secHundredths = Math.round((minFloat - m) * 60 * 100);
  return `${d}/1 ${m}/1 ${secHundredths}/100`;
}

const exif = {
  IFD0: {
    ImageDescription: desc,
    Artist: brand,
    Copyright: `(c) ${brand}`,
    Software: `${brand} image pipeline (sharp)`,
  },
};
if (hasGeo) {
  exif.IFD3 = {
    GPSVersionID: "2 2 0 0",
    GPSLatitudeRef: lat < 0 ? "S" : "N",
    GPSLatitude: toDMSRational(lat),
    GPSLongitudeRef: lng < 0 ? "W" : "E",
    GPSLongitude: toDMSRational(lng),
    GPSMapDatum: datum,
  };
}

const absOut = resolve(outPath);
await mkdir(dirname(absOut), { recursive: true });

const inSize = statSync(inPath).size;

await sharp(inPath)
  .rotate() // honour any orientation flag BEFORE we strip metadata
  .resize({ width, withoutEnlargement: true })
  .withExif(exif) // replaces metadata: source EXIF is dropped, only ours is written
  .webp({ quality, effort: 6 })
  .toFile(absOut);

// ---- report + sanity check ----
const meta = await sharp(absOut).metadata();
const outSize = statSync(absOut).size;
const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
console.log(`OK  ${outPath}`);
console.log(`    ${meta.width}x${meta.height} ${meta.format}  ${kb(inSize)} -> ${kb(outSize)} (${Math.round((1 - outSize / inSize) * 100)}% smaller)`);
console.log(`    use: width={${meta.width}} height={${meta.height}}`);
console.log(`    desc: ${desc}`);
console.log(`    geo:  ${hasGeo ? `${lat}, ${lng} (${datum})` : "none"}   exif: ${meta.exif ? "embedded" : "MISSING"}`);
