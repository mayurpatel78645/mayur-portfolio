"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const EXPERIENCE_DATA = [
  {
    role: "Freelance Software Developer",
    company: "Self-Employed",
    date: "Dec 2024 — Present",
    location: "Maharashtra, India",
    category: "Engineering",
    bullets: [
      "Architecting full-stack web applications and AI-integrated systems for diverse clients.",
      "Developing custom automation scripts and data processing pipelines using Python and C.",
      "Managing end-to-end software lifecycles from initial client scoping to deployment and maintenance."
    ],
    skills: ["Python", "C", "System Architecture", "Full-Stack Development"]
  },
  {
    role: "Sous Chef",
    company: "The Rec Room",
    date: "Sep 2024 — Dec 2024",
    location: "Winnipeg, MB, Canada",
    category: "Operational Leadership",
    bullets: [
      "Directed high-volume culinary operations in a massive entertainment complex.",
      "Optimized inventory tracking and managed supply chain logistics to minimize waste margins.",
      "Led, trained, and orchestrated large floor teams during peak capacity periods."
    ],
    skills: ["Team Leadership", "Inventory Management", "Process Optimization"]
  },
  {
    role: "Junior Sous Chef",
    company: "JOEY Restaurant Group",
    date: "Sep 2023 — Aug 2024",
    location: "Winnipeg, MB, Canada",
    category: "Operational Leadership",
    bullets: [
      "Executed flawless service standards in a premium, fast-paced dining environment.",
      "Acted as the primary pivot point between front-of-house requests and back-of-house execution.",
      "Assisted in labor scheduling and real-time operational troubleshooting."
    ],
    skills: ["High-Volume Execution", "Cross-functional Communication", "Quality Assurance"]
  },
  {
    role: "Software Developer Internship",
    company: "Tactica Interactive",
    date: "Jan 2022 — Mar 2022",
    location: "Winnipeg, MB, Canada (Hybrid)",
    category: "Engineering",
    bullets: [
      "Completed a rigorous 320-hour engineering internship concurrent with demanding operational work.",
      "Contributed to frontend development and UI system updates for live digital products.",
      "Collaborated with senior engineers on bug squashing, code reviews, and agile sprint planning."
    ],
    skills: ["Frontend Development", "Agile Methodologies", "UI Implementation"]
  },
  {
    role: "Line Cook / Prep Cook",
    company: "Browns Socialhouse",
    date: "Nov 2019 — Aug 2023",
    location: "Winnipeg / Edmonton, Canada",
    category: "Operations",
    bullets: [
      "Maintained operational excellence and station efficiency across nearly four years of service.",
      "Trained new hires on standardized procedures and safety protocols.",
      "Mastered rapid context-switching and task prioritization under heavy cognitive load."
    ],
    skills: ["Task Prioritization", "Consistency", "Training"]
  },
  {
    role: "Line Cook",
    company: "Cineplex",
    date: "Oct 2017 — Oct 2019",
    location: "Edmonton, AB, Canada",
    category: "Operations",
    bullets: [
      "Managed station prep and execution for high-turnover service windows."
    ],
    skills: ["Time Management", "Efficiency"]
  },
  {
    role: "Line Cook",
    company: "New York Fries",
    date: "Sep 2015 — Aug 2017",
    location: "Winnipeg, MB, Canada",
    category: "Operations",
    bullets: [
      "Built the foundational work ethic and efficiency habits required for high-stress environments."
    ],
    skills: ["Fundamentals", "Work Ethic"]
  }
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto pb-32">
      
      <div className="mb-16 pt-8">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">Experience log.</h1>
        <p className="text-xl text-secondary leading-relaxed max-w-2xl">
          A verifiable track record of executing complex tasks, leading teams, and building systems across both engineering and high-volume operations.
        </p>
      </div>

      <div className="flex flex-col gap-12 relative">
        {/* Subtle timeline track line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent md:block hidden" />

        {EXPERIENCE_DATA.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative flex flex-col md:flex-row gap-4 md:gap-12 md:pl-8"
          >
            {/* Timeline Dot (Desktop) */}
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-surface border border-white/20 group-hover:border-accent group-hover:bg-accent transition-colors duration-300 md:block hidden" />

            {/* Left Column: Dates & Meta */}
            <div className="md:w-1/4 flex flex-col gap-2 shrink-0 pt-1">
              <span className="text-sm font-mono text-primary/80">{job.date}</span>
              <div className="flex items-center gap-1.5 text-xs text-secondary font-mono">
                <MapPin className="w-3 h-3" /> {job.location}
              </div>
              <span className={cn(
                "mt-2 text-[10px] uppercase tracking-widest font-mono w-max px-2 py-0.5 rounded-sm border",
                job.category === "Engineering" ? "bg-accent/10 border-accent/20 text-accent" : 
                job.category === "Operational Leadership" ? "bg-orange-500/10 border-orange-500/20 text-orange-400" :
                "bg-surface border-white/10 text-secondary"
              )}>
                {job.category}
              </span>
            </div>

            {/* Right Column: Details */}
            <div className="md:w-3/4 flex flex-col pb-8 border-b border-white/5 group-last:border-0">
              <h3 className="text-xl font-semibold text-primary">{job.role}</h3>
              <h4 className="text-base text-secondary mb-4 font-medium flex items-center gap-1">
                {job.company} <ArrowUpRight className="w-3 h-3 opacity-50" />
              </h4>

              <ul className="flex flex-col gap-3 mb-6">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-white/20 mt-1.5 text-[10px]">■</span>
                    <span className="text-sm text-secondary/90 leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <span key={i} className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-surface border border-white/5 rounded-md text-secondary group-hover:border-white/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}