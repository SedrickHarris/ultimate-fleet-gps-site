# Decision 0013: Candidate FAQs are folded into `/careers/`, and `/careers/faqs/` is superseded

**Date:** October 25, 2026
**Status:** Applied in the working tree, not committed
**Decided by:** Project owner (instruction in the working session)
**Affects:** `docs/07-site-architecture.md`, `docs/08-url-strategy.md`, `docs/page-audit.md`, `src/app/careers/faqs/.gitkeep`
**References:** Decisions 0004, 0009, 0011; `docs/06-search-intent-map.md` section 20; `docs/09-content-strategy.md` section 14; `docs/13-schema-markup-plan.md` section 35

## Decision

Candidate FAQs stay on `/careers/`, in the FAQ section `#careers-faq`. `/careers/faqs/` is superseded. It is not built and not backlogged.

## Reasoning

- Nine of the ten questions planned in `docs/06` section 20 are already answered on `/careers/` (12 questions), the Installer Network page (14), and the opening page (8). Most are answered on two or three surfaces.
- A standalone page would split intent already held by `/careers/` and the opening page. It would add a fourth copy of the pay, assignment, and availability wording to keep in sync. It would carry no schema benefit, because `FAQPage` is not used (decisions 0004 and 0009, `docs/13` section 35).
- The two real gaps are "what happens after I apply" and "how can I update my information". Both wait on approved process facts. They are answered on `/careers/how-assignments-work/` or added to the `/careers/` FAQ when those facts are approved. No answer is drafted now.
- No keyword volume data exists in the repo to show a distinct query set (`docs/page-audit.md` section 6).

## Redirect verdict: Never live, no redirect added

- Only an empty `src/app/careers/faqs/.gitkeep` ever existed. No `page.tsx` was ever added for the route.
- No file under `src/`, `public/`, or `next.config.ts` references `careers/faqs`, so there was no inbound link, and `src/app/sitemap.ts` never listed it.
- The project has no `public/_redirects`.
- If a deployment is later found where the URL was reachable, add to `public/_redirects`:

```
/careers/faqs /careers/#careers-faq 301
/careers/faqs/ /careers/#careers-faq 301
```

Some hosts do not support a fragment in a redirect target. Verify on Cloudflare Pages before adding. If it is not supported, redirect to `/careers/` instead.

## Consequences

- `/careers/installer-requirements/` must not carry its own FAQ block that repeats `/careers/` or Installer Network questions. If it needs questions, limit them to 3-5 requirement-specific ones using approved wording, or link to `/careers/#careers-faq`. It must not link to `/careers/faqs/`. When it ships, the "What requirements must applicants meet?" answer on `/careers/` should link to it.
- Planning docs keep their `/careers/faqs/` rows, marked "Superseded by /careers/#careers-faq (decision 0013)", so history is preserved. `docs/05`, `docs/06`, and `docs/20` mention the route as planning history and are left unchanged.
- The unused `careersHubContent.faq` list is out of scope and is left as is.
- The empty `src/app/careers/faqs/.gitkeep` is deleted.
- If a future change shows demand for a standalone candidate FAQ, it needs a new decision with keyword evidence.
