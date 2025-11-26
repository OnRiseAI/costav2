import { Search, Eye, MessageCircle, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search & Filter",
      description:
        "Filter by trade and location to find the perfect specialist.",
    },
    {
      icon: Eye,
      title: "Compare Profiles",
      description:
        "View photos, reviews, and verify they speak your language.",
    },
    {
      icon: MessageCircle,
      title: "Direct Chat",
      description:
        "Chat directly to get quotes. Ask for WhatsApp updates.",
    },
    {
      icon: CheckCircle,
      title: "Hire & Rate",
      description:
        "Get the job done. No middleman fees. Rate your pro.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44]">
            How it works
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            A simple 4-step flow that takes you from search to finished job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const stepNumber = index + 1;

            return (
              <div
                key={step.title}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 p-8 flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0a1f44]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-semibold tracking-wide uppercase text-blue-600">
                    Step {stepNumber}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-[#0a1f44] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-blue-100 via-slate-100 to-transparent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
