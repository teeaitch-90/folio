# Push the v2 redesign to GitHub (instructions for Cursor)

This folder is the finished v2 portfolio site. The files are production-ready, so copy them as-is. Do not rewrite or convert them to a framework.

Target repo: `teeaitch-90/folio`, branch `main`, served by GitHub Pages.

## Steps
1. Clone `teeaitch-90/folio` (or open the local clone).
2. From current `main`, create and push a backup branch: `git checkout -b v1-archive && git push -u origin v1-archive`, then `git checkout main`.
3. Replace the repo contents with this folder's contents (mirror, so deleted files are removed too). Keep `.git`, `CNAME` and any other dotfiles or custom-domain files that exist in the repo but not here.
4. Do not copy `uploads/`, `scraps/` or `changed/` unless they already exist in the repo (working files, not served by any page).
5. Check `git status`: `index.html`, `Home.dc.html`, `About.dc.html`, `AtlassianTeams.dc.html`, `CommBank.dc.html`, `Macquarie.dc.html`, `Westpac.dc.html`, `gate.js`, `support.js`, `assets/`, `casestudies*/` and `archive/` should show as changed or added.
6. Commit with the message `v2 redesign: new Dia-style pages, v1 preserved in archive/` and push to `main`.
7. Wait about 2 minutes for GitHub Pages, then open the live site and click through Home, About and all four case studies.

## Notes
- `index.html` and `Home.dc.html` are identical on purpose.
- `archive/v1-original/` holds the previous live site. Reference only.
- See `CLAUDE.md` for project structure and conventions.
