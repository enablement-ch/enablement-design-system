# Social Examples - Reference Library

> **For canonical design references, see [`inspiration/README.md`](inspiration/README.md).** Those are the post-redesign references that drive `DESIGN_SOCIAL.md` v1.0.
>
> The banner examples in this folder predate the website redesign. They are retained as historical reference only and are scheduled to be rebuilt.

---

## LinkedIn Personal Banner (1584x396) - PRE-REDESIGN

**Status:** retain as historical reference. Do not use as canonical visual direction. Scheduled for rebuild to match `DESIGN_SOCIAL.md` v1.0 (gradient background, grid texture, glassmorphic pillar pills, post-redesign register).

Four production variants currently live on Lanny's LinkedIn profile. Same composition, different background + photo treatments.

### `banner-01_black-lanny.png`
Dark canvas (near-black with subtle red gradient bleed) + Lanny photo right + "GTM Agents that create Sales Pipeline" headline + pillar pills ("Content", "AI Always", "Outreach") + trust strip with 5 partner logos.

### `banner-02_black-neutral.png`
Same dark canvas, no photo. Pills read "Content / Outbound / AI RevOps."

### `banner-03_red-neutral.png`
Saturated Enablement Red canvas, no photo. White on red.

### `banner-04_red-lanny.png`
Red canvas + Lanny photo. Most aggressive of the four.

### Why these are pre-redesign

- Predate the website's current `--color-canvas` `#F2F4F8` light slate canvas.
- Use saturated red full-bleed, which conflicts with the new "subtle gradient + grid texture" background language.
- No glassmorphic surface treatment on pills (they're flat-fill).
- The pillar names ("Content / AI Always / Outreach" vs "Content / Outbound / AI RevOps") are inconsistent across the four variants, suggesting the positioning was still being iterated on.
- Lanny's stated assessment: "okay, but not completely right. They should be redesigned to reflect the website redesign."

### Rebuild brief (parked)

A v2 banner set should apply:

- Gradient background (`--color-canvas` top-left → `--color-flow` 8% bottom-right)
- Grid texture overlay (~24px dot grid, `--color-border` at 20% opacity)
- Glassmorphic pillar pills (subtle gradient fill, 1px border, soft shadow)
- Sofia Sans display headline (test: lock the pillar names first, then write the headline)
- Bottom trust strip (existing pattern works)
- Optional photo treatment (banner-01 / banner-04 style, refined for the new background)

The designer should propose the v2 banner concept after the first cheat-sheet trial validates the new visual register.

---

## Canonical references

For the post-redesign visual direction, see:

- [`inspiration/README.md`](inspiration/README.md) - annotated production cheat sheets + animated flywheel GIF, with what works / what could be improved / what design rules each teaches.
- [`../DESIGN_SOCIAL.md`](../DESIGN_SOCIAL.md) - the design system grounded in those references.

---

## Adding new examples

When you add a new image to this folder:

1. Name it: `<format>-<NN>_<descriptor>.<ext>` (e.g. `cheatsheet-01_clay-orchestration.png`)
2. Add an entry to either this README (if it's a banner or pre-redesign asset) or `inspiration/README.md` (if it's a post-redesign reference that should drive the design system)
3. Annotate: what it is, what works, what could be improved, what rules it teaches
4. Note any deviations from `DESIGN_SOCIAL.md` and whether the deviation should be folded into the spec
