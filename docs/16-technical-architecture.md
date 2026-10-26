# Ultimate Fleet GPS Technical Architecture

**Document:** `16-technical-architecture.md`  
**Project:** Ultimate Fleet GPS Website and Installer Recruitment Project  
**Business:** Ultimate Fleet GPS  
**Repository:** https://github.com/SedrickHarris/ultimate-fleet-gps-site.git  
**Production domain:** `https://ultimatefleetgps.net/` pending final DNS confirmation  
**Primary technical outcome:** A fast, secure, accessible, maintainable recruitment-first website  
**Hosting model:** Next.js static export on Cloudflare Pages with separate serverless integrations where required  
**Status:** Architecture and implementation draft  
**Version:** 0.1  
**Last updated:** September 9, 2026

---

## 1. Purpose

This document defines the technical architecture for the Ultimate Fleet GPS website and its supporting recruitment and commercial systems.

It governs:

- application framework and rendering model;
- repository and directory structure;
- content and job data architecture;
- static route generation;
- component and design-system boundaries;
- forms and serverless processing;
- ATS, CRM, analytics, and search integrations;
- Cloudflare Pages deployment;
- domain, redirect, header, and caching behavior;
- security, privacy, accessibility, and performance;
- testing and continuous integration;
- preview, production, and indexation controls;
- operational ownership; and
- architecture change management.

This document converts the business, search, content, schema, conversion, and measurement strategies into a buildable system. It does not authorize unverified business claims, job terms, locations, services, or entity relationships.

---

## 2. Architecture Objectives

The technical system must:

1. Publish fast, crawlable HTML for every approved indexable route.
2. Make active jobs easy to create, validate, publish, update, close, and remove.
3. Keep active-job applications, installer-network registrations, referrals, and commercial inquiries technically distinct.
4. Support mobile candidates with minimal JavaScript and reliable forms.
5. Preserve job and acquisition context into the approved recruiting system.
6. Protect applicant and customer information.
7. Generate accurate metadata, canonicals, sitemaps, robots directives, and JSON-LD from validated data.
8. Provide preview deployments without allowing preview pages into search indexes.
9. Prevent unpublished or unverified records from becoming public accidentally.
10. Make changes reviewable through Git and reproducible through automated builds.
11. Support organic search, local discovery, answer engines, and LLM retrieval without building separate versions of the same content.
12. Allow future expansion without requiring an immediate platform migration.

---

## 3. Primary Architecture Decision

### Decision

Build the public website with:

- Next.js App Router;
- TypeScript in strict mode;
- Tailwind CSS;
- static export using `output: 'export'`;
- Git and GitHub for version control;
- Cloudflare Pages for preview and production hosting; and
- a separate serverless endpoint or approved external platform for any operation requiring secrets, validation, file handling, ATS/CRM writes, or trusted submission confirmation.

### Why this model fits the project

- Search and career pages are primarily content-driven.
- Static HTML provides strong crawlability and low runtime complexity.
- Cloudflare Pages can deploy the generated `out` directory directly.
- Git-connected builds create reproducible production releases and preview environments.
- Recruitment content and jobs can be validated during the build.
- Serverless processing can remain isolated to the small set of features that require trusted execution.
- The public site remains available even if a downstream CRM or form system has a temporary outage.

### Important boundary

Static export does not provide a persistent Next.js application server. Features that require server-side request handling must not be assumed to work inside the exported site.

Use a separate approved backend boundary for:

- protected API calls;
- secrets;
- Turnstile verification;
- ATS or CRM submission;
- resume or file transfer;
- webhook authentication;
- email or SMS triggers;
- rate limiting beyond basic edge controls;
- server-confirmed analytics conversions; and
- dynamic data that cannot wait for a rebuild.

---

## 4. Architecture Decision Status

| Decision | Status | Notes |
|---|---|---|
| Next.js App Router | Approved project direction | Use current stable version at implementation after compatibility review |
| TypeScript strict mode | Recommended required standard | No routine use of `any` |
| Tailwind CSS | Approved project direction | Tokens and reusable components remain centralized |
| Static export | Recommended baseline | Matches Cloudflare Pages requirement and content-first site |
| Cloudflare Pages | Approved hosting target | Production branch and previews configured through Git integration |
| GitHub repository | Created | `SedrickHarris/ultimate-fleet-gps-site` |
| Serverless form boundary | Built, not deployed | Cloudflare Worker in `workers/forms/` relays to GoHighLevel (decision 0019) |
| ATS/recruiting CRM | GoHighLevel selected | Applicant-data review and account setup pending (decision 0019) |
| Commercial CRM | GoHighLevel selected | Account setup and field mapping pending (decision 0019) |
| Content source | Recommended: typed files in repository | External CMS not justified at launch unless stakeholder workflow requires it |
| Job source of truth | Blocked | Must be assigned before active job publication |
| Image delivery | Recommended: optimized source assets with static-compatible rendering | Final loader/transformation decision at build setup |

---

## 5. System Context

### Public delivery path

```text
GitHub main branch
    -> Cloudflare Pages build
    -> Next.js static export
    -> Cloudflare edge/CDN
    -> canonical public website
```

### Candidate conversion path

```text
Career or job page
    -> application interface
    -> protected submission endpoint or approved ATS
    -> validation + abuse protection
    -> recruiting CRM/ATS
    -> recruiter workflow
    -> qualification + onboarding
    -> activated installer
```

### Commercial conversion path

```text
Service, industry, technology, or contact page
    -> commercial inquiry interface
    -> protected submission endpoint
    -> commercial CRM pipeline
    -> qualified opportunity
```

### Measurement path

```text
Search/profile platforms -> visibility data
Website -> privacy-approved behavior events
Submission service -> accepted-submission confirmation
ATS/CRM -> downstream outcome stages
Reporting layer -> separate recruitment and commercial dashboards
```

---

## 6. Technology Stack

| Layer | Technology | Responsibility |
|---|---|---|
| Research and content support | Claude | Research synthesis, drafting, review support |
| Development agent | Claude Code | Repository-aware implementation assistance |
| Local editor | Visual Studio Code | Authoring, review, debugging, Git workflow |
| Framework | Next.js App Router | Routing, layouts, metadata, static generation |
| Language | TypeScript | Type safety and content contracts |
| UI styling | Tailwind CSS | Token-driven responsive presentation |
| Package manager | npm unless changed by explicit decision | Dependency installation and scripts |
| Version control | Git | Change history and release traceability |
| Source hosting | GitHub | Canonical code repository and collaboration |
| Public hosting | Cloudflare Pages | Builds, previews, production delivery, CDN |
| Trusted backend | Cloudflare Worker/Pages Function or approved integration service | Forms, secrets, validation, ATS/CRM forwarding |
| Abuse protection | Cloudflare Turnstile plus server validation | Bot mitigation for public forms |
| Analytics | GA4 plus Cloudflare operational data | Onsite and infrastructure measurement |
| Search operations | Google Search Console and Bing Webmaster Tools | Indexing and organic visibility |
| Recruiting operations | Approved ATS/recruiting CRM | Candidate records and stages |
| Commercial operations | Approved CRM | Inquiry and opportunity records |

### Version policy

- Pin dependency versions through `package-lock.json`.
- Use a currently supported Node.js version accepted by the local toolchain and Cloudflare build environment.
- Record the selected Node version in `.nvmrc` or `.node-version` and the `engines` field.
- Do not hard-code a framework version in strategy documents as a permanent requirement.
- Review release notes before major upgrades.
- Apply security patches promptly after compatibility tests.
- Do not enable experimental framework features without an approved architecture decision.

---

## 7. Rendering and Runtime Model

### Static generation

All public content routes should be generated as HTML during `next build`.

This includes:

- homepage;
- company pages;
- careers hub;
- openings index;
- active job pages;
- installer role pages;
- recruiting-market pages;
- installer requirements and process pages;
- installer-network information;
- verified service pages;
- verified industry and technology pages;
- approved location pages;
- resource articles;
- FAQ content;
- legal and accessibility pages; and
- confirmation pages with appropriate indexation controls.

### Static route requirements

- Every dynamic segment must have an enumerable approved record at build time.
- Use `generateStaticParams()` for approved dynamic records.
- The build must fail when an indexable record lacks required data.
- Draft, review, blocked, future, and archived records must not generate public indexable pages unless explicitly designed to do so.
- Closed job behavior must follow the job lifecycle in this document and the schema plan.

### Client components

Use client-side JavaScript only for true interaction, such as:

- mobile navigation;
- filters that improve an already usable openings list;
- accessible accordions;
- multi-step forms;
- form validation and submission states;
- analytics events;
- consent controls; and
- limited interface enhancements.

Do not turn entire page templates into client components for convenience.

### Unsupported or unsuitable static-export assumptions

Do not rely on a Next.js server for:

- request-time route handlers;
- Server Actions;
- request-time cookies or headers;
- dynamic authentication;
- incremental static regeneration;
- middleware-dependent business logic;
- server-only redirects;
- runtime draft preview;
- secret-bearing API calls; or
- default runtime image optimization.

If a future requirement depends on these features, review whether to add a separate Worker, migrate the application runtime, or change the requirement.

---

## 8. Recommended Next.js Configuration

The implementation should begin from a minimal configuration similar to:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
```

### Configuration notes

- `output: "export"` creates the static output for Cloudflare Pages.
- `trailingSlash: true` aligns with the approved canonical path convention in `08-url-strategy.md`.
- `images.unoptimized: true` is the simplest static-compatible starting point. Images must still be resized, compressed, and delivered responsibly.
- A tested custom image loader or Cloudflare image service may replace this choice later.
- Cloudflare handles public security headers and redirects through generated `_headers` and `_redirects` files or other approved platform configuration.
- Configuration must be confirmed against the installed Next.js and Cloudflare versions during implementation.

---

## 9. Repository Structure

Recommended initial structure:

```text
ultimate-fleet-gps-site/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── pull_request_template.md
│   └── workflows/
│       └── quality.yml
├── docs/
│   ├── project/
│   ├── research/
│   ├── content/
│   ├── technical/
│   └── qa/
├── public/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   │   ├── brand/
│   │   ├── careers/
│   │   ├── jobs/
│   │   ├── services/
│   │   ├── industries/
│   │   ├── technology/
│   │   ├── locations/
│   │   └── resources/
│   ├── _headers
│   └── _redirects
├── scripts/
│   ├── validate-content.ts
│   ├── validate-jobs.ts
│   ├── validate-links.ts
│   ├── validate-schema.ts
│   └── generate-search-files.ts
├── src/
│   ├── app/
│   ├── components/
│   │   ├── analytics/
│   │   ├── careers/
│   │   ├── commercial/
│   │   ├── forms/
│   │   ├── layout/
│   │   ├── schema/
│   │   └── ui/
│   ├── content/
│   │   ├── articles/
│   │   └── legal/
│   ├── data/
│   │   ├── business.ts
│   │   ├── jobs.ts
│   │   ├── roles.ts
│   │   ├── recruiting-markets.ts
│   │   ├── services.ts
│   │   ├── industries.ts
│   │   ├── technologies.ts
│   │   ├── locations.ts
│   │   └── redirects.ts
│   ├── lib/
│   │   ├── analytics/
│   │   ├── content/
│   │   ├── metadata/
│   │   ├── schema/
│   │   ├── seo/
│   │   ├── validation/
│   │   └── utils/
│   ├── styles/
│   │   └── globals.css
│   └── types/
├── .editorconfig
├── .env.example
├── .gitignore
├── .nvmrc
├── CLAUDE.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── vitest.config.ts
```

### Structure rules

- Keep route files focused on composition, metadata, and data selection.
- Keep business records out of presentation components.
- Keep JSON-LD generation in schema utilities or components with typed inputs.
- Keep primitive UI components separate from careers and commercial domain components.
- Do not create generic `utils.ts` files that accumulate unrelated logic.
- Do not duplicate business identity, job, service, or location facts across files.
- Move the existing foundational documents into an approved `docs/` structure only through a deliberate repository organization change.

---

## 10. Route Architecture

The implementation must follow `07-site-architecture.md` and `08-url-strategy.md`.

### Representative App Router structure

```text
src/app/
├── layout.tsx
├── page.tsx
├── not-found.tsx
├── sitemap.ts
├── robots.ts
├── manifest.ts
├── about/
│   └── page.tsx
├── careers/
│   ├── page.tsx
│   ├── openings/
│   │   ├── page.tsx
│   │   └── [job-slug]/
│   │       └── page.tsx
│   ├── roles/
│   │   └── [role-slug]/
│   │       └── page.tsx
│   ├── locations/
│   │   └── [market-slug]/
│   │       └── page.tsx
│   ├── installer-requirements/
│   │   └── page.tsx
│   ├── how-assignments-work/
│   │   └── page.tsx
│   ├── installer-network/
│   │   └── page.tsx
│   ├── apply/
│   │   └── page.tsx
│   └── application-received/
│       └── page.tsx
├── services/
│   ├── page.tsx
│   └── [service-slug]/
│       └── page.tsx
├── industries/
│   ├── page.tsx
│   └── [industry-slug]/
│       └── page.tsx
├── technology/
│   ├── page.tsx
│   └── [technology-slug]/
│       └── page.tsx
├── service-areas/
│   ├── page.tsx
│   └── [location-slug]/
│       └── page.tsx
├── resources/
│   ├── page.tsx
│   └── [article-slug]/
│       └── page.tsx
├── contact/
│   └── page.tsx
├── thank-you/
│   └── page.tsx
├── privacy-policy/
│   └── page.tsx
├── applicant-privacy/
│   └── page.tsx
└── accessibility/
    └── page.tsx
```

### Route requirements

- Slugs come from validated records, not headings generated at runtime.
- Indexable dynamic routes must be returned by `generateStaticParams()`.
- Unknown dynamic paths resolve to the static 404 behavior.
- Canonical URLs use the approved production origin and trailing slash.
- Application and thank-you pages use intentional robots directives.
- Preview domains must not generate crawlable production alternatives.
- Legacy routes use Cloudflare redirects, not client-side navigation.

---

## 11. Business Source-of-Truth Architecture

### Business record

Create one typed business configuration for approved public facts.

```ts
type BusinessProfile = {
  legalName: string;
  publicName: string;
  canonicalOrigin: string;
  hiringEntity?: string;
  commercialEntity?: string;
  phone?: string;
  email?: string;
  address?: PostalAddress;
  serviceAreas: string[];
  socialProfiles: string[];
  verificationStatus: "draft" | "verified" | "blocked";
  approvedAt?: string;
};
```

### Rules

- Only verified values can render on production pages or schema.
- Missing values remain absent rather than being inferred.
- No relationship between Ultimate Fleet GPS and Doral Transport LLC exists (`01-business-source-of-truth.md` section 4.1), so none is represented. Any future relationship must be represented only after written approval.
- Recruiting markets and commercial service areas use separate registries.
- A place mentioned in content does not automatically become a verified office or local-business location.
- Business facts must include verification status, source reference, and approval date in the internal record or source-of-truth documentation.

---

## 12. Content Data Architecture

### Launch recommendation

Store structured page records and editorial content in the repository. Use TypeScript for structured registries and Markdown or MDX only when long-form authoring benefits from it.

### Why repository-managed content is appropriate

- Initial publishing volume is manageable.
- Git provides review and history.
- Static generation remains simple.
- Content and schema can share typed records.
- Draft content cannot bypass build validation.
- There is no confirmed requirement for nontechnical staff to publish directly.

### Content record requirements

Each indexable page record should include:

- stable content ID;
- route family;
- slug;
- title and metadata fields;
- primary intent;
- audience;
- status;
- indexation decision;
- canonical decision;
- publication date where meaningful;
- last substantive review date;
- reviewer or approving role;
- internal-link targets;
- schema eligibility;
- source or verification references for factual claims; and
- content body or component data.

### Status model

```ts
type ContentStatus =
  | "draft"
  | "review"
  | "approved"
  | "published"
  | "paused"
  | "archived"
  | "blocked";
```

### Indexation model

```ts
type IndexationStatus =
  | "index"
  | "noindex"
  | "excluded";
```

Development, publication, and indexation are separate decisions:

- a route can exist in development without being published;
- a page can be published for a user workflow but intentionally `noindex`;
- only approved pages should enter the sitemap and indexable route set.

---

## 13. Job Data Architecture

Active jobs require stricter governance than ordinary content because the data may be distributed to search engines and recruitment platforms.

### Recommended job type

```ts
type JobRecord = {
  id: string;
  slug: string;
  title: string;
  roleKey: string;
  descriptionSummary: string;
  status: "draft" | "review" | "active" | "paused" | "closed" | "archived";
  publicationStatus: "excluded" | "published";
  indexationStatus: "index" | "noindex" | "excluded";
  hiringEntityKey: string;
  employmentType?: string[];
  applicantLocationRequirements?: string[];
  jobLocationType?: "onsite" | "hybrid" | "remote" | "field";
  jobLocations?: JobLocation[];
  recruitingMarketKeys: string[];
  responsibilities: string[];
  requiredQualifications: string[];
  preferredQualifications?: string[];
  travelRequirements?: string;
  toolRequirements?: string;
  vehicleRequirements?: string;
  schedule?: string;
  compensation?: Compensation;
  applyRoute: ApplicationRoute;
  datePosted: string;
  validThrough?: string;
  approvedBy: string;
  approvedAt: string;
  lastVerifiedAt: string;
};
```

### Job validation rules

An active, indexable job must have:

- unique immutable job ID;
- unique approved slug;
- verified public title;
- verified hiring entity;
- actual active opportunity status;
- accurate location and applicant-location rules;
- approved employment or engagement classification where used;
- approved responsibilities and qualifications;
- accurate application destination;
- `datePosted`;
- `validThrough` when applicable;
- review owner;
- approval timestamp; and
- successful schema validation.

The build must fail if an active job:

- lacks required fields;
- has an invalid or past `validThrough` date without a closed status;
- points to an unknown role, market, entity, or application route;
- reuses a job ID or slug;
- contains placeholder language;
- is marked both excluded and indexable;
- references an unverified location; or
- produces invalid JobPosting JSON-LD.

### Job status behavior

| Status | Public page | Apply action | Sitemap | Job schema | Robots |
|---|---|---|---|---|---|
| Draft | No | No | No | No | Not deployed |
| Review | Preview only | Test only | No | Test only | Preview noindex |
| Active | Yes | Yes | Yes | Yes | Index when approved |
| Paused | Conditional | Disabled | Conditional | Remove | Usually noindex or temporary page decision |
| Closed | Temporarily available if useful | Disabled | Remove | Remove | Follow approved lifecycle |
| Archived | Usually redirect or helpful archive | No | No | No | Noindex or removed |

### Job closure sequence

1. Mark the source record closed.
2. Disable the application route for that job.
3. Remove JobPosting schema.
4. Remove the URL from the job sitemap or sitemap output.
5. Replace active language with a clear closed status if the page remains temporarily.
6. Provide relevant current openings or installer-network pathway without implying an active job.
7. Apply the approved redirect, `410`, or archive decision after reviewing traffic, links, reuse, and user value.
8. Update external recruitment platforms.
9. Rebuild and deploy.

---

## 14. Page Composition Architecture

### Layer model

| Layer | Responsibility | Example |
|---|---|---|
| Route | Select record and construct the page | Job detail route |
| Template | Enforce information order for a page family | `JobDetailTemplate` |
| Domain component | Render business-specific modules | `JobRequirements`, `AssignmentProcess` |
| UI primitive | Reusable accessible presentation | `Button`, `Card`, `Accordion` |
| Data utility | Select and validate structured content | `getActiveJobBySlug()` |
| Metadata utility | Generate canonical metadata | `buildJobMetadata()` |
| Schema utility | Generate typed JSON-LD | `buildJobPostingSchema()` |

### Component rules

- Prefer server components for static content.
- Add `"use client"` only at the smallest interactive boundary.
- Components receive typed data rather than importing arbitrary global records.
- Do not embed unverified business facts in components.
- Keep recruitment and commercial form components separate.
- Every component must support keyboard use, visible focus, responsive layout, and reduced-motion preferences where applicable.
- Avoid deeply configurable “universal sections” that obscure page purpose and accessibility.

---

## 15. Metadata Architecture

Create central metadata helpers for each page family.

### Required metadata inputs

- page title;
- meta description;
- canonical path;
- robots decision;
- Open Graph title, description, image, and URL;
- social card fields;
- page type;
- publication and modification dates when appropriate; and
- alternate languages only after a complete approved localization exists.

### Metadata rules

- Build canonical URLs from the single approved production origin.
- Do not derive production canonical origins from preview request headers.
- Preview deployments should be blocked from indexing at the platform/header level and must not compete with production.
- Search snippets are not guaranteed to use the provided title or description.
- Application-received, thank-you, internal-search, and thin utility routes should normally be `noindex`.
- Closed job pages must not retain active job metadata.
- Page metadata must not claim unverified markets, terms, or service capabilities.

---

## 16. Schema Architecture

Implement JSON-LD from the same validated records that render visible content.

### Recommended organization

```text
src/components/schema/
├── JsonLd.tsx
├── OrganizationSchema.tsx
├── BreadcrumbSchema.tsx
├── JobPostingSchema.tsx
├── ServiceSchema.tsx
├── ArticleSchema.tsx
└── FaqSchema.tsx

src/lib/schema/
├── build-organization-schema.ts
├── build-breadcrumb-schema.ts
├── build-job-posting-schema.ts
├── build-service-schema.ts
├── build-article-schema.ts
├── sanitize-json-ld.ts
└── validate-schema.ts
```

### Schema rules

- Follow `13-schema-markup-plan.md`.
- Use one stable organization entity ID on the canonical domain.
- Do not invent LocalBusiness locations.
- Generate JobPosting only for verified active jobs.
- Use stable absolute URLs.
- Escape or serialize JSON-LD safely.
- Never include private applicant or customer information.
- Visible page facts and structured data must agree.
- Schema validation is part of automated quality checks and manual launch QA.

---

## 17. Sitemap and Robots Architecture

### Sitemap composition

Generate sitemap entries only for canonical, approved, indexable URLs.

Exclude:

- drafts;
- preview routes;
- application steps;
- confirmation pages;
- internal search results;
- filtered or parameter variants;
- blocked records;
- expired jobs;
- redirects;
- noncanonical duplicates; and
- test fixtures.

### Sitemap segmentation

If the route count and operations justify it, use:

- general pages sitemap;
- career and role sitemap;
- active job sitemap;
- service/industry/technology sitemap;
- location sitemap; and
- resource sitemap.

Small launch sites may use one sitemap until segmentation improves operations.

### Last modification dates

- Use the date of a substantive public content change.
- Do not set every page to the build date.
- Do not update dates for formatting-only changes unless the public content meaning changed.

### Robots controls

- Production `robots.txt` should permit crawling of approved public content.
- Preview and staging environments require `X-Robots-Tag: noindex, nofollow` or an equivalent reliable environment control.
- Robots blocking is not a substitute for authentication of private information.
- Do not expose private ATS, CRM, administrative, or form-processing routes to indexing.

---

## 18. Internal Linking Architecture

### Technical requirements

- Use `next/link` or semantic anchor links for crawlable navigation.
- Core destinations must not depend on JavaScript-only click handlers.
- Generate contextual links from explicit approved relationships in content data.
- Do not create location/service matrices automatically without unique value and publication approval.
- Maintain breadcrumb consistency with URL hierarchy.
- Validate internal targets during the build.
- Prevent links to draft, missing, expired, or excluded records.
- Make closed job recommendations dynamic from the current approved job registry at build time.

### Link relationship fields

Structured records may contain:

- parent page ID;
- related role IDs;
- related market IDs;
- related job IDs;
- related service IDs;
- related article IDs; and
- next-action target.

Relationships support discovery; they do not automatically approve a page or claim.

---

## 19. Search and Filter Architecture

### Openings index

The baseline openings page must render all active approved jobs as static HTML.

Client-side filtering may enhance the page by:

- role;
- approved recruiting market;
- travel level;
- engagement type when verified; or
- other candidate-useful controlled fields.

### Rules

- The unfiltered HTML must remain usable without JavaScript.
- Filter states should not create unlimited indexable URL parameters.
- Use accessible native controls and live-result announcements.
- Do not publish empty location pages solely for filters.
- No-results states should suggest the installer network accurately.
- Search/filter events follow `15-analytics-and-measurement.md`.

### Site search

A full site-search service is not required at launch unless content volume justifies it. If later added, it must use approved indexing, privacy, analytics, and noindex rules for result pages.

---

## 20. Forms Architecture

### Separation requirement

Use distinct schemas, endpoints, validation, confirmations, storage, routing, consent, and analytics for:

- active-job applications;
- installer-network registrations;
- candidate referrals;
- commercial inquiries; and
- general contacts.

### Preferred owned-form flow

1. The browser renders an accessible form.
2. Client validation helps the user but is never the only validation.
3. The browser obtains a Turnstile token where approved.
4. The browser submits over HTTPS to the protected endpoint.
5. The endpoint verifies request method, content type, origin policy, payload size, and Turnstile token.
6. The endpoint applies server-side schema validation and normalization.
7. The endpoint rate-limits, detects duplicates, and rejects unsafe content.
8. The endpoint forwards the accepted record to the correct ATS/CRM or durable queue.
9. The endpoint returns a non-sensitive success response.
10. The site records the correct confirmed analytics event.
11. The user receives the appropriate confirmation without exposing record identifiers.

### Trust boundary

Browser input is untrusted. Client validation, hidden fields, URL parameters, and analytics events do not prove a valid application.

### Server-side validation

Validate:

- required fields;
- expected types and lengths;
- allowed enum values;
- job ID and active status;
- consent version and selection where required;
- file type and size where applicable;
- Turnstile token;
- duplicate or replay behavior;
- allowed origin as a defense-in-depth signal; and
- downstream response.

### Response behavior

- Use generic user-safe errors.
- Log a request/correlation ID that is not exposed to analytics.
- Do not return ATS, CRM, webhook, or vendor secrets.
- Do not echo sensitive submitted values.
- Distinguish retryable service failure from invalid submission.
- Do not show success until the record is durably accepted or queued.

---

## 21. Form Backend Options

### Option A: Cloudflare Worker endpoint

**Recommended when the site owns the form experience.**

Benefits:

- isolated secrets;
- edge deployment;
- explicit validation and routing;
- Turnstile verification;
- controlled ATS/CRM forwarding;
- custom logging and error behavior; and
- independence from static site rendering.

Requirements:

- separate source directory or repository decision;
- environment bindings and secrets;
- tested CORS/origin policy;
- rate limiting;
- observability;
- data-retention decision; and
- deployment ownership.

### Option B: Cloudflare Pages Function

Potentially suitable when deployment and static site integration are simple. Confirm compatibility with the selected Next.js static export, directory layout, Pages build, and operational ownership before implementation.

### Option C: Approved ATS-hosted form

Suitable when the ATS provides accessible, mobile-friendly, brand-compatible forms with source preservation, privacy controls, and reliable completion reporting.

Tradeoff: less control over UX, schema, analytics, cross-domain attribution, and availability.

### Option D: GoHighLevel or integration relay

Potentially suitable for commercial inquiries and workflow automation. Candidate applications require careful review of applicant-data handling, permissions, retention, file storage, stage design, and employment-related compliance before use.

### Selection rule

Choose the smallest architecture that satisfies:

- candidate experience;
- security;
- applicant-data requirements;
- ATS/CRM workflow;
- analytics confirmation;
- accessibility;
- operational support; and
- legal/privacy review.

---

## 22. Turnstile and Abuse Protection

### Required behavior

- Render Turnstile only through the approved integration.
- Keep the secret key server-side.
- Validate every token with Cloudflare Siteverify on the trusted backend.
- Treat tokens as single-use and short-lived.
- Validate expected hostname and action fields when configured.
- Do not accept a client-side success callback as proof by itself.
- Combine Turnstile with rate limits, payload validation, duplicate controls, and monitoring.

### Additional controls

- honeypot field where it does not harm accessibility;
- minimum interaction timing only as a weak signal;
- per-IP or derived abuse rate limits without storing unnecessary identity data;
- request body size limits;
- file scanning when uploads are accepted;
- domain allowlist for downstream webhooks;
- idempotency handling; and
- alerting for spikes and repeated failures.

Abuse controls must not silently discard legitimate applications. Rejected submissions need a safe recovery path.

---

## 23. Resume and File Upload Architecture

### Preferred order

1. Use the approved ATS's secure upload mechanism when it meets requirements.
2. Use a direct-to-approved-storage signed upload if a custom workflow is necessary.
3. Avoid proxying large files through a general form endpoint unless required and designed for it.

### Requirements

- approved file types only;
- strict size limit;
- MIME and file-signature validation;
- malware scanning or approved platform protection;
- random non-user-controlled storage name;
- private storage by default;
- short-lived signed access;
- access logging;
- deletion and retention schedule;
- no public bucket or guessable URL;
- no resume filename in analytics; and
- no file content in application logs.

### Launch fallback

If secure upload cannot be implemented and approved, omit the upload rather than creating an unsafe file pipeline. The recruiting process may collect documents later through the approved ATS.

---

## 24. ATS and Recruiting CRM Integration

### Integration objectives

- create one candidate/application record per accepted submission;
- attach the correct job ID, role, and market;
- preserve approved source attribution;
- route to the correct recruiting owner;
- trigger the correct acknowledgement and internal notification;
- support the normalized stages in `14-conversion-strategy.md` and `15-analytics-and-measurement.md`;
- avoid duplicate outreach; and
- expose downstream aggregate results for reporting.

### Integration methods in preferred order

1. Official API with scoped credentials and documented error handling.
2. Signed webhook to an approved integration layer.
3. Native vendor connector with verified field mapping.
4. Structured notification plus manual entry only as a temporary, monitored fallback.

### Integration requirements

- secret stored only in server environment;
- least-privilege service credential;
- request timeout and retry strategy;
- idempotency key;
- dead-letter or recovery procedure;
- field mapping document;
- stage mapping;
- audit trail;
- failure alert;
- test workspace where possible; and
- privacy and retention approval.

### Do not

- call the ATS directly from browser code with a private credential;
- expose webhook URLs in public JavaScript when they grant write access;
- send candidate PII to GA4;
- merge installer-network records into active applications;
- create an active-job application when the job is closed; or
- allow an automation to make an unreviewed final employment or contracting decision.

---

## 25. Commercial CRM Integration

Commercial forms must use a separate endpoint or route discriminator with a separate validated schema and pipeline.

### Requirements

- create the inquiry in the commercial pipeline only;
- attach approved service or page context;
- assign the commercial owner;
- send a user acknowledgement and internal notification;
- record source attribution;
- preserve consent choices;
- prevent candidate records from entering the commercial pipeline; and
- trigger `commercial_form_submit` only after accepted processing.

Commercial automation must not promise service, price, scheduling, coverage, or response times that have not been approved.

---

## 26. Analytics Integration

Follow the event contract in `15-analytics-and-measurement.md`.

### Implementation pattern

- Centralize event names and parameter types.
- Expose one safe analytics interface to components.
- Validate event parameters against an allowlist.
- Gate production collection by canonical hostname and approved consent state.
- Use debug behavior in local and preview environments.
- Trigger conversion events only after confirmed backend or platform success.
- Never pass form field values to analytics.

### Example typed event map

```ts
type AnalyticsEventMap = {
  job_view: {
    job_id: string;
    job_title_key: string;
    job_status: "active" | "closed" | "evergreen";
    market_id: string;
  };
  application_submit: {
    job_id: string;
    form_id: string;
    market_id: string;
    journey_type: "active_job";
  };
  installer_network_submit: {
    form_id: string;
    market_id: string;
    journey_type: "installer_network";
  };
  commercial_form_submit: {
    form_id: string;
    journey_type: "commercial";
    content_id?: string;
  };
};
```

### PII defense

- Allowlist parameters; do not forward arbitrary objects.
- Strip URL query strings from uncontrolled analytics fields.
- Prevent form libraries from automatically capturing field values.
- Add automated tests for prohibited key patterns.
- Review network payloads manually before launch.

---

## 27. Environment Variables and Secrets

### Public variables

Only values safe for every site visitor may use the framework's public environment prefix.

Examples:

- GA4 measurement ID;
- public Turnstile site key;
- production origin; and
- public environment label when necessary.

### Private secrets

Store only in the trusted serverless environment:

- Turnstile secret;
- ATS API key;
- CRM API key;
- webhook signing secret;
- email/SMS provider credentials;
- storage credentials;
- analytics Measurement Protocol secret; and
- monitoring tokens with write privileges.

### Repository rules

- Commit `.env.example` with variable names and descriptions but no secrets.
- Ignore `.env`, `.env.local`, and platform-downloaded secrets.
- Never include real tokens in docs, test fixtures, screenshots, issues, commits, or AI prompts.
- Rotate any credential exposed in Git history; deleting the visible line is not sufficient.
- Use separate production and preview secrets.
- Review access quarterly.

---

## 28. Cloudflare Pages Architecture

### Recommended project settings

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | Next.js Static HTML Export |
| Build command | `npm run build` |
| Output directory | `out` |
| Root directory | Repository root unless monorepo decision changes it |
| Node version | Pinned project-supported version |
| Preview deployments | Enabled for non-production branches or pull requests |

### Git integration behavior

- A production build follows an approved update to `main`.
- Preview builds use Cloudflare preview URLs.
- Failed quality checks must block merging or production deployment where workflow configuration permits.
- Do not expose production-only secrets to untrusted preview changes.
- Production deployments require reproducible dependency installation from the lockfile.

### Custom domain

- Attach the approved canonical domain.
- Select apex or `www` as the canonical host.
- Permanently redirect the alternate host.
- Enforce HTTPS.
- Confirm DNS records and certificate issuance.
- Redirect `*.pages.dev` visitors to the canonical domain in production context when appropriate, while preserving preview behavior.
- Keep preview hostnames non-indexable.

### Rollback

Cloudflare deployment history may support rollback, but the Git repository remains the source of truth. After an emergency rollback:

1. restore service;
2. identify the last known good commit;
3. fix or revert through Git;
4. redeploy from the corrected repository state;
5. verify forms, routes, metadata, and analytics; and
6. record the incident.

---

## 29. Redirect Architecture

Because the site uses static export, implement production redirects through Cloudflare Pages `_redirects`, Bulk Redirects, Redirect Rules, or another approved Cloudflare mechanism.

### Redirect source

Maintain a typed redirect registry:

```ts
type RedirectRecord = {
  source: string;
  destination: string;
  status: 301 | 302 | 307 | 308;
  reason: string;
  approvedAt: string;
  removeAfter?: string;
};
```

Generate or validate the deployable redirect configuration from this registry.

### Required initial redirects

Subject to legacy URL verification:

- `/contact-us` -> `/contact/`;
- `/career-opportunities` -> `/careers/` or the approved successor;
- alternate host -> canonical host;
- HTTP -> HTTPS; and
- material legacy job URLs -> the closest accurate successor where one exists.

### Rules

- Use one hop whenever possible.
- Avoid redirect chains and loops.
- Do not redirect every removed page to the homepage.
- Preserve useful query parameters only when safe and required.
- Never forward applicant PII in query strings.
- Test legacy routes before launch.
- Keep permanent redirects as long as they continue to receive meaningful traffic or links.

---

## 30. Header and Browser Security Architecture

Define public headers in Cloudflare Pages `_headers` or an equivalent controlled configuration.

### Baseline headers to evaluate

- `Strict-Transport-Security` after HTTPS and domain behavior are confirmed;
- `Content-Security-Policy`;
- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy`;
- `Permissions-Policy`;
- frame protections through CSP `frame-ancestors`;
- cache controls by asset class; and
- `X-Robots-Tag` for preview or non-public environments.

### Content Security Policy

Start with an inventory of required origins:

- site assets;
- analytics;
- Turnstile;
- approved form endpoint;
- approved ATS embeds;
- fonts;
- media; and
- any consent manager.

Build the narrowest workable policy. Do not use broad `*` permissions to make integrations easier. Test CSP in report-only mode before enforcement if the integration set is complex.

### Dependency security

- Minimize production dependencies.
- Review dependency purpose before installation.
- Use automated vulnerability alerts.
- Do not apply breaking automated updates directly to production.
- Remove abandoned or unnecessary packages.
- Do not add a component library for a handful of simple components unless it provides clear value.

---

## 31. Caching Strategy

### Static assets

Hashed framework assets may use long-lived immutable caching.

### HTML

HTML must permit timely update after deployment. Use Cloudflare and Pages defaults unless testing demonstrates a need for custom rules.

### Public images and fonts

- use versioned or content-stable filenames;
- apply long caching where safe;
- change filenames for materially replaced assets when necessary; and
- avoid query-string cache busting as the primary asset strategy.

### API responses

Form submission responses must not be cached. Set explicit no-store behavior on sensitive or user-specific endpoints.

### Purging

Normal Pages deployments should publish a coherent new asset set. Document any manual purge procedure and limit broad purges to incidents or verified stale-cache problems.

---

## 32. Image Architecture

### Requirements

- Use WebP or AVIF where supported by the production pipeline, with fallbacks when required.
- Generate dimensions appropriate to display size.
- Prevent layout shift with width and height or aspect ratio.
- Use descriptive SEO-safe filenames.
- Provide useful alt text for informative images and empty alt text for decorative images.
- Avoid embedding important text in images.
- Lazy-load below-the-fold images.
- Prioritize only the true largest-content image when needed.
- Limit hero carousel scripts and media weight.
- Do not use unverified customer logos, project photos, vehicles, or branded equipment.
- Maintain image rights and source records.

### Static-export handling

At launch, use pre-optimized source files and static-compatible image rendering. If Cloudflare Images or Image Transformations are later adopted, document:

- account ownership;
- URL pattern;
- signed delivery if required;
- transformation limits;
- fallback behavior;
- cost; and
- migration impact on indexed image URLs.

---

## 33. Font Architecture

- Prefer self-hosted, licensed WOFF2 files when practical.
- Limit font families and weights.
- Preload only truly critical font files.
- Use `font-display: swap` or the framework's appropriate optimized behavior.
- Define robust fallback stacks.
- Confirm that build-time font tooling does not require an unavailable network fetch in Cloudflare builds.
- Do not include font files without verified licensing.

---

## 34. Accessibility Architecture

Target WCAG 2.2 Level AA as the project standard.

### Structural requirements

- semantic landmarks;
- logical heading hierarchy;
- skip navigation;
- keyboard-operable navigation and controls;
- visible focus states;
- accessible names for controls;
- sufficient color contrast;
- appropriate target size;
- responsive text without clipping;
- reduced-motion support;
- no content that relies only on color, hover, motion, or sound; and
- meaningful link text.

### Form requirements

- persistent labels;
- programmatic field associations;
- clear required-field indication;
- field-level and summary errors;
- focus moved or announced appropriately after failure;
- status announcements for asynchronous submission;
- no inaccessible custom select when native control works;
- resumable or reasonably short mobile flow;
- no time limit unless operationally necessary and adjustable; and
- confirmation that does not rely only on visual change.

### Testing

- automated accessibility scan;
- keyboard-only test;
- screen-reader smoke test;
- zoom and text-resize test;
- mobile orientation and reflow test;
- reduced-motion test; and
- manual review of every form and page template.

Automated testing does not prove accessibility by itself.

---

## 35. Performance Architecture

### Performance priorities

- fast first render of job and careers pages on mobile connections;
- minimal client JavaScript;
- stable layouts;
- optimized hero and card images;
- limited third-party scripts;
- locally served critical assets where practical;
- static HTML at the edge; and
- no render-blocking form or analytics dependency.

### Performance budgets

Set initial budgets during implementation and adjust through measured field data.

Recommended starting guardrails:

- JavaScript per route must be justified and monitored;
- hero media must be aggressively optimized for its rendered size;
- no third-party script without an owner and purpose;
- no autoplay background video at launch unless performance and accessibility tests support it;
- avoid cumulative layout shift from images, fonts, consent tools, and forms;
- test priority templates under mobile throttling; and
- target “Good” Core Web Vitals classifications at the 75th percentile where sufficient field data exists.

### Template performance tests

At minimum test:

- homepage;
- careers hub;
- openings index;
- job detail;
- application page;
- service detail;
- location detail;
- resource article; and
- contact page.

---

## 36. SEO Technical Controls

### Required controls

- one canonical host and protocol;
- trailing-slash consistency;
- self-referencing canonicals for indexable pages;
- unique metadata;
- crawlable internal links;
- accurate robots directives;
- sitemap inclusion based on status;
- semantic HTML;
- valid structured data;
- correct status codes;
- meaningful 404 page;
- redirect validation;
- pagination or filter controls if later required;
- no accidental environment duplication; and
- no orphaned priority pages.

### Build-time SEO validation

Fail the build for:

- duplicate canonical paths;
- missing title or description on an indexable page;
- indexable page with blocked status;
- invalid absolute canonical;
- indexable page missing from route generation;
- broken required internal link;
- schema/visible-content mismatch detectable from data;
- active job without valid schema fields;
- redirect loop; and
- sitemap entry targeting a redirect or noindex page.

Warn or require review for:

- unusually long titles or descriptions;
- missing optional social image;
- old content review dates;
- pages with few internal links;
- large images; and
- near-duplicate content signatures.

---

## 37. AEO, GEO, and LLM Technical Support

The same canonical HTML should serve people, traditional search systems, and AI retrieval systems.

### Requirements

- render primary answers in HTML rather than client-only interfaces;
- use descriptive headings and direct answer paragraphs;
- preserve clear entity names and relationships;
- include accurate authorship and review information when appropriate;
- connect supporting pages through crawlable links;
- use structured data that matches visible content;
- maintain stable canonical URLs;
- keep important content outside inaccessible embeds;
- avoid cloaking or bot-specific content; and
- permit legitimate crawlers according to approved robots policy.

### Machine-readable files

- `robots.txt` and XML sitemap are required.
- `llms.txt` may be evaluated as a supplemental discovery aid, but it must not replace crawlable content, sitemaps, schema, internal linking, or source accuracy.
- Any supplemental file must reference canonical public URLs and must not disclose private or unpublished information.

---

## 38. Local Search Technical Support

- Store verified location facts in one registry.
- Generate location metadata and schema only from verified records.
- Distinguish physical offices, service areas, recruiting markets, and project coverage.
- Support tagged profile links without canonicalizing tracking URLs.
- Keep name, address, phone, URL, and hours consistent with approved profile data.
- Do not generate local landing pages automatically for every city mentioned by the business.
- Validate that location pages have unique, useful, truthful content before indexation.
- Connect each eligible verified location to the correct GBP and Apple Business Connect record where applicable.

---

## 39. Logging and Observability

### Static site monitoring

Monitor:

- production uptime;
- DNS and TLS health;
- priority route status;
- 4xx and 5xx trends where Cloudflare data is available;
- deployment success;
- build duration and failure;
- asset errors;
- broken links; and
- unexpected crawl blocks.

### Form service monitoring

Monitor:

- request count;
- accepted submissions;
- validation rejection categories;
- Turnstile failures;
- rate-limit activity;
- downstream ATS/CRM failures;
- retry/dead-letter backlog;
- latency;
- duplicate prevention; and
- endpoint availability.

### Logging rules

- Use structured logs.
- Assign a non-personal correlation ID.
- Redact authorization headers, tokens, cookies, form bodies, and file metadata.
- Do not log resumes or free-text fields.
- Limit log retention.
- Restrict raw log access.
- Distinguish production, preview, and test.
- Send alerts to named owners.

---

## 40. Error Handling and Resilience

### Static site

- Provide a useful 404 page with careers, openings, and contact paths.
- Avoid exposing stack traces or internal build information.
- Validate outbound and internal links.
- Preserve last known good deployment during build failures.

### Forms

- Keep entered data in the browser after a retryable error where safe.
- Do not claim receipt after a failed downstream submission.
- Use durable queuing only if operational ownership and privacy controls are approved.
- Provide a safe alternate contact method when the primary submission service is unavailable.
- Prevent repeated clicks from creating duplicates.
- Give the user an understandable next step.

### Downstream outage modes

| Condition | Preferred behavior |
|---|---|
| ATS API unavailable | Retry through approved queue or return retryable error; alert owner |
| CRM rejects record | Do not report successful conversion; log sanitized reason and alert |
| Turnstile unavailable | Follow approved fail-open/fail-closed decision; default to protecting the endpoint |
| Analytics unavailable | Form remains usable; business outcome still processes |
| Search platform unavailable | No effect on public site or forms |
| Cloudflare build fails | Existing production deployment remains live |

---

## 41. Testing Architecture

### Unit tests

Cover:

- content selectors;
- slug and canonical builders;
- job status rules;
- date and expiry logic;
- metadata builders;
- schema builders;
- analytics parameter allowlists;
- redirect generation;
- form payload schemas; and
- PII-rejection helpers where implemented.

### Component tests

Cover:

- navigation;
- job cards;
- job requirements;
- job filters;
- CTA variants;
- accordions;
- form fields and errors;
- confirmation states; and
- structured-data rendering.

### End-to-end tests

Cover:

- visit careers hub;
- filter and open active job;
- start an application;
- handle validation errors;
- submit a test application to a test endpoint;
- confirm the correct success state and event;
- join installer network without creating an application;
- submit a commercial test inquiry into the separate pipeline;
- verify legacy redirects;
- verify 404 behavior; and
- verify keyboard navigation.

### Build-output tests

After `next build`, inspect `out/` for:

- expected route HTML;
- canonical tags;
- robots tags;
- sitemap entries;
- JSON-LD;
- `_headers` and `_redirects`;
- missing assets;
- excluded drafts;
- expired jobs; and
- preview/test leakage.

---

## 42. Required Development Scripts

Recommended `package.json` scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "npm run validate && next build",
    "start": "npx serve out",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "validate:content": "tsx scripts/validate-content.ts",
    "validate:jobs": "tsx scripts/validate-jobs.ts",
    "validate:links": "tsx scripts/validate-links.ts",
    "validate:schema": "tsx scripts/validate-schema.ts",
    "validate": "npm run typecheck && npm run lint && npm run test && npm run validate:content && npm run validate:jobs && npm run validate:links && npm run validate:schema",
    "check": "npm run validate && npm run build"
  }
}
```

Exact commands must match the installed framework and lint/test tooling. Avoid recursive script definitions when finalizing `build` and `check`; the production implementation should arrange validation and build commands without calling each other cyclically.

### Recommended final pattern

```json
{
  "scripts": {
    "build": "next build",
    "check": "npm run typecheck && npm run lint && npm run test && npm run validate:content && npm run validate:jobs && npm run validate:links && npm run validate:schema && npm run build"
  }
}
```

---

## 43. GitHub Workflow

### Branch model

- `main` represents the production source state.
- Direct commits to `main` are the approved solo workflow. Feature or content branches are optional and support review and Cloudflare previews when they are used.
- Emergency fixes still require a traceable commit.
- Do not develop directly in generated `out/` files.

### Pull request requirements

Applies when a pull request is used. Pull requests are optional for solo work.

- concise change summary;
- affected routes and systems;
- source-of-truth or approval references for business changes;
- screenshots for visual changes;
- test results;
- accessibility impact;
- SEO/indexation impact;
- analytics impact;
- form or data-handling impact;
- rollback considerations; and
- reviewer approval.

### Protected branch recommendations

These recommendations apply when collaboration or external review requires them. A pull request requirement blocks direct pushes, so it is not applied while one maintainer works directly on `main`. Whether any protection is configured has not been verified.

- require pull request before merge, when pull requests are required;
- require passing status checks;
- require branch to be current where appropriate;
- prevent force pushes and deletion;
- restrict production workflow changes; and
- require review for sensitive files such as workflows, form services, schema, and deployment configuration.

Final rules must match the team's working model and repository plan.

---

## 44. Continuous Integration

### Required checks

On pull request and before production:

1. clean dependency install using the lockfile;
2. TypeScript check;
3. lint;
4. unit/component tests;
5. content validation;
6. job validation;
7. schema validation;
8. internal-link and redirect validation;
9. production static build;
10. generated-output inspection; and
11. optional accessibility/performance smoke checks for preview.

### Workflow security

- Grant minimum GitHub token permissions.
- Do not expose production secrets to pull requests from untrusted sources.
- Pin third-party GitHub Actions to trusted versions or commit SHAs according to repository policy.
- Keep credentials in GitHub or Cloudflare secret stores, never workflow files.
- Review dependency and action updates.
- Avoid running untrusted PR code with privileged secrets.

### Build artifact

Cloudflare Pages may build directly from GitHub. If GitHub Actions also creates an `out/` artifact, define which system is authoritative to avoid divergent builds.

Recommended launch approach: Cloudflare Git integration performs deployment; GitHub Actions performs independent quality gates using the same lockfile and Node version.

---

## 45. Preview, Publication, and Indexation

### Development state

A route or record may exist locally or on a preview deployment. This does not authorize public claims.

### Publication state

A route may reach the production deployment only after required content, business, technical, and privacy review.

### Indexation state

A production page may enter the sitemap and use `index` only when it provides approved, useful, nonduplicative content and meets the applicable page-family requirements.

### Preview controls

- use unique Cloudflare preview domains;
- send an environment-level `X-Robots-Tag: noindex, nofollow` where supported;
- avoid submitting preview URLs to search tools;
- never connect preview forms to production candidate or customer pipelines by default;
- use test keys and test destinations;
- do not publish preview URLs publicly as canonical resources; and
- protect sensitive stakeholder previews with access controls when appropriate.

---

## 46. Content Publication Workflow

1. Create or update a structured record.
2. Verify sources and business facts.
3. Assign draft/review status.
4. Run validation locally.
5. Generate a preview deployment.
6. Review content, responsive behavior, accessibility, metadata, schema, internal links, and conversion path.
7. Obtain required business approval.
8. Change status and indexation decision intentionally.
9. Merge the approved change.
10. Verify the production deployment.
11. Inspect the live URL, schema, analytics, and form behavior.
12. Submit or monitor discovery through sitemap and search tools where appropriate.
13. Record the change and review date.

Urgent active-job changes must use the same source-of-truth record and automated validation, even when the review path is expedited.

---

## 47. Job Publication Workflow

### Create

1. Recruiting confirms an actual opening.
2. A unique job ID is issued.
3. Required facts are entered from an approved intake.
4. Content and legal/business terms are reviewed.
5. Job schema is generated from the same record.
6. Preview tests pass.
7. Status changes to active and published.
8. The site rebuilds and the URL enters the active-job sitemap.
9. Approved recruitment platforms receive matching information.

### Update

- Edit the canonical job record.
- Review whether the change affects eligibility, classification, compensation, location, or application routing.
- Update external distributions.
- Preserve the job ID and URL unless the role materially becomes a different job.
- Update `lastVerifiedAt` after real review.

### Close

- Close the source record first.
- Disable submission.
- Remove active-job schema and sitemap entry.
- deploy promptly;
- update external platforms; and
- route candidates to current accurate alternatives.

---

## 48. Content Management System Decision

### Launch recommendation

Do not add a headless CMS at launch unless the business confirms a nondeveloper publishing workflow that cannot be served effectively through Git-reviewed files.

### Reconsider a CMS when

- recruiting must publish or close jobs without developer involvement;
- updates occur too frequently for rebuild/review flow;
- multiple nontechnical editors require permissions and drafts;
- content scheduling is needed;
- localization becomes operationally significant;
- media governance requires a central library; or
- ATS synchronization becomes the real job source.

### CMS requirements if adopted

- typed content schema;
- draft and approval workflow;
- webhook-triggered rebuilds;
- business-owned account;
- role-based access;
- content validation before publication;
- stable IDs and slugs;
- preview protection;
- export capability;
- audit history;
- cost and outage plan; and
- no direct bypass of job or entity verification.

---

## 49. Scalability and Future Evolution

The architecture should support these future changes without implementing them prematurely:

- ATS becomes the job source of truth;
- webhook-triggered rebuild when a job opens or closes;
- headless CMS for approved editors;
- Cloudflare Worker API for richer forms;
- secure document upload;
- multilingual content;
- regional recruiting expansion;
- programmatic but reviewed market pages;
- data warehouse for acquisition-to-activation reporting;
- authenticated installer portal; or
- migration from static Pages to a runtime platform if server-rendered features become necessary.

### Migration trigger

Review the hosting/runtime decision when the site requires several of:

- authenticated user sessions;
- real-time personalized content;
- server-side rendering on most routes;
- high-frequency job changes that cannot wait for builds;
- transactional application workflows tightly coupled to the app;
- server actions or request-time authorization;
- large-scale search requiring a backend; or
- complex multi-tenant operations.

Do not migrate merely because a server feature is fashionable.

---

## 50. Architecture Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Static export treated like a full Next.js server | Broken forms or unsupported features | Enforce serverless boundary and compatibility review |
| Unverified job data enters typed files | False or risky public listing | Verification status, approval fields, build blockers |
| Job changes wait too long for deployment | Candidates see expired information | Clear owner, urgent workflow, automated rebuild path |
| Browser calls ATS/CRM directly | Credential and applicant-data exposure | Trusted backend integration only |
| Preview connects to production systems | Test records and data leakage | Separate environment keys and destinations |
| Duplicate business facts | Inconsistent site and schema | Central typed registries |
| Recruitment/commercial form reuse | Routing and reporting contamination | Separate schemas, endpoints, pipelines, events |
| Heavy client-side UI | Poor mobile performance and crawlability | Server-first/static-first components |
| Image optimization omitted | Slow pages and weak Core Web Vitals | Preprocess images and enforce budgets |
| Secrets enter Git history | Credential compromise | Secret stores, scanning, rotation procedure |
| Redirect logic conflicts | Loops, chains, ranking loss | Central registry and automated tests |
| Preview pages index | Duplicate URLs and inaccurate claims | Environment headers, noindex, access controls |
| ATS outage loses applications | Candidate and business harm | Durable acceptance or clear retry behavior |
| Logs contain applicant data | Privacy exposure | Structured redacted logging and retention limits |
| Overbuilt CMS/runtime | Cost and maintenance burden | Launch with repository content and explicit triggers |

---

## 51. Open Technical Decisions

The following must be resolved before the affected implementation launches:

1. Which Node.js and Next.js versions will be pinned at scaffold time?
2. Will npm remain the package manager?
3. What is the canonical host: apex or `www`?
4. Who owns the Cloudflare account, zone, and Pages project?
5. Will the project use pull-request branches or another approved merge workflow?
6. Which ATS or recruiting CRM will own candidate records?
7. Will applications be onsite, embedded, or externally hosted?
8. Which system is the job source of truth?
9. How quickly must active job changes reach production?
10. Will a Cloudflare Worker, Pages Function, GHL relay, or vendor endpoint process forms?
11. Where will resumes and attachments be stored?
12. Which file types and maximum sizes are permitted?
13. Which CRM will own commercial inquiries?
14. Which email and SMS services and consent models are approved?
15. Is a consent-management platform required?
16. Which analytics and third-party scripts are approved?
17. Will Cloudflare Web Analytics be enabled in addition to GA4?
18. Which security monitoring and uptime tools will be used?
19. Who receives build, form, ATS/CRM, and uptime alerts?
20. What retention schedules apply to logs, applications, resumes, and CRM data?
21. Are any authenticated installer features in launch scope?
22. Are any translations in launch scope?
23. Is Cloudflare Images or another image service justified?
24. What is the approved relationship between Ultimate Fleet GPS and Doral Transport LLC? Resolved September 10, 2026: none exists (`01-business-source-of-truth.md` section 4.1).

Unresolved decisions must remain explicit blockers or use clearly isolated test fixtures. Production code must not silently choose legal, recruiting, data-handling, or business facts.

---

## 52. Implementation Sequence

### Phase 1: Repository foundation

- Clone and validate the GitHub repository.
- Add README, CLAUDE, Git, editor, Node, and environment files.
- Scaffold Next.js App Router with TypeScript and Tailwind.
- Enable static export.
- Add local quality scripts.
- Create the foundational directory structure.

### Phase 2: Data and page foundations

- Implement business and route types.
- Add content status and verification rules.
- Implement metadata, canonical, sitemap, robots, and schema utilities.
- Build global layout, navigation, footer, and UI primitives.
- Add page-family templates.

### Phase 3: Recruitment system

- Implement role, market, and job registries.
- Add job validation and lifecycle logic.
- Build careers hub, openings index, job pages, requirements, process, and network pages.
- Select and implement the application route.
- Connect the ATS/recruiting CRM test environment.

### Phase 4: Commercial system

- Implement verified service, industry, technology, and location records.
- Build approved commercial pages.
- Implement the separate commercial form and CRM route.

### Phase 5: Search and measurement

- Add analytics contract.
- Validate schema and search files.
- Configure redirects and security headers.
- Connect Search Console, Bing Webmaster Tools, and eligible local profiles after production domain setup.

### Phase 6: Cloudflare deployment

- Connect GitHub to Cloudflare Pages.
- Configure build and output directory.
- Validate preview protections.
- attach custom domain;
- test alternate host and legacy redirects;
- complete production QA; and
- establish rollback and monitoring.

### Phase 7: Optimization

- review field performance;
- reduce bundle and media weight;
- reconcile submission systems;
- improve content and job operations;
- automate safe repetitive checks; and
- revisit architecture only when measured requirements justify it.

---

## 53. Technical Launch Checklist

### Repository

- [ ] GitHub repository is cloned and remote verified.
- [ ] `main` and review workflow are approved.
- [ ] `.gitignore`, `.env.example`, Node version, and lockfile exist.
- [ ] README and CLAUDE instructions reflect the final architecture.
- [ ] No secrets or applicant data exist in Git history.

### Framework

- [ ] Current supported Next.js, React, TypeScript, and Tailwind versions are pinned.
- [ ] `output: "export"` is enabled.
- [ ] trailing-slash behavior matches URL strategy.
- [ ] all public dynamic routes generate successfully;
- [ ] unsupported server features are absent from the static application.
- [ ] local `out/` preview matches Cloudflare behavior.

### Content and jobs

- [ ] Business data comes from validated records.
- [ ] entity relationship is approved.
- [ ] active jobs pass all required validation.
- [ ] draft and blocked records do not deploy.
- [ ] job close workflow is tested.
- [ ] all factual placeholders are removed from production.

### Forms and integrations

- [ ] Recruitment, network, referral, commercial, and contact routes are separate.
- [ ] trusted backend validates all submissions.
- [ ] Turnstile tokens are verified server-side.
- [ ] rate limits and duplicate controls are tested.
- [ ] ATS/CRM failures do not create false success.
- [ ] applicant PII is absent from analytics and broad logs.
- [ ] file uploads meet security and retention requirements or are excluded.
- [ ] preview uses test destinations.

### SEO and discovery

- [ ] canonicals use the approved production origin.
- [ ] metadata is unique and accurate.
- [ ] sitemap contains only approved indexable canonical URLs.
- [ ] robots behavior is correct in production and preview.
- [ ] JSON-LD matches visible content.
- [ ] active job schema validates.
- [ ] legacy redirects work without chains.
- [ ] no orphaned priority routes remain.

### Accessibility and performance

- [ ] keyboard and screen-reader smoke tests pass.
- [ ] form errors and status messages are accessible.
- [ ] color contrast and focus states pass.
- [ ] reduced-motion behavior is respected.
- [ ] priority templates meet approved performance budgets.
- [ ] images have dimensions, appropriate formats, and alt decisions.
- [ ] third-party scripts are approved and limited.

### Cloudflare and operations

- [ ] Git integration points to the correct repository and branch.
- [ ] build command and `out` directory are correct.
- [ ] production and preview environment values are separate.
- [ ] custom domain, HTTPS, and alternate-host redirect work.
- [ ] headers and CSP are tested.
- [ ] uptime, build, form, and integration alerts reach named owners.
- [ ] rollback procedure is tested or documented.
- [ ] production smoke test is complete.

---

## 54. Definition of Done

The technical architecture is implemented when:

- the site produces a complete static export from a clean install;
- Cloudflare Pages deploys the `out` directory reproducibly;
- preview and production environments are isolated;
- approved routes, metadata, canonicals, sitemaps, robots directives, and schema are generated from validated records;
- active jobs follow a tested create, update, close, and archive lifecycle;
- recruitment, installer-network, referral, and commercial forms remain separate;
- protected submissions validate server-side and reach the correct test or production system;
- no private credential exists in client code or Git;
- no applicant or customer PII enters web analytics or broad logs;
- analytics events match the measurement contract;
- redirects and security headers work at the Cloudflare edge;
- accessibility, performance, link, schema, and output tests pass;
- the custom domain and HTTPS behavior are correct;
- monitoring and alerts have named owners;
- rollback can restore a known good production state; and
- all unresolved business, legal, hiring, privacy, and platform decisions are either approved or explicitly excluded from launch.

---

## 55. Authoritative Technical References

Confirm implementation against the current official documentation at scaffold, deployment, and major upgrade time:

- [Cloudflare Pages: deploy a static Next.js site](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Next.js App Router documentation](https://nextjs.org/docs/app)
- [Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/)
- [Cloudflare Pages redirects](https://developers.cloudflare.com/pages/configuration/redirects/)
- [Cloudflare Pages headers](https://developers.cloudflare.com/pages/configuration/headers/)
- [Cloudflare Pages preview deployments](https://developers.cloudflare.com/pages/configuration/preview-deployments/)
- [Cloudflare Turnstile server-side validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
- [GitHub Actions security and secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions)
- [GitHub protected branches](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)
- [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- [Google Search technical requirements](https://developers.google.com/search/docs/essentials/technical)
- [Google JobPosting structured data](https://developers.google.com/search/docs/appearance/structured-data/job-posting)

Platform recommendations and supported framework features change. Current official documentation and validated production testing take precedence over examples in this draft.

---

## 56. Related Project Documents

- `00-project-overview.md`
- `01-business-source-of-truth.md`
- `02-business-overview.md`
- `03-audience-personas.md`
- `04-competitor-research.md`
- `05-keyword-research.md`
- `06-search-intent-map.md`
- `07-site-architecture.md`
- `08-url-strategy.md`
- `09-content-strategy.md`
- `10-on-page-seo-standards.md`
- `11-local-seo-plan.md`
- `12-aeo-geo-llm-optimization.md`
- `13-schema-markup-plan.md`
- `14-conversion-strategy.md`
- `15-analytics-and-measurement.md`

This document defines the build and platform architecture. Later design, content-model, testing, launch, and operations documents may expand implementation details but must not contradict the business source of truth, route strategy, conversion separation, schema rules, or measurement contract.

---

## 57. Maintenance Standard

Update this document when:

- the framework, rendering mode, or hosting platform changes;
- a server-dependent feature is introduced;
- the content or job source of truth changes;
- a CMS is added;
- the ATS, CRM, form, file, analytics, or consent architecture changes;
- a new public route family is added;
- redirect or trailing-slash behavior changes;
- domain or Cloudflare ownership changes;
- a security or privacy incident reveals a gap;
- CI, branch, preview, or deployment workflows change;
- platform support or official guidance changes; or
- a material performance, accessibility, or operational requirement changes.

Record the reason, decision owner, date, affected systems, migration plan, and rollback plan for every material architecture change.
