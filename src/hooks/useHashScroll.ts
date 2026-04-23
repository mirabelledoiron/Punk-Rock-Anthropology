import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the element matching `location.hash` into view on every
 * location change. Retries briefly to handle lazy-loaded routes where
 * the target element isn't in the DOM yet on the first frame.
 *
 * For accessibility, sets tabIndex=-1 on the target and focuses it
 * after scrolling so screen readers and keyboard users land on the
 * right element, not at the top of the page.
 */
export function useHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.slice(1); // strip leading "#"
    if (!id) return;

    let attempts = 0;
    const maxAttempts = 20; // ~1s at 50ms per tick

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.focus({ preventScroll: true });
        return true;
      }
      return false;
    };

    if (tryScroll()) return;

    const interval = window.setInterval(() => {
      attempts += 1;
      if (tryScroll() || attempts >= maxAttempts) {
        window.clearInterval(interval);
      }
    }, 50);

    return () => window.clearInterval(interval);
  }, [pathname, hash]);
}
