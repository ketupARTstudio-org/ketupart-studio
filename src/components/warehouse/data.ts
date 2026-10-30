// Sample data for the warehouse digital-twin demo. Nothing here is real; the
// dashboard advances it once a second so the scene and panels feel live.

export type AssetKind = "dock" | "truck" | "forklift" | "pallet";

export type AssetRef = { kind: AssetKind; id: string };

export type DockStatus = "Unloading" | "Loading" | "Available" | "Reserved";
export type TruckStatus = "Unloading" | "Loading" | "En route" | "Departed";
export type ForkliftStatus = "Working" | "Charging" | "Idle";

export type Dock = {
  id: string;
  /** Door position along the warehouse front, 0 = leftmost. */
  door: number;
  direction: "Inbound" | "Outbound";
  status: DockStatus;
  truckId: string | null;
  /** 0–100, only meaningful while a truck is being worked. */
  progress: number;
  trucksToday: number;
  nextSlot: string;
};

export type Truck = {
  id: string;
  carrier: string;
  status: TruckStatus;
  dockId: string | null;
  /** Road lane for trucks that are driving past rather than docked. */
  lane: "inbound" | "outbound" | null;
  origin: string;
  destination: string;
  etaMin: number;
  speedKmh: number;
  pallets: number;
  capacity: number;
  tonnes: number;
  shipmentId: string;
};

export type Forklift = {
  id: string;
  operator: string;
  status: ForkliftStatus;
  /** Which scripted route the scene animates; null = parked. */
  route: "inbound" | "outbound" | null;
  /** Parking spot for forklifts that are not on a route. */
  bay: string;
  task: string;
  battery: number;
  movesToday: number;
};

export type Pallet = {
  id: string;
  sku: string;
  skuCode: string;
  quantity: number;
  unit: string;
  weightKg: number;
  location: string;
  lot: string;
  received: string;
  status: "Staged" | "Put away" | "On hold";
  /** Staging-zone slot, see PALLET_SLOTS in the scene. */
  slot: number;
  wrap: "carton" | "film";
  pinned: boolean;
};

export type ShipmentStep = { label: string; time: string };

export type Shipment = {
  id: string;
  truckId: string;
  from: string;
  to: string;
  steps: ShipmentStep[];
  /** Index of the step currently in progress. */
  current: number;
};

export type TwinState = {
  clock: number;
  stock: number;
  onTime: number;
  docks: Dock[];
  trucks: Truck[];
  forklifts: Forklift[];
  pallets: Pallet[];
  shipments: Shipment[];
};

export const SITE = {
  code: "WH-04",
  name: "Pasir Gudang Hub",
  detail: "8 docks · 5 forklifts",
};

export const initialState: TwinState = {
  clock: 0,
  stock: 610,
  onTime: 96.2,
  docks: [
    { id: "In 1", door: 0, direction: "Inbound", status: "Unloading", truckId: "TRK-2205", progress: 38, trucksToday: 5, nextSlot: "11:30" },
    { id: "In 2", door: 1, direction: "Inbound", status: "Available", truckId: null, progress: 0, trucksToday: 4, nextSlot: "10:50" },
    { id: "In 3", door: 2, direction: "Inbound", status: "Reserved", truckId: null, progress: 0, trucksToday: 3, nextSlot: "10:15" },
    { id: "In 4", door: 3, direction: "Inbound", status: "Unloading", truckId: "TRK-2248", progress: 12, trucksToday: 4, nextSlot: "12:10" },
    { id: "Out 1", door: 4, direction: "Outbound", status: "Available", truckId: null, progress: 0, trucksToday: 6, nextSlot: "12:00" },
    { id: "Out 2", door: 5, direction: "Outbound", status: "Loading", truckId: "TRK-2229", progress: 61, trucksToday: 7, nextSlot: "11:45" },
    { id: "Out 3", door: 6, direction: "Outbound", status: "Available", truckId: null, progress: 0, trucksToday: 2, nextSlot: "13:20" },
    { id: "Out 4", door: 7, direction: "Outbound", status: "Reserved", truckId: null, progress: 0, trucksToday: 3, nextSlot: "10:40" },
  ],
  trucks: [
    {
      id: "TRK-2205",
      carrier: "Cargonex",
      status: "Unloading",
      dockId: "In 1",
      lane: null,
      origin: "Port of Tanjung Pelepas",
      destination: "WH-04 Pasir Gudang",
      etaMin: 0,
      speedKmh: 0,
      pallets: 7,
      capacity: 7,
      tonnes: 5.2,
      shipmentId: "SHP-78450",
    },
    {
      id: "TRK-2248",
      carrier: "KetupArt Fleet",
      status: "Unloading",
      dockId: "In 4",
      lane: null,
      origin: "Tebrau Supplier Park",
      destination: "WH-04 Pasir Gudang",
      etaMin: 0,
      speedKmh: 0,
      pallets: 8,
      capacity: 8,
      tonnes: 6.3,
      shipmentId: "SHP-78458",
    },
    {
      id: "TRK-2229",
      carrier: "Selatan Freight",
      status: "Loading",
      dockId: "Out 2",
      lane: null,
      origin: "WH-04 Pasir Gudang",
      destination: "Oakridge Market, Skudai",
      etaMin: 0,
      speedKmh: 0,
      pallets: 4,
      capacity: 8,
      tonnes: 3.1,
      shipmentId: "SHP-78462",
    },
    {
      id: "TRK-2287",
      carrier: "Cargonex",
      status: "En route",
      dockId: null,
      lane: "inbound",
      origin: "Senai Distribution Park",
      destination: "WH-04 · In 2",
      etaMin: 9,
      speedKmh: 42,
      pallets: 6,
      capacity: 7,
      tonnes: 4.4,
      shipmentId: "SHP-78471",
    },
    {
      id: "TRK-2301",
      carrier: "Selatan Freight",
      status: "Departed",
      dockId: null,
      lane: "outbound",
      origin: "WH-04 Pasir Gudang",
      destination: "Kulai Retail Centre",
      etaMin: 34,
      speedKmh: 56,
      pallets: 8,
      capacity: 8,
      tonnes: 6.0,
      shipmentId: "SHP-78433",
    },
  ],
  forklifts: [
    { id: "FL-10", operator: "Hafiz R.", status: "Working", route: "inbound", bay: "Dock In 1", task: "Unloading TRK-2205 at In 1", battery: 72, movesToday: 31 },
    { id: "FL-11", operator: "Mei Ling T.", status: "Working", route: "outbound", bay: "Dock Out 2", task: "Loading TRK-2229 at Out 2", battery: 58, movesToday: 27 },
    { id: "FL-12", operator: "—", status: "Charging", route: null, bay: "Charger C1", task: "Charging at bay", battery: 64, movesToday: 24 },
    { id: "FL-13", operator: "—", status: "Charging", route: null, bay: "Charger C2", task: "Charging at bay", battery: 41, movesToday: 18 },
    { id: "FL-14", operator: "Arun K.", status: "Idle", route: null, bay: "Yard P3", task: "Waiting for assignment", battery: 88, movesToday: 12 },
  ],
  pallets: [
    {
      id: "P-1042",
      sku: "Safety Helmet",
      skuCode: "PPE-HLM-Y",
      quantity: 82,
      unit: "units",
      weightKg: 58,
      location: "Staging S1",
      lot: "L2501-870",
      received: "Today, 08:29",
      status: "Staged",
      slot: 0,
      wrap: "carton",
      pinned: false,
    },
    {
      id: "P-1047",
      sku: "Industrial Gloves",
      skuCode: "PPE-GLV-M",
      quantity: 240,
      unit: "pairs",
      weightKg: 96,
      location: "Staging S2",
      lot: "L2501-874",
      received: "Today, 08:41",
      status: "Staged",
      slot: 1,
      wrap: "film",
      pinned: true,
    },
    {
      id: "P-1051",
      sku: "Hi-Vis Vest",
      skuCode: "PPE-VST-L",
      quantity: 150,
      unit: "units",
      weightKg: 44,
      location: "Staging S3",
      lot: "L2501-881",
      received: "Today, 09:02",
      status: "On hold",
      slot: 2,
      wrap: "carton",
      pinned: true,
    },
    {
      id: "P-1055",
      sku: "Steel Toe Boots",
      skuCode: "PPE-BTS-42",
      quantity: 36,
      unit: "pairs",
      weightKg: 71,
      location: "Staging S4",
      lot: "L2501-886",
      received: "Today, 09:15",
      status: "Staged",
      slot: 3,
      wrap: "carton",
      pinned: false,
    },
  ],
  shipments: [
    {
      id: "SHP-78450",
      truckId: "TRK-2205",
      from: "Port of Tanjung Pelepas",
      to: "WH-04 Pasir Gudang",
      steps: [
        { label: "Order confirmed", time: "07:12" },
        { label: "Picked", time: "07:48" },
        { label: "Loaded", time: "08:05" },
        { label: "In transit", time: "08:10" },
        { label: "Unloading", time: "09:20" },
        { label: "Received", time: "ETA 10:05" },
      ],
      current: 4,
    },
    {
      id: "SHP-78458",
      truckId: "TRK-2248",
      from: "Tebrau Supplier Park",
      to: "WH-04 Pasir Gudang",
      steps: [
        { label: "Order confirmed", time: "07:55" },
        { label: "Picked", time: "08:30" },
        { label: "Loaded", time: "08:52" },
        { label: "In transit", time: "09:00" },
        { label: "Unloading", time: "09:34" },
        { label: "Received", time: "ETA 10:20" },
      ],
      current: 4,
    },
    {
      id: "SHP-78462",
      truckId: "TRK-2229",
      from: "WH-04 Pasir Gudang",
      to: "Oakridge Market, Skudai",
      steps: [
        { label: "Order confirmed", time: "08:02" },
        { label: "Picked", time: "08:55" },
        { label: "Loading", time: "09:25" },
        { label: "In transit", time: "ETA 10:00" },
        { label: "Delivered", time: "ETA 10:40" },
      ],
      current: 2,
    },
    {
      id: "SHP-78471",
      truckId: "TRK-2287",
      from: "Senai Distribution Park",
      to: "WH-04 · In 2",
      steps: [
        { label: "Order confirmed", time: "07:40" },
        { label: "Picked", time: "08:20" },
        { label: "Loaded", time: "08:46" },
        { label: "In transit", time: "09:05" },
        { label: "Unloading", time: "ETA 09:40" },
        { label: "Received", time: "ETA 10:25" },
      ],
      current: 3,
    },
    {
      id: "SHP-78433",
      truckId: "TRK-2301",
      from: "WH-04 Pasir Gudang",
      to: "Kulai Retail Centre",
      steps: [
        { label: "Order confirmed", time: "06:30" },
        { label: "Picked", time: "07:15" },
        { label: "Loaded", time: "08:40" },
        { label: "In transit", time: "09:12" },
        { label: "Delivered", time: "ETA 09:55" },
      ],
      current: 3,
    },
  ],
};

/** One simulated second: docks progress, batteries drain or charge, ETAs count down. */
export function advance(state: TwinState): TwinState {
  const clock = state.clock + 1;
  let stock = state.stock;

  const docks = state.docks.map((dock) => {
    if (dock.status !== "Unloading" && dock.status !== "Loading") return dock;
    const truck = state.trucks.find((t) => t.id === dock.truckId);
    const capacity = truck?.capacity ?? 7;
    const step = 100 / (capacity * 6);
    const before = Math.floor((dock.progress / 100) * capacity);
    const progress = dock.progress + step;
    if (progress >= 100) {
      // Demo loop: the bay turns over and starts the next truck of the same run.
      return { ...dock, progress: 0, trucksToday: dock.trucksToday + 1 };
    }
    const moved = Math.floor((progress / 100) * capacity) - before;
    stock += dock.status === "Unloading" ? moved : -moved;
    return { ...dock, progress };
  });

  const forklifts = state.forklifts.map((forklift) => {
    if (forklift.status === "Charging") {
      return { ...forklift, battery: forklift.battery >= 100 ? 40 : Math.min(100, forklift.battery + 0.5) };
    }
    if (forklift.status === "Working") {
      const battery = forklift.battery <= 20 ? 90 : forklift.battery - 0.1;
      return { ...forklift, battery, movesToday: forklift.movesToday + (clock % 12 === 0 ? 1 : 0) };
    }
    return forklift;
  });

  const trucks = state.trucks.map((truck) => {
    if (!truck.lane) return truck;
    if (clock % 20 !== 0) return truck;
    return { ...truck, etaMin: truck.etaMin <= 1 ? (truck.lane === "inbound" ? 12 : 40) : truck.etaMin - 1 };
  });

  const onTime = clock % 15 === 0 ? Math.min(99.4, Math.max(94.8, state.onTime + (Math.random() - 0.5) * 0.4)) : state.onTime;

  return { ...state, clock, stock, onTime, docks, forklifts, trucks };
}

export function findAsset(state: TwinState, ref: AssetRef) {
  switch (ref.kind) {
    case "dock":
      return state.docks.find((d) => d.id === ref.id);
    case "truck":
      return state.trucks.find((t) => t.id === ref.id);
    case "forklift":
      return state.forklifts.find((f) => f.id === ref.id);
    case "pallet":
      return state.pallets.find((p) => p.id === ref.id);
  }
}

export function sameAsset(a: AssetRef | null, b: AssetRef | null) {
  return a?.kind === b?.kind && a?.id === b?.id;
}
