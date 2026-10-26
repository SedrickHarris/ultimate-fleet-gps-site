import type { MetadataRoute } from "next";

import { business } from "@/data/site/business";

// Required for output: export. See next.config.ts.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Confirmation pages are not disallowed: a disallowed page cannot be
        // crawled, so its noindex would never be seen (decision 0018).
      },
    ],
    sitemap: `${business.url}/sitemap.xml`,
  };
}
