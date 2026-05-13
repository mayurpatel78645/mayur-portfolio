"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-5xl mx-auto py-20 px-6 border-t border-white/10 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side: Philosophy & Status */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-primary mb-3">Philosophy</h3>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              Systems should be invisible. I build software that manages chaos so humans can focus on execution.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-medium">Available for hire</span>
            </div>
            <div className="flex items-center gap-2 text-secondary/40 text-[10px] font-mono uppercase tracking-wider">
              <MapPin className="w-3 h-3" /> Mumbai / Remote
            </div>
          </div>
        </div>

        {/* Right Side: Navigation & Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-primary mb-4">Connect</h3>
            <div className="flex flex-col gap-4">
              <a href="https://github.com/mayurpatel78645" target="_blank" rel="noreferrer" className="text-sm text-secondary hover:text-accent transition-colors flex items-center gap-2">
                <GithubIcon /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/mayur-patel-762087216/" target="_blank" rel="noreferrer" className="text-sm text-secondary hover:text-accent transition-colors flex items-center gap-2">
                <LinkedinIcon /> LinkedIn
              </a>
              <a href="mailto:mayurpatel78645@gmail.com" className="text-sm text-secondary hover:text-accent transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-primary mb-4">Build</h3>
            <div className="text-xs text-secondary/50 font-mono leading-loose">
              v1.0.4-stable<br />
              Next.js 14<br />
              Tailwind / Framer<br />
              © {currentYear} Mayur Patel
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

// --- Your Working Optimized SVGs ---

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}