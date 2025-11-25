import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  name: string;
  slug: string;
  icon: LucideIcon;
  count: number;
  isMostRequested?: boolean;
  locationLabel?: string;
}

export function CategoryCard({ 
  name, 
  slug, 
  icon: Icon, 
  count, 
  isMostRequested,
  locationLabel = "Marbella"
}: CategoryCardProps) {
  const { t } = useLanguage();

  return (
    <Link to={`/trades/${slug}`} className="block h-full">
      <div className="relative h-full bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 overflow-hidden">
        
        {/* Subtle Background Image Reveal */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg')] bg-cover bg-center opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Most Requested Badge */}
        {isMostRequested && (
          <div className="absolute top-3 right-3 bg-[#E07A5F] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide z-10">
            Most Requested
          </div>
        )}

        <div className="relative z-10 flex flex-col items-center text-center h-full">
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
            "bg-[#F9F7F2] text-[#81B29A] group-hover:bg-[#E07A5F] group-hover:text-white"
          )}>
            <Icon className="h-8 w-8 transition-colors" />
          </div>
          
          <h3 className="font-serif font-bold text-lg text-[#0a1f44] mb-2 group-hover:text-[#E07A5F] transition-colors">
            {name}
          </h3>
          
          <p className="text-sm text-slate-500 font-medium mt-auto">
            {locationLabel}: {count} Pros
          </p>
        </div>
      </div>
    </Link>
  );
}
