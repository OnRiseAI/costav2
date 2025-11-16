import { Link } from 'react-router-dom';
import { Menu, X, Heart, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#0066CC] hover:text-[#0052A3]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" strokeWidth={2} /> : <Menu className="h-6 w-6" strokeWidth={2} />}
            </button>
            <Link to="/" className="hidden md:flex items-center">
              <svg className="w-[48px] h-[48px]" viewBox="0 0 48 48" fill="none">
                <path d="M40 12L18 34L8 24" stroke="#E31E24" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M40 12L18 34" stroke="#0066CC" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Center/Right: Action Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/join-as-tradesperson">
              <Button className="bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white px-5 md:px-7 h-[44px] text-[14px] md:text-[15px] font-medium rounded-full whitespace-nowrap shadow-sm">
                Trade sign up
              </Button>
            </Link>
            <Link to="/download-app">
              <Button variant="outline" className="border-2 border-[#0a1f44] text-[#0a1f44] hover:bg-gray-50 bg-white px-5 md:px-7 h-[44px] text-[14px] md:text-[15px] font-medium rounded-full whitespace-nowrap">
                Download app
              </Button>
            </Link>
            <Link to="/saved-trades" className="hidden md:flex items-center justify-center">
              <div className="hover:opacity-80 transition-opacity">
                <Heart className="h-[32px] w-[32px] text-[#E31E24]" fill="#E31E24" strokeWidth={0} />
              </div>
            </Link>
            <Link to="/login" className="flex items-center justify-center">
              <div className="w-[48px] h-[48px] bg-[#0a1f44] rounded-full flex items-center justify-center hover:bg-[#0a1f44]/90 transition-colors shadow-sm">
                <User className="h-[22px] w-[22px] text-white" strokeWidth={2} />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-slide-in bg-white">
            <div className="flex flex-col space-y-6">
              {/* Home Link */}
              <div className="flex justify-center pb-4 border-b border-gray-200">
                <Link
                  to="/"
                  className="text-lg font-semibold text-[#0a1f44] hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </div>

              {/* Homeowner Section */}
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-2xl font-bold text-[#0a1f44]">Homeowner</h2>
                <Link to="/review-trade" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white px-12 py-6 text-lg rounded-full">
                    Review a Trade
                  </Button>
                </Link>
                <Link
                  to="/homeowner-advice"
                  className="text-muted-foreground hover:text-foreground transition-colors text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Homeowner Advice Centre
                </Link>
                <Link
                  to="/find-expert"
                  className="text-muted-foreground hover:text-foreground transition-colors text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Find Your Expert
                </Link>
                <Link
                  to="/saved-trades"
                  className="text-muted-foreground hover:text-foreground transition-colors text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Saved Trades
                </Link>
              </div>

              {/* Trades Section */}
              <div className="flex flex-col items-center space-y-4 pt-6">
                <h2 className="text-2xl font-bold text-[#0a1f44]">Trades</h2>
                <Link to="/join-as-tradesperson" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white px-12 py-6 text-lg rounded-full">
                    Join TradeFinder
                  </Button>
                </Link>
                <Link
                  to="/advice-centre"
                  className="text-muted-foreground hover:text-foreground transition-colors text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Advice Centre
                </Link>
                <Link
                  to="/login"
                  className="text-muted-foreground hover:text-foreground transition-colors text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login To Members Area
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
