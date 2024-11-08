"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resume', href: '/resume' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
        scrolled ? 'py-2 bg-black/80 backdrop-blur-lg border-b border-white/10' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
            >
              Portfolio
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg transition-colors duration-200 hover:text-white ${
                  pathname === item.href ? 'text-white' : 'text-gray-300'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Terminal Button */}
          <Link
            href="/terminal"
            className="hidden md:flex relative overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900">
              Try It In Terminal Style
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ delay: 0.1 }}
            className="py-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                  pathname === item.href
                    ? 'bg-white/10 text-white'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Terminal Button */}
            <Link
              href="/terminal"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-300 hover:bg-white/5 rounded-lg"
            >
              Terminal Style
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;