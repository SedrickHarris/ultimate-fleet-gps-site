# Page Audit - Ultimate Fleet GPS Site

**Date:** 2026-10-25
**Type:** Read-only audit. No site pages, components, data files, or configs were changed. This file is the only file written.
**Method:** Static inspection of `src/app/`, `src/data/`, `src/components/`, `docs/`, `prompts/`, `seo-automation/`, `README.md`, `CLAUDE.md`, and `package.json`. Nothing was executed, and no build, link validator, or `scan-routes` run was performed (see section 7).

## 1. Summary

| Measure | Count | Evidence |
| --- | --- | --- |
| `page.tsx` files in `src/app/` | 32 (31 static, 1 dynamic) | `src/app/**/page.tsx` |
| Built routes that resolve | 34 (30 static + 4 article routes from `generateStaticParams` over `resourceArticles`) | `src/data/site/resources-content.ts` has 4 slugs |
| Built route that returns 404 by design | 1 (`/case-studies/`) | `src/app/case-studies/page.tsx`, `src/data/site/case-studies.ts` (empty registry, `notFound()`) |
| Noindexed utility routes | 3 | `noIndex: true` in `application-received`, `installer-network-received`, `thank-you/service-request` |
| Sitemap URLs | 31 | `src/app/sitemap.ts` (matches the 34 live routes minus the 3 noindexed) |
| Outstanding entries with repo evidence (section 3) | 20: 2 core or utility, 5 recruitment, 3 commercial or supporting, 3 conditional hubs, 5 superseded or scope decisions, 2 blocked by missing proof | Section 3 |
| Of those, status Missing | 9 (About, 404, requirements, assignments, candidate FAQs, career resources, remaining commercial articles, technology hub, solutions hub) | Section 3 |
| Of those, superseded, slug divergence, or not needed now | 5 | Section 3.5 |
| Broken inbound internal links (literal hrefs in `src/`) | 0 found | Section 4 |
| Stub or thin pages | 1 route family (4 resource articles), plus 1 empty-by-design route | Section 5 |
| Orphan pages (built, no inbound link) | 0 unintended. `/case-studies/` is unlinked by design. | Section 5 |
| Stale `.gitkeep` placeholder folders under `src/app/` | 19 | `find src/app -name .gitkeep` |
| Keyword research outputs in repo | 0 (no `opportunities.json`, `keyword-clusters.json`, `route-manifest.json`, `selected-opportunity.json`, `page-brief.json`, or keyword CSVs; no `docs/seo/` folder) | Section 6 |

Headline findings:

1. The planned launch inventory in `docs/07-site-architecture.md` section 6 and `docs/08-url-strategy.md` is older than the build. The build diverged on purpose in several places (`/coverage/` instead of `/service-areas/`, `/faq/` instead of `/faqs/`, `/contact/` quote-first, network page kept at its original slug). Those are recorded in decisions 0006, 0007, 0008, and 0009. They are not gaps, but the planning docs and the 19 `.gitkeep` folders still describe the old routes.
2. The only unambiguous missing core and utility pages are `/about/` and a site-wide 404 (`not-found.tsx`).
3. The largest real content gap is the recruitment support cluster under `/careers/` (requirements, how assignments work, candidate FAQs) and the unwritten resource articles.
4. Every page after those depends on stakeholder approvals or keyword work that does not exist in the repo yet.

## 2. Existing page inventory

Type key: core, service, industry, hub, recruitment, commercial, resource, legal, utility.

| Route | File | Type | Status |
| --- | --- | --- | --- |
| `/` | `src/app/page.tsx` | core (home) | Built, in sitemap, in nav (logo) |
| `/services/` | `src/app/services/page.tsx` | hub | Built, nav and footer |
| `/services/fleet-telematics-installation/` | `src/app/services/fleet-telematics-installation/page.tsx` | service | Built (template driven, `ServicePageTemplate`) |
| `/services/gps-tracking-installation/` | `src/app/services/gps-tracking-installation/page.tsx` | service | Built |
| `/services/eld-installation/` | `src/app/services/eld-installation/page.tsx` | service | Built |
| `/services/dashcam-camera-installation/` | `src/app/services/dashcam-camera-installation/page.tsx` | service | Built |
| `/services/fleet-rollouts/` | `src/app/services/fleet-rollouts/page.tsx` | service | Built |
| `/industries/` | `src/app/industries/page.tsx` | hub | Built, nav and footer |
| `/industries/commercial-fleets/` | `src/app/industries/commercial-fleets/page.tsx` | industry | Built |
| `/industries/construction-heavy-equipment/` | `src/app/industries/construction-heavy-equipment/page.tsx` | industry | Built |
| `/industries/logistics-delivery-fleets/` | `src/app/industries/logistics-delivery-fleets/page.tsx` | industry | Built |
| `/industries/field-service-fleets/` | `src/app/industries/field-service-fleets/page.tsx` | industry | Built |
| `/industries/telematics-technology-providers/` | `src/app/industries/telematics-technology-providers/page.tsx` | industry | Built |
| `/coverage/` | `src/app/coverage/page.tsx` | hub (coverage) | Built, nav and footer. Takes the place of the planned `/service-areas/` hub (decision 0007) |
| `/our-process/` | `src/app/our-process/page.tsx` | core | Built, footer |
| `/quality-safety/` | `src/app/quality-safety/page.tsx` | core | Built, footer |
| `/faq/` | `src/app/faq/page.tsx` | core (FAQ) | Built, footer. Planned slug was `/faqs/` |
| `/resources/` | `src/app/resources/page.tsx` | hub | Built, footer |
| `/resources/planning-a-fleet-installation-rollout/` | `src/app/resources/[slug]/page.tsx` | resource | Built, thin (section 5) |
| `/resources/reducing-installation-downtime/` | same | resource | Built, thin |
| `/resources/eld-installation-planning-checklist/` | same | resource | Built, thin |
| `/resources/preparing-your-fleet-for-gps-tracking-installation/` | same | resource | Built, thin |
| `/contact/` | `src/app/contact/page.tsx` | core (quote-first, decision 0008) | Built, nav and header CTA |
| `/careers/` | `src/app/careers/page.tsx` | recruitment hub | Built, nav and footer |
| `/careers/jobs/` | `src/app/careers/jobs/page.tsx` | recruitment | Built, footer and header utility bar |
| `/careers/mobile-gps-eld-aobrd-installation-technician/` | `src/app/careers/mobile-gps-eld-aobrd-installation-technician/page.tsx` | recruitment (active job, only `JobPosting` page) | Built, in sitemap via `activeJobs` |
| `/careers/apply/` | `src/app/careers/apply/page.tsx` | recruitment | Built, footer |
| `/careers/mobile-installation-technician/` | `src/app/careers/mobile-installation-technician/page.tsx` | recruitment (Installer Network) | Built, footer. Planned slug was `/careers/join-our-installer-network/` |
| `/careers/application-received/` | `src/app/careers/application-received/page.tsx` | utility, noindex | Built, excluded from sitemap, disallowed in `robots.ts` |
| `/careers/installer-network-received/` | `src/app/careers/installer-network-received/page.tsx` | utility, noindex | Built, excluded from sitemap, disallowed in `robots.ts` |
| `/thank-you/service-request/` | `src/app/thank-you/service-request/page.tsx` | utility, noindex | Built. Target of `THANK_YOU_ROUTE` in `src/components/forms/CommercialInquiryForm.tsx`. Not in `robots.ts` disallow list by exact path, but covered by `/thank-you/` prefix |
| `/privacy-policy/` | `src/app/privacy-policy/page.tsx` | legal | Built, footer |
| `/terms/` | `src/app/terms/page.tsx` | legal | Built, footer |
| `/accessibility/` | `src/app/accessibility/page.tsx` | legal | Built, footer |
| `/case-studies/` | `src/app/case-studies/page.tsx` | proof hub | Calls `notFound()` while `caseStudies` is empty. Excluded from sitemap and nav by design |
| `/sitemap.xml`, `/robots.txt` | `src/app/sitemap.ts`, `src/app/robots.ts` | technical | Built |

## 3. Outstanding pages

Priority rule used: High = linked from nav or footer, or a core conversion or commercial page. Medium = supports a pillar, or has a documented keyword or content-plan basis. Low = nice to have, conditional, or blocked.

Workflow for every row: the build starts with `/seo-automation-pipeline`, with its output folded into Prompt 01 (Keyword Strategy). Prompt 01 is not run standalone. No pipeline output exists in the repo for any row (section 6). Mode and prompt assignments below come from `prompts/prompt-master-status.md` and the prompt file names in `prompts/`. The `site-os-page-build-router` skill is not in the repo, so mode and output depth are **Unverified** and must be set when that router is applied.

### 3.1 Core and utility

| Priority | Page | Slug | Type | Status | Evidence | Dependencies | Workflow |
| --- | --- | --- | --- | --- | --- | --- | --- |
| High | About | `/about/` | core | Missing | `src/app/about/.gitkeep` only. Registry row in `docs/07-site-architecture.md` (priority Launch) and section 29. `docs/08-url-strategy.md` lines 531 and 1346. `docs/13-schema-markup-plan.md` line 334 names `AboutPage`. Footer comment in `src/data/navigation/site-navigation.ts` says "There is no About route" | `docs/07` section 29 states prerequisites: company description, entity structure, leadership, history, and claims need approval. Leadership and history are not approved facts in the repo (**Unverified**) | Pipeline first, then individual-page build prompts (`prompts/individual-homepage-research-prompt.md` and `prompts/conversion-page-research-prompt.md` are the closest fits) |
| High | 404 page | not applicable (`src/app/not-found.tsx`) | utility | Missing | No `not-found.tsx` under `src/app/` (listing of `src/`). Required by `docs/26-launch-checklist.md` lines 134 and 297 and `docs/25-quality-assurance-checklist.md` line 393. `docs/16-technical-architecture.md` line 408 lists the file | Must link to Careers and Contact per `docs/26` line 134. No keyword work needed | Not a search page. Pipeline start still applies per the standing rule, but expect it to confirm "no keyword target". Build with the Core Mode build prompt (Prompt 06) |

### 3.2 Recruitment support (Careers)

Recruitment is documented as the primary funnel (`CLAUDE.md` section 4, `docs/28-recruitment-strategy.md`). These pages are planned as Launch in `docs/07` and `docs/08` and have empty `.gitkeep` folders.

| Priority | Page | Slug | Type | Status | Evidence | Dependencies | Workflow |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Medium | Installer Requirements | `/careers/installer-requirements/` | recruitment | Missing | `src/app/careers/installer-requirements/.gitkeep`. `docs/07` registry (Launch). `docs/08` line 262. Requirements content already exists in part on the network page (`src/app/careers/mobile-installation-technician/page.tsx` line 438, "Stakeholder-approved requirements", decisions 0004 and 0009) | Reuse the approved requirement wording, do not add new requirements. Decide first whether a standalone page duplicates the network page (search intent defense, `prompts/16-search-intent-defense-prompt.md`) | Pipeline, then recruitment page prompts. `docs/05-keyword-research.md` recruitment clusters apply |
| Medium | How Assignments Work | `/careers/how-assignments-work/` | recruitment | Missing | `.gitkeep`. `docs/07` registry (Launch). `docs/08` line 263 | Assignment, schedule, and pay facts are unconfirmed beyond `business.recruitment` and the no-guarantee rules (`CLAUDE.md` section 4). Needs stakeholder-approved process facts (**Unverified**) | Pipeline, then recruitment page prompts |
| Medium | Candidate FAQs | `/careers/faqs/` | recruitment | Missing | `.gitkeep`. `docs/07` registry (Launch). `docs/08` line 266. FAQ content already sits on `/careers/` (`careersPageFaq` in `src/data/site/careers-content.ts`) and the network page | Needs approved answers. Risk of duplicating the FAQ blocks already on `/careers/`. Check intent overlap before building | `prompts/aeo-faq-hub-prompt.md` after the pipeline |
| Low | Installer Training | `/careers/installer-training/` | recruitment | Unverified | `.gitkeep`. `docs/07` registry marks it Conditional (index only when a program exists). `CLAUDE.md` section 4 approves "training being provided" for the current openings, never as a guarantee. `docs/09-content-strategy.md` line 696 cautions against a training page without verification | A verified training program description. None is in the repo | Do not start until the program is documented |
| Medium | Career resources hub and articles | `/careers/resources/` and `/careers/resources/[article-slug]/` | recruitment resource | Missing | `src/app/careers/resources/[articleSlug]/.gitkeep`. `docs/07` registry (Phase 2). `docs/08` lines 497-508 list four example slugs. `docs/09-content-strategy.md` section 15 lists eight initial articles. Zero published | Hub needs at least one article. A dynamic `[articleSlug]` route cannot be committed empty under static export (same constraint documented in `src/data/site/case-studies.ts`), so the first article and the route must land together. Needs expert input per `docs/09` | Pipeline, then `prompts/seo-opportunity-supporting-content-prompt.md` |

### 3.3 Commercial and supporting content

| Priority | Page | Slug | Type | Status | Evidence | Dependencies | Workflow |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Medium | Commercial resource articles, remaining topics | `/resources/[slug]/` | blog and supporting | Missing | `docs/09-content-strategy.md` section 24 lists eight initial topics. Four articles are published (`src/data/site/resources-content.ts`). By my reading, three of the four map to topics 2, 3, and 6 loosely, and the ELD checklist is not on the list. This mapping is a supported inference, not a documented one. Unwritten topics: "What Is Fleet Telematics Installation", "What Installation Documentation Should a Fleet Receive", "Single-Site vs Multi-Location Deployments", "When to Remove, Replace, or Upgrade Fleet Devices", "Questions to Ask a Fleet Installation Provider" | Each article needs a reviewer and date per `docs/09`. Pillar pages exist (service pages), so linking targets are ready. Existing four articles should be strengthened first (section 5) | Pipeline, then `prompts/seo-opportunity-supporting-content-prompt.md` |
| Low | Additional service pages | candidates in `docs/08-url-strategy.md` section 17: `asset-tracking-installation`, `device-removal-and-replacement`, `installation-troubleshooting`, `mobile-electronic-equipment-installation` | service | Unverified | `docs/08` lines 538-545 (candidates requiring verification). `docs/01` section 11 (proposed registry candidates: TPMS, mobile data terminal, equipment removal and reinstallation, upgrades). `src/data/site/services-content.ts` lines 7-8 state TPMS is deliberately folded into the telematics umbrella and no separate page exists | `docs/01` section 10 lists six checks before any service page (offered, wants to market, current equipment, technician coverage, explainable, conversion path). None are recorded as passed for these candidates | Pipeline first to test demand. Then `prompts/seo-aeo-service-page-research-prompt.md` and `prompts/seo-aeo-service-page-implementation-prompt.md` |
| Low | Additional industry pages | `docs/08` section 19 candidate slugs: `transportation-logistics`, `construction`, `field-service`, `utilities`, `delivery-distribution`, `municipal-public-sector`, `rental-equipment` | industry | Unverified | `docs/08` lines 600-607. `docs/01` section 13.2 lists utilities, telecommunications, government and municipal, public safety, and heavy equipment as "Proposed" only, each needing confirmed experience before publication. Five industry pages already exist, and several candidates overlap them (logistics, construction, field service, delivery) | Stakeholder confirmation per `docs/01` section 13.2. Avoid duplicating existing industry pages | Pipeline first. `prompts/seo-opportunity-selection-prompt.md` to decide whether any candidate is a distinct intent |

### 3.4 Conditional hubs (Phase 2, no evidence of readiness)

| Priority | Page | Slug | Type | Status | Evidence | Dependencies | Workflow |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Low | Technology hub and details | `/technology/`, `/technology/[technology-slug]/` | hub, supporting | Missing | `src/app/technology/.gitkeep`. `docs/07` registry (Phase 2, Conditional). `docs/08` lines 624-638 | `docs/01` section 14 restricts platform names as experience context only. `docs/08` line 638 requires verified, approved relationship wording before any named-platform page. Category pages (for example GPS tracking devices) would overlap the existing service pages | Pipeline first. Likely not justified until demand is shown |
| Low | Solutions hub and details | `/solutions/`, `/solutions/[solution-slug]/` | hub | Missing | No folder. `docs/07` registry (Phase 2). `docs/08` lines 572-589. The example `/solutions/multi-location-fleet-deployments/` overlaps `/services/fleet-rollouts/`, which `docs/08` line 584 says not to duplicate | Intent must differ materially from services | Pipeline first |
| Low | Service-area state and metro pages | `/coverage/[state]/`, `/coverage/[state]/[city]/` (docs plan `/service-areas/...`) | location, service plus location | Blocked | `src/data/commercial/coverage.ts` lines 12-20: `regions`, `states`, and `metros` are empty by design until the evidence-gating rubric is met. `docs/08` line 56 and `docs/11-local-seo-plan.md` line 386 bar market pages without verified capacity. `CLAUDE.md` section 5 bars treating a recruiting market as a physical office | Verified technician capacity, demand, and proof per market. None in repo (**Unverified**) | Pipeline first. `prompts/local-seo-location-page-research-prompt.md` and `prompts/local-seo-location-page-implementation-prompt.md` once gated |

### 3.5 Planned routes that look superseded or need a scope decision

These have empty `.gitkeep` folders or planning-doc rows, but a built page already covers the intent. They are not recommended for building until the stakeholder confirms.

| Priority | Page | Slug | Type | Status | Evidence | Dependencies | Workflow |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Medium | Request a Quote | `/request-a-quote/` | commercial conversion | Unverified (likely superseded) | `src/app/request-a-quote/.gitkeep`. `docs/07` registry and section 31. `docs/08` lines 533 and 787. Decision 0008 makes `/contact/` the quote-first page with `CommercialInquiryForm`, and says `/request-a-quote/` "is not changed", which leaves its status ambiguous | Stakeholder decision: keep `/contact/` as the only quote route, or add a second route. A second route would need distinct intent to avoid duplicate-content risk | Decision first. If approved, pipeline then conversion-page prompts |
| Low | Evergreen Mobile Installer Careers page | `/careers/mobile-installers/` | recruitment | Unverified (likely superseded) | `src/app/careers/mobile-installers/.gitkeep`. `docs/07` registry (Launch). `docs/08` line 259. Role exploration is now covered by `/careers/` and the opening page (decision 0006) | Decision on whether an evergreen role page is still wanted. `CLAUDE.md` section 5 bars `JobPosting` on evergreen pages | Decision first |
| Low | Installer Network at planned slug | `/careers/join-our-installer-network/` | recruitment | Slug divergence | `.gitkeep` folder. `docs/07` and `docs/08` line 267 plan this slug. The page was built at `/careers/mobile-installation-technician/`, and decision 0006 item 2 keeps that slug because a rename needs redirects the repo does not configure (no `_redirects` per `README.md`) | If the slug is ever changed, redirects must exist first | No build. Decision only |
| Low | Commercial confirmation at planned slug | `/thank-you/` | utility | Superseded | `src/app/thank-you/.gitkeep`. `docs/08` line 787 plans `/thank-you/`. Built route is `/thank-you/service-request/` | None | No build. Update docs and delete the empty folder when approved |
| Low | Per-job template route | `/careers/jobs/[jobSlug]/` | recruitment | Not needed now | `src/app/careers/jobs/[jobSlug]/.gitkeep`. `docs/07` registry. The single active opening has its own static route (decision 0006 item 1). Static export rejects a dynamic route that yields zero paths | Needed only if a second opening is added | None until a second opening exists |

### 3.6 Blocked by missing approved proof

| Priority | Page | Slug | Type | Status | Evidence | Dependencies | Workflow |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Low | Case studies and case-study template | `/case-studies/`, `/case-studies/[slug]/` | proof | Blocked | `src/data/site/case-studies.ts` (empty registry, build constraint notes). `docs/01` section 22 approves no case studies, testimonials, or quantified outcomes | A real, approved, customer-permissioned write-up. The route and template must be added in the same commit as the first entry | Do not start |
| Low | Reviews or testimonials page | none proposed | proof | Not recommended | `docs/01` section 22. `src/components/content/ProofMetrics.tsx` documents the no-fabricated-proof rule. No planned route exists in the repo | None approved | Do not create |

## 4. Broken or dead internal links

Method: extracted every literal `"/..."` path used as an `href` or in a route constant under `src/`, plus the `sitemap.ts` list, and compared each to the built route list in section 2. This does not cover links assembled from template strings other than the resource and job patterns, or `docs/` content.

| Source file | Link | Target |
| --- | --- | --- |
| None found | None | None |

Related observations:

- `src/data/navigation/site-navigation.ts` states the nav and footer include only built routes, and every footer and nav `href` resolves.
- The `/thank-you/` string in `src/app/robots.ts` is a disallow prefix, not a link.
- In-page anchors such as `#request-quote` (`src/data/site/industries-content.ts` line 152) were not checked against their target ids. Status **Unverified**.
- The repo has no link validation script (`package.json` scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `README.md` confirms), so this result is a manual static scan, not a validator run.

## 5. Thin, stub, and orphan pages needing attention

| Page | Finding | Evidence |
| --- | --- | --- |
| The four `/resources/[slug]/` articles | Thin. Each article body is four short paragraphs. A rough whitespace count of each article record, including its metadata fields, is about 140 to 200 words. The counts are approximate and the page template may add text. Real length is **Unverified** until rendered. `docs/09` requires direct answer, decision guidance, limitations, reviewer, and date, and the records show no reviewer or date field | `src/data/site/resources-content.ts` |
| `/case-studies/` | Deliberately empty. Returns 404. Not a defect | `src/app/case-studies/page.tsx` |
| 19 `.gitkeep` folders under `src/app/` | Stale placeholders for routes that are unbuilt or superseded. They risk misleading readers about site structure but do not create routes | `find src/app -name .gitkeep` (about, careers/faqs, careers/how-assignments-work, careers/installer-requirements, careers/installer-training, careers/jobs/[jobSlug], careers/join-our-installer-network, careers/mobile-installers, careers/resources/[articleSlug], careers/apply, careers/application-received, careers/installer-network-received, contact, faqs, request-a-quote, service-areas, services/[serviceSlug], technology, thank-you). Four of these sit beside real pages (apply, application-received, installer-network-received, contact) and are redundant |
| Service pages (5) | Not thin as routes. Each `page.tsx` is 17 lines because content is data driven through `ServicePageTemplate` and `src/data/site/service-pages-content.ts`. Several image slots render a decorative fallback in production (`src/data/site/service-pages-images.ts` lines 161, 212, 283, 329) | Section 2 |
| Industry pages (4 of 5) | Routes are 49 lines each, content is data driven (`src/data/site/industries-content.ts`). Depth versus the commercial-fleets page (274 lines) is **Unverified** without rendering | `wc -l` of `src/app/industries/*/page.tsx` |
| Orphans | None unintended. Every indexable route is in the sitemap and has an inbound link (nav, footer, or hub listing). Utility routes are reached through form flows. `/case-studies/` is unlinked by design | `src/data/navigation/site-navigation.ts`, `src/app/sitemap.ts` |
| Docs drift | `docs/07`, `docs/08`, and the `.gitkeep` folders still list `/service-areas/`, `/faqs/`, and `/careers/join-our-installer-network/`, while the build uses `/coverage/`, `/faq/`, and `/careers/mobile-installation-technician/`. `README.md` and decisions 0006, 0007, and 0008 record the divergence, but the architecture docs were not updated | `docs/07-site-architecture.md`, `docs/08-url-strategy.md` |

## 6. Keyword and pipeline evidence

- No pipeline outputs exist in the repo. Searched for `opportunities.json`, `keyword-clusters.json`, `route-manifest.json`, `selected-opportunity.json`, `page-brief.json`, and keyword CSVs. None are tracked. `docs/seo/` does not exist. `docs/briefs/` and `docs/research/` hold only `.gitkeep`.
- `seo-automation/scripts/` has `scan-routes.mjs`, `parse-keyword-csv.mjs`, `cluster-keywords.mjs`, `score-opportunities.mjs`, and `run-pipeline.mjs`. They write under `docs/seo/`, which would create untracked files, so they were not run. `seo-automation/README.md` references `docs/seo-opportunity-automation-workflow.md`, which is not in `docs/`.
- `docs/05-keyword-research.md` holds a strategy-level cluster plan (recruitment clusters for installer, GPS, ELD, 12-volt, and traveling work, plus commercial terms). It states no volume or difficulty data exists (section 2.2). It supports Medium priority for the recruitment and commercial supporting pages but cannot rank them.
- Consequence: every row in section 3 needs a pipeline run, and none can be marked "already covered by existing pipeline output".

## 7. Recommended build order

Batches are ordered by dependency first, then priority. No batch should start until the pipeline has run for its pages and the listed approvals are in hand.

### Batch 0 - Housekeeping and decisions (no new pages, unblock everything)

1. Run the pipeline once with a Keyword Planner export so a route manifest and opportunity ranking exist. Without it, no later batch can be ranked.
2. Stakeholder decisions needed: (a) keep `/contact/` as the only quote route or add `/request-a-quote/`; (b) retire the evergreen `/careers/mobile-installers/` idea; (c) approve removing the stale `.gitkeep` folders and updating `docs/07` and `docs/08` to the built slugs; (d) approve leadership, history, and entity facts for About.

Reasoning: three planned slugs are likely superseded, and building them first would create duplicate-intent pages.

### Batch 1 - Launch blockers

1. 404 page (`not-found.tsx`). Required by the launch checklist, no external dependency.
2. About (`/about/`). Highest-priority missing core page. Starts once item 2(d) above is approved.

Reasoning: both are Launch items in `docs/07` and `docs/26`. The 404 has no dependencies, so it can ship first.

### Batch 2 - Recruitment support cluster

1. `/careers/installer-requirements/` (reuses already approved requirement wording).
2. `/careers/faqs/` (after a duplication check against the existing FAQ on `/careers/`).
3. `/careers/how-assignments-work/` (last, because it needs approved assignment-process facts).

Reasoning: recruitment is the documented primary funnel, the requirements page has the most reusable approved content, and the assignments page carries the highest risk of guarantee language.

### Batch 3 - Supporting content

1. Strengthen the four existing resource articles (reviewer, date, depth), since they are the pillar-to-article links for the service pages.
2. Add the five unwritten commercial topics from `docs/09` section 24, one at a time, each linking to its service page.
3. First `/careers/resources/` article together with its route, then the rest of `docs/09` section 15 as pipeline results justify.

Reasoning: the service pillar pages already exist, so supporting articles have link targets. Dynamic routes cannot be committed empty, so the hub and first article ship together.

### Batch 4 - Conditional expansion (only with evidence)

1. Additional service and industry pages, only after the `docs/01` section 10 checks and section 13.2 confirmations are recorded.
2. `/technology/`, `/solutions/`, and `/careers/installer-training/`, only if demand and verified facts exist.
3. State and metro coverage pages, only after the evidence-gating rubric in `src/data/commercial/coverage.ts` is met.
4. Case studies, only with an approved, customer-permissioned write-up.

## 8. Open questions and Unverified items

Limited to items that cannot be determined from the repo:

1. Whether `/request-a-quote/` is still wanted. Decision 0008 does not say.
2. Approved About-page facts: leadership, history, and operating model. `docs/07` section 29 lists them as approval prerequisites, and no approval is recorded.
3. Approved assignment-process facts for `/careers/how-assignments-work/`, and whether a training program exists for `/careers/installer-training/`.
4. Whether `/careers/installer-requirements/` and `/careers/faqs/` would duplicate intent already served by `/careers/` and the network page. This needs the search-intent check in `prompts/16-search-intent-defense-prompt.md`.
5. Rendered word count and depth of the four resource articles and four industry pages. Only source counts were available.
6. Whether the `#request-quote` style in-page anchors resolve to real ids.
7. Which workflow mode and output depth the `site-os-page-build-router` assigns to each page. The router skill is not in this repo.
8. Whether demand exists for any Batch 4 page. No keyword volume data is in the repo.
9. Keyword outputs: whether pipeline outputs exist outside this repo (for example in the strategy project). None are tracked here.
