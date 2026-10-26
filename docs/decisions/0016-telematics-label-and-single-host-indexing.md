# Decision 0016: "Fleet Telematics Installation" is the page name and link label, and the live domain is the only indexable host

**Date:** October 26, 2026
**Status:** Applied
**Decided by:** Project owner (approval in the working session)
**Affects:** `src/data/site/service-pages-content.ts`, `src/data/site/services-hub-content.ts`, `src/components/content/WhatWeInstallGrid.tsx`, `src/app/layout.tsx`, `src/app/sitemap.ts`, the `/accessibility/`, `/privacy-policy/` and `/terms/` pages, `scripts/validation/check-build-output.mjs`, `docs/17`, `docs/26`
**References:** `docs/01` sections 9.1 and 9.2; `docs/_claims-inventory.md` row 6 and "Four Sprint 1 service pages"; decision 0005 point 4; `docs/08` "lastmod"; `docs/10` section on sitemap accuracy

## Decision

### Telematics label

1. "Fleet management equipment" is the confirmed umbrella category (`docs/01` section 9.1, stakeholder confirmed 2026-09-10). It stays the value in `business.serviceTypes`, the `service-images.ts` keys, the quote-form equipment dropdown, and category wording in body copy.
2. "Fleet Telematics Installation" is the page name at `/services/fleet-telematics-installation/` and the label for every link to it. It matches the H1, the title, the breadcrumb, the JSON-LD `name`, the navigation, and the decision 0005 `serviceType`. The slug does not change.
3. The "What We Install" card for the umbrella category keeps its category heading. Its link reads "Learn more about fleet telematics installation", from `installCardLinkLabels` in `service-pages-content.ts`. The other cards keep their category name in the link.
4. The services hub link "Explore telematics installation" becomes "Explore fleet telematics installation".

`docs/10` section 26 and `docs/13` section 13 both list "Home > Services > Fleet Telematics Installation" as a breadcrumb example. They agree with this decision and are not edited.

### Single indexable host

1. The root layout sets `metadataBase` from `SITE_URL`, so a relative metadata URL always resolves to `https://ultimatefleetgps.net`. The three legal pages move onto `buildPageMetadata`, which gives them an absolute canonical, Open Graph and Twitter tags, and a robots meta.
2. `sitemap.ts` omits `lastmod`. It will be added only from real content-change dates, never the build time and never git-derived dates.
3. The production pages.dev hostname gets a Cloudflare Bulk Redirect to the apex at launch, and keeps its `noindex` rule in `public/_headers` permanently as a fallback. The redirect takes precedence while active. A zone Redirect Rule matching a pages.dev host was not confirmed in Cloudflare's documentation. `docs/17` section 17 and `docs/26` step 3 are updated.
4. `npm run build` runs `scripts/validation/check-build-output.mjs` as `postbuild`. It fails on a relative or off-domain canonical, or on "pages.dev" in `out/` outside `_headers`.

## Consequences

- The `sitemap.ts` route list is manual. A new route, including `/about/`, is added by hand.
- The comment at the top of `public/_headers` still says to remove the production pages.dev rule at launch. It is not changed by this decision and should be updated to match.
