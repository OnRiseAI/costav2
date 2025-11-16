import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const tradeCategories = [
    { name: t('category.poolMaintenance'), slug: 'pool-maintenance' },
    { name: t('category.airConditioning'), slug: 'air-conditioning' },
    { name: t('category.plumbers'), slug: 'plumbers' },
    { name: t('category.electricians'), slug: 'electricians' },
    { name: t('category.builders'), slug: 'builders' },
    { name: t('category.painters'), slug: 'painters' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-border">
      {/* CTA Section */}
      <div className="bg-primary text-white">
        <div className="container-custom py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-3">{t('cta.tradesperson.title')}</h3>
              <p className="text-primary-foreground/90 mb-4">{t('cta.tradesperson.desc')}</p>
              <Link to="/join-as-tradesperson">
                <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  {t('cta.tradesperson.button')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.howItWorks')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* For Tradespeople */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('nav.forTradespeople')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/join-as-tradesperson" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('cta.tradesperson.button')}
                </Link>
              </li>
              <li>
                <Link to="/pro/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/pro/leads" className="text-muted-foreground hover:text-primary transition-colors">
                  Leads
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Trades */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Popular Trades</h4>
            <ul className="space-y-3">
              {tradeCategories.slice(0, 4).map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/trades/${category.slug}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.help')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-wider">Find Us On Socials</h4>
          <div className="flex items-center space-x-4 mb-8">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 bg-[#0a1f44] rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <Twitter className="h-5 w-5" fill="currentColor" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 bg-[#0a1f44] rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <Facebook className="h-5 w-5" fill="currentColor" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 bg-[#0a1f44] rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 bg-[#0a1f44] rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <Youtube className="h-5 w-5" fill="currentColor" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 bg-[#0a1f44] rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" fill="currentColor" />
            </a>
          </div>
        </div>

        {/* App Download Section */}
        <div className="mt-8">
          <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-wider">Download The App</h4>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 156 47'%3E%3Cg fill='none'%3E%3Crect width='156' height='47' rx='8' fill='%23000'/%3E%3Ctext x='52' y='15' fill='%23fff' font-family='Arial' font-size='10' font-weight='400'%3EDownload on the%3C/text%3E%3Ctext x='52' y='32' fill='%23fff' font-family='Arial' font-size='16' font-weight='600'%3EApp Store%3C/text%3E%3Cpath d='M30.5 23.8c0-3.2 2.6-4.8 2.7-4.9-1.5-2.2-3.8-2.5-4.6-2.5-1.9-.2-3.8 1.2-4.8 1.2-1 0-2.6-1.2-4.2-1.1-2.2 0-4.2 1.3-5.3 3.2-2.3 4-0.6 9.8 1.6 13 1.1 1.6 2.4 3.3 4.1 3.2 1.6-0.1 2.2-1 4.2-1 2 0 2.5 1 4.2 0.9 1.7 0 2.9-1.5 4-3.1 1.3-1.8 1.8-3.6 1.8-3.7-0.1 0-3.4-1.3-3.5-5.2z' fill='%23fff'/%3E%3Cpath d='M27.5 14.3c0.9-1.1 1.5-2.6 1.3-4.1-1.3 0.1-2.8 0.9-3.7 1.9-0.8 0.9-1.5 2.4-1.3 3.8 1.4 0.1 2.8-0.7 3.7-1.6z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E"
                alt="Download on the App Store" 
                className="h-12 w-auto"
              />
            </a>
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 156 47'%3E%3Cg fill='none'%3E%3Crect width='156' height='47' rx='8' fill='%23000'/%3E%3Ctext x='52' y='15' fill='%23fff' font-family='Arial' font-size='10' font-weight='400'%3EGET IT ON%3C/text%3E%3Ctext x='52' y='32' fill='%23fff' font-family='Arial' font-size='16' font-weight='600'%3EGoogle Play%3C/text%3E%3Cpath d='M17.7 11.8l14.8 14.8-3.3 3.3-14.8-14.8c-0.5-0.5-0.5-1.3 0-1.8l1.5-1.5c0.5-0.5 1.3-0.5 1.8 0z' fill='%2300D7FF'/%3E%3Cpath d='M14.4 10.3l14.8 14.8-3.3 3.3-14.8-14.8c-0.5-0.5-0.5-1.3 0-1.8l1.5-1.5c0.5-0.5 1.3-0.5 1.8 0z' fill='%23FFD800'/%3E%3Cpath d='M14.4 35.7l14.8-14.8 3.3 3.3-14.8 14.8c-0.5 0.5-1.3 0.5-1.8 0l-1.5-1.5c-0.5-0.5-0.5-1.3 0-1.8z' fill='%23FF3A44'/%3E%3Cpath d='M32.5 20.9l3.3 3.3c0.5 0.5 0.5 1.3 0 1.8l-14.8 14.8-3.3-3.3 14.8-14.8c0.5-0.5 0.5-1.3 0-1.8z' fill='%2300E676'/%3E%3C/g%3E%3C/svg%3E"
                alt="Get it on Google Play" 
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">TF</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 TradeFinder Costa del Sol. {t('footer.allRights')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
