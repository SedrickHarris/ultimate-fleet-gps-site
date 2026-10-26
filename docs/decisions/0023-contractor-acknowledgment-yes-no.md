# Decision 0023: The contractor acknowledgment becomes a Yes or No question

**Date:** October 26, 2026
**Status:** Applied in code. Not yet deployed or checked on the live form.
**Decided by:** Project owner (request in the working session: update this question as well)
**Affects:** `src/components/forms/ApplicationForm.tsx`, `workers/forms/src/validate.ts`, `docs/32-ghl-workflows.md`
**References:** `CLAUDE.md` sections 4 and 8; `docs/01` section 33; decisions 0021 and 0022

## Decision

1. The independent contractor and starting-rate acknowledgment is now a required Yes or No question, like the seven in decision 0022. It reads: "Do you understand that this is independent contractor work, not employee employment, and that the starting rate of $1,600 per week is not guaranteed income?" The rate comes from the business data, not from the form file.
2. A `No` is accepted and stored as `No` in the "Confirmed - Independent Contractor Status" field. A person reviews it. No workflow acts on it.
3. Eight of the nine application answers are now Yes or No. Only the privacy consent stays a required checkbox, because there is no consent to use the information without it.
4. The Worker accepts only a real boolean for this field, and rejects a missing or non-boolean value.

## Open items

- A `No` here means the applicant says they do not understand the contractor terms or the not-guaranteed starting rate. What the business does with that answer is a hiring decision, and the wording needs the legal review already required for this form (`docs/01` section 33.9).
- Deploy the Worker before the site, as in decision 0022.
