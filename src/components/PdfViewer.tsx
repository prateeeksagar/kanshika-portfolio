"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// react-pdf v11+ — use the bundled worker via URL constructor
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface PdfViewerProps {
  url: string;
  title: string;
  onClose: () => void;
}

export default function PdfViewer({ url, title, onClose }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock body scroll when modal open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  }, []);

  const prevPage = () => setCurrentPage((p) => Math.max(1, p - 1));
  const nextPage = () => setCurrentPage((p) => Math.min(numPages, p + 1));

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex flex-col bg-charcoal-900/95 backdrop-blur-sm"
        onClick={handleBackdropClick}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream-100/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-gold-400 text-sm">◈</span>
            <span className="text-cream-100 font-medium text-sm tracking-wide">{title}</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Zoom controls */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setScale((s) => Math.max(0.5, s - 0.2))}
                className="text-cream-200/50 hover:text-gold-400 transition-colors text-lg w-7 h-7 flex items-center justify-center"
              >
                −
              </button>
              <span className="text-cream-200/40 text-xs w-10 text-center">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={() => setScale((s) => Math.min(2, s + 0.2))}
                className="text-cream-200/50 hover:text-gold-400 transition-colors text-lg w-7 h-7 flex items-center justify-center"
              >
                +
              </button>
            </div>

            {/* Page count */}
            {numPages > 0 && (
              <span className="text-cream-200/40 text-xs tracking-wide">
                {currentPage} / {numPages}
              </span>
            )}

            {/* Download */}
            <a
              href={url}
              download
              className="text-xs uppercase tracking-widest text-cream-200/50 hover:text-gold-400 transition-colors font-medium border border-cream-100/10 hover:border-gold-400/30 px-3 py-1.5"
            >
              Download
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="text-cream-200/50 hover:text-cream-100 transition-colors text-xl leading-none"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF content */}
        <div className="flex-1 overflow-auto flex flex-col items-center py-8 px-4">
          {loading && (
            <div className="flex flex-col items-center gap-4 mt-24">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-2 border-gold-400/30 border-t-gold-400 rounded-full"
              />
              <span className="text-cream-200/40 text-xs tracking-widest uppercase">
                Loading
              </span>
            </div>
          )}

          <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={null}
            className="flex flex-col items-center gap-6"
          >
            {numPages > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="shadow-2xl"
              >
                <Page
                  pageNumber={currentPage}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </motion.div>
            )}
          </Document>
        </div>

        {/* Footer navigation */}
        {numPages > 1 && (
          <div className="flex items-center justify-center gap-6 py-4 border-t border-cream-100/10 flex-shrink-0">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="text-cream-200/50 hover:text-gold-400 disabled:opacity-20 disabled:cursor-not-allowed transition-colors text-sm tracking-widest uppercase font-medium px-4 py-2"
            >
              ← Prev
            </button>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: numPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentPage === i + 1 ? "bg-gold-400 scale-125" : "bg-cream-100/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              disabled={currentPage === numPages}
              className="text-cream-200/50 hover:text-gold-400 disabled:opacity-20 disabled:cursor-not-allowed transition-colors text-sm tracking-widest uppercase font-medium px-4 py-2"
            >
              Next →
            </button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

