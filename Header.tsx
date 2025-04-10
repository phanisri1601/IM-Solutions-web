'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '#' },
  { label: 'Our Clients', href: '/clients' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact' },
];

const onlineServices = [
  'Advertising Agency In Bangalore',
  'Digital Marketing Service',
  'Search Engine Optimization',
  'Search Engine Marketing',
  'Online Reputation Management',
  'Website Designing and Development',
  'Social Media Optimization',
  'Social Media Marketing',
  'Software Design & Development',
  'Geolocation Analytical SMS',
  'Creative Designing',
  'API Integration',
  'Ecommerce Solutions',
  'Email Marketing',
  'Mobile Application Development',
  'Real Estate Online Marketing Service',
  'Display Advertisement',
  'Blog Articles',
  'Classified Portal Management',
  'Press Releases Services',
];

const offlineServices = [
  'Bus Branding',
  'RWA Activation',
  'BTL Advertising',
  'Advertising Activities In Malls & Multiplex',
  'Advertisements In Tech Parks',
  'Advertising in Airports',
  'Paper Insertion',
  'Advertisements In Cafes Gyms & Super Markets',
  'Advertisement in ATMs',
  'Auto Rickshaw Advertising',
  'Advertisement in Magazines',
  'Advertising in Public & Private Parking Lots',
  'Branding Re-Branding',
  'Corporate Gifts',
  'Corporate Training Services',
  'Event Management',
  'FM Campaigns',
  'Fabrications',
  'Hoarding Services',
  'Marketing Collaterals',
  'Marketing Services for Start-ups',
  'Photographic Services',
  'PR Services',
  'Printing Services',
  'Retail Advertising',
  'Real Estate Videography',
  'Signage',
  'Washroom Advertising',
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#fef7f6] text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center relative">
          {navLinks.map((link) =>
            link.label === 'Services' ? (
              <div
                key="services"
                className="relative"
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <span className="cursor-pointer font-medium hover:text-red-600 transition duration-200">
                  Services <span className="text-red-500">▼</span>
                </span>

                {/* Mega Menu */}
                {showMegaMenu && (
                  <div className="fixed left-1/2 top-[80px] transform -translate-x-1/2 w-[90vw] max-w-6xl bg-white shadow-2xl rounded-xl p-6 grid grid-cols-2 md:grid-cols-2 gap-12 z-50 max-h-[400px] overflow-y-auto border border-gray-100">
                    <div>
                      <h4 className="text-lg font-semibold text-red-600 mb-4">Online Services</h4>
                      <ul className="space-y-2 text-sm text-gray-800">
                        {onlineServices.map((item, idx) => (
                          <li
                            key={idx}
                            className="hover:text-red-500 cursor-pointer transition-all duration-200"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-red-600 mb-4">Offline Services</h4>
                      <ul className="space-y-2 text-sm text-gray-800">
                        {offlineServices.map((item, idx) => (
                          <li
                            key={idx}
                            className="hover:text-red-500 cursor-pointer transition-all duration-200"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium hover:text-red-600 transition duration-200"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-4 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block font-medium hover:text-red-500 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
