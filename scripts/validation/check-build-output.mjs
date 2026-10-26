#!/usr/bin/env node
/**
 * Build output validator.
 *
 * Runs against the static export in `out/`, so a build must exist first. It is
 * wired as the `postbuild` script, which makes `npm run build` fail when the
 * output breaks the host rules below.
 *
 * Checks:
 * 1. Every `<link rel="canonical">` is absolute and on https://ultimatefleetgps.net.
 * 2. Every HTML page without a noindex robots meta has exactly one canonical.
 * 3. Every JSON-LD block has `url`, `@id`, `logo`, `image` and BreadcrumbList
 *    `item` values on https://ultimatefleetgps.net (an object value is checked
 *    through its own `url` or `@id`).
 * 4. "pages.dev" appears nowhere in `out/` except `_headers`, where the
 *    hostname-scoped noindex rules for the build domain live
 *    (docs/17-cloudflare-deployment.md, "pages.dev indexing").
 *
 * Limits (state these when reporting results):
 * - Only the files under `out/` are read. Live response headers, redirects and
 *   Cloudflare dashboard rules are not checked.
 * - Binary files (images, fonts, video) are skipped for the pages.dev search.
 *
 * Usage: node scripts/validation/check-build-output.mjs
 * Exit code 1 when a violation is found.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const LIVE_ORIGIN = "https://ultimatefleetgps.net";
const root = fileURLToPath(new URL("../../", import.meta.url));
const outDir = join(root, "out");

if (!existsSync(outDir)) {
  console.error("out/ not found. Run the build first.");
  process.exit(1);
}

const BINARY = /\.(png|jpe?g|webp|avif|gif|ico|svg|woff2?|ttf|otf|mp4|webm|mov|pdf)$/i;
const violations = [];
let htmlCount = 0;
let jsonLdCount = 0;
let jsonLdUrlCount = 0;

// JSON-LD keys whose string values must be live-domain URLs. `item` is the
// BreadcrumbList element URL. Object values are walked, so an ImageObject
// `logo` or `image` is checked through its own `url` or `@id`.
const URL_KEYS = new Set(["url", "@id", "logo", "image", "item"]);

function checkJsonLd(node, rel, path) {
  if (Array.isArray(node)) {
    node.forEach((child, i) => checkJsonLd(child, rel, `${path}[${i}]`));
    return;
  }
  if (!node || typeof node !== "object") return;
  for (const [key, value] of Object.entries(node)) {
    const here = path ? `${path}.${key}` : key;
    if (URL_KEYS.has(key) && typeof value === "string") {
      jsonLdUrlCount += 1;
      if (value !== LIVE_ORIGIN && !value.startsWith(`${LIVE_ORIGIN}/`)) {
        violations.push(`${rel}: JSON-LD ${here} "${value}" is not on ${LIVE_ORIGIN}`);
      }
    } else {
      checkJsonLd(value, rel, here);
    }
  }
}
let fileCount = 0;

function walk(dir, visit) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, visit);
    else visit(full);
  }
}

walk(outDir, (file) => {
  const rel = relative(outDir, file).split(sep).join("/");
  if (BINARY.test(file)) return;
  fileCount += 1;
  const text = readFileSync(file, "utf8");

  if (rel !== "_headers" && text.includes("pages.dev")) {
    const at = text.indexOf("pages.dev");
    const context = text.slice(Math.max(0, at - 40), at + 20).replace(/\s+/g, " ");
    violations.push(`${rel}: "pages.dev" outside _headers (...${context}...)`);
  }

  if (!rel.endsWith(".html")) return;
  htmlCount += 1;
  const canonicals = [...text.matchAll(/<link[^>]*rel="canonical"[^>]*>/g)].map((m) => {
    const href = m[0].match(/href="([^"]*)"/);
    return href ? href[1] : "";
  });
  for (const m of text.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    jsonLdCount += 1;
    try {
      checkJsonLd(JSON.parse(m[1]), rel, "");
    } catch {
      violations.push(`${rel}: JSON-LD block is not valid JSON`);
    }
  }

  const noindex = /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/.test(text);

  for (const href of canonicals) {
    if (!href.startsWith(`${LIVE_ORIGIN}/`)) {
      violations.push(`${rel}: canonical "${href}" is relative or not on ${LIVE_ORIGIN}`);
    }
  }
  if (!noindex && canonicals.length !== 1) {
    violations.push(`${rel}: indexable page has ${canonicals.length} canonicals, expected 1`);
  }
});

console.log(`HTML pages checked: ${htmlCount}`);
console.log(`JSON-LD blocks parsed: ${jsonLdCount} (${jsonLdUrlCount} URL values checked)`);
console.log(`Text files searched for "pages.dev": ${fileCount}`);
if (violations.length === 0) {
  console.log("Build output is clean: absolute live-domain canonicals and JSON-LD URLs, no pages.dev outside _headers.");
  process.exit(0);
}
console.log(`\nViolations (${violations.length}):`);
for (const v of violations) console.log(`  ${v}`);
process.exit(1);
