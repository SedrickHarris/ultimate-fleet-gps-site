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

1. In the GHL sub-account (Settings > Private Integrations), create two tokens,
   and note the location ID from the sub-account URL. Use a test sub-account for
   Preview and production for the live site.
   - **Setup token**, for the scripts on your machine only: read and write for
     location custom fields, create for pipelines, and read for opportunities.
     Delete it when setup is done.
   - **Worker token**, the one that goes in the Worker: write for contacts and
     opportunities, and nothing else.

   Confirm the exact scope names in GHL's scope picker.
2. Put the setup token as `GHL_API_TOKEN`, with `GHL_LOCATION_ID`, in a git-ignored
   env file on your own machine. Never paste them into chat or commit them.
3. Create the custom fields and pipelines from `docs/32-ghl-workflows.md`. The
   script does it for you, and skips anything that already exists by name:

   ```sh
   cd workers/forms
   node --env-file=PATH_TO_ENV scripts/ghl-setup.mjs           # dry run, creates nothing
   node --env-file=PATH_TO_ENV scripts/ghl-setup.mjs --apply   # create what is missing
   ```

   `--apply` also writes `ghl-config.generated.json` (IDs only, git-ignored).
   The Installer Network stages in the script are a proposal awaiting approval.
   Edit them in the script before `--apply`, or rename them in GHL afterward.
   `scripts/ghl-discover.mjs` lists the same IDs read-only if you built the
   fields and pipelines by hand.

4. Set the two Worker secrets, then delete the generated file. `GHL_API_TOKEN` here
   is the Worker token, not the setup token:

   ```sh
   npx wrangler login
   npx wrangler secret put GHL_API_TOKEN
   npx wrangler secret put GHL_CONFIG < ghl-config.generated.json
   ```

5. Build the three notification and acknowledgement workflows in the GHL app
   (`docs/32` sections 6 to 8). The API setup above does not create workflows.
6. `npm install` here, then `npm run deploy`, and attach the Worker to its host
   (docs/17 section 29 recommends `forms.ultimatefleetgps.net`) by uncommenting
   `routes` in `wrangler.toml`.
7. In the Pages project, set `NEXT_PUBLIC_FORMS_ENDPOINT` to the Worker URL,
   then rebuild.

Local development: put `GHL_API_TOKEN` and `GHL_CONFIG` in
`workers/forms/.dev.vars` (git-ignored), add `http://localhost:3000` to
`ALLOWED_ORIGINS` there, and run `npm run dev`. Use the test sub-account.

## Verify before launch

The official endpoint pages were read on Oct 26 2026 (decision 0020). They are
the source for `Version: v3`, the `fieldValue` custom field key, and the
opportunity body. Confirm these with one submission per form in the test
sub-account:

- `POST /contacts/upsert` creates or updates a contact and returns its ID.
- `POST /contacts/{id}/tags` adds tags without removing existing ones. Its page
  does not say whether it adds or replaces.
- Custom field values (`id` and `fieldValue`) land on the contact.
- `POST /opportunities/` creates an opportunity in the right pipeline and stage.
- The token's scopes are enough. The pages for the contact and opportunity
  calls list no scopes.
- If GHL rejects `v3`, set `GHL_API_VERSION` to the value its error asks for.
  The Private Integrations page uses `2021-07-28` in its example.

## Tests

```sh
npm run test:forms     # from the repo root
```

## Not covered here

- Rate limiting. Add a Cloudflare WAF rate-limiting rule on the forms host.
- Preserving first-touch attribution. A repeat submission overwrites the
  contact's custom fields.
- File uploads. None of the forms collect files.
