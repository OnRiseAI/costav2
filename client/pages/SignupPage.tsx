import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  Briefcase,
  AlertCircle,
  Bell,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/contexts/AuthContext";
import { SEO } from "@/components/SEO";

export default function SignupPage() {
  const navigate = useNavigate();
  const { signUp, loading } = useAuth();

  const [step, setStep] = useState<1 | 2>(1);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
    user_type: "customer", // customer or tradesperson
    phone: "",
    business_name: "",
    trade_category: "",
  });

  const [notificationPrefs, setNotificationPrefs] = useState({
    push: true,
    whatsapp: true,
    email: false,
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Validation
    if (!formData.full_name || !formData.email || !formData.password) {
      setError("Please fill in all required fields");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setIsLoading(false);
      return;
    }

    if (formData.user_type === "tradesperson" && !formData.trade_category) {
      setError("Please select a trade category");
      setIsLoading(false);
      return;
    }

    const { error: signupError } = await signUp(
      formData.email,
      formData.password,
      {
        full_name: formData.full_name,
        phone: formData.phone,
        user_type: formData.user_type,
        business_name: formData.business_name,
        trade_category: formData.trade_category,
      },
    );

    if (signupError) {
      setError(signupError.message || "Failed to sign up");
      setIsLoading(false);
    } else {
      navigate("/customer-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-600 to-primary-700 flex items-center justify-center p-4">
      <SEO
        title="Create an Account | CostaTrades"
        description="Join CostaTrades as a homeowner or tradesperson."
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Sign Up",
          description:
            "Create a CostaTrades account as a homeowner or tradesperson to access the platform.",
        }}
      />
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Join CostaTrade
            </h1>
            <p className="text-muted-foreground">
              Create your account to get started
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* User Type Selection */}
            <div className="flex gap-3 mb-6">
              <label className="flex-1 relative">
                <input
                  type="radio"
                  name="user_type"
                  value="customer"
                  checked={formData.user_type === "customer"}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.user_type === "customer"
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-primary/50"
                  }`}
                >
                  <User className="h-5 w-5 mb-2 text-primary" />
                  <p className="font-semibold text-sm">Customer</p>
                  <p className="text-xs text-muted-foreground">Find services</p>
                </div>
              </label>
              <label className="flex-1 relative">
                <input
                  type="radio"
                  name="user_type"
                  value="tradesperson"
                  checked={formData.user_type === "tradesperson"}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.user_type === "tradesperson"
                      ? "border-primary bg-primary/5"
                      : "border-gray-200 hover:border-primary/50"
                  }`}
                >
                  <Briefcase className="h-5 w-5 mb-2 text-primary" />
                  <p className="font-semibold text-sm">Tradesperson</p>
                  <p className="text-xs text-muted-foreground">
                    Offer services
                  </p>
                </div>
              </label>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Smith"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+34 950 123 456"
              />
            </div>

            {/* Tradesperson Fields */}
            {formData.user_type === "tradesperson" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Smith Plumbing Services"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Trade Category *
                  </label>
                  <select
                    name="trade_category"
                    value={formData.trade_category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a trade</option>
                    <option value="plumbers">Plumbers</option>
                    <option value="electricians">Electricians</option>
                    <option value="builders">Builders & Renovations</option>
                    <option value="painters">Painters & Decorators</option>
                    <option value="pool-maintenance">Pool Maintenance</option>
                    <option value="air-conditioning">Air Conditioning</option>
                    <option value="locksmiths">Locksmiths</option>
                    <option value="gardeners">Gardeners</option>
                  </select>
                </div>
              </>
            )}

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter password"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Confirm Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                <input
                  type="password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading || loading}
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg font-semibold"
            >
              {isLoading || loading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          {/* Terms */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            By signing up, you agree to our{" "}
            <Link to="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and <span className="text-primary">Privacy Policy</span>
          </p>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
