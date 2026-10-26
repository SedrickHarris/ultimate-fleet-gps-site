# Forms Worker (GoHighLevel API)

The site is a static export, so it cannot hold a GoHighLevel (GHL) credential.
`CommercialInquiryForm`, `InstallerNetworkForm`, and `ApplicationForm` POST JSON
to this Worker. The Worker validates the submission and creates the records in
GHL through its API. Decisions: `docs/decisions/0019-ghl-forms-relay.md` and
`docs/decisions/0020-ghl-api-instead-of-webhooks.md`.

```text
Browser form -> POST JSON -> this Worker -> GHL API
                                 |            1. upsert contact
                                 |            2. add tags
                                 |            3. create opportunity (journey's pipeline)
                                 +-> 200 only after all three succeed
```

Acknowledgement emails and internal notifications are GHL workflows triggered
by "Opportunity Created" on each pipeline. See `docs/32-ghl-workflows.md`.

## Behavior

- One pipeline per journey, so the three never mix:
  - `commercial_inquiry` -> Commercial pipeline
  - `installer_network` -> Installer Network pipeline
  - `job_application` -> Recruitment pipeline
- Validates required fields, lengths, types, and every consent or
  acknowledgment checkbox. An application for a slug not in `ACTIVE_JOB_SLUGS`
  is rejected.
- Origin allowlist (`ALLOWED_ORIGINS`), JSON-only, 32 KB body limit.
- Returns `200` only after the contact, tags, and opportunity all succeed. Any
  failure returns `502`, and the site shows its error and click-to-call
  fallback instead of a confirmation.
- One retry per call on a network error, timeout, 429, or 5xx. No retry on any
  other 4xx.
- Logs a correlation ID, form type, failing step, and GHL status code. It never
  logs a request body, the token, or the config.
- Optional Turnstile check, enforced only when `TURNSTILE_SECRET_KEY` is set.
  The site does not render the widget yet, so leave the secret unset until it
  does.

## What the Worker writes to GHL

| Call | Content |
| --- | --- |
| Contact upsert | Name, email, phone, company, source, and each custom field that has an ID in `GHL_CONFIG` |
| Tags | `website-lead`, the journey tag, and `job-<slug>` for applications |
| Opportunity | Journey pipeline, the stage from `GHL_CONFIG`, status `open`, no value |

A payload key with no entry in `GHL_CONFIG.customFields` is not sent. The keys
you can map are in `ghl-config.example.json`. A list such as `platforms` is
sent as comma-separated text.

## Setup

1. In GHL, create the custom fields, pipelines, and stages (`docs/32`).
2. Create a Private Integration token with write access to contacts and
   opportunities. Confirm the exact scope names in GHL's scope picker. Use
   a test sub-account for Preview and production for the live site.
3. Find the IDs the config needs (read-only, run locally):

   ```sh
   GHL_API_TOKEN=... GHL_LOCATION_ID=... node scripts/ghl-discover.mjs
   ```

   The token for this needs read access to opportunities and custom fields.

4. Copy `ghl-config.example.json` somewhere outside the repo, fill in the IDs,
   and set both secrets:

   ```sh
   cd workers/forms && npm install && npx wrangler login
   npx wrangler secret put GHL_API_TOKEN
   npx wrangler secret put GHL_CONFIG < /path/to/your-filled-config.json
   ```

   Delete the filled file afterward. Never commit it.

5. `npm run deploy`, then attach the Worker to its host (docs/17 section 29
   recommends `forms.ultimatefleetgps.net`) by uncommenting `routes` in
   `wrangler.toml`.
6. In the Pages project, set `NEXT_PUBLIC_FORMS_ENDPOINT` to the Worker URL,
   then rebuild.

Local development: put `GHL_API_TOKEN` and `GHL_CONFIG` in
`workers/forms/.dev.vars` (git-ignored), add `http://localhost:3000` to
`ALLOWED_ORIGINS` there, and run `npm run dev`. Use the test sub-account.

## Verify before launch

The GHL API reference could not be checked when this was written. Confirm these
with one submission per form in the test sub-account:

- The `Version` header (`2021-07-28`) is accepted.
- `POST /contacts/upsert` creates or updates a contact and returns its ID.
- `POST /contacts/{id}/tags` adds tags without removing existing ones.
- Custom field values (`id` and `field_value`) land on the contact.
- `POST /opportunities/` creates an opportunity in the right pipeline and stage.

## Tests

```sh
npm run test:forms     # from the repo root
```

## Not covered here

- Rate limiting. Add a Cloudflare WAF rate-limiting rule on the forms host.
- Preserving first-touch attribution. A repeat submission overwrites the
  contact's custom fields.
- File uploads. None of the forms collect files.
