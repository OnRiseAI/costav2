import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "@/pages/Index";
import TradeCategory from "@/pages/TradeCategory";
import SearchResults from "@/pages/SearchResults";
import PostJob from "@/pages/PostJob";
import PostJobResults from "@/pages/PostJobResults";
import PlaceholderPage from "@/pages/PlaceholderPage";
import NotFound from "@/pages/NotFound";
import "./global.css";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Routes>
              {/* Homepage */}
              <Route path="/" element={<Index />} />

              {/* Trade Category Pages */}
              <Route path="/trades" element={<PlaceholderPage title="All Trade Categories" description="Browse all available trade categories in Costa del Sol" />} />
              <Route path="/trades/:category" element={<TradeCategory />} />

              {/* Tradesperson Profile */}
              <Route path="/tradesperson/:slug" element={<PlaceholderPage title="Tradesperson Profile" description="View detailed tradesperson profile, reviews, and gallery" />} />

              {/* Search */}
              <Route path="/search" element={<SearchResults />} />

              {/* Information Pages */}
              <Route path="/how-it-works" element={<PlaceholderPage title="How It Works" description="Learn how TradeFinder connects you with trusted professionals" />} />
              <Route path="/about" element={<PlaceholderPage title="About Us" description="Our mission to connect Costa del Sol with trusted tradespeople" />} />
              <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with our team" />} />
              <Route path="/blog" element={<PlaceholderPage title="Blog & Resources" description="Tips, guides, and local insights for Costa del Sol homeowners" />} />

              {/* For Tradespeople */}
              <Route path="/for-tradespeople" element={<PlaceholderPage title="Join as a Tradesperson" description="Grow your business with quality leads from TradeFinder" />} />
              <Route path="/join-as-tradesperson" element={<PlaceholderPage title="Tradesperson Application" description="Apply to join our verified network of professionals" />} />

              {/* Authentication */}
              <Route path="/login" element={<PlaceholderPage title="Login" description="Sign in to your TradeFinder account" />} />
              <Route path="/signup" element={<PlaceholderPage title="Sign Up" description="Create your TradeFinder account" />} />

              {/* Homeowner Dashboard */}
              <Route path="/dashboard" element={<PlaceholderPage title="Dashboard" description="Manage your jobs, quotes, and saved tradespeople" />} />
              <Route path="/post-job" element={<PostJob />} />
              <Route path="/post-job/results" element={<PostJobResults />} />
              <Route path="/messages" element={<PlaceholderPage title="Messages" description="Chat with tradespeople and manage quotes" />} />

              {/* Tradesperson Dashboard */}
              <Route path="/pro/dashboard" element={<PlaceholderPage title="Pro Dashboard" description="Manage your leads, profile, and business" />} />
              <Route path="/pro/profile" element={<PlaceholderPage title="Manage Profile" description="Update your business information and portfolio" />} />
              <Route path="/pro/leads" element={<PlaceholderPage title="Leads" description="Browse and quote on available jobs" />} />
              <Route path="/pro/reviews" element={<PlaceholderPage title="Reviews" description="Manage and respond to customer reviews" />} />

              {/* Legal */}
              <Route path="/terms" element={<PlaceholderPage title="Terms of Service" description="Terms and conditions for using TradeFinder" />} />
              <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" description="How we protect and use your data" />} />
              <Route path="/help" element={<PlaceholderPage title="Help Center" description="Get answers to common questions" />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
