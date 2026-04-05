import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy/policy-page";
import { getPolicyHtml } from "@/lib/policy";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for KetupArt Studio.",
};

export default function TermsOfServiceRoute() {
  return <PolicyPage title="Terms of Service" html={getPolicyHtml("terms.md")} />;
}
