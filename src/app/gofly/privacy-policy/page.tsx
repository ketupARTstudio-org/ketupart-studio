import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/policy-page";
import { getPolicyHtml } from "@/lib/policy";

export const metadata: Metadata = {
  title: "GoFly Privacy Policy",
  description: "Privacy Policy for GoFly application.",
};

export default function GoFlyPrivacyPolicyRoute() {
  return <PolicyPage title="GoFly Privacy Policy" html={getPolicyHtml("policy_gofly.md")} />;
}
