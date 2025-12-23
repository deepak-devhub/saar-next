import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// Hook to detect mobile view
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  text: string;
  type: 'client' | 'student';
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  // Get the first 3 testimonials for desktop view
  const visibleTestimonials = testimonials.slice(0, 3);
  const isMobile = useIsMobile();
  
  // Track which card is in the middle position (desktop) or current card (mobile)
  // rotation = 0: card[0] in middle, card[1] right, card[2] left
  // rotation = 1: card[1] in middle, card[2] right, card[0] left  
  // rotation = 2: card[2] in middle, card[0] right, card[1] left
  const [rotation, setRotation] = useState(1); // Start with card 1 in middle
  
  // Auto-play functionality - only on mobile
  useEffect(() => {
    if (!isMobile) return; // Don't auto-play on desktop
    
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 3);
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(interval);
  }, [isMobile]);

  // Get which position (0=left, 1=middle, 2=right) a card index should be displayed at
  const getCardPosition = (cardIndex: number) => {
    // Calculate relative position: how many steps ahead/behind the middle card
    const relativePos = (cardIndex - rotation + 3) % 3;
    // relativePos 0 = middle, 1 = right, 2 = left
    return relativePos === 0 ? 1 : relativePos === 1 ? 2 : 0;
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-4">
      <div className="relative h-[320px] overflow-hidden md:overflow-visible">
        <div className="relative h-full w-full">
          {visibleTestimonials.map((testimonial, cardIndex) => {
            const position = getCardPosition(cardIndex);
            const isMiddle = position === 1;
            const isActive = rotation === cardIndex; 
            let desktopLeft: string;
            if (position === 0) {
              desktopLeft = '0%';
            } else if (position === 1) {
              desktopLeft = 'calc(33.333% + 0.5rem)';
            } else {
              desktopLeft = 'calc(66.666% + 1rem)';
            }
            
            // Mobile: center active card, position others off-screen
            const mobileLeft = isActive ? '50%' : (cardIndex < rotation ? '-100%' : '200%');
            const mobileX = isActive ? '-50%' : '0%';
            const mobileOpacity = isActive ? 1 : 0;
            
            return (
              <motion.div
                key={testimonial.id}
                initial={false}
                animate={{
                  // Use mobile positions on mobile, desktop positions on desktop
                  left: isMobile ? mobileLeft : desktopLeft,
                  x: isMobile ? mobileX : '0%',
                  scale: 1,
                  opacity: isMobile ? mobileOpacity : 1,
                  zIndex: isMiddle || isActive ? 10 : position === 0 ? 1 : 2,
                }}
                whileHover={{
                  scale: isMobile ? 1 : 1.05,
                  zIndex: 20,
                }}
                transition={{
                  left: {
                    type: 'spring',
                    stiffness: 200,
                    damping: 25,
                    mass: 0.8,
                  },
                  x: {
                    type: 'spring',
                    stiffness: 200,
                    damping: 25,
                    mass: 0.8,
                  },
                  scale: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  },
                  opacity: {
                    duration: 0.3,
                  },
                }}
                className="absolute w-full md:w-[calc(33.333%-1rem)] h-full"
              >
                <div className="bg-secondary-900 rounded-2xl shadow-xl border border-gray-700 p-6 md:p-8 h-full w-full flex flex-col min-h-0">
                  <Quote className="w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] icon-stroke-gold-gradient mb-4 flex-shrink-0" />
                  <p className="text-base md:text-lg text-white mb-2 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="font-semibold text-gray-400 text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {testimonial.role}
                        {testimonial.company && `, ${testimonial.company}`}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      {testimonial.type === 'client' ? 'Client' : 'Student'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dots - visible on mobile, hidden on desktop */}
      <div className="flex justify-center items-center gap-4 mt-8 md:hidden">
        <div className="flex gap-2">
          {visibleTestimonials.map((_, cardIndex) => {
            const isActive = rotation === cardIndex; // Card in middle position
            return (
              <button
                key={cardIndex}
                onClick={() => setRotation(cardIndex)}
                className={`w-2 h-2 rounded-full transition-all ${
                  isActive ? 'bg-primary-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${cardIndex + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
