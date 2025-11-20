import { useState } from "react";
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

export default function PostJob() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubTask, setSelectedSubTask] = useState<string>("");
  const [postcode, setPostcode] = useState<string>("");

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
      <div className="bg-[#0a1f44] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
        </div>

        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Find the right tradesperson for your job
          </h1>
          <p className="text-xl text-blue-100 mb-10 font-light">
            Get quotes from trusted local professionals in minutes.
          </p>

          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="What trade are you looking for? (e.g. Plumber)"
              className="w-full h-14 pl-12 pr-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-[#0a1f44] text-white px-6 rounded-full font-medium hover:bg-blue-900 transition-colors">
              Search
            </button>
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
