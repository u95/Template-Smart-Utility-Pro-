import React from 'react';
import { Zap, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  startUrl: string;
}

export function Footer({ startUrl }: FooterProps) {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
            <Zap className="w-4 h-4 fill-white" />
          </div>
          <span className="font-bold text-white tracking-tight text-base">Smart Utility Pro</span>
          <span className="text-slate-600">|</span>
          <span className="text-xs text-slate-500">Professional Web Utility Theme</span>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#preview" className="hover:text-white transition-colors">Live Preview</a>
          <a href="#performance" className="hover:text-white transition-colors">Performance</a>
          <a
            href={startUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
          >
            Start Hub <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="text-xs text-slate-500 text-center md:text-right">
          © 2026 umn ministry Smart Utility Pro. All rights reserved
        </div>
      </div>
    </footer>
  );
}
