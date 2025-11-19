import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TradespersonSubmitted() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <div className="container-custom max-w-xl py-16">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8 md:p-10 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-12 w-12 text-emerald-500" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Application submitted
          </h1>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Thank you for applying to join CostaTrade. Our team will review your
            details and let you know as soon as your profile is live.
          </p>
          <Button
            type="button"
            className="bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white rounded-full px-8 py-3 text-sm md:text-base font-semibold"
            onClick={() => navigate("/")}
          >
            Back to homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
