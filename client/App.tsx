import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "@/pages/Index";
import TradeCategory from "@/pages/TradeCategory";
import SearchResults from "@/pages/SearchResults";
import PostJob from "@/pages/PostJob";
import PostJobResults from "@/pages/PostJobResults";
import RequestQuote from "@/pages/RequestQuote";
import RequestQuoteContact from "@/pages/RequestQuoteContact";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import JoinAsTradesperson from "@/pages/JoinAsTradesperson";
import TradespersonDetails from "@/pages/TradespersonDetails";
import TradespersonReview from "@/pages/TradespersonReview";
import TradespersonSubmitted from "@/pages/TradespersonSubmitted";
import { CustomerDashboard } from "@/pages/CustomerDashboard";
import { Tradespeople } from "@/pages/Tradespeople";
import TradesMenu from "@/pages/TradesMenu";
import AboutPage from "@/pages/AboutPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import VerificationPromisePage from "@/pages/VerificationPromisePage";
import ContactPage from "@/pages/ContactPage";
import SEOTradePage from "@/pages/SEOTradePage";
import PlaceholderPage from "@/pages/PlaceholderPage";
import NotFound from "@/pages/NotFound";
import "./global.css";

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Index />} />

            {/* SEO Trade Pages */}
            <Route path="/trades/:trade/:location" element={<SEOTradePage />} />
            <Route path="/seo-template" element={<SEOTradePage />} />

            {/* Trade Category Pages */}
            <Route
              path="/trades"
              element={
                <PlaceholderPage
                  title="All Trade Categories"
                  description="Browse all available trade categories in Costa del Sol"
                />
              }
            />
            <Route path="/trades/:category" element={<TradeCategory />} />

            {/* Tradesperson Profile */}
            <Route
              path="/tradesperson/:slug"
              element={
                <PlaceholderPage
                  title="Tradesperson Profile"
                  description="View detailed tradesperson profile, reviews, and gallery"
                />
              }
            />

            {/* Search */}
            <Route path="/search" element={<SearchResults />} />

            {/* Information Pages */}
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/verification-promise" element={<VerificationPromisePage />} />
            <Route path="/why-us" element={<VerificationPromisePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/blog"
              element={
                <PlaceholderPage
                  title="Blog & Resources"
                  description="Tips, guides, and local insights for Costa del Sol homeowners"
                />
              }
            />

            {/* For Tradespeople */}
            <Route path="/for-tradespeople" element={<TradesMenu />} />
            <Route path="/trades-menu" element={<TradesMenu />} />
            <Route
              path="/join-as-tradesperson"
              element={<JoinAsTradesperson />}
            />
            <Route
              path="/tradesperson/details"
              element={<TradespersonDetails />}
            />
            <Route
              path="/tradesperson/review"
              element={<TradespersonReview />}
            />
            <Route
              path="/tradesperson/submitted"
              element={<TradespersonSubmitted />}
            />

            {/* Authentication */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Homeowner Dashboard */}
            <Route path="/customer-dashboard" element={<CustomerDashboard />} />
            <Route path="/dashboard" element={<CustomerDashboard />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/post-job/results" element={<PostJobResults />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            <Route
              path="/request-quote/contact"
              element={<RequestQuoteContact />}
            />
            <Route
              path="/messages"
              element={
                <PlaceholderPage
                  title="Messages"
                  description="Chat with tradespeople and manage quotes"
                />
              }
            />
            <Route
              path="/review-trade"
              element={
                <PlaceholderPage
                  title="Review a Trade"
                  description="Share your experience and help others find trusted tradespeople"
                />
              }
            />
            <Route
              path="/homeowner-advice"
              element={
                <PlaceholderPage
                  title="Homeowner Advice Centre"
                  description="Expert tips and guides for your home improvement projects"
                />
              }
            />
            <Route
              path="/find-expert"
              element={
                <PlaceholderPage
                  title="Find Your Expert"
                  description="Connect with verified professionals in Costa del Sol"
                />
              }
            />
            <Route
              path="/saved-trades"
              element={
                <PlaceholderPage
                  title="Saved Trades"
                  description="Your saved tradespeople and favorite professionals"
                />
              }
            />
            <Route
              path="/advice-centre"
              element={
                <PlaceholderPage
                  title="Advice Centre"
                  description="Resources and guidance for tradespeople and homeowners"
                />
              }
            />

            {/* Tradesperson Dashboard */}
            <Route path="/pro/dashboard" element={<Tradespeople />} />
            <Route path="/pro/profile" element={<Tradespeople />} />
            <Route path="/tradesperson-profile" element={<Tradespeople />} />
            <Route
              path="/pro/leads"
              element={
                <PlaceholderPage
                  title="Leads"
                  description="Browse and quote on available jobs"
                />
              }
            />
            <Route
              path="/pro/reviews"
              element={
                <PlaceholderPage
                  title="Reviews"
                  description="Manage and respond to customer reviews"
                />
              }
            />

            {/* Legal */}
            <Route
              path="/terms"
              element={
                <PlaceholderPage
                  title="Terms of Service"
                  description="Terms and conditions for using CostaTrade"
                />
              }
            />
            <Route
              path="/privacy"
              element={
                <PlaceholderPage
                  title="Privacy Policy"
                  description="How we protect and use your data"
                />
              }
            />
            <Route
              path="/help"
              element={
                <PlaceholderPage
                  title="Help Center"
                  description="Get answers to common questions"
                />
              }
            />
            <Route
              path="/download-app"
              element={
                <PlaceholderPage
                  title="Download App"
                  description="Get the CostaTrade app on iOS and Android"
                />
              }
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  );
}
