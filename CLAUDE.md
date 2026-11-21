# Enablement - Design System Repo

Open `~/Claude Code/enablement-brain/Social Content Guidelines/LinkedIn design` to work on LinkedIn graphics. Website and document guidelines and shared logos live in `~/Claude Code/enablement-brain/Branding and Design Guidelines/`.

## What this repo is

Use the reference for the surface you are designing.

1. **Website** - use the website plan in Branding and Design Guidelines and the production tokens in `~/Claude Code/enablement-site/src/styles/global.css`.
2. **Social** (LinkedIn cheat sheets, GIFs, carousels, single images, banners) - driven by `templates/linkedin-infographic-template.svg` + `DESIGN_SOCIAL.md` + `social-examples/inspiration/` + briefs in `briefs/`

Anyone working on Enablement's visual output - website devs, social designers, automation - reads from this repo.

## Session start

If you're a designer or designer's Claude Code session arriving for the first time, read [DESIGNER_ONBOARDING.md](DESIGNER_ONBOARDING.md). It walks you through what to read, in what order, and what to do on Day 1.

If you're already onboarded, the natural starting point is `ls briefs/active/` to see what's open.

## Where to work

Run Git commands for social work from `LinkedIn design`. Open `social.html` for the preview. Briefs in progress live in `briefs/active/`, shipped briefs in `briefs/archive/`, and annotated examples in `social-examples/`. The website and document checkout uses the same repository and lives in `Branding and Design Guidelines/Website and documents`.

## Key reference files

- `templates/linkedin-infographic-template.svg` - mandatory infographic shell, palette, headline, and footer.
- `DESIGN_SOCIAL.md` - the social design system. Read end-to-end before producing any social graphic.
- `social-examples/inspiration/README.md` - the calibration references. Every rule in DESIGN_SOCIAL.md traces back to a reference here.
- `~/Claude Code/enablement-brain/Branding and Design Guidelines/site-plan.md` - website composition rules, voice patterns (italic emphasis, mono eyebrows, etc.)
- `templates/brief-template.md` - what every brief contains
- `templates/figma-file-spec.md` - the Figma master file's structure

## The brand voice (Enablement)

Direct, no fluff, opinionated. "Built · Composed · Operative · Crisp · Confident."

When writing or critiquing copy that appears in graphics (headlines, anchor lines, section labels), match this register. Avoid corporate hedging ("game-changer", "leverage", "synergy", "at the end of the day").

## Writing style rules

- **Never use em dashes.** Use a hyphen with spaces ( - ) instead. Strict.
- Native editorial infographics use Sofia Sans for functional text and DM Serif Display Italic for the highlighted headline keyword. Website-derived graphics may retain JetBrains Mono stage labels from the live site.
- Native editorial infographic headlines begin with `How to` and highlight one meaningful keyword in the canonical red gradient capsule. Website-derived LinkedIn exports follow `DESIGN_SOCIAL.md` Section 7 and preserve the live page hierarchy.
- LinkedIn infographic eyebrows use Sofia Sans Semibold caps with tracking.
- Native editorial infographics use `#0F1217` for normal text. Website-derived graphics use the live dark website tokens for headings, body, and labels.

## Workflow (social)

```
Post written
    ↓
Brief drafted in briefs/active/<date>_<slug>_<format>.md (using templates/brief-template.md)
    ↓
Lanny git commit + push
    ↓
Designer git pull, reads brief
    ↓
Designer works in Figma (master file from figma-file-spec.md)
    ↓
Designer drops exports in briefs/active/<slug>/
    ↓
Designer git commit + push
    ↓
Lanny reviews, approves, moves brief + exports to briefs/archive/
```

See [briefs/README.md](briefs/README.md) for the full workflow detail.

## What's deployed from this repo

- A component preview at https://enablement-ch.github.io/enablement-design-system/ (GitHub Pages, served from `index.html`)
- Nothing else. Briefs, social specs, and inspiration are read by humans + Claude, not deployed.

## Relationship to other Enablement repos

| Repo | What it owns | How it relates to this one |
|---|---|---|
| `enablement-site` | Live Astro website | Owns the production tokens, components and page layouts. Update the Brain guide and its preview from the site. |
| `enablement-gtm` | Sales pipeline, ghostwriter, ICP updater, lead magnets | Produces LinkedIn posts via the Ghostwriter. Those posts feed into briefs in this repo. |
| `claude-skills` (`enablement-ch/claude-skills`) | Reusable Claude Code skills + global reference docs | Hosts `linkedin-visual-brief` and `minimalist-visual`. The former follows this repo's editorial infographic system. |

## Asking Claude Code questions about the brand

From the LinkedIn design checkout, fire up Claude Code and ask things like:

- "Summarise the active brief"
- "What does DESIGN_SOCIAL.md say about editorial panel structure?"
- "Show me the references for the cheat sheet format"
- "What's wrong with the existing LinkedIn banners?"
- "Draft a brief from this LinkedIn post: [paste]"

Claude has full repo context. No need to upload anything.
