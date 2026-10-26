import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";

/**
 * Homepage metadata.
 *
 * Title and description are derived from locked content only. No new
 * marketing copy is written here. See 10-on-page-seo-standards.md. Title and
 * description updated under the Oct 26 2026 metadata audit approval.
 *
 * The root layout title template does not apply to the root page, so the
 * brand suffix is written into the title.
 */
export const homepageMetadata: Metadata = buildPageMetadata({
  title: { absolute: "Mobile Fleet GPS & ELD Installation | Ultimate Fleet GPS" },
  socialTitle: "Mobile Fleet GPS & ELD Installation",
  description:
    "Ultimate Fleet GPS installs GPS trackers, ELDs, dashcams, and fleet electronics at your location, nationwide. In business since 2011. Request a quote.",
  pathname: "/",
});
