import { Star, CheckCircle2, Languages } from "lucide-react";

export function TrustProtocol() {
  const items = [
    {
      icon: Star,
      text: "Community Rated",
      description: "Professionals rated by real homeowners like you.",
    },
    {
      icon: CheckCircle2,
      text: "Liability Insurance Checked",
      description: "Ensuring you are protected during the job.",
    },
    {
      icon: Languages,
      text: "Language Proficiency Tested",
      description: "Clear communication in English and Spanish.",
    },
  ];

  return (
    <div className="bg-slate-50 py-12 rounded-2xl border border-slate-100">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a1f44] mb-4">
            The CostaTrades Trust Protocol
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We take safety seriously. Here is how we vet our professionals.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 text-green-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#0a1f44] mb-2">{item.text}</h3>
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
