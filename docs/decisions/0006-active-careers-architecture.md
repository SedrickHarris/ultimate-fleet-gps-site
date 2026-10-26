# Decision 0006: Active careers architecture and application flow

**Date:** September 19, 2026
**Status:** Implemented from the owner's September 19, 2026 update plan
**Decided by:** Project owner (instruction in the working session)
**Affects:** `/careers/*`, `src/data/jobs/`, `src/data/site/business.ts`,
`src/lib/schema/job-posting.ts`, `src/lib/analytics/events.ts`, the footer and
header, the contact page, the service-page handoff, the legal pages, the
sitemap, and `robots.txt`

## Context

Several current Mobile GPS, ELD, and AOBRD installation technician openings
exist (`docs/01` section 33). The site previously described only an Installer
Network registration, with no application path and no `JobPosting`.

## Decisions

1. **Routes.**
   - `/careers/` is the recruitment landing page and leads with the opening.
   - `/careers/jobs/` lists current openings (a `CollectionPage`).
   - `/careers/mobile-gps-eld-aobrd-installation-technician/` is the opening
     page and the only page with `JobPosting`.
   - `/careers/apply/` is the application page with `ApplicationForm`.
   - `/careers/application-received/` is the noindex confirmation, excluded
     from the sitemap. (It was disallowed in `robots.txt` when this decision was made. The disallow was removed on Oct 26 2026, decision 0018, so the noindex can be seen.)
2. **The Installer Network stays separate.** It keeps its existing route,
   `/careers/mobile-installation-technician/`, because the homepage and other
   pages already link there. It is a registration for future opportunities and
   never uses "Apply". The plan's phase 5 title says the network form is
   replaced by the application flow. The owner's later instruction says to keep
   the network separate, and that instruction governs. A clearer network slug
   would need redirects, which this repository does not configure.
3. **One source for job facts.** `business.recruitment` holds the approved
   facts. The job record (`src/data/jobs/`) builds the visible page, the index
   card, the landing summary, the sitemap entry, and the `JobPosting`
   description from them, so schema and visible content cannot drift.
4. **`JobPosting` fields.** Included: `title`, `description` (from the visible
   content), `datePosted`, `employmentType` `CONTRACTOR`, `hiringOrganization`
   (the shared `Organization` node with the corporate office address),
   `baseSalary` as a minimum of `1600` per `WEEK` only, nationwide applicants
   through `applicantLocationRequirements`, and the application URL through
   `applicationContact`. Omitted on purpose: `validThrough` (no closing date),
   `jobLocation` (no approved work location; the corporate office is not one),
   `identifier`, and `directApply`.
5. **`datePosted` is 2026-07-01.** The owner gave the opening date as
   07/01/2026 on September 19, 2026. It is read as US format (July 1, 2026).
   The alternative reading, 7 January 2026, would coincide with the expired
   Glassdoor posting, so the owner should confirm it is July 1.
6. **Separate journeys.** The application form has its own component, route,
   payload type (`formType: "job_application"`), confirmation page, and events.
   It never appears on the commercial or Installer Network pages, and neither
   of those forms appears on the application or opening pages.
7. **Analytics.** New events: `active_opening_view`, `cta_apply_click`,
   `application_start`, `application_error`, `application_submit`,
   `application_success`, and `application_failure`, plus `cta_careers_click`
   for links into the careers pages. They carry the job slug and counts only.
   No analytics provider is installed, so `trackEvent` pushes to
   `window.dataLayer` when one exists and otherwise does nothing.
8. **Homepage banner.** Its primary button is `applyCta` (`/careers/apply/`, `cta_apply_click`), because the banner text says candidates are encouraged to apply. The Installer Network is the banner's secondary link, and the other homepage "Join the Installer Network" buttons (hero, trust section, final CTA) still go to the network page because their wording is about the network.
9. **No false success.** The shared submission hook redirects only after the
   endpoint returns a success response, aborts a request after 20 seconds, and
   calls `onConfirmed` just before the redirect. The application form uses that
   to set a session marker. `/careers/application-received/` says "Application
   Received" and fires `application_success` only when the marker is present. A
   direct visit, or unavailable browser storage, shows a neutral message that
   claims nothing and tells the visitor to call before submitting again. The
   static HTML makes no receipt claim. The commercial and Installer Network
   confirmation pages do not have this protection yet.
10. **Legal wording.** The privacy policy now lists what each of the three forms
   collects and states that retention, processors, and background-check
   handling are unconfirmed. The terms of use no longer say the site processes
   no applications. The registered entity name is `business.legalEntityName`
   and appears only in the privacy and terms contact notices.

## Release gate

The flow must not go live to applicants until the endpoint is configured in
Cloudflare Pages and a real submission is tested after deployment. As of
September 19, 2026 the endpoint is not configured in the deployed environment.
The full checklist is in `docs/26-launch-checklist.md`. Counsel review of the
legal wording also remains required before launch.

## Open items

- The forms endpoint (`NEXT_PUBLIC_FORMS_ENDPOINT`) is not verified to accept
  `job_application` payloads. Until it is, the form shows an error and a
  click-to-call fallback.
- Legal review: background-check consent wording, the privacy policy, the terms
  of use, and the registered entity name in the legal notices.
- `jobLocation` for nationwide field work, and owner confirmation that
  `datePosted` 2026-07-01 means July 1 and not 7 January.
- Application data retention, processors, and how a background check is run.
