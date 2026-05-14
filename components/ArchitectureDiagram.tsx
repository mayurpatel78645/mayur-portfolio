"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Server, Globe, Cpu, FileVideo, Layers, Zap, ScanEye, ListFilter, ShieldAlert, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

// UPGRADED DATA: Added deep engineering metadata and simulated latency
const ARCHITECTURE_DATA = {
  director: [
    { 
      icon: FileVideo, label: "Upload Service", detail: "Async chunking & multi-part drag/drop upload pipeline.",
      latency: "14", metrics: [{ label: "Protocol", value: "Multipart/FormData" }, { label: "Chunk Size", value: "25MB" }]
    },
    { 
      icon: Server, label: "FastAPI Backend", detail: "Concurrent FFmpeg processing & frame extraction.",
      latency: "850", metrics: [{ label: "Runtime", value: "Python 3.11 Worker" }, { label: "I/O", value: "Non-blocking" }]
    },
    { 
      icon: Cpu, label: "Gemini Analysis", detail: "Contextual prompt chaining & confidence scoring.",
      latency: "1240", metrics: [{ label: "Scoring Model", value: "gemini-1.5-pro" }, { label: "Weighting", value: "Narrative Spike" }]
    },
    { 
      icon: Layers, label: "Resolve Export", detail: "Automated .EDL timeline generation & rendering.",
      latency: "42", metrics: [{ label: "Format", value: "FCPXML v1.9" }, { label: "Timeline", value: "Dynamic Injection" }]
    }
  ],
  smartqr: [
    { 
      icon: Globe, label: "Client UI", detail: "Mobile-first Next.js edge-rendered interface.",
      latency: "12", metrics: [{ label: "Rendering", value: "Edge/Static" }, { label: "State", value: "Optimistic UI" }]
    },
    { 
      icon: Zap, label: "Supabase Realtime", detail: "Websocket orchestration for live sold-out syncing.",
      latency: "48", metrics: [{ label: "Protocol", value: "WSS (WebSockets)" }, { label: "Broadcast", value: "Channel API" }]
    },
    { 
      icon: Database, label: "PostgreSQL", detail: "Relational inventory state & role-based access.",
      latency: "22", metrics: [{ label: "Sync Engine", value: "WAL Listener" }, { label: "Security", value: "Strict RLS" }]
    }
  ],
  tathya: [
    { 
      icon: ScanEye, label: "DOM Observer", detail: "MutationObserver targeting native Instagram react roots.",
      latency: "8", metrics: [{ label: "Target", value: "React Fiber Tree" }, { label: "Strategy", value: "Debounced" }]
    },
    { 
      icon: ListFilter, label: "Request Queue", detail: "Debounced heuristic batching to prevent API limits.",
      latency: "16", metrics: [{ label: "Batching", value: "Active" }, { label: "Rate Limit", value: "Cached Bypass" }]
    },
    { 
      icon: Cpu, label: "Gemini Engine", detail: "Zero-shot classification & credibility weighting.",
      latency: "890", metrics: [{ label: "Classification", value: "Zero-Shot" }, { label: "Temperature", value: "0.1 (Strict)" }]
    },
    { 
      icon: ShieldAlert, label: "Badge Injector", detail: "Dynamic CSS insertion & shadow DOM isolation.",
      latency: "14", metrics: [{ label: "Isolation", value: "Shadow DOM" }, { label: "Style", value: "Injected CSS" }]
    }
  ]
};

export default function ArchitectureDiagram({ type, isHovered }: { type: 'director' | 'smartqr' | 'tathya', isHovered: boolean }) {
  const nodes = ARCHITECTURE_DATA[type];
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  if (!nodes) return null;

  return (
    <div className="relative flex flex-col items-center justify-center w-full pt-10 pb-6 rounded-xl bg-surface/20">
      
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      
      <div className="relative z-10 flex flex-col items-center w-full">
        {nodes.map((node, index) => {
          const isFocusing = hoveredNode !== null;
          const isFocused = hoveredNode === index;
          
          return (
            <div key={node.label} className="flex flex-col items-center w-full relative">
              
              <div 
                className="relative group cursor-crosshair z-20"
                onMouseEnter={() => setHoveredNode(index)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setHoveredNode(hoveredNode === index ? null : index)}
                onTouchStart={() => setHoveredNode(hoveredNode === index ? null : index)}
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
                    "relative flex items-center gap-4 px-6 py-4 rounded-xl border backdrop-blur-md transition-all duration-300 w-60",
                    isFocused 
                      ? "bg-accent/10 border-accent/40 shadow-[inset_0_0_20px_rgba(124,58,237,0.1),0_0_15px_rgba(124,58,237,0.2)]" 
                      : "bg-surface/80 border-border-subtle shadow-xl hover:border-border-strong"
                  )}
                >
                  <node.icon className={cn("w-6 h-6 shrink-0 transition-colors duration-300", isFocused ? "text-accent" : "text-secondary")} />
                  <span className="text-xs font-mono text-primary/90 leading-tight">{node.label}</span>
                  
                  {/* Subtle active ping when hovered */}
                  {isFocused && (
                     <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                     </span>
                  )}
                </motion.div>
              </div>

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

      {/* THE UPGRADED TELEMETRY HUD */}
      <div className="relative z-10 w-full max-w-[280px] mt-10">
        <div className="min-h-[140px] p-5 rounded-xl bg-background/90 border border-border-strong shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden backdrop-blur-xl">
          <AnimatePresence mode="wait">
            {hoveredNode !== null ? (
              <motion.div
                key={hoveredNode}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-3 border-b border-border-subtle pb-3">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-accent flex items-center gap-2">
                    <Activity className="w-3 h-3 opacity-70 animate-pulse" />
                    {nodes[hoveredNode].label}
                  </div>
                  <div className="text-[9px] font-mono text-emerald-400/80 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    ~{nodes[hoveredNode].latency}ms
                  </div>
                </div>
                
                <div className="flex flex-col gap-2.5 mt-1">
                  {nodes[hoveredNode].metrics.map((metric, i) => (
                    <div key={i} className="flex justify-between items-end">
                      <span className="text-[10px] text-secondary/70">{metric.label}</span>
                      <span className="text-[10px] font-mono text-primary/90">{metric.value}</span>
                    </div>
                  ))}
                </div>
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
                <p className="text-[10px] uppercase tracking-widest text-secondary/40 font-mono animate-pulse flex items-center gap-2">
                  <ScanEye className="w-3 h-3" /> Inspect Node
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}