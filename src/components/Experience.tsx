"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";

export default function Experience() {
  if (!experience.length) return null;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">
            Experience & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Roles where I contributed beyond code
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 sm:pl-12"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 to-transparent" />
              <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-violet-500/20" />

              <div className="glass rounded-2xl p-6 sm:p-8 hover:bg-white/[0.04] transition">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 text-sm mt-0.5">{exp.organization}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                    <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex gap-2 text-slate-300 text-sm leading-relaxed">
                      <span className="text-violet-400 mt-1.5 shrink-0">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
