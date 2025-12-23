"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, GraduationCap } from 'lucide-react';
import Lottie from 'lottie-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import logo from '@/assets/images/logo.png';
import consultancyImage from '@/assets/images/consultancy.webp';
import academyImage from '@/assets/images/academy.webp';
import divisionImage from '@/assets/images/division.webp';
import ParallaxStars from '@/components/ui/ParallaxStars';
import duplicateLottie from '@/assets/lootie/division/duplicate.json';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const cinematicEase = [0.25, 0.1, 0.25, 1] as const;

export default function DivisionsPage() {
    useScrollAnimations();

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
                <Image
                    src={divisionImage}
                    alt="Divisions Hero"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/45" />
                {/* Brand gold soft-light overlay to mirror Projects page treatment */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            'linear-gradient(90deg, rgba(240, 229, 149, 0.55) 0%, rgba(222, 204, 128, 0.55) 50%, rgba(182, 150, 77, 0.55) 100%)',
                        mixBlendMode: 'soft-light',
                    }}
                />
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage:
                            'linear-gradient(90deg, rgba(240, 229, 149, 0) 0%, rgba(240, 229, 149, 0.18) 25%, rgba(222, 204, 128, 0.28) 50%, rgba(182, 150, 77, 0.22) 75%, rgba(182, 150, 77, 0) 100%)',
                        mixBlendMode: 'soft-light',
                        filter: 'blur(0.5px)',
                    }}
                />
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: cinematicEase,
                        }}
                        className="relative inline-block text-center"
                    >
                        {/* TEXT */}
                        <div>
                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(90deg, rgba(240, 229, 149, 1) 0%, rgba(222, 204, 128, 1) 50%, rgba(182, 150, 77, 1) 100%)',
                                }}
                            >
                                Our Divisions
                            </h1>

                            {/* ICON – MIDDLE (Mobile only) */}
                            <div className="md:hidden flex justify-center my-4">
                                <div className="w-24 h-24">
                                    <Lottie
                                        animationData={duplicateLottie}
                                        loop
                                        autoplay
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                            </div>

                            <p
                                className="mt-3 text-xl md:text-2xl text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(90deg, rgba(240, 229, 149, 1) 0%, rgba(222, 204, 128, 1) 50%, rgba(182, 150, 77, 1) 100%)',
                                }}
                            >
                                Two powerful divisions, one shared vision
                            </p>
                        </div>

                        {/* ICON – RIGHT SIDE (Desktop only) */}
                        <div className="hidden md:block absolute top-1/2 -right-24 md:-right-36 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28">
                            <Lottie
                                animationData={duplicateLottie}
                                loop
                                autoplay
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </motion.div>

                </div>
            </section>

            <Section background="primary" backgroundSlot={<ParallaxStars />}>
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{
                            duration: 0.5,
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                        className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4"
                    >
                        Our Divisions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
                        }}
                        className="text-lg text-gray-300"
                    >
                        Two powerful divisions working together to deliver excellence
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Consultancy Division */}
                    <Link href="/consultancy">
                        <Card hover className="h-full group flex flex-col overflow-hidden">
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
                                <motion.div
                                    className="glare-effect absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(120deg, rgba(240, 229, 149, 0) 0%, rgba(240, 229, 149, 0.2) 20%, rgba(240, 229, 149, 0.55) 45%, rgba(222, 204, 128, 0.75) 55%, rgba(182, 150, 77, 0.4) 65%, rgba(182, 150, 77, 0) 85%)',
                                        mixBlendMode: 'screen',
                                        transform: 'skewX(-12deg)',
                                        filter: 'blur(1px)',
                                    }}
                                    animate={{
                                        x: ['-100%', '200%'],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                        ease: "linear"
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-gray-200 p-8 z-10">
                                    <div className="text-center">
                                        <div className="mb-4">
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
                            <div className="p-6 flex-grow overflow-hidden">
                                <p className="text-gray-300 mb-4">
                                    A full-service MEP design consultancy offering HVAC, Electrical, Plumbing, and Fire Fighting
                                    design services for residential, commercial, and industrial projects.
                                </p>
                                <div className="flex items-center text-gold-gradient font-semibold">
                                    Learn More
                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Card>
                    </Link>

                    {/* Academy Division */}
                    <Link href="/academy">
                        <Card hover className="h-full group flex flex-col overflow-hidden">
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
                                <motion.div
                                    className="glare-effect absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(120deg, rgba(240, 229, 149, 0) 0%, rgba(240, 229, 149, 0.2) 20%, rgba(240, 229, 149, 0.55) 45%, rgba(222, 204, 128, 0.75) 55%, rgba(182, 150, 77, 0.4) 65%, rgba(182, 150, 77, 0) 85%)',
                                        mixBlendMode: 'screen',
                                        transform: 'skewX(-12deg)',
                                        filter: 'blur(1px)',
                                    }}
                                    animate={{
                                        x: ['-100%', '200%'],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                        ease: "linear"
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-gray-200 p-8 z-10">
                                    <div className="text-center">
                                        <div className="mb-4">
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
                            <div className="p-6 flex-grow overflow-hidden">
                                <p className="text-gray-300 mb-4">
                                    A professional training institute providing job-oriented MEP design and drafting programs
                                    for engineers and technicians.
                                </p>
                                <div className="flex items-center text-gold-gradient font-semibold">
                                    Learn More
                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Card>
                    </Link>
                </div>
            </Section>
        </>
    );
}
