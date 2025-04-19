import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react-native';

interface Advertisement {
  id: number;
  title: string;
  description: string;
  backgroundColor: string;
}

const advertisements: Advertisement[] = [
  {
    id: 1,
    title: "Special Offer",
    description: "Get 20% off on your first purchase!",
    backgroundColor: "bg-blue-600",
  },
  {
    id: 2,
    title: "New Collection",
    description: "Check out our latest arrivals!",
    backgroundColor: "bg-purple-600",
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "Free shipping on orders over $50",
    backgroundColor: "bg-green-600",
  },
];

export const CarouselBanner: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[60px] transition-all duration-300">
      <div className={`w-full h-full ${advertisements[currentAd].backgroundColor} text-white relative`}>
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h3 className="font-bold">{advertisements[currentAd].title}</h3>
            <p className="text-sm">{advertisements[currentAd].description}</p>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close banner"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {advertisements.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentAd === index ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentAd(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};