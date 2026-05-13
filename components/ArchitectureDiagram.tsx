"use client";

import { motion } from "framer-motion";
import { Database, Server, Globe, Cpu, FileVideo, Layers, Zap, ScanEye, ListFilter, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

type NodeProps = {
  icon: React.ElementType;
  label: string;
  delay: number;
  isActive: boolean;
};

// Represents a single block in your architecture
function SystemNode({ icon: Icon, label, delay, isActive }: NodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-500",
        isActive 
          ? "bg-accent/10 border-accent/50 shadow-[0_0_15px_rgba(124,58,237,0.15)]" 
          : "bg-surface border-white/5"
      )}
    >
      <Icon className={cn("w-6 h-6", isActive ? "text-accent" : "text-secondary")} />
      <span className="text-xs font-mono text-primary/80 text-center">{label}</span>
      
      {/* Pulse effect when active */}
      {isActive && (
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent animate-ping" />
      )}
    </motion.div>
  );
}

// Draws the connecting line between nodes
function Connection({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative w-8 md:w-16 h-px bg-white/10 shrink-0">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: isActive ? 1 : 0, 
          opacity: isActive ? 1 : 0 
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-accent origin-left"
      />
    </div>
  );
}

export default function ArchitectureDiagram({ type, isHovered }: { type: 'director' | 'smartqr' | 'tathya', isHovered: boolean }) {
  
  if (type === 'director') {
    return (
      <div className="flex items-center justify-center w-full py-8 overflow-x-auto">
        <div className="flex items-center min-w-max px-4">
          <SystemNode icon={FileVideo} label="Raw Upload" delay={0.1} isActive={isHovered} />
          <Connection isActive={isHovered} />
          <SystemNode icon={Server} label="FastAPI Processing" delay={0.2} isActive={isHovered} />
          <Connection isActive={isHovered} />
          <SystemNode icon={Cpu} label="Gemini AI Ranking" delay={0.3} isActive={isHovered} />
          <Connection isActive={isHovered} />
          <SystemNode icon={Layers} label="Resolve Export" delay={0.4} isActive={isHovered} />
        </div>
      </div>
    );
  }

  if (type === 'smartqr') {
    return (
      <div className="flex items-center justify-center w-full py-8 overflow-x-auto">
        <div className="flex items-center min-w-max px-4">
          <SystemNode icon={Globe} label="Client UI" delay={0.1} isActive={isHovered} />
          <Connection isActive={isHovered} />
          <SystemNode icon={Zap} label="Supabase Realtime" delay={0.2} isActive={isHovered} />
          <Connection isActive={isHovered} />
          <SystemNode icon={Database} label="PostgreSQL" delay={0.3} isActive={isHovered} />
        </div>
      </div>
    );
  }

  if (type === 'tathya') {
    return (
      <div className="flex items-center justify-start w-full py-8 overflow-x-auto">
        <div className="flex items-center min-w-max px-4">
          <SystemNode icon={ScanEye} label="DOM Observer" delay={0.1} isActive={isHovered} />
          <Connection isActive={isHovered} />
          <SystemNode icon={ListFilter} label="Request Queue" delay={0.2} isActive={isHovered} />
          <Connection isActive={isHovered} />
          <SystemNode icon={Cpu} label="Gemini Engine" delay={0.3} isActive={isHovered} />
          <Connection isActive={isHovered} />
          <SystemNode icon={ShieldAlert} label="Badge Injector" delay={0.4} isActive={isHovered} />
        </div>
      </div>
    );
  }

  return null;
}