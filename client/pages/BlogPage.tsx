import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar, User, ChevronRight, Tag } from "lucide-react";

// Mock data for the blog
const featuredPost = {
  id: 1,
  title: "The Ultimate Guide to Renovation Permits in Andalucia (2025)",
  excerpt: "Navigating the complex world of 'Licencia de Obra' can be daunting. This comprehensive guide breaks down everything you need to know about major and minor permits, costs, and timelines.",
  image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop",
  category: "Legal/Permits",
  readTime: "8 min read",
  slug: "renovation-permits-andalucia-2025"
};

const categories = [
  "All", "Renovation", "Maintenance", "Legal/Permits", "Cost Guides"
];

const recentPosts = [
  {
    id: 2,
    title: "How Much Does a Kitchen Renovation Cost in Marbella?",
    excerpt: "From budget refreshes to luxury Italian designs, we break down the costs of upgrading your kitchen on the Costa del Sol.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2768&auto=format&fit=crop",
    category: "Cost Guides",
    readTime: "6 min read",
    slug: "kitchen-renovation-cost-marbella"
  },
  {
    id: 3,
    title: "5 Essential Pre-Summer Maintenance Checks for Your Villa",
    excerpt: "Don't let a broken AC or green pool ruin your holiday. Here's your checklist for getting your property summer-ready.",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b00cc6?q=80&w=2940&auto=format&fit=crop",
    category: "Maintenance",
    readTime: "4 min read",
    slug: "pre-summer-maintenance-checks"
  },
  {
    id: 4,
    title: "Understanding the 'Boletín Eléctrico' (Electrical Certificate)",
    excerpt: "Why you need it, how to get it, and why it's crucial for selling your property or upgrading your power supply.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2938&auto=format&fit=crop",
    category: "Legal/Permits",
    readTime: "5 min read",
    slug: "understanding-boletin-electrico"
  },
  {
    id: 5,
    title: "Microcement vs. Tiles: Which is Best for Spanish Homes?",
    excerpt: "Comparing durability, cost, and aesthetics of the two most popular flooring choices for modern Andalusian homes.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2940&auto=format&fit=crop",
    category: "Renovation",
    readTime: "5 min read",
    slug: "microcement-vs-tiles"
  },
  {
    id: 6,
    title: "The Hidden Costs of Buying a Fixer-Upper in Spain",
    excerpt: "Beyond the purchase price: ITP tax, notary fees, and the reality of renovation budgets in 2025.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2938&auto=format&fit=crop",
    category: "Cost Guides",
    readTime: "7 min read",
    slug: "hidden-costs-fixer-upper"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* 1. Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden bg-[#0a1f44] text-white">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f44] to-[#0d2550]"></div>
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        </div>
        
        <div className="container-custom max-w-4xl relative z-10 mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Expert Advice for <br className="hidden md:block" />
            <span className="text-blue-400">Costa del Sol Homeowners</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 font-light max-w-2xl mx-auto">
            Guides on renovations, maintenance, and local regulations.
          </p>
        </div>
      </section>

      <div className="container-custom max-w-7xl mx-auto px-4 py-12 -mt-10 relative z-20">
        {/* 2. Featured Article */}
        <Link to={`/blog/${featuredPost.slug}`} className="block group">
          <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden grid md:grid-cols-2 gap-0 hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <div className="absolute top-6 left-6 z-10 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                Must Read
              </div>
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                <span className="font-semibold text-blue-600">{featuredPost.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featuredPost.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-[#0a1f44] mb-4 leading-tight group-hover:text-blue-700 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                Read Article <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </div>
          </div>
        </Link>

        {/* 3. Categories */}
        <div className="py-12 overflow-x-auto">
          <div className="flex gap-3 min-w-max">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  idx === 0 
                    ? "bg-[#0a1f44] text-white shadow-md" 
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4. The Grid (Recent Posts) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0a1f44] text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>Nov 15, 2025</span>
                  <span>•</span>
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm font-semibold text-blue-600 mt-auto">
                  Read More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="px-8 rounded-full border-slate-300 text-slate-600 hover:text-[#0a1f44] hover:border-[#0a1f44]">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}
