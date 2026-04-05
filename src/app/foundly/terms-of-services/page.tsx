import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/policy-page";
import { getPolicyHtml } from "@/lib/policy";

export const metadata: Metadata = {
  title: "Foundly Terms of Services",
  description: "Terms of Services for Foundly application.",
};

export default function FoundlyTermsOfServicesRoute() {
  return <PolicyPage title="Foundly Terms of Services" html={getPolicyHtml("terms_of_services_foundly.md")} />;
}
