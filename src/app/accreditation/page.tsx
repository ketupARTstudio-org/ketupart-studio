import type { Metadata } from "next";
import { AccreditationPage } from "@/components/landing/accreditation-page";

export const metadata: Metadata = {
  title: "Accreditation | KetupArt Studio",
  description: "Accreditation details and certification information.",
};

export default function AccreditationRoute() {
  return <AccreditationPage />;
}
