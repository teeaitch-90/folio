# Portfolio site — project guide

Static, buildless portfolio site for Tim He. Plain files served as-is by GitHub Pages. No bundler, no npm, no build step.

## Run locally
Serve the folder with any static server, e.g.:
```
python3 -m http.server 3000
```
Then open http://localhost:3000 (loads `index.html`).

## Structure
- `index.html` — landing page (this is what GitHub Pages serves at `/`).
- `Home.dc.html` — identical copy of `index.html`, kept for editing. **When you change one, mirror the change into the other.**
- `About.dc.html`, `Macquarie.dc.html`, `AtlassianTeams.dc.html`, `CommBank.dc.html`, `Westpac.dc.html` — the other pages. Internal links point to `./index.html` for Home and `./<Name>.dc.html` for the rest.
- `gate.js` — simple password gate loaded by every page (deterrent only).
- `support.js` — runtime that renders the `.dc.html` custom-element pages. Do not edit.
- `assets/` — shared images, logos, CV PDF.
- `casestudies*/` — per-case-study image folders used by the case-study pages (the old JS bundles are only needed by `archive/v1-original`).
- `archive/` — preserved history: `v1-original/` (pre-redesign site) and `v2-dia-working-copies/` (redesign sources with their original Dia filenames). Reference only, see `archive/README.md`.
- `scraps/`, `changed/`, `uploads/` — working files from the design sessions. Safe to leave; not served by any page.

## Page format (.dc.html)
Each page is a Design Component: an `<x-dc>` template of inline-styled HTML plus a `class Component extends DCLogic` script. Styling is inline styles only; a small `<style>` block in `<helmet>` holds `@keyframes`, resets and the nav, tab and reveal rules. Keep edits inline-styled and canonical HTML.

## Conventions (v2 design)
- Light off-white background, black primary actions, purple glow accent `rgb(97,85,245)`. Font: Geist.
- Nav is a fixed pill; the logo (black rounded square mark) sits at its left.
- Work card colours: Atlassian light blue, Macquarie grey, CommBank cream yellow, Westpac soft pink. Same colours on the "other case studies" cards.
- Showcase and Atlassian directory use the black pill-tab carousel with a glass frame.
- Order everywhere: Atlassian, Macquarie, CommBank, Westpac.

## Deploy
Committing to `main` and pushing auto-deploys via GitHub Pages (repo `teeaitch-90/folio`). Custom domain via GoDaddy DNS. Nothing else to run.

Before the first v2 push: create a `v1-archive` branch from the current `main` in GitHub Desktop so the old site stays recoverable from git history.
