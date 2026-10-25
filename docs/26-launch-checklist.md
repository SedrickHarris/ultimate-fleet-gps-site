# Ultimate Fleet GPS Launch Checklist

**Document:** 26-launch-checklist.md  
**Project:** Ultimate Fleet GPS Website and Installer Recruitment Project  
**Business:** Ultimate Fleet GPS  
**Repository:** https://github.com/SedrickHarris/ultimate-fleet-gps-site.git  
**Framework:** Next.js App Router, TypeScript, Tailwind CSS  
**Hosting:** Cloudflare Pages static export  
**Primary objective:** Launch an accurate, accessible, fast, indexable recruitment-first website with working conversion paths.  
**Status:** Working launch standard  
**Version:** 0.1  
**Last updated:** September 19, 2026

> **Update, September 19, 2026.** Current installer openings now exist (`01-business-source-of-truth.md` section 33). The Installer Network is a registration pathway for future opportunities, offered alongside those openings, and is not an application for a specific opening. Where this document calls the network a future-opportunity pathway, it describes the network only, not the whole recruitment model. Rules for the case where no active job exists still apply conditionally. An application page and form now exist for the current opening (`/careers/apply/`), and "Apply" belongs only to that opening. See `28-recruitment-strategy.md`.

---

## 1. Purpose

This checklist defines the controlled steps required to move the website from approved preview to production.

It follows:

- 17-cloudflare-deployment.md;
- 18-github-workflow.md;
- 23-accessibility-standards.md;
- 24-performance-budget.md; and
- 25-quality-assurance-checklist.md.

The site should not be published merely because the build succeeds. Launch requires business approval, technical evidence, intentional indexation, and verified recruitment and commercial journeys.

---

## 2. Launch Roles

Record an owner for each role:

| Role | Responsibility |
|---|---|
| Business approver | Confirms facts, claims, jobs, services, and launch scope |
| Content/SEO owner | Confirms page intent, metadata, internal links, and indexation |
| Build owner | Confirms code, tests, and release commit |
| Deployment owner | Confirms GitHub, Cloudflare Pages, domains, and environment |
| Form owner | Confirms routing, notifications, anti-abuse, and confirmations |
| Measurement owner | Confirms analytics, Search Console, Bing, and reporting |

One person may hold multiple roles, but ownership must be explicit.

---

## 3. Launch Statuses

| Status | Meaning |
|---|---|
| Ready | Verified and approved |
| Blocked | Must be resolved before launch |
| Conditional | Depends on a feature or page that is not launching |
| Waived | Documented exception with owner and date |
| Not verified | Not acceptable as a final status |

---

## 4. Launch Scope Freeze

- [ ] Launch pages are listed and approved.
- [ ] Deferred pages are documented.
- [ ] Active jobs and recruiting markets are confirmed.
- [ ] Installer-network launch decision is recorded.
- [ ] Commercial page scope is confirmed.
- [ ] Application, ATS, network, commercial, and contact pathways are selected.
- [ ] Business name, entity, contact, hours, service, and location facts are approved.
- [ ] No unverified page is included for the sake of page count.
- [ ] Navigation and footer destinations match the approved scope.

---

## 5. Business and Content Approval

- [ ] Homepage copy is approved.
- [ ] Careers and Current Openings copy is approved.
- [ ] Job records are approved and dated.
- [ ] Evergreen role and requirements content is approved.
- [ ] Installer-network disclosure is approved.
- [ ] Commercial services and scope are approved.
- [ ] Location and service-area claims are approved.
- [ ] Contact details and hours are confirmed.
- [ ] Privacy, applicant privacy, accessibility, and terms content are approved.
- [ ] Testimonials, logos, certifications, statistics, and case studies are approved or removed.
- [ ] No placeholder copy, fake proof, or unresolved bracketed content remains.

---

## 6. Repository and GitHub Readiness

- [ ] Correct repository is connected.
- [ ] Release branch or direct-main procedure matches 18-github-workflow.md.
- [ ] Working tree is reviewed.
- [ ] No unrelated files are included.
- [ ] No secrets, local settings, credentials, or private uploads are tracked.
- [ ] Environment variable names are documented without exposing values.
- [ ] Commit message identifies the release.
- [ ] Required checks pass.
- [ ] Release commit SHA is recorded.
- [ ] Rollback commit or previous deployment is known.

---

## 7. Code and Build Checks

- [ ] Typecheck passes.
- [ ] Lint passes.
- [ ] Production build passes.
- [ ] Static export passes.
- [ ] Route generation completes.
- [ ] Image references resolve.
- [ ] Font and asset references resolve.
- [ ] No server-only dependency is imported into static route code.
- [ ] No console error blocks a primary route.
- [ ] Error and fallback states build successfully.
- [ ] Dependency changes are reviewed.

---

## 8. Route and URL Checks

- [ ] Every launch route matches the site architecture.
- [ ] Slugs are lowercase, descriptive, and stable.
- [ ] Canonical URLs use the production origin.
- [ ] Trailing-slash behavior is consistent.
- [ ] Redirects for approved legacy URLs are configured.
- [ ] No redirect loops or chains exist.
- [ ] Query parameters cannot create uncontrolled indexable duplicates.
- [ ] Confirmation and utility routes have intended noindex behavior.
- [ ] 404 route is useful and links to Careers and Contact.

---

## 9. Metadata and Indexation

- [ ] Every indexable page has a unique title.
- [ ] Every indexable page has a useful meta description.
- [ ] Open Graph metadata is present and accurate.
- [ ] Social-share image exists and is approved.
- [ ] Canonical tags are correct.
- [ ] Robots rules match the indexation decision.
- [ ] Sitemap contains only eligible canonical routes.
- [ ] Draft, preview, confirmation, and utility routes are excluded as intended.
- [ ] Active job pages follow the current job policy.
- [ ] Closed jobs do not retain active urgency or active JobPosting schema.
- [ ] Search Console and Bing verification plans are ready.
- [ ] Apple Search visibility and business listings are included in the post-launch plan where applicable.

Do not request indexing until the pages are intentionally ready for public discovery.

---

## 10. Structured Data

- [ ] Organization data uses approved entity information.
- [ ] BreadcrumbList matches visible breadcrumbs.
- [ ] JobPosting appears only for eligible active jobs.
- [ ] Service data is limited to verified services.
- [ ] FAQ data matches visible FAQ content.
- [ ] Article data uses truthful author and date fields.
- [ ] Undefined and unverified properties are omitted.
- [ ] Absolute URLs and stable identifiers are used.
- [ ] JSON-LD is valid and safely serialized.
- [ ] Rich-result validation has been reviewed.

---

## 11. Recruitment Conversion Readiness

- [ ] Careers is directly reachable from the header.
- [ ] Current Openings is directly reachable.
- [ ] Active jobs display correct status and facts.
- [ ] Job requirements are readable before application.
- [ ] Apply action reaches the correct form or ATS opening.
- [ ] Application form identifies the opening.
- [ ] Application confirmation appears after trusted acceptance.
- [ ] No-openings state offers an installer-network or requirements path.
- [ ] Installer-network form uses future-opportunity language.
- [ ] Network confirmation does not imply application or hiring.
- [ ] Recruitment-platform links use the canonical job URL and approved copy.
- [ ] Closed job behavior is tested.

---

## 12. Commercial Conversion Readiness

- [ ] Commercial pages use verified capability language.
- [ ] Commercial CTA is distinct from candidate CTAs.
- [ ] Inquiry form routes to the intended recipient or CRM.
- [ ] Project fields are approved and necessary.
- [ ] Commercial confirmation is accurate.
- [ ] Phone and email links are tested.
- [ ] Service-area and industry claims are approved.
- [ ] No quote, contract, certification, or response-time promise is unsupported.

---

## 13. Forms, Notifications, and Security

- [ ] Form labels, required states, and validation are complete.
- [ ] Invalid submissions preserve valid input.
- [ ] Duplicate submission protection works.
- [ ] Server errors show a recoverable message.
- [ ] Turnstile or other anti-abuse controls are configured if approved.
- [ ] Secret keys exist only in the correct environment.
- [ ] Notifications reach the intended internal recipient.
- [ ] Applicant and commercial submissions route separately.
- [ ] Confirmation pages do not expose private IDs.
- [ ] Sensitive data is not logged in browser or server output.
- [ ] Spam and abuse handling is tested.
- [ ] Privacy disclosures match actual data handling.

---

## 14. Accessibility and Responsive Review

- [ ] Skip link works.
- [ ] Keyboard-only primary journey passes.
- [ ] Mobile menu works and restores focus.
- [ ] Focus indicators are visible.
- [ ] Contrast passes on all major states.
- [ ] Headings and landmarks are semantic.
- [ ] Forms have labels and associated errors.
- [ ] Active, closed, and network states are distinct in text.
- [ ] Images have correct alt treatment.
- [ ] Reduced-motion behavior works.
- [ ] Pages reflow at 200 percent zoom.
- [ ] Mobile layouts work at 320px, 375px, and 414px widths.
- [ ] Touch targets meet the minimum size.

---

## 15. Performance Review

- [ ] Core Web Vitals results are recorded.
- [ ] LCP image is intentionally prioritized.
- [ ] Images have dimensions and responsive sizes.
- [ ] No unnecessary hero frames load initially.
- [ ] JavaScript remains within budget or has an approved exception.
- [ ] Fonts do not block or shift primary content.
- [ ] Third-party scripts are approved and measured.
- [ ] Static HTML contains primary content.
- [ ] Forms remain usable on a throttled mobile connection.
- [ ] Cloudflare caching and compression are verified.

---

## 16. Analytics and Measurement

- [ ] Approved analytics provider is configured.
- [ ] Preview traffic is excluded from production reporting.
- [ ] Consent behavior is correct.
- [ ] Recruitment, network, commercial, and contact events are separate.
- [ ] Conversion events fire only after trusted acceptance.
- [ ] No PII is sent in event parameters.
- [ ] CTA, job, form, and error events are tested.
- [ ] Search Console property is verified or scheduled.
- [ ] Bing Webmaster property is verified or scheduled.
- [ ] Google Business Profile links and tracking are reviewed where applicable.
- [ ] Baseline reporting date is recorded.

---

## 17. Cloudflare Pages Release

- [ ] Correct project is selected.
- [ ] Build command is correct.
- [ ] Output directory is correct.
- [ ] Node and framework versions are supported.
- [ ] Production environment variables are configured.
- [ ] Preview and production environments are distinct.
- [ ] Custom domain is connected or launch domain is confirmed.
- [ ] HTTPS is active.
- [ ] Redirects, headers, and content types are correct.
- [ ] Nested routes load directly on refresh.
- [ ] Cache behavior does not preserve stale active-job data.
- [ ] Deployment URL and commit SHA are recorded.

---

## 18. Production Smoke Test

Immediately after deployment:

- [ ] Homepage loads at the intended hostname.
- [ ] Careers link works.
- [ ] Current Openings link works.
- [ ] Active job page loads directly.
- [ ] Application or ATS path works.
- [ ] Installer-network path works.
- [ ] Commercial inquiry path works when launched.
- [ ] Contact links work.
- [ ] 404 page works.
- [ ] Robots and sitemap are reachable.
- [ ] Canonical and metadata use the production origin.
- [ ] No browser console or network error blocks the primary journey.
- [ ] Approved analytics events fire without PII.

---

## 19. Indexation Activation

Only after all applicable launch gates pass:

- [ ] Production hostname is confirmed.
- [ ] Preview is not being treated as canonical.
- [ ] Robots policy permits approved indexable pages.
- [ ] Sitemap is submitted to Google Search Console.
- [ ] Sitemap is submitted to Bing Webmaster Tools.
- [ ] Indexing requests are made only for priority approved pages.
- [ ] Noindex confirmation and utility routes remain excluded.
- [ ] First crawl and indexing checks are scheduled.

Development, production publication, and indexation are separate decisions.

---

### Launch-day order

Run these in order on launch day. They overlap with the items above (custom domain in section 17, sitemap submission in this section), which are kept as general gates.

- [ ] Step 1: Attach `ultimatefleetgps.net` as the Pages custom domain and confirm HTTPS serves the site.
- [ ] Step 2: Confirm canonicals, `og:url`, the sitemap, and schema URLs all use `https://ultimatefleetgps.net/` on the live host.
- [ ] Step 3: Remove the pages.dev `noindex` for the production hostname and add the 301 to `https://ultimatefleetgps.net/`. Preview hostnames keep the `noindex`.
- [ ] Step 4: Add and verify the property in Google Search Console and Bing Webmaster Tools, then submit the sitemap.
- [ ] Step 5: Update the website URL in Google Business Profile, Bing Places, and Apple Business Connect to `ultimatefleetgps.net`.

## 20. Rollback and Incident Readiness

- [ ] Previous working deployment is identified.
- [ ] Rollback owner is known.
- [ ] Form failure fallback is documented.
- [ ] Contact method for urgent incidents is known.
- [ ] Job closure correction procedure is documented.
- [ ] DNS and Cloudflare access owners are known.
- [ ] A broken application path is treated as a critical incident.
- [ ] Any emergency content correction has a follow-up QA record.

---

## 21. Launch Sign-Off

| Area | Owner | Status | Evidence |
|---|---|---|---|
| Business facts and content |  |  |  |
| Recruitment journey |  |  |  |
| Commercial journey |  |  |  |
| Forms and notifications |  |  |  |
| Accessibility |  |  |  |
| Performance |  |  |  |
| SEO and indexation |  |  |  |
| Structured data |  |  |  |
| GitHub and build |  |  |  |
| Cloudflare deployment |  |  |  |
| Analytics and measurement |  |  |  |

Launch approval requires no unresolved Critical or High issue affecting the public release.

---

## 22. First 72 Hours

- [ ] Check uptime and deployment health.
- [ ] Confirm form notifications.
- [ ] Review analytics events.
- [ ] Review Search Console and Bing crawl signals.
- [ ] Confirm sitemap processing.
- [ ] Check active job visibility and status.
- [ ] Review top landing pages and CTA engagement.
- [ ] Inspect error logs without exposing personal data.
- [ ] Correct urgent content or routing issues.
- [ ] Record launch observations for the post-launch plan.

---

## 23. Definition of Done

Launch is complete when the approved release is deployed to the correct Cloudflare Pages environment, production routes and forms work, content and business facts are approved, accessibility and performance checks pass, metadata and schema are valid, analytics is privacy-safe, recruitment-platform links are aligned, indexation is intentionally activated, smoke tests are complete, and rollback ownership is documented.

---

## 24. Related Documents

- 00-project-overview.md
- 01-business-source-of-truth.md
- 07-site-architecture.md
- 08-url-strategy.md
- 13-schema-markup-plan.md
- 14-conversion-strategy.md
- 15-analytics-and-measurement.md
- 16-technical-architecture.md
- 17-cloudflare-deployment.md
- 18-github-workflow.md
- 20-component-inventory.md
- 21-design-system.md
- 22-image-strategy.md
- 23-accessibility-standards.md
- 24-performance-budget.md
- 25-quality-assurance-checklist.md
- 27-post-launch-growth-plan.md
- 28-recruitment-strategy.md
- 29-recruitment-platform-distribution.md

## Release gate: application flow (September 19, 2026)

The application flow is built and tested against a simulated endpoint. It must not go live to applicants until every item below is checked. Nothing here is complete unless it is checked.

- [ ] `NEXT_PUBLIC_FORMS_ENDPOINT` is set in Cloudflare Pages for Production, and for Preview if previews should submit, and the site is redeployed. The value is baked in at build time, so a redeploy is required. As of September 19, 2026 it is NOT configured: the deployed bundle at the temporary build domain `https://ultimate-fleet-gps-site.pages.dev/` compiles the setting as an unset reference, and every form there (commercial, Installer Network, and application) shows the "isn't accepting submissions" fallback.
- [ ] The trusted backend accepts `formType: "job_application"` payloads, stores the background-check consent, acknowledgments, and privacy consent, and has a decided retention period and processor list.
- [ ] After deployment, one real submission from the deployed site is received by the backend, and the browser lands on `/careers/application-received/` showing "Application Received".
- [ ] After deployment, an endpoint failure is checked once (for example a temporary bad URL in Preview): the form shows the failure message and the call fallback, keeps the entered values, and never redirects.
- [ ] The homepage banner button reads "Apply for the Current Opening" and opens `/careers/apply/`, not the Installer Network page.
- [ ] Counsel has reviewed the background-check consent wording, the privacy policy's description of the three forms, the terms of use, and the use of the registered entity name in the legal notices.
- [ ] The owner has confirmed that `datePosted` `2026-07-01` means July 1, 2026 and not 7 January 2026.
- [ ] The production domain `ultimatefleetgps.net` points at the new deployment (it still serves the previous site).

Already verified locally in a real browser against a simulated endpoint: validation errors with focus management, success and redirect, a 500 response, a dropped connection, a request that hangs (timeout at 20 seconds), a missing endpoint, honeypot handling, blocked browser storage, and no analytics event carrying personal data. A visit to the confirmation URL that did not follow a confirmed submission shows a neutral message and never claims receipt.

## 25. Maintenance

Update this checklist after each launch, rollback, critical incident, form change, hosting change, indexation change, or recruitment workflow change. Add regression checks for newly discovered failure modes and record material changes in Git.
