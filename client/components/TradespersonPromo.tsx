import { CheckCircle2, ArrowRight, TrendingUp, ShieldCheck, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function TradespersonPromo() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Get more work",
      description: "Access thousands of local homeowners looking for your skills."
    },
    {
      icon: ShieldCheck,
      title: "Build trust",
      description: "Showcase your verified profile and reviews to win more jobs."
    },
    {
      icon: Headphones,
      title: "We're here to help",
      description: "Our dedicated team supports you in growing your business."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#0a1f44] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium">Join for free today</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Are you a tradesperson? <br />
              <span className="text-blue-300">Grow your business with us.</span>
            </h2>
            
            <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-xl">
              Join CostaTrade for free and connect with homeowners who need your expertise. 
              We're here to help you succeed with verified leads and tools to manage your reputation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/join-as-tradesperson">
                <Button size="lg" className="w-full sm:w-auto bg-white text-[#0a1f44] hover:bg-blue-50 font-semibold text-base px-8 h-14 rounded-full">
                  Add your business for free
                </Button>
              </Link>
              <Link to="/how-it-works-trades">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 font-semibold text-base px-8 h-14 rounded-full">
                  How it works
                </Button>
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-blue-300" />
                    </div>
                    <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-blue-100/60">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative lg:h-[600px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional tradesperson" 
              className="relative rounded-3xl shadow-2xl w-full h-full object-cover transform -rotate-3 hover:rotate-0 transition-transform duration-500"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl max-w-xs animate-bounce-slow">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">
                      {String.fromCharCode(64+i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-900">500+ jobs posted</span>
              </div>
              <p className="text-xs text-gray-500">Homeowners are looking for tradespeople like you right now.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
