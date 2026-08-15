import React from 'react';
import { Gauge, Zap, ShieldCheck, Download, Star, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function StatsSection() {
  const stats = [
    { value: '99/100', label: 'Google PageSpeed', icon: Gauge, desc: 'Blazing fast load times' },
    { value: '100%', label: 'Mobile Responsive', icon: Zap, desc: 'Fluid layout across devices' },
    { value: '50k+', label: 'Active Downloads', icon: Download, desc: 'Trusted by global bloggers' },
    { value: '4.9/5', label: 'User Rating', icon: Star, desc: 'Based on 1,200+ reviews' },
  ];

  return (
    <section id="performance" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-bold">Unmatched Performance</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Speed and SEO Excellence
          </h3>
          <p className="text-slate-400 text-base sm:text-lg">
            Smart Utility Pro is rigorously tested against Core Web Vitals to ensure your blog ranks higher on Google search results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-3 relative group hover:border-indigo-500/50 transition-all shadow-xl"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-extrabold text-white tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-indigo-300">{stat.label}</div>
                <p className="text-xs text-slate-400">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
