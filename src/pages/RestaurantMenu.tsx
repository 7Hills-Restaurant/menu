import React, { useState, useMemo } from 'react';
import { menuItems, menuCategories } from '@/data/menuData';
import { SearchAndFilters, VegFilter, SortOption } from '@/components/SearchAndFilters';
import { CategorySection } from '@/components/CategorySection';
import { RestaurantHeader } from '@/components/RestaurantHeader';

export const RestaurantMenu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [vegFilter, setVegFilter] = useState<VegFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('name');

  // Filter and sort menu items
  const filteredAndSortedItems = useMemo(() => {
    let filtered = menuItems.filter(item => {
      // Search filter
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Veg filter
      const matchesVegFilter = 
        vegFilter === 'all' || 
        (vegFilter === 'veg' && item.isVeg) || 
        (vegFilter === 'non-veg' && !item.isVeg);
      
      return matchesSearch && matchesVegFilter;
    });

    // Sort items
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, vegFilter, sortBy]);

  // Group filtered items by category
  const itemsByCategory = useMemo(() => {
    return menuCategories.reduce((acc, category) => {
      acc[category.id] = filteredAndSortedItems.filter(item => item.category === category.id);
      return acc;
    }, {} as Record<string, typeof menuItems>);
  }, [filteredAndSortedItems]);

  const totalItems = filteredAndSortedItems.length;

  return (
    <div className="min-h-screen bg-background">
      <RestaurantHeader />
      
      <main className="container mx-auto px-4 pb-12">
        <SearchAndFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          vegFilter={vegFilter}
          onVegFilterChange={setVegFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Results summary */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {totalItems} item{totalItems !== 1 ? 's' : ''}
            {searchTerm && ` matching "${searchTerm}"`}
            {vegFilter !== 'all' && ` (${vegFilter === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'} only)`}
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-8">
          {menuCategories.map(category => (
            <CategorySection
              key={category.id}
              category={category}
              items={itemsByCategory[category.id] || []}
            />
          ))}
        </div>

        {/* No results message */}
        {totalItems === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-2">No items found</p>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Spice Garden Restaurant</p>
          <p className="text-primary-foreground/80">
            Bringing authentic Indian flavors to your table since 1995
          </p>
        </div>
      </footer>
    </div>
  );
};