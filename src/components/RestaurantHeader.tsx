import React from 'react';
import { BookOpen } from 'lucide-react';

export const RestaurantHeader: React.FC = () => {
  return (
    <header className="bg-gradient-to-br  from-background to-warm-neutral py-6 md:py-8 mb-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary rounded-full shadow-lg">
            <BookOpen className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-wider">
          7HILLS INDIAN RESTAURANT
        </h1>
        
        <div className="text-muted-foreground space-y-1">
          <p>Kroonstraat 165, Herent</p>
          <p>3020 Brussels Flemish Brabant</p>
          <p>Belgium</p>
        </div>
      </div>
    </header>
  );
};