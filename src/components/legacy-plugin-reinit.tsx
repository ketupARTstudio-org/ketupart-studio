"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function LegacyPluginReinit() {
  const pathname = usePathname();

  useEffect(() => {
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
    };
  }, [pathname]);

  return null;
}
