import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'secondary';
  backgroundSlot?: ReactNode;
}

export default function Section({ 
  children, 
  className = '', 
  id,
  background = 'white',
  backgroundSlot
}: SectionProps) {
  const backgrounds = {
    white: 'bg-black',
    gray: 'bg-gray-900',
    primary: 'bg-gold-900/10',
    secondary: 'bg-secondary-800',
  };

  const hasBackgroundSlot = Boolean(backgroundSlot);

  return (
    <section 
      id={id}
      className={`py-16 md:py-24 ${backgrounds[background]} ${hasBackgroundSlot ? 'relative overflow-hidden' : ''} ${className}`}
    >
      {backgroundSlot}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${hasBackgroundSlot ? 'relative z-10' : ''}`}>
        {children}
      </div>
    </section>
  );
}

