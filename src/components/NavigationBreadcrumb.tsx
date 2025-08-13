import React from 'react';
import { ChevronLeft, Home } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationBreadcrumbProps {
  currentLevel: 'categories' | 'subcategories' | 'items';
  categoryName?: string;
  subcategoryName?: string;
  onNavigateToCategories: () => void;
  onNavigateToSubcategories?: () => void;
}

export const NavigationBreadcrumb: React.FC<NavigationBreadcrumbProps> = ({
  currentLevel,
  categoryName,
  subcategoryName,
  onNavigateToCategories,
  onNavigateToSubcategories
}) => {
  if (currentLevel === 'categories') return null;

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 text-sm">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onNavigateToCategories}
          className="h-8 px-2 text-muted-foreground hover:text-foreground"
        >
          <Home className="w-4 h-4 mr-1" />
          All Categories
        </Button>
        
        {currentLevel === 'subcategories' && categoryName && (
          <>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium text-foreground">{categoryName}</span>
          </>
        )}
        
        {currentLevel === 'items' && (
          <>
            <span className="text-muted-foreground">/</span>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={categoryName && onNavigateToSubcategories ? onNavigateToSubcategories : onNavigateToCategories}
              className="h-8 px-2 text-muted-foreground hover:text-foreground"
            >
              {categoryName}
            </Button>
            {subcategoryName && (
              <>
                <span className="text-muted-foreground">/</span>
                <span className="font-medium text-foreground">{subcategoryName}</span>
              </>
            )}
          </>
        )}
      </div>
      
      <Button 
        variant="outline" 
        size="sm"
        onClick={currentLevel === 'items' && onNavigateToSubcategories ? onNavigateToSubcategories : onNavigateToCategories}
        className="mt-3"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back
      </Button>
    </div>
  );
};