import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Eye, Star, Award, CheckCircle, XCircle, Quote } from "lucide-react";

export default function VerificationPromisePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#0a1f44] text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/8487400/pexels-photo-8487400.jpeg" 
            alt="Professional tradesperson" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a1f44]/80 mix-blend-multiply"></div>
        </div>

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium tracking-wide uppercase text-emerald-400">The CostaTrades Promise</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Only the Best Tradespeople Want to Be Here
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto">
            CostaTrades is where reputation matters. Every professional on our platform values their standing in the community.
          </p>
        </div>
      </section>

      {/* 2. The "Quality Filter" (Core Message) */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a1f44] mb-8">
            Accountability is Everything
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Unlike anonymous listings or social media groups, every tradesperson on CostaTrades has a public profile with their real business details. They know their reputation is on the line with every job—which means they deliver quality work, every time.
          </p>
        </div>
      </section>

      {/* 3. "What Makes Us Different" (3-Column Grid) */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Column 1 */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">Visible & Traceable</h3>
              <p className="text-slate-600 leading-relaxed">
                Every professional has a complete profile with contact details, location, and services. No hiding behind fake names or burner numbers.
              </p>
            </div>

            {/* Column 2 */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">Verified Customer Reviews</h3>
              <p className="text-slate-600 leading-relaxed">
                Only homeowners who have actually hired through our platform can leave reviews. No fake 5-star ratings from friends and family.
              </p>
            </div>

            {/* Column 3 */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">They Choose to Be Here</h3>
              <p className="text-slate-600 leading-relaxed">
                The best tradespeople actively want to be on CostaTrades because it shows they are serious about their reputation and their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "The CostaTrades Difference" (Comparison Table) */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] text-center mb-16">
            The CostaTrades Difference
          </h2>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <div className="grid grid-cols-4 bg-slate-50 p-6 border-b border-slate-200 font-bold text-[#0a1f44] text-sm md:text-base uppercase tracking-wider">
              <div className="col-span-1"></div>
              <div className="text-center text-slate-500">Facebook Groups</div>
              <div className="text-center text-slate-500">Other Directories</div>
              <div className="text-center text-blue-600">CostaTrades</div>
            </div>

            {[
              { label: "Real Names", fb: false, other: true, ct: true },
              { label: "Verified Reviews", fb: false, other: "mixed", ct: true },
              { label: "Public Accountability", fb: false, other: false, ct: true },
              { label: "Reputation Matters", fb: false, other: false, ct: true },
            ].map((row, i) => (
              <div key={i} className={cn(
                "grid grid-cols-4 p-6 items-center hover:bg-slate-50 transition-colors",
                i !== 3 && "border-b border-slate-100"
              )}>
                <div className="font-bold text-[#0a1f44]">{row.label}</div>
                
                <div className="flex justify-center">
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
                
                <div className="flex justify-center">
                  {row.other === true ? (
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                  ) : row.other === "mixed" ? (
                    <span className="text-sm font-medium text-slate-500 bg-slate-200 px-3 py-1 rounded-full">Sometimes</span>
                  ) : (
                    <XCircle className="w-6 h-6 text-red-400" />
                  )}
                </div>
                
                <div className="flex justify-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Trust Statement (Testimonial) */}
      <section className="py-24 bg-[#0a1f44] text-white relative overflow-hidden">
        <div className="container-custom max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/33531823/pexels-photo-33531823.jpeg" 
                  alt="Local Electrician" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <Quote className="w-16 h-16 text-blue-400 mb-8 opacity-50" />
              <blockquote className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                "I only list my business on platforms where my reputation is protected. CostaTrades gets it right."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-blue-400"></div>
                <div>
                  <p className="font-bold text-lg">Local Electrician</p>
                  <p className="text-blue-300">Marbella, Spain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-8">
            Hire with confidence
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <Link to="/search">
              <Button className="bg-[#E31E24] hover:bg-[#C41218] text-white px-12 py-8 text-xl rounded-full font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Find a Tradesperson
              </Button>
            </Link>
            
            <div className="pt-8 border-t border-slate-100 w-full max-w-md">
              <p className="text-slate-600 mb-4">Are you a professional who values your reputation?</p>
              <Link to="/join-as-tradesperson" className="text-blue-600 font-bold hover:underline text-lg">
                Join CostaTrades →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
