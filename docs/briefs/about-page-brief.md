# Brief: About page (`/about/`) - lean launch version

**Status:** Built in the working tree (decision 0016). Awaiting owner review. Nothing is committed.
**Batch:** Batch 2, item 1 of the Outstanding Pages Build Plan
**Scope decision:** Project owner approved a short, factual About page for launch on 2026-10-26. Leadership, history, values, and proof are deliberately left out until approved facts exist (see "Left out on purpose").
**Page type:** Core page. Index. Commercial-first. Route folder `src/app/about/` currently holds only a `.gitkeep`.
**Governing sources:** `docs/01-business-source-of-truth.md` (sections 4, 4.2, 5.3, 7.1, 7.2, 8.2, 9.1, 11.1, 12.1, 14, 16.1, 17.1, 22, 25, 26), `docs/_claims-inventory.md`, `docs/07-site-architecture.md` section 29, `docs/13-schema-markup-plan.md` section 9, `CLAUDE.md` sections 3, 3.1, 3.2, 4, 5, 8

## SEO pipeline note

`/seo-automation-pipeline` was run as the gate and folded into Prompt 01 (light).

- No Keyword Planner export exists in the repo, so keyword fit and volume are **Unverified**. No volume, difficulty, or traffic figure is claimed.
- This is a brand and entity page. Its job is navigational ("about Ultimate Fleet GPS"), trust, and routing to the commercial and recruitment pages. It is not targeted at a commercial keyword and does not compete with `/services/` pages.
- Thin-volume rule applies: proceed on topical completeness, a self-contained answer block, and internal links, not on volume.
- Cannibalization check: the homepage has an "About Ultimate Fleet GPS" answer block. This page reuses its approved facts but does not copy its paragraphs. It adds the services-scope list, the on-site model, and routing. Homepage copy stays unchanged.
- Noise categories: none observed (no data). No tokenizer artifacts to note.
- Strategic read: build new, lean. Revisit after a Keyword Planner export.

## Page definition

| Item | Value |
| --- | --- |
| Route | `/about/` |
| Parent | Home. Linked from the footer Company column. Not added to the primary nav |
| Audience | Fleet operators and fleet managers first. Installers second |
| Primary intent | Understand who Ultimate Fleet GPS is and what it does |
| Primary CTA | Commercial: `Request an Installation Quote` -> `/contact/` (existing label and `cta_quote_click` event) |
| Secondary CTA | Recruitment: `Learn About Installer Careers` -> `/careers/` (existing label and `cta_careers_click` event) |
| H1 | `About Ultimate Fleet GPS` |
| Meta title | `About Us \| Mobile Fleet Installation` (layout appends the brand suffix) |
| Meta description | `Mobile electronic equipment installation for fleet and construction vehicles, delivered at your location nationwide. In business since 2011.` |
| Canonical | `/about/` |
| Indexation | Index, in `sitemap.ts` |
| Schema | `AboutPage` + `BreadcrumbList`, organization reference. See "Schema" |

## Content outline

Target length: about 250 to 320 visible words. Every sentence traces to a source. Wording marked "verbatim" is approved text and is not reworded.

### 1. Hero (dark, photo background)

- Eyebrow: `ABOUT US`
- H1: `About Ultimate Fleet GPS`
- Lead: `Ultimate Fleet GPS provides mobile electronic equipment installation services for fleet and construction vehicles.` (verbatim, `docs/01` section 25)
- Support line (red rule): `In business since 2011, nationwide.` (`docs/01` sections 4 and 25, 8.2)
- Primary CTA: `Request an Installation Quote` -> `/contact/`

### 2. Who we are (answer block, text only)

- H2: `Mobile installation, delivered where your vehicles are`
- Paragraph 1: `Ultimate Fleet GPS has been in business since 2011. Technicians travel to the customer's location. There is no walk-in facility.` (`docs/01` sections 25 "Mobile-only model" and 5.3, verbatim)
- Paragraph 2: `Nationwide mobile installation service, delivered at the customer's location.` (verbatim, section 25 "Service area"). Follow with: `Projects range from one vehicle to an entire fleet.` (`docs/01` section 11.1, claims row 15). Kept in separate sentences so reach and capacity are not derived from each other.

### 3. What we install (subtle, three-column cards)

- H2: `What we install`
- Intro: `Ultimate Fleet GPS installs GPS tracking, ELD, AOBRD, TPMS, and fleet management equipment on fleet, commercial, and construction vehicles.` (verbatim, section 25 "Equipment and service scope")
- Cards: the six shared approved equipment cards rendered by `InstallCategoryCard` from `business.serviceTypes`, exactly as `/quality-safety/` does, so titles, copy, images, and links cannot drift. No new service claims.

### 4. How we work (default, two columns)

- H2: `How we work`
- Left column, short text: technicians are engaged as independent contractors (`docs/01` section 7.2, general terms only), and `We work with the platforms fleets already run on, including Samsara, Geotab, Verizon Connect, and others our technicians already know.` (verbatim, section 14, experience only)
- Right column, callout with red left border: `Every installation is photo documented, and you'll receive that documentation automatically.` (verbatim, section 17.1)
- Text links: `See our process` -> `/our-process/`, `View coverage` -> `/coverage/`, `Industries we support` -> `/industries/`

### 5. Next steps (dark band, two pathways)

- H2: `Choose the right path`
- Fleet operators: `Tell us about your equipment, vehicles, and project locations to request an installation quote.` -> `/contact/` (commercial journey, primary button)
- Installers: `Learn about current installer openings and the Installer Network.` -> `/careers/` (recruitment journey, own button). Not called "Apply". The two journeys keep separate CTA objects and analytics events (`CLAUDE.md` section 4).

## Design and layout (matches `/our-process/` and `/quality-safety/`)

| Element | Specification |
| --- | --- |
| Skeleton | `JsonLd` -> `Breadcrumbs` (`Home / About`) -> hero -> sections 2 to 5. The shared `TrustStrip` is not used: it carries a claim flagged for review (claims row 34) |
| Rhythm | Hero dark -> section 2 default -> section 3 subtle -> section 4 default -> section 5 dark. Alternating tones, no repeated card grid |
| Hero | Same pattern as sibling pages: `data-tone="dark"`, decorative background photo (empty alt, `aria-hidden`), black overlay `bg-black/55` only, single text column max 720px, eyebrow with red rule, `--text-h1`. Media scrolls with the section, never pinned |
| Hero image | **Decision needed.** Default: reuse the approved decorative hero background already used on `/our-process/` (`processHeroBackground`). Alternative: flat navy surface with no photo. No new image, no placeholder, no stock people |
| Sections | `Section` component, `width="site"`, `h2Class` headings, `aria-labelledby` per section, `labelledBy` ids unique to the page |
| Section 2 | Text only, reading measure, no image |
| Section 3 | `CardGrid columns={3}` of link cards, stacked on mobile |
| Section 4 | Two-column grid from `md`, single column on mobile. Callout uses the existing red left border treatment from the `/quality-safety/` hero |
| Section 5 | `data-tone="dark"`, flat navy, no photo, no video. Two dark `Card` pathways side by side from `md`, stacked on mobile. Commercial uses the primary button, careers uses the secondary (white) button so both stay legible on navy |
| Tokens | CSS variables and Tailwind theme values only. No hex literals |
| Components | Server components only. No `"use client"`, no new client JavaScript |
| Mobile | 20px side gutters, 44px minimum tap targets, CTAs full width below 640px |
| Accessibility | One `h1`, ordered headings, visible focus (existing `data-tone` focus rules), descriptive link text, no color-only meaning, decorative images hidden from assistive tech |
| Performance | Hero image `loading="eager"` with `fetchPriority="high"` as on sibling pages. No new assets, so no new weight |

## Schema

- `AboutPage` and `BreadcrumbList`, referencing the shared `Organization` by `@id` (`docs/13` section 9). Implemented by adding an optional `type` argument to `webPageSchema` (default `WebPage`, so existing callers are unchanged).
- Not emitted: `FAQPage`, `Person`, `LocalBusiness`, `Review`, `AggregateRating`, `foundingDate`, `legalName`, `areaServed`, `JobPosting`. Schema must match visible content and there is no approved source for these.

## Left out on purpose

| Planned section (`docs/07` section 29) | Why it is left out |
| --- | --- |
| Leadership | Founder, owner, and leadership are "Unknown, do not publish" (`docs/01` section 4) |
| Verified history beyond 2011 | No approved milestones or origin story |
| Values expressed through evidence | No approved values or supporting evidence |
| Proof and milestones | No approved statistics, customers, or counts (`docs/01` section 22). Credentials, insurance, reviews, and ratings are a client decision not to publish (section 16.1) |
| Phoenix address in the page body | About is not an approved address surface (`docs/01` section 5.3). The address still appears in the footer |
| Business hours | Time zone unconfirmed (`docs/01` section 5.4). They appear in the footer |
| Legal entity name or "LLC" | Public name never carries "LLC" (`docs/01` section 4.2) |

Add these back as soon as approved facts arrive. Each one is a separate section, so adding it does not require restructuring the page.

## Files to change at build

| File | Change |
| --- | --- |
| `src/data/site/about-content.ts` | New. All copy, CTAs, and metadata, with a source comment per claim |
| `src/app/about/page.tsx` | New. Server component |
| `src/lib/schema/webpage.ts` | Additive: optional `type` argument |
| `src/app/sitemap.ts` | Add `/about/` |
| `src/data/navigation/site-navigation.ts` | Add `About` as the first item in the footer Company column, and update the "no About route" comment |
| `src/app/about/.gitkeep` | Delete |
| `docs/decisions/0016-lean-about-page.md` | New decision record |
| `docs/page-audit.md`, `docs/_claims-inventory.md` | Mark About built. Add claims row 60 for the About wording |

No homepage change. No new images. No new dependencies.

## Gates before it is called done

- [ ] Every sentence traces to a `docs/01` section or `_claims-inventory.md` row
- [ ] No em dashes, no "LLC", no street address in the body, no statistic, credential, review, or guarantee
- [ ] "Independent contractor" appears only in general terms, with no hours, pay, or work guarantees
- [ ] Reach and capacity appear in separate sentences
- [ ] `npm run typecheck`, `npm run lint`, `npm run validate:links`, and `npm run build` pass, with real output reported
- [ ] `/about/` is in the sitemap and linked from the footer
- [ ] Rendered check at mobile and desktop widths
- [ ] Reviewed by the project owner before any commit

## Open items

- Keyword fit and intent: **Unverified**, no Keyword Planner export.
- Hero image choice: reuse an existing approved photo, or flat navy.
- The `docs/01` section 25 wording still says "final publication requires company review." The owner's launch approval of the lean version is recorded in decision 0016 at build.
