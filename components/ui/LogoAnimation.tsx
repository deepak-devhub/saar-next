import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logoImage from '../../assets/logo.png';

interface LogoAnimationProps {
  onAnimationComplete?: () => void;
  showFullAnimation?: boolean;
}

export default function LogoAnimation({ 
  onAnimationComplete, 
  showFullAnimation = true 
}: LogoAnimationProps) {
  const [isVisible, setIsVisible] = useState(showFullAnimation);

  useEffect(() => {
    if (!showFullAnimation) {
      setIsVisible(false);
      return;
    }

    // Show animation for 3 seconds, then fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onAnimationComplete) {
        setTimeout(onAnimationComplete, 500); // Wait for fade out
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [showFullAnimation, onAnimationComplete]);

  if (!isVisible && !showFullAnimation) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center ${
        !isVisible ? 'pointer-events-none' : ''
      }`}
    >
      <div className="relative w-full max-w-4xl px-8">
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative"
        >
          {/* Glow effect behind logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1.2 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className="absolute inset-0 blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(244, 196, 48, 0.3), rgba(244, 196, 48, 0.1), transparent)',
            }}
          />

          {/* Logo Image */}
          <motion.img
            src={logoImage.src}
            alt="SAAR MEP Academy Logo"
            className="relative z-10 w-full h-auto max-h-[70vh] object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />

          {/* Shimmer effect */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent skew-x-12"
          />
        </motion.div>

        {/* Floating particles */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-500/40 rounded-full"
            initial={{
              x: `${20 + i * 15}%`,
              y: `${30 + i * 10}%`,
              opacity: 0,
            }}
            animate={{
              y: [`${30 + i * 10}%`, `${20 + i * 10}%`, `${30 + i * 10}%`],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

