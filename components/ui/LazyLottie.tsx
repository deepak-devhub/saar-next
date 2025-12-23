import { useState, useEffect, useRef, lazy, Suspense, type ComponentProps } from 'react';

const Lottie = lazy(() => import('lottie-react'));

type LottieComponentProps = ComponentProps<typeof Lottie>;

interface LazyLottieProps extends Omit<LottieComponentProps, 'animationData'> {
  animationData: object;
  fallback?: React.ReactNode;
}

export default function LazyLottie({ 
  animationData, 
  fallback = <div className="w-full h-full bg-gray-800/20 animate-pulse rounded" />,
  ...props 
}: LazyLottieProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isInView ? (
        <Suspense fallback={fallback}>
          <Lottie animationData={animationData} {...props} />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}

