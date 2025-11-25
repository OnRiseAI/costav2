import { Wrench, Hammer, Paintbrush, Zap, HardHat, Ruler, Truck, Sparkles, Search } from "lucide-react";
import { SearchBar } from "@/components/SearchBar";

export function HomeHero() {
  return (
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
          Verified English-Speaking Tradespeople Costa del Sol
        </h1>
        <p className="text-xl md:text-2xl text-blue-100/90 mb-12 font-light max-w-2xl mx-auto">
          Get quotes from trusted local professionals in minutes.
        </p>

        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
          <div className="relative bg-white rounded-full shadow-2xl p-2 transition-transform duration-300 hover:scale-[1.01]">
            <SearchBar variant="hero" />
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
  );
}
