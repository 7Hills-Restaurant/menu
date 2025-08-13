import React from 'react';
import { BookOpen, Clock, MapPin } from 'lucide-react';

export const RestaurantHeader: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-background to-warm-neutral py-12 md:py-16 mb-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary rounded-full shadow-lg">
            <BookOpen className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          Spice Garden
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Authentic Indian cuisine crafted with traditional spices and modern flair. 
          Experience the rich flavors of India in every bite.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>Open Daily 11:00 AM - 10:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Authentic Indian Restaurant</span>
          </div>
        </div>
      </div>
    </header>
  );
};