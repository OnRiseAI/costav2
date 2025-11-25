import { Euro } from "lucide-react";

export function PriceGuideTable() {
  const rates = [
    { service: "Plumber", rate: "€60/hr" },
    { service: "Painter", rate: "€12/sqm" },
    { service: "AC Service", rate: "€90" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden max-w-2xl mx-auto -mt-8 relative z-20">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-2">
        <Euro className="w-5 h-5 text-[#0a1f44]" />
        <h3 className="font-bold text-[#0a1f44]">2025 Market Rates (Costa del Sol)</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50/50 text-slate-500">
            <tr>
              <th className="px-6 py-3 font-medium">Service</th>
              <th className="px-6 py-3 font-medium text-right">Avg. Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rates.map((item) => (
              <tr key={item.service} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-700">{item.service}</td>
                <td className="px-6 py-4 text-right font-bold text-[#0a1f44]">{item.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
