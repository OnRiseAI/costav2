import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
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

          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
