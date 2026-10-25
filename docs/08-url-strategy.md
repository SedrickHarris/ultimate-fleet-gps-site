# Ultimate Fleet GPS URL Strategy

**Document:** `08-url-strategy.md`  
**Project:** Ultimate Fleet GPS Website and Installer Recruitment Project  
**Business:** Ultimate Fleet GPS  
**Primary domain:** `ultimatefleetgps.net`  
**Status:** Technical and editorial strategy draft  
**Version:** 0.1  
**Last updated:** September 9, 2026

---

## 1. Purpose

This document defines how public, preview, utility, dynamic, migrated, archived, and retired URLs will be created and managed for the Ultimate Fleet GPS website.

It governs:

- canonical domain and protocol;
- route naming;
- trailing-slash behavior;
- job-page URLs;
- careers and installer-network URLs;
- service, industry, technology, and location patterns;
- resource and case-study URLs;
- query parameters and filters;
- canonical tags;
- redirects;
- expired and closed-job behavior;
- Cloudflare preview environments;
- sitemap inclusion;
- indexation controls;
- migration from the existing website; and
- URL change management.

Site hierarchy and page purpose are defined in `07-site-architecture.md`.

---

## 2. URL Strategy Principles

### 2.1 URLs must be stable

Once a public URL earns links, search visibility, citations, job-platform distribution, or user recognition, it should not change without a material reason and an approved redirect.

### 2.2 URLs must reflect user meaning

Use clear human-readable words that describe the page. Avoid internal jargon, database labels, campaign language, and unnecessary identifiers.

### 2.3 One page has one canonical URL

Each public page must have one preferred protocol, host, path, and trailing-slash form.

### 2.4 URLs do not prove business facts

A route such as `/service-areas/texas/` or `/careers/jobs/gps-installer-phoenix-az-sbmi-104/` must not exist publicly unless the underlying service capacity or active job is verified.

### 2.5 URL creation does not authorize indexation

A route can be developed without being public or indexed. Publication and indexation decisions require separate approval.

### 2.6 Avoid keyword stuffing

Use the minimum words required to identify the page. Do not repeat close variants in a slug.

### 2.7 Preserve audience separation

Recruitment URLs belong under `/careers/`. Commercial services, resources, forms, and confirmation pages use separate route families.

---

## 3. Canonical Domain

### Recommended production origin

`https://ultimatefleetgps.net/`

### Canonical host

Use the non-`www` host:

`ultimatefleetgps.net`

### Redirect host

Redirect:

`https://www.ultimatefleetgps.net/*`

to:

`https://ultimatefleetgps.net/*`

### Protocol

Use HTTPS exclusively. Redirect HTTP requests to the canonical HTTPS URL.

### Approval condition

Confirm that `ultimatefleetgps.net` will remain the production domain and that the project has access to its DNS, Cloudflare configuration, and existing redirect requirements before launch.

---

## 4. Canonical URL Format

### Recommended format

`https://ultimatefleetgps.net/careers/mobile-installers/`

### Standards

- Lowercase characters
- Hyphens between words
- No underscores
- No file extensions
- No duplicated words
- No unnecessary dates
- No session IDs
- No tracking parameters in canonical URLs
- No mixed case
- No spaces or encoded spaces
- No default-document names such as `index.html`
- No unnecessary category depth
- One consistent trailing-slash policy

### Trailing slash

Use trailing slashes for canonical public pages.

Examples:

- `/careers/`
- `/careers/jobs/`
- `/services/fleet-telematics-installation/`

Redirect the non-trailing-slash equivalent to the trailing-slash canonical form.

### Query strings

Canonical URLs must omit analytics and campaign query parameters.

---

## 5. Character and Naming Rules

### Allowed

- ASCII lowercase letters `a-z`
- Numbers `0-9` when meaningful
- Hyphens `-`
- Forward slashes `/` for hierarchy

### Avoid

- underscores;
- apostrophes;
- ampersands;
- plus signs;
- commas;
- parentheses;
- trademark symbols;
- accented or non-normalized character variants;
- repeated hyphens;
- leading or trailing hyphens;
- filler words that add no meaning; and
- promotional adjectives.

### Acronyms

Use familiar industry acronyms when they match audience language.

Recommended:

- `gps`
- `eld`
- `tpms` when verified and useful

Use full words when the acronym is unclear or obsolete.

### Numerals

Use numerals when they are the recognized form of a technical term.

Recommended:

- `12-volt`
- `24-volt`

Avoid alternate live URLs such as `/12v-installer-jobs/` and `/12-volt-installer-jobs/`. Select one canonical form and redirect meaningful legacy variants.

---

## 6. Slug Construction Rules

### Good slugs

- `mobile-installers`
- `installer-requirements`
- `fleet-telematics-installation`
- `multi-location-fleet-deployments`
- `transportation-logistics`

### Weak slugs

- `best-mobile-gps-eld-telematics-installation-technician-jobs-near-me`
- `page-2`
- `service1`
- `learn-more`
- `solutions-for-your-business`
- `new-careers-page-final`

### Stop words

Short connecting words may remain when they improve meaning.

Recommended:

- `how-assignments-work`
- `join-our-installer-network`
- `request-a-quote` - Superseded by /contact/ (decision 0011)

Do not remove words mechanically when the result sounds unnatural or ambiguous.

---

## 7. Recruitment URL Namespace

All candidate-facing pages use the `/careers/` namespace.

### Benefits

- Clear audience signal
- Consistent breadcrumbs
- Clean analytics segmentation
- Logical internal linking
- Easier sitemap grouping
- Reduced collision with commercial “installer” service intent
- Clear job and resource ownership

### Approved route pattern

`/careers/[page-or-family]/`

### Do not use

- `/jobs-and-services/`
- `/work-with-us-or-hire-us/`
- `/technicians/` for both customer and candidate content
- `/contractors/` without clear audience context
- `/opportunities/` at the root when it could mean sales or jobs

---

## 8. Core Careers URLs

| Purpose | Canonical URL | Status |
|---|---|---|
| Careers overview | `/careers/` | Launch |
| Mobile installer role | `/careers/mobile-installers/` | Launch |
| Current openings index | `/careers/jobs/` | Launch |
| Active job detail | `/careers/jobs/[job-slug]/` | Active jobs only |
| Installer requirements | `/careers/installer-requirements/` | Launch |
| Assignment process | `/careers/how-assignments-work/` | Launch |
| Application | `/careers/apply/` | Launch utility |
| Application confirmation | `/careers/application-received/` | Noindex utility |
| Candidate FAQs | `/careers/faqs/` | Launch |
| Installer network | `/careers/join-our-installer-network/` | Launch |
| Installer training | `/careers/installer-training/` | Conditional |
| Career resources hub | `/careers/resources/` | Phase 2 |
| Career resource detail | `/careers/resources/[article-slug]/` | Phase 2 |

---

## 9. Active Job URL Pattern

### Recommended pattern

`/careers/jobs/[role]-[location]-[job-id]/`

### Example

`/careers/jobs/mobile-installation-technician-phoenix-az-sbmi-104/`

### Components

| Component | Purpose | Example |
|---|---|---|
| Role | Human-readable job title | `mobile-installation-technician` |
| Location | Primary approved market | `phoenix-az` |
| Job ID | Stable unique public identifier | `sbmi-104` |

### Why include a job ID

- Prevent collisions between similar openings
- Support ATS and CRM reconciliation
- Preserve reporting across platforms
- Distinguish reopened or recurring positions
- Reduce dependence on exact title wording
- Support reliable closing and audit workflows

### Job ID rules

- Use a non-sensitive public identifier.
- Do not expose a candidate, employee, customer, or confidential project ID.
- Keep the ID immutable.
- Store the same ID in the job record, application, analytics, CRM, and distribution records.
- Do not recycle IDs.

### Location component

Use the actual job location or approved hiring territory. Do not use the company headquarters, candidate target market, or a popular city merely to gain visibility.

### Multi-location jobs

If one opening genuinely covers several locations:

- use the most accurate approved regional descriptor in the slug;
- list all eligible locations visibly and in structured data where supported;
- avoid creating duplicate pages for every location unless each is a distinct opening; and
- do not describe field work as remote.

### Nationwide or traveling roles

Use terms such as:

- `traveling-mobile-installation-technician-sbmi-105`
- `nationwide-field-installation-technician-sbmi-106`

only when the role and applicant-location requirements genuinely support those terms.

---

## 10. Job Slug Change Policy

### Default rule

Do not change the URL when minor job-page wording changes.

### Create a new job ID and URL when

- the opening represents a materially new requisition;
- the primary location changes materially;
- the hiring or contracting entity changes;
- the engagement classification changes materially;
- a closed role is reopened as a new recruiting cycle; or
- internal recruiting requires a distinct application and outcome record.

### Do not create a new URL merely because

- compensation wording is clarified;
- the description is edited;
- a preferred qualification changes;
- a typo is corrected;
- the closing date is extended within the same approved requisition; or
- metadata is improved.

### When a live slug must change

1. Create a permanent redirect from the old URL.
2. Update internal links.
3. Update canonical tags.
4. Update structured data.
5. Update sitemap and job-platform links.
6. Preserve job ID and attribution when it remains the same requisition.
7. Verify the redirect in production.

---

## 11. Closed and Expired Job URLs

### Job closure options

| Situation | Recommended response | HTTP or indexation treatment |
|---|---|---|
| Temporarily paused | Keep page only if status is clear and reopening is expected soon | Noindex or expire markup based on policy |
| Filled, useful evergreen context | Show closed status and related openings for a short defined period | Remove JobPosting; noindex unless archive value exists |
| Filled, no continuing value | Remove page | `410` preferred when intentionally gone, or `404` |
| Replaced by materially equivalent active role | Redirect only when user intent and role are genuinely equivalent | `301` to replacement |
| Canceled or erroneous | Remove promptly | `410` or `404`; remove schema and sitemap entry |
| Reopened as new requisition | Publish new job ID and URL | Old page follows closing policy |

### Rules

- Stop the job-specific application.
- Remove or expire `JobPosting` structured data.
- Remove the URL from the active-jobs sitemap set.
- Update or remove external listings.
- Do not redirect every closed job to the homepage.
- Do not redirect to the jobs index if that creates a misleading success response for a nonexistent job.
- Do not reuse a closed job URL for a different role.

### Archive duration

Define a standard based on recruiting, legal, reporting, search, and user needs. The duration is pending business and technical approval.

---

## 12. Jobs Index and Filters

### Canonical index

`/careers/jobs/`

### Potential filters

- `?role=mobile-installer`
- `?location=phoenix-az`
- `?travel=traveling`
- `?type=contract`

### Filter policy

- Use parameters only when the opening inventory justifies filters.
- Canonicalize filtered results to `/careers/jobs/` unless a separately approved indexable landing page exists.
- Apply `noindex,follow` or other approved crawl treatment to filter URLs.
- Do not include filter URLs in XML sitemaps.
- Prevent arbitrary parameter combinations from creating infinite crawl spaces.
- Preserve selected filters for user experience without treating them as new pages.

### Pagination

Do not add pagination until necessary. If introduced, use stable, crawlable page parameters or paths and document their canonical behavior.

---

## 13. Application URLs

### Shared application route

`/careers/apply/`

### Job association

Preferred methods, in order:

1. Application embedded on the canonical job page with job ID included.
2. Shared application route with a validated job ID.
3. Approved external ATS URL with job ID and source preservation.

### Example utility URL

`/careers/apply/?job=sbmi-104`

### Canonical treatment

The canonical application URL is `/careers/apply/` if the shared page is indexable. Parameterized application variants should not create separately indexed pages.

### Campaign attribution

Use analytics parameters without changing the canonical:

`/careers/jobs/mobile-installation-technician-phoenix-az-sbmi-104/?utm_source=indeed&utm_medium=job_board&utm_campaign=sbmi-104`

### Safety rules

- Validate job IDs.
- Do not place sensitive candidate information in URLs.
- Do not include name, email, phone, resume filename, screening answer, or application status in a query string.
- Do not reveal private ATS tokens.

---

## 14. Installer Network URLs

### Canonical route

`/careers/join-our-installer-network/`

### Confirmation route

Recommended:

`/careers/installer-network-received/`

### Rules

- Keep network registration separate from active job application.
- Do not use job titles or location patterns that imply an active opening.
- Do not use `JobPosting` schema.
- Use a separate conversion event.
- Noindex the confirmation route.

### Optional market attribution

Campaign parameters may identify market interest:

`?market=phoenix-az&utm_source=referral`

The parameter must not create a false public market page or promise an opening.

---

## 15. Career Resource URLs

### Hub

`/careers/resources/`

### Article pattern

`/careers/resources/[article-slug]/`

### Examples

- `/careers/resources/what-does-a-telematics-installer-do/`
- `/careers/resources/12-volt-skills-for-fleet-technology-installation/`
- `/careers/resources/traveling-vs-regional-installer-work/`
- `/careers/resources/mobile-installer-tools-and-documentation/`

### Rules

- Use evergreen descriptive slugs.
- Do not include publication dates unless the date is central to the subject.
- Do not place active job pages in the resources directory.
- Do not imply company training or employment terms in educational slugs without approval.

---

## 16. Commercial Core URLs

| Purpose | Canonical URL |
|---|---|
| Services hub | `/services/` |
| Solutions hub | `/solutions/` |
| Industries hub | `/industries/` |
| Technology hub | `/technology/` |
| Service areas hub | `/service-areas/` |
| Resources hub | `/resources/` |
| Case studies hub | `/case-studies/` |
| Commercial FAQs | `/faqs/` |
| About | `/about/` |
| Contact | `/contact/` |
| Request a quote | `/request-a-quote/` - Superseded by /contact/ (decision 0011) |
| Quote confirmation | `/thank-you/` |

Use “technology” as an uncountable category for the route. Do not create simultaneous `/technologies/` and `/technology/` families.

---

## 17. Service URLs

### Pattern

`/services/[service-slug]/`

### Candidate slugs requiring verification

- `gps-tracking-device-installation`
- `eld-installation`
- `fleet-telematics-installation`
- `fleet-dash-camera-installation`
- `asset-tracking-installation`
- `mobile-electronic-equipment-installation`
- `device-removal-and-replacement`
- `installation-troubleshooting`

### Rules

- Use the customer’s service language.
- Avoid stacking synonyms.
- Create one page for one distinct service intent.
- Do not create brand-specific service slugs without approved experience and content.
- Do not create separate “installer,” “installation company,” and “installation service” pages for the same service.
- Do not use “repair,” “service,” “support,” and “troubleshooting” interchangeably.

---

## 18. Solution URLs

### Pattern

`/solutions/[solution-slug]/`

### Candidate slugs requiring verification

- `multi-location-fleet-deployments`
- `fleet-technology-upgrades`
- `device-removal-and-replacement`
- `installation-documentation-and-closeout`
- `on-site-mobile-installation`

### Collision rule

Do not publish the same topic under both `/services/` and `/solutions/` unless user intent and content are materially different.

Example:

- Service: `/services/gps-tracking-device-installation/`
- Solution: `/solutions/multi-location-fleet-deployments/`

The service explains what is installed. The solution explains how a complex project need is solved.

---

## 19. Industry URLs

### Pattern

`/industries/[industry-slug]/`

### Candidate slugs requiring verification

- `transportation-logistics`
- `construction`
- `field-service`
- `utilities`
- `delivery-distribution`
- `municipal-public-sector`
- `rental-equipment`

### Rules

- Use the term the buyer recognizes.
- Combine closely related audiences when they share the same needs and content.
- Split only when intent, services, proof, and operational context differ.
- Do not build an industry page based only on technical possibility.

---

## 20. Technology URLs

### Pattern

`/technology/[technology-slug]/`

### Category examples

- `gps-tracking-devices`
- `electronic-logging-devices`
- `fleet-telematics-hardware`
- `fleet-camera-systems`
- `asset-tracking-devices`

### Named platform examples

A named platform slug may follow:

`/technology/[platform-name]/`

only when:

- experience is verified;
- public use is approved;
- the relationship is accurately described;
- trademark usage is appropriate;
- content is distinct; and
- search and user demand justify a page.

### Rules

- Use the official spelling in visible content.
- Normalize the slug to lowercase hyphenation.
- Do not add “authorized,” “certified,” or “partner” to a slug without documented status.
- Do not create a page from a logo list.

---

## 21. Service Area URLs

### Hub

`/service-areas/`

### State or region

`/service-areas/[state-or-region-slug]/`

Example:

`/service-areas/arizona/`

### City or metro

`/service-areas/[state-slug]/[city-slug]/`

Example:

`/service-areas/arizona/phoenix/`

### Rules

- Use full state names in paths.
- Use recognized city or metro names.
- Do not add “location” or “service-area” to the child slug.
- Do not place ZIP codes in canonical page paths.
- Do not create separate pages for minor neighborhood variants without distinct need.
- Do not create a physical-location URL for a technician residence.
- Do not imply an office through URL, title, schema, or breadcrumb.
- Create only for verified service capacity and distinct content.

### State versus region

Use a state page when state-level coverage and content are meaningful. Use a regional or metro page when service capacity is better described by a cross-city operating market.

Avoid overlapping state, region, metro, and city pages that target the same intent.

---

## 22. Recruitment Market URLs

### Active jobs

Market intent belongs primarily in the active job slug:

`/careers/jobs/[role]-[location]-[job-id]/`

### Evergreen recruiting market pages

Do not create a general `/careers/locations/[city]/` family at launch.

Consider it later only when:

- recurring recruiting demand exists;
- multiple jobs or role types justify a durable market page;
- unique market information exists;
- an owner can maintain it;
- it does not misrepresent current openings; and
- search and candidate data support it.

### Service area distinction

Commercial service-area pages and recruiting market pages must not be treated as interchangeable. Technician recruiting demand does not prove commercial service availability, and commercial capacity does not prove an active job.

---

## 23. Resource URLs

### Hub

`/resources/`

### Detail

`/resources/[article-slug]/`

### Examples

- `/resources/what-is-fleet-telematics-installation/`
- `/resources/how-to-prepare-a-fleet-for-device-installation/`
- `/resources/single-site-vs-multi-location-fleet-rollouts/`

### Rules

- Use descriptive evergreen slugs.
- Do not include `/blog/` and `/resources/` simultaneously for the same content system.
- Do not place careers articles in the commercial resource family.
- Avoid year-based folders unless year is essential to intent.
- Preserve the slug when updating an evergreen article.

---

## 24. Case Study URLs

### Hub

`/case-studies/`

### Detail

`/case-studies/[case-study-slug]/`

### Slug pattern

Prefer an outcome, project type, or approved customer descriptor.

Examples:

- `multi-location-fleet-telematics-rollout`
- `construction-equipment-gps-deployment`
- `regional-fleet-camera-installation`

### Rules

- Do not include a customer name without permission.
- Do not expose confidential project codes or locations.
- Avoid unverified result numbers in slugs.
- If a case study becomes anonymized, preserve the URL when possible or redirect it.

---

## 25. Form and Confirmation URLs

| Form | URL | Confirmation | Default indexation |
|---|---|---|---|
| Job application | `/careers/apply/` or embedded | `/careers/application-received/` | Form conditional; confirmation noindex |
| Installer network | `/careers/join-our-installer-network/` | `/careers/installer-network-received/` | Form indexable if substantive; confirmation noindex |
| Commercial quote | `/request-a-quote/` | `/thank-you/` | Superseded by /contact/ (decision 0011); confirmation noindex |
| General contact | `/contact/` | Inline or `/contact-received/` | Contact index; confirmation noindex |

### Rules

- Keep confirmations audience-specific.
- Do not share `/thank-you/` across recruitment and commercial conversions.
- Do not place submitted data in URL parameters.
- Confirm the server-side or platform submission before routing to success.
- Prevent confirmation pages from appearing in XML sitemaps.

---

## 26. Legal and Policy URLs

### Core routes

- `/privacy-policy/`
- `/terms/`
- `/accessibility/`

### Conditional routes

- `/candidate-privacy-notice/`
- `/sms-terms/`
- `/cookie-preferences/`
- `/equal-opportunity/`

### Rules

- Use stable descriptive slugs.
- Do not date the path for policies that are updated in place.
- Display effective and last-updated dates within the page.
- Preserve old versions internally when required.

---

## 27. Query Parameter Strategy

### Approved parameter categories

- Analytics attribution
- Job ID transfer to application
- User-selected filters
- Referral codes
- Non-sensitive market attribution
- Controlled pagination if required

### Common analytics parameters

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

### Example

`?utm_source=indeed&utm_medium=job_board&utm_campaign=sbmi-104&utm_content=mobile-installer`

### Canonical behavior

Tracking parameters must not alter canonical tags. Canonicalize to the clean page URL.

### Prohibited URL data

Do not place in URLs:

- candidate name;
- email;
- phone;
- street address;
- resume filename;
- Social Security number;
- driver-license number;
- birth date;
- background information;
- compensation offer;
- screening answer;
- application disposition;
- authentication token; or
- confidential customer or project information.

---

## 28. Campaign URL Standards

### Recruitment source values

Use controlled lowercase values such as:

- `indeed`
- `ziprecruiter`
- `linkedin`
- `glassdoor`
- `technical_school`
- `veteran_network`
- `referral`
- `facebook`
- `organic`

### Medium values

- `job_board`
- `paid_social`
- `organic_social`
- `email`
- `sms`
- `referral`
- `partner`
- `qr_code`

### Campaign naming

Use the stable job ID or approved market campaign ID.

Examples:

- `sbmi-104`
- `installer-network-phoenix-q4-2026`

### Rules

- Maintain a campaign naming registry.
- Do not allow contributors to invent new variants for the same source.
- Preserve attribution through the application flow.
- Do not expose sensitive targeting information.

---

## 29. Canonical Tag Rules

### Self-canonical pages

Every indexable page should reference its preferred absolute URL.

Example:

`https://ultimatefleetgps.net/careers/mobile-installers/`

### Parameterized URLs

Canonicalize tracking and non-indexable filter variants to the clean page.

### Duplicate content

Do not rely on canonical tags as the primary fix for unnecessary duplicate routes. Remove, redirect, or prevent duplicates where practical.

### Cross-domain canonical

Do not canonicalize first-party job pages to a job board or ATS by default. Determine which page is intended to be authoritative and ensure the application architecture supports that decision.

### Canonical consistency

The canonical tag, sitemap, internal links, Open Graph URL, structured data, hreflang when applicable, and redirects must agree.

---

## 30. Redirect Standards

### Permanent redirects

Use `301` or platform-equivalent permanent redirects for:

- confirmed URL replacements;
- host normalization;
- protocol normalization;
- trailing-slash normalization;
- legacy-page migration;
- corrected slugs; and
- consolidated duplicate pages.

### Temporary redirects

Use `302` or `307` only for genuinely temporary conditions.

### Redirect quality

- Redirect to the closest relevant equivalent.
- Avoid redirect chains.
- Avoid redirect loops.
- Preserve path meaning.
- Retain campaign parameters only when necessary and safe.
- Test status codes in production.
- Keep important legacy redirects indefinitely unless evidence supports removal.

### Soft 404 avoidance

Do not redirect unrelated removed content to the homepage. Return a true `404` or `410` when no relevant replacement exists.

---

## 31. Existing Website Migration Map

The known existing routes include:

- `/`
- `/contact-us`
- `/career-opportunities`

### Initial redirect recommendations

| Existing URL | New URL | Action | Condition |
|---|---|---|---|
| `/` | `/` | Preserve | Replace content at canonical homepage |
| `/contact-us` | `/contact/` | Permanent redirect | Confirm no conflicting current links or forms |
| `/career-opportunities` | `/careers/` | Permanent redirect | Careers hub becomes canonical replacement |

### Discovery requirement

Before launch, crawl and inventory:

- all HTML routes;
- HTTP and HTTPS variants;
- `www` and non-`www` variants;
- uppercase and lowercase variants;
- paths with and without trailing slash;
- media and document URLs;
- form actions;
- external backlinks;
- indexed URLs;
- XML sitemaps;
- robots rules; and
- job-board destination links.

Do not treat the three known routes as a complete migration inventory until the crawl and search-index review are complete.

---

## 32. Redirect Registry

Maintain a version-controlled redirect registry with:

| Field | Description |
|---|---|
| Redirect ID | Stable identifier |
| Source path | Existing or retired path |
| Destination path | Closest approved replacement |
| Status code | 301, 302, 307, 308, 404, or 410 |
| Reason | Migration, consolidation, correction, closure, or campaign |
| Page family | Job, service, resource, and so on |
| Owner | Responsible person |
| Added date | Implementation date |
| Review date | Verification date |
| Notes | Dependencies or exceptions |

Redirects should be testable in automated QA.

---

## 33. Cloudflare Pages Preview URLs

Cloudflare Pages may create preview or branch deployment URLs.

### Rules

- Preview URLs are not canonical production URLs.
- Prevent search indexation through access control, headers, or robots behavior as appropriate.
- Do not include preview URLs in sitemaps.
- Do not publish preview URLs to job boards, business profiles, social profiles, or customer materials.
- Use production-domain absolute URLs in production metadata and structured data.
- Ensure environment configuration does not leak production form actions or candidate data into test systems.
- Label previews clearly for reviewers.

### Canonical behavior

A preview should not declare itself as the production canonical if doing so causes confusing cross-environment signals. Define environment-specific metadata behavior in the technical architecture.

---

## 34. Development and Local URLs

Local and temporary addresses such as:

- `http://localhost:3000/`
- local network IPs;
- Git branch previews; and
- temporary tunnel URLs

must never appear in production:

- canonical tags;
- Open Graph metadata;
- structured data;
- sitemaps;
- robots files;
- emails;
- job listings;
- QR codes; or
- public profile links.

Use one environment-aware site-origin configuration.

---

## 35. Sitemap URL Rules

### Include

- Canonical indexable pages
- Active job URLs
- Approved recruitment resources
- Verified service, solution, industry, technology, and service-area pages
- Published commercial resources
- Approved case studies
- Legal and trust pages when indexable

### Exclude

- Query-parameter variants
- Filter results
- Internal search results
- Confirmation pages
- Preview URLs
- Drafts
- Private routes
- Noindex pages
- Closed or expired job URLs when removed or noindexed
- Redirecting URLs
- 404 and 410 URLs

### `lastmod`

Use the actual material content update date. Do not set every URL to the build or deployment date.

---

## 36. Robots and Indexation Controls

### Important distinction

`robots.txt` crawl controls do not guarantee removal from search results. Use the correct combination of access control, response codes, `noindex`, canonical tags, sitemap changes, and search-engine tools.

### Noindex candidates

- Application confirmation
- Installer-network confirmation
- Commercial thank-you
- Internal search
- Filter combinations
- Preview environments
- Thin utility forms
- Paused or archived job pages depending on policy

### Do not block before deindexing

If a search engine must see a `noindex` directive, do not block the crawler from accessing the page before it processes that directive.

---

## 37. Duplicate URL Prevention

Prevent duplicate access through:

- HTTP and HTTPS;
- `www` and non-`www`;
- uppercase and lowercase paths;
- trailing and non-trailing slashes;
- `index.html` paths;
- multiple query-order variants;
- duplicate category paths;
- alternate job titles for the same requisition;
- internal search results; and
- printer or share variants.

### Preferred resolution order

1. Prevent generation.
2. Redirect to the canonical form.
3. Use canonical tags for unavoidable variants.
4. Apply noindex for utility views.
5. Remove obsolete routes.

---

## 38. Case and Trailing-Slash Redirects

Examples:

- `/Careers/` → `/careers/`
- `/careers` → `/careers/`
- `/contact-us/` → `/contact/`
- `/index.html` → `/`

Implement redirect rules carefully to avoid conflicts with static assets, platform behavior, and framework-generated paths.

---

## 39. URL Length and Depth

### Recommended

Keep slugs concise enough to read and share while preserving meaning.

Examples:

- `/careers/installer-requirements/`
- `/services/fleet-telematics-installation/`

### Acceptable deeper routes

- `/careers/jobs/mobile-installation-technician-phoenix-az-sbmi-104/`
- `/service-areas/arizona/phoenix/`

### Avoid

- unnecessary nesting such as `/company/about-us/our-company/history/`;
- keyword folders that do not represent navigation;
- dates and taxonomy levels added only for SEO; and
- more than three meaningful content levels without a strong reason.

---

## 40. Media and Download URLs

### Recommended image pattern

`/images/[page-family]/[descriptive-file-name].webp`

Examples:

- `/images/careers/mobile-telematics-installer-fleet-vehicle.webp`
- `/images/services/fleet-gps-device-installation.webp`

### Document pattern

`/documents/[descriptive-file-name].pdf`

### Rules

- Use lowercase hyphenated filenames.
- Use descriptive names without keyword stuffing.
- Avoid revision labels such as `final-final-2`.
- Do not expose confidential customer, candidate, or project data.
- Preserve published asset URLs when practical.
- Redirect replaced high-value documents where supported.
- Use correct file extensions and content types.

Detailed asset naming belongs in `22-image-strategy.md`.

---

## 41. International and Language URLs

The current project assumes one United States English website.

Do not add language or country folders such as:

- `/en-us/`
- `/es/`
- `/us/`

unless multilingual or international requirements are approved.

If added later:

- use dedicated crawlable URLs;
- implement correct language and regional signals;
- translate complete user journeys, forms, legal content, and confirmations;
- avoid automatic location or language redirects that block users; and
- document canonical and hreflang rules.

---

## 42. URL Registry

Maintain a canonical route registry with:

| Field | Purpose |
|---|---|
| Route ID | Stable internal identifier |
| Canonical path | Approved public path |
| Page name | Human-readable label |
| Page family | Careers, job, service, and so on |
| Audience | Candidate, commercial, or shared |
| Primary intent | Search-intent ownership |
| Parent route | Navigation hierarchy |
| Data record | Job, service, location, or content ID |
| Development status | Planned, building, complete |
| Publication status | Private, preview, scheduled, public |
| Indexation status | Noindex, indexable, indexed, removed |
| Canonical target | Self or approved alternative |
| Redirect source | Prior path where applicable |
| Owner | Maintenance responsibility |
| Last reviewed | Freshness date |

The registry should drive sitemap, navigation, internal-link, redirect, and QA checks where practical.

---

## 43. URL Change Workflow

Before changing a public URL:

1. Document the reason.
2. Confirm the new page has meaningfully better ownership.
3. Check backlinks, traffic, job-platform links, citations, analytics, and conversions.
4. Identify every internal reference.
5. Add a direct permanent redirect.
6. Update canonical and metadata URLs.
7. Update structured data.
8. Update XML sitemaps.
9. Update job boards and public profiles.
10. Update campaign assets and QR codes.
11. Deploy through preview and production QA.
12. Monitor crawl, indexation, errors, and traffic.

Avoid changing URLs for cosmetic preferences alone.

---

## 44. URL QA Checklist

For every release, verify:

- Production origin is correct.
- HTTPS is enforced.
- `www` redirects to non-`www`.
- Lowercase is enforced.
- Trailing slashes are consistent.
- Canonical tags are absolute and correct.
- Internal links point directly to canonical URLs.
- No redirect chains exist.
- No loops exist.
- No unexpected duplicate paths exist.
- Sitemaps contain only canonical indexable URLs.
- `lastmod` values are accurate.
- Preview and confirmation pages are not indexed.
- Active jobs resolve and accept applications.
- Closed jobs follow approved policy.
- Job structured data matches the canonical page.
- Tracking parameters preserve attribution without changing canonical URLs.
- Sensitive data is absent from URLs.
- Existing important URLs redirect correctly.
- 404 and 410 responses are genuine.

---

## 45. Initial Route Build List

### Recruitment launch

- `/careers/`
- `/careers/mobile-installers/`
- `/careers/jobs/`
- `/careers/jobs/[job-slug]/`
- `/careers/installer-requirements/`
- `/careers/how-assignments-work/`
- `/careers/apply/`
- `/careers/application-received/`
- `/careers/faqs/`
- `/careers/join-our-installer-network/`
- `/careers/installer-network-received/`

### Commercial launch

- `/services/`
- approved `/services/[service-slug]/` routes
- `/faqs/`
- `/about/`
- `/contact/`
- `/request-a-quote/` - Superseded by /contact/ (decision 0011)
- `/thank-you/`
- `/service-areas/` only when verified

### Legal launch

- `/privacy-policy/`
- `/terms/`
- `/accessibility/`

### Phase 2 and conditional

- `/careers/installer-training/`
- `/careers/resources/`
- `/careers/resources/[article-slug]/`
- `/solutions/`
- `/solutions/[solution-slug]/`
- `/industries/`
- `/industries/[industry-slug]/`
- `/technology/`
- `/technology/[technology-slug]/`
- `/service-areas/[state-or-region-slug]/`
- `/service-areas/[state-slug]/[city-slug]/`
- `/resources/`
- `/resources/[article-slug]/`
- `/case-studies/`
- `/case-studies/[case-study-slug]/`

---

## 46. Open Decisions

- Confirm the canonical production domain.
- Confirm non-`www` host preference.
- Confirm trailing-slash implementation with Next.js and Cloudflare Pages.
- Select job ID format and issuing system.
- Select first-party, embedded, or external application approach.
- Define the closed-job archive duration and response-code policy.
- Confirm which utility forms should be indexed.
- Determine whether a separate candidate privacy URL is required.
- Complete the existing URL and backlink inventory.
- Confirm all legacy redirects.
- Decide whether regional recruiting hub pages will ever be needed.
- Approve service, industry, technology, and location slugs only after business verification.
- Define environment-specific canonical behavior for previews.
- Define Cloudflare redirect implementation and automated tests.

---

## 47. Related Documents

- `00-project-overview.md`
- `01-business-source-of-truth.md`
- `05-keyword-research.md`
- `06-search-intent-map.md`
- `07-site-architecture.md`
- `09-content-strategy.md`
- `10-on-page-seo-standards.md`
- `11-local-seo-plan.md`
- `13-schema-markup-plan.md`
- `15-analytics-and-measurement.md`
- `16-technical-architecture.md`
- `17-cloudflare-deployment.md`
- `25-quality-assurance-checklist.md`
- `26-launch-checklist.md`
- `28-recruitment-strategy.md`
- `30-job-content-schema-specification.md`

---

## 48. Maintenance

Review this strategy when:

- a new page family is approved;
- a role, job, service, market, industry, or technology changes;
- application or ATS architecture changes;
- Cloudflare or Next.js routing changes;
- a domain or host change is proposed;
- crawl or indexation reports show duplicate URLs;
- a migration occurs;
- a public URL is retired; or
- quarterly technical SEO audits identify drift.

Every public URL change must update the route registry, redirects, internal links, canonical metadata, structured data, sitemap, analytics, external listings, and QA records.
