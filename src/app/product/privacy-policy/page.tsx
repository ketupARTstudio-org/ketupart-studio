import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/policy-page";
import { getPolicyHtml } from "@/lib/policy";

export const metadata: Metadata = {
  title: "Product Privacy Policy",
  description: "Product privacy policy for KetupArt Studio products.",
};

export default function ProductPrivacyPolicyRoute() {
  return <PolicyPage title="Product Privacy Policy" html={getPolicyHtml("product_privacy_policy.md")} />;
}
