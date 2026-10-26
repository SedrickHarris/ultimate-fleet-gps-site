# Decision 0019: Site forms are relayed to GoHighLevel through a Cloudflare Worker

**Date:** October 26, 2026
**Status:** Applied in code. Forwarding method amended by decision 0020 (GHL API instead of inbound webhooks). Not yet deployed or verified end to end.
**Decided by:** Project owner (request in the working session: wire the site forms to GoHighLevel)
**Affects:** `workers/forms/`, `.env.example`, `package.json`, `tsconfig.json`, `eslint.config.mjs`, `docs/01` section 24, `docs/16` sections 20, 21, and the status table, `README.md`
**References:** `CLAUDE.md` sections 4, 7, and 9; `docs/14` sections 48 and 49; `docs/16` sections 20 to 25; `docs/17` section 29

## Context

`docs/16` listed the commercial CRM and the recruiting CRM as blocked until a platform was approved, and left the form backend as "Worker, Pages Function, GHL, ATS, or vendor path pending". The three forms already posted JSON to `NEXT_PUBLIC_FORMS_ENDPOINT`, but nothing sat behind that endpoint.

The site is a static export, so a GHL credential or write-capable webhook URL cannot ship in the browser bundle (`CLAUDE.md` section 9; `docs/16` section 24, "Do not").

## Decision

1. GoHighLevel (GHL) is the CRM destination for all three forms.
2. A Cloudflare Worker in `workers/forms/` is the trusted endpoint (`docs/16` option A feeding option D). The site's `NEXT_PUBLIC_FORMS_ENDPOINT` points at it.
3. Each journey is kept separate in GHL. This decision first used a webhook per journey; decision 0020 replaced that with the GHL API, and a pipeline per journey:
   - `commercial_inquiry`
   - `installer_network`
   - `job_application`

   This keeps the commercial, Installer Network, and application pipelines separate (`CLAUDE.md` section 4).
4. The Worker returns success only after GHL accepts the record. A GHL failure returns an error, and the site shows its existing error and click-to-call fallback.
5. The Worker validates server-side, checks the origin, rejects applications for slugs that are not in `ACTIVE_JOB_SLUGS`, and never logs a request body.
6. Turnstile verification is built into the Worker but stays off until the site renders the widget.

## Open items

- **Applicant-data review.** `docs/16` section 21 requires review of applicant-data handling, permissions, retention, and employment-related compliance before candidate applications go through GHL. The application form is wired, but that review is not recorded as done. Do not enable production traffic for `/careers/apply/` until it is.
- **GHL account setup.** The three workflows, field mapping, and pipeline stages have not been built or verified.
- **Deployment.** The Worker is not deployed, the host is not chosen, and `NEXT_PUBLIC_FORMS_ENDPOINT` is not set in Cloudflare Pages.
- **Rate limiting and de-duplication** are not in the Worker. See `workers/forms/README.md`.
- **Turnstile widget** is not rendered by the forms.
- **`ACTIVE_JOB_SLUGS`** in `wrangler.toml` repeats the slug in `src/data/jobs/`. Update both when an opening opens or closes.
