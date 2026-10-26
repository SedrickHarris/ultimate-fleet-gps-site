import { LegalPage } from "@/components/content/LegalPage";
import { termsOfUse } from "@/data/site/legal-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";

export const metadata = buildPageMetadata({
  title: "Terms of Use",
  // Meta description: Oct 26 2026 metadata audit approval.
  description:
    "The terms that govern use of the Ultimate Fleet GPS website, including what its quote request, Installer Network, and application forms do and do not create.",
  pathname: "/terms/",
});

export default function Page() {
  return <LegalPage content={termsOfUse} />;
}
