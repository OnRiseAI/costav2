import { ChevronDown } from "lucide-react";

export const faqData = [
  {
    question: "Do I need a license for renovations in Marbella?",
    answer:
      "Yes, for most renovations you will need a license. For minor works ('Obra Menor') like painting or tiling, a simple declaration is often enough. For major structural changes ('Obra Mayor'), you need a full project license approved by the Town Hall.",
  },
  {
    question: "How much do British builders charge in Spain?",
    answer:
      "Rates vary by trade and location. Generally, you can expect to pay between €20-€35 per hour for general labor, and €40-€70+ per hour for specialized trades like electricians or plumbers. Always get a written quote.",
  },
  {
    question: "Are tradespeople regulated in Andalusia?",
    answer:
      "Yes. Legitimate tradespeople must be registered as 'Autónomo' or a limited company (S.L.), have a fiscal number (NIF/CIF), and carry liability insurance. CostaTrades verifies these documents for our 'Verified' professionals.",
  },
  {
    question: "Is this service free for homeowners?",
    answer: "Yes, 100% free to search and request quotes.",
  },
  {
    question: "Do the tradespeople speak English?",
    answer:
      "We highlight languages on every profile so you know who speaks English, German, or Spanish.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "From Sotogrande to Nerja, including Marbella, Mijas, and Malaga.",
  },
];

export function FAQSection() {
  return (
    <div className="bg-white py-16">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600">
            Common questions about hiring tradespeople on the Costa del Sol.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details
              key={index}
              className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white open:shadow-sm transition-all duration-200"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-[#0a1f44] list-none select-none">
                {faq.question}
                <ChevronDown className="w-5 h-5 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
