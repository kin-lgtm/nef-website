'use client'

import React, { useState } from 'react';
import Image from 'next/image'; // Import Image from next/image
import { Menu, X } from 'lucide-react'; // Removed Leaf

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-green-800 via-green-700 to-emerald-800 h-[100px] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[100px]"> {/* Adjusted height */}
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4"> {/* Increased space-x-4 for balance */}
            <div className="bg-white p-3 rounded-full overflow-hidden"> {/* Increased p-3 for larger logo */}
              <Image
                src="/logo.JPG" // Path to logo.png in the public directory
                alt="NEF Logo"
                width={40} // Increased from 32 to 40px to match new height proportion
                height={40} // Increased from 32 to 40px
                className="object-contain" // Ensures the image fits within the container
              />
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">NEF</h1> {/* Increased text-2xl from text-xl */}
              <p className="text-sm text-green-100">National Environmental Forum</p> {/* Increased text-sm from text-xs */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10"> {/* Increased space-x-10 from space-x-8 */}
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-green-200 px-4 py-3 rounded-md text-base font-medium transition-all duration-300 flex items-center space-x-1 hover:bg-green-600/30"
                >
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-200 p-3 rounded-md" 
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />} {/* Increased h-8 w-8 from h-6 w-6 */}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-900/95 backdrop-blur-sm">
            <div className="px-4 pt-4 pb-3 space-y-2"> {/* Adjusted padding and space-y-2 */}
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-green-200 block px-4 py-3 rounded-md text-lg font-medium transition-all duration-300 flex items-center space-x-2 hover:bg-green-600/30" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;