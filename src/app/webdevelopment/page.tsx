import type { Metadata } from "next";
import { WebDevelopmentPage } from "@/components/landing/web-development-page";

export const metadata: Metadata = {
  title: "Web Development | KetupArt Studio",
  description:
    "Web development services including custom solutions, system types, technology stack, and ecosystem.",
};

export default function WebDevelopmentRoute() {
  return <WebDevelopmentPage />;
}
