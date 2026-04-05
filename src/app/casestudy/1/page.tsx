import type { Metadata } from "next";
import { CaseStudyShowPage } from "@/components/landing/case-study-show-page";

export const metadata: Metadata = {
  title: "Case Study Detail | KetupArt Studio",
  description: "Detailed case study article page.",
};

export default function CaseStudyShowRoute() {
  return <CaseStudyShowPage />;
}
