import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { saveRecentSearch } from '@/components/RecentSearches';

interface SearchBarProps {
  variant?: 'hero' | 'compact';
}

export function SearchBar({ variant = 'hero' }: SearchBarProps) {
  const [trade, setTrade] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Save to recent searches
    if (trade) {
      saveRecentSearch(trade, location);
    }

    const params = new URLSearchParams();
    if (trade) params.set('trade', trade);
    if (location) params.set('location', location);
    navigate(`/search?${params.toString()}`);
  };

  const isHero = variant === 'hero';

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className={`flex flex-col ${isHero ? 'md:flex-row gap-4' : 'sm:flex-row gap-2'}`}>
        <div className="flex-1">
          <input
            type="text"
            value={trade}
            onChange={(e) => setTrade(e.target.value)}
            placeholder={t('hero.searchPlaceholder')}
            className={`w-full px-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground ${
              isHero ? 'py-4 text-lg' : 'py-3'
            }`}
          />
        </div>
        <div className="flex-1">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={t('hero.locationPlaceholder')}
            className={`w-full px-4 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground ${
              isHero ? 'py-4 text-lg' : 'py-3'
            }`}
          />
        </div>
        <Button
          type="submit"
          className={`bg-accent hover:bg-accent/90 ${isHero ? 'py-6 px-8 text-lg' : 'px-6'}`}
        >
          <Search className={`${isHero ? 'mr-2 h-5 w-5' : 'mr-2 h-4 w-4'}`} />
          {t('hero.searchButton')}
        </Button>
      </div>
    </form>
  );
}
