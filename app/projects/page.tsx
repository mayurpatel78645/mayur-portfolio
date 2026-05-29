"use client";

import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// FIX: Added Target for the new metric ribbon
import { GitBranch, ExternalLink, MonitorPlay, UserCheck, Cpu, Target } from "lucide-react";
import ProjectMediaViewer from "@/components/ProjectMediaViewer";

export default function Projects() {
  const [isTechnicalMode, setIsTechnicalMode] = useState(true);
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">Engineering Portfolio</h1>
          <p className="text-xl text-secondary">Systems built to automate, scale, and solve real-world inefficiencies.</p>
        </div>

        {/* The Premium Audience Toggle */}
        <div className="flex items-center gap-2 p-1 rounded-lg bg-surface border border-primary/10 w-fit shrink-0">
          <button
            onClick={() => setIsTechnicalMode(false)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
              !isTechnicalMode ? "bg-primary/10 text-primary shadow-sm" : "text-secondary/50 hover:text-secondary"
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            Executive
          </button>
          <button
            onClick={() => setIsTechnicalMode(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
              isTechnicalMode ? "bg-accent/20 text-accent shadow-sm" : "text-secondary/50 hover:text-secondary"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            Engineering
          </button>
        </div>
      </div>

      <div className="space-y-24">
        {/* THE DIRECTOR */}
        <ProjectCaseStudy 
          type="director"
          title="The Director"
          category="AI Systems & Video Processing Pipeline"
          problem="Manually indexing and editing multi-hour video files creates a massive operational bottleneck. Traditional NLEs (Non-Linear Editors) require real-time human review, making high-volume content pipelines impossible to scale efficiently."          
          // APPLIED TRUE METRICS
          metric={isTechnicalMode ? "103s" : "10 Min"}
          metricLabel={isTechnicalMode ? "Core Engine Processing (668MB Payload)" : "End-to-End Turnaround (vs Hours Manual)"}
          solution="A decoupled, asynchronous processing engine. A FastAPI backend handles FFmpeg chunking to bypass memory limits, while a concurrent LLM pipeline analyzes transcripts for narrative spikes. Output is dynamically serialized into FCPXML math for direct DaVinci Resolve timeline injection."          
          executiveSummary="An automated video editing system that saves hundreds of hours of manual labor. It takes massive raw video files, automatically finds the most engaging moments using AI, and prepares them directly for the final video editor in a fraction of the time."
          isTechnicalMode={isTechnicalMode}
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
          
          // APPLIED TRUE METRICS
          metric={isTechnicalMode ? "~1.9s" : "Zero"}
          metricLabel={isTechnicalMode ? "End-to-End Sync Latency" : "Out-of-Stock Bad Orders"}
          solution="A real-time synchronization engine built on Supabase. By leveraging PostgreSQL's Write-Ahead Log (WAL) and WebSocket broadcasting, I achieved sub-2-second state updates from the kitchen tablet to the customer's screen over live cellular networks."
          
          executiveSummary="A live restaurant menu that automatically updates on customers' phones the second an item sells out in the kitchen. It eliminates the frustration of ordering unavailable food and drastically speeds up table turnover."
          isTechnicalMode={isTechnicalMode}
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
              reason: "While Redis offers in-memory speed, Supabase Realtime provided sub-2-second sync speeds which is instantaneous for human operations, while keeping the stack unified and maintaining strict relational data integrity for inventory."
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
          problem="Social media is saturated with unchecked, highly viral misinformation. Building an extension to combat this on infinite-scroll SPAs usually results in massive memory leaks and scrolling stutter (layout thrashing)."
          
          // APPLIED TRUE METRICS
          metric={isTechnicalMode ? "~60MB" : "Real-time"}
          metricLabel={isTechnicalMode ? "Peak Heap Delta (Infinite Scroll)" : "In-Feed Fact Verification"}
          solution="An AI-powered Chrome extension that actively monitors DOM mutations on Instagram. By implementing aggressive garbage collection and local caching, it verifies claims using the Gemini API while strictly capping memory overhead."
          
          executiveSummary="A browser tool that automatically fact-checks Instagram in real-time. It reads the claims made in posts, compares them against a verified AI database, and places a clear warning badge on the screen to protect users from misinformation."
          isTechnicalMode={isTechnicalMode}
          stack={["JavaScript", "Chrome API", "Gemini API", "DOM Observers", "IndexedDB"]}
          githubUrl="https://github.com/mayurpatel78645/tathya-satyapan"
          highlights={[
            "Engineered a highly performant DOM monitoring system using MutationObserver and IntersectionObserver.",
            "Profiled V8 engine heap snapshots to ensure aggressive garbage collection, capping memory overhead at ~60MB during heavy infinite scrolling.",
            "Injected visual warning badges using DocumentFragments to prevent main-thread layout thrashing."
          ]}
          tradeoffs={[
            {
              choice: "Local IndexedDB Caching vs Stateless Observer",
              reason: "Because Instagram constantly unmounts and remounts DOM nodes during infinite scroll, a stateless observer would trigger infinite duplicate LLM calls. Storing verified claim hashes locally reduced API costs drastically."
            },
            {
              choice: "MutationObserver vs API Interception",
              reason: "Intercepting internal React state or private network requests is brittle and violates CORS/security policies. Using DOM observers ensures the extension remains robust even when Instagram changes their internal API structure."
            }
          ]}
          media={[
            { src: "tathya-1.png", label: "Extension Init" },
            { src: "tathya-2.png", label: "DOM Injection" },
            { src: "tathya-3.png", label: "AI Analysis" },
          ]}
        />

        {/* ACTIVE RESEARCH */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-8 md:p-12 rounded-2xl bg-surface/80 dark:bg-gradient-to-b dark:from-surface/20 dark:to-transparent border border-border-subtle shadow-sm dark:shadow-none relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500/80 font-medium">In Development</span>
          </div>

          <h3 className="text-xs font-mono uppercase tracking-widest text-accent mb-3">Active Research</h3>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">AI Job Copilot</h2>

          <p className="text-secondary leading-relaxed max-w-2xl mb-8">
            Designing a modular AI system that analyzes job descriptions, computes candidate-job fit scores, and generates tailored resumes using strictly truthful user data. Currently architecting scalable backend pipelines using FastAPI, PostgreSQL, vector embeddings, and Playwright for intelligent automation.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {["FastAPI", "Vector Embeddings", "PostgreSQL", "Playwright", "LLM Orchestration"].map(tech => (
              <span key={tech} className="px-3 py-1.5 bg-surface dark:bg-background/50 border border-border-subtle rounded flex items-center text-[10px] uppercase tracking-wider text-secondary/70 font-mono cursor-default group-hover:border-border-strong transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </motion.section>
      </div>
      
    </div>
  );
}

// FIX: Component updated with the new Metric Ribbon and Light Mode fixes
function ProjectCaseStudy({ title, category, problem, metric, metricLabel, solution, executiveSummary, stack, demoUrl, githubUrl, highlights, tradeoffs, type, media, isTechnicalMode }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      id={type}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-b border-border-subtle pb-32 last:border-0 group relative scroll-mt-32"
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

              {/* THE NEW IMPACT RIBBON */}
              <div className="flex items-center gap-4 py-3 my-2 border-l-2 border-accent pl-4 bg-gradient-to-r from-accent/5 dark:from-accent/10 to-transparent rounded-r-lg">
                <Target className="w-5 h-5 text-accent shrink-0 hidden md:block" />
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-semibold text-primary tracking-tight">
                    {metric}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-secondary/80 tracking-widest">
                    {metricLabel}
                  </span>
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={isTechnicalMode ? 'tech' : 'exec'}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <strong className="text-primary block mb-2 text-sm uppercase tracking-wider font-mono">
                    {isTechnicalMode ? "The Architecture" : "The Business Value"}
                  </strong>
                  <p className="leading-relaxed text-sm md:text-base">
                    {isTechnicalMode ? solution : executiveSummary}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm bg-surface hover:bg-surfaceHover border border-border-strong px-5 py-2.5 rounded-lg transition-colors">
                <GitBranch className="w-4 h-4" /> Repository
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm bg-primary text-background px-5 py-2.5 rounded-lg transition-all hover:bg-opacity/90 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
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
            <div className="relative w-full aspect-video rounded-xl bg-surface/50 dark:bg-surface/30 border border-border-subtle overflow-hidden transition-all duration-500 flex flex-col items-center justify-center shadow-sm dark:shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
              <MonitorPlay className="w-8 h-8 text-secondary/40 mb-3" />
              <p className="text-xs font-mono text-secondary/50 uppercase tracking-widest">
                Product UI Preview
              </p>
            </div>
          )}
        </div>

        {/* 2. ARCHITECTURE DIAGRAM */}
        <div className="bg-surface/50 dark:bg-surface/20 border border-border-subtle rounded-xl p-6 relative overflow-hidden transition-colors duration-500 group-hover:border-border-strong group-hover:bg-surface shadow-sm dark:shadow-none">
           <div className="absolute top-0 right-0 p-4 z-20">
              <span className="text-[10px] uppercase font-mono tracking-widest text-secondary/50">System Architecture</span>
           </div>
           {type && <ArchitectureDiagram type={type} isHovered={isHovered} />}
        </div>

        {/* 3. TECHNICAL IMPLEMENTATION */}
        <div className="bg-surface/30 border border-border-subtle rounded-xl p-8 transition-colors duration-500 group-hover:bg-surface/50 group-hover:border-border-strong shadow-sm dark:shadow-none">
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

          <div className="mt-10 pt-6 border-t border-border-subtle flex flex-wrap gap-2.5">
            {stack.map((tech: string) => (
              <span key={tech} className="px-3 py-1.5 bg-background border border-border-subtle rounded flex items-center text-[11px] uppercase tracking-wider text-secondary font-mono cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 4. ARCHITECTURAL TRADEOFFS */}
        {tradeoffs && tradeoffs.length > 0 && (
          <div className="bg-surface/20 border border-border-subtle rounded-xl p-8 transition-colors duration-500 group-hover:bg-surface/30 group-hover:border-border-strong mt-[-2rem] shadow-sm dark:shadow-none">
            <h3 className="text-sm font-mono uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary/50" />
              Architectural Tradeoffs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tradeoffs.map((t: any, i: number) => (
                <div key={i} className="flex flex-col gap-3">
                  <span className="text-sm font-medium text-primary border-b border-border-subtle pb-2 inline-block w-fit">
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