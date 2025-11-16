import { useParams } from 'react-router-dom';
import { Wrench, MapPin, Star, SlidersHorizontal } from 'lucide-react';
import { TradespersonCard } from '@/components/TradespersonCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function TradeCategory() {
  const { category } = useParams();
  const { t } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);

  const categoryData: Record<string, { title: string; description: string; icon: string }> = {
    'pool-maintenance': {
      title: t('category.poolMaintenance'),
      description: 'Find expert pool maintenance and repair professionals in Costa del Sol. Our verified specialists handle cleaning, repairs, chemical balancing, and equipment installation.',
      icon: '💧',
    },
    'air-conditioning': {
      title: t('category.airConditioning'),
      description: 'Professional air conditioning installation, repair, and maintenance services across Costa del Sol. Beat the heat with certified AC specialists.',
      icon: '❄️',
    },
    plumbers: {
      title: t('category.plumbers'),
      description: 'Reliable plumbing services for homes and businesses in Costa del Sol. From emergency repairs to full installations, our verified plumbers are ready to help.',
      icon: '🔧',
    },
    electricians: {
      title: t('category.electricians'),
      description: 'Certified electricians serving Costa del Sol. Safe, professional electrical work including installations, repairs, and rewiring projects.',
      icon: '⚡',
    },
    builders: {
      title: t('category.builders'),
      description: 'Trusted builders and renovation specialists in Costa del Sol. Transform your property with experienced construction professionals.',
      icon: '🏗️',
    },
    painters: {
      title: t('category.painters'),
      description: 'Professional painters and decorators across Costa del Sol. High-quality interior and exterior painting services.',
      icon: '🎨',
    },
    locksmiths: {
      title: t('category.locksmiths'),
      description: 'Emergency and standard locksmith services in Costa del Sol. Fast response times and professional security solutions.',
      icon: '🔑',
    },
    gardeners: {
      title: t('category.gardeners'),
      description: 'Expert gardeners and landscaping professionals in Costa del Sol. Create and maintain beautiful outdoor spaces.',
      icon: '🌿',
    },
  };

  const currentCategory = category ? categoryData[category] : null;

  const tradespeople = [
    {
      slug: 'miguel-pool-services',
      businessName: 'Miguel Pool Services',
      tradeCategory: currentCategory?.title || 'Professional Services',
      location: 'Marbella',
      rating: 4.9,
      reviewCount: 87,
      verified: true,
      jobsCompleted: 156,
      yearsInBusiness: 8,
    },
    {
      slug: 'aqua-masters',
      businessName: 'Aqua Masters',
      tradeCategory: currentCategory?.title || 'Professional Services',
      location: 'Málaga',
      rating: 4.8,
      reviewCount: 64,
      verified: true,
      jobsCompleted: 142,
      yearsInBusiness: 6,
    },
    {
      slug: 'costa-pool-experts',
      businessName: 'Costa Pool Experts',
      tradeCategory: currentCategory?.title || 'Professional Services',
      location: 'Fuengirola',
      rating: 5.0,
      reviewCount: 52,
      verified: true,
      jobsCompleted: 98,
      yearsInBusiness: 12,
    },
    {
      slug: 'blue-wave-pools',
      businessName: 'Blue Wave Pools',
      tradeCategory: currentCategory?.title || 'Professional Services',
      location: 'Estepona',
      rating: 4.7,
      reviewCount: 43,
      verified: true,
      jobsCompleted: 87,
      yearsInBusiness: 5,
    },
    {
      slug: 'precision-pool-care',
      businessName: 'Precision Pool Care',
      tradeCategory: currentCategory?.title || 'Professional Services',
      location: 'Torremolinos',
      rating: 4.9,
      reviewCount: 71,
      verified: true,
      jobsCompleted: 134,
      yearsInBusiness: 9,
    },
    {
      slug: 'sun-coast-pools',
      businessName: 'Sun Coast Pools',
      tradeCategory: currentCategory?.title || 'Professional Services',
      location: 'Mijas',
      rating: 4.8,
      reviewCount: 58,
      verified: true,
      jobsCompleted: 103,
      yearsInBusiness: 7,
    },
  ];

  const locations = ['All Locations', 'Marbella', 'Málaga', 'Fuengirola', 'Estepona', 'Torremolinos', 'Mijas', 'Nerja'];
  const ratings = ['All Ratings', '5 Stars', '4+ Stars', '3+ Stars'];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h1>Category Not Found</h1>
          <p className="text-muted-foreground mt-4">The requested trade category could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="container-custom py-12 md:py-16">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-5xl">{currentCategory.icon}</div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{currentCategory.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {currentCategory.description}
              </p>
            </div>
          </div>
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
                    {locations.map((location) => (
                      <label key={location} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-muted-foreground">{location}</span>
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
                        <input type="radio" name="rating" className="border-gray-300" />
                        <span className="text-sm text-muted-foreground">{rating}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{tradespeople.length}</span> professionals
              </p>
              <select className="border border-input rounded-lg px-4 py-2 text-sm">
                <option>Sort by: Recommended</option>
                <option>Highest Rated</option>
                <option>Most Reviews</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {tradespeople.map((tradesperson) => (
                <TradespersonCard key={tradesperson.slug} {...tradesperson} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16 mt-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Post your job and receive quotes from verified {currentCategory.title.toLowerCase()} in your area
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Post a Job Now
          </Button>
        </div>
      </div>
    </div>
  );
}
