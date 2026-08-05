"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Academic journey and achievements
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((edu, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20 sm:-translate-x-1/2 z-10" />

                  <div
                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      isLeft ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 hover:bg-white/[0.04] transition text-left">
                      <div className="flex items-center gap-2 mb-2 text-violet-400">
                        <GraduationCap className="w-4 h-4" />
                        <span className="text-xs font-medium tracking-wide uppercase">
                          {edu.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-cyan-400 text-sm mb-2">
                        {edu.institution} · {edu.location}
                      </p>
                      <p className="text-emerald-400 text-sm font-medium mb-2">
                        {edu.score}
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
