import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle, ArrowRight, HelpCircle, ChevronDown } from "lucide-react";
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
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 md:py-24">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
            Get in touch with us
          </h1>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            We are here to help residents and homeowners on the Costa del Sol.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center flex flex-col items-center h-full">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-6">
                  For general inquiries and support
                </p>
                <a
                  href="mailto:hi@costatrades.com"
                  className="text-blue-600 font-semibold hover:underline mt-auto text-lg"
                >
                  hi@costatrades.com
                </a>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center flex flex-col items-center h-full">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-6">
                  Mon-Fri from 9am to 6pm
                </p>
                <a
                  href="tel:+34604288426"
                  className="text-blue-600 font-semibold hover:underline mt-auto text-lg"
                >
                  +34 604 288 426
                </a>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ring-2 ring-green-500/10">
              <CardContent className="p-8 text-center flex flex-col items-center h-full">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-2">
                  Chat on WhatsApp
                </h3>
                <p className="text-green-600 font-medium mb-6">Fastest response</p>
                <Button
                  asChild
                  className="mt-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white w-full"
                >
                  <a
                    href="https://wa.me/34604288426"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Redirection */}
      <section className="py-16 bg-blue-50/50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex w-16 h-16 bg-blue-100 rounded-full items-center justify-center flex-shrink-0 text-blue-600">
                <HelpCircle className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0a1f44] mb-2">
                  Have a quick question?
                </h2>
                <p className="text-muted-foreground text-lg">
                  You might find the answer you need instantly in our Frequently
                  Asked Questions.
                </p>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-blue-200 text-blue-700 hover:bg-blue-50 whitespace-nowrap"
            >
              <Link to="/about">Visit FAQ Page</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1f44] mb-4">
              Send us a message
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <div className="relative">
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                  required
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="min-h-[150px] resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white h-12 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
