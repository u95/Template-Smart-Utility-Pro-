import React, { useState } from 'react';
import { Download, FileCode, Check, Sparkles, Copy } from 'lucide-react';
import { motion } from 'motion/react';

export function XmlDownloader() {
  const [downloaded, setDownloaded] = useState(false);
  const [copied, setCopied] = useState(false);

  const bloggerXmlContent = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gbl/b' xmlns:data='http://www.google.com/2005/gbl/data' xmlns:expr='http://www.google.com/2005/gbl/expr'>
<head>
<meta charset='utf-8'/>
<meta content='width=device-width, initial-scale=1.0' name='viewport'/>
<title><data:blog.pageTitle/></title>
<b:skin><![CDATA[
/*
  Theme Name: Smart Utility Pro
  Author: umn ministry
  Version: 3.5 Pro
  Description: Professional Web Utility & Blogger Template with Dark Mode & Core Web Vitals Optimization
*/
:root {
  --bg-primary: #020617;
  --text-primary: #f8fafc;
  --accent-color: #6366f1;
}
body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin: 0;
  padding: 0;
}
.utility-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.btn-start {
  background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
  color: #fff;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
}
]]></b:skin>
<b:template-skin><![CDATA[
/* Template Customizer Variables */
]]></b:template-skin>
</head>
<body>
  <div class='utility-container'>
    <header style='display: flex; justify-content: space-between; align-items: center; padding: 20px 0; border-bottom: 1px solid #1e293b;'>
      <h1 style='font-size: 24px; font-weight: 800; background: linear-gradient(to right, #fff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'>
        <data:blog.title/>
      </h1>
      <a class='btn-start' href='https://u95.github.io/Smart-Utility-Pro/' target='_blank'>
        START Smart Utility Pro
      </a>
    </header>

    <main style='padding: 40px 0;'>
      <b:section id='main-content' class='main' showaddelement='yes'>
        <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog'>
          <b:includable id='main'>
            <div class='posts-grid'>
              <b:loop values='data:posts' var='post'>
                <article style='background: #0f172a; border: 1px solid #1e293b; border-radius: 16px; padding: 24px; margin-bottom: 24px;'>
                  <h2 style='font-size: 20px; margin-bottom: 12px;'>
                    <a expr:href='data:post.url' style='color: #f8fafc; text-decoration: none;'><data:post.title/></a>
                  </h2>
                  <div style='color: #94a3b8; font-size: 14px;'><data:post.snippet/></div>
                </article>
              </b:loop>
            </div>
          </b:includable>
        </b:widget>
      </b:section>
    </main>

    <footer style='text-align: center; padding: 30px 0; border-top: 1px solid #1e293b; color: #64748b; font-size: 13px;'>
      © 2026 umn ministry Smart Utility Pro. All rights reserved
    </footer>
  </div>
</body>
</html>`;

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([bloggerXmlContent], { type: 'text/xml' });
    element.href = URL.createObjectURL(file);
    element.download = 'Smart-Utility-Pro.xml';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bloggerXmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="xml-generator" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-950 border border-indigo-500/30 p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20">
                <FileCode className="w-4 h-4" /> Official Blogger XML File
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Download Smart-Utility-Pro.xml
              </h3>
              <p className="text-slate-400 text-sm max-w-xl">
                Get the complete Blogger XML template file ready to install on your Blogger dashboard. Includes full styling, meta tags, and the official start link.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopy}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-indigo-400" />}
                {copied ? 'Copied XML' : 'Copy XML Code'}
              </button>
              
              <button
                onClick={handleDownload}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:scale-105 transition-all flex items-center gap-2 border border-indigo-400/30"
              >
                {downloaded ? <Check className="w-4 h-4 text-emerald-300" /> : <Download className="w-4 h-4" />}
                {downloaded ? 'Downloaded XML!' : 'Download XML File'}
              </button>
            </div>
          </div>

          {/* XML Code preview box */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs text-slate-300 overflow-x-auto max-h-64 shadow-inner">
            <pre className="text-indigo-300">
              {`<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gbl/b'>
<head>
  <title><data:blog.pageTitle/></title>
  <b:skin><![CDATA[
    /* Theme Name: Smart Utility Pro by umn ministry */
    :root { --bg-primary: #020617; --accent: #6366f1; }
    body { background: var(--bg-primary); color: #f8fafc; }
  ]]></b:skin>
</head>
<body>
  <!-- Smart Utility Pro Hub & Start Link -->
  <a href="https://u95.github.io/Smart-Utility-Pro/">START</a>
</body>
</html>`}
            </pre>
          </div>

          {/* How to upload to Blogger Guide */}
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 space-y-4">
            <h4 className="font-bold text-base text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              How to upload this XML file in Blogger (பாகர்-ல் அப்லோடு செய்வது எப்படி?):
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300">
              <li>
                <strong className="text-white">Blogger Dashboard:</strong> Go to <a href="https://www.blogger.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">blogger.com</a> and select your blog.
              </li>
              <li>
                <strong className="text-white">Theme Section (தீம்):</strong> Click on <span className="text-indigo-300 font-semibold">Theme</span> in the left sidebar menu.
              </li>
              <li>
                <strong className="text-white">Restore / Backup (மீட்டமை):</strong> Click the dropdown arrow <span className="text-indigo-300 font-semibold">(▼)</span> next to the <span className="text-indigo-300 font-semibold">Customize</span> button and select <strong className="text-white">Restore</strong>.
              </li>
              <li>
                <strong className="text-white">Upload XML:</strong> Click <strong className="text-white">Upload</strong> and select the downloaded <code className="bg-slate-950 px-2 py-0.5 rounded text-indigo-300">Smart-Utility-Pro.xml</code> file.
              </li>
              <li>
                <strong className="text-white">Done!</strong> Your theme is now successfully installed with the START button and all utility features.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
