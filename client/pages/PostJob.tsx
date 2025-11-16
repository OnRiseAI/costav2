import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, MapPin, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const categories = [
  { slug: 'plumbers', name: 'Plumber', icon: '🔧', color: 'bg-blue-50 hover:bg-blue-100' },
  { slug: 'electricians', name: 'Electrician', icon: '⚡', color: 'bg-yellow-50 hover:bg-yellow-100' },
  { slug: 'builders', name: 'Builder', icon: '🏗️', color: 'bg-orange-50 hover:bg-orange-100' },
  { slug: 'painters', name: 'Painter / Decorator', icon: '🎨', color: 'bg-purple-50 hover:bg-purple-100' },
  { slug: 'gardeners', name: 'Gardener', icon: '🌿', color: 'bg-green-50 hover:bg-green-100' },
  { slug: 'pool-maintenance', name: 'Pool Maintenance', icon: '💧', color: 'bg-cyan-50 hover:bg-cyan-100' },
  { slug: 'air-conditioning', name: 'Air Conditioning', icon: '❄️', color: 'bg-blue-50 hover:bg-blue-100' },
  { slug: 'locksmiths', name: 'Locksmith', icon: '🔑', color: 'bg-gray-50 hover:bg-gray-100' },
];

const tradeOptions: Record<string, { question: string; options: Array<{ label: string; sublabel?: string }> }> = {
  builders: {
    question: 'What building work do you need?',
    options: [
      { label: 'Work inside the property' },
      { label: 'Work outside the property' },
      { label: 'Extension or conversion' },
      { label: 'Building a house' },
      { label: 'Listed, period or heritage property' },
      { label: 'Outbuildings', sublabel: 'garages, garden studios, workshops etc.' },
      { label: 'Planning, design & support' },
    ],
  },
  plumbers: {
    question: 'What plumbing work do you need?',
    options: [
      { label: 'Bathroom installation' },
      { label: 'Emergency repairs' },
      { label: 'Boiler installation or repair' },
      { label: 'Radiator installation' },
      { label: 'Pipe work' },
      { label: 'Kitchen plumbing' },
      { label: 'Other / I\'m not sure' },
    ],
  },
  electricians: {
    question: 'What electrical work do you need?',
    options: [
      { label: 'Rewiring' },
      { label: 'Lighting installation' },
      { label: 'Fuse box upgrade' },
      { label: 'Socket installation' },
      { label: 'Electrical inspection' },
      { label: 'Emergency repairs' },
      { label: 'Other / I\'m not sure' },
    ],
  },
  painters: {
    question: 'What painting work do you need?',
    options: [
      { label: 'Interior painting' },
      { label: 'Exterior painting' },
      { label: 'Wallpapering' },
      { label: 'Full house decoration' },
      { label: 'Commercial painting' },
      { label: 'Other / I\'m not sure' },
    ],
  },
  gardeners: {
    question: 'What gardening work do you need?',
    options: [
      { label: 'Garden maintenance' },
      { label: 'Landscaping' },
      { label: 'Tree surgery' },
      { label: 'Lawn care' },
      { label: 'Fencing' },
      { label: 'Patio or decking' },
      { label: 'Other / I\'m not sure' },
    ],
  },
};

export default function PostJob() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [step, setStep] = useState<'category' | 'details' | 'location'>('category');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [postcode, setPostcode] = useState<string>('');

  const handleCategorySelect = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    if (tradeOptions[categorySlug]) {
      setStep('details');
    } else {
      setStep('location');
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setStep('location');
  };

  const handleSearch = () => {
    if (postcode) {
      navigate(`/post-job/results?category=${selectedCategory}&option=${encodeURIComponent(selectedOption)}&postcode=${encodeURIComponent(postcode)}`);
    }
  };

  const handleBack = () => {
    if (step === 'location') {
      if (tradeOptions[selectedCategory]) {
        setStep('details');
      } else {
        setStep('category');
      }
    } else if (step === 'details') {
      setStep('category');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8 md:py-12">
        {step === 'category' && (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Browse our most popular categories
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Select the trade you need help with
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => handleCategorySelect(category.slug)}
                  className={`${category.color} border-2 border-transparent hover:border-primary rounded-2xl p-8 transition-all duration-200 flex flex-col items-center justify-center gap-4 min-h-[160px]`}
                >
                  <div className="text-5xl">{category.icon}</div>
                  <span className="font-semibold text-lg text-center text-foreground">
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'details' && tradeOptions[selectedCategory] && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <button
                onClick={handleBack}
                className="text-muted-foreground hover:text-foreground mb-6 flex items-center gap-2"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back
              </button>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
                {tradeOptions[selectedCategory].question}
              </h2>
              <div className="space-y-3">
                {tradeOptions[selectedCategory].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(option.label)}
                    className="w-full border-2 border-gray-200 rounded-xl p-4 hover:border-primary transition-colors flex items-center justify-between group text-left"
                  >
                    <div>
                      <div className="font-medium text-lg text-foreground group-hover:text-primary">
                        {option.label}
                      </div>
                      {option.sublabel && (
                        <div className="text-sm text-muted-foreground mt-1">
                          {option.sublabel}
                        </div>
                      )}
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 'location' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <button
                onClick={handleBack}
                className="text-muted-foreground hover:text-foreground mb-6 flex items-center gap-2"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
                Back
              </button>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                What's your postcode?
              </h2>
              <p className="text-muted-foreground mb-8">
                We use this to make sure the tradesperson operates in your area.
              </p>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    placeholder="e.g., 29600"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-4 text-lg focus:border-primary focus:outline-none"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2">
                    <Target className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>
                <Button
                  onClick={handleSearch}
                  size="lg"
                  className="px-8 text-lg h-auto py-4 bg-accent hover:bg-accent/90"
                  disabled={!postcode}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
