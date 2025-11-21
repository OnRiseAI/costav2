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
  ArrowRight,
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
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop",
    keyTakeaways: [
      "Most minor renovations only require a 'Licencia de Obra Menor' which is faster to obtain.",
      "Structural changes always require an architect's project and a major permit.",
      "Starting work without a permit can lead to fines of up to 300% of the project value.",
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          Navigating the bureaucratic landscape of Spanish construction permits
          can feel like a full-time job. Whether you're planning a simple
          bathroom refresh or a complete villa overhaul, understanding the
          difference between a <em>Licencia de Obra Mayor</em> and{" "}
          <em>Menor</em> is critical to your project's success—and your wallet.
        </p>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Do I really need a permit?
        </h2>
        <p>
          The short answer is: <strong>Yes, almost always.</strong> In Spain,
          nearly any work that generates rubble or changes the appearance of a
          property requires some form of notification to the Town Hall
          (Ayuntamiento).
        </p>
        <p>
          Many foreign homeowners fall into the trap of thinking that internal
          work doesn't need permission. This is a common misconception that can
          lead to work stoppages and hefty fines.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-10 bg-slate-50 rounded-r-lg not-italic">
          <div className="flex gap-4">
            <Quote className="w-8 h-8 text-blue-200 flex-shrink-0" />
            <div>
              <p className="text-lg font-medium text-[#0a1f44] mb-2 font-sans">
                "The most common mistake I see is homeowners skipping the permit
                for 'invisible' works like rewiring. If you ever want to sell,
                that lack of paperwork will come back to haunt you."
              </p>
              <cite className="text-sm text-slate-500 font-sans not-italic">
                — Carlos Rodriguez, Senior Architect at MalagaDesign
              </cite>
            </div>
          </div>
        </blockquote>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Major vs. Minor Permits: What's the difference?
        </h2>
        <p>
          Permits are generally categorized into two types based on the
          complexity and safety implications of the work.
        </p>

        <div className="my-8 overflow-x-auto rounded-xl border border-slate-200 shadow-sm font-sans">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 font-bold text-[#0a1f44]">Permit Type</th>
                <th className="p-4 font-bold text-[#0a1f44]">Typical Works</th>
                <th className="p-4 font-bold text-[#0a1f44]">
                  Est. Cost (Tax)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              <tr>
                <td className="p-4 font-medium">Obra Menor (Minor)</td>
                <td className="p-4 text-slate-600">
                  Tiling, painting, changing windows (same size), plumbing
                  updates.
                </td>
                <td className="p-4 text-slate-600">3-5% of budget</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Obra Mayor (Major)</td>
                <td className="p-4 text-slate-600">
                  Extensions, new pools, structural walls, changing use
                  (commercial to residential).
                </td>
                <td className="p-4 text-slate-600">4-6% + Architect Fees</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          The Application Process
        </h2>
        <p>
          For a minor permit, the process is increasingly digital. Most Town
          Halls on the Costa del Sol now allow for online submissions via their
          "Sede Electrónica". You will typically need:
        </p>
        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
          <li>Detailed quote from your contractor.</li>
          <li>Photos of the current state.</li>
          <li>Payment of the administrative fee (Tasa).</li>
          <li>Payment of the construction tax (ICIO).</li>
        </ul>

        <p className="mt-8">
          Need help navigating the process?{" "}
          <Link
            to="/search"
            className="text-blue-600 hover:underline font-semibold"
          >
            Find a local architect or builder
          </Link>{" "}
          who can handle the paperwork for you.
        </p>
      </>
    ),
  },
  "pool-water-update-2025": {
    title: "Costa del Sol Water Update 2025: Can I Finally Fill My Pool?",
    category: "Maintenance",
    author: "Sarah Jenkins",
    authorRole: "Local News Editor",
    date: "May 15, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "The ban on filling private pools has been lifted as of May 2025.",
      "Strict limits are set at 250 litres per day per property.",
      "Wasting water is still a punishable offense with significant fines.",
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          Good news for villa owners! As of May 2025, the Junta de Andalucía has
          officially lifted the ban on filling private pools. However, before
          you reach for the hose, there are strict new limitations you need to
          be aware of. The drought situation remains critical, and responsible
          usage is not just encouraged—it's mandated by law.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          The New Rules Explained
        </h2>
        <p>
          While the total ban is gone, we are still in a drought alert phase.
          The new regulations allow for the refilling of swimming pools but cap
          water usage at <strong>250 litres per person per day</strong>. This
          limit applies to all domestic usage, including showers, washing
          machines, and garden irrigation.
        </p>
        <p>
          Local police are conducting spot checks, particularly in
          high-consumption urbanizations. Exceeding your quota can result in
          fines ranging from €600 to €3,000 depending on the severity of the
          infraction.
        </p>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          How to Save Water (and Avoid Fines)
        </h2>
        <p>
          Maintaining a pool in a drought-prone region requires a shift in
          mindset. Here are the most effective ways to keep your pool full
          without breaking the law:
        </p>
        <ul className="list-disc pl-5 space-y-4 marker:text-blue-500">
          <li>
            <strong>Check for leaks:</strong> A dropping water line isn't always
            evaporation. A small crack can waste thousands of litres a week. If
            you suspect a leak,{" "}
            <Link
              to="/trades/plumbers"
              className="text-blue-600 hover:underline font-semibold"
            >
              hire a leak detection specialist
            </Link>{" "}
            immediately.
          </li>
          <li>
            <strong>Install a pool cover:</strong> This is the single most
            effective water-saving measure. A good cover can reduce evaporation
            by up to 70%, saving you money and water. It also keeps the pool
            warmer and cleaner.
          </li>
          <li>
            <strong>Recycle filter water:</strong> Modern filtration systems can
            clean and reuse backwash water, rather than dumping it into the
            drain.
          </li>
          <li>
            <strong>Lower the water level:</strong> Keeping the water level
            slightly lower reduces splash-out from swimming, which can account
            for significant water loss over a summer.
          </li>
        </ul>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          The Future of Pools in Andalucia
        </h2>
        <p>
          Experts predict that water restrictions will become the new normal.
          Investing in water-saving technology now will future-proof your
          property. Consider converting to a saltwater system, which requires
          less backwashing, or installing a rainwater harvesting system for
          topping up.
        </p>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
          <h3 className="font-bold text-[#0a1f44] mb-2">
            Need a Pool Specialist?
          </h3>
          <p className="mb-4 text-slate-600">
            Don't risk fines or damage to your pool. Find verified pool
            maintenance professionals who understand the new regulations.
          </p>
          <Link to="/trades/pool-maintenance">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Find Pool Maintenance
            </Button>
          </Link>
        </div>
      </>
    ),
  },
  "new-rental-laws-2025": {
    title: "New Rental Laws April 2025: Can Your Neighbors Ban Your Airbnb?",
    category: "Legal/Permits",
    author: "Antonio Ruiz",
    authorRole: "Property Lawyer",
    date: "April 10, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "Community of Owners can now vote to ban holiday rentals with a 3/5ths majority.",
      "The new National Registry (VUD) goes live in July 2025.",
      "Properties must meet new 'Habitability' standards including AC and heating.",
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          The landscape for holiday rentals in Spain is shifting. The new
          Horizontal Property Law reform has empowered communities, and a new
          national registry is on the horizon. Here is what every Airbnb host
          needs to know to protect their investment.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          The 3/5ths Rule: A Game Changer
        </h2>
        <p>
          Previously, banning holiday rentals in a community of owners required
          a unanimous vote—a nearly impossible threshold to meet. Now, the law
          has changed. A simple <strong>3/5ths majority</strong> of owners
          (representing 3/5ths of the participation quotas) can vote to prohibit
          vacation rentals in the building.
        </p>
        <p>
          This vote is not retroactive, meaning existing licenses are generally
          safe, but it can prevent new licenses from being issued. However, some
          legal experts warn that communities may try to impose higher community
          fees (up to 20% more) on holiday rental properties, which also
          requires a 3/5ths vote.
        </p>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          The New National Registry (VUD)
        </h2>
        <p>
          Starting in July 2025, Spain will implement a single "Ventanilla Única
          Digital" (VUD) for short-term rentals. This national registry aims to
          crack down on illegal listings. Platforms like Airbnb and Booking.com
          will be required to share data directly with the tax authorities.
        </p>
        <p>
          If your property is not correctly registered or does not meet the
          requirements, you risk being delisted from these major platforms
          overnight.
        </p>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          New Habitability Standards
        </h2>
        <p>
          The Junta de Andalucía has also updated the quality standards for
          tourist apartments. Key requirements now include:
        </p>
        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
          <li>
            <strong>Air Conditioning:</strong> Mandatory in all living areas and
            bedrooms for properties rented between May and September.
          </li>
          <li>
            <strong>Heating:</strong> Mandatory for properties rented between
            October and April.
          </li>
          <li>
            <strong>Ventilation:</strong> Direct ventilation to the exterior or
            a patio is required for all bedrooms.
          </li>
          <li>
            <strong>First Aid Kit:</strong> Must be available in the property.
          </li>
          <li>
            <strong>Complaint Forms:</strong> Official "Hojas de Quejas y
            Reclamaciones" must be available to guests.
          </li>
        </ul>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Action Plan for Hosts
        </h2>
        <ul className="list-disc pl-5 space-y-4 marker:text-blue-500">
          <li>
            <strong>Check your community statutes:</strong> Attend the next AGM
            and ensure you are aware of any proposed votes.
          </li>
          <li>
            <strong>Upgrade your climate control:</strong> If you lack AC or
            heating,{" "}
            <Link
              to="/trades/air-conditioning"
              className="text-blue-600 hover:underline font-semibold"
            >
              get a quote for installation
            </Link>{" "}
            immediately to meet the new standards.
          </li>
          <li>
            <strong>Verify your license:</strong> Ensure your "Licencia de
            Primera Ocupación" and tourist license are up to date and correctly
            filed.
          </li>
        </ul>

        <p className="mt-8">
          Worried about compliance?{" "}
          <Link
            to="/landlords"
            className="text-blue-600 hover:underline font-semibold"
          >
            Connect with property management professionals
          </Link>{" "}
          who can handle the legalities for you.
        </p>
      </>
    ),
  },
  "renovating-older-villa-2025": {
    title: "Why Renovating an Older Villa is the Smartest Investment in 2025",
    category: "Renovation",
    author: "Elena Costa",
    authorRole: "Real Estate Analyst",
    date: "March 22, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "New build supply is limited and prices are rising.",
      "Older villas in prime locations offer better value per square meter.",
      "Budget €800-€1,200 per sqm for a full modernization.",
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          With new build prices in the 'Golden Triangle' (Marbella, Estepona,
          Benahavís) rising by 12% this year, savvy investors are turning their
          attention to older stock. Here is why buying a fixer-upper might be
          your best move in 2025.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          The 'Good Bones' Strategy
        </h2>
        <p>
          The best plots on the Costa del Sol were built on decades ago. Older
          villas in established areas like Elviria, Nueva Andalucia, and
          Nagüeles often boast larger gardens, better views, and more privacy
          than modern developments where density is maximized.
        </p>
        <p>
          By buying an older property, you are paying for the location and the
          land, rather than the developer's premium. With the right renovation,
          you can create a modern luxury home for significantly less than the
          cost of a new build.
        </p>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Budgeting for Success
        </h2>
        <p>
          Renovation costs have stabilized after the post-pandemic spike, but
          budgeting correctly is crucial. For a full modernization of a 1980s or
          1990s villa, you should budget between{" "}
          <strong>€800 and €1,200 per square meter</strong>.
        </p>
        <p>This budget typically covers:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
          <li>
            <strong>Structural changes:</strong> Opening up living spaces and
            removing partition walls.
          </li>
          <li>
            <strong>New systems:</strong> Complete rewiring and new plumbing
            (essential for older homes).
          </li>
          <li>
            <strong>Windows:</strong> Upgrading to double or triple glazing for
            energy efficiency.
          </li>
          <li>
            <strong>Finishes:</strong> New flooring (microcement or large format
            tiles), kitchen, and bathrooms.
          </li>
        </ul>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Hidden Costs to Watch For
        </h2>
        <p>
          When renovating in Spain, always set aside a contingency fund of
          10-15%. Common surprises in older villas include:
        </p>
        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
          <li>
            <strong>Damp issues:</strong> Often caused by poor original
            waterproofing or bridging of the damp proof course.
          </li>
          <li>
            <strong>Illegal extensions:</strong> Check that all parts of the
            building are registered in the Property Registry.
          </li>
          <li>
            <strong>Outdated septic tanks:</strong> You may need to connect to
            the mains sewage system if available.
          </li>
        </ul>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Finding the Right Team
        </h2>
        <p>
          A successful renovation relies on a trusted team of builders and
          architects. Don't rely on "a guy at the bar". You need verified
          professionals with a track record of delivering projects on time and
          on budget.
        </p>
        <div className="mt-8">
          <Link to="/post-job">
            <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
              Find Verified Builders
            </Button>
          </Link>
        </div>
      </>
    ),
  },
  "malaga-hard-water-boiler": {
    title: "The Silent Boiler Killer: Dealing with Malaga's Hard Water",
    category: "Maintenance",
    author: "David Miller",
    authorRole: "Senior Plumber",
    date: "February 15, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1521207418485-99c705420785?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "Malaga has some of the highest calcium levels in Europe.",
      "Electric boilers can fail after just 2 years without maintenance.",
      "Installing a water softener is the most effective long-term solution.",
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          If you've noticed white scale on your taps, your shower pressure
          dropping, or your skin feeling dry after a wash, you're a victim of
          Malaga's hard water. It's not just an annoyance; it's a boiler killer
          that costs homeowners thousands in premature replacements.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Why Calcium is the Enemy
        </h2>
        <p>
          The water in Malaga province is rich in calcium and magnesium, picked
          up as it flows through the region's limestone bedrock. When this water
          is heated, the minerals precipitate and form limescale—a rock-hard
          layer that coats heating elements.
        </p>
        <p>
          This scale acts as insulation, forcing your boiler to work harder and
          longer to heat the same amount of water. This not only increases your
          electricity bill but eventually causes the element to overheat and
          burn out. We often see electric boilers fail after just 2-3 years in
          areas like Marbella and Mijas.
        </p>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Prevention Tips
        </h2>
        <ul className="list-disc pl-5 space-y-4 marker:text-blue-500">
          <li>
            <strong>Install a Water Softener (Descalcificador):</strong> This is
            the gold standard. Installed at the mains entry point, it removes
            minerals before they enter your home's pipework. It protects your
            boiler, washing machine, dishwasher, and taps.{" "}
            <Link
              to="/trades/plumbers"
              className="text-blue-600 hover:underline"
            >
              Get a quote for installation here.
            </Link>
          </li>
          <li>
            <strong>Replace the Anode:</strong> Every electric boiler has a
            "sacrificial anode"—a metal rod designed to corrode instead of the
            tank. In Malaga, this should be checked and replaced annually.
          </li>
          <li>
            <strong>Lower the Temperature:</strong> Limescale forms faster at
            higher temperatures. Setting your boiler to 55°C or 60°C instead of
            70°C can significantly reduce scale buildup.
          </li>
          <li>
            <strong>Regular Descaling:</strong> Use vinegar or specialized
            descaling solutions to clean taps and showerheads regularly to
            maintain flow.
          </li>
        </ul>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Signs You Need a Plumber
        </h2>
        <p>
          If your boiler is making banging noises (kettling), taking longer to
          heat up, or leaking, it's likely full of scale. Don't wait for it to
          burst.
        </p>
        <Link to="/trades/plumbers">
          <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
            Find a Plumber Near You
          </Button>
        </Link>
      </>
    ),
  },
  "cleaning-calima-dust": {
    title: "Cleaning Up After the Calima: Don't Ruin Your Facade",
    category: "Maintenance",
    author: "Sofia Marti",
    authorRole: "Cleaning Specialist",
    date: "March 05, 2025",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "Do NOT pressure wash immediately; it turns dust into mud.",
      "Wash down gently with a hose first to remove loose particles.",
      "Use 'elastic' exterior paint to resist future staining.",
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          Another dust storm from the Sahara has turned the Costa del Sol
          orange. While the eerie skies make for great photos, the 'Calima'
          leaves behind a fine, sticky red dust that can cause permanent damage
          to your villa's facade if cleaned incorrectly.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          The Golden Rule: No Pressure
        </h2>
        <p>
          <strong>Never</strong> use a high-pressure washer (Karcher) directly
          on dry Calima dust. The high pressure drives the fine red particles
          deep into the pores of your render or paintwork, creating permanent
          stains that are almost impossible to remove without repainting.
        </p>
        <p>
          It also turns the dust into a thick mud that runs down the walls,
          staining terraces and pool decks below.
        </p>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          The Correct Method
        </h2>
        <ol className="list-decimal pl-5 space-y-4 marker:text-blue-500 font-medium text-slate-700">
          <li>
            <strong>Wait for it to pass:</strong> There is no point cleaning if
            more rain/dust is forecast for tomorrow. Check the weather report.
          </li>
          <li>
            <strong>The Gentle Rinse:</strong> Start by gently rinsing the
            facade with a garden hose from the top down. Use a wide spray
            setting, not a jet. The goal is to lift the loose dust and wash it
            away.
          </li>
          <li>
            <strong>Soft Wash:</strong> For stubborn areas, use a soft brush and
            a mild detergent. Avoid harsh chemicals that can react with the
            minerals in the dust.
          </li>
          <li>
            <strong>Pressure Wash (Last Resort):</strong> Only once the bulk of
            the mud is gone should you consider using a pressure washer, and
            only on a low setting to clean the floor or hard surfaces—not the
            painted walls.
          </li>
        </ol>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Long-Term Protection
        </h2>
        <p>
          If your villa is prone to staining, consider repainting with a
          high-quality "elastic" or silicone-based exterior paint. These paints
          seal the pores of the render, making it much easier to wash off the
          dust in the future.
        </p>
        <p>
          Need a professional refresh?{" "}
          <Link
            to="/trades/painters"
            className="text-blue-600 hover:underline font-semibold"
          >
            Find exterior painters
          </Link>{" "}
          who specialize in weather-resistant coatings.
        </p>
      </>
    ),
  },
  "protecting-home-squatters-2025": {
    title: "Protecting Your Holiday Home from 'Okupas' (Squatters) in 2025",
    category: "Legal/Permits",
    author: "James Wilson",
    authorRole: "Security Consultant",
    date: "January 20, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "Prevention is far cheaper and faster than eviction.",
      "Install an 'Anti-Bumping' lock cylinder to prevent easy entry.",
      "A visible alarm connected to the police is a strong deterrent.",
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          With new housing laws making headlines, non-resident owners are
          understandably worried about squatters ('okupas'). While the media
          stories can be alarming, the reality is that squatters target easy
          targets. The key to peace of mind is proactive prevention.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Hardening Your Defenses
        </h2>
        <p>
          Squatters rarely break windows to enter; they prefer to walk in
          through the front door. Most illegal entries happen using a technique
          called 'bumping', which opens older locks without leaving signs of
          forced entry.
        </p>
        <p>
          <strong>Upgrade your locks:</strong> Replacing your standard cylinder
          with a high-security "Anti-Bumping, Anti-Drill, Anti-Pick" cylinder is
          your first and most important line of defense.{" "}
          <Link
            to="/trades/locksmiths"
            className="text-blue-600 hover:underline"
          >
            Find a locksmith to upgrade your door security.
          </Link>
        </p>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          The 48-Hour Rule
        </h2>
        <p>
          Spanish law distinguishes between a "burglary" (allanamiento de
          morada) and "usurpation" (usurpación). If police catch intruders in
          the act or within the first 48 hours, they can often evict them
          immediately. After that, it becomes a civil matter that can take
          months.
        </p>
        <p>
          <strong>Install an Alarm:</strong> Having an alarm system connected to
          a central monitoring station (CRA) provides immediate proof of the
          time of entry. This allows police to act immediately, treating the
          incident as a break-in rather than a squatting case.
        </p>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          The Human Element
        </h2>
        <p>
          An empty house is a target. Making the property look lived-in is
          crucial.
        </p>
        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
          <li>
            <strong>Hire a Key Holder:</strong> Have someone visit the property
            weekly to collect mail, open blinds, and check for signs of
            tampering.
          </li>
          <li>
            <strong>Smart Lighting:</strong> Use smart plugs to turn lights on
            and off on a schedule.
          </li>
          <li>
            <strong>Garden Maintenance:</strong> An overgrown garden is a clear
            sign of an empty home.{" "}
            <Link
              to="/trades/gardeners"
              className="text-blue-600 hover:underline"
            >
              Keep your garden maintained
            </Link>{" "}
            year-round.
          </li>
        </ul>

        <div className="mt-8">
          <Link to="/holiday-homes">
            <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
              Find Property Management Services
            </Button>
          </Link>
        </div>
      </>
    ),
  },
  "solar-panels-worth-it-2025": {
    title: "Electricity Bills 2025: Is Solar Finally Worth It?",
    category: "Cost Guides",
    author: "Miguel Angel",
    authorRole: "Energy Engineer",
    date: "April 02, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2942&auto=format&fit=crop",
    keyTakeaways: [
      "Andalucia gets over 320 days of sun per year.",
      "ROI for a standard system is now typically 4-5 years.",
      "You can sell surplus energy back to the grid (Compensación).",
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          With electricity prices stabilizing but still high, and new EU grants
          available, 2025 might be the tipping point for solar adoption on the
          Costa del Sol. If you have a roof in Andalucia, you are sitting on a
          goldmine of potential energy.
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          The Numbers Don't Lie
        </h2>
        <p>
          The cost of solar panels has dropped significantly in the last decade.
          A typical 3kW to 5kW system for a villa costs between{" "}
          <strong>€5,000 and €8,000 installed</strong>.
        </p>
        <p>
          With current energy prices, most households save €1,000-€1,500 per
          year on their bills. This means the system pays for itself in just 4-5
          years. After that, you are essentially generating free electricity for
          the remaining 20+ year lifespan of the panels.
        </p>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Selling Back to the Grid
        </h2>
        <p>
          Spain's "Compensación de Excedentes" (Surplus Compensation) allows you
          to sell the excess energy you produce during the day back to your
          energy provider. While they won't pay you cash, they will deduct this
          value from your bill, often reducing it to near zero (you still pay
          the fixed access charges).
        </p>
        <p>
          For even greater independence, consider adding a battery system. While
          this increases the upfront cost, it allows you to use your solar power
          at night, further insulating you from price hikes.
        </p>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Grants and Tax Breaks
        </h2>
        <p>There are still incentives available in 2025:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
          <li>
            <strong>IBI Reduction:</strong> Many town halls (like Marbella and
            Estepona) offer a reduction in IBI tax (up to 50% for 3 years) for
            homes with solar panels.
          </li>
          <li>
            <strong>ICIO Reduction:</strong> A reduction in the construction tax
            for the installation works.
          </li>
          <li>
            <strong>NextGen Funds:</strong> EU subsidies are still available but
            are often oversubscribed. It's best to check with your installer.
          </li>
        </ul>

        <p className="mt-8">
          Ready to switch to solar?{" "}
          <Link
            to="/trades/electricians"
            className="text-blue-600 hover:underline font-semibold"
          >
            Get quotes from certified solar installers
          </Link>{" "}
          today.
        </p>
      </>
    ),
  },
  "bathroom-reform-permit": {
    title: "Licencia de Obra Menor: Do You Need One for a Bathroom Reform?",
    category: "Legal/Permits",
    author: "Maria Gonzalez",
    authorRole: "Legal Consultant",
    date: "February 28, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2940&auto=format&fit=crop",
    keyTakeaways: [
      "Yes, even for tiling, you often need a 'Declaración Responsable'.",
      "Town halls are cracking down on unpermitted skips (cubas).",
      "The permit cost is small compared to the potential €3,000 fine.",
    ],
    content: (
      <>
        <p className="text-xl leading-relaxed text-slate-600 mb-8 font-sans font-light">
          It's a common question: "I'm just changing the tiles and the toilet,
          do I really need a permit?" The answer might surprise you. In the eyes
          of the Town Hall, almost any work is "Obra".
        </p>
        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          The 'Declaración Responsable'
        </h2>
        <p>
          For minor works like bathroom reforms, kitchen upgrades, or tiling,
          you generally don't need a full "Licencia de Obra Menor" which can
          take months to approve. Instead, most Town Halls now use the{" "}
          <strong>Declaración Responsable</strong> (Responsible Declaration).
        </p>
        <p>
          This is a fast-track process. You submit the form, pay the taxes
          (usually around 4-5% of the budget), and you can start work
          immediately. You are essentially declaring that you comply with
          regulations and accept responsibility.
        </p>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          The Skip Trap
        </h2>
        <p>
          The most common way homeowners get caught doing unpermitted work is
          the skip (cuba) on the street. Local police regularly check the
          license of every skip they see. They will check the skip permit
          against the property address.
        </p>
        <p>
          If there is a skip but no building permit on file for that address,
          expect a knock on the door. The fines for working without a permit can
          start at €600 and go up to €3,000 or more, plus you will be forced to
          stop work until the paperwork is legalized (which costs more).
        </p>

        <h2 className="font-sans text-[#0a1f44] font-bold mt-12 mb-6">
          Don't Risk It
        </h2>
        <p>
          The cost of the permit is a small percentage of your renovation
          budget. It buys you peace of mind and ensures you have no issues when
          you eventually sell the property.
        </p>
        <p>
          Always ask your builder if they will handle the permits for you.{" "}
          <Link
            to="/search"
            className="text-blue-600 hover:underline font-semibold"
          >
            Find builders who handle the paperwork
          </Link>{" "}
          on CostaTrades.
        </p>
      </>
    ),
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post =
    blogPosts[slug as keyof typeof blogPosts] ||
    blogPosts["renovation-permits-andalucia-2025"];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Article Header */}
      <header className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like feel */}
        <div className="absolute inset-0 z-0">
          <img src={post.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f44]/70 via-[#0a1f44]/60 to-[#0a1f44]/90"></div>
        </div>

        <div className="container-custom max-w-4xl mx-auto relative z-10 text-center px-4 mt-10">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-blue-200/80 mb-8 animate-fade-in">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1] tracking-tight drop-shadow-lg animate-slide-up">
            {post.title}
          </h1>

          <div
            className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-white/90 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-inner">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="text-left leading-tight">
                <div className="font-bold">{post.author}</div>
                <div className="text-xs text-blue-200">{post.authorRole}</div>
              </div>
            </div>

            <div className="flex items-center gap-6 px-4 py-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-300" />
                {post.date}
              </div>
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-300" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-[1fr_380px] gap-16">
        {/* Content Area */}
        <article className="max-w-[720px] mx-auto lg:mx-0">
          {/* Key Takeaways */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-3xl p-8 mb-12 border border-blue-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <h3 className="font-bold text-[#0a1f44] text-xl mb-6 flex items-center gap-3 relative z-10">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-md">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              Key Takeaways
            </h3>
            <ul className="space-y-4 relative z-10">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div
            className="prose prose-lg prose-slate max-w-none font-serif text-slate-700 leading-loose 
            prose-headings:font-sans prose-headings:font-bold prose-headings:text-[#0a1f44] 
            prose-a:text-blue-600 prose-a:no-underline prose-a:border-b-2 prose-a:border-blue-200 hover:prose-a:border-blue-600 prose-a:transition-colors
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
            prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
            prose-strong:text-[#0a1f44] prose-strong:font-bold"
          >
            {post.content}
          </div>

          {/* Share / Tags */}
          <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap gap-6 justify-between items-center">
            <div className="flex gap-3">
              <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors cursor-pointer">
                #{post.category.split("/")[0]}
              </span>
              <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors cursor-pointer">
                #Spain
              </span>
              <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors cursor-pointer">
                #CostaDelSol
              </span>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full border-slate-200 hover:border-blue-300 hover:text-blue-600"
              >
                <Share2 className="w-4 h-4" /> Share Article
              </Button>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block space-y-10">
          {/* Sticky Widget */}
          <div className="sticky top-28 space-y-10">
            {/* CTA Card */}
            <div className="bg-[#0a1f44] text-white rounded-[2rem] p-8 shadow-2xl shadow-blue-900/20 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-blue-500/30 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -ml-10 -mb-10 group-hover:bg-purple-500/30 transition-colors duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                  <CheckCircle2 className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Need a Pro?</h3>
                <p className="text-blue-100/80 mb-8 leading-relaxed">
                  Don't DIY it. Get 3 free quotes from verified local
                  professionals for your project.
                </p>
                <Link to="/post-job" className="block">
                  <Button
                    size="lg"
                    className="w-full bg-white text-[#0a1f44] hover:bg-blue-50 font-bold h-14 text-lg shadow-lg"
                  >
                    Post a Job for Free
                  </Button>
                </Link>
                <p className="text-xs text-blue-300/60 mt-4 font-medium uppercase tracking-wider">
                  No obligation • 100% Free
                </p>
              </div>
            </div>

            {/* Newsletter (Optional addition for polish) */}
            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200">
              <h4 className="font-bold text-[#0a1f44] mb-2">Weekly Insights</h4>
              <p className="text-sm text-slate-500 mb-4">
                Join 5,000+ homeowners getting local tips.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-blue-500 transition-colors"
                />
                <Button
                  size="sm"
                  className="rounded-xl bg-blue-600 hover:bg-blue-700"
                >
                  Join
                </Button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Related Articles */}
      <section className="bg-slate-50 py-24 px-4 border-t border-slate-200">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-[#0a1f44]">
              You might also like...
            </h3>
            <Link
              to="/blog"
              className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
            >
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(blogPosts)
              .slice(0, 3)
              .map(([slug, p], i) => (
                <Link
                  to={`/blog/${slug}`}
                  key={i}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group cursor-pointer block hover:-translate-y-2"
                >
                  <div className="h-56 bg-slate-200 relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#0a1f44] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="font-bold text-[#0a1f44] text-lg mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {p.title}
                    </h4>
                    <div className="flex items-center text-sm text-slate-400 mt-4 font-medium">
                      <Clock className="w-4 h-4 mr-1.5" /> {p.readTime}
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
