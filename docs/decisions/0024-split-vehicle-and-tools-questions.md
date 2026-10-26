# Decision 0024: The vehicle, tools, and travel resources question is split in three

**Date:** October 26, 2026
**Status:** Applied in code. Not yet deployed. Needs two new GHL custom fields and a `GHL_CONFIG` update. An earlier version of this decision split the question in two; it was revised to three before any GHL field was created.
**Decided by:** Project owner (request in the working session: break this into separate questions)
**Affects:** `src/components/forms/ApplicationForm.tsx`, `workers/forms/`, `docs/32-ghl-workflows.md`
**References:** `CLAUDE.md` sections 4 and 8; decisions 0021 to 0023

## Decision

1. "Do you have a personal vehicle, and will you provide your own tools and travel resources?" is three required Yes or No questions: "Do you have a personal vehicle?", "Will you provide your own tools?", and "Will you provide your own travel resources?" A single Yes to a combined question could not say which part was true.
2. The payload key `personalVehicle` now holds the vehicle answer only. Two new keys, `providesOwnTools` and `providesOwnTravelResources`, hold the other two. The Worker requires a boolean for all three and stores a `No`.
3. GHL gets two new contact fields, "Confirmed - Own Tools" and "Confirmed - Own Travel Resources". The existing field is renamed "Confirmed - Personal Vehicle", because it no longer covers tools. It keeps its ID, so `GHL_CONFIG` still points at it.
4. There are now ten Yes or No questions and one required checkbox (the privacy consent).

## Open items

- A "No" on any of these three questions is reviewed by a person. Whether it disqualifies anyone is the business's decision.
- The new wording needs the legal review already required for this form (`docs/01` section 33.9).
- Deploy the Worker before the site. The new Worker requires `providesOwnTools` and `providesOwnTravelResources`, so a form that predates this change is rejected with a 400.
