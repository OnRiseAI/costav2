import { CheckCircle } from 'lucide-react';

export function TrustBadges() {
  return (
    <section className="bg-white py-16 md:py-20 border-y border-border relative overflow-hidden">
      {/* Subtle Background Enhancement */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/20 via-blue-50/20 to-green-50/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at center, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Verified */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-trust/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-trust" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Verified</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every tradesperson is verified with ID checks, insurance validation, and business registration
              </p>
            </div>

            {/* Reviewed */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-trust/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-trust" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Reviewed</h3>
              <p className="text-muted-foreground leading-relaxed">
                Over 2,400 verified reviews from real customers across Costa del Sol
              </p>
            </div>

            {/* Guarantee */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-trust/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-trust" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Monitored</h3>
              <p className="text-muted-foreground leading-relaxed">
                Continuous monitoring of all tradespeople to maintain quality standards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
