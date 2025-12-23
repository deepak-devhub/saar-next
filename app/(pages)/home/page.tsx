"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Award, Globe, GraduationCap, Users, CheckCircle,
    ArrowRight, Building2
} from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import TestimonialSlider from '@/components/ui/TestimonialSlider';
import ClientCarousel from '@/components/ui/ClientCarousel';
import ParallaxStars from '@/components/ui/ParallaxStars';
import Particles from '@/components/ui/Particles/Particles';
import consultancyImage from '@/assets/images/consultancy.webp';
import academyImage from '@/assets/images/academy.webp';
import logo from '@/assets/images/logo.png';
import nmdcImage from '@/assets/images/nmdc.webp';
import industryImage from '@/assets/images/industry.webp';
import foodImage from '@/assets/images/food.webp';

// Client Logos
import nmdcLogo from '@/assets/logo/NMDC Group white.svg';
import arcaLogo from '@/assets/logo/arca.png';
import artcenteralLogo from '@/assets/logo/artcenteral.svg';
import chinaHarbourLogo from '@/assets/logo/china-harbour.png';
import euromechanicalLogo from '@/assets/logo/euromechanical.png';
import galleriaLogo from '@/assets/logo/galleria.svg';
import kezadLogo from '@/assets/logo/kezad.png';
import yasLogo from '@/assets/logo/yas.svg';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        id: 1,
        name: 'Construction Firm Representative',
        role: 'Project Partner',
        company: 'SAAR Project Related Construction Firm',
        text: "SAAR's MEP design services exceeded our expectations — efficient, compliant, and well-coordinated.",
        type: 'client' as const,
    },
    {
        id: 2,
        name: 'SAAR MEP Academy Alumnus',
        role: 'MEP Design Engineer',
        text: "The Academy's training gave me real project exposure — I got placed in a leading MEP firm within 2 months.",
        type: 'student' as const,
    },
    {
        id: 3,
        name: 'Construction Firm Representative',
        role: 'Project Partner',
        company: 'SAAR Project Related Construction Firm',
        text: 'Working with SAAR has been a game-changer. Their value engineering approach saved us significant costs while maintaining the highest quality standards.',
        type: 'client' as const,
    },
];

const clients = [
    { name: 'NMDC Group', logo: nmdcLogo.src },
    { name: 'ARCA Technologies', logo: arcaLogo.src },
    { name: 'Art Central', logo: artcenteralLogo.src, },
    { name: 'China Harbour', logo: chinaHarbourLogo.src },
    { name: 'Euro Mechanical', logo: euromechanicalLogo.src },
    { name: 'Galleria', logo: galleriaLogo.src, isDarkLogo: true },
    { name: 'KEZAD', logo: kezadLogo.src, },
    { name: 'Yas', logo: yasLogo.src, isDarkLogo: true },
];

export default function HomePage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const divisionsRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const strengthsRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const clientsRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Smooth scrollbar
        gsap.defaults({ ease: 'power2.inOut' });

        // Hero section parallax & fade in
        if (heroRef.current) {
            gsap.fromTo(
                heroRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                }
            );

            // Parallax effect on hero content
            const heroContent = heroRef.current.querySelector('.container');
            if (heroContent) {
                gsap.to(heroContent, {
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1,
                    },
                    y: 60,
                });
            }
        }

        // Divisions section - staggered animation
        if (divisionsRef.current) {
            const cards = divisionsRef.current.querySelectorAll('[data-card]');
            gsap.fromTo(
                cards,
                {
                    opacity: 0,
                    y: 60,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: divisionsRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                }
            );
        }

        // Featured Projects animation
        const projectCards = document.querySelectorAll('[data-project-card]');
        if (projectCards.length > 0) {
            gsap.fromTo(
                projectCards,
                {
                    opacity: 0,
                    y: 40,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: projectCards[0],
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }

        // About section - text reveal
        if (aboutRef.current) {
            const aboutText = aboutRef.current.querySelector('p');
            if (aboutText) {
                gsap.fromTo(
                    aboutText,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: aboutRef.current,
                            start: 'top 75%',
                            once: true,
                        },
                    }
                );
            }
        }

        // Strengths icons - rotation + scale on scroll
        if (strengthsRef.current) {
            const strengthItems = strengthsRef.current.querySelectorAll('[data-strength]');
            gsap.fromTo(
                strengthItems,
                {
                    opacity: 0,
                    scale: 0.6,
                    y: 40,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: strengthsRef.current,
                        start: 'top 75%',
                        once: true,
                    },
                }
            );

            // Continuous rotation on scroll
            strengthItems.forEach((item) => {
                const icon = item.querySelector('[data-icon]');
                if (icon) {
                    gsap.to(icon, {
                        scrollTrigger: {
                            trigger: item,
                            start: 'top center',
                            end: 'bottom center',
                            scrub: 1,
                        },
                        rotation: 360,
                    });
                }
            });
        }

        // CTA section - all elements animate together
        if (ctaRef.current) {
            const ctaTitle = ctaRef.current.querySelector('h2');
            const ctaParagraph = ctaRef.current.querySelector('p');
            const ctaButtons = ctaRef.current.querySelectorAll('button');

            // Animate title
            gsap.fromTo(
                ctaTitle,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 70%',
                        toggleActions: 'play play play play',
                    },
                }
            );

            // Animate paragraph
            gsap.fromTo(
                ctaParagraph,
                {
                    opacity: 0,
                    y: 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 70%',
                        toggleActions: 'play play play play',
                    },
                }
            );

            // Animate buttons from sides
            gsap.fromTo(
                ctaButtons,
                {
                    opacity: 0,
                    x: (i) => (i === 0 ? -60 : 60),
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
                        trigger: ctaRef.current,
                        start: 'top 70%',
                        toggleActions: 'play play play play',
                    },
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center bg-black overflow-hidden">
                {/* Animated background gradient */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at center, rgba(184, 134, 11, 0.2), rgba(0, 0, 0, 0.5), black)',
                    }}
                />

                {/* OGL particles layer - optimized for performance */}
                <div className="absolute inset-0 pointer-events-none">
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={1000}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={60}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                        pixelRatio={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 1.5) : 1}
                    />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient mb-6">
                            Engineering Excellence. Educating the Future.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                            SAAR Group delivers innovative MEP engineering solutions and world-class
                            technical training through its two specialized divisions — SAAR Engineering Consultancy
                            and SAAR MEP Academy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/consultancy">
                                <Button variant="primary" className="w-full sm:w-auto">
                                    Explore Consultancy
                                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                                </Button>
                            </Link>
                            <Link href="/academy">
                                <Button variant="secondary" className="w-full sm:w-auto">
                                    Visit Academy
                                    <ArrowRight className="w-5 h-5 ml-2 inline" color='gold' />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divisions Section */}
            <Section background="primary" backgroundSlot={<ParallaxStars />}>
                <div ref={divisionsRef} className="w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
                            Our Divisions
                        </h2>
                        <p className="text-lg text-gray-300">
                            Two powerful divisions working together to deliver excellence
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div data-card className="h-full">
                            <Link href="/consultancy">
                                <Card hover className="h-full group">
                                    <div className="aspect-video relative overflow-hidden">
                                        <Image
                                            src={consultancyImage}
                                            alt="Consultancy Division"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-black/50"></div>
                                        <div
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                backgroundImage:
                                                    'linear-gradient(90deg, rgba(240, 229, 149, 0.55) 0%, rgba(222, 204, 128, 0.55) 50%, rgba(182, 150, 77, 0.55) 100%)',
                                                mixBlendMode: 'soft-light',
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-200 p-8 z-10">
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="mb-2">
                                                    <Building2 className="w-16 h-16 mx-auto" />
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="relative w-16 h-16 rounded-full bg-white/10 p-1 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
                                                        <Image
                                                            src={logo}
                                                            alt="SAAR logo"
                                                            width={64}
                                                            height={64}
                                                            className="rounded-full"
                                                        />
                                                    </div>
                                                    <div className="text-left">
                                                        <h3 className="text-2xl font-bold mb-2 text-gold-gradient">
                                                            SAAR Engineering Consultancy
                                                        </h3>
                                                        <p className="text-gold-gradient">
                                                            Innovative MEP Solutions
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-secondary-900">
                                        <p className="text-gray-300 mb-4">
                                            A full-service MEP design consultancy offering HVAC, Electrical, Plumbing, and Fire Fighting
                                            design services for residential, commercial, and industrial projects.
                                        </p>
                                        <div className="flex items-center text-gold-gradient font-semibold cursor-pointer">
                                            Learn More
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </div>

                        <div data-card className="h-full">
                            <Link href="/academy">
                                <Card hover className="h-full bg-secondary-900 group">
                                    <div className="aspect-video relative overflow-hidden">
                                        <Image
                                            src={academyImage}
                                            alt="Academy Division"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-black/50"></div>
                                        <div
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                backgroundImage:
                                                    'linear-gradient(90deg, rgba(240, 229, 149, 0.55) 0%, rgba(222, 204, 128, 0.55) 50%, rgba(182, 150, 77, 0.55) 100%)',
                                                mixBlendMode: 'soft-light',
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-200 p-8 z-10">
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="mb-2">
                                                    <GraduationCap className="w-16 h-16 mx-auto" />
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="relative w-16 h-16 rounded-full bg-white/10 p-1 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
                                                        <Image
                                                            src={logo}
                                                            alt="SAAR logo"
                                                            width={64}
                                                            height={64}
                                                            className="rounded-full"
                                                        />
                                                    </div>
                                                    <div className="text-left">
                                                        <h3 className="text-2xl font-bold mb-2 text-gold-gradient">
                                                            SAAR MEP Academy
                                                        </h3>
                                                        <p className="text-gold-gradient">
                                                            World-Class Technical Training
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-gray-300 mb-4">
                                            A professional training institute providing job-oriented MEP design and drafting programs
                                            for engineers and technicians.
                                        </p>
                                        <div className="flex items-center text-gold-gradient font-semibold cursor-pointer">
                                            Learn More
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* About Section */}
            <Section>
                <div ref={aboutRef} className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-6">
                        About SAAR Group
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Founded by experienced MEP engineers, SAAR Group is a multidisciplinary organization
                        based in UAE & India, offering both professional MEP consultancy services and industry-oriented
                        training programs. Our mission is to bridge the gap between engineering practice and education
                        & designing world-class building systems while developing the next generation of MEP professionals.
                    </p>
                </div>
            </Section>

            {/* Featured Projects - New Section */}
            <Section background="primary" backgroundSlot={<ParallaxStars />}>
                <div className="w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-gray-300">
                            Innovative engineering solutions delivered with precision
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                id: 1,
                                title: 'NMDC Extension',
                                location: 'ICAD',
                                image: nmdcImage,
                                description: 'Complex MEP systems for large-scale extension'
                            },
                            {
                                id: 2,
                                title: 'Euromech Facility',
                                location: 'KEZAD',
                                image: industryImage,
                                description: 'Industrial manufacturing MEP design'
                            },
                            {
                                id: 3,
                                title: 'Foodhub Industrial',
                                location: 'KEZAD',
                                image: foodImage,
                                description: 'Specialized food processing systems'
                            },
                        ].map((project) => (
                            <Link key={project.id} href="/projects" data-project-card>
                                <Card hover className="h-full group bg-secondary-900 border-gold-800/10">
                                    <div className="aspect-video relative overflow-hidden bg-gold-900/20">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <p className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-1">{project.location}</p>
                                            <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center text-gold-gradient text-sm font-semibold">
                                            View Project <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link href="/projects">
                            <Button variant="outline">
                                View All Projects
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Core Strengths */}
            <Section>
                <div ref={strengthsRef} className="w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
                            Core Strengths
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {[
                            { icon: Award, title: '15+ Years', subtitle: 'Experience' },
                            { icon: Globe, title: 'UAE & India', subtitle: 'Projects' },
                            { icon: GraduationCap, title: 'Accredited', subtitle: 'Training Programs' },
                            { icon: Users, title: 'Skilled', subtitle: 'Faculty' },
                            { icon: CheckCircle, title: 'Quality, Integrity', subtitle: 'Innovation' },
                        ].map((strength, index) => {
                            const Icon = strength.icon;
                            return (
                                <div
                                    key={strength.title}
                                    data-strength
                                    className={`text-center ${index === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
                                >
                                    <div className="w-20 h-20 mx-auto mb-4 bg-gold-900/20 rounded-full flex items-center justify-center border border-gold-700/30">
                                        <div data-icon>
                                            <Icon className="w-10 h-10 icon-stroke-gold-gradient" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gold-gradient mb-1">{strength.title}</h3>
                                    <p className="text-gray-300">{strength.subtitle}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Section>

            {/* Call-to-Action */}
            <Section background="primary" backgroundSlot={<ParallaxStars />}>
                <div ref={ctaRef} className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-6">
                        Ready to Work Together?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Whether you need reliable MEP design solutions or want to build your engineering career
                        — SAAR is your trusted partner.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/consultancy">
                            <Button variant="primary" className="w-full sm:w-auto">
                                Work with SAAR Engineering Consultancy
                            </Button>
                        </Link>
                        <Link href="/academy">
                            <Button variant="secondary" className="w-full sm:w-auto">
                                Enroll at SAAR MEP Academy
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* Client & Partner Logos */}
            <Section>
                <div ref={clientsRef} className="w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
                            Our Clients & Partners
                        </h2>
                        <p className="text-lg text-gray-300">
                            Trusted collaborators across key industries
                        </p>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <ClientCarousel clients={clients} />
                    </div>
                </div>
            </Section>

            {/* Testimonials */}
            <Section background="primary" backgroundSlot={<ParallaxStars />}>
                <div ref={testimonialsRef} className="w-full">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
                            What Our Clients & Students Say
                        </h2>
                        <p className="text-lg text-gray-300">
                            Real stories from partners and graduates
                        </p>
                    </div>
                    <TestimonialSlider testimonials={testimonials} />
                </div>
            </Section>
        </>
    );
}
