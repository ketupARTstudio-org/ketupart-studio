import type { Metadata } from "next";
import { GoFlyPage } from "@/components/landing/gofly-page";

export const metadata: Metadata = {
  title: "GoFly | KetupArt Studio",
  description: "GoFly VR Drone Training by KetupArt Studio.",
};

export default function GoFlyRoute() {
  return <GoFlyPage />;
}
