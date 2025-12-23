"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import logoImage from '../../assets/images/logo.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about' },
    { name: 'Divisions', href: '/divisions' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gold-800/20 shadow-lg shadow-gold-900/10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 min-h-[80px]">
          {/* Logo */}
          <Link href="/home" className="flex items-center justify-center group flex-shrink-0">
            <motion.img
              src={logoImage.src}
              alt="SAAR MEP Academy"
              className="h-auto max-h-12 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center ${isActive(item.href)
                  ? 'text-[#F0E595] border-b-2 border-[#F0E595]'
                  : 'text-gray-300 hover:text-[#F0E595]'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center justify-center space-x-4 flex-shrink-0">
            <Link href="/consultancy" className="flex items-center">
              <Button variant="outline" className="text-sm">
                Explore Consultancy
              </Button>
            </Link>
            <Link href="/academy" className="flex items-center">
              <Button variant="primary" className="text-sm">
                Visit Academy
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden px-2 rounded-md text-gray-300 hover:text-gold-gradient flex items-center justify-center flex-shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 space-y-4"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium ${isActive(item.href)
                    ? 'text-[#F0E595]'
                    : 'text-gray-300 hover:text-[#F0E595]'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-3 space-y-4 border-t border-gray-800">
                <Link href="/consultancy" onClick={() => setMobileMenuOpen(false)} className="block">
                  <Button variant="outline" className="w-full text-sm">
                    Explore Consultancy
                  </Button>
                </Link>
                <Link href="/academy" onClick={() => setMobileMenuOpen(false)} className="block">
                  <Button variant="primary" className="w-full text-sm">
                    Visit Academy
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

