import type { Metadata } from "next";
import { WarehouseTwin } from "@/components/warehouse/warehouse-twin";

export const metadata: Metadata = {
  title: "Warehouse Digital Twin Demo",
  description:
    "Interactive 3D digital twin of a warehouse yard: live docks, trucks, forklifts and pallets with shipment tracking. Built by KetupArt Studio with sample data.",
  alternates: { canonical: "/demo/warehouse" },
};

export default function WarehouseDemoRoute() {
  return <WarehouseTwin />;
}
