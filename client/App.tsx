import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "@/pages/Index";
import TradeCategory from "@/pages/TradeCategory";
import JobPostedSuccess from "@/pages/JobPostedSuccess";
import PostJob from "@/pages/PostJob";
import PostJobResults from "@/pages/PostJobResults";
import LoginPage from "@/pages/LoginPage";
import JoinAsTradesperson from "@/pages/JoinAsTradesperson";
import TradespersonProfile from "@/pages/TradespersonProfile";
import TradespersonDetails from "@/pages/TradespersonDetails";
import TradespersonReview from "@/pages/TradespersonReview";
import TradespersonSubmitted from "@/pages/TradespersonSubmitted";
import { CustomerDashboard } from "@/pages/CustomerDashboard";
import { TradespersonDashboard } from "@/pages/TradespersonDashboard";
import TradespersonJobDetail from "@/pages/TradespersonJobDetail";
import { Tradespeople } from "@/pages/Tradespeople";
import AboutPage from "@/pages/AboutPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import VerificationPromisePage from "@/pages/VerificationPromisePage";
import FAQPage from "@/pages/FAQPage";
import CostGuidesPage from "@/pages/CostGuidesPage";
import ContactPage from "@/pages/ContactPage";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CookiePolicy from "@/pages/CookiePolicy";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import CareersPage from "@/pages/CareersPage";
import HolidayHomesPage from "@/pages/HolidayHomesPage";
import LandlordsPage from "@/pages/LandlordsPage";
import SEOTradePage from "@/pages/SEOTradePage";
import { CookieConsent } from "@/components/CookieConsent";
import PlaceholderPage from "@/pages/PlaceholderPage";
import ReviewTrade from "@/pages/ReviewTrade";
import NotFound from "@/pages/NotFound";
import SignupPage from "@/pages/SignupPage";
import LocationHub from "@/pages/LocationHub";
import "./global.css";

function AppContent() {
  console.log("AppContent rendering...");
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<Index />} />

            {/* SEO Trade Pages */}
            <Route path="/trades/:trade/:location" element={<SEOTradePage />} />
            <Route path="/seo-template" element={<SEOTradePage />} />

            {/* Trade Category Pages */}
            <Route path="/trades/:category" element={<TradeCategory />} />

            {/* Tradesperson Profile */}
            <Route
              path="/tradesperson/:slug"
              element={<TradespersonProfile />}
            />

            {/* Search - Redirect to Post Job */}
            <Route
              path="/search"
              element={<Navigate to="/post-job" replace />}
            />

            {/* Information Pages */}
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route
              path="/verification-promise"
              element={<VerificationPromisePage />}
            />
            <Route path="/why-us" element={<VerificationPromisePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/cost-guides" element={<CostGuidesPage />} />
            <Route path="/holiday-homes" element={<HolidayHomesPage />} />
            <Route path="/landlords" element={<LandlordsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            {/* For Tradespeople */}
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

            {/* Homeowner Dashboard */}
            <Route path="/customer-dashboard" element={<CustomerDashboard />} />
            <Route path="/dashboard" element={<CustomerDashboard />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/post-job/success" element={<JobPostedSuccess />} />
            <Route path="/post-job/results" element={<PostJobResults />} />
            <Route path="/review-trade" element={<ReviewTrade />} />
            <Route
              path="/saved-trades"
              element={<Navigate to="/customer-dashboard?tab=saved" replace />}
            />

            {/* Tradesperson Dashboard */}
            <Route path="/pro/dashboard" element={<TradespersonDashboard />} />
            <Route path="/pro/job/:id" element={<TradespersonJobDetail />} />
            <Route path="/tradesperson-profile" element={<Tradespeople />} />
            <Route
              path="/pro/reviews"
              element={<Navigate to="/pro/dashboard?tab=reviews" replace />}
            />

            {/* Legal */}
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route
              path="/download-app"
              element={
                <PlaceholderPage
                  title="Download App"
                  description="The CostaTrade mobile app is coming soon to iOS and Android"
                />
              }
            />

            {/* Signup */}
            <Route path="/signup" element={<SignupPage />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
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
