import { Search, Eye, MessageCircle, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search & Filter",
      description: "Filter by trade and location to find the perfect specialist.",
    },
    {
      icon: Eye,
      title: "Compare Profiles",
      description: "View photos, reviews, and verify they speak your language.",
    },
    {
      icon: MessageCircle,
      title: "Direct Chat",
      description: "Chat directly to get quotes. Ask for WhatsApp updates.",
    },
    {
      icon: CheckCircle,
      title: "Hire & Rate",
      description: "Get the job done. No middleman fees. Rate your pro.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a1f44]">
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FEFCE8] flex items-center justify-center mb-6 flex-shrink-0">
                  <Icon className="w-8 h-8 text-[#0a1f44]" />
                </div>
                <h3 className="font-bold text-lg text-[#0a1f44] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
