import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/landing/case-study-page";

export const metadata: Metadata = {
  title: "Case Study | KetupArt Studio",
  description: "Case studies from education, engineering, manufacturing, and healthcare projects.",
};

export default function CaseStudyRoute() {
  return <CaseStudyPage />;
}
