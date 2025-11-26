import { Euro, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function PriceGuideTable() {
  const rates = [
    {
      service: "Plumber",
      rate: "€80 - €100 / hr",
      action: "Get a Plumber",
      slug: "plumbers",
    },
    {
      service: "Electrician",
      rate: "€70 - €90 / hr",
      action: "Find Electrician",
      slug: "electricians",
    },
    {
      service: "AC Service",
      rate: "€120 - €150 (Full Service)",
      action: "Book Service",
      slug: "air-conditioning",
    },
    {
      service: "Painter",
      rate: "€18 - €25 / sqm",
      action: "Get Quote",
      slug: "painters",
    },
    {
      service: "Locksmith",
      rate: "€90 - €120 (Door Opening)",
      action: "Open Door",
      slug: "locksmiths",
    },
    {
      service: "Handyman",
      rate: "€45 - €55 / hr",
      action: "Find Handyman",
      slug: "handyman",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div className="bg-gradient-to-r from-[#0a1f44] to-[#1e3a8a] px-4 md:px-8 py-5 border-b border-slate-200 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
              <Euro className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <h3 className="font-bold text-base md:text-lg tracking-tight">2025 Market Rates</h3>
              <p className="text-xs text-blue-200 font-medium">Costa del Sol Average</p>
            </div>
          </div>
          <span className="hidden md:inline-flex px-3 py-1 rounded-full bg-white/10 text-xs font-medium border border-white/20">
            Updated Monthly
          </span>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-slate-50/80 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-4 md:px-8 py-4 md:py-5 font-semibold w-1/3 text-[10px] md:text-xs uppercase tracking-wider">Trade / Service</th>
                <th className="px-4 md:px-8 py-4 md:py-5 font-semibold w-1/3 text-[10px] md:text-xs uppercase tracking-wider">2025 Market Rate</th>
                <th className="px-4 md:px-8 py-4 md:py-5 font-semibold w-1/3 text-right text-[10px] md:text-xs uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rates.map((item) => (
                <tr key={item.service} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-4 md:px-8 py-4 md:py-5 font-semibold text-slate-700 flex items-center gap-2 md:gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors shrink-0"></div>
                    <span className="text-sm md:text-base">{item.service}</span>
                  </td>
                  <td className="px-4 md:px-8 py-4 md:py-5 font-bold text-[#0a1f44] tabular-nums text-sm md:text-base">{item.rate}</td>
                  <td className="px-4 md:px-8 py-4 md:py-5 text-right">
                    <Link
                      to={`/post-job?option=${encodeURIComponent(item.service)}`}
                      className="inline-flex items-center text-blue-600 font-semibold text-xs md:text-sm hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-200 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 md:px-4 md:py-2 rounded-lg whitespace-nowrap"
                    >
                      <span className="hidden md:inline">{item.action}</span>
                      <span className="md:hidden">Book</span>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1.5" />
                    </Link>
                  </td>
                </tr>
              ))}

              {/* Emergency Row */}
              <tr className="bg-red-50/50 hover:bg-red-50 transition-colors border-t border-red-100">
                <td className="px-4 md:px-8 py-4 md:py-5 font-bold text-red-900 flex items-center gap-2 md:gap-3">
                  <span className="relative flex h-3 w-3 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span className="text-sm md:text-base">Emergency Call-out (24/7)</span>
                </td>
                <td className="px-4 md:px-8 py-4 md:py-5 font-bold text-red-900 tabular-nums text-sm md:text-base">€150 - €180 (Fixed)</td>
                <td className="px-4 md:px-8 py-4 md:py-5 text-right">
                  <Link
                    to="/post-job?option=Emergency"
                    className="inline-flex items-center justify-center bg-[#E31E24] hover:bg-[#C41218] text-white font-bold py-2 px-3 md:py-2.5 md:px-5 rounded-lg text-xs md:text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap"
                  >
                    <span className="hidden md:inline">Find Help Now</span>
                    <span className="md:hidden">Help Now</span>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <p className="text-center text-xs text-slate-400 mt-3">
        Estimates for licensed, English-speaking professionals. Final prices set by provider.
      </p>
    </div>
  );
}
