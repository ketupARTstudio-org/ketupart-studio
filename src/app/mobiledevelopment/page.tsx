import type { Metadata } from "next";
import { MobileDevelopmentPage } from "@/components/landing/mobile-development-page";

export const metadata: Metadata = {
  title: "Mobile Development | KetupArt Studio",
  description:
    "Mobile development services including strategy, design, cross-platform apps, and deployment ecosystem.",
};

export default function MobileDevelopmentRoute() {
  return <MobileDevelopmentPage />;
}
