import React from 'react';
import { Card } from './ui/card';
import { ChevronRight, Coffee } from 'lucide-react';

interface SubcategoryCardProps {
  name: string;
  onClick: () => void;
  itemCount: number;
}

export const SubcategoryCard: React.FC<SubcategoryCardProps> = ({ name, onClick, itemCount }) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden bg-card border-border shadow-category-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 bg-secondary/50 rounded-full">
            <Coffee className="w-5 h-5 text-secondary-foreground" />
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        
        <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {name}
        </h4>
        
        <p className="text-sm text-muted-foreground">
          {itemCount} item{itemCount !== 1 ? 's' : ''}
        </p>
      </div>
    </Card>
  );
};