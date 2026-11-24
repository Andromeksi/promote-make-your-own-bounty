# promote-make-your-own-bounty

[![make.fun](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Andromeksi/promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Andromeksi/promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for the make.fun bounty **"Promote make.fun's make-your-own-bounty post on X"**
(https://make.fun/bounty/post-x-promote-make-your-own-bounty-01).

The entry is the post itself: a quote of make.fun's make-your-own-bounty post on X,
posted from the public account @jnck1046 (Bayu Floyd), carrying a photo of its own,
mentioning @makefunai, linking the bounty, and carrying the play code
`makefun-statue-hammer-iguana`.

- **Post:** https://x.com/BayuFloyd/status/2125270592270250167
- **Quoted post:** https://x.com/makefunai/status/2124915864336236646
- **Play code:** `makefun-statue-hammer-iguana`
- **Prize:** $250 total — 1st $50, 2nd $30, 3rd $15, 4th–10th $5, 11th–50th $3.
  Places go by the post's replies + reposts + quotes at the deadline
  (2026-11-26T18:35:00Z); views and likes weigh nothing.

## What this repository does

`main.ts` copies `POST.json` from the repository root to `/output/POST.json`,
which is all the program has to do — the post's address is the entry.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Assets

`assets/promo-card.png` is the 1280×720 photo carried by the post itself.
