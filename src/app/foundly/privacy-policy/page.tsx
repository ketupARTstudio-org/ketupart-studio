import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/policy-page";
import { getPolicyHtml } from "@/lib/policy";

export const metadata: Metadata = {
  title: "Foundly Privacy Policy",
  description: "Privacy Policy for Foundly application.",
};

export default function FoundlyPrivacyPolicyRoute() {
  return <PolicyPage title="Foundly Privacy Policy" html={getPolicyHtml("privacy_policy_foundly.md")} />;
}
