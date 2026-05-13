"use client";

import { motion } from "framer-motion";
import { Target, Flame, Cpu, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const TIMELINE_NODES = [
  {
    icon: Target,
    period: "The Foundation",
    title: "Front-Line Efficiency",
    description: "Started at the ground level in retail operations at Sobeys. Learned the absolute fundamentals of customer-facing workflows and identifying bottlenecks in high-traffic environments.",
    metrics: []
  },
  {
    icon: Flame,
    period: "The Crucible (10 Years)",
    title: "Operational Leadership",
    description: "A decade-long tenure at Joey Polo Park. Rose from the dish pit to Sous Chef. Mastered the art of high-pressure execution, real-time problem solving, and human orchestration in a volatile environment.",
    metrics: ["Led 40+ Staff", "High-Volume Execution", "Workflow Optimization"]
  },
  {
    icon: Cpu,
    period: "The Realization",
    title: "Systems & Automation",
    description: "Began identifying systemic inefficiencies in kitchen operations. Transitioned from manual management to building automated waste tracking and optimizing inventory data pipelines.",
    metrics: ["4.3/4.5 MITT GPA", "Data Pipelines", "Systems Thinking"]
  },
  {
    icon: Rocket,
    period: "The Pivot (Present)",
    title: "Software Engineering",
    description: "Relocated to India for formal Computer Applications education. Currently architecting AI-driven applications, asynchronous processing pipelines, and production-grade software systems.",
    metrics: ["95.7% BCA Sem 1", "320-Hr Engineering Internship", "Full-Stack AI"]
  }
];

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
        
        {/* The Vertical Line */}
        <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent" />

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
                <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-surface border-4 border-background z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
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
                        <span key={i} className="px-2.5 py-1 text-[11px] font-mono tracking-wider uppercase border border-white/10 bg-surface rounded-md text-primary/80">
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

      {/* Footer / CTA */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 pt-12 border-t border-white/5 flex flex-col items-center text-center"
      >
        <h3 className="text-2xl font-medium mb-6">Ready to see the execution?</h3>
        <div className="flex gap-4">
          <Link href="/projects" className="flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-md font-medium transition-all hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            View Engineering Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>

    </div>
  );
}