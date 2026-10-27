#!/usr/bin/env bash
# Builds the downloadable files for attendees who cannot use a marketplace
# (Claude app individual plans):
#   dist/lead-gen-site-kit.plugin   the whole plugin, installable in the Claude app
#   dist/skills/<skill>.zip         each skill on its own, for Settings > Capabilities > Skills
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PLUGIN="$ROOT/plugins/lead-gen-site-kit"
DIST="$ROOT/dist"

rm -rf "$DIST"
mkdir -p "$DIST/skills"

(cd "$PLUGIN" && zip -qr "$DIST/lead-gen-site-kit.plugin" . -x "*.DS_Store")

for dir in "$PLUGIN"/skills/*/; do
  name="$(basename "$dir")"
  (cd "$PLUGIN/skills" && zip -qr "$DIST/skills/$name.zip" "$name" -x "*.DS_Store")
done

echo "Built:"
find "$DIST" -type f | sed "s|$ROOT/||"
