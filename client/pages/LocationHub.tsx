import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import {
  Shield,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Phone,
  Wrench,
  Zap,
  Key,
  Hammer,
  Thermometer,
  Droplets,
  Shovel,
  Paintbrush,
} from "lucide-react";
import { Card } from "@/components/ui/card";

// Types based on the input format
interface TownLogisticsProfile {
  cluster_type: string;
  logistics: {
    security_gate_clearance: string;
    vehicle_width_limit_meters: string;
    parking_risk_level: string;
    low_emission_zone_active: string;
  };
  seasonality: {
    summer_construction_ban: string; // "true" or "false" in string format based on prompt example? Or boolean? Prompt says "true" in logic.
    ban_months: string[];
    noise_sensitivity_score: string;
  };
  content_injects: {
    provider_warning: string;
    customer_reassurance: string;
  };
}

interface LocationData {
  REGION_NAME: string;
  region_slug: string;
  CURRENT_DATE: string;
  SUB_AREAS: { name: string; slug: string }[];
  LAT: string;
  LON: string;
  TownLogisticsProfile: TownLogisticsProfile;
}

// Mock data to simulate the input provided "each time"
const MOCK_DATA: LocationData = {
  REGION_NAME: "Marbella",
  region_slug: "marbella",
  CURRENT_DATE: new Date().toISOString().split("T")[0],
  SUB_AREAS: [
    { name: "Puerto Banus", slug: "puerto-banus" },
    { name: "Nueva Andalucia", slug: "nueva-andalucia" },
    { name: "San Pedro", slug: "san-pedro" },
    { name: "Elviria", slug: "elviria" },
  ],
  LAT: "36.5101",
  LON: "-4.8855",
  TownLogisticsProfile: {
    cluster_type: "Luxury Coastal",
    logistics: {
      security_gate_clearance: "Required for La Zagaleta & Sierra Blanca",
      vehicle_width_limit_meters: "2.5m in Old Town",
      parking_risk_level: "High in summer",
      low_emission_zone_active: "false",
    },
    seasonality: {
      summer_construction_ban: "true",
      ban_months: ["July", "August"],
      noise_sensitivity_score: "High",
    },
    content_injects: {
      provider_warning:
        "Contractors must register with community security 24h in advance.",
      customer_reassurance:
        "Our specialists handle all community access permits for you.",
    },
  },
};

const SPECIALIST_CATEGORIES = [
  { name: "Plumbers", slug: "plumber", icon: Droplets },
  { name: "Electricians", slug: "electrician", icon: Zap },
  { name: "Builders", slug: "builder", icon: Hammer },
  { name: "AC Repair", slug: "ac-repair", icon: Thermometer },
  { name: "Bathroom Fitters", slug: "bathroom-fitter", icon: Wrench },
  { name: "Gardeners", slug: "gardener", icon: Shovel },
  { name: "Roofers", slug: "roofer", icon: Hammer }, // Reusing Hammer
  { name: "Handymen", slug: "handyman", icon: Wrench },
  { name: "Locksmiths", slug: "locksmith", icon: Key },
  { name: "Renovation Specialists", slug: "renovation", icon: Paintbrush },
];

export default function LocationHub() {
  const { region_slug } = useParams();
  
  // In a real app, we would fetch data based on region_slug
  // For now, we use MOCK_DATA and override name if slug is different (basic simulation)
  const data = MOCK_DATA; 
  const regionName = region_slug 
    ? region_slug.charAt(0).toUpperCase() + region_slug.slice(1).replace(/-/g, " ") 
    : data.REGION_NAME;

  // Override mock data region name for display
  const displayData = { ...data, REGION_NAME: regionName };
  const { TownLogisticsProfile } = displayData;

  // 6. Seasonal Warning Logic
  const currentMonth = new Date(displayData.CURRENT_DATE).toLocaleString('default', { month: 'long' });
  const isBanActive = 
    TownLogisticsProfile.seasonality.summer_construction_ban === "true" &&
    TownLogisticsProfile.seasonality.ban_months.includes(currentMonth);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 0. META DATA */}
      <SEO
        title={`Verified Specialists in ${displayData.REGION_NAME} | CostaTrades™ (Official)`}
        description={`Find vetted plumbers, electricians, and home specialists in ${displayData.REGION_NAME}. 100% ID-verified, insured, and reviewed. View availability in ${displayData.REGION_NAME} now.`}
      />

      {/* 1. HERO BLOCK */}
      <section className="relative py-20 md:py-28 bg-[#0a1f44] text-white overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Verified Specialists in {displayData.REGION_NAME}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl font-light">
              Hire ID-verified plumbers, electricians, builders, handymen, and home specialists across {displayData.REGION_NAME}. Every specialist is insured, background-checked, and reviewed.
            </p>
            <Link to={`/post-job/results?area=${displayData.region_slug}`}>
              <Button
                size="lg"
                className="bg-[#E31E24] hover:bg-[#C41218] text-white h-14 px-8 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Post a Job in {displayData.REGION_NAME}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SUB-AREA GRID */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-[#0a1f44] mb-8">
            Popular Areas in {displayData.REGION_NAME}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayData.SUB_AREAS.map((area) => (
              <Link key={area.slug} to={`/locations/${area.slug}`} className="block group">
                <Card className="h-full p-6 hover:shadow-md transition-shadow border-gray-200">
                  <h3 className="text-xl font-bold text-[#0a1f44] mb-2 group-hover:text-blue-600 transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-muted-foreground">
                    Find verified specialists in {area.name}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SPECIALIST CATEGORY GRID */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-[#0a1f44] mb-8">
            Specialists Available in {displayData.REGION_NAME}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SPECIALIST_CATEGORIES.map((cat) => (
              <Link 
                key={cat.slug} 
                to={`/locations/${displayData.region_slug}/${cat.slug}`}
                className="flex flex-col items-center p-6 rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all text-center group bg-white"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#0a1f44] group-hover:text-white transition-colors">
                  <cat.icon className="w-6 h-6" />
                </div>
                <span className="font-medium text-gray-900">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOCAL ISSUES (AEO + LOGISTICS INJECTION) */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0a1f44] mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              Local Home Issues in {displayData.REGION_NAME}
            </h2>
            <ul className="space-y-4">
              {/* Region specific issues - generic fallback if not in JSON, but prompt implies JSON drives this */}
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                <span className="text-gray-700">High mineral content in water supply requires regular boiler maintenance.</span>
              </li>
              
              {/* Logistics Injections */}
              {TownLogisticsProfile.logistics.security_gate_clearance && (
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                  <span className="text-gray-700">Security Gate: {TownLogisticsProfile.logistics.security_gate_clearance}</span>
                </li>
              )}
              {TownLogisticsProfile.logistics.vehicle_width_limit_meters && (
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                  <span className="text-gray-700">Vehicle Access: {TownLogisticsProfile.logistics.vehicle_width_limit_meters}</span>
                </li>
              )}
              {TownLogisticsProfile.logistics.parking_risk_level && (
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                  <span className="text-gray-700">Parking: {TownLogisticsProfile.logistics.parking_risk_level}</span>
                </li>
              )}
              {TownLogisticsProfile.logistics.low_emission_zone_active === "true" && (
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                  <span className="text-gray-700">Low Emission Zone active in city center.</span>
                </li>
              )}
              
              {/* Content Injects */}
              {TownLogisticsProfile.content_injects.provider_warning && (
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-amber-700">{TownLogisticsProfile.content_injects.provider_warning}</span>
                </li>
              )}
              {TownLogisticsProfile.content_injects.customer_reassurance && (
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-green-700">{TownLogisticsProfile.content_injects.customer_reassurance}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. LOGISTICS SNAPSHOT COMPONENT - Placeholder as component doesn't exist */}
      {/* If it existed: <LogisticsSnapshot ... /> */}

      {/* 6. SEASONAL WARNING */}
      {isBanActive && (
        <section className="py-8 bg-amber-50 border-y border-amber-200">
          <div className="container-custom">
            <div className="flex items-start gap-4 max-w-4xl mx-auto">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-amber-800 mb-1">Seasonal Construction Restriction</h3>
                <p className="text-amber-700">
                  Heavy construction and noise-generating work is restricted in {displayData.REGION_NAME} during {TownLogisticsProfile.seasonality.ban_months.join(" & ")}.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. EMERGENCY CARDS */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-[#0a1f44] mb-8">
            Emergency Help in {displayData.REGION_NAME}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Emergency Plumber", icon: Droplets },
              { title: "Emergency Electrician", icon: Zap },
              { title: "Emergency Locksmith", icon: Key },
            ].map((item) => (
              <Card key={item.title} className="p-6 border-l-4 border-l-red-500 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0a1f44]">{item.title}</h3>
                </div>
                <p className="text-gray-600 font-medium flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Available 24/7 · Verified · Fast Response
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. RELATED AREAS */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-[#0a1f44] mb-6">
            Nearby {TownLogisticsProfile.cluster_type} Areas
          </h2>
          <div className="flex flex-wrap gap-4">
            {/* Mock related areas based on cluster type */}
            {["Estepona", "Benahavis", "Sotogrande"].map((town) => (
              <Link key={town} to={`/locations/${town.toLowerCase()}`}>
                <Button variant="outline" className="bg-white hover:bg-gray-50">
                  {town}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. COVERAGE MAP */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden relative">
             <iframe
                title={`Coverage map of verified specialists in ${displayData.REGION_NAME}`}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${parseFloat(displayData.LON)-0.1},${parseFloat(displayData.LAT)-0.1},${parseFloat(displayData.LON)+0.1},${parseFloat(displayData.LAT)+0.1}&layer=mapnik&marker=${displayData.LAT},${displayData.LON}`}
                className="w-full h-full border-0 grayscale-[20%]"
                loading="lazy"
              />
          </div>
        </div>
      </section>

      {/* 10. TRUST MODULE */}
      <section className="py-16 bg-[#0a1f44] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Your Safety Comes First</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">ID Verified</h3>
                  <p className="text-blue-100 text-sm">All specialists are ID-verified for your peace of mind.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Background Checked</h3>
                  <p className="text-blue-100 text-sm">Background screening performed on all professionals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Insured</h3>
                  <p className="text-blue-100 text-sm">Insurance checks completed for every business.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Local Reviews</h3>
                  <p className="text-blue-100 text-sm">Real local reviews from {displayData.REGION_NAME}.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Trusted</h3>
                  <p className="text-blue-100 text-sm">Trusted by homeowners across the Costa del Sol.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SCHEMA (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "name": `Specialists in ${displayData.REGION_NAME}`,
          "areaServed": displayData.REGION_NAME,
          "geo": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": displayData.LAT,
              "longitude": displayData.LON
            },
            "geoRadius": "15000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `Specialist Services in ${displayData.REGION_NAME}`,
            "itemListElement": SPECIALIST_CATEGORIES.map(cat => ({
              "@type": "OfferCatalog",
              "name": cat.name
            }))
          }
        })}
      </script>

      {/* 12. FINAL CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold text-[#0a1f44] mb-8">
            Ready to find a specialist in {displayData.REGION_NAME}?
          </h2>
          <Link to={`/post-job/results?area=${displayData.region_slug}`}>
            <Button
              size="lg"
              className="bg-[#E31E24] hover:bg-[#C41218] text-white h-16 px-12 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Post a Job in {displayData.REGION_NAME}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
