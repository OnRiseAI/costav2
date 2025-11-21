import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Briefcase, 
  Award, 
  Camera, 
  ArrowRight,
  User,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for a tradesperson profile
const tradespersonData = {
  id: "mario-plumbing-sl",
  name: "Mario Plumbing S.L.",
  type: "Company (S.L.)",
  isPhoneVerified: true,
  isIdVerified: true,
  isTopRated: true,
  rating: 4.9,
  reviews: 12,
  teamSize: "5-10",
  bio: "We are a family-run business in Marbella with over 10 years of experience providing reliable and professional plumbing services across the Costa del Sol. From emergency repairs to full installations, our certified team is here to help.",
  companyDetails: {
    registration: "B-12345678",
    insurance: "Liability Insurance up to €1M",
  },
  services: ["Emergency Repairs", "Boiler Installation", "Leak Detection", "Tap Replacement", "Drain Unblocking", "Full Bathroom Refurbishment"],
  serviceAreas: ["Marbella", "Mijas", "Estepona", "Benahavís", "San Pedro"],
  photos: [
    "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613477714763-11013005436e?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1617042377508-72372739179a?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2940&auto=format&fit=crop",
  ],
  team: [
    { name: "Mario Rossi", role: "Head Plumber", photo: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Sofia Marti", role: "Office Manager", photo: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Carlos Ruiz", role: "Senior Plumber", photo: "https://randomuser.me/api/portraits/men/3.jpg" }
  ],
  reviews: [
    { id: 1, text: "Mario came on time and fixed the leak quickly. Very professional service.", author: "Sarah J.", authorType: "Verified Homeowner", date: "2 days ago", rating: 5 },
    { id: 2, text: "Excellent work on my boiler installation. Clean and efficient.", author: "David Miller", authorType: "Verified Homeowner", date: "1 week ago", rating: 4.5 },
    { id: 3, text: "Highly recommend Mario Plumbing. Solved a persistent issue others couldn't.", author: "Elena Costa", authorType: "Verified Homeowner", date: "3 weeks ago", rating: 5 }
  ]
};

export default function TradespersonProfile() {
  const { slug } = useParams(); // In a real app, this would fetch data based on slug
  const [isVerified, setIsVerified] = useState(tradespersonData.isPhoneVerified && tradespersonData.isIdVerified);
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const renderBadges = () => (
    <div className="flex flex-wrap gap-2">
      {tradespersonData.isPhoneVerified && (
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full shadow-inner">
          <CheckCircle className="w-3 h-3 text-gray-500" /> Phone Verified
        </span>
      )}
      {tradespersonData.isIdVerified && (
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full shadow-inner">
          <CheckCircle className="w-3 h-3 text-blue-500" /> ID Verified
        </span>
      )}
      {tradespersonData.isTopRated && (
        <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full shadow-inner">
          <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" /> Top Rated
        </span>
      )}
    </div>
  );

  const renderStats = () => (
    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
      <div className="flex items-center gap-1.5">
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        <span className="font-bold text-[#0a1f44]">{tradespersonData.rating}</span> ({tradespersonData.reviews} reviews)
      </div>
      <div className="flex items-center gap-1.5">
        <Briefcase className="w-4 h-4 text-slate-400" /> Team Size: <span className="font-bold text-[#0a1f44]">{tradespersonData.teamSize}</span>
      </div>
    </div>
  );

  const handleRequestQuote = () => {
    // In a real app, this would navigate to a quote request form or modal
    alert("Redirecting to quote request...");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Trust Hero */}
      <section className="relative py-16 px-4 bg-white border-b border-slate-100">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Profile Photo/Logo */}
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-4xl shadow-xl border-4 border-white">
                {tradespersonData.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>

            {/* Info & Action */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-5xl font-bold text-[#0a1f44] mb-4 leading-tight">{tradespersonData.name}</h1>
              <p className="text-lg text-slate-600 mb-6 capitalize">{tradespersonData.type}</p>
              
              {renderBadges()}
              <div className="mt-6">
                {renderStats()}
              </div>

              <Button 
                onClick={handleRequestQuote} 
                size="lg" 
                className="mt-8 px-8 py-7 text-lg rounded-xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/20 w-full md:w-auto"
              >
                Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-5xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 sticky top-24">
              <nav className="p-6 space-y-3">
                <button 
                  onClick={() => {}} // Placeholder for navigation logic
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors bg-blue-50 text-blue-700"
                >
                  <Briefcase className="w-5 h-5" />
                  About
                </button>
                <button 
                  onClick={() => {}}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-slate-600 hover:bg-slate-50"
                >
                  <Camera className="w-5 h-5" />
                  Portfolio
                </button>
                <button 
                  onClick={() => {}}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-slate-600 hover:bg-slate-50"
                >
                  <Star className="w-5 h-5" />
                  Reviews
                </button>
                <button 
                  onClick={() => {}}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-slate-600 hover:bg-slate-50"
                >
                  <User className="w-5 h-5" />
                  Meet the Team
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* 2. About Section */}
            <section>
              <h2 className="text-3xl font-bold text-[#0a1f44] mb-6">About Mario Plumbing S.L.</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">{tradespersonData.bio}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg text-[#0a1f44] mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" /> Company Details
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li><strong>Registration (CIF):</strong> {tradespersonData.companyDetails.registration} <span className="text-blue-600 font-medium">(Verified)</span></li>
                    <li><strong>Insurance:</strong> {tradespersonData.companyDetails.insurance}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0a1f44] mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" /> Service Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tradespersonData.serviceAreas.map((area, i) => (
                      <span key={i} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">{area}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold text-lg text-[#0a1f44] mb-3 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-blue-600" /> Services Offered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tradespersonData.services.map((service, i) => (
                    <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm">{service}</span>
                  ))}
                </div>
              </div>
            </section>

            {/* 2b. Meet the Team */}
            {tradespersonData.team && tradespersonData.team.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold text-[#0a1f44] mb-8">Meet the Experts</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tradespersonData.team.map((member, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center">
                      <img src={member.photo} alt={member.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-white shadow-sm" />
                      <h4 className="font-bold text-[#0a1f44]">{member.name}</h4>
                      <p className="text-sm text-slate-500">{member.role}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 3. Portfolio Gallery */}
            <section>
              <h2 className="text-3xl font-bold text-[#0a1f44] mb-8">Recent Work</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tradespersonData.photos.map((photo, i) => (
                  <div key={i} className="aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer hover:shadow-lg transition-shadow">
                    <img src={photo} alt={`Recent work ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Reviews Wall */}
            <section>
              <h2 className="text-3xl font-bold text-[#0a1f44] mb-8">What Customers Say</h2>
              <div className="space-y-6">
                {tradespersonData.reviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-slate-700 italic mb-4 leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm">
                        {review.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-bold text-[#0a1f44]">{review.author}</div>
                        <div className="text-xs text-slate-500">{review.authorType}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* 5. Sticky Footer (Mobile Only) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <Button 
          onClick={handleRequestQuote} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg font-bold rounded-xl shadow-lg shadow-blue-900/20"
        >
          Request a Quote
        </Button>
      </div>
    </div>
  );
}
