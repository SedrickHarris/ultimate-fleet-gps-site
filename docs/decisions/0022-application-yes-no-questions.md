# Decision 0022: Seven application boxes become required Yes or No questions

**Date:** October 26, 2026
**Status:** Applied in code and pushed. Amended by decision 0023: the contractor acknowledgment is also a Yes or No question now.
**Decided by:** Project owner (request in the working session: update the boxes with Yes or No radio buttons instead of not submitting)
**Affects:** `src/components/forms/ApplicationForm.tsx`, `workers/forms/src/validate.ts`, `docs/32-ghl-workflows.md`
**References:** `CLAUDE.md` sections 4 and 8; `docs/01` section 33; decisions 0019 and 0021

## Context

The application form required nine checkboxes. An unticked box blocked the submission, so an applicant who did not meet a stated requirement could not apply, and no one saw them. The owner wants those applicants to be able to submit an honest answer.

## Decision

1. Seven of the nine boxes are now required Yes or No radio questions: valid driver license, personal vehicle and tools, smartphone, background check consent, approximately 75% travel, state-to-state travel, and training. The applicant must choose one. Leaving a question unanswered still blocks the submission.
2. A `No` is accepted. The application is submitted, stored as `No` in the matching contact field, and shown to the recruiter in the notification.
3. The independent contractor and starting-rate acknowledgment and the privacy consent stay required checkboxes. Without them the contractor terms are not acknowledged and there is no consent to use the information to consider the application.
4. The Worker enforces this on its side. It accepts only a real `true` or `false` for the seven, rejects a missing or non-boolean value, and still requires `true` for the two.
5. No workflow qualifies, scores, or rejects an application because of a `No` (`CLAUDE.md` section 4). Every stage change after "Application received" stays a human action.
6. The question wording is new customer-facing copy. The fields keep their "Confirmed - ..." names, so existing merge fields and `GHL_CONFIG` are unchanged. A field holding `No` reads as "not confirmed".

## Open items

- `docs/01` section 33 still describes these as applicant requirements. Whether a `No` disqualifies a candidate is a hiring decision for the business, not the site.
- The new question wording and the background check question need legal review before launch (`docs/01` section 33.9). The applicant-data review in decision 0019 is still open.
- The form and the Worker are deployed separately. A form that sends `No` to a Worker that predates this change gets a 400, so deploy the Worker first.
