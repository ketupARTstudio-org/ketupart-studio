import type { Metadata } from "next";
import { TestimonialPage } from "@/components/landing/testimonial-page";

export const metadata: Metadata = {
  title: "Testimonials | KetupArt Studio",
  description: "Customer reviews across Google, Facebook, and Yelp.",
};

export default function TestimonialRoute() {
  return <TestimonialPage />;
}
