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
}

export default function TradespersonProfile() {
  const { slug } = useParams<{ slug: string }>();
  const [profile, setProfile] = useState<TradespersonProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const found = demoTradespeople.find((t) => t.slug === slug);

    if (found) {
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
      };
      setProfile(enrichedProfile);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Tradesperson Not Found</h1>
        <Link to="/post-job">
          <Button>Browse Trades</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <SEO
        title={`${profile.businessName} - ${profile.tradeCategory} in ${profile.location} | CostaTrades Reviews`}
        description={`Read verified reviews for ${profile.businessName}. Verified ${profile.tradeCategory} in ${profile.location}. Request a free quote now. Phone verified.`}
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: profile.businessName,
          image: profile.profilePhoto,
          telephone: profile.phone || "",
          address: {
            "@type": "PostalAddress",
            addressLocality: profile.location,
            addressCountry: "ES",
          },
          priceRange: "€€",
        }}
      />
      {/* 1. Trust Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* Profile Photo */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0 bg-gray-100">
              {profile.profilePhoto ? (
                <img
                  src={profile.profilePhoto}
                  alt={profile.businessName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-3xl font-bold">
                  {profile.businessName.charAt(0)}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {profile.businessName}
                  </h1>
                  <div className="flex items-center gap-2 mt-1 text-gray-600">
                    {profile.type === "Company" ? (
                      <Building2 className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                    <span>{profile.type}</span>
                    <span className="text-gray-300">|</span>
                    <MapPin className="w-4 h-4" />
                    <span>{profile.location}</span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <Link to="/post-job">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white shadow-md"
                    >
                      Request a Quote
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {profile.verified && (
                  <Badge
                    variant="secondary"
                    className="bg-blue-50 text-blue-700 border-blue-100 gap-1 px-3 py-1"
                  >
                    <Shield className="w-3 h-3 fill-blue-700" /> ID/CIF Verified
                  </Badge>
                )}
                {profile.phone && (
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-700 border-gray-200 gap-1 px-3 py-1"
                  >
                    <Phone className="w-3 h-3" /> Phone Verified
                  </Badge>
                )}
                {profile.rating >= 4.8 && (
                  <Badge
                    variant="secondary"
                    className="bg-amber-50 text-amber-700 border-amber-100 gap-1 px-3 py-1"
                  >
                    <Award className="w-3 h-3" /> Top Rated
                  </Badge>
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 mt-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-lg">{profile.rating}</span>
                  <span className="text-gray-500 underline decoration-dotted">
                    ({profile.reviewCount} Reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>Team Size: {profile.team ? "5-10" : "1-2"}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{profile.yearsInBusiness} Years Exp.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 space-y-8">
          {/* 2. About Section */}
          <section className="bg-white rounded-xl p-6 shadow-sm border">
            <h2 className="text-xl font-bold mb-4">
              About {profile.businessName}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{profile.bio}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    Registration (CIF)
                  </p>
                  <p className="font-medium text-gray-900">
                    {profile.cif}{" "}
                    <span className="text-green-600 text-xs ml-1">
                      (Verified)
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">
                    Insurance
                  </p>
                  <p className="font-medium text-gray-900">
                    Liability up to €1M
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Services</h3>
              <div className="flex flex-wrap gap-2">
                {profile.services?.map((service, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-gray-50 px-3 py-1 text-sm font-normal"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Areas Covered</h3>
              <div className="flex flex-wrap gap-2 text-gray-600 text-sm">
                {profile.areasCovered.map((area, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full"
                  >
                    <MapPin className="w-3 h-3" /> {area}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 2b. Meet the Team (Optional) */}
          {profile.team && (
            <section className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-xl font-bold mb-4">Our Experts</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {profile.team.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-2 border-2 border-gray-100">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-medium text-gray-900">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 3. Portfolio Gallery */}
          <section className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Recent Work</h2>
              <span className="text-sm text-gray-500">
                {profile.portfolio.length} Projects
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {profile.portfolio.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0 overflow-hidden bg-black border-none">
                    <div className="relative w-full h-[80vh] flex items-center justify-center bg-black">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <h3 className="text-lg font-medium">{item.title}</h3>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>

          {/* 4. Reviews Wall */}
          <section className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">What Customers Say</h2>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${star <= Math.round(profile.rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="font-bold">{profile.rating}</span>
              </div>
            </div>

            <div className="space-y-6">
              {profile.reviews.map((review) => (
                <div
                  key={review.id}
                  className="border-b last:border-0 pb-6 last:pb-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold text-gray-900">
                        {review.author}
                      </div>
                      {review.verified && (
                        <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Check className="w-3 h-3" /> Verified Homeowner
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3 h-3 ${star <= review.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" className="w-full md:w-auto">
                View All {profile.reviewCount} Reviews
              </Button>
            </div>
          </section>
        </div>

        {/* Right Column (Sidebar - Desktop) */}
        <div className="hidden lg:block space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border sticky top-24">
            <h3 className="font-bold text-lg mb-4">
              Contact {profile.businessName}
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Get a free quote for your project. Response time: usually within 2
              hours.
            </p>

            <Link to="/post-job">
              <Button className="w-full mb-4 h-12 text-lg shadow-md">
                Request a Quote
              </Button>
            </Link>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{profile.phone || "+34 952 123 456"}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>Contact via Message</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Mon - Fri: 09:00 - 18:00</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <p className="text-xs text-gray-500 text-center">
                <Shield className="w-3 h-3 inline mr-1" />
                CostaTrade Guarantee: Verified Pro
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Sticky Footer (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-40">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 truncate">
              {profile.businessName}
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>{profile.rating}</span>
              <span>({profile.reviewCount})</span>
            </div>
          </div>
          <Link to="/post-job">
            <Button className="shadow-md">Request Quote</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
