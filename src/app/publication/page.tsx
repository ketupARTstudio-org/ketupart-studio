import type { Metadata } from "next";
import { PublicationPage } from "@/components/landing/publication-page";

export const metadata: Metadata = {
  title: "Publication | KetupArt Studio",
  description: "Research publications and project insight highlights.",
};

export default function PublicationRoute() {
  return <PublicationPage />;
}
