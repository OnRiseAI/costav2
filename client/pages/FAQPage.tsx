import { Button } from "@/components/ui/button";
import { Search, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "For Homeowners",
      questions: [
        {
          q: "Is CostaTrades free to use?",
          a: "Yes, CostaTrades is 100% free for homeowners. You can post jobs, receive quotes, and contact tradespeople without paying any fees."
        },
        {
          q: "How do I know the tradespeople are reliable?",
          a: "We prioritize accountability. Every tradesperson has a public profile with verified reviews from real customers, ensuring transparency and trust."
        },
        {
          q: "What areas do you cover?",
          a: "We cover the entire Costa del Sol, including Marbella, Estepona, Mijas, Fuengirola, Benalmadena, and Sotogrande."
        },
        {
          q: "Can I get a quote without posting a job?",
          a: "Yes. You can browse our directory and contact tradespeople directly via phone or WhatsApp to request a quote."
        }
      ]
    },
    {
      title: "For Tradespeople",
      questions: [
        {
          q: "How much does it cost to join?",
          a: "We offer a free trial period. After that, we have simple, transparent pricing with zero commission on jobs."
        },
        {
          q: "Do you take a commission on my earnings?",
          a: "No. You keep 100% of what you earn. We are a subscription-based directory, not a commission-based agency."
        },
        {
          q: "How do I get verified?",
          a: "Simply create your profile and complete the verification steps, which include confirming your identity and business details."
        }
      ]
    },
    {
      title: "Costs & Regulations",
      questions: [
        {
          q: "How much does a plumber cost in Marbella?",
          a: "The average call-out fee for a plumber in Marbella is approximately €150, though this varies by urgency and location."
        },
        {
          q: "Do I need a permit for renovation in Spain?",
          a: "Yes, most renovations require a 'Licencia de Obra' (Building Permit) from your local Town Hall (Ayuntamiento). Minor works need a 'Licencia de Obra Menor'."
        }
      ]
    }
  ];

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": categories.flatMap(cat => 
      cat.questions.map(q => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.a
        }
      }))
    )
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* 1. Hero Section */}
      <section className="bg-[#0a1f44] py-20 md:py-28 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
        <div className="container-custom max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            How can we help you?
          </h1>
          <p className="text-xl text-blue-100 mb-10 font-light max-w-2xl mx-auto">
            Find answers about hiring tradespeople, costs, and our verification process.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-500/30 shadow-xl text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 2. The "AEO Answer Bank" */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="space-y-12">
            {categories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#0a1f44] mb-6 border-b border-gray-100 pb-4">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((item, qIdx) => (
                    <details 
                      key={qIdx} 
                      className="group [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                        <h3 className="font-semibold text-lg text-[#0a1f44]">
                          {item.q}
                        </h3>
                        <ChevronDown className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-gray-500" />
                      </summary>
                      <div className="mt-4 px-4 leading-relaxed text-gray-600 text-lg">
                        <p>{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "Still have questions?" CTA */}
      <section className="py-20 bg-white text-center border-t border-gray-100">
        <div className="container-custom max-w-2xl">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <MessageCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Can't find what you're looking for? Message us on WhatsApp.
          </p>
          <a 
            href="https://wa.me/34123456789" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto">
              <MessageCircle className="w-5 h-5" />
              Chat with Support
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
