# Rename Report - Ultimate Fleet GPS

**Date:** 2026-10-25
**Scope:** Project, company, and repository rename to Ultimate Fleet GPS. Changes are in the working tree and are not committed. The rename note is `docs/decisions/0010-project-and-repository-rename.md`.

## 1. Summary

Most of the rename was applied earlier (the `01-business-source-of-truth.md` section 29 row dated 2026-10-07). The site already used "Ultimate Fleet GPS" in about 590 places, and `src/`, `README.md`, `CLAUDE.md`, `prompts/`, `.github/`, and `.claude/` had no old-name text. This pass handled what was left.

| Category | Files changed | Replacements |
| --- | --- | --- |
| A. Docs and notes (company name) | `docs/decisions/0003`, `0005`, `0007`, `docs/brand-assets/ultimate-fleet-gps-brand-guide.txt`, `docs/page-audit.md` | 7 |
| B. Config and metadata | `package.json` (`name` set to `ultimate-fleet-gps-site`) | 1 |
| C. Page and component copy | none (no old-name hits in `src/`) | 0 |
| Repository URL and slug references | `docs/00`, `01` (line 82), `16`, `17`, `18`, `19`, `20`, `21`, `22`, `26`, `28` | 21 lines |
| New note | `docs/decisions/0010-project-and-repository-rename.md` | 1 file added |
| D. Legal-entity contexts | none changed | 3 rows listed below |
| E. Identifiers | none changed | listed below |

The `package.json` has no `repository`, `homepage`, or `bugs` fields, so none were added. `.github/` contains only `ISSUE_TEMPLATE/` with no old-name or repo references. There is no `wrangler.toml`, no workflow files, and no CODEOWNERS file in the repo (the CODEOWNERS text in `docs/18` is an example in documentation).

## 2. Category D - legal-entity contexts (not edited, need your decision)

All three rows are in the verification log, `docs/01-business-source-of-truth.md` section 29. They are dated history records.

| File : line | Current text (abridged) | Decision needed |
| --- | --- | --- |
| `docs/01-business-source-of-truth.md:1188` | Row "Operating entity": the old name with "LLC" is the sole operating entity | Confirm the legal entity name and LLC status, and whether this row stays as history or gets a superseded marker |
| `docs/01-business-source-of-truth.md:1200` | Row "Public company name": the old name, with "LLC" never published | Same. It is a record of the 2026-09-10 instruction |
| `docs/01-business-source-of-truth.md:1210` | Row "Entity name in legal disclosures": public name stays the old name | Same. It is a record of the 2026-09-19 instruction |

Related, already in the repo and not changed: `business.legalEntityName` in `src/data/site/business.ts:30` is set to "Ultimate Fleet GPS", and `docs/01` section 4 says the legal entity suffix is unconfirmed and that the legal and DBA relationship has not been verified. Privacy and terms pages use that value. Confirm the registered legal name, LLC status, and any DBA relationship before those pages are treated as final.

Kept on purpose: `docs/01-business-source-of-truth.md:1212` is the 2026-10-07 name-change record itself and must name the old name.

## 3. Category E - identifiers not edited

| Item | Location | Recommendation |
| --- | --- | --- |
| Git remote `origin` | `git remote -v` | Still the old URL. Run it yourself: `git remote set-url origin https://github.com/SedrickHarris/ultimate-fleet-gps-site.git` |
| `package-lock.json` name | lines 2 and 8 (`sb-mobile-installations-site`) | Lockfiles were off limits. Running `npm install` once will sync it to the new `package.json` name |
| Session storage key | `src/lib/forms/application-session.ts:16`, value `sbmi.application.confirmation` | Safe to leave. It is internal, holds no personal data, and the value is baked into the build. Rename to `ufgps.application.confirmation` only if you want no old-name text in the bundle |
| Job ID format | `docs/08-url-strategy.md` lines 56, 282, 290, 326, 327, 442, 452, 845, 905, 1188 (`sbmi-104` style IDs, example slugs, UTM campaign values) | These are planning examples, not live routes. Decide a new job ID prefix before publishing any posting with an ID. The current opening uses its own slug, so nothing is live with `sbmi` |
| Cloudflare Pages project name | `docs/17-cloudflare-deployment.md:154` | Left as is. I cannot verify whether the Pages project was renamed. Update when it is |
| `.pages.dev` URLs | `docs/17-cloudflare-deployment.md:551, 852`, `docs/26-launch-checklist.md:402` | Those hostnames come from the Pages project name. Update only after the project is renamed or the hostname is confirmed |
| Local folder | `...\sb-mobile-installations-site` | Not renamed, as instructed |
| Production domain | `ultimatefleetgps.net` (about 30 uses) | Not an old-name item. No change |

## 4. Capitalization and spelling consistency

- "Ultimate Fleet GPS" is used consistently across `src/`, `docs/`, `README.md`, and `CLAUDE.md` (about 590 uses). I found no variants such as "Ultimate Fleet" alone, "UltimateFleet", or "UFGPS" in copy.
- One all-caps use: `docs/brand-assets/ultimate-fleet-gps-brand-guide.txt:1` ("ULTIMATE FLEET GPS - LOGO ASSET GUIDE"). It is a title line in a text file and is not customer-facing. I left it.
- `ufgps` appears only as an SVG element id in the logo files under `public/images/brand/logos/` and `docs/brand-assets/`. It is not visible text.
- The brand guide still contains an em dash in its first line. Docs are exempt from the em dash rule, so I left it.
- The homepage `<title>` is "Mobile Installation of GPS, ELD, and Fleet Electronics, Nationwide" with no brand suffix, while the other checked pages end in "| Ultimate Fleet GPS". The home page does emit `og:site_name` and `Organization` `name` as "Ultimate Fleet GPS". This looks like a deliberate choice in `src/lib/metadata/homepage.ts`, but I did not confirm it. Decide whether the homepage title should carry the brand.

## 5. Verification

| Check | Result |
| --- | --- |
| Old-name search (`sb-mobile`, `SB Mobile`, `sbmi`, `sbmobile`, case-insensitive, excluding `node_modules`, `.next`, `out`, `package-lock.json`) | Remaining hits are only the category D rows, the 2026-10-07 record, the category E items above, and the rename note. No hits in `src/` other than the storage key |
| `npm run typecheck` | Passed with no errors |
| `npm run lint` | Passed with no output |
| `npm run build` | Passed. Static export built all routes, including the four resource articles |
| Built home, contact, and careers pages | `og:site_name` is "Ultimate Fleet GPS" on all three. Contact and careers titles end in "| Ultimate Fleet GPS". The home page `Organization` JSON-LD `name` is "Ultimate Fleet GPS". No old-name text appears in these three built pages |
| About page | No About route exists, so it was not checked |
| Built bundle | Contains `sbmi.application.confirmation` in the `/careers/apply/` and `/careers/application-received/` chunks (the storage key above) |
| Em dashes | None added in any edited or new file |

## 6. Outside the repo - you must update and I cannot verify

- **Git remote:** run the `set-url` command in section 3 in this clone.
- **Local clones on other machines:** each needs the same `set-url` command, and a folder rename if wanted.
- **Cloudflare Pages:** the connected repository setting, the project name, the `.pages.dev` hostname, build settings, and the `NEXT_PUBLIC_FORMS_ENDPOINT` environment variable (the launch checklist says it was unset as of 2026-09-19).
- **GitHub Actions:** secrets and environments (no workflow files exist in the repo).
- **Webhooks and branch protection:** check that any webhook, deploy hook, or protection rule still points at the renamed repository. GitHub redirects the old URL, but integrations that store the old name can break.
- **Stakeholder confirmation:** registered legal name, LLC status, and DBA relationship (section 2).
