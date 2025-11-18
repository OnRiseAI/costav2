import { CheckCircle } from 'lucide-react';

export function TrustBadges() {
  return (
    <section className="bg-gradient-to-b from-white via-trust/5 to-white py-20 md:py-28 border-y border-border/50 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/40 via-blue-50/40 to-green-50/40"></div>
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-trust/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at center, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Why You Can Trust Us</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your peace of mind is our priority
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Verified */}
            <div className="text-center group hover:scale-105 transition-transform duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-trust/20 to-trust/5 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:from-trust/30 transition-all duration-300">
                <CheckCircle className="w-12 h-12 text-trust" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-trust transition-colors">Verified</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Every tradesperson is verified with ID checks, insurance validation, and business registration
              </p>
            </div>

            {/* Reviewed */}
            <div className="text-center group hover:scale-105 transition-transform duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-trust/20 to-trust/5 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:from-trust/30 transition-all duration-300">
                <CheckCircle className="w-12 h-12 text-trust" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-trust transition-colors">Reviewed</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Over 2,400 verified reviews from real customers across Costa del Sol
              </p>
            </div>

            {/* Monitored */}
            <div className="text-center group hover:scale-105 transition-transform duration-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-trust/20 to-trust/5 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:from-trust/30 transition-all duration-300">
                <CheckCircle className="w-12 h-12 text-trust" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-trust transition-colors">Monitored</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                Continuous monitoring of all tradespeople to maintain quality standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
