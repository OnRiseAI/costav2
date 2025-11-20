import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Calendar, 
  ChevronRight, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  Quote,
  ArrowRight
} from "lucide-react";

// Mock data for all blog posts
const blogPosts = {
  "renovation-permits-andalucia-2025": {
    title: "The Ultimate Guide to Renovation Permits in Andalucia (2025)",
    category: "Legal/Permits",
    author: "Maria Gonzalez",
    authorRole: "Legal Consultant",
    date: "November 12, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop",
    keyTakeaways: [
      "Most minor renovations only require a 'Licencia de Obra Menor' which is faster to obtain.",
      "Structural changes always require an architect's project and a major permit.",
      "Starting work without a permit can lead to fines of up to 300% of the project value."
    ],
    content: (
      <>
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
      </>
    )
  },
  "pool-water-update-2025": {
    title: "Costa del Sol Water Update 2025: Can I Finally Fill My Pool?",
    category: "Maintenance",
    author: "Sarah Jenkins",
    authorRole: "Local News Editor",
    date: "May 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b00cc6?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "The ban on filling private pools has been lifted as of May 2025.",
      "Strict limits are set at 250 litres per day per property.",
      "Wasting water is still a punishable offense with significant fines."
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          Good news for villa owners! As of May 2025, the Junta de Andalucía has officially lifted the ban on filling private pools. However, before you reach for the hose, there are strict new limitations you need to be aware of.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">The New Rules Explained</h2>
        <p>
          While the total ban is gone, we are still in a drought alert phase. The new regulations allow for the refilling of swimming pools but cap water usage at <strong>250 litres per person per day</strong>.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">How to Save Water (and Avoid Fines)</h2>
        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
          <li><strong>Check for leaks:</strong> A dropping water line isn't always evaporation. A small crack can waste thousands of litres.</li>
          <li><strong>Install a pool cover:</strong> This can reduce evaporation by up to 70%, saving you money and water.</li>
          <li><strong>Recycle filter water:</strong> Modern filtration systems can clean and reuse backwash water.</li>
        </ul>
      </>
    )
  },
  "new-rental-laws-2025": {
    title: "New Rental Laws April 2025: Can Your Neighbors Ban Your Airbnb?",
    category: "Legal/Permits",
    author: "Antonio Ruiz",
    authorRole: "Property Lawyer",
    date: "April 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "Community of Owners can now vote to ban holiday rentals with a 3/5ths majority.",
      "The new National Registry (VUD) goes live in July 2025.",
      "Properties must meet new 'Habitability' standards including AC and heating."
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          The landscape for holiday rentals in Spain is shifting. The new Horizontal Property Law reform has empowered communities, and a new national registry is on the horizon. Here is what every Airbnb host needs to know.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">The 3/5ths Rule</h2>
        <p>
          Previously, banning holiday rentals required a unanimous vote. Now, a simple <strong>3/5ths majority</strong> of owners can vote to prohibit vacation rentals in the building.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">Action Plan for Hosts</h2>
        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
          <li>Check your community statutes immediately.</li>
          <li>Ensure your property meets the new habitability standards (AC in all rooms is now mandatory).</li>
          <li>Register with the upcoming VUD system to avoid being delisted from platforms.</li>
        </ul>
      </>
    )
  },
  "renovating-older-villa-2025": {
    title: "Why Renovating an Older Villa is the Smartest Investment in 2025",
    category: "Renovation",
    author: "Elena Costa",
    authorRole: "Real Estate Analyst",
    date: "March 22, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "New build supply is limited and prices are rising.",
      "Older villas in prime locations offer better value per square meter.",
      "Budget €800-€1,200 per sqm for a full modernization."
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          With new build prices in the 'Golden Triangle' rising by 12% this year, savvy investors are turning their attention to older stock. Here is why buying a fixer-upper might be your best move in 2025.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">The 'Good Bones' Strategy</h2>
        <p>
          Look for properties in established areas like Elviria and Nueva Andalucia. These plots are often larger and in better locations than new developments.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">Budgeting for Success</h2>
        <p>
          A full modernization typically costs between <strong>€800 and €1,200 per square meter</strong>. This includes new electrics, plumbing, windows, and finishes.
        </p>
      </>
    )
  },
  "malaga-hard-water-boiler": {
    title: "The Silent Boiler Killer: Dealing with Malaga's Hard Water",
    category: "Maintenance",
    author: "David Miller",
    authorRole: "Senior Plumber",
    date: "February 15, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "Malaga has some of the highest calcium levels in Europe.",
      "Electric boilers can fail after just 2 years without maintenance.",
      "Installing a water softener is the most effective long-term solution."
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          If you've noticed white scale on your taps or your shower pressure dropping, you're a victim of Malaga's hard water. It's not just an annoyance; it's a boiler killer.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">Why Calcium is the Enemy</h2>
        <p>
          When water is heated, calcium precipitates and forms a rock-hard layer on heating elements. This acts as insulation, forcing your boiler to work harder and eventually burn out.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">Prevention Tips</h2>
        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
          <li>Install a Water Softener (Descalcificador) at the mains.</li>
          <li>Replace the sacrificial anode in your electric boiler annually.</li>
          <li>Use vinegar to descale taps and showerheads regularly.</li>
        </ul>
      </>
    )
  },
  "cleaning-calima-dust": {
    title: "Cleaning Up After the Calima: Don't Ruin Your Facade",
    category: "Maintenance",
    author: "Sofia Marti",
    authorRole: "Cleaning Specialist",
    date: "March 05, 2025",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "Do NOT pressure wash immediately; it turns dust into mud.",
      "Wash down gently with a hose first to remove loose particles.",
      "Use 'elastic' exterior paint to resist future staining."
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          Another dust storm from the Sahara has turned the Costa del Sol orange. While it looks dramatic, the 'Calima' can cause permanent damage to your villa's facade if cleaned incorrectly.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">The Golden Rule: No Pressure</h2>
        <p>
          <strong>Never</strong> use a high-pressure washer on dry Calima dust. The pressure drives the fine red particles deep into the pores of your render, creating permanent stains.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">The Correct Method</h2>
        <p>
          Start by gently rinsing the facade with a garden hose from the top down. Only once the bulk of the mud is gone should you consider using a pressure washer on a low setting.
        </p>
      </>
    )
  },
  "protecting-home-squatters-2025": {
    title: "Protecting Your Holiday Home from 'Okupas' (Squatters) in 2025",
    category: "Legal/Permits",
    author: "James Wilson",
    authorRole: "Security Consultant",
    date: "January 20, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "Prevention is far cheaper and faster than eviction.",
      "Install an 'Anti-Bumping' lock cylinder to prevent easy entry.",
      "A visible alarm connected to the police is a strong deterrent."
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          With new housing laws making headlines, non-resident owners are understandably worried about squatters. The key to peace of mind is proactive prevention.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">Hardening Your Defenses</h2>
        <p>
          Most illegal entries happen through the front door using a technique called 'bumping'. Upgrading to a high-security anti-bump cylinder is your first line of defense.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">The 48-Hour Rule</h2>
        <p>
          Having an alarm system connected to a central monitoring station allows police to act immediately if a break-in is detected, treating it as a burglary rather than a civil squatting matter.
        </p>
      </>
    )
  },
  "solar-panels-worth-it-2025": {
    title: "Electricity Bills 2025: Is Solar Finally Worth It?",
    category: "Cost Guides",
    author: "Miguel Angel",
    authorRole: "Energy Engineer",
    date: "April 02, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2942&auto=format&fit=crop",
    keyTakeaways: [
      "Andalucia gets over 320 days of sun per year.",
      "ROI for a standard system is now typically 4-5 years.",
      "You can sell surplus energy back to the grid (Compensación)."
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          With electricity prices stabilizing but still high, and new EU grants available, 2025 might be the tipping point for solar adoption on the Costa del Sol.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">The Numbers Don't Lie</h2>
        <p>
          A typical 3kW system costs around €5,000 installed. With current energy prices, most households save €1,000-€1,200 per year, meaning the system pays for itself in under 5 years.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">Selling Back to the Grid</h2>
        <p>
          The 'Compensación de Excedentes' allows you to offset your nighttime usage with the excess energy you produced during the day, further lowering your bill.
        </p>
      </>
    )
  },
  "bathroom-reform-permit": {
    title: "Licencia de Obra Menor: Do You Need One for a Bathroom Reform?",
    category: "Legal/Permits",
    author: "Maria Gonzalez",
    authorRole: "Legal Consultant",
    date: "February 28, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "Yes, even for tiling, you often need a 'Declaración Responsable'.",
      "Town halls are cracking down on unpermitted skips (cubas).",
      "The permit cost is small compared to the potential €3,000 fine."
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          It's a common question: "I'm just changing the tiles and the toilet, do I really need a permit?" The answer might surprise you.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">The 'Declaración Responsable'</h2>
        <p>
          For minor works like bathroom reforms, you don't need a full project, but you do need to file a 'Responsible Declaration'. This notifies the Town Hall of your intent and ensures you pay the small construction tax (ICIO).
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">The Skip Trap</h2>
        <p>
          The most common way homeowners get caught is the skip (cuba) on the street. Police check the skip's license against the property address. If there's no permit on file, expect a visit and a fine.
        </p>
      </>
    )
  }
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts] || blogPosts["renovation-permits-andalucia-2025"];

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
                {post.author.split(' ').map(n => n[0]).join('')}
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
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start text-slate-700">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg prose-slate max-w-none font-serif text-slate-700 leading-loose">
            {post.content}
          </div>

          {/* Share / Tags */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-2">
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">#{post.category.split('/')[0]}</span>
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
          </div>
        </aside>
      </div>

      {/* 5. Related Articles */}
      <section className="bg-slate-50 py-20 px-4 border-t border-slate-200">
        <div className="container-custom max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-[#0a1f44] mb-8">You might also like...</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(blogPosts).slice(0, 3).map(([slug, p], i) => (
              <Link to={`/blog/${slug}`} key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all group cursor-pointer block">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">{p.category}</div>
                  <h4 className="font-bold text-[#0a1f44] mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {p.title}
                  </h4>
                  <div className="flex items-center text-sm text-slate-400 mt-4">
                    <Clock className="w-3 h-3 mr-1" /> {p.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
