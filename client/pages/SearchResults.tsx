import { useSearchParams, Link } from "react-router-dom";
import { MapPin, Star, SlidersHorizontal, ChevronDown, X, Home, Search } from "lucide-react";
import { TradespersonCard } from "@/components/TradespersonCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";
import { searchTradespeople } from "@/data/tradespeople";
import { SearchBar } from "@/components/SearchBar";
import { TrustSection } from "@/components/TrustSection";
import { RecentSearches } from "@/components/RecentSearches";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const trade = searchParams.get("trade") || "";
  const location = searchParams.get("location") || "";
  const { t } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<string>("All Ratings");
  const [sortBy, setSortBy] = useState<string>("recommended");

  const allTradespeople = searchTradespeople(trade, location);

  const filteredAndSortedTradespeople = useMemo(() => {
    let filtered = [...allTradespeople];

    if (
      selectedLocations.length > 0 &&
      !selectedLocations.includes("All Locations")
    ) {
      filtered = filtered.filter((tp) =>
        selectedLocations.includes(tp.location),
      );
    }

    if (selectedRating !== "All Ratings") {
      const minRating =
        selectedRating === "5 Stars"
          ? 5
          : selectedRating === "4+ Stars"
            ? 4
            : selectedRating === "3+ Stars"
              ? 3
              : 0;
      filtered = filtered.filter((tp) => tp.rating >= minRating);
    }

    switch (sortBy) {
      case "highest-rated":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "most-reviews":
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "newest":
        filtered.reverse();
        break;
      default:
        break;
    }

    return filtered;
  }, [allTradespeople, selectedLocations, selectedRating, sortBy]);

  const handleLocationChange = (location: string) => {
    if (location === "All Locations") {
      setSelectedLocations([]);
    } else {
      setSelectedLocations((prev) =>
        prev.includes(location)
          ? prev.filter((l) => l !== location)
          : [...prev, location],
      );
    }
  };

  const handleClearFilters = () => {
    setSelectedLocations([]);
    setSelectedRating("All Ratings");
  };

  const locations = [
    "All Locations",
    "Marbella",
    "Málaga",
    "Fuengirola",
    "Estepona",
    "Torremolinos",
    "Mijas",
    "Nerja",
    "Benalmádena",
  ];
  const ratings = ["All Ratings", "5 Stars", "4+ Stars", "3+ Stars"];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
        <div className="container-custom py-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-muted-foreground mb-6 animate-fade-in">
            <Link to="/" className="hover:text-[#0a1f44] transition-colors flex items-center gap-1">
              <Home className="w-3 h-3" />
              Home
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-[#0a1f44] font-medium">Search Results</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="flex-1 max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-2 tracking-tight">
                Find the perfect professional
              </h1>
              <p className="text-muted-foreground mb-6">
                Browse top-rated tradespeople in Costa del Sol
              </p>
              
              <div className="bg-gray-50 p-1.5 rounded-2xl border border-gray-200 shadow-inner max-w-2xl">
                <SearchBar variant="compact" />
              </div>
            </div>
            
            {/* Active Filters Summary (Desktop) */}
            {(trade || location) && (
              <div className="hidden lg:flex flex-col items-end gap-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Active Search</span>
                <div className="flex flex-wrap justify-end gap-2">
                  {trade && (
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100 px-3 py-1.5 text-sm font-medium">
                      {trade}
                    </Badge>
                  )}
                  {location && (
                    <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-100 px-3 py-1.5 text-sm font-medium">
                      <MapPin className="w-3 h-3 mr-1" />
                      {location}
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-6">
            <RecentSearches />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="sticky top-32 space-y-6">
              <Card className="border-gray-200 shadow-sm overflow-hidden">
                <CardHeader className="bg-gray-50/50 border-b border-gray-100 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-[#0a1f44] flex items-center gap-2">
                      <SlidersHorizontal className="h-4 w-4" />
                      Filters
                    </CardTitle>
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className="lg:hidden text-sm font-medium text-primary hover:underline"
                    >
                      {showFilters ? "Hide" : "Show"}
                    </button>
                    {(selectedLocations.length > 0 || selectedRating !== "All Ratings") && (
                      <button
                        onClick={handleClearFilters}
                        className="text-xs text-muted-foreground hover:text-destructive transition-colors hidden lg:block"
                      >
                        Reset all
                      </button>
                    )}
                  </div>
                </CardHeader>

                <CardContent className={`p-6 ${showFilters ? "block" : "hidden lg:block"}`}>
                  <div className="space-y-8">
                    {/* Location Filter */}
                    <div>
                      <h4 className="text-sm font-bold text-[#0a1f44] mb-4 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        Location
                      </h4>
                      <div className="space-y-3">
                        {locations.map((loc) => (
                          <label
                            key={loc}
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <div className="relative flex items-center">
                              <input
                                type="checkbox"
                                className="peer h-4 w-4 rounded border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44] transition-all"
                                checked={
                                  loc === "All Locations"
                                    ? selectedLocations.length === 0
                                    : selectedLocations.includes(loc)
                                }
                                onChange={() => handleLocationChange(loc)}
                              />
                            </div>
                            <span className="text-sm text-gray-600 group-hover:text-[#0a1f44] transition-colors">
                              {loc}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Rating Filter */}
                    <div>
                      <h4 className="text-sm font-bold text-[#0a1f44] mb-4 flex items-center gap-2">
                        <Star className="h-4 w-4 text-muted-foreground" />
                        Rating
                      </h4>
                      <div className="space-y-3">
                        {ratings.map((rating) => (
                          <label
                            key={rating}
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <div className="relative flex items-center">
                              <input
                                type="radio"
                                name="rating"
                                className="peer h-4 w-4 border-gray-300 text-[#0a1f44] focus:ring-[#0a1f44] transition-all"
                                checked={selectedRating === rating}
                                onChange={() => setSelectedRating(rating)}
                              />
                            </div>
                            <span className="text-sm text-gray-600 group-hover:text-[#0a1f44] transition-colors">
                              {rating}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100 lg:hidden">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={handleClearFilters}
                    >
                      Clear Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Trust Badge Sidebar */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 hidden lg:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white rounded-full shadow-sm">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-[#0a1f44]">Verified Pros</h4>
                </div>
                <p className="text-sm text-blue-800/80 leading-relaxed">
                  All tradespeople on CostaTrade are verified for your peace of mind. Look for the verified badge.
                </p>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1 min-w-0">
            {filteredAndSortedTradespeople.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center shadow-sm">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-3">No Results Found</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  We couldn't find any tradespeople matching your specific criteria. Try adjusting your filters or search for a different trade.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" onClick={handleClearFilters}>
                    Clear Filters
                  </Button>
                  <Link to="/">
                    <Button>Go to Homepage</Button>
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-muted-foreground text-sm">
                    Showing <span className="font-bold text-[#0a1f44]">{filteredAndSortedTradespeople.length}</span> professionals
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground whitespace-nowrap hidden sm:inline">Sort by:</span>
                    <div className="relative">
                      <select
                        className="appearance-none bg-gray-50 border border-gray-200 text-[#0a1f44] text-sm rounded-lg focus:ring-[#0a1f44] focus:border-[#0a1f44] block w-full p-2.5 pr-8 cursor-pointer font-medium hover:bg-gray-100 transition-colors"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        <option value="recommended">Recommended</option>
                        <option value="highest-rated">Highest Rated</option>
                        <option value="most-reviews">Most Reviews</option>
                        <option value="newest">Newest Joined</option>
                      </select>
                      <ChevronDown className="absolute right-2.5 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredAndSortedTradespeople.map((tradesperson) => (
                      <TradespersonCard
                        key={tradesperson.slug}
                        {...tradesperson}
                      />
                    ))}
                  </div>

                  <TrustSection />
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0a1f44] text-white py-20 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Post your job for free and receive competitive quotes from verified professionals in your area within minutes.
          </p>
          <Link to="/post-job">
            <Button size="lg" className="bg-white text-[#0a1f44] hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Post a Job Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
