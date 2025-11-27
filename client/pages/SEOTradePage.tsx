import { useParams, useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { useEffect, useState } from "react";
import { supabase } from "@/contexts/AuthContext";
import {
  Shield,
  MapPin,
  CheckCircle,
  Clock,
  AlertCircle,
  Info,
} from "lucide-react";

// Image mapping for different trades
const TRADE_IMAGES: Record<string, string> = {
  plumber: "https://images.pexels.com/photos/7220892/pexels-photo-7220892.jpeg",
  electrician:
    "https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg",
  "ac-repair":
    "https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg",
  builder:
    "https://images.pexels.com/photos/33497138/pexels-photo-33497138.jpeg",
  "pool-maintenance":
    "https://images.pexels.com/photos/17568095/pexels-photo-17568095.jpeg",
  painter: "https://images.pexels.com/photos/7217966/pexels-photo-7217966.jpeg",
  locksmith: "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg",
  handyman:
    "https://images.pexels.com/photos/7482641/pexels-photo-7482641.jpeg",
  "solar-panel-installer":
    "https://images.pexels.com/photos/8853537/pexels-photo-8853537.jpeg",
  "leak-detection":
    "https://images.pexels.com/photos/7220892/pexels-photo-7220892.jpeg", // Using plumber image as fallback/related
  roofer: "https://images.pexels.com/photos/8853472/pexels-photo-8853472.jpeg",
  tiler: "https://images.pexels.com/photos/12924578/pexels-photo-12924578.jpeg",
  "bathroom-fitter":
    "https://images.pexels.com/photos/34794658/pexels-photo-34794658.jpeg",
  "kitchen-installer":
    "https://images.pexels.com/photos/34803106/pexels-photo-34803106.jpeg",
  "renovation-specialist":
    "https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg",
  "pest-control":
    "https://images.pexels.com/photos/16851694/pexels-photo-16851694.jpeg",
  // Fallback
  default: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg",
};


// This would typically come from a data source/API
const MOCK_DATA = {
  trade: "Emergency specialists",
  location: "Costa del Sol",
  average_price: "€180+",
  emergency_price: "€260+",
  local_insight_text:
    "In coastal residential areas along the Costa del Sol, emergency structural issues and serious leaks are often complicated by seasonal traffic, gated communities and parking restrictions. CostaTrades specialists plan fast access routes and coordinate with building administrators so problems can be stabilised before they worsen.",
};

interface LocationProfile {
  region_name: string;
  slug: string;
  sub_areas: string[];
  logistics: any;
  content_injects: any;
}

interface TradeProfile {
  service_slug: string;
  service_name: string;
  price_range: string | null;
  schema_tasks: string[] | null;
}

export default function SEOTradePage() {
  const params = useParams();
  const routerLocation = useLocation();
  const [locationData, setLocationData] = useState<LocationProfile | null>(
    null,
  );
  const [tradeData, setTradeData] = useState<TradeProfile | null>(null);

  const rawPath = routerLocation.pathname.toLowerCase();
  const pathSegments = rawPath.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1] || "";

  const paramTrade = params.trade as string | undefined;
  const paramService = params.service as string | undefined;

  const rawTradeSlugFromParams = (paramTrade ?? paramService)?.toLowerCase();

  const tradeSlugFromPath = lastSegment;

  const isEmergency =
    tradeSlugFromPath.startsWith("emergency-") ||
    (rawTradeSlugFromParams?.startsWith("emergency-") ?? false);

  const effectiveTradeSlug = rawTradeSlugFromParams ?? tradeSlugFromPath ?? "";

  const normalizedTradeSlug = effectiveTradeSlug
    ? effectiveTradeSlug.replace(/^emergency-/, "")
    : undefined;

  const locationSlug =
    (params.location as string | undefined) ??
    (params.region_slug as string | undefined) ??
    (params.region as string | undefined);

  // Fallback to mock data if params are missing (for template preview)
  const baseTradeName = normalizedTradeSlug
    ? normalizedTradeSlug.charAt(0).toUpperCase() +
      normalizedTradeSlug.slice(1).replace(/-/g, " ")
    : MOCK_DATA.trade;
  const tradeName = tradeData?.service_name || baseTradeName;

  // Use fetched location name if available, otherwise fallback to slug-based name
  const locationName =
    locationData?.region_name ||
    (locationSlug
      ? locationSlug.charAt(0).toUpperCase() +
        locationSlug.slice(1).replace(/-/g, " ")
      : MOCK_DATA.location);

  // Fetch location and trade data from Supabase
  useEffect(() => {
    const tradeSlugForQuery =
      normalizedTradeSlug || tradeSlugFromPath || paramTrade || paramService;

    if (!locationSlug && !tradeSlugForQuery) return;

    async function fetchProfiles() {
      try {
        const locationPromise = locationSlug
          ? supabase
              .from("location_profiles")
              .select("*")
              .eq("slug", locationSlug)
              .single()
          : Promise.resolve({ data: null, error: null });

        const tradePromise = tradeSlugForQuery
          ? supabase
              .from("trade_profiles")
              .select("*")
              .eq("service_slug", tradeSlugForQuery)
              .single()
          : Promise.resolve({ data: null, error: null });

        const [locationResult, tradeResult] = await Promise.all([
          locationPromise,
          tradePromise,
        ]);

        const { data: locationProfile, error: locationError } = locationResult;
        if (locationError) {
          console.warn("Error fetching location profile:", locationError);
        } else if (locationProfile) {
          setLocationData(locationProfile);
        }

        const { data: tradeProfile, error: tradeError } = tradeResult;
        if (tradeError) {
          console.warn("Error fetching trade profile:", tradeError);
        } else if (tradeProfile) {
          setTradeData(tradeProfile);
        }
      } catch (err) {
        console.error("Unexpected error fetching profiles:", err);
      }
    }

    fetchProfiles();
  }, [
    locationSlug,
    normalizedTradeSlug,
    tradeSlugFromPath,
    paramTrade,
    paramService,
  ]);

  // Determine hero image
  const normalizedTrade = normalizedTradeSlug || "default";
  // Try exact match, then singular/plural variations, then default
  const heroImage =
    TRADE_IMAGES[normalizedTrade] ||
    TRADE_IMAGES[normalizedTrade.replace(/s$/, "")] ||
    TRADE_IMAGES[normalizedTrade + "s"] ||
    TRADE_IMAGES.default;

  // Determine dynamic trade data
  const tradePriceRange = tradeData?.price_range || null;
  const tradeTasks =
    tradeData?.schema_tasks && Array.isArray(tradeData.schema_tasks)
      ? tradeData.schema_tasks
      : [];

  if (!isEmergency) {
    return (
      <div className="min-h-screen bg-white font-sans">
        <SEO
          title={`Verified ${tradeName} Specialists in ${locationName} | CostaTrades`}
          description={`Find vetted, insured, and local ${tradeName.toLowerCase()} specialists in ${locationName}. Compare quotes and see 2025 price guides.`}
          schema={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: `Verified ${tradeName} Services in ${locationName}`,
                provider: {
                  "@type": "Organization",
                  name: "CostaTrades Network",
                },
                areaServed: {
                  "@type": "City",
                  name: locationName,
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "120",
                },
                priceRange: tradePriceRange || undefined,
                hasOfferCatalog:
                  tradeTasks.length > 0
                    ? {
                        "@type": "OfferCatalog",
                        name: `${tradeName} services in ${locationName}`,
                        itemListElement: tradeTasks.map((task) => ({
                          "@type": "Offer",
                          itemOffered: {
                            "@type": "Service",
                            name: task,
                          },
                        })),
                      }
                    : undefined,
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: `How much does a ${tradeName} cost in ${locationName}?`,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: tradePriceRange
                        ? `The average cost for a ${tradeName} in ${locationName} is typically around ${tradePriceRange} for a standard call-out.`
                        : `The average cost for a ${tradeName} in ${locationName} varies based on the job size and complexity.`,
                    },
                  },
                  {
                    "@type": "Question",
                    name: `Are ${tradeName}s in ${locationName} insured?`,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, all specialists on CostaTrades are verified and required to carry valid liability insurance.",
                    },
                  },
                ],
              },
            ],
          }}
        />
        {/* 1. Hero Section - Standard (non-emergency) */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt={`${tradeName} in ${locationName}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44]/95 to-[#0a1f44]/60"></div>
          </div>

          <div className="container-custom relative z-10 text-white">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">
                  Vetted, Insured, and Local
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Verified {tradeName} Specialists in {locationName}
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl font-light">
                Hire vetted {tradeName.toLowerCase()} specialists in{" "}
                {locationName} for planned work, improvements and maintenance
                with clear pricing and communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/post-job">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#0A1F44] hover:bg-[#06152b] text-white h-14 px-8 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    Get Quotes Now
                  </Button>
                </Link>
                <Link to="/post-job">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 h-14 px-8 text-lg font-medium rounded-full backdrop-blur-sm"
                  >
                    Describe Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Price Guide Table Section (Semantic HTML) */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0a1f44] mb-8 text-center">
                2025 Price Guide: {tradeName} Costs in {locationName}
              </h2>
              <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 font-semibold text-[#0a1f44]">
                        Service
                      </th>
                      <th className="p-4 font-semibold text-[#0a1f44]">
                        Avg Price
                      </th>
                      <th className="p-4 font-semibold text-[#0a1f44]">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {tradePriceRange ? (
                      <>
                        <tr className="hover:bg-blue-50/30 transition-colors">
                          <td className="p-4 text-slate-700 font-medium">
                            Standard Call-out
                          </td>
                          <td className="p-4 text-slate-600">
                            {tradePriceRange}
                          </td>
                          <td className="p-4 text-slate-500 text-sm">
                            First Hour
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50/30 transition-colors">
                          <td className="p-4 text-slate-700 font-medium">
                            Additional Time
                          </td>
                          <td className="p-4 text-slate-600">
                            Included within range
                          </td>
                          <td className="p-4 text-slate-500 text-sm">
                            Project Dependent
                          </td>
                        </tr>
                      </>
                    ) : (
                      <>
                        <tr className="hover:bg-blue-50/30 transition-colors">
                          <td className="p-4 text-slate-700 font-medium">
                            Standard Call-out
                          </td>
                          <td className="p-4 text-slate-600">€50 - €80</td>
                          <td className="p-4 text-slate-500 text-sm">
                            First Hour
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50/30 transition-colors">
                          <td className="p-4 text-slate-700 font-medium">
                            Hourly Rate
                          </td>
                          <td className="p-4 text-slate-600">€40 - €60</td>
                          <td className="p-4 text-slate-500 text-sm">
                            Per Hour
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-500 mt-4 text-center">
                *Prices are estimates based on local market rates in{" "}
                {locationName}. Final quotes may vary based on complexity.
              </p>
              {tradeTasks.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-[#0a1f44] mb-3">
                    Typical Jobs for {tradeName} in {locationName}
                  </h3>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    {tradeTasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 3. Local Regulations Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-6">
                <div className="hidden md:flex w-16 h-16 bg-[#0a1f44] text-white rounded-2xl items-center justify-center flex-shrink-0 shadow-lg">
                  <Info className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0a1f44] mb-6">
                    Rules for hiring a {tradeName} in {locationName}
                  </h2>
                  <div className="prose prose-lg text-gray-600 leading-relaxed">
                    {locationData?.content_injects?.intro ? (
                      <p className="mb-4">
                        {locationData.content_injects.intro}
                      </p>
                    ) : (
                      <p className="mb-4">
                        When undertaking work in {locationName}, it is crucial
                        to adhere to local regulations to avoid fines and
                        disputes.
                      </p>
                    )}

                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      <li>
                        <strong>Community Guidelines:</strong>{" "}
                        {locationData?.logistics?.community_guidelines ||
                          `Many urbanizations in ${locationName} have strict rules regarding work hours and access for tradespeople. Always check with your community president or administrator.`}
                      </li>
                      <li>
                        <strong>Noise Ordinances:</strong>{" "}
                        {locationData?.logistics?.noise_ordinances ||
                          "Construction noise is typically restricted during siesta hours (often 2 PM - 5 PM) and late evenings. Violating these can lead to police complaints."}
                      </li>
                      <li>
                        <strong>Permits:</strong>{" "}
                        {locationData?.logistics?.permits ||
                          `For significant renovations, a "Licencia de Obra Menor" (Minor Works License) may be required from the ${locationName} Town Hall.`}
                      </li>
                    </ul>

                    {locationData?.sub_areas &&
                      locationData.sub_areas.length > 0 && (
                        <div className="mt-6">
                          <h3 className="text-lg font-semibold text-[#0a1f44] mb-2">
                            Areas Covered in {locationName}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {locationData.sub_areas.map((area, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    <p className="mt-4">
                      Our verified {tradeName.toLowerCase()} specialists are
                      familiar with these local requirements and can help ensure
                      your project proceeds smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Listings Grid Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">
                Top Rated {tradeName}s near {locationName}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Compare profiles, read reviews, and request quotes from the best
                local professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={heroImage}
                    alt={`Local ${tradeName}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-[#0a1f44] shadow-sm">
                    Verified
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1f44] mb-2">
                    Premier {tradeName} Services
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    ★★★★★ <span className="text-gray-400 text-sm">(48)</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    Specializing in residential and commercial projects across{" "}
                    {locationName}. Fully insured and bilingual team.
                  </p>
                  <Link to="/post-job">
                    <Button className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
                      Request Quote
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={TRADE_IMAGES["builder"] || heroImage}
                    alt={`Expert ${tradeName}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-[#0a1f44] shadow-sm">
                    Verified
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1f44] mb-2">
                    {locationName} {tradeName} Pros
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    ★★★★★ <span className="text-gray-400 text-sm">(32)</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    Fast response times and high-quality workmanship. Experts in
                    local building codes and regulations.
                  </p>
                  <Link to="/post-job">
                    <Button className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
                      Request Quote
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={TRADE_IMAGES["handyman"] || heroImage}
                    alt={`Trusted ${tradeName}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-[#0a1f44] shadow-sm">
                    Verified
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1f44] mb-2">
                    Reliable {tradeName} Solutions
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500 mb-4">
                    ★★★★★ <span className="text-gray-400 text-sm">(27)</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    Affordable rates and guaranteed satisfaction. Serving{" "}
                    {locationName} and surrounding areas.
                  </p>
                  <Link to="/post-job">
                    <Button className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
                      Request Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Final CTA Section */}
        <section className="py-20 bg-[#0a1f44] text-white text-center">
          <div className="container-custom max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to hire a {tradeName.toLowerCase()} in {locationName}?
            </h2>
            <p className="text-xl text-blue-100 mb-10 font-light">
              Share a few details about your project and we&apos;ll connect you
              with vetted local specialists.
            </p>
            <Link to="/post-job">
              <Button
                size="lg"
                className="bg-white text-[#0a1f44] hover:bg-blue-50 h-16 px-10 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Tell Us About Your Project
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title={`Emergency ${tradeName} in ${locationName} | 24/7 Rapid Response`}
        description={`Emergency ${tradeName} in ${locationName} for leaks, structural issues and urgent repairs. 24/7 response with vetted local specialists ready to stabilise problems before they worsen.`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Verified ${tradeName} Services in ${locationName}`,
          provider: {
            "@type": "Organization",
            name: "CostaTrades Network",
          },
          areaServed: {
            "@type": "City",
            name: locationName,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "120",
          },
        }}
      />
      {/* 1. Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={`${tradeName} in ${locationName}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44]/90 to-[#0a1f44]/40"></div>
        </div>

        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">
                24/7 Emergency Specialists
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Emergency {tradeName} in {locationName}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl font-light">
              Emergency {tradeName.toLowerCase()} support in {locationName} for
              leaks, structural issues and urgent repairs, with vetted local
              specialists who plan fast access routes to your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/post-job">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#E31E24] hover:bg-[#C41218] text-white h-14 px-8 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Get a Quote Now
                </Button>
              </Link>
              <Link to="/post-job">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 h-14 px-8 text-lg font-medium rounded-full backdrop-blur-sm"
                >
                  Browse Professionals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Market Rates Section */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-[#0a1f44] p-6 text-white text-center md:text-left">
              <h2 className="text-2xl font-bold">
                Typical Emergency Costs for {tradeName} in {locationName}
              </h2>
              <p className="text-blue-200 text-sm mt-1">
                Based on recent emergency call-outs completed in your area
              </p>
            </div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* Standard Rate */}
              <div className="p-8 text-center hover:bg-blue-50/30 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Standard Daytime Rate
                </h3>
                <div className="text-4xl font-bold text-[#0a1f44] mb-2">
                  {MOCK_DATA.average_price}
                </div>
                <p className="text-sm text-muted-foreground">
                  Includes first hour on site for non-urgent visits
                </p>
              </div>

              {/* Emergency Rate */}
              <div className="p-8 text-center hover:bg-red-50/30 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full mb-4">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Emergency / Night & Weekend
                </h3>
                <div className="text-4xl font-bold text-[#E31E24] mb-2">
                  {MOCK_DATA.emergency_price}
                </div>
                <p className="text-sm text-muted-foreground">
                  For urgent 24/7 call-outs when issues cannot wait
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Local Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex w-16 h-16 bg-[#0a1f44] text-white rounded-2xl items-center justify-center flex-shrink-0 shadow-lg rotate-3">
                <Info className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#0a1f44] mb-6">
                  Local Advice for {locationName}
                </h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p className="text-xl font-light mb-4">
                    {MOCK_DATA.local_insight_text}
                  </p>
                  <p>
                    When hiring a {tradeName.toLowerCase()} in {locationName},
                    make sure they understand your community access rules,
                    parking limitations and noise restrictions. Coordinated
                    arrival windows and clear communication with administrators
                    help prevent delays in true emergencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Hire Local? */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">
              Why Hire Through CostaTrades?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We take the stress out of emergency call-outs on the Costa del Sol
              by matching you with reliable, fast-response specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">
                Verified ID
              </h3>
              <p className="text-muted-foreground">
                We check every specialist's identity and credentials so gated
                communities and managed buildings can grant access quickly.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">
                Local Knowledge
              </h3>
              <p className="text-muted-foreground">
                Our professionals know the fastest routes, seasonal traffic
                patterns and common property issues in {locationName}.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">
                Fair Pricing
              </h3>
              <p className="text-muted-foreground">
                Transparent emergency rates with no hidden fees, agreed upfront
                before any work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-20 bg-[#0a1f44] text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need emergency {tradeName.toLowerCase()} help in {locationName}{" "}
            today?
          </h2>
          <p className="text-xl text-blue-100 mb-10 font-light">
            Don't wait for structural issues or serious leaks to spread. Request
            a fast-response specialist now.
          </p>
          <Link to="/post-job">
            <Button
              size="lg"
              className="bg-[#E31E24] hover:bg-[#C41218] text-white h-16 px-10 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Request Emergency Help
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
