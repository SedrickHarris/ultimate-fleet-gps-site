# Ultimate Fleet GPS Website Rebuild

## Project Overview

**Document:** 00-project-overview.md  
**Project:** Ultimate Fleet GPS Website Rebuild  
**Business:** Ultimate Fleet GPS  
**Repository:** https://github.com/SedrickHarris/ultimate-fleet-gps-site.git  
**Status:** Foundational draft  
**Version:** 0.2  
**Last updated:** September 10, 2026

---

## 1. Document purpose

This document defines the purpose, scope, strategy, operating assumptions, and intended outcomes of the Ultimate Fleet GPS website rebuild. It provides the high-level direction for research, content development, information architecture, design, implementation, deployment, search optimization, and conversion measurement.

This overview is a strategic foundation, not the final authority for every business fact. Verified company information will be maintained in `01-business-source-of-truth.md`. Approved services, industries, audiences, technologies, locations, routes, and page states will be maintained in their respective canonical registries.

When this document conflicts with a verified business fact or a later approved decision, the verified source or approved decision takes precedence.

---

## 2. Executive summary

Ultimate Fleet GPS provides mobile electronic equipment installation services for commercial vehicles, fleet vehicles, construction vehicles, and related mobile assets. The existing website presents the company primarily as a provider of GPS equipment installation and service with mobile technicians available throughout the United States.

The available company content also indicates technician experience with electronic logging devices, fleet-management equipment, vehicle camera systems, tire-pressure monitoring equipment, and related 12-volt and 24-volt vehicle electronics. That broader capability is not currently organized or explained effectively for prospective customers.

The new website will reposition Ultimate Fleet GPS as a credible commercial fleet-technology installation and deployment partner. It will explain what the company installs, who it serves, how projects are coordinated, how installation quality is verified, and how prospective customers can request a quote or discuss a deployment.

The website will support national commercial search intent while also creating a controlled framework for verified state, metro, industry, audience, technology, and matrix content. Page creation, production deployment, public availability, and search indexation will remain separate decisions. The project will not automatically publish every possible service, industry, technology, or geographic combination.

The website will be built with Next.js App Router, TypeScript, and Tailwind CSS. Claude will support research and content development. Claude Code and Visual Studio Code will support implementation. GitHub will provide version control, and Cloudflare Pages will provide hosting.

---

## 3. Business summary

### 3.1 Working business category

Ultimate Fleet GPS operates within the following overlapping business categories:

- Mobile fleet-technology installation
- Commercial vehicle electronics installation
- GPS tracking equipment installation and service
- Electronic logging device installation
- Fleet telematics installation
- Fleet camera and video equipment installation
- Fleet-management hardware installation
- Mobile field-service deployment
- 12-volt and 24-volt vehicle electrical installation

These categories are working classifications. Each service must be verified before it is presented as an approved customer-facing offer.

### 3.2 Working business model

The available content suggests that Ultimate Fleet GPS uses mobile technicians who travel to customer locations, fleet yards, construction sites, or approved shop locations to complete equipment installations.

The company may serve customers directly or may operate as an installation partner for telematics providers, equipment manufacturers, resellers, fleet-management companies, and project coordinators. These potential relationships must be confirmed before final positioning or publication.

### 3.3 Existing stated value

The existing website emphasizes:

- Mobile installation and service of GPS equipment
- Technicians located throughout the United States
- On-site travel to meet customer needs
- Electrical-system knowledge
- Mechanical insight
- Customer service

The existing recruiting content further suggests an operational process involving installation guidelines, approved connection procedures, equipment accountability, functional testing, installation photographs, data submission, communication with scheduling managers, and clean vehicle and workspace standards.

### 3.4 Working market position

The proposed market position is:

> A nationwide mobile installation partner for GPS, ELD, telematics, fleet camera, fleet-management, and connected vehicle equipment.

This position must be refined as services, national coverage, project capacity, customer types, and proof are verified.

---

## 4. Existing website baseline

The existing website is small and contains three primary routes:

| Existing page | Existing route | Primary function |
| --- | --- | --- |
| Homepage | `/` | Basic company and GPS installation introduction |
| Contact Us | `/contact-us` | General inquiry form and telephone information |
| Career Opportunities | `/career-opportunities` | Independent mobile technician recruiting |

The current site does not provide dedicated customer-facing pages for individual services, industries, audiences, equipment categories, platforms, service areas, deployment processes, case studies, resources, FAQs, quality standards, or project intake.

Much of the most useful capability information is located on the career page rather than on customer-facing service pages.

### Resolved data inconsistency

The current contact content displays two telephone numbers. The stakeholder confirmed the canonical number on September 10, 2026.

- (928) 393-8049 is the verified business telephone number.
- 623-338-7352 is rejected as a typographical error and must not be published.

See `01-business-source-of-truth.md` section 5.1. Correct the rejected number wherever it appears in current site content, structured data, citations, directories, and business profiles.

---

## 5. Project problem

The existing website does not fully represent the apparent scope, operational capability, or commercial value of the business.

Primary problems include:

- The service offering is not clearly defined.
- The site does not explain who hires Ultimate Fleet GPS.
- Nationwide capability is stated but not supported with a coverage model or deployment explanation.
- Technical experience is buried in recruiting content.
- Platform experience is not separated from partnership or authorization status.
- There is little visible evidence of project experience, quality control, or completed work.
- The customer inquiry path is generic and does not qualify fleet projects.
- Customer inquiries and technician recruiting are not sufficiently separated.
- There are no service, industry, audience, technology, or verified location content systems.
- The site cannot currently build meaningful topical authority.
- The site does not provide enough structured information for search engines and answer systems.
- Existing contact information is inconsistent across the current site and third-party listings. The canonical telephone number is now verified, so this is a cleanup task rather than an open question.

---

## 6. Project opportunity

The rebuild can turn the website into a commercial growth and operational credibility platform.

The new site can:

- Present a complete and verified service portfolio.
- Explain nationwide and multi-location deployment capability.
- Create dedicated conversion paths for fleet operators and technology providers.
- Demonstrate installation processes and quality controls.
- Publish useful first-party expertise about fleet equipment installation.
- Build service, industry, audience, technology, and geographic authority.
- Support Google Search, Bing, Apple, answer engines, and AI-assisted discovery.
- Provide a scalable content framework without creating low-value pages.
- Recruit qualified technicians without distracting customer prospects.
- Supply sales teams with credible pages that answer common project questions.
- Connect website leads to an organized CRM and follow-up process.

---

## 7. Primary project goals

### 7.1 Business goals

- Generate qualified commercial installation inquiries.
- Increase opportunities for single-site and multi-location deployments.
- Attract relationships with telematics providers and equipment vendors.
- Improve the company’s credibility during vendor and fleet evaluations.
- Communicate technical and operational capabilities accurately.
- Recruit qualified mobile installation technicians.
- Support long-term organic growth.

### 7.2 Customer goals

The website should help a prospective customer quickly determine:

- Whether Ultimate Fleet GPS installs the required equipment.
- Whether Ultimate Fleet GPS works with the customer’s vehicle types.
- Whether technicians can reach the required location or locations.
- Whether Ultimate Fleet GPS can support the size and timeline of the project.
- How installations are scheduled and completed.
- How installation quality and functionality are verified.
- What information is needed to request a quote.
- What happens after an inquiry is submitted.

### 7.3 Search goals

- Establish strong relevance for fleet-technology installation topics.
- Build topical authority across services, industries, audiences, equipment, and deployment planning.
- Earn qualified visibility for national and verified local commercial intent.
- Improve discoverability in Google and Bing.
- improve business information consistency for Google Business Profile, Bing Places, and Apple Business Connect where eligible.
- Make company information easier for ChatGPT, Perplexity, and other answer systems to understand and cite.
- Support featured snippets and People Also Ask visibility with clear, useful answers.
- Strengthen entity recognition and potential knowledge-panel signals through corroborated business information.

### 7.4 Conversion goals

- Increase qualified quote requests.
- Increase fleet deployment consultation inquiries.
- Increase calls from prospective commercial customers.
- Capture service-area and technician-coverage inquiries.
- Route technology-provider opportunities appropriately.
- Separate technician applications from customer leads.
- Measure lead source, service interest, project size, industry, and geography.

---

## 8. Primary audiences

The initial audience framework includes the following potential customer groups:

### 8.1 Fleet operators and fleet managers

Organizations that need technology installed across company-owned or managed vehicles.

Likely concerns include:

- Fleet downtime
- Installer availability
- Installation consistency
- Vehicle compatibility
- Project scheduling
- Equipment testing
- Installation documentation
- Multi-location coordination

### 8.2 Telematics, GPS, and ELD providers

Technology companies that may need an installation partner for customer deployments, equipment replacements, upgrades, or field service.

Likely concerns include:

- Technician coverage
- Installation standards
- Brand representation
- Documentation
- Communication
- Scheduling
- Quality control
- Scalability

### 8.3 Equipment manufacturers and resellers

Companies that provide vehicle hardware and require qualified installation support for their customers.

### 8.4 Construction and heavy-equipment operators

Companies using work trucks, construction vehicles, trailers, or related mobile assets that require tracking, safety, logging, or fleet-management equipment.

### 8.5 Transportation and logistics companies

Businesses that depend on vehicle tracking, electronic logging, safety cameras, driver systems, and fleet visibility.

### 8.6 Multi-location organizations and project managers

Teams coordinating installations across multiple fleet yards, states, regions, or customer locations.

### 8.7 Mobile installation technicians

Independent technicians seeking contract installation opportunities. This audience will have its own navigation, content, form, and conversion path.

All audiences and industries must be confirmed before the website presents them as established customer categories.

---

## 9. Proposed service framework

The initial service candidates are:

- GPS tracking device installation
- Electronic logging device installation
- Fleet telematics installation
- Fleet dash-camera installation
- Fleet-management equipment installation
- Vehicle gateway installation
- Mobile data terminal installation
- Tire-pressure monitoring equipment installation
- Vehicle electronics installation
- Equipment removal and reinstallation
- Installation troubleshooting and service
- Fleet equipment upgrades
- Multi-location fleet installations
- Nationwide fleet deployments

These services are proposed for research and verification. Inclusion in this overview does not approve them for publication.

### Legacy equipment terminology

AOBRD and EOBR are legacy terms. They should not lead the modern service architecture unless the company confirms current demand for installation, removal, replacement, migration, or service involving those systems. Legacy terminology may be useful within educational or migration content.

---

## 10. Proposed website architecture

The website will be organized around distinct customer and search intents.

### 10.1 Core company pages

- Homepage
- About
- How It Works
- Service Areas
- Case Studies
- FAQ
- Request a Quote
- Contact
- Careers
- Legal pages

### 10.2 Service pages

Service pages will explain what equipment or installation work Ultimate Fleet GPS provides.

Preferred pattern:

`/services/[service]/`

### 10.3 Industry pages

Industry pages will explain how installation needs differ by fleet environment and operating model.

Preferred pattern:

`/industries/[industry]/`

### 10.4 Audience and solution pages

Solution pages will address the needs of fleet managers, providers, vendors, project managers, and multi-location organizations.

Preferred pattern:

`/solutions/[audience-or-project-need]/`

### 10.5 Technology and equipment pages

Technology pages will explain equipment categories and verified platform experience without implying unsupported partnerships.

Preferred patterns:

- `/technology/[equipment-category]/`
- `/technology/platforms/[platform]/`

### 10.6 Service-area pages

Service-area pages will communicate verified geographic coverage without representing technician areas as physical offices.

Preferred patterns:

- `/service-areas/[state]/`
- `/service-areas/[state]/[metro]/`

### 10.7 Resource content

Resource content will build topical authority and answer customer questions.

Preferred pattern:

`/resources/[topic]/`

### 10.8 Matrix pages

Qualified combinations may include:

- Service plus industry
- Service plus location
- Audience plus service
- Industry plus location
- Technology plus service

Matrix records will support opportunity discovery. They will not automatically authorize page creation, publication, sitemap inclusion, or indexation.

---

## 11. Content strategy

The content system will balance commercial intent, technical education, trust, and conversion.

### 11.1 Commercial content

Commercial pages will explain:

- What the service is
- Who needs it
- What equipment is involved
- Which vehicle types may be supported
- How the installation process works
- How testing and documentation work
- Which industries and project types are relevant
- How to request a quote

### 11.2 Educational content

Educational resources may cover:

- GPS tracking installation
- ELD installation planning
- Fleet telematics
- Fleet cameras
- Vehicle gateways
- 12-volt and 24-volt electrical considerations
- Vehicle preparation
- Installation documentation
- Equipment replacement
- Multi-state fleet deployment planning
- Fleet downtime and scheduling
- Legacy device terminology

### 11.3 Evidence content

The strongest future content will use approved first-party evidence:

- Original installation photographs
- Verified case studies
- Approved project statistics
- Installation checklists
- Quality-control procedures
- Documentation examples
- Technician qualification standards
- Approved testimonials
- Verified vehicle and equipment experience

No testimonials, case studies, project data, or results may be invented.

---

## 12. SEO, AEO, GEO, and local-search direction

### 12.1 Search engine optimization

Each indexable page will target one clear primary intent and use unique metadata, descriptive headings, original content, semantic HTML, contextual internal links, accessible media, appropriate structured data, and a clear conversion path.

### 12.2 Answer engine optimization

Pages will use direct answers, definitions, numbered processes, requirements lists, comparison tables, checklists, and concise FAQs where they help the customer understand the topic.

### 12.3 Generative engine optimization

The site will improve machine understanding through precise business facts, consistent entity information, clear terminology, first-party evidence, connected topic clusters, crawlable HTML, author and reviewer information where appropriate, and citations to authoritative sources when technical claims require them.

No tactic can guarantee a featured snippet, rich result, knowledge panel, People Also Ask placement, ChatGPT citation, or Perplexity citation.

### 12.4 Local search

Local visibility will be based on real business operations and verified coverage. A technician location is not automatically a company office. State and metro pages must provide accurate and useful coverage information.

Google Business Profile, Bing Places, Apple Business Connect, structured data, directories, and website information must use consistent verified business data.

---

## 13. Conversion strategy

### 13.1 Primary conversion

The primary customer conversion will be:

**Request an Installation Quote**

### 13.2 Secondary conversions

- Discuss a Fleet Deployment
- Check Technician Coverage
- Call Ultimate Fleet GPS
- Submit Project Information
- Apply as a Mobile Technician

### 13.3 Customer intake

The initial form should remain concise while capturing enough information to route and qualify the opportunity.

Potential fields include:

- Contact name
- Company name
- Work email
- Phone number
- Equipment type
- Equipment platform
- Number of vehicles or assets
- Vehicle types
- Project locations
- Desired timeline
- Project description

Technical qualification can continue through a second-stage form or follow-up workflow.

### 13.4 Lead separation

Customer inquiries, provider partnerships, general inquiries, service requests, and technician applications must use distinct forms, tags, routing, and measurement.

---

## 14. Design direction

The website should feel established, technical, commercial, reliable, and human. It should avoid the appearance of a generic automotive accessory shop or an interchangeable AI-generated service website.

The visual system should emphasize:

- Commercial fleet environments
- Realistic installation equipment
- Vehicle electronics and telematics
- Organized field work
- Technical precision
- Nationwide coordination
- Clear customer outcomes
- Strong visual hierarchy
- Mobile usability
- Accessible color contrast
- Restrained motion

The design system, brand colors, typography, component rules, photography standards, and page references will be defined in `18-design-system.md` and `19-image-media-strategy.md`.

---

## 15. Technical architecture

### Approved stack

- Claude for research and content development
- Claude Code for implementation support
- Visual Studio Code for local development
- Next.js App Router
- TypeScript
- Tailwind CSS
- GitHub for version control
- Cloudflare Pages for hosting

### Technical priorities

- Cloudflare-compatible implementation
- Fast page delivery
- Strong Core Web Vitals
- Accessible responsive design
- Crawlable primary content
- Reusable page-family components
- Data-driven registries
- Central metadata generation
- Central structured-data generation
- XML sitemap generation
- Robots directive control
- Redirect management
- Secure environment-variable handling
- Reliable form submission
- Analytics and CRM attribution
- Build, type, lint, and accessibility checks

The detailed implementation model will be defined in `20-technical-architecture.md` and `21-cloudflare-deployment.md`.

---

## 16. Repository and development workflow

The canonical repository is:

https://github.com/SedrickHarris/ultimate-fleet-gps-site.git

The repository will contain:

- Source code
- Project documentation
- Canonical registries
- Content templates
- Static media
- Testing and quality checks
- Deployment configuration
- Redirect and route manifests

The branch, commit, pull-request, and production-deployment policies will be documented separately. No workflow should be assumed until it is approved.

Claude Code should preserve unrelated work, use the project documentation as context, report affected files, run required validation, and avoid unrequested deployment or publication actions.

---

## 17. Business-truth governance

Business accuracy takes precedence over content volume, keyword coverage, and marketing language.

The project will not invent or assume:

- Services
- Locations
- Service coverage
- Technician availability
- Certifications
- Partnerships
- Authorized-installer status
- Customer relationships
- Project statistics
- Fleet capacity
- Guarantees
- Warranties
- Pricing
- Regulatory compliance
- Insurance coverage
- Safety credentials
- Platform compatibility

Information should be classified as:

- Verified
- Pending verification
- Proposed
- Inferred
- Prohibited until supported

Platform installation experience must remain distinct from official partnership, authorization, certification, reseller, dealer, or preferred-provider status.

---

## 18. Publication and indexation governance

The project separates:

1. Research
2. Content approval
3. Development
4. Quality assurance
5. Production deployment
6. Public availability
7. Search indexation

A page may be developed and deployed for review without being approved for search indexation.

An indexable page must have:

- Verified business relevance
- A distinct customer intent
- Accurate content
- Sufficient original value
- Appropriate internal links
- A clear conversion path
- Correct canonicalization
- No material conflict with a stronger page
- Approved publication and indexation status

Only approved indexable pages should appear in the XML sitemap.

---

## 19. Project phases

### Phase 1: Discovery and business verification

- Confirm company information.
- Resolve the phone-number discrepancy.
- Verify services.
- Verify industries and audiences.
- Verify platform experience.
- Define actual service coverage.
- Collect proof, photography, and project information.

### Phase 2: Foundation documents and registries

- Complete the business source of truth.
- Complete the master page build list.
- Approve the URL architecture.
- Build service, industry, audience, technology, and location registries.
- Define SEO, schema, internal-linking, conversion, design, and technical strategies.

### Phase 3: Core site build

- Initialize the Next.js application.
- Build the design system and reusable components.
- Create global navigation and footer.
- Build the homepage and core pages.
- Build priority service, industry, and solution pages.
- Implement forms, analytics, metadata, schema, sitemap, robots directives, and redirects.

### Phase 4: Content authority

- Publish verified service and industry content.
- Develop cornerstone educational resources.
- Add case studies and first-party evidence.
- Develop technology-category content.
- Improve internal linking and entity consistency.

### Phase 5: Verified geographic expansion

- Create national coverage content.
- Add verified state hubs.
- Add qualified metro pages.
- Coordinate eligible business profiles and location pages.
- Add selected service-location content where unique value exists.

### Phase 6: Qualified matrix expansion

- Evaluate search and business opportunities.
- Prioritize useful combinations.
- Build only pages with adequate differentiation and evidence.
- Monitor indexation, engagement, rankings, and conversions.
- Consolidate or retire pages that do not serve a distinct purpose.

---

## 20. Measurement framework

Initial performance indicators include:

### Search visibility

- Organic impressions
- Organic clicks
- Qualified non-brand queries
- Priority page rankings
- Indexed priority pages
- Rich-result eligibility and errors
- Branded search growth

### Engagement

- Service-page engagement
- Industry-page engagement
- Resource-to-commercial-page movement
- Returning visitors
- Case-study engagement
- Form starts

### Conversion

- Quote requests
- Deployment consultation requests
- Qualified phone calls
- Coverage inquiries
- Technology-provider inquiries
- Technician applications
- Lead-to-opportunity rate
- Opportunities by service, industry, and geography

### Technical quality

- Core Web Vitals
- Crawl errors
- Broken links
- Redirect errors
- Schema validation
- Form reliability
- Accessibility issues
- Build failures

Final targets will be established after baseline analytics, Search Console, CRM, and business data are available.

---

## 21. Initial risks

| Risk | Effect | Mitigation |
| --- | --- | --- |
| Unverified services | Misleading content | Require service-registry approval |
| Unverified nationwide coverage | Unsupported geographic claims | Build a coverage registry and verification process |
| Platform names imply partnerships | Legal or credibility risk | Use controlled language and verify authorization |
| Thin geographic pages | Poor search quality | Gate publication and indexation |
| Repetitive matrix content | Search and user-value risk | Require unique intent and evidence |
| Inconsistent contact data | Lost leads and entity confusion | Resolve before launch |
| Recruiting dominates customer messaging | Conversion confusion | Separate customer and career pathways |
| Limited first-party proof | Weak trust | Collect project photos, data, and case studies |
| Over-documentation delays development | Slower delivery | Use build-first documentation and update during implementation |
| Uncontrolled AI-generated copy | Factual drift and duplication | Use canonical registries and human approval |

---

## 22. Initial exclusions

Unless separately approved, the initial project does not include:

- Automatic publication of a nationwide city-page network
- Automatic publication of every matrix combination
- Unsupported location or office claims
- Unsupported partner or certification claims
- E-commerce equipment sales
- Customer account portals
- Technician scheduling software
- Fleet-management software development
- Native mobile applications
- Automated review generation
- Fabricated case studies, testimonials, ratings, or statistics

An excluded item may be added later through an approved decision and documented scope change.

---

## 23. Key open questions

The following questions must be resolved during discovery:

1. What is the correct primary business phone number?
2. What email addresses should be used for sales, service, general inquiries, and careers?
3. What is the legal, mailing, and public business address?
4. Does the company have a customer-facing office?
5. Which services are currently offered?
6. Does the company install customer-supplied equipment, sell equipment, or both?
7. Which platforms are actively supported?
8. Which partnerships or certifications can be documented?
9. Which vehicle and equipment types are supported?
10. Which states and metros have active technician coverage?
11. How is nationwide coverage confirmed for a project?
12. What fleet sizes and deployment timelines can the company support?
13. What project-management services are included?
14. What documentation does the customer receive?
15. What quality-control process is used?
16. What warranties, guarantees, or service commitments are offered?
17. Which industries have documented project experience?
18. Which project statistics may be published?
19. Which customer testimonials, logos, photographs, and case studies may be used?
20. What CRM, form, phone, and analytics systems will be connected?

---

## 24. Definition of project success

The project will be successful when the website:

- Accurately represents the verified business.
- Clearly explains the company’s services and deployment process.
- Helps target customers determine whether Ultimate Fleet GPS fits their project.
- Provides a strong path to request a quote.
- Separates customer conversion from technician recruiting.
- Establishes a technically sound, scalable page architecture.
- Supports sustainable topic and geographic expansion.
- Provides crawlable, useful, original content.
- Meets performance, accessibility, and quality requirements.
- Integrates search, analytics, and conversion measurement.
- Can be maintained consistently through canonical registries and documented decisions.

---

## 25. Related project documents

This overview will be supported by:

- `01-business-source-of-truth.md`
- `02-goals-success-criteria.md`
- `03-audience-search-intent.md`
- `04-master-page-build-list.md`
- `05-url-architecture.md`
- `06-service-registry.md`
- `07-industry-registry.md`
- `08-audience-solution-registry.md`
- `09-technology-platform-registry.md`
- `10-location-registry.md`
- `11-content-matrix.md`
- `12-content-strategy.md`
- `13-page-content-standards.md`
- `14-seo-aeo-geo-strategy.md`
- `15-schema-entity-strategy.md`
- `16-internal-linking-strategy.md`
- `17-conversion-architecture.md`
- `18-design-system.md`
- `19-image-media-strategy.md`
- `20-technical-architecture.md`
- `21-cloudflare-deployment.md`
- `22-analytics-measurement.md`
- `23-migration-redirect-plan.md`
- `24-quality-assurance.md`
- `25-publication-indexation-governance.md`
- `26-post-launch-roadmap.md`
- `27-decisions-change-log.md`

---

## 26. Document maintenance

Update this overview when the project’s purpose, primary scope, positioning, architecture, technology stack, or major strategic direction changes.

Record material changes in `27-decisions-change-log.md`. Do not use this overview as a substitute for updating the appropriate canonical registry or source-of-truth document.
