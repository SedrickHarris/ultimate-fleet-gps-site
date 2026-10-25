# Decision 0014: Installer requirements page built

**Date:** October 25, 2026
**Status:** Approved in session
**Decided by:** Stakeholder
**Affects:** `/careers/installer-requirements/`, `src/data/site/careers-requirements-content.ts`, `src/data/site/careers-requirements-images.ts`, `src/components/content/ServicesHero.tsx`, `src/data/site/careers-content.ts`, `src/app/careers/mobile-installation-technician/page.tsx`, `src/data/jobs/mobile-gps-eld-aobrd-installation-technician.ts`, `src/app/sitemap.ts`
**References:** Decisions 0004, 0006, 0009, 0013; `docs/05-keyword-research.md` line 1067; `docs/06-search-intent-map.md` section 16

**Numbering note.** The build brief asked for this file to be numbered 0012. `0012-404-page.md` exists, and 0013 was then assigned to the candidate FAQ fold, so this record is 0014.

## Decision

1. **Requirements page.** `/careers/installer-requirements/` is built as the shared baseline requirements page, indexable, with approved wording reused from `careersHubPageContent` and no new requirements. It adds no tools list, insurance, schedule, certification, or MECP.
2. **Heading.** The "asks" list heading is the neutral "What We Ask of Technicians" (new wording, approved), replacing "What We Ask of Installer Network Technicians" on this page only.
3. **Age recommendation omitted.** The age recommendation in `careersHubPageContent.requirements.notes` stays on the network page and is left out here. It is still flagged for counsel review (decision 0004). No age text appears in metadata, headings, FAQ, schema, or any form on this page.
4. **Placeholder images.** The three 4:3 slots (`req-hero-4x3`, `req-core-4x3`, `req-asks-4x3`) have no `src`. Production shows the decorative fallback. The existing `*-4x3.webp` files are not reused.
5. **Candidate FAQs.** `/careers/faqs/` is not built. The fold into `/careers/` is recorded in decision 0013. This page carries a short requirements FAQ of four approved items and does not link to `/careers/faqs/`.
6. **Keyword fit: UNVERIFIED.** No Keyword Planner CSV exists in `docs/seo/keyword-exports/`, so no volume, competition, or CPC figure was used. The page targets theme-level keywords only: primary "mobile installer requirements"; supporting "telematics installer qualifications", "GPS installer requirements", "ELD installer qualifications", "tools needed for telematics installation", "12-volt technician requirements". The page does not cover tools or 12-volt detail beyond the approved wording, so the last two themes are only partly served. Verify with a CSV before treating the keyword choice as confirmed.
7. **Inbound links.** "See all installer requirements" is added to the "What requirements must applicants meet?" item in `careersPageFaq`, to the requirements section of the network page, and to the Requirements section of the current opening record (the job data shape already supports `links`). `/careers/installer-requirements/` is added to the sitemap. The footer is unchanged.
8. **Accepted duplication risk.** The requirement lists repeat verbatim on this page and the network page. Follow-up: consider shortening the network page's requirements section to a summary plus a link once this page is indexed.

## Cannibalization verdict

This page owns the shared baseline requirements query. `/careers/` keeps the general installer-careers and openings intent, the opening page keeps its own exact requirements and the application, and the network page keeps registration. The page links to all three and carries no form.

## Consequences

- `ServicesHero` `phone` is now optional, with no behavior change for existing callers. This page shows no phone button.
- `docs/page-audit.md` still lists `/careers/installer-requirements/` as Missing and is not updated for this page.
