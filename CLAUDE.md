# Enablement - Design System Repo

## What this repo is

The single source of truth for Enablement's brand and design language. Two consumers:

1. **Website** (`~/enablement-site/` separate repo) - draws design intent from `site-plan.md` and tokens from `index.html`
2. **Social** (LinkedIn cheat sheets, GIFs, carousels, single images, banners) - driven by `DESIGN_SOCIAL.md` + `social-examples/inspiration/` + briefs in `briefs/`

Anyone working on Enablement's visual output - website devs, social designers, automation - reads from this repo.

## Session start

If you're a designer or designer's Claude Code session arriving for the first time, read [DESIGNER_ONBOARDING.md](DESIGNER_ONBOARDING.md). It walks you through what to read, in what order, and what to do on Day 1.

If you're already onboarded, the natural starting point is `ls briefs/active/` to see what's open.

## Repo layout

```
enablement-design-system/
├── README.md                  - styleguide intro (website-focused)
├── STATUS.md                  - website-build status snapshot
├── CLAUDE.md                  - this file
├── DESIGNER_ONBOARDING.md     - Day-1 guide for designers
├── DESIGN_SOCIAL.md           - social media design system (LinkedIn formats)
├── site-plan.md               - website composition rules + locked decisions
├── index.html                 - live styleguide page (deployed to GitHub Pages)
├── social-examples/           - banner examples (pre-redesign) + inspiration references
│   ├── README.md
│   ├── banner-01..04          - existing LinkedIn banners (pre-redesign)
│   └── inspiration/           - post-redesign references that drive DESIGN_SOCIAL.md
├── templates/
│   ├── brief-template.md      - the contract every design brief follows
│   └── figma-file-spec.md     - what designer builds in the master Figma file
└── briefs/
    ├── active/                - briefs currently in flight
    ├── archive/               - briefs shipped and delivered
    └── README.md              - the brief workflow
```

## Key reference files

- `DESIGN_SOCIAL.md` - the social design system. Read end-to-end before producing any social graphic.
- `social-examples/inspiration/README.md` - the calibration references. Every rule in DESIGN_SOCIAL.md traces back to a reference here.
- `site-plan.md` - website composition rules, voice patterns (italic emphasis, mono eyebrows, etc.)
- `templates/brief-template.md` - what every brief contains
- `templates/figma-file-spec.md` - the Figma master file's structure

## The brand voice (Enablement)

Direct, no fluff, opinionated. "Built · Composed · Operative · Crisp · Confident."

When writing or critiquing copy that appears in graphics (headlines, anchor lines, section labels), match this register. Avoid corporate hedging ("game-changer", "leverage", "synergy", "at the end of the day").

## Writing style rules

- **Never use em-dashes (—).** Use a hyphen with spaces ( - ) instead. Strict.
- Sofia Sans + JetBrains Mono only. No serif typefaces in any visual output.
- One italic-emphasis word per headline, maximum.
- Mono eyebrows above section headings.

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

- The live styleguide at https://marcusaurelian.github.io/enablement-design-system/ (GitHub Pages, served from `index.html`)
- Nothing else. Briefs, social specs, and inspiration are read by humans + Claude, not deployed.

## Relationship to other Enablement repos

| Repo | What it owns | How it relates to this one |
|---|---|---|
| `enablement-site` | Live Astro website | Reads design tokens from `global.css` (which mirrors what's in this repo's `index.html`). When tokens drift, this repo + the site sync. |
| `enablement-gtm` | Sales pipeline, ghostwriter, ICP updater, lead magnets | Produces LinkedIn posts via the Ghostwriter. Those posts feed into briefs in this repo. |
| `claude-skills` (`enablement-ch/claude-skills`) | Reusable Claude Code skills + global reference docs | Hosts the future `/linkedin-design` skill that orchestrates brief generation. Global CLAUDE.md there points at this repo's DESIGN_SOCIAL.md. |

## Asking Claude Code questions about the brand

Once you've cloned this repo and `cd`'d in, fire up Claude Code and ask things like:

- "Summarise the active brief"
- "What does DESIGN_SOCIAL.md say about bento tile padding?"
- "Show me the references for the cheat sheet format"
- "What's wrong with the existing LinkedIn banners?"
- "Draft a brief from this LinkedIn post: [paste]"

Claude has full repo context. No need to upload anything.
