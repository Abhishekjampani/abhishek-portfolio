"use client";

import { motion } from "framer-motion";
import { about, personalInfo } from "@/data/portfolioData";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A quick look at who I am and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Professional Summary</h3>
            <p className="text-slate-300 leading-relaxed mb-6">{about.summary}</p>
            <p className="text-slate-400 leading-relaxed italic border-l-2 border-violet-500 pl-4">
              {about.objective}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Key Highlights</h3>
            {about.highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 glass rounded-xl p-4 hover:bg-white/5 transition"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">20 Apr</div>
                <div className="text-xs text-slate-500 mt-1">Date of Birth</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">B.Tech</div>
                <div className="text-xs text-slate-500 mt-1">CSE · KL University</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
