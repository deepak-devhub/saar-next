"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import logo from '@/assets/images/logo.png';

export default function LandingPage() {
    const router = useRouter();
    const pathname = usePathname();
    const targetPath = '/home';
    const [showText, setShowText] = useState(false);
    const [logoDone, setLogoDone] = useState(false);
    const [shimmerDone, setShimmerDone] = useState(false);

    // Only navigate once the shimmer finishes so the intro completes first
    useEffect(() => {
        if (!shimmerDone) return;
        router.replace(targetPath);
    }, [router, shimmerDone, targetPath]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.3,
                    ease: 'easeOut'
                }
            }}
            className="fixed inset-0 bg-black flex items-center justify-center"
            style={{ pointerEvents: 'auto' }}
        >
            {/* Shimmer effect - full screen height, appears after text fill animation */}
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                    duration: 2,
                    delay: 5.5, // Starts after text fill animation completes (0.5s delay + 6s duration = 6.5s)
                    ease: 'easeInOut',
                }}
                className="fixed inset-0 z-20 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent skew-x-12 pointer-events-none"
                style={{ height: '100vh', width: '100vw' }}
                onAnimationComplete={() => setShimmerDone(true)}
            />

            <div className="relative w-full max-w-4xl px-8">
                {/* Logo Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="relative z-10"
                >
                    {/* Glow effect behind logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.3, scale: 1.2 }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        }}
                        className="absolute inset-0 blur-3xl -z-10"
                        style={{
                            background: 'radial-gradient(circle, rgba(244, 196, 48, 0.3), rgba(244, 196, 48, 0.1), transparent)',
                        }}
                    />

                    {/* Logo Text */}
                    <motion.div
                        className="relative z-40 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        style={{ perspective: 1200 }}
                    >
                        <motion.div
                            layout
                            className="mx-auto mb-0 w-40 md:w-52 lg:w-64"
                            initial={{ opacity: 0, scale: 0.1, rotate: 0, y: 0, z: -400 }}
                            animate={
                                logoDone
                                    // Final settled state: no rotation, slightly lifted
                                    ? { opacity: 1, scale: 0.6, rotate: 0, y: -40, z: 0 }
                                    : {
                                        opacity: 1,
                                        // Intro: 3 continuous clockwise rotations, size grows smoothly
                                        scale: [0.1, 0.25, 0.5, 0.8, 1.1],
                                        rotate: [0, 360, 720, 1080, 1080],
                                        y: [0, 0, 0, 0, 0],
                                        z: [-400, -250, -100, 0, 0],
                                    }
                            }
                            transition={{
                                delay: 0.05,
                                type: logoDone ? 'spring' : 'tween',
                                stiffness: 60,
                                damping: 12,
                                mass: 1,
                                // 2.5s intro for smooth, single-direction motion (no per-rotation pause)
                                duration: logoDone ? 0.8 : 2.5,
                                ease: logoDone ? [0.22, 1, 0.36, 1] : 'linear',
                                layout: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                            onAnimationComplete={() => {
                                if (!logoDone) {
                                    setLogoDone(true);
                                    setShowText(true);
                                }
                            }}
                        >
                            <img src={logo.src} alt="SAAR logo" className="w-full h-auto object-contain" />
                        </motion.div>
                        {showText && (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 120 }}
                                animate={{ opacity: 1, y: -100 }}
                                transition={{
                                    delay: 0.05,
                                    type: 'spring',
                                    stiffness: 60,
                                    damping: 12,
                                    mass: 1,
                                    layout: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                                }}
                            >
                                <h1
                                    className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold mb-4 tracking-tight relative inline-block"
                                    style={{
                                        color: '#333',
                                    }}
                                >
                                    <span className="relative z-10">SAAR</span>
                                    <motion.span
                                        className="absolute inset-0 z-20 overflow-hidden"
                                    >
                                        <motion.span
                                            className="absolute inset-0"
                                            style={{
                                                backgroundImage: 'linear-gradient(90deg, rgba(240, 229, 149, 1) 0%, rgba(222, 204, 128, 1) 50%, rgba(182, 150, 77, 1) 100%)',
                                                color: 'transparent',
                                                backgroundClip: 'text',
                                                WebkitBackgroundClip: 'text',
                                                clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                                            }}
                                            animate={{
                                                clipPath: [
                                                    'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                                                    'polygon(0 100%, 100% 100%, 100% 92%, 0 88%)',
                                                    'polygon(0 100%, 100% 100%, 100% 84%, 0 80%)',
                                                    'polygon(0 100%, 100% 100%, 100% 76%, 0 72%)',
                                                    'polygon(0 100%, 100% 100%, 100% 68%, 0 64%)',
                                                    'polygon(0 100%, 100% 100%, 100% 60%, 0 56%)',
                                                    'polygon(0 100%, 100% 100%, 100% 52%, 0 48%)',
                                                    'polygon(0 100%, 100% 100%, 100% 44%, 0 40%)',
                                                    'polygon(0 100%, 100% 100%, 100% 36%, 0 32%)',
                                                    'polygon(0 100%, 100% 100%, 100% 28%, 0 24%)',
                                                    'polygon(0 100%, 100% 100%, 100% 20%, 0 16%)',
                                                    'polygon(0 100%, 100% 100%, 100% 12%, 0 8%)',
                                                    'polygon(0 100%, 100% 100%, 100% 4%, 0 0%)',
                                                    'polygon(0 100%, 100% 100%, 100% 0%, 0 0%)',
                                                ],
                                            }}
                                            transition={{
                                                duration: 6,
                                                delay: 0.5,
                                                ease: [0.25, 0.1, 0.25, 1],
                                                times: [0, 0.08, 0.15, 0.23, 0.31, 0.38, 0.46, 0.54, 0.62, 0.69, 0.77, 0.85, 0.92, 1],
                                            }}
                                        >
                                            SAAR
                                        </motion.span>
                                    </motion.span>
                                </h1>
                                <div className="flex items-center justify-center gap-3">
                                    <motion.span
                                        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-wide relative inline-block"
                                        style={{ color: '#333' }}
                                    >
                                        <span className="relative z-10">GROUP OF</span>
                                        <motion.span
                                            className="absolute inset-0 z-20 overflow-hidden"
                                        >
                                            <motion.span
                                                className="absolute inset-0"
                                                style={{
                                                    backgroundImage: 'linear-gradient(90deg, rgba(240, 229, 149, 1) 0%, rgba(222, 204, 128, 1) 50%, rgba(182, 150, 77, 1) 100%)',
                                                    color: 'transparent',
                                                    backgroundClip: 'text',
                                                    WebkitBackgroundClip: 'text',
                                                    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                                                }}
                                                animate={{
                                                    clipPath: [
                                                        'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                                                        'polygon(0 100%, 100% 100%, 100% 92%, 0 88%)',
                                                        'polygon(0 100%, 100% 100%, 100% 84%, 0 80%)',
                                                        'polygon(0 100%, 100% 100%, 100% 76%, 0 72%)',
                                                        'polygon(0 100%, 100% 100%, 100% 68%, 0 64%)',
                                                        'polygon(0 100%, 100% 100%, 100% 60%, 0 56%)',
                                                        'polygon(0 100%, 100% 100%, 100% 52%, 0 48%)',
                                                        'polygon(0 100%, 100% 100%, 100% 44%, 0 40%)',
                                                        'polygon(0 100%, 100% 100%, 100% 36%, 0 32%)',
                                                        'polygon(0 100%, 100% 100%, 100% 28%, 0 24%)',
                                                        'polygon(0 100%, 100% 100%, 100% 20%, 0 16%)',
                                                        'polygon(0 100%, 100% 100%, 100% 12%, 0 8%)',
                                                        'polygon(0 100%, 100% 100%, 100% 4%, 0 0%)',
                                                        'polygon(0 100%, 100% 100%, 100% 0%, 0 0%)',
                                                    ],
                                                }}
                                                transition={{
                                                    duration: 6,
                                                    delay: 0.5,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                    times: [0, 0.08, 0.15, 0.23, 0.31, 0.38, 0.46, 0.54, 0.62, 0.69, 0.77, 0.85, 0.92, 1],
                                                }}
                                            >
                                                GROUP OF
                                            </motion.span>
                                        </motion.span>
                                    </motion.span>
                                    <motion.span
                                        className="text-3xl md:text-4xl lg:text-5xl"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: 0.5,
                                            duration: 4,
                                            ease: [0.25, 0.1, 0.25, 1] // Custom easing for realistic loading feel
                                        }}
                                        style={{ color: '#d4af37' }}
                                    >

                                    </motion.span>
                                    <motion.span
                                        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-wide relative inline-block"
                                        style={{ color: '#333' }}
                                    >
                                        <span className="relative z-10">COMPANIES</span>
                                        <motion.span
                                            className="absolute inset-0 z-20 overflow-hidden"
                                        >
                                            <motion.span
                                                className="absolute inset-0"
                                                style={{
                                                    backgroundImage: 'linear-gradient(90deg, rgba(240, 229, 149, 1) 0%, rgba(222, 204, 128, 1) 50%, rgba(182, 150, 77, 1) 100%)',
                                                    color: 'transparent',
                                                    backgroundClip: 'text',
                                                    WebkitBackgroundClip: 'text',
                                                    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                                                }}
                                                animate={{
                                                    clipPath: [
                                                        'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                                                        'polygon(0 100%, 100% 100%, 100% 92%, 0 88%)',
                                                        'polygon(0 100%, 100% 100%, 100% 84%, 0 80%)',
                                                        'polygon(0 100%, 100% 100%, 100% 76%, 0 72%)',
                                                        'polygon(0 100%, 100% 100%, 100% 68%, 0 64%)',
                                                        'polygon(0 100%, 100% 100%, 100% 60%, 0 56%)',
                                                        'polygon(0 100%, 100% 100%, 100% 52%, 0 48%)',
                                                        'polygon(0 100%, 100% 100%, 100% 44%, 0 40%)',
                                                        'polygon(0 100%, 100% 100%, 100% 36%, 0 32%)',
                                                        'polygon(0 100%, 100% 100%, 100% 28%, 0 24%)',
                                                        'polygon(0 100%, 100% 100%, 100% 20%, 0 16%)',
                                                        'polygon(0 100%, 100% 100%, 100% 12%, 0 8%)',
                                                        'polygon(0 100%, 100% 100%, 100% 4%, 0 0%)',
                                                        'polygon(0 100%, 100% 100%, 100% 0%, 0 0%)',
                                                    ],
                                                }}
                                                transition={{
                                                    duration: 6,
                                                    delay: 0.5,
                                                    ease: [0.25, 0.1, 0.25, 1],
                                                    times: [0, 0.08, 0.15, 0.23, 0.31, 0.38, 0.46, 0.54, 0.62, 0.69, 0.77, 0.85, 0.92, 1],
                                                }}
                                            >
                                                COMPANIES
                                            </motion.span>
                                        </motion.span>
                                    </motion.span>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>

                {/* Floating particles */}
                {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gold-500/40 rounded-full"
                        initial={{
                            x: `${20 + i * 15}%`,
                            y: `${30 + i * 10}%`,
                            opacity: 0,
                        }}
                        animate={{
                            y: [`${30 + i * 10}%`, `${20 + i * 10}%`, `${30 + i * 10}%`],
                            opacity: [0, 0.6, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
}
