# Decision 0025: Allow multiple opportunities per contact in GHL

**Date:** October 26, 2026
**Status:** Applied in GHL and confirmed with a test. The setting is in the GHL app, not in code.
**Decided by:** Project owner (the setting was turned on during the working session)
**Affects:** the GHL sub-account setting, `docs/32-ghl-workflows.md` section 3, `workers/forms/README.md`
**References:** decisions 0019, 0020 and 0024; `docs/32` section 10 test 5

## Context

Smoke tests of the job application path returned `502` at the Worker's "create opportunity" step (GHL status 400). Every test had reused one phone number, so GHL matched the same existing contact, which already had an open Recruitment opportunity. GHL's **Allow Multiple Opportunities per Contact** setting was off, and GHL blocks a second opportunity for a contact in the same pipeline when it is off.

## Evidence

- The identical payload returned `502` with the setting off and `200` shortly after it was turned on, with no code change in between.
- The contact then held two open Recruitment opportunities.
- A brand-new name, email and phone returned `200` before the setting was changed.
- GHL's error message was not read directly. The Worker deliberately does not log it. The cause is established by this before and after behavior, not by the message.

## Decision

1. The setting stays on. Each submission creates its own opportunity, as the Worker and `docs/32` section 10 test 5 already assume. A returning applicant can apply again, and a repeat commercial inquiry or Installer Network registration gets its own card.
2. The Worker does not treat a duplicate refusal as success. Reporting success without a created record would hide real failures.
3. The setting applies to the whole sub-account, so all three pipelines follow it.

## Consequences and open items

- Recruiters will see repeat applications as separate cards for the same contact. How they treat them is a process question for the business.
- Matching is by email or phone, per the location's duplicate-contact setting. Two different people who share a phone number can match one contact, and a later submission updates that contact's fields. This was seen in testing and is not changed here.
- A new sub-account has this setting off until someone turns it on. It is listed in `docs/32` section 3.
