import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const baseStyles = 'bg-secondary-900 rounded-xl shadow-lg overflow-hidden border border-gold-800/20';
  const hoverStyles = hover ? 'transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-gold-600/40' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px 0px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(baseStyles, hoverStyles, className)}
    >
      {children}
    </motion.div>
  );
}

