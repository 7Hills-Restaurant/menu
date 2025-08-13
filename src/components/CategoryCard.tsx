import React from 'react';
import { Card } from './ui/card';
import { ChevronRight, Utensils } from 'lucide-react';
import { MenuCategory } from '@/data/menuData';

interface CategoryCardProps {
  category: MenuCategory;
  onClick: () => void;
  itemCount: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, itemCount }) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden bg-card border-border shadow-category-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Utensils className="w-6 h-6 text-primary" />
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        
        <p className="text-sm text-muted-foreground">
          {itemCount} item{itemCount !== 1 ? 's' : ''}
        </p>
        
        {category.subcategories && (
          <div className="mt-3 flex flex-wrap gap-1">
            {category.subcategories.slice(0, 2).map((sub, index) => (
              <span 
                key={sub}
                className="text-xs bg-accent/50 text-accent-foreground px-2 py-1 rounded-full"
              >
                {sub}
              </span>
            ))}
            {category.subcategories.length > 2 && (
              <span className="text-xs text-muted-foreground">
                +{category.subcategories.length - 2} more
              </span>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};