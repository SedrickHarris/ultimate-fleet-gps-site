# Ultimate Fleet GPS Business Source of Truth

**Document:** 01-business-source-of-truth.md  
**Project:** Ultimate Fleet GPS Website Rebuild  
**Business:** Ultimate Fleet GPS  
**Status:** Discovery draft  
**Version:** 0.9  
**Last updated:** September 19, 2026

---

## 1. Purpose

This document is the canonical source for business facts used throughout the Ultimate Fleet GPS website project. It exists to prevent assumptions, legacy language, recruiting requirements, third-party information, and proposed marketing ideas from becoming unsupported public claims.

Use this document before writing or approving:

- Website copy
- Metadata
- Structured data
- Forms
- Contact information
- Service pages
- Industry pages
- Audience and solution pages
- Technology pages
- Service-area pages
- Case studies
- Careers content
- Directory profiles
- Google Business Profile content
- Bing Places content
- Apple Business Connect content
- Social profile descriptions
- Press or partnership material

If a fact is not approved here or in a more specific canonical registry, treat it as unverified.

---

## 2. Authority and precedence

When sources conflict, use the following order:

1. Written confirmation from an authorized Ultimate Fleet GPS representative
2. Approved contracts, licenses, certifications, policies, and internal company records
3. Approved canonical project registries
4. Current official company website content
5. Current official company-controlled profiles
6. Current recruiting material
7. Reputable third-party directories and publications
8. Search results, cached pages, competitor content, and other secondary sources

Lower-priority sources may identify facts that require verification. They do not override a higher-priority source.

---

## 3. Status definitions

| Status | Meaning | Public use |
| --- | --- | --- |
| Approved | Confirmed by an authorized company representative or authoritative record | Allowed within the approved scope |
| Existing website statement | Currently stated on the company website but not independently confirmed | Preserve carefully; verify before expanding |
| Recruiting evidence | Appears in company recruiting content as a technician duty or preferred qualification | Do not automatically convert into a customer-facing service |
| External evidence | Appears in a third-party source | Use for discovery only until confirmed |
| Proposed | Recommended for strategy or information architecture | Not a company fact |
| Inferred | Reasonable interpretation of available information | Label internally; do not publish as fact |
| Pending verification | Important fact with insufficient or conflicting support | Do not publish definitively |
| Prohibited until supported | Claim presents elevated legal, brand, safety, partnership, or credibility risk | Do not publish without documentation |
| Retired | Previously used but no longer current | Do not publish except in accurate historical context |

---

## 4. Entity record

| Field | Current value | Status | Notes |
| --- | --- | --- | --- |
| Legal business name | Ultimate Fleet GPS (legal entity suffix unconfirmed) | Approved. Internal, with a limited legal-disclosure use | Client confirmed as the sole operating entity. It is not the public name. See sections 4.2 and 33.5 |
| Public-facing name | Ultimate Fleet GPS | Approved | Stakeholder confirmed September 10, 2026 as the only name used publicly. See section 4.2 |
| Abbreviated name | Ultimate Fleet GPS | Existing website statement | Existing homepage uses this shortened form |
| Current website | https://ultimatefleetgps.net/ | Approved for current-site reference | Confirm this will remain the production domain |
| New repository | https://github.com/SedrickHarris/ultimate-fleet-gps-site.git | Approved project fact | New website repository |
| Entity type | Limited liability company | Existing website statement | Based on the displayed company name; legal state and status remain unverified |
| Years in business | In business since 2011 | Approved | Client confirmed 2026-09-18, superseding the prior "15 years" duration phrasing. See section 25 for approved wording |
| Founding date | 2011 | Approved | Client confirmed 2026-09-18. May be published as "in business since 2011" |
| Founder | Unknown | Pending verification | Do not publish |
| Owner | Unknown | Pending verification | Do not publish third-party names without confirmation |
| Leadership | Unknown | Pending verification | Needed for About and entity content |
| Corporate office | 4539 N. 22nd St. #6225, Phoenix, AZ 85016 | Approved September 19, 2026 (supersedes the September 10, 2026 no-address record) | May be published on the approved surfaces only. Not a walk-in facility. See sections 5.3 and 33.4 |
| Customer-facing office | None | Approved | No walk-in location. The corporate office is not a customer-facing or walk-in installation facility. See section 5.3 |

### 4.1 Sole operating entity

Ultimate Fleet GPS is the sole operating entity referenced throughout the website.

**Status:** Approved. Client confirmed.

There is no Doral Transport LLC relationship to document. Do not represent Doral Transport LLC as a parent, affiliate, employer, contracting entity, hiring entity, or operating company, and do not present the two names as interchangeable.

One entity is responsible for recruiting, hiring or contracting, payment, supervision, and installer management. Use Ultimate Fleet GPS as the organization name in public company copy, forms, and structured data. Use Ultimate Fleet GPS only where the legal entity is required, such as internal documentation or legally appropriate employment and contractor disclosures. See sections 4.2 and 33.5.

Several other project documents described this relationship as unresolved. They were updated on September 19, 2026 to mark it resolved: `02`, `05`, `09`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, and `19`.

### 4.2 The public name never carries "LLC"

**The public company name is Ultimate Fleet GPS. It never carries "LLC".**

**Status:** Approved. Stakeholder confirmed September 10, 2026.

> Remove "LLC" from the company name on all customer facing content. "LLC" will not be included in the company name in this project. Hard rule.

**Provenance.** This instruction came directly from the stakeholder on September 10, 2026, delivered outside the build thread and relayed into it verbatim. It was not inferred from the brand kit, not derived from the existing copy, and not proposed by the build. The quotation above is the stakeholder's own wording.

This note exists so a future review does not re-flag the change as unauthorized. The removal touched legal pages and structured data, which normally carry the registered entity, and that is exactly the kind of edit a reviewer should challenge without a recorded source. The source is recorded here.

This is a project-wide content rule, not a page-level preference. It applies to every customer-facing surface, which includes page copy, headings, navigation, footers, legal pages, metadata, structured data values, alt text, form labels, error messages, email templates, and job postings.

The registered entity remains Ultimate Fleet GPS, and section 4 records it as a business fact. That form stays internal. Do not publish it, and do not reintroduce it through a schema `legalName` property, an Open Graph `siteName`, or a copyright line.

**Approved limited exception, September 19, 2026.** The registered entity may appear where the legal entity is required, such as internal documentation and legally appropriate employment and contractor disclosures. Each such use must be identified as legally required before it is published. The exception does not change the public name. Page copy, headings, navigation, footers, metadata, `Organization` `name`, `hiringOrganization` `name`, Open Graph `siteName`, alt text, form labels, and job posting titles keep using Ultimate Fleet GPS without "LLC". Do not publish `legalName`, and do not add "LLC" to a copyright line, unless a separate written approval names that surface. This exception was stated by the project owner on September 19, 2026 and narrows the earlier statement that the rule has no approval path.

Internal project documents in `docs/` are not customer-facing and may name the registered entity where the legal fact is the point, as this section does.

The brand kit supplied on September 10, 2026 gives the same instruction under its do-not list. The two agree.

**Note for review, not a blocker.** Privacy and terms pages conventionally identify the registered legal entity, and both pages previously did. They no longer do. The pages already carry a notice that they have not been reviewed by an attorney. Confirm with counsel whether the entity form is required in those two documents specifically before launch.

---

## 5. Contact information

### 5.1 Telephone numbers

| Number | Source observation | Status | Required action |
| --- | --- | --- | --- |
| (928) 393-8049 | Displayed on the homepage, contact page, career page, and external recruiting listing | Verified | Approved as the canonical business telephone number |
| 623-338-7352 | Displayed on the current contact page | Rejected | Do not publish. Treat as a typographical error and correct wherever it appears |

**(928) 393-8049 is the canonical business telephone number.** Stakeholder confirmed
on September 10, 2026.

Use this number consistently across website copy, metadata, structured data,
business profiles, directory citations, and recruiting listings. Name, address, and
phone consistency depends on a single canonical value.

623-338-7352 is rejected. Where it appears on the current site or in any third-party
listing, correct it as part of citation cleanup.

### 5.2 Email addresses

| Purpose | Current value | Status |
| --- | --- | --- |
| General inquiries | Unknown | Pending verification |
| Sales and quotes | Unknown | Pending verification |
| Installation service | Unknown | Pending verification |
| Provider partnerships | Unknown | Pending verification |
| Careers | Unknown | Pending verification |
| Accounts or billing | Unknown | Pending verification |

Do not invent departmental email addresses.

### 5.3 Address

**The corporate office is 4539 N. 22nd St. #6225, Phoenix, AZ 85016.**

**Status:** Approved September 19, 2026. This supersedes the September 10, 2026 record that the company publishes no address (see the verification log in section 29).

Ultimate Fleet GPS operates a mobile-only installation model. Service is delivered at the customer's location. The Phoenix address is the corporate office. It is not a walk-in installation facility, not a customer-facing service location, and not a guarantee of local service availability.

Approved publication surfaces for the Phoenix address: the website footer, the contact page, careers pages, legal pages, `Organization` structured data, and eligible `JobPosting` structured data. Any other surface needs separate approval.

Consequences:

- Do not describe the Phoenix address as a walk-in facility, an installation shop, or a place where customers or candidates can visit for service.
- Do not present the address as evidence of local service in Arizona or any other market. Nationwide reach stays reach, not physical presence. See section 8.4.
- Publishing the address does not make the business eligible for a storefront-style Google Business Profile listing. No Google Business Profile, Bing Places, or Apple Business Connect profile is approved, and any future profile work needs its own decision.
- `LocalBusiness` structured data is not approved. Use `Organization` for entity markup, with the address only as approved above. See `13-schema-markup-plan.md`.
- Do not publish a map, directions, or visiting hours for the office.
- Contact pathways rely on the telephone number in section 5.1, approved forms, and email once verified.
- Address values live in typed data files and are never embedded in reusable UI components (CLAUDE.md section 8).
- Local content must describe service reach, not a physical presence. See section 8.4.

#### Retired shop-location language

A prior company-authored job posting on Glassdoor, expired January 2026, referenced a "possibility of shop locations." The stakeholder confirmed on September 10, 2026 that this language was outdated and inaccurate as a general statement. The corporate office recorded above is not a shop. Possible shop locations may be mentioned only in the context of a specific assignment, and only where that assignment's record supports it.

**Status:** Retired as a general statement, and narrowed on September 19, 2026. Do not present shop locations as a standing feature of the company, the careers pages, or the Installer Network. Do not reintroduce the "possibility of shop locations" wording.

This is recorded here so the expired posting does not resurface as an unresolved conflict in a future content pass. See sections 7.1 and 17, which were corrected to remove the same language.

The Goodyear, Arizona association appearing in a third-party directory is **confirmed irrelevant**. It is not a company address, was never approved, and must not be used as a canonical address, a customer-facing location, or a structured-data location. Where it appears in an external directory, treat it as a citation cleanup item rather than a fact to represent.

### 5.4 Business hours

**Monday through Friday, 8:00 AM to 6:00 PM.**

**Status:** Approved. Client confirmed.

These are business hours, not a service-availability guarantee. Do not convert them into same-day response, after-hours availability, emergency service, weekend coverage, or technician scheduling windows. Do not infer extended hours from technician schedules, job listings, or common industry practices.

The time zone and any holiday exceptions remain unconfirmed. Confirm both before publishing hours in structured data.

---

## 6. Approved and observed company description

### 6.1 Current website description

The existing homepage states that Ultimate Fleet GPS provides mobile electronic equipment installation services and has qualified mobile technicians throughout the United States.

It specifically presents:

- Installation and service of GPS equipment
- Mobile technicians
- On-site travel to meet customer needs
- Experience with electrical systems
- Mechanical insight
- Customer service

These are existing website statements. They should be preserved accurately during discovery but verified before being expanded into more specific performance, capacity, certification, or coverage claims.

### 6.2 Working internal description

Ultimate Fleet GPS appears to provide on-site installation and related field services for GPS, electronic logging, fleet-management, video, and other mobile electronic equipment used in fleet and construction vehicles.

**Status:** Inferred from customer-facing and recruiting content.

Do not publish this exact description as approved company copy until the underlying services are confirmed.

### 6.3 Proposed customer-facing positioning

> Nationwide mobile installation services for GPS tracking equipment, ELDs, telematics hardware, fleet cameras, and connected vehicle equipment.

**Status:** Proposed.

Requirements before approval:

- Verify each named service.
- Verify the current meaning and operational extent of nationwide coverage.
- Verify supported equipment and vehicle categories.
- Confirm that connected vehicle equipment is an acceptable umbrella term.

---

## 7. Business model

### 7.1 Observed operating model

Technicians travel to the customer's location. All work is performed on-site.

**Status:** Approved. Stakeholder confirmed September 10, 2026.

An earlier version of this section recorded that technicians "may also work at shop locations," drawn from an expired Glassdoor posting. The stakeholder confirmed that language was outdated and inaccurate. See the retired shop-location note in section 5.3.

### 7.2 Contractor model

**Technicians are engaged as independent contractors, not employees.**

**Status:** Confirmed.

> Confirmed by stakeholder, September 10, 2026: technicians are independent contractors, not employees.

The stakeholder's words were: "Yes, confirmed - technicians are independent contractors, not employees."

The current career page advertises an independent contractor mobile technician position, which is consistent with this confirmation.

#### Scope of this confirmation

This confirms the **classification only**. It is a general statement about the working relationship and nothing more.

Do not infer any of the following from it. Each remains a separate, unconfirmed item:

- Contract terms, contract length, or termination conditions
- Compensation, pay rates, or payment schedule
- Expense, mileage, travel, or equipment reimbursement
- Work schedule, shift length, or hours committed
- Benefits of any kind
- Tax treatment or filing obligations
- Exclusivity, territory, or volume commitments
- The screening, onboarding, or assignment process

**Update, September 19, 2026.** Starting compensation, travel expectations, applicant requirements, and training for the current openings are now approved. See sections 19 and 33. Contract terms and length, expense or mileage reimbursement, benefits, tax treatment, exclusivity, territory or volume commitments, and the screening, onboarding, and assignment process stay unconfirmed, and schedule and benefits still require company review before they appear in careers content.

#### Publication limits

- Approved for describing the working relationship in general terms.
- Do not use the classification to imply guaranteed work, hours, income, or acceptance. See `19-claude-project-instructions.md` section 15.
- Do not describe a technician as an employee anywhere in site content, forms, privacy notices, or structured data.
- Worker classification carries legal exposure. Any change in how the relationship is described requires company and, where appropriate, legal review. See `19-claude-project-instructions.md` section 34.

### 7.3 Potential commercial relationships

The website may serve or seek relationships with:

- Fleet operators
- Telematics providers
- GPS and ELD providers
- Equipment manufacturers
- Equipment resellers
- Fleet-management companies
- Installation project managers
- Multi-location commercial organizations

**Status:** Proposed or inferred.

Confirm which customer types are current, desired, and supportable before developing definitive audience pages.

### 7.4 Equipment sales

It is unknown whether Ultimate Fleet GPS:

- Sells equipment
- Resells equipment
- Supplies installation materials only
- Installs customer-supplied equipment
- Installs provider-supplied equipment
- Provides software subscriptions

**Status:** Pending verification.

Do not position the company as an equipment dealer or software provider until confirmed.

---

## 8. Geographic coverage

### 8.1 Existing coverage statement

The homepage states that technicians are located throughout the United States and can travel on-site to meet customer needs.

**Status:** Existing website statement.

### 8.2 Confirmed service area

**The service area is nationwide.**

**Status:** Approved. Client confirmed.

Ultimate Fleet GPS serves customers nationwide through mobile technicians who travel to the customer's location. Nationwide service reach may be stated in website copy, metadata, and structured data as an approved fact.

**This is a geographic fact only.** Project capacity is a separate confirmed fact recorded in section 11.1. The two are independent and must not be conflated. Confirming one says nothing about the other, and a future content pass should check each against its own section rather than re-flagging one while verifying the other.

This confirms **reach**, not capacity. It does not establish same-day availability, universal coverage of every city, guaranteed technician presence in a given market, equal availability across all services, or unlimited project capacity. The caveat in section 25 and the prohibited wording in section 26 continue to apply in full.

### 8.3 Remaining coverage details

Nationwide reach is approved. The following operational details remain unconfirmed and must not be published or implied:

- States with resident technician coverage versus states served through project travel
- Metros with recurring availability
- Response or scheduling expectations
- Minimum project sizes for travel
- Travel charges
- Remote or excluded areas
- Whether nationwide reach applies to every service
- Whether nationwide reach applies to single-vehicle work
- Whether coverage varies by customer or platform

Do not create state or metro location pages on the basis of nationwide reach alone. Page creation still depends on verified capacity in that market, per section 8.4 and `08-url-strategy.md`.

### 8.4 Location representation rule

Do not treat technician coverage as a physical office.

Distinguish:

- Headquarters
- Staffed office
- Customer-facing office
- Mailing address
- Technician base
- Mobile service area
- Temporary deployment area
- State coverage
- Metro coverage

### 8.5 Local profile rule

The business operates a mobile-only installation model, and its corporate office is not a walk-in facility (section 5.3), so it is not eligible for a standard storefront-style local profile. See section 5.3.

Do not create or optimize a Google Business Profile, Bing Places profile, Apple Business Connect location, `LocalBusiness` schema record, or address citation that asserts a physical customer-facing location. Any future profile must be configured as a service-area business with the address hidden, and only at the client's direction.

---

## 9. Verified customer-facing services

The current customer-facing website explicitly presents the following:

| Service or capability | Evidence | Status | Public wording limit |
| --- | --- | --- | --- |
| Mobile electronic equipment installation | Homepage | Existing website statement | May be preserved while the equipment scope is verified |
| GPS equipment installation | Homepage | Existing website statement | May be presented as a current core service, subject to company confirmation |
| GPS equipment service | Homepage | Existing website statement | The meaning of service must be defined before describing repairs or troubleshooting |
| On-site mobile service | Homepage | Existing website statement | Do not promise universal availability or response times |
| United States technician coverage | Homepage | Existing website statement | Verify current operational coverage before expanding the claim |
| Vehicle electrical knowledge | Homepage | Existing website statement | Do not imply a license or certification |
| Mechanical insight | Homepage | Existing website statement | Keep language limited until qualifications are confirmed |
| Customer service | Homepage | Existing website statement | Avoid unsupported guarantees or response-time claims |

### 9.1 Confirmed equipment and service scope

**Status:** Approved. Stakeholder confirmed September 10, 2026.

> Confirmed by stakeholder, September 10, 2026. Ultimate Fleet GPS installs GPS tracking, ELD, AOBRD, TPMS, and fleet management equipment. Technicians work with platforms including Lytx/DriveCam, SmartDrive, Zonar, LoJack, Interlock, PeopleNet, Trimble, Omnitracs, Samsara, Geotab, CalAmp, and Verizon Connect, plus dashcam and windshield-mounted video recorder installations. Source: stakeholder confirmation of a company-authored Glassdoor job posting's accuracy to current operations.

This supersedes the narrower GPS-only scope that previously constrained public copy and structured data. The equipment categories above may now be stated as current services in customer-facing copy, metadata, and structured data.

Limits that survive this confirmation:

- Platform names are experience context, not a service taxonomy. The usage restrictions in section 14 remain in force in full. Never use a platform name as a structured-data taxonomy value.
- Equipment scope is not capacity. Project capacity was confirmed separately on the same date and is recorded in section 11.1.
- Compensation was not asked about on September 10, 2026. Starting compensation for the current openings was approved on September 19, 2026. See sections 19 and 33.
- Installation process details were not part of this confirmation. Photo documentation was confirmed separately on the same date and is recorded in section 17.1. The rest of section 17 stays unconfirmed.

---

## 10. Recruiting-supported installation capabilities

The career page describes technician duties involving installation and service of:

- ELD equipment
- GPS equipment
- AOBRD equipment
- Fleet-management equipment

It also seeks experience with:

- Real-time GPS tracking devices
- ELD devices
- EOBR devices
- AOBRD devices
- Dash-camera devices
- Windshield-mounted video recorders
- Tire-pressure monitoring systems
- Mobile electronics

**Status:** Approved as current service scope for the equipment categories listed in section 9.1. Stakeholder confirmed September 10, 2026.

The categories confirmed in section 9.1 are GPS tracking, ELD, AOBRD, TPMS, fleet management equipment, dashcams, and windshield-mounted video recorders. These are current services, not applicant qualifications only.

EOBR devices and "mobile electronics" as a general category were not named in the confirmation and remain recruiting evidence.

A confirmed category is still not proof that the item is a universally available or separately marketed standalone service page.

Before creating a service page, confirm:

- The service is currently offered.
- The company wants to market it.
- The equipment category is current.
- The company has appropriate technician coverage.
- The service can be explained accurately.
- The page has a meaningful conversion path.

---

## 11. Proposed service registry candidates

The following are candidates for `06-service-registry.md`:

| Proposed service | Current support | Status |
| --- | --- | --- |
| GPS tracking device installation | Explicit homepage statement | High-priority verification |
| GPS equipment service | Explicit homepage statement | Define service scope |
| Electronic logging device installation | Career duties | Verify as customer-facing service |
| Fleet telematics installation | Implied by equipment and platforms | Proposed |
| Fleet dash-camera installation | Career experience requirement | Verify as customer-facing service |
| Fleet-management equipment installation | Career duties | Verify as customer-facing service |
| Vehicle gateway installation | Platform and equipment context | Proposed |
| Mobile data terminal installation | Industry fit; not clearly stated on current site | Proposed |
| TPMS equipment installation | Career experience requirement | Verify as customer-facing service |
| Vehicle electronics installation | Broad homepage category | Define scope |
| Equipment removal and reinstallation | Not clearly stated | Proposed |
| Installation troubleshooting and service | Electrical diagnostic requirements | Verify scope |
| Fleet equipment upgrades | Not clearly stated | Proposed |
| Multi-location fleet installations | Travel and scheduling context | Proposed |
| Nationwide fleet deployments | Reach confirmed in section 8.2, capacity range confirmed in section 11.1 | Approved as the conjunction of two distinct confirmed facts. Simultaneous multi-market volume is still unconfirmed |

No proposed service is approved merely because it appears in this table.

### 11.1 Confirmed project capacity range

**Ultimate Fleet GPS handles projects ranging from a single vehicle to an entire fleet.**

**Status:** Approved. Stakeholder confirmed September 10, 2026.

> This claim is true. Include in the content, do not remove.

The confirmation establishes a **project capacity range**: the company will take a one-vehicle job and will take a full-fleet job. Approved for customer-facing copy.

This is a different claim from the nationwide geographic reach confirmed in section 8.2. Reach answers where work happens. Capacity range answers how large a single project can be. **Record, cite, and verify them separately.** A future content pass must not treat a confirmation of one as covering the other, and must not re-flag one while checking the other.

What this confirmation does not establish:

- Simultaneous multi-market deployment volume
- Technician availability in a named market on a named date
- Turnaround time for a fleet of any given size
- A guarantee that any specific project will be accepted

Those remain unconfirmed. The general guardrail in section 25 is unchanged and still governs every capacity claim that has not been confirmed the way this one was.

---

## 12. Vehicle and asset types

### 12.1 Explicit or recruiting-supported vehicle categories

| Vehicle or asset category | Evidence | Status |
| --- | --- | --- |
| Fleet vehicles | Stakeholder confirmation, September 10, 2026 | Approved |
| Commercial vehicles | Stakeholder confirmation, September 10, 2026 | Approved |
| Construction vehicles | Stakeholder confirmation, September 10, 2026 | Approved |
| Passenger vehicles | Career qualification language | Recruiting evidence |

**Status:** Approved for fleet, commercial, and construction vehicles.

> Confirmed by stakeholder, September 10, 2026: Ultimate Fleet GPS serves fleet, commercial, and construction vehicles.

Passenger vehicles were not named in the confirmation and stay unverified. Do not widen the published vehicle list beyond fleet, commercial, and construction.

### 12.2 Potential categories requiring verification

- Light-duty fleet vehicles
- Medium-duty trucks
- Heavy-duty trucks
- Vans
- Utility vehicles
- Service vehicles
- Construction equipment
- Trailers
- Off-road equipment
- Municipal vehicles
- Public safety vehicles
- Rental vehicles
- Buses or transit vehicles

Do not publish an unsupported vehicle list merely because a device could technically be installed in that vehicle.

> Confirmed by stakeholder, September 19, 2026 (decision 0007, claims row 58): work vans, service trucks, utility vehicles, and heavy-duty trucks are approved as vehicle-context examples. They are examples of common project contexts, not additional categories, and must appear with: "Vehicle examples describe common project contexts. They do not mean every approved hardware category is installed in every vehicle type." Vans, utility vehicles, and heavy-duty trucks in the list above are covered by this confirmation only in that wording. The rest of the list still requires verification.

---

## 13. Industries

### 13.1 Supported by existing content

| Industry | Evidence | Status |
| --- | --- | --- |
| Commercial fleets | Fleet vehicle language | Broad recruiting evidence |
| Construction | Construction vehicle language | Recruiting evidence |

### 13.2 Proposed industries

- Transportation and logistics
- Utilities
- Field service
- Telecommunications
- Delivery and distribution
- Government and municipal fleets
- Public safety
- Service and maintenance fleets
- Heavy equipment

**Status:** Proposed.

Each industry requires confirmation of actual experience, desired business development, or operational capability before publication.

---

## 14. Technology and platform experience

The career page asks applicants about experience with the following systems or brands:

- Lytx or DriveCam
- SmartDrive
- Zonar
- LoJack
- Interlock
- PeopleNet
- Trimble
- Omnitracs, formerly Qualcomm
- Samsara
- Geotab
- CalAmp devices
- Verizon Connect
- TPMS equipment
- Windshield-mounted video recorders

### Status

Approved as installation experience. Stakeholder confirmed September 10, 2026. See section 9.1 for the confirmation text.

The confirmation establishes that technicians work with these platforms. It establishes nothing about partnership, authorization, or certification, and the usage restrictions below are unchanged by it.

### Usage restrictions

Do not state or imply that Ultimate Fleet GPS is:

- An official partner
- An authorized installer
- A certified installer
- A reseller
- A dealer
- An endorsed provider
- A preferred vendor
- A representative of the platform

Do not use a platform logo until permission and brand guidelines have been confirmed.

### Approved language

Approved framing, stakeholder confirmed September 10, 2026:

- “We work with the platforms fleets already run on, including [platforms]”
- “Installation experience with [platform] equipment”
- “Technicians familiar with [platform] hardware”
- “Support for deployments involving [platform] devices”

All four forms describe experience. None asserts a relationship with the platform vendor.

Platform names are approved for visible copy. **Do not use a platform name as a structured-data taxonomy value.** A platform name placed in `serviceType`, `brand`, `provider`, `makesOffer`, or a similar property reads as a formal classification claim and can imply a partnership that is not confirmed.

A platform name may appear inside a structured-data text value that mirrors visible copy, such as an `FAQPage` `acceptedAnswer` whose text must match the rendered answer word for word. The distinction is prose against taxonomy, not presence against absence.

The exact approved wording should be stored in `09-technology-platform-registry.md`.

---

## 15. Technical competencies described in recruiting content

The current career content seeks applicants with experience in:

- Vehicle installation practices
- Electrical systems
- Mechanical work
- Multimeter use
- 12-volt systems
- 24-volt systems
- Electrical connection identification
- Electrical diagnostics
- Troubleshooting failed electrical components
- Completing certain electrical repairs
- Interior panel disassembly
- Exterior panel disassembly
- Dashboard access
- Engine compartment access
- Stereo installation
- GPS and fleet equipment installation

**Status:** Recruiting evidence.

These qualifications describe desired technician experience. They do not prove that every technician holds every competency, that every capability is available in every market, or that Ultimate Fleet GPS provides general automotive electrical repair.

Do not market general automotive repair, stereo installation, panel repair, or broad electrical repair as customer services without confirmation.

---

## 16. Certifications and qualifications

### MECP

The current career page states that MECP is preferred.

**Status:** Existing recruiting preference. Approved September 19, 2026 for listing as preferred applicant experience on careers and job pages only (section 33.3).

This does not establish that:

- Ultimate Fleet GPS is MECP certified.
- Every technician is MECP certified.
- MECP certification is mandatory.
- The company has an official MECP partnership.

MECP may be listed only as preferred experience for applicants. It must not be presented as a required certification, a company credential, or a partnership.

### Other certifications

No other company or technician certifications are currently approved.

### 16.1 Client decision: credentials and proof are not published

**The client has chosen not to publish licenses, certifications, insurance details, reviews, or ratings on the website.**

**Status:** Approved. Client decision, not a pending data gap.

This is a settled decision rather than an unresolved question. Content, design, schema, and conversion work must build around the absence of these elements rather than treating them as forthcoming.

Scope of the decision:

- Licenses and license numbers
- Company and technician certifications, including MECP status
- Insurance carriers, coverage types, and coverage amounts
- Background-screening and drug-screening programs
- Customer reviews, review counts, star ratings, and aggregate rating displays

What this means in practice:

- Do not build page sections, trust bars, badge rows, or components that depend on credentials, insurance, reviews, or ratings.
- Do not emit `AggregateRating`, `Review`, or credential properties in structured data. There is no approved source for them, and a rating property without genuine underlying reviews is a structured-data violation.
- Do not add "pending" or "coming soon" placeholders for these elements.
- Do not treat the absence as a gap to fill during a later content pass.
- Do not imply the credentials exist through indirect phrasing such as "fully vetted", "credentialed technicians", or "covered and protected".

Build credibility instead through the evidence the client does approve: described installation process, documented technical competencies, equipment and vehicle experience, service reach, and clear operational explanation. See sections 15, 17, and 18.

This decision does not relax section 26. The prohibited wording list continues to apply in full, including "Fully insured", "Fully licensed", "Background-checked technicians nationwide", and "MECP-certified technicians nationwide".

Two applicant-facing statements are approved and do not conflict with this decision (section 33): MECP as preferred applicant experience, and a background check as an applicant requirement. Neither one is a claim about the company's technicians, and neither may be reworded into one.

Required verification remains open only for internal operational purposes, not for publication:

- Company certifications
- Technician certifications
- Platform certifications
- Safety training
- Electrical qualifications
- Background-check program
- Insurance requirements
- Customer-specific training

---

## 17. Installation process evidence

The career page suggests the following workflow:

1. A project or installation is assigned.
2. The technician receives installation guidelines and approved connection procedures.
3. The technician travels to the customer's location. Shop-location language from an expired job posting was removed on September 10, 2026. See section 5.3.
4. The vehicle is accessed and required panels are disassembled when necessary.
5. The equipment is installed.
6. The technician confirms that installed equipment is functional.
7. The vehicle and work area are kept clean.
8. Required installation data and photographs are submitted.
9. Equipment is tracked and accounted for.
10. The technician maintains communication with scheduling managers.

**Status:** Inferred from recruiting duties.

This workflow is a strong candidate for customer-facing content after the company confirms:

- Actual customer intake process
- Scheduling process
- Site-readiness requirements
- Equipment shipping and custody
- Installation standards
- Quality-control review
- Data submission platform
- Customer acceptance process
- Issue escalation
- Closeout documentation

### 17.1 Confirmed photo documentation

**Every customer is sent installation photo documentation automatically.**

**Status:** Approved. Stakeholder confirmed September 10, 2026.

> Photo documentation is sent to every customer automatically, without being requested.

Photographs are not only an internal technician submission duty under section 18. They are a delivered customer deliverable, and delivery is unprompted.

Approved for customer-facing copy, including a delivery promise. See section 25 for the approved wording.

This supersedes an earlier confirmation on the same date that read "customers receive or can request installation photo documentation." That wording left automatic delivery unestablished, and the copy written against it described documentation the customer could request. The stakeholder then confirmed the stronger claim directly. **Automatic delivery is the correct claim. On-request is not.** Do not reintroduce conditional or on-request phrasing.

Every other item in the section 17 list stays unconfirmed. Confirming the documentation deliverable does not confirm the intake process, scheduling, equipment custody, installation standards, quality-control review, acceptance, escalation, or closeout.

---

## 18. Quality and customer-service evidence

### Existing statements

The homepage says that Ultimate Fleet GPS strives to provide good customer service and meet customer needs.

The recruiting content expects technicians to:

- Communicate effectively
- Maintain positive customer relations
- Remain in timely contact with scheduling managers
- Keep paperwork organized
- Keep vehicles and workspaces clean
- Confirm equipment functionality
- Submit installation data and photographs
- Account for equipment

### Status

Existing website statement and recruiting evidence, except photograph submission, which was confirmed on September 10, 2026 as a customer-facing deliverable. See section 17.1.

### Unverified quality claims

Do not claim any of the following without evidence:

- Guaranteed installation quality
- Zero-defect installation
- First-time-right rate
- Specific response time
- Specific completion rate
- Formal service-level agreement
- Lifetime warranty
- Nationwide same-day service
- Certified quality-management system
- Uniform technician standards across every market

---

## 19. Careers and workforce facts

The current career page describes:

- Independent contractor work
- Mobile GPS, ELD, and AOBRD installation duties
- Travel between states
- Use of a personal vehicle
- A valid driver’s license
- A background check
- Smartphone use for installation data submission
- Independent work
- Customer communication
- Equipment accountability
- Functional testing
- Photograph submission
- Eight-hour and ten-hour shift possibilities
- Weekday and possible weekend schedules
- Significant travel
- On-the-road work

Section 33 records which of these facts are now approved for the current openings. Items not listed there, including shift lengths and weekend schedules, remain unapproved.

### Compensation

Starting compensation for the current Mobile GPS/ELD/AOBRD Installation Technician openings is `$1,600 per week`.

**Status:** Approved September 19, 2026 for the current openings (section 33).

Present it only as a starting rate for the current opening. It is not guaranteed weekly income, not a guaranteed minimum, and not a promise of hours or assignments. Do not describe it as salary, wages, or a range, and do not add bonuses, mileage, reimbursements, or benefits. The figure must be identical on the careers page, each opening page, external postings, and structured data.

Schedule and benefits still require company review before they appear in careers content. Employment and contractor language must be approved before publication.

---

## 20. Pricing, warranties, and guarantees

| Topic | Approved information | Status |
| --- | --- | --- |
| Installation pricing | None | Pending verification |
| Travel fees | None | Pending verification |
| Minimum project size | None | Pending verification |
| Diagnostic fees | None | Pending verification |
| Warranty | None | Pending verification |
| Workmanship guarantee | None | Pending verification |
| Response time | None | Pending verification |
| Quote validity | None | Pending verification |
| Cancellation policy | None | Pending verification |

Do not publish pricing, “free quote,” warranty, guarantee, or response-time language until approved.

---

## 21. Safety, compliance, and insurance

No company-wide safety program, regulatory compliance statement, insurance coverage, bonding status, or formal installation standard is currently approved.

Potential verification topics:

- General liability insurance
- Commercial auto insurance
- Workers’ compensation requirements
- Contractor insurance requirements
- Background screening
- Drug screening
- Customer-specific safety training
- Personal protective equipment
- Vehicle protection procedures
- Electrical connection standards
- Documentation retention
- Data privacy
- Camera and recording-system privacy

Do not state compliance with a law, regulation, standard, or customer policy without appropriate support.

Insurance details are not published on the website by client decision. See section 16.1. The topics above remain open for internal and contractual purposes only.

---

## 22. Customer proof

No customer logos, testimonials, case studies, project statistics, installation counts, fleet sizes, completion rates, geographic counts, or quantified outcomes are currently approved for publication.

Evidence to collect:

- Approved customer list
- Logo permissions
- Written testimonials
- Project summaries
- Vehicle counts
- Location counts
- Project duration
- Equipment categories
- Installation documentation examples
- Before-and-after operational results
- Original photographs
- Customer approval for publication

Do not infer a customer relationship from a platform name, technician experience, job requirement, or third-party mention.

Reviews and ratings are not published on the website by client decision. See section 16.1. Do not design page templates, trust sections, or structured data that depend on them.

---

## 23. Brand and communication facts

| Brand element | Current value | Status |
| --- | --- | --- |
| Approved logo | Not documented | Pending verification |
| Primary colors | Not documented | Pending verification |
| Secondary colors | Not documented | Pending verification |
| Typography | Not documented | Pending design decision |
| Tagline | None approved | Pending verification |
| Brand voice | Professional, technical, reliable, direct | Proposed |
| Photography | Commercial vehicles and real installation work | Proposed |

The design system must not treat colors, fonts, taglines, or visual motifs as approved until the company or project owner confirms them.

---

## 24. Search and entity facts

| Item | Current state | Status |
| --- | --- | --- |
| Google Business Profile | Unknown | Pending verification |
| Bing Places profile | Unknown | Pending verification |
| Apple Business Connect listing | Unknown | Pending verification |
| Google Search Console | Unknown | Pending setup or verification |
| Bing Webmaster Tools | Unknown | Pending setup or verification |
| Analytics platform | Unknown | Pending decision |
| Tag manager | Unknown | Pending decision |
| CRM | Unknown | Pending decision |
| Call tracking | Unknown | Pending decision |
| Social profiles | Unknown | Pending verification |
| Industry directory profiles | External recruiting listing observed | Verify ownership and relevance |

Do not state that a profile has been claimed, verified, optimized, or connected until confirmed.

---

## 25. Approved factual wording

The following wording closely reflects current website statements and may be used in discovery drafts. Final publication still requires company review.

### Company description

> Ultimate Fleet GPS provides mobile electronic equipment installation services for fleet and construction vehicles.

### GPS service

> Ultimate Fleet GPS provides installation and service for GPS equipment.

### Mobile service

> Mobile technicians travel to customer locations based on project requirements and technician availability.

### Technician experience

> Installation work requires knowledge of vehicle electrical systems, mechanical access, approved connection procedures, equipment testing, and installation documentation.

### Years in business

Client confirmed the founding year as 2011 on 2026-09-18, superseding the earlier "15 years" duration phrasing (which is no longer used, since a duration claim would require yearly upkeep to stay accurate, while a founding year does not). Approved for use in copy.

> In business since 2011

Acceptable variations include "Ultimate Fleet GPS has been in business since 2011" and "serving fleets since 2011". Use the specific year rather than a vague equivalent. "Decades of experience" remains prohibited under section 26 as an unsupported superlative.

Do not also state a duration figure (e.g. "15 years") alongside the founding year without recomputing it against the current date - prefer the founding-year form alone.

### Equipment and service scope

Stakeholder confirmed September 10, 2026. Approved for use in copy. See section 9.1.

> Ultimate Fleet GPS installs GPS tracking, ELD, AOBRD, TPMS, and fleet management equipment on fleet, commercial, and construction vehicles.

### Vehicle scope

Stakeholder confirmed September 10, 2026. Approved for use in copy. See section 12.1.

> fleet, commercial, and construction vehicles

Do not extend the list. Passenger vehicles are not confirmed.

### Platform experience

Stakeholder confirmed September 10, 2026. Approved for visible copy. Never as a structured-data taxonomy value. See section 14.

> We work with the platforms fleets already run on, including Samsara, Geotab, Verizon Connect, and others our technicians already know.

### Project capacity range

Stakeholder confirmed September 10, 2026. Approved for use in copy. See section 11.1.

> one vehicle or an entire fleet

Use it to describe project size only. Do not extend it into turnaround time, simultaneous multi-market volume, or a guarantee that a given project will be accepted.

### Photo documentation

Stakeholder confirmed September 10, 2026. Approved for use in copy. See section 17.1.

> Every installation is photo documented, and you'll receive that documentation automatically.

The confirmation establishes automatic, unprompted delivery to every customer, so a delivery promise is accurate. Do not weaken it into on-request phrasing, and do not extend it into a delivery timeframe, a file format, a delivery channel, or a retention period. None of those was confirmed.

### Service area

Client confirmed nationwide service. Approved for use in copy.

> Nationwide mobile installation service, delivered at the customer's location

### Mobile-only model

Client confirmed. Approved for use in copy.

> Technicians travel to the customer's location. There is no walk-in facility.

### Business hours

Client confirmed at Monday through Friday, 8:00 AM to 6:00 PM. Approved for display on contact surfaces once the time zone is confirmed.

### Required caveat

Nationwide service reach is approved. Do not convert it into specific state availability, universal city coverage, immediate or same-day availability, guaranteed technician presence in a named market, or guaranteed national capacity.

Project-size language is part of this caveat. Phrasing such as “one vehicle or an entire fleet” describes capacity, not reach, and the two must never be derived from each other.

**The rule above is unchanged and still governs every unconfirmed capacity claim.** One narrow exception is documented: the project capacity range in section 11.1 was confirmed directly by the stakeholder on September 10, 2026 and is approved on its own evidence. It is not an inference from nationwide reach, and it does not license any further capacity claim. Anything beyond a single vehicle through a full fleet still requires its own confirmation.

---

## 26. Prohibited wording until supported

**"Ultimate Fleet GPS" as the public name.** The public name never carries "LLC". The only exception is a legally required disclosure identified and approved as such (section 4.2). See section 4.2.

Do not use the following claims without documentation and approval:

- Nation’s leading installer
- Largest installation network
- Number one fleet installer
- Certified nationwide installer
- Authorized installer for a named platform
- Official partner of a named platform
- Available in every city or state
- Same-day nationwide installation
- Guaranteed installation
- Lifetime warranty
- Zero downtime
- Any fleet size, anywhere
- Fully insured
- Fully licensed
- Background-checked technicians nationwide
- MECP-certified technicians nationwide
- Trusted by a named customer
- Thousands or millions of installations
- Decades of experience
- Best-in-class service
- Industry-leading response time
- Complete regulatory compliance

Generic superlatives should also be avoided unless they communicate a specific, supportable customer benefit.

---

## 27. Content rules derived from business truth

All website content must:

- Use the canonical business name and contact information.
- Identify the verification status of new claims during drafting.
- Separate services from technician qualifications.
- Separate platform experience from partnerships.
- Separate service areas from physical locations.
- Separate current capabilities from proposed expansion.
- Separate customer content from recruiting content.
- Avoid invented statistics, customers, results, warranties, and credentials.
- Use precise language about availability and project scope.
- Route unresolved facts back to this document.

---

## 28. Required business discovery questions

### Company identity

1. What is the exact legal business name?
2. What public-facing name should the website use?
3. When was the company founded?
4. Who founded and currently leads the company?
5. What company history may be published?

### Contact and location

6. Which phone number is correct?
7. Is the other number valid or a typo?
8. Which email addresses should be published?
9. What is the legal address?
10. What is the mailing address?
11. Does the company receive customers at a physical location?
12. What are the business hours and time zone?

### Services

13. Which installation services are currently offered?
14. What does GPS equipment “service” include?
15. Does the company troubleshoot existing installations?
16. Does it remove, replace, or reinstall devices?
17. Does it perform general vehicle electrical repairs?
18. Does it sell equipment or only install supplied equipment?
19. Which services should be prioritized for growth?

### Equipment and vehicles

20. Which equipment categories are actively supported?
21. Which platforms are currently supported?
22. Which relationships are official partnerships?
23. Which logos may be used?
24. Which vehicle types are supported?
25. Are trailers, heavy equipment, or off-road assets supported?
26. Are both 12-volt and 24-volt systems routinely supported?

### Customers and industries

27. Who is the primary customer?
28. Does the company contract directly with fleets?
29. Does it subcontract for technology providers or vendors?
30. Which industries have current or documented experience?
31. Which customer names, logos, and testimonials may be published?

### Coverage and capacity

32. Which states have active technician coverage?
33. Which markets depend on technician travel?
34. Is there a minimum vehicle or project count?
35. What project sizes can be supported?
36. What is the typical scheduling lead time?
37. Can the company coordinate simultaneous multi-state deployments?
38. Which services are available nationwide?

### Process and proof

39. How does a customer request and approve a project?
40. Who schedules the technicians?
41. Who supplies and ships equipment?
42. What installation standards are used?
43. How is functionality verified?
44. What photographs or data are submitted?
45. What does the customer receive at closeout?
46. How are failed devices or installation issues handled?
47. What performance statistics may be published?

### Risk and compliance

48. What insurance coverage may be stated?
49. What technician screening is required?
50. What certifications and safety training are current?
51. What warranties or guarantees apply?
52. Are there customer-specific confidentiality restrictions?

### Careers

53. Is the current independent contractor model accurate?
54. Is the displayed compensation current? Answered September 19, 2026 for the current openings: see section 33.
55. What technician qualifications are mandatory?
56. What travel expectations are current? Answered September 19, 2026 for the current openings: see section 33.
57. What information should the application collect?

---

## 29. Verification log

Use this table to record approved updates.

| Date | Field or claim | Previous status | Approved value | Source | Approved by | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-09-09 | Initial document | Not created | Discovery draft established | Existing website review | Project team | Business interview required |
| 2026-09-10 | Telephone number | Conflicting | 623-388-7352 | Stakeholder confirmation | Client | 623-338-7352 rejected as a typographical error. See `decisions/0001-canonical-business-telephone-number.md` |
| 2026-09-10 | Address | Pending verification | No published address; mobile-only model | Client confirmation | Client | Not eligible for a storefront-style local profile. Goodyear directory association confirmed irrelevant. Superseded on 2026-09-19: see the corporate office row below and section 33.4 |
| 2026-09-10 | Business hours | Unknown | Monday to Friday, 8:00 AM to 6:00 PM | Client confirmation | Client | Time zone and holiday exceptions still unconfirmed |
| 2026-09-10 | Service area | Inferred | Nationwide | Client confirmation | Client | Confirms reach, not capacity. Section 26 still applies |
| 2026-09-10 | Operating entity | Existing website statement | SB Mobile Installations, LLC is the sole operating entity | Client confirmation | Client | No Doral Transport LLC relationship exists. Other project documents need follow-up |
| 2026-09-10 | Years in business | Pending verification | 15 years | Client confirmation | Client | Approved for copy. Founding date still unconfirmed |
| 2026-09-10 | Licenses, certifications, insurance, reviews, ratings | Pending verification | Not published, by client decision | Client decision | Client | Build content and schema around their absence. Section 26 unchanged |
| 2026-09-10 | Worker classification | Existing recruiting statement | Independent contractors, not employees | Direct stakeholder confirmation, quoted verbatim in section 7.2 | Stakeholder | Classification only. Contract terms, compensation, schedule, and benefits remain unconfirmed. Supersedes an earlier entry that was reverted because it recorded approval that had not been given |
| 2026-09-10 | Equipment and service scope | Recruiting evidence | GPS tracking, ELD, AOBRD, TPMS, and fleet management equipment, plus dashcam and windshield-mounted video recorder installation | Stakeholder confirmation of a company-authored Glassdoor posting's accuracy to current operations, quoted in section 9.1 | Stakeholder | Supersedes the GPS-only public scope. EOBR devices and generic "mobile electronics" were not named and stay recruiting evidence |
| 2026-09-10 | Vehicle scope | Recruiting evidence | Fleet, commercial, and construction vehicles | Stakeholder confirmation, quoted in section 12.1 | Stakeholder | Passenger vehicles not named, status unchanged |
| 2026-09-10 | Technology and platform experience | Recruiting evidence | Technicians work with the platforms listed in section 14 | Stakeholder confirmation, quoted in section 9.1 | Stakeholder | Experience only. Partnership, authorization, certification, and reseller restrictions in section 14 are unchanged. Approved for visible copy. Never a structured-data taxonomy value |
| 2026-09-18 | Founding date / years in business | Approved as "15 years" (2026-09-10), founding date pending | Founding year 2011; publish as "in business since 2011," not as a "15 years" duration figure | Client confirmation | Client | Supersedes the 2026-09-10 "15 years" entry above. See section 25 for updated approved wording |
| 2026-09-10 | Shop locations | Recruiting evidence | No physical office or shop exists | Stakeholder confirmation that the expired Glassdoor "possibility of shop locations" language was outdated and inaccurate | Stakeholder | Retired. Sections 7.1 and 17 corrected. Recorded in section 5.3 so it does not resurface as an unresolved conflict. Narrowed on 2026-09-19: shop locations may be mentioned only for a specific assignment |
| 2026-09-10 | Compensation | Existing recruiting statement | No change | Not asked, not confirmed | Not approved | Explicitly excluded from the scope confirmation above. The $1,600 per week figure from the expired posting must not be treated as current. Section 19 unchanged at that date. Superseded on 2026-09-19: see section 33 |
| 2026-09-10 | Project capacity range | Pending verification | Projects from a single vehicle to an entire fleet | Direct stakeholder confirmation, quoted verbatim in section 11.1 | Stakeholder | Capacity range only, and a distinct fact from the nationwide reach in section 8.2. Do not conflate the two or derive either from the other. Simultaneous multi-market volume, turnaround time, and project acceptance remain unconfirmed. The general guardrail in section 25 is unchanged |
| 2026-09-10 | Photo documentation | Pending verification | Customers receive or can request installation photo documentation | Direct stakeholder confirmation | Stakeholder | Superseded the same day by the row below. Recorded so the narrowing is traceable rather than silently overwritten |
| 2026-09-10 | Public company name | Proposed | SB Mobile Installations, with "LLC" never published | Direct stakeholder instruction received outside the build thread and relayed verbatim, quoted in section 4.2 | Stakeholder | Not inferred or proposed by the build. See the provenance note in section 4.2. Hard project-wide rule. Removed from the footer, mobile navigation, privacy policy, terms of use, Open Graph siteName, and the Organization schema name. The registered entity is unchanged and stays internal |
| 2026-09-10 | Brand and action color | Design-system default | Red #B40000 replaces blue #1468FF. Error re-picked to #9D174D. Accent yellow removed | Direct stakeholder confirmation, recorded in sections 4.1.1 to 4.1.3 of `21-design-system.md` | Stakeholder | Source is the brand kit supplied the same day. The error token was changed as a forced consequence: the previous #B42318 sat 3.3 dE2000 from the new brand red. Logo and headline typography remain unresolved |
| 2026-09-10 | Photo documentation | Confirmed as on-request, above | Photo documentation is sent to every customer automatically, without being requested | Direct stakeholder confirmation, quoted verbatim in section 17.1 | Stakeholder | Supersedes the on-request wording. Automatic delivery is the correct claim and a delivery promise is accurate in copy. Delivery timeframe, format, channel, and retention remain unconfirmed. Every other section 17 process item stays unconfirmed |
| 2026-09-19 | Active openings | No active openings recorded | Several current Mobile GPS/ELD/AOBRD Installation Technician openings exist. No closing date | Project owner instruction, September 19, 2026 working session | Stakeholder (relayed by the project owner) | Recorded in section 33.1. No job records, opening pages, application landing page, or application form exist yet |
| 2026-09-19 | Nationwide applications | Recruiting reach unconfirmed | Applications are accepted nationwide | Project owner instruction, September 19, 2026 | Stakeholder (relayed by the project owner) | Distinct from nationwide installation service reach (section 8.2). Not a claim that every opening is in every market |
| 2026-09-19 | Starting compensation | Not approved | `$1,600 per week`, a starting rate for the current openings | Project owner instruction, September 19, 2026 | Stakeholder (relayed by the project owner) | Not guaranteed weekly income. Supersedes the 2026-09-10 compensation row |
| 2026-09-19 | Travel and applicant requirements | Unconfirmed | About 75% travel, state-to-state travel, own vehicle, tools, and travel resources, valid driver's license, smartphone, background check | Project owner instruction, September 19, 2026 | Stakeholder (relayed by the project owner) | Section 33.2 sets the wording limits |
| 2026-09-19 | Experience and training | Unconfirmed | No prior installation experience required. Training will be provided | Project owner instruction, September 19, 2026 | Stakeholder (relayed by the project owner) | No claim of paid training, immediate start, or guaranteed hire |
| 2026-09-19 | Preferred experience | MECP and platforms restricted | MECP and the listed platforms may be named as preferred applicant experience | Project owner instruction, September 19, 2026 | Stakeholder (relayed by the project owner) | Not a company credential, partnership, or requirement. Never a schema taxonomy value |
| 2026-09-19 | Corporate office | No published address | 8907 N 175th Ave, Waddell, AZ 85355, approved for the footer, contact page, careers pages, legal pages, `Organization` schema, and eligible `JobPosting` schema | Project owner instruction, September 19, 2026 | Stakeholder (relayed by the project owner) | Not a walk-in facility or a local service guarantee. Supersedes the 2026-09-10 address row. Shop locations only for specific assignments |
| 2026-09-19 | Entity name in legal disclosures | "LLC" never published | Public name stays SB Mobile Installations. The registered entity may appear where legally required | Project owner instruction, September 19, 2026 | Stakeholder (relayed by the project owner) | Narrows the 2026-09-10 public name row. See section 4.2 |
| 2026-09-19 | Active careers architecture | Not implemented | Job record, opening page, jobs index, application page and form, and confirmation page exist. `JobPosting` only on the opening page | Implementation of the owner's 2026-09-19 update plan | Project owner | Endpoint acceptance of application submissions is not verified. See section 33.7 and `decisions/0006` |
| 2026-10-07 | Company name, telephone, corporate office | SB Mobile Installations, 623-388-7352, 8907 N 175th Ave, Waddell, AZ 85355 | Ultimate Fleet GPS, (928) 393-8049, 4539 N. 22nd St. #6225, Phoenix, AZ 85016, ultimatefleetgps.net | Project owner instruction in the build thread | Project owner | Stakeholder approval given in the build thread on 2026-10-07 and recorded here. Legal entity suffix unconfirmed. Production domain changed to ultimatefleetgps.net (also approved 2026-10-07). Schema logo approved 2026-10-07: ultimate-fleet-gps-primary-logo.svg. Older sections of this document and other docs still carry the previous values as history |

---

## 30. Update protocol

When a fact is verified:

1. Record the authoritative source.
2. Update the relevant table in this document.
3. Change the status to Approved.
4. Define any limits on public wording.
5. Update the verification log.
6. Update affected canonical registries.
7. Identify pages or structured data that require changes.
8. Record material strategic changes in `27-decisions-change-log.md`.

Do not delete conflicting historical information without recording how it was resolved.

---

## 31. Current approval summary

At this stage, the project has enough evidence to begin architecture, research, design exploration, and draft content. It does not yet have enough verified business information to publish the complete proposed service, industry, technology, partnership, location, coverage, or trust framework.

### Confirmed as of September 10, 2026

- Canonical telephone number
- No published address, mobile-only operating model (superseded September 19, 2026; see below)
- Business hours, Monday to Friday, 8:00 AM to 6:00 PM
- Nationwide service reach
- Ultimate Fleet GPS as the sole operating entity
- Worker classification: technicians are independent contractors, not employees
- Client decision not to publish licenses, certifications, insurance, reviews, or ratings

### Confirmed as of September 18, 2026

- Founding year 2011; publish as "in business since 2011" (supersedes the "15 years" duration figure above)
- Equipment and service scope: GPS tracking, ELD, AOBRD, TPMS, and fleet management equipment, plus dashcam and windshield-mounted video recorder installation
- Vehicle scope: fleet, commercial, and construction vehicles
- Technology and platform experience, as experience only, with the section 14 restrictions intact
- The expired posting's shop-location language is retired as a general statement (narrowed September 19, 2026: shops may be mentioned only for specific assignments)
- Project capacity range: a single vehicle through an entire fleet, a fact distinct from nationwide reach
- Photo documentation sent to every customer automatically, without being requested
- Public company name: Ultimate Fleet GPS, with "LLC" never part of the public name (limited legal-disclosure exception recorded September 19, 2026)

### Confirmed as of September 19, 2026

- Several current Mobile GPS/ELD/AOBRD Installation Technician openings, accepting applications nationwide, with no closing date
- Independent contractor role, not employment
- Starting compensation of `$1,600 per week`, presented as a starting rate and never as guaranteed income
- Approximately 75% travel and state-to-state travel required
- Applicant requirements: own personal vehicle, tools, and travel resources; valid driver's license; smartphone for installation data submission and photos; background check
- No prior installation experience required; training will be provided
- MECP and the listed platforms as preferred applicant experience only
- Corporate office at 4539 N. 22nd St. #6225, Phoenix, AZ 85016, publishable on the approved surfaces, not a walk-in facility
- The homepage stays commercial-led; the Careers pages are the primary recruitment funnel

### Still required before launch

- Email addresses for every contact pathway
- Which confirmed services carry nationwide reach, and the service registry built from section 9.1
- Customer types and industries
- Founding date, owner, and leadership for entity and About content
- Response expectations, travel terms, turnaround time, and simultaneous multi-market deployment volume, none of which the confirmed capacity range establishes
- The rest of the installation process and quality evidence in section 17, photo documentation excepted
- Contract terms, schedule, benefits, and expense or mileage terms. Starting compensation for the current openings is approved (section 33); classification and that figure do not establish the rest
- Confirmation that the forms endpoint accepts application submissions. The opening record, application page, and form exist (section 33.7), but their submission path is not verified
- Time zone and holiday exceptions for published hours

### Resolved: the two homepage About claims

Both claims flagged during the September 10, 2026 content update were raised with the stakeholder and confirmed on the same date. Neither blocks publication.

| Claim | Outcome | Record |
| --- | --- | --- |
| Project capacity, “one vehicle or an entire fleet” | Confirmed accurate. Retained in the copy as drafted | Section 11.1 |
| Photo documentation | Confirmed accurate as a customer-facing deliverable, then confirmed again as automatic and unprompted. The copy states a delivery promise | Section 17.1 |

As of September 10, 2026 the homepage carried no unverified claim. Its "no physical office" statements, which conflicted with the September 19, 2026 corporate office approval, were replaced on September 19, 2026 (section 33.4). The launch blockers recorded in `qa/homepage-verification-record.md` were the then-missing `/careers/` and `/services/` routes and the unconfirmed production domain. Those routes now exist in the repository. The production domain status is not re-verified here.

The immediate priority is a structured business discovery interview covering the items above. Trust and proof content must be planned around the client's decision in section 16.1 rather than waiting on credentials that will not be published.

## 32. Approved override, September 18, 2026: commercial-first priority

Recorded here per the redesign plan's documentation-debt requirement. Approved during Sprint 1 planning, recorded here per the plan's documentation-debt requirement, dated 2026-09-18.

Sections 19 (`docs/19-claude-project-instructions.md`) and 07 (`docs/07-site-architecture.md`) previously made technician recruiting the primary homepage journey and commercial fleet-manager lead generation secondary. That priority is now reversed:

- **Commercial / fleet-manager lead generation is the primary homepage and site journey.** The hero primary CTA, the first content sections after the direct answer, and the flipped `ContentSection id="commercial"` CTA emphasis all reflect this.
- **Recruiting remains a real, visually prominent secondary pathway**, not buried: a full role page (`/careers/mobile-installation-technician/`) and a dedicated sign-up flow (`InstallerNetworkForm`) exist, and a distinct `RecruitingBanner` component keeps the pathway visible on the homepage.
- Journey separation (section 4 of CLAUDE.md), the "Apply" vs. "Join the Installer Network" naming rule, and every other confirmed fact in this document are unchanged by this override. Only page-level and navigation-level priority ordering changes.

This override governs `docs/07-site-architecture.md` and `docs/20-component-inventory.md` going forward, both updated in the same documentation pass.

## 33. Approved update, September 19, 2026: active installer recruitment and corporate office

**Provenance.** The project owner stated these facts as approved in the September 19, 2026 working session and instructed that they be recorded. This section is that record. It supersedes the earlier statements listed in section 33.8. A separate decision-log entry has not been created.

### 33.1 Current openings

| Fact | Approved value |
| --- | --- |
| Openings | Several current Mobile GPS/ELD/AOBRD Installation Technician openings exist |
| Applications | Accepted nationwide |
| Classification | Independent contractors, not employees (section 7.2) |
| Closing date | None. The current opening has no closing date |
| Starting compensation | `$1,600 per week`, a starting rate for the current opening |

Limits:

- Do not publish a number of openings, job IDs, or per-opening details that are not in a verified job record. "Several" is the approved quantity word.
- Do not describe the compensation as guaranteed weekly income, a guaranteed minimum, or a promise of hours, assignments, or volume. Do not call it salary or wages.
- Do not use urgency or scarcity language such as "hiring now", "limited spots", or "apply today".
- Nationwide acceptance of applications is not a claim that every opening is in every market. It is a fact separate from nationwide installation service reach (section 8.2). Neither may be derived from the other.
- Do not present nationwide openings as available in a named market unless that opening's record says so.

### 33.2 Applicant requirements

| Requirement | Approved wording basis |
| --- | --- |
| Travel | Approximately 75% travel is required |
| Interstate travel | State-to-state travel is required |
| Vehicle, tools, and travel | Contractors provide their own personal vehicle, tools, and travel resources |
| Driver's license | A valid driver's license is required |
| Smartphone | A smartphone is required for installation data submission and installation photos |
| Background check | A background check is required |
| Experience | No prior installation experience is required |
| Training | Training will be provided |

Limits:

- Use "approximately 75%" for travel. Do not convert it into a guarantee of how much work or travel a contractor will receive.
- Training: state only that training will be provided. Do not add a format, length, cost, or outcome. Do not say "paid training", "immediate start", or "guaranteed hire" (CLAUDE.md section 4).
- "No prior experience required" is not a promise of acceptance. Acceptance is never automatic, and no automated form makes an employment or contracting decision.
- The background check is an applicant requirement. It does not authorize any claim that technicians are background-checked (section 26 still prohibits that wording).
- Do not add pay, expense, mileage, lodging, benefit, schedule, or shift statements that are not in this section.

### 33.3 Preferred experience

- MECP may be listed as preferred experience. It is not a required certification, and it is not a company or technician credential. The restrictions in section 16 otherwise stay in force.
- The platforms listed in sections 9.1 and 14 may be publicly named as preferred applicant experience on careers and job pages. This is experience wording only. It implies no partnership, authorization, endorsement, certification, reseller status, or platform requirement. No platform logos. A platform name is never a structured-data taxonomy value (section 14).

### 33.4 Corporate office

The corporate office is 4539 N. 22nd St. #6225, Phoenix, AZ 85016. See section 5.3 for the full rules.

- Approved surfaces: the website footer, the contact page, careers pages, legal pages, `Organization` schema, and eligible `JobPosting` schema.
- It is not a walk-in installation facility and not a guarantee of local service availability.
- Possible shop locations may be mentioned only in the context of a specific assignment.
- The homepage is not an approved surface for the address, so the address is not published there. On September 19, 2026 the homepage wording that said the company has no physical office was replaced, in the About paragraph and in the FAQ (now "Do you have a walk-in installation location?"), with statements that there is no walk-in installation facility. The same update changed the homepage recruiting wording to say that current openings exist, without a pay figure. The banner's primary button is now "Apply for the Current Opening" to `/careers/apply/`, and the Installer Network is a separate secondary link, so the word "apply" never sends a visitor to a registration form. The homepage FAQ also feeds the `FAQPage` structured data. The address now appears on every approved surface except JobPosting schema, always read from `business.address` in `business.ts` and never typed into a page: the footer, the contact page, the Careers hub, the Installer Network role page, and the legal pages, as plain text labelled "Corporate office" (through the shared `CorporateOffice` component, or through the legal contact notice), and the `Organization` structured data as a `PostalAddress`. The `Organization` node carries no `areaServed`. The contact notices in the privacy policy and terms of use identify the registered entity, Ultimate Fleet GPS, as the one place the entity name appears on the public site, subject to attorney review (section 4.2); the accessibility statement uses the public name. The `JobPosting` schema on the opening page carries the address through its `hiringOrganization`, which is the shared `Organization` node, and does not use it as a job location. Comment-only notes that said no address is published were updated to match. Statements that there is no walk-in facility (for example in `process-content.ts`) remain accurate.

### 33.5 Public name and entity

The public-facing name is Ultimate Fleet GPS. Use Ultimate Fleet GPS only where the legal entity is required, such as internal documentation or legally appropriate employment and contractor disclosures, and identify each such use as legally required (section 4.2).

### 33.6 Journeys and site roles

Four journeys stay separate in routes, forms, data, analytics events, and confirmation language:

- Active job applications, which use "Apply" and belong only to a genuine active opening. The application page is `/careers/apply/`, and its form (`ApplicationForm`) is separate from every other form.
- Installer-network registration, which is a registration for future opportunities offered alongside the active openings. It is not an application and guarantees no contact, interview, employment, contract, assignment, schedule, work volume, or pay.
- Commercial inquiries.
- Referral inquiries.

The homepage remains commercial-led (section 32). The Careers pages are the primary recruitment funnel. Never route a candidate for an active opening into a commercial or network form, and never count a network registration as an application.

### 33.7 Structured data and build status

- `JobPosting` may be used only on an individual active-opening page, after the canonical page exists, the application path works, the opening is publicly accessible, the required fields are verified, and the page is not blocked or noindexed. See `13-schema-markup-plan.md` section 14 and `30-job-content-schema-specification.md` section 16.
- The general `/careers/` page does not receive generic `JobPosting` schema because active openings exist.
- Each active opening requires its own stable job record and canonical URL.
- As of September 19, 2026 these exist in the repository: the job record (`src/data/jobs/mobile-gps-eld-aobrd-installation-technician.ts`, reading `business.recruitment`), the opening page `/careers/mobile-gps-eld-aobrd-installation-technician/` (the only page that emits `JobPosting`), the jobs index `/careers/jobs/`, the application page `/careers/apply/` with the dedicated `ApplicationForm`, and the noindex confirmation `/careers/application-received/`. `/careers/` is the recruitment landing page. The Installer Network stays a separate registration at `/careers/mobile-installation-technician/`.
- Submission depends on the trusted forms endpoint (`NEXT_PUBLIC_FORMS_ENDPOINT`). As of September 19, 2026 it is NOT configured in the deployed Cloudflare Pages environment (checked against the deployed JavaScript), so every form there shows its fallback. The confirmation page claims receipt only after a confirmed submission in the same browser session. The release gate is in `docs/26-launch-checklist.md`. Until it is confirmed to accept `job_application` payloads, the form shows an error and a click-to-call fallback and never a false success. `JobPosting` is emitted with no `validThrough`, no `jobLocation`, and a `datePosted` of 2026-07-01, the opening date the owner gave as 07/01/2026 and read as US format.

### 33.8 Statements superseded by this section

- "No published address" and "no address to publish" (sections 4, 5.3, 29, and 31, dated September 10, 2026): superseded by the Phoenix corporate office.
- "No physical office or shop exists" (sections 5.3, 29, and 31): narrowed. Shops may be mentioned only for specific assignments.
- "Compensation was not asked about and was not confirmed" and the September 10, 2026 instruction not to treat the `$1,600 per week` figure as current: superseded for the current openings.
- "Do not carry compensation, schedule, travel percentage, classification, or benefits into the new careers content" (section 19): superseded for compensation and travel. Schedule and benefits remain unapproved.
- "LLC is never published" as a rule with no approval path (section 4.2): narrowed to a limited legal-disclosure exception.
- MECP treated only as an existing recruiting preference (section 16): now approved as preferred applicant experience.

### 33.9 Still unconfirmed

- The number of openings, and any job ID, title variation, or market for each opening
- Schedule, shift length, weekend work, and benefits
- Expense, mileage, lodging, and equipment reimbursement
- Contract terms, contract length, and termination conditions
- The screening, onboarding, and assignment process
- Email addresses for the careers pathway
- Whether a Google Business Profile, Bing Places, or Apple Business Connect profile will be pursued
- How `jobLocation` and `applicantLocationRequirements` represent nationwide field work in `JobPosting` schema. `jobLocation` is omitted because no work location is approved, and Google may report it as missing
- Confirmation that the opening date the owner gave as 07/01/2026 means July 1, 2026 (US format) and not 7 January 2026
- Whether the trusted forms endpoint accepts and safely stores `job_application` payloads, and its retention and processor details
- Legal review of the background-check consent wording, the privacy policy's description of what the forms collect, the terms of use, and the use of the registered entity name in the legal notices

The restrictions against guaranteed assignments, guaranteed weekly income, automatic acceptance, unsupported benefits, unsupported partnerships or certifications, and platform names used as schema taxonomy values are unchanged.
