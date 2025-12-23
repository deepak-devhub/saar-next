"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, FileText } from 'lucide-react';
import { useState } from 'react';
import Lottie from 'lottie-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ParallaxStars from '@/components/ui/ParallaxStars';
import projectImage from '@/assets/images/project.webp';
import nmdcImage from '@/assets/images/nmdc.webp';
import industryImage from '@/assets/images/industry.webp';
import foodImage from '@/assets/images/food.webp';
import projectManagementLottie from '@/assets/lootie/project/Project management.json';

const cinematicEase = [0.25, 0.1, 0.25, 1] as const;

interface Project {
    id: number;
    title: string;
    location: string;
    type: string;
    description: string;
    highlights: string[];
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'NMDC Extension Project',
        location: 'ICAD',
        type: 'Commercial',
        description: 'Large-scale commercial extension project requiring comprehensive MEP systems design including HVAC, electrical, plumbing, and fire safety systems.',
        highlights: [
            'Sustainable HVAC design with energy efficiency focus',
            'Complete electrical distribution system',
            'Advanced fire safety and life safety systems',
            'BIM coordination across all disciplines',
        ],
        image: nmdcImage.src,
    },
    {
        id: 2,
        title: 'Euromech Industrial Facility',
        location: 'KEZAD',
        type: 'Industrial',
        description: 'Industrial manufacturing facility with specialized MEP requirements including process cooling, high-power electrical systems, and industrial plumbing.',
        highlights: [
            'Specialized HVAC for manufacturing processes',
            'High-capacity electrical systems',
            'Industrial-grade plumbing and drainage',
            'Value engineering optimization',
        ],
        image: industryImage.src,
    },
    {
        id: 3,
        title: 'Foodhub Industrial Facility',
        location: 'KEZAD',
        type: 'Industrial',
        description: 'Food processing facility requiring specialized MEP systems including cold storage HVAC, food-grade plumbing, and critical power systems.',
        highlights: [
            'Cold storage and refrigeration systems',
            'Food-grade plumbing and water treatment',
            'Critical power and backup systems',
            'Code compliance for food industry',
        ],
        image: foodImage.src,
    },
    {
        id: 4,
        title: 'Galleria Mall Fitout Design',
        location: 'Al Maryah Island, Abu Dhabi',
        type: 'Commercial',
        description: 'High-end retail fit-out design at Galleria Mall, focusing on luxury aesthetic integration with complex MEP services.',
        highlights: [
            'Luxury retail lighting design',
            'Integrated HVAC and acoustic solutions',
            'High-end fire suppression systems',
            'Detailed MEP coordination for retail spaces',
        ],
        image: nmdcImage.src,
    },
    {
        id: 5,
        title: 'Yas Mall Fitout Design',
        location: 'Yas Island, Abu Dhabi',
        type: 'Commercial',
        description: 'Comprehensive MEP design for a large-scale retail unit in Yas Mall, ensuring compliance with mall regulations and high-traffic requirements.',
        highlights: [
            'Retail-specific power distribution',
            'Water and drainage system integration',
            'Emergency and life safety systems',
            'Energy-efficient lighting controls',
        ],
        image: nmdcImage.src,
    },
    {
        id: 6,
        title: 'Arca Technologies Production Facility',
        location: 'KEZAD, Abu Dhabi',
        type: 'Industrial',
        description: 'Specialized MEP design for a technology production facility, featuring cleanroom environments and precision climate control.',
        highlights: [
            'Cleanroom HVAC and filtration systems',
            'Uninterrupted power supply (UPS) design',
            'Specialized gas and chemical drainage',
            'Advanced security and automation systems',
        ],
        image: industryImage.src,
    },
    {
        id: 7,
        title: 'Art Central Gallery & Workshop',
        location: 'Abu Dhabi',
        type: 'Commercial',
        description: 'Boutique MEP design for an art gallery and framing facility, requiring precise humidity and temperature control for art preservation.',
        highlights: [
            'Climate control for art preservation',
            'Specialized museum-grade lighting',
            'Custom fire protection for art collections',
            'Humidity-controlled storage areas',
        ],
        image: nmdcImage.src,
    },
];

export default function ProjectsPage() {

    const [filter, setFilter] = useState<string>('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.type.toLowerCase() === filter.toLowerCase());

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${projectImage.src})` }}
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
                                Our Projects
                            </h1>

                            {/* ICON – MIDDLE (Mobile only) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="md:hidden flex justify-center my-4"
                            >
                                <div className="w-24 h-24">
                                    <Lottie
                                        animationData={projectManagementLottie}
                                        loop
                                        autoplay
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                            </motion.div>

                            <p
                                className="mt-3 text-xl md:text-2xl text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(90deg, rgba(240, 229, 149, 1) 0%, rgba(222, 204, 128, 1) 50%, rgba(182, 150, 77, 1) 100%)',
                                }}
                            >
                                Showcasing Engineering Excellence
                            </p>
                        </div>

                        {/* ICON – RIGHT SIDE (Desktop only) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="hidden md:block absolute top-1/2 -right-24 md:-right-36 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28"
                        >
                            <Lottie
                                animationData={projectManagementLottie}
                                loop
                                autoplay
                                style={{ width: '100%', height: '100%' }}
                            />
                        </motion.div>
                    </motion.div>


                </div>
            </section>

            {/* Projects Gallery */}
            <Section backgroundSlot={<ParallaxStars />}>
                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {['all', 'commercial', 'industrial'].map((filterType, index) => (
                        <motion.button
                            key={filterType}
                            onClick={() => setFilter(filterType)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: cinematicEase,
                                scale: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }
                            }}
                            className={`px-6 py-2 rounded-full font-medium transition-colors ${filter === filterType
                                ? 'bg-primary-600 text-white'
                                : 'bg-secondary-900 text-gray-300 hover:bg-primary-600'
                                }`}
                        >
                            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                        </motion.button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial="rest"
                            animate="rest"
                            whileHover="hover"
                            whileInView="visible"
                            transition={{
                                delay: Math.min(index * 0.05, 0.3),
                                duration: 0.5,
                                ease: cinematicEase,
                            }}
                        >
                            <Card hover className="group h-full flex flex-col bg-secondary-900 border border-gold-800/10">
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent" />
                                    {/* Brand gold soft-light overlay to keep text legible on lighter images */}
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(90deg, rgba(240, 229, 149, 0.25) 0%, rgba(222, 204, 128, 0.25) 50%, rgba(182, 150, 77, 0.25) 100%)',
                                            mixBlendMode: 'soft-light',
                                        }}
                                    />
                                    {/* Animated gold glare sweep on hover */}
                                    <motion.div
                                        variants={{
                                            rest: { opacity: 0, x: '-100%' },
                                            hover: {
                                                opacity: 0.85,
                                                x: '100%',
                                                transition: { duration: 0.9, ease: [0.45, 0, 0.55, 1] },
                                            },
                                        }}
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(120deg, transparent, rgba(240, 229, 149, 0.4), transparent)',
                                            transform: 'skewX(-20deg)',
                                        }}
                                    />
                                    <div className="absolute top-4 right-4 bg-gold-500/20 backdrop-blur-md text-gold-200 px-3 py-1 rounded-full text-xs font-semibold border border-gold-500/30">
                                        {project.type}
                                    </div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold text-gold-gradient mb-2">{project.title}</h3>
                                    <div className="flex items-center text-gray-300 mb-4">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        <span className="text-sm">{project.location}</span>
                                    </div>
                                    <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                                    <div className="border-t pt-4">
                                        <p className="text-sm font-semibold text-gold-gradient mb-2">Key Highlights:</p>
                                        <ul className="space-y-1">
                                            {project.highlights.map((highlight, idx) => (
                                                <li key={idx} className="text-sm text-gray-300 flex items-start">
                                                    <span className="text-gold-gradient mr-2">•</span>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="!pt-8 md:!pt-12" backgroundSlot={<ParallaxStars />}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-6">
                        Have a Project in Mind?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Let's discuss how we can bring your vision to life with our engineering expertise
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" className="w-full sm:w-auto">
                            <FileText className="w-5 h-5 mr-2 inline" />
                            Request a Proposal
                            <ArrowRight className="w-5 h-5 ml-2 inline" />
                        </Button>
                    </Link>
                </div>
            </Section>
        </>
    );
}
