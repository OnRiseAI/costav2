import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  FileText,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

export default function PrivacyPolicy() {
  const lastUpdated = "November 2025";
  const companyName = "Onrisedigital LTD";
  const registeredOffice = "72 Shelton Street, London, WC2H 9JQ";
  const spanishOffice =
    "Ave de las Cumbres, Elviria Business Center, Office 4-6, 29604 Marbella, Málaga";
  const contactEmail = "hi@costatrades.com";

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-12 px-4 md:px-8">
      <SEO
        title="Privacy Policy | CostaTrades"
        description="How we collect, use, and protect your data. GDPR compliant."
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          description:
            "How we collect, use, and protect your data on CostaTrades. GDPR compliant.",
        }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button
              variant="ghost"
              className="pl-0 hover:bg-transparent text-slate-500 hover:text-slate-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-[#0a1f44] text-white p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4 text-blue-300">
              <Shield className="w-6 h-6" />
              <span className="text-sm font-medium uppercase tracking-wider">
                Legal Compliance
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-blue-100">Last Updated: {lastUpdated}</p>
          </div>

          <div className="p-8 md:p-12 space-y-10 text-slate-700 leading-relaxed">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1f44] mb-4 flex items-center gap-2">
                1. Introduction
              </h2>
              <p className="mb-4">
                <strong>{companyName}</strong> ("we", "us", "our") is committed
                to protecting your privacy and ensuring the security of your
                personal information. This policy explains how we collect, use,
                and safeguard data on <strong>CostaTrades.com</strong>.
              </p>
              <p>
                We operate as a marketplace connecting homeowners with
                tradespeople. By using our platform, you agree to the collection
                and use of information in accordance with this policy.
              </p>
            </section>

            {/* Data We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1f44] mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                2. Data We Collect
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-[#0a1f44] mb-3">
                    For Homeowners
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Full Name</li>
                    <li>Email Address & Phone Number</li>
                    <li>Job Details (Description, Photos)</li>
                    <li>Property Address (for the job location)</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-[#0a1f44] mb-3">
                    For Tradespeople
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Personal & Business Name</li>
                    <li>Contact Details (Email, Phone)</li>
                    <li>ID Documents (DNI/NIE/Passport)</li>
                    <li>Insurance Papers & Business Registration</li>
                    <li>Portfolio Images & Customer Reviews</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Data */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1f44] mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-600" />
                3. How We Use Your Data
              </h2>
              <p className="mb-4">
                We use the collected data for the following purposes:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></div>
                  <span>
                    <strong>Service Delivery:</strong> To connect homeowners
                    with relevant tradespeople and facilitate the quoting
                    process.
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></div>
                  <span>
                    <strong>Verification:</strong> To verify the identities and
                    credentials of tradespeople to prevent fraud and ensure
                    quality.
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></div>
                  <span>
                    <strong>Communication:</strong> To send service
                    notifications, job updates, and important alerts via Email
                    or WhatsApp.
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0"></div>
                  <span>
                    <strong>Improvement:</strong> To analyze platform usage and
                    improve our services and user experience.
                  </span>
                </li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1f44] mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-600" />
                4. Data Sharing
              </h2>
              <p className="mb-4">
                We respect your data privacy. We <strong>do not</strong> sell
                your personal data to third-party marketing lists.
              </p>
              <p className="mb-4">
                However, to provide our service, we must share certain
                information:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Homeowner Job Details:</strong> Shared with relevant
                  tradespeople so they can provide quotes. Contact details are
                  only shared when you explicitly allow it or request a quote.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose data if
                  required by law or to protect our rights and safety.
                </li>
              </ul>
            </section>

            {/* Your Rights (GDPR) */}
            <section>
              <h2 className="text-2xl font-bold text-[#0a1f44] mb-4 flex items-center gap-2">
                5. Your Rights (GDPR)
              </h2>
              <p className="mb-4">
                Under the General Data Protection Regulation (GDPR), you have
                the following rights:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <h3 className="font-bold text-[#0a1f44]">Right to Access</h3>
                  <p className="text-sm">
                    You can request a copy of the personal data we hold about
                    you.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <h3 className="font-bold text-[#0a1f44]">
                    Right to Rectification
                  </h3>
                  <p className="text-sm">
                    You can request correction of any inaccurate or incomplete
                    data.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <h3 className="font-bold text-[#0a1f44]">
                    Right to Erasure ("Right to be Forgotten")
                  </h3>
                  <p className="text-sm">
                    You can request that we delete your personal data, subject
                    to legal retention requirements.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Us */}
            <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-bold text-[#0a1f44] mb-6">
                Contact Us
              </h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy or wish to
                exercise your rights, please contact our Data Protection
                Officer.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <span className="block font-bold text-[#0a1f44]">
                      Email
                    </span>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="text-blue-600 hover:underline"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <span className="block font-bold text-[#0a1f44]">
                      Spanish Office
                    </span>
                    <span className="text-slate-600">{spanishOffice}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-slate-400 mt-1" />
                  <div>
                    <span className="block font-bold text-[#0a1f44]">
                      Registered Office (UK)
                    </span>
                    <span className="text-slate-600">{registeredOffice}</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
