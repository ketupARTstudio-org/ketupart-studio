import type { Metadata } from "next";
import { ProjectPage } from "@/components/landing/project-page";

export const metadata: Metadata = {
  title: "Projects | KetupArt Studio",
  description: "Selected project showcase from KetupArt Studio.",
};

export default function ProjectRoute() {
  return <ProjectPage />;
}
