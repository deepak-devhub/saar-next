"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import Lottie from 'lottie-react';
import Section from '@/components/ui/Section';
import ContactForm from '@/components/ui/ContactForm';
import contactImage from '@/assets/images/contact.webp';
import contactLottie from '@/assets/lootie/contact/Call ringing animation.json';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const cinematicEase = [0.25, 0.1, 0.25, 1] as const;

export default function ContactPage() {
    useScrollAnimations();
    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Youtube, href: '#', label: 'YouTube' },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
                <Image
                    src={contactImage}
                    alt="Contact Hero"
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
                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex flex-col md:flex-row items-center justify-center">
                        <div className="text-center z-10">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2,
                                    ease: [0.25, 0.1, 0.25, 1]
                                }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text mb-4"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(90deg, rgba(240, 229, 149, 1) 0%, rgba(222, 204, 128, 1) 50%, rgba(182, 150, 77, 1) 100%)',
                                }}
                            >
                                Contact Us
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4,
                                    ease: [0.25, 0.1, 0.25, 1]
                                }}
                                className="text-xl md:text-2xl text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(90deg, rgba(240, 229, 149, 1) 0%, rgba(222, 204, 128, 1) 50%, rgba(182, 150, 77, 1) 100%)',
                                }}
                            >
                                Get in Touch with SAAR Group
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 flex items-center justify-center flex-shrink-0 md:absolute md:left-1/2 md:ml-[50px] lg:ml-[70px] mb-8 md:mb-8"
                            style={{
                                filter: 'brightness(0) saturate(100%) invert(85%) sepia(28%) saturate(655%) hue-rotate(359deg) brightness(98%) contrast(92%)',
                            }}
                        >
                            <Lottie
                                animationData={contactLottie}
                                loop={true}
                                autoplay={true}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form - centered */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{
                            duration: 0.5,
                            ease: [0.25, 0.1, 0.25, 1] // Smooth cinematic easing - matches hero sections
                        }}
                        className="bg-secondary-900/70 border border-secondary-800 rounded-2xl shadow-xl p-8 sm:p-10"
                    >
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gold-gradient mb-4">Send Us a Message</h2>
                            <p className="text-gray-300 mb-8">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>
                        </div>
                        <div className="max-w-2xl mx-auto text-left">
                            <ContactForm />
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Locations with side-by-side maps */}
            <Section>
                <div className="max-w-6xl mx-auto space-y-12">
                    <h2 className="text-3xl font-bold text-gold-gradient text-center mb-2">Our Locations</h2>
                    <p className="text-center text-gray-300 max-w-3xl mx-auto mb-4">
                        Explore our offices and training centers. Each location includes a map for quick navigation.
                    </p>

                    {/* UAE Office row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="grid lg:grid-cols-2 gap-8 items-stretch"
                    >
                        <div className="bg-secondary-900 rounded-xl shadow-lg p-6 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-gold-gradient mb-4">UAE Office</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                                    <p className="text-gray-300">
                                        SAAR Engineering Consultancy LLC<br />
                                        Sharjah Media City, UAE
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                    <a href="tel:+971XXXXXXXXX" className="text-gray-300 hover:text-gold-gradient">
                                        +971 XX XXX XXXX
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                    <a href="mailto:info@saargroup.com" className="text-gray-300 hover:text-gold-gradient">
                                        info@saargroup.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-200 rounded-xl overflow-hidden h-full min-h-[320px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1234567890123!2d55.12345678901234!3d25.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzI0LjQiTiA1NcKwMDcnMjQuNCJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="SAAR Group UAE Location"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* India Office row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="grid lg:grid-cols-2 gap-8 items-stretch"
                    >
                        <div className="bg-secondary-900 rounded-xl shadow-lg p-6 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-gold-gradient mb-4">India Office</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-1" />
                                    <p className="text-gray-300">
                                        SAAR MEP Academy<br />
                                        Thrissur, Kerala, India
                                    </p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-secondary-600 flex-shrink-0" />
                                    <a href="tel:+91XXXXXXXXXX" className="text-gray-300 hover:text-gold-gradient">
                                        +91 XXXX XXX XXX
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-secondary-600 flex-shrink-0" />
                                    <a href="mailto:careers@saargroup.com" className="text-gray-300 hover:text-gold-gradient">
                                        careers@saargroup.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-200 rounded-xl overflow-hidden h-full min-h-[320px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.742509726417!2d76.21441831531622!3d10.52852716631632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa5818a4e7c7bf%3A0x1d73f2aa4b1cd5df!2sThrissur%2C%20Kerala%20680551!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="SAAR Group India Location"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Social Media Icons */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-gold-gradient mb-4">Follow Us</h3>
                        <div className="flex justify-center space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 hover:bg-primary-600 text-primary-600 hover:text-white transition-colors"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
