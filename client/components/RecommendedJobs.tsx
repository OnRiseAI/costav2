import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface Job {
  tag: string;
  title: string;
  description: string;
  slug: string;
}

const recommendedJobs: Job[] = [
  {
    tag: 'Seasonal',
    title: 'Smart Thermostats',
    description: 'Ensure optimal warmth this winter with smart thermostat control',
    slug: 'smart-thermostats',
  },
  {
    tag: 'Seasonal',
    title: 'Roofing Repairs',
    description: 'Before the winter freezes, ensure your roof is leak-free',
    slug: 'roofing-repairs',
  },
  {
    tag: 'Seasonal',
    title: 'Chimney Sweep',
    description: 'Ensure holiday warmth with a clean chimney sweep',
    slug: 'chimney-sweep',
  },
  {
    tag: 'Seasonal',
    title: 'Gas Central Heating Servicing',
    description: 'Secure compliance for winter nears',
    slug: 'gas-heating-service',
  },
  {
    tag: 'Popular',
    title: 'Pool Winterization',
    description: 'Protect your pool for the season ahead',
    slug: 'pool-winterization',
  },
  {
    tag: 'Trending',
    title: 'Solar Panel Installation',
    description: 'Reduce energy costs with renewable solar',
    slug: 'solar-panels',
  },
];

export function RecommendedJobs() {
  return (
    <div className="bg-gray-50 py-12 relative overflow-hidden">
      {/* Background Enhancement */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-gray-50 to-white"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Recommended jobs</h2>
          <button className="hidden md:block text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4 min-w-min">
            {recommendedJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex-shrink-0 w-72"
              >
                <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
                  <X className="h-5 w-5" />
                </button>

                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {job.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-2 pr-6">{job.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{job.description}</p>

                <Link
                  to={`/post-job?service=${job.slug}`}
                  className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-semibold text-sm transition-colors"
                >
                  Find a tradesperson
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
