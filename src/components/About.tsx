"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Projects Delivered" },
    { number: "3", label: "Design Studios" },
  ];

  return (
    <section id="about" className="py-28 px-6 md:px-16 bg-charcoal-900 text-cream-50">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold-400 font-medium">
              About Me
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-3 mb-8 leading-tight">
              Designing with
              <br />
              <span className="text-gold-400">Purpose</span>
            </h2>
            <p className="text-cream-200/70 leading-relaxed text-base mb-6">
              Detail-oriented and creative Interior Designer with over{" "}
              <strong className="text-cream-100 font-medium">10 years</strong> of professional
              experience conceptualizing and executing functional, aesthetically pleasing
              residential and commercial spaces.
            </p>
            <p className="text-cream-200/60 leading-relaxed text-base">
              Proficient in technical drafting, space planning, bespoke furniture design,
              and multi-disciplinary project management. I translate client vision into
              practical designs — managing timelines and vendor coordination from concept
              to handover.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <span className="text-xs tracking-[0.25em] uppercase text-cream-200/40">Based in</span>
              <span className="text-xs tracking-[0.1em] text-cream-100">Delhi, India</span>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="border border-cream-100/10 p-8 hover:border-gold-400/30 transition-all duration-400 group"
              >
                <span className="font-display text-5xl font-bold text-gold-400 group-hover:scale-105 inline-block transition-transform duration-300">
                  {stat.number}
                </span>
                <p className="text-sm text-cream-200/50 uppercase tracking-widest mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-20 border-t border-cream-100/10 pt-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-gold-400 font-medium block mb-10">
            Experience
          </span>
          <div className="space-y-8">
            {[
              {
                role: "Interior Designer",
                company: "Gomati Interiors",
                period: "2024 — Present",
                location: "Gurugram",
                note: "High-end residential & commercial",
              },
              {
                role: "Interior Designer",
                company: "Maxim Design",
                period: "2013 — 2022",
                location: "Vasundhara",
                note: "",
              },
              {
                role: "Interior Designer",
                company: "Dhingra Associates",
                period: "2012 — 2013",
                location: "Delhi",
                note: "",
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between group"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                  <div>
                    <span className="text-cream-100 font-medium">{exp.role}</span>
                    <span className="text-cream-200/40 mx-2">—</span>
                    <span className="text-cream-200/70">{exp.company}</span>
                    {exp.note && (
                      <span className="ml-3 text-xs text-gold-400/70 italic">{exp.note}</span>
                    )}
                  </div>
                </div>
                <span className="text-sm text-cream-200/30 ml-5 sm:ml-0 mt-1 sm:mt-0 tracking-wide">
                  {exp.period} · {exp.location}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

