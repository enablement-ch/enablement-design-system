# Figma File Spec - Enablement LinkedIn Designs

> Component and layer contract for the editorial infographic system. Frame and
> layer names are stable automation interfaces.

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
| `color/canvas` | `#FFFFFF` |
| `color/canvas-alt` | `#F7F8FA` |
| `color/surface` | `#FFFFFF` |
| `color/ink` | `#0F1217` |
| `color/body` | `#343A45` |
| `color/muted` | `#707784` |
| `color/rule` | `#183A67` |
| `color/rule-light` | `#C9D2DF` |
| `color/accent` | `#E11E48` |
| `color/accent-dark` | `#BE123C` |
| `color/tint-blue` | `#DCEBFF` |
| `color/tint-blue-strong` | `#AFCBFA` |
| `color/tint-pink` | `#F8D6DF` |
| `color/tint-purple` | `#E6D5FA` |
| `color/tint-yellow` | `#FFF2B8` |
| `color/tint-cyan` | `#D8F4F7` |
| `color/tint-green` | `#DDF5D8` |
| `color/tint-peach` | `#FBE0D0` |
| `color/positive` | `#2E8F54` |
| `color/warning` | `#C77B0E` |
| `color/critical` | `#B43A2A` |

### 2.2 Text

Load Sofia Sans and JetBrains Mono.

| Style name | Family / weight | Size |
|---|---|---|
| `text/step-mono` | JetBrains Mono / Bold | 18px |
| `text/caption-mono` | JetBrains Mono / Regular | 14px |
| `text/body-small` | Sofia Sans / Regular | 18px |
| `text/body` | Sofia Sans / Regular | 22px |
| `text/lead` | Sofia Sans / Regular | 28px |
| `text/panel-heading` | Sofia Sans / Bold | 32px |
| `text/h2` | Sofia Sans / Bold | 52px |
| `text/h1` | Sofia Sans / Bold | 72px |
| `text/display` | Sofia Sans / Bold | 96px |

Create a Bold Italic variant for one short phrase in a headline. Do not add a
serif display style.

---

## 3. Components on `00 - System`

### 3.1 `Panel / Editorial`

- Flat white or tint fill.
- 2px `color/rule` outline.
- 8px radius.
- 24px default padding.
- Optional `header-band` with a horizontal rule.
- Variants: `white`, `blue`, `pink`, `purple`, `yellow`, `cyan`, `green`,
  `peach`, `square-table-cell`.
- No blur, gradient border, inset shine, or default shadow.

Editable layers:

- `step-id`
- `panel-heading`
- `panel-body`
- `panel-visual`

### 3.2 `Cell / Table`

- Square or 4px radius.
- 1px `color/rule-light` internal rule.
- 14px padding.
- Variants: `header`, `label`, `body`, `tinted-body`.

### 3.3 `Capsule / Highlight`

- Variants: `accent`, `blue`, `pink`, `purple`, `yellow`, `cyan`, `green`.
- 8px radius for headline capsules, pill radius for labels.
- Accent variant may use the optional overlay shadow.

### 3.4 `Step / ID`

- JetBrains Mono Bold.
- Compact white or tinted square.
- Variants `01` through `12`.

### 3.5 `Stat / Callout`

- Large Sofia Sans Bold number.
- JetBrains Mono label.
- Variants: single, before/after, mini-bar, score.

### 3.6 `Connector / Arrow`

- 1.5-2px `color/rule` stroke.
- Variants: solid, dashed, elbow, curved.
- One arrowhead.

### 3.7 `Wordmark / Enablement`

- Black wordmark for the light canvas.
- Bottom-right placement guide included.

### 3.8 `Attribution / Author`

- 32-40px circular author image.
- Sofia Sans name.
- Bottom-left placement guide included.

### 3.9 `Slide / Indicator`

- JetBrains Mono caption.
- Variants for six through nine slides.

---

## 4. Infographic frames on `01 - Infographic`

All frames default to 1080 x 1350px and may extend vertically.

### `Infographic / Framework Grid`

Layers:

- `headline-block`
- `headline`
- `headline-highlight`
- `subhead`
- `panel-grid`
- `panel-1` through `panel-6`
- `attribution`
- `wordmark`

The grid supports two-by-two, two-by-three, and mixed-span variants.

### `Infographic / Comparison Matrix`

Layers:

- `headline-block`
- `headline`
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

- `headline-block`
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

- `headline-block`
- `tier-1` through `tier-4`
- `tier-labels`
- `tier-examples`
- `progression-connectors`
- `attribution`
- `wordmark`

### `Infographic / System Map`

Layers:

- `headline-block`
- `system-diagram`
- `node-1` through `node-8`
- `connectors`
- `evidence-block`
- `attribution`
- `wordmark`

Keep nodes flat and outlined. Do not convert them into floating product cards.

### `Infographic / Compact Stat`

Layers:

- `headline`
- `stat-callout`
- `context-diagram`
- `source-line`
- `attribution`
- `wordmark`

---

## 5. Carousel frames on `02 - Carousel`

### `Carousel / Cover`

- `headline`
- `headline-highlight`
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

- [ ] White or off-white editorial canvas.
- [ ] No glassmorphism, blur, refractive border, or ambient SaaS gradient.
- [ ] Information hierarchy reads before decorative styling.
- [ ] Body text is legible at LinkedIn mobile size.
- [ ] Copy is structured as bullets, rows, labels, or annotations.
- [ ] Category tint use is consistent.
- [ ] Only one Enablement Red hero highlight.
- [ ] Sofia Sans and JetBrains Mono loaded correctly.
- [ ] Author attribution and wordmark are present.
- [ ] Final frame works as a static export.

---

## Changelog

- `2026-08-06` - v2.0 rebuilt around the editorial infographic system and
  removed SaaS-glass component requirements.
- `2026-05-22` - v0.1 initial glassmorphic template contract, retired.
