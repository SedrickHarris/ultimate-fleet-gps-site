# Ultimate Fleet GPS Component Inventory

**Document:** `20-component-inventory.md`  
**Project:** Ultimate Fleet GPS Website and Installer Recruitment Project  
**Business:** Ultimate Fleet GPS  
**Repository:** https://github.com/SedrickHarris/ultimate-fleet-gps-site.git  
**Framework:** Next.js App Router, TypeScript, and Tailwind CSS  
**Rendering model:** Static export with minimal client-side interaction  
**Primary component outcome:** Reusable recruitment-first pages without generic or duplicate page production  
**Status:** Component architecture and build inventory draft  
**Version:** 0.1  
**Last updated:** September 19, 2026

> **Update, September 19, 2026.** Current installer openings now exist (`01-business-source-of-truth.md` section 33). The Installer Network is a registration pathway for future opportunities, offered alongside those openings, and is not an application for a specific opening. Where this document calls the network a future-opportunity pathway, it describes the network only, not the whole recruitment model. Rules for the case where no active job exists still apply conditionally. An application page and form now exist for the current opening (`/careers/apply/`), and "Apply" belongs only to that opening. See `28-recruitment-strategy.md`.

---

## 1. Purpose

This document defines the reusable components and page-template assemblies required to build the Ultimate Fleet GPS website.

It governs:

- component categories and ownership;
- primitive UI components;
- global layout and navigation;
- recruitment components;
- active-job components;
- installer-network components;
- commercial components;
- resource and authority components;
- forms and confirmation states;
- metadata, schema, and analytics helpers;
- responsive and accessibility behavior;
- component states and variants;
- page-template composition;
- testing expectations;
- launch priority; and
- component maintenance.

This is an inventory and behavior specification. Visual tokens, typography, color, spacing, imagery, and detailed styling belong in `21-design-system.md` and `22-image-strategy.md`.

---

## 2. Component Objectives

The component system must:

1. Make recruitment the clearest primary journey.
2. Keep active-job, installer-network, referral, and commercial experiences distinct.
3. Produce crawlable semantic HTML through static rendering.
4. Limit client-side JavaScript to necessary interaction.
5. Support accurate metadata, internal links, and structured data.
6. Make page families consistent without producing thin or near-duplicate pages.
7. Support mobile candidates first, especially job and application flows.
8. Meet WCAG 2.2 Level AA requirements.
9. Preserve truthful business, job, location, and service data.
10. Expose stable analytics hooks without collecting personal information.
11. Remain understandable to future developers and Claude Code.
12. Avoid premature abstraction and unnecessary dependency weight.

---

## 3. Component Principles

### 3.1 Compose from clear layers

Use this component hierarchy:

```text
UI primitive
    -> shared content module
    -> recruitment or commercial domain component
    -> page-family template
    -> App Router route
```

### 3.2 Default to server components

Static and content-focused components should remain server components. Add `"use client"` only to the smallest boundary requiring browser state, events, or APIs.

### 3.3 Reuse structure, not generic copy

Templates may standardize sequence and behavior. Each page must retain unique intent, evidence, content, and conversion logic.

### 3.4 Business data stays outside presentation

Components receive verified typed data. Do not embed phone numbers, addresses, job terms, service areas, or entity claims directly in reusable UI files.

### 3.5 Accessibility is part of the API

Accessible name, keyboard behavior, focus behavior, state announcements, heading level, and error handling must be defined with the component, not added later.

### 3.6 Conversion events reflect real actions

A component may emit a defined interaction event. It must not report a submission or business outcome before the trusted backend confirms it.

### 3.7 Fewer strong variants

Prefer a small explicit variant set over arbitrary style props. Avoid a universal section component that accepts dozens of visual switches.

### 3.8 No hidden publication logic

Components do not decide whether unverified content is safe to publish. Route and data validation control publication and indexation.

---

## 4. Inventory Status Definitions

| Status | Meaning |
|---|---|
| Launch required | Needed for the approved launch journey or global site operation |
| Launch conditional | Needed only if the associated verified page or feature launches |
| Phase 2 | Useful after launch when content or inventory justifies it |
| Future | Do not build without a confirmed requirement |
| Utility | Nonvisual or cross-cutting implementation component |

### Build rule

Do not implement every component because it appears in the inventory. Build the smallest set required by approved launch pages, then add components when a page brief or operational need requires them.

---

## 5. Recommended Component Directory

```text
src/components/
├── analytics/
│   ├── AnalyticsProvider.tsx
│   ├── AnalyticsLink.tsx
│   └── ConversionEvent.tsx
├── careers/
│   ├── ActiveJobCard.tsx
│   ├── ActiveJobList.tsx
│   ├── ApplicationProcessSteps.tsx
│   ├── AssignmentProcessSteps.tsx
│   ├── CareersPathwayCards.tsx
│   ├── ClosedJobNotice.tsx
│   ├── ExpectationPanel.tsx
│   ├── InstallerFitSummary.tsx
│   ├── InstallerNetworkPanel.tsx
│   ├── JobApplyPanel.tsx
│   ├── JobDetailsSummary.tsx
│   ├── JobFilters.tsx
│   ├── JobProcessPanel.tsx
│   ├── JobRequirements.tsx
│   ├── JobResponsibilities.tsx
│   ├── JobStatusBadge.tsx
│   ├── JobsEmptyState.tsx
│   ├── NetworkDisclosure.tsx
│   ├── NetworkEligibilitySummary.tsx
│   ├── RecruitingMarketCard.tsx
│   ├── RequirementsChecklist.tsx
│   ├── RoleCard.tsx
│   └── ToolsVehicleTravelPanel.tsx
├── commercial/
│   ├── CommercialContactPanel.tsx
│   ├── CommercialProcessSteps.tsx
│   ├── CommercialProofPanel.tsx
│   ├── IndustryCard.tsx
│   ├── ProjectFitChecklist.tsx
│   ├── ServiceCard.tsx
│   ├── ServiceAreaCard.tsx
│   ├── ServiceCoveragePanel.tsx
│   ├── SolutionCard.tsx
│   └── TechnologyCard.tsx
├── content/
│   ├── AnswerBlock.tsx
│   ├── AuthorReviewByline.tsx
│   ├── ComparisonTable.tsx
│   ├── ContentSection.tsx
│   ├── DefinitionList.tsx
│   ├── EvidencePanel.tsx
│   ├── FaqGroup.tsx
│   ├── KeyTakeaways.tsx
│   ├── RelatedContent.tsx
│   └── TableOfContents.tsx
├── forms/
│   ├── ApplicationConfirmation.tsx
│   ├── ApplicationForm.tsx
│   ├── CommercialConfirmation.tsx
│   ├── CommercialInquiryForm.tsx
│   ├── ContactConfirmation.tsx
│   ├── ContactRouter.tsx
│   ├── FieldError.tsx
│   ├── FileUploadField.tsx
│   ├── FormAlert.tsx
│   ├── FormField.tsx
│   ├── FormProgress.tsx
│   ├── InstallerNetworkForm.tsx
│   ├── NetworkConfirmation.tsx
│   ├── ReferralForm.tsx
│   ├── TurnstileField.tsx
│   └── forms.types.ts
├── hero/
│   ├── ArticleHero.tsx
│   ├── CareersHero.tsx
│   ├── CommercialHero.tsx
│   ├── HomeHero.tsx
│   ├── JobHero.tsx
│   ├── RoleHero.tsx
│   └── UtilityHero.tsx
├── layout/
│   ├── AnnouncementBar.tsx
│   ├── Breadcrumbs.tsx
│   ├── CardGrid.tsx
│   ├── CareersSubnav.tsx
│   ├── Cluster.tsx
│   ├── Container.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── MainNavigation.tsx
│   ├── MobileNavigation.tsx
│   ├── PageIntro.tsx
│   ├── PageShell.tsx
│   ├── Section.tsx
│   ├── SkipLink.tsx
│   ├── SplitContent.tsx
│   └── Stack.tsx
├── media/
│   ├── AspectImage.tsx
│   ├── BackgroundMedia.tsx
│   ├── ImageCard.tsx
│   └── LogoMark.tsx
├── schema/
│   ├── ArticleSchema.tsx
│   ├── BreadcrumbSchema.tsx
│   ├── FaqSchema.tsx
│   ├── JobPostingSchema.tsx
│   ├── JsonLd.tsx
│   ├── OrganizationSchema.tsx
│   └── ServiceSchema.tsx
├── templates/
│   ├── ArticleTemplate.tsx
│   ├── CareersHubTemplate.tsx
│   ├── CommercialHubTemplate.tsx
│   ├── FaqTemplate.tsx
│   ├── HomeTemplate.tsx
│   ├── IndustryTemplate.tsx
│   ├── JobDetailTemplate.tsx
│   ├── JobsIndexTemplate.tsx
│   ├── RecruitingMarketTemplate.tsx
│   ├── RequirementsTemplate.tsx
│   ├── RoleTemplate.tsx
│   ├── ServiceAreaTemplate.tsx
│   ├── ServiceTemplate.tsx
│   ├── TechnologyTemplate.tsx
│   ├── AssignmentProcessTemplate.tsx
│   ├── CandidateFaqTemplate.tsx
│   ├── ContactTemplate.tsx
│   ├── InstallerNetworkTemplate.tsx
│   └── LegalTemplate.tsx
└── ui/
    ├── Accordion.tsx
    ├── Badge.tsx
    ├── Button.tsx
    ├── Card.tsx
    ├── Checkbox.tsx
    ├── Icon.tsx
    ├── LinkButton.tsx
    ├── RadioGroup.tsx
    ├── Select.tsx
    ├── Spinner.tsx
    ├── StatusMessage.tsx
    ├── TextArea.tsx
    └── TextInput.tsx
```

The final directory should reflect actual use. Do not create empty files for future inventory items.

---

## 6. Component Naming Rules

- Use PascalCase for React component names and files.
- Use names that describe purpose, not appearance alone.
- Use domain prefixes when a shared name would be ambiguous.
- Use `Template` only for page-family composition.
- Use `Panel` for a contained decision or action area.
- Use `Card` for a repeatable linked or summarized object.
- Use `List` for collection rendering and empty-state ownership.
- Use `Provider` only for actual context or cross-tree behavior.
- Avoid names such as `Component1`, `ContentBlock2`, `FancyCard`, or `UniversalSection`.

### Examples

| Prefer | Avoid |
|---|---|
| `ActiveJobCard` | `CardVariantThree` |
| `InstallerNetworkPanel` | `BlueCTA` |
| `CommercialContactPanel` | `BottomBox` |
| `JobRequirements` | `IconList` |
| `AnswerBlock` | `TextSection` |

---

## 7. Shared Type Conventions

### Base component props

```ts
type ComponentBaseProps = {
  id?: string;
  className?: string;
};
```

Use `className` only when a component needs deliberate composition flexibility. Do not expose arbitrary visual configuration on every component.

### Link type

```ts
type AppLink = {
  href: string;
  label: string;
  analyticsId?: string;
  external?: boolean;
};
```

### Image type

```ts
type ContentImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  decorative?: boolean;
};
```

### Status rule

Business, job, service, and location records should already be validated before reaching presentational components. Components must not transform an `unknown` or `draft` fact into confident public language.

---

## 8. UI Primitive Inventory

| Component | Status | Purpose | Client component |
|---|---|---|---:|
| `Button` | Launch required | Native form or action button | No by default |
| `LinkButton` | Launch required | Link styled as a clear action | No |
| `Card` | Launch required | Shared structural surface | No |
| `Badge` | Launch required | Short verified category or status | No |
| `Icon` | Launch required | Decorative or labeled icon wrapper | No |
| `Accordion` | Launch required | Accessible disclosure for selected content | Yes |
| `TextInput` | Launch conditional | Accessible text field | Usually no wrapper; form may be client |
| `TextArea` | Launch conditional | Accessible multiline input | Usually no wrapper |
| `Select` | Launch conditional | Native controlled selection | Usually no wrapper |
| `Checkbox` | Launch conditional | Consent or multi-select input | Usually no wrapper |
| `RadioGroup` | Launch conditional | Exclusive controlled options | May be client |
| `Spinner` | Launch conditional | Supplemental pending indicator | No |
| `StatusMessage` | Launch conditional | Success, warning, or error status | No |

### Primitive rule

Prefer native HTML behavior. A styled native control is usually better than a custom recreation.

---

## 9. `Button`

### Purpose

Use for an action occurring on the current interface, such as form submission, step advancement, filtering, or menu activation.

### Required API

```ts
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "quiet" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
};
```

### Requirements

- Render a native `<button>`.
- Default `type` must be deliberate; form buttons should state `submit` or `button` explicitly.
- Preserve an accessible name during loading.
- Prevent duplicate submission without trapping recovery.
- Show visible focus.
- Meet target-size and contrast standards.
- Do not use a disabled state as the only explanation for missing information.

### Do not use

For navigation to another URL. Use `LinkButton`.

---

## 10. `LinkButton`

### Purpose

Use for prominent navigation actions such as:

- View Current Openings;
- Apply for This Opening;
- Join the Installer Network; and
- Discuss a Fleet Installation Project.

### Required API

```ts
type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "quiet";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  analytics?: {
    event: string;
    ctaId: string;
    ctaLocation: string;
  };
};
```

### Requirements

- Render a crawlable link.
- Use meaningful label text.
- Make external behavior clear when it affects the user.
- Do not open a new tab without a specific user benefit.
- Add safe `rel` values for new external tabs.
- Track only approved non-PII parameters.

---

## 11. `Card`

### Purpose

Provide consistent structure for job, role, service, industry, technology, resource, and pathway cards.

### API direction

```ts
type CardProps = {
  as?: "article" | "section" | "div";
  children: React.ReactNode;
  variant?: "default" | "subtle" | "featured";
};
```

### Requirements

- Domain cards define their own content hierarchy.
- Do not make the entire card clickable if it creates nested interactive elements.
- Use one clear link target.
- Equal visual height must not force content truncation that hides requirements.
- Preserve readable focus and hover behavior.
- Cards must stack cleanly on narrow screens.

---

## 12. `Badge`

### Approved uses

- Active opening;
- Closed;
- Travel level when verified;
- Field-based;
- Role category;
- Resource type; and
- verified service or industry category.

### Rules

- Do not use color alone to communicate status.
- Do not show “Urgent,” “Now Hiring,” or scarcity language unless accurate and approved.
- Do not use a badge to imply certification, partnership, or benefit.
- Status text must come from controlled data.

---

## 13. `Accordion`

### Purpose

Use for selected FAQ and secondary-detail groups when collapsing content improves usability.

### Requirements

- Native button controls each panel.
- Use `aria-expanded` and `aria-controls` correctly.
- Support keyboard operation.
- Keep headings semantic.
- Content must remain present in server-rendered HTML where feasible.
- Opening a panel must not change the URL unless deep linking is intentionally implemented.
- Motion respects reduced-motion preferences.
- Do not collapse critical job requirements, classification, compensation, travel, or privacy terms simply to make a page appear shorter.

### Analytics

Track only strategically useful FAQ groups. Do not emit an event for every trivial disclosure.

---

## 14. Form Primitive Inventory

| Component | Responsibility |
|---|---|
| `FormField` | Label, description, control, required state, and error association |
| `TextInput` | Standard text, email, telephone, or URL input |
| `TextArea` | Controlled free-text input with length guidance |
| `Select` | Native single selection |
| `RadioGroup` | Exclusive options when all choices should remain visible |
| `Checkbox` | Consent or independent selection |
| `FileUploadField` | Approved resume/file selection only |
| `FieldError` | Field-specific error text |
| `FormAlert` | Form-level error, warning, or success status |
| `FormProgress` | Meaningful step status for progressive forms |
| `TurnstileField` | Public widget and state bridge; never server validation |

### Shared requirements

- Persistent visible label.
- Programmatic label association.
- Helpful description before error text.
- Correct autocomplete token where applicable.
- Appropriate input mode.
- No unnecessary input mask.
- Errors connected with `aria-describedby`.
- Error summary for multi-error submissions.
- User input preserved after recoverable errors.
- No field values sent to analytics.

---

## 15. Global Layout Components

| Component | Status | Responsibility |
|---|---|---|
| `PageShell` | Launch required | Global document body composition |
| `SkipLink` | Launch required | Direct keyboard path to main content |
| `Header` | Launch required | Brand, primary navigation, and priority CTA |
| `MainNavigation` | Launch required | Desktop navigation structure |
| `MobileNavigation` | Launch required | Mobile menu with equivalent information priority |
| `CareersSubnav` | Launch required | Careers-specific sibling navigation |
| `Breadcrumbs` | Launch required for nested pages | Visible hierarchy and schema-aligned trail |
| `Footer` | Launch required | Company, careers, commercial, legal, and contact paths |
| `AnnouncementBar` | Conditional | Verified operational or hiring notice |
| `Container` | Launch required | Width and horizontal padding control |
| `Section` | Launch required | Semantic vertical section wrapper |

---

## 16. `Header`

### Required content

- approved brand identity;
- top-level navigation;
- visually dominant Careers or Current Openings pathway;
- secondary commercial navigation;
- mobile-menu control; and
- no unverified phone number or location.

### Behavior

- Remain usable without animation.
- Support keyboard and screen readers.
- Maintain visible focus.
- Avoid oversized sticky behavior that reduces mobile viewport.
- If sticky, never cover anchor targets, form errors, or browser controls.
- Use server-rendered links.

### Analytics

Approved recruitment and commercial CTA events may include `cta_location: "header"`.

---

## 17. `MainNavigation`

### Recommended top-level destinations

- Careers;
- Current Openings;
- Services;
- Industries or Solutions when approved;
- Service Areas when approved;
- Resources;
- About; and
- Contact.

### Rules

- Careers must not be hidden in an About dropdown.
- Current Openings should remain directly reachable.
- Recruitment and commercial labels must be distinguishable.
- Avoid mega menus until the page inventory requires them.
- Dropdowns must work with keyboard, touch, and screen readers.
- Current-page state uses `aria-current="page"`.

---

## 18. `MobileNavigation`

### Client boundary

This should be a small client component responsible only for menu state and focus behavior.

### Requirements

- Real button with accessible name.
- Announce expanded/collapsed state.
- Move focus intentionally when opened and closed.
- Escape closes the menu.
- Background content must not remain accidentally interactive when a modal pattern is used.
- Scroll locking must not break page position.
- Primary recruitment links appear near the top.
- Menu remains usable at 200% zoom and narrow reflow.

---

## 19. `CareersSubnav`

### Destinations

- Careers overview;
- Current Openings;
- Mobile Installer Roles;
- Installer Requirements;
- How Assignments Work;
- Candidate FAQs; and
- Installer Network.

### Requirements

- Use accurate active state.
- Collapse or horizontally scroll only with clear affordance.
- Do not duplicate the full main navigation.
- Do not imply every role page is an active job.
- Remain visible and usable without client-side routing logic.

---

## 20. `Breadcrumbs`

### Requirements

- Render a `<nav>` with an accessible label.
- Use an ordered list.
- Link ancestors and leave the current page as text or `aria-current`.
- Match the canonical hierarchy.
- Feed the same values into BreadcrumbList schema.
- Do not include filtered states unless they represent approved canonical pages.
- Avoid showing the homepage crumb if it adds no user value on shallow pages, but keep policy consistent.

---

## 21. `Footer`

### Required groups

- company identity;
- careers links;
- active openings;
- installer resources;
- approved commercial links;
- contact information when verified;
- privacy and applicant privacy;
- accessibility; and
- copyright/legal identity.

### Rules

- Do not repeat every page.
- Do not mix job application and commercial inquiry into one generic CTA.
- Use verified contact data from the central business record.
- Do not add social profiles until verified.
- Preserve crawlable HTML links.

### Layout (approved 2026-09-18)

Compact horizontal columns. Desktop (lg): brand block (logo, company lines, click-to-call) plus four groups (Company, Services, Industries & Coverage, Careers & Legal) in one row. Tablet: brand block above four columns. Mobile: brand block, then a two-column grid with Careers & Legal spanning the full width. Links are 44px high on mobile and compact on desktop. There is no About route, so Company holds Our Process, Quality & Safety, and Resources.

---

## 22. Section and Content Layout Components

| Component | Status | Purpose |
|---|---|---|
| `Section` | Launch required | Semantic spacing and background context |
| `Container` | Launch required | Content width |
| `ContentSection` | Launch required | Heading, introduction, body, and optional media |
| `PageIntro` | Launch required | Page-purpose introduction below hero where needed |
| `SplitContent` | Launch required | Text/media or text/supporting panel layout |
| `CardGrid` | Launch required | Responsive repeatable items |
| `Stack` | Utility | Vertical rhythm |
| `Cluster` | Utility | Wrapping inline grouping |

### Layout rule

Use CSS and simple semantic wrappers. Do not create a React component for every flexbox arrangement unless it establishes a repeated, tested contract.

---

## 23. Hero Component Family

Use separate explicit hero components rather than one universal hero with many switches.

| Component | Status | Use |
|---|---|---|
| `HomeHero` | Launch required | Two-audience homepage introduction with recruitment priority |
| `CareersHero` | Launch required | Careers value and current-openings pathway |
| `JobHero` | Launch required | Active or closed job identity and immediate fit facts |
| `RoleHero` | Launch required | Evergreen role education, not active opening |
| `CommercialHero` | Launch conditional | Verified service or buyer context |
| `ArticleHero` | Launch conditional | Resource title, summary, and review metadata |
| `UtilityHero` | Launch required | About, contact, legal, and other simple pages |

### Shared hero requirements

- One H1.
- Direct context in the opening viewport.
- Primary CTA aligned with page intent.
- Secondary action must not compete.
- Background image must preserve text contrast and mobile crop.
- No carousel by default; use only when approved and performance-tested.
- No autoplay video by default.
- No fabricated trust claims.

---

## 24. `HomeHero`

### Content

- clear company context;
- recruitment-first headline and support;
- primary “View Current Openings” action;
- secondary installer-network action when appropriate; and
- discreet commercial pathway.

### Rules

- Do not place an application and quote form together.
- Do not make the commercial CTA visually equal to the primary recruitment action.
- Do not claim specific coverage or active hiring markets without verified data.
- Use a static-compatible image strategy.

---

## 25. `CareersHero`

### Content

- accurate employer/engagement context;
- what installer work may involve;
- who should explore opportunities;
- active-opening pathway; and
- installer-network alternative.

### CTA hierarchy

1. View Current Openings.
2. Review Installer Requirements or Join Installer Network based on current inventory.

### Analytics

Use `careers_cta_click` with stable CTA IDs.

---

## 26. `JobHero`

### Required active-state facts

- public job title;
- status;
- verified location/territory;
- location model;
- classification when approved;
- travel summary;
- schedule summary when approved;
- compensation summary when approved or required; and
- Apply for This Opening action.

### Closed state

- clearly state the opening is closed;
- remove apply action;
- remove active urgency;
- offer relevant active openings or installer network; and
- never retain active JobPosting schema.

### Data rule

Render from the validated job record. Do not accept arbitrary page copy for controlled job facts.

---

## 27. Recruitment Pathway Components

| Component | Status | Purpose |
|---|---|---|
| `CareersPathwayCards` | Launch required | Distinguish openings, role information, requirements, and network |
| `RoleCard` | Launch required | Summarize an evergreen installer role |
| `RecruitingMarketCard` | Conditional | Explain an approved recruiting market |
| `InstallerFitSummary` | Launch required | Help candidates evaluate likely fit |
| `InstallerNetworkPanel` | Launch required | Future-opportunity pathway with disclosures |
| `CandidateFaqLinks` | Launch required | Route to candidate questions |
| `AssignmentProcessSteps` | Launch required | Explain verified assignment workflow |
| `RequirementsChecklist` | Launch required | Present approved qualification categories |

---

## 28. `CareersPathwayCards`

### Paths

- Current Openings;
- Installer Roles;
- Requirements and Process;
- Installer Network.

### Requirements

- Explain the difference between active and evergreen routes.
- Use action-specific labels.
- Do not display “Apply” on a general role card without an active job destination.
- Maintain logical DOM order.
- Avoid equal emphasis if one pathway is the primary action.

---

## 29. `RoleCard`

### Data

```ts
type RoleCardProps = {
  role: {
    id: string;
    title: string;
    summary: string;
    href: string;
    experienceSignals: string[];
    activeJobCount?: number;
  };
};
```

### Requirements

- Identify the role as general career information.
- Show active job count only when calculated from current approved jobs.
- Do not display zero as “hiring soon.”
- Route to the role page or verified active opening.
- Never invent compensation or availability.

---

## 30. `RecruitingMarketCard`

### Purpose

Describe candidate opportunity context for an approved recruiting market.

### Required distinction

The component must not imply:

- a physical office;
- a Google Business Profile;
- a permanent service location;
- continuous job availability; or
- local employment status.

### Data

- market label;
- market scope;
- current active job count;
- approved summary;
- market page URL when published; and
- current-openings fallback.

---

## 31. Job Collection Components

| Component | Status | Purpose |
|---|---|---|
| `ActiveJobList` | Launch required | Own job collection, count, and empty state |
| `ActiveJobCard` | Launch required | Summarize one active job |
| `JobFilters` | Conditional | Filter a sufficiently large job inventory |
| `JobCount` | Conditional | Announce result count |
| `JobsEmptyState` | Launch required | Honest route when no matching opening exists |
| `JobStatusBadge` | Launch required | Controlled status display |

---

## 32. `ActiveJobList`

### Responsibilities

- receive only approved active jobs for the active view;
- render the list as semantic articles or list items;
- own the empty state;
- pass stable job data to cards;
- support progressive client-side filtering when enabled; and
- announce result-count changes accessibly.

### Requirements

- All jobs appear in static HTML before filtering.
- Filtering must not be required to discover jobs.
- Do not create crawlable parameter combinations by default.
- Do not show expired or paused jobs in the active set.
- Emit `job_list_view` only according to the analytics trigger definition.

---

## 33. `ActiveJobCard`

### Required content

- public job title;
- approved location or territory;
- location model;
- classification when approved;
- travel expectation summary;
- date or freshness information only when useful and truthful;
- concise role summary;
- stable “View Opening” link; and
- active status.

### Optional content

- compensation when approved;
- schedule when approved;
- verified experience category; and
- application deadline.

### Rules

- Use the job's stable canonical URL.
- Do not truncate requirements into misleading simplicity.
- Do not display stale “new” or “urgent” indicators.
- Do not place an unverified location in a badge.
- Do not use Apply as the only path if candidates need the detail page to make an informed decision.

---

## 34. `JobFilters`

### Build only when justified

Add filters only when enough simultaneous active jobs exist to improve discovery.

### Potential filters

- role;
- approved recruiting market;
- location model;
- travel level; and
- classification when verified and useful.

### Requirements

- Small client component wrapping static data.
- Native controls where possible.
- “Clear filters” action.
- Result count announced in a polite live region.
- Empty filtered state preserves an easy reset.
- URL parameters remain noindex unless separately approved.
- Filter values come from controlled job data.
- Do not add city filters that imply openings where none exist.

### Analytics

Track normalized filter categories only. Do not send user-entered search text unless separately reviewed and safely controlled.

---

## 35. `JobsEmptyState`

### Default state

When no active jobs exist:

- state that no matching approved opening is currently listed;
- offer the installer network accurately;
- link to installer requirements or role information; and
- avoid promising a future opening.

### Filtered state

- state that no current result matches the selected filters;
- provide clear filters action; and
- offer the network only as a secondary path.

---

## 36. Job Detail Components

| Component | Status | Responsibility |
|---|---|---|
| `JobDetailsSummary` | Launch required | Consolidated high-priority job facts |
| `JobResponsibilities` | Launch required | Approved responsibilities |
| `JobRequirements` | Launch required | Required and preferred qualifications |
| `ToolsVehicleTravelPanel` | Launch required when applicable | Consequential practical requirements |
| `CompensationPanel` | Conditional | Approved compensation and expense terms |
| `JobApplyPanel` | Launch required | Job-specific action and expectation |
| `JobProcessPanel` | Launch required | Application and next-step process |
| `JobFaqGroup` | Launch required | Job-relevant verified answers |
| `ClosedJobNotice` | Launch required | Closed-state explanation and alternatives |

---

## 37. `JobDetailsSummary`

### Fields

- job ID where public policy uses it;
- location or territory;
- location model;
- classification;
- schedule/availability;
- travel;
- tools;
- vehicle;
- compensation; and
- date posted or review date.

### Rules

- Omit unverified optional facts rather than guessing.
- Do not hide consequential facts below the first application CTA.
- Use a semantic definition list.
- Use plain-language labels.
- Ensure displayed values match JobPosting schema.

---

## 38. `JobRequirements`

### Groups

- minimum required;
- preferred;
- technical experience;
- tools and vehicle;
- travel and schedule;
- physical or environmental requirements when approved and reviewed; and
- documentation or eligibility requirements when approved.

### Rules

- Keep required and preferred separate.
- Do not make protected-class or irrelevant personal criteria part of the component.
- Do not allow visual icons to replace text.
- Do not turn a general role preference into a hard filter without approval.

---

## 39. `JobApplyPanel`

### Content

- Apply for This Opening action;
- job title and ID context;
- brief form expectation;
- privacy link;
- realistic next-step statement; and
- alternate accommodation/contact path when approved.

### States

- active;
- loading external ATS;
- application unavailable;
- job closed;
- form temporarily unavailable; and
- already submitted locally only when reliable non-sensitive state exists.

### Analytics

- `apply_click` on action;
- `application_start` on first meaningful form interaction; and
- never `application_submit` until trusted success.

### Mobile behavior

A sticky action may be considered, but it must not cover form controls, legal content, validation messages, or browser UI.

---

## 40. `ClosedJobNotice`

### Required behavior

- Clearly label the opening closed.
- Remove apply controls.
- Remove active-job urgency.
- Route to current openings.
- Offer installer network with accurate disclosure.
- Preserve useful role information when the page remains available.
- Do not render JobPosting schema.

The component is a visible state, not a substitute for changing the job record, sitemap, and schema.

---

## 41. Installer Network Components

| Component | Status | Purpose |
|---|---|---|
| `InstallerNetworkPanel` | Launch required | Explain future-opportunity pathway |
| `NetworkEligibilitySummary` | Launch required | Describe who should join |
| `NetworkDisclosure` | Launch required | Prevent active-job misrepresentation |
| `InstallerNetworkForm` | Launch conditional | Secure network registration |
| `NetworkConfirmation` | Launch conditional | Confirm registration, not application |

### Language rule

Network components must use “network,” “interest,” or “future opportunities.” They must not use “applied,” “job accepted,” “hired,” or “assigned” for the network conversion.

---

## 42. `InstallerNetworkPanel`

### Required content

- what the network is;
- who it is for;
- what information may be requested;
- how information may be used;
- explicit no-guarantee disclosure;
- privacy link; and
- Join the Installer Network action.

### Variants

- standalone page;
- careers-page callout;
- no-active-jobs fallback; and
- closed-job alternative.

The disclosure must remain present in every variant, with detail proportional to context.

---

## 43. Recruitment Process Components

| Component | Status | Purpose |
|---|---|---|
| `AssignmentProcessSteps` | Launch required | Explain verified assignment workflow |
| `ApplicationProcessSteps` | Launch required | Explain submission and review |
| `OnboardingOverview` | Conditional | Explain approved onboarding stages |
| `ExpectationPanel` | Launch required | Surface travel, communication, documentation, or job realities |
| `CandidateQuestionPanel` | Launch required | Route unresolved candidate questions |

### Step component rules

- Use an ordered list when order matters.
- Avoid animated timeline dependencies.
- Do not state response times or onboarding guarantees without approval.
- Separate application, qualification, onboarding, and activation.
- Do not imply automated acceptance.

---

## 44. Commercial Card Components

| Component | Status | Purpose |
|---|---|---|
| `ServiceCard` | Launch conditional | Verified service summary |
| `SolutionCard` | Phase 2 | Verified outcome/problem category |
| `IndustryCard` | Launch conditional | Verified audience/industry summary |
| `TechnologyCard` | Conditional | Verified technology category or approved platform relationship |
| `ServiceAreaCard` | Conditional | Verified commercial coverage page |
| `CommercialResourceCard` | Phase 2 | Buyer education content |

### Shared commercial card rules

- Use verified capabilities.
- Do not use third-party logos without approval.
- Do not imply partnership from compatibility.
- Do not claim service in unverified locations.
- Route to the relevant detail page, not a generic form by default.
- Keep the discreet careers pathway outside commercial card grids.

---

## 45. `ServiceCard`

### Content

- verified service name;
- clear customer-oriented summary;
- approved image or icon;
- relevant equipment or project context;
- link to canonical service page; and
- no unsupported outcome claim.

### Analytics

Ordinary internal navigation does not need a custom event unless the card supports a defined funnel question.

---

## 46. `TechnologyCard`

### Types

- category-level, such as GPS tracking or ELD equipment; or
- named platform only after relationship and capability verification.

### Required relationship label

The data model should distinguish:

- equipment category;
- installation experience;
- compatibility;
- customer-specified product;
- authorized partner;
- certified installer; and
- unverified.

The component must not transform one relationship type into another.

---

## 47. Commercial Decision Components

| Component | Status | Purpose |
|---|---|---|
| `ProjectFitChecklist` | Launch conditional | Help buyers assess likely project fit |
| `CommercialProcessSteps` | Launch conditional | Explain verified engagement process |
| `ServiceCoveragePanel` | Conditional | Explain verified geographic/project coverage |
| `CommercialContactPanel` | Launch conditional | Qualified project CTA and expectations |
| `CommercialProofPanel` | Conditional | Approved evidence only |
| `FaqGroup` with commercial data | Launch conditional | Buyer-specific questions |

---

## 48. `CommercialContactPanel`

### Content

- project-oriented heading;
- verified service context;
- information helpful before inquiry;
- response expectation only when approved;
- primary inquiry CTA;
- phone option when verified; and
- careers link only as a discreet separate path.

### Rules

- Do not use candidate form fields.
- Do not promise a quote if the workflow begins with project review.
- Do not show commercial CTA styling on a recruitment page without clear separation.
- Emit `commercial_cta_click` or `commercial_call_click` with approved parameters.

---

## 49. Proof and Trust Components

| Component | Status | Purpose |
|---|---|---|
| `EvidencePanel` | Launch conditional | Present verified process, credential, or evidence |
| `Statistic` | Conditional | Display sourced approved metric |
| `TestimonialCard` | Conditional | Approved authentic testimonial |
| `CaseStudyCard` | Phase 2 | Approved customer story summary |
| `PartnerLogoList` | Future/conditional | Approved factual relationships |
| `SafetyQualityPanel` | Conditional | Verified standards or process |

### Proof rules

- Every claim needs an approved source.
- Do not create placeholder testimonials.
- Do not expose confidential customer or project information.
- Do not use customer, manufacturer, platform, association, or certification logos without permission and accurate context.
- Do not display a statistic without definition, source, and date.

---

## 50. Content Authority Components

| Component | Status | Purpose |
|---|---|---|
| `AnswerBlock` | Launch required | Concise direct answer for the primary question |
| `KeyTakeaways` | Conditional | Summary of decision-relevant points |
| `DefinitionList` | Launch required | Structured term/value information |
| `ComparisonTable` | Conditional | Exact distinctions or choices |
| `FaqGroup` | Launch required | Visible factual FAQs |
| `TableOfContents` | Conditional | Long-page navigation |
| `AuthorReviewByline` | Launch conditional | Authorship, review, and freshness |
| `RelatedContent` | Launch required | Contextual internal discovery |

---

## 51. `AnswerBlock`

### Purpose

Present a concise, self-contained response to the page's main user question near the beginning.

### Requirements

- One to three short paragraphs or a compact definition list.
- Factual and complete enough to stand alone.
- No keyword-stuffed lead-in.
- May include conditions and a relevant next step.
- Must not duplicate the hero word for word.
- Server-rendered HTML.

### Use cases

- What does a mobile installer do?
- What experience is needed?
- What is fleet telematics installation?
- How do assignments work?
- Is a specific job still open?

---

## 52. `FaqGroup`

### Props direction

```ts
type FaqItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

type FaqGroupProps = {
  heading: string;
  items: FaqItem[];
  allowMultiple?: boolean;
};
```

### Requirements

- Candidate and commercial FAQ groups use separate data.
- Questions are real and page-relevant.
- Answers use verified information.
- Important terms are not hidden only in FAQ.
- JSON-LD, when eligible, uses the same source data.
- Accordion behavior meets accessibility requirements.

### Layout (approved 2026-09-18)

`layout="list"` (default) is the single-column ruled list used on inner pages. `layout="columns"` (homepage) is a compact card grid: two columns from md up, one column on mobile, capped at about 1100px. DOM and reading order are unchanged, so keyboard and screen-reader order matches the visual order. Built on native `details` and `summary`, which expose expanded state and keyboard activation without JavaScript. Each answer has a stable id referenced by `aria-controls` on its summary, and every answer stays in the rendered HTML to match the FAQPage JSON-LD. Summary rows are at least 64px high (44px minimum target) with a 32px plus icon; the icon rotation is disabled under reduced motion.

---

## 53. `ComparisonTable`

### Use cases

- active job versus installer network;
- required versus preferred qualifications;
- recruiting market versus physical office;
- category experience versus named-platform relationship; and
- application stage versus onboarding stage.

### Requirements

- Use a semantic table for actual tabular relationships.
- Include a caption or nearby heading.
- Provide row and column headers.
- Remain readable on mobile through wrapping or deliberate horizontal overflow.
- Do not transform a table into unlabeled cards if relationships become unclear.

---

## 54. `RelatedContent`

### Purpose

Support topical depth and next-step discovery.

### Data

- stable content ID;
- label;
- description;
- canonical URL;
- relationship type; and
- audience/journey.

### Rules

- Use explicit curated relationships.
- Do not link to draft, blocked, closed-without-value, or missing pages.
- Keep recruitment and commercial recommendations contextually distinct.
- Avoid “read more” as the only link label.
- Limit to the most relevant items.

---

## 55. Media Components

| Component | Status | Purpose |
|---|---|---|
| `AspectImage` | Launch required | Static-compatible responsive image |
| `BackgroundMedia` | Launch conditional | Hero or section background with contrast controls |
| `ImageCard` | Launch conditional | Media plus linked content summary |
| `LogoMark` | Launch required | Approved business logo rendering |
| `MediaCaption` | Conditional | Source/context for informative media |

### Media rules

- Require width and height.
- Distinguish decorative from informative media.
- Empty alt for purely decorative images.
- Use useful concise alt for informative images.
- Avoid text embedded in images.
- Pre-optimize for static export.
- Do not lazy-load the true LCP image.
- Do not mark several images as priority.

---

## 56. `BackgroundMedia`

### Responsibilities

- render approved static image or optional media;
- provide overlay/contrast layer;
- preserve content DOM order;
- support mobile crop; and
- respect reduced motion.

### Rules

- Background must not carry essential information without text equivalent.
- Text contrast must pass across real image crops.
- Video is excluded by default.
- Carousel is excluded by default.
- Do not add client JavaScript for a single static image.

---

## 57. Application Form Components

### Component family

| Component | Status | Purpose |
|---|---|---|
| `ApplicationForm` | Launch conditional | Job-specific candidate application |
| `ApplicationStep` | Conditional | Meaningful progressive group |
| `ApplicationReview` | Conditional | Candidate review before submission |
| `ApplicationConfirmation` | Launch conditional | Confirm accepted application |
| `ApplicationUnavailable` | Launch required | Safe failure/closed-state path |

### Required form context

- verified job ID;
- job title;
- active status;
- market;
- form version;
- privacy notice version; and
- approved endpoint.

### Rules

- Revalidate active status on the trusted backend.
- Keep contact and qualification fields to the approved minimum.
- Do not request bank, payment, identity-document, or full background-check data initially.
- Use one column on mobile.
- Preserve entered data after recoverable errors.
- Prevent duplicate accepted submissions.
- Show success only after trusted confirmation.

---

## 58. `ApplicationForm`

### Client boundary

The interactive form may be a client component, but static job context, privacy links, and process content should remain server-rendered around it.

### States

- idle;
- editing;
- step valid;
- step invalid;
- submitting;
- accepted;
- rejected as invalid;
- retryable backend failure;
- job closed during completion;
- suspected duplicate; and
- offline/network failure.

### Events

- `application_start`;
- `application_step_complete`;
- `application_error` with controlled non-PII category; and
- `application_submit` after accepted backend response.

### Security

- Browser validation is advisory.
- Trusted endpoint validates every value.
- Turnstile is verified server-side.
- No private credential exists in the component.
- No form body is logged to the browser console.
- No field value appears in analytics.

---

## 59. `InstallerNetworkForm`

### Difference from application

- Separate component.
- Separate form schema.
- Separate endpoint or explicit trusted route.
- Separate confirmation.
- Separate CRM pipeline or record type.
- Separate analytics events.
- Separate consent.

### Required pre-form content

- future-opportunity purpose;
- no-guarantee disclosure;
- information-use explanation;
- privacy link; and
- communication preferences.

### Events

- `installer_network_start`;
- approved error event if defined; and
- `installer_network_submit` after accepted registration.

---

## 60. `CommercialInquiryForm`

### Purpose

Collect enough controlled project context for initial commercial qualification.

### Requirements

- Separate from candidate forms.
- Separate endpoint/pipeline.
- Explain why uncommon information is requested.
- Avoid excessive first-step fields.
- Do not collect candidate experience or resume data.
- Do not promise a quote when the next step is review or discovery.
- Confirm only after trusted acceptance.

### Events

- `commercial_form_start`;
- `commercial_step_complete`;
- `commercial_form_error`; and
- `commercial_form_submit` after accepted processing.

---

## 61. `ContactRouter`

### Purpose

Help an uncertain visitor choose the correct path before entering information.

### Routes

- apply for an active job;
- join installer network;
- candidate question or accommodation contact when approved;
- commercial project inquiry; and
- general business contact.

### Requirements

- Use clear cards or radio selection.
- Do not render one mixed form for every path.
- Each selection goes to the correct disclosure and form.
- Persist no sensitive data while switching routes.
- Maintain a usable no-JavaScript fallback with direct links.

---

## 62. Form Status Components

### `FieldError`

- Specific and actionable.
- Linked to its field.
- Does not expose server internals.
- Does not clear valid input unnecessarily.

### `FormAlert`

- Uses appropriate live-region behavior.
- Receives focus after a failed submit when helpful.
- Lists links to invalid fields for long forms.
- Distinguishes retryable from validation errors.

### `FormProgress`

- Shows current and total meaningful steps.
- Uses an ordered structure.
- Does not create unnecessary steps for visual effect.
- Announces step changes.

### `StatusMessage`

- Supports neutral, success, warning, and error semantics.
- Uses icon and text, not color alone.

---

## 63. Confirmation Components

| Component | Purpose | Required wording distinction |
|---|---|---|
| `ApplicationConfirmation` | Accepted active-job application | “Application received” only after trusted success |
| `NetworkConfirmation` | Accepted future-network registration | “Network registration received,” not application |
| `CommercialConfirmation` | Accepted project inquiry | “Inquiry received,” not quote approved |
| `ContactConfirmation` | Accepted general contact | Correct routing and expectation |

### Shared requirements

- server/platform acceptance required;
- no private record ID exposed;
- realistic next steps;
- expected contact channel only when approved;
- duplicate-submission guidance;
- privacy/update information;
- relevant next links; and
- noindex page behavior.

A confirmation component does not prove acceptance if a user navigates directly to the URL.

---

## 64. Analytics Components and Utilities

| Component/utility | Status | Purpose |
|---|---|---|
| `AnalyticsProvider` | Utility | Initialize approved production analytics/consent behavior |
| `AnalyticsLink` | Utility | Emit approved link/CTA event without losing navigation |
| `trackEvent()` | Utility | Typed event dispatch and parameter allowlist |
| `ConversionEvent` | Conditional | Record trusted confirmed outcome after safe state transfer |
| `FormAnalytics` | Utility | Central form event rules |

### Rules

- Follow `15-analytics-and-measurement.md`.
- Gate production collection by canonical hostname and approved consent.
- Keep preview/test out of production analytics.
- Use a typed event map.
- Allowlist parameters.
- Never accept an arbitrary form object.
- Do not send URL query strings containing uncontrolled values.
- Do not emit conversion on button click.

---

## 65. Schema Components

| Component | Status | Pages |
|---|---|---|
| `JsonLd` | Utility | Safe JSON-LD renderer |
| `OrganizationSchema` | Launch required | Homepage and/or approved organization context |
| `BreadcrumbSchema` | Launch required | Nested canonical pages |
| `JobPostingSchema` | Launch required for active jobs | Active job pages only |
| `ServiceSchema` | Conditional | Verified service pages |
| `ArticleSchema` | Conditional | Approved resources |
| `FaqSchema` | Conditional | Eligible visible FAQ content |

### Requirements

- Generate from the same data as visible content.
- Use stable absolute canonical URLs.
- Sanitize serialization safely.
- Exclude undefined and unverified fields.
- Do not render JobPosting on closed or evergreen role pages.
- Do not render LocalBusiness without an eligible verified location.
- Validate output during build and QA.

---

## 66. `JsonLd`

### API direction

```ts
type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};
```

### Requirements

- Serialize through one reviewed utility.
- Escape unsafe HTML-significant characters.
- Do not accept arbitrary user input.
- Do not hide schema errors silently.
- Keep one source for stable entity IDs.
- Support `@graph` when the schema plan requires connected entities.

---

## 67. Utility and SEO Components

| Utility | Purpose |
|---|---|
| `buildMetadata()` | Consistent page metadata |
| `buildCanonicalUrl()` | Canonical origin and trailing-slash handling |
| `buildBreadcrumbs()` | Visible/schema breadcrumb data |
| `getInternalLinks()` | Curated valid related links |
| `getActiveJobs()` | Valid active job selection |
| `getPageIndexation()` | Explicit robots decision |
| `buildOpenGraphImage()` | Approved social image mapping |
| `formatJobLocation()` | Controlled user-facing location display |

These are functions rather than React components unless they render UI.

---

## 68. Page Template Inventory

| Template | Status | Primary journey |
|---|---|---|
| `HomeTemplate` | Launch required | Recruitment routing with commercial secondary path |
| `CareersHubTemplate` | Launch required | Candidate exploration |
| `JobsIndexTemplate` | Launch required | Active job discovery |
| `JobDetailTemplate` | Launch required | Informed job-specific application |
| `RoleTemplate` | Launch required | Evergreen role education |
| `RecruitingMarketTemplate` | Conditional | Approved market-specific candidate information |
| `RequirementsTemplate` | Launch required | Candidate self-qualification |
| `AssignmentProcessTemplate` | Launch required | Candidate process understanding |
| `CandidateFaqTemplate` | Launch required | Candidate objection resolution |
| `InstallerNetworkTemplate` | Launch required | Future-opportunity registration |
| `CommercialHubTemplate` | Launch conditional | Buyer routing |
| `ServiceTemplate` | Launch conditional | Verified service intent |
| `IndustryTemplate` | Conditional | Verified industry intent |
| `TechnologyTemplate` | Conditional | Verified technology intent |
| `ServiceAreaTemplate` | Conditional | Verified geographic buyer intent |
| `ArticleTemplate` | Launch conditional | Informational authority |
| `FaqTemplate` | Launch conditional | Commercial questions |
| `ContactTemplate` | Launch required | Correct routing |
| `LegalTemplate` | Launch required | Privacy, applicant privacy, accessibility |

---

## 69. `HomeTemplate` Composition

Recommended sequence:

1. `HomeHero`
2. `CareersPathwayCards`
3. verified company context
4. `InstallerFitSummary`
5. active jobs preview through `ActiveJobList`
6. `AssignmentProcessSteps`
7. employer/engagement trust content
8. `InstallerNetworkPanel`
9. verified commercial overview
10. selected resources or proof
11. separated candidate and commercial FAQ groups
12. final pathway section

### Rules

- Recruitment owns the visual priority.
- Commercial content cannot interrupt the application journey with a competing form.
- Every module requires unique approved content.
- Hide optional empty modules cleanly without leaving broken headings or spacing.

---

## 70. `CareersHubTemplate` Composition

1. `CareersHero`
2. `CareersSubnav`
3. direct career-context `AnswerBlock`
4. role/experience pathways
5. active openings preview
6. installer requirements
7. assignment process
8. travel/tools/vehicle expectations when verified
9. training or development only when verified
10. application process
11. candidate FAQs
12. installer network
13. final current-openings action

The template must not imply that general careers content is an active job.

---

## 71. `JobsIndexTemplate` Composition

1. `CareersHero` or focused jobs hero
2. `Breadcrumbs`
3. opening-status explanation
4. optional `JobFilters`
5. `ActiveJobList`
6. `JobsEmptyState` as required
7. role and requirements links
8. `InstallerNetworkPanel`
9. candidate FAQs

### State ownership

The route selects approved active jobs. The template does not decide whether a draft or closed job should be active.

---

## 72. `JobDetailTemplate` Composition

1. `Breadcrumbs`
2. `JobHero`
3. `JobDetailsSummary`
4. role overview
5. `JobResponsibilities`
6. `JobRequirements`
7. tools, vehicle, travel, schedule, classification, and compensation panels as verified
8. `JobProcessPanel`
9. trust and privacy context
10. `JobFaqGroup`
11. repeated `JobApplyPanel`
12. related role/opening links
13. installer-network alternative
14. `JobPostingSchema` only for approved active state

### Closed-state composition

Replace active apply panels with `ClosedJobNotice`; remove active schema and urgency.

---

## 73. `RoleTemplate` Composition

1. `Breadcrumbs`
2. `RoleHero`
3. role direct answer
4. typical verified work categories
5. transferable experience
6. required and preferred qualification guidance
7. tools/travel/environment information when verified
8. assignment process
9. active openings for this role
10. candidate FAQs
11. installer network if no matching opening

### Boundary

Do not render JobPosting schema or an Apply CTA unless it targets a specific active job.

---

## 74. `RecruitingMarketTemplate` Composition

1. `Breadcrumbs`
2. market hero with accurate recruiting language
3. market status and scope explanation
4. current active jobs in the market
5. role fit and requirements
6. travel or territory context when verified
7. assignment process
8. market-specific candidate questions
9. installer-network alternative

### Boundary

The template must not represent a market as an office, customer service area, or permanent local presence without verification.

---

## 75. `ServiceTemplate` Composition

1. `Breadcrumbs`
2. `CommercialHero`
3. service `AnswerBlock`
4. customer problems or project context
5. verified scope
6. process
7. equipment/technology context
8. project-fit checklist
9. approved evidence
10. FAQs
11. related services, industries, technologies, and resources
12. `CommercialContactPanel`
13. service schema when eligible

Recruitment appears only through a discreet careers path.

---

## 76. `IndustryTemplate` Composition

1. `Breadcrumbs`
2. industry hero
3. industry needs and direct answer
4. verified installation context
5. relevant services
6. equipment/technology categories
7. deployment process
8. operational considerations
9. proof when approved
10. FAQs
11. commercial CTA

Do not state industry experience or customer outcomes without verified evidence.

---

## 77. `TechnologyTemplate` Composition

1. `Breadcrumbs`
2. technology/category hero
3. direct definition and installation context
4. verified supported work
5. vehicle/equipment considerations
6. process and coordination
7. related services and industries
8. FAQs
9. commercial CTA

Named platforms require a verified relationship description. Compatibility must not imply authorization or partnership.

---

## 78. `ArticleTemplate` Composition

1. `Breadcrumbs`
2. `ArticleHero`
3. author/reviewer/last-reviewed information
4. direct answer
5. optional table of contents
6. full structured content
7. key takeaways
8. relevant FAQs
9. related content
10. intent-appropriate CTA
11. Article schema when eligible

### CTA rule

Candidate articles route to careers or relevant openings. Commercial articles route to verified services or project discussion. Do not use a universal CTA.

---

## 79. Conditional Rendering Rules

### Safe optional sections

A component may be omitted when its verified data is unavailable, such as:

- compensation panel;
- testimonials;
- case studies;
- partner logos;
- named technology;
- service areas;
- training; or
- statistics.

### Unsafe behavior

Do not:

- fill missing data with generic claims;
- display empty headings;
- generate placeholder cards;
- change a missing active job into an evergreen application;
- create empty location pages;
- render schema fields not shown visibly; or
- hide legally or operationally consequential information simply because the design lacks space.

---

## 80. Variant Governance

### Approved variant categories

- importance: primary, secondary, quiet;
- surface: default, subtle, contrast;
- width: content, wide, full;
- alignment: start, center where appropriate;
- state: default, active, closed, unavailable, error, success; and
- journey: recruitment, network, commercial.

### Rules

- Journey variants may affect visual emphasis but not mix form schemas or analytics.
- Do not accept arbitrary hex colors in component props.
- Do not accept arbitrary heading levels without validating hierarchy.
- Do not add a new variant for one isolated page before considering composition.
- Record new variants in the design system and component tests.

---

## 81. Responsive Behavior

### Global requirements

- Mobile-first source and style order.
- No essential horizontal overflow.
- Cards move from one column to approved multi-column layouts.
- Text measure remains readable.
- Buttons and fields remain comfortable to use.
- Sticky elements do not cover content.
- Tables wrap or scroll with clear affordance.
- Navigation maintains the same priority on mobile.
- Images crop safely.
- Long job titles and locations wrap without truncation.

### Priority mobile components

- Header and navigation;
- ActiveJobCard;
- JobHero;
- JobDetailsSummary;
- JobApplyPanel;
- ApplicationForm;
- InstallerNetworkForm;
- ContactRouter; and
- confirmation and error states.

---

## 82. Accessibility Requirements

Every component must define and test:

- semantic element;
- accessible name;
- heading behavior;
- keyboard behavior;
- focus visibility;
- focus movement when state changes;
- screen-reader state announcement;
- color-independent meaning;
- contrast;
- zoom/reflow behavior;
- reduced motion; and
- error recovery.

### Prohibited patterns

- clickable `<div>`;
- placeholder-only labels;
- color-only status;
- hover-only information;
- focus removal;
- automatic carousel motion without controls;
- inaccessible custom select;
- icon-only button without accessible name;
- skipped heading levels for appearance; and
- form success shown only by color or disappearing form.

---

## 83. Performance Requirements

### Server/static components

All content modules, cards, heroes, templates, metadata, schema, and link lists should render statically unless interaction proves otherwise.

### Client components allowed at launch

- MobileNavigation;
- Accordion;
- JobFilters when justified;
- ApplicationForm;
- InstallerNetworkForm;
- CommercialInquiryForm;
- ContactRouter when it uses interactive reveal;
- TurnstileField;
- RevealObserver (approved 2026-09-18, scroll reveal, renders no markup, about 1 KB, mounted once in the root layout; content stays visible without JavaScript or under reduced motion, and only opacity and transform animate);
- analytics/consent boundary; and
- any narrowly scoped progressive enhancement.

### Rules

- Do not import form libraries into pages without forms.
- Lazy-load noncritical third-party widgets.
- Avoid large animation packages.
- Avoid duplicate icon libraries.
- Do not ship all jobs/content as client JSON when static HTML and scoped data suffice.
- Measure bundle impact of every new client dependency.

---

## 84. Search and Crawl Requirements

- Primary content must exist in server-rendered HTML.
- Links must use real anchors.
- Accordion content should remain in HTML.
- Headings must reflect page hierarchy.
- Breadcrumb UI and schema must agree.
- Job cards link to canonical job URLs.
- Templates must not generate duplicate titles or canonicals.
- Filter states remain controlled and normally noindex.
- Closed job components must not leave active schema.
- Related content must exclude drafts and broken links.

---

## 85. Component Analytics Matrix

| Component | Event | Trigger |
|---|---|---|
| `Header`/`LinkButton` | `careers_cta_click` | Approved careers pathway selected |
| `ActiveJobList` | `job_list_view` | Active list meaningfully viewed according to plan |
| `ActiveJobCard`/job link | Standard navigation or approved card event | Job detail selected |
| `JobDetailTemplate` | `job_view` | Approved job detail viewed |
| `JobApplyPanel` | `apply_click` | Apply action selected |
| `ApplicationForm` | `application_start` | First meaningful interaction |
| `ApplicationForm` | `application_step_complete` | Valid step advances |
| `ApplicationForm` | `application_error` | Controlled user-facing error |
| `ApplicationConfirmation` | `application_submit` | Trusted backend acceptance only |
| `InstallerNetworkForm` | `installer_network_start` | First meaningful interaction |
| `NetworkConfirmation` | `installer_network_submit` | Trusted registration acceptance only |
| `CommercialContactPanel` | `commercial_cta_click` | Project CTA selected |
| `CommercialInquiryForm` | `commercial_form_start` | First meaningful interaction |
| `CommercialInquiryForm` | `commercial_form_error` | Controlled error |
| `CommercialConfirmation` | `commercial_form_submit` | Trusted inquiry acceptance only |

Component analytics props must not accept personal or free-text values.

---

## 86. Component Data Boundaries

### Public data

Safe when verified:

- page IDs;
- content IDs;
- job IDs not linked publicly to a person;
- role and market keys;
- approved public job facts;
- approved business identity;
- public service and resource content;
- CTA identifiers; and
- canonical URLs.

### Private data

Must not enter general components, analytics, URLs, or static output:

- applicant records;
- form answers;
- resumes;
- candidate/contact IDs;
- customer project details;
- ATS/CRM credentials;
- webhook secrets;
- private internal notes; and
- unpublished business records.

Forms may hold user-entered data transiently for submission, but must not pass it to unrelated components or logs.

---

## 87. Error and Empty States

Each collection or interactive component must define:

- loading only when actual async behavior exists;
- empty;
- invalid data;
- unavailable dependency;
- permission or blocked state when applicable;
- successful completion; and
- retry behavior.

### User-facing principles

- Explain what happened.
- State what the user can do.
- Preserve valid input when safe.
- Never expose stack traces or vendor errors.
- Never show success after an unconfirmed request.
- Keep alternative contact information verified.

---

## 88. Loading States

Most page content is static and should not show skeleton loaders.

Use a loading state only for:

- form submission;
- Turnstile initialization;
- an approved external ATS transition;
- client-side filtering on a genuinely large collection; or
- a future dynamic integration.

### Rules

- Preserve control label during loading.
- Announce status.
- Avoid indefinite spinner without explanation.
- Do not block reading content while analytics or a third-party script loads.
- Use progressive enhancement when a dependency is optional.

---

## 89. Component Testing Matrix

| Component class | Unit/component tests | Accessibility tests | Visual tests | End-to-end |
|---|---:|---:|---:|---:|
| UI primitives | Yes | Yes | Yes | Selective |
| Navigation | Yes | Yes | Yes | Yes |
| Job cards/list | Yes | Yes | Yes | Yes |
| Job filters | Yes | Yes | Yes | Yes |
| Job detail modules | Yes | Yes | Yes | Yes |
| Forms | Yes | Yes | Yes | Yes |
| Confirmation states | Yes | Yes | Yes | Yes |
| Commercial cards | Yes | Yes | Yes | Selective |
| FAQ/accordion | Yes | Yes | Yes | Selective |
| Schema | Yes | Not visual | Not applicable | Output validation |
| Templates | Selective | Yes | Yes | Yes |

---

## 90. Primitive Test Requirements

### Button and link

- correct element;
- accessible name;
- disabled/loading behavior;
- keyboard focus;
- external link safety;
- correct event without duplicate navigation; and
- variant contrast.

### Accordion

- initial state;
- keyboard operation;
- `aria-expanded`;
- panel association;
- multiple/single-open rule;
- reduced motion; and
- content presence in output.

### Form fields

- label association;
- description/error association;
- required state;
- invalid state;
- autocomplete/input mode;
- keyboard and zoom; and
- no analytics leakage.

---

## 91. Recruitment Component Tests

- active job card never accepts closed record;
- closed job hides apply action;
- job details match controlled record;
- role card never implies an opening without one;
- market card does not label a market as office;
- empty jobs state uses network language;
- network panel contains required disclosure;
- application event fires after backend success only;
- application and network confirmations remain distinct;
- sensitive values do not enter event payloads; and
- mobile sticky CTA does not cover controls.

---

## 92. Commercial Component Tests

- commercial CTA remains secondary on mixed-intent pages;
- commercial form uses its own schema and endpoint;
- candidate fields do not appear;
- service/technology card rejects unverified record in published selection;
- partnership labels match controlled relationship type;
- location card uses verified commercial location relationship; and
- commercial confirmation does not promise quote or scheduling.

---

## 93. Story and Preview Fixtures

If a component preview environment is adopted, create synthetic fixtures for:

- shortest and longest approved titles;
- one active job;
- one closed job;
- no active jobs;
- many jobs with filters;
- missing optional job data;
- long market name;
- form validation errors;
- backend failure;
- slow submission;
- network disclosure;
- commercial route; and
- reduced-motion/mobile states.

Do not use real applicant or customer data in fixtures or screenshots.

Storybook or another preview system is not required at launch. Add it only if component count and review workflow justify its bundle, maintenance, and deployment cost.

---

## 94. Component Documentation Standard

Each nontrivial component should document:

- purpose;
- owner/domain;
- server or client boundary;
- props and controlled enums;
- required and optional data;
- states;
- accessibility behavior;
- analytics behavior;
- SEO/schema implications;
- examples or tests;
- prohibited use; and
- launch status.

Simple internal layout components do not need long prose when types and tests make the contract clear.

---

## 95. Dependency Policy

Before adding a component library or package, evaluate:

- actual components needed;
- accessibility quality;
- server/static compatibility;
- client bundle impact;
- styling integration;
- maintenance history;
- licensing;
- dependency tree;
- security posture;
- ability to remove; and
- whether native HTML or a small local component is sufficient.

### Launch recommendation

Use project-owned components and native controls for the initial system. Add a headless UI package only when it materially improves a complex accessible interaction and passes static-export and bundle review.

---

## 96. Avoided Components at Launch

Do not build these without a verified need:

- universal page builder;
- mega menu;
- autoplay hero carousel;
- chat widget;
- site-wide modal lead capture;
- exit-intent popup;
- custom search engine;
- animated statistics counter;
- map with many client-side markers;
- testimonial slider;
- client portal;
- user authentication;
- dynamic personalization;
- complex comparison configurator;
- third-party review carousel; and
- job recommendation algorithm.

These may add distraction, performance cost, privacy risk, or maintenance without improving qualified installer recruitment.

---

## 97. Launch Component Set

### Global

- PageShell
- SkipLink
- Header
- MainNavigation
- MobileNavigation
- CareersSubnav
- Breadcrumbs
- Footer
- Container
- Section
- core UI primitives

### Recruitment

- HomeHero
- CareersHero
- JobHero
- RoleHero
- CareersPathwayCards
- RoleCard
- ActiveJobList
- ActiveJobCard
- JobsEmptyState
- JobStatusBadge
- JobDetailsSummary
- JobResponsibilities
- JobRequirements
- ToolsVehicleTravelPanel
- JobApplyPanel
- JobProcessPanel
- ClosedJobNotice
- InstallerFitSummary
- InstallerNetworkPanel
- AssignmentProcessSteps
- RequirementsChecklist
- FaqGroup with candidate-specific data

### Forms, depending on platform decision

- ApplicationForm or approved ATS transition
- InstallerNetworkForm
- ContactRouter
- form primitives
- TurnstileField
- confirmation components

### Commercial

- CommercialHero
- ServiceCard
- CommercialContactPanel
- ProjectFitChecklist
- FaqGroup with commercial-specific data
- CommercialInquiryForm when approved

### Content and search

- AnswerBlock
- FaqGroup
- RelatedContent
- AuthorReviewByline
- AspectImage
- metadata utilities
- schema components
- analytics utilities

---

## 98. Phase 2 Component Set

Build when content and operations justify:

- JobFilters;
- RecruitingMarketCard and template;
- IndustryCard and template;
- TechnologyCard and template;
- ServiceAreaCard and template;
- SolutionCard and template;
- ArticleTemplate enhancements;
- TableOfContents;
- ComparisonTable variants;
- CaseStudyCard;
- approved proof modules;
- secure file upload;
- referral form;
- content preview environment; and
- advanced analytics diagnostics.

Phase 2 does not mean automatically approved. Each item still requires a page or business need.

---

## 99. Component Build Sequence

### Phase 1: Foundations

1. Type conventions.
2. Container and Section.
3. Button and LinkButton.
4. Card, Badge, Icon, StatusMessage.
5. AspectImage and media behavior.
6. SkipLink, Header, navigation, Breadcrumbs, Footer.

### Phase 2: Recruitment discovery

1. HomeHero and CareersHero.
2. CareersPathwayCards.
3. RoleCard.
4. ActiveJobCard and ActiveJobList.
5. JobsEmptyState.
6. requirements and process components.
7. candidate FAQ and related content.

### Phase 3: Job conversion

1. JobHero.
2. JobDetailsSummary.
3. responsibilities and requirements.
4. practical terms panels.
5. JobApplyPanel.
6. ClosedJobNotice.
7. job schema.
8. application or ATS route.

### Phase 4: Network and forms

1. form primitives;
2. InstallerNetworkPanel;
3. network form;
4. contact router;
5. confirmation states;
6. Turnstile integration; and
7. analytics confirmation events.

### Phase 5: Commercial

1. CommercialHero;
2. ServiceCard;
3. commercial process and fit;
4. CommercialContactPanel;
5. commercial FAQ; and
6. inquiry form.

### Phase 6: Authority and expansion

1. ArticleTemplate;
2. author/reviewer byline;
3. table of contents;
4. industry, technology, and service-area components; and
5. approved proof modules.

---

## 100. Component Acceptance Checklist

For every new component:

- [ ] Real approved page or feature requires it.
- [ ] Purpose is distinct from an existing component.
- [ ] Server/client boundary is minimal and justified.
- [ ] Props are typed.
- [ ] Controlled values use enums or validated records.
- [ ] Business facts are not hard-coded.
- [ ] Default, long-content, empty, error, and unavailable states are considered.
- [ ] Semantic element is correct.
- [ ] Keyboard and focus behavior are defined.
- [ ] Screen-reader state is defined.
- [ ] Contrast and reflow are tested.
- [ ] Mobile behavior is tested.
- [ ] Analytics behavior matches the event contract.
- [ ] No PII can enter analytics props.
- [ ] Search/schema implications are reviewed.
- [ ] Static export succeeds.
- [ ] Component tests exist at the appropriate level.
- [ ] Visual regression is reviewed.
- [ ] Documentation and inventory status are updated.

---

## 101. Page Template Acceptance Checklist

- [ ] Page family has one primary audience and intent.
- [ ] Hero and CTA match that intent.
- [ ] Recruitment/commercial priority is correct.
- [ ] Content sequence follows `07-site-architecture.md`.
- [ ] All required modules exist.
- [ ] Optional modules disappear safely when data is unavailable.
- [ ] Unique content is required; template does not generate filler.
- [ ] Breadcrumbs and canonical hierarchy agree.
- [ ] Metadata and schema use the same data.
- [ ] Internal links are curated and valid.
- [ ] Indexation behavior is explicit.
- [ ] Mobile layout and navigation work.
- [ ] Accessibility review passes.
- [ ] Performance budget passes.
- [ ] Analytics events are mapped.
- [ ] Static output contains the primary content.

---

## 102. Open Decisions

1. What approved visual direction will `21-design-system.md` establish?
2. Which launch pages are confirmed?
3. Which active jobs and recruiting markets exist at launch?
4. Will the application be onsite, embedded, or externally hosted?
5. Will installer-network registration launch immediately?
6. Will candidate referrals have a public form?
7. Which commercial pages launch?
8. Which services, industries, technologies, and locations are verified?
9. Which form library, if any, is justified?
10. Which validation library will be used?
11. Will a headless UI package be used for any complex interaction?
12. Is JobFilters justified by the initial opening count?
13. Will a mobile sticky job CTA be used?
14. Will Storybook or another component preview tool be used?
15. Which icon system is approved?
16. What image component strategy will be used for static export?
17. Will Cloudflare Turnstile appear on all public forms?
18. Which testimonials, case studies, logos, or proof are approved?
19. Which analytics/consent provider initializes in `AnalyticsProvider`?
20. Who approves new components and variants?

Unresolved choices must not lead to empty abstractions, fake data, or production placeholders.

---

## 103. Definition of Done

The component inventory is implemented when:

- every approved launch page uses a documented template or deliberate composition;
- global layout and navigation preserve recruitment priority;
- active-job, installer-network, referral, and commercial journeys use distinct components;
- components receive validated typed data rather than hard-coded business facts;
- content components render primary information statically;
- client components are limited to necessary interactions;
- active job and closed job states behave correctly;
- installer-network language never implies an active application;
- forms use separate schemas, endpoints, confirmations, and events;
- submission events require trusted success;
- no PII can enter analytics through component props;
- visible content and JSON-LD share validated sources;
- components meet responsive and WCAG 2.2 AA requirements;
- required component, accessibility, visual, and end-to-end tests pass;
- static export and Cloudflare preview succeed;
- the component system does not require generic filler or duplicate pages;
- design tokens and approved variants are documented in `21-design-system.md`; and
- future inventory items remain unbuilt until a verified requirement exists.

---

## 104. Related Project Documents

- `00-project-overview.md`
- `01-business-source-of-truth.md`
- `03-audience-personas.md`
- `06-search-intent-map.md`
- `07-site-architecture.md`
- `08-url-strategy.md`
- `09-content-strategy.md`
- `10-on-page-seo-standards.md`
- `12-aeo-geo-llm-optimization.md`
- `13-schema-markup-plan.md`
- `14-conversion-strategy.md`
- `15-analytics-and-measurement.md`
- `16-technical-architecture.md`
- `17-cloudflare-deployment.md`
- `18-github-workflow.md`
- `19-claude-project-instructions.md`
- `21-design-system.md`
- `22-image-strategy.md`
- `23-accessibility-standards.md`
- `24-performance-budget.md`
- `25-quality-assurance-checklist.md`
- `30-job-content-schema-specification.md`

The site architecture defines page families. This document defines their reusable building blocks. The design system will define how those components look and behave visually.

---

## 104a. Visual variants added, September 18, 2026 (SB red identity accent)

See `21-design-system.md` section 27b for rules and contrast.

- **Header:** red SVG logo `img` replaces the text wordmark on the light row; thin red top border (decorative). Navy utility bar unchanged. Primary CTA stays `#00688A`.
- **NavLink:** active underline is SB red on light surfaces only, with `aria-current`.
- **Footer:** thin red top border (decorative).
- **Card:** optional `accent` prop, `"none"` (default) or `"red"`. Red adds a decorative top rule on `tone="light"` only and is ignored on dark cards. Currently unused by any page.
- **RecruitingBanner:** left rail changes from amber to SB red. CTA remains secondary. Superseded 2026-09-18: now a dark two-column feature block with eyebrow, highlights, primary CTA, secondary link, disclosure panel and optional decorative image (see docs/21 section 27a).
- **CtaButton, CtaPair, FinalCta, MobileNavigation, ProofMetrics, CardGrid:** no change. ProofMetrics stays empty-safe.

## 105. Maintenance Standard

Update this inventory when:

### Approved override, September 18, 2026: Sprint 1 homepage and component set

Approved during Sprint 1 planning, recorded here per the plan's documentation-debt requirement, dated 2026-09-18.

`HomeTemplate` composition is reordered to commercial-first: `HomeHero`, `AnswerBlock`, `WhatWeInstallGrid`, `WhoWeServeGrid` (added 2026-09-18), `WhyChooseUsSplit`, `DeploymentProcessSteps`, `LargeRolloutCallout`, `ContentSection id="commercial"` (CTA emphasis `primary`), `RecruitingBanner`, `ProofMetrics`, `TrustSection`, `FaqGroup`, `FinalCta`.

New components added to the inventory:

- `Card` (`src/components/ui/Card.tsx`) — reusable container, tone `light | dark`, padding `compact | default | spacious`, optional hover/elevation, no business-specific markup.
- `CardGrid` (`src/components/layout/CardGrid.tsx`) — layout-only responsive grid, no card copy or CTA logic.
- `WhatWeInstallGrid` — sourced from `business.serviceTypes`, never a hardcoded list. Each card holds the service title (h3), a descriptive paragraph, an optional visible "Use cases" unordered list, and an optional qualification note (AOBRD), all from `homepageContent.whatWeInstall.cards`. Cards are equal height with a decorative image on top and are not links.
- `WhoWeServeGrid` — eyebrow, heading, intro, three vehicle-type cards (fleet, commercial, construction vehicles), and a closing support paragraph with one commercial CTA. Each card has a vehicle-type h3 title, a unique explanatory paragraph, a visible "Use cases" label with a six-item unordered list, an image with intrinsic width and height and alt text describing only what the photo shows, and an optional internal link (label, href, and optional existing analytics event; no new event names). Card links and the section CTA are commercial only: they route to approved commercial routes (`/services/`, `/contact/`) and never to recruitment or Installer Network routes, and the block carries no employment, contractor, or active-job language. All content is server-rendered; all copy from `homepageContent.whoWeServe`.
- `WhyChooseUsSplit` — compact proof strip of four confirmed facts (in business since 2011, every installation photo documented, fleet/commercial/construction vehicles, independent contractor technicians), as a list of short labels with a decorative red rule. It carries no benefit headings, which live only in `TrustSection`, so each benefit heading appears once on the homepage. The h2 is visually hidden to name the strip. Server-rendered; all copy from `homepageContent.whyChooseUs`.
- `TrustSection` — homepage "Why Ultimate Fleet GPS" block: h2, intro, decorative image in a two-column intro (image left, text first in the DOM), four compact benefit cards (h3 title, paragraph), an h3 fleet-manager list, a commercial CTA panel (quote CTA plus a descriptive services link), and one visually secondary Installer Network link below a divider. The quote CTA and the technician link are separate journeys with separate routes and events. Server-rendered; all copy from `homepageContent.trust`; no FAQ content is repeated. `ContentSection` remains the generic heading, paragraph, and CTA block used by the commercial section.
- `DeploymentProcessSteps` — ordered process, no guaranteed response times.
- `LargeRolloutCallout` — dark-navy tone, "one vehicle or an entire fleet" framing.
- `RecruitingBanner` (`src/components/careers/RecruitingBanner.tsx`) — visually distinct dark two-column recruitment feature block (primary CTA, in-flow disclosure panel, optional decorative image, gradient fallback).
- `ProofMetrics` (`src/components/content/ProofMetrics.tsx`) — **placeholder-slot convention**: this component returns `null` and renders nothing while its content object is empty. No empty cards, "coming soon" badges, zero-value metrics, placeholder logos, fake testimonial shells, or star ratings are ever rendered as a stand-in for missing stakeholder content. The same convention applies to any future case-study or testimonial component: build the structure, never expose empty/placeholder content publicly.
- `Breadcrumbs` (`src/components/layout/Breadcrumbs.tsx`) — paired with `src/lib/schema/breadcrumbs.ts` for `BreadcrumbList` structured data.
- `CommercialInquiryForm` and `InstallerNetworkForm` (`src/components/forms/`) — never render on the same page/section, never share a submission handler.

- a page family is added or removed;
- a component is created, renamed, split, merged, or deprecated;
- a form or conversion journey changes;
- job lifecycle states change;
- design variants change;
- analytics events change;
- schema ownership changes;
- a new client-side dependency is added;
- accessibility behavior changes;
- performance findings require a different component boundary;
- a production incident reveals a missing state; or
- repeated one-off implementations reveal a justified reusable pattern.

Remove obsolete inventory items rather than preserving them indefinitely. Record material component-architecture changes in Git and the project decision log.
