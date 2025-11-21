import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = "G-RLGDMWEMCQ";

export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Send initial pageview and subsequent virtual pageviews for SPA navigation
    try {
      const gtag = (window as any).gtag;
      if (typeof gtag === "function") {
        gtag("config", GA_ID, {
          page_path: location.pathname + location.search,
        });
      }
    } catch (e) {
      // Silent fail if gtag isn't available yet
      // eslint-disable-next-line no-console
      console.debug("gtag not ready", e);
    }
  }, [location]);

  return null;
}
