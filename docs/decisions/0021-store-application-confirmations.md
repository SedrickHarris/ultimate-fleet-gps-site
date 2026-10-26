# Decision 0021: Store the nine application confirmations as contact fields

**Date:** October 26, 2026
**Status:** Applied in code and deployed. Amended by decision 0022: seven of the nine fields can now hold `No`, and an unticked box no longer blocks a submission for those seven.
**Decided by:** Project owner (request in the working session: capture all the checkbox inputs)
**Affects:** `workers/forms/`, `docs/32-ghl-workflows.md`
**References:** `docs/32` sections 2 and 4; decisions 0019 and 0020

## Context

`docs/32` section 2 advised against storing a copy of every always-true checkbox. The Worker rejects a job application unless all nine confirmations are ticked, so a stored record already implies them, and `Consent Recorded At` gives the time. The owner wants each confirmation visible on the contact.

## Decision

1. The nine job application confirmations are stored as individual GHL contact custom fields, each holding `Yes`: driver license, personal vehicle and tools, smartphone, background check consent, travel requirement, state-to-state travel, training, independent contractor status, privacy consent.
2. The values come from the same payload the Worker already validates. No new form field is added.
3. Commercial and Installer Network consent boxes are not stored separately. The owner's request covered the recruitment form.
4. The Worker still rejects any submission with an unticked box, so `Yes` is never a record of a missing confirmation.

## Notes

- This does not change the open applicant-data review (decision 0019). The extra fields sit with the other applicant data under the same access limits.
- `travelPercent` is the company's fixed figure, shown in the acknowledgment text, and is not stored.
