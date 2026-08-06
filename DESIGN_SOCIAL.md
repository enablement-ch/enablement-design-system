# Enablement - Social Design System v2.0

> Canonical visual rules for Enablement's LinkedIn infographics, GIFs, carousels,
> single images, and banners. References, briefs, templates, and skills follow
> this document.

## Status

| Format | Status |
|---|---|
| Editorial infographic, vertical 4:5 or taller | **Primary format** |
| Framework grid, comparison matrix, annotated breakdown | **Primary archetypes** |
| Animated process infographic | Secondary |
| Carousel | Situational, only when a sequence cannot live on one canvas |
| Single-image stat or comparison | Situational |
| LinkedIn personal banner | Pre-redesign, rebuild later in this system |

## Source hierarchy

1. `social-examples/inspiration/` - visual calibration references.
2. `DESIGN_SOCIAL.md` - rules derived from those references.
3. `templates/brief-template.md` - the production brief contract.
4. `templates/figma-file-spec.md` - component and layer implementation.

If a rule conflicts with a reference, the references win and this document must
be updated. The former SaaS-glass system is preserved only in
`social-examples/legacy-saas-glass/`; it is not an active reference.

---

## 1. The visual register

Enablement's LinkedIn register is **editorial, information-dense infographic**.
It combines the scanability of a well-designed worksheet with the clarity of a
modern magazine explainer.

Three words must apply to every output:

- **Structured.** The reader sees the information architecture immediately.
- **Dense.** The canvas rewards a second and third look without becoming a wall
  of text.
- **Visual.** Diagrams, tables, screenshots, ladders, matrices, flows, and
  annotated examples carry the argument.

The design is visually restrained and informationally rich. Minimal decoration
does not mean minimal copy. Negative space separates sections; it is not the
main event.

### What this replaces

The prior SaaS-glass direction is retired. Do not default to:

- Glassmorphism, refractive borders, or frosted cards.
- Linear or Stripe dashboard styling.
- Blue-to-white product gradients and floating SaaS cards.
- Large empty canvases justified as premium minimalism.
- Soft-depth effects as the primary visual idea.

### What this is not

- Not an austere one-idea concept poster. That remains a separate specialized
  format for the `minimalist-visual` workflow.
- Not PowerPoint slideware. A panel needs information architecture, not a title
  and paragraph dropped into a rectangle.
- Not playful illustration. Avoid mascots, stickers, emoji decoration, and
  hand-drawn scenes.
- Not generic corporate consulting diagrams. Every section should feel specific
  to the content.

---

## 2. Tokens

### 2.1 Color

#### Core brand colors

| Token | Hex | Use |
|---|---|---|
| `--color-canvas` | `#FFFFFF` | Default editorial canvas |
| `--color-canvas-alt` | `#F7F8FA` | Optional off-white canvas |
| `--color-surface` | `#FFFFFF` | Untinted panels and cells |
| `--color-ink` | `#0F1217` | Headlines, body, strong outlines |
| `--color-body` | `#343A45` | Supporting copy |
| `--color-muted` | `#707784` | Captions and metadata |
| `--color-rule` | `#183A67` | Panel outlines, table rules, connectors |
| `--color-rule-light` | `#C9D2DF` | Secondary dividers |
| `--color-accent` | `#E11E48` | One primary highlight or headline capsule |
| `--color-accent-dark` | `#BE123C` | Small high-contrast accent states |

#### Editorial tints

Use two to four tints when categories require color coding. Tints organize; they
do not decorate.

| Token | Hex |
|---|---|
| `--color-tint-blue` | `#DCEBFF` |
| `--color-tint-blue-strong` | `#AFCBFA` |
| `--color-tint-pink` | `#F8D6DF` |
| `--color-tint-purple` | `#E6D5FA` |
| `--color-tint-yellow` | `#FFF2B8` |
| `--color-tint-cyan` | `#D8F4F7` |
| `--color-tint-green` | `#DDF5D8` |
| `--color-tint-peach` | `#FBE0D0` |

Semantic colors remain available for true states, not general decoration:

| Token | Hex | Use |
|---|---|---|
| `--color-positive` | `#2E8F54` | Improvement or success |
| `--color-warning` | `#C77B0E` | Caution |
| `--color-critical` | `#B43A2A` | Failure or risk |

**Color discipline:** one dominant accent plus a small supporting tint system.
Do not turn every panel into a different bright color. Use color consistently
across matching categories, columns, and steps.

### 2.2 Typography

| Use | Family | Guidance |
|---|---|---|
| Display headline | Sofia Sans Bold | 64-104px on 1080px-wide canvases |
| Panel heading | Sofia Sans Bold or Semibold | 25-40px |
| Body | Sofia Sans Regular | 18-28px depending on density |
| Labels, numerics, step IDs | JetBrains Mono | 14-22px |

- Use Sofia Sans and JetBrains Mono only.
- Use sentence case by default.
- Use one Sofia Sans Bold Italic phrase per headline at most.
- Use large weight or a flat color capsule to create the headline interruption.
- Keep paragraph line lengths short. Convert long prose into bullets, labels,
  rows, or annotated fragments.
- Use tabular numerics for aligned comparisons.

### 2.3 Spacing

Scale: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96`.

- Outer canvas margin: 40-56px.
- Major section gap: 20-32px.
- Standard panel padding: 20-28px.
- Dense table cell padding: 12-18px.
- Never reduce body text below a readable mobile size to preserve a fixed ratio.
  Extend the canvas instead.

### 2.4 Radius and shadow

- Primary panels: 6-10px radius.
- Tables and comparison matrices may use square corners.
- Pills and labels: pill radius.
- Default shadow: none.
- Optional overlay shadow: `0 3px 10px rgba(15, 18, 23, 0.12)` for a lifted
  label, headline capsule, screenshot, or deliberately stacked element.

Shadows establish hierarchy on selected objects. They do not appear on every
panel.

---

## 3. Composition primitives

### 3.1 Editorial canvas

Use a flat white or off-white canvas. A faint 1px layout grid at no more than 5%
opacity is allowed when it supports alignment, as in a working document. Do not
use ambient product gradients, glowing orbs, or decorative SaaS textures.

### 3.2 Editorial panel

The default modular container:

- Flat white or editorial-tint fill.
- 1.5-2px `--color-rule` outline, or 1px `--color-rule-light` for secondary cells.
- Optional tinted header strip separated by a horizontal rule.
- 6-10px radius, or square corners for a table.
- 20-28px padding, reduced to 12-18px only for dense table cells.
- No refractive edge, inset shine, blur, or ambient glass shadow.

Panels can contain copy when the copy is structured. A hierarchy of heading,
bullets, labels, and an embedded diagram is valid. A paragraph pasted into a box
without hierarchy is not.

### 3.3 Table and comparison matrix

Use for repeated fields across two or more categories.

- Lock column widths and row logic before styling.
- Use tinted column headers or section bands.
- Repeat the same field order so readers compare horizontally.
- Use bullets, mini-bars, diagrams, and labels inside cells.
- Use strong outer rules and lighter internal dividers.

### 3.4 Diagram block

Allowed diagram forms:

- Ladder or maturity scale.
- Venn diagram.
- Funnel or stack.
- Circular ecosystem.
- Linear process or pipeline.
- Before/after system map.
- Annotated screenshot or post.
- Mini bar, score, or progression chart.

Use the simplest diagram that makes the information easier to understand.

### 3.5 Highlight capsule

A flat or lightly shadowed capsule interrupts the headline or marks one decisive
phrase. Use Enablement Red for the primary brand moment. Pastel capsules may mark
category labels. Do not use more than one red capsule per canvas.

### 3.6 Step ID and section band

- Step IDs use JetBrains Mono and a compact light panel or label.
- Section bands use a tint related to that category.
- Keep numbering large enough to create scan order.
- Use distinct section names. Repeated vague verbs are a defect.

### 3.7 Evidence block

Screenshots, social posts, mini case studies, and real examples can occupy a full
column or major panel. Annotate them with rules, color blocks, or callouts. Crop
tightly and keep the source legible.

### 3.8 Connector

- 1.5-2px `--color-rule` stroke.
- One arrowhead and one clear direction.
- Solid for the main reading path.
- Dashed only for optional or automated branches.

### 3.9 Wordmark and attribution

- Enablement wordmark bottom-right.
- Author photo and name bottom-left when relevant.
- Keep attribution small and outside the core information grid.

---

## 4. Visual archetypes

### 4.1 Framework grid

Two to six modular panels, each explaining one pillar, step, or part of a system.
Panels can mix diagrams, bullets, and mini examples. Reference:
`04_founder-content-engine.png` and `06_four-pillar-content-framework.png`.

### 4.2 Comparison matrix

Two to four columns with repeated row fields. Use for roles, approaches, tools,
or maturity levels. Reference: `01_top-1-percent-communicator.png` and
`03_viral-infographics-comparison.png`.

### 4.3 Annotated source plus breakdown

Place a screenshot, post, or source artifact on one side and the framework that
explains it on the other. Reference: `05_inbound-leads-post-system.png`.

### 4.4 Tiered ladder

Stack levels vertically to show accessibility, maturity, trust, or complexity.
Each level can contain example thumbnails and short labels. Reference:
`02_content-accessibility-ladder.png`.

### 4.5 System map

Use ladders, funnels, loops, or pipeline diagrams to show movement through a
system. Keep the shapes flat, outlined, and editorial. Motion versions reveal
the same system step by step rather than adding decorative animation.

### 4.6 NEW

Use a new composition when none of the above fits. Document the shipped result
in the reference library before promoting it to a repeated archetype.

---

## 5. Voice-to-visual routing

| Post structure | Default treatment |
|---|---|
| Framework or methodology | Framework grid |
| Two to four repeated categories | Comparison matrix |
| Teardown of a real post or artifact | Annotated source plus breakdown |
| Beginner to advanced or maturity progression | Tiered ladder |
| Multi-stage operating system | System map |
| One specific result | Single-image stat or compact evidence block |
| Contrarian take | Comparison matrix or compact split |
| Personal story | Photo plus annotated timeline or pull quote |

The test is structural: choose the archetype that matches the argument, then
apply the editorial visual language.

---

## 6. Format specifications

### 6.1 Vertical infographic

- Width: 1080px.
- Default height: 1350px.
- Extend to 1620, 1920, or 2160px when the content requires it.
- Export: PNG, 24-bit, sRGB.

Anatomy:

1. Headline block with one highlighted phrase at most.
2. Optional subhead or proof line.
3. Main structured grid, matrix, source breakdown, or system map.
4. Small author attribution and Enablement wordmark.

### 6.2 Carousel

- 1080 x 1350px per slide.
- Six to nine slides.
- Use only when revealing the framework sequentially improves understanding.
- Each slide follows the same editorial panel and type rules.

### 6.3 Animated infographic

- 1080 x 1350px.
- 12-15fps, 4-6 seconds, maximum 8MB.
- Reveal rows, levels, connectors, or annotations in reading order.
- Use ease-out only. No bounce, spin, glow sweeps, parallax, or zoom transitions.
- The final frame must work as a static infographic.

### 6.4 Single image

- 1080 x 1080px or 1080 x 1350px.
- Use a compact matrix, annotated example, stat, or one structured comparison.
- Do not stretch an infographic across an empty canvas.

### 6.5 Banner

- 1584 x 396px.
- Rebuild later using flat editorial panels, strong typography, and one brand
  highlight. Do not reuse the retired SaaS-glass treatment.

---

## 7. Do not list

- No glassmorphism, blur, refractive borders, or frosted surfaces.
- No SaaS dashboard aesthetic, floating product cards, or ambient blue gradients.
- No decorative glow, gradient-on-text, or shadow on body copy.
- No giant areas of empty space when useful information belongs there.
- No paragraph walls. Structure copy as bullets, rows, captions, and labels.
- No tiny copy used to force a 4:5 canvas.
- No inconsistent category colors.
- No decorative emojis, clipart, stock photography, or hand-drawn scenes.
- No serif fonts unless Lanny explicitly approves a new brand font.
- No repeated section labels that obscure the framework.
- No logo-only panels. A logo needs context.
- No invented metrics or fabricated receipts.

---

## 8. Workflow

```text
LinkedIn post or source insight
        ↓
Choose the argument structure and archetype
        ↓
Write the canonical brief
        ↓
Pin one or two references from social-examples/inspiration/
        ↓
Build in the Enablement LinkedIn Figma file
        ↓
Review hierarchy, legibility, density, and factual accuracy
        ↓
Export and deliver
```

Every brief must specify the exact panel structure, content hierarchy, diagram
type, color-coding logic, and reference image. “Make an infographic” is not an
executable brief.

---

## Changelog

- `2026-08-06` - **v2.0 direction replacement.** Replaced the SaaS-glass visual
  system with the editorial, information-dense infographic register. Promoted
  framework grids, comparison matrices, annotated breakdowns, tiered ladders,
  and flat system maps. Added six canonical references supplied by Lanny and
  moved the former glassmorphic references to `legacy-saas-glass/`.
- `2026-05-23` - v1.0 glassmorphic cheat-sheet direction, now retired.
