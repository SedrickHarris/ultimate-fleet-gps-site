import { LegalPage } from "@/components/content/LegalPage";
import { privacyPolicy } from "@/data/site/legal-content";
import { buildPageMetadata } from "@/lib/metadata/build-page-metadata";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  // Meta description: Oct 26 2026 metadata audit approval.
  description:
    "How Ultimate Fleet GPS handles information submitted through its website forms, including quote requests, applications, and Installer Network registrations.",
  pathname: "/privacy-policy/",
});

export default function Page() {
  return <LegalPage content={privacyPolicy} />;
}
