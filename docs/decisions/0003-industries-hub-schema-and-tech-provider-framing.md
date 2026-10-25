# Decision 0003: Industries hub schema and technology-provider framing

**Date:** September 18, 2026
**Status:** Approved in session
**Decided by:** Stakeholder (in the working session that planned the hub)
**Affects:** `13-schema-markup-plan.md` line 336, `/industries/`

## Context

- `13-schema-markup-plan.md` line 336 describes `CollectionPage` for hubs and
  indexes. `/industries/` has emitted `WebPage` plus `BreadcrumbList`.
- `01-business-source-of-truth.md` section 13 confirms only commercial fleets
  and construction (vehicles) as verticals. Technology providers as a customer
  audience is unconfirmed (open questions 29 and 30).

## Decision

1. `/industries/` keeps `WebPage` plus `BreadcrumbList`, with `Organization` by
   `@id`. No `Service`, no `FAQPage`, no `areaServed` list. This is a
   deliberate difference from the `CollectionPage` guidance in docs/13.
2. The Technology Providers card, decision-guide row, and one FAQ stay, framed
   only as a route for describing an installation request tied to a hardware
   deployment program. The hub H1, meta description, and intro do not name
   technology providers. The visible copy states that Ultimate Fleet GPS provides
   installation and deployment support, not the underlying technology
   platform, and implies no partnership, authorization, or certification.
3. The commercial inquiry form is unchanged. Leads from this page are
   identifiable through the existing `sourcePage` attribution.

## Consequences

- Logistics and delivery and field service remain narrow commercial-fleet
  use-case routes, not specialization claims.
- The five industry detail pages were not modified. Their internal-sounding
  phrasing and the technology page H1 are a separate follow-up.
- Revisit an optional industry field on `CommercialInquiryForm` only after the
  receiving endpoint is confirmed to accept a new key.
