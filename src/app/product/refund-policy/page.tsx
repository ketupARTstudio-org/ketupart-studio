import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/policy-page";
import { getPolicyHtml } from "@/lib/policy";

export const metadata: Metadata = {
  title: "Product Refund Policy",
  description: "Product refund policy for KetupArt Studio products.",
};

export default function ProductRefundPolicyRoute() {
  return <PolicyPage title="Product Refund Policy" html={getPolicyHtml("product_refund_policy.md")} />;
}
