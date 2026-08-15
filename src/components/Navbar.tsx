import React, { useState, useEffect } from 'react';
import { Sparkles, ExternalLink, Zap, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  startUrl: string;
}

export function Navbar({ startUrl }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-slate-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 text-white fill-white" />
          </div>
          <div>
            <div className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent flex items-center gap-2">
              Smart Utility Pro
              <span className="text-[10px] uppercase tracking-wider bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full font-semibold">
                v3.5 Pro
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">Professional Premium Theme</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#preview" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Live Preview
          </a>
          <a href="#performance" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Performance
          </a>
          <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={startUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl animate-gradient transition-all duration-500 group-hover:scale-105"></span>
            <span className="relative px-5 py-2.5 rounded-[11px] bg-slate-950 flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:bg-slate-900/90">
              <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
              Start Template
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 border-b border-slate-800 backdrop-blur-lg px-6 py-5 space-y-4"
          >
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-white"
            >
              Features
            </a>
            <a
              href="#preview"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-white"
            >
              Live Preview
            </a>
            <a
              href="#performance"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-white"
            >
              Performance
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-white"
            >
              FAQ
            </a>
            <div className="pt-2">
              <a
                href={startUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center gap-2 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30"
              >
                <Sparkles className="w-4 h-4" />
                Start Template (External Link)
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
