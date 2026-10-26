# Forms Worker (GoHighLevel relay)

The site is a static export, so it cannot hold a GoHighLevel (GHL) credential.
`CommercialInquiryForm`, `InstallerNetworkForm`, and `ApplicationForm` POST JSON
to this Worker. The Worker validates the submission and forwards it to the
correct GHL inbound webhook. The decision is recorded in
`docs/decisions/0019-ghl-forms-relay.md`.

```text
Browser form -> POST JSON -> this Worker -> GHL inbound webhook (per journey)
                                 |
                                 +-> 200 only after GHL accepts the record
```

## Behavior

- One webhook per journey, so the three pipelines never mix:
  - `commercial_inquiry` -> `GHL_WEBHOOK_COMMERCIAL`
  - `installer_network` -> `GHL_WEBHOOK_INSTALLER_NETWORK`
  - `job_application` -> `GHL_WEBHOOK_APPLICATION`
- Validates required fields, lengths, types, and every consent or
  acknowledgment checkbox. An application for a slug not in `ACTIVE_JOB_SLUGS`
  is rejected.
- Origin allowlist (`ALLOWED_ORIGINS`), JSON-only, 32 KB body limit.
- Webhook URLs must be `https` on `leadconnectorhq.com` (override with
  `GHL_WEBHOOK_HOST_SUFFIXES`).
- Returns `200` only after GHL accepts the record. A GHL failure returns `502`,
  and the site shows its error and click-to-call fallback instead of a
  confirmation.
- One retry on a network error or 5xx. No retry on 4xx.
- Logs a correlation ID, form type, and safe failure category. It never logs a
  request body or a webhook URL.
- Optional Turnstile check, enforced only when `TURNSTILE_SECRET_KEY` is set.
  The site does not render the widget yet, so leave the secret unset until it
  does.

## Payload sent to GHL

Flat JSON. Use one real test submission as the sample when mapping the
workflow's trigger data.

| Key | Notes |
| --- | --- |
| `submissionId`, `receivedAt` | Worker-generated correlation ID and server time |
| `formType`, `pipeline`, `source`, `tags` | `pipeline` is `commercial` or `recruitment` |
| `first_name`, `last_name`, `full_name`, `email`, `phone`, `company_name` | Standard contact fields |
| Form fields | Under the form's own names, for example `serviceNeed`, `projectLocations`, `homeMarket`, `jobSlug` |
| `sourcePage`, `sourceTitle`, `referrer`, `utm*`, `clientSubmittedAt` | First-touch attribution |

## Setup

1. In GHL, create three workflows, each starting with an **Inbound Webhook**
   trigger. Map the sample payload to a Create/Update Contact action, and add
   each journey's own opportunity or pipeline stage (docs/14 sections 48 and
   49). Do not point two journeys at one workflow.
2. Install and sign in: `cd workers/forms && npm install && npx wrangler login`.
3. Set the secrets (paste each webhook URL when prompted):

   ```sh
   npx wrangler secret put GHL_WEBHOOK_COMMERCIAL
   npx wrangler secret put GHL_WEBHOOK_INSTALLER_NETWORK
   npx wrangler secret put GHL_WEBHOOK_APPLICATION
   ```

4. `npm run deploy`, then attach the Worker to its host (docs/17 section 29
   recommends `forms.ultimatefleetgps.net`) by uncommenting `routes` in
   `wrangler.toml`.
5. In the Pages project, set `NEXT_PUBLIC_FORMS_ENDPOINT` to the Worker URL,
   then rebuild. Use a separate test GHL sub-account for Preview (docs/17
   section 29, environment separation).

Local development: copy the values you need into `workers/forms/.dev.vars`
(git-ignored, never committed), add `http://localhost:3000` to
`ALLOWED_ORIGINS` there, and run `npm run dev`.

## Tests

```sh
npm run test:forms     # from the repo root
```

## Not covered here

- Rate limiting. Add a Cloudflare WAF rate-limiting rule on the forms host.
- Duplicate detection. `submissionId` is a correlation ID, not a de-duplication
  key. Handle repeat contacts in the GHL workflow (update, not create).
- File uploads. None of the forms collect files.
