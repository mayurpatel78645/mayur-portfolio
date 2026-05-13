"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Server, Globe, Cpu, FileVideo, Layers, Zap, ScanEye, ListFilter, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

const ARCHITECTURE_DATA = {
  director: [
    { icon: FileVideo, label: "Upload Service", detail: "Async chunking & multi-part drag/drop upload pipeline." },
    { icon: Server, label: "FastAPI Backend", detail: "Concurrent FFmpeg processing & frame extraction." },
    { icon: Cpu, label: "Gemini Analysis", detail: "Contextual prompt chaining & confidence scoring." },
    { icon: Layers, label: "Resolve Export", detail: "Automated .EDL timeline generation & rendering." }
  ],
  smartqr: [
    { icon: Globe, label: "Client UI", detail: "Mobile-first Next.js edge-rendered interface." },
    { icon: Zap, label: "Supabase Realtime", detail: "Websocket orchestration for live sold-out syncing." },
    { icon: Database, label: "PostgreSQL", detail: "Relational inventory state & role-based access." }
  ],
  tathya: [
    { icon: ScanEye, label: "DOM Observer", detail: "MutationObserver targeting native Instagram react roots." },
    { icon: ListFilter, label: "Request Queue", detail: "Debounced heuristic batching to prevent API limits." },
    { icon: Cpu, label: "Gemini Engine", detail: "Zero-shot classification & credibility weighting." },
    { icon: ShieldAlert, label: "Badge Injector", detail: "Dynamic CSS insertion & shadow DOM isolation." }
  ]
};

export default function ArchitectureDiagram({ type, isHovered }: { type: 'director' | 'smartqr' | 'tathya', isHovered: boolean }) {
  const nodes = ARCHITECTURE_DATA[type];
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  if (!nodes) return null;

  return (
    <div className="relative flex flex-col items-center justify-center w-full pt-10 pb-6 rounded-xl bg-surface/20">
      
      {/* Ambient "Alive Infrastructure" Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      
      {/* The Vertical Pipeline */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {nodes.map((node, index) => {
          const isFocusing = hoveredNode !== null;
          const isFocused = hoveredNode === index;
          
          return (
            <div key={node.label} className="flex flex-col items-center w-full relative">
              
              {/* THE SYSTEM NODE */}
              <div 
                className="relative group cursor-crosshair z-20"
                onMouseEnter={() => setHoveredNode(index)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: isHovered ? (isFocusing && !isFocused ? 0.3 : 1) : 0.5, 
                    y: 0,
                    scale: isFocused ? 1.05 : 1
                  }}
                  transition={{ delay: isHovered ? index * 0.1 : 0, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "relative flex items-center gap-4 px-6 py-4 rounded-xl border backdrop-blur-md transition-all duration-300 w-56",
                    isFocused 
                      ? "bg-accent/10 border-accent/40 shadow-[inset_0_0_20px_rgba(124,58,237,0.1),0_0_15px_rgba(124,58,237,0.2)]" 
                      : "bg-surface/80 border-white/5 shadow-xl hover:border-white/10"
                  )}
                >
                  <node.icon className={cn("w-6 h-6 shrink-0 transition-colors duration-300", isFocused ? "text-accent" : "text-secondary")} />
                  <span className="text-xs font-mono text-primary/90 leading-tight">{node.label}</span>
                </motion.div>
              </div>

              {/* THE VERTICAL PIPELINE CONNECTION */}
              {index < nodes.length - 1 && (
                <div className="relative h-8 w-px my-2 shrink-0 flex justify-center z-10">
                  <div className="absolute inset-0 bg-white/10" />
                  {isHovered && (
                    <motion.div
                      initial={{ y: "-100%", opacity: 0 }}
                      animate={{ y: "200%", opacity: [0, 1, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: index * 0.4, ease: "linear" }}
                      className="absolute left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-transparent via-accent to-transparent shadow-[0_0_8px_rgba(124,58,237,0.8)]"
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* THE MODERN FIX: Dedicated HUD / Metadata Console */}
      <div className="relative z-10 w-full max-w-[260px] mt-8">
        <div className="h-24 p-4 rounded-lg bg-background/80 border border-white/5 shadow-inner flex flex-col justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            {hoveredNode !== null ? (
              <motion.div
                key={hoveredNode} // The key ensures Framer Motion animates the swap
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col"
              >
                <div className="text-[10px] uppercase font-mono tracking-widest text-accent mb-1.5 flex items-center gap-2">
                  <ScanEye className="w-3 h-3 opacity-70" />
                  {nodes[hoveredNode].label}
                </div>
                <p className="text-xs text-secondary leading-relaxed">{nodes[hoveredNode].detail}</p>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center h-full"
              >
                <p className="text-[10px] uppercase tracking-widest text-secondary/40 font-mono animate-pulse">
                  [ Hover node for metadata ]
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}