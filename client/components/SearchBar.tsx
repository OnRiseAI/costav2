import { Search, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { saveRecentSearch } from "@/components/RecentSearches";

interface SearchBarProps {
  variant?: "hero" | "compact";
}

export function SearchBar({ variant = "hero" }: SearchBarProps) {
  const [trade, setTrade] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Save to recent searches
    if (trade) {
      saveRecentSearch(trade, location);
    }

    const params = new URLSearchParams();
    if (trade) params.set("option", trade);
    if (location) params.set("postcode", location);
    navigate(`/post-job?${params.toString()}`);
  };

  const isHero = variant === "hero";

  if (isHero) {
    return (
      <form onSubmit={handleSearch} className="w-full flex flex-col md:flex-row items-center bg-white rounded-full p-1 md:p-2">
        {/* Left Input */}
        <div className="flex-1 flex items-center px-4 md:px-6 w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-200 py-2 md:py-0">
          <Search className="text-gray-400 w-5 h-5 mr-3 flex-shrink-0" />
          <input
            type="text"
            value={trade}
            onChange={(e) => setTrade(e.target.value)}
            placeholder="What do you need? (e.g. Plumber)"
            className="w-full py-2 md:py-3 focus:outline-none text-gray-700 placeholder:text-gray-400 bg-transparent text-base md:text-lg"
          />
        </div>

        {/* Right Input */}
        <div className="flex-1 flex items-center px-4 md:px-6 w-full md:w-auto py-2 md:py-0">
          <MapPin className="text-gray-400 w-5 h-5 mr-3 flex-shrink-0" />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Town or City (e.g. Marbella)"
            className="w-full py-2 md:py-3 focus:outline-none text-gray-700 placeholder:text-gray-400 bg-transparent text-base md:text-lg"
          />
        </div>

        {/* Button */}
        <Button
          type="submit"
          className="w-full md:w-auto bg-[#E31E24] hover:bg-[#C41218] text-white font-bold py-3 md:py-6 px-8 rounded-full h-auto text-base md:text-lg shadow-md transition-transform hover:scale-105 mt-2 md:mt-0"
        >
          Search
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1 relative group">
          <input
            type="text"
            value={trade}
            onChange={(e) => setTrade(e.target.value)}
            placeholder={t("hero.searchPlaceholder")}
            className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground group-hover:border-primary/50 transition-all duration-300"
          />
        </div>
        <div className="flex-1 group">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={t("hero.locationPlaceholder")}
            className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground placeholder:text-muted-foreground group-hover:border-primary/50 transition-all duration-300"
          />
        </div>
        <Button
          type="submit"
          className="bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 px-6"
        >
          <Search className="mr-2 h-4 w-4" />
          {t("hero.searchButton")}
        </Button>
      </div>
    </form>
  );
}
