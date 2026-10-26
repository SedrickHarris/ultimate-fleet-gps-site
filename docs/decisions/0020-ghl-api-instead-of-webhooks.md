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
6. Two tokens, each least-privilege. The Worker token has write access to contacts and opportunities only. A separate setup token, used on the owner's machine to run `ghl-setup.mjs`, has custom field and pipeline scopes and is deleted after setup. Either is rotated if exposed (`CLAUDE.md` section 7).

## Verified and not verified

The official endpoint pages for upsert contact, add tags, create opportunity, create pipeline, and create custom field were read on Oct 26 2026.

Taken from those pages:

- Each documents `Version: v3` as the only allowed value. The Worker defaults to `v3`, and `GHL_API_VERSION` overrides it, because the Private Integrations page uses `2021-07-28` in its example.
- Upsert follows the location's "Allow Duplicate Contact" setting and returns `new` and `contact.id`. Tags sent on upsert replace existing tags, so the Worker adds tags through the tags endpoint instead.
- Custom field items use `id` and `fieldValue`, on contacts and on opportunities.
- Create Opportunity requires `pipelineId`, `locationId`, `name`, `status`, and `contactId`. It has no `source` field, so the Worker does not send one.
- Pipelines and custom fields can be created through the API, which the setup script uses (`workers/forms/scripts/ghl-setup.mjs`). DATE_TIME custom fields are Labs-only, so `receivedAt` is text.

Still unverified, to be checked against a test sub-account:

- Scopes for upsert, tags, and create opportunity. Their pages list none.
- Whether the add-tags endpoint adds or replaces. Its page is unclear.
- The response shapes the setup script reads from the list pipelines and list custom fields endpoints, which were not read.
- Create Pipeline does not document stage IDs in its response, so the script reloads pipelines after creating them.

## Consequences

- Custom field values on the contact are overwritten when the same person submits again, including the attribution fields. First-touch attribution is not preserved on repeat submissions.
- A repeat commercial inquiry or application creates another opportunity. That is intended for commercial inquiries. For applications, staff merge or close duplicates.
- The Worker is limited by GHL's rate limit (about 100 requests per 10 seconds per location, per a third-party source). One retry handles a short burst.
