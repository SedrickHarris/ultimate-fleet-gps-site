# Decision 0010: Project, company, and repository rename to Ultimate Fleet GPS

**Date:** October 25, 2026
**Status:** Applied in the working tree, not committed
**Decided by:** Project owner (instruction in the working session)
**Affects:** `package.json`, repository URL references in `docs/`, and the remaining old-name mentions in decision records and the brand guide

## What changed

- The project and company name changed from "SB Mobile Installations" (also written "SB Mobile Installations, LLC" or "SB Mobile") to **Ultimate Fleet GPS**. The site, schema, metadata, and most documents were already updated on October 7, 2026 (`01-business-source-of-truth.md` section 29, row dated 2026-10-07). This note records the remaining cleanup.
- The GitHub repository was renamed from `sb-mobile-installations-site` to `ultimate-fleet-gps-site`. The new URL is `https://github.com/SedrickHarris/ultimate-fleet-gps-site.git`.
- The `package.json` name changed to `ultimate-fleet-gps-site`.
- Repository URL and slug references in `docs/` were updated to the new repository.

## Left unchanged on purpose

Legal-entity and public-name log rows in `01-business-source-of-truth.md` section 29, the `sbmi` job ID examples in `08-url-strategy.md`, the `sbmi.application.confirmation` storage key, the Cloudflare Pages project name and `.pages.dev` URLs, `package-lock.json`, and the git remote. See `rename-report.md` for each item and the recommended handling.
