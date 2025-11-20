import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Calendar, 
  User, 
  ChevronRight, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  Quote,
  ArrowRight
} from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();

  // In a real app, we would fetch the post data based on the slug
  // For this template, we'll use static data
  const post = {
    title: "The Ultimate Guide to Renovation Permits in Andalucia (2025)",
    category: "Legal/Permits",
    author: "Maria Gonzalez",
    authorRole: "Legal Consultant",
    date: "November 12, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop",
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. Article Header */}
      <header className="bg-[#0a1f44] text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <img src={post.image} alt="" className="w-full h-full object-cover blur-sm" />
           <div className="absolute inset-0 bg-[#0a1f44]/80"></div>
        </div>
        
        <div className="container-custom max-w-4xl mx-auto relative z-10 text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm text-blue-200 mb-6 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-blue-400">{post.category}</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">
                MG
              </div>
              <div className="text-left leading-tight">
                <div className="font-semibold">{post.author}</div>
                <div className="text-xs text-blue-300">{post.authorRole}</div>
              </div>
            </div>
            <div className="w-1 h-1 bg-blue-400 rounded-full hidden md:block"></div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="w-1 h-1 bg-blue-400 rounded-full hidden md:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-[1fr_350px] gap-12">
        {/* 2. The Content Area */}
        <article className="max-w-[700px] mx-auto lg:mx-0">
          
          {/* Key Takeaways (AEO Element) */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-10 border border-blue-100">
            <h3 className="font-bold text-[#0a1f44] text-lg mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              Key Takeaways
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start text-slate-700">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Most minor renovations only require a "Licencia de Obra Menor" which is faster to obtain.</span>
              </li>
              <li className="flex gap-3 items-start text-slate-700">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Structural changes always require an architect's project and a major permit.</span>
              </li>
              <li className="flex gap-3 items-start text-slate-700">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Starting work without a permit can lead to fines of up to 300% of the project value.</span>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg prose-slate max-w-none font-serif text-slate-700 leading-loose">
            <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
              Navigating the bureaucratic landscape of Spanish construction permits can feel like a full-time job. Whether you're planning a simple bathroom refresh or a complete villa overhaul, understanding the difference between a <em>Licencia de Obra Mayor</em> and <em>Menor</em> is critical to your project's success—and your wallet.
            </p>

            <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">Do I really need a permit?</h2>
            <p>
              The short answer is: <strong>Yes, almost always.</strong> In Spain, nearly any work that generates rubble or changes the appearance of a property requires some form of notification to the Town Hall (Ayuntamiento).
            </p>
            <p>
              Many foreign homeowners fall into the trap of thinking that internal work doesn't need permission. This is a common misconception that can lead to work stoppages and hefty fines.
            </p>

            {/* Expert Quote Block */}
            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-10 bg-slate-50 rounded-r-lg not-italic">
              <div className="flex gap-4">
                <Quote className="w-8 h-8 text-blue-200 flex-shrink-0" />
                <div>
                  <p className="text-lg font-medium text-[#0a1f44] mb-2 font-sans">
                    "The most common mistake I see is homeowners skipping the permit for 'invisible' works like rewiring. If you ever want to sell, that lack of paperwork will come back to haunt you."
                  </p>
                  <cite className="text-sm text-slate-500 font-sans not-italic">— Carlos Rodriguez, Senior Architect at MalagaDesign</cite>
                </div>
              </div>
            </blockquote>

            <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">Major vs. Minor Permits: What's the difference?</h2>
            <p>
              Permits are generally categorized into two types based on the complexity and safety implications of the work.
            </p>

            {/* Data Table */}
            <div className="my-8 overflow-x-auto rounded-xl border border-slate-200 shadow-sm font-sans">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 font-bold text-[#0a1f44]">Permit Type</th>
                    <th className="p-4 font-bold text-[#0a1f44]">Typical Works</th>
                    <th className="p-4 font-bold text-[#0a1f44]">Est. Cost (Tax)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  <tr>
                    <td className="p-4 font-medium">Obra Menor (Minor)</td>
                    <td className="p-4 text-slate-600">Tiling, painting, changing windows (same size), plumbing updates.</td>
                    <td className="p-4 text-slate-600">3-5% of budget</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Obra Mayor (Major)</td>
                    <td className="p-4 text-slate-600">Extensions, new pools, structural walls, changing use (commercial to residential).</td>
                    <td className="p-4 text-slate-600">4-6% + Architect Fees</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">The Application Process</h2>
            <p>
              For a minor permit, the process is increasingly digital. Most Town Halls on the Costa del Sol now allow for online submissions via their "Sede Electrónica". You will typically need:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
              <li>Detailed quote from your contractor.</li>
              <li>Photos of the current state.</li>
              <li>Payment of the administrative fee (Tasa).</li>
              <li>Payment of the construction tax (ICIO).</li>
            </ul>
          </div>

          {/* Share / Tags */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-2">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">#Renovation</span>
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">#Legal</span>
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">#Spain</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2 rounded-full">
                <Share2 className="w-4 h-4" /> Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2 rounded-full">
                <Bookmark className="w-4 h-4" /> Save
              </Button>
            </div>
          </div>
        </article>

        {/* 4. The Sidebar (Conversion) */}
        <aside className="hidden lg:block space-y-8">
          {/* Sticky Widget */}
          <div className="sticky top-24">
            <div className="bg-[#0a1f44] text-white rounded-2xl p-8 shadow-xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -ml-10 -mb-10"></div>
              
              <h3 className="text-2xl font-bold mb-4 relative z-10">Need a Pro?</h3>
              <p className="text-blue-100 mb-8 relative z-10">
                Don't DIY it. Get 3 free quotes from verified local professionals for your project.
              </p>
              <Link to="/post-job" className="relative z-10 block">
                <Button size="lg" className="w-full bg-white text-[#0a1f44] hover:bg-blue-50 font-bold">
                  Post a Job
                </Button>
              </Link>
              <p className="text-xs text-blue-300 mt-4 relative z-10">
                No obligation. 100% Free.
              </p>
            </div>

            {/* Table of Contents (Desktop) */}
            <div className="mt-8 bg-white rounded-2xl border border-slate-200 p-6">
              <h4 className="font-bold text-[#0a1f44] mb-4 text-sm uppercase tracking-wider">Table of Contents</h4>
              <nav className="space-y-3 text-sm">
                <a href="#" className="block text-blue-600 font-medium border-l-2 border-blue-600 pl-3">Do I really need a permit?</a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 border-l-2 border-transparent pl-3 transition-colors">Major vs. Minor Permits</a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 border-l-2 border-transparent pl-3 transition-colors">The Application Process</a>
                <a href="#" className="block text-slate-600 hover:text-blue-600 border-l-2 border-transparent pl-3 transition-colors">Costs & Timelines</a>
              </nav>
            </div>
          </div>
        </aside>
      </div>

      {/* 5. Related Articles */}
      <section className="bg-slate-50 py-20 px-4 border-t border-slate-200">
        <div className="container-custom max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0a1f44] mb-8">You might also like...</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all group cursor-pointer">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1584622650111-993a426fbf0a' : i === 2 ? '1513694203232-719a280e022f' : '1556911220-bff31c812dba'}?q=80&w=800&auto=format&fit=crop`} 
                    alt="Related post" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">Renovation</div>
                  <h4 className="font-bold text-[#0a1f44] mb-2 group-hover:text-blue-600 transition-colors">
                    {i === 1 ? "Microcement vs. Tiles: Which is Best?" : i === 2 ? "Hidden Costs of Fixer-Uppers" : "Kitchen Renovation Costs"}
                  </h4>
                  <div className="flex items-center text-sm text-slate-400 mt-4">
                    <Clock className="w-3 h-3 mr-1" /> 5 min read
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
