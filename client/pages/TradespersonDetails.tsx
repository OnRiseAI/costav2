import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

export default function TradespersonDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const tradeSlug = searchParams.get("trade") || "";

  const tradeLabel = useMemo(
    () => TRADE_LABELS[tradeSlug] || "Tradesperson",
    [tradeSlug],
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8 md:py-12 max-w-3xl">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 text-sm"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back</span>
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Set up your CostaTrade profile
        </h1>
        <p className="text-muted-foreground mb-8 text-base md:text-lg">
          You have selected <span className="font-semibold">{tradeLabel}</span>.
          This page will guide you through adding your business details, service
          areas and proof of experience so we can show you to the right
          homeowners.
        </p>

        <Card className="rounded-2xl border-gray-100 bg-white shadow-sm">
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              What happens next
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Tell us about your business and the services you offer.</li>
              <li>Confirm the areas you cover and the languages you speak.</li>
              <li>
                Add key details such as years of experience, photos and
                qualifications.
              </li>
              <li>
                Submit your profile so we can review it and add you to the
                CostaTrade directory.
              </li>
            </ol>
          </div>
        </Card>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <p className="text-xs md:text-sm text-muted-foreground">
            When you are ready, we will add the full signup form to this step so
            tradespeople can complete their application online.
          </p>
          <Button
            type="button"
            className="w-full sm:w-auto bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white rounded-full px-6 py-3 text-sm md:text-base font-semibold"
            onClick={() => navigate("/join-as-tradesperson")}
          >
            Back to trade sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
