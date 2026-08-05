"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolioData";
import { Code2, Layers, Database, Wrench, Cloud } from "lucide-react";

const categories = [
  { key: "languages" as const, title: "Languages", icon: Code2, color: "text-violet-400" },
  { key: "frameworks" as const, title: "Frameworks", icon: Layers, color: "text-cyan-400" },
  { key: "databases" as const, title: "Databases", icon: Database, color: "text-emerald-400" },
  { key: "tools" as const, title: "Tools & IDEs", icon: Wrench, color: "text-amber-400" },
  { key: "cloud" as const, title: "Cloud", icon: Cloud, color: "text-sky-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies I work with to build modern applications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const items = skills[cat.key];
            if (!items || items.length === 0) return null;
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass rounded-2xl p-6 hover:bg-white/[0.04] transition group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-white/5 ${cat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-white">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
