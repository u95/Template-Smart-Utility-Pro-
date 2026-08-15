import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, ExternalLink, Sparkles, Star, Eye, ThumbsUp, MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface TemplatePreviewProps {
  startUrl: string;
}

export function TemplatePreview({ startUrl }: TemplatePreviewProps) {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'home' | 'post' | 'widgets'>('home');

  const demoPosts = [
    {
      title: 'Top 10 Essential Web Developer Utilities for 2026',
      category: 'Development',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      views: '14.2k',
    },
    {
      title: 'How to Optimize Web Platforms for Maximum AdSense Revenue',
      category: 'Monetization',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      views: '9.8k',
    },
    {
      title: 'Mastering CSS Grid & Tailwind v4 Utilities in Modern Themes',
      category: 'Design',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
      views: '11.5k',
    },
  ];

  const deviceWidths = {
    desktop: 'w-full max-w-5xl',
    tablet: 'w-full max-w-2xl',
    mobile: 'w-full max-w-sm',
  };

  return (
    <section id="preview" className="py-24 bg-slate-900/50 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-bold">Interactive Sandbox</h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience Smart Utility Pro Live
          </h3>
          <p className="text-slate-400 text-base sm:text-lg">
            Test responsive breakpoints and preview how your blog layout looks across all devices before launching.
          </p>
        </div>

        {/* Controls bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-slate-900 p-3 rounded-2xl border border-slate-800 max-w-4xl mx-auto shadow-lg">
          {/* Device switchers */}
          <div className="flex items-center gap-1 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setDevice('desktop')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                device === 'desktop'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-4 h-4" /> Desktop
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                device === 'tablet'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Tablet className="w-4 h-4" /> Tablet
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                device === 'mobile'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" /> Mobile
            </button>
          </div>

          {/* View Mode Tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'home' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Homepage
            </button>
            <button
              onClick={() => setActiveTab('post')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'post' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Single Post
            </button>
            <button
              onClick={() => setActiveTab('widgets')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === 'widgets' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Widgets
            </button>
          </div>

          {/* Direct Launch Button */}
          <a
            href={startUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs flex items-center gap-1.5 hover:shadow-lg hover:shadow-indigo-600/30 transition-all"
          >
            <span>Launch Link</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Responsive Device Frame Container */}
        <div className="flex justify-center transition-all duration-500">
          <div className={`transition-all duration-500 ${deviceWidths[device]}`}>
            <div className="rounded-2xl bg-slate-950 border-4 border-slate-800 shadow-2xl overflow-hidden">
              {/* Fake Blogger Header */}
              <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="ml-3 font-bold text-sm text-white tracking-wide">Smart Utility Pro Blog</span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400">
                  <span className="hover:text-white cursor-pointer">Home</span>
                  <span className="hover:text-white cursor-pointer">Tools</span>
                  <span className="hover:text-white cursor-pointer">Downloads</span>
                  <span className="hover:text-white cursor-pointer">Contact</span>
                </div>
              </div>

              {/* Simulated Blogger Content */}
              <div className="p-6 bg-slate-950 min-h-[420px] text-left">
                {activeTab === 'home' && (
                  <div className="space-y-6">
                    {/* Hero Banner inside template */}
                    <div className="p-6 rounded-xl bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900 border border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-full border border-indigo-500/30">
                          Featured Theme
                        </span>
                        <h4 className="text-xl font-bold text-white mt-2">Smart Utility Pro v3.5</h4>
                        <p className="text-xs text-slate-300 mt-1">The ultimate web theme for high performance & clean UX.</p>
                      </div>
                      <a
                        href={startUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-md shrink-0"
                      >
                        Start Hub <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Grid of posts */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {demoPosts.map((post, idx) => (
                        <div key={idx} className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden group hover:border-slate-700 transition-colors">
                          <div className="aspect-video overflow-hidden bg-slate-800">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          </div>
                          <div className="p-4 space-y-2">
                            <div className="flex items-center justify-between text-[11px] text-slate-400">
                              <span className="text-indigo-400 font-semibold">{post.category}</span>
                              <span>{post.readTime}</span>
                            </div>
                            <h5 className="font-semibold text-sm text-white line-clamp-2 group-hover:text-indigo-300 transition-colors">
                              {post.title}
                            </h5>
                            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/80">
                              <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {post.views}</span>
                              <span className="text-indigo-400 font-medium">Read Article →</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'post' && (
                  <div className="max-w-2xl mx-auto space-y-4">
                    <span className="text-xs text-indigo-400 font-semibold">Development • 4 min read</span>
                    <h3 className="text-2xl font-bold text-white">Top 10 Essential Web Developer Utilities for 2026</h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400 pb-4 border-b border-slate-800">
                      <span>By Admin</span>
                      <span>•</span>
                      <span>August 15, 2026</span>
                    </div>
                    <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                      <p>
                        Smart Utility Pro provides lightning-fast page loading and immaculate typography rendering. Built with clean modular XML structure, it offers instant speed support and high SEO rankings.
                      </p>
                      <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 text-xs font-mono">
                        // AdSense responsive banner slot ready
                      </div>
                      <p>
                        Publishers can easily customize widgets, colors, and navigation menus directly from the layout dashboard without touching complex code.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'widgets' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                      <h4 className="font-bold text-sm text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-indigo-400" /> Recent Comments Widget
                      </h4>
                      <p className="text-xs text-slate-400">Ajax-powered instant comments with user avatars and anti-spam protection.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                      <h4 className="font-bold text-sm text-white flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-400" /> Popular Posts Widget
                      </h4>
                      <p className="text-xs text-slate-400">Thumbnails with view count counters and trending badge indicators.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
