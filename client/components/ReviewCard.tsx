import { Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ReviewCardProps {
  reviewerName: string;
  rating: number;
  jobType: string;
  reviewText: string;
  date: string;
  verified?: boolean;
}

export function ReviewCard({
  reviewerName,
  rating,
  jobType,
  reviewText,
  date,
  verified = false,
}: ReviewCardProps) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-foreground">{reviewerName}</h4>
            {verified && (
              <div className="flex items-center gap-1 text-xs text-trust bg-trust/10 px-2 py-1 rounded-full">
                <CheckCircle className="h-3 w-3" />
                {t('reviews.verified')}
              </div>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{jobType}</p>
        </div>
        <div className="text-xs text-muted-foreground">{date}</div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-foreground leading-relaxed">{reviewText}</p>
    </div>
  );
}
