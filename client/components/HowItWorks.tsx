import { Search, MessageSquare, Star } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search or Post",
      description: "Tell us what you need or browse our directory.",
    },
    {
      icon: MessageSquare,
      title: "Get Free Quotes",
      description: "Chat directly with pros. No middleman fees.",
    },
    {
      icon: Star,
      title: "Hire with Confidence",
      description: "Read community reviews and pick your favorite.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">
            How It Works
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Finding a trusted tradesperson has never been easier.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mb-6 border-4 border-slate-50 z-10">
                  <div className="w-16 h-16 bg-[#0a1f44] rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 max-w-xs mx-auto">
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
