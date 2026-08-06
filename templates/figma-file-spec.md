# Figma File Spec - Enablement LinkedIn Designs

> Component and layer contract for the editorial infographic system. Start from
> `linkedin-infographic-template.svg`. Frame and layer names are stable
> automation interfaces.

**File name:** `Enablement - LinkedIn Designs`

**File URL:**
`https://www.figma.com/design/p5EfpR3pD5o0Mqh6e5cfo0/Enablement---LinkedIn-Designs`

---

## 1. Pages

Create these pages in order:

1. `00 - System`
2. `01 - Infographic`
3. `02 - Carousel`
4. `03 - GIF Storyboard`
5. `04 - Banner`
6. `05 - Sandbox`

---

## 2. Shared styles

### 2.1 Colors

| Style name | Hex |
|---|---|
| `color/canvas-start` | `#F5FAFF` |
| `color/canvas-end` | `#E4F2FF` |
| `color/surface` | `#FFFFFF` |
| `color/ink` | `#0F1217` |
| `color/blue-100` | `#D1E5FF` |
| `color/blue-200` | `#B5D0FF` |
| `color/blue-300` | `#86B0FF` |
| `color/blue-500` | `#4F7FEA` |
| `color/blue-700` | `#315FAD` |
| `color/blue-900` | `#17365F` |
| `color/accent-bright` | `#FF3762` |
| `color/accent` | `#E11E48` |
| `color/accent-dark` | `#BE123C` |

Create one paint style named `gradient/headline-accent`: linear left-to-right
from `color/accent-bright` to `color/accent`.

Apply `color/ink` to every normal text style. Do not create a separate body,
caption, label, or attribution gray. Use white only for deliberately reversed
text, including the editorial highlight inside `gradient/headline-accent`. Do
not apply red or blue paint styles to ordinary text.

### 2.2 Text

Load Sofia Sans and DM Serif Display.

| Style name | Family / weight | Size |
|---|---|---|
| `text/step` | Sofia Sans / Semibold | 18px |
| `text/caption` | Sofia Sans / Semibold | 14px |
| `text/body-small` | Sofia Sans / Regular | 18px |
| `text/body` | Sofia Sans / Regular | 22px |
| `text/lead` | Sofia Sans / Regular | 28px |
| `text/panel-heading` | Sofia Sans / Bold | 32px |
| `text/h2` | Sofia Sans / Bold | 52px |
| `text/h1` | Sofia Sans / Bold | 72px |
| `text/display` | Sofia Sans / Bold | 96px |
| `text/editorial-highlight` | DM Serif Display / Italic | 96px |

Sofia Sans owns every functional text role. DM Serif Display Italic is limited
to the one highlighted headline keyword inside the red gradient capsule. Do not
load or use JetBrains Mono.

---

## 3. Components on `00 - System`

### 3.1 `Panel / Editorial`

- Flat white or blue-family fill.
- 2px `color/blue-900` outline.
- 8px radius.
- 24px default padding.
- Optional `header-band` with a horizontal rule.
- Variants: `white`, `blue-100`, `blue-200`, `blue-300`,
  `square-table-cell`.
- No blur, gradient border, inset shine, or default shadow.

Editable layers:

- `step-id`
- `panel-heading`
- `panel-body`
- `panel-visual`

### 3.2 `Cell / Table`

- Square or 4px radius.
- 1px blue-family internal rule.
- 14px padding.
- Variants: `header`, `label`, `body`, `tinted-body`.

### 3.3 `Headline / How To`

Import the headline shell from `linkedin-infographic-template.svg` and rebuild
it as an editable component.

- Lock the prefix text to `How to`.
- Expose `title-rest` and `highlight-word` as editable text properties.
- `highlight-word` contains exactly one keyword by default.
- Put the highlight on its own line when possible.
- Highlight fill: `gradient/headline-accent`.
- Highlight text: white, DM Serif Display Italic.
- Highlight shape: 10px radius, thin `color/blue-900` plus white edge, restrained
  template shadow.
- Keep the title and highlight within the template's upper-left safe area.

### 3.4 `Capsule / Label`

- Variants: `blue-100`, `blue-200`, `blue-300`, `blue-500`, `red-dark`.
- Pill radius for labels.
- Never use the headline gradient for small labels.

### 3.5 `Step / ID`

- Sofia Sans Semibold.
- Compact white or tinted square.
- Variants `01` through `12`.

### 3.6 `Stat / Callout`

- Large Sofia Sans Bold number.
- Sofia Sans Semibold label.
- Variants: single, before/after, mini-bar, score.

### 3.7 `Connector / Arrow`

- 1.5-2px `color/blue-900` stroke.
- Variants: solid, dashed, elbow, curved.
- One arrowhead.

### 3.8 `Wordmark / Enablement`

- Black wordmark for the light canvas.
- Bottom-right placement guide included.

### 3.9 `Attribution / Author`

- 32-40px circular author image.
- Sofia Sans name.
- Bottom-left placement guide included.

### 3.10 `Slide / Indicator`

- Sofia Sans Semibold caption.
- Variants for six through nine slides.

---

## 4. Infographic frames on `01 - Infographic`

All frames default to 1080 x 1350px and may extend vertically.

Every infographic frame is based on
`templates/linkedin-infographic-template.svg`. Preserve its 20px edge guides,
faint document texture, headline safe area, bottom-left author attribution, and
bottom-right Enablement wordmark.

### `Infographic / Framework Grid`

Layers:

- `headline-how-to`
- `title-rest`
- `highlight-word`
- `subhead`
- `panel-grid`
- `panel-1` through `panel-6`
- `attribution`
- `wordmark`

The grid supports two-by-two, two-by-three, and mixed-span variants.

### `Infographic / Comparison Matrix`

Layers:

- `headline-how-to`
- `title-rest`
- `highlight-word`
- `subhead`
- `row-labels`
- `column-1` through `column-4`
- `comparison-grid`
- `attribution`
- `wordmark`

Build two-, three-, and four-column component variants. The same row labels must
repeat across every column.

### `Infographic / Annotated Breakdown`

Layers:

- `headline-how-to`
- `title-rest`
- `highlight-word`
- `source-artifact`
- `source-annotation-1` through `source-annotation-6`
- `breakdown-panels`
- `panel-1` through `panel-6`
- `attribution`
- `wordmark`

The source artifact occupies 38-46% of the width. The breakdown occupies the
remainder.

### `Infographic / Tiered Ladder`

Layers:

- `headline-how-to`
- `title-rest`
- `highlight-word`
- `tier-1` through `tier-4`
- `tier-labels`
- `tier-examples`
- `progression-connectors`
- `attribution`
- `wordmark`

### `Infographic / System Map`

Layers:

- `headline-how-to`
- `title-rest`
- `highlight-word`
- `system-diagram`
- `node-1` through `node-8`
- `connectors`
- `evidence-block`
- `attribution`
- `wordmark`

Keep nodes flat and outlined. Do not convert them into floating product cards.

### `Infographic / Compact Stat`

Layers:

- `headline-how-to`
- `title-rest`
- `highlight-word`
- `stat-callout`
- `context-diagram`
- `source-line`
- `attribution`
- `wordmark`

---

## 5. Carousel frames on `02 - Carousel`

### `Carousel / Cover`

- `headline-how-to`
- `title-rest`
- `highlight-word`
- `subhead`
- `preview-diagram`
- `slide-indicator`
- `wordmark`

### `Carousel / Content`

- `section-heading`
- `section-band`
- `body-structure`
- `panel-visual`
- `slide-indicator`
- `wordmark`

Create variants for framework panel, matrix, annotated source, tier, and system
map. Every slide must still read like part of the same editorial document.

### `Carousel / CTA`

- `closing-headline`
- `action-line`
- `wordmark`

---

## 6. GIF storyboard on `03 - GIF Storyboard`

Create a five-beat group named `GIF / Storyboard - [post-slug]`:

- `Beat 1 - 0.0s` - headline and base grid.
- `Beat 2 - 1.0s` - first panel or level.
- `Beat 3 - 2.0s` - second panel plus connector.
- `Beat 4 - 3.0s` - complete information structure.
- `Beat 5 - 4.0s` - final static hold.

Animate reading order only. Do not add glow sweeps, spins, parallax, or floating
card motion.

---

## 7. Banner page

Build banners only after an approved editorial reference exists. Use flat
panels, strong typography, and one headline highlight. Do not reuse retired
glassmorphic banner treatments.

---

## 8. Naming rules

- Frame names must match this file exactly.
- Layer names use kebab-case.
- Component names retain their slash hierarchy.
- Do not rename automation-facing layers during production.
- Add new variants instead of duplicating unnamed frames.

---

## 9. QA checklist

- [ ] Canonical SVG shell is used.
- [ ] Headline begins with the exact words `How to`.
- [ ] Exactly one keyword is highlighted in the red gradient capsule.
- [ ] Only approved neutral, red, and blue colors are used.
- [ ] No glassmorphism, blur, refractive border, or ambient SaaS gradient.
- [ ] Information hierarchy reads before decorative styling.
- [ ] Body text is legible at LinkedIn mobile size.
- [ ] Copy is structured as bullets, rows, labels, or annotations.
- [ ] Blue-family information coding is consistent.
- [ ] Only one Enablement Red hero highlight.
- [ ] Sofia Sans and DM Serif Display loaded correctly.
- [ ] JetBrains Mono is not used.
- [ ] Author attribution and wordmark are present.
- [ ] Final frame works as a static export.

---

## Changelog

- `2026-08-06` - v2.1 imported the canonical SVG shell, locked the red-and-blue
  palette, and added the mandatory `Headline / How To` component.
- `2026-08-06` - v2.0 rebuilt around the editorial infographic system and
  removed SaaS-glass component requirements.
- `2026-05-22` - v0.1 initial glassmorphic template contract, retired.
