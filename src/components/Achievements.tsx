"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { achievements } from "@/data/portfolioData";

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (isNaN(numeric)) {
      setDisplay(value);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      setDisplay(
        value.includes(".")
          ? current.toFixed(2)
          : Math.floor(current).toString()
      );
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplay(value.replace(/[^0-9.+]/g, ""));
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Numbers that reflect my journey so far
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/[0.04] transition"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                <AnimatedCounter value={item.value} />
              </div>
              <div className="text-sm font-medium text-white mb-1">{item.label}</div>
              <div className="text-xs text-slate-500 leading-snug">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
