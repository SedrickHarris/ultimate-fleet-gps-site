# Decision 0020: The forms Worker uses the GoHighLevel API, not inbound webhooks

**Date:** October 26, 2026
**Status:** Applied in code. Not yet deployed or verified against a GHL account.
**Decided by:** Project owner (request in the working session: use the GHL integration API)
**Affects:** `workers/forms/`, `docs/32-ghl-workflows.md`, `docs/decisions/0019-ghl-forms-relay.md`
**References:** `CLAUDE.md` sections 4, 7, and 9; `docs/14` sections 48 and 49; `docs/16` sections 20 to 25

## Context

Decision 0019 relayed each form to its own GHL inbound webhook. The owner wants the GHL API instead, so the Worker creates the records directly.

## Decision

1. This amends the forwarding method in decision 0019. Everything else in 0019 stands: GHL as the CRM, the Worker as the trusted endpoint, three separate journeys, success only after GHL accepts the record, and the open applicant-data review.
2. The Worker authenticates with a GHL Private Integration token held as the Worker secret `GHL_API_TOKEN`. The location ID, the pipeline and stage per journey, and the custom field IDs are held as one JSON secret, `GHL_CONFIG`. No inbound webhook URLs are used.
3. Each accepted submission makes three calls, in this order: upsert the contact, add the journey's tags, create an opportunity in that journey's own pipeline. The opportunity is last so a retry after a failure does not create a second one.
4. The Worker returns success only after all three calls succeed. Any failure returns an error, and the site shows its error and click-to-call fallback.
5. Notifications and acknowledgement emails are GHL workflows triggered by "Opportunity Created", filtered to one pipeline each. The Worker sends no email.
6. Scopes are the minimum: write access to contacts and opportunities. The token is least-privilege and rotated if exposed (`CLAUDE.md` section 7).

## Not verified

The official GHL API reference could not be opened in the working session. These details come from third-party documentation and the author's recollection, and each needs a check against a test sub-account before launch:

- The `Version` header value (`2021-07-28`).
- The upsert contact endpoint, and that it matches on the location's duplicate-contact setting.
- The add-tags endpoint, and that it adds rather than replaces.
- The custom field format (`id` and `field_value`) on the contact body.
- The scope names offered for a Private Integration token.

## Consequences

- Custom field values on the contact are overwritten when the same person submits again, including the attribution fields. First-touch attribution is not preserved on repeat submissions.
- A repeat commercial inquiry or application creates another opportunity. That is intended for commercial inquiries. For applications, staff merge or close duplicates.
- The Worker is limited by GHL's rate limit (about 100 requests per 10 seconds per location, per a third-party source). One retry handles a short burst.
