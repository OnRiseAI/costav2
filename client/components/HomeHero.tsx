import { MessageSquare, ShieldCheck, Globe } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";
import { Link } from "react-router-dom";

export function HomeHero() {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4186560/pexels-photo-4186560.jpeg"
          alt="Modern white Spanish villa"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay - Deep Navy Blue 90% */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f44]/95 via-[#0a1f44]/85 to-[#0a1f44]/95 z-10"></div>

      <div className="container-custom relative z-20 text-center max-w-4xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide uppercase text-blue-50">
            #1 Trusted Marketplace
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight text-white drop-shadow-sm">
          Find Trusted Specialists on the Costa del Sol
        </h1>
        <p className="text-xl md:text-2xl text-blue-100/90 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          Connect with verified Home Improvement & Maintenance Professionals who speak your language.
        </p>

        <div className="max-w-3xl mx-auto mb-6">
          <SearchBar variant="hero" />
        </div>

        {/* Concierge Link */}
        <div className="mb-12">
          <Link
            to="/post-job"
            className="text-blue-200 hover:text-white transition-colors text-lg font-medium flex items-center justify-center gap-2 group"
          >
            Or describe your project and let us match you{" "}
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* Trust Icons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-blue-100/80 mt-8">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <MessageSquare className="w-5 h-5 text-blue-300" />
            <span className="font-medium text-sm md:text-base">
              Real customer reviews
            </span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <ShieldCheck className="w-5 h-5 text-blue-300" />
            <span className="font-medium text-sm md:text-base">
              Transparent profiles
            </span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <Globe className="w-5 h-5 text-blue-300" />
            <span className="font-medium text-sm md:text-base">
              Multilingual support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
