// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is a YouTube video, not code: an AI agent cut a vertical Short
// from Rockstar's GTA VI Trailer 2 (jet-ski chase, motorcycle, night neon,
// sunset street) and added a make.fun pitch on a clean end card. The video
// itself is uploaded to YouTube by the person; this repository only hands in
// the video's address.
//
// This program does the one job the gate needs: it copies VIDEO.json from the
// repository root to /output/VIDEO.json, where the house reads it and then
// reads the video's views through the YouTube Data API. Nothing else it
// writes is scored. The VIDEO.json in this repository starts as a placeholder
// ("https://www.youtube.com/shorts/<id>"); it must be replaced with the real
// published video's address before submitting, or the gate refuses the entry.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`Could not copy VIDEO.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`VIDEO.json copied to ${target}`);
