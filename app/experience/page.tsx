"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Operational Leadership</h1>
        <p className="text-xl text-secondary">A decade of scaling systems, optimizing workflows, and managing teams under pressure.</p>
      </div>

      <div className="relative border-l border-white/10 ml-4 pl-8 space-y-16">
        
        <TimelineItem 
          role="Operations & Culinary Leadership"
          company="Joey Polo Park, Canada"
          date="10-Year Tenure"
          description="Progressed from entry-level dishwasher to leading high-volume culinary operations. Managed teams of up to 40 individuals in exceptionally high-pressure, time-sensitive environments."
          points={[
            "Optimized live workflow efficiency to handle peak volume seamlessly.",
            "Automated waste tracking processes, improving margin predictability.",
            "Trained and scaled staff, developing robust onboarding systems.",
            "Solved operational bottlenecks in real-time, analogous to addressing software bottlenecks and server load."
          ]}
        />

        <TimelineItem 
          role="Digital Intern"
          company="Tactica Communications"
          date="Previous"
          description="Applied early technical and operational logic within a communications framework, laying the groundwork for digital systems thinking."
          points={[]}
        />

      </div>

      {/* Brand Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 p-8 rounded-xl bg-gradient-to-br from-surface to-background border border-white/10"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Mise En Code</h2>
          <a href="https://www.youtube.com/@miseencode" className="text-accent hover:text-accent/80 text-sm font-medium">View Channel →</a>
        </div>
        <p className="text-secondary mb-4">
          A platform dedicated to engineering communication, systems education, and practical algorithm problem-solving. Translating the culinary concept of "mise en place" (everything in its place) to clean, organized code architecture.
        </p>
      </motion.div>
    </div>
  );
}

function TimelineItem({ role, company, date, description, points }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative"
    >
      <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-background border-2 border-accent rounded-full" />
      
      <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-3">
        <h3 className="text-2xl font-medium">{role}</h3>
        <span className="text-secondary md:ml-auto font-mono text-sm">{date}</span>
      </div>
      <h4 className="text-lg text-primary/80 mb-4">{company}</h4>
      <p className="text-secondary leading-relaxed mb-4">{description}</p>
      
      {points.length > 0 && (
        <ul className="space-y-2">
          {points.map((point: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-sm text-secondary">
              <span className="text-white/20 mt-0.5">—</span> {point}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}