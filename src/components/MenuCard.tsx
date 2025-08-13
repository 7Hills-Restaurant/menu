import React from 'react';
import { MenuItem } from '@/data/menuData';
import { Card } from '@/components/ui/card';

interface MenuCardProps {
  item: MenuItem;
  imageUrl?: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({ 
  item, 
  imageUrl = `https://via.placeholder.com/200x200/F5F5DC/8B7355?text=${encodeURIComponent(item.name.slice(0, 15))}` 
}) => {
  return (
    <Card className="group overflow-hidden bg-card border-border shadow-menu-card hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="aspect-square overflow-hidden bg-warm-neutral">
        {/* Replace this placeholder image URL with your actual images */}
        <img
          src={imageUrl}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground text-lg leading-tight group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <div className={`inline-flex items-center justify-center w-3 h-3 rounded-full flex-shrink-0 mt-1 ${
            item.isVeg ? 'bg-veg-indicator' : 'bg-non-veg-indicator'
          }`}>
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-price-text">
            €{item.price.toFixed(2)}
          </span>
          
          {item.subcategory && (
            <span className="px-2 py-1 text-xs font-medium bg-category-bg text-muted-foreground rounded-full">
              {item.subcategory}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};