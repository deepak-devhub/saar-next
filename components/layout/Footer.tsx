import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import logoImage from '../../assets/images/logo.png';
import ParallaxStars from '../ui/ParallaxStars';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Divisions', href: '/divisions' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="primary text-gray-300 relative overflow-hidden">
      {/* Parallax stars background */}
      <ParallaxStars />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4 h-6">
              <img
                src={logoImage.src}
                alt="SAAR MEP Academy"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm mb-4 leading-relaxed">
              Designed for Excellence in Engineering & Education
            </p>
            <div className="flex space-x-4 mt-auto">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gold-600 transition-colors text-gray-400 hover:text-black"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-4 h-6 flex items-center">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold-gradient transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* UAE Office */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-4 h-6 flex items-center">UAE Office</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 icon-stroke-gold-gradient flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">SAAR Engineering Consultancy LLC<br />Sharjah Media City, UAE</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 icon-stroke-gold-gradient flex-shrink-0" />
                <p>+971 XX XXX XXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 icon-stroke-gold-gradient flex-shrink-0" />
                <a href="mailto:info@saargroup.com" className="hover:text-gold-gradient transition-colors">
                  info@saargroup.com
                </a>
              </div>
            </div>
          </div>

          {/* India Office */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-4 h-6 flex items-center">India Office</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 icon-stroke-gold-gradient flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">SAAR MEP Academy<br />Thrissur, Kerala, India</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 icon-stroke-gold-gradient flex-shrink-0" />
                <p>+91 XXXX XXX XXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 icon-stroke-gold-gradient flex-shrink-0" />
                <a href="mailto:careers@saargroup.com" className="hover:text-gold-gradient transition-colors">
                  careers@saargroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm italic">
            <div className="flex flex-col sm:flex-row items-center sm:gap-2">
              <span>SAAR Engineering Consultancy</span>
              <span className="hidden sm:inline">|</span>
              <span>SAAR MEP Academy</span>
            </div>
            <p className="text-center">
              Designed for Excellence in Engineering & Education
            </p>
            <p className="text-center sm:text-right">
              © 2025 SAAR Group of Companies. All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}