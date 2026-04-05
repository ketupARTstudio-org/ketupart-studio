import type { Metadata } from "next";
import { ContactPage } from "@/components/landing/contact-page";

export const metadata: Metadata = {
  title: "Contact | KetupArt Studio",
  description: "Contact KetupArt Studio for consultation and project inquiries.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
