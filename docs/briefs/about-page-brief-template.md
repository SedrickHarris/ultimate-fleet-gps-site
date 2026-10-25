# Brief template: About page (`/about/`) - FILL-IN, NOT APPROVED

**Status:** Template only. Nothing here is approved copy. No page, component, or data file exists for this brief, and none may be built until every `[REQUIRED]` field is filled with stakeholder-approved facts.
**Batch:** Batch 1, item 2 of the Outstanding Pages Build Plan (`docs/page-audit.md` section 7)
**Page type:** Core page. Launch. Index. Route folder `src/app/about/` holds only a `.gitkeep`.
**Governing sources:** `docs/07-site-architecture.md` section 29, `docs/01-business-source-of-truth.md`, `CLAUDE.md` sections 3, 3.1, 3.2, 5

## How to use this template

1. The stakeholder fills each `[REQUIRED]` field below, or says "omit this section".
2. Every fact is recorded in `docs/01-business-source-of-truth.md` first, with the approval date. This brief only points to it.
3. Run `/seo-automation-pipeline` and fold its output into Prompt 01 (hard rule for every page build). Keyword fit is **Unverified** until a Keyword Planner export exists.
4. Copy is then drafted from approved facts only. A section with no approved fact is dropped, not padded.

## Blocking approvals

| # | Fact needed | Value | Approved by and date |
| --- | --- | --- | --- |
| 1 | Company description, one canonical sentence | `[REQUIRED]` | `[REQUIRED]` |
| 2 | Entity structure and where the legal entity name may appear (`CLAUDE.md` section 3.2) | `[REQUIRED]` | `[REQUIRED]` |
| 3 | Verified history (founding year, milestones) | `[REQUIRED or "omit"]` | `[REQUIRED]` |
| 4 | Leadership names and titles | `[REQUIRED or "omit"]` | `[REQUIRED]` |
| 5 | Operating model and installer and team model | `[REQUIRED]` | `[REQUIRED]` |
| 6 | Geographic model (must match `/coverage/` and `CLAUDE.md` section 5: the Phoenix address is a corporate office, not a walk-in facility) | `[REQUIRED]` | `[REQUIRED]` |
| 7 | Proof and milestones, each customer-permissioned and verifiable | `[REQUIRED or "omit"]` | `[REQUIRED]` |
| 8 | Values, each tied to a piece of evidence | `[REQUIRED or "omit"]` | `[REQUIRED]` |

## Section plan (from `docs/07` section 29)

| Section | Source fact # | Include? |
| --- | --- | --- |
| Canonical company description | 1 | `[yes / no]` |
| Verified history | 3 | `[yes / no]` |
| Leadership | 4 | `[yes / no]` |
| Operating model | 5 | `[yes / no]` |
| Commercial purpose | 5 | `[yes / no]` |
| Installer and team model | 5 | `[yes / no]` |
| Values expressed through evidence | 8 | `[yes / no]` |
| Geographic model | 6 | `[yes / no]` |
| Proof and milestones | 7 | `[yes / no]` |
| Careers and commercial pathways | none (links to `/careers/` and `/contact/`) | yes |

## Rules that apply

- No invented history, leadership, customers, certifications, statistics, or testimonials (`CLAUDE.md` section 3).
- No em dashes in page copy. Use a spaced hyphen (`CLAUDE.md` section 3.1).
- Public name is `Ultimate Fleet GPS`. The legal entity name stays out of page copy, metadata, and schema (`CLAUDE.md` section 3.2).
- Keep commercial and recruitment pathways separate (`CLAUDE.md` section 4). The closing pathway block links out and does not embed a form.
- Schema: `AboutPage` with an `Organization` reference, populated only from verified facts (`docs/07` line 1524).
- Overlays black only, section media scrolls with content (`CLAUDE.md` section 8).
- Also required before launch: sitemap entry, nav and footer link check, `npm run validate:links`, typecheck, lint, build.

## Open items

- Keyword fit and intent: **Unverified**, no Keyword Planner export.
- Image slots: none approved. Use no stock people photos that imply real staff.
