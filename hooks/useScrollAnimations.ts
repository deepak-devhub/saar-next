import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// interface AnimationConfig {
//   selector: string;
//   duration?: number;
//   stagger?: number;
//   delay?: number;
//   ease?: string;
//   toggleActions?: string;
// }

export const useScrollAnimations = () => {
  useEffect(() => {
    gsap.defaults({ ease: 'power2.inOut' });

    // Hero/Banner sections - fade and slide up
    gsap.fromTo(
      '[data-scroll="hero"]',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }
    );

    // Section titles - fade and slide up
    gsap.fromTo(
      '[data-scroll="title"]',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-scroll="title"]',
          start: 'top 75%',
          toggleActions: 'play play play play',
        },
      }
    );

    // Section paragraphs - fade and slide up
    gsap.fromTo(
      '[data-scroll="text"]',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-scroll="text"]',
          start: 'top 75%',
          toggleActions: 'play play play play',
        },
      }
    );

    // Cards/Items - fade, slide up, and scale with stagger
    gsap.fromTo(
      '[data-scroll="card"]',
      { opacity: 0, y: 60, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-scroll="card"]',
          start: 'top 75%',
          toggleActions: 'play play play play',
        },
      }
    );

    // Buttons - slide from sides and fade
    gsap.fromTo(
      '[data-scroll="button"]',
      {
        opacity: 0,
        x: (index: number) => (index === 0 ? -60 : 60),
        y: 30,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-scroll="button"]',
          start: 'top 70%',
          toggleActions: 'play play play play',
        },
      }
    );

    // Icons - rotate and scale on scroll
    gsap.fromTo(
      '[data-scroll="icon"]',
      { opacity: 0, scale: 0.6, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '[data-scroll="icon"]',
          start: 'top 75%',
          toggleActions: 'play play play play',
        },
      }
    );

    // Continuous rotation for icons on scroll
    const icons = document.querySelectorAll('[data-scroll="icon-rotate"]');
    icons.forEach((icon) => {
      gsap.to(icon, {
        scrollTrigger: {
          trigger: icon,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        rotation: 360,
      });
    });

    // Parallax effect
    gsap.to('[data-scroll="parallax"]', {
      scrollTrigger: {
        trigger: '[data-scroll="parallax"]',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
      y: 100,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
