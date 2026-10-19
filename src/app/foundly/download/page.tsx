import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.ketupartstudio.foundly";
const APP_STORE_URL = "https://apps.apple.com/app/id6761178602";

export const metadata: Metadata = {
  title: "Download Foundly",
  description:
    "Download Foundly, the personal address book for saving the people and places that matter.",
  alternates: {
    canonical: "/foundly/download",
  },
  openGraph: {
    title: "Download Foundly",
    description:
      "Keep the people and places that matter close. Download Foundly for Android or iPhone.",
    url: "/foundly/download",
  },
};

function GooglePlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 36">
      <path fill="#00d1ff" d="M1.8 1.5 19 18 1.8 34.5A4 4 0 0 1 1 32V4a4 4 0 0 1 .8-2.5Z" />
      <path fill="#00f076" d="m19 18 4.8-4.6L6.6 3.7 19 18Z" />
      <path fill="#ffdf00" d="m19 18 4.8 4.6L6.6 32.3 19 18Z" />
      <path fill="#ff455a" d="m23.8 13.4 5.5 3.1c1 .6 1 2.4 0 3l-5.5 3.1L19 18l4.8-4.6Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 38">
      <path
        fill="currentColor"
        d="M26.6 20.1c0-4.7 3.9-7 4.1-7.1a8.8 8.8 0 0 0-6.9-3.7c-2.9-.3-5.8 1.8-7.2 1.8-1.5 0-3.8-1.8-6.2-1.7a9.2 9.2 0 0 0-7.8 4.8c-3.4 5.8-.9 14.4 2.4 19 1.6 2.3 3.5 4.9 6 4.8 2.4-.1 3.3-1.5 6.2-1.5 2.8 0 3.7 1.5 6.2 1.4 2.6 0 4.2-2.3 5.8-4.7a20.5 20.5 0 0 0 2.6-5.3 8.1 8.1 0 0 1-5.2-7.8ZM21.9 6.2A8.2 8.2 0 0 0 23.8.3a8.4 8.4 0 0 0-5.5 2.8 7.8 7.8 0 0 0-2 5.7 7 7 0 0 0 5.6-2.6Z"
      />
    </svg>
  );
}

export default function FoundlyDownloadPage() {
  return (
    <main className="foundly-download-page">
      <div className="foundly-glow foundly-glow-one" />
      <div className="foundly-glow foundly-glow-two" />

      <section className="foundly-download-card">
        <Link href="/" className="foundly-home-link">
          <span aria-hidden="true">←</span> Back to KetupART Studio
        </Link>

        <Image
          className="foundly-app-icon"
          src="/assets/images/Foundly/Foundly_logo_1024.png"
          alt="Foundly"
          width={1024}
          height={1024}
          priority
        />

        <p className="foundly-eyebrow">Your personal address book</p>
        <h1>Keep every important place within reach.</h1>
        <p className="foundly-intro">
          Save the people, addresses, and places that matter to you, then open
          them instantly in your favourite map app.
        </p>

        <div className="foundly-store-links" aria-label="Download Foundly">
          <a href={GOOGLE_PLAY_URL} target="_blank" rel="noreferrer" className="foundly-store-button">
            <GooglePlayIcon />
            <span><small>GET IT ON</small>Google Play</span>
          </a>
          <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="foundly-store-button">
            <AppleIcon />
            <span><small>Download on the</small>App Store</span>
          </a>
        </div>

        <p className="foundly-availability">Available for Android, iPhone, and iPad.</p>

        <nav className="foundly-legal" aria-label="Foundly legal links">
          <Link href="/foundly/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true">•</span>
          <Link href="/foundly/terms-of-services">Terms of Service</Link>
        </nav>
      </section>
    </main>
  );
}
