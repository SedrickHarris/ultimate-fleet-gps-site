import { LegalPage } from "@/components/content/LegalPage";
import { accessibilityStatement } from "@/data/site/legal-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";

export const metadata = buildPageMetadata({
  title: "Accessibility Statement",
  // Meta description: Oct 26 2026 metadata audit approval.
  description:
    "How Ultimate Fleet GPS works to make its website usable with screen readers, keyboards, and zoom, and how to contact us about accessibility difficulties.",
  pathname: "/accessibility/",
});

export default function Page() {
  return <LegalPage content={accessibilityStatement} />;
}
