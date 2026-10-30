import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { initialState, type AssetKind, type AssetRef } from "./data";

type SceneOptions = {
  canvas: HTMLCanvasElement;
  /** Floating tag that tracks the selected asset; the dashboard renders its content. */
  tag: HTMLElement | null;
  reducedMotion: boolean;
  onSelect: (ref: AssetRef | null) => void;
  onReady: () => void;
};

type Entity = {
  ref: AssetRef;
  group: THREE.Group;
  /** Where the floating tag sits, in the entity's local space. */
  anchor: THREE.Object3D;
};

type Route = {
  points: THREE.Vector3[];
  total: number;
  speed: number;
  pause: number;
  offset: number;
};

type Mover = {
  entity: Entity;
  route: Route;
  load: THREE.Object3D;
  heading: number;
};

/** Anything driving along the public road: tracked trucks and background cars. */
type Traffic = {
  object: THREE.Object3D;
  direction: 1 | -1;
  lane: number;
  speed: number;
  offset: number;
};

// Layout, in metres-ish world units. The main warehouse (WH-04) front faces +z.
const WALL_FRONT = -4;
const BUILDING_LEFT = -3;
const BUILDING_RIGHT = 32;
const BUILDING_DEPTH = 16;
const WALL_HEIGHT = 5;
const DOOR_X = [0.5, 4.5, 8.5, 12.5, 16.5, 20.5, 24.5, 28.5];
const ROAD_Z = 14;
const LANE_Z = { inbound: 12.6, outbound: 15.6 } as const;
const ROAD_LENGTH = 240;
const FENCE_Z = 9;
const GATE = [-10, -3] as const;
const SITE_X = [-48, 68] as const;
const PALLET_SLOTS: [number, number][] = [
  [4.9, 2.3],
  [6.9, 2.3],
  [8.9, 2.3],
  [17.6, 2.4],
];
const STAGING_ZONES: [number, number, number, number][] = [
  [3.9, 9.9, 1.2, 3.6],
  [14.9, 18.9, 1.2, 3.6],
];
const PARKED: Record<string, [number, number, number]> = {
  "Charger C1": [-7.6, -2.2, Math.PI],
  "Charger C2": [-5.4, -2.2, Math.PI],
  "Yard P3": [33.5, 2.4, -Math.PI / 2],
};

const ELEVATION = 0.62;
const DISTANCE = 120;
// Visible world extent at zoom 1; whichever axis is tighter for the viewport wins.
const VIEW_HEIGHT = 44;
const VIEW_WIDTH = 74;
const HOME_TARGET = new THREE.Vector3(10, 0, -2);
const HOME_AZIMUTH = -0.55;
const ZOOM_RANGE = [0.45, 5] as const;
const FOCUS_ZOOM: Record<AssetKind, number> = { truck: 2.6, dock: 3, forklift: 3.4, pallet: 3.6 };
const RING_SIZE: Record<AssetKind, number> = { truck: 4.6, dock: 2.1, forklift: 1.5, pallet: 1.25 };
const PAN_BOUNDS = { minX: -55, maxX: 75, minZ: -45, maxZ: 30 };

const COLORS = {
  background: "#e7efe9",
  ground: "#dde8df",
  yard: "#f4f7f4",
  road: "#cbd5ce",
  line: "#ffffff",
  marking: "#b8cfbf",
  wall: "#f7faf7",
  roof: "#4cb36a",
  brand: "#0e9a3a",
  deep: "#006f00",
  light: "#00a000",
  glass: "#24342c",
  window: "#4f7d68",
  dark: "#2b322e",
  tyre: "#222723",
  steel: "#9ea9a2",
  yellow: "#f5b52a",
  wood: "#c99a5e",
  carton: "#d9ab70",
  cartonDark: "#c69356",
  leaf: "#86c98f",
  leafDark: "#5fae6c",
  trunk: "#9a7a5c",
  fence: "#b9c7bd",
};

const CONTAINER_COLORS = ["#0e9a3a", "#f7faf7", "#9ea9a2", "#e0894a", "#006f00", "#cfd8d2"];
const CAR_COLORS = ["#f7faf7", "#9ea9a2", "#0e9a3a", "#2b322e", "#d9573f", "#cfd8d2", "#3c6b8f"];

function damp(current: number, target: number, lambda: number, dt: number) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * dt));
}

function wrapAngle(angle: number) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

function assetKey(ref: AssetRef) {
  return `${ref.kind}:${ref.id}`;
}

function makeRoute(points: [number, number][], speed: number, pause: number, offset: number): Route {
  const vectors = points.map(([x, z]) => new THREE.Vector3(x, 0, z));
  let total = 0;
  for (let i = 1; i < vectors.length; i++) total += vectors[i].distanceTo(vectors[i - 1]);
  return { points: vectors, total, speed, pause, offset };
}

/** Ping-pong along a polyline with a pause at each end; returns whether the forklift is laden. */
function sampleRoute(route: Route, time: number, out: THREE.Vector3, direction: THREE.Vector3) {
  const travel = route.total / route.speed;
  const cycle = 2 * (travel + route.pause);
  const u = (time + route.offset) % cycle;

  let distance: number;
  let forward = true;
  let moving = true;
  if (u < route.pause) {
    distance = 0;
    moving = false;
  } else if (u < route.pause + travel) {
    distance = (u - route.pause) * route.speed;
  } else if (u < 2 * route.pause + travel) {
    distance = route.total;
    moving = false;
  } else {
    distance = route.total - (u - 2 * route.pause - travel) * route.speed;
    forward = false;
  }

  let walked = 0;
  for (let i = 1; i < route.points.length; i++) {
    const a = route.points[i - 1];
    const b = route.points[i];
    const length = a.distanceTo(b);
    if (distance <= walked + length || i === route.points.length - 1) {
      out.lerpVectors(a, b, length === 0 ? 0 : Math.min(1, (distance - walked) / length));
      direction.subVectors(b, a).normalize();
      if (!forward) direction.negate();
      break;
    }
    walked += length;
  }

  return { laden: u < route.pause + travel, moving };
}

// The KetupArt mark: rounded blocks in two greens, one tall block in the third column.
const LOGO_BLOCKS: [number, number, boolean, number][] = [
  [2, 0, true, 2],
  [0, 1, true, 1],
  [1, 1, false, 1],
  [3, 1, false, 1],
  [0, 2, false, 1],
  [1, 2, true, 1],
  [2, 2, false, 1],
  [0, 3, true, 1],
  [1, 3, false, 1],
  [2, 3, true, 1],
];

function createTextTexture(
  text: string,
  options: { width: number; height: number; font: string; color: string; background?: string; logo?: boolean },
) {
  const canvas = document.createElement("canvas");
  canvas.width = options.width;
  canvas.height = options.height;
  const ctx = canvas.getContext("2d")!;
  if (options.background) {
    ctx.fillStyle = options.background;
    ctx.beginPath();
    ctx.roundRect(0, 0, options.width, options.height, options.height * 0.18);
    ctx.fill();
  }
  let x = options.width / 2;
  ctx.textAlign = "center";
  if (options.logo) {
    const unit = (options.height * 0.8) / 4;
    const top = options.height * 0.1;
    const left = options.height * 0.12;
    for (const [col, row, dark, rows] of LOGO_BLOCKS) {
      ctx.fillStyle = dark ? COLORS.deep : COLORS.light;
      ctx.beginPath();
      ctx.roundRect(left + col * unit, top + row * unit, unit * 0.86, unit * (rows - 0.14), unit * 0.14);
      ctx.fill();
    }
    x = left + unit * 4.5;
    ctx.textAlign = "left";
  }
  ctx.fillStyle = options.color;
  ctx.font = options.font;
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, options.height / 2 + 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}

export class WarehouseScene {
  private readonly options: SceneOptions;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 320);
  private readonly clock = new THREE.Clock();
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointer = new THREE.Vector2();
  private readonly entities = new Map<string, Entity>();
  private readonly pickTargets: THREE.Object3D[] = [];
  private readonly movers: Mover[] = [];
  private readonly traffic: Traffic[] = [];
  private readonly pins: THREE.Object3D[] = [];
  private readonly textures: THREE.Texture[] = [];
  private readonly materials = new Map<string, THREE.MeshStandardMaterial>();
  private readonly ring = new THREE.Group();
  private readonly ringPulse: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  private logoTexture!: THREE.Texture;

  private target = HOME_TARGET.clone();
  private desiredTarget = HOME_TARGET.clone();
  private azimuth = HOME_AZIMUTH;
  private desiredAzimuth = HOME_AZIMUTH;
  private zoom = 1;
  private desiredZoom = 1;
  private selected: Entity | null = null;
  private follow = false;
  private ringScale = 1;

  private down = false;
  private dragging = false;
  private downX = 0;
  private downY = 0;
  private lastX = 0;
  private lastY = 0;
  private hoverDirty = false;
  private hoverEvent: PointerEvent | null = null;
  private frame = 0;
  private rendered = false;
  private width = 1;
  private height = 1;
  private readonly tmp = new THREE.Vector3();
  private readonly tmpDir = new THREE.Vector3();

  constructor(options: SceneOptions) {
    this.options = options;
    this.renderer = new THREE.WebGLRenderer({ canvas: options.canvas, antialias: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    this.scene.background = new THREE.Color(COLORS.background);

    const ringMaterial = new THREE.MeshBasicMaterial({ color: COLORS.brand, transparent: true, opacity: 0.85, depthWrite: false });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1, 64), ringMaterial);
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(0.9, 64),
      new THREE.MeshBasicMaterial({ color: COLORS.brand, transparent: true, opacity: 0.14, depthWrite: false }),
    );
    this.ringPulse = new THREE.Mesh(
      new THREE.RingGeometry(0.96, 1, 64),
      new THREE.MeshBasicMaterial({ color: COLORS.brand, transparent: true, opacity: 0.5, depthWrite: false }),
    );
    this.ring.add(ring, disc, this.ringPulse);
    this.ring.rotation.x = -Math.PI / 2;
    this.ring.position.y = 0.04;
    this.ring.visible = false;
    this.scene.add(this.ring);

    this.logoTexture = createTextTexture("KetupArt Logistics", {
      width: 1024,
      height: 160,
      font: "700 74px 'DM Sans', system-ui, sans-serif",
      color: COLORS.deep,
      logo: true,
    });
    this.textures.push(this.logoTexture);

    this.buildLights();
    this.buildGround();
    this.buildMainWarehouse();
    this.buildYard();
    this.buildCampus();
    this.buildRoadside();
    this.buildAssets();

    this.scene.traverse((object) => {
      if ((object as THREE.Mesh).isMesh && !object.userData.flat) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });

    this.resize();
    window.addEventListener("resize", this.resize);
    options.canvas.addEventListener("pointerdown", this.onPointerDown);
    options.canvas.addEventListener("pointermove", this.onPointerMove);
    options.canvas.addEventListener("pointerup", this.onPointerUp);
    options.canvas.addEventListener("pointercancel", this.onPointerUp);
    options.canvas.addEventListener("pointerleave", this.onPointerLeave);
    options.canvas.addEventListener("wheel", this.onWheel, { passive: false });
    this.frame = requestAnimationFrame(this.tick);
  }

  select(ref: AssetRef | null) {
    const entity = ref ? (this.entities.get(assetKey(ref)) ?? null) : null;
    if (entity === this.selected) return;
    this.selected = entity;
    this.ring.visible = entity !== null;
    if (!entity) return;
    this.follow = true;
    this.desiredZoom = Math.max(this.desiredZoom, FOCUS_ZOOM[entity.ref.kind]);
    this.ringScale = RING_SIZE[entity.ref.kind];
  }

  zoomBy(factor: number) {
    this.desiredZoom = THREE.MathUtils.clamp(this.desiredZoom * factor, ...ZOOM_RANGE);
  }

  rotateBy(radians: number) {
    this.desiredAzimuth += radians;
  }

  resetView() {
    this.follow = false;
    this.desiredTarget.copy(HOME_TARGET);
    this.desiredZoom = 1;
    // Unwind to the home angle the short way round.
    this.desiredAzimuth = this.azimuth + wrapAngle(HOME_AZIMUTH - this.azimuth);
  }

  dispose() {
    cancelAnimationFrame(this.frame);
    window.removeEventListener("resize", this.resize);
    const canvas = this.options.canvas;
    canvas.removeEventListener("pointerdown", this.onPointerDown);
    canvas.removeEventListener("pointermove", this.onPointerMove);
    canvas.removeEventListener("pointerup", this.onPointerUp);
    canvas.removeEventListener("pointercancel", this.onPointerUp);
    canvas.removeEventListener("pointerleave", this.onPointerLeave);
    canvas.removeEventListener("wheel", this.onWheel);

    this.scene.traverse((object) => {
      const mesh = object as THREE.Mesh;
      mesh.geometry?.dispose();
      const material = mesh.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(material)) material.forEach((m) => m.dispose());
      else material?.dispose();
    });
    this.textures.forEach((texture) => texture.dispose());
    this.renderer.dispose();
  }

  // ---------------------------------------------------------------- helpers

  private material(color: string, extra: THREE.MeshStandardMaterialParameters = {}) {
    const key = color + JSON.stringify(extra);
    let material = this.materials.get(key);
    if (!material) {
      material = new THREE.MeshStandardMaterial({ color, roughness: 0.75, metalness: 0.02, ...extra });
      this.materials.set(key, material);
    }
    return material;
  }

  private glow(color: string, intensity: number) {
    return this.material(color, { emissive: color, emissiveIntensity: intensity });
  }

  private box(
    parent: THREE.Object3D,
    size: [number, number, number],
    position: [number, number, number],
    color: string,
    radius = 0,
  ) {
    const geometry = radius > 0 ? new RoundedBoxGeometry(...size, 2, radius) : new THREE.BoxGeometry(...size);
    const mesh = new THREE.Mesh(geometry, this.material(color));
    mesh.position.set(...position);
    parent.add(mesh);
    return mesh;
  }

  private flat(parent: THREE.Object3D, size: [number, number], position: [number, number, number], color: string) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(...size), this.material(color, { roughness: 1 }));
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(...position);
    mesh.receiveShadow = true;
    mesh.userData.flat = true;
    parent.add(mesh);
    return mesh;
  }

  private outline(x0: number, x1: number, z0: number, z1: number, color: string) {
    this.flat(this.scene, [x1 - x0, 0.12], [(x0 + x1) / 2, 0.022, z0], color);
    this.flat(this.scene, [x1 - x0, 0.12], [(x0 + x1) / 2, 0.022, z1], color);
    this.flat(this.scene, [0.12, z1 - z0], [x0, 0.022, (z0 + z1) / 2], color);
    this.flat(this.scene, [0.12, z1 - z0], [x1, 0.022, (z0 + z1) / 2], color);
  }

  private decal(parent: THREE.Object3D, texture: THREE.Texture, size: [number, number]) {
    if (!this.textures.includes(texture)) this.textures.push(texture);
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(...size),
      new THREE.MeshStandardMaterial({ map: texture, transparent: true, roughness: 0.8 }),
    );
    mesh.userData.flat = true;
    parent.add(mesh);
    return mesh;
  }

  private register(ref: AssetRef, group: THREE.Group, anchorY: number, anchorZ = 0) {
    const anchor = new THREE.Object3D();
    anchor.position.set(0, anchorY, anchorZ);
    group.add(anchor);
    group.userData.asset = ref;
    const entity: Entity = { ref, group, anchor };
    this.entities.set(assetKey(ref), entity);
    this.pickTargets.push(group);
    this.scene.add(group);
    return entity;
  }

  private tree(x: number, z: number, scale: number, dark = false) {
    const tree = new THREE.Group();
    this.box(tree, [0.22, 1.1, 0.22], [0, 0.55, 0], COLORS.trunk);
    const crown = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.85, 1),
      this.material(dark ? COLORS.leafDark : COLORS.leaf, { roughness: 0.9, flatShading: true }),
    );
    crown.position.y = 1.65;
    tree.add(crown);
    tree.position.set(x, 0, z);
    tree.scale.setScalar(scale);
    this.scene.add(tree);
  }

  // ---------------------------------------------------------------- world

  private buildLights() {
    this.scene.add(new THREE.HemisphereLight("#ffffff", "#c8d8cc", 1.7));

    const sun = new THREE.DirectionalLight("#ffffff", 2.1);
    sun.position.set(-20, 60, 40);
    sun.target.position.set(10, 0, -6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(4096, 4096);
    const shadowCam = sun.shadow.camera;
    shadowCam.left = -80;
    shadowCam.right = 80;
    shadowCam.top = 70;
    shadowCam.bottom = -70;
    shadowCam.near = 1;
    shadowCam.far = 200;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.04;
    sun.shadow.radius = 4;
    this.scene.add(sun, sun.target);
  }

  private buildGround() {
    this.flat(this.scene, [420, 420], [0, 0, 0], COLORS.ground);
    // Concrete site behind the fence.
    const [left, right] = SITE_X;
    this.flat(this.scene, [right - left, 49], [(left + right) / 2, 0.01, FENCE_Z - 24.5], COLORS.yard);
    // Driveway through the gate to the road.
    this.flat(this.scene, [GATE[1] - GATE[0], 2], [(GATE[0] + GATE[1]) / 2, 0.012, FENCE_Z + 0.9], COLORS.yard);

    this.flat(this.scene, [ROAD_LENGTH + 60, 7], [0, 0.015, ROAD_Z], COLORS.road);
    for (let x = -ROAD_LENGTH / 2 - 20; x < ROAD_LENGTH / 2 + 20; x += 4) {
      this.flat(this.scene, [2, 0.16], [x, 0.02, ROAD_Z], COLORS.line);
    }
    this.flat(this.scene, [ROAD_LENGTH + 60, 0.12], [0, 0.02, ROAD_Z - 3.2], COLORS.line);
    this.flat(this.scene, [ROAD_LENGTH + 60, 0.12], [0, 0.02, ROAD_Z + 3.2], COLORS.line);
  }

  /** A sawtooth-roof shed with green trim; returns the group so callers can add doors. */
  private buildShed(left: number, right: number, front: number, depth: number, height: number, teeth: number) {
    const shed = new THREE.Group();
    const width = right - left;
    const centerX = (left + right) / 2;
    const centerZ = front - depth / 2;
    this.box(shed, [width, height, depth], [centerX, height / 2, centerZ], COLORS.wall);
    this.box(shed, [width + 0.1, 0.35, depth + 0.1], [centerX, 0.175, centerZ], COLORS.brand);
    this.box(shed, [width + 0.3, 0.22, 0.3], [centerX, height, front], COLORS.brand);

    // Each tooth is a right triangle (slope + vertical glazing) extruded front to back.
    const toothWidth = width / teeth;
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(toothWidth, 0);
    shape.lineTo(toothWidth, 2.1);
    shape.closePath();
    const toothGeometry = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false });
    const materials = [this.material(COLORS.wall), this.material(COLORS.roof, { roughness: 0.55 })];
    for (let i = 0; i < teeth; i++) {
      const tooth = new THREE.Mesh(i === 0 ? toothGeometry : toothGeometry.clone(), materials);
      tooth.position.set(left + i * toothWidth, height, front - depth);
      shed.add(tooth);
    }
    this.scene.add(shed);
    return shed;
  }

  private buildDoor(parent: THREE.Object3D, x: number, front: number, lampColor: string, stocked: boolean) {
    const door = new THREE.Group();
    door.position.set(x, 0, front);
    this.box(door, [2.6, 3, 0.06], [0, 1.5, 0.03], "#d6e2d9");
    this.box(door, [2.4, 0.08, 0.2], [0, 2.95, 0.1], "#c1d2c5");
    this.box(door, [0.22, 3.25, 0.3], [-1.41, 1.62, 0.12], COLORS.brand);
    this.box(door, [0.22, 3.25, 0.3], [1.41, 1.62, 0.12], COLORS.brand);
    this.box(door, [3.04, 0.25, 0.3], [0, 3.25, 0.12], COLORS.brand);
    this.box(door, [0.3, 0.45, 0.25], [-1.05, 1.15, 0.2], COLORS.dark);
    this.box(door, [0.3, 0.45, 0.25], [1.05, 1.15, 0.2], COLORS.dark);
    this.box(door, [2.4, 0.12, 0.7], [0, 1.05, 0.35], COLORS.steel);
    this.box(door, [0.3, 0.3, 0.12], [1.15, 3.7, 0.08], lampColor).material = this.glow(lampColor, 0.6);
    if (stocked) {
      // Cartons waiting just inside the door.
      this.box(door, [0.75, 0.6, 0.6], [-0.4, 1.4, 0.45], COLORS.carton, 0.04);
      this.box(door, [0.6, 0.5, 0.55], [0.35, 1.35, 0.45], COLORS.cartonDark, 0.04);
    }
    parent.add(door);
    return door;
  }

  private buildMainWarehouse() {
    const shed = this.buildShed(BUILDING_LEFT, BUILDING_RIGHT, WALL_FRONT, BUILDING_DEPTH, WALL_HEIGHT, 8);
    const sign = this.decal(
      shed,
      createTextTexture("WH-04 · Pasir Gudang Hub", {
        width: 1024,
        height: 160,
        font: "600 64px 'DM Sans', system-ui, sans-serif",
        color: COLORS.deep,
        logo: true,
      }),
      [9, 1.4],
    );
    sign.rotation.y = -Math.PI / 2;
    sign.position.set(BUILDING_LEFT - 0.02, 3.4, WALL_FRONT - 4.5);

    for (const dock of initialState.docks) {
      const lampColor = dock.status === "Available" ? "#2fc67a" : dock.status === "Reserved" ? "#4f7cff" : "#f2a524";
      const group = new THREE.Group();
      group.position.set(DOOR_X[dock.door], 0, WALL_FRONT);
      this.buildDoor(group, 0, 0, lampColor, !dock.truckId);

      const plate = this.decal(
        group,
        createTextTexture(dock.id, {
          width: 256,
          height: 96,
          font: "700 56px 'DM Sans', system-ui, sans-serif",
          color: "#ffffff",
          background: COLORS.brand,
        }),
        [0.9, 0.34],
      );
      plate.position.set(-0.6, 3.7, 0.04);

      // Bay markings on the apron.
      this.flat(this.scene, [0.12, 8], [DOOR_X[dock.door] - 1.6, 0.02, WALL_FRONT + 4], COLORS.marking);
      this.flat(this.scene, [0.12, 8], [DOOR_X[dock.door] + 1.6, 0.02, WALL_FRONT + 4], COLORS.marking);

      this.register({ kind: "dock", id: dock.id }, group, 3.9, 0.4);
    }
  }

  private buildYard() {
    for (const [x0, x1, z0, z1] of STAGING_ZONES) this.outline(x0, x1, z0, z1, COLORS.yellow);

    // Charging station for the forklift fleet.
    const charger = new THREE.Group();
    charger.position.set(-6.5, 0, -3.6);
    this.box(charger, [5, 1.5, 0.5], [0, 0.75, 0], COLORS.wall, 0.08);
    this.box(charger, [5.1, 0.15, 0.6], [0, 1.55, 0], COLORS.brand);
    for (const x of [-1.1, 1.1]) this.box(charger, [0.35, 0.18, 0.06], [x, 1.1, 0.27], "#2fc67a").material = this.glow("#2fc67a", 0.8);
    this.scene.add(charger);

    // Fence along the road, with a gate gap for the driveway.
    const fence = new THREE.Group();
    const runs: [number, number][] = [
      [SITE_X[0], GATE[0]],
      [GATE[1], SITE_X[1]],
    ];
    const panelMaterial = new THREE.MeshStandardMaterial({ color: COLORS.fence, transparent: true, opacity: 0.35, roughness: 0.6 });
    for (const [from, to] of runs) {
      for (let x = from; x <= to + 0.01; x += 2.5) this.box(fence, [0.1, 1.5, 0.1], [x, 0.75, FENCE_Z], COLORS.fence);
      this.box(fence, [to - from, 0.08, 0.08], [(from + to) / 2, 1.5, FENCE_Z], COLORS.fence);
      this.box(fence, [to - from, 0.06, 0.06], [(from + to) / 2, 0.15, FENCE_Z], COLORS.fence);
      const panel = new THREE.Mesh(new THREE.PlaneGeometry(to - from, 1.35), panelMaterial);
      panel.position.set((from + to) / 2, 0.8, FENCE_Z);
      panel.userData.flat = true;
      fence.add(panel);
    }
    this.scene.add(fence);

    // Guard house and boom barrier at the gate.
    const guard = new THREE.Group();
    guard.position.set(GATE[0] - 2, 0, FENCE_Z - 1.8);
    this.box(guard, [2.4, 2.6, 2.4], [0, 1.3, 0], COLORS.wall, 0.08);
    this.box(guard, [2.9, 0.25, 2.9], [0, 2.72, 0], COLORS.brand);
    this.box(guard, [1.8, 0.8, 0.06], [0, 1.7, 1.21], COLORS.window);
    this.box(guard, [0.3, 1.1, 0.3], [1.6, 0.55, 1.5], COLORS.dark);
    this.box(guard, [GATE[1] - GATE[0] - 0.6, 0.12, 0.12], [1.6 + (GATE[1] - GATE[0]) / 2, 1.05, 1.5], COLORS.yellow);
    this.scene.add(guard);
  }

  /** The rest of the logistics campus around WH-04: office, car park, containers, trailers, a second shed. */
  private buildCampus() {
    // Head office with glazed bands, canopy, rooftop plant and solar panels.
    const office = new THREE.Group();
    const [ox0, ox1, oFront, oDepth, oHeight] = [-27, -13, -6, 12, 7];
    const ocx = (ox0 + ox1) / 2;
    this.box(office, [ox1 - ox0, oHeight, oDepth], [ocx, oHeight / 2, oFront - oDepth / 2], COLORS.wall);
    for (const y of [2, 5.1]) {
      this.box(office, [ox1 - ox0 - 1, 1.3, 0.1], [ocx, y, oFront + 0.03], COLORS.window);
      this.box(office, [0.1, 1.3, oDepth - 1], [ox1 + 0.03, y, oFront - oDepth / 2], COLORS.window);
    }
    // Light roof deck with a green parapet, so the solar panels read against it.
    this.box(office, [ox1 - ox0 + 0.2, 0.3, oDepth + 0.2], [ocx, oHeight + 0.15, oFront - oDepth / 2], "#dfe7e1");
    this.box(office, [ox1 - ox0 + 0.3, 0.5, 0.2], [ocx, oHeight + 0.4, oFront + 0.05], COLORS.brand);
    this.box(office, [4, 0.2, 2], [ocx, 3.3, oFront + 1], COLORS.brand);
    this.box(office, [0.15, 3.3, 0.15], [ocx - 1.8, 1.65, oFront + 1.8], COLORS.steel);
    this.box(office, [0.15, 3.3, 0.15], [ocx + 1.8, 1.65, oFront + 1.8], COLORS.steel);
    this.box(office, [2, 2.4, 0.08], [ocx, 1.2, oFront + 0.05], COLORS.glass);
    this.box(office, [2.2, 1.2, 1.6], [ox0 + 3, oHeight + 0.9, oFront - 9], COLORS.steel);
    this.box(office, [1.4, 0.9, 1.4], [ox0 + 6, oHeight + 0.75, oFront - 9.5], COLORS.steel);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 2; j++) {
        const panel = this.box(office, [2.2, 0.08, 1.4], [ox0 + 5.5 + i * 2.5, oHeight + 0.7, oFront - 3 - j * 2], "#26443a");
        panel.rotation.x = -0.35;
      }
    }
    // Same wordmark as the trucks, so it shares their texture.
    const officeSign = this.decal(office, this.logoTexture, [8, 1.25]);
    officeSign.position.set(ocx, 6.35, oFront + 0.06);
    this.scene.add(office);

    // Staff car park in front of the office.
    const [px0, px1] = [-28, -12];
    for (let x = px0; x <= px1 + 0.01; x += 2.7) {
      this.flat(this.scene, [0.1, 4.6], [x, 0.02, -1.2], COLORS.marking);
      this.flat(this.scene, [0.1, 4.6], [x, 0.02, 5.2], COLORS.marking);
    }
    const parked: [number, number, number][] = [
      [-26.65, -1.2, 0],
      [-23.95, -1.2, 1],
      [-18.55, -1.2, 2],
      [-15.85, -1.2, 3],
      [-26.65, 5.2, 4],
      [-21.25, 5.2, 5],
      [-13.15, 5.2, 6],
    ];
    for (const [x, z, color] of parked) {
      const car = this.buildCar(CAR_COLORS[color % CAR_COLORS.length]);
      car.position.set(x, 0, z);
      car.rotation.y = z < 2 ? Math.PI : 0;
      this.scene.add(car);
    }

    // Container yard to the west.
    const containers = new THREE.Group();
    let colorIndex = 0;
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 2; col++) {
        const stack = (row + col) % 3 === 0 ? 1 : 2;
        for (let level = 0; level < stack; level++) {
          const color = CONTAINER_COLORS[colorIndex++ % CONTAINER_COLORS.length];
          const x = -44 + col * 6.8;
          const z = -22 + row * 3.2;
          this.box(containers, [6.1, 2.55, 2.44], [x, 1.275 + level * 2.6, z], color);
          this.box(containers, [0.08, 2.3, 2.3], [x + 3.07, 1.275 + level * 2.6, z], COLORS.dark);
        }
      }
    }
    // A reach stacker parked by the containers.
    this.box(containers, [3, 1.6, 2], [-36.5, 0.9, -4], COLORS.yellow, 0.12);
    this.box(containers, [0.5, 0.5, 5], [-36.5, 2.4, -6], COLORS.dark).rotation.x = 0.35;
    this.scene.add(containers);

    // Trailer parking to the east.
    for (let x = 38; x <= 58.01; x += 4) {
      this.flat(this.scene, [0.12, 9], [x - 2, 0.02, -7.5], COLORS.marking);
    }
    for (const [i, x] of [40, 44, 52, 56].entries()) {
      const trailer = this.buildTrailer(i % 2 === 0);
      trailer.position.set(x, 0, -11.5);
      this.scene.add(trailer);
    }

    // WH-05: a second, smaller shed behind the trailer park.
    const shed = this.buildShed(36, 64, -18, 14, 4.5, 6);
    for (const [i, x] of [40, 45, 50, 55, 60].entries()) {
      this.buildDoor(shed, x, -18, i === 1 ? "#f2a524" : "#2fc67a", i % 2 === 0);
    }
    const sign = this.decal(
      shed,
      createTextTexture("WH-05 · Cold Store", {
        width: 1024,
        height: 160,
        font: "600 64px 'DM Sans', system-ui, sans-serif",
        color: COLORS.deep,
        logo: true,
      }),
      [8, 1.25],
    );
    sign.rotation.y = -Math.PI / 2;
    sign.position.set(35.98, 3.1, -24);
  }

  private buildRoadside() {
    // Street lamps on the site side of the road.
    for (let x = -44; x <= 64; x += 14) {
      const lamp = new THREE.Group();
      this.box(lamp, [0.14, 5, 0.14], [0, 2.5, 0], COLORS.steel);
      this.box(lamp, [0.12, 0.12, 1.4], [0, 4.95, 0.65], COLORS.steel);
      this.box(lamp, [0.4, 0.14, 0.6], [0, 4.86, 1.25], "#ffffff").material = this.glow("#fffbe8", 0.4);
      lamp.position.set(x, 0, 10.1);
      this.scene.add(lamp);
    }

    const verge: [number, number, number][] = [
      [-46, 10.4, 1],
      [-39, 10.4, 0.9],
      [-30, 10.4, 1.05],
      [-21, 10.4, 0.85],
      [-15, 10.4, 1],
      [4, 10.4, 0.95],
      [11, 10.4, 1.1],
      [25, 10.4, 0.9],
      [32, 10.4, 1],
      [46, 10.4, 1.05],
      [53, 10.4, 0.9],
      [60, 10.4, 1],
    ];
    for (const [x, z, s] of verge) this.tree(x, z, s);
    for (let x = -56; x <= 72; x += 7) this.tree(x + ((x * 7) % 3), 19 + ((x * 13) % 4) * 0.4, 0.9 + ((x * 3) % 5) * 0.08, x % 2 === 0);

    // Planting around the office and along the back of the site.
    const site: [number, number, number][] = [
      [-30, -8, 1.2],
      [-30, -13, 1],
      [-29.5, -18, 1.15],
      [-10.5, -14, 0.9],
      [-10.5, -18, 1],
      [-50, -10, 1.1],
      [-50, -18, 1],
      [66, -6, 1.1],
      [66, 1, 0.95],
      [34, -36, 1.1],
      [-20, -32, 1.2],
      [0, -26, 1],
      [12, -27, 1.1],
      [24, -26, 0.9],
    ];
    for (const [x, z, s] of site) this.tree(x, z, s, z < -20);

    // Background traffic on the public road.
    for (let i = 0; i < 6; i++) {
      const car = this.buildCar(CAR_COLORS[(i * 3) % CAR_COLORS.length]);
      const direction = i % 2 === 0 ? 1 : -1;
      car.rotation.y = (direction * Math.PI) / 2;
      this.scene.add(car);
      this.traffic.push({
        object: car,
        direction,
        lane: direction === 1 ? LANE_Z.inbound : LANE_Z.outbound,
        speed: 10 + (i % 3) * 1.5,
        offset: i * 47,
      });
    }
  }

  // ---------------------------------------------------------------- vehicles & assets

  private buildTrailer(logo: boolean) {
    // Faces +z; the rear doors sit at z = 0.
    const trailer = new THREE.Group();
    this.box(trailer, [1.9, 0.3, 6.2], [0, 0.55, 3.1], COLORS.dark);
    this.box(trailer, [2.4, 2.6, 5.6], [0, 2.0, 2.85], COLORS.wall, 0.08);
    this.box(trailer, [2.42, 0.22, 5.4], [0, 0.85, 2.85], COLORS.brand);
    const wheel = new THREE.CylinderGeometry(0.45, 0.45, 0.32, 18);
    wheel.rotateZ(Math.PI / 2);
    for (const z of [0.9, 2.0]) {
      for (const x of [-1.05, 1.05]) {
        const mesh = new THREE.Mesh(wheel, this.material(COLORS.tyre));
        mesh.position.set(x, 0.45, z);
        trailer.add(mesh);
      }
    }
    if (logo) {
      for (const side of [-1, 1]) {
        const decal = this.decal(trailer, this.logoTexture, [4.4, 0.69]);
        decal.position.set(side * 1.215, 2.15, 2.85);
        decal.rotation.y = side * (Math.PI / 2);
      }
    }
    return trailer;
  }

  private buildTruck() {
    // A trailer plus cab, facing +z, so it can back straight onto a dock.
    const truck = this.buildTrailer(true);
    this.box(truck, [1.9, 0.3, 1.4], [0, 0.55, 6.85], COLORS.dark);
    this.box(truck, [2.3, 2.1, 1.8], [0, 1.65, 6.75], COLORS.brand, 0.18);
    this.box(truck, [2.0, 0.7, 0.06], [0, 2.15, 7.66], COLORS.glass);
    this.box(truck, [0.06, 0.6, 0.9], [-1.16, 2.15, 6.9], COLORS.glass);
    this.box(truck, [0.06, 0.6, 0.9], [1.16, 2.15, 6.9], COLORS.glass);
    this.box(truck, [2.36, 0.3, 0.2], [0, 0.7, 7.65], COLORS.dark);
    const wheel = new THREE.CylinderGeometry(0.45, 0.45, 0.32, 18);
    wheel.rotateZ(Math.PI / 2);
    for (const x of [-1.05, 1.05]) {
      const mesh = new THREE.Mesh(wheel, this.material(COLORS.tyre));
      mesh.position.set(x, 0.45, 6.6);
      truck.add(mesh);
    }
    return truck;
  }

  private buildCar(color: string) {
    // Faces +z, centred.
    const car = new THREE.Group();
    this.box(car, [1.8, 0.65, 4], [0, 0.62, 0], color, 0.2);
    this.box(car, [1.6, 0.55, 2.1], [0, 1.2, -0.2], COLORS.glass, 0.15);
    this.box(car, [1.62, 0.1, 1.8], [0, 1.5, -0.25], color, 0.04);
    const wheel = new THREE.CylinderGeometry(0.34, 0.34, 0.25, 14);
    wheel.rotateZ(Math.PI / 2);
    for (const z of [-1.25, 1.25]) {
      for (const x of [-0.85, 0.85]) {
        const mesh = new THREE.Mesh(wheel, this.material(COLORS.tyre));
        mesh.position.set(x, 0.34, z);
        car.add(mesh);
      }
    }
    return car;
  }

  private buildForklift() {
    // Faces +z (forks forward), centred on the drive axle.
    const forklift = new THREE.Group();
    this.box(forklift, [1.1, 0.7, 1.5], [0, 0.6, -0.1], COLORS.yellow, 0.1);
    this.box(forklift, [1.1, 0.65, 0.4], [0, 0.65, -0.95], COLORS.dark, 0.06);
    this.box(forklift, [0.6, 0.35, 0.5], [0, 1.1, -0.35], COLORS.dark, 0.08);
    for (const x of [-0.48, 0.48]) {
      for (const z of [-0.65, 0.45]) this.box(forklift, [0.07, 1.25, 0.07], [x, 1.55, z], COLORS.dark);
    }
    this.box(forklift, [1.1, 0.07, 1.2], [0, 2.18, -0.1], COLORS.dark);
    this.box(forklift, [0.09, 2.1, 0.09], [-0.36, 1.1, 0.78], COLORS.dark);
    this.box(forklift, [0.09, 2.1, 0.09], [0.36, 1.1, 0.78], COLORS.dark);
    this.box(forklift, [0.8, 0.08, 0.08], [0, 2.1, 0.78], COLORS.dark);
    this.box(forklift, [0.8, 0.35, 0.06], [0, 0.4, 0.84], COLORS.steel);
    this.box(forklift, [0.12, 0.06, 0.95], [-0.24, 0.2, 1.3], COLORS.steel);
    this.box(forklift, [0.12, 0.06, 0.95], [0.24, 0.2, 1.3], COLORS.steel);
    const wheel = new THREE.CylinderGeometry(0.26, 0.26, 0.22, 14);
    wheel.rotateZ(Math.PI / 2);
    for (const z of [-0.65, 0.45]) {
      for (const x of [-0.56, 0.56]) {
        const mesh = new THREE.Mesh(wheel, this.material(COLORS.tyre));
        mesh.position.set(x, 0.26, z);
        forklift.add(mesh);
      }
    }
    const load = new THREE.Group();
    this.box(load, [0.95, 0.14, 0.95], [0, 0.3, 1.3], COLORS.wood);
    this.box(load, [0.85, 0.6, 0.85], [0, 0.67, 1.3], COLORS.carton, 0.04);
    forklift.add(load);
    return { forklift, load };
  }

  private buildPallet(wrap: "carton" | "film") {
    const pallet = new THREE.Group();
    this.box(pallet, [1.3, 0.16, 1.3], [0, 0.08, 0], COLORS.wood);
    if (wrap === "film") {
      this.box(pallet, [1.22, 1.05, 1.22], [0, 0.7, 0], COLORS.brand, 0.06);
      this.box(pallet, [1.24, 0.08, 1.24], [0, 0.55, 0], COLORS.deep);
    } else {
      for (const [x, z] of [
        [-0.31, -0.31],
        [0.31, -0.31],
        [-0.31, 0.31],
        [0.31, 0.31],
      ]) {
        this.box(pallet, [0.58, 0.48, 0.58], [x, 0.41, z], COLORS.carton, 0.03);
      }
      this.box(pallet, [0.58, 0.44, 0.58], [-0.31, 0.87, -0.31], COLORS.cartonDark, 0.03);
      this.box(pallet, [0.58, 0.44, 0.58], [0.31, 0.87, 0.31], COLORS.carton, 0.03);
    }
    return pallet;
  }

  private buildPin() {
    const pin = new THREE.Group();
    const material = this.material(COLORS.brand, { roughness: 0.35, emissive: COLORS.brand, emissiveIntensity: 0.15 });
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.34, 24, 16), material);
    head.position.y = 0.62;
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.27, 0.6, 24), material);
    tip.rotation.x = Math.PI;
    tip.position.y = 0.3;
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.13, 16, 12), this.material("#ffffff"));
    dot.position.set(0, 0.64, 0.24);
    pin.add(head, tip, dot);
    return pin;
  }

  private buildAssets() {
    for (const truck of initialState.trucks) {
      const group = this.buildTruck();
      this.register({ kind: "truck", id: truck.id }, group, 3.7, 3.8);
      const dock = truck.dockId ? initialState.docks.find((d) => d.id === truck.dockId) : undefined;
      if (dock) {
        group.position.set(DOOR_X[dock.door], 0, WALL_FRONT + 0.5);
      } else if (truck.lane) {
        const direction = truck.lane === "inbound" ? 1 : -1;
        group.rotation.y = (direction * Math.PI) / 2;
        this.traffic.push({
          object: group,
          direction,
          lane: LANE_Z[truck.lane],
          speed: 7,
          offset: truck.lane === "inbound" ? 100 : 150,
        });
      }
    }

    const routes = {
      inbound: makeRoute(
        [
          [2.55, -2.6],
          [2.55, 0.1],
          [4.9, 0.1],
          [4.9, 0.9],
        ],
        2.1,
        1.4,
        0,
      ),
      outbound: makeRoute(
        [
          [15.6, 1.3],
          [15.6, 0.2],
          [16.5, 0.2],
          [16.5, -2.6],
        ],
        1.8,
        1.4,
        3.3,
      ),
    };

    for (const forklift of initialState.forklifts) {
      const { forklift: group, load } = this.buildForklift();
      const entity = this.register({ kind: "forklift", id: forklift.id }, group, 2.7);
      if (forklift.route) {
        this.movers.push({ entity, route: routes[forklift.route], load, heading: 0 });
      } else {
        load.visible = false;
        const [x, z, heading] = PARKED[forklift.bay] ?? [0, 0, 0];
        group.position.set(x, 0, z);
        group.rotation.y = heading;
      }
    }

    for (const pallet of initialState.pallets) {
      const group = this.buildPallet(pallet.wrap);
      const [x, z] = PALLET_SLOTS[pallet.slot];
      group.position.set(x, 0, z);
      if (pallet.pinned) {
        const pin = this.buildPin();
        pin.position.y = pallet.wrap === "film" ? 1.35 : 1.2;
        pin.userData.baseY = pin.position.y;
        group.add(pin);
        this.pins.push(pin);
      }
      this.register({ kind: "pallet", id: pallet.id }, group, pallet.pinned ? 2.35 : 1.5);
    }
  }

  // ------------------------------------------------------------ interaction

  private resize = () => {
    const canvas = this.options.canvas;
    this.width = canvas.clientWidth || window.innerWidth;
    this.height = canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(this.width, this.height, false);
  };

  private pick(event: PointerEvent): AssetRef | null {
    const rect = this.options.canvas.getBoundingClientRect();
    this.pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const hit = this.raycaster.intersectObjects(this.pickTargets, true)[0];
    let object: THREE.Object3D | null = hit?.object ?? null;
    while (object && !object.userData.asset) object = object.parent;
    return (object?.userData.asset as AssetRef | undefined) ?? null;
  }

  private onPointerDown = (event: PointerEvent) => {
    if (event.button !== 0) return;
    this.down = true;
    this.dragging = false;
    this.downX = this.lastX = event.clientX;
    this.downY = this.lastY = event.clientY;
    this.options.canvas.setPointerCapture(event.pointerId);
  };

  private onPointerMove = (event: PointerEvent) => {
    if (!this.down) {
      this.hoverDirty = true;
      this.hoverEvent = event;
      return;
    }
    if (!this.dragging && Math.hypot(event.clientX - this.downX, event.clientY - this.downY) > 5) {
      this.dragging = true;
      this.follow = false;
      this.options.canvas.style.cursor = "grabbing";
    }
    if (!this.dragging) return;

    // Convert the screen delta into a ground-plane move under the orthographic camera.
    const unitsPerPixel = (this.camera.top - this.camera.bottom) / this.camera.zoom / this.height;
    const dx = (event.clientX - this.lastX) * unitsPerPixel;
    const dy = ((event.clientY - this.lastY) * unitsPerPixel) / Math.sin(ELEVATION);
    const sin = Math.sin(this.azimuth);
    const cos = Math.cos(this.azimuth);
    // Camera right = (cos, 0, -sin); ground "forward" away from the camera = (-sin, 0, -cos).
    this.desiredTarget.x += -cos * dx - sin * dy;
    this.desiredTarget.z += sin * dx - cos * dy;
    this.clampTarget(this.desiredTarget);
    this.target.copy(this.desiredTarget);
    this.lastX = event.clientX;
    this.lastY = event.clientY;
  };

  private onPointerUp = (event: PointerEvent) => {
    if (!this.down) return;
    this.down = false;
    if (this.options.canvas.hasPointerCapture(event.pointerId)) this.options.canvas.releasePointerCapture(event.pointerId);
    this.options.canvas.style.cursor = "";
    if (this.dragging || event.type === "pointercancel") return;
    this.options.onSelect(this.pick(event));
  };

  private onPointerLeave = () => {
    this.hoverEvent = null;
    if (!this.down) this.options.canvas.style.cursor = "";
  };

  private onWheel = (event: WheelEvent) => {
    event.preventDefault();
    this.zoomBy(Math.exp(-event.deltaY * 0.0015));
  };

  private clampTarget(target: THREE.Vector3) {
    target.x = THREE.MathUtils.clamp(target.x, PAN_BOUNDS.minX, PAN_BOUNDS.maxX);
    target.z = THREE.MathUtils.clamp(target.z, PAN_BOUNDS.minZ, PAN_BOUNDS.maxZ);
  }

  // ---------------------------------------------------------------- frame

  private updateMovers(time: number, dt: number) {
    const t = this.options.reducedMotion ? 2 : time;
    for (const vehicle of this.traffic) {
      const travelled = (t * vehicle.speed + vehicle.offset) % ROAD_LENGTH;
      vehicle.object.position.set(vehicle.direction * (travelled - ROAD_LENGTH / 2), 0, vehicle.lane);
    }
    for (const mover of this.movers) {
      const { laden, moving } = sampleRoute(mover.route, t, this.tmp, this.tmpDir);
      const group = mover.entity.group;
      group.position.copy(this.tmp);
      if (moving || mover.heading === 0) {
        const heading = Math.atan2(this.tmpDir.x, this.tmpDir.z);
        mover.heading = mover.heading + wrapAngle(heading - mover.heading);
      }
      group.rotation.y = damp(group.rotation.y, mover.heading, 9, dt);
      mover.load.visible = laden;
    }
    for (const [i, pin] of this.pins.entries()) {
      pin.position.y = pin.userData.baseY + (this.options.reducedMotion ? 0 : Math.sin(time * 2.2 + i) * 0.12);
      pin.rotation.y = this.options.reducedMotion ? 0 : time * 1.2;
    }
  }

  private updateHover() {
    if (!this.hoverDirty || !this.hoverEvent || this.down) return;
    this.hoverDirty = false;
    this.options.canvas.style.cursor = this.pick(this.hoverEvent) ? "pointer" : "";
  }

  private updateCamera(dt: number) {
    if (this.selected && this.follow) {
      this.selected.anchor.getWorldPosition(this.tmp);
      this.desiredTarget.set(this.tmp.x, 0, this.tmp.z);
      this.clampTarget(this.desiredTarget);
    }
    const speed = this.options.reducedMotion ? 30 : 4.5;
    this.target.x = damp(this.target.x, this.desiredTarget.x, speed, dt);
    this.target.z = damp(this.target.z, this.desiredTarget.z, speed, dt);
    this.azimuth = damp(this.azimuth, this.desiredAzimuth, speed, dt);
    this.zoom = damp(this.zoom, this.desiredZoom, speed, dt);

    const aspect = this.width / this.height;
    const halfHeight = Math.max(VIEW_HEIGHT, VIEW_WIDTH / aspect) / 2;
    this.camera.left = -halfHeight * aspect;
    this.camera.right = halfHeight * aspect;
    this.camera.top = halfHeight;
    this.camera.bottom = -halfHeight;
    this.camera.zoom = this.zoom;
    this.camera.updateProjectionMatrix();

    const flat = Math.cos(ELEVATION) * DISTANCE;
    this.camera.position.set(
      this.target.x + Math.sin(this.azimuth) * flat,
      Math.sin(ELEVATION) * DISTANCE,
      this.target.z + Math.cos(this.azimuth) * flat,
    );
    this.camera.lookAt(this.target);
  }

  private updateSelection(time: number) {
    const tag = this.options.tag;
    if (!this.selected) {
      if (tag) tag.style.opacity = "0";
      return;
    }
    const { group, anchor } = this.selected;
    group.updateWorldMatrix(true, true);
    anchor.getWorldPosition(this.tmp);
    this.ring.position.set(this.tmp.x, 0.04, this.tmp.z);
    this.ring.scale.setScalar(this.ringScale);
    const pulse = this.options.reducedMotion ? 0.5 : (time * 0.8) % 1;
    this.ringPulse.scale.setScalar(1 + pulse * 0.45);
    this.ringPulse.material.opacity = 0.55 * (1 - pulse);

    if (!tag) return;
    this.tmp.project(this.camera);
    const x = (this.tmp.x * 0.5 + 0.5) * this.width;
    const y = (-this.tmp.y * 0.5 + 0.5) * this.height;
    tag.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
    tag.style.opacity = "1";
  }

  private tick = () => {
    this.frame = requestAnimationFrame(this.tick);
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const time = this.clock.elapsedTime;

    this.updateMovers(time, dt);
    this.updateHover();
    this.updateCamera(dt);
    this.updateSelection(time);

    this.renderer.render(this.scene, this.camera);
    if (!this.rendered) {
      this.rendered = true;
      this.options.onReady();
    }
  };
}
