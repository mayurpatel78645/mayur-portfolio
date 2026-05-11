"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto pb-24">
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-32 mt-12"
      >
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
          From high-pressure kitchens <br className="hidden md:block" />
          <span className="text-secondary">to scalable software systems.</span>
        </h1>
        <p className="text-xl text-secondary max-w-2xl leading-relaxed">
          My engineering philosophy wasn't born in a classroom. It was forged over a decade in high-volume culinary operations, where systems thinking and pressure management were the difference between success and catastrophic failure.
        </p>
      </motion.div>

      {/* Cinematic Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent" />

        <div className="space-y-24">
          <TimelineNode 
            year="The Foundation"
            title="Understanding Operations"
            description="Started as a cashier at Sobeys at 17, moving into the food industry. Learned early on that efficiency isn't just about moving fast—it's about designing environments where friction is eliminated."
          />
          
          <TimelineNode 
            year="The Crucible"
            title="Dishwasher to Sous Chef"
            description="Spent a decade in Canada at Joey Polo Park. Rose through the ranks by fundamentally understanding how pieces fit together. As a Sous Chef leading teams of up to 40 people, I wasn't just cooking; I was load-balancing human resources, optimizing live workflows, and debugging operational bottlenecks in real-time."
          />

          <TimelineNode 
            year="The Realization"
            title="Automating the Repetitive"
            description="While managing high-volume service, I began automating repetitive operational systems—like tracking waste and streamlining setup efficiency. I realized my true passion wasn't just managing systems, but architecting them from the ground up."
          />

          <TimelineNode 
            year="The Pivot"
            title="Engineering & AI Systems"
            description="Returned to India to pursue a BCA, aggressively transitioning toward software engineering. Now, I apply that same 'chef brain' logic—empathy, leadership, and operational efficiency—to building AI systems and full-stack products."
          />
        </div>
      </div>

      {/* Core Themes Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mt-32 pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        <Theme title="Leadership" desc="Calm execution under intense pressure." />
        <Theme title="Systems Mindset" desc="Building for scale and fault tolerance." />
        <Theme title="Empathy" desc="Designing tools for human workflows." />
        <Theme title="Automation" desc="Eliminating low-leverage repetitive work." />
      </motion.div>

    </div>
  );
}

function TimelineNode({ year, title, description }: { year: string, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-12 md:pl-24"
    >
      {/* Node Indicator */}
      <div className="absolute left-0 md:left-2 top-2 w-8 h-8 rounded-full bg-background border border-white/20 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-accent" />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-accent font-mono text-sm tracking-wider uppercase flex items-center gap-2">
          <ArrowDownRight className="w-4 h-4" /> {year}
        </span>
        <h3 className="text-2xl md:text-3xl font-medium mb-2">{title}</h3>
        <p className="text-secondary text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function Theme({ title, desc }: { title: string, desc: string }) {
  return (
    <div>
      <h4 className="text-primary font-medium mb-2">{title}</h4>
      <p className="text-sm text-secondary">{desc}</p>
    </div>
  );
}