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

interface LogisticsInfo {
  security_gate_clearance: boolean;
  vehicle_width_limit_meters: number | null;
  parking_risk_level: string;
  low_emission_zone_active: boolean;
}

interface SeasonalityInfo {
  summer_construction_ban: boolean;
  ban_months: string[];
  noise_sensitivity_score: number;
}

interface ContentInjects {
  provider_warning: string;
  customer_reassurance: string;
}

interface TownLogisticsProfile {
  cluster_type: string;
  logistics: LogisticsInfo;
  seasonality: SeasonalityInfo;
  content_injects: ContentInjects;
}

interface SubArea {
  name: string;
  slug: string;
}

interface LocationData {
  REGION_NAME: string;
  region_slug: string;
  CURRENT_DATE: string;
  SUB_AREAS: SubArea[];
  LAT: string;
  LON: string;
  TownLogisticsProfile: TownLogisticsProfile;
}

const SPECIALIST_CATEGORIES = [
  { name: "Plumbers", slug: "plumber", icon: Droplets },
  { name: "Electricians", slug: "electrician", icon: Zap },
  { name: "Builders", slug: "builder", icon: Hammer },
  { name: "AC Repair", slug: "ac-repair", icon: Thermometer },
  { name: "Bathroom Fitters", slug: "bathroom-fitter", icon: Wrench },
  { name: "Gardeners", slug: "gardener", icon: Shovel },
  { name: "Roofers", slug: "roofer", icon: Hammer },
  { name: "Handymen", slug: "handyman", icon: Wrench },
  { name: "Locksmiths", slug: "locksmith", icon: Key },
  { name: "Renovation Specialists", slug: "renovation", icon: Paintbrush },
];

const LOCATION_CONFIG: LocationData[] = [
  {
    REGION_NAME: "Malaga East & Axarquia",
    region_slug: "malaga-east-axarquia",
    CURRENT_DATE: "2025-11-27",
    SUB_AREAS: [
      { name: "Rincon de la Victoria", slug: "rincon-de-la-victoria" },
      { name: "La Cala del Moral", slug: "la-cala-del-moral" },
      { name: "Torre del Mar", slug: "torre-del-mar" },
      { name: "Nerja", slug: "nerja" },
      { name: "Frigiliana", slug: "frigiliana" },
      { name: "Torrox", slug: "torrox" },
      { name: "Velez Malaga", slug: "velez-malaga" },
    ],
    LAT: "36.7460",
    LON: "-4.2801",
    TownLogisticsProfile: {
      cluster_type: "Mixed_Coastal_Rural",
      logistics: {
        security_gate_clearance: false,
        vehicle_width_limit_meters: 2.2,
        parking_risk_level: "High",
        low_emission_zone_active: true,
      },
      seasonality: {
        summer_construction_ban: false,
        ban_months: [],
        noise_sensitivity_score: 6,
      },
      content_injects: {
        provider_warning:
          "Some old-town areas like Nerja and Frigiliana have narrow streets with strict width limits and difficult parking.",
        customer_reassurance:
          "CostaTrades recommends early scheduling so specialists can navigate restricted historic zones without delay.",
      },
    },
  },
  {
    REGION_NAME: "Inland Sierra Region",
    region_slug: "inland-sierra-region",
    CURRENT_DATE: "2025-11-27",
    SUB_AREAS: [
      { name: "Alhaurin el Grande", slug: "alhaurin-el-grande" },
      { name: "Coin", slug: "coin" },
      { name: "Mijas Pueblo", slug: "mijas-pueblo" },
      { name: "Ojen", slug: "ojen" },
      { name: "Tolox", slug: "tolox" },
      { name: "Guaro", slug: "guaro" },
      { name: "Alozaina", slug: "alozaina" },
    ],
    LAT: "36.6634",
    LON: "-4.6875",
    TownLogisticsProfile: {
      cluster_type: "Rural_Mountain",
      logistics: {
        security_gate_clearance: false,
        vehicle_width_limit_meters: null,
        parking_risk_level: "Low",
        low_emission_zone_active: false,
      },
      seasonality: {
        summer_construction_ban: false,
        ban_months: [],
        noise_sensitivity_score: 4,
      },
      content_injects: {
        provider_warning:
          "Some hillside roads in mountain villages are steep, winding, and can affect estimated arrival times.",
        customer_reassurance:
          "CostaTrades specialists plan mountain access routes in advance for smooth and reliable service.",
      },
    },
  },
  {
    REGION_NAME: "Marbella Area",
    region_slug: "marbella-area",
    CURRENT_DATE: "2025-11-27",
    SUB_AREAS: [
      { name: "Puerto Banus", slug: "puerto-banus" },
      { name: "Nueva Andalucia", slug: "nueva-andalucia" },
      { name: "San Pedro", slug: "san-pedro" },
      { name: "Elviria", slug: "elviria" },
      { name: "Las Chapas", slug: "las-chapas" },
    ],
    LAT: "36.5099",
    LON: "-4.8858",
    TownLogisticsProfile: {
      cluster_type: "Luxury_Gated",
      logistics: {
        security_gate_clearance: true,
        vehicle_width_limit_meters: null,
        parking_risk_level: "Medium",
        low_emission_zone_active: false,
      },
      seasonality: {
        summer_construction_ban: true,
        ban_months: ["July", "August"],
        noise_sensitivity_score: 9,
      },
      content_injects: {
        provider_warning:
          "Some gated communities in Marbella require pre-approved access for specialists.",
        customer_reassurance:
          "CostaTrades handles all access permissions on your behalf.",
      },
    },
  },
];

const RELATED_AREAS_BY_CLUSTER: Record<string, SubArea[]> = {
  Mixed_Coastal_Rural: [
    { name: "Torre del Mar", slug: "torre-del-mar" },
    { name: "Nerja", slug: "nerja" },
    { name: "Velez Malaga", slug: "velez-malaga" },
    { name: "Frigiliana", slug: "frigiliana" },
    { name: "Rincon de la Victoria", slug: "rincon-de-la-victoria" },
  ],
  Rural_Mountain: [
    { name: "Mijas Pueblo", slug: "mijas-pueblo" },
    { name: "Coin", slug: "coin" },
    { name: "Alhaurin el Grande", slug: "alhaurin-el-grande" },
    { name: "Tolox", slug: "tolox" },
    { name: "Guaro", slug: "guaro" },
  ],
};

function formatRegionNameFromSlug(slug: string): string {
  if (!slug) return "";
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function LocationHub() {
  const { region_slug } = useParams();

  const defaultRegion = LOCATION_CONFIG[0];

  const matchedRegion = region_slug
    ? LOCATION_CONFIG.find((region) => region.region_slug === region_slug)
    : defaultRegion;

  const baseData: LocationData =
    matchedRegion ||
    (region_slug
      ? {
          ...defaultRegion,
          REGION_NAME: formatRegionNameFromSlug(region_slug),
          region_slug,
        }
      : defaultRegion);

  const displayData = baseData;
  const { TownLogisticsProfile } = displayData;

  const currentDate = displayData.CURRENT_DATE
    ? new Date(displayData.CURRENT_DATE)
    : new Date();

  const currentMonth = currentDate.toLocaleString("default", { month: "long" });

  const isBanActive =
    TownLogisticsProfile.seasonality.summer_construction_ban &&
    TownLogisticsProfile.seasonality.ban_months.includes(currentMonth);

  const relatedAreas =
    RELATED_AREAS_BY_CLUSTER[TownLogisticsProfile.cluster_type] || [];

  const clusterLabel = TownLogisticsProfile.cluster_type.replace(/_/g, " ");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `Specialists in ${displayData.REGION_NAME}`,
    areaServed: displayData.REGION_NAME,
    geo: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: displayData.LAT,
        longitude: displayData.LON,
      },
      geoRadius: "15000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Specialist Services in ${displayData.REGION_NAME}`,
      itemListElement: SPECIALIST_CATEGORIES.map((cat) => ({
        "@type": "OfferCatalog",
        name: cat.name,
      })),
    },
  };

  const hasBanMonths =
    TownLogisticsProfile.seasonality.ban_months &&
    TownLogisticsProfile.seasonality.ban_months.length > 0;

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title={`Verified Specialists in ${displayData.REGION_NAME} | CostaTrades (Official)`}
        description={`Find vetted plumbers, electricians, and home specialists in ${displayData.REGION_NAME}. 100% ID-verified, insured, and reviewed. View availability in ${displayData.REGION_NAME} now.`}
        schema={schemaData}
      />

      <section className="relative py-20 md:py-28 bg-[#0a1f44] text-white overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Verified Specialists in {displayData.REGION_NAME}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl font-light">
              Hire ID-verified plumbers, electricians, builders, handymen, and
              home specialists across {displayData.REGION_NAME}. Every
              specialist is insured, background-checked, and reviewed.
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

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-[#0a1f44] mb-8">
            Popular Areas in {displayData.REGION_NAME}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayData.SUB_AREAS.map((area) => (
              <Link
                key={area.slug}
                to={`/locations/${area.slug}`}
                className="block group"
              >
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

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0a1f44] mb-6 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              Local Home Issues in {displayData.REGION_NAME}
            </h2>
            <ul className="space-y-4">
              {TownLogisticsProfile.logistics.vehicle_width_limit_meters !==
                null && (
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Vehicle width limit of{" "}
                    {TownLogisticsProfile.logistics.vehicle_width_limit_meters}{" "}
                    meters in some streets.
                  </span>
                </li>
              )}
              {TownLogisticsProfile.logistics.parking_risk_level && (
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Parking risk level is{" "}
                    {TownLogisticsProfile.logistics.parking_risk_level}.
                  </span>
                </li>
              )}
              {TownLogisticsProfile.logistics.low_emission_zone_active && (
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Low emission zone rules apply in parts of this region.
                  </span>
                </li>
              )}
              {TownLogisticsProfile.content_injects.provider_warning && (
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-amber-700">
                    {TownLogisticsProfile.content_injects.provider_warning}
                  </span>
                </li>
              )}
              {TownLogisticsProfile.content_injects.customer_reassurance && (
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-green-700">
                    {TownLogisticsProfile.content_injects.customer_reassurance}
                  </span>
                </li>
              )}
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                <span className="text-gray-700">
                  {TownLogisticsProfile.seasonality.summer_construction_ban &&
                  hasBanMonths
                    ? `Summer construction ban applies during ${TownLogisticsProfile.seasonality.ban_months.join(
                        " & ",
                      )}.`
                    : "No fixed summer construction ban is currently in place, but some communities may have their own quiet hours."}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Noise sensitivity in this area is rated{" "}
                  {TownLogisticsProfile.seasonality.noise_sensitivity_score}/10,
                  so planning noisy works considerately is important.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {isBanActive && (
        <section className="py-8 bg-amber-50 border-y border-amber-200">
          <div className="container-custom">
            <div className="flex items-start gap-4 max-w-4xl mx-auto">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-amber-800 mb-1">
                  Seasonal Construction Restriction
                </h3>
                <p className="text-amber-700">
                  Heavy construction and noise-generating work is restricted in{" "}
                  {displayData.REGION_NAME} during{" "}
                  {TownLogisticsProfile.seasonality.ban_months.join(" & ")}.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

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
              <Card
                key={item.title}
                className="p-6 border-l-4 border-l-red-500 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#0a1f44]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 font-medium flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Available 24/7 - Verified - Fast Response
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {relatedAreas.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-[#0a1f44] mb-6">
              Nearby {clusterLabel} Areas
            </h2>
            <div className="flex flex-wrap gap-4">
              {relatedAreas.map((area) => (
                <Link key={area.slug} to={`/locations/${area.slug}`}>
                  <Button
                    variant="outline"
                    className="bg-white hover:bg-gray-50 flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    {area.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden relative">
            <iframe
              title={`Coverage map of verified specialists in ${displayData.REGION_NAME}`}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                parseFloat(displayData.LON) - 0.1
              },${parseFloat(displayData.LAT) - 0.1},${
                parseFloat(displayData.LON) + 0.1
              },${
                parseFloat(displayData.LAT) + 0.1
              }&layer=mapnik&marker=${displayData.LAT},${displayData.LON}`}
              className="w-full h-full border-0 grayscale-[20%]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a1f44] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">
              Your Safety Comes First
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">ID Verified</h3>
                  <p className="text-blue-100 text-sm">
                    All specialists are ID-verified for your peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Background Checked</h3>
                  <p className="text-blue-100 text-sm">
                    Background screening performed on all professionals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Insured</h3>
                  <p className="text-blue-100 text-sm">
                    Insurance checks completed for every business.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Local Reviews</h3>
                  <p className="text-blue-100 text-sm">
                    Real local reviews from {displayData.REGION_NAME}.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Trusted</h3>
                  <p className="text-blue-100 text-sm">
                    Trusted by homeowners across the Costa del Sol.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
