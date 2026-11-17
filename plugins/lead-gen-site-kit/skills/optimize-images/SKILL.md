---
name: optimize-images
description: >
  This skill should be used when the user wants to "add an image to the site",
  "optimise images", "compress photos for the website", "convert to WebP",
  "geotag images", "write alt text", "name image files for SEO", "generate
  images for the website", "make a team photo", "AI photos for the site", or is
  adding any photo, before and after shot, logo or graphic to a lead-gen
  website. It runs the image SEO pipeline (resize, WebP, strip metadata, curated
  EXIF, geotag, keyword filename and alt text) and sets the style for generated
  placeholder photos.
metadata:
  version: "0.3.0"
  author: "Chris Dinham, Lead Gen course"
---

# Optimise images for a lead-gen site

Every image on a lead-gen site goes through the same pipeline before it reaches `public/`. No raw PNGs or phone JPEGs ship. On a previous build, two launch photos went from about 2.3 MB each to 55 and 81 kB, about 97 percent smaller, with no visible loss.

Priorities match the site's: page speed first, then trust, then SEO and AI search.

## The pipeline script

`scripts/optimize-image.mjs` in this skill. Copy it into the project's `scripts/` folder on first use, and install sharp if the project lacks it (`npm i -D sharp`). Then set `BRAND` at the top of the copied script, or pass `--brand` each time.

```bash
node scripts/optimize-image.mjs \
  --in "/path/to/source.jpg" \
  --out "public/images/[service-keyword]-job-before.webp" \
  --desc "[What the photo shows] before the [service]" \
  --brand "Your Brand" \
  --lat -25.2744 --lng 133.7751
```

| Flag | Required | Default | Notes |
|---|---|---|---|
| `--in` | yes | | Source image, any format sharp reads |
| `--out` | yes | | Always `public/images/<keyword-name>.webp` |
| `--desc` | yes | | Keyword-rich description, written to EXIF `ImageDescription`. Doubles as the record of the intended alt text |
| `--brand` | no | `BRAND` in the script | Written to EXIF `Artist` and `Copyright` |
| `--width` | no | `1000` | Max width in px, never upscales. About 900 to 1000 covers a retina card |
| `--quality` | no | `80` | WebP quality |
| `--lat` / `--lng` | no | none | Geotag. Omit to skip GPS. Use the city for location images, the country centre for national ones |

The script prints before and after size and confirms EXIF and geotag were written.

Country centre coordinates for national images: Australia `-25.2744, 133.7751`; New Zealand `-41.2865, 174.7762` (Wellington); United Kingdom `54.0, -2.0`; United States `39.8283, -98.5795`; Canada `56.1304, -106.3468`.

## The standard, point by point

1. **The filename is the keywords.** Lower case, hyphenated, descriptive, no stuffing. National images use the head term without a location (`[service-keyword]-job-before.webp`). Location images lead with that location's local term (`[local-term]-[location]-job-after.webp`). Set it in `--out`; the script does not rename.
2. **WebP, resized, compressed.**
3. **Original metadata stripped.** Camera, phone and location data from the original are removed (privacy and bytes).
4. **Curated EXIF.** Keyword-rich description, brand as artist and copyright.
5. **Geotagged** where it is genuinely true: the city the photo was taken in, or the country centre for brand images. Never geotag a photo to a city it was not taken in.
6. **Keyword-rich, accurate alt text** set by hand on the `<img>`. Describe what is actually in the image, naturally including the target term. National term for home page images.
7. **A real `<img>`, never a CSS background**, with intrinsic `width` and `height` so there is no layout shift. Above the fold: `loading="eager"`. Everything else lazy-loads. Do not add a high fetch priority: on a coded build the framework can turn it into a preload, and link prefetching then downloads the hero photo of every page the visitor might click.

## Workflow when the user adds images

1. Ask what each image shows and which page it is for (national or a specific location).
2. Propose the filename, description and alt text, and the geotag (if any). Confirm.
3. Run the script for each image. Report the size savings.
4. Wire the image into the component with the alt text, width and height from the output.
5. Leave raw source images out of the repository. Only the optimised WebPs belong in `public/images/`.
6. Add a line to the project's `docs/changelog.md`.

## Real photos beat stock and AI images

Real before and after shots of real jobs are the most persuasive asset most service businesses have. Use AI-generated or stock images only as placeholders, labelled as such, and replace them with real photos as jobs happen. Never present a generated image as a real job.

When placeholders are needed, read `references/generating-images.md` first. It holds the phone-photo style block (generated images should look like a snap taken on the job, not a polished render), the crew photo pattern, the job-type photo cues, and how to review a batch before anything reaches the site.

The same pipeline prepares photos for the Google Business Profile (see the `local-seo` skill).
