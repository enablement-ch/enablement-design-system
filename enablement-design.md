# Enablement Document Design System

The single source of truth for **generated documents** - PDFs, reports, playbooks, workbooks, anything a client or prospect receives as a file. Every Claude skill that renders a styled document reads this file so that company-wide output looks like it came from one company.

Sibling documents, different jobs:

- `DESIGN_SOCIAL.md` - LinkedIn carousels, infographics, GIFs, banners
- `site-plan.md` - website composition and voice
- **this file** - generated documents

Tokens here are derived from `DESIGN_SOCIAL.md` v1.0 so the two never drift.

---

## Theme tokens

Machine-readable. Skills feed this block to the shared PDF renderer. Keep it valid JSON - it is parsed, not just read.

```json
{
  "accent": "#E11E48",
  "dark": "#0F1217",
  "grey": "#F2F4F8",
  "black": "#4A5360",
  "body_font": "'Sofia Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  "heading_font": "'Sofia Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  "mono_font": "'JetBrains Mono', 'SF Mono', Menlo, Monaco, Consolas, monospace"
}
```

Token meanings, and where each one lands in a rendered document:

| Token | Value | Used for |
|---|---|---|
| `accent` | `#E11E48` Enablement Red | Heading rules, links, list markers, the cover banner underline. **Sparingly** - it is an accent, not a background. |
| `dark` | `#0F1217` Deep charcoal | Cover banner fill, table header rows, headings, bold text |
| `grey` | `#F2F4F8` Light slate | Zebra table rows, blockquote and code backgrounds. Never pure white as a canvas. |
| `black` | `#4A5360` Body grey | Body copy. Deliberately not `#000` - pure black reads harsh in print. |
| `body_font` | Sofia Sans | All body copy |
| `heading_font` | Sofia Sans | All headings |
| `mono_font` | JetBrains Mono | Code, captions, numerics |

Full palette for anything the renderer does not cover: see `DESIGN_SOCIAL.md` §2.1.

| Purpose | Hex |
|---|---|
| Border hairline | `#E1E5EC` |
| Border strong | `#C9CFD9` |
| Muted / captions | `#7C8390` |
| Positive | `#2E8F54` |
| Warning | `#C77B0E` |
| Critical | `#B43A2A` |

---

## Typography rules

- **Sofia Sans and JetBrains Mono are the entire stack.** No other families.
- **No serif typefaces anywhere.** This is a hard brand rule, not a preference.
- Fonts must be installed locally for the renderer to embed them. If Sofia Sans is missing, the stack falls back to the system sans and the document still renders - it just isn't quite on brand. Install from Google Fonts.
- One italic word per headline maximum, following the website pattern (`Scale your pipeline, *not your headcount*`).

## Logos

- Dark backgrounds: `~/enablement-design-system/logos/enablement-white.svg`
- Light backgrounds: `~/enablement-design-system/logos/enablement-black.svg`

The renderer takes a `logo` key (absolute path) and places it above the cover banner. SVG works; if a raster is needed, export at 2x.

## Writing rules that apply to every document

- **Never use em-dashes.** Use a hyphen with spaces ( - ). Company-wide, no exceptions.
- Sentence case for headings, not Title Case.
- One idea per paragraph. Short paragraphs.
- Numbers beat adjectives. "38% CTR lift in 6 weeks" over "significant improvement".

---

## How skills consume this

The shared PDF module lives at `~/.claude/skills/allbound-deep-research/scripts/render_pdf.py` and takes a `--theme` JSON file.

```bash
# 1. Extract the token block from this file into a theme JSON
python3 ~/.claude/skills/allbound-deep-research/scripts/design_to_theme.py \
  ~/enablement-design-system/enablement-design.md /tmp/theme.json

# 2. Render
python3 ~/.claude/skills/allbound-deep-research/scripts/render_pdf.py \
  --in report.md --out report.pdf \
  --theme /tmp/theme.json \
  --footer "Enablement-CH  ·  [Document type]"
```

Skills that render Enablement-branded documents:

- `/allbound-deep-research`
- `/content-client-positioning`
- `/allbound-strategy-workbook` (xlsx - uses the same palette via its builder script)

**The one exception:** client-facing lead magnets carry the *client's* brand, not ours. `/allbound-create-leadmagnet-playbook` reads the client's own design file instead, at `<Client>/7. LinkedIn Strategy/<client-slug>-design.md`, produced by `/content-create-client-design`. A prospect downloading a playbook from our client should see the client's colors. Everything else - our reports, our analyses, our strategy docs - uses this file.

---

## Changelog

- `2026-08-08` - v1.0. Extracted document tokens from `DESIGN_SOCIAL.md` v1.0 so generated PDFs and workbooks share the social palette.
