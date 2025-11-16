import { useSearchParams } from 'react-router-dom';
import { MapPin, Star, SlidersHorizontal } from 'lucide-react';
import { TradespersonCard } from '@/components/TradespersonCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useState, useMemo } from 'react';
import { searchTradespeople } from '@/data/tradespeople';
import { SearchBar } from '@/components/SearchBar';
import { TrustSection } from '@/components/TrustSection';

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const trade = searchParams.get('trade') || '';
  const location = searchParams.get('location') || '';
  const { t } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<string>('All Ratings');
  const [sortBy, setSortBy] = useState<string>('recommended');

  const allTradespeople = searchTradespeople(trade, location);

  const filteredAndSortedTradespeople = useMemo(() => {
    let filtered = [...allTradespeople];

    if (selectedLocations.length > 0 && !selectedLocations.includes('All Locations')) {
      filtered = filtered.filter(tp => selectedLocations.includes(tp.location));
    }

    if (selectedRating !== 'All Ratings') {
      const minRating = selectedRating === '5 Stars' ? 5 :
                        selectedRating === '4+ Stars' ? 4 :
                        selectedRating === '3+ Stars' ? 3 : 0;
      filtered = filtered.filter(tp => tp.rating >= minRating);
    }

    switch (sortBy) {
      case 'highest-rated':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'most-reviews':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'newest':
        filtered.reverse();
        break;
      default:
        break;
    }

    return filtered;
  }, [allTradespeople, selectedLocations, selectedRating, sortBy]);

  const handleLocationChange = (location: string) => {
    if (location === 'All Locations') {
      setSelectedLocations([]);
    } else {
      setSelectedLocations(prev =>
        prev.includes(location)
          ? prev.filter(l => l !== location)
          : [...prev, location]
      );
    }
  };

  const handleClearFilters = () => {
    setSelectedLocations([]);
    setSelectedRating('All Ratings');
  };

  const locations = ['All Locations', 'Marbella', 'Málaga', 'Fuengirola', 'Estepona', 'Torremolinos', 'Mijas', 'Nerja', 'Benalmádena'];
  const ratings = ['All Ratings', '5 Stars', '4+ Stars', '3+ Stars'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="container-custom py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Search Results</h1>
          <SearchBar variant="compact" />
          {(trade || location) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {trade && (
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  Trade: {trade}
                </div>
              )}
              {location && (
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  Location: {location}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-border p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6 lg:mb-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  Filters
                </h3>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden text-primary"
                >
                  {showFilters ? 'Hide' : 'Show'}
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Location Filter */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </label>
                  <div className="space-y-2">
                    {locations.map((loc) => (
                      <label key={loc} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                          checked={loc === 'All Locations' ? selectedLocations.length === 0 : selectedLocations.includes(loc)}
                          onChange={() => handleLocationChange(loc)}
                        />
                        <span className="text-sm text-muted-foreground">{loc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Rating
                  </label>
                  <div className="space-y-2">
                    {ratings.map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          className="border-gray-300"
                          checked={selectedRating === rating}
                          onChange={() => setSelectedRating(rating)}
                        />
                        <span className="text-sm text-muted-foreground">{rating}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full" onClick={handleClearFilters}>
                  Clear Filters
                </Button>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {filteredAndSortedTradespeople.length === 0 ? (
              <div className="bg-white rounded-xl border border-border p-12 text-center">
                <h3 className="text-xl font-semibold mb-2">No Results Found</h3>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any tradespeople matching your search criteria.
                </p>
                <Button>Browse All Categories</Button>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">{filteredAndSortedTradespeople.length}</span> professionals
                  </p>
                  <select
                    className="border border-input rounded-lg px-4 py-2 text-sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="recommended">Sort by: Recommended</option>
                    <option value="highest-rated">Highest Rated</option>
                    <option value="most-reviews">Most Reviews</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>

                <div className="space-y-8">
                  <TrustSection />

                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredAndSortedTradespeople.map((tradesperson) => (
                      <TradespersonCard key={tradesperson.slug} {...tradesperson} />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16 mt-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Post your job and receive quotes from verified professionals in your area
          </p>
          <Link to="/post-job">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Post a Job Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
