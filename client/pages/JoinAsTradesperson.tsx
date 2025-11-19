import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ChevronDown, ArrowRight, Quote } from "lucide-react";

const HERO_TRADES = [
  { slug: "electrician", label: "Electrician" },
  { slug: "plumber", label: "Plumber" },
  { slug: "builder", label: "Builder" },
  { slug: "roofer", label: "Roofer" },
  { slug: "painter", label: "Painter" },
  { slug: "gardener", label: "Gardener" },
  { slug: "cleaner", label: "Cleaner" },
  { slug: "mechanic", label: "Mechanic" },
];

const TRUST_BADGES = [
  "Free qualified leads",
  "Fast sign up",
  "Verified directory listing",
];

const HOW_IT_WORKS_STEPS = [
  {
    title: "Create your free profile",
    description:
      "Tell us about your business, services and the areas you cover in Costa del Sol.",
  },
  {
    title: "Get enquiries from local homeowners",
    description:
      "We show your profile to homeowners looking for your trade and location.",
  },
  {
    title: "Build a trusted reputation",
    description:
      "Collect reviews and build a track record that helps you win more of the right work.",
  },
];

const KEY_BENEFITS = [
  {
    title: "Improve your visibility",
    description:
      "Appear in local searches when homeowners are actively looking for your trade.",
  },
  {
    title: "Save time on admin",
    description:
      "Spend less time chasing work and more time on paid jobs.",
  },
  {
    title: "Get featured in local searches",
    description:
      "Stand out with a rich profile, photos of your work and verified reviews.",
  },
  {
    title: "Build your reputation",
    description:
      "Showcase your experience, qualifications and feedback from real customers.",
  },
];

const TRADES_GRID = HERO_TRADES;

const GETTING_STARTED_STEPS = [
  "Choose your trade",
  "Create your profile",
  "Add your details",
  "Start receiving enquiries",
];

export default function JoinAsTradesperson() {
  const navigate = useNavigate();
  const [tradeDialogOpen, setTradeDialogOpen] = useState(false);
  const [selectedTradeSlug, setSelectedTradeSlug] = useState<string>("");

  const selectedTradeLabel =
    HERO_TRADES.find((trade) => trade.slug === selectedTradeSlug)?.label || "";

  const goToDetails = (tradeSlug: string) => {
    navigate(`/tradesperson/details?trade=${encodeURIComponent(tradeSlug)}`);
  };

  const handleGoClick = () => {
    if (!selectedTradeSlug) return;
    goToDetails(selectedTradeSlug);
  };

  const handleTradeSelect = (tradeSlug: string) => {
    setSelectedTradeSlug(tradeSlug);
    setTradeDialogOpen(false);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-120px] right-[-80px] w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-[-160px] left-[-40px] w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-4 leading-tight">
                Get free qualified leads when you join CostaTrade
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl">
                Join for free and receive genuine enquiries from local homeowners.
              </p>

              <Dialog open={tradeDialogOpen} onOpenChange={setTradeDialogOpen}>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-5 max-w-xl">
                  <div className="flex flex-col md:flex-row md:items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setTradeDialogOpen(true)}
                      className="flex-1 flex items-center justify-between rounded-xl border-2 border-gray-200 px-4 py-3 md:py-4 text-left hover:border-primary transition-colors bg-white"
                    >
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Your trade
                        </p>
                        <p className="text-base md:text-lg text-foreground mt-1">
                          {selectedTradeLabel || "Select your main trade"}
                        </p>
                      </div>
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    </button>

                    <Button
                      type="button"
                      size="lg"
                      className="w-full md:w-auto bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white rounded-xl px-6 md:px-7 py-3 md:py-4 text-base font-semibold"
                      disabled={!selectedTradeSlug}
                      onClick={handleGoClick}
                    >
                      Go
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="mt-3 text-xs md:text-sm text-muted-foreground">
                    Free to join. No risk. Real qualified leads.
                  </p>
                </div>

                <DialogContent className="max-w-2xl w-full max-h-[85vh] overflow-y-auto sm:rounded-2xl">
                  <DialogHeader>
                    <DialogTitle>Select your trade</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                    {HERO_TRADES.map((trade) => (
                      <button
                        key={trade.slug}
                        type="button"
                        onClick={() => handleTradeSelect(trade.slug)}
                        className="border border-gray-200 rounded-xl px-3 py-3 sm:py-4 text-sm sm:text-base text-foreground bg-white hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-between gap-2"
                      >
                        <span>{trade.label}</span>
                        {selectedTradeSlug === trade.slug && (
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>

              <div className="mt-6 flex flex-wrap gap-3">
                {TRUST_BADGES.map((badge) => (
                  <div
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 px-3 py-1 text-xs md:text-sm text-[#0a1f44]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 via-orange-500 to-red-500 rounded-3xl blur-2xl opacity-40" />
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
                  <img
                    src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Tradesperson working on a home in Costa del Sol"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5">
                    <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-1">
                      CostaTrade for trades
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Join a growing directory of verified professionals trusted by homeowners across Costa del Sol.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom py-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50">
        <div className="container-custom py-12 md:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              How it works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join for free, create a strong profile and start receiving leads from homeowners who need your skills.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <Card
                key={step.title}
                className="h-full rounded-2xl border-gray-100 shadow-sm bg-white"
              >
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="bg-white border-y border-gray-100">
        <div className="container-custom py-12 md:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Why tradespeople choose CostaTrade
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for busy professionals who want a steady flow of the right kind of work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {KEY_BENEFITS.map((benefit) => (
              <Card
                key={benefit.title}
                className="h-full rounded-2xl border-gray-100 bg-gray-50/60"
              >
                <div className="p-5">
                  <h3 className="font-semibold text-base mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trades grid */}
      <section className="bg-gray-50">
        <div className="container-custom py-12 md:py-16">
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Trades we specialise in
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Select your trade to start your free profile.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {TRADES_GRID.map((trade) => (
              <button
                key={trade.slug}
                type="button"
                onClick={() => goToDetails(trade.slug)}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-primary hover:shadow-md transition-all px-4 py-5 text-left flex flex-col justify-between min-h-[120px]"
              >
                <span className="font-semibold text-sm md:text-base text-foreground mb-2">
                  {trade.label}
                </span>
                <span className="text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Create my free profile
                  <ArrowRight className="h-3 w-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-white">
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-gradient-to-br from-[#0a1f44] via-[#0a1f44] to-sky-700 text-white rounded-3xl p-8 md:p-10 overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#ffffff,_transparent_60%)]" />
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/80 shadow-lg">
                    <img
                      src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Smiling tradesperson who uses CostaTrade"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <Quote className="h-8 w-8 text-orange-300 mb-3" />
                  <p className="text-base md:text-lg font-medium mb-4 leading-relaxed">
                    "CostaTrade sends me regular enquiries from homeowners in my area. I spend less time looking for work and more time on the jobs that suit my business."
                  </p>
                  <p className="text-sm font-semibold">Miguel, electrician in Marbella</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting started steps */}
      <section className="bg-gray-50">
        <div className="container-custom py-12 md:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Getting started is simple
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow four straightforward steps and you will be ready to receive enquiries from homeowners.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {GETTING_STARTED_STEPS.map((step, index) => (
              <Card
                key={step}
                className="rounded-2xl border-gray-100 bg-white flex flex-col items-start justify-between h-full"
              >
                <div className="p-5 flex flex-col gap-2">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-1">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-sm md:text-base text-foreground">
                    {step}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white border-t border-gray-100">
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to start winning work?
            </h2>
            <p className="text-muted-foreground mb-6">
              Join CostaTrade today, create your free profile and start receiving genuine enquiries from local homeowners.
            </p>
            <Button
              type="button"
              size="lg"
              className="bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white rounded-full px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold"
              onClick={() => {
                if (selectedTradeSlug) {
                  goToDetails(selectedTradeSlug);
                } else {
                  setTradeDialogOpen(true);
                }
              }}
            >
              Create my free profile
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="mt-3 text-xs md:text-sm text-muted-foreground">
              Free to join. You only pay when you choose to quote on work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
