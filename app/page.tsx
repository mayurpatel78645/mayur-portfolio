"use client";

import Link from "next/link";
import { ArrowRight, Play, QrCode } from "lucide-react";
import { motion, Variants } from "framer-motion";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto pb-24 relative">

      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[400px] bg-accent/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      {/* THE HERO (Kept exactly as we built it) */}
      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        // THE FIX: Removed min-h and justify-center. Replaced with strict padding.
        className="pt-32 md:pt-40 pb-20 flex flex-col"
      >
        <motion.div variants={FADE_UP} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-surface backdrop-blur-sm text-sm text-secondary shadow-sm w-fit">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Building systems that reduce human effort
        </motion.div>
        
        <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">clarity</span> <br />
          out of operational chaos.
        </motion.h1>

        <motion.p variants={FADE_UP} className="text-lg md:text-xl text-secondary max-w-2xl mb-10 leading-relaxed">
          Full-stack engineer focused on AI systems, scalable infrastructure, and automation. Translating a decade of high-pressure culinary leadership into resilient, human-centric software architecture.
        </motion.p>

        <motion.div variants={FADE_UP} className="flex flex-wrap gap-8 md:gap-10 mb-12 py-6 border-y border-white/5">
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-semibold text-primary tracking-tight">10 Yrs</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">Operations (40+ Staff)</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-white/10 pl-8 md:pl-10">
            <span className="text-3xl font-semibold text-primary tracking-tight">4.3<span className="text-xl text-secondary/50">/4.5</span></span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">MITT Canada GPA</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-white/10 pl-8 md:pl-10">
            <span className="text-3xl font-semibold text-primary tracking-tight">95.7%</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">BCA Sem 1 Score</span>
          </div>
          <div className="flex flex-col gap-1 border-l border-white/10 pl-8 md:pl-10">
            <span className="text-3xl font-semibold text-primary tracking-tight">320 Hrs</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">Engineering Internship</span>
          </div>
        </motion.div>

        <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-4">
          <Link href="/projects" className="group flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-md font-medium transition-all hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            View Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/experience" className="flex items-center gap-2 bg-surface border border-white/10 text-primary px-6 py-3 rounded-md font-medium transition-all hover:bg-surfaceHover">
            Operational Background
          </Link>
        </motion.div>
      </motion.section>

      {/* THE NEW FIX: Clickable "Selected Systems" Router instead of static filler */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Selected Systems</h2>
          <Link href="/projects" className="group flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors font-mono uppercase tracking-widest">
            View All <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: The Director */}
          <Link href="/projects" className="group block p-8 rounded-xl bg-surface/30 border border-white/5 hover:bg-surface/50 hover:border-white/10 transition-all duration-300">
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <Play className="w-5 h-5 ml-0.5" />
              </div>
              <ArrowRight className="w-5 h-5 text-secondary/30 group-hover:text-primary group-hover:-rotate-45 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-medium text-primary mb-2">The Director</h3>
            <p className="text-sm text-secondary leading-relaxed">Asynchronous video processing pipeline using FastAPI, FFmpeg, and contextual AI ranking.</p>
          </Link>

          {/* Card 2: SmartQR */}
          <Link href="/projects#smartqr" className="group block p-8 rounded-xl bg-surface/30 border border-white/5 hover:bg-surface/50 hover:border-white/10 transition-all duration-300">
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <QrCode className="w-5 h-5" />
              </div>
              <ArrowRight className="w-5 h-5 text-secondary/30 group-hover:text-primary group-hover:-rotate-45 transition-all duration-300" />
            </div>
            <h3 className="text-xl font-medium text-primary mb-2">SmartQR</h3>
            <p className="text-sm text-secondary leading-relaxed">Real-time restaurant operations platform built with Next.js and Supabase WebSockets.</p>
          </Link>
        </div>
      </motion.section>

    </div>
  );
}