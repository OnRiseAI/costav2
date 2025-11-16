import { Link } from 'react-router-dom';
import { Home, Search, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-12 w-12 text-destructive" />
          </div>
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="gap-2">
                <Home className="h-5 w-5" />
                Back to Homepage
              </Button>
            </Link>
            <Link to="/search">
              <Button size="lg" variant="outline" className="gap-2">
                <Search className="h-5 w-5" />
                Find Tradespeople
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
