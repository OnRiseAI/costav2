import { ClipboardList, MessageSquareText, Handshake } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Post a Job",
      description: "Describe what needs fixing. It takes 30 seconds.",
    },
    {
      icon: MessageSquareText,
      title: "Compare Quotes",
      description:
        "Receive messages from interested pros. Check their profiles and ratings.",
    },
    {
      icon: Handshake,
      title: "Hire & Relax",
      description:
        "Choose the best fit. Pay them directly. No hidden agency fees.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column: Visual */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <div className="absolute inset-0 bg-[#0a1f44]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="https://images.pexels.com/photos/12277406/pexels-photo-12277406.jpeg"
                alt="Renovated modern apartment Costa del Sol"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FBBF24] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Right Column: Logic */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-12 leading-tight">
              Hiring a pro has never been this simple.
            </h2>

            <div className="relative space-y-12">
              {/* Vertical connecting line */}
              <div className="absolute left-[22px] top-4 bottom-4 w-0.5 bg-slate-200 -z-10"></div>

              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center shadow-sm z-10">
                      <Icon className="w-5 h-5 text-[#0a1f44]" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl font-bold text-[#0a1f44] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
