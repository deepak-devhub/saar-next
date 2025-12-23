"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import {
    BookOpen, Users, Briefcase, Award,
    ArrowRight, FileText
} from 'lucide-react';
import Lottie from 'lottie-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import TestimonialSlider from '@/components/ui/TestimonialSlider';
import ParallaxStars from '@/components/ui/ParallaxStars';
import academyPageImage from '@/assets/images/academy_page.webp';
import bookLottie from '@/assets/lootie/academy/university.json';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const courses = [
    { title: 'Professional Diploma in MEP Design', duration: '12 Months' },
    { title: 'HVAC Design & Drafting', duration: '3 Months' },
    { title: 'Electrical Design & Drafting', duration: '3 Months' },
    { title: 'Plumbing & Firefighting Design & Drafting', duration: '3 Months' },
    { title: 'Revit MEP (BIM)', duration: '2 Months' },
    { title: 'AutoCAD Training', duration: '1 Month' },
    { title: 'Crash Courses / Workshops / Industrial Training', duration: 'Flexible' },
    { title: 'Corporate Upskilling Programs', duration: 'Custom' },
    { title: 'Online Self-Paced Courses', duration: 'Flexible' },
];

const features = [
    { icon: BookOpen, title: 'Project-based Learning', description: 'Real-world projects and case studies' },
    { icon: Users, title: 'Industry Mentorship', description: 'Guidance from experienced professionals' },
    { icon: Briefcase, title: 'Placement Support', description: 'Career assistance and job placement' },
    { icon: Award, title: 'Certified Faculty', description: 'Expert instructors with industry experience' },
];

const studentTestimonials = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        role: 'MEP Design Engineer',
        text: 'The Professional Diploma program gave me the confidence and skills to excel in my career. The hands-on training with real projects was invaluable.',
        type: 'student' as const,
    },
    {
        id: 2,
        name: 'Sarah Ahmed',
        role: 'HVAC Designer',
        text: 'SAAR MEP Academy\'s Revit MEP course transformed my career. The instructors are knowledgeable and the curriculum is industry-relevant.',
        type: 'student' as const,
    },
    {
        id: 3,
        name: 'Vikram Singh',
        role: 'Electrical Design Engineer',
        text: 'The placement support and industry connections I gained through the academy helped me land my dream job. Highly recommended!',
        type: 'student' as const,
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

export default function AcademyPage() {
    useScrollAnimations();

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
                <Image
                    src={academyPageImage}
                    alt="Academy Hero"
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
                                SAAR MEP Academy
                            </h1>

                            {/* ICON – MIDDLE (Mobile only) */}
                            <div className="md:hidden flex justify-center my-4">
                                <div className="w-24 h-24">
                                    <Lottie
                                        animationData={bookLottie}
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
                                World-Class Technical Training
                            </motion.p>
                        </div>

                        {/* ICON – RIGHT SIDE (Desktop only) */}
                        <div className="hidden md:block absolute top-1/2 -right-24 md:-right-36 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28">
                            <Lottie
                                animationData={bookLottie}
                                loop
                                autoplay
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <Section backgroundSlot={<ParallaxStars />}>
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="max-w-6xl mx-auto px-4 sm:px-6 text-center"
                >
                    <motion.h2 variants={childFade} className="text-3xl md:text-4xl font-bold text-gold-gradient mb-6">
                        About SAAR MEP Academy
                    </motion.h2>
                    <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                        <motion.p variants={childFade} className="text-left md:text-justify break-words">
                            SAAR MEP Academy, based in Thrissur, Kerala, India, is dedicated to providing
                            comprehensive technical training in MEP design and engineering. Our mission is
                            to bridge the gap between academic knowledge and industry requirements, preparing
                            students for successful careers in the MEP industry.
                        </motion.p>
                        <motion.p variants={childFade} className="text-left md:text-justify break-words">
                            We offer a wide range of courses from professional diplomas to specialized
                            training programs, all designed with industry input to ensure relevance and
                            practical applicability. Our curriculum combines theoretical knowledge with
                            hands-on project experience, giving students the confidence and skills needed
                            to excel in their careers.
                        </motion.p>
                        <motion.p variants={childFade} className="text-left md:text-justify break-words">
                            With certified faculty, industry partnerships, and placement support, SAAR MEP
                            Academy is your gateway to a successful career in MEP engineering.
                        </motion.p>
                    </div>
                </motion.div>
            </Section>

            {/* Courses Grid */}
            <Section background="primary">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="text-center mb-12"
                >
                    <motion.h2 variants={childFade} className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">Our Courses</motion.h2>
                    <motion.p variants={childFade} className="text-lg text-gray-300">
                        Comprehensive training programs for every career stage
                    </motion.p>
                </motion.div>
                <div className="p-6 rounded-xl shadow-lg grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {courses.map((course, index) => (
                        <Card
                            key={course.title}
                            hover
                            className='bg-secondary-900 h-full flex flex-col'
                        >
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <BookOpen className="w-8 h-8 text-primary-600 flex-shrink-0" />
                                    <span className="text-sm text-black bg-primary-600 px-2 py-1 rounded">
                                        {course.duration}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-300 flex-grow">{course.title}</h3>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Features Section */}
            <Section backgroundSlot={<ParallaxStars />}>
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="text-center mb-12"
                >
                    <motion.h2 variants={childFade} className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
                        Why Choose SAAR MEP Academy
                    </motion.h2>
                </motion.div>
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
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
                                <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-10 h-10 text-secondary-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gold-gradient mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Section>

            {/* CTAs */}
            <Section background="primary">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.h2 variants={childFade} className="text-3xl md:text-4xl font-bold text-gold-gradient mb-6">
                        Start Your Journey Today
                    </motion.h2>
                    <motion.p variants={childFade} className="text-lg text-gray-300 mb-8">
                        Take the first step towards a successful career in MEP engineering
                    </motion.p>
                    <motion.div variants={childFade} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button variant="secondary" className="w-full sm:w-auto">
                                <FileText className="w-5 h-5 mr-2 inline" />
                                View Course Details
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="primary" className="w-full sm:w-auto">
                                Apply Now
                                <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </Section>

            {/* Testimonials */}
            <Section backgroundSlot={<ParallaxStars />}>
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    className="text-center mb-12"
                >
                    <motion.h2 variants={childFade} className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">Student Testimonials</motion.h2>
                </motion.div>
                <motion.div
                    variants={childFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={eagerViewport}
                    transition={{ duration: 0.65, ease: cinematicEase }}
                >
                    <TestimonialSlider testimonials={studentTestimonials} />
                </motion.div>
            </Section>
        </>
    );
}
