"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Design & Space",
    icon: "◈",
    skills: [
      "Space Planning",
      "2D Drafting",
      "Architectural Layouts",
      "Bespoke Furniture Design",
      "Lighting Design",
      "Color Theory",
    ],
  },
  {
    category: "Software",
    icon: "◎",
    skills: [
      "AutoCAD",
      "Adobe Photoshop",
      "Digital Rendering",
      "MS Office Suite",
    ],
  },
  {
    category: "Project Management",
    icon: "◉",
    skills: [
      "Client Consultation",
      "On-Site Supervision",
      "Vendor Coordination",
      "Timeline Management",
    ],
  },
  {
    category: "Materials & Styling",
    icon: "◇",
    skills: [
      "Soft Furnishings",
      "Millwork Detailing",
      "Sustainable Sourcing",
      "Mood Board Curation",
      "Quality Control",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 px-6 md:px-16 max-w-6xl mx-auto">
      {/* Section header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-gold-400 font-medium">
          Expertise
        </span>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-charcoal-900 mt-3 leading-tight">
          Skill Set
        </h2>
        <div className="mt-5 h-px w-16 bg-gold-400 line-grow" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={cardVariant}
            className="group relative bg-cream-100 border border-cream-200 p-7 hover:border-gold-400/40 transition-all duration-500 hover:shadow-[0_4px_40px_rgba(201,168,76,0.08)]"
          >
            {/* Icon */}
            <span className="text-gold-400 text-2xl block mb-4 group-hover:scale-110 transition-transform duration-300">
              {group.icon}
            </span>

            {/* Category title */}
            <h3 className="font-display text-lg font-semibold text-charcoal-900 mb-5 leading-snug">
              {group.category}
            </h3>

            {/* Skills list */}
            <ul className="space-y-2.5">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-start gap-2.5 text-sm text-charcoal-800/70">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-400 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

