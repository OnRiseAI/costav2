import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CategoryCardProps {
  name: string;
  slug: string;
  icon: LucideIcon;
  count: number;
}

export function CategoryCard({ name, slug, icon: Icon, count }: CategoryCardProps) {
  const { t } = useLanguage();

  return (
    <Link to={`/trades/${slug}`}>
      <div className="bg-white rounded-xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
            <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
          </div>
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {count} {t('common.professionals')}
          </p>
        </div>
      </div>
    </Link>
  );
}
