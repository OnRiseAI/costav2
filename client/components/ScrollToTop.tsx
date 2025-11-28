import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Wait for the new page DOM to render, then attempt to scroll to the hero
    requestAnimationFrame(() => {
      const hero = document.getElementById("home-hero");

      if (hero) {
        // If a hero exists on the page, scroll to it (immediate)
        hero.scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "nearest",
        });
        return;
      }

      // Fallback: scroll to top of the page
      window.scrollTo(0, 0);
    });
  }, [pathname]);

  return null;
}
