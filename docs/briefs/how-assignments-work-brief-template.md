# Brief template: How Assignments Work (`/careers/how-assignments-work/`) - FILL-IN, NOT APPROVED

**Status:** Template only. Nothing here is approved copy. No page, component, or data file exists for this brief, and none may be built until every `[REQUIRED]` field is filled with stakeholder-approved facts.
**Batch:** Batch 2, item 2 of the Outstanding Pages Build Plan (`docs/page-audit.md` section 7)
**Page type:** Recruitment page. Launch. Index. Route folder `src/app/careers/how-assignments-work/` holds only a `.gitkeep`.
**Governing sources:** `docs/07-site-architecture.md` (`/careers/how-assignments-work/`, "Process and expectations"), `docs/28-recruitment-strategy.md`, `docs/01-business-source-of-truth.md` section 33, `CLAUDE.md` sections 3, 3.1, 4

## Risk note

This is the page most likely to produce guarantee language. `CLAUDE.md` section 4 prohibits guaranteed work, hours, or income, and unverified paid training or immediate start. Every sentence must describe a process, never a promise.

## How to use this template

1. The stakeholder fills each `[REQUIRED]` field, or says "omit".
2. Facts go into `docs/01-business-source-of-truth.md` first, with approval date.
3. Run `/seo-automation-pipeline` and fold its output into Prompt 01. Keyword fit is **Unverified**.
4. Then draft from approved facts only. Unapproved steps are dropped, not paraphrased from guesses.

## Blocking approvals

| # | Fact needed | Value | Approved by and date |
| --- | --- | --- | --- |
| 1 | Engagement structure for the current opening versus network registration (employee, contractor, other). Must not misstate classification | `[REQUIRED]` | `[REQUIRED]` |
| 2 | Stages from application to assignment, in order | `[REQUIRED]` | `[REQUIRED]` |
| 3 | How candidates are told about the outcome of each stage | `[REQUIRED]` | `[REQUIRED]` |
| 4 | How assignments are offered (notice, location, duration, travel) | `[REQUIRED or "omit"]` | `[REQUIRED]` |
| 5 | Schedule and availability expectations | `[REQUIRED or "omit"]` | `[REQUIRED]` |
| 6 | Pay process (how and when pay is handled). Starting rate wording is limited to the approved `$1,600 per week` starting rate in `docs/01` section 33 | `[REQUIRED or "omit"]` | `[REQUIRED]` |
| 7 | Onboarding and documentation requirements | `[REQUIRED or "omit"]` | `[REQUIRED]` |
| 8 | "What happens after I apply" and "how can I update my information" answers (the two gaps left by decision 0013) | `[REQUIRED]` | `[REQUIRED]` |

## Section plan

| Section | Source fact # | Include? |
| --- | --- | --- |
| Overview: active opening versus network registration | 1 | `[yes / no]` |
| Steps from application to assignment | 2, 3 | `[yes / no]` |
| How assignments are offered | 4 | `[yes / no]` |
| Schedule and availability | 5 | `[yes / no]` |
| Pay process | 6 | `[yes / no]` |
| Onboarding | 7 | `[yes / no]` |
| After you apply, and updating your information | 8 | `[yes / no]` |
| What this page does not promise | none | yes |
| Next steps (links to `/careers/`, the opening page, and network registration) | none | yes |

## Rules that apply

- Never state or imply guaranteed work, hours, income, interview, assignment, or employment. Registration guarantees nothing (`CLAUDE.md` section 4).
- "Apply" appears only for the genuine active opening and its path `/careers/apply/`. Network registration is never called an application.
- No employee benefits for contractors, no contractor status for employees, no "nationwide openings" claim beyond what `docs/01` section 33 approves.
- No em dashes in page copy (`CLAUDE.md` section 3.1).
- Do not repeat the same pay or availability wording from `/careers/` and the opening page in a new variant. Reuse approved wording from `careersHubPageContent`, so there is one source to keep in sync.
- No `JobPosting` schema on this page (`CLAUDE.md` section 5).
- When the page ships, the "what happens after I apply" gap in the `/careers/` FAQ should link here, and `/careers/installer-requirements/` should link here.
- Also required before launch: sitemap entry, nav link decision, `npm run validate:links`, typecheck, lint, build.

## Open items

- Keyword fit and intent: **Unverified**.
- Image slots: none approved.
