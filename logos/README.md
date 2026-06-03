# Tool Logos

Canonical location for all GTM tool logos used inside Enablement's social-media bento tiles.

Whenever a brief references a tool (Clay, Apollo, HubSpot, LinkedIn, etc.), the designer pulls the logo from this folder. If a logo is missing, flag it in the brief's `## Open Questions` section - never substitute, never invent.

## Naming convention

`<tool-name>-<variant>.<ext>`

- **Tool name:** lowercase, hyphens between words. `hubspot`, `linkedin`, `google-ads`, `n8n`, `clay`.
- **Variant** (optional, omit if there's only one form):
  - `-icon` - icon-only (no wordmark). Used in tight bento spaces.
  - `-full` - full logo (icon + wordmark). Used when the logo can breathe.
  - `-wordmark` - text-only wordmark.
  - `-dark` / `-light` - dark-canvas / light-canvas variant for the same tool.
  - `-full-black` / `-full-white` - explicit color variants when both exist.
- **Extension:** prefer SVG when available. PNG with transparent background is fine. JPEG and WebP only when no better source exists.

Examples:
- `clay-icon.png` (icon for tight bento)
- `clay-full-black.png` (full logo on light canvas)
- `clay-full-white.png` (full logo on dark canvas)
- `hubspot-icon.svg` (preferred: SVG)
- `linkedin.png` (no variant suffix - there's only one)

## Current inventory

Run `ls ~/enablement-design-system/logos/ | sort` to see the current list. Coverage is broad but not complete - missing logos should be flagged in briefs.

**Known gaps as of v1:**
- Clearbit
- Apple / Microsoft / Outlook brand marks (referenced in posts about email delivery)

## How to add a new logo

1. **Find the official source.** Brand kit on the tool's website is best. Avoid screenshotted or AI-generated logos.
2. **Prefer SVG.** If only PNG is available, ensure it has a transparent background.
3. **Save into this folder** with the naming convention above.
4. **Commit** with message `assets(logos): add <tool>` and push.

If you have a batch of new logos in Drive that need migrating, drop them in `Shared drives/01_Marketing/05_Linkedin: Content/Logos for linkedin visuals/` and ask Claude to migrate + normalize.

## Working folder (raw / unprocessed)

Lanny dumps incoming logos in Drive: [Logos for linkedin visuals](https://drive.google.com/drive/folders/18HVGXFccVhVpJCMV6gIC963O1EgFXdpr). That folder is the **staging area** - this `logos/` folder is the **canonical source** that briefs reference. Sync from Drive → repo periodically (manual `cp` + rename for now).

## Anti-patterns

- Do NOT substitute a different tool's logo when one is missing. Flag it.
- Do NOT save raw screenshots as logos.
- Do NOT save logos with white backgrounds when transparent is available.
- Do NOT create new variants ("hubspot-orange.png") if an existing variant works.