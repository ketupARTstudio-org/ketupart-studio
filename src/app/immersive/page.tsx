import type { Metadata } from "next";
import { ImmersivePage } from "@/components/landing/immersive-page";

export const metadata: Metadata = {
  title: "Immersive Technology | KetupArt Studio",
  description:
    "Immersive technology services including VR, AR, and mixed reality experiences.",
};

export default function ImmersiveRoute() {
  return <ImmersivePage />;
}
