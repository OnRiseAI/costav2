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
        <div className="bg-gradient-to-r from-[#0a1f44] to-[#1e3a8a] px-8 py-5 border-b border-slate-200 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
              <Euro className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <h3 className="font-bold text-lg tracking-tight">2025 Market Rates</h3>
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
                <th className="px-8 py-5 font-semibold w-1/3 text-xs uppercase tracking-wider">Trade / Service</th>
                <th className="px-8 py-5 font-semibold w-1/3 text-xs uppercase tracking-wider">2025 Market Rate</th>
                <th className="px-8 py-5 font-semibold w-1/3 text-right text-xs uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rates.map((item) => (
                <tr key={item.service} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-8 py-5 font-semibold text-slate-700 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></div>
                    {item.service}
                  </td>
                  <td className="px-8 py-5 font-bold text-[#0a1f44] tabular-nums">{item.rate}</td>
                  <td className="px-8 py-5 text-right">
                    <Link
                      to={`/post-job?option=${encodeURIComponent(item.service)}`}
                      className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-200 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg"
                    >
                      {item.action} <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </td>
                </tr>
              ))}

              {/* Emergency Row */}
              <tr className="bg-red-50/50 hover:bg-red-50 transition-colors border-t border-red-100">
                <td className="px-8 py-5 font-bold text-red-900 flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  Emergency Call-out (24/7)
                </td>
                <td className="px-8 py-5 font-bold text-red-900 tabular-nums">€150 - €180 (Fixed)</td>
                <td className="px-8 py-5 text-right">
                  <Link
                    to="/post-job?option=Emergency"
                    className="inline-flex items-center justify-center bg-[#E31E24] hover:bg-[#C41218] text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    Find Help Now
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
