"use client";

import { motion } from "framer-motion";
import { codingProfiles } from "@/data/portfolioData";
import { Code2, ExternalLink } from "lucide-react";

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Practice, solve, and grow on these platforms
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {codingProfiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/[0.06] transition group"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center text-violet-300 group-hover:scale-110 transition">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white mb-1">{profile.name}</h3>
              <p className="text-xs text-slate-500 mb-3 truncate">{profile.username}</p>
              <span className="inline-flex items-center gap-1 text-xs text-cyan-400 group-hover:underline">
                Visit <ExternalLink className="w-3 h-3" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
