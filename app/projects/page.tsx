"use client";

import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, ExternalLink, MonitorPlay } from "lucide-react";
import ProjectMediaViewer from "@/components/ProjectMediaViewer";

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
          type="director"
          title="The Director"
          category="AI Systems & Video Processing Pipeline"
          problem="Manually indexing and editing multi-hour video files creates a massive operational bottleneck. Traditional NLEs (Non-Linear Editors) require real-time human review, making high-volume content pipelines impossible to scale efficiently."          
          solution="A decoupled, asynchronous processing engine. A FastAPI backend handles FFmpeg chunking to bypass memory limits, while a concurrent LLM pipeline analyzes transcripts for narrative spikes. Output is dynamically serialized into FCPXML math for direct DaVinci Resolve timeline injection."          
          stack={["Python", "FastAPI", "Next.js", "TypeScript", "Google Gemini API", "FFmpeg", "Concurrent Futures"]}
          githubUrl="https://github.com/mayurpatel78645/the-director-backend"
          highlights={[
            "Architected an asynchronous processing pipeline handling gigabytes of video data.",
            "Implemented AI clip ranking using contextual LLM analysis.",
            "Built a real-time polling frontend dashboard with drag-and-drop functionality."
          ]}
          tradeoffs={[
            {
              choice: "FastAPI over Next.js Serverless",
              reason: "Next.js serverless functions timeout on heavy FFmpeg processing. I offloaded to a dedicated Python/FastAPI worker instance to maintain persistent memory access during multi-GB video chunking."
            },
            {
              choice: "Client Polling over WebSockets",
              reason: "Since video processing takes minutes (not milliseconds), maintaining persistent WebSocket connections for UI progress bars introduced unnecessary server overhead. Opted for an exponential backoff polling strategy instead."
            }
          ]}
          media={[
            { src: "director-1.png", label: "Upload Pipeline" },
            { src: "director-2.png", label: "Async Processing" },
            { src: "director-3.png", label: "AI Blueprint" },
            { src: "director-4.png", label: "FCPXML Engine" },
          ]}
        />

        {/* SMARTQR MENU OS */}
        <ProjectCaseStudy 
          type="smartqr"
          title="SmartQR Menu"
          category="Realtime Operations Platform"
          problem="Traditional hospitality systems suffer from high operational latency between inventory changes and customer-facing menus. This leads to 'out-of-stock' friction and inefficient manual reconciliation across distributed staff devices."
          solution="A real-time synchronization engine built on Supabase. By leveraging PostgreSQL's Write-Ahead Log (WAL) and WebSocket broadcasting, I achieved <100ms state updates across the ecosystem."
          stack={["Next.js", "React", "Supabase", "PostgreSQL", "TailwindCSS"]}
          demoUrl="https://smart-qr-menu-omega.vercel.app/"
          githubUrl="https://github.com/mayurpatel78645/smart-qr-menu"
          highlights={[
            "Integrated Supabase Realtime for automatic cross-device syncing.",
            "Built a low-latency, mobile-first UI for immediate customer access.",
            "Designed a simplified operations dashboard for instant inventory toggling."
          ]}
          tradeoffs={[
            {
              choice: "Supabase WAL over Redis Pub/Sub",
              reason: "While Redis offers in-memory speed, Supabase Realtime provided sufficient <100ms sync speeds while keeping the stack unified and maintaining strict relational data integrity for restaurant inventory."
            },
            {
              choice: "Client-Side Filtering over Server Rendering",
              reason: "To ensure maximum menu responsiveness on poor cellular connections inside restaurants, the initial payload delivers the full menu tree, allowing category switching to happen purely client-side with zero network round-trips."
            }
          ]}
          media={[
            { src: "smartqr-1.png", label: "System Auth" },
            { src: "smartqr-2.png", label: "Data Engine" },
            { src: "smartqr-4.png", label: "Client UI" },
            { src: "smartqr-3.png", label: "Live Floor OS" },
          ]}
        />

        {/* TATHYA-SATYAPAN */}
        <ProjectCaseStudy 
          type="tathya"
          title="Tathya-Satyapan"
          category="Browser Extension & AI Verification Engine"
          problem="Social media is saturated with unchecked, highly viral misinformation that users struggle to critically evaluate in real-time."
          solution="An AI-powered Chrome extension that actively monitors DOM mutations on Instagram, using regex heuristics and the Gemini API to detect, verify, and flag suspicious claims on the fly."
          stack={["JavaScript", "Chrome API", "Gemini API", "DOM Observers", "HTML/CSS"]}
          githubUrl="https://github.com/mayurpatel78645/tathya-satyapan"
          highlights={[
            "Engineered a highly performant DOM monitoring system using MutationObserver and IntersectionObserver.",
            "Implemented a local caching system and request queues to aggressively rate-limit expensive API calls.",
            "Built a real-time confidence scoring engine that injects visual warning badges seamlessly into the native Instagram UI."
          ]}
          tradeoffs={[
            {
              choice: "MutationObserver vs API Interception",
              reason: "Intercepting internal React state or private network requests is brittle and violates CORS/security policies. Using DOM observers ensures the extension remains robust even when Instagram changes their internal API structure."
            },
            {
              choice: "Regex Pre-filtering vs 100% LLM",
              reason: "Sending every single DOM mutation to the Gemini API would exhaust rate limits instantly. I built a lightweight Regex heuristic layer to pre-filter noise, ensuring only highly structured 'claims' trigger an expensive AI verification."
            }
          ]}
          media={[
            { src: "tathya-1.png", label: "Extension Init" },
            { src: "tathya-2.png", label: "DOM Injection" },
            { src: "tathya-3.png", label: "AI Analysis" },
          ]}
        />
      </div>
    </div>
  );
}

function ProjectCaseStudy({ title, category, problem, solution, stack, demoUrl, githubUrl, highlights, tradeoffs, type, media }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      id={type}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-white/10 pb-32 last:border-0 group relative scroll-mt-32"
    >
      {/* LEFT COLUMN: Sticky Narrative & CTAs */}
      <div className="lg:col-span-4 relative">
        <div className="lg:sticky lg:top-32 flex flex-col gap-10">
          
          <div>
            <p className="text-accent text-[11px] font-mono tracking-widest uppercase mb-3">{category}</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 group-hover:text-accent transition-colors duration-500 tracking-tight">{title}</h2>
            
            <div className="space-y-6 text-secondary">
              <div>
                <strong className="text-primary block mb-2 text-sm uppercase tracking-wider font-mono">The Problem</strong>
                <p className="leading-relaxed text-sm md:text-base">{problem}</p>
              </div>
              <div>
                <strong className="text-primary block mb-2 text-sm uppercase tracking-wider font-mono">The Architecture</strong>
                <p className="leading-relaxed text-sm md:text-base">{solution}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm bg-surface hover:bg-surfaceHover border border-white/10 px-5 py-2.5 rounded-lg transition-colors">
                <GitBranch className="w-4 h-4" /> Repository
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm bg-primary text-background px-5 py-2.5 rounded-lg transition-all hover:bg-white/90 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>

        </div>
      </div>

      {/* RIGHT COLUMN: The Scrolling Technical Showcase */}
      <div className="lg:col-span-8 flex flex-col gap-16">
        
        {/* 1. PRODUCT MEDIA VIEWER */}
        <div>
          {media && media.length > 0 ? (
            <ProjectMediaViewer images={media} />
          ) : (
            <div className="relative w-full aspect-video rounded-xl bg-surface/30 border border-white/5 overflow-hidden transition-all duration-500 flex flex-col items-center justify-center shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
              <MonitorPlay className="w-8 h-8 text-secondary/40 mb-3" />
              <p className="text-xs font-mono text-secondary/50 uppercase tracking-widest">
                Product UI Preview
              </p>
            </div>
          )}
        </div>

        {/* 2. ARCHITECTURE DIAGRAM */}
        <div className="bg-surface/50 border border-white/5 rounded-xl p-6 relative overflow-hidden transition-colors duration-500 group-hover:border-white/10 group-hover:bg-surface">
           <div className="absolute top-0 right-0 p-4 z-20">
              <span className="text-[10px] uppercase font-mono tracking-widest text-secondary/50">System Architecture</span>
           </div>
           {type && <ArchitectureDiagram type={type} isHovered={isHovered} />}
        </div>

        {/* 3. TECHNICAL IMPLEMENTATION */}
        <div className="bg-surface/30 border border-white/5 rounded-xl p-8 transition-colors duration-500 group-hover:bg-surface/50 group-hover:border-white/10">
          <h3 className="text-sm font-mono uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent/80" />
            Technical Implementation
          </h3>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {highlights.map((highlight: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent mt-[3px] text-[10px] shrink-0">■</span> 
                <span className="text-sm text-secondary leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap gap-2.5">
            {stack.map((tech: string) => (
              <span key={tech} className="px-3 py-1.5 bg-background border border-white/10 rounded flex items-center text-[11px] uppercase tracking-wider text-secondary font-mono cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 4. ARCHITECTURAL TRADEOFFS (NEW) */}
        {tradeoffs && tradeoffs.length > 0 && (
          <div className="bg-surface/20 border border-white/5 rounded-xl p-8 transition-colors duration-500 group-hover:bg-surface/30 group-hover:border-white/10 mt-[-2rem]">
            <h3 className="text-sm font-mono uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary/50" />
              Architectural Tradeoffs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tradeoffs.map((t: any, i: number) => (
                <div key={i} className="flex flex-col gap-3">
                  <span className="text-sm font-medium text-primary border-b border-white/5 pb-2 inline-block w-fit">
                    {t.choice}
                  </span>
                  <span className="text-sm text-secondary leading-relaxed">
                    {t.reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}