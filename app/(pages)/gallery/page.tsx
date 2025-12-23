"use client";

import { useState, useEffect } from 'react';

import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import Section from '@/components/ui/Section';
import ParallaxStars from '@/components/ui/ParallaxStars';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });


import hvacImage from '@/public/services/hvac.png';
import electricalImage from '@/public/services/electrical.png';
import plumbingImage from '@/public/services/plumbing.png';
import elvImage from '@/public/services/elv.png';
import flsImage from '@/public/services/fls.png';
import bimImage from '@/public/services/bim.png';
import autoCadImage from '@/public/services/autocad.png';
import softwareTrainingImage from '@/public/services/software.png';


import galleryPageImage from '@/assets/images/gallery.jpg';
import galleryLottie from '@/assets/lootie/gallery/gallery.json';

const galleryItems: { id: number; src: StaticImageData, title: string; category: string }[] = [
    { id: 1, src: hvacImage, title: 'HVAC System Design', category: 'Mechanical' },
    { id: 2, src: electricalImage, title: 'Electrical System Design', category: 'Electrical' },
    { id: 3, src: plumbingImage, title: 'Plumbing System Design', category: 'Plumbing' },
    { id: 4, src: elvImage, title: 'ELV System Design', category: 'Systems' },
    { id: 5, src: flsImage, title: 'FLS System Design', category: 'Safety' },
    { id: 6, src: bimImage, title: 'BIM & Coordination', category: 'Modeling' },
    { id: 7, src: autoCadImage, title: 'Auto CAD Designing', category: 'Design' },
    { id: 8, src: softwareTrainingImage, title: 'Software Training', category: 'Education' },
];

const cinematicEase = [0.25, 0.1, 0.25, 1] as const;

const sectionReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: cinematicEase,
        },
    },
};

const childFade: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: cinematicEase,
        },
    },
};

const eagerViewport = {
    once: true,
    amount: 0.18,
    margin: '0px 0px 20% 0px',
} as const;

export default function GalleryPage() {
    useScrollAnimations();
    const [selectedImage, setSelectedImage] =
        useState<(typeof galleryItems)[number] | null>(null);


    return (
        <div className="min-h-screen bg-black overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
                <Image
                    src={galleryPageImage}
                    alt="Gallery Hero"
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

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center" data-scroll="parallax">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
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
                                Visual Excellence
                            </h1>

                            {/* ICON – MIDDLE (Mobile only) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="md:hidden flex justify-center mt-12 mb-8"
                            >
                                <div className="w-24 h-24">
                                    <Lottie
                                        animationData={galleryLottie}
                                        loop
                                        autoplay
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                </div>
                            </motion.div>

                            <motion.p
                                className="text-xl md:text-2xl text-transparent bg-clip-text mt-3"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(90deg, rgba(240, 229, 149, 1) 0%, rgba(222, 204, 128, 1) 50%, rgba(182, 150, 77, 1) 100%)',
                                }}
                            >
                                Innovative Showcase of Engineering Precision
                            </motion.p>
                        </div>

                        {/* ICON – RIGHT SIDE (Desktop only) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="hidden md:block absolute top-[50%] -right-24 md:-right-36 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28"
                        >
                            <Lottie
                                animationData={galleryLottie}
                                loop
                                autoplay
                                style={{ width: '100%', height: '100%' }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <Section backgroundSlot={<ParallaxStars />} className="relative z-10 !pt-24 !pb-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={sectionReveal}
                        initial="hidden"
                        animate="visible"
                        viewport={eagerViewport}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        {galleryItems.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={childFade}
                                layoutId={`gallery-gallery-item-${item.id}`}

                                className="group relative h-[400px] cursor-pointer"
                                onClick={() => setSelectedImage(item)}
                            >
                                <div
                                    className="relative h-full w-full overflow-hidden rounded-3xl bg-secondary-900 border border-gold-800/10 transition-all duration-700 group-hover:border-gold-800/50 group-hover:shadow-[0_0_50px_rgba(182,150,77,0.15)] group-hover:-translate-y-2"
                                >

                                    {/* Subtle Grain Overlay */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                                    {/* Image */}
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                        priority={item.id <= 4}
                                    />

                                    {/* Modern Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Animated Glint Overlay */}
                                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"
                                        style={{
                                            background: 'linear-gradient(90deg, transparent, rgba(240, 229, 149, 0.1), transparent)',
                                            transform: 'skewX(-20deg)',
                                        }}
                                    />

                                    {/* Corner Accent */}
                                    <div className="absolute top-6 right-6 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="bg-gold-500/20 backdrop-blur-xl p-3 rounded-full border border-gold-400/30">
                                            <Maximize2 className="w-5 h-5 text-gold-200" />
                                        </div>
                                    </div>

                                    {/* Content Sidebar / Reveal */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-all duration-500">
                                        <motion.div
                                            className="mb-3"
                                            initial={{ opacity: 0.7 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-gold-500/10 text-gold-400 border border-gold-500/20 mb-3">
                                                {item.category}
                                            </span>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-gold-200 transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                        </motion.div>

                                        <div className="h-1 w-0 group-hover:w-16 bg-gold-500 transition-all duration-500" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Section>

            {/* Fullscreen Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12 bg-black/98 backdrop-blur-2xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-8 right-8 z-[110] p-4 text-white/50 hover:text-gold-400 bg-secondary-900/50 rounded-full backdrop-blur-md border border-white/10 transition-all"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        {/* Main Content */}
                        <motion.div
                            layoutId={`gallery-gallery-item-${selectedImage.id}`}

                            className="relative max-w-7xl w-full h-full flex flex-col md:flex-row items-center justify-center gap-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative flex-1 w-full h-full max-h-[70vh] md:max-h-full overflow-hidden rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5 bg-secondary-900">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Sidebar Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="w-full md:w-[350px] space-y-6"
                            >
                                <div>
                                    <span className="text-gold-500 font-bold tracking-widest uppercase text-sm">
                                        {selectedImage.category}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
                                        {selectedImage.title}
                                    </h2>
                                </div>

                                <div className="h-[2px] w-20 bg-gold-600" />

                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Expertly engineered solutions designed with precision for the {selectedImage.category.toLowerCase()} sector.
                                    Demonstrating our commitment to quality and technical excellence in every detail.
                                </p>

                                <div className="pt-8">
                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="group flex items-center gap-3 text-gold-200 font-semibold hover:text-white transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 transition-all">
                                            <X className="w-5 h-5" />
                                        </div>
                                        Close Viewer
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

}
