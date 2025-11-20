import { Link } from "react-router-dom";
import { ShieldCheck, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function MegaFooter() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    if (window.innerWidth < 768) {
      setOpenSection(openSection === title ? null : title);
    }
  };

  const sections = [
    {
      title: "POPULAR TRADES",
      links: [
        { name: "Plumbers", href: "/trades/plumbers" },
        { name: "Electricians", href: "/trades/electricians" },
        { name: "Air Conditioning", href: "/trades/air-conditioning" },
        { name: "Builders", href: "/trades/builders" },
        { name: "Pool Maintenance", href: "/trades/pool-maintenance" },
        { name: "Painters", href: "/trades/painters" },
        { name: "Locksmiths", href: "/trades/locksmiths" },
        { name: "Handyman Services", href: "/trades/handyman" },
        { name: "Gardeners", href: "/trades/gardeners" },
        { name: "Cleaners", href: "/trades/cleaning" },
      ],
    },
    {
      title: "SPECIALIST SERVICES",
      links: [
        { name: "Solar Panel Installers", href: "/trades/solar" },
        { name: "Leak Detection", href: "/trades/leak-detection" },
        { name: "Roofing & Guttering", href: "/trades/roofing" },
        { name: "Tilers & Plasterers", href: "/trades/tilers" },
        { name: "Bathroom Fitters", href: "/trades/bathroom" },
        { name: "Kitchen Installers", href: "/trades/kitchen" },
        { name: "Window Cleaners", href: "/trades/window-cleaning" },
        { name: "Pest Control", href: "/trades/pest-control" },
        { name: "Rubbish Removal", href: "/trades/rubbish-removal" },
        { name: "Appliance Repair", href: "/trades/appliance-repair" },
      ],
    },
    {
      title: "AREAS COVERED",
      links: [
        { name: "Marbella", href: "/areas/marbella" },
        { name: "Estepona", href: "/areas/estepona" },
        { name: "Mijas Costa", href: "/areas/mijas-costa" },
        { name: "Fuengirola", href: "/areas/fuengirola" },
        { name: "Benalmadena", href: "/areas/benalmadena" },
        { name: "Torremolinos", href: "/areas/torremolinos" },
        { name: "Sotogrande", href: "/areas/sotogrande" },
        { name: "Manilva", href: "/areas/manilva" },
        { name: "Casares", href: "/areas/casares" },
        { name: "Malaga", href: "/areas/malaga" },
      ],
    },
    {
      title: "LOCAL AREAS",
      links: [
        { name: "Puerto Banus", href: "/areas/puerto-banus" },
        { name: "Nueva Andalucia", href: "/areas/nueva-andalucia" },
        { name: "San Pedro de Alcantara", href: "/areas/san-pedro" },
        { name: "La Cala de Mijas", href: "/areas/la-cala" },
        { name: "Calahonda", href: "/areas/calahonda" },
        { name: "Riviera del Sol", href: "/areas/riviera" },
        { name: "Elviria", href: "/areas/elviria" },
        { name: "Guadalmina", href: "/areas/guadalmina" },
        { name: "Los Monteros", href: "/areas/los-monteros" },
        { name: "Benahavis", href: "/areas/benahavis" },
      ],
    },
    {
      title: "URGENT HELP",
      links: [
        { name: "24/7 Emergency Plumber", href: "/trades/emergency-plumber" },
        { name: "Emergency Electrician", href: "/trades/emergency-electrician" },
        { name: "Emergency Locksmith", href: "/trades/emergency-locksmith" },
        { name: "Burst Pipe Repair", href: "/trades/burst-pipe" },
      ],
      extra: (
        <div className="mt-4 flex items-center gap-2 text-green-400">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-xs font-medium">Verified by CostaTrades</span>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#111827] text-[#9CA3AF] py-12 border-t border-gray-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-5 gap-8 md:gap-4">
          {sections.map((section) => (
            <div key={section.title} className="border-b border-gray-800 md:border-none pb-4 md:pb-0">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full md:cursor-default group"
              >
                <h4 className="text-sm font-bold text-white mb-2 md:mb-4 uppercase tracking-wider">
                  {section.title}
                </h4>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 md:hidden transition-transform duration-200",
                    openSection === section.title ? "rotate-180" : ""
                  )}
                />
              </button>
              
              <ul
                className={cn(
                  "space-y-2 overflow-hidden transition-all duration-300 md:block",
                  openSection === section.title ? "max-h-96 mt-2" : "max-h-0 md:max-h-full"
                )}
              >
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[13px] hover:text-white transition-colors block py-1 md:py-0"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                {section.extra}
              </ul>
            </div>
          ))}
        </div>

        {/* AEO Context Block */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            CostaTrades connects homeowners on the Costa del Sol with verified local tradespeople. Serving Marbella, Estepona, Mijas, and beyond since 2024.
          </p>
        </div>
      </div>
    </div>
  );
}
