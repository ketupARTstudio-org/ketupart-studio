import type { Metadata } from "next";
import Script from "next/script";
import { LegacyPluginReinit } from "@/components/legacy-plugin-reinit";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ketupartstudio.com"),
  title: {
    default: "KetupArt Studio",
    template: "%s | KetupArt Studio",
  },
  applicationName: "KetupArt Studio",
  description:
    "KetupArt Studio, Technology Solution craft for Industries and SMEs.",
  keywords: ["ketupart", "development", "web", "cloud computing", "immersive technology", "game development"],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ketupartstudio.com",
    siteName: "KetupArt Studio",
    title: "KetupArt Studio",
    description: "KetupArt Studio, Technology Solution craft for Industries and SMEs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KetupArt Studio",
    description: "KetupArt Studio, Technology Solution craft for Industries and SMEs.",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="/assets/abstract/css/vendor/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/abstract/css/vendor/font-awesome.css"
        />
        <link rel="stylesheet" href="/assets/abstract/css/vendor/slick.css" />
        <link
          rel="stylesheet"
          href="/assets/abstract/css/vendor/slick-theme.css"
        />
        <link rel="stylesheet" href="/assets/abstract/css/vendor/sal.css" />
        <link
          rel="stylesheet"
          href="/assets/abstract/css/vendor/magnific-popup.css"
        />
        <link
          rel="stylesheet"
          href="/assets/abstract/css/vendor/green-audio-player.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/abstract/css/vendor/odometer-theme-default.css"
        />
        <link rel="stylesheet" href="/assets/abstract/css/app.css" />
        <link rel="stylesheet" href="/assets/abstract/css/custom.css" />
      </head>
      <body className="sticky-header active-dark-mode">
        <div className="my_switcher d-none d-lg-block">
          <ul>
            <li title="Light Mode">
              <a href="javascript:void(0)" className="setColor light" data-theme="light">
                <i className="fal fa-lightbulb-on" />
              </a>
            </li>
            <li title="Dark Mode">
              <a href="javascript:void(0)" className="setColor dark" data-theme="dark">
                <i className="fas fa-moon" />
              </a>
            </li>
          </ul>
        </div>
        {children}
        <Script src="/assets/abstract/js/vendor/jquery-3.6.0.min.js" />
        <Script src="/assets/abstract/js/vendor/bootstrap.min.js" />
        <Script src="/assets/abstract/js/vendor/isotope.pkgd.min.js" />
        <Script src="/assets/abstract/js/vendor/imagesloaded.pkgd.min.js" />
        <Script src="/assets/abstract/js/vendor/odometer.min.js" />
        <Script src="/assets/abstract/js/vendor/jquery-appear.js" />
        <Script src="/assets/abstract/js/vendor/slick.min.js" />
        <Script src="/assets/abstract/js/vendor/sal.js" />
        <Script src="/assets/abstract/js/vendor/jquery.magnific-popup.min.js" />
        <Script src="/assets/abstract/js/vendor/js.cookie.js" />
        <Script src="/assets/abstract/js/vendor/jquery.style.switcher.js" />
        <Script src="/assets/abstract/js/vendor/jquery.countdown.min.js" />
        <Script src="/assets/abstract/js/vendor/tilt.js" />
        <Script src="/assets/abstract/js/vendor/green-audio-player.min.js" />
        <Script src="/assets/abstract/js/vendor/jquery.nav.js" />
        <LegacyPluginReinit />
      </body>
    </html>
  );
}
