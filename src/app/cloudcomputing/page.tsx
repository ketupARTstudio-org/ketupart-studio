import type { Metadata } from "next";
import { CloudComputingPage } from "@/components/landing/cloud-computing-page";

export const metadata: Metadata = {
  title: "Cloud Computing | KetupArt Studio",
  description:
    "Cloud strategy, migration, modernization, managed services, and cloud ecosystem solutions.",
};

export default function CloudComputingRoute() {
  return <CloudComputingPage />;
}
