import React, { useState, useMemo } from 'react';
import { menuItems, menuCategories } from '@/data/menuData';
import { SearchAndFilters, VegFilter, SortOption } from '@/components/SearchAndFilters';
import { CategorySection } from '@/components/CategorySection';
import { CategoryCard } from '@/components/CategoryCard';
import { SubcategoryCard } from '@/components/SubcategoryCard';
import { NavigationBreadcrumb } from '@/components/NavigationBreadcrumb';
import { MenuCard } from '@/components/MenuCard';
import { RestaurantHeader } from '@/components/RestaurantHeader';

type NavigationLevel = 'categories' | 'subcategories' | 'items';

export const RestaurantMenu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [vegFilter, setVegFilter] = useState<VegFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  
  // Navigation state
  const [currentLevel, setCurrentLevel] = useState<NavigationLevel>('categories');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

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

  // Navigation handlers
  const handleCategoryClick = (categoryId: string) => {
    const category = menuCategories.find(cat => cat.id === categoryId);
    setSelectedCategory(categoryId);
    
    if (category?.subcategories && category.subcategories.length > 0) {
      setCurrentLevel('subcategories');
    } else {
      setCurrentLevel('items');
      setSelectedSubcategory(null);
    }
  };

  const handleSubcategoryClick = (subcategoryName: string) => {
    setSelectedSubcategory(subcategoryName);
    setCurrentLevel('items');
  };

  const handleNavigateToCategories = () => {
    setCurrentLevel('categories');
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };

  const handleNavigateToSubcategories = () => {
    setCurrentLevel('subcategories');
    setSelectedSubcategory(null);
  };

  // Get items count for category/subcategory cards
  const getCategoryItemCount = (categoryId: string) => {
    return menuItems.filter(item => item.category === categoryId).length;
  };

  const getSubcategoryItemCount = (categoryId: string, subcategoryName: string) => {
    return menuItems.filter(item => 
      item.category === categoryId && item.subcategory === subcategoryName
    ).length;
  };

  // Get current category and subcategory objects
  const currentCategory = selectedCategory ? 
    menuCategories.find(cat => cat.id === selectedCategory) : null;

  // Filter items based on current navigation state
  const currentItems = useMemo(() => {
    let items = filteredAndSortedItems;
    
    if (currentLevel === 'items' && selectedCategory) {
      items = items.filter(item => item.category === selectedCategory);
      
      if (selectedSubcategory) {
        items = items.filter(item => item.subcategory === selectedSubcategory);
      }
    }
    
    return items;
  }, [filteredAndSortedItems, currentLevel, selectedCategory, selectedSubcategory]);

  const totalItems = currentItems.length;
  const showSearchAndFilters = currentLevel === 'items';

  return (
    <div className="min-h-screen bg-background">
      <RestaurantHeader />
      
      <main className="container mx-auto px-4 pb-12">
        <NavigationBreadcrumb
          currentLevel={currentLevel}
          categoryName={currentCategory?.name}
          subcategoryName={selectedSubcategory}
          onNavigateToCategories={handleNavigateToCategories}
          onNavigateToSubcategories={currentCategory?.subcategories ? handleNavigateToSubcategories : undefined}
        />

        {showSearchAndFilters && (
          <SearchAndFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            vegFilter={vegFilter}
            onVegFilterChange={setVegFilter}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        )}

        {/* Categories View */}
        {currentLevel === 'categories' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Menu Categories
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {menuCategories.map(category => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onClick={() => handleCategoryClick(category.id)}
                  itemCount={getCategoryItemCount(category.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Subcategories View */}
        {currentLevel === 'subcategories' && currentCategory?.subcategories && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {currentCategory.name}
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.subcategories.map(subcategory => (
                <SubcategoryCard
                  key={subcategory}
                  name={subcategory}
                  onClick={() => handleSubcategoryClick(subcategory)}
                  itemCount={getSubcategoryItemCount(currentCategory.id, subcategory)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Items View */}
        {currentLevel === 'items' && (
          <div>
            {/* Results summary */}
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing {totalItems} item{totalItems !== 1 ? 's' : ''}
                {searchTerm && ` matching "${searchTerm}"`}
                {vegFilter !== 'all' && ` (${vegFilter === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'} only)`}
                {selectedSubcategory && ` in ${selectedSubcategory}`}
              </p>
            </div>

            {/* Menu Items */}
            {totalItems > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentItems.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-2">No items found</p>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or filters
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">7HILLS INDIAN RESTAURANT</p>
          <p className="text-primary-foreground/80">
            Authentic Indian cuisine in the heart of Brussels
          </p>
        </div>
      </footer>
    </div>
  );
};