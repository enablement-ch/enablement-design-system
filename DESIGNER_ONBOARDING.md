# Designer Onboarding

> Welcome. This guide gets you from "just cloned the repo" to "ready to design" in about 60 minutes.

## What you're working on

Enablement is a B2B GTM engineering agency. We help our customers build outbound systems that produce pipeline without the founder's daily involvement. The visual output you'll produce supports our LinkedIn presence - vertical cheat sheets, animated process GIFs, the occasional single image, and (later) a banner refresh.

The visual register is **editorial, information-dense infographic.** Think a
modern magazine explainer or exceptionally clear worksheet, not a SaaS product
dashboard. Flat panels, strong information architecture, a tightly controlled
red-and-blue palette, tables, diagrams, annotated examples, and structured copy
do the work.

Every infographic starts from `templates/linkedin-infographic-template.svg`.
Its headline begins with the exact words `How to` and highlights one meaningful
keyword in the red gradient capsule.

## What you have access to

You've been added to:

- This repo: `enablement-ch/enablement-design-system` (where every brief, spec, and reference lives)
- A Figma team workspace (we'll build the master file together on Day 1)
- WhatsApp for "new brief ready" and "brief done" pings

That's it. No ClickUp, no Drive sharing chains, no Slack. Everything else flows through this repo.

---

## Day 1 setup (~60 min)

### 1. Clone the repo (~5 min)

```bash
git clone git@github.com:enablement-ch/enablement-design-system.git
cd enablement-design-system
```

### 2. Open in Claude Code (~2 min)

```bash
claude .
```

Or open the folder in your IDE if you prefer reading natively, then start Claude Code from there.

Claude Code auto-loads this repo's `CLAUDE.md`, so it knows everything about the brand the moment you start a session. Use it to ask questions as you read.

### 3. Read in this order (~30 min)

You'll get the most out of these files if you read them in this order. Don't try to memorise - just internalise the visual direction.

| # | File | What you'll learn | Time |
|---|---|---|---|
| 1 | [templates/linkedin-infographic-template.svg](templates/linkedin-infographic-template.svg) | The canonical shell, headline, highlight, grid, and footer. | 5 min |
| 2 | [social-examples/inspiration/README.md](social-examples/inspiration/README.md) | The 6 body-composition references. Open the actual files alongside the annotations. | 10 min |
| 3 | [DESIGN_SOCIAL.md](DESIGN_SOCIAL.md) | The full social design system. Tokens, primitives, format specs, do-not list. | 15 min |
| 4 | [templates/brief-template.md](templates/brief-template.md) | The structure every brief follows. | 2 min |
| 5 | [templates/figma-file-spec.md](templates/figma-file-spec.md) | The Figma master file structure. | 3 min |

### 4. Set up your Figma file (~25 min)

Follow [templates/figma-file-spec.md](templates/figma-file-spec.md) step by step. Specifically:

- [ ] Create a new file in your Figma team workspace, name it `Enablement - Social Templates`
- [ ] Import `templates/linkedin-infographic-template.svg` and rebuild the
      headline as the editable `Headline / How To` component
- [ ] Load Sofia Sans (Google Fonts) and JetBrains Mono (Google Fonts) into the file
- [ ] Create the color styles listed in Section 2.1 of figma-file-spec.md
- [ ] Create the text styles listed in Section 2.2
- [ ] Build the component primitives listed in Section 2.3 (Headline / How To,
  Editorial Panel, Table Cell, Label Capsule, Step ID, Stat Callout, Wordmark,
  Slide Indicator, Connector)

Don't build the actual template frames (cheat sheet, infographic, etc.) yet. The first real brief will tell us what frame to build first - we build templates as we need them, not upfront.

### 5. Drop the Figma file URL into the spec

Once your Figma file exists, open `templates/figma-file-spec.md`, find Section 9 ("File URL"), and replace `[TO BE FILLED IN WHEN FIGMA FILE EXISTS]` with the actual URL.

```bash
# Edit, then commit:
git add templates/figma-file-spec.md
git commit -m "wire: figma master file URL"
git push
```

### 6. Ping Lanny

WhatsApp: "Setup done, Figma file is up, repo's pulled. Ready for the first brief."

---

## Daily workflow

### When a new brief lands

1. `git pull` to get the latest
2. `ls briefs/active/` to see what's open
3. Read the brief end-to-end. If anything's unclear, ask Claude Code first (it has full context). If still unclear after that, WhatsApp Lanny.
4. Work in Figma using your master file
5. Export to PNG / GIF per the brief's spec
6. Drop exports into `briefs/active/<slug>/` (create the folder if needed)
7. `git add briefs/active/<slug>/ && git commit -m "deliver: <slug>" && git push`
8. WhatsApp Lanny: "brief done, pushed"

See [briefs/README.md](briefs/README.md) for the full workflow detail.

### When DESIGN_SOCIAL.md changes

You'll see updates land in `DESIGN_SOCIAL.md` as the system evolves. Three rules:

1. **`git pull` before every brief.** Catches updates.
2. **If a rule conflicts with how you've been working, raise it.** WhatsApp Lanny or open a GitHub issue. We'd rather fix the spec than have you silently work around it.
3. **If a rule seems wrong, propose a change.** Edit `DESIGN_SOCIAL.md`, commit on a branch, open a PR. Lanny reviews + merges.

### Asking Claude Code questions

This is the biggest unlock vs. the old "read a static PDF" workflow. Try things like:

- "What's the active brief?"
- "Summarise the editorial panel spec from DESIGN_SOCIAL.md."
- "What does the inspiration say about padding?"
- "Show me the references for the GIF format."
- "What's the difference between a cheat sheet and a carousel here?"

Claude knows the repo. No need to upload anything or copy-paste spec sections.

---

## What you should NOT do

- **Don't work from memory after Day 1.** Always check the latest spec by re-reading the relevant section or asking Claude. The system evolves.
- **Don't confuse density with paragraph walls.** Copy is welcome when it is
  structured as bullets, rows, labels, and annotated fragments.
- **Don't add glassmorphism or SaaS dashboard effects.** Flat editorial panels,
  rules, color bands, and diagrams are the current direction.
- **Don't improvise the headline grammar.** Infographics begin with `How to` and
  highlight one meaningful keyword using the template's red gradient capsule.
- **Don't introduce extra palette families.** Use the approved neutral, red,
  and blue tokens unless Lanny explicitly approves an exception.
- **Don't shrink type to fit more content.** Extend the canvas vertically when
  the framework needs more space.
- **Don't introduce serif typefaces anywhere.** Sofia Sans + JetBrains Mono only. Lanny called this out specifically.

---

## Open questions you can raise

The current system has a few unresolved edges. If any of these become live decisions during your first brief, flag them:

1. **Infographic max length.** v2.0 allows 1080x2160 when information density
   demands it. Test long canvases on LinkedIn mobile before shipping.
2. **Dark mode option.** The active reference set is light and editorial. Any
   dark variant needs an approved reference before entering the system.
3. **Carousel scope.** v1.0 demotes carousels to "narratively sequential" content only. We don't yet have a production carousel reference. The first one we ship will help calibrate.
4. **Banner rebuild.** Parked. If your first brief is a banner refresh, expect to propose the rebuild yourself based on DESIGN_SOCIAL.md's primitives.

---

## Communication norms (Lanny's preferences)

- **Direct, tight messages.** No filler, no over-explaining. If a brief is ambiguous, ask one specific question, not five vague ones.
- **English** unless otherwise asked.
- **Never use em-dashes (—).** Use a hyphen with spaces ( - ) instead. Applies to all written output - briefs, commit messages, PR descriptions, in-graphic text.
- **Pushback is welcome.** If you disagree with a brief or a rule, say so. Better to align than silently comply.

---

## You're ready

Once Day 1 setup is done, ping Lanny on WhatsApp. He'll either drop the first brief into `briefs/active/` immediately, or schedule it.

Welcome aboard.
