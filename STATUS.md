# Enablement website build status

Enablement.ch is live. Its Astro project lives in `~/Claude Code/enablement-site/`. The site's production CSS specifies dark mode for every page. The Brain's HTML styleguide is a component preview.

## Where to resume website work

| Task | Current reference |
|---|---|
| Read the latest website handoff | [Website state](https://github.com/enablement-ch/enablement-site/blob/main/WEBSITE_STATE.md) |
| Design a page | [Website design and page plan](site-plan.md) |
| Check colors, type, surfaces and spacing | [Production CSS](https://github.com/enablement-ch/enablement-site/blob/main/src/styles/global.css) |
| Check shared layout, navigation and components | [Layouts](https://github.com/enablement-ch/enablement-site/tree/main/src/layouts) and [components](https://github.com/enablement-ch/enablement-site/tree/main/src/components) |
| Find a route or edit its copy | [Astro pages](https://github.com/enablement-ch/enablement-site/tree/main/src/pages) |
| Update customer results or editorial content | [Content collections](https://github.com/enablement-ch/enablement-site/tree/main/src/content) |

## Build history

The initial prototype introduced the Astro scaffold, typography, component examples, booking flow and customer story layouts. Its launch checklist and theme switcher belonged to the prototype. The shipped website uses dark surfaces throughout, crimson accents and semantic text colors.

## Local preview

From `~/Claude Code/enablement-site/`, run `npm run dev` to inspect the current website and `npm run build` to verify a site change.
