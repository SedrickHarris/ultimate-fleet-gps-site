import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { getServicePage } from "@/data/site/service-pages-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";

const bundle = getServicePage("gps-tracking-installation");

export const metadata: Metadata = buildPageMetadata({
  title: bundle.page.metaTitle ?? bundle.page.h1,
  description: bundle.page.metaDescription,
  pathname: bundle.content.pathname,
});

export default function GpsTrackingInstallationPage() {
  return <ServicePageTemplate bundle={bundle} />;
}
