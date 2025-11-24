import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (pathname.startsWith("/post-job")) {
      window.scrollTo(0, 0);
      return;
    }

    const isMobile =
      (window.matchMedia && window.matchMedia("(max-width: 768px)").matches) ||
      window.innerWidth <= 768;

    if (!isMobile) return;

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
