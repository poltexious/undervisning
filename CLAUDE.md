# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A MkDocs Material static site hosting Danish-language teaching material for HTX subjects (Programmering B, Matematik, Fysik), published to GitHub Pages. All page content is written in Danish — match that when editing or adding docs content.

## Commands

```bash
pip install -r requirements.txt   # install mkdocs-material
mkdocs serve                      # local dev server with live reload (http://127.0.0.1:8000)
mkdocs build                      # build static site into site/
```

There is no test suite, linter, or JS/CSS build step — this is a content + config repo. Verify changes by running `mkdocs serve` and checking the affected pages in a browser.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs requirements, replaces the literal string `BUILD_YEAR` in `mkdocs.yml`'s `copyright` line with the current year via `sed`, then runs `mkdocs gh-deploy --force`. Do not hardcode a year in `mkdocs.yml` — leave `BUILD_YEAR` as-is; the workflow stamps it at deploy time.

## Conventions

- All page content is written in Danish, including proper use of æ/ø/å — do not transliterate within body text.
- Code examples in the teaching material are in C#, matching the Programmering B curriculum.
- Filenames (and directory names) avoid æ/ø/å — use `ae`/`oe`/`aa` instead (e.g. `1g.md`, not `1.g-årgang.md`). This avoids URL percent-encoding in generated links and avoids git filename-normalization mismatches between macOS (NFD) and Linux (NFC). This only applies to names on disk; the rendered page content itself should still use æ/ø/å.
- Commit messages are written in Danish and may freely use æ/ø/å — git handles Unicode commit messages without the filename caveats above.
- `nav:` in `mkdocs.yml` is maintained manually, not auto-generated — see the Architecture note below on adding new pages.
- Always run `mkdocs serve` and check affected pages locally before pushing to `main`, since a push directly triggers the live deploy (see Deployment).

## Didaktiske principper for undervisningsindhold

Når du skriver eller redigerer undervisningsindhold under `docs/`, gælder:

- Målgruppe: HTX-elever (16-19 år), GameTech-studieretning. Eksempler forankres i spil/Unity hvor muligt.
- Kognitiv belastning: introducér ét nyt begreb ad gangen; byg på det, eleven allerede kender fra tidligere forløb.
- Struktur pr. forløb: læringsmål → motivation ("hvorfor") → teori med eksempel → øvelser med stigende sværhedsgrad → foldbart løsningsforslag.
- Kodeeksempler: C#, korte og fokuserede; én pointe pr. eksempel.
- Sprog: klart dansk, fagbegreber forklares første gang de bruges.
- Sværhedsgrad på øvelser markeres med en farvet cirkel foran overskriften, uden tekstlabel — farven er selvforklarende: `### :green_circle: Øvelse 1 — ...` (let), `:yellow_circle:` (mellem), `:red_circle:` (svær). Emoji-shortcodes, understøttet via `pymdownx.emoji` i `mkdocs.yml`.

## Architecture

- **`mkdocs.yml`** is the single source of truth for site structure and theming. The `nav:` section explicitly lists every page — adding a new `.md` file under `docs/` has no effect on the site until it's added to `nav:`.
- Note: the file has two top-level `theme:` keys (a leftover from an earlier edit); YAML resolves this by the second block winning entirely. All active theme config (palette, features, logo) lives in the **second** `theme:` block — edit that one, not the first.
- **Content structure** under `docs/` mirrors the nav: one directory per subject (`matematik/`, `fysik/`, `programmering-b/`). `programmering-b/` is further split by year (`1g.md`, `2g.md`, `3g.md`) plus an `index.md` overview — this per-year split is specific to Programmering B since it's the only subject with material written so far; Matematik and Fysik are currently placeholder stubs.
- **Per-subject color theming** is done via a small JS/CSS pair rather than mkdocs-material's built-in per-page styling: `docs/javascripts/fag-farver.js` inspects the URL path on page load and sets `data-fag="programmering"|"matematik"|"fysik"` on `<body>`; `docs/stylesheets/extra.css` matches on `body[data-fag=...]` to override the `--md-primary-fg-color` CSS variable per subject. To theme a new section, add a branch in `fag-farver.js` and a matching CSS block in `extra.css`.
- **`docs/javascripts/logo-link.js`** rewrites the header logo's link target to an external URL (the school's Gametech program page) since mkdocs-material doesn't support a separate logo link out of the box.
- Both custom scripts are registered via `extra_javascript:` in `mkdocs.yml` and only take effect after `DOMContentLoaded`.
