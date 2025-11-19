import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TradespersonProgress } from "@/components/TradespersonProgress";
import {
  Wrench,
  User,
  Building2,
  Mail,
  Phone,
  MapPin,
  Info,
  ListChecks,
  FileText,
  Languages,
  ArrowLeft,
} from "lucide-react";

const APPLICATION_STORAGE_KEY = "costatrade.tradespersonApplication";

type TradespersonApplication = {
  tradeSlug?: string;
  tradeLabel?: string;
  businessName?: string;
  postcode?: string;
  selectedAreas?: string[];
  businessType?: string;
  employeeRange?: string;
  firstName?: string;
  lastName?: string;
  businessEmail?: string;
  businessPhone?: string;
  mobilePhone?: string;
  aboutBusiness?: string;
  services?: string[];
  documents?: string[];
  pricingInfo?: string;
  languages?: string[];
};

function formatList(values?: string[]): string {
  if (!values || values.length === 0) {
    return "Not provided";
  }
  return values.join(", ");
}

function formatValue(value?: string): string {
  return value && value.trim() ? value : "Not provided";
}

export default function TradespersonReview() {
  const navigate = useNavigate();
  const [application, setApplication] = useState<TradespersonApplication | null>(
    null,
  );
  const [error, setError] = useState<string>("");

  useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem(APPLICATION_STORAGE_KEY);
      if (!stored) {
        setError("We could not find your application details. Please go back and enter your information again.");
        return;
      }
      const parsed = JSON.parse(stored) as TradespersonApplication;
      setApplication(parsed);
    } catch {
      setError("Something went wrong loading your details. Please try again.");
    }
  }, []);

  const handleSubmit = () => {
    setError("");

    if (!application) {
      setError("Your application details are missing. Please go back and try again.");
      return;
    }

    if (
      !application.tradeLabel ||
      !application.businessName ||
      !application.postcode ||
      !application.firstName ||
      !application.lastName ||
      !application.businessEmail ||
      !application.businessPhone
    ) {
      setError("Some required information is missing. Please edit your details before submitting.");
      return;
    }

    navigate("/tradesperson/submitted");
  };

  const handleEditTrade = () => {
    navigate("/join-as-tradesperson");
  };

  const handleEditBusiness = () => {
    const tradeQuery = application?.tradeSlug
      ? `?trade=${encodeURIComponent(application.tradeSlug)}`
      : "";
    navigate(`/tradesperson/details${tradeQuery}`);
  };

  const handleBack = () => {
    handleEditBusiness();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TradespersonProgress currentStep={3} />

      <div className="container-custom py-8 md:py-10 max-w-5xl">
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Review your details
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl">
          Check everything is correct before sending your application.
        </p>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2 mb-10">
          <Card className="rounded-2xl border-gray-200 bg-white shadow-sm">
            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Wrench className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-sm md:text-base">Trade chosen</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {formatValue(application?.tradeLabel)}
                </p>
              </div>
              <button
                type="button"
                onClick={handleEditTrade}
                className="text-xs font-medium text-primary hover:text-primary/80"
              >
                Edit
              </button>
            </div>
          </Card>

          <Card className="rounded-2xl border-gray-200 bg-white shadow-sm">
            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-sm md:text-base">Full name</h2>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>First name: {formatValue(application?.firstName)}</li>
                  <li>Surname: {formatValue(application?.lastName)}</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={handleEditBusiness}
                className="text-xs font-medium text-primary hover:text-primary/80"
              >
                Edit
              </button>
            </div>
          </Card>

          <Card className="rounded-2xl border-gray-200 bg-white shadow-sm">
            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-sm md:text-base">Business details</h2>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Business name: {formatValue(application?.businessName)}</li>
                  <li>Business type: {formatValue(application?.businessType)}</li>
                  <li>Employees: {formatValue(application?.employeeRange)}</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={handleEditBusiness}
                className="text-xs font-medium text-primary hover:text-primary/80"
              >
                Edit
              </button>
            </div>
          </Card>

          <Card className="rounded-2xl border-gray-200 bg-white shadow-sm">
            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-sm md:text-base">Contact details</h2>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Email: {formatValue(application?.businessEmail)}</li>
                  <li>Business phone: {formatValue(application?.businessPhone)}</li>
                  <li>
                    Mobile phone: {formatValue(application?.mobilePhone || "Not provided")}
                  </li>
                </ul>
              </div>
              <button
                type="button"
                onClick={handleEditBusiness}
                className="text-xs font-medium text-primary hover:text-primary/80"
              >
                Edit
              </button>
            </div>
          </Card>

          <Card className="rounded-2xl border-gray-200 bg-white shadow-sm">
            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-sm md:text-base">Service areas / postcode</h2>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Postcode: {formatValue(application?.postcode)}</li>
                  <li>Areas: {formatList(application?.selectedAreas)}</li>
                </ul>
              </div>
              <button
                type="button"
                onClick={handleEditBusiness}
                className="text-xs font-medium text-primary hover:text-primary/80"
              >
                Edit
              </button>
            </div>
          </Card>

          <Card className="rounded-2xl border-gray-200 bg-white shadow-sm">
            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Info className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-sm md:text-base">About your business</h2>
                </div>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {formatValue(application?.aboutBusiness)}
                </p>
              </div>
              <button
                type="button"
                onClick={handleEditBusiness}
                className="text-xs font-medium text-primary hover:text-primary/80"
              >
                Edit
              </button>
            </div>
          </Card>

          <Card className="rounded-2xl border-gray-200 bg-white shadow-sm">
            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ListChecks className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-sm md:text-base">Selected services / categories</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {formatList(application?.services)}
                </p>
              </div>
              <button
                type="button"
                onClick={handleEditBusiness}
                className="text-xs font-medium text-primary hover:text-primary/80"
              >
                Edit
              </button>
            </div>
          </Card>

          <Card className="rounded-2xl border-gray-200 bg-white shadow-sm">
            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-sm md:text-base">Documents / images</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {formatList(application?.documents)}
                </p>
              </div>
              <button
                type="button"
                onClick={handleEditBusiness}
                className="text-xs font-medium text-primary hover:text-primary/80"
              >
                Edit
              </button>
            </div>
          </Card>

          <Card className="rounded-2xl border-gray-200 bg-white shadow-sm">
            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-sm md:text-base">Pricing information</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {formatValue(application?.pricingInfo)}
                </p>
              </div>
              <button
                type="button"
                onClick={handleEditBusiness}
                className="text-xs font-medium text-primary hover:text-primary/80"
              >
                Edit
              </button>
            </div>
          </Card>

          <Card className="rounded-2xl border-gray-200 bg-white shadow-sm">
            <div className="p-5 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Languages className="h-4 w-4 text-primary" />
                  <h2 className="font-semibold text-sm md:text-base">Languages spoken</h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {formatList(application?.languages)}
                </p>
              </div>
              <button
                type="button"
                onClick={handleEditBusiness}
                className="text-xs font-medium text-primary hover:text-primary/80"
              >
                Edit
              </button>
            </div>
          </Card>
        </div>

        <section className="max-w-2xl">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Ready to send your application
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-4">
            Once submitted, our team will review your information and activate your profile.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              type="button"
              className="bg-[#0a1f44] hover:bg-[#0a1f44]/90 text-white rounded-full px-7 py-3 text-sm md:text-base font-semibold"
              onClick={handleSubmit}
            >
              Submit for approval
            </Button>
            <Button
              type="button"
              variant="outline"
              className="rounded-full px-7 py-3 text-sm md:text-base"
              onClick={handleBack}
            >
              Go back
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
