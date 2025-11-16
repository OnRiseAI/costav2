import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languageNames: Record<Language, string> = {
    en: 'English',
    es: 'Español',
    de: 'Deutsch',
  };

  const languageFlags: Record<Language, string> = {
    en: '���🇧',
    es: '🇪🇸',
    de: '🇩🇪',
  };

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">TF</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg text-foreground">TradeFinder</div>
              <div className="text-xs text-muted-foreground">Costa del Sol</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/trades" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.findTrades')}
            </Link>
            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.howItWorks')}
            </Link>
            <Link to="/for-tradespeople" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.forTradespeople')}
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.blog')}
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden lg:inline">{languageFlags[language]} {languageNames[language]}</span>
                  <span className="lg:hidden">{languageFlags[language]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')} className="gap-2">
                  {languageFlags.en} English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')} className="gap-2">
                  {languageFlags.es} Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('de')} className="gap-2">
                  {languageFlags.de} Deutsch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/login">
              <Button variant="ghost">{t('nav.login')}</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-accent hover:bg-accent/90">{t('nav.signup')}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  {languageFlags[language]}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  {languageFlags.en} English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')}>
                  {languageFlags.es} Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('de')}>
                  {languageFlags.de} Deutsch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
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
