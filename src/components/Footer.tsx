"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg text-cream-100 tracking-wide">
          Kanishka Singh
        </span>

        <span className="text-cream-200/30 text-xs tracking-wide">
          © {year} · Interior Designer · Delhi, India
        </span>

        <div className="flex items-center gap-6">
          <a
            href="mailto:kanishkasingh1915@gmail.com"
            className="text-xs text-cream-200/40 hover:text-gold-400 transition-colors uppercase tracking-widest"
          >
            Email
          </a>
          <a
            href="tel:+919999608152"
            className="text-xs text-cream-200/40 hover:text-gold-400 transition-colors uppercase tracking-widest"
          >
            Phone
          </a>
        </div>
      </div>
    </footer>
  );
}

