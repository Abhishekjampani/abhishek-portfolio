"use client";

import { personalInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="text-lg font-bold font-[family-name:var(--font-display)] gradient-text mb-1">
              {personalInfo.name}
            </div>
            <p className="text-sm text-slate-500">{personalInfo.title}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-600 flex items-center justify-center gap-1">
          © {year} {personalInfo.name}. Built with{" "}
          <Heart className="w-3 h-3 text-violet-500 inline" /> Next.js & Tailwind
        </div>
      </div>
    </footer>
  );
}
