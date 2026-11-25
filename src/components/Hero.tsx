"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0d0d0d 1px, transparent 1px), linear-gradient(90deg, #0d0d0d 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl"
      >
        {/* Eyebrow */}
        <motion.div variants={item} className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-12 bg-gold-400" />
          <span className="text-xs tracking-[0.3em] uppercase text-gold-400 font-medium">
            Interior Designer
          </span>
          <span className="h-px w-12 bg-gold-400" />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.05] tracking-tight text-charcoal-900 mb-6"
        >
          Kanishka
          <br />
          <span className="shimmer-text">Singh</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-charcoal-800/60 font-light tracking-wide max-w-xl mx-auto leading-relaxed mb-12"
        >
          10+ years crafting spaces that balance{" "}
          <em className="not-italic text-charcoal-800/80">function</em> with{" "}
          <em className="not-italic text-charcoal-800/80">beauty</em> — from Delhi to Gurugram.
        </motion.p>

        {/* CTA */}
        <motion.div variants={item} className="flex items-center justify-center gap-4">
          <button
            onClick={scrollToWork}
            className="group relative px-8 py-3.5 bg-charcoal-900 text-cream-50 text-sm tracking-widest uppercase font-medium overflow-hidden transition-all duration-300 hover:bg-charcoal-800"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-gold-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-charcoal-900 transition-colors duration-300" />
          </button>

          <a
            href="mailto:kanishkasingh1915@gmail.com"
            className="text-sm tracking-widest uppercase font-medium text-charcoal-800 hover:text-gold-400 transition-colors duration-300 border-b border-charcoal-800/30 hover:border-gold-400 pb-0.5"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-charcoal-800/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-gold-400/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}

