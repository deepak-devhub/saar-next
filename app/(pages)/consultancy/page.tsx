"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import {
    Building2, Wind, Zap, Droplets, Cpu, Shield,
    Leaf, FileCheck, Users, TrendingUp, ArrowRight, Eye,
    PenTool, Terminal
} from 'lucide-react';
import Lottie from 'lottie-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import consultancyPageImage from '@/assets/images/consultancy_page.webp';
import nmdcImage from '@/assets/images/nmdc.webp';
import industryImage from '@/assets/images/industry.webp';
import foodImage from '@/assets/images/food.webp';
import hvacImage from '@/public/services/hvac.png';
import electricalImage from '@/public/services/electrical.png';
import plumbingImage from '@/public/services/plumbing.png';
import elvImage from '@/public/services/elv.png';
import flsImage from '@/public/services/fls.png';
import bimImage from '@/public/services/bim.png';
import autoCadImage from '@/public/services/autocad.png';
import softwareTrainingImage from '@/public/services/software.png';
import ParallaxStars from '@/components/ui/ParallaxStars';
import engineerLottie from '@/assets/lootie/consultancy/engineer-gears.json';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const services = [
    {
        icon: Wind,
        title: 'Mechanical (HVAC & Firefighting)',
        description: 'Complete HVAC system design and firefighting solutions',
        image: hvacImage
    },
    {
        icon: Zap,
        title: 'Electrical System Design',
        description: 'Comprehensive electrical design and power distribution',
        image: electricalImage
    },
    {
        icon: Droplets,
        title: 'Plumbing System Design',
        description: 'Efficient plumbing and water management systems',
        image: plumbingImage
    },
    {
        icon: Cpu,
        title: 'ELV System Design',
        description: 'Extra Low Voltage systems including security and communication',
        image: elvImage
    },
    {
        icon: Shield,
        title: 'FLS System Design',
        description: 'Fire Life Safety systems and emergency response',
        image: flsImage
    },
    {
        icon: Building2,
        title: 'BIM & Coordination',
        description: 'Building Information Modeling and multi-disciplinary coordination',
        image: bimImage
    },
    {
        icon: PenTool,
        title: 'Auto CAD Designing',
        description: 'Professional 2D and 3D drafting and design services using industry-standard AutoCAD software.',
        image: autoCadImage
    },
    {
        icon: Terminal,
        title: 'Software Training',
        description: 'Specialized technical software training for engineering professionals and students.',
        image: softwareTrainingImage
    },
];

const highlights = [
    { icon: Leaf, title: 'Sustainability', description: 'Eco-friendly designs that reduce environmental impact' },
    { icon: FileCheck, title: 'Code Compliance', description: 'Full adherence to local and international standards' },
    { icon: Users, title: 'Experienced Team', description: '15+ years of combined industry expertise' },
    { icon: TrendingUp, title: 'Value Engineering', description: 'Optimized solutions that maximize value' },
];

const projectsList = [
    {
        id: 1,
        title: 'NMDC Extension Project',
        location: 'ICAD',
        description: 'Large-scale commercial extension with comprehensive MEP systems',
        image: nmdcImage
    },
    {
        id: 2,
        title: 'Euromech Industrial Facility',
        location: 'KEZAD',
        description: 'Industrial MEP design for manufacturing facility',
        image: industryImage
    },
    {
        id: 3,
        title: 'Foodhub Industrial Facility',
        location: 'KEZAD',
        description: 'Specialized MEP systems for food processing facility',
        image: foodImage
    },
];

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

export default function ConsultancyPage() {
    useScrollAnimations();

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
                <Image
                    src={consultancyPageImage}
                    alt="Consultancy Hero"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/65 via-black/55 to-black/45" />
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
                                SAAR Engineering Consultancy
                            </h1>

                            {/* ICON – MIDDLE (Mobile only) */}
                            <div className="md:hidden flex justify-center my-4">
                                <div className="w-24 h-24">
                                    <Lottie
                                        animationData={engineerLottie}
                                        loop
                                        autoplay
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4,
                                    ease: cinematicEase,
                                }}
                                className="text-xl md:text-2xl text-transparent bg-clip-text mt-3"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(90deg, rgba(240, 229, 149, 1) 0%, rgba(222, 204, 128, 1) 50%, rgba(182, 150, 77, 1) 100%)',
                                }}
                            >
                                Innovative MEP Engineering Solutions
                            </motion.p>
                        </div>

                        {/* ICON – RIGHT SIDE (Desktop only) */}
                        <div className="hidden md:block absolute top-1/2 -right-24 md:-right-36 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28">
                            <Lottie
                                animationData={engineerLottie}
                                loop
                                autoplay
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <Section background="primary" backgroundSlot={<ParallaxStars />}>
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="max-w-6xl mx-auto px-4 sm:px-6 text-center"
                >
                    <motion.h2 variants={childFade} className="text-3xl md:text-4xl font-bold text-gold-gradient mb-6">
                        About Our Consultancy
                    </motion.h2>
                    <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                        <motion.p variants={childFade} className="text-left md:text-justify break-words">
                            SAAR Engineering Consultancy LLC is a leading MEP engineering firm based in
                            Sharjah Media City, UAE, with extensive experience delivering comprehensive
                            mechanical, electrical, and plumbing design solutions for projects across
                            the UAE and India.
                        </motion.p>
                        <motion.p variants={childFade} className="text-left md:text-justify break-words">
                            Our team of experienced engineers brings over 15 years of combined expertise
                            in designing sustainable, code-compliant MEP systems for commercial, industrial,
                            and infrastructure projects. We are committed to delivering innovative solutions
                            that optimize performance, reduce costs, and minimize environmental impact.
                        </motion.p>
                        <motion.p variants={childFade} className="text-left md:text-justify break-words">
                            <strong>Credentials:</strong> Licensed engineering consultancy with certifications
                            in sustainable design, BIM coordination, and international code compliance.
                        </motion.p>
                    </div>
                </motion.div>
            </Section>

            {/* Services Grid */}
            <Section background="primary">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="text-center mb-12"
                >
                    <motion.h2 variants={childFade} className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
                        Our Services
                    </motion.h2>
                    <motion.p variants={childFade} className="text-lg text-gray-300">
                        Comprehensive MEP engineering solutions for all project types
                    </motion.p>
                </motion.div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Card key={service.title} hover className="group h-full flex flex-col bg-secondary-900 border-gold-800/10 hover:border-gold-800/30">
                                <div className="aspect-video relative overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/35" />
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(90deg, rgba(240, 229, 149, 0.55) 0%, rgba(222, 204, 128, 0.55) 50%, rgba(182, 150, 77, 0.55) 100%)',
                                            mixBlendMode: 'soft-light',
                                            opacity: 1.5,
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
                                    <div className="absolute top-4 right-4 bg-white/90 text-primary-600 p-2.5 rounded-xl shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-gold-gradient mb-3">{service.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </Section>

            {/* Why Choose SAAR */}
            <Section backgroundSlot={<ParallaxStars />}>
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="text-center mb-12"
                >
                    <motion.h2 variants={childFade} className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
                        Why Choose SAAR
                    </motion.h2>
                </motion.div>
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
                >
                    {highlights.map((highlight, index) => {
                        const Icon = highlight.icon;
                        return (
                            <motion.div
                                key={highlight.title}
                                variants={childFade}
                                whileHover={{ scale: 1.08 }}
                                transition={{
                                    delay: index * 0.05,
                                    duration: 0.45,
                                    ease: cinematicEase,
                                    scale: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }
                                }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-10 h-10 text-primary-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gold-gradient mb-2">{highlight.title}</h3>
                                <p className="text-gray-300">{highlight.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Section>

            {/* Featured Projects */}
            <Section background="primary">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="text-center mb-12"
                >
                    <motion.h2 variants={childFade} className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
                        Featured Projects
                    </motion.h2>
                    <motion.p variants={childFade} className="text-lg text-gray-300">
                        Recent projects showcasing our engineering excellence
                    </motion.p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projectsList.map((project, index) => (
                        <Card key={project.id} hover className="group h-full flex flex-col bg-secondary-900 border border-gold-800/10">
                            <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/35" />
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        backgroundImage:
                                            'linear-gradient(90deg, rgba(240, 229, 149, 0.55) 0%, rgba(222, 204, 128, 0.55) 50%, rgba(182, 150, 77, 0.55) 100%)',
                                        mixBlendMode: 'soft-light',
                                        opacity: 1.5,
                                    }}
                                />
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-gold-gradient mb-2">{project.title}</h3>
                                <p className="text-sm text-gold-gradient mb-2">{project.location}</p>
                                <p className="text-gray-300 flex-grow">{project.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTAs */}
            <Section>
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.h2 variants={childFade} className="text-3xl md:text-4xl font-bold text-gold-gradient mb-6">
                        Ready to Start Your Project?
                    </motion.h2>
                    <motion.p variants={childFade} className="text-lg text-gray-300 mb-8">
                        Let's discuss how we can help bring your vision to life
                    </motion.p>
                    <motion.div variants={childFade} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button variant="primary" className="w-full sm:w-auto">
                                Request a Consultation
                                <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="outline" className="w-full sm:w-auto">
                                <Eye className="w-5 h-5 mr-2 inline" />
                                View Projects
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </Section>
        </>
    );
}
