"use client";

import Layout from "@/components/layout/Layout";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";

const pageVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.99,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
    exit: {
        opacity: 0,
        scale: 1.01,
        transition: {
            duration: 0.3,
            ease: 'easeOut' as any,
        },
    },
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <Layout>
            <AnimatePresence mode="wait">
                <motion.div
                    key={pathname}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    className="flex-grow"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </Layout>
    );
}
