"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy-load the heavy PDF viewer only when needed
const PdfViewer = dynamic(() => import("./PdfViewer"), { ssr: false });

export interface DesignItem {
  id: string;
  title: string;
  description: string;
  category: string;
  pdfPath: string;
  thumbnailColor: string; // fallback gradient color
}

// ── EDIT THIS ARRAY TO ADD / REMOVE YOUR PDFs ──────────────────────────────
// Place PDFs in /public/designs/ and add entries here.
const designs: DesignItem[] = [
  // ── BEDROOM DESIGNS ──────────────────────────────────────────────────────
  {
    id: "1",
    title: "Master Bedroom — Pankaj Residence",
    description: "Detailed elevation drawings and layout for the master bedroom with bespoke furniture and curated finishes.",
    category: "Bedroom",
    pdfPath: "/designs/BEDROOM-01{MR.PANKAJ}.pdf",
    thumbnailColor: "from-amber-900/20 to-stone-800/20",
  },
  {
    id: "2",
    title: "Bedroom 02 — Pankaj Residence",
    description: "Guest bedroom layout featuring custom storage solutions and warm neutral palette.",
    category: "Bedroom",
    pdfPath: "/designs/BEDROOM-02{MR. PANKAJ}.pdf",
    thumbnailColor: "from-rose-900/20 to-amber-800/20",
  },
  {
    id: "3",
    title: "Bedroom 03 — Pankaj Residence",
    description: "Third bedroom concept with space-optimised furniture arrangement and accent wall design.",
    category: "Bedroom",
    pdfPath: "/designs/BEDROOM-03{MR. PANKAJ}.pdf",
    thumbnailColor: "from-orange-900/20 to-yellow-800/20",
  },
  {
    id: "4",
    title: "Bedroom 04 — Pankaj Residence",
    description: "Children's bedroom with playful yet functional design elements and smart storage.",
    category: "Bedroom",
    pdfPath: "/designs/BEDROOM-04{MR. PANKAJ}.pdf",
    thumbnailColor: "from-sky-900/20 to-blue-800/20",
  },
  // ── CEILING DESIGNS ──────────────────────────────────────────────────────
  {
    id: "5",
    title: "Drawing Room — Ceiling Plan",
    description: "False ceiling layout for the drawing room with cove lighting and focal feature detailing.",
    category: "Ceiling",
    pdfPath: "/designs/CEILING OF DRAWING ROOM.pdf",
    thumbnailColor: "from-slate-800/20 to-zinc-700/20",
  },
  {
    id: "6",
    title: "Drawing Room — Ceiling (Alt)",
    description: "Alternative ceiling scheme with layered coffers and perimeter lighting.",
    category: "Ceiling",
    pdfPath: "/designs/DRAWING ROOM CEILING.pdf",
    thumbnailColor: "from-stone-800/20 to-neutral-700/20",
  },
  {
    id: "7",
    title: "Master Bedroom Ceiling — Plan",
    description: "Ceiling design for the master bedroom with recessed lighting and plaster detailing.",
    category: "Ceiling",
    pdfPath: "/designs/CEILING OF BEDROOM-01.pdf",
    thumbnailColor: "from-amber-800/20 to-yellow-700/20",
  },
  {
    id: "8",
    title: "Bedroom 02 — Ceiling Plan",
    description: "False ceiling with integrated LED strips and centre medallion for a refined finish.",
    category: "Ceiling",
    pdfPath: "/designs/CEILING OF BEDROOM-02.pdf",
    thumbnailColor: "from-rose-800/20 to-pink-700/20",
  },
  {
    id: "9",
    title: "Bedroom 03 — Ceiling Plan",
    description: "Clean geometric ceiling grid with accent cove lighting scheme.",
    category: "Ceiling",
    pdfPath: "/designs/CEILING OF BEDROOM-03.pdf",
    thumbnailColor: "from-teal-800/20 to-emerald-700/20",
  },
  {
    id: "10",
    title: "Bedroom 04 — Ceiling Plan",
    description: "Playful cloud-inspired ceiling design with soft diffuse lighting.",
    category: "Ceiling",
    pdfPath: "/designs/CEILING OF BEDROOM-04.pdf",
    thumbnailColor: "from-indigo-800/20 to-violet-700/20",
  },
  {
    id: "11",
    title: "Family Lounge — Ceiling Plan",
    description: "Open-plan ceiling design with zoned lighting for the family lounge area.",
    category: "Ceiling",
    pdfPath: "/designs/CEILING OF FAMILY LOUNGE.pdf",
    thumbnailColor: "from-emerald-900/20 to-teal-800/20",
  },
  {
    id: "12",
    title: "Kitchen & Dining — Ceiling Plan",
    description: "Practical yet elegant ceiling plan integrating kitchen and dining zones with task lighting.",
    category: "Ceiling",
    pdfPath: "/designs/CEILING OF KITCHEN & DINING.pdf",
    thumbnailColor: "from-lime-900/20 to-green-800/20",
  },
  // ── KITCHEN ──────────────────────────────────────────────────────────────
  {
    id: "13",
    title: "Kitchen — Pankaj Residence",
    description: "Modular kitchen layout with island counter, integrated appliances, and custom cabinetry elevations.",
    category: "Kitchen",
    pdfPath: "/designs/KITCHEN{MR.PANKAJ}.pdf",
    thumbnailColor: "from-orange-800/20 to-amber-700/20",
  },
];

const categories = ["All", ...Array.from(new Set(designs.map((d) => d.category)))];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? designs
      : designs.filter((d) => d.category === activeCategory);

  return (
    <section id="work" className="py-28 px-6 md:px-16 max-w-6xl mx-auto">
      {/* Section header */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-gold-400 font-medium">
          Portfolio
        </span>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-charcoal-900 mt-3 leading-tight">
          Selected Work
        </h2>
        <div className="mt-5 h-px w-16 bg-gold-400" />

        <p className="mt-6 text-charcoal-800/50 text-base max-w-lg leading-relaxed">
          Click any card to view the full design presentation as a PDF.
        </p>
      </motion.div>

      {/* Category filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap gap-2 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-300 border ${
              activeCategory === cat
                ? "bg-charcoal-900 text-cream-50 border-charcoal-900"
                : "border-cream-200 text-charcoal-800/60 hover:border-gold-400/40 hover:text-charcoal-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        key={activeCategory}
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {filtered.map((design) => (
          <motion.div
            key={design.id}
            variants={card}
            onClick={() => setSelectedDesign(design)}
            className="group cursor-pointer relative bg-cream-100 border border-cream-200 hover:border-gold-400/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            {/* Thumbnail placeholder */}
            <div
              className={`relative h-52 bg-gradient-to-br ${design.thumbnailColor} flex items-center justify-center overflow-hidden`}
            >
              <div className="absolute inset-0 bg-cream-100/5" />
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(13,13,13,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(13,13,13,0.3) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative z-10 text-center">
                <span className="text-gold-400/60 text-5xl block mb-2">◈</span>
                <span className="text-xs uppercase tracking-[0.25em] text-charcoal-800/40 font-medium">
                  {design.category}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-cream-50 text-sm uppercase tracking-[0.25em] font-medium">
                    View PDF
                  </span>
                  <div className="mt-2 w-10 h-px bg-gold-400 mx-auto" />
                </div>
              </div>
            </div>

            {/* Card body */}
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400/70 font-medium">
                {design.category}
              </span>
              <h3 className="font-display text-lg font-semibold text-charcoal-900 mt-1 leading-snug">
                {design.title}
              </h3>
              <p className="text-sm text-charcoal-800/50 mt-2 leading-relaxed">
                {design.description}
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs text-gold-400 font-medium uppercase tracking-widest">
                <span>Open</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* PDF modal */}
      {selectedDesign && (
        <PdfViewer
          url={selectedDesign.pdfPath}
          title={selectedDesign.title}
          onClose={() => setSelectedDesign(null)}
        />
      )}
    </section>
  );
}

