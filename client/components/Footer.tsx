import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AppStoreBadges } from "@/components/AppStoreBadges";
import { Button } from "@/components/ui/button";

import { MegaFooter } from "@/components/MegaFooter";

export function Footer() {
  const { t } = useLanguage();

  const tradeCategories = [
    { name: t("category.poolMaintenance"), slug: "pool-maintenance" },
    { name: t("category.airConditioning"), slug: "air-conditioning" },
    { name: t("category.plumbers"), slug: "plumbers" },
    { name: t("category.electricians"), slug: "electricians" },
    { name: t("category.builders"), slug: "builders" },
    { name: t("category.painters"), slug: "painters" },
    { name: t("category.locksmiths"), slug: "locksmiths" },
    { name: t("category.gardeners"), slug: "gardeners" },
  ];

  return (
    <footer className="bg-white">
      {/* CTA Section - 3 Column Cards */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 border-b border-gray-200">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Stay Updated Card */}
            <div className="bg-gradient-to-br from-primary via-primary-600 to-primary-700 text-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl -mr-20 -mt-20"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Stay Updated
                </h3>
                <p className="text-primary-foreground/90 text-sm md:text-base mb-6 leading-relaxed">
                  Get expert tips, special offers, and local tradespeople
                  updates delivered to your inbox
                </p>
                <form className="flex gap-2 mb-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 rounded-lg text-primary placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <Button className="bg-accent hover:bg-accent/90 text-white px-6">
                    <Mail className="h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-primary-foreground/70">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>

            {/* Need a Tradesperson Card */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl -mr-20 -mt-20"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Need a Tradesperson?
                </h3>
                <p className="text-blue-100 text-sm md:text-base mb-6 leading-relaxed">
                  Find rated professionals and get quotes for your next project
                  in minutes
                </p>
                <Link to="/search">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white group/btn">
                    Find a professional
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Are You a Tradesperson Card */}
            <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl -mr-20 -mt-20"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Are You a Tradesperson?
                </h3>
                <p className="text-orange-50 text-sm md:text-base mb-6 leading-relaxed">
                  Join our community and get verified to connect with customers
                  looking for your services
                </p>
                <Link to="/join-as-tradesperson">
                  <Button className="w-full bg-white text-orange-600 hover:bg-orange-50 font-semibold group/btn">
                    Join as professional
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white py-16 md:py-20 border-b border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Logo & About */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CT</span>
                </div>
                <span className="font-bold text-lg text-foreground">
                  CostaTrade
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Costa del Sol's most trusted platform connecting homeowners with
                verified professionals
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Costa del Sol, Spain
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+34952123456"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +34 952 123 456
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:hi@costatrades.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    hi@costatrades.com
                  </a>
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t("footer.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/how-it-works"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t("footer.contact")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* For Tradespeople */}
            <div>
              <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                For Tradespeople
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/join-as-tradesperson"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Join Our Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pro/dashboard"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pro/leads"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Get Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pro/profile"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pro/help"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* For Owners */}
            <div>
              <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                For Owners
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/holiday-homes"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Holiday Home Owners
                  </Link>
                </li>
                <li>
                  <Link
                    to="/landlords"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Landlords & Managers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cost-guides"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Price Guides
                  </Link>
                </li>
                <li>
                  <Link
                    to="/post-job"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Post a Job
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Trades */}
            <div>
              <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                Popular Trades
              </h4>
              <ul className="space-y-3">
                {tradeCategories.slice(0, 5).map((category) => (
                  <li key={category.slug}>
                    <Link
                      to={`/trades/${category.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-foreground mb-5 text-sm uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/terms"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t("footer.terms")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t("footer.privacy")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {t("footer.help")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media & App Store */}
          <div className="border-t border-gray-200 pt-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Social Media */}
              <div>
                <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-wider">
                  Follow Us
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="h-6 w-6" fill="currentColor" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="h-6 w-6" fill="currentColor" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Youtube className="h-6 w-6" fill="currentColor" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="h-6 w-6" fill="currentColor" />
                  </a>
                </div>
              </div>

              {/* App Store Badges */}
              <div>
                <h4 className="font-bold text-foreground mb-6 text-sm uppercase tracking-wider">
                  Download Our App
                </h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <AppStoreBadges showTitle={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mega Footer for SEO */}
      <MegaFooter />

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-gray-300">
              © 2024 CostaTrade. {t("footer.allRights")}
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <a
                href="#"
                className="hover:text-white transition-colors text-xs"
              >
                Accessibility
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-xs"
              >
                Sitemap
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors text-xs"
              >
                Report a Bug
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
