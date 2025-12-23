import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  className?: string;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 min-h-[48px] inline-flex items-center justify-center';

  const variants = {
    primary: 'hover:opacity-95 focus:ring-gold-500 border-none text-black',
    secondary: 'bg-gold-700/20 text-gold-gradient border-2 border-gold-600 hover:bg-gold-700/30 focus:ring-gold-500',
    outline: 'border-2 border-gold-600 text-gold-gradient hover:bg-gold-900/20 focus:ring-gold-500',
  };

  const variantStyle =
    variant === 'primary'
      ? {
          backgroundImage:
            'linear-gradient(90deg, rgba(240, 229, 149, 1) 0%, rgba(222, 204, 128, 1) 50%, rgba(182, 150, 77, 1) 100%)',
        }
      : undefined;

  const hoverStyle =
    variant === 'primary'
      ? {
          scale: 1.02,
          backgroundImage:
            'linear-gradient(90deg, rgba(182, 150, 77, 1) 0%, rgba(222, 204, 128, 1) 50%, rgba(240, 229, 149, 1) 100%)',
        }
      : { scale: 1.02 };
      

  return (
    <motion.button
      whileHover={hoverStyle}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={variantStyle}
      {...(props as any)}
    >
      <span className="inline-flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );
}

