import React, { useState } from 'react';
import { Sparkles, ExternalLink, Play, CheckCircle2, Zap, Shield, Cpu, ArrowRight, Video, Code, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  startUrl: string;
}

export function Hero({ startUrl }: HeroProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs sm:text-sm shadow-xl"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-medium text-white">Smart Utility Pro v3.5 Released</span>
            <span className="text-slate-500">•</span>
            <span className="text-indigo-400 font-semibold flex items-center gap-1">
              Web Utility Theme <Sparkles className="w-3.5 h-3.5" />
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Smart Utility Pro{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">
              Web Utility Hub
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Transform your digital platform into a high-performance web utility hub with lightning-fast Core Web Vitals, stunning UI/UX design, dark mode, and high-conversion layouts.
          </motion.p>

          {/* Primary CTA: START BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <a
              href={startUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 border border-indigo-400/30"
            >
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Sparkles className="w-5 h-5 text-amber-300 animate-bounce" />
              <span>START (Smart Utility Pro)</span>
              <ExternalLink className="w-5 h-5 text-indigo-200 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#preview"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-indigo-400" />
              <span>Explore Live Demo</span>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% XML Schema Valid</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Google PageSpeed 99+</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>AdSense Optimized</span>
            </div>
          </motion.div>
        </div>

        {/* Video Animation / Interactive Preview Showcase Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative max-w-5xl mx-auto"
        >
          {/* Decorative glow behind frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

          <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
            {/* Mac-style window bar */}
            <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <div className="ml-4 px-3 py-1 rounded-md bg-slate-900 text-xs text-slate-400 font-mono flex items-center gap-2 border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  https://u95.github.io/Smart-Utility-Pro/
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="hidden sm:inline-flex items-center gap-1 bg-indigo-500/10 text-indigo-300 px-2.5 py-1 rounded-md font-medium border border-indigo-500/20">
                  <Video className="w-3.5 h-3.5 text-indigo-400" /> HD Preview Mode
                </span>
              </div>
            </div>

            {/* Video / Animated Mockup Content */}
            <div className="relative aspect-video bg-slate-950 flex flex-col items-center justify-center overflow-hidden group">
              {isPlayingVideo ? (
                <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-600/30 flex items-center justify-center mb-4 animate-spin">
                    <Zap className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Connecting to Smart Utility Pro Live Instance...</h3>
                  <p className="text-sm text-slate-400 max-w-md mb-6">
                    Redirecting you to the official GitHub deployment sandbox with full hub interactivity.
                  </p>
                  <a
                    href={startUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
                  >
                    Launch Now <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setIsPlayingVideo(false)}
                    className="mt-4 text-xs text-slate-500 hover:text-slate-300 underline"
                  >
                    Back to preview
                  </button>
                </div>
              ) : (
                <>
                  {/* Mock UI preview background */}
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  <div className="relative z-10 text-center px-6 max-w-2xl space-y-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-0.5 shadow-2xl shadow-indigo-500/40 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                        <Sparkles className="w-10 h-10 text-indigo-400 animate-pulse" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">Smart Utility Pro Interactive Preview</h3>
                      <p className="text-slate-400 text-sm sm:text-base">
                        Experience the blazing fast web utility hub with clean layout, responsive widgets, and modern typography.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-all flex items-center gap-2 shadow-xl"
                      >
                        <Play className="w-4 h-4 fill-slate-950" /> Play Video Animation
                      </button>
                      <a
                        href={startUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 text-white font-bold text-sm transition-all flex items-center gap-2 border border-indigo-400/30 shadow-lg shadow-indigo-600/30"
                      >
                        Open Hub Link <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                    <div className="text-xs">
                      <p className="font-semibold text-white">Live URL Ready</p>
                      <p className="text-slate-400 font-mono text-[11px]">u95.github.io/Smart-Utility-Pro/</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
