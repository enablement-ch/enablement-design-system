# Inspiration / Reference Library

> Reference graphics Enablement has shipped that represent the **post-website-redesign direction**.
> What Lanny liked, what could be improved, and the design rules each one teaches us.
>
> **These are not external competitor references.** They are Enablement's own work, used as the calibration set for `DESIGN_SOCIAL.md`.

Source: [Drive folder "Inspo & training for AI"](https://drive.google.com/drive/folders/1byZdSCnIpUDbUXIMjHfJFMggK4Ja5qMK)

To copy locally (recommended for version control):
```bash
# After downloading from Drive, save into this folder:
# inspiration/01_allbound-flow-2026.gif
# inspiration/02_gtm-orchestration-framework.png
# inspiration/03_cold-email-cheatsheet.jpg
```

---

## Reference 01 - Allbound Flow 2026 (animated GIF)

**Format:** Animated GIF, ~4.6MB, depicts a self-reinforcing flywheel motion
**[Drive link](https://drive.google.com/file/d/1aoTakaTLfaL8vCnbKRkqpYvDkk1Rw8pc/view)**
**Direction this teaches us:** how Enablement does animated process / flywheel content.

### What works (per Lanny)
- **Colorway:** near-white shifting to a bluish hue. Subtle, calm, premium.
- **Background structure:** a grid pattern adds texture so the graphic doesn't read flat.
- **Three-dimensionality:** drop shadows on cards and the central circle give depth.
- **Composition:** the central circle has its own 3D quality, supporting the flywheel motion read.

### What could be improved
- **Push further into glassmorphism.** The current 3D works but staying closer to glassmorphic-frosted surfaces would land more premium.
- **Density per step.** Each step currently shows a logo. Add a small text box that explains *which Engage/Capture loop step it is* plus context. Information-rich beats logo-only.
- **Show, don't tell.** Logos alone are visual placeholders. Whatever the logo represents should also be illustrated in context (mini workflow, table fragment, mockup).

### Design rules this teaches
- Background = subtle gradient (near-white → bluish) with a faint grid texture overlay. Never flat-color.
- 3D depth is achieved via drop shadows on cards, not via bevels or gradients on the cards themselves.
- Animated process visuals = central circular composition with orbital nodes, motion arrows on the ring.
- Logos in graphics are anchors, not standalone information. Always pair with explanatory text or a mini-visual.

---

## Reference 02 - GTM Orchestration Framework (cheat sheet)

**Format:** Vertical single-image cheat sheet, PNG, 663KB
**Structure:** 8 steps from Signal → Track → Validate → Enrich → Choose Play → Personalise → Message → Feedback
**[Drive link](https://drive.google.com/file/d/1VqkVnyStT3TPsIZMYLCt3uqWoM2y81CK/view)**
**Direction this teaches us:** the cheat-sheet format, with bento-style sections.

### What works (per Lanny)
- **Colorway:** subtle blue hue gradient flowing from top-left across the canvas.
- **Bento boxes:** well-executed glassmorphic effect on each section box.
- **Information richness inside bentos:** not just text. Bentos contain logos, mini workflow snippets, email mockups - real visualisations of the concept.
- **Color discipline:** balanced across white + greyish/milky + crimson red (`#E11E48`), with tool-brand accent colors used contextually for specific tool logos.

### What could be improved
- **Cramped padding.** Steps 2, 3, and 8 have near-zero internal padding. Looks unbalanced and busy.
- **Step naming.** Steps 2, 3, and 4 are all named "Track" - doesn't communicate. Each step needs a distinct, accurate verb (e.g. Track → Validate → Enrich).
- **Step 8 table.** Padding inside the table is bad, especially at the bottom. Feels cramped.
- **Show-don't-tell failure on Step 6.** Step 6 ("Personalize") just has a logo. Logo without context wastes the slot. Should illustrate the personalisation moment (e.g. an enrichment input + a generated first line).
- **Forced 4-5 grid.** The cheat sheet tried to fit into a 4-5 layout. Going longer for density is fine when content demands it. Don't force a fixed grid when content suffers.

### Design rules this teaches
- **Bento tile (the main primitive):** glassmorphic surface, subtle border, rounded corners, drop shadow. Generous internal padding (minimum 24px all sides, more is better).
- **Each bento must contain a *visualisation*, not just text.** A mini email mockup, a workflow snippet, a 2x2 mini table, a logo + label pair, an annotated screenshot.
- **Sections must be distinctly named.** No repeated section verbs unless deliberately rhetorical.
- **Tool brand colors used contextually.** When a tool logo appears, its native brand accent is allowed alongside Enablement Red. Outside of tool-specific cells, Enablement Red is the only red accent.
- **Length is flexible.** Cheat sheets can be longer than 4:5 when density demands it. Going to 1080x1620 or even taller for dense content is acceptable.
- **No section is allowed to be just a logo.** If a logo is the only content, redesign that section to show how that tool gets used (mini mockup, output sample, workflow step).

---

## Reference 03 - Cold Email Cheatsheet (cheat sheet)

**Format:** Vertical single-image cheat sheet, JPG, 160KB
**Structure:** 7 steps from First Email Performance → Relevance Framework → Strategic Follow-up → Weekly Send Patterns → Deliverability Hygiene → The Gap Where Replies Live → Benchmark Your Outbound
**[Drive link](https://drive.google.com/file/d/1g5BasLk5E50OSwizQg45qkgjhMwhyTcY/view)**
**Direction this teaches us:** the most polished cheat-sheet execution to date. The premium feel target.

### What works (per Lanny)
- **Premium feel throughout.** Subtle gradient shifts in title boxes and pills (light grey → darker grey on Step 6, etc.) sustain depth visually.
- **Subtle borders on every bento.** Reinforces the glassmorphic effect cleanly.
- **Strong show-don't-tell execution.** Most sections illustrate rather than describe. Mini mockups, tactic chips, comparison panels. Information rendered visually.
- **Balanced spacing.** Paddings are right. Bentos breathe.

### What could be improved
- **Serif subtitle.** Off-brand. Sofia Sans only - no serif typefaces anywhere.
- **Not enough density.** Could pack more in. The visualisations are great, but the cheat sheet leaves white space that information could fill.
- **Fix: add more bento boxes, not more text.** Make existing bentos slightly smaller or extend the canvas vertically, and add new visualised cells.

### Design rules this teaches
- **Gradient shifts within elements.** Title boxes, pills, and chips should subtly gradient-shift (light-grey → mid-grey, or white → light-grey). Avoids flat fills. Sustains the premium read.
- **Borders are subtle but always present.** Every bento has a 1px border in `--color-border` or lighter. The border is part of what makes it look glassmorphic.
- **Density per element.** Cells should be packed with information, but each cell should still breathe (good padding). Pack the canvas with more cells, not denser text inside fewer cells.
- **Show-don't-tell is non-negotiable.** Every step / section should have a visualisation. If a section is text-only, it's a draft, not a final.
- **Sans-serif only.** Sofia Sans for headings/body, JetBrains Mono for eyebrows/captions/numerics. Never serif.

---

## Synthesis - the rules that show up across all three

| Rule | Where it appears |
|---|---|
| **Subtle gradient background, never flat color** | All three (allbound: white→blue, GTM: blue from top-left, email: gradient through title boxes) |
| **Grid texture overlay for depth** | Allbound (explicit), implied in cheat-sheets |
| **Glassmorphic bento tiles with subtle borders** | GTM (explicit), Email (subtle execution), Allbound (target direction) |
| **Drop shadows for 3D, not bevels** | Allbound (explicit) |
| **Show-don't-tell: visualise, don't just text** | Email (excellent), GTM (mostly, fails on Step 6), Allbound (improve direction) |
| **Color palette: white + milky-grey + crimson + tool accents** | GTM, Email |
| **Sans-serif only (Sofia Sans + JetBrains Mono)** | Lanny called this out explicitly |
| **Density per cell, more cells > more text per cell** | Email (target), GTM (cramped when over-tight) |
| **Distinct, accurate section names** | GTM failed this on Steps 2-4, Email succeeds throughout |
| **Length is content-driven, not grid-forced** | GTM failed by forcing 4-5; Email needs to extend for density |

These rules drive `DESIGN_SOCIAL.md` v1.0.

---

## v2 reference upload (later)

When ready for v2, add more references covering:

- 2-3 more cheat sheets (different topics, to validate the rules above generalise)
- 1-2 single-image posts (1:1 stat callouts or pull quotes)
- 1-2 carousels (if Enablement does any), to clarify whether carousels stay in the format mix
- 1-2 examples of "what NOT to do" (so the do-not list is grounded in concrete avoidances)

Drop them in this folder with the same annotation structure as above (what works / what could be improved / what rules this teaches).
