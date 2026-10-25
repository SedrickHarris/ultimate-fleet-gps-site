# Decision 0007: Coverage hub commercial-first update

**Date:** September 19, 2026
**Status:** Approved in session
**Decided by:** Stakeholder (in the working session that planned the page)
**Affects:** `/coverage/`, `docs/01-business-source-of-truth.md` section 12.2, `docs/_claims-inventory.md` row 58

## Context

`/coverage/` carried operational wording ("scheduling ... reviewed before
installation", "will follow up to coordinate scheduling") that docs/01 section
8.3 lists as unconfirmed. The page was restructured as a commercial-first
service-context page with the quote form after the explanation and a quiet
Installer Network text link after the form.

## Decisions

1. **Hero media.** The hero uses a decorative background video with a static
   WebP poster fallback. Muted, autoplay, loop, inline, `preload="none"`,
   hidden under `prefers-reduced-motion` (the poster shows instead). No map,
   pin, place label, dashboard, or readable text in the media.
2. **Vehicle examples.** Work vans, service trucks, utility vehicles, and
   heavy-duty trucks are approved vehicle-context examples, always with:
   "Vehicle examples describe common project contexts. They do not mean every
   approved hardware category is installed in every vehicle type." The general
   categories remain fleet, commercial, and construction vehicles (docs/01
   section 12.1). No other vehicle types are added.
3. **Service naming.** The Fleet Rollout service is named `Fleet Rollout
   Services` everywhere, at `/services/fleet-rollouts/`. Coverage reads titles,
   descriptions, and routes from the approved service cards
   (`service-pages-content.ts`) rather than retyping them.
4. **Merged request-details section.** "Start With Your Installation Request"
   holds the four items (equipment, vehicle count, project locations,
   preferred timing) once. The separate "Commercial Project Details That Help
   Frame the Request" section is removed.
5. **Availability wording.** Where availability or qualification must be
   addressed, use: "Share your project details so Ultimate Fleet GPS can
   determine whether the request fits the available service context." The
   earlier sentence "Project details and availability must be reviewed for each
   request." is not used. No wording may imply scheduling, dispatch,
   technician assignment, or acceptance.
6. **Installer Network link.** Text link after the form, route
   `INSTALLER_NETWORK_PATH`, `data-journey="recruitment"`, event
   `cta_installer_network_click` (the event the other Installer Network links
   already use). No new event.
7. **Hero trust items.** "Nationwide service reach" and "On-site installation
   model" are removed. "In business since 2011" stays approved (claims row 11)
   but a one-item trust row is not rendered, so the row is omitted.
8. **FAQ.** Five visible questions. No `FAQPage` JSON-LD on `/coverage/`;
   schema stays WebPage plus BreadcrumbList.

9. **Introduction section copy (amended 2026-09-19, later in the same
   session).** The stakeholder supplied new copy for the `/coverage/`
   introduction and asked for it to be used verbatim: H2 "Nationwide Mobile
   Installation Support for Fleet and Commercial Vehicles", three paragraphs,
   a four-item checklist, and the note "Service availability, scheduling, and
   project logistics are confirmed for each request based on the vehicle type,
   equipment, project scope, and installation location." This **supersedes
   item 5 for that section only**: paragraph three ("Project details,
   equipment requirements, scheduling, and site logistics are reviewed before
   installation ...") and the note restore review and scheduling wording.
   Item 5's sentence still governs the hero-adjacent request copy, the quote
   section, and the FAQ. docs/01 sections 8.3 and 17 still list response,
   scheduling, and review steps as unconfirmed, so that conflict remains open
   until those sections are updated. The section keeps its decorative image
   fallback because no introduction image or video exists yet.

10. **Installer Network handoff band (amended 2026-09-19, later in the same
    session).** The stakeholder moved the Installer Network handoff from a
    quiet text link after the form to a full-width navy band directly below
    the introduction. This **supersedes item 6's placement rule and the
    original "low-emphasis handoff after the commercial form" direction**. It
    keeps item 6's route, `data-journey="recruitment"`, and event
    `cta_installer_network_click`. Copy: eyebrow "INSTALLER NETWORK", H2
    "Interested in Mobile Installation Work?", a body stating that experience
    is helpful but not required to learn about the Installer Network, and the
    link "Learn About the Installer Network". The supporting line reuses the
    approved Installer Network disclosure from `careers-hub-content.ts`
    (expression of interest, no guarantee of contact, interview, employment,
    contract, assignment, schedule, work volume, or pay, and independent
    contractors, not employees). No "Apply" language and no opening or
    location claims. The earlier wording "Are you an experienced mobile fleet
    installation technician?" is removed because it implied experience is
    required. The old text link after the form is removed.

## Not decided here

Shared `CommercialInquiryForm` accessibility and analytics gaps (per-field
errors, inline success, failure events) are deliberately out of scope for this
change and unchanged.
