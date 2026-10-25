#!/usr/bin/env node
/**
 * Internal link validator.
 *
 * Static scan, no build required. It collects every route that exists under
 * `src/app/` (a folder with a `page.tsx`), expands the `/resources/[slug]/`
 * article routes from `src/data/site/resources-content.ts`, then checks every
 * quoted internal path literal found under `src/` against that route list.
 *
 * Limits (state these when reporting results):
 * - Only literal strings are checked. Links assembled from template strings
 *   are not.
 * - In-page anchors (`#id`) are stripped. Anchor targets are not checked.
 * - Comment lines and `src/app/robots.ts` (disallow prefixes, not links) are
 *   skipped.
 * - Dynamic routes other than `/resources/[slug]/` match any single segment,
 *   so a typo under a dynamic route is not caught.
 *
 * Usage: node scripts/validation/check-internal-links.mjs
 * Exit code 1 when a broken link is found.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../../", import.meta.url));
const appDir = join(root, "src", "app");
const srcDir = join(root, "src");

function walk(dir, visit) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, visit);
    else visit(full);
  }
}

// 1. Built routes.
const routes = [];
walk(appDir, (file) => {
  if (!/[\\/]page\.tsx$/.test(file)) return;
  const dir = relative(appDir, join(file, ".."));
  const segs = dir === "" ? [] : dir.split(sep);
  routes.push(segs);
});

// 2. Resource article slugs for the dynamic `/resources/[slug]/` route.
const resourcesFile = join(srcDir, "data", "site", "resources-content.ts");
const articleSlugs = new Set(
  [...readFileSync(resourcesFile, "utf8").matchAll(/^\s*slug:\s*"([a-z0-9-]+)"/gm)].map((m) => m[1]),
);

function matchesRoute(pathname) {
  const segs = pathname.split("/").filter(Boolean);
  return routes.some((route) => {
    if (route.length !== segs.length) return false;
    return route.every((part, i) => {
      if (!part.startsWith("[")) return part === segs[i];
      // Dynamic segment. Resource articles are checked against real slugs.
      if (route[0] === "resources" && i === 1) return articleSlugs.has(segs[i]);
      return true;
    });
  });
}

// 3. Link literals.
const pathLiteral = /["'`](\/[a-z0-9][a-z0-9\-/]*\/?)(?:[#?][^"'`\s]*)?["'`]|["'`](\/)(?:[#?][^"'`\s]*)?["'`]/g;
const findings = [];
let checked = 0;
walk(srcDir, (file) => {
  if (!/\.(ts|tsx)$/.test(file)) return;
  const rel = relative(root, file);
  if (rel === join("src", "app", "robots.ts")) return;
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    if (/^\s*(\*|\/\/|\/\*)/.test(line)) return;
    for (const m of line.matchAll(pathLiteral)) {
      const pathname = m[1] ?? m[2];
      // Skip non-route prefixes and asset folders.
      if (/^\/(api|_next|images|fonts|icons)\b/.test(pathname)) continue;
      checked += 1;
      if (!matchesRoute(pathname)) findings.push({ file: rel, line: i + 1, pathname });
    }
  });
});

console.log(`Routes found: ${routes.length} (+ ${articleSlugs.size} resource articles)`);
console.log(`Path literals checked: ${checked}`);
if (findings.length === 0) {
  console.log("No broken internal links found.");
  process.exit(0);
}
console.log(`\nPaths with no matching route (${findings.length}):`);
for (const f of findings) console.log(`  ${f.file}:${f.line}  ${f.pathname}`);
process.exit(1);
