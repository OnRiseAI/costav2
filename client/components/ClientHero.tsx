import { Search, MessageSquare, CheckCircle, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ClientHero() {
  const [searchValue, setSearchValue] = useState("");
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState("");

  const placeholders = [
    "I need a plumber",
    "I need to fit a kitchen",
    "I have a problem with my toilet",
    "I need a wall building",
    "My roof needs repairs",
    "I want to renovate my bathroom",
    "Air conditioning installation",
    "Pool maintenance needed",
    "I need an electrician",
    "Garden landscaping services",
    "Paint my exterior walls",
    "Tile work for my terrace",
    "Solar panels installation",
    "Boiler servicing required",
    "Pest control needed",
    "I need a handyman",
    "Patio decking installation",
    "Window replacement",
    "Swimming pool restoration",
    "General home maintenance",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayedPlaceholder(placeholders[currentPlaceholderIndex]);
  }, [currentPlaceholderIndex]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchValue)}`;
    }
  };

  const trustBadges = [
    {
      icon: MessageSquare,
      label: "Real customer reviews",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: CheckCircle,
      label: "Transparent profiles",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Globe,
      label: "Multilingual support",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Premium Mediterranean Gradient Background */}
      <div className="absolute inset-0 z-0">
        {/* Soft coastal gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/25 to-cyan-50/15"></div>

        {/* Floating premium orbs */}
        <div className="absolute top-32 right-1/3 w-80 h-80 bg-gradient-to-bl from-blue-100/25 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Content Container */}
        <div className="max-w-3xl mx-auto">
          {/* Premium Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-6 leading-tight tracking-tight animate-fade-in">
            Trusted local tradespeople for your Costa del Sol home
          </h2>

          {/* Elegant Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground text-center mb-12 leading-relaxed font-light max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Choose from professionals offering multilingual support and
            transparent customer reviews. Compare profiles, view past work and
            contact tradespeople directly.
          </p>

          {/* Premium Search Bar */}
          <form
            onSubmit={handleSearch}
            className="mb-10 animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative bg-white rounded-full shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-white/80 group">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative flex items-center px-4 md:px-8 py-3 md:py-6 gap-2 md:gap-4">
                <Search
                  className="h-5 w-5 text-muted-foreground flex-shrink-0"
                  strokeWidth={1.5}
                />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder={displayedPlaceholder}
                  className="flex-1 bg-transparent text-base md:text-lg text-foreground placeholder-muted-foreground focus:outline-none font-light transition-opacity duration-500 min-w-0"
                />
                <Button
                  type="submit"
                  className="ml-1 md:ml-2 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-4 md:px-8 py-2 md:py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 flex-shrink-0 shadow-sm hover:shadow-md whitespace-nowrap"
                >
                  Search
                </Button>
              </div>
            </div>
          </form>

          {/* Secondary CTA Link */}
          <div
            className="text-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/post-job"
              className="inline-block text-base text-primary hover:text-primary-600 font-medium transition-colors duration-300"
            >
              Or describe your project and let us match you →
            </Link>
          </div>

          {/* Trust Badges - Horizontal Scroll on Mobile, Grid on Desktop */}
          <div className="mb-12">
            <div className="overflow-x-auto scrollbar-hide -mx-4 sm:-mx-6 lg:-mx-0">
              <div className="flex md:grid md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-0 pb-2 md:pb-0 min-w-min md:min-w-auto">
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 md:flex-shrink text-center animate-slide-up"
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <div className="flex justify-center mb-3">
                        <div
                          className={`w-14 h-14 ${badge.bgColor} rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300`}
                        >
                          <Icon
                            className={`h-7 w-7 ${badge.color}`}
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                      <p className="text-sm md:text-base font-medium text-foreground whitespace-nowrap md:whitespace-normal">
                        {badge.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Location Microcopy */}
          <div
            className="text-center pt-8 border-t border-gray-200/50 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <p className="text-xs md:text-sm text-muted-foreground font-light tracking-wide">
              Serving homeowners across Málaga, Marbella, Mijas, Fuengirola and
              Estepona
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
