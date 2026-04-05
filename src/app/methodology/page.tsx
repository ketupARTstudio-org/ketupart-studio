import type { Metadata } from "next";
import { MethodologyPage } from "@/components/landing/methodology-page";

export const metadata: Metadata = {
  title: "Methodology | KetupArt Studio",
  description: "Our development methodology from requirements through delivery.",
};

export default function MethodologyRoute() {
  return <MethodologyPage />;
}
