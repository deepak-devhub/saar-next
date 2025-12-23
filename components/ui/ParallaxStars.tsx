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
    if (!mounted) return { small: '', medium: '', large: '' };
    return {
      small: createStarShadow(400),
      medium: createStarShadow(100),
      large: createStarShadow(50),
    };
  }, [mounted]);

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

