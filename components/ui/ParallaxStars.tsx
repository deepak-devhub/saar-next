import { useMemo, useState, useEffect, type CSSProperties } from 'react';

interface ParallaxStarsProps {
  className?: string;
}

const createStarShadow = (count: number) =>
  Array.from(
    { length: count },
    () => `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`,
  ).join(', ');

const buildStarStyle = (shadows: string) =>
  ({
    ['--star-box-shadow' as '--star-box-shadow']: shadows,
  }) as CSSProperties;

export default function ParallaxStars({ className = '' }: ParallaxStarsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const starShadows = useMemo(() => {
    return {
      small: createStarShadow(150),
      medium: createStarShadow(40),
      large: createStarShadow(15),
    };
  }, []); // Remove mounted dependency to avoid double render on mount if possible, or keep it if we need hydration safety.
  // Actually, keeping it empty [] means it's stable.


  if (!mounted) return <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true" />;

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <div
        className="star-layer star-layer-sm"
        style={buildStarStyle(starShadows.small)}
      />
      <div
        className="star-layer star-layer-md"
        style={buildStarStyle(starShadows.medium)}
      />
      <div
        className="star-layer star-layer-lg"
        style={buildStarStyle(starShadows.large)}
      />
    </div>
  );
}

