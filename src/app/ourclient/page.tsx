import type { Metadata } from "next";
import { OurClientPage } from "@/components/landing/our-client-page";

export const metadata: Metadata = {
  title: "Our Clients | KetupArt Studio",
  description: "Our clients and collaborative partners.",
};

export default function OurClientRoute() {
  return <OurClientPage />;
}
