"use client";

import Layout from "@/components/layout/Layout";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";

const pageVariants: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: 'easeOut',
        },
    },
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <Layout>
            <AnimatePresence mode="popLayout" initial={false}>
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
