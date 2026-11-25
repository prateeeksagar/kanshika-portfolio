"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 px-6 md:px-16 bg-cream-100">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-gold-400 font-medium">
              Contact
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-charcoal-900 mt-3 leading-tight">
              Let&apos;s work
              <br />
              together.
            </h2>
            <div className="mt-5 h-px w-16 bg-gold-400" />

            <p className="mt-8 text-charcoal-800/60 text-base max-w-md leading-relaxed">
              Whether you&apos;re looking to transform a residential space or craft an inspiring
              commercial environment — I&apos;d love to discuss your vision.
            </p>
          </motion.div>

          {/* Right: Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-6"
          >
            {[
              {
                label: "Email",
                value: "kanishkasingh1915@gmail.com",
                href: "mailto:kanishkasingh1915@gmail.com",
              },
              {
                label: "Phone",
                value: "+91 9999608152",
                href: "tel:+919999608152",
              },
              {
                label: "Location",
                value: "Delhi, India",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border-b border-charcoal-800/10 pb-6 flex items-start justify-between group"
              >
                <span className="text-xs uppercase tracking-[0.25em] text-charcoal-800/40 font-medium pt-1">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-charcoal-900 font-medium hover:text-gold-400 transition-colors duration-300 text-right"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-charcoal-900 font-medium text-right">
                    {item.value}
                  </span>
                )}
              </div>
            ))}

            <motion.a
              href="mailto:kanishkasingh1915@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex items-center gap-3 bg-charcoal-900 text-cream-50 px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-gold-400 hover:text-charcoal-900 transition-all duration-300"
            >
              Send a Message
              <span>→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

