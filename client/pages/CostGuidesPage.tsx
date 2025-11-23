import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  AlertTriangle,
  Info,
  Hammer,
  Zap,
  Droplets,
  Paintbrush,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function CostGuidesPage() {
  const priceData = [
    { service: "Plumber (Call-out)", low: "€80", high: "€180", avg: "€140" },
    {
      service: "Electrician (Rewire 2-Bed)",
      low: "€3,000",
      high: "���5,000",
      avg: "€4,200",
    },
    {
      service: "Pool Maintenance (Monthly)",
      low: "€100",
      high: "€200",
      avg: "€130",
    },
    {
      service: "Painter (Exterior Villa)",
      low: "€2,500",
      high: "€6,000",
      avg: "€4,000",
    },
    {
      service: "Air Conditioning (Split Unit Install)",
      low: "€250",
      high: "€600",
      avg: "€400",
    },
    { service: "Tiler (Per m²)", low: "€25", high: "€45", avg: "€35" },
    {
      service: "Carpenter (Daily Rate)",
      low: "€150",
      high: "€250",
      avg: "€200",
    },
    { service: "Gardener (Hourly)", low: "€20", high: "€35", avg: "€25" },
    {
      service: "Locksmith (Emergency)",
      low: "€100",
      high: "€250",
      avg: "€160",
    },
    {
      service: "Solar Panel System (3kW)",
      low: "€4,000",
      high: "€6,000",
      avg: "€5,000",
    },
    {
      service: "Bathroom Renovation (Full)",
      low: "€4,000",
      high: "€8,000",
      avg: "€6,000",
    },
    {
      service: "Kitchen Installation (Labor only)",
      low: "€1,500",
      high: "€3,000",
      avg: "€2,200",
    },
    { service: "Handyman (Hourly)", low: "€30", high: "€50", avg: "€40" },
    {
      service: "Architect (Project Fee %)",
      low: "8%",
      high: "15%",
      avg: "12%",
    },
    { service: "Cleaner (Hourly)", low: "€12", high: "€18", avg: "€15" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <SEO
        title="2025 Trade Price Guide | Costa del Sol Costs"
        description="Explore average prices for plumbers, electricians, builders and more across Marbella, Estepona and Mijas. Plan your renovation budget with real Costa del Sol market data."
      />
      {/* 1. Hero & Summary */}
      <section className="relative py-20 md:py-28 px-4 text-center overflow-hidden bg-[#0a1f44] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f44] to-[#0d2550]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        </div>

        <div className="container-custom max-w-4xl relative z-10 mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium tracking-wide uppercase text-blue-100">
              Market Insights
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            2025 Costa del Sol{" "}
            <span className="text-blue-400">Trade Price Guide</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            The definitive guide to renovation and repair costs in Marbella,
            Estepona, and Mijas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/post-job">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-900/20 w-full sm:w-auto"
              >
                Get a Quote Now
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/5 border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm w-full sm:w-auto"
              onClick={() =>
                document
                  .getElementById("price-list")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Price List
            </Button>
          </div>
        </div>
      </section>

      {/* 2. The "Master Price List" */}
      <section id="price-list" className="py-20 -mt-10 relative z-20 px-4">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="p-8 md:p-10 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] mb-2">
                Master Price List
              </h2>
              <p className="text-slate-600">
                Average market rates for common trade services in Southern
                Spain.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-6 font-semibold text-slate-700 whitespace-nowrap">
                      Service
                    </th>
                    <th className="p-6 font-semibold text-slate-700 whitespace-nowrap">
                      Low Estimate
                    </th>
                    <th className="p-6 font-semibold text-slate-700 whitespace-nowrap">
                      High Estimate
                    </th>
                    <th className="p-6 font-semibold text-blue-700 bg-blue-50/50 whitespace-nowrap">
                      Average
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {priceData.map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="p-6 font-medium text-[#0a1f44] whitespace-nowrap">
                        {item.service}
                      </td>
                      <td className="p-6 text-slate-600 whitespace-nowrap">
                        {item.low}
                      </td>
                      <td className="p-6 text-slate-600 whitespace-nowrap">
                        {item.high}
                      </td>
                      <td className="p-6 font-bold text-blue-700 bg-blue-50/30 whitespace-nowrap">
                        {item.avg}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50 text-sm text-slate-500 text-center border-t border-slate-200">
              * Prices are estimates based on 2024-2025 market data and may vary
              by location and specific requirements.
            </div>
          </div>
        </div>
      </section>

      {/* 3. Deep Dive: Plumbing Costs */}
      <section className="py-16 px-4">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <Droplets className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-[#0a1f44]">
              Detailed Plumbing Costs in 2025
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-slate-600 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#0a1f44] mb-4">
                The Call-Out Fee Explained
              </h3>
              <p>
                The standard call-out fee of <strong>€150</strong> might seem
                high, but it covers the tradesperson's travel time, vehicle
                costs, insurance, and the first hour of diagnosis or labor. In
                premium areas like Marbella or Sotogrande, this fee ensures you
                get a qualified professional to your door quickly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-4">
                  Common Job Prices
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Tap Replacement</span>
                    <span className="font-semibold">€80 - €120 + parts</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Boiler Service</span>
                    <span className="font-semibold">€100 - €150</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Leak Detection</span>
                    <span className="font-semibold">€250 - €400</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-4">
                  Regional Variations
                </h3>
                <p>
                  Expect to pay approximately <strong>20% more</strong> in
                  Marbella and Puerto Banús compared to Fuengirola or
                  Benalmádena due to higher demand and operating costs in these
                  zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Deep Dive: Renovation & Construction */}
      <section className="py-16 px-4 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
              <Hammer className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-[#0a1f44]">
              Villa & Apartment Renovation Costs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-4">
                Cost Per Square Meter
              </h3>
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-1">
                    Basic Renovation
                  </div>
                  <div className="text-3xl font-bold text-[#0a1f44] mb-2">
                    €500
                    <span className="text-lg text-slate-400 font-normal">
                      /m²
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Standard materials, cosmetic updates, painting, and minor
                    repairs.
                  </p>
                </div>
                <div className="p-6 bg-[#0a1f44] rounded-xl border border-slate-100 text-white">
                  <div className="text-sm text-blue-200 uppercase tracking-wider font-semibold mb-1">
                    Luxury Renovation
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    €1,500+
                    <span className="text-lg text-blue-300 font-normal">
                      /m²
                    </span>
                  </div>
                  <p className="text-sm text-blue-100">
                    High-end finishes, structural changes, smart home
                    integration, and premium materials.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-4">
                The 'Hidden' Costs
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block text-[#0a1f44]">
                      Licencia de Obra (Permits)
                    </span>
                    <span className="text-slate-600">
                      Typically 4-6% of the total project budget, paid to the
                      local Town Hall.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block text-[#0a1f44]">
                      Architect Fees
                    </span>
                    <span className="text-slate-600">
                      Expect to pay 10-15% of the construction cost for project
                      management and design.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <TrendingUp className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold block text-[#0a1f44]">
                      Rubbish Removal (Cubas)
                    </span>
                    <span className="text-slate-600">
                      €150 - €250 per skip. Essential for any demolition work.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Deep Dive: Electrical & AC */}
      <section className="py-16 px-4">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-[#0a1f44]">
              Electrical & Climate Control
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#0a1f44] mb-4">
                Rewiring Older Properties
              </h3>
              <p className="text-slate-600 mb-4">
                Many older Spanish properties have outdated electrical systems
                that don't meet current EU safety standards. Upgrading a
                2-bedroom apartment typically costs between{" "}
                <strong>€3,000 and €5,000</strong>.
              </p>
              <p className="text-slate-600">
                This includes a new consumer unit (fuse box), cabling, and
                certification (Boletín Eléctrico).
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#0a1f44] mb-4">
                AC Installation
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-700">Split Unit Install</span>
                  <span className="font-bold text-[#0a1f44]">€250 - €600</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span className="text-slate-700">
                    Ducted System (Pre-install)
                  </span>
                  <span className="font-bold text-[#0a1f44]">€3,000+</span>
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  *Prices for installation only. Unit cost varies by brand and
                  power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Factors That Affect Your Quote */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a1f44] mb-10 text-center">
            Factors That Affect Your Quote
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">Urgency</h3>
              <p className="text-slate-600">
                Emergency call-outs on weekends or nights can double the
                standard labor rate.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                <Paintbrush className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">Materials</h3>
              <p className="text-slate-600">
                Imported Italian tiles vs local Spanish ceramics can change the
                budget by thousands.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">Access</h3>
              <p className="text-slate-600">
                Is your property a 4th-floor apartment with no lift? Expect to
                pay more for labor and logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-16 px-4">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0a1f44] mb-8 text-center">
            Pricing FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg text-[#0a1f44] mb-2">
                Do Spanish specialists charge VAT (IVA)?
              </h3>
              <p className="text-slate-600">
                Yes, legally they must charge <strong>21% IVA</strong>. Be wary
                of "cash" quotes as they offer no legal protection or guarantee
                on the work performed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-lg text-[#0a1f44] mb-2">
                How much deposit should I pay?
              </h3>
              <p className="text-slate-600">
                Standard practice is <strong>30-50% upfront</strong> to cover
                materials, with the rest paid on completion. Never pay 100%
                upfront for any job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-20 px-4 bg-[#0a1f44] text-white text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't guess. Get 3 accurate quotes today.
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Post your job for free and receive competitive quotes from verified
            local professionals.
          </p>
          <Link to="/post-job">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-10 py-7 text-xl rounded-full font-bold shadow-xl hover:shadow-2xl hover:shadow-green-500/20 transition-all flex items-center gap-3 mx-auto"
            >
              Post Your Job <ArrowRight className="w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
