import { Link } from "react-router-dom";

export function HowItWorks() {
  return (
    <section className="bg-[#F9F7F2] py-20 md:py-28">
      <div className="container-custom">
        <div className="flex flex-col gap-20 md:gap-32">
          {/* Row 1: Image Left / Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] md:aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/8293686/pexels-photo-8293686.jpeg"
                  alt="Pristine renovated kitchen"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#E07A5F] rounded-full opacity-20 blur-2xl"></div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-[#E07A5F] font-bold tracking-wider uppercase text-sm mb-2 block">
                Step 1
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a1f44] mb-6">
                Describe or Browse.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Post a job in seconds or browse our curated directory of local
                specialists. Filter by language and location to find the perfect
                match for your project.
              </p>
              <Link
                to="/post-job"
                className="inline-flex items-center text-[#0a1f44] font-semibold border-b-2 border-[#E07A5F] hover:text-[#E07A5F] transition-colors pb-1"
              >
                Post a job now
              </Link>
            </div>
          </div>

          {/* Row 2: Text Left / Image Right */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] md:aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/7579206/pexels-photo-7579206.jpeg"
                  alt="Homeowner shaking hands with tradesperson"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#81B29A] rounded-full opacity-20 blur-2xl"></div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-[#81B29A] font-bold tracking-wider uppercase text-sm mb-2 block">
                Step 2
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0a1f44] mb-6">
                Hire Direct.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Chat directly with pros. Check their ratings and reviews from
                other homeowners. No middleman fees, just direct connections.
              </p>
              <Link
                to="/post-job"
                className="inline-flex items-center text-[#0a1f44] font-semibold border-b-2 border-[#81B29A] hover:text-[#81B29A] transition-colors pb-1"
              >
                Find a professional
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
