import { LegalPage } from "@/components/content/LegalPage";
import { accessibilityStatement } from "@/data/site/legal-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";

export const metadata = buildPageMetadata({
  title: "Accessibility Statement",
  description:
    "Accessibility Statement for the Ultimate Fleet GPS website. This page has not yet been reviewed by an attorney.",
  pathname: "/accessibility/",
});

export default function Page() {
  return <LegalPage content={accessibilityStatement} />;
}
