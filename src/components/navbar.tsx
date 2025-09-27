'use client'

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Leaf, 
  Home, 
  Users, 
  BookOpen, 
  Mail 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/'},
    { name: 'About Us', href: '/about'},
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-green-800 via-green-700 to-emerald-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-full">
              <Leaf className="h-8 w-8 text-green-700" />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold">NEF</h1>
              <p className="text-xs text-green-100">National Environmental Forum</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => {
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-1 hover:bg-green-600/30"
                  >
                    
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-200 p-2 rounded-md"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-green-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-green-200 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 flex items-center space-x-2 hover:bg-green-600/30"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;