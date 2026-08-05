"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolioData";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const all = projects;

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Academic and personal work showcasing full-stack and AI capabilities
          </p>
        </motion.div>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featured.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative glass rounded-2xl overflow-hidden hover:bg-white/[0.04] transition"
            >
              {/* Gradient header */}
              <div
                className={`h-40 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <Sparkles className="w-12 h-12 text-white/80 relative z-10" />
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/40 text-xs text-white/90 backdrop-blur">
                  {project.period}
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs text-cyan-400 mb-1">{project.subtitle}</p>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-300 transition">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/5 text-xs text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* All projects (same for now) */}
        {all.length > featured.length && (
          <>
            <h3 className="text-xl font-semibold text-center mb-8 text-slate-300">
              All Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {all.map((project) => (
                <div
                  key={project.id}
                  className="glass rounded-xl p-5 hover:bg-white/[0.04] transition"
                >
                  <h4 className="font-medium text-white mb-1">{project.title}</h4>
                  <p className="text-xs text-slate-500 mb-3">{project.period}</p>
                  <p className="text-sm text-slate-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
