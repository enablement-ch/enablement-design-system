# Enablement - Social Design System v1.0

> Visual rules for everything Enablement ships on LinkedIn. Cheat sheets, animated process GIFs, banners.
> This is the source of truth. Code, templates, briefs follow what's locked here.

## Status

| Format | Status |
|---|---|
| Cheat sheet (vertical single image, 1080x1350 or taller) | **primary format** - 2 production references in `social-examples/inspiration/` |
| Animated process GIF / flywheel (4:5) | secondary format - 1 production reference |
| Carousel (multi-slide 4:5) | de-emphasised - use only when content is narratively sequential and cannot fit one canvas |
| Single image post (1080x1080) | situational - for one-line takes / single-stat posts |
| LinkedIn personal banner (1584x396) | **pre-redesign, to be rebuilt** - current banners live on Lanny's profile; rebuild brief will follow the same cheat-sheet primitives |

## How this doc relates to the rest of the system

| Source | Owns | We reference |
|---|---|---|
| `~/enablement-site/src/styles/global.css` | Production color/type/spacing tokens | All canonical hex values, font stack, scale |
| `~/enablement-design-system/site-plan.md` | Website composition rules | Voice, italic-emphasis pattern, hierarchy |
| `~/enablement-design-system/social-examples/inspiration/README.md` | **Calibration references and rules they teach** | Every rule in this doc traces back to a reference |
| `~/enablement-design-system/templates/brief-template.md` | Brief contract for designer | What every brief must contain |
| `~/enablement-design-system/templates/figma-file-spec.md` | Designer's Figma file structure | Required frames, layers, variable names |
| **This file** | Social-specific rules | Format specs, voice-to-visual translation, primitives |

**Rule:** when production tokens drift from this doc, production wins. Update this doc, not the site.
**Rule:** when this doc drifts from a reference in `inspiration/`, the references win. Update this doc, not the references.
**Rule:** when this doc drifts from `templates/figma-file-spec.md`, this doc wins. Update the Figma file.

---

## 1. The brand at a glance

Enablement's social visual register is **information-dense premium cheat sheet.** The format is a single vertical canvas, partitioned into bento tiles, each tile carrying a piece of the framework or play. Reference: the Cold Email Cheatsheet and GTM Orchestration Framework in `social-examples/inspiration/`.

Three words that must apply to every output:

- **Dense.** Every tile carries information. Empty space exists to let tiles breathe, never as filler.
- **Visualised.** No tile is text-only. Each tile contains a mockup, mini-table, workflow snippet, tool logo with context, chart fragment, or other visual artefact that makes the concept legible without reading.
- **Premium.** Subtle gradients, glassmorphic surfaces, soft drop shadows, faint grid textures. The graphic should look like a dashboard component, not a marketing poster.

What we are NOT:

- Not text-heavy slideware. If the only content of a tile is words, it is a draft, not a final.
- Not flat-color minimalism. Backgrounds gradient, surfaces glassmorphic, depth exists.
- Not corporate-templated. No PowerPoint stock charts, no hand-drawn anything, no clipart.
- Not playful. No emojis as visual elements. No comic typography.

---

## 2. Tokens (canonical)

Hex values come from production `global.css`. When you see a color in this doc, it comes from here.

### 2.1 Color

| Token | Hex | Use |
|---|---|---|
| `--color-canvas` | `#F2F4F8` | **Default base.** Light slate. Never pure white. |
| `--color-surface` | `#FFFFFF` | Bento tile fills |
| `--color-surface-raised` | `#FAFBFD` | Subtle layered surface (chips, secondary tiles) |
| `--color-border` | `#E1E5EC` | Hairline borders on tiles (always present) |
| `--color-border-strong` | `#C9CFD9` | Heavier dividers |
| `--color-heading` | `#0F1217` | Deep charcoal. Headings, primary text. |
| `--color-body` | `#4A5360` | Body text |
| `--color-muted` | `#7C8390` | Captions, legends, mono labels |
| `--color-accent` | `#E11E48` | **Enablement Red.** Used sparingly. One element per graphic. |
| `--color-accent-hover` | `#BE123C` | Pressed-state red (rarely used in static) |
| `--color-flow` | `#6FA8DC` | Diagram flow lines, neutral connectors, gradient endpoints |
| `--color-flow-strong` | `#4A89C7` | Emphasised flow lines |
| `--color-positive` | `#2E8F54` | Success state |
| `--color-warning` | `#C77B0E` | Caution state |
| `--color-critical` | `#B43A2A` | Failure state |

**Background gradient (locked):** linear gradient from `--color-canvas` (`#F2F4F8`) at top-left toward a tint of `--color-flow` (`#6FA8DC` at ~8% opacity) at bottom-right. Subtle. Should be barely perceptible at first glance; visible on close inspection.

**Tool-brand accents** are allowed inside individual bento tiles when a specific tool is being illustrated (e.g. Slack purple inside a Slack mockup tile). Outside of tool-specific tiles, only the Enablement palette applies.

**Dark-mode tokens** (use only if a specific reference establishes a dark version):

| Token | Hex |
|---|---|
| `--color-canvas` (dark) | `#0F1217` |
| `--color-surface` (dark) | `#181C23` |
| `--color-heading` (dark) | `#E5E9F0` |

### 2.2 Typography

| Use | Family | Size source |
|---|---|---|
| Headlines, display | **Sofia Sans** (Bold) | `--font-size-h1` 3.8125rem, `--font-size-display` clamp(2.75rem, 6vw, 5rem) |
| Section headings (per bento) | **Sofia Sans** (Semibold) | `--font-size-h4` 1.9375rem or `--font-size-h5` 1.5625rem |
| Body, labels | **Sofia Sans** (Regular) | `--font-size-body` 1rem |
| Captions, eyebrows, legends, numerics | **JetBrains Mono** (Regular) | `--font-size-caption` 0.8125rem, `--font-size-eyebrow` 0.75rem |

**No serif typefaces anywhere.** Lanny called this out as off-brand. Sofia Sans + JetBrains Mono is the entire stack.

**Pattern: italic emphasis on one word.** Borrowed from website (`Scale your pipeline, *not your headcount*`). One italic word per headline maximum.

**Pattern: mono eyebrows.** Above every section heading, a small uppercase mono eyebrow in `--color-muted` provides category (`STEP 01`, `SIGNAL`, `OUTCOME`). Sets the rhythm.

**Pattern: tabular numerics.** Stats use mono with `font-variant-numeric: tabular-nums`. Numbers align vertically across tiles.

### 2.3 Spacing scale

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192` (px, named `--space-1` through `--space-11`).

**Bento tile padding rule:** minimum `--space-5` (24px) internal padding on all sides. **Tighter padding is the single most common failure mode** (called out explicitly by Lanny on GTM Orchestration Steps 2, 3, 8). When unsure, pad more.

**Section gaps:** `--space-6` (32px) between bento tiles minimum. Tiles should never share borders without a gap.

### 2.4 Radius

`4 / 8 / 12 / 20 / 999` (`--radius-xs / sm / md / lg / pill`).

- Bento tiles: `--radius-md` (12px) default. The slight extra roundness vs cards (8px) reinforces the glassmorphic feel.
- Pills, chips, eyebrows: `--radius-pill`.
- No corners larger than 20px.

### 2.5 Shadow

```
--shadow-xs  0 1px 2px  rgba(15, 18, 23, 0.04)
--shadow-sm  0 4px 12px rgba(15, 18, 23, 0.06)
--shadow-md  0 12px 32px rgba(15, 18, 23, 0.08)
```

**Bento tile shadow:** `--shadow-sm` default. Soft, diffused. Provides depth without announcing itself.

**Layered shadows for 3D depth** (per allbound reference): when a tile or central element needs more depth, layer `--shadow-xs` + `--shadow-md` rather than using a single hard shadow. No 3D bevels. No gradient-on-text effects.

---

## 3. Composition primitives

The building blocks. Every social graphic is assembled from these.

### 3.1 Background (gradient + grid)

The canvas itself is a primitive. Two layers:

1. **Gradient layer:** linear gradient `--color-canvas` (top-left) → `--color-flow` at 8% opacity (bottom-right). Subtle.
2. **Grid texture layer:** 1px dot or hairline grid at ~24px spacing, in `--color-border` at 20% opacity, overlaid on the gradient. Adds depth, prevents flatness. Reference: visible in the Allbound flywheel.

Both layers are part of the canvas template, not per-tile.

### 3.2 Bento tile (the main primitive)

The unit of information in cheat sheets.

- **Background:** `--color-surface` (`#FFFFFF`) base, with a **subtle gradient overlay** (light-grey → white, or white → very-light-grey) to sustain the premium glass feel. The Cold Email Cheatsheet does this explicitly.
- **Border:** 1px solid `--color-border` (`#E1E5EC`). Always present. The border is part of the glassmorphic read.
- **Radius:** `--radius-md` (12px).
- **Padding:** minimum `--space-5` (24px), more is acceptable. Never less.
- **Shadow:** `--shadow-sm`.
- **Optional left-accent stripe:** 4px wide vertical bar on the left edge in `--color-accent`, `--color-positive`, `--color-warning`, or `--color-critical` for semantic state.

**Glassmorphic effect spec:** the subtle gradient overlay + the always-present 1px border + the soft shadow together create the glassmorphism. Do not use `backdrop-filter` blur on static exports - the effect is achieved with gradient + border + shadow on white.

### 3.3 Mockup tile (the show-don't-tell unit)

A bento tile that contains a visualised artefact instead of (or in addition to) text. **This is non-negotiable.** Every section in a cheat sheet must contain a visualisation, not just text.

Allowed visualisation types inside a tile:

- Email mockup (from / subject / first 3 lines, in a faux Gmail or Outlook shell)
- Workflow snippet (trigger → action → outcome, with mini nodes and connectors)
- Mini-table (2-4 columns, 3-5 rows max)
- Annotated logo (tool logo + a one-line label of what it does in this play)
- Chart fragment (sparkline, mini bar chart, mini funnel)
- Pill / chip stack (a labelled set of tactic chips, e.g. "Bumping / Circling back / New Angle")
- Mini-screenshot (UI fragment from a real tool, cropped tightly)
- Stat callout (number + label, in mono)

**Failure mode:** a tile that contains only a logo (no surrounding visualisation or label) wastes the slot. Lanny called this out specifically on GTM Orchestration Step 6.

### 3.4 Pill / chip / eyebrow

- Background: subtle gradient (light grey → mid grey) or solid (white with border, or accent for emphasis). Gradient is preferred; sustains the premium feel.
- Radius: `--radius-pill`.
- Padding: `--space-2` vertical, `--space-3` horizontal.
- Type: JetBrains Mono uppercase for eyebrows. Sofia Sans Semibold for action/state chips.
- Examples from references: "STEP 01," "SIGNAL," tactic chips (Bumping / Circling back / New Angle), state chips ("3-4% Above average").

### 3.5 Connector / arrow

- Solid line in `--color-heading`: human-executed step.
- Dashed line in `--color-flow-strong`: automated step.
- Single arrowhead, single direction.
- Stroke: 1.5px for diagram lines, 1px for dividers.

### 3.6 Stat callout

- Number: Sofia Sans Bold, large (`--font-size-display` or larger).
- Label below: JetBrains Mono uppercase caption in `--color-muted`.
- Optional before/after pattern: `5% → 30%` with thin arrow.
- Mono numerics throughout for vertical alignment across tiles.

### 3.7 Pull quote

- Quote: Sofia Sans Regular at `--font-size-lead`.
- Use the actual `"` character only - no decorative giant glyphs.
- Attribution: `- [Name], [Title], [Company]` in JetBrains Mono caption.
- Generous side padding (at least `--space-7`).

### 3.8 Wordmark (logo lockup)

- Files: `~/enablement-site/public/logo-black.svg`, `logo-white.svg`.
- On light canvas: black wordmark.
- On dark canvas: white wordmark.
- Placement: bottom-right, small, unobtrusive.
- Minimum clearspace: equal to wordmark cap height on all sides.

---

## 4. Voice-to-visual translation

The post tells you which format to reach for. This table is the lookup.

| Post type (from `LINKEDIN_STYLE_GUIDE.md`) | Format | Notes |
|---|---|---|
| **Framework Breakdown** | **Cheat sheet** | Each framework step = one bento tile with a visualised artefact. 6-10 tiles. |
| **Tool/Resource (cheat sheet)** | **Cheat sheet** | Primary use case. Tools/tactics laid out as bentos. |
| **Process Visual (multi-step system)** | **Animated GIF** | Flywheel or sequential reveal. Glassmorphic central composition. |
| **Contrarian Take** | Cheat sheet (split-comparison layout) OR single image | Two side-by-side bentos contrasting old vs new model. Or a single tall comparison panel. |
| **Specific Result** (numbers-driven) | Single image (1:1) or cheat-sheet cover | Hero stat callout + 1-line context. Less is more here. |
| **Personal Story** | Single image | Photo + pull quote. Banner-style photo treatment (will be rebuilt post-redesign). |
| **High-Velocity** (rapid takes) | Single image (1:1) | All-type composition. Bold hook restated visually. |

**The test:** if a post hinges on multiple distinct insights, plays, tools, or steps, it's a cheat sheet. If a post hinges on one number, one quote, or one one-liner, it's a single image. If a post hinges on a self-reinforcing process, it's a GIF.

---

## 5. Format specs

### 5.1 Cheat sheet (primary format)

**Canvas:** 1080 x 1350 px (4:5) **minimum.** Longer is fine. Up to 1080 x 1920 (9:16) or even 1080 x 2160 acceptable when content density demands it. **Do not force content into a fixed grid that compresses padding.** Lanny called this out: rather extend the canvas vertically than cram tiles.

**Format:** PNG, 24-bit, sRGB.

**Anatomy** (top to bottom):

1. **Title block** (top). Sofia Sans Bold display size. Sentence case or all-caps depending on register. Optional one-line subtitle in Sofia Sans Regular below. Optional small attribution chip (e.g. "Based on 4.3B emails sent").
2. **Step / section sequence** (middle, ~70-80% of canvas). Bento tiles in a grid. Each tile is a Mockup Tile (Section 3.3) - never text-only. Each tile has:
   - Mono eyebrow (e.g. `STEP 01`)
   - Section heading (Sofia Sans Semibold, **distinct from other section headings - no repeated verbs**)
   - Visualised artefact (mockup, table, workflow, chart fragment, pill stack)
3. **Anchor line** (bottom, centered, optional, italic). One sentence that lands the insight.
4. **Wordmark** (bottom-right, small).

**Grid rules:**

- Allowed layouts: 1-column (very tall, ~10+ tiles), 2-column (balanced, 6-10 tiles), 2x3 / 3x2 / 2x4 / 4x2 / mixed-size bento (where some tiles span 2 columns or 2 rows).
- **Mixed-size bento is encouraged** - a hero tile spanning the full width followed by 4 smaller tiles below reads more dynamically than a uniform grid.
- **No forced grid alignment that compresses padding.** Extend canvas vertically instead.

**Tile content rules:**

- **Every tile must have a distinct section name.** No "Track" repeated 3 times. Use Validate / Enrich / Route / Personalise / Send / Measure instead.
- **Every tile must show, not just tell.** Visualisation required (see Section 3.3 for allowed types).
- **Tool logos require context.** A logo alone in a tile is incomplete - pair with a one-line label, a workflow snippet, or a mockup that contextualises the tool's role.

### 5.2 Animated GIF (process / flywheel)

**Canvas:** 1080 x 1350 px (4:5) default. 1:1 (1080x1080) acceptable for compact flywheels.
**Frame rate:** 12-15 fps.
**Duration:** 4-6 seconds total, looping seamlessly.
**File size:** ≤8MB.

**Pattern: flywheel reveal** (reference: Allbound Flow 2026).

- **Central composition:** circular ring with 3-5 orbital nodes. The ring has subtle 3D depth (drop shadow on the ring itself, not just on nodes).
- **Nodes:** glassmorphic bento tiles arranged at clock positions on the ring. Each node has a left-accent stripe in a sequential color (warning → flow → positive → accent, or similar).
- **Connectors:** curved arrows along the ring path, between nodes. Solid for human steps, dashed for automated.
- **Central card:** floating bento in the middle of the ring, containing the hero stat or insight.
- **Background:** gradient + grid texture (same as cheat-sheet canvas).

**Beat structure:**

| Beat | Time | Action |
|---|---|---|
| 1 | 0.0-1.0s | Background + headline + central card fade in |
| 2 | 1.0-2.0s | Node 1 appears |
| 3 | 2.0-3.0s | Connector to Node 2 draws, Node 2 appears |
| 4 | 3.0-4.0s | Remaining nodes + connectors complete |
| 5 (loop) | 4.0-6.0s | Hold final frame, snap to start |

**Per-node rule:** each node needs a label that explains *which step in the system it is* (e.g. "ENGAGE: Cold Email") and a small explanatory text below (one line max). Not just a logo. Per Lanny's critique of Allbound.

**Motion rules:**

- Ease-out only. No bounce, no parallax, no spinning elements.
- Motion is informational, not decorative.

### 5.3 Carousel (de-emphasised)

**Use when:** content is narratively sequential and cannot fit on one canvas. Otherwise prefer a cheat sheet.

**Canvas:** 1080 x 1350 px (4:5).
**Slide count:** 6-9 slides.

**Slide types:**

- Slide 01 - Cover: eyebrow + headline + subhead + slide indicator + wordmark
- Slides 02..N-1 - Content: one bento composition per slide (re-use cheat-sheet primitives)
- Slide N - CTA: closing headline + action line + wordmark

**Slide indicator:** `01 / NN` in JetBrains Mono caption, `--color-muted`, top-right.

### 5.4 Single image post (1:1 or 4:5)

Default to 1080 x 1080 px when the post hinges on a single stat, quote, or contrarian one-liner.

**Anatomy:**

- One hero element (stat callout, pull quote, or all-type hook).
- Background: same gradient + grid texture as cheat sheets.
- Wordmark bottom-right.

### 5.5 LinkedIn personal banner (1584x396) - pre-redesign

**Status:** the current LinkedIn banners on Lanny's profile predate the website redesign and will be rebuilt.

**Rebuild brief (parked):** when the time comes, write a banner brief using the same primitives as the cheat-sheet format (gradient + grid texture canvas, glassmorphic surfaces). Banner rebuild is not blocking the cheat-sheet trial.

---

## 6. The "do not" list

These are the recurring failure modes from the references. Treat as inviolable.

- **No text-only tiles.** Every tile must include a visualisation. A tile that is just a heading and a paragraph is a draft.
- **No tiles that are just a logo.** Logos need context (label, workflow snippet, mockup).
- **No cramped padding.** Internal padding < 24px is a defect. Extend the canvas vertically rather than tighten padding.
- **No repeated section names.** No three "Track" steps. Each section needs a distinct, accurate verb.
- **No serif typefaces.** Sofia Sans + JetBrains Mono only.
- **No flat-color backgrounds.** Gradient + grid texture, always.
- **No more than one Enablement Red accent element per graphic** (except inside tool-specific tiles where tool brand colors apply).
- **No emojis as visual elements in graphics.** Fine in post copy, not in graphics.
- **No 3D bevels, glossy effects, or gradient-on-text effects.**
- **No stock photography.** No "diverse group around a laptop." No abstract data viz stock.
- **No hand-drawn or sketchy textures.** No paper grain.
- **No motion-graphic transitions in GIFs** (no swipes, no wipes, no zooms).
- **No drop shadows on text.**

---

## 7. Workflow

```
LinkedIn post (text)
       ↓
Lanny (or Claude) fills out brief-template.md
   - exact format (cheat sheet / GIF / carousel / single image)
   - exact copy for every tile / element
   - layout grid + tile count + per-tile visualisation type
   - reference image(s) from social-examples/inspiration/
       ↓
ClickUp task created with brief in description
       ↓
Designer (WhatsApp handoff for now)
       ↓
Designer opens Enablement Social Templates Figma file
       ↓
Designer populates the chosen template frame from the brief
       ↓
Designer exports to PNG (cheat sheet, single image) or GIF
       ↓
Files delivered back via ClickUp + WhatsApp
       ↓
Lanny posts on LinkedIn
```

### File naming convention

- Cheat sheet: `<post-slug>_cheatsheet.png`
- GIF: `<post-slug>_animated.gif`
- Carousel: `<post-slug>_carousel_01.png` ... `_NN.png`
- Single image: `<post-slug>_single.png`

Where `<post-slug>` is kebab-case, max 6 words.

### Delivery location

- During trial: ClickUp task attachments.
- Long-term: Google Drive folder `/Enablement/LinkedIn/Visuals/YYYY-MM/` + ClickUp task link.

---

## 8. Versioning

This doc is v1.0. Increment minor on additive changes (new format, new primitive). Increment major on positioning shifts or token changes.

### Changelog

- `2026-05-22` - v0.1 initial draft (deprecated). Partially built on BenAI-derived references; positioning was wrong.
- `2026-05-23` - **v1.0 major rewrite.** Repositioned to cheat-sheet-first based on 3 production references in `social-examples/inspiration/`. New primitives: gradient background + grid texture, mockup tile (show-don't-tell), glassmorphic bento with subtle gradient overlay. Padding minimum tightened to 24px and called out as the #1 failure mode. Serif typeface banned. Banners marked as pre-redesign. Carousel format de-emphasised in favour of vertical cheat sheets that can extend beyond 4:5. BenAI-contaminated language (glow-stack, premium SaaS product diagram framing, three-pattern visual-A/B/C taxonomy) removed.
