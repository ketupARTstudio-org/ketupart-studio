import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/policy-page";
import { getPolicyHtml } from "@/lib/policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for KetupArt Studio.",
};

export default function PrivacyPolicyRoute() {
  return <PolicyPage title="Privacy Policy" html={getPolicyHtml("policy.md")} />;
}
