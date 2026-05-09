# Enablement.ch — Site Plan v0.1

The site architecture for enablement.ch. This doc is the source of truth — code follows what's locked here, not the other way around.

## Status

| Page | Status |
|---|---|
| Sitemap | locked |
| Home | locked (FAQ list TBD) |
| Case Studies index | locked |
| Case Study detail | locked |
| /book | TBD |
| /gtc | TBD |
| /privacy | TBD |

**Future scope (not now):** Playbook / Resources section.

---

## Sitemap

| URL | Purpose | Nav | Footer |
|---|---|---|---|
| `/` | Home | Logo (left) | — |
| `/case-studies` | Client work | "Clients" | quick link |
| `/book` | HubSpot meeting embed | "Schedule meeting" (button) | quick link |
| `/gtc` | Terms | — | legal |
| `/privacy` | Privacy | — | legal |

**Nav:** Logo · "Clients" · "Schedule meeting" (CTA button).
**Footer:** logo + tagline · mini sitemap · founders block · partner band · legal.

---

## `/` — Home

Seven sections + footer. Order: hero → marquee logos → video testimonials → pain × 3 → FAQ → final CTA → footer.

### 01 — Hero with VSL

- **Layout:** Centered, vertical stack. Eyebrow → H1 → lead → CTA pair → 16:9 video frame below.
- **Content:** H1 candidate is `Scale your pipeline, not your headcount.` (carry over from existing site, italic emphasis on "*not your headcount*"). Lead: ICP-grounded, ~2 sentences. Primary CTA: `Schedule meeting` → `/book`. Secondary text-link: `See client work →` → `/case-studies`. Video frame: custom thumbnail + crimson play button + label `Watch · 3 min · What we do`.
- **Reasoning:** ColdIQ-pattern. Video carries the heavy explanation work; copy stays short and recognition-focused. Buyer self-diagnoses → recognizes themselves in the H1 → watches the VSL.

### 02 — Marquee logo wall

- **Layout:** Single horizontal row, full-bleed (extends past container), bordered by hairlines top + bottom. Slow infinite-scroll right-to-left. Pauses on hover.
- **Content:** Client logos. Each cell wraps in an `<a>` if a case study exists.
- **Behavior:** On desktop hover, marquee pauses + a "Case Study" pill fades in over linked cells. Click → case study detail. On mobile, marquee runs slower and pills are permanently visible on linked cells.
- **Reasoning:** Modern execution that signals scale. Marquee implies "more clients than fit on screen." Case study pills preserve the depth-on-demand pattern.

### 03 — Video testimonials

- **Layout:** 3×2 grid (6 cards). Divider-grid pattern (hairlines between cells, no individual borders). No drop shadows.
- **Content per card:** Video thumbnail with crimson play overlay · name · title/company · 1-line quote excerpt.
- **Reasoning:** Proof-heavy business. Videos go high. Operator-voice testimonials are higher-trust than agency marketing copy. Six videos confirmed available.

### 04 — Pain × 3

Three alternating feature rows. Each row = one buyer pain + the system we build for it. Replaces both "How it works" and "What we build" — modern pattern that integrates pain → solution → proof in a single block.

#### Block A — No outbound, or broken outbound
- **Eyebrow:** `NO OUTBOUND`
- **H3:** Buyer-language statement of pain (e.g., `You don't have outbound. Or what you have is broken.`)
- **Body:** 2-3 sentences in buyer language describing the pain, then 2-3 sentences describing the system we build (Outbound Engine).
- **Visual (right side):** Workflow snippet — small version of the trigger → score → route diagram.
- **CTA:** `See this built for [Client] →` → linked case study.

#### Block B — Tools licensed but producing nothing
- **Eyebrow:** `BROKEN TOOLS`
- **H3:** `You have Clay, Apollo, HubSpot. Open rates are 14%.`
- **Body:** Pain articulation → RevOps Stack rebuild description.
- **Visual (left side, alternating):** Annotated dashboard fragment or before-after metric viz.
- **CTA:** `See this built for [Client] →`.

#### Block C — Generic AI slop in your content
- **Eyebrow:** `AI SLOP`
- **H3:** `Your content sounds like everyone else's content.`
- **Body:** Pain articulation → Content Engine voice-calibration description.
- **Visual (right side):** Voice calibration system illustration.
- **CTA:** `See this built for [Client] →`.

**Reasoning:** Buyers self-diagnose with these exact pains. Each block doubles as an answer to "do you handle X?" and a link to proof. The case study CTA at the end of each block compresses the trust journey.

### 05 — FAQ (accordion)

- **Layout:** Accordion module. Each question collapsed by default. Click to expand. Mono eyebrow numbering (Q01, Q02, …).
- **Content:** TBD — review pending. Working list of 8 questions parked.
- **Reasoning:** ICP shows lost deals overindex on unanswered objections. Surfacing them inline lifts decision velocity.

### 06 — Final CTA

- **Layout:** Centered, single-section. H2 + lead + button.
- **Content:** Direction-locked. Final copy TBD. Single CTA: `Schedule meeting` → `/book`.

### 07 — Footer

- **Top row:** Logo + tagline · Mini sitemap (Clients, Schedule meeting, Privacy, GTC) · Contact (LinkedIn company, hello@enablement.ch).
- **Founders block (Attio-pattern):** Header `Founders`. Two rows: avatar + name + role + LinkedIn icon. Lanny Heiz · Co-Founder + Gilbert Kralinger · Co-Founder.
  - Gilbert's LinkedIn: https://www.linkedin.com/in/gilbert-kralinger/
- **Partner band:** Top hairline + small grayscale partner logos with caption `Official partner.` Confirmed: Clay (Studio Partner), Smartlead, HeyReach, Lemlist.
- **Bottom row:** © Year · GTC · Privacy.

---

## `/case-studies` — Index

Two sections: page header + card grid. No filters yet (add when there are 20+ studies).

### 01 — Page header

- **Layout:** Centered eyebrow + H1 + lead, no video.
- **Content:** Eyebrow `↳ / Case studies`. H1 `Systems we've` *`shipped.`* (italic emphasis on "shipped"). Lead: short, ICP-grounded.

### 02 — Card grid

- **Layout:** Divider-grid (hairlines between cells, no individual card borders), 2 columns desktop / 1 column mobile. Whole card is a clickable link to detail page.
- **Card structure:**

  ```
  [Company logo]                      [▶ Video badge if applicable]
  How [Company] got [result]
  ──────────────────────────────────
  [stat 1]    [stat 2]    [stat 3]
  ──────────────────────────────────
  [Person photo]   [Name]
                   Title · Company
  ```

- **Card content rules:**
  - **Top row:** Company logo (small, monochrome) on the left. On the right, an optional video badge — small play icon chip — visible only if the case has a video testimonial linked.
  - **Title (H3):** Fixed pattern: `How [Company] got [result]`. Predictable, scannable, skip-friendly. Pattern is locked — every case study uses it.
  - **Stats:** Per-card mini stat strip with 3 metrics. Vertical hairlines between. Functional here because it's the per-card proof.
  - **Person attribution:** Small avatar/photo + name + title underneath. If no quote/testimonial, this can be omitted on the card.

## `/case-studies/[slug]` — Detail

Five sections. Two hero variants depending on whether the case has a video testimonial.

### 01a — Hero (video case — preferred)

Two-column layout. Video gets prominent positioning because it's the strongest proof we have.

- **Left (5/12 cols):**
  - Eyebrow: `↳ / Case studies` (links back to index)
  - H1: `How [Company] got [result]` (matches index card title)
  - Lead: 1-line outcome summary
  - Person attribution: photo + name + title (small)
- **Right (7/12 cols):**
  - Video player frame, 16:9, custom thumbnail with crimson play button. Click → plays inline (or opens a modal).

### 01b — Hero (no video — fallback)

Centered single-column layout when there's no video.

- Company logo at top (large, monochrome)
- Eyebrow, H1, lead (same content as variant A)
- Photo + name attribution below the lead

### 02 — Result callout boxes

Three large outcome boxes in a row, sitting right after the hero. This is the case's biggest proof element.

- **Layout:** 3 cards in a divider grid (hairlines between).
- **Per box:** huge number (3-4rem, bold) + label below (mono small caps).
- **Reasoning:** Replaces the old "stat strip" pattern with more visual weight. Each box reads as a callout, not a footnote.

### 03 — Narrative body

Reading-width column (~720px max). Editorial prose styles — body at lead size for legibility, generous line-height. Three H2 sections, fixed structure for every case:

1. **Initial Situation & Challenge** — The state we found. Pain articulation in buyer language, with the customer's actual quotes if available.
2. **Solution** — What we built. If the case is about a complex workflow, embed a workflow diagram snippet here, scaled to fit the column.
3. **Result** — Outcomes with numbers inline as full sentences ("Open rate climbed from 14% to 47% by week 8."). Not bullet lists.

### 04 — Metadata aside

Compact 4-column divider grid below the narrative.

- **Cells:** Industry · Team size · Geography · Engagement type
- **Reasoning:** Quick scannable facts for the buyer who skims first.

### 05 — Final CTA

Reuses the homepage final CTA block. Same `Schedule meeting` button → `/book`. Consistency = credibility.

## `/book`

Single column. Embed front and center. Don't compete with the booking action.

### 01 — Title

- **Layout:** Centered, very tight vertical stack. No eyebrow, no kicker.
- **Content:**
  - H1: `Schedule Your GTM Session`

### 02 — HubSpot embed

- **Layout:** Centered, container width (~900–1000px max so the widget doesn't sprawl). Bordered card holding the embed.
- **Content:** HubSpot meeting widget. Nothing else.

### 03 — Trust line (lower)

- **Layout:** Below the embed, generous vertical spacing. Centered.
- **Content:**
  - Caption in mono caps: `Trusted by over 100 GTM teams across DACH`
  - Optional: 6-8 client logos in a single horizontal row, monochrome, scaled down
- **Reasoning:** Quiet social proof. Sits below the booking action so it doesn't pull attention upward. The buyer who needs reassurance scrolls and finds it; the buyer who's already committed never has to.

### 04 — Footer

(Standard site footer.)

### Reasoning

- Single column keeps focus on the embed. Everything competing for attention is removed (no testimonial video, no big trust panel, no inline assurances).
- Title uses the literal call type name (`GTM Roadmap`) instead of a clever phrase — buyer arrives knowing exactly what they're booking.
- Trust line sits below, not beside, so it's available without being distracting.

## `/gtc` and `/privacy`

*Standard legal pages. Plain text in the design system's prose styles. Content provided by you.*

---

## Components used (from design system)

- `Nav`, `Footer`
- `Hero` (with VSL variant)
- `MarqueeLogoWall` *(new — to build)*
- `VideoTestimonials` *(new — to build)*
- `FeatureRow` for pain blocks
- `FAQ` accordion *(new — to build)*
- `Workflow` (vertical pipeline diagram)
- `FoundersBlock` *(new — Attio-pattern)*
- `PartnerLogos` *(new — for footer)*

---

## Open items / pending from Lanny

- [ ] FAQ question list (parked for later review)
- [ ] Logo files (drop into `~/enablement-site/public/logos/`)
- [ ] HubSpot meeting URL
- [ ] Final hero copy
- [ ] Final CTA copy
- [ ] Partner logos (svg preferred)
- [ ] Founder photos (Lanny + Gilbert)
- [ ] GTC + Privacy content