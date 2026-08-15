import React from 'react';
import { Sparkles, ExternalLink, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface CtaSectionProps {
  startUrl: string;
}

export function CtaSection({ startUrl }: CtaSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/80 border border-indigo-500/30 p-8 sm:p-16 text-center shadow-2xl space-y-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/40">
            <Zap className="w-8 h-8 text-white fill-white animate-pulse" />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Upgrade Your Digital Platform?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Get Smart Utility Pro now and experience lightning-fast speeds, stunning design, and advanced professional features.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={startUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-extrabold text-lg shadow-xl shadow-indigo-600/40 hover:scale-105 transition-all flex items-center justify-center gap-3 border border-indigo-400/40"
            >
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
              <span>START (Smart Utility Pro)</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-slate-400 font-mono">
            Direct Link: {startUrl}
          </p>
        </div>
      </div>
    </section>
  );
}
