# Status — Enablement.ch site build

**Last updated:** v0.4 of styleguide + v0.1 of site live.

A snapshot of where the Enablement.ch website rebuild stands. This is the source of truth for picking up across sessions.

---

## Where everything lives

### Repos

| Repo | Purpose | URL |
|---|---|---|
| `enablement-design-system` | Standalone styleguide + this site plan | https://github.com/enablement-ch/enablement-design-system |
| `enablement-site` | The actual marketing site (Astro) | https://github.com/enablement-ch/enablement-site |

### Local working copies

| Path | What's there |
|---|---|
| `~/enablement-design-system/` | `index.html` (styleguide), `site-plan.md`, this `STATUS.md` |
| `~/enablement-site/` | Astro project — components, pages, content collections |

### Deploys

| Site | Where | URL |
|---|---|---|
| Styleguide | GitHub Pages | https://enablement-ch.github.io/enablement-design-system/ |
| Marketing site | **Vercel — needs manual connection** | Pending (not yet wired) |

**Vercel is not connected.** I push to GitHub but Vercel will only deploy if Lanny imports the repo at https://vercel.com/new → select `enablement-ch/enablement-site` → click Deploy. One-time setup. After that, every git push auto-deploys.

---

## Stack

- **Astro 6.3** — static site generator
- **TypeScript strict** — config in tsconfig.json
- **Sofia Sans** + **JetBrains Mono** via Google Fonts
- **Crimson `#E11E48`** accent on cool off-white canvas (`#F2F4F8`)
- **Light + dark mode** via semantic CSS custom properties (theme toggle in nav)
- **No CMS** — case studies live as markdown files in `src/content/case-studies/`

---

## Locked decisions

Everything in `site-plan.md` is signed off. Key items:

### Sitemap (5 pages)
- `/` — Home
- `/case-studies` — Index (nav label: "Clients")
- `/case-studies/[slug]` — Detail
- `/book` — HubSpot meeting (nav CTA: "Schedule meeting")
- `/gtc` and `/privacy` — Legal pages

### Home (7 sections)
1. Hero with VSL frame
2. Marquee logo wall (always-visible "Case Study" pill on linked logos)
3. Video testimonials (3 cards)
4. Pain × 3 — buyer-language pain + system we build for it, each links to a case study
5. FAQ accordion (8 questions, content TBD)
6. Final CTA
7. Footer with Founders block (Lanny + Gilbert) + Partner band (Clay, Smartlead, HeyReach, Lemlist)

### Case study card pattern
- Title: `How [Company] got [result]`
- Logo + optional video badge top
- Per-card 3-metric stat strip
- Person attribution (photo + name + role)

### Case study detail
- Hero: left/right split when video exists, centered fallback when not
- Result callout boxes (3 large bordered cards)
- 3-section narrative: **Initial Situation & Challenge · Solution · Result**

### /book page
- Single column, centered
- Title: `Schedule Your GTM Session` (literal call type name)
- HubSpot embed centered
- Trust line below: marquee logos + `Trusted by over 100 GTM teams across DACH`

---

## What's currently shipped (in `enablement-site` repo)

| Status | Item |
|---|---|
| ✓ | Astro scaffold + design tokens ported from styleguide |
| ✓ | BaseLayout with theme toggle |
| ✓ | Nav (Logo · Clients · Schedule meeting) |
| ✓ | Hero with VSL placeholder |
| ✓ | MarqueeLogoWall (with always-visible case study pills) |
| ✓ | VideoTestimonials (3-up, placeholder thumbnails) |
| ✓ | PainBlock × 3 with workflow diagram embedded in block A |
| ✓ | FAQ accordion (8 default questions, content TBD with Lanny) |
| ✓ | Footer with FoundersBlock (Lanny + Gilbert + LinkedIn icons) + PartnerLogos (Clay/Smartlead/HeyReach/Lemlist) |
| ✓ | Final CTA section |
| ✓ | `/book` page with HubSpot embed (placeholder URL) |
| ✓ | `/gtc` — real text from enablement.ch (v.21.10.2025, 19 sections) |
| ✓ | `/privacy` — real text from enablement.ch (DSGVO sections, HubSpot, analytics) |
| ✓ | `/case-studies` index with 6 case study cards |
| ✓ | 6 case studies in markdown: Eyva, Scrypt, BranderGroup, SutureHealth, Ohalo, Emporix (placeholders based on documented won deals from ICP) |
| ✓ | Case study detail template with video-hero variant |

11 pages generated on each build.

---

## Open items / content gaps

These are the blockers between "structurally complete staging" and "production-ready."

### Content from Lanny

- [ ] **HubSpot meeting URL** — replace placeholder in `src/pages/book.astro` (line: `meetingUrl = "..."`) and in `src/components/HubSpotMeetings.astro` if reused elsewhere
- [ ] **Logo files** → drop SVG (preferred) into `~/enablement-site/public/logos/`. Filenames lowercase, e.g., `scrypt.svg`, `hubspot.svg`. Once dropped, I'll wire the `MarqueeLogoWall` to use `<img>` instead of text marks.
- [ ] **Founder photos** → drop into `~/enablement-site/public/team/`. Suggested names: `lanny.jpg` (or `.webp`) and `gilbert.jpg`. Then uncomment the `photo:` line in `FoundersBlock.astro` defaults.
- [ ] **Video testimonial files** → drop into `~/enablement-site/public/testimonials/`. Update the `videoTestimonial:` field in case study frontmatter to reference them, OR pass them as props to `VideoTestimonials` on the homepage.
- [ ] **Person photos for case studies** → drop into `~/enablement-site/public/team/` (or `/case-studies/`), then uncomment the `photo:` field in each case study's frontmatter.
- [ ] **Real case study copy** — current 6 cases are placeholders based on ICP doc. Replace with actual client wins (with permission). Schema is locked, just swap content.
- [ ] **Final hero copy** — H1 is currently "Scale your pipeline, not your headcount." Lead copy is ICP-grounded but not signed off. Edit in `src/components/Hero.astro`.
- [ ] **Final CTA copy** — currently "30 minutes. No deck." Edit in `src/pages/index.astro` (Section 06).
- [ ] **FAQ question list** — 8 default questions parked for review. Edit in `src/components/FAQ.astro` defaults, or pass `questions={[...]}` from homepage.

### Decisions parked

- FAQ questions to keep / drop / add (8 drafted, review pending)
- Whether to add custom domain (enablement.ch DNS cutover) — comes after Vercel is connected and the site is reviewed

### Infrastructure

- [ ] **Vercel connection** — Lanny needs to import `enablement-ch/enablement-site` at https://vercel.com/new
- [ ] **Custom domain** — once Vercel is connected, point enablement.ch DNS at Vercel for production cutover
- [ ] **Analytics** — currently none. Could add Plausible / Fathom / Vercel Analytics once live

---

## How to continue

### Quick commands

```bash
# Start local dev server (auto-reloads on file changes)
cd ~/enablement-site && npm run dev
# → http://localhost:4321/

# Build and verify before push
cd ~/enablement-site && npm run build

# Deploy (push to main triggers Vercel rebuild once connected)
cd ~/enablement-site && git add -A && git commit -m "..." && git push

# Edit the styleguide / site-plan
cd ~/enablement-design-system
# index.html = the styleguide
# site-plan.md = wireframes and locked decisions
# STATUS.md = this file
```

### File map for common edits

| Edit | File |
|---|---|
| Hero copy | `~/enablement-site/src/components/Hero.astro` |
| Pain × 3 copy | `~/enablement-site/src/pages/index.astro` (Section 04) |
| Add a case study | New markdown file in `~/enablement-site/src/content/case-studies/` |
| FAQ questions | `~/enablement-site/src/components/FAQ.astro` |
| Logo wall logos | `~/enablement-site/src/components/MarqueeLogoWall.astro` |
| Footer founders | `~/enablement-site/src/components/FoundersBlock.astro` |
| Footer partners | `~/enablement-site/src/components/PartnerLogos.astro` |
| Design tokens | `~/enablement-site/src/styles/global.css` (top of file, `:root`) |

### Where to pick up next session

The natural next move is one of:

1. **Connect Vercel** so live deploys actually happen (5 minutes, Lanny only)
2. **Drop content** — logos, photos, real videos, real case study copy
3. **Polish pass** — review the live staging URL together, flag visual issues
4. **DNS cutover** — once Vercel is up and reviewed, point enablement.ch at it

I'll pick up from whichever the user prioritizes.

---

## Communication style notes

- Lanny prefers tight, opinionated responses. No filler.
- Direct corrections are normal — they redirect quickly and want momentum.
- Brand voice: **Built · Composed · Operative · Crisp · Confident.** Same vibe applies to how we work together.