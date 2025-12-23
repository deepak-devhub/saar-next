import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Client {
    name: string;
    logo: string;
    isDarkLogo?: boolean;
}

interface ClientCarouselProps {
    clients: Client[];
}

export default function ClientCarousel({ clients }: ClientCarouselProps) {
    const displayClients = [...clients, ...clients, ...clients];

    const [currentIndex, setCurrentIndex] = useState(clients.length);
    const [itemsToShow, setItemsToShow] = useState(5);
    const [itemsToScroll, setItemsToScroll] = useState(3);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
    const timeoutRef = useRef<any>(null);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            if (width < 640) {
                setItemsToShow(2);
                setItemsToScroll(2);
            } else if (width < 1024) {
                setItemsToShow(3);
                setItemsToScroll(2);
            } else {
                setItemsToShow(5);
                setItemsToScroll(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-play logic: always move forward
    useEffect(() => {
        const nextSlide = () => {
            setIsTransitioning(true);
            setCurrentIndex((prev) => prev + itemsToScroll);
        };

        timeoutRef.current = setInterval(nextSlide, 3000);
        return () => {
            if (timeoutRef.current) clearInterval(timeoutRef.current);
        };
    }, [itemsToScroll, clients.length]);

    // Handle seamless loop reset
    useEffect(() => {
        // If we've moved past the middle set and completed the transition, 
        // jump back to the equivalent position in the middle set without animation
        if (currentIndex >= clients.length * 2) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(prev => prev - clients.length);
            }, 800); // Wait for the transition duration (0.8s)
            return () => clearTimeout(timer);
        }
        // Also handle backward jump if prev/dots are used
        if (currentIndex < clients.length) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(prev => prev + clients.length);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, clients.length]);

    // Re-enable transition after the jump
    useEffect(() => {
        if (!isTransitioning) {
            const timer = setTimeout(() => setIsTransitioning(true), 50);
            return () => clearTimeout(timer);
        }
    }, [isTransitioning]);

    const gap = windowWidth < 768 ? 1 : 1.5; // matching gap-4 (1rem) and md:gap-6 (1.5rem)

    return (
        <div className="relative w-full overflow-hidden py-10">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    className="flex gap-4 md:gap-6 px-4"
                    animate={{
                        // Correct translation: (100% + gap) / itemsToShow per index
                        x: `calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * (gap / itemsToShow)}rem)`,
                    }}
                    transition={isTransitioning ? {
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                    } : { duration: 0 }}
                >
                    {displayClients.map((client, index) => (
                        <div
                            key={`${client.name}-${index}`}
                            className="flex-shrink-0 bg-secondary-900/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-gold-800/10 p-6 group transition-all duration-300 h-32 hover:border-gold-800/40 hover:bg-secondary-800/50"
                            style={{
                                width: `calc(${100 / itemsToShow}% - ${(itemsToShow - 1) * gap / itemsToShow}rem)`,
                            }}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    className={`object-contain transition-all duration-500 group-hover:scale-110 ${client.isDarkLogo ? 'brightness-200 invert' : ''
                                        } ${client.name === 'KEZAD' ? 'brightness-125 saturate-200 contrast-110' : ''
                                        } ${['ARCA Technologies', 'Art Central', 'Euro Mechanical', 'China Harbour'].includes(client.name) ? 'brightness-125 contrast-110' : ''}`}
                                    sizes="(max-width: 640px) 50vw, 20vw"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Dots for navigation */}
            <div className="flex justify-center gap-2 mt-8">
                {clients.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setIsTransitioning(true);
                            setCurrentIndex(idx + clients.length);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex % clients.length === idx
                            ? 'w-8 bg-gold-500'
                            : 'w-2 bg-gold-900/30'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
