"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import Lottie from 'lottie-react';
import { Target, Rocket, Lightbulb, BookOpen, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import aboutImage from '@/assets/images/about.webp';
import ParallaxStars from '@/components/ui/ParallaxStars';
import formLottie from '@/assets/lootie/about/Form.json';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const cinematicEase = [0.25, 0.1, 0.25, 1] as const;

const sectionReveal: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: cinematicEase,
            when: 'beforeChildren',
            staggerChildren: 0.08,
        },
    },
};

const childFade: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: cinematicEase,
        },
    },
};

const eagerViewport = {
    once: true,
    amount: 0.18,
    margin: '0px 0px 20% 0px',
} as const;

export default function AboutPage() {
    useScrollAnimations();

    const coreValues = [
        {
            icon: Target,
            title: 'Practical Excellence',
            description: 'Delivering real-world solutions that work',
        },
        {
            icon: Rocket,
            title: 'Integrity',
            description: 'Transparent, honest, and ethical in all we do',
        },
        {
            icon: Lightbulb,
            title: 'Innovation',
            description: 'Embracing new technologies and methodologies',
        },
        {
            icon: BookOpen,
            title: 'Continuous Learning',
            description: 'Committed to growth and knowledge sharing',
        },
    ];

    return (
        <>
            {/* Hero Banner */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
                <Image
                    src={aboutImage}
                    alt="About Hero"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/55 to-black/45" />
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
                                About SAAR Group
                            </h1>

                            {/* ICON – MIDDLE (Mobile only) */}
                            <div className="md:hidden flex justify-center my-4">
                                <div className="w-24 h-24">
                                    <Lottie
                                        animationData={formLottie}
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
                                Engineering Excellence. Educating the Future.
                            </p>
                        </div>

                        {/* ICON – RIGHT SIDE (Desktop only) */}
                        <div className="hidden md:block absolute top-1/2 -right-24 md:-right-36 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28">
                            <Lottie
                                animationData={formLottie}
                                loop
                                autoplay
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Text */}
            <Section backgroundSlot={<ParallaxStars />}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: cinematicEase,
                        }}
                        className="prose prose-lg max-w-none"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-6 text-center">
                            Overview of SAAR Group
                        </h2>
                        <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                            <p className="text-left md:text-justify break-words">
                                SAAR Group of Companies is a multidisciplinary organization with a strong presence
                                in both the United Arab Emirates and India. We operate through two distinct yet
                                complementary divisions that work together to advance the MEP engineering industry.
                            </p>
                            <p className="text-left md:text-justify break-words">
                                Our Engineering Consultancy division delivers cutting-edge MEP design solutions
                                for commercial, industrial, and infrastructure projects. Our MEP Academy division
                                provides comprehensive technical training programs that bridge the gap between
                                academic knowledge and industry requirements.
                            </p>
                            <p className="text-left md:text-justify break-words">
                                Together, we create a complete ecosystem that not only designs and delivers
                                exceptional engineering solutions but also develops the talent needed to sustain
                                and grow the industry for years to come.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Vision & Mission */}
            <Section background="primary">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                >
                    <Card hover className="bg-secondary-900 border border-gold-800/10">
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                                    <Target className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gold-gradient">Our Vision</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                To be a leading force in MEP engineering and education, recognized for our
                                commitment to sustainability, innovation, and reliability. We envision a
                                future where engineering excellence and quality education work hand-in-hand
                                to create lasting value for our clients, students, and communities.
                            </p>
                        </div>
                    </Card>

                    <Card hover className="bg-secondary-900 border border-gold-800/10">
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                                    <Rocket className="w-6 h-6 md:w-8 md:h-8 text-primary-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gold-gradient">Our Mission</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                To integrate expertise, practical exposure, and cutting-edge technology in
                                both design and training. We are committed to delivering sustainable,
                                code-compliant engineering solutions while empowering the next generation
                                of MEP professionals through comprehensive, industry-aligned education.
                            </p>
                        </div>
                    </Card>
                </motion.div>
            </Section>

            {/* Director's Message */}
            <Section backgroundSlot={<ParallaxStars />}>
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div
                        variants={childFade}
                        className="text-center mb-8"
                    >
                        <p className="text-sm md:text-base uppercase tracking-[0.25em] text-gold-400/80 mb-2">
                            Leadership Insight
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient">
                            A Message From Our Director
                        </h2>
                    </motion.div>

                    <Card hover className="bg-transparent border-0 shadow-none">
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black/90 via-secondary-900 to-black/95 border border-gold-800/40">
                            {/* outer glow frame */}
                            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-gold-400/25 via-transparent to-gold-700/25 opacity-70" />

                            <div className="relative z-10 grid md:grid-cols-[auto,minmax(0,1fr)] gap-8 md:gap-10 p-8 md:p-12">
                                {/* Director avatar / monogram */}
                                <div className="flex flex-col items-center md:items-center gap-4">
                                    <div className="relative">
                                        <div className="absolute -inset-1 rounded-full bg-gold-500/40 blur-xl opacity-70" />
                                        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary-700 to-primary-500 border border-gold-400 flex items-center justify-center text-white text-3xl md:text-4xl font-bold tracking-widest">
                                            SAAR
                                        </div>
                                    </div>
                                    <div className="text-center md:text-center">
                                        <p className="text-sm font-semibold text-gold-200 tracking-wide">
                                            Director, SAAR Group
                                        </p>
                                        <p className="text-xs text-gray-400 md:text-center">
                                            SAAR Engineering Consultancy & SAAR MEP Academy
                                        </p>
                                    </div>
                                </div>

                                {/* Quote content */}
                                <div className="flex flex-col justify-center gap-5">
                                    <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-black/40 border border-gold-800/40 self-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                                        <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-gold-gradient">
                                            Director’s Perspective
                                        </span>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 hidden md:block">
                                            <svg className="w-10 h-10 text-gold-300/80" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M10.5 4C7.47 4 5 6.47 5 9.5 5 12 6.64 14.1 9 14.8V20h4v-9.5C13 6.47 12.03 4 10.5 4zm8 0C15.47 4 13 6.47 13 9.5c0 2.5 1.64 4.6 4 5.3V20h4v-9.5C21 6.47 20.03 4 18.5 4z" />
                                            </svg>
                                        </div>
                                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                                            <span className="italic">
                                                At SAAR Group, we believe that true excellence comes from combining{' '}
                                            </span>
                                            <span className="text-gold-gradient font-semibold">
                                                engineering expertise
                                            </span>
                                            <span className="italic">
                                                {' '}with{' '}
                                            </span>
                                            <span className="text-gold-gradient font-semibold">
                                                educational empowerment
                                            </span>
                                            <span className="italic">
                                                . Our dual focus on consultancy and training creates a unique value proposition
                                                that benefits our clients, students, and the industry as a whole.
                                            </span>
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-end gap-3 pt-2 border-t border-gold-900/40 mt-2">
                                        <span className="w-8 h-px bg-gold-500/70" />
                                        <p className="text-sm md:text-right font-semibold text-gold-gradient">
                                            — Director, SAAR Group
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </Section>

            {/* Core Values */}
            <Section background="primary">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
                        Our Core Values
                    </h2>
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto ">
                    {coreValues.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <Card key={value.title} hover className="bg-secondary-900 border border-gold-800/10">
                                <div className="p-6 text-center">
                                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-primary-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gold-gradient mb-2">{value.title}</h3>
                                    <p className="text-gray-300">{value.description}</p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-6">
                        Discover Our Divisions
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Learn more about how our Engineering Consultancy and MEP Academy work together
                        to deliver excellence.
                    </p>
                    <div className="inline-flex">
                        <Link href="/divisions">
                            <Button variant="primary" className="w-full sm:w-auto">
                                Explore Divisions
                                <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </Section>
        </>
    );
}
