import { Button } from "@/components/ui/button";
import { HowItWorks as HowItWorksSection } from "@/components/HowItWorks";
import { WhyTrustCostaTrade } from "@/components/WhyTrustCostaTrade";
import { Link } from "react-router-dom";
import { Image } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/25 to-cyan-50/10" />
          <div className="absolute top-10 right-1/4 w-80 h-80 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-100/25 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div className="max-w-xl">
              <p className="text-sm font-semibold tracking-[0.2em] text-primary/80 uppercase mb-4">
                HOW IT WORKS
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                The Easiest Way to Find Trusted Tradespeople.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light leading-relaxed">
                From posting a job to getting it donehere is how CostaTrades makes home improvement stress-free.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="text-sm font-semibold">1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Post your job once and let interested local professionals come to you.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="text-sm font-semibold">2</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Compare quotes, ratings and past work so you can choose with confidence.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="text-sm font-semibold">3</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sit back while a verified tradesperson gets the job done.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center">
                <Link to="/post-job">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base md:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all">
                    Post a Job Now
                  </Button>
                </Link>
                <p className="text-xs md:text-sm text-muted-foreground max-w-xs">
                  No fees for homeowners. Get multiple quotes without any obligation to hire.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-3xl bg-blue-100/60" />
              <div className="absolute -bottom-10 -right-4 w-32 h-32 rounded-full bg-cyan-100/50" />

              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 flex items-center justify-center p-8">
                  <div className="bg-white/10 border border-white/30 rounded-3xl p-6 md:p-8 max-w-md text-white backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
                        <Image className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-medium tracking-wide uppercase text-white/80">
                        Relax, we19ve got this
                      </p>
                    </div>
                    <p className="text-lg md:text-xl font-semibold mb-3">
                      "I posted my job in minutes and had three quotes from local pros by the afternoon."
                    </p>
                    <p className="text-xs text-white/80">Sarah, homeowner in Marbella</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process (Core) */}
      <section className="relative py-12 md:py-16 border-t border-gray-100 bg-white">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              How it works in 3 simple steps
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-light">
              Show, don19t just tell. Here19s exactly what happens when you use CostaTrades.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-stretch">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500" />
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-bold text-primary">1</span>
                  <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary/70">
                    Post your job
                  </p>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Tell us what you need
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Describe your project in plain language, add optional photos
                  and set your preferred timeline. It19s free and takes less than 2 minutes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500" />
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-bold text-primary">2</span>
                  <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary/70">
                    Get quotes
                  </p>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Receive interest from locals
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Available tradespeople in your area review your job and send
                  you quotes or request a quick visit if they need more details.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500" />
              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-bold text-primary">3</span>
                  <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary/70">
                    Hire with confidence
                  </p>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Choose the best fit
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  Compare profiles, read real reviews and see past work. Hire
                  the professional who suits your budget and gives you peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Use CostaTrades? */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Why use CostaTrades?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Verified professionals
              </h3>
              <p className="text-sm text-muted-foreground">
                We check IDs and key details so you don19t have to, helping keep
                doorstep scams and time-wasters away.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Local expertise
              </h3>
              <p className="text-sm text-muted-foreground">
                Tradespeople who actually know Costa del Sol homes14from
                terraces and pools to old town apartments.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Zero cost to you
              </h3>
              <p className="text-sm text-muted-foreground">
                CostaTrades is completely free for homeowners. You only pay the
                professional you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="container-custom max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Straightforward answers so you know exactly what to expect.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">
                Is it really free?
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Yes. Using CostaTrades is 100% free for homeowners. There are no
                sign-up fees, hidden charges or mark-ups on quotes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">
                How many quotes will I get?
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                For most jobs you will receive between 3115 quotes from
                available tradespeople. Sometimes more, sometimes fewer,
                depending on the type of work and your location.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">
                What if I don19t like the quotes?
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                There is absolutely no obligation to hire. If the quotes or
                professionals don19t feel like the right fit, you can simply
                decline and post again later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-[#0a1f44] text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-base md:text-lg text-blue-100 mb-8 font-light">
            Post your first job in minutes and start receiving quotes from
            trusted local professionals.
          </p>
          <Link to="/post-job">
            <Button className="bg-[#E31E24] hover:bg-[#C41218] text-white px-10 py-6 text-base md:text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
              Post a Job Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
