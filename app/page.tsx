"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, GitBranch, Cpu } from "lucide-react";
import Link from "next/link";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

const SKILL_CATEGORIES = [
  {
    title: "Frontend Engineering",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "TailwindCSS"],
  },
  {
    title: "Backend & APIs",
    skills: ["Python", "FastAPI", "PHP", "C#", "REST APIs"],
  },
  {
    title: "Systems & Automation",
    skills: ["Playwright", "Selenium", "FFmpeg", "Node.js"],
  },
  {
    title: "AI & Realtime Data",
    skills: ["Google Gemini API", "PostgreSQL", "Supabase", "SQL"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub Actions", "VS Code", "Vercel"],
  }
];

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-glow blur-[120px] rounded-full pointer-events-none -z-10" />

      <motion.section 
        initial="hidden" 
        animate="visible" 
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="min-h-[80vh] flex flex-col justify-center"
      >
        <motion.div variants={FADE_UP} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-secondary">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Building systems that reduce human effort
        </motion.div>
        
        <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-8">
          Engineering <span className="text-secondary">clarity</span> <br />
          out of operational chaos.
        </motion.h1>

        <motion.p variants={FADE_UP} className="text-lg md:text-xl text-secondary max-w-2xl mb-12 leading-relaxed">
          Full-stack engineer focused on AI systems, scalable infrastructure, and automation. Translating a decade of high-pressure leadership into resilient software architecture.
        </motion.p>

        <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-4">
          <Link href="/projects" className="group flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-md font-medium transition-all hover:bg-white/90">
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/experience" className="flex items-center gap-2 bg-surface border border-white/10 text-primary px-6 py-3 rounded-md font-medium transition-all hover:bg-surfaceHover">
            Operational Experience
          </Link>
        </motion.div>
      </motion.section>

      {/* Engineering Philosophy Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 border-t border-white/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PhilosophyCard 
            icon={<Cpu className="w-6 h-6 text-accent" />}
            title="AI Systems Development"
            description="Building tools like The Director to automate complex, time-consuming human workflows using LLMs and computer vision."
          />
          <PhilosophyCard 
            icon={<Terminal className="w-6 h-6 text-accent" />}
            title="Real-world Architecture"
            description="Developing scalable platforms like SmartQR to solve immediate operational bottlenecks in fast-paced environments."
          />
          <PhilosophyCard 
            icon={<GitBranch className="w-6 h-6 text-accent" />}
            title="Maturity Under Pressure"
            description="Leveraging years of managing 40+ person teams to bring calm, decisive leadership to software development and debugging."
          />
        </div>
      </motion.section>

      {/* Technical Arsenal Section - MOVED OUTSIDE THE GRID */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 border-t border-white/10"
      >
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Technical Arsenal</h2>
          <p className="text-secondary max-w-2xl">
            Tools and frameworks I use to build scalable systems, automate workflows, and design real-time architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-xl bg-surface border border-white/5 hover:border-white/10 transition-colors group"
            >
              <h3 className="text-lg font-medium mb-4 text-primary group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-background border border-white/5 rounded-md text-sm text-secondary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

function PhilosophyCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-xl bg-surface border border-white/5 hover:border-white/10 transition-colors">
      <div className="mb-4 p-3 rounded-lg bg-background inline-block border border-white/5">{icon}</div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-secondary leading-relaxed">{description}</p>
    </div>
  );
}