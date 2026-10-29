import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

export type ServiceIconKind = "strategy" | "immersive" | "game" | "cloud" | "web" | "mobile" | "classroom";

type Stage = {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
};

// Product-render look: white and graphite with a single brand-green accent.
function createMaterials() {
  return {
    shell: new THREE.MeshPhysicalMaterial({ color: "#f2f2f5", roughness: 0.35, clearcoat: 0.8, clearcoatRoughness: 0.2 }),
    graphite: new THREE.MeshPhysicalMaterial({ color: "#2c2c2e", roughness: 0.3, metalness: 0.2, clearcoat: 1 }),
    glass: new THREE.MeshPhysicalMaterial({ color: "#0b0b0d", roughness: 0.05, metalness: 0.1, clearcoat: 1 }),
    accent: new THREE.MeshStandardMaterial({ color: "#30d158", emissive: "#30d158", emissiveIntensity: 0.35, roughness: 0.4 }),
  };
}

function box(w: number, h: number, d: number, radius: number, material: THREE.Material) {
  return new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, Math.min(radius, Math.min(w, h, d) / 2 - 0.001)), material);
}

function place<T extends THREE.Object3D>(object: T, x: number, y: number, z: number) {
  object.position.set(x, y, z);
  return object;
}

export function buildServiceIcon(kind: ServiceIconKind) {
  const m = createMaterials();
  const icon = new THREE.Group();

  switch (kind) {
    case "strategy": {
      icon.add(place(box(1.9, 0.12, 0.9, 0.05, m.graphite), 0, -0.82, 0));
      [0.6, 1.0, 1.5].forEach((height, i) => {
        icon.add(place(box(0.42, height, 0.42, 0.1, i === 2 ? m.accent : m.shell), (i - 1) * 0.58, -0.76 + height / 2, 0));
      });
      break;
    }
    case "immersive": {
      icon.add(box(1.7, 0.85, 0.75, 0.3, m.shell));
      icon.add(place(box(1.5, 0.62, 0.06, 0.12, m.glass), 0, 0, 0.36));
      const strap = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.07, 12, 48, Math.PI), m.graphite);
      strap.rotation.x = -Math.PI / 2;
      icon.add(strap);
      icon.add(place(new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 16), m.accent), 0.58, 0.22, 0.4));
      break;
    }
    case "game": {
      icon.add(box(1.9, 0.75, 0.5, 0.25, m.shell));
      for (const side of [-1, 1]) {
        const grip = new THREE.Mesh(new THREE.CapsuleGeometry(0.27, 0.35, 8, 24), m.shell);
        grip.position.set(side * 0.68, -0.32, 0);
        grip.rotation.z = side * 0.55;
        icon.add(grip);
      }
      icon.add(place(box(0.34, 0.1, 0.08, 0.03, m.graphite), -0.5, 0.05, 0.26));
      icon.add(place(box(0.1, 0.34, 0.08, 0.03, m.graphite), -0.5, 0.05, 0.26));
      [
        [0.5, 0.17],
        [0.62, 0.05],
        [0.5, -0.07],
        [0.38, 0.05],
      ].forEach(([x, y], i) => {
        const button = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), i === 0 ? m.accent : m.graphite);
        icon.add(place(button, x, y, 0.26));
      });
      break;
    }
    case "cloud": {
      icon.add(place(box(1.7, 0.55, 0.8, 0.27, m.shell), 0, -0.3, 0));
      [
        [-0.5, -0.05, 0.42],
        [0.08, 0.18, 0.58],
        [0.58, -0.08, 0.4],
      ].forEach(([x, y, r]) => {
        icon.add(place(new THREE.Mesh(new THREE.SphereGeometry(r, 32, 32), m.shell), x, y, 0));
      });
      icon.add(place(new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 16), m.accent), 0.05, -0.18, 0.62));
      icon.add(place(new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.22, 24), m.accent), 0.05, 0.06, 0.62));
      break;
    }
    case "web": {
      icon.add(box(2, 1.4, 0.14, 0.07, m.shell));
      [-0.82, -0.68, -0.54].forEach((x, i) => {
        icon.add(place(new THREE.Mesh(new THREE.SphereGeometry(0.045, 16, 16), i === 2 ? m.accent : m.graphite), x, 0.56, 0.08));
      });
      icon.add(place(box(1.82, 1.0, 0.03, 0.04, m.glass), 0, -0.1, 0.08));
      icon.add(place(box(0.95, 0.14, 0.03, 0.03, m.accent), -0.36, 0.2, 0.1));
      icon.add(place(box(1.36, 0.06, 0.03, 0.02, m.shell), -0.13, 0.02, 0.1));
      icon.add(place(box(1.0, 0.06, 0.03, 0.02, m.shell), -0.31, -0.1, 0.1));
      [-0.56, 0, 0.56].forEach((x) => icon.add(place(box(0.48, 0.26, 0.03, 0.04, m.shell), x, -0.4, 0.1)));
      break;
    }
    case "mobile": {
      icon.add(box(0.92, 1.8, 0.12, 0.16, m.graphite));
      icon.add(place(box(0.82, 1.68, 0.02, 0.12, m.glass), 0, 0, 0.06));
      icon.add(place(box(0.24, 0.07, 0.01, 0.03, m.graphite), 0, 0.71, 0.075));
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const tile = box(0.17, 0.17, 0.03, 0.05, row === 0 && col === 0 ? m.accent : m.shell);
          icon.add(place(tile, (col - 1) * 0.24, 0.38 - row * 0.26, 0.08));
        }
      }
      icon.add(place(box(0.64, 0.12, 0.03, 0.05, m.shell), 0, -0.6, 0.08));
      break;
    }
    case "classroom": {
      const cap = new THREE.Group();
      const board = box(1.5, 0.08, 1.5, 0.03, m.graphite);
      board.rotation.y = Math.PI / 4;
      cap.add(board);
      cap.add(place(new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.52, 0.38, 48), m.graphite), 0, -0.22, 0));
      cap.add(place(new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 16), m.accent), 0, 0.07, 0));
      cap.add(place(new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.55, 8), m.accent), 0.95, -0.24, 0));
      cap.position.y = 0.45;
      cap.rotation.z = -0.08;
      icon.add(cap);

      const visor = new THREE.Group();
      visor.add(box(1.3, 0.62, 0.55, 0.22, m.shell));
      visor.add(place(box(1.14, 0.44, 0.05, 0.1, m.glass), 0, 0, 0.27));
      visor.position.set(0, -0.45, 0.25);
      icon.add(visor);
      break;
    }
  }

  return icon;
}

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    const mesh = child as THREE.Mesh;
    mesh.geometry?.dispose();
    (mesh.material as THREE.Material | undefined)?.dispose();
  });
}

function createStage(renderer: THREE.WebGLRenderer): Stage {
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();

  const key = new THREE.DirectionalLight("#ffffff", 1.2);
  key.position.set(3, 5, 4);
  scene.add(key);

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
  camera.position.set(0, 0.35, 6.4);
  camera.lookAt(0, 0, 0);
  return { renderer, scene, camera };
}

let thumbnailStage: Stage | null = null;

// Renders a still of the icon into a 2D canvas, sharing one WebGL context across every thumbnail.
export function drawServiceIcon(canvas: HTMLCanvasElement, kind: ServiceIconKind) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  try {
    thumbnailStage ??= createStage(new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true }));
  } catch {
    return;
  }
  const { renderer, scene, camera } = thumbnailStage;
  renderer.setSize(canvas.width, canvas.height, false);

  const icon = buildServiceIcon(kind);
  icon.rotation.set(0.2, -0.55, 0);
  scene.add(icon);
  renderer.render(scene, camera);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(renderer.domElement, 0, 0, canvas.width, canvas.height);
  scene.remove(icon);
  disposeObject(icon);
}

// Live, slowly turning icon for the service detail view. Drag to spin it.
export class ServiceIconViewer {
  private readonly stage: Stage;
  private readonly icon: THREE.Group;
  private readonly canvas: HTMLCanvasElement;
  private readonly clock = new THREE.Clock();
  private readonly reducedMotion: boolean;
  private frame = 0;
  private yaw = -0.55;
  private velocity = 0;
  private dragX: number | null = null;

  constructor(canvas: HTMLCanvasElement, kind: ServiceIconKind) {
    this.canvas = canvas;
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.stage = createStage(new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true }));
    this.stage.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.icon = buildServiceIcon(kind);
    this.stage.scene.add(this.icon);

    canvas.addEventListener("pointerdown", this.onDown);
    window.addEventListener("pointermove", this.onMove);
    window.addEventListener("pointerup", this.onUp);
    this.frame = requestAnimationFrame(this.tick);
  }

  dispose() {
    cancelAnimationFrame(this.frame);
    this.canvas.removeEventListener("pointerdown", this.onDown);
    window.removeEventListener("pointermove", this.onMove);
    window.removeEventListener("pointerup", this.onUp);
    disposeObject(this.icon);
    this.stage.scene.environment?.dispose();
    this.stage.renderer.dispose();
  }

  private onDown = (event: PointerEvent) => {
    this.dragX = event.clientX;
  };

  private onMove = (event: PointerEvent) => {
    if (this.dragX === null) return;
    this.velocity = (event.clientX - this.dragX) * 0.01;
    this.yaw += this.velocity;
    this.dragX = event.clientX;
  };

  private onUp = () => {
    this.dragX = null;
  };

  private tick = () => {
    this.frame = requestAnimationFrame(this.tick);
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const time = this.clock.elapsedTime;
    const { renderer, scene, camera } = this.stage;

    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    if (this.canvas.width !== Math.floor(width * renderer.getPixelRatio())) {
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    if (this.dragX === null) {
      this.velocity *= Math.pow(0.05, dt);
      this.yaw += this.velocity + (this.reducedMotion ? 0 : 0.35 * dt);
    }
    this.icon.rotation.set(0.2 + (this.reducedMotion ? 0 : Math.sin(time * 0.8) * 0.05), this.yaw, 0);
    this.icon.position.y = this.reducedMotion ? 0 : Math.sin(time * 1.2) * 0.06;
    renderer.render(scene, camera);
  };
}
