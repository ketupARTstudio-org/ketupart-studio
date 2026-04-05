import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/policy-page";
import { getPolicyHtml } from "@/lib/policy";

export const metadata: Metadata = {
  title: "GoFly Terms of Services",
  description: "Terms of Services for GoFly application.",
};

export default function GoFlyTermsOfServicesRoute() {
  return <PolicyPage title="GoFly Terms of Services" html={getPolicyHtml("terms_of_services_gofly.md")} />;
}
