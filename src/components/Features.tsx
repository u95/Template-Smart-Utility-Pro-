import React from 'react';
import { Zap, Layout, ShieldCheck, Smartphone, Search, Moon, Code, Sparkles, Sliders } from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Speed',
      description: 'Optimized XML code structure ensuring 99+ Google PageSpeed score and instant page loads.',
      badge: 'Core Vitals',
    },
    {
      icon: Layout,
      title: 'Modern UI/UX Design',
      description: 'Crafted with aesthetic precision, clean typography, and intuitive navigation for maximum user retention.',
      badge: 'Pixel Perfect',
    },
    {
      icon: Smartphone,
      title: '100% Responsive Grid',
      description: 'Flawlessly adapts to smartphones, tablets, and ultra-wide desktops with adaptive touch layouts.',
      badge: 'Mobile First',
    },
    {
      icon: Moon,
      title: 'Built-in Dark & Light Mode',
      description: 'Seamless theme switcher with persistent user preference storage and zero-flash loading.',
      badge: 'Dual Theme',
    },
    {
      icon: Search,
      title: 'Advanced SEO Schema',
      description: 'Pre-configured JSON-LD structured data and meta tags to boost your Google search rankings.',
      badge: 'SEO Ready',
    },
    {
      icon: Code,
      title: 'AdSense & Monetization',
      description: 'Strategically placed ad slots for automatic banner and in-article ads without layout shifts.',
      badge: 'High RPM',
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-bold">Hub Capabilities</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Web Professionals
          </h3>
          <p className="text-slate-400 text-base sm:text-lg">
            Smart Utility Pro combines aesthetic elegance with robust performance features built specifically for modern publishers and web creators.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-indigo-500/50 p-8 transition-all duration-300 shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none"></div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {feature.badge}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
