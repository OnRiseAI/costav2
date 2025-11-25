import { SEO } from "@/components/SEO";
import { HomeHero } from "@/components/HomeHero";
import { PriceGuideTable } from "@/components/PriceGuideTable";
import { HowItWorks } from "@/components/HowItWorks";
import { AreasWeServe } from "@/components/AreasWeServe";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { FAQSection, getFAQSchema } from "@/components/FAQSection";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { CategoryCard } from "@/components/CategoryCard";
import {
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Shovel,
  Droplets,
  Snowflake,
  Key,
} from "lucide-react";

export default function Index() {
  const popularCategories = [
    { name: "Plumber", slug: "plumbers", icon: Wrench, count: 120 },
    { name: "Electrician", slug: "electricians", icon: Zap, count: 95 },
    { name: "Builder", slug: "builders", icon: Hammer, count: 80 },
    { name: "Painter", slug: "painters", icon: Paintbrush, count: 65 },
    { name: "Gardener", slug: "gardeners", icon: Shovel, count: 50 },
    {
      name: "Pool Maintenance",
      slug: "pool-maintenance",
      icon: Droplets,
      count: 45,
    },
    {
      name: "Air Conditioning",
      slug: "air-conditioning",
      icon: Snowflake,
      count: 40,
    },
    { name: "Locksmith", slug: "locksmiths", icon: Key, count: 30 },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CostaTrades",
    url: "https://costatrades.com",
    logo: "https://costatrades.com/logo.png",
    description:
      "The leading marketplace for verified English-speaking tradespeople on the Costa del Sol.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marbella",
      addressRegion: "Málaga",
      addressCountry: "ES",
    },
    sameAs: [
      "https://www.facebook.com/costatrades",
      "https://www.instagram.com/costatrades",
    ],
  };

  const faqSchema = getFAQSchema();

  // Merge schemas into a graph
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, faqSchema],
  };

  return (
    <div className="min-h-screen bg-white font-sans pb-20 md:pb-0">
      <SEO
        title="Verified English-Speaking Tradespeople Costa del Sol | CostaTrades"
        description="Find trusted builders, plumbers, and electricians in Marbella, Estepona & Mijas. Compare quotes from vetted professionals. Post your job for free."
        schema={JSON.stringify(combinedSchema)}
      />

      <main>
        {/* 1. Hero Section */}
        <HomeHero />

        {/* 2. Price Guide Table (AEO Snippet Winner) */}
        <div className="container-custom relative z-20 -mt-8 mb-16">
          <PriceGuideTable />
        </div>

        {/* 3. How It Works (Redesigned) */}
        <HowItWorks />

        {/* 4. Popular Categories (Service Schema) */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">
                Popular Trades
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Find the right specialist for your home improvement project.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {popularCategories.map((cat) => (
                <CategoryCard
                  key={cat.slug}
                  name={cat.name}
                  slug={cat.slug}
                  icon={cat.icon}
                  count={cat.count}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Before/After Slider (Visual Trust) */}
        <BeforeAfterSlider />

        {/* 6. FAQ Section (AEO Q&A) */}
        <FAQSection />

        {/* 7. Areas We Serve */}
        <AreasWeServe />
      </main>

      {/* Mobile Sticky CTA */}
      <StickyMobileCTA />
    </div>
  );
}
