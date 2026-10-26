# Ultimate Fleet GPS On-Page SEO Standards

**Document:** `10-on-page-seo-standards.md`  
**Project:** Ultimate Fleet GPS Website and Installer Recruitment Project  
**Business:** Ultimate Fleet GPS  
**Primary SEO outcome:** Qualified installer discovery and conversion  
**Secondary SEO outcome:** Qualified commercial discovery and conversion  
**Status:** Technical and editorial standards draft  
**Version:** 0.1  
**Last updated:** September 9, 2026

---

## 1. Purpose

This document defines the page-level search optimization standards for the Ultimate Fleet GPS website.

It governs:

- search intent;
- titles and descriptions;
- canonical URLs;
- headings;
- page copy;
- entity and keyword use;
- internal links;
- images and media;
- structured data;
- job pages;
- local pages;
- social metadata;
- crawl and indexation directives;
- Next.js metadata implementation;
- quality assurance; and
- ongoing performance review.

These standards apply to recruitment, commercial, resource, company, legal, and utility page families.

---

## 2. Authoritative Guidance

This standard is informed by current official guidance, including:

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Google title-link guidance](https://developers.google.com/search/docs/appearance/title-link)
- [Google snippet and meta-description guidance](https://developers.google.com/search/docs/appearance/snippet)
- [Google link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Google image SEO best practices](https://developers.google.com/search/docs/appearance/google-images)
- [Google canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google robots meta specifications](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [Google structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google JobPosting documentation](https://developers.google.com/search/docs/appearance/structured-data/job-posting)
- [Google generative AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- [IndexNow documentation](https://www.indexnow.org/documentation)

Search documentation changes. Verify current eligibility and requirements before implementing or materially revising a search feature.

---

## 3. Core Standards

### 3.1 Optimize for the right visitor

The primary recruitment objective is not maximum traffic. It is visibility among candidates likely to become qualified and activated installers.

The secondary commercial objective is not maximum lead volume. It is visibility among organizations with a relevant installation or deployment need.

### 3.2 Match one primary intent

Every indexable page must have:

- one primary audience;
- one primary search intent;
- one primary topic;
- one canonical URL;
- one primary conversion; and
- a clear reason to exist.

### 3.3 Make the page useful without search features

The page must be complete and valuable even if it does not receive a rich result, featured snippet, People Also Ask placement, AI citation, knowledge panel, local result, or job-search enhancement.

### 3.4 Use business truth

Keywords and competitor language do not authorize claims. Employment terms, active jobs, services, service areas, technology relationships, customers, proof, and contact information must be approved.

### 3.5 Keep content visible

Important page content should be available in the rendered HTML and accessible to users. Do not hide primary copy, links, job details, or FAQs solely for search engines.

---

## 4. Page SEO Specification

Every indexable page record should contain:

| Field | Requirement |
|---|---|
| Page ID | Stable internal identifier |
| Page family | Job, role, service, location, resource, and so on |
| Primary audience | Candidate or commercial persona |
| Primary intent | Mapped search intent |
| Primary topic | Main subject or query family |
| Supporting topics | Closely related concepts |
| Canonical URL | Approved absolute URL |
| SEO title | Unique and descriptive |
| Meta description | Unique and useful summary |
| H1 | Clear visible page heading |
| Primary CTA | Intent-aligned next action |
| Structured data | Eligible type and factual source |
| Indexation status | Indexable, noindex, or blocked from publication |
| Internal links | Required inbound and outbound relationships |
| Media | Image or video requirements |
| Owner | Maintenance responsibility |
| Last reviewed | Freshness date |

---

## 5. SEO Title Standards

Google generates title links algorithmically from several page signals. The HTML `<title>` is an important input, but displayed titles may be rewritten. Follow [Google’s title-link guidance](https://developers.google.com/search/docs/appearance/title-link).

### Requirements

- Every indexable page has a unique title.
- State the primary topic clearly.
- Use the real job, role, service, or page name.
- Add location only when it is relevant and verified.
- Use the brand naturally.
- Keep the title concise and readable.
- Match the page’s visible content.
- Avoid boilerplate that overwhelms the distinct topic.

### Working length guidance

**Superseded in part by decision 0018:** rendered titles are 60 characters or fewer, and the page-specific part is 39 characters or fewer where the layout suffix applies.

Aim for approximately 45 to 60 characters when possible, but do not force a title into a fixed count. Search engines may truncate or rewrite titles based on device, query, and context.

### Recommended patterns

| Page family | Pattern |
|---|---|
| Homepage | Mobile Installer Careers & Fleet Installation \| Ultimate Fleet GPS |
| Careers hub | Installer Careers \| Ultimate Fleet GPS |
| Jobs index | Current Installer Openings \| Ultimate Fleet GPS |
| Active job | [Approved Job Title] – [Location] \| Ultimate Fleet GPS |
| Role | Mobile Installer Careers \| Ultimate Fleet GPS |
| Requirements | Mobile Installer Requirements \| Ultimate Fleet GPS |
| Assignment process | How Installer Assignments Work \| Ultimate Fleet GPS |
| Installer network | Join the Installer Network \| Ultimate Fleet GPS |
| Service | [Verified Service] \| Ultimate Fleet GPS |
| Service area | [Verified Service Category] in [Market] \| Ultimate Fleet GPS |
| Resource | [Direct Topic or Question] \| Ultimate Fleet GPS |
| About | About Ultimate Fleet GPS |

These are drafting patterns, not approved final titles.

### Avoid

- Keyword lists
- All caps
- Repeated location names
- Promotional punctuation
- “Best,” “leading,” or “number one” without support
- Pay, dates, addresses, or job codes in the structured job title
- Titles that describe a different page intent
- The same title across several pages

---

## 6. Meta Description Standards

Google may use a page’s meta description when it provides a useful summary, or may generate a different snippet from page content. Follow [Google’s snippet guidance](https://developers.google.com/search/docs/appearance/snippet).

### Requirements

- Write a unique description for every strategic indexable page.
- Summarize the actual page.
- Identify the relevant audience.
- Include the primary topic naturally.
- Add a useful differentiator or expectation.
- Use accurate location language when relevant.
- Set the correct next-step expectation.

### Working length guidance

**Superseded in part by decision 0018:** descriptions are 120-160 characters and unique across indexable pages.

Aim for approximately 140 to 165 characters when practical. This is an editorial guideline, not a ranking factor or guaranteed display length.

### Recruitment description pattern

> Review the role, location, installer requirements, travel expectations, and application steps for this verified Ultimate Fleet GPS opening.

### Commercial description pattern

> Learn how Ultimate Fleet GPS supports verified fleet equipment installation projects, including planning, on-site work, testing, and documentation.

### Avoid

- Reusing one sitewide description
- Unsupported terms
- Keyword lists
- Phone numbers unless strongly justified
- Quotation marks that may truncate awkwardly
- Claims that do not appear on the page
- Generic “learn more” copy

---

## 7. H1 Standards

### Requirements

- Use one primary visible H1 as the project standard.
- Make the H1 specific to the page.
- Align it with the primary search intent.
- Use natural language.
- Keep it distinct from the title when a clearer on-page phrasing helps users.
- Include verified location on active local job and service pages where useful.

### Examples

- Mobile Installer Careers at Ultimate Fleet GPS
- Current Installer Openings
- Mobile Installation Technician in Phoenix, Arizona
- Mobile Installer Requirements
- Fleet Telematics Installation Services

### Avoid

- Logo text as the only H1
- Hidden H1s
- Several competing primary headings
- Exact title duplication when it reads poorly
- H1s composed only of keywords

---

## 8. Heading Hierarchy

### Requirements

- Use headings to express document structure.
- Follow a logical H1, H2, H3 sequence.
- Do not choose heading levels for visual size.
- Use descriptive wording.
- Make sections understandable when scanned.
- Keep repeated component headings useful and specific.

### Recommended recruitment headings

- What You Will Install
- What You Will Do
- Required Qualifications
- Preferred Experience
- Tools and Vehicle Requirements
- Travel and Schedule Expectations
- How to Apply
- What Happens Next

### Recommended commercial headings

- What the Service Includes
- Who the Service Is For
- Installation Process
- Vehicle and Site Preparation
- Testing and Documentation
- Coverage and Scheduling
- Frequently Asked Questions

### Avoid

- “More Information”
- “Solutions” without context
- “Why Us” without a specific benefit
- Repeated “Learn More” headings
- Heading levels skipped for styling convenience

---

## 9. Opening Content

The first visible content should confirm that the visitor is in the right place.

### Recruitment opening should identify

- Role or careers context
- Active or evergreen status
- Location or territory when applicable
- Work type
- Relevant experience
- Primary next step

### Commercial opening should identify

- Service or project context
- Intended customer
- Primary benefit or problem addressed
- Geographic or scope limitation when necessary
- Primary next step

### Answer-led opening

For informational pages, provide a direct answer in the first one or two paragraphs, then expand with detail.

### Avoid

- Long brand introductions before answering intent
- Generic mission language
- Unverified claims
- Repeating the title without adding context

---

## 10. Body Content Standards

### Requirements

- Satisfy the full mapped intent.
- Answer practical audience questions.
- State relevant conditions and limitations.
- Use examples only when accurate or clearly hypothetical.
- Include original company or expert input.
- Make important information easy to scan.
- Provide an intent-matched next step.
- Link to supporting pages where useful.

### No universal word count

Page length should follow the subject and user need. Do not pad a page to reach a minimum word count.

### Paragraphs

- Keep paragraphs focused.
- Use lists when sequence or comparison benefits.
- Use tables for exact mappings.
- Use definitions for technical terms.
- Avoid repetitive summaries.

### Technical terminology

On first meaningful use, expand an acronym when the audience may not know it.

Example:

> An electronic logging device (ELD) records required driver and vehicle information for supported fleet operations.

Do not define technical capabilities beyond verified scope.

---

## 11. Keyword and Entity Use

### Requirements

- Use the primary topic in the title, H1, opening, and body when natural.
- Use close variants where they improve clarity.
- Include relevant entities such as role, equipment category, service, location, and organization.
- Use the canonical company name consistently.
- Separate candidate and commercial language.
- Write for users, not density targets.

### Do not use

- Fixed keyword density
- Hidden text
- Repetitive exact-match phrases
- Keyword-stuffed headings
- Lists of cities without useful context
- Technology names added only for traffic
- Competitor names without a legitimate comparison purpose
- The meta-keywords tag

Google states that the meta-keywords tag is not used for indexing or ranking. See [Google’s supported meta tags](https://developers.google.com/search/docs/crawling-indexing/special-tags).

---

## 12. Recruitment Entity Accuracy

Every recruitment page must distinguish:

- Public brand
- Legal hiring or contracting organization
- Role family
- Active job
- Job location
- Applicant location requirement
- Engagement classification
- Equipment experience
- Installer network

### Requirements

- Use the approved organization name.
- Do not use Ultimate Fleet GPS and Doral Transport LLC interchangeably. No relationship exists (`01-business-source-of-truth.md` section 4.1).
- State classification at the job level.
- Identify active status accurately.
- Avoid using “employee,” “contractor,” or “subcontractor” generically.
- Do not present an interest form as a job.

---

## 13. Commercial Entity Accuracy

Every commercial page must distinguish:

- Organization
- Physical office
- Mobile service area
- Technician coverage
- Service
- Technology category
- Named platform
- Customer
- Partner
- Industry

### Requirements

- Do not represent technician coverage as an office.
- Do not represent experience as certification or authorization.
- Do not represent a technology name as a partnership.
- Do not present proposed services as current.
- Do not present a project location as permanent coverage.

---

## 14. Internal Link Standards

Google recommends crawlable links and descriptive, concise anchor text. Every important page should receive at least one relevant internal link. See [Google’s link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).

### Technical requirements

- Use semantic anchor elements with valid `href` values.
- Link directly to canonical URLs.
- Avoid JavaScript-only navigation when a normal link is appropriate.
- Make links keyboard accessible.
- Use visible focus states.
- Distinguish links from surrounding text.

### Editorial requirements

- Describe the destination.
- Keep anchor text concise.
- Use context around the link.
- Vary wording naturally.
- Link to the next useful step.
- Avoid excessive exact-match anchors.

### Good anchors

- current installer openings
- mobile installer requirements
- how assignments work
- fleet telematics installation services
- verified service areas

### Weak anchors

- click here
- read more
- this page
- learn more, when no context is supplied

### Orphan-page rule

No strategic indexable page may be orphaned.

---

## 15. Recruitment Internal Linking

### Careers hub links to

- Current openings
- Mobile installer role
- Requirements
- Assignment process
- Candidate FAQs
- Installer network

### Role page links to

- Matching active jobs
- Requirements
- Assignment process
- Relevant resources
- Installer network

### Job page links to

- Application action
- Shared requirements
- Assignment process
- Candidate FAQs
- Company information
- Related openings

### Resource links to

- Role page
- Requirements
- Relevant active openings
- Installer network

Do not let supporting links compete with the job page’s application action.

---

## 16. Commercial Internal Linking

### Service page links to

- Related services
- Relevant solutions
- Verified industries
- Verified technologies
- Verified service areas
- Process resources
- Case studies
- Quote action

### Service area links to

- Services available in the market
- Parent region
- Relevant nearby markets
- Local proof
- Commercial inquiry

### Resource links to

- Primary related service or solution
- Supporting resource
- Relevant proof
- Commercial action

### Candidate cross-link

A service page may contain a discreet link to careers when mixed intent is likely. It must not become the primary CTA.

---

## 17. External Link Standards

### Use external links when they

- cite an authoritative technical source;
- identify an approved platform or partner;
- support a legal or policy reference;
- provide a useful candidate resource; or
- link to a company-controlled employer or business profile.

### Requirements

- Verify the destination.
- Describe the destination accurately.
- Avoid affiliate or paid relationships unless disclosed.
- Use `rel` attributes when required by the link relationship.
- Do not open every external link in a new tab by default.
- Review critical external links periodically.

### Paid or sponsored links

Use the appropriate sponsored relationship attributes and disclosures.

---

## 18. Canonical URL Standards

Google recommends self-referential canonicals and consistent internal links to preferred URLs. See [Google’s canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

### Requirements

- Every indexable page has one absolute self-canonical.
- Canonical uses HTTPS.
- Canonical uses the non-`www` host.
- Canonical uses lowercase and the approved trailing slash.
- Canonical excludes tracking parameters.
- Internal links and sitemap entries use the same URL.
- Structured data and Open Graph URL agree.

### Parameter variants

Tracking and non-indexable filter variants canonicalize to the clean URL.

### Do not

- Canonicalize unrelated pages.
- Use URL fragments as canonical targets.
- Change canonicals through client-side JavaScript.
- Point first-party job pages to an external job board without a deliberate architecture decision.
- Use canonical tags as a substitute for removing accidental duplicates.

---

## 19. Indexation Directives

### Indexable pages

Use default index behavior when a page is approved for search discovery.

### Noindex candidates

- Application confirmation
- Installer-network confirmation
- Commercial thank-you
- Search results
- Filter combinations
- Thin utility forms
- Preview environments
- Paused or archived jobs according to policy

### Requirements

- Do not include noindex pages in XML sitemaps.
- Do not block crawler access before it can process `noindex` when removal is required.
- Do not use noindex to resolve canonical duplication when canonicalization or redirects are appropriate.
- Verify final directives in rendered HTML or response headers.

See [Google’s robots meta documentation](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).

---

## 20. Job Page SEO Standards

### Required page signals

- Unique approved job title
- Accurate job location
- Job ID
- Active status
- Hiring organization
- Role description
- Responsibilities
- Required and preferred qualifications
- Engagement and employment type
- Compensation when approved or required
- Schedule and travel
- Application action
- Date posted
- Valid-through or review date
- Job-specific canonical URL

### Title and H1

Use the actual role title and location. Do not add promotional terms, dates, pay, addresses, or company names to the structured-data job title.

### Content completeness

Google’s current job policy requires complete, truthful, current job information and a way to apply. False jobs, false locations, expired jobs, keyword-stuffed titles, and resume collection without an open position can violate policy. See [Google’s JobPosting documentation](https://developers.google.com/search/docs/appearance/structured-data/job-posting).

### Job index

- List only active jobs.
- Link to the canonical detail page.
- Do not place JobPosting markup on the list page.
- Provide a clear no-openings state.

### Closed jobs

- Stop applications.
- Remove or expire JobPosting markup.
- Remove from active sitemap inventory.
- Follow the approved archive, redirect, 404, or 410 policy.
- Notify supported search systems of the change.

### Installer network

Do not use JobPosting markup or active-job wording on the installer-network page.

---

## 21. Service Page SEO Standards

### Required page signals

- Verified service name
- Clear service definition
- Intended customer
- Scope and exclusions
- Equipment and vehicle context
- Process
- Testing and documentation
- Geographic availability
- Proof
- FAQs
- Commercial CTA

### Avoid

- Combining several distinct services only to rank broadly
- Splitting minor synonyms into separate pages
- Platform names without verified relevance
- Software benefits represented as installation outcomes
- Unverified nationwide language

---

## 22. Service Area SEO Standards

### Required page signals

- Verified market name
- Accurate service availability
- Clear office versus service-area status
- Services available in market
- Scheduling or scope limits
- Market-specific content
- Local or regional proof where available
- Related service links
- Commercial CTA

### Avoid

- City-name substitution
- Lists of ZIP codes as primary content
- Fake addresses
- Virtual offices presented as staffed locations
- Technician residences
- Repeated nearby-market pages with no distinct value
- LocalBusiness schema for ineligible locations

### Recruitment distinction

An active job in a market does not automatically justify a commercial service-area page. Commercial service capacity does not automatically prove an active local job.

---

## 23. Resource Page SEO Standards

### Required page signals

- One clear question or informational topic
- Direct answer near the beginning
- Original expert value
- Logical sections
- Relevant examples or decision criteria
- Conditions and limitations
- Supporting links
- Transactional next step
- Author or reviewer when appropriate
- Honest published and updated dates

### Avoid

- Generic AI summaries
- Rewriting competitor content
- Thin definitions
- Content without a related business or candidate journey
- Changing dates without material updates

---

## 24. Image SEO Standards

Google recommends descriptive filenames and alt text and placing images near relevant text. See [Google image SEO guidance](https://developers.google.com/search/docs/appearance/google-images).

### File naming

- Lowercase
- Hyphenated
- Descriptive
- Concise
- Accurate
- No version clutter
- No keyword stuffing

Example:

`mobile-telematics-installer-fleet-vehicle.webp`

### Alt text

Alt text should communicate the image’s content and purpose when the image conveys information.

Good:

> Mobile installer connecting approved telematics hardware inside a commercial fleet vehicle.

Weak:

> GPS installer jobs telematics installer jobs mobile installer careers.

### Decorative images

Use empty alt text when an image is purely decorative.

### Captions

Use captions when they add context, evidence, attribution, or technical explanation.

### Placement

Place relevant images near the content they support.

### Technical requirements

- Use modern formats where supported.
- Provide correct intrinsic dimensions.
- Use responsive sizes.
- Avoid layout shift.
- Compress appropriately.
- Do not lazy-load the primary largest-contentful hero image without testing.
- Lazy-load below-the-fold images.
- Preserve quality needed for technical understanding.

### Truth requirement

Do not present stock or AI imagery as Ultimate Fleet GPS work, staff, customers, facilities, or equipment relationships.

---

## 25. Video SEO Standards

### Requirements

- Host video on a stable page with meaningful surrounding content.
- Use a descriptive title and summary.
- Provide captions.
- Provide a transcript when useful.
- Use a representative thumbnail.
- Avoid autoplay with sound.
- Support reduced-motion preferences.
- Keep video from blocking page speed or primary content.
- Add eligible structured data only when accurate.

### Recruitment videos

Potential subjects:

- Installer role overview
- Assignment process
- Tool and documentation expectations
- Authentic installer story
- Verified training overview

### Commercial videos

Potential subjects:

- Installation process
- Fleet readiness
- Testing and closeout
- Approved project case study

---

## 26. Breadcrumb Standards

### Requirements

- Show visible breadcrumbs on nested content.
- Reflect actual hierarchy.
- Use human-readable labels.
- Link parent items.
- Do not link the current page to itself.
- Match BreadcrumbList structured data.

### Examples

- Home > Careers > Current Openings > Job Title
- Home > Careers > Installer Resources > Article
- Home > Services > Fleet Telematics Installation
- Home > Service Areas > Arizona > Phoenix

---

## 27. Structured Data Standards

Google states that structured data can help it understand page content and can make eligible pages available for rich results. Eligibility does not guarantee display. See [Google’s structured-data gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) and [general guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

### Requirements

- Use JSON-LD unless a documented implementation reason requires otherwise.
- Match visible content.
- Use verified facts.
- Use the most specific appropriate type.
- Include required properties.
- Add recommended properties when supported.
- Use canonical URLs.
- Validate syntax and eligibility.
- Remove time-sensitive markup when no longer valid.

### Page-family mapping

| Page family | Potential type |
|---|---|
| Homepage | Organization, WebSite |
| Careers hub | WebPage, BreadcrumbList |
| Active job | JobPosting, BreadcrumbList |
| Role page | WebPage, BreadcrumbList |
| Service page | Service, BreadcrumbList |
| Service area | Service and appropriate organization references |
| Resource | Article or BlogPosting, BreadcrumbList |
| FAQ | FAQPage when eligible |
| About | AboutPage, Organization reference |
| Contact | ContactPage, Organization reference |

### Prohibited practices

- Marking up hidden content
- JobPosting on the jobs index
- JobPosting on installer-network pages
- Review markup for reviews not controlled or eligible
- LocalBusiness locations that do not exist or are ineligible
- Product markup for services or jobs
- Fabricated ratings
- Incorrect hiring organization

Detailed rules belong in `13-schema-markup-plan.md`.

---

## 28. Open Graph and Social Metadata

### Required fields

- `og:title`
- `og:description`
- `og:url`
- `og:type`
- `og:image`
- `og:image:alt`
- Twitter card metadata or compatible equivalents

### Requirements

- Match the page’s actual topic.
- Use canonical production URL.
- Use an approved image.
- Keep images readable at platform crops.
- Avoid text-heavy images.
- Do not imply a job is active when shared after closure.
- Generate job-specific social metadata only for active openings.

### Job closing

Update or remove share metadata that continues to present a closed role as active.

---

## 29. Mobile On-Page Standards

Recruitment traffic is expected to include significant mobile use. The exact share must be measured after launch.

### Requirements

- Primary content visible without horizontal scrolling
- Readable font sizes
- Adequate tap targets
- Short, accessible forms
- Persistent CTA only when it does not obstruct content
- No intrusive interstitials
- Fast primary image loading
- Stable layout
- Clear errors near fields
- Phone and email actions labeled accurately
- Essential job terms easy to scan

### Job page mobile order

1. Title and location
2. Active status and essential terms
3. Apply action
4. Role summary
5. Responsibilities
6. Qualifications
7. Travel, tools, schedule, and expenses
8. Company and process context
9. Repeated apply action

---

## 30. Core Web Vitals and Page Experience

On-page implementation should support the performance budget defined in `24-performance-budget.md`.

### Priorities

- Optimize largest contentful paint.
- Prevent layout shifts.
- Keep interactions responsive.
- Reduce JavaScript where static HTML is sufficient.
- Load third-party forms and scripts carefully.
- Reserve media dimensions.
- Use optimized fonts.
- Avoid heavy carousels and decorative animation that delay core content.
- Test on real mobile conditions.

Performance is one part of page quality. Passing a metric does not guarantee ranking.

---

## 31. Next.js Metadata Implementation

Use the Next.js App Router metadata APIs.

### Static pages

Use a typed `metadata` export for stable pages.

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installer Careers | Ultimate Fleet GPS",
  description:
    "Review current mobile installer openings, requirements, assignment information, and future installer-network opportunities.",
  alternates: {
    canonical: "/careers/",
  },
};
```

### Dynamic pages

Use `generateMetadata` for approved job, service, technology, location, resource, and case-study records.

### Metadata base

Configure the production site origin once and prevent localhost or preview hosts from leaking into production metadata.

### Requirements

- Type-check metadata.
- Escape or sanitize dynamic values.
- Do not generate metadata from unverified free-form input.
- Include fallbacks for missing optional data.
- Fail the build or publication check when required page metadata is absent.

---

## 32. Next.js Robots Implementation

Use page metadata or response headers for route-specific indexation.

### Example noindex metadata

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};
```

### Environment rule

Preview and non-production deployments should be protected from indexation through the strongest practical environment control. Do not rely on a single mechanism without verification.

### Production rule

Do not accidentally carry sitewide noindex behavior into production.

---

## 33. Sitemap Standards

### Include

- Canonical indexable URLs
- Active jobs
- Approved recruitment resources
- Verified services and markets
- Published commercial resources and case studies
- Accurate modification dates

### Exclude

- Noindex pages
- Redirects
- 404 and 410 pages
- Query variants
- Search and filter pages
- Confirmation pages
- Drafts and previews
- Closed jobs removed from active search inventory

### Accuracy

Use a real material update date. Do not rewrite all `lastmod` values at every deployment.

---

## 34. Job Discovery Notifications

For active job URLs, evaluate:

- XML sitemap inclusion;
- accurate `lastmod`;
- Google Indexing API use where approved and technically appropriate;
- IndexNow notification for participating search engines;
- Google Search Console inspection; and
- Bing Webmaster verification.

IndexNow documentation states that URLs may be submitted when added, updated, or deleted, but a successful response confirms receipt rather than guaranteed indexing. See [IndexNow documentation](https://www.indexnow.org/documentation).

### Closing workflow

Notify relevant systems when an active job closes or is removed. Search notification does not replace the correct page status, schema removal, sitemap update, and external-listing closure.

---

## 35. AI and Generative Search Standards

Google’s current guidance states that foundational SEO practices remain relevant to its generative AI search features. See [Google’s AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).

### Requirements

- Ensure pages are crawlable and indexable when intended.
- Use accurate, useful content.
- Provide clear text, not media-only answers.
- Use internal links that express relationships.
- Support claims with first-party evidence.
- Keep entity details consistent.
- Make important answers concise and extractable.
- Maintain strong page experience.
- Use structured data only when it matches visible content.

### Do not

- Create special machine-only summaries.
- Seek inauthentic mentions.
- Mass-produce thin content.
- Add unsupported facts to appear quotable.
- Guarantee inclusion in AI answers.
- Treat AEO or GEO as a replacement for SEO fundamentals.

---

## 36. Featured Snippet and PAA Standards

### Definition format

Answer “what is” questions in a concise paragraph, then expand.

### Process format

Use an accurate ordered list for “how it works” questions.

### Requirement format

Use a clear list or table separating required and preferred criteria.

### Comparison format

Use a table when comparing roles, services, or project options.

### FAQ format

- Use natural questions.
- Answer directly.
- Add conditions.
- Link to detailed content when useful.

### Rule

Do not distort content or create repetitive Q&A solely to pursue a search feature.

---

## 37. Local On-Page Signals

### Approved local signals may include

- Verified business name
- Eligible address
- Correct phone
- Business hours
- Service-area description
- Market-specific services
- Active local job location
- Original local proof
- Directions or access information for customer-facing locations
- Accurate structured data
- Links to approved profiles

### Consistency

On-page information must match Google Business Profile, Bing Places, Apple Business Connect, directories, and controlled social profiles.

### Do not

- Add city lists to footers for rankings.
- Create doorway pages.
- Use hidden location text.
- Present service areas as physical offices.
- Add LocalBusiness markup for ineligible technician bases.

---

## 38. Page Freshness Standards

### Display dates when useful

- Active job: posted and closing or review dates
- Resource: published and materially updated dates
- Policy: effective and updated dates
- Market content: last-reviewed date where capacity changes
- Case study: approved project timeframe

### Do not

- Change dates without material updates.
- Use an updated date as decoration.
- Leave expired job dates active.
- Hide material staleness.

### Owners

Every time-sensitive page requires a named internal owner and next-review date.

---

## 39. Duplicate and Cannibalization Standards

### Review for overlap between

- Careers hub and jobs index
- Role page and job page
- Requirements and training
- Active jobs and installer network
- Service and resource
- Service and solution
- Service and service area
- Service and technology
- State and city pages

### Resolution options

1. Clarify intent.
2. Consolidate content.
3. Redirect the weaker page.
4. Reassign keywords and links.
5. Noindex a utility page.
6. Remove an unsupported page.

Do not solve every overlap with canonical tags.

---

## 40. On-Page CTA Standards

### Recruitment primary actions

- Apply for This Opening
- View Current Openings
- Join the Installer Network
- Review Installer Requirements
- Learn How Assignments Work

### Commercial primary actions

- Discuss Your Project
- Request a Quote
- Explore Installation Services
- Review the Installation Process

### Requirements

- Match the CTA to the page intent.
- Use a descriptive label.
- Maintain visual prominence for the primary action.
- Explain what happens after submission.
- Repeat the CTA only when useful after major decision content.
- Track interaction without exposing sensitive data.

### Avoid

- Multiple equally prominent actions
- “Submit” without context
- Candidate and commercial actions in the same form
- Buttons that do not work
- Job application links after closure

---

## 41. Accessibility and SEO Alignment

Accessible content supports users and machine understanding.

### Requirements

- Semantic landmarks
- Logical headings
- Descriptive links
- Form labels
- Useful error text
- Image alt decisions
- Captions and transcripts
- Keyboard access
- Sufficient contrast
- Visible focus
- Correct language declaration
- Valid HTML

Do not misuse ARIA to replace native semantic HTML.

Detailed requirements belong in `23-accessibility-standards.md`.

---

## 42. On-Page QA Checklist

### Intent and content

- Primary audience is identified.
- Primary intent matches the page.
- Page provides unique value.
- Opening establishes context.
- Required questions are answered.
- Claims are approved.
- CTA matches intent.

### Metadata

- Unique title exists.
- Unique description exists.
- H1 is visible and clear.
- Canonical is absolute and correct.
- Robots directive is intentional.
- Open Graph metadata is accurate.
- Social image is approved.

### Links

- Internal links are crawlable.
- Anchor text is descriptive.
- Links point to canonical URLs.
- No important page is orphaned.
- External destinations work.
- Closed jobs are not linked as active.

### Media

- Filename is descriptive.
- Alt decision is correct.
- Dimensions are reserved.
- Image is optimized.
- Image is accurate and approved.
- Captions or transcripts exist when needed.

### Structured data

- Type is eligible.
- Required fields exist.
- Visible content matches.
- URLs are canonical.
- Job status is active.
- Validation passes.
- No prohibited markup exists.

### Technical

- Status code is correct.
- HTTPS and host are canonical.
- Mobile layout works.
- Page performs within budget.
- HTML is valid enough for metadata parsing.
- Content is present in rendered output.
- Sitemap status matches indexation.
- Preview URLs remain protected.

### Conversion

- Form or CTA works.
- Job ID and source are preserved.
- Confirmation is accurate.
- Analytics event fires once.
- Sensitive data is not sent to analytics or URLs.

---

## 43. Automated Checks

Where practical, the build and CI process should detect:

- Missing titles
- Duplicate titles
- Missing descriptions
- Duplicate descriptions
- Missing H1
- Multiple project-standard H1s
- Missing canonical
- Non-production canonical host
- Canonical and route mismatch
- Broken internal links
- Redirect chains
- Orphan pages
- Missing image alt decisions
- Oversized images
- Invalid structured data syntax
- Missing required job fields
- Expired active jobs
- JobPosting on non-job pages
- Noindex URLs in sitemap
- Confirmation URLs in sitemap
- Localhost or preview URLs in production output
- Unexpected 404 pages

Automated checks support human review. They do not determine factual accuracy or content usefulness.

---

## 44. Search Console and Bing Review

### Google Search Console

Monitor:

- Page indexing
- Crawl errors
- Canonical selection
- Search queries
- Page and query performance
- Core Web Vitals
- Rich-result reports
- Manual actions
- Security issues
- URL inspection

### Bing Webmaster Tools

Monitor:

- Site verification
- Sitemap processing
- Crawl and indexing issues
- Search performance
- URL inspection
- SEO reports
- Site scan
- Backlinks where available

### Review by page family

Separate reporting for:

- Active jobs
- Careers evergreen pages
- Recruitment resources
- Services
- Service areas
- Commercial resources
- Company and trust pages

---

## 45. On-Page Performance Review

For each strategic page, review:

- Impressions
- Clicks
- Click-through rate as contextual data
- Query relevance
- Average position as directional data
- Landing-page engagement
- CTA interaction
- Form start
- Form completion
- Qualified outcome
- Assisted outcome
- Device type
- Geography
- Source

### Recruitment outcome

Connect job-page performance to qualified applicants, onboarding, and activated installers.

### Commercial outcome

Connect service-page performance to qualified inquiries, opportunities, and projects when possible.

Do not optimize a page for higher click-through rate if the change reduces candidate or customer quality.

---

## 46. Exceptions

An exception may be approved when:

- legal requirements conflict with editorial preferences;
- a third-party application system limits metadata control;
- a campaign utility page should remain public but noindex;
- a legacy URL must be preserved;
- accessibility requires different presentation;
- a platform has a documented technical limitation; or
- a temporary operational need requires controlled deviation.

Document:

- the rule;
- the exception;
- the reason;
- the owner;
- the approval;
- the affected URLs;
- the review date; and
- the removal or resolution plan.

---

## 47. Open Decisions

- Which business and hiring organization names are canonical?
- Which active jobs will exist at launch?
- Which utility pages will be noindex?
- Which job-closure policy will be implemented?
- Which commercial services and markets are approved?
- Which organization and location structured data are eligible?
- Will application forms be first-party, embedded, or ATS-hosted?
- Which social images and employer assets are approved?
- Will IndexNow and Google’s job URL notification workflow be automated?
- Which SEO checks will block builds versus produce warnings?
- Which monitoring platform will track production metadata and links?
- Who owns quarterly on-page audits?

---

## 48. Related Documents

- `00-project-overview.md`
- `01-business-source-of-truth.md`
- `05-keyword-research.md`
- `06-search-intent-map.md`
- `07-site-architecture.md`
- `08-url-strategy.md`
- `09-content-strategy.md`
- `11-local-seo-plan.md`
- `12-aeo-geo-llm-optimization.md`
- `13-schema-markup-plan.md`
- `14-conversion-strategy.md`
- `15-analytics-and-measurement.md`
- `16-technical-architecture.md`
- `22-image-strategy.md`
- `23-accessibility-standards.md`
- `24-performance-budget.md`
- `25-quality-assurance-checklist.md`
- `26-launch-checklist.md`
- `30-job-content-schema-specification.md`

---

## 49. Maintenance

Review these standards:

- when Google, Bing, or job-search guidance changes;
- when Next.js metadata behavior changes;
- when the site architecture changes;
- when a new page family launches;
- after significant Search Console or Bing findings;
- when structured-data eligibility changes;
- during quarterly SEO audits; and
- after any incident involving incorrect job, canonical, indexation, or entity data.

Record material changes and update templates, automated tests, QA checklists, content briefs, schema logic, and publishing workflows.
