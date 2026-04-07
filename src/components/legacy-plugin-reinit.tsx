"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const STYLE_COOKIE_NAME = "styleCookieName";
const STYLE_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function readStyleCookie(): "light" | "dark" | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${STYLE_COOKIE_NAME}=([^;]*)`));
  if (!match) return null;
  const value = decodeURIComponent(match[1]);
  return value === "dark" || value === "light" ? value : null;
}

function writeStyleCookie(value: "light" | "dark") {
  document.cookie = `${STYLE_COOKIE_NAME}=${encodeURIComponent(value)}; path=/; max-age=${STYLE_COOKIE_MAX_AGE_SECONDS}`;
}

function applyTheme(theme: "light" | "dark") {
  const body = document.body;
  body.classList.remove("active-light-mode", "active-dark-mode");
  body.classList.add(theme === "dark" ? "active-dark-mode" : "active-light-mode");
  writeStyleCookie(theme);
}

function syncSwitcherActiveState(theme: "light" | "dark") {
  const allSwitchers = document.querySelectorAll(".my_switcher .setColor");
  allSwitchers.forEach((element) => element.classList.remove("active"));
  const activeSelector = `.my_switcher .setColor.${theme}`;
  document.querySelectorAll(activeSelector).forEach((element) => element.classList.add("active"));
}

export function LegacyPluginReinit() {
  const pathname = usePathname();

  useEffect(() => {
    const currentTheme =
      readStyleCookie() ??
      (document.body.classList.contains("active-light-mode") ? "light" : "dark");
    applyTheme(currentTheme);
    syncSwitcherActiveState(currentTheme);

    const onSwitcherClick = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest(".my_switcher .setColor") as HTMLElement | null;
      if (!trigger) return;

      event.preventDefault();
      const theme = trigger.classList.contains("dark") ? "dark" : "light";
      applyTheme(theme);
      syncSwitcherActiveState(theme);
    };

    document.addEventListener("click", onSwitcherClick);

    const timer = window.setTimeout(() => {
      const previous = document.querySelector('script[data-legacy-app-reinit="true"]');
      if (previous && previous.parentNode) {
        previous.parentNode.removeChild(previous);
      }

      const script = document.createElement("script");
      script.src = "/assets/abstract/js/app.js";
      script.async = false;
      script.dataset.legacyAppReinit = "true";
      document.body.appendChild(script);
    }, 0);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("click", onSwitcherClick);
    };
  }, [pathname]);

  return null;
}
