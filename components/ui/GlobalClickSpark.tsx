"use client";

import { useEffect, useRef } from 'react';

interface GlobalClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  extraScale?: number;
}

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

// Check if an element is clickable
const isClickable = (element: HTMLElement | null): boolean => {
  if (!element) return false;

  // Check tag names
  const clickableTags = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'];
  if (clickableTags.includes(element.tagName)) {
    // For links, check if it's not disabled
    if (element.tagName === 'A') {
      const link = element as HTMLAnchorElement;
      return link.href !== '' || link.onclick !== null;
    }
    // For buttons and inputs, check if not disabled
    if (element.tagName === 'BUTTON' || element.tagName === 'INPUT') {
      return !(element as HTMLButtonElement | HTMLInputElement).disabled;
    }
    return true;
  }

  // Check for click handlers
  if (element.onclick !== null) return true;

  // Check for role="button" or role="link"
  const role = element.getAttribute('role');
  if (role === 'button' || role === 'link') return true;

  // Check for cursor pointer style
  const style = window.getComputedStyle(element);
  if (style.cursor === 'pointer') return true;

  // Check if element has click event listeners (by checking for common clickable classes)
  const clickableClasses = ['btn', 'button', 'link', 'clickable', 'cursor-pointer'];
  if (clickableClasses.some(cls => element.classList.contains(cls))) return true;

  // Check parent elements recursively (up to 3 levels)
  let parent = element.parentElement;
  let depth = 0;
  while (parent && depth < 3) {
    if (clickableTags.includes(parent.tagName) || parent.onclick !== null) {
      return true;
    }
    parent = parent.parentElement;
    depth++;
  }

  return false;
};

const easeFunc = (t: number, easing: string): number => {
  switch (easing) {
    case 'linear':
      return t;
    case 'ease-in':
      return t * t;
    case 'ease-in-out':
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    default:
      return t * (2 - t);
  }
};

export default function GlobalClickSpark({
  sparkColor = '#f4c430', // Default to your gold color
  sparkSize = 8,
  sparkRadius = 20,
  sparkCount = 10,
  duration = 500,
  easing = 'ease-out',
  extraScale = 1.0,
}: GlobalClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas to full viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    const animate = (timestamp: number) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark: Spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress, easing);

        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Global click handler
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Only show sparks on clickable elements
      if (!isClickable(target)) return;

      const now = performance.now();
      const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
        x: e.clientX,
        y: e.clientY,
        angle: (2 * Math.PI * i) / sparkCount,
        startTime: now,
      }));

      sparksRef.current.push(...newSparks);
    };

    document.addEventListener('click', handleClick, true); // Use capture phase

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('click', handleClick, true);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration, easing, extraScale]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}

