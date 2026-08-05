"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/portfolioData";
import { Award, Calendar } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Cloud, database, and language credentials
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.04] transition group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-violet-500/15 text-violet-400 group-hover:bg-violet-500/25 transition">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400 text-xs mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                    {cert.validUntil && ` · Valid until ${cert.validUntil}`}
                  </div>
                  {cert.score && (
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {cert.score}
                    </p>
                  )}
                  {cert.credentialId && (
                    <p className="text-[10px] text-slate-600 mt-1 font-mono truncate">
                      ID: {cert.credentialId}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
