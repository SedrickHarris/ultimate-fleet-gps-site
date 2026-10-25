# Decision 0005: Service page template, work wording, and service schema

**Date:** September 18, 2026
**Status:** Approved in session
**Decided by:** Stakeholder (in the working session that planned the pages)
**Affects:** `/services/*` (five pages), `/services/` hub JSON-LD,
`13-schema-markup-plan.md`, `docs/01-business-source-of-truth.md` (not edited)

## Context

The five service pages were thin shells (H1, intro, paragraphs, a form, two
FAQs). They now render through one `ServicePageTemplate` with distinct
per-service copy. Three points needed a decision.

## Decisions

1. **Physical-work wording.** "Mounting, connection, and routing" is
   stakeholder-supplied wording, recorded here on 2026-09-18. No earlier source
   was found in docs/01 or `_claims-inventory.md`. It is used in the scope
   section of all five pages and on the services hub. "Setup", activation,
   calibration, configuration, testing, validation, integration, verification,
   and certification are not confirmed and are not used.
2. **Heading.** The brief's "Installation Documentation and Work Standards" is
   rendered as "Installation Documentation". docs/01 section 21 says no formal
   installation standard is approved. The photo-documentation sentence is the
   exact approved text: "Every installation is photo documented, and you'll
   receive that documentation automatically."
3. **No `areaServed` in service structured data.** Not even Country "United
   States". Nationwide reach stays visible copy and the `/coverage/` page until
   verified coverage data supports structured geography. This changes the
   shared `servicePageSchema` helper, so the `/services/` hub JSON-LD also
   loses `areaServed`. This supersedes the `areaServed` behaviour left in place
   by decision 0002.
4. **`serviceType` mapping**, one page-accurate value per page, never an
   umbrella list:

   | Page | `serviceType` |
   | --- | --- |
   | Fleet Telematics | Fleet telematics installation |
   | GPS Tracking | GPS tracking installation |
   | ELD | ELD installation |
   | Dashcam & Camera | Fleet dashcam and video recorder installation |
   | Fleet Rollouts | omitted |

   Fleet Rollouts is a coordination and capacity page. No approved exact
   service-type label exists, and "Fleet management equipment installation"
   would overstate it, so the key is omitted. The owner may supply an approved
   label later. The services hub keeps its own six-item list because it is the
   umbrella page for all six confirmed categories.
5. **Vehicle context** uses confirmed examples only (work vans, service trucks,
   utility vehicles, heavy-duty trucks), shown separately with a line stating
   the examples do not mean every hardware category is installed in every
   vehicle type. No trailers (claims rows 16 and 42).
6. **Installer Network handoff** is one text link after the quote form, with the
   recruitment journey. No banner, no form, no hiring language on these
   commercial pages.

## Consequences

- The homepage `Service` node previously emitted `areaServed`, the six-item
  category list, and `hoursAvailable`. Follow-up commits removed `areaServed`
  and `hoursAvailable` and replaced the list with one umbrella `serviceType`,
  "Mobile fleet technology installation services", so the whole site follows
  the same rule. The services hub `Service` likewise carries that single
  umbrella value instead of its six-item list. Visible nationwide copy is
  unchanged.
- `hoursAvailable` was removed because the confirmed hours have no timezone and
  no approved schema purpose. To publish hours in structured data later, the
  owner must confirm the exact hours, the timezone, what the hours represent
  (office, phone, installation, dispatch, or service availability), and that
  the same statement is visible to users.
- Point 4 above ("serviceType mapping") applies to the five individual service
  pages. The homepage and the hub use the single umbrella value.
- `/faq/` now includes the Fleet Rollouts FAQs, which were missing, and the new
  distinct per-page FAQs.
- The old page `body` paragraphs no longer render. The platform-name list, the
  hours sentence, and "in business since 2011" are therefore no longer on the
  service pages (hours remain in the form phone line).
- `docs/01` and `_claims-inventory.md` have not been edited; recording the
  work wording and vehicle examples there is left to the owner.

## Update, September 19, 2026

Point 6 (the Installer Network handoff) changed. The single low-emphasis text link after the quote form now points to `/careers/jobs/` with the recruitment journey and the `cta_careers_click` event. Its wording is "Interested in installer work with Ultimate Fleet GPS?" and "View current installer openings". It is the same shared handoff on all five service pages, with no per-page override, and it makes no claim that experience is required. It is still one text link after the form, with no banner, form, or hiring language.

## Update, September 20, 2026

Telematics page alignment. Shared service-page changes:

- A hero eyebrow, "Fleet Technology Installation Services", now shows above the H1 on all five service pages (`heroEyebrow`).
- The nationwide band lead and the telematics FAQ answer about project locations use the exact approved sentence, "Nationwide mobile installation service, delivered at the customer's location." (claims row 14), without the "Ultimate Fleet GPS provides" prefix.
- The resources heading is "Related Resources".
- The telematics "This service may be a fit when" bullets and footnote were removed. The fit section is now the intro sentence plus the sibling service links from the card taxonomy.
- Image briefs for `service-telematics-hero` and `service-telematics-context` now carry suggested filenames. Both slots still render the production decorative fallback.

**Reverses the September 19 handoff change, pending stakeholder confirmation.** The handoff link now points to `INSTALLER_NETWORK_PATH` with `cta_installer_network_click` and the recruitment journey. Wording: "Are you an experienced mobile fleet installation technician?" and "Learn about the Ultimate Fleet GPS Installer Network". This was requested in the page spec. It conflicts with the September 19 note that the link makes no claim that experience is required, and it moves candidates away from the active opening at `/careers/jobs/`. Revert both if the September 19 decision stands.

Stakeholder review still open: the FAQ answer "We are an installation and deployment partner, not the platform vendor" uses "partner" and "platform". It is unchanged approved copy, not silently rewritten.

## 2026-09-20 addendum: GPS Tracking Installation page rebuild

Draft changes made without stakeholder review, pending confirmation:

- The GPS H1 is now "GPS Tracking Installation" (was "... Services").
- "Installation and deployment partner, not the tracking platform vendor" wording and the platform-name FAQ were removed from the GPS page. Decision needed on whether the partner/platform wording and experience-only platform names return.
- "Installation coordination" was dropped from the GPS scope list. Scope is Mounting, Connection, Routing only. Decision needed on whether it returns.
- The GPS Installer Network handoff stays a text link (no `InstallerNetworkBand`).
- Image slots for definition, scope, fit, and nationwide are declared without `src`; production shows the decorative fallback.

## 2026-09-23 addendum: installer block moves above the FAQ on every service page

Stakeholder direction, given in conversation and not yet confirmed in the source of truth. **Supersedes point 6 above** (and the September 19 and 20 handoff notes) for placement.

- The "Have Questions About Installer Opportunities?" block (the shared `InstallerQuestions` component, same content and image as `/contact/` and `/careers/`) now sits **directly above the FAQ** on all five service pages. It is set once in `ServicePageTemplate`, with no per-page override.
- Page order is now: related services, installer block, FAQ, quote form, Related Resources. The block no longer appears at the page end, and there is no separate low-emphasis text link after the form.
- **Exception to the recruitment-below-the-form rule** (CLAUDE.md section 4, and the template header before this change). Recruitment content now appears above the commercial quote form. Commercial and recruitment routes, forms, data, and analytics events stay separate: the block keeps its own recruitment journey and events, and the quote form is still the only form on these pages. Revert by moving `installerBlock` back after the quote section in the template if the stakeholder does not confirm.
- The quote section on every service page is now a two-column layout with a background image slot. Pages without an approved `quoteBackground` show the dark fallback, with a development-only label.
