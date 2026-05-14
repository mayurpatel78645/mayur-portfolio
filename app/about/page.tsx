"use client";

import { motion } from "framer-motion";
// Added Youtube and ArrowUpRight to your imports
import { Target, Flame, Cpu, Rocket, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const TIMELINE_NODES = [
  {
    icon: Target,
    period: "2015 — 2019",
    title: "The Foundation: Execution",
    description: "Started in extreme high-volume environments at New York Fries and Cineplex in Canada. Learned the absolute fundamentals of workflow efficiency, consistency under pressure, and rapid context-switching.",
    metrics: ["High-Volume Operations", "Workflow Efficiency"]
  },
  {
    icon: Cpu,
    period: "2019 — 2023",
    title: "The Climb & The Spark",
    description: "Spent four years at Browns Socialhouse mastering complex operational systems. Concurrently pursued formal tech education, graduating with elite marks and landing a Software Developer Internship at Tactica Interactive.",
    metrics: ["4.3/4.5 MITT GPA", "320-Hr Engineering Internship"]
  },
  {
    icon: Flame,
    period: "2023 — 2024",
    title: "The Crucible: Leadership",
    description: "Transitioned into senior management as Junior Sous Chef at JOEY Restaurant Group and Sous Chef at The Rec Room. Mastered human orchestration, inventory data pipelines, and leading large teams through critical service peaks.",
    metrics: ["Led 40+ Staff", "Systems Optimization", "Real-time Triage"]
  },
  {
    icon: Rocket,
    period: "2024 — Present",
    title: "The Pivot: Software Engineering",
    description: "Relocated to India to pursue a formal BCA. Currently operating as a Freelance Software Developer, architecting full-stack AI applications, scalable data pipelines, and production-grade systems.",
    metrics: ["95.7% BCA Sem 1", "Freelance Developer", "Full-Stack AI"]
  }
];

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 58.38 58.38 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 58.38 58.38 0 0 1-15 0 2 2 0 0 1-2-2Z" />
      <path d="m9.75 15.02 5.75-3.02-5.75-3.02v6.04Z" />
    </svg>
  );
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto pb-24">
      
      {/* Header Section */}
      <div className="mb-20 pt-8">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">The Architecture of a Career.</h1>
        <p className="text-xl text-secondary leading-relaxed max-w-2xl">
          I didn't start in a computer lab. I spent ten years learning how to build, scale, and lead complex operational systems under extreme pressure. Now, I write software that does the same thing.
        </p>
      </div>

      {/* The Cinematic Timeline */}
      <div className="relative pl-4 md:pl-0">
        
        {/* FIX: The Vertical Line now uses adaptive border variables */}
        <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-border-strong to-transparent" />

        <div className="space-y-16">
          {TIMELINE_NODES.map((node, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "relative flex flex-col md:flex-row items-start gap-8 md:gap-0",
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                
                {/* Center Node Icon */}
                <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-surface border-4 border-background z-10 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <node.icon className="w-5 h-5 text-accent" />
                </div>

                {/* Content Card */}
                <div className={cn(
                  "ml-20 md:ml-0 md:w-1/2 flex flex-col",
                  isEven ? "md:pr-16 items-start md:items-end text-left md:text-right" : "md:pl-16 items-start text-left"
                )}>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent mb-2">{node.period}</span>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{node.title}</h3>
                  <p className="text-secondary leading-relaxed mb-6">
                    {node.description}
                  </p>

                  {/* Credibility Metrics Injection */}
                  {node.metrics.length > 0 && (
                    <div className={cn(
                      "flex flex-wrap gap-2",
                      isEven ? "md:justify-end" : "justify-start"
                    )}>
                      {node.metrics.map((metric, i) => (
                        <span key={i} className="px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase border border-border-subtle bg-surface rounded-md text-primary/80">
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* NEW: YouTube CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 pt-16 mb-10 border-t border-border-subtle flex flex-col items-center text-center relative z-10"
      >
        <div className="w-16 h-16 rounded-2xl bg-red-500/5 dark:bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/10 dark:border-red-500/20 shadow-sm dark:shadow-inner">
          {/* Use your new custom SVG component here */}
          <YoutubeIcon className="w-8 h-8 text-red-500 dark:text-red-400" />
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-primary">
          Mise En Code.
        </h2>

        <p className="text-secondary max-w-xl leading-relaxed mb-8">
          I recently launched a YouTube channel to learn in public. It is an open space where I focus on visualizing complex algorithms, breaking down system architectures, and exploring how we can use AI to learn faster, together.
        </p>

        <a
          href="https://www.youtube.com/@miseencode"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-md font-medium transition-all duration-300 hover:opacity-90 shadow-sm hover:shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
          Watch on YouTube
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out" />
        </a>
      </motion.section>

    </div>
  );
}