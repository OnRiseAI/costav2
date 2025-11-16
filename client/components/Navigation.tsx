import { Link } from 'react-router-dom';
import { Menu, X, Heart, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 hover:text-gray-600 p-1"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link to="/" className="flex items-center">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-[#E31E24] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Center/Right: Action Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/join-as-tradesperson" className="hidden sm:block">
              <Button className="bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white px-6 md:px-8 h-10 md:h-11 text-sm md:text-base font-medium rounded-full whitespace-nowrap">
                Trade sign up
              </Button>
            </Link>
            <Link to="/download-app" className="hidden lg:block">
              <Button variant="outline" className="border-2 border-[#0a1f44] text-[#0a1f44] hover:bg-gray-50 px-6 md:px-8 h-10 md:h-11 text-sm md:text-base font-medium rounded-full whitespace-nowrap">
                Download app
              </Button>
            </Link>
            <Link to="/saved-trades" className="hidden sm:flex items-center justify-center">
              <div className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                <Heart className="h-7 w-7 text-[#E31E24]" fill="#E31E24" />
              </div>
            </Link>
            <Link to="/login" className="flex items-center justify-center">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-[#0a1f44] rounded-full flex items-center justify-center hover:bg-[#0a1f44]/90 transition-colors">
                <User className="h-6 w-6 text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-slide-in bg-white">
            <div className="flex flex-col space-y-6">
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
