"use client";

import Link from "next/link";
import { type FormEvent, useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { caseStudies } from "@/components/landing/case-study-page";
import { services, stats } from "@/components/landing/data";
import { clientLogos } from "@/components/landing/our-client-page";
import { teamMembers } from "@/components/landing/team-page";
import { NetworkScene } from "./network-scene";
import { serviceDetails } from "./service-details";
import { drawServiceIcon, ServiceIconViewer, type ServiceIconKind } from "./service-icons";
import styles from "./experience.module.css";

const SECTIONS = [
  { id: "about", label: "About", kicker: "Who we are", title: "Provide solution for a better future" },
  { id: "services", label: "Services", kicker: "What we can do for you", title: "Services we can help you with" },
  { id: "work", label: "Work", kicker: "Case studies from the field", title: "Projects we have delivered" },
  { id: "products", label: "Products", kicker: "Built in-house", title: "Our products" },
  { id: "team", label: "Team", kicker: "Strategic leadership", title: "Meet the founders" },
  { id: "contact", label: "Contact", kicker: "Let's work together", title: "Need a successful project?" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

const PHONE = "+601154054256";
const EMAIL = "ketupartstudio@gmail.com";
const ADDRESS =
  "CubeX-03, CubeX Catalyst, Aras 2, Bangunan Pusat Industri, Technovation Park, Universiti Teknologi Malaysia, 81300 Johor Bahru, Johor, Malaysia";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Technovation Park, Universiti Teknologi Malaysia, Johor Bahru",
)}`;
const LINKEDIN_URL = "https://www.linkedin.com/company/ketupart-studio/";
const REGISTRATION = "202203172936 (003414323-D)";

const values = [
  {
    title: "Expertise and Innovation",
    text: "A team at the forefront of web development, microservices and APIs, mobile development, and augmented and virtual reality.",
  },
  {
    title: "Customized Solutions",
    text: "We take the time to understand your requirements, goals, and challenges, then build strategies that fit your business.",
  },
  {
    title: "Seamless Integration and Scalability",
    text: "Applications that integrate with your existing systems and leave room to grow.",
  },
];

function indexOfSection(id: string | null) {
  return SECTIONS.findIndex((section) => section.id === id);
}

// The URL hash is the source of truth, so sections are shareable and the back button works.
function subscribeToHash(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function readHash() {
  return window.location.hash.slice(1);
}

function readServerHash() {
  return "";
}

// The page is statically exported, so read the year in the browser rather than freezing it at build time.
const BUILD_YEAR = new Date().getFullYear();

function subscribeToNothing() {
  return () => {};
}

function readYear() {
  return new Date().getFullYear();
}

function readBuildYear() {
  return BUILD_YEAR;
}

export function StudioExperience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sceneRef = useRef<NetworkScene | null>(null);
  const panelRef = useRef<HTMLElement>(null);
  const hash = useSyncExternalStore(subscribeToHash, readHash, readServerHash);
  const active: SectionId | null = SECTIONS.find((section) => section.id === hash)?.id ?? null;
  const [hovered, setHovered] = useState<number | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");
  const year = useSyncExternalStore(subscribeToNothing, readYear, readBuildYear);
  const [enquiryService, setEnquiryService] = useState(services[0].title);

  const open = useCallback((id: SectionId | null) => {
    const url = id ? `#${id}` : window.location.pathname + window.location.search;
    const fromHome = !window.location.hash;
    if (fromHome && id) window.history.pushState(null, "", url);
    else window.history.replaceState(null, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }, []);

  const step = useCallback(
    (delta: number) => {
      const current = Math.max(indexOfSection(active), 0);
      const next = (current + delta + SECTIONS.length) % SECTIONS.length;
      open(SECTIONS[next].id);
    },
    [active, open],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let scene: NetworkScene | null = null;
    try {
      scene = new NetworkScene({
        canvas: canvasRef.current!,
        count: SECTIONS.length,
        labels: labelRefs.current,
        reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        onHover: setHovered,
        onSelect: (index) => open(SECTIONS[index].id),
        onHome: () => open(null),
        onReady: () => setStatus("ready"),
      });
      sceneRef.current = scene;
    } catch {
      // WebGL is unavailable; the hero, dock and panels still work without the canvas.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStatus("fallback");
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      scene?.dispose();
      sceneRef.current = null;
    };
  }, [open]);

  useEffect(() => {
    const index = indexOfSection(active);
    sceneRef.current?.select(index >= 0 ? index : null);
    if (active) panelRef.current?.scrollTo({ top: 0 });
  }, [active, status]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("input, textarea, select")) return;
      if (event.key === "Escape") open(null);
      if (!active) return;
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, open, step]);

  const activeIndex = indexOfSection(active);
  const section = activeIndex >= 0 ? SECTIONS[activeIndex] : null;

  return (
    <div className={styles.root} data-active={active ?? "home"} data-status={status}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <div className={styles.loader} aria-hidden={status !== "loading"}>
        <span className={styles.loaderMark} />
        <span>Booting systems…</span>
      </div>

      <header className={styles.topbar}>
        <button type="button" className={styles.brand} onClick={() => open(null)}>
          <img src="/assets/images/logo/logo-ketupart_studio.png" alt="" width={34} height={34} />
          <span>
            KetupART <em>Studio</em>
          </span>
        </button>
        <div className={styles.topActions}>
          <Link href="/classic" className={styles.linkGhost}>
            Classic site
          </Link>
          <button type="button" className={styles.btnPrimary} onClick={() => open("contact")}>
            Contact us
          </button>
        </div>
      </header>

      <section className={styles.hero} aria-hidden={active !== null}>
        <p className={styles.kicker}>Technology studio · Johor Bahru, Malaysia</p>
        <h1 className={styles.heroTitle}>
          Providing solution for an <span>immersive world</span>
        </h1>
        <p className={styles.heroText}>
          We empower industries, SMEs, and education with web, mobile, cloud, game, and AR/VR solutions that unleash
          productivity, efficiency, and innovation.
        </p>
        <div className={styles.heroActions}>
          <button type="button" className={styles.btnPrimary} onClick={() => open("about")}>
            Explore the studio
          </button>
          <button type="button" className={styles.btnGhost} onClick={() => open("contact")}>
            Kick start a project
          </button>
        </div>
        <p className={styles.hint}>
          {status === "fallback"
            ? "3D isn't available on this device. Use the menu below to explore."
            : "Click a node to open it. Drag to rotate the network."}
        </p>
      </section>

      <div className={styles.labels} aria-hidden="true">
        {SECTIONS.map((item, index) => (
          <button
            type="button"
            tabIndex={-1}
            key={item.id}
            ref={(el) => {
              labelRefs.current[index] = el;
            }}
            className={styles.label}
            data-hovered={hovered === index}
            data-active={active === item.id}
            onClick={() => open(item.id)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
          </button>
        ))}
      </div>

      <footer className={styles.legal}>
        <span>© 2022–{year} KetupArt Studio</span>
        <span>Registration No. {REGISTRATION}</span>
        <Link href="/privacy-policy">Privacy</Link>
        <Link href="/terms-of-service">Terms</Link>
      </footer>

      <nav className={styles.dock} aria-label="Sections">
        {SECTIONS.map((item, index) => (
          <button
            type="button"
            key={item.id}
            className={styles.dockButton}
            aria-current={active === item.id ? "true" : undefined}
            data-hovered={hovered === index}
            onClick={() => open(active === item.id ? null : item.id)}
          >
            <span className={styles.dockIcon} aria-hidden="true" />
            {item.label}
          </button>
        ))}
      </nav>

      <aside
        ref={panelRef}
        className={styles.panel}
        aria-hidden={!section}
        aria-labelledby="panel-title"
        inert={!section}
      >
        {section && (
          <>
            <div className={styles.panelHeader}>
              <div>
                <p className={styles.kicker}>
                  {String(activeIndex + 1).padStart(2, "0")} · {section.kicker}
                </p>
                <h2 id="panel-title" className={styles.panelTitle}>
                  {section.title}
                </h2>
              </div>
              <button type="button" className={styles.iconButton} onClick={() => open(null)} aria-label="Close section">
                ×
              </button>
            </div>

            <div className={styles.panelBody} key={section.id}>
              {section.id === "about" && <AboutPanel />}
              {section.id === "services" && (
                <ServicesPanel
                  onDiscuss={(title) => {
                    setEnquiryService(title);
                    open("contact");
                  }}
                />
              )}
              {section.id === "work" && <WorkPanel />}
              {section.id === "products" && <ProductsPanel />}
              {section.id === "team" && <TeamPanel />}
              {section.id === "contact" && <ContactPanel defaultService={enquiryService} />}
            </div>

            <div className={styles.panelFooter}>
              <button type="button" className={styles.btnGhost} onClick={() => step(-1)}>
                ← {SECTIONS[(activeIndex - 1 + SECTIONS.length) % SECTIONS.length].label}
              </button>
              <button type="button" className={styles.btnGhost} onClick={() => step(1)}>
                {SECTIONS[(activeIndex + 1) % SECTIONS.length].label} →
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

function AboutPanel() {
  return (
    <>
      <p>
        KetupArt Studio started its journey in 2023 to provide robust solutions to clients. We specialize in
        innovative, customized digital experiences that help businesses thrive, from user-centric web and mobile
        products to immersive AR and VR.
      </p>
      <div className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.title}>
            <strong>
              {stat.value}
              <span>{stat.suffix}</span>
            </strong>
            <small>{stat.title}</small>
          </div>
        ))}
      </div>
      <h3 className={styles.subheading}>Why work with us</h3>
      <ol className={styles.values}>
        {values.map((value) => (
          <li key={value.title}>
            <strong>{value.title}</strong>
            <span>{value.text}</span>
          </li>
        ))}
      </ol>
      <h3 className={styles.subheading}>Trusted by</h3>
      <div className={styles.clients}>
        {clientLogos.map((logo) => (
          <img src={logo} alt="Client logo" key={logo} />
        ))}
      </div>
    </>
  );
}

function ServiceIconThumb({ kind }: { kind: ServiceIconKind }) {
  return (
    <canvas
      width={112}
      height={112}
      className={styles.cardIcon}
      aria-hidden="true"
      ref={(canvas) => {
        if (canvas) drawServiceIcon(canvas, kind);
      }}
    />
  );
}

function ServiceIconLive({ kind }: { kind: ServiceIconKind }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let viewer: ServiceIconViewer | null = null;
    try {
      viewer = new ServiceIconViewer(canvasRef.current!, kind);
    } catch {
      // Without WebGL the detail view simply shows no icon.
    }
    return () => viewer?.dispose();
  }, [kind]);

  return <canvas ref={canvasRef} className={styles.serviceStage} aria-hidden="true" />;
}

function ServicesPanel({ onDiscuss }: { onDiscuss: (title: string) => void }) {
  const [selected, setSelected] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const service = services.find((item) => item.href === selected);
  const detail = selected ? serviceDetails[selected] : null;

  const show = (href: string | null) => {
    setSelected(href);
    listRef.current?.closest("aside")?.scrollTo({ top: 0 });
  };

  if (service && detail) {
    return (
      <div className={styles.serviceDetail} ref={listRef}>
        <button type="button" className={styles.textLink} onClick={() => show(null)}>
          ← All services
        </button>
        <ServiceIconLive kind={detail.icon} />
        <h3 className={styles.serviceTitle}>{service.title}</h3>
        <p className={styles.serviceSummary}>{detail.summary}</p>
        <ul className={styles.highlights}>
          {detail.highlights.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <button type="button" className={styles.btnPrimary} onClick={() => onDiscuss(service.title)}>
          Discuss this service
        </button>
      </div>
    );
  }

  return (
    <div className={styles.cardList} ref={listRef}>
      {services.map((item) => (
        <button type="button" className={styles.card} key={item.title} onClick={() => show(item.href)}>
          <ServiceIconThumb kind={serviceDetails[item.href].icon} />
          <span>
            <strong>{item.title}</strong>
            <small>{item.description}</small>
          </span>
          <span className={styles.cardArrow} aria-hidden="true">
            →
          </span>
        </button>
      ))}
    </div>
  );
}

function WorkPanel() {
  return (
    <>
      <div className={styles.workList}>
        {caseStudies.map((study) => (
          <article className={styles.work} key={study.title}>
            <img src={study.image} alt="" />
            <div>
              <small className={styles.tag}>{study.categoryLabel}</small>
              <h3>{study.title}</h3>
              <p>{study.description}</p>
            </div>
          </article>
        ))}
      </div>
      <Link href="/casestudy" className={styles.textLink}>
        Browse all case studies →
      </Link>
    </>
  );
}

function ProductsPanel() {
  return (
    <div className={styles.workList}>
      <article className={styles.product}>
        <img src="/assets/images/logo_gofly.png" alt="GoFly" />
        <div>
          <small className={styles.tag}>VR drone training</small>
          <h3>GoFly</h3>
          <p>Train like a pro, play like a champ. A VR drone simulator for Meta Quest that teaches basic control, pitch and roll, and free flight.</p>
          <div className={styles.inlineActions}>
            <a href="https://sidequestvr.com/app/41261" target="_blank" rel="noreferrer" className={styles.btnPrimary}>
              Get on SideQuest
            </a>
            <Link href="/gofly" className={styles.btnGhost}>
              Learn more
            </Link>
          </div>
        </div>
      </article>
      <article className={styles.product}>
        <img src="/assets/images/Foundly/Foundly_logo_1024.png" alt="Foundly" />
        <div>
          <small className={styles.tag}>Personal address book</small>
          <h3>Foundly</h3>
          <p>Keep every important place within reach. Available for Android, iPhone, and iPad.</p>
          <div className={styles.inlineActions}>
            <a
              href="https://play.google.com/store/apps/details?id=com.ketupartstudio.foundly"
              target="_blank"
              rel="noreferrer"
              className={styles.btnPrimary}
            >
              Google Play
            </a>
            <a href="https://apps.apple.com/app/id6761178602" target="_blank" rel="noreferrer" className={styles.btnGhost}>
              App Store
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

function TeamPanel() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <>
      <p>&quot;Alone we can do so little; together we can do so much.&quot;</p>
      <div className={styles.workList}>
        {teamMembers.map((member) => (
          <article className={styles.member} key={member.key}>
            <img src={member.image} alt={member.name} />
            <div>
              <h3>{member.name}</h3>
              <small className={styles.tag}>{member.role}</small>
              <p className={styles.muted}>{member.specialty}</p>
              {expanded === member.key && <p>{member.bio}</p>}
              <ul className={styles.certs}>
                {member.certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
              <button
                type="button"
                className={styles.textLink}
                aria-expanded={expanded === member.key}
                onClick={() => setExpanded(expanded === member.key ? null : member.key)}
              >
                {expanded === member.key ? "Hide bio" : "Read bio"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function ContactPanel({ defaultService }: { defaultService: string }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Project enquiry: ${data.get("service")} (${data.get("name")})`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company") || "-"}`,
      `Service: ${data.get("service")}`,
      "",
      String(data.get("message")),
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <div className={styles.quickActions}>
        <a href={`tel:${PHONE}`} className={styles.quickAction}>
          <small>Call</small>
          {PHONE}
        </a>
        <a href={`mailto:${EMAIL}`} className={styles.quickAction}>
          <small>Email</small>
          {EMAIL}
        </a>
        <a href={MAPS_URL} target="_blank" rel="noreferrer" className={styles.quickAction}>
          <small>Visit</small>
          Technovation Park, UTM
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={styles.quickAction}>
          <small>Follow</small>
          LinkedIn
        </a>
      </div>

      <form className={styles.form} onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          Company (optional)
          <input name="company" autoComplete="organization" />
        </label>
        <label>
          Service
          <select name="service" defaultValue={defaultService}>
            {services.map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
            <option>Something else</option>
          </select>
        </label>
        <label className={styles.fullWidth}>
          Tell us about your project
          <textarea name="message" rows={4} required />
        </label>
        <button type="submit" className={`${styles.btnPrimary} ${styles.fullWidth}`}>
          Send enquiry
        </button>
        {sent && (
          <p className={`${styles.muted} ${styles.fullWidth}`} role="status">
            Your email app should open with the enquiry ready to send. If it doesn&apos;t, email us at {EMAIL}.
          </p>
        )}
      </form>

      <dl className={styles.details}>
        <div>
          <dt>Hours</dt>
          <dd>Mon–Fri, 9:00 am – 6:00 pm · Sat, 9:00 am – 12:30 pm</dd>
        </div>
        <div>
          <dt>Address</dt>
          <dd>KetupArt Studio, {ADDRESS}</dd>
        </div>
        <div>
          <dt>Company</dt>
          <dd>KetupArt Studio · Registration No. {REGISTRATION}</dd>
        </div>
        <div>
          <dt>Response</dt>
          <dd>We reply within 48 hours during business hours.</dd>
        </div>
      </dl>
    </>
  );
}
