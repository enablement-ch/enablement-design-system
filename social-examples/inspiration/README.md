# Inspiration / Reference Library

> Reference graphics Enablement has shipped that represent the **post-website-redesign direction**.
> What Lanny liked, what could be improved, and the design rules each one teaches us.
>
> **These are not external competitor references.** They are Enablement's own work, used as the calibration set for `DESIGN_SOCIAL.md`.

**Files are local in this folder.** Listed below in the same order as the annotations:

- `01_allbound-flow-2026.gif` (4.6MB)
- `02_gtm-orchestration-framework.png` (663KB)
- `03_cold-email-cheatsheet.jpg` (160KB)
- `04_claude-code-for-gtm-2026.gif` (877KB)
- `05_clay-vs-claude-code.gif` (160KB)

Drive backup: [Inspo & training for AI](https://drive.google.com/drive/folders/1byZdSCnIpUDbUXIMjHfJFMggK4Ja5qMK)

---

## Reference 01 - Allbound Flow 2026 (animated GIF)

**File:** [`01_allbound-flow-2026.gif`](01_allbound-flow-2026.gif) (4.6MB, animated, depicts a self-reinforcing flywheel motion)
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

**File:** [`02_gtm-orchestration-framework.png`](02_gtm-orchestration-framework.png) (663KB, vertical single image)
**Structure:** 8 steps from Signal → Track → Validate → Enrich → Choose Play → Personalise → Message → Feedback
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

**File:** [`03_cold-email-cheatsheet.jpg`](03_cold-email-cheatsheet.jpg) (160KB, vertical single image)
**Structure:** 7 steps from First Email Performance → Relevance Framework → Strategic Follow-up → Weekly Send Patterns → Deliverability Hygiene → The Gap Where Replies Live → Benchmark Your Outbound
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

## Reference 04 - Claude Code For GTM 2026 (animated GIF, framework diagram)

**File:** [`04_claude-code-for-gtm-2026.gif`](04_claude-code-for-gtm-2026.gif) (877KB, animated minimally - the underlying composition is a static framework diagram)
**Structure:** central radial Claude Code mark surrounded by 8 numbered bentos (Signal Layer, Account Intelligence, Contact + Enrichment, Scoring Logic, Copy Generation, QA + Safety Filter, Feedback Loop x2). Each bento is a self-contained module of the GTM motion.
**Archetype:** Framework Diagram (DESIGN_SOCIAL.md §4.6) - though it also encodes a feedback-loop character via the two "Feedback Loop" bentos at the bottom.
**Direction this teaches us:** how Enablement does centered framework diagrams. A single iconic mark anchors the composition; the surrounding bentos are the components of the named model.

### What works (draft - Lanny to validate)
- **Central anchor primitive.** The radial Claude Code mark is large, deeply glassmorphic, and read first. Provides a focal point that the 8 surrounding bentos relate to.
- **Numbered eyebrow pills on each bento.** `01 / Signal Layer`, `02 / Account Intelligence`, etc. - mono caps, clear hierarchy, supports scan-reading the framework left-to-right top-to-bottom.
- **Per-bento content density.** Every bento shows real signals (tool logos, criteria lists, code snippets, mockup tables), not just text. Show-don't-tell executed at the framework-component level.
- **Color discipline.** Crimson eyebrow pills as the only red accent; tool brand colors used contextually inside bentos.

### What could be improved
- **Two bentos both named "Feedback Loop".** Same issue as the GTM Orchestration Framework reference (steps 2-4 all named "Track"). Each component needs a distinct, accurate label.
- **Per-bento padding varies.** Some bentos are tightly packed (Scoring Logic, QA Filter) while others have more breathing room. Tighten consistency.
- **Connector lines could be more deliberate.** The lines from central mark to outer bentos exist but are quiet; consider whether they should carry more weight to reinforce the "everything orbits the center" read.

### Design rules this teaches
- **Framework Diagram archetype.** Center a single iconic primitive (logo, symbol, mark). Surround with N labeled component bentos. The center IS the framework's name; the bentos are its components.
- **Numbered eyebrow pills enable scan-reading.** When a framework has ordered components, numbered eyebrows (`01 / X`, `02 / Y`) help the reader trace the sequence even when the layout is non-linear.
- **Bentos can contain code/text/mockups simultaneously.** Mixing a code-snippet panel inside one bento and a logo-grid inside another is acceptable - the consistent bento border + padding holds it together.
- **Distinct labels per component.** Repeated labels (two "Feedback Loop" bentos) read as a mistake even when conceptually correct.

---

## Reference 05 - Clay vs. Claude Code (animated GIF, comparison split)

**File:** [`05_clay-vs-claude-code.gif`](05_clay-vs-claude-code.gif) (160KB, animated minimally - underlying composition is a static 2-column comparison)
**Structure:** 2 columns (Clay / Claude Code) x 9 rows (Core purpose, Best for, Cost model, Integrations, Volume ceiling, AI personalisation, Data scraping, Challenges, Feels like). Bottom: 2 mini case-study panels showing real $ outcomes.
**Archetype:** Comparison Split (DESIGN_SOCIAL.md §4.4) - **expands the archetype's valid use beyond binary contrarian framing.** Both columns are valid choices; the framing is "when to use each", not "wrong vs right".
**Direction this teaches us:** how Enablement does neutral comparison content. Tools, tactics, or approaches where the answer is "use both, here's the heuristic."

### What works (draft - Lanny to validate)
- **Row labels with icons in a leftmost spine column.** Each row factor (Core purpose, Best for, etc.) has a small icon to its left. Helps row-wise scanning and breaks the table monotony.
- **Per-column brand-tinted headers.** Clay's column uses Clay's blue mark; Claude Code's column uses Enablement's crimson. The brand-tinting reinforces "this is the X column" without needing repeated labels.
- **Show-don't-tell inside cells.** Integrations row shows actual provider logos. Volume ceiling row has tiny bars showing 50k row limit. Cost model row has a mini chart. AI personalisation row has tool-flow snippets. Cells visualize wherever possible.
- **Case-study panels at the bottom act as receipts.** Two real before/after scenarios with $ outcomes ($125/mo → $15/mo, 0 meetings → winning). Anchors the abstract comparison in concrete results.
- **Lab → Factory framing pill** in the top-right ("Lab → Factory"). Tiny eyebrow phrase that names the heuristic; doesn't repeat the table content.

### What could be improved
- **High row count (9) approaches table territory.** At 9 rows the visual starts to feel more like a §4.5 Comparison Table than a §4.4 Comparison Split. Consider whether deeper comparisons should be classified as §4.5 with 2-column variant noted, or whether §4.4 expands to cover both depths.
- **Critical/Positive semantic colors are absent.** Per the current §4.4 spec, the wrong side should use Critical color and the right side Positive. This visual uses neutral brand-tinting instead - which is correct for "use both" framing but means the spec needs to broaden.
- **Case studies could be larger.** They carry the strongest persuasion weight on the canvas but get the smallest panels. Consider promoting them to full-width below the table.

### Design rules this teaches
- **Comparison Split has two variants.** Contrarian (wrong/right with Critical/Positive colors) AND Neutral (both valid, brand-tinted per column, "use both" framing). Update §4.4 accordingly.
- **Row labels deserve icons.** When a comparison table has more than 5 rows, a leftmost spine column with row-label icons cuts cognitive load substantially.
- **Brand-tint per column when subjects have their own brands.** Don't force Enablement Red onto both sides of a comparison when each subject has its own native accent. Reserve Enablement Red for Enablement's column (or the recommended option).
- **Receipts beat assertions.** Mini case-study panels with real $ outcomes at the bottom of a comparison validate the heuristic the comparison teaches. Always pair structural comparison with at least one real-world receipt.

---

## Synthesis - the rules that show up across all five

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
