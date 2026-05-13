"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type ImageMedia = {
  src: string;
  label: string;
};

export default function ProjectMediaViewer({ images }: { images: ImageMedia[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Cinematic Image Stage */}
      <div className="relative w-full aspect-video rounded-xl bg-[#030303] border border-white/10 overflow-hidden shadow-2xl group flex items-center justify-center">
        
        {/* Subtle ambient lighting behind the image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-50" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center p-2"
          >
            {/* Using object-contain ensures tall mobile screenshots aren't awkwardly cropped */}
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].label}
              className="w-full h-full object-contain drop-shadow-2xl rounded-md"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Premium Tab Navigation */}
      <div className="flex flex-wrap gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={cn(
              "px-3 py-1.5 rounded-md text-[11px] font-mono tracking-widest uppercase transition-all duration-300 border focus:outline-none",
              currentIndex === idx
                ? "bg-accent/20 border-accent/50 text-primary shadow-[0_0_10px_rgba(124,58,237,0.2)]"
                : "bg-surface border-white/5 text-secondary hover:text-primary hover:border-white/20 hover:bg-surfaceHover"
            )}
          >
            {img.label}
          </button>
        ))}
      </div>
    </div>
  );
}