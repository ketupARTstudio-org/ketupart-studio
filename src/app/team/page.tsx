import type { Metadata } from "next";
import { TeamPage } from "@/components/landing/team-page";

export const metadata: Metadata = {
  title: "Team | KetupArt Studio",
  description: "Meet the KetupArt Studio strategic leadership team.",
};

export default function TeamRoute() {
  return <TeamPage />;
}
