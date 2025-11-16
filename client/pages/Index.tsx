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
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { LiveActivity } from '@/components/LiveActivity';
import { TrustIndicators } from '@/components/TrustIndicators';
import { Newsletter } from '@/components/Newsletter';
import { AppStoreBadges } from '@/components/AppStoreBadges';
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
      {/* Live Activity Feed */}
      <LiveActivity />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-600 to-primary-700 text-white overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10 pattern-dots text-white"></div>

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1600&dpr=2"
            alt="Professional tradesperson at work"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-600/85 to-primary-700/90"></div>
        </div>
        <div className="container-custom py-20 md:py-28 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/95 mb-10 leading-relaxed animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
              Connect with verified professionals
            </p>

            {/* Trust Indicators */}
            <div className="animate-fade-in mb-10" style={{ animationDelay: '0.3s' }}>
              <TrustIndicators />
            </div>

            <div className="bg-white p-5 md:p-7 rounded-2xl shadow-2xl animate-scale-in max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
              <SearchBar variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pattern-dots text-primary"></div>
        <div className="container-custom py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="animate-counter" style={{ animationDelay: '0.1s' }}>
              <StatsCounter icon={Users} value="150+" label={t('stats.tradespeople')} colorScheme="blue" />
            </div>
            <div className="animate-counter" style={{ animationDelay: '0.3s' }}>
              <StatsCounter icon={Star} value="2,400+" label={t('stats.reviews')} colorScheme="orange" />
            </div>
            <div className="animate-counter" style={{ animationDelay: '0.5s' }}>
              <StatsCounter icon={Briefcase} value="5,600+" label={t('stats.jobs')} colorScheme="green" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Trade Categories Section */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-24 relative">
        <div className="absolute inset-0 opacity-5 pattern-grid text-gray-400"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 animate-fade-in">
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

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pattern-dots text-gray-400"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-center mb-16 text-2xl md:text-3xl lg:text-4xl animate-fade-in">{t('how.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                1
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{t('how.step1.title')}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{t('how.step1.desc')}</p>
            </div>
            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                2
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{t('how.step2.title')}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{t('how.step2.desc')}</p>
            </div>
            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                3
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{t('how.step3.title')}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{t('how.step3.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tradespeople Section */}
      <section className="bg-gray-50 py-16 md:py-24 relative">
        <div className="absolute inset-0 opacity-5 pattern-dots text-gray-400"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Featured Tradespeople</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Top-rated professionals ready to help with your next project
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredTradespeople.map((tradesperson, index) => (
              <div key={tradesperson.slug} className="animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <TradespersonCard {...tradesperson} />
              </div>
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
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 border-t border-border relative">
        <div className="absolute inset-0 opacity-5 pattern-grid text-gray-400"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">Recent Projects</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real projects completed by our verified professionals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Project 1 - Pool & Patio */}
            <div className="group cursor-pointer animate-slide-up" style={{ animationDelay: '0.1s' }}>
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
            <div className="group cursor-pointer animate-slide-up" style={{ animationDelay: '0.3s' }}>
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
            <div className="group cursor-pointer animate-slide-up" style={{ animationDelay: '0.5s' }}>
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
      <section className="bg-white py-16 md:py-24 relative">
        <div className="absolute inset-0 opacity-5 pattern-dots text-gray-400"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">{t('reviews.title')}</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real reviews from real customers across Costa del Sol
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Jobs Section */}
      <RecommendedJobs />

      {/* Newsletter Section */}
      <Newsletter />

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
