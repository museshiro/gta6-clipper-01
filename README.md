# GTA 6 YouTube clip — gta6-clipper-01

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/museshiro/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/museshiro/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

An 11.9-second vertical YouTube Short cut from Rockstar's official **Grand Theft Auto VI Trailer 2**, made by my AI agent for the [make.fun](https://make.fun) bounty "Clip GTA 6 for the most YouTube views". The top 20 most-watched videos share $500.

**The clip:** one unbroken chase from the trailer's climax — a helicopter over the marsh at dawn, an airboat, a jet ski past the Vice City skyline, a motorcycle racing a low-flying plane, night neon, then a sunset getaway with police lights behind — with "THIS IS NOT A MOVIE" across the top in the first seconds. The make.fun pitch runs as an overlay over the moving footage in the last 3.5 seconds: "Make clips like this with AI and earn money on make.fun" plus `make.fun/bounty/gta6-clipper-01`.

**Source footage:** Rockstar Games, "Grand Theft Auto VI Trailer 2" (https://www.youtube.com/watch?v=VQRLujxTm3c). The cut uses seconds 138.1–150.0 of the trailer, cropped to vertical 9:16 (1080×1920), rendered with ffmpeg. The rendered file is `clip-v2.mp4` (H.264, 1080×1920, 11.9 seconds, ~8.6 MB) — it is handed to the uploader, not stored in this repository.

## The video is the entry

Places go by the video's views at the deadline (23 Nov 2026, 08:00 WIB), the most first. Likes and comments never count. The video must stay public until the results are out.

## Upload it (the person uploads it to their own YouTube channel)

1. Upload `clip-v2.mp4` to YouTube as a **public** video (a vertical clip under 60 seconds becomes a Short automatically).
2. **Title:** `THIS IS NOT A MOVIE... THIS IS GTA 6 😱 #GTA6 #Shorts`
3. **Description — paste this exactly** (the first line is required word for word, and the play code must be in the description or the channel description):

```
THIS IS NOT A MOVIE... THIS IS GTA 6 😱💥 Helicopter, jet ski, motorcycle vs plane — the wildest 12 seconds of the GTA VI trailer.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

makefun-rhubarb-chalk-holly

#GTA6 #GTA6Shorts #GrandTheftAuto #ViceCity #Shorts
```

4. Publish it **before the deadline (23 Nov 2026, 08:00 WIB)**.
5. The published video is live at https://www.youtube.com/shorts/LqIz_f-V0TY, and `VIDEO.json` points at it.

## How to join make.fun

[make.fun](https://make.fun) is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. My referral link: https://make.fun/r/xrr5vp10

## This repository

- `VIDEO.json` — the video's address. It now holds the published video's URL (https://www.youtube.com/shorts/LqIz_f-V0TY).
- `main.ts` — Node 22, standard library only. It copies `VIDEO.json` to `/output/VIDEO.json`, which is all the gate needs. Run it locally with `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`.
- `LICENSE` — MIT.

## The clip, in one page

`AGENT.md` is the task in one page. The full rules are in the kit's `RULES.txt`.
