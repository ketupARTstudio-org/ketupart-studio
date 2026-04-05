import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/policy-page";
import { getPolicyHtml } from "@/lib/policy";

export const metadata: Metadata = {
  title: "Product Shipping Policy",
  description: "Product shipping policy for KetupArt Studio products.",
};

export default function ProductShippingPolicyRoute() {
  return <PolicyPage title="Product Shipping Policy" html={getPolicyHtml("product_shipping_policy.md")} />;
}
