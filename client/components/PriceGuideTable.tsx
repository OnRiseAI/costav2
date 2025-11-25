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
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="bg-[#0a1f44] px-6 py-4 border-b border-slate-200 flex items-center gap-2 text-white">
          <Euro className="w-5 h-5 text-yellow-400" />
          <h3 className="font-bold text-lg">2025 Market Rates (Costa del Sol)</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold w-1/3">Trade / Service</th>
                <th className="px-6 py-4 font-semibold w-1/3">2025 Market Rate</th>
                <th className="px-6 py-4 font-semibold w-1/3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rates.map((item) => (
                <tr key={item.service} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4 font-medium text-slate-700">{item.service}</td>
                  <td className="px-6 py-4 font-bold text-[#0a1f44]">{item.rate}</td>
                  <td className="px-6 py-4 text-right">
                    <Link 
                      to={`/post-job?option=${encodeURIComponent(item.service)}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-200"
                    >
                      {item.action} <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </td>
                </tr>
              ))}
              
              {/* Emergency Row */}
              <tr className="bg-red-50 hover:bg-red-100/80 transition-colors border-t border-red-100">
                <td className="px-6 py-4 font-bold text-red-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Emergency Call-out (24/7)
                </td>
                <td className="px-6 py-4 font-bold text-red-900">€150 - €180 (Fixed)</td>
                <td className="px-6 py-4 text-right">
                  <Link 
                    to="/post-job?option=Emergency"
                    className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors shadow-sm hover:shadow"
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
