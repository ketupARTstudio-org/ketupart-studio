import Link from "next/link";
import { preparePolicy } from "@/lib/policy";
import styles from "./policy-page.module.css";

type PolicyPageProps = {
  title: string;
  html: string;
};

export function PolicyPage({ title, html }: PolicyPageProps) {
  const policy = preparePolicy(html, title);
  const hasSections = policy.sections.length > 0;

  const sectionLinks = (
    <ol className={styles.tocList}>
      {policy.sections.map((section) => (
        <li key={section.id}>
          <a href={`#${section.id}`}>{section.label}</a>
        </li>
      ))}
    </ol>
  );

  return (
    <main className={styles.page} id="top">
      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <Link href="/" className={styles.logo} aria-label="KetupArt Studio home">
            <img className={styles.logoLight} src="/assets/abstract/media/logo-2.png" alt="KetupArt Studio" />
            <img className={styles.logoDark} src="/assets/abstract/media/logo-3.png" alt="" aria-hidden="true" />
          </Link>
          <Link href="/" className={styles.backLink}>
            <span aria-hidden="true">←</span> Back to KetupArt Studio
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Legal</p>
          <h1 className={styles.title}>{title}</h1>
          {policy.lastUpdated && (
            <p className={styles.updated}>
              <span className={styles.updatedDot} aria-hidden="true" />
              Last updated {policy.lastUpdated}
            </p>
          )}
        </div>
      </section>

      <div className={`${styles.layout} ${hasSections ? "" : styles.layoutSingle}`}>
        {hasSections && (
          <aside className={styles.sidebar} aria-label="On this page">
            <p className={styles.tocTitle}>On this page</p>
            {sectionLinks}
          </aside>
        )}

        <article className={styles.card}>
          {hasSections && (
            <details className={styles.mobileToc}>
              <summary>On this page</summary>
              {sectionLinks}
            </details>
          )}
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: policy.html }} />
        </article>
      </div>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} KetupArt Studio. All rights reserved.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
