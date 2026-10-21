import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import styles from "./vr-classroom-page.module.css";

const assetRoot = "/assets/images/VR Classroom";

const gallery = [
  { src: `${assetRoot}/WhatsApp Image 2026-10-21 at 11.24.36 AM(1).jpeg`, alt: "Learners using VR headsets in a classroom" },
  { src: `${assetRoot}/WhatsApp Image 2026-10-21 at 11.24.38 AM(1).jpeg`, alt: "VR classroom session with headsets and desktop stations" },
  { src: `${assetRoot}/WhatsApp Image 2026-10-21 at 11.24.37 AM(1).jpeg`, alt: "Learners working with VR controllers at classroom workstations" },
  { src: `${assetRoot}/WhatsApp Image 2026-10-21 at 11.24.35 AM.jpeg`, alt: "Full classroom view during a supported VR session" },
  { src: `${assetRoot}/WhatsApp Image 2026-10-21 at 11.24.38 AM.jpeg`, alt: "Instructor supporting learners during a VR classroom session" },
  { src: `${assetRoot}/WhatsApp Image 2026-10-21 at 11.24.37 AM.jpeg`, alt: "VR headsets prepared at individual classroom stations" },
];

const setupScope = [
  { number: "01", title: "Room & power planning", text: "We review the room layout, movement space, power access, charging requirements, and how equipment will move between use and storage." },
  { number: "02", title: "Headset preparation", text: "Each headset is checked, configured, labelled, fitted with its accessories, and prepared for repeated classroom use." },
  { number: "03", title: "Protection & storage", text: "Carry bags and silicone covers help protect the equipment, keep every set together, and make daily handling more manageable." },
  { number: "04", title: "Charging readiness", text: "We supply and organize the required cables, charging ports, and extensions so the full headset fleet can be recharged reliably." },
  { number: "05", title: "Content & connectivity", text: "We prepare content access, verify connectivity, and test the experience across the devices before learners enter the room." },
  { number: "06", title: "Tutorial & handover", text: "Users learn how to wear the headset, use the controllers, stay aware of their surroundings, and care for the equipment after use." },
];

export function VrClassroomPage() {
  return (
    <main className={styles.page}>
      <SiteHeader isSubpage />

      <section className={styles.hero}>
        <Image
          src={`${assetRoot}/WhatsApp Image 2026-10-21 at 11.24.38 AM(2).jpeg`}
          alt="A complete classroom taking part in a virtual reality session"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroContent}`}>
          <p className={styles.eyebrow}>VR Classroom Setup</p>
          <h1>From boxed headsets to a classroom ready to explore.</h1>
          <p>
            KetupART prepares the equipment, room, charging, protection, and people behind a dependable VR learning environment.
          </p>
          <Link href="/contact" className={styles.primaryButton}>Plan your VR classroom <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className={styles.proofStrip} aria-label="VR classroom experience">
        <div className="container">
          <div className={styles.proofGrid}>
            <div><strong>82</strong><span>headsets handled</span></div>
            <div><strong>41</strong><span>Pico 4 sets</span></div>
            <div><strong>41</strong><span>Meta Quest 3 / 3S sets</span></div>
            <div><strong>End to end</strong><span>setup and user guidance</span></div>
          </div>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storyHeading}>
            <p className={styles.kicker}>The work behind the experience</p>
            <h2>A VR classroom is more than a row of headsets.</h2>
          </div>
          <div className={styles.storyCopy}>
            <p>
              The exciting part is the moment a room full of learners enters virtual reality together. The important work starts much earlier: making sure every unit is charged, protected, configured, stored, and simple enough for a first-time user to pick up with confidence.
            </p>
            <p>
              Our hands-on experience covers two large device fleets—41 Pico 4 headsets and 41 Meta Quest 3 / 3S headsets. For each setup, we treated the classroom as one complete operating system rather than a collection of individual devices.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.scopeSection}>
        <div className="container">
          <div className={styles.sectionIntro}>
            <div><p className={styles.kicker}>What we prepare</p><h2>Every detail needed for a working classroom.</h2></div>
            <p>We focus on what happens before, during, and after every session so educators can concentrate on teaching.</p>
          </div>
          <div className={styles.scopeGrid}>
            {setupScope.map((item) => (
              <article key={item.number} className={styles.scopeCard}>
                <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featureSection}>
        <div className={`container ${styles.featureGrid}`}>
          <div className={styles.featureImage}>
            <Image
              src={`${assetRoot}/WhatsApp Image 2026-10-21 at 11.24.36 AM.jpeg`}
              alt="A classroom of learners using VR headsets and controllers"
              fill
              sizes="(max-width: 991px) 100vw, 55vw"
            />
          </div>
          <div className={styles.featureCopy}>
            <p className={styles.kicker}>A confident first session</p>
            <h2>Technology disappears when the setup is done well.</h2>
            <p>
              We guide users through headset fit, controller basics, safe movement, and the steps for entering the learning experience. Clear demonstrations reduce uncertainty and help the whole group begin together.
            </p>
            <ul>
              <li>How to wear and adjust the headset</li>
              <li>Controller buttons and interaction basics</li>
              <li>Safe use and awareness of the room</li>
              <li>Returning, cleaning, and storing each set</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.sectionIntro}>
            <div><p className={styles.kicker}>In the classroom</p><h2>Prepared for real groups, not just demos.</h2></div>
            <p>Actual sessions show the equipment in use across full classrooms, with support available where learners need it.</p>
          </div>
          <div className={styles.galleryGrid}>
            {gallery.map((image, index) => (
              <figure key={image.src} className={index === 0 || index === 5 ? styles.galleryWide : undefined}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 767px) 100vw, 50vw" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <div><p className={styles.kicker}>Start with the room you have</p><h2>Planning a VR classroom or training lab?</h2><p>Tell us about your space, users, and learning goals. We can help map the equipment and setup needed to make it workable.</p></div>
          <Link href="/contact" className={styles.secondaryButton}>Discuss your setup <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <SiteFooter isSubpage />
    </main>
  );
}
