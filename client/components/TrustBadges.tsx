import { CheckCircle } from 'lucide-react';

export function TrustBadges() {
  return (
    <section className="bg-white py-16 md:py-20 border-y border-border">
      <div className="container-custom">
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
