# Design Briefs

> Every social design task is a markdown brief, committed to this folder.
> No tickets, no DMs, no Drive links. The brief is a file. The file is the contract.

## Folder convention

```
briefs/
├── active/       ← briefs currently in flight (designer pulls from here)
├── archive/      ← briefs shipped + exports delivered (history)
└── README.md     ← this file
```

A brief moves from `active/` → `archive/` when the final assets are delivered and Lanny has approved.

## File naming

```
<YYYY-MM-DD>_<post-slug>_<format>.md
```

Examples:
- `2026-05-23_cold-email-followup_cheatsheet.md`
- `2026-05-25_what-happens-after-yes_gif.md`
- `2026-06-01_gtm-orchestration-v2_carousel.md`

The slug is kebab-case, max 6 words. The format is one of: `cheatsheet`, `gif`, `carousel`, `single`, `banner`.

## Brief structure

Every brief is a copy of [`../templates/brief-template.md`](../templates/brief-template.md) filled out. Sections that aren't relevant are deleted, not left blank.

## Exports folder convention

When the designer is ready to deliver exports, they create a sibling folder with the same slug:

```
briefs/active/2026-05-23_cold-email-followup_cheatsheet.md
briefs/active/2026-05-23_cold-email-followup_cheatsheet/
  ├── cold-email-followup_cheatsheet.png      ← final export
  ├── cold-email-followup_cheatsheet_2x.png   ← optional retina
  └── source.fig                              ← optional Figma export if relevant
```

Once Lanny approves, both the `.md` file and the folder move to `archive/`.

## How the designer uses this

1. `git pull` to get the latest briefs
2. `ls briefs/active/` to see what's open
3. Read the brief end-to-end (or ask Claude Code: "summarise the active brief")
4. Work in Figma using the master file from [`../templates/figma-file-spec.md`](../templates/figma-file-spec.md)
5. Drop exports into the sibling folder
6. `git commit -m "deliver: <slug>"` and `git push`
7. Ping Lanny on WhatsApp ("brief done, pushed")
8. Lanny reviews, approves, moves to archive

## How Lanny creates a brief

1. Either write it manually using `templates/brief-template.md` as a starting point, OR
2. Ask Claude (in any project) to draft a brief from a LinkedIn post text. Save the result to `briefs/active/<slug>.md`.
3. `git commit -m "brief: <slug>"` and `git push`
4. Ping the designer on WhatsApp ("new brief, pulled")

## Why files instead of a tracker

- Briefs are version-controlled. Every change is auditable.
- Designer reads briefs in the same place they read DESIGN_SOCIAL.md and inspiration.
- Claude Code can answer questions about the active brief without needing API access to a ticketing tool.
- No tool lock-in. Markdown survives every platform.
