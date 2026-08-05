"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Subtle floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-cyan-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {personalInfo.availability}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] leading-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 font-medium mb-4">
              {personalInfo.title}
            </p>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-violet-400" />
                {personalInfo.location}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium hover:opacity-90 transition shadow-lg shadow-violet-500/30"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-slate-200 font-medium hover:bg-white/10 transition"
              >
                Get in Touch
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-10">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass hover:bg-white/10 text-slate-400 hover:text-white transition"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass hover:bg-white/10 text-slate-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl glass hover:bg-white/10 text-slate-400 hover:text-white transition"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/30 to-cyan-500/30 rounded-full blur-2xl" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-violet-500/30 shadow-2xl shadow-violet-500/20">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-xs font-medium text-cyan-300 whitespace-nowrap">
                9.02 CGPA · KL University
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
