import { QrCode, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PromotionalCards() {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          {/* App Promotion Card */}
          <div className="bg-gradient-to-br from-primary via-primary-600 to-primary-700 text-white rounded-2xl p-8 md:p-12 flex items-center justify-between overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Simplify your home improvements with our app</h3>
              <p className="text-primary-foreground/90 mb-6">Search, message and book with real-time updates from tradespeople</p>
              
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-lg p-3 shadow-lg">
                  <QrCode className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/80">Scan to download</p>
                  <p className="text-xs text-primary-foreground/70">From Google Play & App Store</p>
                </div>
              </div>
            </div>

            {/* Phone mockup with app UI */}
            <div className="relative z-10 hidden md:flex flex-shrink-0 ml-8 group">
              <div className="relative">
                {/* Phone frame */}
                <div className="bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900 w-28 h-56 flex flex-col">
                  {/* Notch */}
                  <div className="h-6 bg-black flex items-center justify-center relative z-10">
                    <div className="h-5 w-32 bg-black rounded-b-2xl"></div>
                  </div>
                  {/* Screen */}
                  <div className="flex-1 bg-gradient-to-b from-primary via-primary-600 to-primary-700 flex flex-col items-center justify-start p-2 overflow-hidden">
                    {/* Status bar items */}
                    <div className="w-full flex justify-between items-center px-2 py-1 text-white text-[6px]">
                      <span>9:41</span>
                      <div className="flex gap-0.5">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    {/* App UI elements */}
                    <div className="w-full flex-1 flex flex-col items-center justify-center gap-1 text-white">
                      <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
                        <span className="text-[8px] font-bold">CT</span>
                      </div>
                      <div className="h-6 w-16 bg-white/10 rounded-md"></div>
                      <div className="h-1 w-12 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
                {/* Phone shadow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-3xl blur-xl -z-10 group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-75"></div>
              </div>
            </div>
          </div>

          {/* Products Promotion Card */}
          <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden group">
            {/* Background image overlay */}
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <img
                src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Home products"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Upgrade your home, your way</h3>
              <ul className="space-y-2 mb-6 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">•</span>
                  <span>From EV chargers to air con, find the right products to power your home</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">•</span>
                  <span>Solar panels, batteries, boilers and more — all in one place</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 font-bold">•</span>
                  <span>Selected from partners who know their stuff</span>
                </li>
              </ul>

              <a
                href="https://www.amazon.es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-white/95 text-orange-600 font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore home products
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
