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
import { CategoryCard } from '@/components/CategoryCard';
import { TradespersonCard } from '@/components/TradespersonCard';
import { ReviewCard } from '@/components/ReviewCard';
import { StatsCounter } from '@/components/StatsCounter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { getFeaturedTradespeople } from '@/data/tradespeople';

export default function Index() {
  const { t } = useLanguage();

  const categories = [
    { name: t('category.poolMaintenance'), slug: 'pool-maintenance', icon: Droplets, count: 4 },
    { name: t('category.airConditioning'), slug: 'air-conditioning', icon: Wind, count: 4 },
    { name: t('category.plumbers'), slug: 'plumbers', icon: Wrench, count: 4 },
    { name: t('category.electricians'), slug: 'electricians', icon: Zap, count: 4 },
    { name: t('category.builders'), slug: 'builders', icon: Hammer, count: 4 },
    { name: t('category.painters'), slug: 'painters', icon: PaintBucket, count: 3 },
    { name: t('category.locksmiths'), slug: 'locksmiths', icon: Key, count: 3 },
    { name: t('category.gardeners'), slug: 'gardeners', icon: Leaf, count: 4 },
    { name: t('category.pestControl'), slug: 'pest-control', icon: Bug, count: 3 },
    { name: t('category.propertyMaintenance'), slug: 'property-maintenance', icon: Home, count: 4 },
  ];

  const featuredTradespeople = getFeaturedTradespeople(3);

  const reviews = [
    {
      reviewerName: 'Sarah M.',
      rating: 5,
      jobType: 'Pool Repair',
      reviewText:
        'Miguel was fantastic! He diagnosed our pool issue quickly and had it fixed the same day. Very professional and reasonably priced. Highly recommend!',
      date: '2 weeks ago',
      verified: true,
    },
    {
      reviewerName: 'James R.',
      rating: 5,
      jobType: 'AC Installation',
      reviewText:
        'Cool Air Solutions installed our new AC units. They were punctual, clean, and the installation was perfect. Our house has never been cooler!',
      date: '1 month ago',
      verified: true,
    },
    {
      reviewerName: 'Anna K.',
      rating: 5,
      jobType: 'Electrical Rewiring',
      reviewText:
        'Excellent service from German Precision Electric. They rewired our villa professionally and explained everything clearly. True professionals!',
      date: '3 weeks ago',
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-primary-700 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-2xl">
              <SearchBar variant="hero" />
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

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-center mb-16">{t('how.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('how.step1.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('how.step1.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('how.step2.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('how.step2.desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('how.step3.title')}</h3>
              <p className="text-muted-foreground leading-relaxed">{t('how.step3.desc')}</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                slug={category.slug}
                icon={category.icon}
                count={category.count}
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
            <h2 className="mb-4">Featured Tradespeople</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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

      {/* Reviews Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">{t('reviews.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta.homeowner.title')}</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
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
