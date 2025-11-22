import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  MapPin,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  Camera,
  ChevronRight,
  X,
  Check,
  Building2,
  User,
  AlertTriangle,
  Flag,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { demoTradespeople, Tradesperson } from "@/data/tradespeople";
import { SEO } from "@/components/SEO";

// Extended interface for the full profile
interface TradespersonProfileData extends Tradesperson {
  type: "Company" | "Sole Trader";
  cif?: string;
  insurance?: string;
  bio: string;
  areasCovered: string[];
  team?: {
    name: string;
    role: string;
    photo: string;
  }[];
  portfolio: {
    id: number;
    image: string;
    title: string;
  }[];
  reviews: {
    id: number;
    author: string;
    rating: number;
    date: string;
    text: string;
    verified: boolean;
  }[];
  coverImage: string;
  isClaimed: boolean;
}

export default function TradespersonProfile() {
  const { slug } = useParams<{ slug: string }>();
  const [profile, setProfile] = useState<TradespersonProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const found = demoTradespeople.find((t) => t.slug === slug);

    if (found) {
      // Determine cover image based on category
      let coverImage = "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=400&fit=crop"; // Default construction
      if (found.tradeCategorySlug === 'pool-maintenance') {
        coverImage = "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&h=400&fit=crop";
      } else if (found.tradeCategorySlug === 'air-conditioning') {
        coverImage = "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&h=400&fit=crop"; // AC specific
      } else if (found.tradeCategorySlug === 'gardeners') {
        coverImage = "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&h=400&fit=crop";
      }

      // Enrich with mock data for the demo
      const enrichedProfile: TradespersonProfileData = {
        ...found,
        type:
          found.businessName.includes("Group") ||
          found.businessName.includes("Services")
            ? "Company"
            : "Sole Trader",
        cif: "B-12345678",
        insurance: "Liability Insurance up to €1M",
        bio: `We are a professional ${found.tradeCategory.toLowerCase()} service based in ${found.location} with over ${found.yearsInBusiness} years of experience. We pride ourselves on quality workmanship, reliability, and excellent customer service. Our team is fully qualified and insured, ensuring peace of mind for all our clients.`,
        areasCovered: [found.location, "Mijas", "Estepona", "Benahavís"],
        team:
          found.businessName.includes("Group") ||
          found.businessName.includes("Services")
            ? [
                {
                  name: "Mario",
                  role: "Head Specialist",
                  photo:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
                },
                {
                  name: "Sarah",
                  role: "Office Manager",
                  photo:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
                },
                {
                  name: "David",
                  role: "Senior Technician",
                  photo:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
                },
              ]
            : undefined,
        portfolio: [
          {
            id: 1,
            title: "Modern Bathroom Renovation",
            image:
              "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
          },
          {
            id: 2,
            title: "Kitchen Plumbing Installation",
            image:
              "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?w=800&h=600&fit=crop",
          },
          {
            id: 3,
            title: "Emergency Leak Repair",
            image:
              "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&h=600&fit=crop",
          },
          {
            id: 4,
            title: "Boiler Replacement",
            image:
              "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&h=600&fit=crop",
          },
          {
            id: 5,
            title: "Underfloor Heating",
            image:
              "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
          },
          {
            id: 6,
            title: "Commercial Installation",
            image:
              "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
          },
        ],
        reviews: [
          {
            id: 1,
            author: "Sarah J.",
            rating: 5,
            date: "2 days ago",
            text: "Mario came on time and fixed the leak quickly. Very professional and clean work.",
            verified: true,
          },
          {
            id: 2,
            author: "Mike T.",
            rating: 5,
            date: "1 week ago",
            text: "Excellent service. Explained everything clearly and the price was fair. Highly recommended!",
            verified: true,
          },
          {
            id: 3,
            author: "Elena R.",
            rating: 4,
            date: "3 weeks ago",
            text: "Good work, arrived a bit late but called to let me know. The repair is perfect.",
            verified: true,
          },
        ],
        coverImage,
        isClaimed: found.verified, // Using verified status as proxy for claimed status for this demo
      };
      setProfile(enrichedProfile);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A1E40]"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Specialist Not Found</h1>
        <Link to="/post-job">
          <Button className="bg-[#0A1E40]">Browse Specialists</Button>
        </Link>
      </div>
    );
  }

  const handleViewAllReviewsClick = () => {
    const reviewsSection = document.getElementById("reviews-section");
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-20 md:pb-0">
      <SEO
        title={`${profile.businessName} - ${profile.tradeCategory} in ${profile.location} | CostaTrades`}
        description={`Hire ${profile.businessName}, a verified ${profile.tradeCategory} in ${profile.location}. Read reviews, view portfolio, and request a quote.`}
      />

      {/* 1. Hero Header (Global) */}
      <div className="relative bg-white">
        {/* Cover Image */}
        <div className="h-[350px] w-full relative overflow-hidden">
          <img
            src={profile.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E40]/80 to-transparent opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Avatar - Overlapping bottom-left */}
          <div className="absolute -top-20 left-4 md:left-8">
            <div className="w-[140px] h-[140px] rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
              {profile.profilePhoto ? (
                <img
                  src={profile.profilePhoto}
                  alt={profile.businessName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#0A1E40] text-white text-5xl font-serif font-bold">
                  {profile.businessName.charAt(0)}
                </div>
              )}
            </div>
          </div>

          {/* Headline & Badges */}
          <div className="pt-20 pb-8 pl-4 md:pl-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0A1E40] mb-4">
              {profile.businessName}
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              {/* Pill 1: English Speaking */}
              <Badge className="bg-white text-[#0A1E40] border border-gray-200 hover:bg-gray-50 px-3 py-1.5 text-sm font-medium shadow-sm gap-1.5">
                <span className="text-lg">🇬🇧</span> English Speaking
              </Badge>

              {/* Pill 2: Verified (if claimed) */}
              {profile.isClaimed && (
                <Badge className="bg-[#0A1E40] text-white hover:bg-[#0A1E40]/90 px-3 py-1.5 text-sm font-medium shadow-sm gap-1.5 border-none">
                  <Shield className="w-4 h-4 fill-current" /> Verified Pro
                </Badge>
              )}

              {/* Pill 3: City */}
              <Badge className="bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 px-3 py-1.5 text-sm font-medium shadow-sm gap-1.5">
                <MapPin className="w-4 h-4 text-[#0A1E40]" /> {profile.location}
              </Badge>

              {/* Pill 4: Unclaimed (if !claimed) */}
              {!profile.isClaimed && (
                <Badge className="bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100 px-3 py-1.5 text-sm font-medium shadow-sm gap-1.5">
                  <AlertTriangle className="w-4 h-4" /> Unclaimed Profile
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12">
          {/* Left Column (65%) */}
          <div className="space-y-12">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0A1E40] mb-6">
                About Us
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                <p>{profile.bio}</p>
              </div>
            </section>

            {/* Services Grid */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-[#0A1E40] mb-6">
                Services
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {profile.services?.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0A1E40] mb-3">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-900">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Portfolio Masonry */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-[#0A1E40]">
                  Portfolio
                </h2>
                <span className="text-sm text-gray-500 font-medium">
                  {profile.portfolio.length} Projects
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First image is large (Hero) */}
                {profile.portfolio.length > 0 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="md:col-span-2 aspect-video rounded-2xl overflow-hidden cursor-pointer group relative">
                        <img
                          src={profile.portfolio[0].image}
                          alt={profile.portfolio[0].title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-[#0A1E40] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                            View Project
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl bg-black border-none p-0">
                      <img
                        src={profile.portfolio[0].image}
                        alt={profile.portfolio[0].title}
                        className="w-full h-auto max-h-[90vh] object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                )}

                {/* Remaining images */}
                {profile.portfolio.slice(1).map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                          <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl bg-black border-none p-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto max-h-[90vh] object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews-section">
              <h2 className="text-2xl font-serif font-bold text-[#0A1E40] mb-6">
                Client Reviews
              </h2>
              <div className="space-y-6">
                {profile.reviews.map((review) => (
                  <div key={review.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-500">
                          {review.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{review.author}</div>
                          <div className="text-xs text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"{review.text}"</p>
                    {review.verified && (
                      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-green-700 bg-green-50 inline-flex px-2 py-1 rounded-md">
                        <CheckCircle className="w-3 h-3" /> Verified Homeowner
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (35% - Sticky Sidebar) */}
          <div className="hidden lg:block relative">
            <div className="sticky top-24 space-y-6">
              {/* 3. Conditional Logic (The Growth Engine) */}
              
              {/* SCENARIO A: Active Pro (Claimed) */}
              {profile.isClaimed ? (
                <Card className="border-none shadow-xl overflow-hidden">
                  <div className="bg-[#0A1E40] p-6 text-white">
                    <h3 className="text-xl font-serif font-bold mb-2">Interested in hiring?</h3>
                    <p className="text-blue-100 text-sm">
                      Contact {profile.businessName} directly for a quote or consultation.
                    </p>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <Link to="/post-job">
                      <Button className="w-full bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white h-12 text-base font-bold shadow-md">
                        Request Consultation
                      </Button>
                    </Link>
                    
                    <Button 
                      variant="outline" 
                      className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white border-none h-12 text-base font-bold shadow-md flex items-center justify-center gap-2"
                      onClick={() => window.open(`https://wa.me/${profile.phone?.replace(/[^0-9]/g, '') || ''}`, '_blank')}
                    >
                      <MessageCircle className="w-5 h-5 fill-current" /> WhatsApp
                    </Button>

                    <div className="pt-4 border-t border-gray-100 text-center">
                      <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                        <Clock className="w-4 h-4" /> Response time: ~1 hour
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                /* SCENARIO B: Unclaimed Pro */
                <Card className="border-2 border-[#C5A059] shadow-xl overflow-hidden bg-white">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-[#C5A059]">
                      <Building2 className="w-8 h-8" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#0A1E40] mb-2">
                        Is this your business?
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Take control of this profile. Upload photos, reply to reviews, and receive job leads directly.
                      </p>
                    </div>

                    <Link to={`/claim?id=${profile.slug}`} className="block">
                      <Button className="w-full bg-[#0A1E40] hover:bg-[#0A1E40]/90 text-white h-12 text-base font-bold shadow-md">
                        Claim for Free
                      </Button>
                    </Link>
                    
                    <p className="text-xs text-gray-400">
                      Verification required. No credit card needed.
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Additional Trust Info */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h4 className="font-bold text-[#0A1E40] mb-4 text-sm uppercase tracking-wider">
                  Business Details
                </h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center justify-between">
                    <span>Years in Business</span>
                    <span className="font-medium text-gray-900">{profile.yearsInBusiness}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Jobs Completed</span>
                    <span className="font-medium text-gray-900">{profile.jobsCompleted}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Team Size</span>
                    <span className="font-medium text-gray-900">{profile.team ? "5-10" : "1-2"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Mobile Responsiveness - Fixed Bottom Bar (Unclaimed Only) */}
      {!profile.isClaimed && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0A1E40] p-4 z-[999] md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
          <div className="flex items-center justify-between gap-4">
            <span className="text-white font-bold text-sm">
              Own this business?
            </span>
            <Link to={`/claim?id=${profile.slug}`}>
              <Button className="bg-[#C5A059] hover:bg-[#C5A059]/90 text-white font-bold px-6">
                Claim
              </Button>
            </Link>
          </div>
        </div>
      )}
      
      {/* Mobile Footer for Claimed (Optional, keeping existing "Request Quote" for UX) */}
      {profile.isClaimed && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-40">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[#0A1E40] truncate">
                {profile.businessName}
              </p>
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>{profile.rating}</span>
              </div>
            </div>
            <Link to="/post-job">
              <Button className="bg-[#0A1E40] hover:bg-[#0A1E40]/90 text-white rounded-full px-6 h-10 text-sm font-bold shadow-md">
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
