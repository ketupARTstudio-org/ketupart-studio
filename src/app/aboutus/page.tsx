import type { Metadata } from "next";
import { AboutPage } from "@/components/landing/about-page";

export const metadata: Metadata = {
  title: "About Us | KetupArt Studio",
  description: "About KetupArt Studio and our values, expertise, and approach.",
};

export default function AboutUsRoute() {
  return <AboutPage />;
}
