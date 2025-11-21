import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Plus,
  LogOut,
  MapPin,
  DollarSign,
  Clock,
  Briefcase,
  Star,
  MessageSquare,
  Heart,
  User,
  Bell,
  Settings,
  ChevronRight,
  Eye,
  FileText,
  CheckCircle2,
  XCircle,
  MessageCircle,
  Mail,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth, supabase } from "@/contexts/AuthContext";
import { Switch } from "@/components/ui/switch";
import { SEO } from "@/components/SEO";
import { TradespersonCard } from "@/components/TradespersonCard";
import { demoTradespeople } from "@/data/tradespeople";

const NOTIFICATION_PREFS_KEY = "costatrade.notificationPrefs";

interface NotificationPreferences {
  push: boolean;
  whatsapp: boolean;
  email: boolean;
}

// Mock data for demonstration
const mockJobs = [
  {
    id: "1",
    title: "Fix Leaky Tap in Marbella",
    description:
      "Kitchen tap is dripping constantly. Need a plumber to fix or replace it.",
    location: "Marbella",
    status: "open",
    created_at: "2 days ago",
    quotes_count: 3,
    views_count: 12,
    budget: "€100 - €200",
  },
  {
    id: "2",
    title: "Paint Living Room",
    description:
      "Need to paint a 30sqm living room. Walls and ceiling. White paint.",
    location: "Estepona",
    status: "in_progress",
    created_at: "1 week ago",
    quotes_count: 5,
    views_count: 24,
    budget: "€300 - €500",
  },
  {
    id: "3",
    title: "Install Ceiling Fan",
    description: "Installation of a new ceiling fan in the bedroom.",
    location: "Mijas",
    status: "completed",
    created_at: "1 month ago",
    quotes_count: 2,
    views_count: 8,
    budget: "€50 - €100",
  },
];

const mockQuotes = [
  {
    id: "q1",
    tradesperson: {
      name: "Juan Perez",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4.8,
      reviews: 24,
    },
    price: "€150",
    message:
      "Hi, I can come tomorrow at 10am. I have the tools and parts needed.",
    date: "Yesterday",
  },
  {
    id: "q2",
    tradesperson: {
      name: "David Smith",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4.9,
      reviews: 56,
    },
    price: "€120",
    message: "Available this weekend. Price includes basic parts.",
    date: "Today",
  },
  {
    id: "q3",
    tradesperson: {
      name: "Maria Garcia",
      photo: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 4.7,
      reviews: 12,
    },
    price: "€180",
    message:
      "I specialize in plumbing repairs. Can guarantee the work for 1 year.",
    date: "2 days ago",
  },
];

export function CustomerDashboard() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user, signOut, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("jobs");
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [showQuotes, setShowQuotes] = useState(false);

  const savedPros = demoTradespeople.slice(0, 6);

  // Notification settings state
  const [pushEnabled, setPushEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      const stored = window.localStorage.getItem(NOTIFICATION_PREFS_KEY);
      if (!stored) return true;
      const parsed = JSON.parse(stored) as NotificationPreferences;
      return parsed.push ?? true;
    } catch {
      return true;
    }
  });
  const [whatsappEnabled, setWhatsappEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      const stored = window.localStorage.getItem(NOTIFICATION_PREFS_KEY);
      if (!stored) return true;
      const parsed = JSON.parse(stored) as NotificationPreferences;
      return parsed.whatsapp ?? true;
    } catch {
      return true;
    }
  });
  const [emailEnabled, setEmailEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      const stored = window.localStorage.getItem(NOTIFICATION_PREFS_KEY);
      if (!stored) return false;
      const parsed = JSON.parse(stored) as NotificationPreferences;
      return parsed.email ?? false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    // In a real app, we would check auth here
    // if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (!tab) return;
    const allowedTabs = [
      "jobs",
      "messages",
      "profile",
      "notifications",
      "saved",
    ];
    if (allowedTabs.includes(tab)) {
      setActiveTab(tab);
      if (tab !== "jobs") {
        setShowQuotes(false);
      }
    }
  }, [searchParams]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            Open for Quotes
          </span>
        );
      case "in_progress":
        return (
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            In Progress
          </span>
        );
      case "completed":
        return (
          <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
            Completed
          </span>
        );
      default:
        return null;
    }
  };

  const renderSidebar = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-24">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {user?.email?.charAt(0).toUpperCase() || "U"}
          </div>
          <div>
            <h3 className="font-bold text-[#0a1f44]">My Account</h3>
            <p className="text-xs text-slate-500 truncate max-w-[120px]">
              {user?.email || "user@example.com"}
            </p>
          </div>
        </div>
      </div>
      <nav className="p-4 space-y-1">
        <button
          onClick={() => {
            setActiveTab("jobs");
            setShowQuotes(false);
          }}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === "jobs" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}
        >
          <Briefcase className="w-5 h-5" />
          My Jobs
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === "messages" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}
        >
          <MessageSquare className="w-5 h-5" />
          Messages
        </button>
        <button
          onClick={() => setActiveTab("saved")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === "saved" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}
        >
          <Heart className="w-5 h-5" />
          Saved Pros
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === "profile" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}
        >
          <User className="w-5 h-5" />
          Profile
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === "notifications" ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50"}`}
        >
          <Bell className="w-5 h-5" />
          Notifications
        </button>
      </nav>
      <div className="p-4 border-t border-slate-100 mt-4">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );

  const renderJobsList = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#0a1f44]">Active Projects</h2>
        <Button
          onClick={() => navigate("/post-job")}
          className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
        >
          <Plus className="w-4 h-4" /> Post a Job
        </Button>
      </div>

      {mockJobs.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
            <Briefcase className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-[#0a1f44] mb-2">No jobs yet</h3>
          <p className="text-slate-500 mb-6">
            Post your first job to get quotes from verified tradespeople.
          </p>
          <Button
            onClick={() => navigate("/post-job")}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Post a Job Now
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {mockJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {getStatusBadge(job.status)}
                    <span className="text-xs text-slate-400 font-medium">
                      {job.created_at}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1f44] mb-1">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center px-4 py-2 bg-slate-50 rounded-lg">
                    <div className="text-lg font-bold text-[#0a1f44]">
                      {job.quotes_count}
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">
                      Quotes
                    </div>
                  </div>
                  <div className="text-center px-4 py-2 bg-slate-50 rounded-lg">
                    <div className="text-lg font-bold text-[#0a1f44]">
                      {job.views_count}
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">
                      Views
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-4">
                <div className="text-sm font-medium text-slate-600">
                  Budget: <span className="text-[#0a1f44]">{job.budget}</span>
                </div>
                <Button
                  onClick={() => {
                    setSelectedJob(job.id);
                    setShowQuotes(true);
                  }}
                  className="bg-white border border-slate-200 text-[#0a1f44] hover:bg-slate-50 hover:border-slate-300"
                >
                  View Quotes <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderQuotesDetail = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setShowQuotes(false)}
          className="text-slate-400 hover:text-[#0a1f44] transition-colors"
        >
          My Jobs
        </button>
        <ChevronRight className="w-4 h-4 text-slate-300" />
        <span className="font-semibold text-[#0a1f44]">
          Quotes for "Fix Leaky Tap"
        </span>
      </div>

      <div className="grid gap-6">
        {mockQuotes.map((quote) => (
          <div
            key={quote.id}
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Tradesperson Info */}
              <div className="flex items-start gap-4 min-w-[200px]">
                <img
                  src={quote.tradesperson.photo}
                  alt={quote.tradesperson.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-[#0a1f44]">
                    {quote.tradesperson.name}
                  </h4>
                  <div className="flex items-center gap-1 text-sm text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold">
                      {quote.tradesperson.rating}
                    </span>
                    <span className="text-slate-400 font-normal">
                      ({quote.tradesperson.reviews})
                    </span>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> Verified
                  </div>
                </div>
              </div>

              {/* Quote Details */}
              <div className="flex-1 border-l border-slate-100 pl-0 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-2xl font-bold text-[#0a1f44]">
                    {quote.price}{" "}
                    <span className="text-sm font-normal text-slate-500">
                      (Estimated)
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">{quote.date}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 bg-slate-50 p-3 rounded-lg">
                  "{quote.message}"
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-green-600 hover:bg-green-700 text-white flex-1 md:flex-none">
                    Accept Quote
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 md:flex-none gap-2"
                  >
                    <MessageCircle className="w-4 h-4" /> Message
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-slate-400 hover:text-red-600 hover:bg-red-50 flex-1 md:flex-none"
                  >
                    Decline
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSavedPros = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#0a1f44]">Saved Pros</h2>
        <p className="text-sm text-slate-500">
          Quickly rehire tradespeople you trust.
        </p>
      </div>

      {savedPros.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-[#0a1f44] mb-2">
            No saved pros yet
          </h3>
          <p className="text-slate-500 mb-6">
            Save tradespeople from your quotes or search results to find them
            again quickly.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {savedPros.map((pro) => (
            <TradespersonCard key={pro.slug} {...pro} />
          ))}
        </div>
      )}
    </div>
  );

  const renderNotifications = () => (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold text-[#0a1f44] mb-2">Stay Updated</h2>
      <p className="text-slate-500 mb-8">
        Manage how you receive updates about your jobs and quotes.
      </p>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm divide-y divide-slate-100">
        <div className="p-6 flex items-center justify-between">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-[#0a1f44]">Push Notifications</h3>
              <p className="text-sm text-slate-500">
                Get instant alerts on your device when you get a quote.
              </p>
            </div>
          </div>
          <Switch checked={pushEnabled} onCheckedChange={setPushEnabled} />
        </div>

        <div className="p-6 flex items-center justify-between">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-[#0a1f44]">WhatsApp Alerts</h3>
              <p className="text-sm text-slate-500">
                Receive quotes and messages directly to WhatsApp.
              </p>
            </div>
          </div>
          <Switch
            checked={whatsappEnabled}
            onCheckedChange={setWhatsappEnabled}
          />
        </div>

        <div className="p-6 flex items-center justify-between">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-[#0a1f44]">Email Summaries</h3>
              <p className="text-sm text-slate-500">
                Receive a daily digest of activity on your account.
              </p>
            </div>
          </div>
          <Switch checked={emailEnabled} onCheckedChange={setEmailEnabled} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <SEO
        title="My Dashboard | CostaTrades"
        description="Manage your active jobs, view quotes, and chat with tradespeople."
      />
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-slate-200 p-4 sticky top-0 z-30 flex justify-between items-center">
        <h1 className="font-bold text-lg text-[#0a1f44]">Dashboard</h1>
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {user?.email?.charAt(0).toUpperCase() || "U"}
        </div>
      </div>

      <div className="container-custom py-8 lg:py-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">{renderSidebar()}</div>

          {/* Main Content */}
          <div className="min-h-[500px]">
            {activeTab === "jobs" && !showQuotes && renderJobsList()}
            {activeTab === "jobs" && showQuotes && renderQuotesDetail()}
            {activeTab === "saved" && renderSavedPros()}
            {activeTab === "notifications" && renderNotifications()}
            {activeTab === "messages" && (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#0a1f44]">Messages</h3>
                <p className="text-slate-500">
                  Select a quote to start messaging a tradesperson.
                </p>
              </div>
            )}
            {activeTab === "profile" && (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
                <User className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#0a1f44]">
                  Profile Settings
                </h3>
                <p className="text-slate-500">
                  Profile management coming soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-2 z-30 flex justify-around">
        <button
          onClick={() => {
            setActiveTab("jobs");
            setShowQuotes(false);
          }}
          className={`flex flex-col items-center p-2 rounded-lg ${activeTab === "jobs" ? "text-blue-600" : "text-slate-400"}`}
        >
          <Briefcase className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Jobs</span>
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className={`flex flex-col items-center p-2 rounded-lg ${activeTab === "messages" ? "text-blue-600" : "text-slate-400"}`}
        >
          <MessageSquare className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Chat</span>
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          className={`flex flex-col items-center p-2 rounded-lg ${activeTab === "notifications" ? "text-blue-600" : "text-slate-400"}`}
        >
          <Bell className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Alerts</span>
        </button>
        <button
          onClick={() => setActiveTab("saved")}
          className={`flex flex-col items-center p-2 rounded-lg ${activeTab === "saved" ? "text-blue-600" : "text-slate-400"}`}
        >
          <Heart className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Saved</span>
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex flex-col items-center p-2 rounded-lg ${activeTab === "profile" ? "text-blue-600" : "text-slate-400"}`}
        >
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
}
