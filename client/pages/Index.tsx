import { Link } from "react-router-dom";
import {
  Droplets,
  Wind,
  Wrench,
  Zap,
  Hammer,
  PaintBucket,
  Key,
  Leaf,
  Bug,
  Home,
  Users,
  Star,
  Briefcase,
  ArrowRight,
  Sparkles,
  Wand2,
} from "lucide-react";
import { useState } from "react";
import { ClientHero } from "@/components/ClientHero";
import { CategoryCardWithImage } from "@/components/CategoryCardWithImage";
import { TradespersonCard } from "@/components/TradespersonCard";
import { TradeServicesModal } from "@/components/TradeServicesModal";
import { ReviewCard } from "@/components/ReviewCard";
import { StatsCounter } from "@/components/StatsCounter";
import { TrustBadges } from "@/components/TrustBadges";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyTrustCostaTrade } from "@/components/WhyTrustCostaTrade";
import { CTACards } from "@/components/CTACards";
import { LiveActivity } from "@/components/LiveActivity";
import { PromotionalCards } from "@/components/PromotionalCards";
import { TradespersonPromo } from "@/components/TradespersonPromo";
import { AppStoreBadges } from "@/components/AppStoreBadges";
import { Button } from "@/components/ui/button";
import { getFeaturedTradespeople } from "@/data/tradespeople";
import { SEO } from "@/components/SEO";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTradeSlug, setSelectedTradeSlug] = useState("");

  const handleCategoryClick = (slug: string) => {
    setSelectedTradeSlug(slug);
    setIsModalOpen(true);
  };

  const categories = [
    {
      name: "Pool Maintenance & Repair",
      slug: "pool-maintenance",
      icon: Droplets,
      count: 4,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2F30dab4e592724986a43fc4d20bfb2e27%2F472a57c41adc4a9dab40a028acb89f8a?format=webp&width=800",
    },
    {
      name: "Air Conditioning",
      slug: "air-conditioning",
      icon: Wind,
      count: 4,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2F30dab4e592724986a43fc4d20bfb2e27%2F3c8ea03238e344a8b4e99d8e1522bea7?format=webp&width=800",
    },
    {
      name: "Plumbers",
      slug: "plumbers",
      icon: Wrench,
      count: 4,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2F30dab4e592724986a43fc4d20bfb2e27%2F214ada80d910470d885f9d5054d532ae?format=webp&width=800",
    },
    {
      name: "Electricians",
      slug: "electricians",
      icon: Zap,
      count: 4,
      imageUrl:
        "https://images.pexels.com/photos/442160/pexels-photo-442160.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Builders & Renovations",
      slug: "builders",
      icon: Hammer,
      count: 4,
      imageUrl:
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Painters",
      slug: "painters",
      icon: PaintBucket,
      count: 3,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets%2F30dab4e592724986a43fc4d20bfb2e27%2F982af9470e6c4906a7a0976f156cae66?format=webp&width=800",
    },
    {
      name: "Locksmiths",
      slug: "locksmiths",
      icon: Key,
      count: 3,
      imageUrl:
        "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Gardeners & Landscaping",
      slug: "gardeners",
      icon: Leaf,
      count: 4,
      imageUrl:
        "https://images.pexels.com/photos/26827231/pexels-photo-26827231.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Pest Control",
      slug: "pest-control",
      icon: Bug,
      count: 3,
      imageUrl:
        "https://images.pexels.com/photos/5025646/pexels-photo-5025646.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Property Maintenance",
      slug: "property-maintenance",
      icon: Home,
      count: 4,
      imageUrl:
        "https://images.pexels.com/photos/7414938/pexels-photo-7414938.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Cleaning Services",
      slug: "cleaning",
      icon: Sparkles,
      count: 4,
      imageUrl:
        "https://images.pexels.com/photos/3970132/pexels-photo-3970132.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Handyman",
      slug: "handyman",
      icon: Wand2,
      count: 3,
      imageUrl:
        "https://images.pexels.com/photos/3957336/pexels-photo-3957336.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const featuredTradespeople = getFeaturedTradespeople(3).map((tp, idx) => {
    const photos = [
      "https://images.pexels.com/photos/16552856/pexels-photo-16552856.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
      "https://images.pexels.com/photos/19987431/pexels-photo-19987431.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
      "https://images.pexels.com/photos/16552856/pexels-photo-16552856.jpeg?auto=compress&cs=tinysrgb&w=200&h=200",
    ];
    return { ...tp, profilePhoto: photos[idx] };
  });

  const reviews = [
    {
      reviewerName: "Sarah M.",
      rating: 5,
      jobType: "Pool Repair",
      reviewText:
        "Miguel was fantastic! He diagnosed our pool issue quickly and had it fixed the same day. Very professional and reasonably priced. Highly recommend!",
      date: "2 weeks ago",
      verified: true,
      avatarUrl:
        "https://images.pexels.com/photos/27603433/pexels-photo-27603433.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
    },
    {
      reviewerName: "James R.",
      rating: 5,
      jobType: "AC Installation",
      reviewText:
        "Cool Air Solutions installed our new AC units. They were punctual, clean, and the installation was perfect. Our house has never been cooler!",
      date: "1 month ago",
      verified: true,
      avatarUrl:
        "https://images.pexels.com/photos/31422830/pexels-photo-31422830.png?auto=compress&cs=tinysrgb&w=100&h=100",
    },
    {
      reviewerName: "Anna K.",
      rating: 5,
      jobType: "Electrical Rewiring",
      reviewText:
        "Excellent service from German Precision Electric. They rewired our villa professionally and explained everything clearly. True professionals!",
      date: "3 weeks ago",
      verified: true,
      avatarUrl:
        "https://images.pexels.com/photos/8951408/pexels-photo-8951408.jpeg?auto=compress&cs=tinysrgb&w=100&h=100",
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="CostaTrades | Find Verified Tradespeople in Costa del Sol"
        description="Connect with trusted plumbers, electricians, and builders in Marbella, Estepona & Mijas. Verified reviews, free quotes, and guaranteed work."
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "CostaTrades",
          url: "https://www.costatrades.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://www.costatrades.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      {/* Live Activity Feed */}
      <LiveActivity />

      {/* Client Hero Section */}
      <ClientHero />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Why Trust CostaTrade Section */}
      <WhyTrustCostaTrade />

      {/* Popular Trade Categories Section */}
      <section className="bg-white py-20 md:py-32 relative overflow-hidden">
        {/* Subtle Geometric Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/10 to-white"></div>
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-5 pattern-grid text-gray-400 z-10"></div>
        <div className="container-custom relative z-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">
              Popular Trade Categories
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find verified professionals for any home improvement or
              maintenance need
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {categories.slice(0, 6).map((category) => (
              <CategoryCardWithImage
                key={category.slug}
                name={category.name}
                slug={category.slug}
                icon={category.icon}
                count={category.count}
                imageUrl={category.imageUrl}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* CTA Cards Section */}
      <CTACards />

      {/* Featured Tradespeople Section */}
      <section className="bg-slate-50 py-20 md:py-32 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/5691531/pexels-photo-5691531.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Professional workspace"
            className="w-full h-full object-cover opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/95 via-slate-50/98 to-slate-50/95"></div>
        </div>
        <div className="absolute inset-0 opacity-5 pattern-dots text-[#0a1f44] z-10"></div>
        <div className="container-custom relative z-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1f44]">
              Featured Tradespeople
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Top-rated professionals ready to help with your next project
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredTradespeople.map((tradesperson, index) => (
              <div
                key={tradesperson.slug}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <TradespersonCard {...tradesperson} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/post-job">
              <Button
                size="lg"
                className="gap-2 bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white"
              >
                Browse All Tradespeople
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-20 md:py-32 relative overflow-hidden">
        {/* Background with Happy Customers Theme */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/10 to-white"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-cyan-100/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-5 pattern-dots text-gray-400 z-10"></div>
        <div className="container-custom relative z-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1f44]">
              Customer Reviews
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real reviews from real customers across Costa del Sol
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="animate-slide-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Cards Section */}
      <PromotionalCards />

      {/* Tradesperson Promo Section */}
      <TradespersonPromo />

      {/* Trade Services Modal */}
      <TradeServicesModal
        isOpen={isModalOpen}
        tradeSlug={selectedTradeSlug}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
