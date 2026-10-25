# Decision 0015: `/careers/mobile-installers/` is retired, and stale `.gitkeep` placeholders are removed

**Date:** October 25, 2026
**Status:** Applied in the working tree, not committed
**Decided by:** Project owner (approval in the working session)
**Affects:** `docs/07-site-architecture.md`, `docs/08-url-strategy.md`, `docs/page-audit.md`, 13 `.gitkeep` files under `src/app/`
**References:** Decisions 0006, 0011, 0013; `docs/page-audit.md` sections 3.5, 5, and 7

## Decision

1. `/careers/mobile-installers/` is superseded. It is not built and not backlogged. Role exploration is covered by `/careers/`, the active opening page (`/careers/mobile-gps-eld-aobrd-installation-technician/`), and `/careers/mobile-installation-technician/`.
2. Stale `.gitkeep` placeholders under `src/app/` are removed where the route is superseded, built at a different slug, deferred to Phase 2, not needed now, or redundant beside a real page.
3. `docs/07` and `docs/08` are updated to the built slugs: `/coverage/` (was `/service-areas/`), `/faq/` (was `/faqs/`), and `/careers/mobile-installation-technician/` (was `/careers/join-our-installer-network/`).

## Redirect verdict: Never live, no redirect added

- Only an empty `src/app/careers/mobile-installers/.gitkeep` ever existed, added in the scaffold commit `54f4c9b`. No `page.tsx` has ever existed for the route in the repository history.
- No file under `src/`, `public/`, or `next.config.ts` references `mobile-installers`, and `src/app/sitemap.ts` never listed it.
- The project has no `public/_redirects`.
- If a deployment is later found where the URL was reachable, add a 301 from `/careers/mobile-installers/` to `/careers/mobile-installation-technician/`.

## `.gitkeep` cleanup

Removed (13 files):

| Path | Reason |
| --- | --- |
| `src/app/careers/mobile-installers/` | Superseded (this decision) |
| `src/app/careers/join-our-installer-network/` | Built at `/careers/mobile-installation-technician/` (decision 0006) |
| `src/app/faqs/` | Built at `/faq/` |
| `src/app/service-areas/` | Built at `/coverage/` |
| `src/app/technology/` | Phase 2, conditional, no evidence of readiness |
| `src/app/careers/jobs/[jobSlug]/` | Not needed until a second opening exists (decision 0006 item 1) |
| `src/app/careers/resources/[articleSlug]/` | Static export cannot hold an empty dynamic route. The first article and the route land together |
| `src/app/services/[serviceSlug]/` | Static service routes exist |
| `src/app/thank-you/.gitkeep` | Built route is `/thank-you/service-request/` |
| `src/app/careers/apply/.gitkeep` | Redundant, a real `page.tsx` exists |
| `src/app/careers/application-received/.gitkeep` | Redundant, a real `page.tsx` exists |
| `src/app/careers/installer-network-received/.gitkeep` | Redundant, a real `page.tsx` exists |
| `src/app/contact/.gitkeep` | Redundant, a real `page.tsx` exists |

Kept (3 files), because each marks a pending launch or conditional page:

- `src/app/about/` - launch page, waiting on approved leadership, history, and entity facts
- `src/app/careers/how-assignments-work/` - launch page, waiting on approved assignment, schedule, and pay process facts
- `src/app/careers/installer-training/` - conditional, waiting on a documented training program

The 32 `.gitkeep` files outside `src/app/` are out of scope and unchanged.

## Consequences

- Planning docs `docs/05` and `docs/06` still mention `/careers/mobile-installers/` as planning history and are left unchanged, matching the approach in decision 0013.
- `docs/page-audit.md` is refreshed to match this decision.
- Nothing is committed or pushed. Per `CLAUDE.md` section 10, that needs explicit authorization.
