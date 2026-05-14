"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Image from "next/image"; // Note: Switch to a standard <img> tag if you aren't using Next/Image optimizations

export default function ProjectMediaViewer({ images }: { images: { src: string; label: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {/* THE MAC OS WINDOW WRAPPER */}
      <div className="relative w-full aspect-[16/10] rounded-xl bg-surface border border-border-strong shadow-2xl overflow-hidden group">
        
        {/* Fake Browser/Window Header */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-surface/80 backdrop-blur-md border-b border-border-subtle flex items-center px-4 z-20">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 rounded bg-background/50 border border-border-subtle">
            <span className="text-[10px] font-mono text-secondary/60 tracking-widest uppercase">
              {images[currentIndex].label}
            </span>
          </div>
        </div>

        {/* The Image Viewport */}
        <div className="absolute inset-0 pt-10 bg-background/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              {/* Replace with <Image /> if you have domains configured in next.config.js */}
              <img 
                src={`/${images[currentIndex].src}`} 
                alt={images[currentIndex].label}
                className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Overlays (Show on Hover) */}
        {images.length > 1 && (
          <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={handlePrev}
              className="pointer-events-auto w-8 h-8 rounded-full bg-background/80 border border-border-strong backdrop-blur-md flex items-center justify-center text-primary hover:bg-surface hover:scale-110 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={handleNext}
              className="pointer-events-auto w-8 h-8 rounded-full bg-background/80 border border-border-strong backdrop-blur-md flex items-center justify-center text-primary hover:bg-surface hover:scale-110 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-12 w-20 shrink-0 rounded-md overflow-hidden border transition-all duration-300 ${
                currentIndex === idx ? "border-accent ring-1 ring-accent/50" : "border-border-strong opacity-50 hover:opacity-100"
              }`}
            >
              <img src={`/${img.src}`} alt={img.label} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}