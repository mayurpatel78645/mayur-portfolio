"use client";

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
          title="SmartQR Menu OS"
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

function ProjectCaseStudy({ title, category, problem, solution, stack, demoUrl, githubUrl, highlights }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-b border-white/10 pb-24 last:border-0"
    >
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div>
          <p className="text-accent text-sm font-mono tracking-wider uppercase mb-2">{category}</p>
          <h2 className="text-3xl font-semibold mb-6">{title}</h2>
          
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
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm bg-surface hover:bg-surfaceHover border border-white/10 px-4 py-2 rounded-md transition-colors">
              <GitBranch className="w-4 h-4" /> Repository
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm bg-primary text-background px-4 py-2 rounded-md transition-colors hover:bg-white/90">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
        </div>
      </div>

      <div className="lg:col-span-7 bg-surface border border-white/5 rounded-xl p-8">
        <h3 className="text-lg font-medium mb-4">Engineering Highlights</h3>
        <ul className="space-y-3 mb-8">
          {highlights.map((highlight: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-secondary">
              <span className="text-accent mt-1">▹</span> {highlight}
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-medium mb-4">Technical Stack</h3>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech: string) => (
            <span key={tech} className="px-3 py-1 bg-background border border-white/10 rounded-full text-sm text-secondary">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}