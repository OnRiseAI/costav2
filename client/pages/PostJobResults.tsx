import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Phone, MapPin, Star, CheckCircle, Shield } from 'lucide-react';
import { searchTradespeople } from '@/data/tradespeople';

export default function PostJobResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get('category') || '';
  const option = searchParams.get('option') || '';
  const postcode = searchParams.get('postcode') || '';
  const [jobDescription, setJobDescription] = useState('');
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedTradesperson, setSelectedTradesperson] = useState<any>(null);
  const [timing, setTiming] = useState('flexible');

  const tradespeople = searchTradespeople(category, '');

  const handleRequestQuote = (tradesperson: any) => {
    setSelectedTradesperson(tradesperson);
    setShowQuoteForm(true);
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  if (showQuoteForm && selectedTradesperson) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container-custom py-8">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setShowQuoteForm(false)}
              className="text-muted-foreground hover:text-foreground mb-6 flex items-center gap-2"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              Back
            </button>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0">
                  {selectedTradesperson.profilePhoto ? (
                    <img 
                      src={selectedTradesperson.profilePhoto} 
                      alt={selectedTradesperson.businessName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-400">
                      {selectedTradesperson.businessName.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{selectedTradesperson.businessName}</h2>
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-8 text-foreground">Request a quote</h1>

              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold mb-3">Describe your job</label>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Tell us a bit about your job! Remember, do not include personal details like your name, phone number, address, or email at this stage."
                    className="w-full border-2 border-gray-200 rounded-xl p-4 min-h-[150px] focus:border-primary focus:outline-none resize-none"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>Min characters: 50</span>
                    <span>{jobDescription.length}/500</span>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-3">
                    When would you like the job to start?
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: 'flexible', label: "I'm flexible on the start date" },
                      { value: 'urgent', label: "It's urgent (within 48 hours)" },
                      { value: '2weeks', label: 'Within 2 weeks' },
                      { value: '1month', label: 'Within 1 month' },
                      { value: 'budgeting', label: "I'm budgeting / researching" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-primary transition-colors"
                      >
                        <input
                          type="radio"
                          name="timing"
                          value={option.value}
                          checked={timing === option.value}
                          onChange={(e) => setTiming(e.target.value)}
                          className="w-5 h-5 text-primary"
                        />
                        <span className="text-lg">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
                  disabled={jobDescription.length < 50}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-accent py-4">
        <div className="container-custom">
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={`${option} in ${postcode}`}
              readOnly
              className="flex-1 bg-white rounded-full px-6 py-3 text-lg"
            />
            <Button className="bg-primary hover:bg-primary/90 rounded-full px-8">
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">
            {option} in {postcode} ({tradespeople.length})
          </h1>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Describe your job</h2>
            <p className="text-muted-foreground mb-4">
              Give us the details of your job and we'll send it to specialist trades for you
            </p>
            <textarea
              placeholder="When would you like the job to start?"
              className="w-full border-2 border-gray-200 rounded-xl p-4 min-h-[100px] focus:border-primary focus:outline-none resize-none"
            />
          </div>

          <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 w-fit">
            <span className="font-medium">Sort by:</span>
            <select className="bg-transparent border-none focus:outline-none font-semibold">
              <option>Most relevant</option>
              <option>Highest rated</option>
              <option>Most reviews</option>
            </select>
          </div>

          {tradespeople.slice(0, 5).map((tradesperson) => (
            <div key={tradesperson.slug} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0 relative">
                  {tradesperson.profilePhoto ? (
                    <img 
                      src={tradesperson.profilePhoto} 
                      alt={tradesperson.businessName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-400">
                      {tradesperson.businessName.charAt(0)}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{tradesperson.businessName}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      {tradesperson.rating.toFixed(2)}
                      <span className="text-xs">({tradesperson.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Operates in {postcode}</span>
                  </div>
                </div>
              </div>

              {tradesperson.verified && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Services & skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 text-sm text-primary">
                      <CheckCircle className="h-4 w-4" />
                      <span>{tradesperson.tradeCategory}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-primary">
                      <CheckCircle className="h-4 w-4" />
                      <span>Extensions / Conversions</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  size="lg"
                  className="flex-1 bg-accent hover:bg-accent/90 text-lg py-6"
                  onClick={() => handleRequestQuote(tradesperson)}
                >
                  Request a quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 text-lg py-6 border-2"
                  onClick={() => handleCall('+34-123-456-789')}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
