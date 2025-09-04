import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 text-brand-ink">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-brand-ink">Page not found</h2>
        <p className="text-lg text-brand-slate mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          asChild 
          className="bg-brand-royal hover:bg-brand-royal/90 text-white"
        >
          <Link to="/" className="inline-flex items-center gap-2">
            <Home size={18} />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
