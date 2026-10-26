# 32. GoHighLevel Workflows

Build specification for the three GoHighLevel (GHL) workflows that receive site form submissions from the forms Worker (`workers/forms/`, decision `docs/decisions/0019-ghl-forms-relay.md`).

This is an internal document. It describes what to build in GHL. Nothing here has been built or verified in a GHL account.

## 1. Rules that govern every workflow

- One workflow per journey. Never point two journeys at one workflow, pipeline, or opportunity (`CLAUDE.md` section 4; `docs/16` sections 24 and 25).
- Every workflow starts with a guard that checks `formType` and ends the run if it is not the expected value.
- No acknowledgement promises price, scheduling, coverage, or a response time (`docs/16` section 25).
- No recruiting acknowledgement implies employment, an interview, guaranteed work, guaranteed pay, or an automated decision (`CLAUDE.md` section 4).
- No workflow makes a final hiring, contracting, or rejection decision. Every stage change on a candidate is a human action (`docs/14` section 48).
- Acknowledgement is by email only. The consent text on the forms covers being contacted, but it does not establish SMS consent, so send no SMS to the visitor.
- Do not copy submission data into analytics, shared channels, or tools outside GHL.

## 2. What the Worker sends

Flat JSON, one POST per accepted submission. Use a real test submission as the sample in each trigger so the field picker shows the real keys.

Keys common to all three:

| Key | Meaning |
| --- | --- |
| `submissionId` | Worker-generated ID. Store it on the contact or opportunity for support lookups |
| `receivedAt` | Server time of acceptance. The consent record time |
| `formType` | `commercial_inquiry`, `installer_network`, or `job_application` |
| `pipeline` | `commercial` or `recruitment` |
| `source` | Source label, for example `Website - Commercial Inquiry` |
| `tags` | Array of tags to apply |
| `first_name`, `last_name`, `full_name`, `email`, `phone` | Contact fields |
| `sourcePage`, `sourceTitle`, `referrer`, `utmSource`, `utmMedium`, `utmCampaign`, `utmContent`, `utmTerm`, `clientSubmittedAt` | First-touch attribution |

Consent: the Worker rejects any submission in which a required consent or acknowledgment box is unticked. A record that arrives has every box ticked, and `receivedAt` is when. Store `receivedAt` as the consent time. Do not store a copy of every always-true checkbox.

## 3. Setup common to all three

1. In GHL, use a test sub-account for Preview and a production sub-account for the live site (`docs/17` section 29).
2. Create the custom fields, pipelines, and stages below first.
3. Create each workflow with the **Inbound Webhook** trigger. Copy its URL into the matching Worker secret:

   | Workflow | Worker secret |
   | --- | --- |
   | 1. Commercial inquiry | `GHL_WEBHOOK_COMMERCIAL` |
   | 2. Installer Network registration | `GHL_WEBHOOK_INSTALLER_NETWORK` |
   | 3. Job application | `GHL_WEBHOOK_APPLICATION` |

4. Send one test submission, open **Fetch sample requests** in the trigger, and select it.
5. Reference trigger data with the workflow's variable picker. The syntax is expected to look like `{{inboundWebhookRequest.serviceNeed}}`. Confirm it in the picker, because this document could not verify it.
6. Restrict custom-field and pipeline visibility so only the staff who need each journey can see it. Recruitment contacts and commercial contacts are different audiences.

**Same person, two journeys.** GHL keeps one contact per email address. A person who is both a customer and a candidate will be one contact with two opportunities. Keep the journeys apart by pipeline and tag, never by merging. If that is not acceptable, use separate sub-accounts for commercial and recruitment, which also isolates applicant data.

## 4. Workflow 1: Commercial inquiry

**Trigger:** Inbound Webhook.
**Worker secret:** `GHL_WEBHOOK_COMMERCIAL`.
**Pipeline:** Commercial (`docs/14` section 49).

### Custom fields (contact)

| Payload key | GHL field name | Type |
| --- | --- | --- |
| `company_name` | Company (standard field) | Standard |
| `serviceNeed` | Service Need | Single line |
| `vehicleCount` | Vehicle or Asset Count | Single line |
| `projectLocations` | Project Locations | Single line |
| `timeline` | Preferred Timeline | Single line |
| `description` | Project Description | Multi line |
| `receivedAt` | Consent Recorded At | Date/time |
| `submissionId` | Submission ID | Single line |
| `sourcePage`, `utm*`, `referrer` | Source Page, UTM Source, UTM Medium, UTM Campaign, UTM Content, UTM Term, Referrer | Single line |

`vehicleCount` and `timeline` are free text on the form, so keep them text.

### Pipeline stages (from `docs/14` section 49)

1. Inquiry received
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

### Steps

1. **Trigger:** Inbound Webhook.
2. **If/Else:** `formType` equals `commercial_inquiry`. If not, go to **End**.
3. **Create/Update Contact.** Match on email. Map first name, last name, email, phone, company, and the custom fields above. Set **Source** to `source`. Do not overwrite attribution on an existing contact, so first touch survives. Use "update only if empty" on the attribution fields where GHL offers it.
4. **Add Tags:** `website-lead`, `commercial-inquiry`.
5. **Create/Update Opportunity.**
   - Pipeline: Commercial. Stage: Inquiry received. Status: Open.
   - Name: `{{company}} - {{serviceNeed}}`.
   - Source: `Website - Commercial Inquiry`.
   - Lead value: leave empty. Do not enter an estimate.
   - Assign to the commercial owner (not yet named, see section 7).
6. **Internal Notification (email, to the commercial owner).** Subject: `New commercial inquiry: {{company}}`. Body: company, service need, vehicle count, project locations, timeline, and a link to the opportunity. Leave out the free-text description if the notification goes to a shared mailbox.
7. **Send Email to the contact:**

   > **Subject:** We received your installation request
   >
   > Hello {{first name}},
   >
   > Thank you for contacting Ultimate Fleet GPS about {{serviceNeed}}. We received your request, and a member of our team will review it and follow up with you.
   >
   > If you need to reach us in the meantime, call [business telephone from `docs/01`].
   >
   > Ultimate Fleet GPS

8. **End.**

## 5. Workflow 2: Installer Network registration

**Trigger:** Inbound Webhook.
**Worker secret:** `GHL_WEBHOOK_INSTALLER_NETWORK`.
**Pipeline:** Installer Network (new, see below).

An Installer Network registration is not an application and is never counted as one (`CLAUDE.md` section 4). It does not go in the application pipeline.

### Custom fields (contact)

| Payload key | GHL field name | Type |
| --- | --- | --- |
| `homeMarket` | Home Market or Region | Single line |
| `experienceSummary` | Experience Summary | Multi line |
| `platforms` | Platform Experience | Text (see the array note below) |
| `toolsOwned` | Tools Owned | Multi line |
| `travelAvailability` | Travel or Coverage Availability | Single line |
| `receivedAt` | Consent Recorded At | Date/time |
| `submissionId` | Submission ID | Single line |
| attribution keys | As in workflow 1 | Single line |

**Array note.** `platforms` is a JSON array. GHL may not map an array into a text field cleanly. Check the sample request. If it does not arrive as readable text, change the Worker to also send a comma-joined `platformsText` and map that instead. That is a small change to `workers/forms/src/ghl.ts`.

### Pipeline stages (proposal)

`docs/14` defines stages for the application pipeline only. Item 12 there, "Future opportunity or network", is where a network record ends up after a decision, not where it starts. These stages are a working proposal and need approval before use:

1. Registered
2. Reviewed
3. Future opportunity
4. Contacted for an opportunity
5. Not proceeding
6. Withdrawn
7. Unreachable

### Steps

1. **Trigger:** Inbound Webhook.
2. **If/Else:** `formType` equals `installer_network`. If not, **End**.
3. **Create/Update Contact.** Match on email. Map name, email, phone, and the fields above. Source: `source`.
4. **If/Else (guard against mixing):** contact has the tag `job-application`. If yes, do not change that contact's application opportunity. Continue to the next step regardless, because the opportunity is separate.
5. **Add Tags:** `website-lead`, `installer-network`.
6. **Create/Update Opportunity.**
   - Pipeline: Installer Network. Stage: Registered. Status: Open.
   - Name: `{{full name}} - Installer Network`.
   - Source: `Website - Installer Network`.
   - Do not set a value.
7. **Internal Notification (email, to the recruiting owner).** Subject: `New Installer Network registration`. Body: name, home market, travel availability, and a link to the opportunity.
8. **Send Email to the contact:**

   > **Subject:** We received your Installer Network registration
   >
   > Hello {{first name}},
   >
   > Thank you for your interest in the Ultimate Fleet GPS Installer Network. We received your registration.
   >
   > Joining the Installer Network is not an application. It does not guarantee contact, an interview, employment, a contract, an assignment, a schedule, work volume, or pay.
   >
   > Ultimate Fleet GPS

9. **End.**

## 6. Workflow 3: Job application

**Trigger:** Inbound Webhook.
**Worker secret:** `GHL_WEBHOOK_APPLICATION`.
**Pipeline:** Recruitment (`docs/14` section 48).

**Do not send production traffic to this workflow until the applicant-data review in decision 0019 is recorded.** That review covers who can see applicant data, retention, and employment-related compliance (`docs/16` section 21). Build and test it in the test sub-account in the meantime.

### Custom fields (contact)

| Payload key | GHL field name | Type |
| --- | --- | --- |
| `jobSlug` | Job ID | Single line |
| `jobTitle` | Job Title | Single line |
| `travelAvailability` | Travel Availability | Multi line |
| `skillsExperience` | Skills and Experience | Multi line |
| `platforms` | Platform Experience | Text (array note in section 5) |
| `toolsOwned` | Tools Owned | Multi line |
| `receivedAt` | Consent Recorded At | Date/time |
| `submissionId` | Submission ID | Single line |
| attribution keys | As in workflow 1 | Single line |

The form never collects a license number, Social Security number, date of birth, or any government identifier, and no field for one should be created. Do not add an upload field to any GHL form for this journey (`docs/16` section 23).

`docs/14` section 48 also requires a Market, Owner, Qualification Result, Disposition Reason, Last Contact, and Next Action. Those are filled by staff, so create them as empty custom fields or opportunity fields and do not populate them from the webhook.

### Pipeline stages (from `docs/14` section 48)

1. Application received
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

### Steps

1. **Trigger:** Inbound Webhook.
2. **If/Else:** `formType` equals `job_application`. If not, **End**.
3. **Create/Update Contact.** Match on email. Map name, email, phone, and the fields above. Source: `source`.
4. **Add Tags:** `website-lead`, `job-application`, and `job-` followed by `jobSlug` (the Worker already sends this in `tags`).
5. **Create/Update Opportunity.**
   - Pipeline: Recruitment. Stage: Application received. Status: Open.
   - Name: `{{full name}} - {{jobTitle}}`.
   - Source: `Website - Job Application`.
   - Do not set a value.
6. **Move to Review pending.** Add this as a plain stage move with no condition, so each application is queued for a person. Do not add any step that qualifies, scores, or rejects an application.
7. **Internal Notification (email, to the recruiting owner).** Subject: `New application: {{jobTitle}}`. Body: name, job title, and a link to the opportunity. Leave the answers out of the email. Staff open them in GHL.
8. **Send Email to the contact:**

   > **Subject:** We received your application
   >
   > Hello {{first name}},
   >
   > Thank you for applying for the {{jobTitle}} opening at Ultimate Fleet GPS. We received your application, and our team will review it.
   >
   > Submitting an application does not guarantee an interview, contact, or work.
   >
   > Ultimate Fleet GPS

   The wording needs legal review before launch, as the form text does (`docs/01` section 33.9).

9. **End.**

## 7. Not yet decided

These are missing from the project record, so none is filled in above:

- The commercial owner and the recruiting owner, who receive notifications and own opportunities.
- The business telephone for the commercial acknowledgement. Take it from `docs/01`, not from memory.
- Approval of the Installer Network pipeline stages in section 5.
- The applicant-data review for workflow 3.
- Whether recruitment and commercial use separate sub-accounts (section 3).

## 8. Test plan

Run in the test sub-account, with the Worker deployed to a preview and `NEXT_PUBLIC_FORMS_ENDPOINT` pointing at it.

1. Submit each form once with obviously fake data. Confirm each lands in its own workflow, pipeline, and stage, and in no other.
2. Confirm all custom fields are filled, including `receivedAt` and `submissionId`, and that `platforms` is readable.
3. Confirm the acknowledgement email arrives once per submission, with the exact copy above.
4. Confirm the internal notification reaches the named owner and contains no application answers.
5. Resubmit with the same email. Confirm the contact updates, the original attribution is kept, and no second contact appears.
6. Send a `job_application` payload to the commercial webhook. Confirm the `formType` guard ends the run and creates nothing.
7. Turn the workflow off and submit. Confirm the site shows its error and call fallback rather than a confirmation. Note that GHL accepts the webhook before later steps run, so a failed action inside a workflow does not reach the visitor. Check GHL's workflow execution logs after each test, and set a failure alert on each workflow.
