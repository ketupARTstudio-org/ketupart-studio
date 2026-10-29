import type { Metadata } from "next";
import { WelcomePage } from "@/components/landing/welcome-page";

export const metadata: Metadata = {
  title: "Classic Site",
  alternates: { canonical: "/classic" },
};

export default function ClassicHome() {
  return <WelcomePage />;
}
