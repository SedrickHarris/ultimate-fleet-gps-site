# Decision 0024: The vehicle and tools question is split in two

**Date:** October 26, 2026
**Status:** Applied in code. Not yet deployed. Needs one new GHL custom field and a `GHL_CONFIG` update.
**Decided by:** Project owner (request in the working session: break this into separate questions)
**Affects:** `src/components/forms/ApplicationForm.tsx`, `workers/forms/`, `docs/32-ghl-workflows.md`
**References:** `CLAUDE.md` sections 4 and 8; decisions 0021 to 0023

## Decision

1. "Do you have a personal vehicle, and will you provide your own tools and travel resources?" is two required Yes or No questions: "Do you have a personal vehicle?" and "Will you provide your own tools and travel resources?" A single Yes to a two-part question could not say which part was true.
2. The payload key `personalVehicle` now holds the vehicle answer only. A new key, `providesOwnToolsAndTravel`, holds the tools and travel answer. The Worker requires a boolean for both and stores a `No`.
3. GHL gets one new contact field, "Confirmed - Own Tools and Travel Resources". The existing field is renamed "Confirmed - Personal Vehicle", because it no longer covers tools. The field keeps its ID, so `GHL_CONFIG` still points at it.
4. There are now nine Yes or No questions and one required checkbox (the privacy consent).

## Open items

- A "No" on either question is reviewed by a person. Whether it disqualifies anyone is the business's decision.
- The new wording needs the legal review already required for this form (`docs/01` section 33.9).
- Deploy the Worker before the site. The new Worker requires `providesOwnToolsAndTravel`, so a form that predates this change is rejected with a 400.
