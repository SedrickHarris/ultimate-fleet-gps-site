# Decision 0016: `/about/` ships as a lean, factual page

**Date:** October 26, 2026
**Status:** Applied in the working tree, not committed
**Decided by:** Project owner (instruction in the working session: "short, factual version is fine for launch")
**Affects:** `src/app/about/page.tsx`, `src/data/site/about-content.ts`, `src/lib/schema/webpage.ts`, `src/app/sitemap.ts`, `src/data/navigation/site-navigation.ts`, `docs/briefs/about-page-brief.md`, `docs/page-audit.md`, `docs/_claims-inventory.md`
**References:** `docs/01-business-source-of-truth.md` sections 4, 4.2, 5.3, 7.2, 8.2, 11.1, 14, 16.1, 17.1, 22, 25; `docs/07-site-architecture.md` section 29; `docs/13-schema-markup-plan.md` section 9

## Decision

`/about/` launches as a short page built only from facts already approved in `docs/01`. It does not wait for leadership, history, values, or proof facts.

## What the page contains

A hero with the approved company description, a "who we are" answer block, the shared approved equipment cards, a "how we work" section, and two separate pathways (commercial first, then installer careers). Content lives in `src/data/site/about-content.ts`, with a source comment for every claim.

## What the page leaves out, and why

| Left out | Reason |
| --- | --- |
| Leadership, founder, owner | "Unknown, do not publish" (`docs/01` section 4) |
| History beyond "in business since 2011" | No approved milestones or origin story |
| Values | No approved values or evidence |
| Statistics, customers, credentials, insurance, reviews | Not approved or deliberately unpublished (`docs/01` sections 16.1 and 22) |
| Phoenix address in the body | About is not an approved address surface (`docs/01` section 5.3). The address stays in the footer |
| Business hours | Time zone unconfirmed (`docs/01` section 5.4). Hours stay in the footer |
| Legal entity name, "LLC" | Public name never carries "LLC" (`docs/01` section 4.2) |
| Shared `TrustStrip` | It carries "Coordinated across sites," a claim flagged for review (claims row 34). The page does not import it |

Each omitted item is a separate section to add when an approved fact arrives. No restructuring is needed.

## Implementation notes

- `webPageSchema` gained an optional `type` argument (default `WebPage`). `/about/` passes `AboutPage`. Every other caller is unchanged.
- The hero reuses the approved decorative photograph from `/our-process/` (`processHeroBackground`). No new image, no placeholder. Switching to a flat navy hero or a new About photo is a one-file change.
- `/about/` is in `sitemap.ts` and is the first item in the footer Company column. It is not added to the primary navigation, which stays on conversion routes.
- The homepage is unchanged.

## Keyword evidence

None. No Keyword Planner export exists, so keyword fit is **Unverified**. The page is a brand and entity page and is not targeted at a commercial keyword. Revisit after an export.

## Consequences

- `docs/01` section 25 still says final publication of its wording requires company review. This decision records the project owner's approval to publish the lean page, and it does not extend any claim beyond its approved scope.
- Leadership, history, values, and proof sections need new approved facts and an update to this decision or a new one.
