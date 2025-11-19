import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TradespersonProgress } from "@/components/TradespersonProgress";
import { ChevronLeft } from "lucide-react";

const TRADE_LABELS: Record<string, string> = {
  electrician: "Electrician",
  plumber: "Plumber",
  builder: "Builder",
  roofer: "Roofer",
  painter: "Painter",
  gardener: "Gardener",
  cleaner: "Cleaner",
  mechanic: "Mechanic",
};

const DEFAULT_MAP_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=-5.6,35.9,-3.8,37.0&layer=mapnik";

const AREA_OPTIONS = [
  "Marbella",
  "Málaga",
  "Fuengirola",
  "Mijas",
  "Estepona",
  "Benalmádena",
  "Torremolinos",
  "Nerja",
  "Coín",
  "Alhaurín el Grande",
  "San Pedro de Alcántara",
  "Rincón de la Victoria",
];

const AREA_COORDINATES: Record<string, { lat: number; lon: number }> = {
  Marbella: { lat: 36.5099, lon: -4.8854 },
  "Málaga": { lat: 36.7213, lon: -4.4214 },
  Fuengirola: { lat: 36.5396, lon: -4.6247 },
  Mijas: { lat: 36.595, lon: -4.6374 },
  Estepona: { lat: 36.4256, lon: -5.151 },
  "Benalmádena": { lat: 36.5951, lon: -4.5734 },
  Torremolinos: { lat: 36.6203, lon: -4.4998 },
  Nerja: { lat: 36.746, lon: -3.88 },
  "Coín": { lat: 36.6588, lon: -4.7556 },
  "Alhaurín el Grande": { lat: 36.6428, lon: -4.6913 },
  "San Pedro de Alcántara": { lat: 36.4823, lon: -4.9903 },
  "Rincón de la Victoria": { lat: 36.7176, lon: -4.275 },
};

const LANGUAGE_OPTIONS = [
  { value: "English", label: "English", flag: "🇬🇧" },
  { value: "Spanish", label: "Spanish", flag: "🇪🇸" },
  { value: "German", label: "German", flag: "🇩🇪" },
  { value: "French", label: "French", flag: "🇫🇷" },
  { value: "Arabic", label: "Arabic", flag: "🇦🇪" },
] as const;

const YEARS_IN_BUSINESS_OPTIONS = [
  "Under 1 year",
  "1-3 years",
  "3-5 years",
  "5+ years",
] as const;

type StoredApplication = {
  tradeSlug?: string;
  tradeLabel?: string;
  businessName?: string;
  website?: string;
  postcode?: string;
  selectedAreas?: string[];
  businessType?: string;
  employeeRange?: string;
  yearsInBusiness?: string;
  firstName?: string;
  lastName?: string;
  businessEmail?: string;
  businessPhone?: string;
  mobilePhone?: string;
  languages?: string[];
};

const APPLICATION_STORAGE_KEY = "costatrade.tradespersonApplication";

export default function TradespersonDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const tradeSlug = searchParams.get("trade") || "";

  const tradeLabel = useMemo(
    () => TRADE_LABELS[tradeSlug] || "Tradesperson",
    [tradeSlug],
  );

  const [businessName, setBusinessName] = useState("");
  const [website, setWebsite] = useState("");
  const [postcode, setPostcode] = useState("");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [mapCenter, setMapCenter] = useState<{ lat: number; lon: number } | null>(null);
  const [businessType, setBusinessType] = useState<string>("self-employed");
  const [employeeRange, setEmployeeRange] = useState<string>("1");
  const [yearsInBusiness, setYearsInBusiness] = useState<string>("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem(APPLICATION_STORAGE_KEY);
      if (!stored) {
        return;
      }

      const parsed = JSON.parse(stored) as StoredApplication;

      if (parsed.businessName) setBusinessName(parsed.businessName);
      if (parsed.website) setWebsite(parsed.website);
      if (parsed.postcode) setPostcode(parsed.postcode);
      if (parsed.selectedAreas) setSelectedAreas(parsed.selectedAreas);
      if (parsed.businessType) setBusinessType(parsed.businessType);
      if (parsed.employeeRange) setEmployeeRange(parsed.employeeRange);
      if (parsed.yearsInBusiness) setYearsInBusiness(parsed.yearsInBusiness);
      if (parsed.firstName) setFirstName(parsed.firstName);
      if (parsed.lastName) setLastName(parsed.lastName);
      if (parsed.businessEmail) setBusinessEmail(parsed.businessEmail);
      if (parsed.businessPhone) setBusinessPhone(parsed.businessPhone);
      if (parsed.mobilePhone) setMobilePhone(parsed.mobilePhone);
      if (parsed.languages) setLanguages(parsed.languages);
    } catch {
      // If reading stored data fails, continue with empty defaults
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!businessName || !postcode || !firstName || !lastName || !businessEmail || !businessPhone) {
      return;
    }

    if (selectedAreas.length === 0) {
      window.alert("Please select at least one area you work in.");
      return;
    }

    const application = {
      tradeSlug,
      tradeLabel,
      businessName,
      postcode,
      selectedAreas,
      businessType,
      employeeRange,
      yearsInBusiness,
      firstName,
      lastName,
      businessEmail,
      businessPhone,
      mobilePhone,
      languages,
      website,
    };

    window.sessionStorage.setItem(
      "costatrade.tradespersonApplication",
      JSON.stringify(application),
    );

    navigate("/tradesperson/review");
  };

  const mapUrl = useMemo(() => {
    if (!mapCenter) {
      return DEFAULT_MAP_URL;
    }

    const deltaLat = 0.18;
    const deltaLon = 0.3;
    const minLat = mapCenter.lat - deltaLat;
    const maxLat = mapCenter.lat + deltaLat;
    const minLon = mapCenter.lon - deltaLon;
    const maxLon = mapCenter.lon + deltaLon;

    return `https://www.openstreetmap.org/export/embed.html?bbox=${minLon},${minLat},${maxLon},${maxLat}&layer=mapnik&marker=${mapCenter.lat},${mapCenter.lon}`;
  }, [mapCenter]);

  const handlePostcodeBlur = async () => {
    const query = postcode.trim();
    if (!query) {
      return;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=es&q=${encodeURIComponent(query + " costa del sol")}`,
      );
      const results: Array<{ lat: string; lon: string }> = await response.json();

      if (results.length > 0) {
        const first = results[0];
        const lat = parseFloat(first.lat);
        const lon = parseFloat(first.lon);
        if (!Number.isNaN(lat) && !Number.isNaN(lon)) {
          setMapCenter({ lat, lon });
        }
      }
    } catch {
      // If geocoding fails, keep the existing map centre
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TradespersonProgress currentStep={2} />

      <div className="container-custom py-8 md:py-10 max-w-3xl">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 text-sm"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back</span>
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Tell us about your business
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mb-6">
          You selected <span className="font-semibold">{tradeLabel}</span>. We use
          these details to create your CostaTrade profile and match you with
          local homeowners.
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-foreground">
              Business details
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Business name*
                </label>
                <Input
                  value={businessName}
                  onChange={(event) => setBusinessName(event.target.value)}
                  placeholder="Enter your business name"
                  className="h-11 md:h-12 bg-white border-gray-300"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Business website (optional)
                </label>
                <Input
                  type="text"
                  value={website}
                  onChange={(event) => setWebsite(event.target.value)}
                  placeholder="onrise.ai or https://www.onrise.ai"
                  className="h-11 md:h-12 bg-white border-gray-300"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Business postcode*
                </label>
                <Input
                  value={postcode}
                  onChange={(event) => setPostcode(event.target.value)}
                  onBlur={handlePostcodeBlur}
                  placeholder="Business postcode"
                  className="h-11 md:h-12 bg-white border-gray-300"
                  required
                />
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Card className="overflow-hidden rounded-2xl border-gray-200 bg-white">
                <div className="relative w-full h-64 md:h-72 bg-gray-100">
                  <iframe
                    title="Costa del Sol map"
                    src={mapUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600/70 border-4 border-blue-400/70 shadow-lg" />
                  </div>
                </div>
                <div className="p-4 border-t border-gray-200 space-y-2">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Select the areas you cover on the Costa del Sol. You can choose more than one.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {AREA_OPTIONS.map((area) => {
                      const isSelected = selectedAreas.includes(area);

                      const handleClick = () => {
                        setSelectedAreas((current) => {
                          if (current.includes(area)) {
                            return current.filter((item) => item !== area);
                          }

                          return [...current, area];
                        });

                        const coordinates = AREA_COORDINATES[area];
                        if (coordinates) {
                          setMapCenter(coordinates);
                        }
                      };

                      return (
                        <button
                          key={area}
                          type="button"
                          onClick={handleClick}
                          className={`px-3 py-1.5 rounded-full text-xs md:text-sm border ${isSelected ? "bg-primary text-primary-foreground border-primary" : "bg-white text-foreground border-gray-300 hover:border-primary/70"}`}
                        >
                          {area}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Selected area{selectedAreas.length === 1 ? "" : "s"}: {" "}
                    <span className="font-medium">
                      {selectedAreas.length === 0
                        ? "None selected yet"
                        : selectedAreas.join(", ")}
                    </span>
                  </p>
                </div>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-foreground">
              Tell us more about your business
            </h2>

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Business type</p>
              <div className="grid gap-3 md:grid-cols-3">
                <label className="flex items-center justify-between gap-3 border rounded-xl px-4 py-3 bg-white cursor-pointer hover:border-primary/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Self employed</span>
                  </div>
                  <input
                    type="radio"
                    name="businessType"
                    value="self-employed"
                    checked={businessType === "self-employed"}
                    onChange={(event) => setBusinessType(event.target.value)}
                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                  />
                </label>
                <label className="flex items-center justify-between gap-3 border rounded-xl px-4 py-3 bg-white cursor-pointer hover:border-primary/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">SL company</span>
                  </div>
                  <input
                    type="radio"
                    name="businessType"
                    value="limited-company"
                    checked={businessType === "limited-company"}
                    onChange={(event) => setBusinessType(event.target.value)}
                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                  />
                </label>
                <label className="flex items-center justify-between gap-3 border rounded-xl px-4 py-3 bg-white cursor-pointer hover:border-primary/70 transition-colors">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Looking to start a business</span>
                  </div>
                  <input
                    type="radio"
                    name="businessType"
                    value="starting-business"
                    checked={businessType === "starting-business"}
                    onChange={(event) => setBusinessType(event.target.value)}
                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                  />
                </label>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <p className="text-sm font-medium text-foreground">
                How many employees do you have?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {["1", "2-5", "6-9", "10+"].map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setEmployeeRange(range)}
                    className={`flex flex-col items-center justify-center border rounded-xl px-4 py-3 text-sm bg-white ${employeeRange === range ? "border-primary bg-primary/5 text-foreground" : "border-gray-300 hover:border-primary/70"}`}
                  >
                    <span className="font-medium">{range}</span>
                    <span className="text-xs text-muted-foreground mt-1">
                      {range === "1" ? "Employee" : "Employees"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <p className="text-sm font-medium text-foreground">
                How long have you been in business?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {YEARS_IN_BUSINESS_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setYearsInBusiness(option)}
                    className={`flex items-center justify-center border rounded-xl px-4 py-3 text-sm bg-white ${yearsInBusiness === option ? "border-primary bg-primary/5 text-foreground" : "border-gray-300 hover:border-primary/70"}`}
                  >
                    <span className="text-sm font-medium text-center">{option}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg md:text-xl font-semibold text-foreground">
              Final details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Your first name*
                </label>
                <Input
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className="h-11 md:h-12 bg-white border-gray-300"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Your surname*
                </label>
                <Input
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  className="h-11 md:h-12 bg-white border-gray-300"
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Your business email*
                </label>
                <Input
                  type="email"
                  value={businessEmail}
                  onChange={(event) => setBusinessEmail(event.target.value)}
                  className="h-11 md:h-12 bg-white border-gray-300"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Your business phone*
                </label>
                <Input
                  type="tel"
                  value={businessPhone}
                  onChange={(event) => setBusinessPhone(event.target.value)}
                  className="h-11 md:h-12 bg-white border-gray-300"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">
                  Your mobile phone (optional)
                </label>
                <Input
                  type="tel"
                  value={mobilePhone}
                  onChange={(event) => setMobilePhone(event.target.value)}
                  className="h-11 md:h-12 bg-white border-gray-300"
                />
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Languages you speak</p>
              <p className="text-xs text-muted-foreground">
                Homeowners can filter by language. Choose all that apply.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {LANGUAGE_OPTIONS.map((language) => {
                  const isSelected = languages.includes(language.value);

                  const handleClick = () => {
                    setLanguages((current) => {
                      if (current.includes(language.value)) {
                        return current.filter((item) => item !== language.value);
                      }

                      return [...current, language.value];
                    });
                  };

                  return (
                    <button
                      key={language.value}
                      type="button"
                      onClick={handleClick}
                      className={`px-3 py-1.5 rounded-full text-xs md:text-sm border ${isSelected ? "bg-primary text-primary-foreground border-primary" : "bg-white text-foreground border-gray-300 hover:border-primary/70"}`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-base md:text-lg" aria-hidden="true">
                          {language.flag}
                        </span>
                        <span>{language.label}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full md:w-auto px-10 py-3 md:py-3.5 bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white rounded-full text-sm md:text-base font-semibold"
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
