import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export type VegFilter = 'all' | 'veg' | 'non-veg';
export type SortOption = 'name' | 'price-low' | 'price-high';

interface SearchAndFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  vegFilter: VegFilter;
  onVegFilterChange: (value: VegFilter) => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
}

export const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  searchTerm,
  onSearchChange,
  vegFilter,
  onVegFilterChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-soft mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
        {/* Search Bar */}
        <div className="relative flex-1 min-w-0">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-background border-input"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 min-w-0">
          {/* Veg/Non-Veg Filter */}
          <div className="flex gap-2">
            <Button
              variant={vegFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onVegFilterChange('all')}
              className="whitespace-nowrap"
            >
              All
            </Button>
            <Button
              variant={vegFilter === 'veg' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onVegFilterChange('veg')}
              className="whitespace-nowrap"
            >
              <div className="w-2 h-2 bg-veg-indicator rounded-full mr-2"></div>
              Veg
            </Button>
            <Button
              variant={vegFilter === 'non-veg' ? 'default' : 'outline'}
              size="sm"
              onClick={() => onVegFilterChange('non-veg')}
              className="whitespace-nowrap"
            >
              <div className="w-2 h-2 bg-non-veg-indicator rounded-full mr-2"></div>
              Non-Veg
            </Button>
          </div>

          {/* Sort Dropdown */}
          <Select value={sortBy} onValueChange={(value: SortOption) => onSortChange(value)}>
            <SelectTrigger className="w-full sm:w-40 bg-background border-input">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};