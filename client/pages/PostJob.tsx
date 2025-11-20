import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  ChevronRight,
  MapPin,
  Search,
  ArrowRight,
  Wrench,
  Zap,
  Hammer,
  Paintbrush,
  Shovel,
  Droplets,
  Snowflake,
  Key,
  Sparkles,
  PenTool,
  HardHat,
  Ruler,
  Truck,
} from "lucide-react";
import { getTradeServices } from "@/data/tradeServices";

const categories = [
  {
    slug: "plumbers",
    name: "Plumber",
    icon: Wrench,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    slug: "electricians",
    name: "Electrician",
    icon: Zap,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    slug: "builders",
    name: "Builder",
    icon: Hammer,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    slug: "painters",
    name: "Painter",
    icon: Paintbrush,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    slug: "gardeners",
    name: "Gardener",
    icon: Shovel,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    slug: "pool-maintenance",
    name: "Pool Maintenance",
    icon: Droplets,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    slug: "air-conditioning",
    name: "Air Conditioning",
    icon: Snowflake,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    slug: "locksmiths",
    name: "Locksmith",
    icon: Key,
    color: "text-slate-600",
    bg: "bg-slate-50",
  },
  {
    slug: "cleaning",
    name: "Cleaning",
    icon: Sparkles,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    slug: "handyman",
    name: "Handyman",
    icon: PenTool,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
];

const PLACEHOLDERS = [
  "What trade are you looking for? (e.g. Plumber)",
  "Need a leak fixed? Try 'Plumber'",
  "Wiring issues? Search for 'Electrician'",
  "Time for a renovation? Find a 'Builder'",
  "Garden needs care? Look for a 'Gardener'",
];

export default function PostJob() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubTask, setSelectedSubTask] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
        setFade(true);
      }, 500); // Wait for fade out before changing text
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleCategorySelect = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    setStep(1);
    setIsModalOpen(true);
  };

  const handleSubTaskSelect = (subTaskLabel: string) => {
    setSelectedSubTask(subTaskLabel);
    setStep(2);
  };

  const handleSearch = () => {
    if (postcode) {
      setIsModalOpen(false);
      navigate(
        `/post-job/results?category=${selectedCategory}&option=${encodeURIComponent(selectedSubTask)}&postcode=${encodeURIComponent(postcode)}`,
      );
    }
  };

  const tradeData = getTradeServices(selectedCategory);
  const selectedCategoryName =
    categories.find((c) => c.slug === selectedCategory)?.name || "Trade";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#0a1f44] text-white py-20 md:py-32 relative overflow-hidden">
        {/* Animated Background Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 opacity-10 animate-float-slow">
            <Wrench className="w-24 h-24 text-blue-300" />
          </div>
          <div className="absolute top-20 right-20 opacity-10 animate-float-medium">
            <Hammer className="w-32 h-32 text-purple-300" />
          </div>
          <div className="absolute bottom-10 left-1/4 opacity-5 animate-float-fast">
            <Paintbrush className="w-20 h-20 text-green-300" />
          </div>
          <div className="absolute top-1/3 right-1/4 opacity-5 animate-pulse-slow">
            <Zap className="w-16 h-16 text-yellow-300" />
          </div>
          <div className="absolute bottom-20 right-10 opacity-10 animate-float-slow">
            <HardHat className="w-28 h-28 text-orange-300" />
          </div>
          <div className="absolute top-1/2 left-10 opacity-5 animate-float-medium">
            <Ruler className="w-20 h-20 text-cyan-300" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 opacity-5 animate-float-fast">
            <Truck className="w-24 h-24 text-red-300" />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f44]/50 to-[#0a1f44] pointer-events-none"></div>

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            Find the right{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
              tradesperson
            </span>{" "}
            for your job
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/90 mb-12 font-light max-w-2xl mx-auto">
            Get quotes from trusted local professionals in minutes.
          </p>

          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
            <div className="relative bg-white rounded-full shadow-2xl flex items-center p-2 transition-transform duration-300 hover:scale-[1.01]">
              <div className="pl-6 pr-4 text-gray-400 flex-shrink-0">
                <Search className="h-6 w-6" />
              </div>
              <input
                type="text"
                placeholder={PLACEHOLDERS[placeholderIndex]}
                className={`flex-1 min-w-0 h-14 text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none bg-transparent transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
              />
              <button className="bg-[#0a1f44] text-white px-8 h-14 rounded-full font-bold text-lg hover:bg-blue-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center flex-shrink-0">
                Search
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-blue-200/60">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Free to post
            </span>
            <span className="w-1 h-1 rounded-full bg-blue-200/30"></span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> No obligation
            </span>
            <span className="w-1 h-1 rounded-full bg-blue-200/30"></span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Verified trades
            </span>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container-custom py-16">
        <h2 className="text-2xl font-bold text-[#0a1f44] mb-8 text-center">
          Or browse by category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.slug}
                onClick={() => handleCategorySelect(category.slug)}
                className="group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-blue-100 flex flex-col items-center justify-center gap-4 min-h-[160px] text-center"
              >
                <div
                  className={`w-16 h-16 rounded-full ${category.bg} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <span className="font-bold text-gray-700 group-hover:text-[#0a1f44] text-lg">
                  {category.name}
                </span>
                <div className="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center gap-1 text-sm font-medium text-blue-600">
                    Select <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Wizard Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg p-0 overflow-hidden gap-0 bg-white rounded-2xl">
          <div className="bg-[#0a1f44] p-6 text-white">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-bold text-center">
                {step === 1
                  ? `What do you need help with?`
                  : "Where is the job located?"}
              </DialogTitle>
              <DialogDescription className="text-blue-200 text-center">
                {step === 1
                  ? `Select the type of ${selectedCategoryName.toLowerCase()} work you need`
                  : "We need this to find tradespeople in your area"}
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="p-6">
            {step === 1 && (
              <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                {tradeData?.services ? (
                  tradeData.services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleSubTaskSelect(service.label)}
                      className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-[#0a1f44] hover:bg-blue-50 transition-all duration-200 group flex items-center justify-between"
                    >
                      <div>
                        <div className="font-semibold text-gray-900">
                          {service.label}
                        </div>
                        {service.description && (
                          <div className="text-sm text-gray-500 mt-0.5">
                            {service.description}
                          </div>
                        )}
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-[#0a1f44]" />
                    </button>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>No specific services found for this category.</p>
                    <Button
                      onClick={() => handleSubTaskSelect("General Enquiry")}
                      className="mt-4 bg-[#0a1f44] text-white"
                    >
                      Continue with General Enquiry
                    </Button>
                  </div>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 py-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    placeholder="Enter postcode or town (e.g. 29600)"
                    className="h-14 pl-12 text-lg rounded-xl border-gray-300 focus:border-[#0a1f44] focus:ring-[#0a1f44]"
                    autoFocus
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>

                <Button
                  onClick={handleSearch}
                  className="w-full h-14 text-lg font-bold bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                  disabled={!postcode}
                >
                  See Results
                </Button>

                <button
                  onClick={() => setStep(1)}
                  className="w-full text-center text-sm text-gray-500 hover:text-[#0a1f44] font-medium"
                >
                  Back to services
                </button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
