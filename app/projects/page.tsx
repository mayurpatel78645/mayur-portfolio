"use client";

import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GitBranch, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Engineering Portfolio</h1>
        <p className="text-xl text-secondary">Systems built to automate, scale, and solve real-world inefficiencies.</p>
      </div>

      <div className="space-y-24">
        {/* THE DIRECTOR - Centerpiece */}
        <ProjectCaseStudy 
          type = "director"
          title="The Director"
          category="AI Systems & Video Processing Pipeline"
          problem="Editing long gameplay footage into short-form content manually takes hours of human effort."
          solution="An AI-powered analysis system that automatically detects high-potential moments, generates structured editing outputs, and exports directly to DaVinci Resolve."
          stack={["Python", "FastAPI", "Next.js", "TypeScript", "Google Gemini API", "FFmpeg", "Concurrent Futures"]}
          githubUrl="https://github.com/mayurpatel78645/the-director-backend"
          highlights={[
            "Architected an asynchronous processing pipeline handling gigabytes of video data.",
            "Implemented AI clip ranking using contextual LLM analysis.",
            "Built a real-time polling frontend dashboard with drag-and-drop functionality."
          ]}
        />

        {/* SMARTQR MENU OS */}
        <ProjectCaseStudy 
          type = "smartqr"
          title="SmartQR Menu"
          category="Realtime Infrastructure & Operations"
          problem="Restaurants struggle with physical menu limitations, making customers wait and complicating inventory updates."
          solution="A live synchronized mobile-first menu platform with real-time updates and an operational command center for staff."
          stack={["Next.js", "React", "Supabase", "PostgreSQL", "TailwindCSS"]}
          demoUrl="https://smart-qr-menu-omega.vercel.app/"
          githubUrl="https://github.com/mayurpatel78645/smart-qr-menu"
          highlights={[
            "Integrated Supabase Realtime for automatic cross-device syncing.",
            "Built a low-latency, mobile-first UI for immediate customer access.",
            "Designed a simplified operations dashboard for instant inventory toggling."
          ]}
        />

        {/* TATHYA-SATYAPAN */}
        <ProjectCaseStudy 
          type = "tathya"
          title="Tathya-Satyapan"
          category="Browser Extension & AI Verification Engine"
          problem="Social media is saturated with unchecked, highly viral misinformation that users struggle to critically evaluate in real-time."
          solution="An AI-powered Chrome extension that actively monitors DOM mutations on Instagram, using regex heuristics and the Gemini API to detect, verify, and flag suspicious claims on the fly."
          stack={["JavaScript", "Chrome API", "Gemini API", "DOM Observers", "HTML/CSS"]}
          githubUrl="https://github.com/mayurpatel78645"
          highlights={[
            "Engineered a highly performant DOM monitoring system using MutationObserver and IntersectionObserver.",
            "Implemented a local caching system and request queues to aggressively rate-limit expensive API calls.",
            "Built a real-time confidence scoring engine that injects visual warning badges seamlessly into the native Instagram UI."
          ]}
        />
      </div>
    </div>
  );
}

function ProjectCaseStudy({ title, category, problem, solution, stack, demoUrl, githubUrl, highlights, type }: any) {
  // Track hover state to trigger the architecture animation
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-b border-white/10 pb-24 last:border-0 group"
    >
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div>
          <p className="text-accent text-sm font-mono tracking-wider uppercase mb-2">{category}</p>
          <h2 className="text-3xl font-semibold mb-6 group-hover:text-accent transition-colors duration-500">{title}</h2>
          
          <div className="space-y-6 mb-8 text-secondary">
            <div>
              <strong className="text-primary block mb-1">The Problem:</strong>
              <p className="leading-relaxed">{problem}</p>
            </div>
            <div>
              <strong className="text-primary block mb-1">The Architecture:</strong>
              <p className="leading-relaxed">{solution}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          {/* Your existing Github/Demo buttons */}
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col gap-6">
        
        {/* Visual Storytelling Block (ArchitectureDiagram) */}
        <div className="bg-surface/50 border border-white/5 rounded-xl p-6 relative overflow-hidden transition-colors duration-500 group-hover:border-white/10 group-hover:bg-surface">
           <div className="absolute top-0 right-0 p-4 z-20">
              <span className="text-[10px] uppercase font-mono tracking-widest text-secondary/50">System Architecture</span>
           </div>
           {type && <ArchitectureDiagram type={type} isHovered={isHovered} />}
        </div>

        {/* UPGRADED Engineering Highlights & Stack Panel */}
        <div className="bg-surface/30 border border-white/5 rounded-xl p-8 transition-colors duration-500 group-hover:bg-surface/50 group-hover:border-white/10">
          <h3 className="text-sm font-mono uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent/80" />
            Technical Implementation
          </h3>
          
          {/* Highlights in a 2-column grid for a denser SaaS look */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {highlights.map((highlight: string, i: number) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-accent mt-[3px] text-[10px] shrink-0">■</span> 
                <span className="text-sm text-secondary leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack Pills integrated cleanly into the bottom */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
            {stack.map((tech: string) => (
              <span key={tech} className="px-2.5 py-1 bg-background border border-white/10 rounded flex items-center text-[11px] uppercase tracking-wider text-secondary font-mono hover:text-primary transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}