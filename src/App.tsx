/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { TemplatePreview } from './components/TemplatePreview';
import { XmlDownloader } from './components/XmlDownloader';
import { StatsSection } from './components/StatsSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';

export default function App() {
  const startUrl = 'https://u95.github.io/Smart-Utility-Pro/';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Navigation Header */}
      <Navbar startUrl={startUrl} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero startUrl={startUrl} />
        <Features />
        <TemplatePreview startUrl={startUrl} />
        <XmlDownloader />
        <StatsSection />
        <CtaSection startUrl={startUrl} />
      </main>

      {/* Footer */}
      <Footer startUrl={startUrl} />
    </div>
  );
}
