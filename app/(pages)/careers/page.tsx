"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, Mail, Users, GraduationCap, ArrowRight, CheckCircle, AlertCircle, X } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import JobApplicationForm, { type JobApplicationFormData } from '@/components/ui/JobApplicationForm';
import { AnimatePresence } from 'framer-motion';
import careersImage from '@/assets/images/careers.webp';
import Lottie from 'lottie-react';
import emailLottie from '@/assets/lootie/career/Email Sent by Todd Rocheford.json';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';

const cinematicEase = [0.25, 0.1, 0.25, 1] as const;

const positions = [
    {
        title: 'MEP Design Engineers',
        department: 'Engineering consultancy',
        description: 'We are seeking experienced MEP Design Engineers with expertise in HVAC, electrical, or plumbing systems design. Candidates should have strong technical skills and experience with BIM software.',
        requirements: [
            'Bachelor\'s degree in Mechanical/Electrical Engineering',
            '3+ years of MEP design experience',
            'Proficiency in AutoCAD, Revit MEP',
            'Knowledge of local and international codes',
        ],
    },
    {
        title: 'Electrical / Mechanical / HVAC Designers & Draftsmen',
        department: 'Design',
        description: 'Join our design team as a Designer or Draftsman specializing in electrical, mechanical, or HVAC systems. Work on diverse projects and grow your career with us.',
        requirements: [
            'Diploma or degree in relevant field',
            '2+ years of drafting/design experience',
            'Strong AutoCAD and Revit skills',
            'Attention to detail and accuracy',
        ],
    },
    {
        title: 'Trainers (HVAC, Electrical, Plumbing)',
        department: 'Academy',
        description: 'Share your expertise as a trainer at SAAR MEP Academy. We need experienced professionals to teach HVAC, Electrical, or Plumbing design courses.',
        requirements: [
            '5+ years of industry experience',
            'Strong communication and teaching skills',
            'Passion for education and mentorship',
            'Relevant certifications preferred',
        ],
    },
    {
        title: 'Internships for Students',
        department: 'All Departments',
        description: 'We offer internship opportunities for engineering students to gain real-world experience in MEP design and consultancy. Learn from industry experts and work on live projects.',
        requirements: [
            'Currently pursuing engineering degree',
            'Interest in MEP engineering',
            'Basic knowledge of AutoCAD',
            'Willingness to learn and grow',
        ],
    },
];

export default function CareersPage() {
    useScrollAnimations();

    const [isApplyOpen, setIsApplyOpen] = useState(false);
    const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Auto-hide notification after 5 seconds
    useEffect(() => {
        if (status !== 'idle') {
            const timer = setTimeout(() => {
                setStatus('idle');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleOpenApply = (title: string) => {
        setSelectedPosition(title);
        setIsApplyOpen(true);
        setStatus('idle');
    };

    const handleCloseApply = () => {
        setIsApplyOpen(false);
        setSelectedPosition(null);
    };

    const handleSubmitApplication = async (data: JobApplicationFormData) => {
        setStatus('idle');
        setErrorMessage('');

        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('position', data.position);
            formData.append('experience', data.experience);
            formData.append('coverLetter', data.coverLetter);

            if (data.resume && data.resume.length > 0) {
                formData.append('resume', data.resume[0]);
            }

            const response = await fetch('/api/careers', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('success');
                // We keep the modal open for a moment to show success or close it? 
                // Let's close it after a delay if success, or show status in modal.
                // For now, let's close and show toast on the page.
                setTimeout(() => handleCloseApply(), 2000);
            } else {
                setStatus('error');
                setErrorMessage(result.error || 'Failed to submit application.');
            }
        } catch (error) {
            console.error('Application error:', error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="w-full relative">
            {/* Toast Notification */}
            <div className="fixed top-24 right-8 z-[100] flex flex-col gap-4 pointer-events-none">
                <AnimatePresence mode="wait">
                    {status !== 'idle' && (
                        <motion.div
                            initial={{ opacity: 0, x: 100, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 50, scale: 0.95 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                            className={`pointer-events-auto min-w-[320px] max-w-md p-4 rounded-xl shadow-2xl border backdrop-blur-md flex items-start gap-4 ${status === 'success'
                                ? 'bg-emerald-900/40 border-emerald-500/50 text-emerald-100'
                                : 'bg-rose-900/40 border-rose-500/50 text-rose-100'
                                }`}
                        >
                            <div className={`p-2 rounded-lg ${status === 'success' ? 'bg-emerald-500/20' : 'bg-rose-500/20'
                                }`}>
                                {status === 'success' ? (
                                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 text-rose-400" />
                                )}
                            </div>

                            <div className="flex-1 pt-1">
                                <h4 className="font-bold text-sm uppercase tracking-wider mb-1">
                                    {status === 'success' ? 'Success' : 'Application Failed'}
                                </h4>
                                <p className="text-sm opacity-90 leading-relaxed font-medium">
                                    {status === 'success'
                                        ? 'Thank you! Your application has been received successfully. Our team will review it and get back to you.'
                                        : errorMessage
                                    }
                                </p>
                            </div>

                            <button
                                onClick={() => setStatus('idle')}
                                className="p-1 hover:bg-white/10 rounded-full transition-colors self-start"
                            >
                                <X className="w-4 h-4 opacity-50" />
                            </button>

                            <motion.div
                                initial={{ width: '100%' }}
                                animate={{ width: '0%' }}
                                transition={{ duration: 5, ease: 'linear' }}
                                className={`absolute bottom-0 left-0 h-1 rounded-b-xl ${status === 'success' ? 'bg-emerald-500/50' : 'bg-rose-500/50'
                                    }`}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
                <Image
                    src={careersImage}
                    alt="Careers Hero"
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
                                Join Our Growing Team
                            </h1>

                            {/* ICON – MIDDLE (Mobile only) */}
                            <div className="md:hidden flex justify-center my-4">
                                <div className="w-24 h-24">
                                    <Lottie
                                        animationData={emailLottie}
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
                                Build Your Career with SAAR Group
                            </p>
                        </div>

                        {/* ICON – RIGHT SIDE (Desktop only) */}
                        <div className="hidden md:block absolute top-1/2 -right-24 md:-right-36 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28">
                            <Lottie
                                animationData={emailLottie}
                                loop
                                autoplay
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Intro Section */}
            <Section>
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{
                            duration: 0.5,
                            ease: cinematicEase // Smooth cinematic easing - matches hero sections
                        }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-6">
                            Why Work with SAAR Group?
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            At SAAR Group, we believe in fostering talent and providing opportunities for
                            professional growth. Whether you're an experienced engineer, a skilled designer,
                            or a student looking to start your career, we have a place for you in our
                            dynamic team.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-6 mt-12">
                            <div className="text-center">
                                <Users className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                                <h3 className="font-semibold text-gold-gradient mb-2">Collaborative Environment</h3>
                                <p className="text-sm text-gray-300">Work with talented professionals</p>
                            </div>
                            <div className="text-center">
                                <GraduationCap className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                                <h3 className="font-semibold text-gold-gradient mb-2">Continuous Learning</h3>
                                <p className="text-sm text-gray-300">Grow your skills and expertise</p>
                            </div>
                            <div className="text-center">
                                <Briefcase className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                                <h3 className="font-semibold text-gold-gradient mb-2">Diverse Projects</h3>
                                <p className="text-sm text-gray-300">Work on exciting challenges</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Open Positions */}
            <Section>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">Open Positions</h2>
                    <p className="text-lg text-gray-300">
                        Explore current opportunities to join our team
                    </p>
                </div>
                <div className="max-w-5xl mx-auto space-y-6">
                    {positions.map((position, index) => (
                        <Card
                            key={position.title}
                            hover
                            className='bg-secondary-900'
                        >
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gold-gradient mb-2">{position.title}</h3>
                                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                                            {position.department}
                                        </span>
                                    </div>
                                    <Briefcase className="w-8 h-8 text-primary-600 flex-shrink-0" />
                                </div>
                                <p className="text-gray-300 mb-6 leading-relaxed">{position.description}</p>
                                <div className="border-t border-gold-800/20 pt-4">
                                    <p className="font-semibold text-gold-gradient mb-3">Requirements:</p>
                                    <ul className="space-y-2">
                                        {position.requirements.map((req, idx) => (
                                            <li key={idx} className="text-gray-300 flex items-start">
                                                <span className="text-gold-gradient mr-2 mt-1">•</span>
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-2 flex justify-center sm:justify-end">
                                    <Button
                                        variant="primary"
                                        className="w-full sm:w-auto px-4 py-2 min-h-[44px]"
                                        onClick={() => handleOpenApply(position.title)}
                                    >
                                        Apply Now
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{
                            duration: 0.5,
                            ease: cinematicEase
                        }}
                    >
                        <div className="bg-gradient-to-br from-secondary-900/50 to-black rounded-2xl p-12 border border-gold-800/10">
                            <Mail className="w-16 h-16 text-primary-600 mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-gold-gradient mb-4">
                                Ready to Apply?
                            </h2>
                            <p className="text-lg text-gray-300 mb-8">
                                Send your resume to our careers team. We're always looking for talented
                                individuals to join our growing team.
                            </p>
                            <a href="mailto:careers@saargroup.com">
                                <Button variant="primary" className="w-full sm:w-auto">
                                    <Mail className="w-5 h-5 mr-2 inline" />
                                    Send Resume to careers@saargroup.com
                                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Apply Modal */}
            <Modal
                isOpen={isApplyOpen && Boolean(selectedPosition)}
                onClose={handleCloseApply}
                title={selectedPosition ? `Apply for ${selectedPosition}` : 'Apply'}
            >
                {selectedPosition && (
                    <JobApplicationForm
                        positionTitle={selectedPosition}
                        onSubmit={handleSubmitApplication}
                        onCancel={handleCloseApply}
                    />
                )}
            </Modal>
        </div>
    );
}
