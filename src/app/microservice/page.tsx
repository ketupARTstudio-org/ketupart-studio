import type { Metadata } from "next";
import { MicroservicePage } from "@/components/landing/microservice-page";

export const metadata: Metadata = {
  title: "Microservices | KetupArt Studio",
  description:
    "Microservices architecture, capabilities, comparison, and technology stack services.",
};

export default function MicroserviceRoute() {
  return <MicroservicePage />;
}
