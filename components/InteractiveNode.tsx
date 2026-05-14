"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NodeProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  metadata: { label: string; value: string }[];
  status?: "active" | "idle" | "processing";
}

export default function InteractiveNode({ icon, title, subtitle, metadata, status = "active" }: NodeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* THE VISUAL NODE */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-surface/80 border border-white/10 backdrop-blur-md cursor-crosshair hover:border-accent/50 transition-colors duration-300 relative z-10">
        <div className="w-10 h-10 rounded-full bg-background border border-white/5 flex items-center justify-center text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>
        <div className="flex flex-col pr-4">
          <span className="text-sm font-medium text-primary">{title}</span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/50">{subtitle}</span>
        </div>

        {/* Pulse Indicator */}
        {status === "processing" && (
           <span className="absolute -top-1 -right-1 flex h-3 w-3">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-accent border-2 border-surface"></span>
           </span>
        )}
      </div>

      {/* THE METADATA REVEAL (Hover State) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-3 w-64 p-4 rounded-xl bg-surface border border-white/10 shadow-2xl backdrop-blur-xl z-50 pointer-events-none"
          >
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent mb-1 border-b border-white/5 pb-2">Node Processing Logic</h4>
              
              {metadata.map((data, i) => (
                <div key={i} className="flex justify-between items-end">
                  <span className="text-xs text-secondary">{data.label}</span>
                  <span className="text-xs font-mono text-primary text-right">{data.value}</span>
                </div>
              ))}
              
              <div className="mt-2 pt-2 border-t border-white/5 flex justify-between items-center">
                 <span className="text-[9px] font-mono text-secondary/40">Latency</span>
                 <span className="text-[9px] font-mono text-emerald-400">~{Math.floor(Math.random() * 40) + 12}ms</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}