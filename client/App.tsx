import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./global.css";

const Index = lazy(() => import("@/pages/Index"));
const TradeCategory = lazy(() => import("@/pages/TradeCategory"));
const JobPostedSuccess = lazy(() => import("@/pages/JobPostedSuccess"));
const PostJob = lazy(() => import("@/pages/PostJob"));
const PostJobResults = lazy(() => import("@/pages/PostJobResults"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const JoinAsTradesperson = lazy(() => import("@/pages/JoinAsTradesperson"));
const TradespersonProfile = lazy(() => import("@/pages/TradespersonProfile"));
const TradespersonDetails = lazy(() => import("@/pages/TradespersonDetails"));
const TradespersonReview = lazy(() => import("@/pages/TradespersonReview"));
const TradespersonSubmitted = lazy(
  () => import("@/pages/TradespersonSubmitted"),
);
const CustomerDashboard = lazy(() =>
  import("@/pages/CustomerDashboard").then((m) => ({
    default: m.CustomerDashboard,
  })),
);
const TradespersonDashboard = lazy(() =>
  import("@/pages/TradespersonDashboard").then((m) => ({
    default: m.TradespersonDashboard,
  })),
);
const TradespersonJobDetail = lazy(
  () => import("@/pages/TradespersonJobDetail"),
);
const Tradespeople = lazy(() =>
  import("@/pages/Tradespeople").then((m) => ({ default: m.Tradespeople })),
);
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const HowItWorksPage = lazy(() => import("@/pages/HowItWorksPage"));
const VerificationPromisePage = lazy(
  () => import("@/pages/VerificationPromisePage"),
);
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const CostGuidesPage = lazy(() => import("@/pages/CostGuidesPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const BlogPostPage = lazy(() => import("@/pages/BlogPostPage"));
const CareersPage = lazy(() => import("@/pages/CareersPage"));
const HolidayHomesPage = lazy(() => import("@/pages/HolidayHomesPage"));
const LandlordsPage = lazy(() => import("@/pages/LandlordsPage"));
const SEOTradePage = lazy(() => import("@/pages/SEOTradePage"));
const PlaceholderPage = lazy(() => import("@/pages/PlaceholderPage"));
const ReviewTrade = lazy(() => import("@/pages/ReviewTrade"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const SignupPage = lazy(() => import("@/pages/SignupPage"));

function AppContent() {
  console.log("AppContent rendering...");
  return (
    <>
      <ScrollToTop />
      <GoogleAnalytics />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-16 text-slate-500">
                Loading…
              </div>
            }
          >
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<Index />} />

              {/* SEO Trade Pages */}
              <Route
                path="/trades/:trade/:location"
                element={<SEOTradePage />}
              />
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
              <Route
                path="/customer-dashboard"
                element={<CustomerDashboard />}
              />
              <Route path="/dashboard" element={<CustomerDashboard />} />
              <Route path="/post-job" element={<PostJob />} />
              <Route path="/post-job/success" element={<JobPostedSuccess />} />
              <Route path="/post-job/results" element={<PostJobResults />} />
              <Route path="/review-trade" element={<ReviewTrade />} />
              <Route
                path="/saved-trades"
                element={
                  <Navigate to="/customer-dashboard?tab=saved" replace />
                }
              />

              {/* Tradesperson Dashboard */}
              <Route
                path="/pro/dashboard"
                element={<TradespersonDashboard />}
              />
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
          </Suspense>
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
