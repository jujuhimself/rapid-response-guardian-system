
import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BackNavigationProps {
  title?: string;
  showHome?: boolean;
  className?: string;
}

export function BackNavigation({ 
  title, 
  showHome = true, 
  className 
}: BackNavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Handle back navigation with error handling
  const handleBack = () => {
    try {
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Navigation error:', error);
      navigate('/');
    }
  };
  
  // Generate breadcrumb path components
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  return (
    <div className={cn("flex flex-col space-y-2 mb-4 bg-white p-4 rounded-lg shadow-sm border", className)}>
      <div className="flex items-center space-x-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleBack} 
          className="flex items-center hover:bg-orange-50 border-orange-200"
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Back
        </Button>
        
        {showHome && (
          <Button 
            variant="ghost" 
            size="sm" 
            asChild
            className="flex items-center hover:bg-orange-50"
          >
            <Link to="/">
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
          </Button>
        )}
      </div>
      
      {/* Breadcrumb path */}
      <div className="flex items-center text-sm text-gray-600">
        <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
        {pathSegments.map((segment, index) => {
          // Create path up to this segment
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          
          // Format segment name
          let name = segment.replace(/-/g, ' ');
          name = name.charAt(0).toUpperCase() + name.slice(1);
          
          return (
            <React.Fragment key={path}>
              <span className="mx-1 text-gray-400">/</span>
              {isLast ? (
                <span className="font-medium text-orange-600">{title || name}</span>
              ) : (
                <Link to={path} className="hover:text-orange-600 transition-colors">{name}</Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default BackNavigation;
