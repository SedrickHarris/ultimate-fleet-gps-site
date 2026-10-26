# 32. GoHighLevel Setup and Workflows

Build specification for the GoHighLevel (GHL) side of the site forms (decisions `docs/decisions/0019-ghl-forms-relay.md` and `docs/decisions/0020-ghl-api-instead-of-webhooks.md`).

This is an internal document. It describes what to build in GHL. Nothing here has been built or verified in a GHL account.

## 1. How the pieces split

The forms Worker (`workers/forms/`) uses the GHL API to create the records. GHL workflows send the notifications and acknowledgements.

| Job | Done by |
| --- | --- |
| Validate the submission | Worker |
| Create or update the contact, with custom fields | Worker, through the API |
| Add tags | Worker, through the API |
| Create the opportunity in the journey's pipeline and stage | Worker, through the API |
| Notify the owner, send the acknowledgement email, move the stage | GHL workflow, triggered by "Opportunity Created" |

Because each pipeline has its own workflow trigger, the three journeys stay separate by construction.

## 2. Rules that govern every workflow

- One workflow per journey, each filtered to its own pipeline. Never share a workflow, pipeline, or opportunity between journeys (`CLAUDE.md` section 4; `docs/16` sections 24 and 25).
- No acknowledgement promises price, scheduling, coverage, or a response time (`docs/16` section 25).
- No recruiting acknowledgement implies employment, an interview, guaranteed work, guaranteed pay, or an automated decision (`CLAUDE.md` section 4).
- No workflow makes a final hiring, contracting, or rejection decision. Every stage change after "Application received" is a human action (`docs/14` section 48).
- Acknowledgement is by email only. The consent text on the forms covers being contacted, but it does not establish SMS consent, so send no SMS to the visitor.
- Do not copy submission data into analytics, shared channels, or tools outside GHL.

**Consent record.** The Worker rejects any submission in which a required consent or acknowledgment box is unticked. A record that arrives has every box ticked, and the `receivedAt` custom field is when. For job applications the ten answers are also stored as individual fields, at the owner's request (decisions 0021 to 0024). Nine are Yes or No questions, and a `No` is accepted and stored as `No`. Only the privacy consent must be ticked, so it always reads `Yes`. Commercial and Installer Network consent boxes are not stored separately.

**Same person, two journeys.** GHL keeps one contact per person, by the location's duplicate-contact setting. Someone who is both a customer and a candidate is one contact with two opportunities. Keep the journeys apart by pipeline and tag, never by merging. If that is not acceptable, use separate sub-accounts for commercial and recruitment, which also isolates applicant data. Restrict custom-field and pipeline visibility to the staff who need each journey.

## 3. Account setup, in order

1. Use a test sub-account for Preview and a production sub-account for the live site (`docs/17` section 29).
2. Create a Private Integration token inside the sub-account, with the scopes listed in `workers/forms/README.md`, and keep the token and location ID in a git-ignored env file on your own machine.
3. Run `workers/forms/scripts/ghl-setup.mjs`. It creates the custom fields in section 4 and the pipelines and stages in section 5 through the API, skips anything that already exists, and writes the Worker's `GHL_CONFIG`. It is a dry run until you pass `--apply`. Check the Installer Network stages first, because they are a proposal. You can instead create everything by hand in GHL and run `ghl-discover.mjs` to collect the IDs.
4. Set the Worker secrets (`workers/forms/README.md`).
5. Build the three workflows in sections 6 to 8. The API does not create workflows, so this step is done in the GHL app.
6. Test with section 10.

## 4. Custom fields (contact)

All are single-line text unless noted. The Worker sends a field only when its payload key has an ID in `GHL_CONFIG.customFields`, so a field you do not create is simply left out.

| Payload key | GHL field name | Journeys |
| --- | --- | --- |
| `serviceNeed` | Service Need | Commercial |
| `vehicleCount` | Vehicle or Asset Count | Commercial |
| `projectLocations` | Project Locations | Commercial |
| `timeline` | Preferred Timeline | Commercial |
| `description` | Project Description (multi-line) | Commercial |
| `homeMarket` | Home Market or Region | Installer Network |
| `experienceSummary` | Experience Summary (multi-line) | Installer Network |
| `platforms` | Platform Experience (comma-separated text) | Installer Network, Application |
| `toolsOwned` | Tools Owned (multi-line) | Installer Network, Application |
| `travelAvailability` | Travel Availability (multi-line) | Installer Network, Application |
| `skillsExperience` | Skills and Experience (multi-line) | Application |
| `jobSlug` | Job ID | Application |
| `jobTitle` | Job Title | Application |
| `validDriversLicense`, `personalVehicle`, `providesOwnToolsAndTravel`, `smartphone`, `backgroundCheckConsent`, `travelPercentAcknowledged`, `stateToStateTravelAcknowledged`, `trainingAcknowledged`, `independentContractorAcknowledged`, `privacyConsent` | Confirmed - Valid Driver License, Confirmed - Personal Vehicle, Confirmed - Own Tools and Travel Resources, Confirmed - Smartphone, Confirmed - Background Check Consent, Confirmed - Travel Requirement, Confirmed - State-to-State Travel, Confirmed - Training Provided, Confirmed - Independent Contractor Status, Confirmed - Privacy Consent (each holds `Yes` or `No`, except Privacy Consent, which is always `Yes`) | Application |
| `receivedAt` | Consent Recorded At | All |
| `submissionId` | Submission ID | All |
| `sourcePage`, `referrer`, `utmSource`, `utmMedium`, `utmCampaign`, `utmContent`, `utmTerm` | Source Page, Referrer, UTM Source, UTM Medium, UTM Campaign, UTM Content, UTM Term | All |

Company is a standard GHL field. The Worker fills it for commercial inquiries.

The recruitment journeys share `platforms`, `toolsOwned`, and `travelAvailability`. A person in both holds one value for each, the most recent.

Repeat submissions overwrite these fields, including the attribution fields, so first-touch attribution is not preserved. Staff-filled fields from `docs/14` section 48 (Market, Owner, Qualification Result, Disposition Reason, Last Contact, Next Action) are created empty and never populated by the Worker.

The form never collects a license number, Social Security number, date of birth, or any government identifier, and no field for one should be created. Do not add an upload field for the application journey (`docs/16` section 23).

## 5. Pipelines and stages

The Worker creates every opportunity at the first stage of its pipeline, with status open and no value. It never enters an estimate.

### Commercial (from `docs/14` section 49)

1. Inquiry received (the Worker's stage)
2. Review pending
3. Contact attempted
4. Discovery scheduled
5. Qualified opportunity
6. Scope or estimate in progress
7. Proposal issued
8. Won
9. Lost
10. Not a fit
11. Future follow-up

### Recruitment (from `docs/14` section 48)

1. Application received (the Worker's stage)
2. Review pending
3. Minimum criteria review
4. Qualified for contact
5. Contact attempted
6. Screening scheduled
7. Screening completed
8. Technical evaluation or interview
9. Approved pending requirements
10. Onboarding
11. Activated installer
12. Future opportunity or network
13. Not proceeding
14. Withdrawn
15. Unreachable

### Installer Network (proposal, needs approval)

An Installer Network registration is not an application and is never counted as one (`CLAUDE.md` section 4), so it does not go in the Recruitment pipeline. `docs/14` defines stages for applications only. These stages are a working proposal:

1. Registered (the Worker's stage)
2. Reviewed
3. Future opportunity
4. Contacted for an opportunity
5. Not proceeding
6. Withdrawn
7. Unreachable

## 6. Workflow 1: Commercial inquiry

**Trigger:** Opportunity Created, filtered to the Commercial pipeline.

1. **Trigger:** Opportunity Created, pipeline equals Commercial.
2. **Internal Notification (email, to the commercial owner).** Subject: `New commercial inquiry: {{company}}`. Body: company, service need, vehicle count, project locations, preferred timeline, and a link to the opportunity. Leave out the project description if the notification goes to a shared mailbox.
3. **Send Email to the contact:**

   > **Subject:** We received your installation request
   >
   > Hello {{first name}},
   >
   > Thank you for contacting Ultimate Fleet GPS about {{service need}}. We received your request, and a member of our team will review it and follow up with you.
   >
   > If you need to reach us in the meantime, call [business telephone from `docs/01`].
   >
   > Ultimate Fleet GPS

4. **Update Opportunity:** move to Review pending. Optional, and only if the team wants every new inquiry queued. Skip it to leave the inquiry at Inquiry received until a person looks.

## 7. Workflow 2: Installer Network registration

**Trigger:** Opportunity Created, filtered to the Installer Network pipeline.

1. **Trigger:** Opportunity Created, pipeline equals Installer Network.
2. **Internal Notification (email, to the recruiting owner).** Subject: `New Installer Network registration`. Body: name, home market, travel availability, and a link to the opportunity.
3. **Send Email to the contact:**

   > **Subject:** We received your Installer Network registration
   >
   > Hello {{first name}},
   >
   > Thank you for your interest in the Ultimate Fleet GPS Installer Network. We received your registration.
   >
   > Joining the Installer Network is not an application. It does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.
   >
   > Ultimate Fleet GPS

## 8. Workflow 3: Job application

**Trigger:** Opportunity Created, filtered to the Recruitment pipeline.

**Do not send production traffic to this workflow until the applicant-data review in decision 0019 is recorded.** That review covers who can see applicant data, retention, and employment-related compliance (`docs/16` section 21). Build and test it in the test sub-account in the meantime.

1. **Trigger:** Opportunity Created, pipeline equals Recruitment.
2. **Update Opportunity:** move to Review pending, with no condition, so every application is queued for a person. Do not add any step that qualifies, scores, or rejects an application. A `No` on a Yes or No question (decision 0022) is not a rejection. It changes nothing automatically, and a person decides what it means.
3. **Internal Notification (email, to the recruiting owner).** Subject: `New application: {{job title}}`. Body: name, job title, and a link to the opportunity. Leave the answers out of the email. Staff open them in GHL.
4. **Send Email to the contact:**

   > **Subject:** We received your application
   >
   > Hello {{first name}},
   >
   > Thank you for applying for the {{job title}} opening at Ultimate Fleet GPS. We received your application, and our team will review it.
   >
   > Submitting an application does not guarantee an interview, contact, or work.
   >
   > Ultimate Fleet GPS

   The wording needs legal review before launch, as the form text does (`docs/01` section 33.9).

`{{company}}`, `{{service need}}`, and `{{job title}}` are the contact's custom fields from section 4. Pick them with the workflow's variable picker.

## 9. Not yet decided

These are missing from the project record, so none is filled in above:

- The commercial owner and the recruiting owner, who receive notifications and own opportunities.
- The business telephone for the commercial acknowledgement. Take it from `docs/01`, not from memory.
- Approval of the Installer Network pipeline stages in section 5.
- The applicant-data review for workflow 3.
- Whether recruitment and commercial use separate sub-accounts (section 2).

## 10. Test plan

Run in the test sub-account, with the Worker deployed to a preview and `NEXT_PUBLIC_FORMS_ENDPOINT` pointing at it.

1. Submit each form once with obviously fake data. Confirm each creates a contact, the right tags, and one opportunity in its own pipeline at its first stage, and nothing in the other two.
2. Confirm every custom field is filled, including `receivedAt` and `submissionId`, and that platform experience reads as comma-separated text.
3. Confirm the acknowledgement email arrives once per submission, with the exact copy above, and that each workflow fires only for its own pipeline.
4. Confirm the internal notification reaches the named owner and contains no application answers.
5. Resubmit with the same email. Confirm the contact updates and no second contact appears. Expect a second opportunity.
6. Break each step in turn (revoke the token, use a wrong pipeline ID, use a wrong custom field ID). Confirm the site shows its error and call fallback and never a confirmation, and that the Worker log names the failing step and status code.
7. Confirm the API assumptions in `workers/forms/README.md`, "Verify before launch".
8. Check GHL's workflow execution logs after each test, and set a failure alert on each workflow. A failed workflow step does not reach the visitor, because the Worker has already confirmed the records.
