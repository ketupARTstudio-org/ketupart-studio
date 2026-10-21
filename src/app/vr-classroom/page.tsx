import type { Metadata } from "next";
import { VrClassroomPage } from "@/components/landing/vr-classroom-page";

export const metadata: Metadata = {
  title: "VR Classroom Setup | KetupART Studio",
  description:
    "End-to-end VR classroom setup covering Pico and Meta Quest headsets, charging, protection, storage, content readiness, testing, and user training.",
  alternates: { canonical: "/vr-classroom" },
};

export default function VrClassroomRoute() {
  return <VrClassroomPage />;
}
