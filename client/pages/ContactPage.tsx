import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, ArrowRight, HelpCircle, ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#0a1f44] selection:text-white">
      {/* Hero Section */}
      <section className="relative bg-[#0a1f44] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-xs font-medium tracking-wider uppercase text-blue-100">Official Contact Channel</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight font-serif">
            Get in touch
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 font-light max-w-2xl mx-auto leading-relaxed">
            We are here to serve residents and homeowners across the Costa del Sol with excellence and integrity.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 -mt-20 relative z-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Email Card */}
            <div className="group bg-white rounded-xl shadow-xl shadow-blue-900/5 border border-gray-100 p-8 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0a1f44] transition-colors duration-300">
                <Mail className="w-7 h-7 text-[#0a1f44] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-2 font-serif">Email Us</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                For general inquiries and official correspondence
              </p>
              <a
                href="mailto:hi@costatrades.com"
                className="inline-flex items-center justify-center text-[#0a1f44] font-semibold hover:text-blue-600 transition-colors text-lg border-b-2 border-transparent hover:border-blue-600 pb-0.5"
              >
                hi@costatrades.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="group bg-white rounded-xl shadow-xl shadow-blue-900/5 border border-gray-100 p-8 text-center hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0a1f44] transition-colors duration-300">
                <Phone className="w-7 h-7 text-[#0a1f44] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-2 font-serif">Call Us</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Available Mon-Fri from 9am to 6pm CET
              </p>
              <a
                href="tel:+34604288426"
                className="inline-flex items-center justify-center text-[#0a1f44] font-semibold hover:text-blue-600 transition-colors text-lg border-b-2 border-transparent hover:border-blue-600 pb-0.5"
              >
                +34 604 288 426
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="group bg-white rounded-xl shadow-xl shadow-blue-900/5 border border-green-100 p-8 text-center hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Fastest Response
              </div>
              <div className="w-16 h-16 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                <MessageCircle className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44] mb-2 font-serif">
                WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6 text-sm">
                Direct line to our support team
              </p>
              <Button
                asChild
                className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20 rounded-full h-12 font-medium tracking-wide"
              >
                <a
                  href="https://wa.me/34604288426"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Redirection */}
      <section className="py-12">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 md:p-10 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex w-14 h-14 bg-[#0a1f44] rounded-full items-center justify-center flex-shrink-0 text-white shadow-lg shadow-blue-900/20">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0a1f44] mb-2 font-serif">
                  Have a quick question?
                </h2>
                <p className="text-muted-foreground text-lg font-light">
                  Our comprehensive FAQ section may have the immediate answer you need.
                </p>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#0a1f44] text-[#0a1f44] hover:bg-[#0a1f44] hover:text-white rounded-full px-8 h-12 font-medium transition-all duration-300"
            >
              <Link to="/about">Visit FAQ Page</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3 block">Contact Form</span>
            <h2 className="text-4xl font-bold text-[#0a1f44] mb-6 font-serif">
              Send us a message
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground font-light">
              Please fill out the form below. Our team is committed to responding to all inquiries within 24 hours.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl shadow-gray-200/50 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm font-semibold text-[#0a1f44] uppercase tracking-wide">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-14 bg-gray-50 border-gray-200 focus:border-[#0a1f44] focus:ring-[#0a1f44]/10 rounded-lg transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-semibold text-[#0a1f44] uppercase tracking-wide">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-14 bg-gray-50 border-gray-200 focus:border-[#0a1f44] focus:ring-[#0a1f44]/10 rounded-lg transition-all"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="subject" className="text-sm font-semibold text-[#0a1f44] uppercase tracking-wide">Subject</Label>
                <div className="relative">
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="flex h-14 w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:border-[#0a1f44] focus:ring-4 focus:ring-[#0a1f44]/5 disabled:cursor-not-allowed disabled:opacity-50 appearance-none transition-all"
                    required
                  >
                    <option value="" disabled>
                      Select the nature of your inquiry
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-sm font-semibold text-[#0a1f44] uppercase tracking-wide">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we assist you today?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="min-h-[180px] resize-none bg-gray-50 border-gray-200 focus:border-[#0a1f44] focus:ring-[#0a1f44]/10 rounded-lg p-4 transition-all"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white h-14 text-lg font-bold tracking-wide rounded-lg shadow-lg shadow-blue-900/20 transition-all hover:shadow-xl hover:-translate-y-0.5"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
                {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
