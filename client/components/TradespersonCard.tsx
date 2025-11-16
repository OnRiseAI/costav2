import { Link } from 'react-router-dom';
import { Star, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface TradespersonCardProps {
  slug: string;
  businessName: string;
  tradeCategory: string;
  location: string;
  rating: number;
  reviewCount: number;
  profilePhoto?: string;
  verified?: boolean;
  jobsCompleted?: number;
  yearsInBusiness?: number;
}

export function TradespersonCard({
  slug,
  businessName,
  tradeCategory,
  location,
  rating,
  reviewCount,
  profilePhoto,
  verified = false,
  jobsCompleted,
  yearsInBusiness,
}: TradespersonCardProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl border border-border hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          {/* Profile Photo */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
              {profilePhoto ? (
                <img src={profilePhoto} alt={businessName} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">
                  {businessName.charAt(0)}
                </div>
              )}
            </div>
            {verified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-trust rounded-full flex items-center justify-center border-2 border-white">
                <CheckCircle className="h-4 w-4 text-white" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-foreground mb-1 truncate">{businessName}</h3>
            <p className="text-sm text-muted-foreground mb-2">{tradeCategory}</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="font-semibold text-foreground">{rating.toFixed(1)}</span>
          <span className="text-sm text-muted-foreground">({reviewCount} {t('common.reviews')})</span>
        </div>

        {/* Stats */}
        {(jobsCompleted || yearsInBusiness) && (
          <div className="flex gap-4 mb-4 text-sm">
            {jobsCompleted && (
              <div className="text-muted-foreground">
                <span className="font-semibold text-foreground">{jobsCompleted}</span> jobs completed
              </div>
            )}
            {yearsInBusiness && (
              <div className="text-muted-foreground">
                <span className="font-semibold text-foreground">{yearsInBusiness}</span> years
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <Link to={`/tradesperson/${slug}`}>
          <Button className="w-full" variant="outline">
            {t('common.viewProfile')}
          </Button>
        </Link>
      </div>
    </div>
  );
}
