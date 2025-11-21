import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function TradeCategory() {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      navigate(`/post-job/results?category=${encodeURIComponent(category)}`, {
        replace: true,
      });
    }
  }, [category, navigate]);

  const categoryLabel = category
    ? category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ")
    : "Trade";

  return (
    <>
      <SEO
        title={`Best ${categoryLabel} in Costa del Sol | Hire Verified ${categoryLabel}`}
        description={`Find top-rated ${categoryLabel} in Marbella & coast. Read reviews, check prices, and request quotes online.`}
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${categoryLabel} in Costa del Sol`,
          description:
            "Browse verified tradespeople and services for your next home project on the Costa del Sol.",
        }}
      />
    </>
  );
}
