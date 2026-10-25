# Brief: 404 page (`src/app/not-found.tsx`)

**Status:** Built (uncommitted), see decision 0012
**Batch:** Batch 1, item 1 of the Outstanding Pages Build Plan
**Decision record:** 0012
**Page type:** Utility page. Not a search page.

## SEO pipeline note

`/seo-automation-pipeline` was run light and folded into Prompt 01. This is a utility page: no keyword targeting, no cluster or intent mapping, no schema, noindex. The pipeline gate passed with "no keyword targeting by design".

## Required by

- `docs/26-launch-checklist.md`: "404 route is useful and links to Careers and Contact."
- `docs/25-quality-assurance-checklist.md`: "404 page is useful and provides Careers and Contact paths."
- `docs/16-technical-architecture.md`: lists `not-found.tsx` at the app root.

## Approved copy (Option B)

- Label: `Error 404` (visible text label, not a heading)
- H1: `We can't find that page`
- Body: `The link may be out of date or the address may have a typo. If you're looking for installer work or a fleet project, start here.`
- Primary CTA: `View Careers` -> `/careers/`
- Secondary CTA: `Discuss a Project` -> `/contact/` (use `Contact Us` if Gate 1 shows the `/contact/` CTA wording differs, and report it)
- Tertiary text link: `Back to the homepage` -> `/`
- No link to any service page.

## Layout

- `not-found.tsx` at the app root, rendered inside the root layout (no second header, nav, or footer).
- Single column, 720px max reading width, left-aligned. Spacing 48px 20px mobile, 80px 24px desktop.
- Order: label, H1, body, button row (primary then secondary), tertiary link.
- Existing design tokens only. Buttons at least 44px tall, stacked on mobile, inline on desktop. No motion.
- Server component, no `"use client"`. Crawlable anchors through `next/link`.

## Metadata and SEO

- Title `Page not found` (the layout title template adds the brand suffix), short description, `robots: { index: false, follow: false }`.
- No canonical, no JSON-LD, no breadcrumbs, no Open Graph image work.
- Must not appear in the sitemap.
- No analytics events unless an existing CTA event helper is reused with `cta_location: "404"`, no URL path, no PII.

## Accessibility

- One H1. No auto-focus. Descriptive link text. Visible focus from existing tokens.

## Out of scope

New route slugs, redirects, new dependencies, and edits to `globals.css`, Tailwind config, `next.config.ts`, `public/_redirects`, `public/_headers`.
