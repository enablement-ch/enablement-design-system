# Figma File Spec - Enablement Social Templates

> What the designer must build in the master Figma file before any production work begins.
> This is the contract that lets future automation (Figma MCP) populate templates programmatically.

**File name:** `Enablement - Social Templates`

**File location:** Designer's Figma team workspace. Lanny gets edit access. The file URL goes back into this spec once created.

---

## 1. Why this file exists

The designer never starts a brief from a blank canvas. Every brief points at a frame in this file, populates the variable text fields, and exports.

Future state: Claude pushes layout + text into these frames via the Figma MCP server. The frame contract below is what the MCP relies on - if frame names, layer names, or variable text fields drift, automation breaks.

---

## 2. File-level setup

### Pages

Create these pages in this order:

1. `00 - System` - tokens, type styles, color styles, components
2. `01 - Carousel` - carousel templates (cover + content + CTA frames)
3. `02 - Infographic` - vertical infographic templates per primitive
4. `03 - GIF Storyboard` - frame-by-frame storyboards for animated GIFs
5. `04 - Banner` - LinkedIn banner variants (already exists - import the 4 examples)
6. `05 - Sandbox` - WIP space, never referenced by briefs

### Color styles

Create as **shared styles** in `00 - System`. Names must match `DESIGN_SOCIAL.md` token names exactly (without the `--` prefix):

| Style name | Hex |
|---|---|
| `color/canvas` | `#F2F4F8` |
| `color/canvas-dark` | `#0F1217` |
| `color/surface` | `#FFFFFF` |
| `color/surface-raised` | `#FAFBFD` |
| `color/border` | `#E1E5EC` |
| `color/border-strong` | `#C9CFD9` |
| `color/heading` | `#0F1217` |
| `color/body` | `#4A5360` |
| `color/muted` | `#7C8390` |
| `color/inverse` | `#FFFFFF` |
| `color/accent` | `#E11E48` |
| `color/accent-hover` | `#BE123C` |
| `color/flow` | `#6FA8DC` |
| `color/flow-strong` | `#4A89C7` |
| `color/positive` | `#2E8F54` |
| `color/warning` | `#C77B0E` |
| `color/critical` | `#B43A2A` |

### Text styles

Create as **shared text styles**. Sofia Sans and JetBrains Mono must be loaded into the Figma file.

| Style name | Family / weight | Size |
|---|---|---|
| `text/eyebrow-mono` | JetBrains Mono / Regular | 12px uppercase, letter-spacing 0.08em |
| `text/caption-mono` | JetBrains Mono / Regular | 13px |
| `text/body` | Sofia Sans / Regular | 16px |
| `text/lead` | Sofia Sans / Regular | 20px |
| `text/h5` | Sofia Sans / Bold | 25px |
| `text/h4` | Sofia Sans / Bold | 31px |
| `text/h3` | Sofia Sans / Bold | 39px |
| `text/h2` | Sofia Sans / Bold | 49px |
| `text/h1` | Sofia Sans / Bold | 61px |
| `text/display` | Sofia Sans / Bold | 80px (scale up per format) |

### Components

Build these on `00 - System` as **published components** with editable text variants:

1. **Card / glow-stack node** - white fill, 1px `color/border`, 8px radius, 24px padding all sides. Variants: with-left-stripe (positive/warning/critical/accent), no-stripe.
2. **Pill / eyebrow** - radius pill, 12px vertical padding, 16px horizontal. Variants: neutral (white + border), accent (red fill), positive, warning, critical.
3. **Stat callout** - container with: number (Sofia Bold Display) + label (mono caption). Variant: side-by-side `5% → 30%` arrow.
4. **Wordmark** - SVG of Enablement logo, two variants: black (for light canvas), white (for dark canvas). Bottom-right placement guide layer included.
5. **Slide indicator** - `01 / 09` mono caption, top-right anchor. Variants for 6 / 7 / 8 / 9 / 10 slide carousels.
6. **Connector / arrow** - 1.5px stroke, single arrowhead. Variants: solid (human step, `color/heading`), dashed (automated, `color/flow-strong`).

---

## 3. Carousel template - on page `01 - Carousel`

Build these frames. Frame names must be exact.

### Frame: `Carousel / Cover`

- **Size:** 1080 x 1350 px
- **Background:** `color/canvas`
- **Layers (named exactly):**
  - `eyebrow` - text layer, `text/eyebrow-mono`, top-left of message zone
  - `headline` - text layer, `text/display` or `text/h1`, max 8 words
  - `subhead` - text layer, `text/lead`, `color/body`, max 15 words
  - `slide-indicator` - instance of slide-indicator component, top-right
  - `wordmark` - instance of wordmark component, bottom-right

### Frame: `Carousel / Content - Card Stack`

- **Size:** 1080 x 1350 px
- **Layers:**
  - `slide-indicator` - top-right
  - `section-heading` - text, `text/h4`
  - `body` - text, `text/body`, max 35 words
  - `card-stack` - auto-layout group of 3-5 Card components, 16px gap
  - `wordmark` - bottom-right

### Frame: `Carousel / Content - Split Comparison`

- **Layers:**
  - `slide-indicator`
  - `section-heading`
  - `column-left` (Card with left-stripe `critical`) - title + 2-3 bullet labels
  - `divider` - vertical 1px hairline `color/border`
  - `column-right` (Card with left-stripe `positive`) - title + 2-3 bullet labels
  - `wordmark`

### Frame: `Carousel / Content - Stat Callout`

- **Layers:**
  - `slide-indicator`
  - `stat-number` - text, `text/display` upscaled to 200px
  - `stat-label` - text, `text/caption-mono` uppercase
  - `context-line` - text, `text/body`, optional
  - `wordmark`

### Frame: `Carousel / Content - Pull Quote`

- **Layers:**
  - `slide-indicator`
  - `quote` - text, `text/lead`
  - `attribution` - text, `text/caption-mono`
  - `wordmark`

### Frame: `Carousel / CTA Close`

- **Layers:**
  - `closing-headline` - text, `text/h2`
  - `action-line` - text, `text/lead`, `color/accent` for the URL
  - `wordmark`

---

## 4. Infographic templates - on page `02 - Infographic`

### Frame: `Infographic / Split Screen` (visual-A pattern)

- 1080 x 1350 px, canvas background
- Layers: `headline` (top, `color/accent` red, all-caps), `column-left-header` (pill), `column-left-flow` (vertical card stack with critical stripe), `column-right-header` (pill, accent fill), `column-right-flow` (vertical card stack with positive stripe), `legend` (bottom), `wordmark`

### Frame: `Infographic / Branching Flowchart` (visual-B pattern)

- 1080 x 1350 px, canvas background
- Layers: `headline`, `source-node` (single card at top), `branch-left` (3-card stack with warning/critical stripe), `branch-right` (3-card stack with positive stripe), `outcome-badge-left`, `outcome-badge-right`, `anchor-line` (italic at bottom), `wordmark`

### Frame: `Infographic / Flywheel Dark` (visual-C pattern - exception)

- 1080 x 1350 px, **canvas-dark background**
- Layers: `headline`, `flywheel-ring`, `node-1` (top-left, glassmorphism, warning-tinted), `node-2` (top-right, glassmorphism, positive-tinted), `node-3` (bottom-center, glassmorphism, accent-tinted), `center-card` (the hero stat), `anchor-line-1`, `anchor-line-2`, `wordmark-white`

---

## 5. GIF storyboard - on page `03 - GIF Storyboard`

For each animated GIF, the designer creates a **5-frame storyboard** on this page. Each frame is one beat from `DESIGN_SOCIAL.md` Section 5.4.

### Frame group: `GIF / Storyboard - [post-slug]`

Contains 5 sub-frames:

- `Beat 1 - 0.0s` (headline only)
- `Beat 2 - 1.0s` (headline + first node)
- `Beat 3 - 2.0s` (headline + first node + connector + second node)
- `Beat 4 - 3.0s` (all elements + anchor line + wordmark)
- `Beat 5 - 4.0s` (hold frame, identical to Beat 4)

Designer then exports these to After Effects or uses Figma's prototype-to-GIF flow.

---

## 6. Banner page - on page `04 - Banner`

Import the 4 existing banner PNGs from `~/enablement-design-system/social-examples/` as static references. Rebuild as editable Figma frames once the rest of the templates are stable. Not blocking the trial.

---

## 7. Naming rules the automation depends on

These are not stylistic preferences. Future MCP automation reads frame names and layer names verbatim.

- **Frame names:** exactly as written above, including spaces and dashes. `Carousel / Cover` not `carousel-cover`.
- **Layer names:** kebab-case, exactly as written. `slide-indicator` not `Slide Indicator`.
- **Component names:** include the slash hierarchy. `Card / Glow-Stack` not just `Card`.
- **Text layer content:** does not matter for placeholder text - the automation overwrites it. What matters is the layer's *name* and its *position/styles*.

---

## 8. Designer onboarding checklist

For the first session with the file:

- [ ] Designer has Figma seat with edit access
- [ ] Sofia Sans and JetBrains Mono loaded into the file (free Google fonts)
- [ ] All color styles created on `00 - System` (Section 2 above)
- [ ] All text styles created (Section 2 above)
- [ ] All components built (Section 2 above)
- [ ] One template frame per format built and tested with the trial brief
- [ ] Lanny + designer review the first frame together before committing the rest
- [ ] Figma file URL captured at the top of this spec

---

## 9. File URL

`[TO BE FILLED IN WHEN FIGMA FILE EXISTS]`

---

## Changelog

- `2026-05-22` - v0.1 initial spec. Frame and layer naming conventions locked for future MCP automation. Designer to build from this spec during trial.
