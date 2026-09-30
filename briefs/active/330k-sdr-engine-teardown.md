# Design Brief - $330K SDR Engine Teardown

## 1. Post context

**Source post (full text):**
```
A client paid $30,000 a year for ZoomInfo, Apollo, and HubSpot to keep 5 SDRs busy.

Last quarter, all of it produced exactly ONE closed deal.

We rebuilt the whole motion for under $10,000 in tools. Here's how:

They had the classic "predictable revenue" setup:

→ 5 SDRs supporting 3 AEs
→ ZoomInfo for data
→ Apollo for sequences
→ HubSpot for CRM

All the "right" tools. All the wrong results.

The SDRs had plenty of "activity" and almost nothing to show for it:

→ Researching prospects with zero buyer-intent signals
→ "Personalized" outreach that wasn't personal at all
→ Playing the numbers game

They booked meetings. The leads weren't qualified at all.

The problem was never effort.

It was the setup. A 2020 sales playbook running in a 2025 world.

So we kept the 3 AEs and rebuilt everything feeding them.

We replaced 4 of the 5 SDRs with 1 GTM Engineer and built automated workflows that find prospects based on live signals:

→ Teamfluence to track social engagement
→ Sales Navigator to spot job changes
→ TheirStack to monitor job openings
→ Clay for champion tracking

Then we put Clay to work:

→ Qualify accounts and leads with AI
→ Find the actual decision-makers
→ Generate messages that reference real, specific pain points

For outreach:

→ Smartlead for email
→ Heyreach for LinkedIn
→ Make to connect the two

We kept ONE SDR, focused only on calling the people who replied on email or LinkedIn and booking qualified meetings for the AEs.

The math:

Old prospecting engine: $300,000 in people + $30,000 in tools = $330,000.
New engine: 1 SDR, 1 GTM Engineer, under $10,000 in tools.

That is a 61% cut. Roughly $200,000 back in their pocket every year, and better meetings landing on the AEs' calendars.

KEY TAKEAWAY:

Shift from a 2 SDR : 1 AE ratio to 1 SDR : 3 AEs.
Shift from tools that support people to tools that replace people.

Comment "SETUP" and I'll send you the full workflow.
```

**Post type:** Specific Result

**Audience:** Founders/CEOs and Heads of Sales at B2B SaaS companies doing $1M-$15M ARR who already have an SDR team and a licensed tool stack (ZoomInfo, Apollo, HubSpot) that is producing activity but not pipeline. This is the "Re-Engineer the Ineffective Motion" buyer: they have already spent the money, so they are not being sold on outbound, they are being sold on competent execution.

**Why this post needs a visual:** The post's argument is a before/after rebuild, but LinkedIn text forces the reader to hold nine tools, two team structures, and three cost figures in their head at once. A side-by-side renders the whole trade in one glance and turns the $330K to $130K math into a receipt instead of a claim.

---

## 2. Format

**Choose one:**
- [ ] Carousel (multi-slide, 1080x1350)
- [x] Vertical infographic (single image, 1080x1350) - **extend canvas to 1080 x 1620.** Per `DESIGN_SOCIAL.md` §6.1, longer is fine and preferred over compressing padding. Do not force the seven rows into 1350px.
- [ ] Animated GIF (1080x1350)
- [ ] Single image post (1080x1080)
- [ ] LinkedIn banner (1584x396)

**Slide count (carousels only):** N/A - vertical infographic does not use this section.

**Primary primitive (from `DESIGN_SOCIAL.md` Section 3):**
- [ ] Card stack
- [x] Split-screen comparison - Comparison Split archetype, Contrarian variant (`DESIGN_SOCIAL.md` §4.4)
- [ ] Branching flowchart
- [ ] Stat callout
- [ ] Pull quote
- [ ] Flywheel (dark-mode exception only)
- [ ] Other

**Reference image(s)** in `~/Claude Code/enablement-brain/Design/social-examples/inspiration/`:
- `05_clay-vs-claude-code.gif` - **primary structural reference.** This is the closest existing execution: two columns, a leftmost spine column of row-label icons, per-column tinted headers, show-don't-tell inside every cell (real logos, mini bars, mini charts), and a receipts panel at the bottom carrying real dollar outcomes. Build the same skeleton. One deliberate difference: that reference is a neutral "use both" comparison, this one is contrarian (old vs new), so semantic Critical/Positive colors appear here - but only where Section 4 below says they do.
- `03_cold-email-cheatsheet.jpg` - **quality bar reference.** Match this one for premium feel: gradient shifts inside title boxes and pills, subtle-but-always-present 1px borders, and padding that lets every cell breathe. Ignore its serif subtitle, that was flagged as off-brand.

---

## 3. Exact copy

Every word that appears on the graphic, in order. Designer copies these verbatim. No paraphrasing.

### Cover slide / headline area

- **Eyebrow** (mono caps): `SDR TEAM TEARDOWN`
- **Headline** (Sofia Sans Bold, max 8 words): `They paid $330,000 for one closed deal.`
- **Italic emphasis word:** `one`
- **Subhead** (Sofia Sans Regular, max 15 words): `We rebuilt the entire prospecting engine for $130,000. Same 3 AEs. Better meetings.`

### Content (carousels only - one block per slide)

N/A - vertical infographic does not use this section. The comparison-row content below replaces it.

### Comparison structure

Three vertical zones, left to right: **spine** (row labels, ~140px), **OLD ENGINE** column, **NEW ENGINE** column. Both content columns are equal width. Seven rows, then a full-width receipts band.

**Column header tiles** (above row 1, one per column):

| | OLD ENGINE | NEW ENGINE |
|---|---|---|
| Eyebrow pill (mono caps) | `2020 PLAYBOOK` | `2026 PLAYBOOK` |
| Heading (Sofia Sans Semibold) | `Tools that support people` | `Tools that replace people` |

---

**Row 01 - spine label:** `TEAM` (icon: people)

- **OLD cell:** Heading `5 SDRs : 3 AEs`. Visualisation: headcount pictogram - a row of 5 SDR figures in `#4A5360` above a row of 3 AE figures in `#4A5360`. Mono caption below: `8 PEOPLE IN THE ENGINE`
- **NEW cell:** Heading `1 SDR + 1 GTM Engineer : 3 AEs`. Visualisation: same pictogram grammar, but 4 of the 5 SDR figures are ghosted to `#C9CFD9` with the surviving 1 in `#4A5360`, plus one distinct GTM Engineer figure in `#4A5360`. The 3 AE figures are unchanged from the OLD cell - that is the point, so keep them visually identical. Mono caption: `5 PEOPLE IN THE ENGINE`

---

**Row 02 - spine label:** `HOW LEADS ARE FOUND` (icon: magnifier)

- **OLD cell:** Heading `Search, scrape, hope`. Visualisation: a cropped faux filter-panel mockup showing a static list build - filter chips reading `Industry: SaaS`, `Headcount: 50-200`, `Title: VP Sales`, and a result counter `12,400 results`. Below it a single mono chip in `#7C8390`: `BUYER-INTENT SIGNALS: 0`
- **NEW cell:** Heading `Wait for the signal, then move`. Visualisation: a vertical live-signal feed, 4 rows, each row = small tool logo + trigger text, with a thin `#4A89C7` connector running down the left of the feed:
  - `teamfluence-icon.svg` - `Prospect engaged with a team post`
  - `sales-navigator-icon.png` - `Champion started a new role`
  - `theirstack-icon.png` - `Company posted 3 AE openings`
  - `clay-icon.png` - `Past buyer resurfaced at a new account`

  Small stat callout pinned bottom-right of this cell (mono, tabular): `97%` over label `OF COMPANIES ARE NOT BUYING RIGHT NOW`

---

**Row 03 - spine label:** `THE STACK` (icon: grid)

**Both cells in this row stay visually neutral.** No Critical or Positive color anywhere in row 03. Tool-native brand colors inside the logo chips are fine per `DESIGN_SOCIAL.md` §2.1.

- **OLD cell:** Heading `Three tools, three silos`. Visualisation: 3 annotated logo chips stacked, each = logo + one-line role label:
  - `zoominfo.svg` - `Static contact database`
  - `apollo.svg` - `Sequencer`
  - `hubspot-icon.svg` - `CRM the data never reaches`
- **NEW cell:** Heading `One connected engine`. Visualisation: 4 annotated logo chips in a 2x2 grid, each = logo + one-line role label:
  - `teamfluence-icon.svg` - `Social engagement signals`
  - `sales-navigator-icon.png` - `Job-change signals`
  - `theirstack-icon.png` - `Hiring signals`
  - `clay-icon.png` - `Enrichment, scoring, copy`

---

**Row 04 - spine label:** `QUALIFICATION` (icon: filter)

- **OLD cell:** Heading `Booked on availability`. Visualisation: a 2-column mini-table, 3 rows:

  | Meeting | Outcome |
  |---|---|
  | Booked | Yes |
  | ICP fit | Unchecked |
  | Reached AE | Unqualified |

- **NEW cell:** Heading `Scored before anyone is contacted`. Visualisation: a mini decision snippet - one input node labelled `Signal fires` with a dashed `#4A89C7` connector into a `clay-icon.png` node labelled `AI scores fit`, branching into 3 outcome pills:
  - `TIER 1 - CALL` in Positive `#2E8F54` tint
  - `TIER 2 - AUTOMATED` in Warning `#C77B0E` tint
  - `NO FIT - FILTERED` in Muted `#7C8390` tint

---

**Row 05 - spine label:** `THE MESSAGE` (icon: envelope)

- **OLD cell:** Heading `Merge tags wearing a personality`. Visualisation: an email mockup in a faux client shell. Subject line `Quick question`. Body, exactly:
  ```
  Hi {{first_name}},

  I came across {{company}} and was really
  impressed by what you're building.
  ```
  A single mono annotation tag pinned to the mockup in `#7C8390`: `NOTHING HERE IS ABOUT THEM`
- **NEW cell:** Heading `Built from what actually happened`. Visualisation: an email mockup in the same shell, with 4 small mono annotation tags in `#7C8390` bracketed to the matching lines:
  ```
  Saw you posted 3 AE roles this month.      [ OBSERVATION ]

  Most teams add AEs before the pipeline      [ PROBLEM ]
  to feed them exists.

  Usually it's a signal problem, not a         [ CAUSE + SOLUTION ]
  headcount problem.

  Want the 4 signals we'd track for you?       [ OFFER-LED CTA ]
  ```

---

**Row 06 - spine label:** `OUTREACH` (icon: send)

- **OLD cell:** Heading `One channel, on repeat`. Visualisation: a linear 3-step workflow snippet with solid `#0F1217` connectors: `apollo.svg` node → node labelled `Email step 1-6` → node labelled `No reply`. Mono caption: `1 CHANNEL`
- **NEW cell:** Heading `Two channels, one system`. Visualisation: a branching workflow snippet. A single `make-icon.png` hub node at the left with two dashed `#4A89C7` connectors (dashed = automated) fanning out to `smartlead-icon.png` labelled `Email` and `heyreach-icon.png` labelled `LinkedIn`. Both converge with a solid `#0F1217` connector (solid = human) into one final node labelled `1 SDR calls the repliers`. Mono caption: `2 CHANNELS, 1 HUMAN TOUCHPOINT`

---

**Row 07 - spine label:** `WHAT THE AEs GET` (icon: calendar)

**This is the first row carrying semantic color.** 4px left-accent stripe on each cell.

- **OLD cell** (left-accent stripe Critical `#B43A2A`): Heading `Meetings nobody qualified`. Visualisation: a stat callout - the numeral `1` in Sofia Sans Bold at display size, over mono label `CLOSED DEAL LAST QUARTER`. Beside it, a mini descending bar fragment in `#B43A2A` running meetings → qualified → closed, collapsing to a single pixel-thin bar at the end.
- **NEW cell** (left-accent stripe Positive `#2E8F54`): Heading `Meetings that already replied`. Visualisation: a 3-step qualification chain in Positive `#2E8F54` chips: `Signal` → `Scored Tier 1` → `Replied` → `SDR called` → `AE meeting`. Mono caption: `EVERY MEETING CLEARS FOUR GATES FIRST`

---

### Data / stats (if applicable)

Full-width **receipts band** below row 07. Two cost stacks side by side, then one result strip beneath them spanning the full width. All numerals JetBrains Mono with tabular numerics so the two stacks align vertically.

| Label | Value |
|---|---|
| Old engine - people | `$300,000` |
| Old engine - tools | `$30,000` |
| **Old engine - total** | **`$330,000 / YEAR`** |
| New engine - people | `$120,000` |
| New engine - tools | `under $10,000` |
| **New engine - total** | **`$130,000 / YEAR`** |
| Reduction | `-61%` |
| Returned annually | `~$200,000 back every year` |
| Ratio shift | `5 SDRs : 3 AEs   →   1 SDR : 3 AEs` |

Layout of the band:
- Left stack carries a 4px left-accent stripe in Critical `#B43A2A`, header `OLD ENGINE`, the two line items, a hairline `#C9CFD9` divider, then the total.
- Right stack carries a 4px left-accent stripe in Positive `#2E8F54`, header `NEW ENGINE`, same structure.
- Result strip below both, centered: `-61%` set large in Enablement Red `#E11E48`, with `~$200,000 back every year` beside it in `#4A5360`, and the ratio shift line below in mono `#7C8390`.

### Anchor line (vertical infographic only)

Bottom italic line that lands the insight (Sofia Sans Regular italic, max 12 words):
`Stop buying tools that support people. Buy tools that replace them.`

### CTA slide / closing (carousels only)

N/A - vertical infographic does not use this section.

---

## 4. Visual specs

**Canvas color:** Light slate `#F2F4F8` (default). Background is the two-layer canvas primitive from `DESIGN_SOCIAL.md` §3.1: 135° gradient from `#F2F4F8` top-left to `#D7EBFE` bottom-right, with a 1px hairline grid at ~24px spacing in `#E1E5EC` at 20% opacity over it. Not flat.

**Accent color in use:** Enablement Red `#E11E48` - applied to **the `-61%` figure in the receipts band result strip, and nothing else.** This is the single red element on the canvas. Do not put it on the headline, the eyebrow, the column headers, or any tile stripe. Tool-native brand colors inside the logo chips (ZoomInfo blue, Apollo purple, HubSpot orange, Teamfluence magenta `#DE00CB`, Sales Navigator blue, Clay, Smartlead, HeyReach, Make, TheirStack) are permitted per §2.1 and do not count against this rule.

**Semantic colors in use:**
- Critical `#B43A2A` - left-accent stripe and the descending bar fragment on the OLD cell of row 07 only, plus the left-accent stripe on the OLD cost stack in the receipts band. **Nowhere else.** Rows 01 through 06 of the OLD column stay neutral. Specifically: the ZoomInfo, Apollo and HubSpot logo chips in row 03 are neutral tiles. The argument is against the setup, not against the vendors.
- Positive `#2E8F54` - left-accent stripe and qualification-chain chips on the NEW cell of row 07, the `TIER 1 - CALL` pill in row 04, and the left-accent stripe on the NEW cost stack in the receipts band.
- Warning `#C77B0E` - the `TIER 2 - AUTOMATED` pill in row 04 only.
- Flow `#6FA8DC` / Flow-strong `#4A89C7` - the signal-feed connector in row 02, the dashed automated connectors in rows 04 and 06.
- Muted `#7C8390` - all mono captions and annotation tags, the ghosted SDR figures in row 01 (use `#C9CFD9`), the `NO FIT - FILTERED` pill in row 04.
- Heading `#0F1217` - solid connectors marking human-executed steps in row 06.

**Column header treatment:** both header tiles use the standard neutral bento surface. Only the eyebrow pill inside each is tinted - `2020 PLAYBOOK` in a Critical-tinted pill, `2026 PLAYBOOK` in a Positive-tinted pill. That tint plus the row-07 stripes is the entire old-vs-new color signal.

**Every cell is a bento tile** per §3.2: gradient surface `#FFFFFF` to `#FAFBFD`, 1px gradient refractive edge at 135° (white upper-left fading to `#C9CFD9` lower-right - a flat solid stroke kills the glass read), `inset 0 1px 0 rgba(255,255,255,0.9)` top highlight, `--radius-md` 12px, `--shadow-sm`. All four details, none optional.

**Padding:** minimum 24px inside every cell, 32px gap between tiles. With 7 rows plus a receipts band, if this does not fit at 1620px, **extend the canvas further rather than tightening padding.** Cramped padding is the number one recurring defect in past Enablement graphics.

**Tool logos:** all ten pull from `~/Claude Code/enablement-brain/Design/logos/`. Exact filenames named inline in Section 3. `teamfluence-icon.svg` and `sales-navigator-icon.png` were added on 2026-07-29 - `sales-navigator-icon.png` is the Sales Navigator compass mark, do not substitute `linkedin.png` or the `in` bug.

**Photo of Lanny?** No

**Wordmark placement:** Bottom-right (default) - confirmed. Black wordmark on this light canvas.

---

## 5. File deliverables

- **Format:** PNG 24-bit sRGB
- **Filename pattern:** `<post-slug>_cheatsheet.png`
- **Post slug:** `330k-sdr-engine-teardown`
- **Number of files expected:** 1

**Delivery:** Attach to this ClickUp task. Reply on WhatsApp when ready.

**Deadline:** 2026-07-31

---

## 6. Iteration scope

Round-1 deliverable is full-quality work. After round 1:

- **Free iterations:** 1 round of revisions covering copy fixes, color tweaks, layout adjustments within the same template
- **Paid iterations:** Full layout changes, switching to a different primitive, swapping format (carousel → infographic). Quoted separately.

---

## 7. Reference materials the designer must read

Before starting, the designer should have read:

1. `~/Claude Code/enablement-brain/Design/DESIGN_SOCIAL.md` - the full social design system
2. `~/Claude Code/enablement-brain/Design/social-examples/README.md` - annotated examples
3. The specific reference image(s) named in Section 2 above

If the designer has not been onboarded yet, also share:

4. `~/Claude Code/enablement-brain/Design/site-plan.md` - the website composition rules (for voice and italic-emphasis pattern)
5. `~/Claude Code/enablement-brain/Design/templates/figma-file-spec.md` - the Figma file structure they should build

---

## 8. Sign-off

- **Brief written by:** Claude
- **Brief reviewed by:** Lanny - required
- **Date:** 2026-07-29
- **Trial run:** Yes (treat scope conservatively - one format only)
