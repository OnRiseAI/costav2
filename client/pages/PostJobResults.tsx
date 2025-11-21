import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  ChevronRight,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  Shield,
  Search,
  Clock,
  Filter,
  User,
} from "lucide-react";
import { searchTradespeople } from "@/data/tradespeople";

export default function PostJobResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category") || "";
  const option = searchParams.get("option") || "";
  const postcode = searchParams.get("postcode") || "";
  const [jobDescription, setJobDescription] = useState("");
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedTradesperson, setSelectedTradesperson] = useState<any>(null);
  const [timing, setTiming] = useState("flexible");

  // Phone Modal State
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const [phoneModalData, setPhoneModalData] = useState<any>(null);

  const tradespeople = searchTradespeople(category, "");

  const handleRequestQuote = (tradesperson: any) => {
    setSelectedTradesperson(tradesperson);
    setShowQuoteForm(true);
  };

  const handleShowNumber = (tradesperson: any) => {
    setPhoneModalData(tradesperson);
    setPhoneModalOpen(true);
  };

  if (showQuoteForm && selectedTradesperson) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container-custom py-8">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setShowQuoteForm(false)}
              className="text-muted-foreground hover:text-foreground mb-6 flex items-center gap-2"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              Back
            </button>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0">
                  {selectedTradesperson.profilePhoto ? (
                    <img
                      src={selectedTradesperson.profilePhoto}
                      alt={selectedTradesperson.businessName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">
                      {selectedTradesperson.businessName.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold">
                    {selectedTradesperson.businessName}
                  </h2>
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-8 text-foreground">
                Request a quote
              </h1>

              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold mb-3">
                    Describe your job
                  </label>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Tell us a bit about your job! Remember, do not include personal details like your name, phone number, address, or email at this stage."
                    className="w-full border-2 border-gray-200 rounded-xl p-4 min-h-[150px] focus:border-[#0a1f44] focus:outline-none resize-none"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>Min characters: 50</span>
                    <span>{jobDescription.length}/500</span>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-3">
                    When would you like the job to start?
                  </label>
                  <div className="space-y-3">
                    {[
                      {
                        value: "flexible",
                        label: "I'm flexible on the start date",
                      },
                      {
                        value: "urgent",
                        label: "It's urgent (within 48 hours)",
                      },
                      { value: "2weeks", label: "Within 2 weeks" },
                      { value: "1month", label: "Within 1 month" },
                      {
                        value: "budgeting",
                        label: "I'm budgeting / researching",
                      },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-[#0a1f44] transition-colors"
                      >
                        <input
                          type="radio"
                          name="timing"
                          value={option.value}
                          checked={timing === option.value}
                          onChange={(e) => setTiming(e.target.value)}
                          className="w-5 h-5 text-[#0a1f44]"
                        />
                        <span className="text-lg">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full text-lg py-6 bg-[#0a1f44] hover:bg-[#0a1f44]/90"
                  disabled={jobDescription.length < 50}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Bar */}
      <div className="bg-[#0a1f44] py-6 shadow-md sticky top-0 z-40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  defaultValue={option || category}
                  className="w-full h-12 pl-12 pr-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Trade or service"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  defaultValue={postcode}
                  className="w-full h-12 pl-12 pr-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Postcode"
                />
              </div>
            </div>
            <Button className="w-full md:w-auto h-12 px-8 bg-white text-[#0a1f44] hover:bg-blue-50 font-bold rounded-lg">
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-[#0a1f44]" />
                <h3 className="font-bold text-gray-900">
                  When do you need it?
                </h3>
              </div>
              <div className="space-y-3">
                {[
                  { value: "flexible", label: "Flexible start date" },
                  { value: "urgent", label: "Urgent (< 48 hours)" },
                  { value: "2weeks", label: "Within 2 weeks" },
                  { value: "1month", label: "Within 1 month" },
                ].map((t) => (
                  <label
                    key={t.value}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${timing === t.value ? "border-[#0a1f44]" : "border-gray-300 group-hover:border-gray-400"}`}
                    >
                      {timing === t.value && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0a1f44]" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="sidebar-timing"
                      value={t.value}
                      checked={timing === t.value}
                      onChange={(e) => setTiming(e.target.value)}
                      className="hidden"
                    />
                    <span
                      className={`text-sm ${timing === t.value ? "font-medium text-[#0a1f44]" : "text-gray-600"}`}
                    >
                      {t.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-[#0a1f44]" />
                <h3 className="font-bold text-gray-900">Filter results</h3>
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                  <span className="text-sm text-gray-600">Verified Only</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                  <span className="text-sm text-gray-600">With Photos</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44]"
                  />
                  <span className="text-sm text-gray-600">With Reviews</span>
                </label>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-bold text-gray-900">
                {tradespeople.length} {category} found in {postcode}
              </h1>
              <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0a1f44]">
                <option>Recommended</option>
                <option>Highest Rated</option>
                <option>Most Reviews</option>
              </select>
            </div>

            {tradespeople.map((tradesperson) => (
              <div
                key={tradesperson.slug}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left: Avatar */}
                  <div className="w-full md:w-24 h-24 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0 relative">
                    {tradesperson.profilePhoto ? (
                      <img
                        src={tradesperson.profilePhoto}
                        alt={tradesperson.businessName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400 bg-gray-100">
                        {tradesperson.businessName.charAt(0)}
                      </div>
                    )}
                    {tradesperson.verified && (
                      <div className="absolute bottom-0 right-0 bg-green-500 text-white p-1 rounded-tl-lg">
                        <Shield className="h-3 w-3" />
                      </div>
                    )}
                  </div>

                  {/* Middle: Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h2 className="text-xl font-bold text-[#0a1f44] truncate pr-4">
                        {tradesperson.businessName}
                      </h2>
                      <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg border border-green-100">
                        <Star className="h-4 w-4 text-green-600 fill-current" />
                        <span className="font-bold text-green-700">
                          {tradesperson.rating.toFixed(2)}
                        </span>
                        <span className="text-xs text-green-600">
                          ({tradesperson.reviewCount})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>Operates in {postcode} and surrounding areas</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                        {tradesperson.tradeCategory}
                      </span>
                      {tradesperson.verified && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 gap-1">
                          <CheckCircle className="h-3 w-3" /> Verified
                        </span>
                      )}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        Fast response
                      </span>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex flex-col gap-3 w-full md:w-48 flex-shrink-0">
                    <Button
                      className="w-full bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white font-bold py-6 rounded-xl shadow-sm"
                      onClick={() => handleRequestQuote(tradesperson)}
                    >
                      Request a quote
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 hover:text-gray-900 font-semibold py-6 rounded-xl"
                      onClick={() => handleShowNumber(tradesperson)}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Show number
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone Number Modal */}
      <Dialog open={phoneModalOpen} onOpenChange={setPhoneModalOpen}>
        <DialogContent className="sm:max-w-md bg-white rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-[#0a1f44]">
              Contact Information
            </DialogTitle>
            <DialogDescription className="text-center">
              Get in touch with this professional directly
            </DialogDescription>
          </DialogHeader>

          {phoneModalData && (
            <div className="flex flex-col items-center space-y-6 py-4">
              <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
                {phoneModalData.profilePhoto ? (
                  <img
                    src={phoneModalData.profilePhoto}
                    alt={phoneModalData.businessName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold text-gray-400">
                    {phoneModalData.businessName.charAt(0)}
                  </span>
                )}
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900">{phoneModalData.businessName}</h3>
                <p className="text-sm text-gray-500">{phoneModalData.tradeCategory}</p>
              </div>

              <div className="w-full bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
                <p className="text-sm text-blue-600 mb-2 font-medium">Phone Number</p>
                <a
                  href={`tel:${phoneModalData.phone || "+34 952 123 456"}`}
                  className="text-2xl font-bold text-[#0a1f44] hover:underline flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  {phoneModalData.phone || "+34 952 123 456"}
                </a>
              </div>

              <div className="text-center text-sm text-gray-500 max-w-xs">
                <p>Please mention <strong>CostaTrade</strong> when you call to ensure the best service.</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
