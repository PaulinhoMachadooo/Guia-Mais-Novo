import React, { useState, useEffect, View } from 'react';
import { X } from 'lucide-react';

const ads = [
  {
    id: 1,
    title: "Special Offer!",
    description: "Get 20% off on your first purchase",
    bgColor: "bg-blue-600"
  },
  {
    id: 2,
    title: "New Collection",
    description: "Check out our latest arrivals",
    bgColor: "bg-purple-600"
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "On orders over $50",
    bgColor: "bg-green-600"
  }
];

export const BannerCarousel: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <View className="fixed bottom-0 left-0 right-0 h-[60px] transition-all duration-300">
      <View className={`relative w-full h-full ${ads[currentAd].bgColor} text-white flex items-center justify-center`}>
        <View className="text-center">
          <h3 className="font-bold">{ads[currentAd].title}</h3>
          <p className="text-sm">{ads[currentAd].description}</p>
        </View>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close banner"
        >
          <X size={20} />
        </button>

        <View className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {ads.map((_, index) => (
            <View 
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${
                index === currentAd ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </View>
      </View>
    </View>
  );
};