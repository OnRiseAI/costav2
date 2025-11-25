import { MapPin } from "lucide-react";

export function AreasWeServe() {
  const areas = [
    "Marbella",
    "Estepona",
    "Mijas Costa",
    "Fuengirola",
    "Benalmádena",
    "Torremolinos",
    "Sotogrande",
    "Malaga City",
  ];

  return (
    <section className="bg-white py-16 border-t border-slate-100">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] mb-2">
            Find Tradespeople near you
          </h2>
          <p className="text-slate-500">
            Serving the entire Costa del Sol region
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors cursor-default group"
            >
              <MapPin className="w-4 h-4 text-slate-400 mr-2 group-hover:text-[#0a1f44] transition-colors" />
              <span className="font-medium text-slate-700 group-hover:text-[#0a1f44] transition-colors">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
