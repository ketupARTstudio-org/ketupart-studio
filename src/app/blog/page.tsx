import type { Metadata } from "next";
import { BlogPage } from "@/components/landing/blog-page";

export const metadata: Metadata = {
  title: "Blog | KetupArt Studio",
  description: "Insights, updates, and technology stories from KetupArt Studio.",
};

export default function BlogRoute() {
  return <BlogPage />;
}
