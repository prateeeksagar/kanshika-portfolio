"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 60) {
        navRef.current.classList.add("nav-scrolled");
      } else {
        navRef.current.classList.remove("nav-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-500"
      style={{
        backdropFilter: "blur(0px)",
      }}
    >
      <style>{`
        .nav-scrolled {
          background: rgba(250, 249, 247, 0.92) !important;
          backdrop-filter: blur(12px) !important;
          border-bottom: 1px solid rgba(201, 168, 76, 0.2);
          padding-top: 14px !important;
          padding-bottom: 14px !important;
        }
      `}</style>

      <motion.span
        className="font-display text-lg tracking-wide text-charcoal-900"
        whileHover={{ scale: 1.02 }}
      >
        KS
      </motion.span>

      <div className="flex items-center gap-8">
        {[
          { label: "About", id: "about" },
          { label: "Skills", id: "skills" },
          { label: "Work", id: "work" },
          { label: "Contact", id: "contact" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="text-sm tracking-wider text-charcoal-800 hover:text-gold-400 transition-colors duration-300 uppercase font-medium"
          >
            {item.label}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}

