import { Search, Handshake, MessageSquare, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell us what you need",
      description:
        "Search by trade or describe your project in English or Spanish.",
      icon: Search,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      number: "02",
      title: "Get quotes from verified trades",
      description:
        "We connect you with a small number of local trades who match your job.",
      icon: Handshake,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      number: "03",
      title: "Compare, chat and choose",
      description:
        "Review profiles, ratings, photos and prices, then message directly.",
      icon: MessageSquare,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      number: "04",
      title: "Job done with peace of mind",
      description: "Work backed by written quotes and verified insurance.",
      icon: Shield,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-white"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-cyan-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] mb-6 tracking-tight">
            How CostaTrade Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            A simple, guided process for finding trusted and verified
            tradespeople across Costa del Sol.
          </p>
        </div>

        {/* Four Steps Grid */}
        <div className="grid md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Background with Premium Shadow */}
                <div className="absolute inset-0 bg-white rounded-3xl shadow-sm group-hover:shadow-xl transition-all duration-500 border border-gray-100"></div>

                {/* Watermark Step Number */}
                <div className="absolute -top-8 -right-4 text-9xl font-bold text-blue-50/80 pointer-events-none select-none">
                  {step.number}
                </div>

                {/* Card Content */}
                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  {/* Icon Container */}
                  <div
                    className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon
                      className={`w-8 h-8 ${step.color}`}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0a1f44] mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-muted-foreground font-light leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* Subtle Badge on Step 4 */}
                  {index === 3 && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <span className="inline-block text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full">
                        Protected by verification
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <div className="flex flex-col items-center justify-center gap-4">
          <Link to="/post-job" className="inline-block">
            <Button
              size="lg"
              className="bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white text-lg px-10 py-7 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Find a Verified Tradesperson
            </Button>
          </Link>
          <p className="text-center text-sm text-muted-foreground font-light max-w-2xl">
            Verified professionals with proven credentials and real customer
            reviews.
          </p>
        </div>
      </div>
    </section>
  );
}
