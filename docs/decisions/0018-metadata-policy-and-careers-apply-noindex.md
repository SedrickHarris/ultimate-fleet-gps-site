# Decision 0018: Metadata policy, and `/careers/apply/` is noindex, follow

**Date:** October 26, 2026
**Status:** Applied
**Decided by:** Project owner (approval in the working session, following the Oct 26 2026 metadata audit)
**Affects:** `src/lib/metadata/build-page-metadata.ts`, `src/lib/metadata/homepage.ts`, `src/app/careers/apply/page.tsx`, `src/app/sitemap.ts`, `src/data/site/*-content.ts` (`metaTitle` and `metaDescription`), `src/data/commercial/coverage.ts`, `src/types/content.ts`, `src/types/service-content.ts`, the Privacy, Terms and Accessibility pages, `docs/07`, `docs/08`, `docs/10`
**References:** `docs/10` sections 5 and 6; `docs/01` section 33; `CLAUDE.md` sections 3.1, 4 and 5; commit `8ca9c58`

## Decision

### `/careers/apply/` is noindex, follow

1. `/careers/apply/` renders `noindex, follow` through `buildPageMetadata` (`noIndex` with `followLinks`).
2. It is removed from `sitemap.ts`. The sitemap lists 32 URLs.
3. It is not disallowed in `robots.ts` or `robots.txt`, so crawlers can fetch the page and see the noindex.
4. Its canonical, title, description, internal links and CTAs do not change.
5. Reason: it is a form step whose intent overlaps `/careers/jobs/`, and an indexed form page can send job-query traffic to a page without the role details. This resolves the "Conditional or noindex" entry in `docs/07`.

### Metadata policy

1. Rendered titles are 60 characters or fewer. Where the layout suffix `| Ultimate Fleet GPS` is applied, the page-specific part is 39 characters or fewer. The homepage and About use `absolute` titles because the suffix is not wanted there (the layout template does not apply to the root page).
2. Titles use `metaTitle ?? h1`. `metaTitle` is optional on the content types and is set where the H1 would make the rendered title too long or too generic.
3. Descriptions are 120-160 characters and unique across indexable pages. This supersedes the "approximately 140 to 165" working guidance in `docs/10` section 6.
4. Open Graph and Twitter titles omit the `| Ultimate Fleet GPS` suffix. The Open Graph description matches the meta description.
5. The homepage description is commercial only. It does not mention contractor technicians, in line with the commercial-led homepage rule.

### Description claims must be supported by approved copy

Phrasing removed from proposed descriptions on Oct 26 2026 because no approved copy supports it:

- Photo documentation is the approved quality claim. "Wiring" and "standards" are not used for quality and safety.
- "Training provided" applies to the current openings only (`docs/01` section 33). It is not used for the Installer Network.
- The process page has no numbered steps, so no description says "each step".
- "Yard", "job site", "where your vehicles park" and "without pulling vehicles off the route" are not used. The approved phrase is "your location" or "customer's location".
- "In-cab camera", "sensors" (telematics page), "their customers" (telematics providers) and "includes a simple checklist" (preparation article) are not used.

### Legal pages

Privacy, Terms and Accessibility stay indexed with plain descriptions. The attorney-review notice stays in the page body only.

**Open stakeholder decision, not decided:** whether to noindex these three pages until counsel completes the review. Until that decision is made, they stay indexed.

## Consequences

- A new indexable page needs a title within the limits above and a unique description.
- The two `/resources/*` articles use short `metaTitle` values (58 and 51 characters rendered).
- `robots.ts` still disallows the three confirmation routes. Those pages carry noindex, but a disallow stops crawlers from seeing it. Revisit separately if confirmation URLs ever appear in search results.
