"use client";

import Link from "next/link";
import { ArrowRight, Play, QrCode, Zap, Layers } from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- GLOBAL MOTION RHYTHM ---
const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.15,
    },
  },
};

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

// --- SIGNATURE VISUAL: Background Intelligence ---
function AbstractDataFlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center -z-10">
      <div className="w-[800px] h-full relative opacity-60 md:opacity-80">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full" />
        <svg className="absolute w-full h-full" viewBox="0 0 800 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M400 100 L400 1100 M100 400 L700 400 M200 200 L600 600 M600 200 L200 600" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <motion.path
            d="M400 100 L400 1100"
            stroke="#A78BFA"
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0px 0px 4px rgba(167, 139, 250, 0.4))" }}
            initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 0.25, 0.25, 0],
              pathOffset: [0, 0, 0.75, 1],
              opacity: [0, 0.3, 0.3, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M100 400 L700 400"
            stroke="#A78BFA"
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0px 0px 4px rgba(167, 139, 250, 0.4))" }}
            initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 0.25, 0.25, 0], 
              pathOffset: [0, 0, 0.75, 1], 
              opacity: [0, 0.3, 0.3, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />
        </svg>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto pb-24 relative">
      <AbstractDataFlow />
      
      {/* THE HERO */}
      <motion.section 
        variants={CONTAINER_VARIANTS}
        initial="hidden" 
        animate="visible" 
        className="pt-32 md:pt-40 pb-20 flex flex-col relative z-10"
      >
        <motion.div variants={FADE_UP} className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-surface/80 backdrop-blur-md text-sm text-secondary shadow-sm w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Building systems that reduce human effort
        </motion.div>
        
        <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">clarity</span> <br />
          out of operational chaos.
        </motion.h1>

        <motion.p variants={FADE_UP} className="text-lg md:text-xl text-secondary max-w-2xl mb-12 leading-relaxed">
          Full-stack engineer focused on AI systems, scalable infrastructure, and automation. Translating a decade of high-pressure culinary leadership into resilient, human-centric software architecture.
        </motion.p>

        <motion.div variants={FADE_UP} className="flex flex-wrap gap-8 md:gap-10 mb-12 py-8 border-y border-white/5 bg-gradient-to-r from-surface/30 to-transparent backdrop-blur-sm shadow-inner rounded-xl px-6 md:px-0">
          <div className="flex flex-col gap-1 md:pl-6">
            <span className="text-3xl font-semibold text-primary tracking-tight">10 Yrs</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">Operations (40+ Staff)</span>
          </div>
          <div className="flex flex-col gap-1 md:border-l border-white/10 pl-0 md:pl-10">
            <span className="text-3xl font-semibold text-primary tracking-tight">4.3<span className="text-xl text-secondary/50">/4.5</span></span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">MITT Canada GPA</span>
          </div>
          <div className="flex flex-col gap-1 md:border-l border-white/10 pl-0 md:pl-10">
            <span className="text-3xl font-semibold text-primary tracking-tight">95.7%</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">BCA Sem 1 Score</span>
          </div>
          <div className="flex flex-col gap-1 md:border-l border-white/10 pl-0 md:pl-10">
            <span className="text-3xl font-semibold text-primary tracking-tight">320 Hrs</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">Engineering Internship</span>
          </div>
        </motion.div>

        <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-4">
          <Link href="/projects" className="group flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            View Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
          </Link>
          <Link href="/experience" className="flex items-center gap-2 bg-surface border border-white/10 text-primary px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-surfaceHover">
            Operational Background
          </Link>
        </motion.div>
      </motion.section>

      {/* SELECTED SYSTEMS SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="flex items-end justify-between mb-8 pt-8">
          <h2 className="text-2xl font-semibold tracking-tight">Selected Systems</h2>
          <Link href="/projects" className="group flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors font-mono uppercase tracking-widest">
            View All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: The Director */}
          <Link href="/projects#director" className="group block p-8 rounded-2xl bg-gradient-to-br from-surface/40 to-surface/10 border border-white/5 hover:border-white/10 transition-all duration-500 shadow-inner backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <Play className="w-5 h-5 ml-0.5" />
              </div>
              <div className="flex flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-wider text-secondary/50 group-hover:text-accent/70 transition-colors">
                <span>Status: Idle</span>
                <span>Latency: 14ms</span>
              </div>
            </div>
            <h3 className="text-xl font-medium text-primary mb-2 relative z-10">The Director</h3>
            <p className="text-sm text-secondary leading-relaxed mb-6 relative z-10">Asynchronous video processing pipeline using FastAPI, FFmpeg, and contextual AI ranking.</p>
            <div className="flex gap-2 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">
               <span className="text-[9px] font-mono border border-white/10 px-2 py-0.5 rounded uppercase">FastAPI</span>
               <span className="text-[9px] font-mono border border-white/10 px-2 py-0.5 rounded uppercase">FFmpeg</span>
            </div>
          </Link>

          {/* Card 2: SmartQR */}
          <Link href="/projects#smartqr" className="group block p-8 rounded-2xl bg-gradient-to-br from-surface/40 to-surface/10 border border-white/5 hover:border-white/10 transition-all duration-500 shadow-inner backdrop-blur-sm relative overflow-hidden">
             <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                <QrCode className="w-5 h-5" />
              </div>
              <div className="flex flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-wider text-secondary/50 group-hover:text-emerald-400/70 transition-colors">
                <span>Node: Active</span>
                <span>Sync: 82ms</span>
              </div>
            </div>
            <h3 className="text-xl font-medium text-primary mb-2 relative z-10">SmartQR</h3>
            <p className="text-sm text-secondary leading-relaxed mb-6 relative z-10">Real-time restaurant operations platform built with Next.js and Supabase WebSockets.</p>
            <div className="flex gap-2 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">
               <span className="text-[9px] font-mono border border-white/10 px-2 py-0.5 rounded uppercase">WebSockets</span>
               <span className="text-[9px] font-mono border border-white/10 px-2 py-0.5 rounded uppercase">Supabase</span>
            </div>
          </Link>
        </div>
      </motion.section>

      {/* PRIORITY 7: THE OPERATIONAL PHILOSOPHY (The Unforgettable Moment) */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 p-12 rounded-3xl bg-surface/20 border border-white/5 relative overflow-hidden group/philosophy"
      >
        <div className="relative z-10 max-w-xl">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-6">Operating Principle</h2>
          <h3 className="text-3xl font-semibold mb-6 tracking-tight">The Crucible vs. The Code.</h3>
          <p className="text-secondary leading-relaxed mb-8">
            In high-volume kitchens, chaos is inevitable. Success is determined by the <span className="text-primary font-medium">resilience of the system</span>. I apply this same logic to software: building architectures that don't just work, but flourish under peak cognitive and computational load.
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono uppercase text-secondary/50">Crucible Logic</span>
              <span className="text-sm text-primary">Real-time Triage</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono uppercase text-secondary/50">Engineering Logic</span>
              <span className="text-sm text-primary">Predictive Scalability</span>
            </div>
          </div>
        </div>

        {/* Interactive Visual Element */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 opacity-10 group-hover/philosophy:opacity-20 transition-opacity duration-1000">
           <div className="relative w-80 h-80">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-dashed border-white rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 border-[1px] border-dashed border-white/50 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Layers className="w-12 h-12 text-white" />
              </div>
           </div>
        </div>
      </motion.section>

    </div>
  );
}