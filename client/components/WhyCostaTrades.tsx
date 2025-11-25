import { Users, Wallet, MapPin, Quote } from "lucide-react";

export function WhyCostaTrades() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Profiles",
      sub: "Verified & Claimable",
    },
    {
      icon: Wallet,
      value: "100%",
      label: "Free",
      sub: "For Homeowners",
    },
    {
      icon: MapPin,
      value: "15",
      label: "Towns",
      sub: "Coastal Coverage",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a1f44] mb-4">
            Why CostaTrades?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            The most trusted way to find professionals on the Costa del Sol.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-[#F9F7F2] rounded-2xl p-6 text-center border border-[#E07A5F]/10 hover:border-[#E07A5F]/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-[#E07A5F]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="font-serif font-bold text-3xl text-[#0a1f44] mb-1">
                    {stat.value}
                  </div>
                  <div className="font-bold text-[#E07A5F] uppercase tracking-wider text-sm mb-1">
                    {stat.label}
                  </div>
                  <div className="text-slate-500 text-xs font-medium">
                    {stat.sub}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Featured Testimonial */}
          <div className="bg-[#0a1f44] rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-white/10" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-6 text-blue-50">
                "Found a brilliant electrician within 24 hours. Spoke perfect
                English and fixed the issue immediately."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E07A5F] rounded-full flex items-center justify-center font-bold text-white">
                  M
                </div>
                <div>
                  <div className="font-bold text-white">Marcus</div>
                  <div className="text-blue-200 text-sm">Mijas Costa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
