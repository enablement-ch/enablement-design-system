# Design Brief Template

> The contract between Lanny (or Claude) and the designer.
> Every brief sent to the designer must contain every section below.
> If a section is empty, the brief is not ready to ship.

**How to use this template:**
- Copy this file into a new ClickUp task
- Replace every `[PLACEHOLDER]` with real content
- Delete this instruction block before sending
- Designer should not have to ask any clarifying questions

---

## 1. Post context

**Source post (full text):**
```
[PASTE THE FULL LINKEDIN POST TEXT HERE - exactly as it will be published]
```

**Post type:** [Framework Breakdown / Specific Result / Contrarian Take / Tool-or-Resource / Personal Story / High-Velocity / Process Visual]

**Audience:** [VP of Sales / Founder / RevOps Leader / etc. - the specific reader this post is written for]

**Why this post needs a visual:** [One sentence on what the visual adds. If you can't write this, the post might not need a visual.]

---

## 2. Format

**Choose one:**
- [ ] Carousel (multi-slide, 1080x1350)
- [ ] Vertical infographic (single image, 1080x1350)
- [ ] Animated GIF (1080x1350)
- [ ] Single image post (1080x1080)
- [ ] LinkedIn banner (1584x396)

**Slide count (carousels only):** [6-10]

**Primary archetype (from `DESIGN_SOCIAL.md` Section 4):**
- [ ] Framework grid
- [ ] Comparison matrix
- [ ] Annotated source plus breakdown
- [ ] Tiered ladder
- [ ] System map
- [ ] Compact stat or comparison
- [ ] Other: [describe]

**Reference image(s)** in `~/enablement-design-system/social-examples/`:
- [filename] - [why it's relevant]

**Canonical shell:** `templates/linkedin-infographic-template.svg` - required
for every infographic unless Lanny explicitly approves an exception.

---

## 3. Exact copy

Every word that appears on the graphic, in order. Designer copies these verbatim. No paraphrasing.

### Cover slide / headline area
- **Eyebrow** (optional, Sofia Sans Semibold caps with tracking): `[EYEBROW TEXT or "none"]`
- **Headline** (Sofia Sans Bold, max 12 words): `How to [HEADLINE TEXT]`
- **Highlighted word** (DM Serif Display Italic): `[EXACTLY ONE KEYWORD - a two-word term requires explicit approval]`
- **Headline validation:** [confirm the full headline starts with `How to` and
  the highlighted word appears inside it exactly once]
- **Subhead** (Sofia Sans Regular, max 20 words): `[SUBHEAD TEXT]`

### Content (carousels only - one block per slide)

**Slide 02:**
- Section heading: `[TEXT]`
- Body (max 50 words, structured as bullets or labels): `[TEXT]`
- Visual element: [editorial panel / matrix / diagram / annotated source / etc.]

**Slide 03:**
- Section heading: `[TEXT]`
- Body: `[TEXT]`
- Visual element: [...]

[Repeat per slide]

### Data / stats (if applicable)

| Label | Value |
|---|---|
| [e.g. "Old conversion"] | [e.g. "5%"] |
| [e.g. "New conversion"] | [e.g. "30%"] |

### Anchor line (vertical infographic only)

Bottom italic line that lands the insight (Sofia Sans Regular italic, max 12 words):
`[ANCHOR LINE TEXT]`

### CTA slide / closing (carousels only)

- Closing headline: `[TEXT]`
- Action line: `[TEXT - e.g. "Book a GTM session at enablement.ch"]`

---

## 4. Visual specs

**Canvas treatment:** Canonical SVG shell using `#F5FAFF` to `#E4F2FF` pale
blue paper tones beneath a white surface and faint document grid.

**Headline capsule:** Gradient from `#FF3762` to `#E11E48`, white highlighted
word, 10px radius, thin `#17365F` and white edge, restrained shadow.

**Text color:** `#0F1217` for every normal text role. White only for deliberately
reversed text. Do not introduce a second body-copy gray.

**Blue information colors in use:** [list from `#D1E5FF`, `#B5D0FF`,
`#86B0FF`, `#4F7FEA`, `#315FAD`, `#17365F`, and state what each encodes]

**Panel treatment:** Flat white or blue-family fill, 1.5-2px `#17365F` outline, optional tinted
header band. No glassmorphism, refractive borders, blur, or ambient gradient.

**Additional red use:** [normally none; if required, choose `#BE123C` and name
the exact semantic purpose]

**Photo of Lanny?** Yes (use the banner-01 crop reference) / No

**Wordmark placement:** Bottom-right (default) - confirm

---

## 5. File deliverables

- **Format:** [PNG 24-bit sRGB / GIF]
- **Filename pattern:** `<post-slug>_<format>_<NN>.png`
- **Post slug:** `[kebab-case-slug, max 6 words]`
- **Number of files expected:** [1 for infographic, 6-10 for carousel, 1 for GIF]

**Delivery:** Attach to this ClickUp task. Reply on WhatsApp when ready.

**Deadline:** [DATE - default: 48 hours from brief delivery]

---

## 6. Iteration scope

Round-1 deliverable is full-quality work. After round 1:

- **Free iterations:** 1 round of revisions covering copy fixes, color tweaks, layout adjustments within the same template
- **Paid iterations:** Full layout changes, switching to a different primitive, swapping format (carousel → infographic). Quoted separately.

---

## 7. Reference materials the designer must read

Before starting, the designer should have read:

1. `~/enablement-design-system/DESIGN_SOCIAL.md` - the full social design system
2. `~/enablement-design-system/templates/linkedin-infographic-template.svg` -
   the mandatory infographic shell and headline treatment
3. `~/enablement-design-system/social-examples/README.md` - annotated examples
4. The specific reference image(s) named in Section 2 above

If the designer has not been onboarded yet, also share:

5. `~/enablement-design-system/site-plan.md` - the website composition rules
6. `~/enablement-design-system/templates/figma-file-spec.md` - the Figma file structure they should build

---

## 8. Sign-off

- **Brief written by:** [Lanny / Claude]
- **Brief reviewed by:** [Lanny - required if Claude wrote it]
- **Date:** [YYYY-MM-DD]
- **Trial run:** Yes / No (if yes, treat scope conservatively - one format only)
