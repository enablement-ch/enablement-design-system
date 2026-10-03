# Enablement.ch - Website design and page plan

Updated 2026-10-03 from the current `enablement-site` Astro pages. This document records the shipped site and guides new pages. The live implementation in `src/styles/global.css`, page components, and content collections is the technical source for exact tokens and copy. Use `index.html` as a styleguide reference only where it agrees with the current dark site.

## Site architecture

| Route | Purpose | Page pattern |
|---|---|---|
| `/` | Explain the Allbound system and direct visitors to a service or GTM session | Home |
| `/linkedin-thoughtleadership` | Founder and executive content service | Service |
| `/signal-based-outbound` | Outbound service | Service |
| `/ai-revenue-operations` | Data, workflow, and CRM service | Service |
| `/customer-results` | Evidence index | Customer results |
| `/customer-results/[slug]` | Individual customer story | Customer result detail |
| `/resources/gtm-self-audit` | GTM Self Audit | Interactive diagnostic tool |
| `/resources/ai-sales-coach` | AI Sales Coach | Product resource |
| `/book` | GTM session booking | Utility |
| `/meeting-booked` | Prepare for a booked call | Utility |
| `/li-playbook-typ` | Follow-up after a LinkedIn playbook request | Utility |
| `/gtc`, `/privacy` | Legal text | Reading page |

`/case-studies`, `/legacy-case-studies`, preview routes, and variant routes are legacy or working surfaces. Use `/customer-results` for new public links. The former `/resources/gtm-audit` route redirects to the GTM Self Audit. The navigation has Services and Tools dropdowns, a Customer Results link, and a Book a GTM session button. The navigation and homepage booking actions go directly to the HubSpot meeting URL. The footer has the wordmark, Customer Results and booking links, founders, Clay Enterprise Partner badge, and legal links.

## Website visual language

- Dark theme only. Base canvas `#0F1217`; surface `#181C23`; raised surface `#232830`; heading `#E5E9F0`; body `#A0A8B5`; muted `#6B7280`; accent `#E11E48`. Use the named CSS tokens for exact values.
- Sofia Sans carries display and body type. JetBrains Mono carries eyebrows, stage IDs, technical labels, and small system details. Use one red italic phrase to emphasize a headline's turn. Keep sentence case for normal headings.
- Use a restrained page frame: vertical hairlines around the content container and horizontal section boundaries. The content container is 1120px maximum, with wider spacing on desktop.
- Section spacing is 72px on the newer home and service pages, narrowing to 56px on mobile. Older shared sections use the global spacing tokens. Keep the gap between eyebrow, heading, and lead compact.
- Apply textures selectively: a faint grid for selected heroes, a slow red/blue glow for a system transition, and a static grid with corner wash for quieter sections. Leave proof galleries, video frames, cards, and long reading surfaces plain. Respect reduced-motion settings.
- Use flat dark cards with thin borders and modest radius. Red top rules mark problems or key steps. Green indicates qualified outcomes and feedback in workflow diagrams. Do not make every card glow or cast a shadow.
- Use Lucide icons at 1.5px stroke when an icon is needed. Diagrams can use labeled boxes and directional arrows. Give each connector a clear reading path and label what changes at each stage.
- Pair claims with visible evidence: customer name, quote, linked story, or exact result. State whether a result came from the specific service or a broader GTM engagement. Do not imply that reach or engagement alone is pipeline.
- Primary actions should be explicit: schedule a meeting, book a GTM session, explore a service, or read the customer story. Use the same red button treatment for primary actions and restrained text links for secondary paths.
- On mobile, collapse multi-column cards and diagrams into a single readable column. Keep stage order, labels, arrows, and proof intact. Use accessible focus states and keyboard-operable dropdowns, accordions, video controls, and screenshot lightboxes.

## Page patterns

### Home `/`

Sequence: centered VSL hero with rotating Allbound and service headlines; client-logo marquee; three video testimonials; three disconnected-motion problem cards; complete Allbound system diagram; three connected service rows; how-we-work section with founder involvement; FAQ; final booking action; footer.

The Allbound diagram has three entry motions (outbound, content, ads), then a narrowing capture and qualify funnel. It opens into route, engage, and close, followed by a separate learn stage. AI Revenue Operations is the operating layer; signals, conversations, and deals feed back into targeting, content, and outreach. This is a system architecture, not a required channel bundle for every client. The service rows link to the three service pages and carry narrowly attributed proof.

The first headline and lead should identify the buyer and the connected offer quickly. The VSL supplies depth. Use a direct Book a GTM session button below the video, below the Allbound diagram, below the founder involvement card, and in the final CTA. Each button links to `https://revenue.enablement.ch/meetings/l-heiz/firstmeeting`. The homepage booking actions do not ask for an email before opening the calendar. The page lets visitors choose a service or move to a GTM session after seeing the system and proof.

### Service pages

Shared sequence: buyer-focused hero with fit statement and booking action; concrete problem cards; process or system visual; specific use cases or capabilities; sales handoff or practical example; linked customer proof; engagement model; concise FAQ; final booking action. Keep the order flexible when a page needs a different proof format.

- **LinkedIn thought leadership:** hero and fit; three buyer problems; the point-of-view-to-pipeline system; real attention examples; real conversation examples; linked customer proof; engagement and guarantee; FAQ; final CTA. Preserve the real screenshot galleries for attention and conversations. Make images enlargeable and label what each example proves. The founder brings perspective; the team builds and operates the content system. Use the page-specific booking label "I want to fix my LinkedIn system" in the hero, beneath each screenshot gallery's sticky text block (beneath the text on mobile), after customer proof, in the engagement section, and in the final CTA. These buttons open the same HubSpot meeting calendar.
- **Signal-based outbound:** hero; four buyer problems; four process steps from market focus to sales conversation; three campaign plays; sales handoff; linked customer results; build-and-enable or operated engagement; FAQ; final CTA. Explain market coverage, signal-triggered outreach, and named-account ABM. Give sales the reply, owner, account context, and reason to act. Use the page-specific booking label "I want to fix my outbound system" in the hero, after the three plays in "Different markets need different plays," in the engagement section, and in the final CTA. Keep customer results focused on the linked stories, without an additional booking button there.
- **AI Revenue Operations:** hero; tool and capacity problems; connected signal-to-revenue system; capabilities; practical lead example; linked customer proof; ongoing RevOps engagement; FAQ; final CTA. Explain lead sourcing, clean data, scoring, routing, automation, CRM, and reporting through an example with no lost context. Use "I want to fix my revenue system" for page-specific booking buttons, including one below the connected system and one in the left text block of "What changes in practice."

Service diagrams are not decorative. They need stage labels, inputs, outputs, and a visible handoff to sales or CRM. Proof cards should link to the source story. FAQ answers should resolve implementation and fit questions rather than repeat the hero.

### Customer results

The index opens with a compact hero, then the same linked logo marquee used on the home page, then a grid of live customer stories. Individual stories use an outcome headline; video or a deliberate placeholder; a proof band with available metrics and customer quote; challenge, solution, results, and outcome sections when the data supports them; optional metadata; and a final GTM-session action. Do not force three metrics or a fixed headline formula when the evidence differs. Keep customer attribution and scope precise.

### Tools

Tools are editorial and diagnosis-led. Use a compact hero, clear problem statement, structured diagnostic or comparison, process or product explanation, proof, authority, and one clear next step. The AI Sales Coach page uses a product-specific contrast, scorecard, installation steps, frameworks, and CTA. Tool layouts may differ from service pages while using the same typography, dark palette, frame, and evidence rules.

The GTM Self Audit is public and linked from the Tools menu. It asks eight specific questions, one at a time, with Yes / Partly / No answers and a visible Yes standard. Weighted answers produce an immediate directional score and two gap cards with prominent headings, a challenging question, the commercial consequence, and a first action. A direct Allbound Audit booking action follows the gaps. Do not link to customer stories or outside research from the result cards; visitors should focus on the diagnosis and booking. The same page explains the free 30-minute call and written diagnosis within 24 hours, followed by customer proof and a final booking action. It does not gate the result. The hero names the commercial pain: where the GTM system loses revenue.

### Booking, confirmation, and legal

`/book` puts the meeting action first in a focused single column. `/meeting-booked` helps visitors prepare for the call, while `/li-playbook-typ` completes the playbook request flow. Legal pages use readable prose and minimal decoration. Do not apply sales-page section density to long legal text.

## Shared components and upkeep

`Nav`, `Footer`, `Hero`, `MarqueeLogoWall`, `VideoTestimonials`, `FAQ`, `FinalCTA`, the case-study components, and the workflow visuals are the reusable building blocks. Add new public routes to the navigation only when they are ready. Keep client names, logos, proof, and destinations aligned across the homepage, service pages, marquee, and customer-results collection.

When a page pattern changes, update this plan and the relevant social or document guide only if that format is affected. A website screenshot prepared for LinkedIn follows the website visual language; a native LinkedIn infographic follows `DESIGN_SOCIAL.md`.
