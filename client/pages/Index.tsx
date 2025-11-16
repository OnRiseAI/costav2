import { Link } from 'react-router-dom';
import {
  Droplets,
  Wind,
  Wrench,
  Zap,
  Hammer,
  PaintBucket,
  Key,
  Leaf,
  Bug,
  Home,
  Users,
  Star,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import { CategoryCardWithImage } from '@/components/CategoryCardWithImage';
import { TradespersonCard } from '@/components/TradespersonCard';
import { ReviewCard } from '@/components/ReviewCard';
import { StatsCounter } from '@/components/StatsCounter';
import { TrustBadges } from '@/components/TrustBadges';
import { RecentSearches } from '@/components/RecentSearches';
import { RecommendedJobs } from '@/components/RecommendedJobs';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { getFeaturedTradespeople } from '@/data/tradespeople';

export default function Index() {
  const { t } = useLanguage();

  const categories = [
    {
      name: t('category.poolMaintenance'),
      slug: 'pool-maintenance',
      icon: Droplets,
      count: 4,
      imageUrl: 'https://images.pexels.com/photos/6684752/pexels-photo-6684752.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: t('category.airConditioning'),
      slug: 'air-conditioning',
      icon: Wind,
      count: 4,
      imageUrl: 'https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: t('category.plumbers'),
      slug: 'plumbers',
      icon: Wrench,
      count: 4,
      imageUrl: 'https://images.pexels.com/photos/8486928/pexels-photo-8486928.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: t('category.electricians'),
      slug: 'electricians',
      icon: Zap,
      count: 4,
      imageUrl: 'https://images.pexels.com/photos/442160/pexels-photo-442160.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: t('category.builders'),
      slug: 'builders',
      icon: Hammer,
      count: 4,
      imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: t('category.painters'),
      slug: 'painters',
      icon: PaintBucket,
      count: 3,
      imageUrl: 'https://images.pexels.com/photos/7217966/pexels-photo-7217966.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: t('category.locksmiths'),
      slug: 'locksmiths',
      icon: Key,
      count: 3,
      imageUrl: 'https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: t('category.gardeners'),
      slug: 'gardeners',
      icon: Leaf,
      count: 4,
      imageUrl: 'https://images.pexels.com/photos/26827231/pexels-photo-26827231.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: t('category.pestControl'),
      slug: 'pest-control',
      icon: Bug,
      count: 3,
      imageUrl: 'https://images.pexels.com/photos/5025646/pexels-photo-5025646.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: t('category.propertyMaintenance'),
      slug: 'property-maintenance',
      icon: Home,
      count: 4,
      imageUrl: 'https://images.pexels.com/photos/7414938/pexels-photo-7414938.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];

  const featuredTradespeople = getFeaturedTradespeople(3).map((tp, idx) => {
    const photos = [
      'https://images.pexels.com/photos/16552856/pexels-photo-16552856.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      'https://images.pexels.com/photos/19987431/pexels-photo-19987431.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
      'https://images.pexels.com/photos/16552856/pexels-photo-16552856.jpeg?auto=compress&cs=tinysrgb&w=200&h=200',
    ];
    return { ...tp, profilePhoto: photos[idx] };
  });

  const reviews = [
    {
      reviewerName: 'Sarah M.',
      rating: 5,
      jobType: 'Pool Repair',
      reviewText:
        'Miguel was fantastic! He diagnosed our pool issue quickly and had it fixed the same day. Very professional and reasonably priced. Highly recommend!',
      date: '2 weeks ago',
      verified: true,
      avatarUrl: 'https://images.pexels.com/photos/27603433/pexels-photo-27603433.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    },
    {
      reviewerName: 'James R.',
      rating: 5,
      jobType: 'AC Installation',
      reviewText:
        'Cool Air Solutions installed our new AC units. They were punctual, clean, and the installation was perfect. Our house has never been cooler!',
      date: '1 month ago',
      verified: true,
      avatarUrl: 'https://images.pexels.com/photos/31422830/pexels-photo-31422830.png?auto=compress&cs=tinysrgb&w=100&h=100',
    },
    {
      reviewerName: 'Anna K.',
      rating: 5,
      jobType: 'Electrical Rewiring',
      reviewText:
        'Excellent service from German Precision Electric. They rewired our villa professionally and explained everything clearly. True professionals!',
      date: '3 weeks ago',
      verified: true,
      avatarUrl: 'https://images.pexels.com/photos/8951408/pexels-photo-8951408.jpeg?auto=compress&cs=tinysrgb&w=100&h=100',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-600 to-primary-700 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/5025646/pexels-photo-5025646.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Professional tradesperson"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-600/90 to-primary-700/95"></div>
        </div>
        <div className="container-custom py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-2xl mb-6">
              <SearchBar variant="hero" />
            </div>
            <div className="max-w-2xl mx-auto">
              <RecentSearches />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-b border-border">
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCounter icon={Users} value="150+" label={t('stats.tradespeople')} />
            <StatsCounter icon={Star} value="2,400+" label={t('stats.reviews')} />
            <StatsCounter icon={Briefcase} value="5,600+" label={t('stats.jobs')} />
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-2xl md:text-3xl lg:text-4xl">{t('how.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">{t('how.step1.title')}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{t('how.step1.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">{t('how.step2.title')}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{t('how.step2.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">{t('how.step3.title')}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{t('how.step3.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">{t('categories.title')}</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Find verified professionals for any home improvement or maintenance need
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {categories.map((category) => (
              <CategoryCardWithImage
                key={category.slug}
                name={category.name}
                slug={category.slug}
                icon={category.icon}
                count={category.count}
                imageUrl={category.imageUrl}
              />
            ))}
          </div>
          <div className="text-center">
            <Link to="/trades">
              <Button variant="outline" size="lg" className="gap-2">
                {t('categories.viewAll')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tradespeople Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Featured Tradespeople</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Top-rated professionals ready to help with your next project
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredTradespeople.map((tradesperson) => (
              <TradespersonCard key={tradesperson.slug} {...tradesperson} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/search">
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90">
                Browse All Tradespeople
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="bg-white py-16 md:py-24 border-t border-border">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Recent Projects</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real projects completed by our verified professionals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Project 1 - Pool & Patio */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/3209049/pexels-photo-3209049.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pool and patio renovation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Pool Maintenance
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Luxury Pool & Patio Renovation</h3>
              <p className="text-muted-foreground text-sm mb-2">Complete pool restoration and outdoor living space in Marbella</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">5.0 · €8,500</span>
              </div>
            </div>

            {/* Project 2 - Bathroom */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/7614405/pexels-photo-7614405.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern bathroom renovation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Builders & Renovations
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Modern Bathroom Remodel</h3>
              <p className="text-muted-foreground text-sm mb-2">Complete bathroom renovation with walk-in shower in Fuengirola</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">5.0 · €6,200</span>
              </div>
            </div>

            {/* Project 3 - Kitchen */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/8293677/pexels-photo-8293677.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Kitchen renovation planning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Builders & Renovations
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Custom Kitchen Design</h3>
              <p className="text-muted-foreground text-sm mb-2">Full kitchen renovation with custom cabinetry in Málaga</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">5.0 · €12,400</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">{t('reviews.title')}</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real reviews from real customers across Costa del Sol
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Homeowner */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-700 text-white py-16 md:py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{t('cta.homeowner.title')}</h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {t('cta.homeowner.desc')}
          </p>
          <Link to="/post-job">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
              {t('cta.homeowner.button')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
