import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/lib/metadata/base";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  DEFAULT_OG_IMAGE_SIZE,
  DEFAULT_OG_TYPE,
} from "@/lib/metadata/page-defaults";

export type PageMetadataInput = {
  /**
   * Page title. A string takes the layout template suffix. `{ absolute }`
   * skips the template, for titles that already carry the brand.
   */
  title: string | { absolute: string };
  /** Open Graph and Twitter title when it should differ from the page title. */
  socialTitle?: string;
  description: string;
  pathname: string;
  noIndex?: boolean;
  /** Link-following when `noIndex` is set. Defaults to false (`noindex, nofollow`). */
  followLinks?: boolean;
  image?: string;
  type?: "website" | "article";
};

/**
 * Builds a `Metadata` object with canonical URL, Open Graph, Twitter, and
 * robots controls, following the pattern `homepageMetadata` established
 * before this factory existed. Every Sprint 1+ route's `page.tsx` calls this
 * rather than hand-building a `Metadata` object, so canonical/OG/robots
 * behavior stays consistent as routes are added.
 *
 * `noIndex` is used on every thank-you/confirmation route.
 */
export function buildPageMetadata({
  title,
  socialTitle,
  description,
  pathname,
  noIndex = false,
  followLinks = false,
  image = DEFAULT_OG_IMAGE,
  type = DEFAULT_OG_TYPE,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${pathname}`;
  const plainTitle = typeof title === "string" ? title : title.absolute;
  const shareTitle = socialTitle ?? plainTitle;
  const isDefaultImage = image !== undefined && image === DEFAULT_OG_IMAGE;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title: shareTitle,
      description,
      ...(image
        ? {
            images: [
              isDefaultImage
                ? {
                    url: image,
                    ...DEFAULT_OG_IMAGE_SIZE,
                    alt: DEFAULT_OG_IMAGE_ALT,
                  }
                : { url: image },
            ],
          }
        : {}),
    },
    twitter: {
      card: isDefaultImage ? "summary" : "summary_large_image",
      title: shareTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
    robots: noIndex
      ? { index: false, follow: followLinks }
      : { index: true, follow: true },
  };
}
