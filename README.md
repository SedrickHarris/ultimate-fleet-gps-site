# Ultimate Fleet GPS Website

Website implementation and Installer Network recruitment project for **Ultimate Fleet GPS**,
a mobile fleet-technology installation company serving commercial, fleet, and construction vehicles
nationwide.

The site has two separate journeys:

- **Commercial:** operators of commercial, fleet, and construction vehicles learn about installation
  services and request a quote.
- **Installer Network:** independent contractor technicians learn about the network and register
  interest. The network is a registration pathway for future opportunities, offered alongside current installer openings, is kept separate from commercial inquiries
  in routes, forms, data, and analytics events, and guarantees no contact, interview, employment,
  contract, assignment, schedule, work volume, or pay.

## Current implementation status

This is an active implementation repository. It contains application code alongside the strategy
and specification documents. Verified from the repository contents:

| Area | What exists |
| --- | --- |
| Homepage | `src/app/page.tsx`, with homepage content, metadata, and schema modules |
| Services | Services hub and five service pages: fleet telematics, GPS tracking, ELD, dashcam and camera, fleet rollouts, rendered through one `ServicePageTemplate` |
| Industries | Industries hub and five industry pages |
| Careers | `/careers/` (recruitment landing page), `/careers/jobs/`, the opening page `/careers/mobile-gps-eld-aobrd-installation-technician/`, `/careers/apply/`, and `/careers/application-received/`, with typed job records in `src/data/jobs/` |
| Installer Network | `/careers/mobile-installation-technician/` (registration for future opportunities) and `/careers/installer-network-received/` |
| Supporting pages | Coverage, process, quality and safety, FAQ, resources hub and articles, case studies route, contact, thank-you, accessibility, privacy policy, and terms |
| Shared components | Layout, content, UI, form, hero, and schema components under `src/components/` |
| Structured content | Typed content and data modules under `src/data/` and `src/types/` |
| SEO and schema | Metadata helpers, JSON-LD builders for organization, web page, breadcrumbs, homepage, service pages, careers, articles, and the active opening (`JobPosting`, on its own page only), plus `sitemap.ts` and `robots.ts` |
| Forms | `CommercialInquiryForm`, `InstallerNetworkForm`, and `ApplicationForm`, posting to an external endpoint set by `NEXT_PUBLIC_FORMS_ENDPOINT`. The endpoint is the Worker in `workers/forms/`, which relays each form to its own GoHighLevel webhook (see `workers/forms/README.md`) |
| Styling and config | Tailwind CSS styles in `src/styles/`, plus Next.js, TypeScript, ESLint, and PostCSS configuration |
| Assets | Brand logos, homepage hero media, service and "why choose us" images, and icons under `public/` |
| Prompts | Research, build, QA, and SEO prompt files in `prompts/` |
| SEO automation | Node scripts in `seo-automation/scripts/` for route scanning, keyword CSV parsing, clustering, opportunity scoring, and a pipeline runner |
| Documentation | Numbered strategy and specification documents, decision records, and a QA record in `docs/` |

Not present or not verified from the repository:

- `scripts/validation/check-internal-links.mjs` is the only validation script (`npm run validate:links`). It is a static scan of literal internal paths and does not check anchors or template-string links. There is no test runner and no content, job, or schema validation script in `package.json`. The other `scripts/` folders are placeholders.
- `src/data/jobs/` holds one job record. Application submissions depend on the forms endpoint, which this repository cannot verify.
- No `functions/` directory, Wrangler configuration, `_headers`, or `_redirects` file is present.
  Cloudflare Pages deployment is specified in `docs/17-cloudflare-deployment.md`, but this README
  does not claim that deployment, Cloudflare configuration, analytics, or production publication is
  complete.
- Analytics event names are defined in `src/lib/analytics/events.ts`. Whether analytics is live is
  not verified here.

## Technology stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js (App Router), static export (`output: "export"` in `next.config.ts`) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Source control | GitHub |
| Hosting | Cloudflare Pages (target, see `docs/17-cloudflare-deployment.md`) |
| Trusted backend | Cloudflare Workers or Pages Functions where applicable. The static export contains no server routes, so form handling relies on an external trusted endpoint configured through `NEXT_PUBLIC_FORMS_ENDPOINT` |

Node version is pinned in `.nvmrc` (Node 22).

## Local development

Install dependencies with npm (`package-lock.json` is committed), then copy `.env.example` to
`.env.local`. Commands defined in `package.json`:

```bash
npm run dev         # start the local development server
npm run typecheck   # TypeScript check (tsc --noEmit)
npm run lint        # ESLint
npm run build       # production build (static export)
```

Run `typecheck`, `lint`, and `build` before treating a change as complete.

## Documentation

All planning and specification documents live in [`docs/`](docs/) and are numbered in reading order.

| Range | Topic |
| --- | --- |
| 00–03 | Project overview, business source of truth, audience personas |
| 04–06 | Competitor research, keyword research, search intent |
| 07–09 | Site architecture, URL strategy, content strategy |
| 10–13 | On-page SEO, local SEO, AEO/GEO, schema markup |
| 14–15 | Conversion strategy, analytics and measurement |
| 16–19 | Technical architecture, deployment, GitHub workflow, AI instructions |
| 20–24 | Component inventory, design system, images, accessibility, performance |
| 25–27 | Quality assurance, launch checklist, post-launch growth |
| 28–31 | Recruitment strategy, distribution, job schema, operations |

Unnumbered material in `docs/`: the claims inventory (`_claims-inventory.md`), stakeholder
confirmation questions, and the `decisions/`, `qa/`, `briefs/`, and `research/` folders.

Two documents govern the rest:

- [`docs/01-business-source-of-truth.md`](docs/01-business-source-of-truth.md) is the canonical
  record of verified business facts. Any conflict resolves in its favor.
- [`docs/18-github-workflow.md`](docs/18-github-workflow.md) defines branching, commits, review,
  and release rules for this repository.

[`CLAUDE.md`](CLAUDE.md) holds the operating instructions for Claude and Claude Code in this
repository. The project documents in `docs/` take priority over any tool or plugin guidance.

## Contributing

`main` is the default working branch and the production branch. Solo development is done
directly on `main`, and commits go to `main` when a task authorizes committing. Feature
branches and pull requests are optional. Use them only when collaboration, code review, or a
GitHub protection rule requires them.

Commit messages follow `type(scope): imperative summary`. Run `npm run typecheck`,
`npm run lint`, and `npm run build` before committing. Git authorization (commit, push, pull
request) is stated per task and is never assumed. See [`CLAUDE.md`](CLAUDE.md) and
[`docs/18-github-workflow.md`](docs/18-github-workflow.md) for the full standard.

## Secrets

No credentials belong in this repository. Environment variables are documented by name in
`.env.example` only. Real values live in Cloudflare and GitHub secret storage.
