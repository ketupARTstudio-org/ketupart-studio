import type { Metadata } from "next";
import { BlockchainPage } from "@/components/landing/blockchain-page";

export const metadata: Metadata = {
  title: "Blockchain Technology | KetupArt Studio",
  description:
    "Blockchain solutions, security, and ecosystem services by KetupArt Studio.",
};

export default function BlockchainRoute() {
  return <BlockchainPage />;
}
