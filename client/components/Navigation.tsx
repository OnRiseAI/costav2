import { Link } from 'react-router-dom';
import { Menu, X, Heart, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E31E24] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Center/Right: Action Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link to="/join-as-tradesperson" className="hidden sm:block">
              <Button className="bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base rounded-full">
                Trade sign up
              </Button>
            </Link>
            <Link to="/download-app" className="hidden md:block">
              <Button variant="outline" className="border-2 border-[#0a1f44] text-[#0a1f44] hover:bg-gray-50 px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base rounded-full">
                Download app
              </Button>
            </Link>
            <Link to="/saved-trades" className="hidden sm:block">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="h-6 w-6 md:h-7 md:w-7 text-[#E31E24]" fill="#E31E24" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" size="icon" className="rounded-full bg-[#0a1f44]">
                <User className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </Button>
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
