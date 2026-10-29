import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

type SceneOptions = {
  canvas: HTMLCanvasElement;
  count: number;
  labels: (HTMLElement | null)[];
  reducedMotion: boolean;
  onHover: (index: number | null) => void;
  onSelect: (index: number) => void;
  onHome: () => void;
  onReady: () => void;
};

type DataNode = {
  anchor: THREE.Group;
  spin: THREE.Group;
  core: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;
  edges: THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial>;
  shell: THREE.LineSegments<THREE.BufferGeometry, THREE.LineBasicMaterial>;
  orbit: THREE.Mesh;
  angle: number;
  baseY: number;
  phase: number;
  scale: number;
  unfold: number;
  spinStart: number;
  spinFrom: number;
  spinTo: number;
};

const RING_RADIUS = 5.2;
const CORE_Y = 1.45;
const BURST_COUNT = 90;
const BURST_LIFE = 1.4;
const DATA_COUNT = 240;
const PULSES_PER_LINK = 2;

const GREEN = new THREE.Color("#3dff7a");
const CYAN = new THREE.Color("#33dcff");

function damp(current: number, target: number, lambda: number, dt: number) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * dt));
}

function wrapAngle(angle: number) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

// One distinct solid per section so each node reads differently at a glance.
function createNodeGeometry(index: number) {
  switch (index % 6) {
    case 0:
      return new THREE.IcosahedronGeometry(0.62, 0);
    case 1:
      return new THREE.OctahedronGeometry(0.72, 0);
    case 2:
      return new THREE.BoxGeometry(0.88, 0.88, 0.88);
    case 3:
      return new THREE.DodecahedronGeometry(0.64, 0);
    case 4:
      return new THREE.CylinderGeometry(0.58, 0.58, 0.8, 6);
    default:
      return new THREE.IcosahedronGeometry(0.62, 1);
  }
}

function createGridTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, size, size);
  ctx.strokeStyle = "#1e7a52";
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, size, size);
  ctx.fillStyle = "#3dffb0";
  ctx.fillRect(0, 0, 4, 4);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(40, 40);
  texture.anisotropy = 8;
  return texture;
}

function createGlowSprite() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.25, "rgba(255,255,255,0.7)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

export class NetworkScene {
  private readonly options: SceneOptions;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly composer: EffectComposer;
  private readonly bloom: UnrealBloomPass;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
  private readonly clock = new THREE.Clock();
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointer = new THREE.Vector2(-10, -10);
  private readonly ring = new THREE.Group();
  private readonly logo = new THREE.Group();
  private readonly nodes: DataNode[] = [];
  private readonly pickTargets: THREE.Object3D[] = [];
  private readonly disposables: { dispose: () => void }[] = [];

  private links!: THREE.LineSegments;
  private pulses!: THREE.Points;
  private data!: THREE.Points;
  private dataSpeeds = new Float32Array(DATA_COUNT);
  private scanRing!: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial>;
  private burst!: THREE.Points;
  private burstVelocities = new Float32Array(BURST_COUNT * 3);
  private burstAge = BURST_LIFE;

  private cameraPos = new THREE.Vector3(0, 9, 34);
  private cameraTarget = new THREE.Vector3(0, 2, 0);
  private ringVelocity = 0;
  private selected: number | null = null;
  private hovered: number | null = null;
  private hoveringLogo = false;
  private dragging = false;
  private downX = 0;
  private downY = 0;
  private lastX = 0;
  private frame = 0;
  private rendered = false;
  private width = 1;
  private height = 1;
  private readonly tmp = new THREE.Vector3();
  private readonly desiredPos = new THREE.Vector3();
  private readonly desiredTarget = new THREE.Vector3();

  constructor(options: SceneOptions) {
    this.options = options;
    this.renderer = new THREE.WebGLRenderer({ canvas: options.canvas, antialias: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;

    this.scene.background = new THREE.Color("#02080a");
    this.scene.fog = new THREE.FogExp2("#02080a", 0.038);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.75, 0.5, 0.6);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());

    this.buildLights();
    this.buildEnvironment();
    this.buildLogo();
    this.buildNodes();
    this.buildNetwork();
    this.buildParticles();
    this.scene.add(this.ring);

    if (options.reducedMotion) {
      this.cameraPos.set(0, 2.8, 13);
    }

    this.resize();
    window.addEventListener("resize", this.resize);
    options.canvas.addEventListener("pointerdown", this.onPointerDown);
    window.addEventListener("pointermove", this.onPointerMove);
    window.addEventListener("pointerup", this.onPointerUp);
    options.canvas.addEventListener("pointerleave", this.onPointerLeave);
    this.frame = requestAnimationFrame(this.tick);
  }

  select(index: number | null) {
    if (index === this.selected) return;
    this.selected = index;
    if (index === null) return;

    // Two full turns, landing face-on once the ring brings it to the front.
    const node = this.nodes[index];
    const turn = Math.PI * 2;
    node.spinStart = this.clock.elapsedTime;
    node.spinFrom = node.spin.rotation.y;
    node.spinTo = node.angle + Math.round((node.spinFrom - node.angle) / turn) * turn + turn * 2;
    this.ringVelocity = 0;
    this.triggerBurst(index);
  }

  dispose() {
    cancelAnimationFrame(this.frame);
    window.removeEventListener("resize", this.resize);
    this.options.canvas.removeEventListener("pointerdown", this.onPointerDown);
    window.removeEventListener("pointermove", this.onPointerMove);
    window.removeEventListener("pointerup", this.onPointerUp);
    this.options.canvas.removeEventListener("pointerleave", this.onPointerLeave);

    this.scene.traverse((object) => {
      const mesh = object as THREE.Mesh;
      mesh.geometry?.dispose();
      const material = mesh.material as THREE.Material | THREE.Material[] | undefined;
      if (Array.isArray(material)) material.forEach((m) => m.dispose());
      else material?.dispose();
    });
    this.disposables.forEach((d) => d.dispose());
    this.composer.dispose();
    this.renderer.dispose();
  }

  private buildLights() {
    this.scene.add(new THREE.HemisphereLight("#bfefff", "#04140c", 0.6));

    const key = new THREE.DirectionalLight("#ffffff", 1.8);
    key.position.set(4, 8, 9);
    this.scene.add(key);

    const rim = new THREE.DirectionalLight("#33dcff", 1.6);
    rim.position.set(-6, 3, -8);
    this.scene.add(rim);

    const core = new THREE.PointLight("#3dff7a", 14, 14, 1.6);
    core.position.set(0, CORE_Y, 0);
    this.scene.add(core);
  }

  private buildEnvironment() {
    const gridTexture = createGridTexture();
    this.disposables.push(gridTexture);
    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(40, 64),
      new THREE.MeshStandardMaterial({
        color: "#020b0b",
        roughness: 0.6,
        metalness: 0.5,
        emissive: "#ffffff",
        emissiveMap: gridTexture,
        emissiveIntensity: 0.14,
      }),
    );
    floor.rotation.x = -Math.PI / 2;
    this.scene.add(floor);

    const orbitPath = new THREE.Mesh(
      new THREE.RingGeometry(RING_RADIUS - 0.03, RING_RADIUS + 0.03, 128),
      new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending }),
    );
    orbitPath.rotation.x = -Math.PI / 2;
    orbitPath.position.y = 0.01;
    this.scene.add(orbitPath);

    this.scanRing = new THREE.Mesh(
      new THREE.RingGeometry(0.96, 1, 96),
      new THREE.MeshBasicMaterial({ color: GREEN, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    this.scanRing.rotation.x = -Math.PI / 2;
    this.scanRing.position.y = 0.02;
    this.scene.add(this.scanRing);

    const platform = new THREE.Mesh(
      new THREE.CylinderGeometry(1.5, 1.7, 0.25, 6),
      new THREE.MeshStandardMaterial({ color: "#071a16", roughness: 0.3, metalness: 0.8, flatShading: true }),
    );
    platform.position.y = 0.125;
    this.scene.add(platform);

    const platformEdge = new THREE.LineSegments(
      new THREE.EdgesGeometry(platform.geometry),
      new THREE.LineBasicMaterial({ color: GREEN, transparent: true, opacity: 0.9 }),
    );
    platformEdge.position.copy(platform.position);
    this.scene.add(platformEdge);

    const starGeometry = new THREE.BufferGeometry();
    const stars = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.45;
      const r = 70 + Math.random() * 20;
      stars[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      stars[i * 3 + 1] = r * Math.cos(phi) - 8;
      stars[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(stars, 3));
    this.scene.add(
      new THREE.Points(
        starGeometry,
        new THREE.PointsMaterial({ color: "#a8e8ff", size: 0.18, sizeAttenuation: true, transparent: true, opacity: 0.55, fog: false }),
      ),
    );
  }

  // The KetupArt mark: a 4x4 grid of rounded blocks in two greens.
  private buildLogo() {
    const dark = new THREE.MeshStandardMaterial({ color: "#006f00", roughness: 0.3, metalness: 0.3, emissive: "#003a00", emissiveIntensity: 0.15 });
    const light = new THREE.MeshStandardMaterial({ color: "#00a000", roughness: 0.3, metalness: 0.3, emissive: "#0a6a00", emissiveIntensity: 0.2 });
    const cube = new RoundedBoxGeometry(0.88, 0.88, 0.88, 3, 0.12);
    const tall = new RoundedBoxGeometry(0.88, 1.88, 0.88, 3, 0.12);
    const blocks: [number, number, boolean, boolean?][] = [
      [2, 0.5, true, true],
      [0, 1, true],
      [1, 1, false],
      [3, 1, false],
      [0, 2, false],
      [1, 2, true],
      [2, 2, false],
      [0, 3, true],
      [1, 3, false],
      [2, 3, true],
    ];
    for (const [col, row, isDark, isTall] of blocks) {
      const mesh = new THREE.Mesh(isTall ? tall : cube, isDark ? dark : light);
      mesh.position.set(col - 1.5, 1.5 - row, 0);
      mesh.userData.home = true;
      this.logo.add(mesh);
      this.pickTargets.push(mesh);
    }
    this.logo.scale.setScalar(0.42);
    this.logo.position.y = CORE_Y;
    this.scene.add(this.logo);
  }

  private buildNodes() {
    const orbitGeometry = new THREE.TorusGeometry(1, 0.008, 6, 96);
    const hitGeometry = new THREE.SphereGeometry(0.95, 12, 12);
    const hitMaterial = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false });

    for (let i = 0; i < this.options.count; i++) {
      const angle = (i / this.options.count) * Math.PI * 2;
      const baseY = 2.1 + Math.sin(i * 2.1) * 0.45;

      const anchor = new THREE.Group();
      anchor.position.set(Math.sin(angle) * RING_RADIUS, baseY, Math.cos(angle) * RING_RADIUS);
      const spin = new THREE.Group();
      anchor.add(spin);

      const geometry = createNodeGeometry(i);
      const core = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
          color: "#0b2a1f",
          roughness: 0.22,
          metalness: 0.75,
          flatShading: true,
          emissive: GREEN,
          emissiveIntensity: 0.04,
        }),
      );
      spin.add(core);

      const edgeGeometry = new THREE.EdgesGeometry(geometry);
      const edges = new THREE.LineSegments(edgeGeometry, new THREE.LineBasicMaterial({ color: GREEN.clone() }));
      edges.scale.setScalar(1.002);
      spin.add(edges);

      const shell = new THREE.LineSegments(
        edgeGeometry,
        new THREE.LineBasicMaterial({ color: CYAN, transparent: true, opacity: 0.12, depthWrite: false }),
      );
      shell.scale.setScalar(1.35);
      anchor.add(shell);

      const orbit = new THREE.Mesh(
        orbitGeometry,
        new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending }),
      );
      orbit.rotation.x = Math.PI / 2 + 0.35;
      anchor.add(orbit);

      // A larger invisible sphere makes small nodes easier to hit, especially on touch.
      const hit = new THREE.Mesh(hitGeometry, hitMaterial);
      hit.userData.index = i;
      anchor.add(hit);
      this.pickTargets.push(hit);

      spin.rotation.y = angle;
      this.ring.add(anchor);
      this.nodes.push({
        anchor,
        spin,
        core,
        edges,
        shell,
        orbit,
        angle,
        baseY,
        phase: i * 1.7,
        scale: 1,
        unfold: 0,
        spinStart: -10,
        spinFrom: angle,
        spinTo: angle,
      });
    }
  }

  // Data links from each node to the core and to its neighbour, with pulses travelling along them.
  private buildNetwork() {
    const linkCount = this.nodes.length * 2;
    const linkGeometry = new THREE.BufferGeometry();
    linkGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linkCount * 6), 3));
    this.links = new THREE.LineSegments(
      linkGeometry,
      new THREE.LineBasicMaterial({ color: GREEN, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false }),
    );
    this.ring.add(this.links);

    const sprite = createGlowSprite();
    this.disposables.push(sprite);
    const pulseGeometry = new THREE.BufferGeometry();
    pulseGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(linkCount * PULSES_PER_LINK * 3), 3));
    this.pulses = new THREE.Points(
      pulseGeometry,
      new THREE.PointsMaterial({
        color: "#a8ffd0",
        map: sprite,
        size: 0.22,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    this.ring.add(this.pulses);
  }

  private buildParticles() {
    const sprite = createGlowSprite();
    this.disposables.push(sprite);

    const positions = new Float32Array(DATA_COUNT * 3);
    const colors = new Float32Array(DATA_COUNT * 3);
    const color = new THREE.Color();
    for (let i = 0; i < DATA_COUNT; i++) {
      const r = 2 + Math.random() * 13;
      const a = Math.random() * Math.PI * 2;
      positions.set([Math.cos(a) * r, Math.random() * 8, Math.sin(a) * r], i * 3);
      color.copy(GREEN).lerp(CYAN, Math.random());
      colors.set([color.r, color.g, color.b], i * 3);
      this.dataSpeeds[i] = 0.25 + Math.random() * 0.6;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    this.data = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        vertexColors: true,
        map: sprite,
        size: 0.1,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    this.scene.add(this.data);

    const burstGeometry = new THREE.BufferGeometry();
    burstGeometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(BURST_COUNT * 3), 3));
    this.burst = new THREE.Points(
      burstGeometry,
      new THREE.PointsMaterial({
        color: "#7fefff",
        map: sprite,
        size: 0.2,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    this.scene.add(this.burst);
  }

  private triggerBurst(index: number) {
    if (this.options.reducedMotion) return;
    this.nodes[index].anchor.getWorldPosition(this.tmp);
    const positions = this.burst.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < BURST_COUNT; i++) {
      positions.setXYZ(i, this.tmp.x, this.tmp.y, this.tmp.z);
      const dir = new THREE.Vector3().randomDirection().multiplyScalar(1.5 + Math.random() * 2.5);
      this.burstVelocities.set([dir.x, dir.y, dir.z], i * 3);
    }
    positions.needsUpdate = true;
    this.burstAge = 0;
  }

  private resize = () => {
    const canvas = this.options.canvas;
    this.width = canvas.clientWidth || window.innerWidth;
    this.height = canvas.clientHeight || window.innerHeight;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height, false);
    this.composer.setSize(this.width, this.height);
    this.bloom.resolution.set(this.width / 2, this.height / 2);
  };

  private updatePointer(event: PointerEvent) {
    const rect = this.options.canvas.getBoundingClientRect();
    this.pointer.set(((event.clientX - rect.left) / rect.width) * 2 - 1, -((event.clientY - rect.top) / rect.height) * 2 + 1);
  }

  private onPointerDown = (event: PointerEvent) => {
    this.dragging = true;
    this.downX = this.lastX = event.clientX;
    this.downY = event.clientY;
    this.updatePointer(event);
  };

  private onPointerMove = (event: PointerEvent) => {
    if (event.target === this.options.canvas) this.updatePointer(event);
    else this.pointer.set(-10, -10);

    if (this.dragging && this.selected === null) {
      this.ringVelocity += (event.clientX - this.lastX) * 0.0009;
      this.lastX = event.clientX;
    }
  };

  private onPointerUp = (event: PointerEvent) => {
    if (!this.dragging) return;
    this.dragging = false;
    if (Math.hypot(event.clientX - this.downX, event.clientY - this.downY) > 6) return;

    // Touch screens don't hover, so pick on release.
    this.updatePointer(event);
    const hit = this.pick();
    if (hit?.userData.home) this.options.onHome();
    else if (hit) this.options.onSelect(hit.userData.index as number);
  };

  private onPointerLeave = () => {
    this.pointer.set(-10, -10);
  };

  private pick() {
    this.raycaster.setFromCamera(this.pointer, this.camera);
    return this.raycaster.intersectObjects(this.pickTargets, false)[0]?.object ?? null;
  }

  private updateHover() {
    const hit = this.pick();
    const index = hit && !hit.userData.home ? (hit.userData.index as number) : null;
    this.hoveringLogo = Boolean(hit?.userData.home);
    if (index !== this.hovered) {
      this.hovered = index;
      this.options.onHover(index);
    }
    this.options.canvas.style.cursor = hit ? "pointer" : this.selected === null ? "grab" : "default";
  }

  private updateCamera(dt: number) {
    const aspect = this.width / this.height;
    const portrait = aspect < 0.8;

    if (this.selected === null) {
      const distance = portrait ? 19 : aspect < 1.25 ? 15 : 12.5;
      const shiftX = aspect > 1.3 ? -2.6 : 0;
      // Portrait screens put the hero copy on top, so the ring sits lower in frame.
      this.desiredTarget.set(shiftX, portrait ? 4.4 : 1.9, 0);
      this.desiredPos.set(shiftX, portrait ? 5.2 : 3.2, distance);
    } else {
      const nodeY = this.nodes[this.selected].baseY;
      if (portrait) {
        this.desiredTarget.set(0, nodeY - 1.7, RING_RADIUS);
        this.desiredPos.set(0, nodeY - 1.1, RING_RADIUS + 7.5);
      } else {
        this.desiredTarget.set(1.9, nodeY - 0.2, RING_RADIUS);
        this.desiredPos.set(1.9, nodeY + 0.4, RING_RADIUS + 5.6);
      }
    }

    const lambda = this.options.reducedMotion ? 20 : this.clock.elapsedTime < 3 ? 1.4 : 2.6;
    const t = 1 - Math.exp(-lambda * dt);
    this.cameraPos.lerp(this.desiredPos, t);
    this.cameraTarget.lerp(this.desiredTarget, t);
    this.camera.position.copy(this.cameraPos);
    this.camera.lookAt(this.cameraTarget);
  }

  private updateRing(dt: number) {
    if (this.selected !== null) {
      const target = -this.nodes[this.selected].angle;
      const current = this.ring.rotation.y;
      this.ring.rotation.y = damp(current, current + wrapAngle(target - current), 3.2, dt);
      return;
    }
    const idle = this.options.reducedMotion || this.hovered !== null ? 0 : 0.06;
    this.ring.rotation.y += idle * dt + this.ringVelocity;
    this.ringVelocity *= Math.pow(0.04, dt);
  }

  private updateNodes(time: number, dt: number) {
    const motion = this.options.reducedMotion ? 0 : 1;
    this.nodes.forEach((node, i) => {
      const isSelected = this.selected === i;
      const isHovered = this.hovered === i;

      node.anchor.position.y = node.baseY + Math.sin(time * 1.1 + node.phase) * 0.12 * motion;

      const spinT = (time - node.spinStart) / 1.6;
      if (isSelected && spinT < 1 && motion) {
        node.spin.rotation.y = THREE.MathUtils.lerp(node.spinFrom, node.spinTo, easeOutCubic(spinT));
      } else if (isSelected) {
        node.spin.rotation.y = damp(node.spin.rotation.y, node.spinTo + Math.sin(time * 0.6) * 0.45 * motion, 3, dt);
      } else {
        node.spin.rotation.y += (0.3 + (i % 3) * 0.08) * dt * motion;
      }
      node.spin.rotation.x = Math.sin(time * 0.5 + node.phase) * 0.15 * motion;

      // Selecting a node "opens" it: the outer wireframe expands and the orbit speeds up.
      node.unfold = damp(node.unfold, isSelected ? 1 : isHovered ? 0.35 : 0, 5, dt);
      node.shell.scale.setScalar(1.35 + node.unfold * 0.75);
      node.shell.rotation.y -= (0.2 + node.unfold * 0.8) * dt * motion;
      node.shell.rotation.x += 0.1 * dt * motion;
      node.shell.material.opacity = 0.12 + node.unfold * 0.18;
      node.orbit.rotation.z += (0.4 + node.unfold * 2.5) * dt * motion;
      node.orbit.scale.setScalar(1 + node.unfold * 0.35);

      const targetScale = isSelected ? 1.3 : isHovered ? 1.15 : 1;
      node.scale = damp(node.scale, targetScale, 8, dt);
      node.spin.scale.setScalar(node.scale);

      const glow = isSelected ? 0.3 + Math.sin(time * 3) * 0.08 : isHovered ? 0.35 : 0.04;
      node.core.material.emissiveIntensity = damp(node.core.material.emissiveIntensity, glow, 8, dt);
      node.edges.material.color.copy(GREEN).lerp(CYAN, node.unfold);

      this.updateLabel(i, node);
    });
  }

  private updateNetwork(time: number) {
    const links = this.links.geometry.attributes.position as THREE.BufferAttribute;
    const pulses = this.pulses.geometry.attributes.position as THREE.BufferAttribute;
    const count = this.nodes.length;
    const from = new THREE.Vector3();
    const to = new THREE.Vector3();

    for (let l = 0; l < count * 2; l++) {
      const node = this.nodes[l % count];
      from.copy(node.anchor.position);
      if (l < count) to.set(0, CORE_Y, 0);
      else to.copy(this.nodes[(l + 1) % count].anchor.position);
      links.setXYZ(l * 2, from.x, from.y, from.z);
      links.setXYZ(l * 2 + 1, to.x, to.y, to.z);

      for (let p = 0; p < PULSES_PER_LINK; p++) {
        // Spoke pulses flow into the core; ring pulses travel between neighbours.
        const t = (time * (l < count ? 0.35 : 0.22) + p / PULSES_PER_LINK + l * 0.13) % 1;
        this.tmp.lerpVectors(from, to, this.options.reducedMotion ? 0.5 : t);
        pulses.setXYZ(l * PULSES_PER_LINK + p, this.tmp.x, this.tmp.y, this.tmp.z);
      }
    }
    links.needsUpdate = true;
    pulses.needsUpdate = true;
  }

  private updateLabel(i: number, node: DataNode) {
    const el = this.options.labels[i];
    if (!el) return;
    node.anchor.getWorldPosition(this.tmp);
    // Sit above the node, clearing the wireframe shell as it expands.
    this.tmp.y += 1.05 + node.unfold * 0.6;
    const facing = Math.cos(node.angle + this.ring.rotation.y);
    this.tmp.project(this.camera);
    const x = (this.tmp.x * 0.5 + 0.5) * this.width;
    const y = (-this.tmp.y * 0.5 + 0.5) * this.height;
    const visible = this.tmp.z < 1;
    el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -100%)`;
    el.style.opacity = visible ? (0.3 + 0.7 * ((facing + 1) / 2)).toFixed(2) : "0";
    el.style.zIndex = String(Math.round((facing + 1) * 10));
  }

  private updateParticles(time: number, dt: number) {
    const motion = this.options.reducedMotion ? 0 : 1;
    const positions = this.data.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < DATA_COUNT; i++) {
      let y = positions.getY(i) + this.dataSpeeds[i] * dt * motion;
      if (y > 8) y = 0;
      positions.setY(i, y);
    }
    positions.needsUpdate = true;

    // Scanner pulse sweeping out across the floor every few seconds.
    const scan = (time * 0.25) % 1;
    this.scanRing.scale.setScalar(1.5 + scan * 14);
    this.scanRing.material.opacity = motion * 0.5 * (1 - scan);

    const material = this.burst.material as THREE.PointsMaterial;
    if (this.burstAge < BURST_LIFE) {
      this.burstAge += dt;
      const burstPositions = this.burst.geometry.attributes.position as THREE.BufferAttribute;
      const drag = Math.pow(0.15, dt);
      for (let i = 0; i < BURST_COUNT; i++) {
        this.burstVelocities[i * 3] *= drag;
        this.burstVelocities[i * 3 + 1] *= drag;
        this.burstVelocities[i * 3 + 2] *= drag;
        burstPositions.setXYZ(
          i,
          burstPositions.getX(i) + this.burstVelocities[i * 3] * dt,
          burstPositions.getY(i) + this.burstVelocities[i * 3 + 1] * dt,
          burstPositions.getZ(i) + this.burstVelocities[i * 3 + 2] * dt,
        );
      }
      burstPositions.needsUpdate = true;
      material.opacity = 1 - this.burstAge / BURST_LIFE;
    } else {
      material.opacity = 0;
    }
  }

  private tick = () => {
    this.frame = requestAnimationFrame(this.tick);
    const dt = Math.min(this.clock.getDelta(), 0.05);
    const time = this.clock.elapsedTime;

    this.updateHover();
    this.updateRing(dt);
    this.updateCamera(dt);
    this.updateNodes(time, dt);
    this.updateNetwork(time);
    this.updateParticles(time, dt);

    const motion = this.options.reducedMotion ? 0 : 1;
    this.logo.position.y = CORE_Y + Math.sin(time * 1.1) * 0.08 * motion;
    this.logo.rotation.y = damp(this.logo.rotation.y, this.hoveringLogo ? 0 : Math.sin(time * 0.35) * 0.7 * motion, 4, dt);
    const logoScale = this.hoveringLogo ? 0.46 : 0.42;
    this.logo.scale.setScalar(damp(this.logo.scale.x, logoScale, 8, dt));

    this.composer.render(dt);
    if (!this.rendered) {
      this.rendered = true;
      this.options.onReady();
    }
  };
}
