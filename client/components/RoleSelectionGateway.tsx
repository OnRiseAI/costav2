import { Link } from "react-router-dom";
import { Home, UserCircle2, Briefcase } from "lucide-react";

export function RoleSelectionGateway() {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-24">
      <div className="container-custom max-w-4xl mx-auto px-4">
        <header className="text-center mb-10 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0a1f44] mb-3">
            Join CostaTrades
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            How do you want to use the platform?
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
          {/* Customer card */}
          <Link
            to="/signup"
            className="flex-1 block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0a1f44] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-xl"
          >
            <article className="h-full bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 flex flex-col items-center text-center cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-1.5 hover:shadow-lg">
              <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-slate-50 text-[#0a1f44]">
                <Home className="w-7 h-7" aria-hidden="true" />
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-[#0a1f44] mb-2">
                I need a Specialist
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-xs">
                Post a job, compare proposals, and hire verified professionals.
              </p>
            </article>
          </Link>

          {/* Professional card */}
          <Link
            to="/tradesperson/details"
            className="flex-1 block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0a1f44] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-xl"
          >
            <article className="h-full rounded-xl border-2 border-[#0a1f44] bg-[#F0F4F8] p-6 md:p-8 flex flex-col items-center text-center cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-1.5 hover:shadow-lg">
              <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-full bg-[#0a1f44] text-white">
                <Briefcase className="w-7 h-7" aria-hidden="true" />
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-[#0a1f44] mb-2">
                I am a Specialist
              </h2>
              <p className="text-sm md:text-base text-gray-700 max-w-xs">
                Join the network, find high-value clients, and grow your business.
              </p>
            </article>
          </Link>
        </div>

        <div className="text-center text-sm md:text-base text-gray-700">
          <span>Already have an account? </span>
          <Link
            to="/login"
            className="font-medium text-[#0a1f44] underline-offset-4 hover:underline"
          >
            Log In
          </Link>
        </div>
      </div>
    </section>
  );
}
