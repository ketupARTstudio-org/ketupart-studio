import type { Metadata } from "next";
import { ConsultancyPage } from "@/components/landing/consultancy-page";

export const metadata: Metadata = {
  title: "Digital Consultancy | KetupArt Studio",
  description: "Digital consultancy services: transformation strategy, capabilities, and impact.",
};

export default function ConsultancyRoute() {
  return <ConsultancyPage />;
}
