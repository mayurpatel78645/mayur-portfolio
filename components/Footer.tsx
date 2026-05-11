"use client";

import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-background pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand / Copy */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-mono text-sm font-semibold tracking-wider text-primary">
            MAYUR<span className="text-accent">.</span>PATEL
          </span>
          <p className="text-sm text-secondary">
            © {currentYear} — Building systems that scale.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <SocialLink 
            href="https://github.com/mayurpatel78645" 
            icon={<GithubIcon />} 
            label="GitHub" 
          />
          <SocialLink 
            href="https://www.linkedin.com/in/mayur-patel-762087216/" 
            icon={<LinkedinIcon />} 
            label="LinkedIn" 
          />
          <SocialLink 
            href="mailto:mayurpatel78645@gmail.com" 
            icon={<Mail className="w-5 h-5" />} 
            label="Email" 
          />
        </div>

      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      aria-label={label}
      className="text-secondary hover:text-accent transition-colors duration-200"
    >
      {icon}
    </a>
  );
}

// --- Raw optimized SVGs to bypass Lucide brand removals ---

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}