import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  LogOut,
  MapPin,
  DollarSign,
  Clock,
  Briefcase,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth, supabase } from "@/contexts/AuthContext";

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  city: string;
  trade_category: string;
  budget_min: number;
  budget_max: number;
  status: string;
  created_at: string;
}

interface UserProfile {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  profile_picture_url: string;
}

export function CustomerDashboard() {
  const navigate = useNavigate();
  const { user, signOut, isAuthenticated } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    fetchProfile();
    fetchJobs();
  }, [isAuthenticated, user]);

  const fetchProfile = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error) {
      console.error("Error fetching profile:", error);
      return;
    }

    setProfile(data);
  };

  const fetchJobs = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .eq("customer_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching jobs:", error);
      setLoading(false);
      return;
    }

    setJobs(data || []);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800";
      case "in_progress":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Customer Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage your jobs and find tradespeople
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigate("/post-job")}
                className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
              >
                <Plus className="h-5 w-5" />
                Post a Job
              </Button>
              <Button
                onClick={handleSignOut}
                variant="outline"
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                  {profile?.full_name?.charAt(0).toUpperCase() || "U"}
                </div>
                <h3 className="font-bold text-lg">
                  {profile?.full_name || "User"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {profile?.email}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Total Jobs
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {jobs.length}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Active Jobs
                  </p>
                  <p className="text-2xl font-bold text-accent">
                    {jobs.filter((j) => j.status === "open").length}
                  </p>
                </div>
              </div>

              <Button
                onClick={() => navigate("/edit-profile")}
                variant="outline"
                className="w-full mt-6"
              >
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-primary">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Open Jobs
                      </p>
                      <p className="text-3xl font-bold">
                        {jobs.filter((j) => j.status === "open").length}
                      </p>
                    </div>
                    <Briefcase className="h-8 w-8 text-primary opacity-20" />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-accent">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        In Progress
                      </p>
                      <p className="text-3xl font-bold">
                        {jobs.filter((j) => j.status === "in_progress").length}
                      </p>
                    </div>
                    <Clock className="h-8 w-8 text-accent opacity-20" />
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-green-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Completed
                      </p>
                      <p className="text-3xl font-bold">
                        {jobs.filter((j) => j.status === "completed").length}
                      </p>
                    </div>
                    <Star className="h-8 w-8 text-green-500 opacity-20" />
                  </div>
                </div>
              </div>

              {/* Jobs List */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Your Jobs</h2>

                {loading ? (
                  <div className="bg-white rounded-lg p-12 text-center">
                    <p className="text-muted-foreground">Loading jobs...</p>
                  </div>
                ) : jobs.length === 0 ? (
                  <div className="bg-white rounded-lg p-12 text-center">
                    <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <h3 className="font-semibold text-lg mb-2">No jobs yet</h3>
                    <p className="text-muted-foreground mb-6">
                      Post your first job to get quotes from verified
                      tradespeople
                    </p>
                    <Button
                      onClick={() => navigate("/post-job")}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Post a Job
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {jobs.map((job) => (
                      <div
                        key={job.id}
                        className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-foreground mb-1">
                              {job.title}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-2">
                              {job.description}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusColor(
                              job.status,
                            )}`}
                          >
                            {job.status.replace("_", " ").toUpperCase()}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{job.city}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-semibold">
                              €{job.budget_min} - €{job.budget_max}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">
                              {job.trade_category}
                            </span>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/job/${job.id}`)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
