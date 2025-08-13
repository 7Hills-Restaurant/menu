import React from 'react';
import { MenuItem, MenuCategory } from '@/data/menuData';
import { MenuCard } from './MenuCard';

interface CategorySectionProps {
  category: MenuCategory;
  items: MenuItem[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category, items }) => {
  if (items.length === 0) return null;

  // Group items by subcategory if subcategories exist
  const itemsBySubcategory = category.subcategories
    ? category.subcategories.reduce((acc, subcategory) => {
        acc[subcategory] = items.filter(item => item.subcategory === subcategory);
        return acc;
      }, {} as Record<string, MenuItem[]>)
    : { '': items };

  return (
    <section className="mb-12">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {category.name}
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full"></div>
      </div>

      {Object.entries(itemsBySubcategory).map(([subcategory, subcategoryItems]) => {
        if (subcategoryItems.length === 0) return null;
        
        return (
          <div key={subcategory || 'main'} className="mb-8 last:mb-0">
            {subcategory && (
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 pl-2">
                {subcategory}
              </h3>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subcategoryItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};