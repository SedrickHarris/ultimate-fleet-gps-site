# Decision 0011: `/request-a-quote/` is superseded by `/contact/`

**Date:** October 25, 2026
**Status:** Applied in the working tree, not committed
**Decided by:** Project owner (instruction in the working session)
**Affects:** `docs/07-site-architecture.md`, `docs/08-url-strategy.md`, `docs/page-audit.md`, `src/app/request-a-quote/`
**References:** Decision 0008 (`/contact/` becomes a quote-first commercial page)

## Context

Decision 0008 made `/contact/` the quote-first commercial page, with `CommercialInquiryForm` as its only form. It superseded docs/07 section 30 and docs/14 section 39 for `/contact/` only and said `/request-a-quote/` "is not changed", which left the status of the planned quote route ambiguous. `docs/page-audit.md` listed it as an outstanding page awaiting a decision.

## Decision

`/request-a-quote/` is superseded by `/contact/`. It is not built, and it is removed from the outstanding-pages backlog.

## Reasoning

The quote-first `/contact/` page already covers quote intake. A separate quote page would be redundant and would duplicate search and conversion intent.

## Redirect verdict: Never live, no redirect added

- `src/app/request-a-quote/` held only an empty `.gitkeep`, added in the scaffold commit `54f4c9b`. No `page.tsx` has ever existed for the route on any branch.
- No file under `src/`, `public/`, or `next.config.ts` has ever contained the string `request-a-quote`. `src/app/sitemap.ts` never listed it, and no nav, footer, CTA, or canonical pointed to it.
- The project has no `public/_redirects`, `_headers`, or Wrangler configuration (`README.md`).
- Deployment state could not be inspected. A static export cannot serve a route that has no page file, so the risk of a live URL is very low. If a deployment is later found where the URL was reachable, add these lines to `public/_redirects`:

```
/request-a-quote /contact/ 301
/request-a-quote/ /contact/ 301
```

## Consequences

- `docs/07` and `docs/08` keep their `/request-a-quote/` rows, marked "Superseded by /contact/ (decision 0011)", so the planning history is preserved.
- `docs/page-audit.md` no longer lists the route as outstanding.
- The empty `src/app/request-a-quote/.gitkeep` is deleted.
- `/contact/` stays the only commercial quote route. A future second quote route would need a distinct intent and a new decision.
- The text of decision 0008 is not edited.
