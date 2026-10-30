"use client";

import Link from "next/link";
import Image from "next/image";
import { type FormEvent, type ReactNode, useEffect, useRef, useState } from "react";
import {
  advance,
  type AssetKind,
  type AssetRef,
  type Dock,
  findAsset,
  type Forklift,
  initialState,
  type Pallet,
  sameAsset,
  SITE,
  type Truck,
  type TwinState,
} from "./data";
import { WarehouseScene } from "./warehouse-scene";
import styles from "./warehouse.module.css";

type FleetTab = "dock" | "forklift" | "truck";

const TONES: Record<string, "green" | "amber" | "blue" | "gray"> = {
  Unloading: "green",
  Loading: "green",
  Working: "green",
  Staged: "green",
  Charging: "amber",
  Reserved: "amber",
  "On hold": "amber",
  "En route": "blue",
  Departed: "blue",
  Available: "gray",
  Idle: "gray",
  "Put away": "gray",
};

const KIND_LABEL: Record<AssetKind, string> = {
  dock: "Dock bay",
  truck: "Truck",
  forklift: "Forklift",
  pallet: "Pallet",
};

// Each pallet takes six simulated seconds; show that as minutes so the demo reads like a real bay.
function minutesLeft(dock: Dock, truck: Truck | undefined) {
  const capacity = truck?.capacity ?? 7;
  const remaining = capacity - Math.floor((dock.progress / 100) * capacity);
  return Math.max(1, Math.round(remaining * 1.8));
}

function Status({ value }: { value: string }) {
  return (
    <span className={styles.status} data-tone={TONES[value] ?? "gray"}>
      {value}
    </span>
  );
}

function Bar({ value, tone = "green" }: { value: number; tone?: string }) {
  return (
    <span className={styles.bar} data-tone={tone}>
      <span style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </span>
  );
}

const ICONS = {
  search: "M11 4a7 7 0 1 0 4.4 12.4L20 21l1-1-4.6-4.6A7 7 0 0 0 11 4Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z",
  bell: "M12 3a6 6 0 0 0-6 6v4l-2 3h16l-2-3V9a6 6 0 0 0-6-6Zm-2 15a2 2 0 0 0 4 0Z",
  plus: "M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6Z",
  minus: "M5 11h14v2H5Z",
  rotateLeft: "M7 7V3L2 8l5 5V9h6a5 5 0 0 1 0 10H8v2h5a7 7 0 0 0 0-14Z",
  rotateRight: "M17 7V3l5 5-5 5V9h-6a5 5 0 0 0 0 10h5v2h-5a7 7 0 0 1 0-14Z",
  home: "M12 3 3 10v11h6v-6h6v6h6V10Z",
  close: "m6.4 5 5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4Z",
  chevron: "m9 6 6 6-6 6-1.4-1.4 4.6-4.6-4.6-4.6Z",
  box: "M12 2 3 7v10l9 5 9-5V7Zm0 2.3L18.6 8 12 11.7 5.4 8ZM5 9.7l6 3.4v6.6l-6-3.3Zm8 10V13.1l6-3.4v6.7Z",
  truck: "M2 6h12v9h1V9h4l3 4v5h-2a2.5 2.5 0 0 1-5 0H9a2.5 2.5 0 0 1-5 0H2Zm15 5v2h3l-1.5-2Z",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm1 4v5l4 2-1 1.7-5-2.7V7Z",
  forklift: "M3 7h7l2 5h2V4h2v13h5v2h-7v-2H11a2.5 2.5 0 0 1-5 0H3Z",
  dock: "M3 21V8l9-5 9 5v13h-4v-9H7v9Zm6 0v-2h6v2Zm0-4v-2h6v2Z",
} as const;

function Icon({ name, size = 18 }: { name: keyof typeof ICONS; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

export function WarehouseTwin() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<WarehouseScene | null>(null);
  const [state, setState] = useState<TwinState>(initialState);
  const [now, setNow] = useState("");
  const [selected, setSelected] = useState<AssetRef | null>(null);
  const [tab, setTab] = useState<FleetTab>("dock");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");

  const choose = (ref: AssetRef | null) => {
    setSelected(ref);
    if (ref && ref.kind !== "pallet") setTab(ref.kind);
  };
  // The scene keeps one handler for its lifetime; route it through a ref so it sees fresh state.
  const chooseRef = useRef(choose);
  useEffect(() => {
    chooseRef.current = choose;
  });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let scene: WarehouseScene | null = null;
    try {
      scene = new WarehouseScene({
        canvas: canvasRef.current!,
        tag: tagRef.current,
        reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        onSelect: (ref) => chooseRef.current(ref),
        onReady: () => setStatus("ready"),
      });
      sceneRef.current = scene;
    } catch {
      // WebGL is unavailable; the dashboard panels still work on their own.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus("fallback");
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      scene?.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    sceneRef.current?.select(selected);
  }, [selected, status]);

  useEffect(() => {
    const tick = () => {
      setNow(new Date().toLocaleTimeString("en-GB"));
      setState(advance);
    };
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const search = (event: FormEvent) => {
    event.preventDefault();
    const needle = query.trim().toLowerCase();
    if (!needle) return;
    const candidates: AssetRef[] = [
      ...state.trucks.map((t) => ({ kind: "truck" as const, id: t.id })),
      ...state.forklifts.map((f) => ({ kind: "forklift" as const, id: f.id })),
      ...state.docks.map((d) => ({ kind: "dock" as const, id: d.id })),
      ...state.pallets.map((p) => ({ kind: "pallet" as const, id: p.id })),
    ];
    const bySku = state.pallets.find((p) => p.sku.toLowerCase().includes(needle));
    const match =
      candidates.find((c) => c.id.toLowerCase() === needle) ??
      candidates.find((c) => c.id.toLowerCase().includes(needle)) ??
      (bySku ? { kind: "pallet" as const, id: bySku.id } : undefined);
    if (match) {
      choose(match);
      setQuery("");
    }
  };

  const asset = selected ? findAsset(state, selected) : undefined;
  const dockFor = (truck: Truck | undefined) => state.docks.find((d) => d.id === truck?.dockId);
  const truckFor = (dock: Dock | undefined) => state.trucks.find((t) => t.id === dock?.truckId);

  // The shipment strip follows whatever truck is in focus, defaulting to the one being unloaded.
  const focusTruck =
    selected?.kind === "truck"
      ? (asset as Truck)
      : selected?.kind === "dock"
        ? truckFor(asset as Dock)
        : undefined;
  const shipment =
    state.shipments.find((s) => s.truckId === focusTruck?.id) ?? state.shipments[0];
  const shipmentTruck = state.trucks.find((t) => t.id === shipment.truckId);
  const shipmentDock = dockFor(shipmentTruck);

  const docked = state.trucks.filter((t) => t.dockId).length;
  const activeDocks = state.docks.filter((d) => d.truckId).length;
  const workingForklifts = state.forklifts.filter((f) => f.status === "Working").length;

  return (
    <div className={styles.root} data-status={status} data-selected={selected ? "true" : "false"}>
      <canvas ref={canvasRef} className={styles.canvas} aria-label="3D view of the warehouse yard" />

      <div ref={tagRef} className={styles.tag} aria-hidden="true">
        {selected && asset && (
          <>
            <strong>{selected.id}</strong>
            <Status value={"status" in asset ? asset.status : ""} />
          </>
        )}
      </div>

      {status === "fallback" && (
        <p className={styles.fallback}>3D isn&apos;t available on this device. The live panels still update below.</p>
      )}

      <header className={styles.topbar}>
        <Link href="/" className={styles.brand} title="Back to KetupArt Studio">
          <span className={styles.brandMark}>
            <Image src="/assets/images/logo/logo-ketupart_studio.png" alt="" width={24} height={24} />
          </span>
          <span>
            KetupArt Logistics
            <small>Digital twin · demo</small>
          </span>
        </Link>

        <form className={styles.search} onSubmit={search} role="search">
          <Icon name="search" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search trucks, forklifts, docks, pallets…"
            aria-label="Search assets"
            list="twin-assets"
          />
          <datalist id="twin-assets">
            {[...state.trucks, ...state.forklifts, ...state.docks, ...state.pallets].map((item) => (
              <option key={item.id} value={item.id} />
            ))}
          </datalist>
        </form>

        <div className={styles.site}>
          <span className={styles.siteCode}>{SITE.code}</span>
          <span>
            {SITE.name}
            <small>{SITE.detail}</small>
          </span>
        </div>

        <span className={styles.live}>
          <i /> Live {now}
        </span>

        <button type="button" className={styles.roundButton} aria-label="Notifications">
          <Icon name="bell" />
          <b />
        </button>

        <div className={styles.user}>
          <span className={styles.avatar}>AR</span>
          <span>
            Aisyah Rahman
            <small>Operations Manager</small>
          </span>
        </div>
      </header>

      <section className={styles.kpis} aria-label="Key metrics">
        <Kpi icon="box" label="Stock on hand" value={state.stock.toLocaleString("en-US")} delta="+12" note="pallets · WH-04" />
        <Kpi icon="truck" label="Trucks on site" value={String(docked)} delta="+1" note="1 inbound · 9 min" />
        <Kpi icon="clock" label="On-time delivery" value={`${state.onTime.toFixed(1)}%`} delta="+0.4%" note="last 30 days" />
      </section>

      <p className={styles.hint}>
        <span className={styles.sample}>Sample data</span>
        {status === "fallback" ? "Pick an asset from the tables." : "Click an asset · drag to pan · scroll to zoom"}
      </p>

      <div className={styles.controls} role="toolbar" aria-label="View controls">
        <button type="button" onClick={() => sceneRef.current?.zoomBy(1.3)} aria-label="Zoom in">
          <Icon name="plus" />
        </button>
        <button type="button" onClick={() => sceneRef.current?.zoomBy(1 / 1.3)} aria-label="Zoom out">
          <Icon name="minus" />
        </button>
        <span />
        <button type="button" onClick={() => sceneRef.current?.rotateBy(Math.PI / 6)} aria-label="Rotate left">
          <Icon name="rotateLeft" />
        </button>
        <button type="button" onClick={() => sceneRef.current?.rotateBy(-Math.PI / 6)} aria-label="Rotate right">
          <Icon name="rotateRight" />
        </button>
        <button
          type="button"
          onClick={() => {
            setSelected(null);
            sceneRef.current?.resetView();
          }}
          aria-label="Reset view"
        >
          <Icon name="home" />
        </button>
      </div>

      {selected && asset && (
        <aside className={styles.detail} aria-label={`${KIND_LABEL[selected.kind]} details`}>
          <header>
            <span className={styles.detailIcon}>
              <Icon name={selected.kind === "pallet" ? "box" : selected.kind} size={22} />
            </span>
            <div>
              <small>
                {KIND_LABEL[selected.kind]} · {SITE.code}
              </small>
              <h2>{selected.kind === "pallet" ? (asset as Pallet).sku : selected.id}</h2>
            </div>
            <button type="button" className={styles.roundButton} onClick={() => setSelected(null)} aria-label="Close details">
              <Icon name="close" size={16} />
            </button>
          </header>
          <DetailBody state={state} refItem={selected} asset={asset} truckFor={truckFor} dockFor={dockFor} />
        </aside>
      )}

      <section className={styles.shipment} aria-label="Shipment tracking">
        <header>
          <h3>
            <Icon name="truck" /> Shipment tracking
          </h3>
          <span>
            {shipment.truckId} · {shipmentTruck?.carrier}
          </span>
        </header>
        <div className={styles.shipmentBody}>
          <ol className={styles.steps}>
            {shipment.steps.map((step, index) => {
              const progress = index < shipment.current ? "done" : index === shipment.current ? "current" : "todo";
              const capacity = shipmentTruck?.capacity ?? 0;
              const moved = shipmentDock ? Math.floor((shipmentDock.progress / 100) * capacity) : 0;
              const label =
                progress === "current" && shipmentDock && (step.label === "Unloading" || step.label === "Loading")
                  ? `${step.label} ${moved}/${capacity}`
                  : step.label;
              return (
                <li key={step.label} data-state={progress}>
                  <span className={styles.stepDot}>{progress === "done" ? "✓" : index + 1}</span>
                  <strong>{label}</strong>
                  <small>{step.time}</small>
                </li>
              );
            })}
          </ol>
          <button
            type="button"
            className={styles.shipmentCard}
            onClick={() => choose({ kind: "truck", id: shipment.truckId })}
          >
            <span className={styles.detailIcon}>
              <Icon name="truck" size={22} />
            </span>
            <span>
              <strong>#{shipment.id}</strong>
              <small>To {shipment.to}</small>
              {shipmentTruck && <Status value={shipmentTruck.status} />}
              <small>
                {shipmentDock
                  ? `${SITE.code} · ${shipmentDock.id} · ${minutesLeft(shipmentDock, shipmentTruck)} min left`
                  : `ETA ${shipmentTruck?.etaMin ?? "—"} min · ${shipmentTruck?.speedKmh ?? 0} km/h`}
              </small>
            </span>
            <Icon name="chevron" />
          </button>
        </div>
      </section>

      <section className={styles.fleet} aria-label="Fleet status">
        <header>
          <div className={styles.tabs} role="tablist">
            <button type="button" role="tab" aria-selected={tab === "dock"} onClick={() => setTab("dock")}>
              Docks <small>{activeDocks}/{state.docks.length}</small>
            </button>
            <button type="button" role="tab" aria-selected={tab === "forklift"} onClick={() => setTab("forklift")}>
              Forklifts <small>{workingForklifts}/{state.forklifts.length}</small>
            </button>
            <button type="button" role="tab" aria-selected={tab === "truck"} onClick={() => setTab("truck")}>
              Trucks <small>{state.trucks.length}</small>
            </button>
          </div>
          <span>{SITE.name}</span>
        </header>
        <ul className={styles.rows}>
          {tab === "dock" &&
            state.docks.map((dock) => {
              const truck = truckFor(dock);
              return (
                <Row key={dock.id} kind="dock" id={dock.id} sub={dock.direction} selected={selected} onSelect={choose}>
                  <span className={styles.rowMain}>{truck ? `${truck.id} · ${truck.carrier}` : "No truck assigned"}</span>
                  <Status value={dock.status} />
                  <span className={styles.rowMeter}>
                    {truck ? (
                      <>
                        <Bar value={dock.progress} />
                        <small>
                          {Math.floor((dock.progress / 100) * truck.capacity)}/{truck.capacity}
                        </small>
                      </>
                    ) : (
                      <small>Next {dock.nextSlot}</small>
                    )}
                  </span>
                </Row>
              );
            })}
          {tab === "forklift" &&
            state.forklifts.map((forklift) => (
              <Row key={forklift.id} kind="forklift" id={forklift.id} sub={forklift.bay} selected={selected} onSelect={choose}>
                <span className={styles.rowMain}>{forklift.task}</span>
                <Status value={forklift.status} />
                <span className={styles.rowMeter}>
                  <Bar value={forklift.battery} tone={forklift.battery < 45 ? "amber" : "green"} />
                  <small>{Math.round(forklift.battery)}%</small>
                </span>
              </Row>
            ))}
          {tab === "truck" &&
            state.trucks.map((truck) => (
              <Row key={truck.id} kind="truck" id={truck.id} sub={truck.carrier} selected={selected} onSelect={choose}>
                <span className={styles.rowMain}>
                  {truck.dockId ? `At ${truck.dockId}` : `${truck.lane === "inbound" ? "To" : "From"} ${SITE.code} · ETA ${truck.etaMin} min`}
                </span>
                <Status value={truck.status} />
                <span className={styles.rowMeter}>
                  <Bar value={(truck.pallets / truck.capacity) * 100} tone="blue" />
                  <small>
                    {truck.pallets}/{truck.capacity}
                  </small>
                </span>
              </Row>
            ))}
        </ul>
      </section>
    </div>
  );
}

function Kpi({ icon, label, value, delta, note }: { icon: keyof typeof ICONS; label: string; value: string; delta: string; note: string }) {
  return (
    <div className={styles.kpi}>
      <span className={styles.kpiIcon}>
        <Icon name={icon} />
      </span>
      <span>
        <small>{label}</small>
        <strong>
          {value} <em>{delta}</em>
        </strong>
        <small>{note}</small>
      </span>
    </div>
  );
}

function Row({
  kind,
  id,
  sub,
  selected,
  onSelect,
  children,
}: {
  kind: AssetKind;
  id: string;
  sub: string;
  selected: AssetRef | null;
  onSelect: (ref: AssetRef) => void;
  children: ReactNode;
}) {
  return (
    <li>
      <button
        type="button"
        className={styles.row}
        aria-current={sameAsset(selected, { kind, id }) ? "true" : undefined}
        onClick={() => onSelect({ kind, id })}
      >
        <span className={styles.rowId}>
          <strong>{id}</strong>
          <small>{sub}</small>
        </span>
        {children}
        <Icon name="chevron" size={16} />
      </button>
    </li>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className={styles.field}>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function DetailBody({
  state,
  refItem,
  asset,
  truckFor,
  dockFor,
}: {
  state: TwinState;
  refItem: AssetRef;
  asset: Dock | Truck | Forklift | Pallet;
  truckFor: (dock: Dock | undefined) => Truck | undefined;
  dockFor: (truck: Truck | undefined) => Dock | undefined;
}) {
  switch (refItem.kind) {
    case "pallet": {
      const pallet = asset as Pallet;
      return (
        <>
          <div className={styles.detailStatus}>
            <Status value={pallet.status} />
            <span>
              {pallet.id} · {pallet.skuCode}
            </span>
          </div>
          <dl>
            <Field label="Quantity">
              {pallet.quantity} {pallet.unit}
            </Field>
            <Field label="Gross weight">{pallet.weightKg} kg</Field>
            <Field label="Location">{pallet.location}</Field>
            <Field label="Lot">{pallet.lot}</Field>
            <Field label="Received">{pallet.received}</Field>
            <Field label="Site">{SITE.name}</Field>
          </dl>
        </>
      );
    }
    case "dock": {
      const dock = asset as Dock;
      const truck = truckFor(dock);
      return (
        <>
          <div className={styles.detailStatus}>
            <Status value={dock.status} />
            <span>{truck ? `${truck.id} · ${minutesLeft(dock, truck)} min left` : `Next slot ${dock.nextSlot}`}</span>
          </div>
          {truck && <Bar value={dock.progress} />}
          <dl>
            <Field label="Direction">{dock.direction}</Field>
            <Field label="Truck">{truck ? `${truck.id} · ${truck.carrier}` : "—"}</Field>
            <Field label="Progress">
              {truck ? `${Math.floor((dock.progress / 100) * truck.capacity)}/${truck.capacity} pallets` : "—"}
            </Field>
            <Field label="Trucks today">{dock.trucksToday}</Field>
            <Field label="Site">{SITE.name}</Field>
          </dl>
        </>
      );
    }
    case "truck": {
      const truck = asset as Truck;
      const dock = dockFor(truck);
      const shipment = state.shipments.find((s) => s.truckId === truck.id);
      return (
        <>
          <div className={styles.detailStatus}>
            <Status value={truck.status} />
            <span>{dock ? `${dock.id} · ${minutesLeft(dock, truck)} min left` : `ETA ${truck.etaMin} min`}</span>
          </div>
          {dock && <Bar value={dock.progress} />}
          <dl>
            <Field label="Shipment">{shipment ? `#${shipment.id}` : "—"}</Field>
            <Field label="Carrier">{truck.carrier}</Field>
            <Field label="Origin">{truck.origin}</Field>
            <Field label="Destination">{truck.destination}</Field>
            <Field label="Speed">{truck.speedKmh} km/h</Field>
            <Field label="Bay">{dock ? `${SITE.code} · ${dock.id}` : "On road"}</Field>
            <Field label="Cargo">
              {truck.pallets}/{truck.capacity} pallets · {truck.tonnes.toFixed(1)} t
            </Field>
          </dl>
        </>
      );
    }
    case "forklift": {
      const forklift = asset as Forklift;
      return (
        <>
          <div className={styles.detailStatus}>
            <Status value={forklift.status} />
            <span>Battery {Math.round(forklift.battery)}%</span>
          </div>
          <Bar value={forklift.battery} tone={forklift.battery < 45 ? "amber" : "green"} />
          <dl>
            <Field label="Task">{forklift.task}</Field>
            <Field label="Operator">{forklift.operator}</Field>
            <Field label="Carrying">{forklift.route ? "1 pallet" : "Empty"}</Field>
            <Field label="Moves today">{forklift.movesToday}</Field>
            <Field label="Speed">{forklift.status === "Working" ? "7.5 km/h" : "0 km/h"}</Field>
            <Field label="Zone">{forklift.bay}</Field>
          </dl>
        </>
      );
    }
  }
}
