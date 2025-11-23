import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import {
  ArrowRight,
  Clock,
  Calendar,
  ChevronRight,
  Sparkles,
  Search,
} from "lucide-react";

// Mock data for the blog
const featuredPost = {
  id: 1,
  title: "The Ultimate Guide to Renovation Permits in Andalucia (2025)",
  excerpt:
    "Navigating the complex world of 'Licencia de Obra' can be daunting. This comprehensive guide breaks down everything you need to know about major and minor permits, costs, and timelines.",
  image:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop",
  category: "Legal/Permits",
  readTime: "8 min read",
  slug: "renovation-permits-andalucia-2025",
};

const categories = [
  "All",
  "Renovation",
  "Maintenance",
  "Legal/Permits",
  "Cost Guides",
];

const recentPosts = [
  {
    id: 1,
    title: "Costa del Sol Water Update 2025: Can I Finally Fill My Pool?",
    excerpt:
      "Good news! As of May 2025, the Junta de Andalucía has lifted the ban on filling private pools. However, with limits set at 250 litres/day, wasting water is still a crime.",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2940&auto=format&fit=crop",
    category: "Maintenance",
    readTime: "5 min read",
    slug: "pool-water-update-2025",
  },
  {
    id: 2,
    title: "New Rental Laws April 2025: Can Your Neighbors Ban Your Airbnb?",
    excerpt:
      "The new Horizontal Property Law reform allows Community of Owners to vote on banning holiday rentals with a 3/5ths majority.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2940&auto=format&fit=crop",
    category: "Legal/Permits",
    readTime: "6 min read",
    slug: "new-rental-laws-2025",
  },
  {
    id: 3,
    title: "Why Renovating an Older Villa is the Smartest Investment in 2025",
    excerpt:
      "With new build supply limited and prices in the 'Golden Triangle' rising by 12%, buying older stock in prime locations is the new strategy.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
    category: "Renovation",
    readTime: "7 min read",
    slug: "renovating-older-villa-2025",
  },
  {
    id: 4,
    title: "The Silent Boiler Killer: Dealing with Malaga's Hard Water",
    excerpt:
      "Malaga has some of the highest calcium levels in Europe. We are seeing boilers fail after just 2 years. Here is how to protect your home.",
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2940&auto=format&fit=crop",
    category: "Maintenance",
    readTime: "4 min read",
    slug: "malaga-hard-water-boiler",
  },
  {
    id: 5,
    title: "Cleaning Up After the Calima: Don't Ruin Your Facade",
    excerpt:
      "Another dust storm from the Sahara has turned the Costa orange. Here is how to clean it correctly without damaging your paintwork.",
    image:
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2940&auto=format&fit=crop",
    category: "Maintenance",
    readTime: "3 min read",
    slug: "cleaning-calima-dust",
  },
  {
    id: 6,
    title: "Protecting Your Holiday Home from 'Okupas' (Squatters) in 2025",
    excerpt:
      "With the new housing laws, non-resident owners are worried. Prevention is cheaper than eviction. Learn about anti-bumping locks and alarms.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2940&auto=format&fit=crop",
    category: "Legal/Permits",
    readTime: "6 min read",
    slug: "protecting-home-squatters-2025",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 px-4 text-center overflow-hidden bg-[#0a1f44] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f44] via-[#0f2952] to-[#0a1f44]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="container-custom max-w-4xl relative z-10 mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium tracking-wide uppercase text-blue-100/90">
              Costa del Sol Living
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
            Expert Advice for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Homeowners
            </span>
          </h1>
          <p className="text-xl text-blue-100/80 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            Your trusted resource for renovations, maintenance, legal updates,
            and local insights in Southern Spain.
          </p>

          {/* Search bar placeholder for future */}
          <div className="max-w-md mx-auto relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-2 flex items-center">
              <Search className="w-5 h-5 text-blue-200 ml-3" />
              <input
                type="text"
                placeholder="Search articles..."
                className="bg-transparent border-none text-white placeholder:text-blue-200/50 focus:ring-0 w-full px-3 py-1.5 outline-none"
              />
              <Button
                size="sm"
                className="rounded-full bg-blue-500 hover:bg-blue-400 text-white border-none"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-20">
        {/* Featured Article */}
        <Link to={`/blog/${featuredPost.slug}`} className="block group mb-20">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-white/50 overflow-hidden grid lg:grid-cols-2 gap-0 hover:shadow-blue-900/20 transition-all duration-500 transform hover:-translate-y-1">
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md text-[#0a1f44] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                Must Read
              </div>
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:hidden"></div>
            </div>
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Sparkles className="w-40 h-40 text-blue-600" />
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-500 mb-6 font-medium">
                <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {featuredPost.category}
                </span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-6 leading-[1.1] group-hover:text-blue-700 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-blue-600 font-bold text-lg group-hover:translate-x-2 transition-transform duration-300">
                Read Article <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </div>
        </Link>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  idx === 0
                    ? "bg-[#0a1f44] text-white shadow-lg shadow-blue-900/20 ring-4 ring-blue-500/10"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {recentPosts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              className="group flex flex-col bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#0a1f44] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Nov 15, 2025
                  </span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm font-bold text-blue-600 mt-auto pt-6 border-t border-slate-50 group-hover:border-blue-50 transition-colors">
                  Read More{" "}
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button
            variant="outline"
            size="lg"
            className="px-10 py-6 rounded-full border-slate-200 text-slate-600 hover:text-[#0a1f44] hover:border-[#0a1f44] hover:bg-white text-lg font-medium transition-all duration-300"
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}
