import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ProGrowthBand() {
  return (
    <section className="bg-[#3D5A80] py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Are you a Trade Professional?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl font-light">
              Your business might already be listed. Claim your profile to start
              receiving leads today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-[#E07A5F] hover:bg-[#d66a4e] text-white font-bold py-6 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/pro/claim">Find & Claim My Business</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#3D5A80] font-bold py-6 px-8 rounded-full text-lg transition-all"
            >
              <Link to="/pro/register">Create New Profile</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
