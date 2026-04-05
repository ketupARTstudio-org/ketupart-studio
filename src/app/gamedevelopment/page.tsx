import type { Metadata } from "next";
import { GameDevelopmentPage } from "@/components/landing/game-development-page";

export const metadata: Metadata = {
  title: "Game Development | KetupArt Studio",
  description:
    "Game development services from concept and design to deployment across platforms.",
};

export default function GameDevelopmentRoute() {
  return <GameDevelopmentPage />;
}
