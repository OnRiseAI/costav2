import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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

const COSTA_DEL_SOL_MAP_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=-5.6,35.9,-3.8,37.0&layer=mapnik";

const AREAS = [
  "Marbella",
  "Málaga",
  "Fuengirola",
  "Mijas",
  "Estepona",
  "Benalmádena",
  "Torremolinos",
  "Nerja",
];

export default function TradespersonDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const tradeSlug = searchParams.get("trade") || "";

  const tradeLabel = useMemo(
    () => TRADE_LABELS[tradeSlug] || "Tradesperson",
    [tradeSlug],
  );

  const [businessName, setBusinessName] = useState("");
  const [postcode, setPostcode] = useState("");
  const [selectedArea, setSelectedArea] = useState<string>(AREAS[0]);
  const [businessType, setBusinessType] = useState<string>("self-employed");
  const [employeeRange, setEmployeeRange] = useState<string>("1");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!businessName || !postcode || !firstName || !lastName || !businessEmail || !businessPhone) {
      return;
    }

    navigate("/pro/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b border-gray-200 bg-white">
        <div className="container-custom py-4">
          <p className="text-xs text-muted-foreground mb-2">Change type of work</p>
          <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground">
            <div className="flex flex-col items-start">
              <span className="font-medium text-foreground">About your business</span>
              <div className="mt-1 h-1 rounded-full bg-primary w-24" />
            </div>
            <span className="h-px flex-1 bg-gray-200" />
            <span>Select lead plan</span>
            <span className="h-px flex-1 bg-gray-200" />
            <span>Your details</span>
            <span className="h-px flex-1 bg-gray-200" />
            <span>Review &amp; confirm</span>
          </div>
        </div>
      </div>

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
              What is your business called?
            </h2>
            <Input
              value={businessName}
              onChange={(event) => setBusinessName(event.target.value)}
              placeholder="Enter your business name*"
              className="h-11 md:h-12 bg-white border-gray-300"
              required
            />

            <div className="mt-6 space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-foreground">
                Where is your business based?
              </h2>
              <Input
                value={postcode}
                onChange={(event) => setPostcode(event.target.value)}
                placeholder="Business postcode*"
                className="h-11 md:h-12 bg-white border-gray-300"
                required
              />

              <Card className="mt-4 overflow-hidden rounded-2xl border-gray-200 bg-white">
                <div className="w-full h-64 md:h-72 bg-gray-100">
                  <iframe
                    title="Costa del Sol map"
                    src={COSTA_DEL_SOL_MAP_URL}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 border-t border-gray-200 space-y-2">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Select the main area you cover on the Costa del Sol.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {AREAS.map((area) => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => setSelectedArea(area)}
                        className={`px-3 py-1.5 rounded-full text-xs md:text-sm border ${selectedArea === area ? "bg-primary text-primary-foreground border-primary" : "bg-white text-foreground border-gray-300 hover:border-primary/70"}`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Selected area: <span className="font-medium">{selectedArea}</span>
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
              <div className="grid gap-3">
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
                    <span className="text-sm font-medium">Limited company</span>
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
