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
        {/* NEW VISUAL STORYTELLING BLOCK */}
        <div className="bg-surface/50 border border-white/5 rounded-xl p-6 relative overflow-hidden transition-colors duration-500 group-hover:border-white/10 group-hover:bg-surface">
           <div className="absolute top-0 right-0 p-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-secondary/50">System Architecture</span>
           </div>
           {/* If we have an architecture diagram for this type, render it */}
           {type && <ArchitectureDiagram type={type} isHovered={isHovered} />}
        </div>

        {/* Existing Highlights */}
        <div className="bg-surface border border-white/5 rounded-xl p-8">
          <h3 className="text-lg font-medium mb-4">Engineering Highlights</h3>
          {/* ... existing highlights ... */}
        </div>
      </div>
    </motion.div>
  );
}