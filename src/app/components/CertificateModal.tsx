import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Download, ExternalLink, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Certificate } from "./Certificates";

interface CertificateModalProps {
  cert: Certificate | null;
  allCerts: Certificate[];
  onClose: () => void;
  onNavigate: (cert: Certificate) => void;
}

export function CertificateModal({
  cert,
  allCerts,
  onClose,
  onNavigate,
}: CertificateModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        const idx = allCerts.findIndex((c) => c.title === cert?.title);
        if (idx < allCerts.length - 1) onNavigate(allCerts[idx + 1]);
      }
      if (e.key === "ArrowLeft") {
        const idx = allCerts.findIndex((c) => c.title === cert?.title);
        if (idx > 0) onNavigate(allCerts[idx - 1]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cert, allCerts, onClose, onNavigate]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (cert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [cert]);

  if (!cert) return null;

  const currentIndex = allCerts.findIndex((c) => c.title === cert.title);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allCerts.length - 1;

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          key="modal-overlay"
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)" }}
          onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        >
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
            style={{
              background: "#0D0D14",
              border: `1px solid ${cert.color}30`,
              boxShadow: `0 0 80px ${cert.color}20, 0 40px 80px rgba(0,0,0,0.6)`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top gradient bar */}
            <div
              className="h-1 w-full"
              style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.color}88)` }}
            />

            {/* Header */}
            <div className="flex items-start justify-between p-5 pb-4">
              <div className="flex items-center gap-3 flex-1 min-w-0 pr-4">
                <span className="text-3xl flex-shrink-0">{cert.emoji}</span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <span
                      className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                      style={{
                        background: `${cert.color}18`,
                        border: `1px solid ${cert.color}28`,
                        color: cert.color,
                        fontFamily: "JetBrains Mono,monospace",
                      }}
                    >
                      {cert.issuer}
                    </span>
                    <span className="text-[#71717A] text-xs">{cert.date}</span>
                    {cert.score && (
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(16,185,129,0.15)",
                          border: "1px solid rgba(16,185,129,0.3)",
                          color: "#34D399",
                          fontFamily: "JetBrains Mono,monospace",
                        }}
                      >
                        {cert.score.startsWith("ID:") || cert.score.startsWith("Cert") ? cert.score : `Score: ${cert.score}`}
                      </span>
                    )}
                  </div>
                  <h3
                    className="text-white font-bold text-base leading-snug"
                    style={{ fontFamily: "Poppins,sans-serif" }}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm mt-0.5">{cert.type}</p>
                </div>
              </div>

              {/* Close */}
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#A1A1AA",
                }}
                aria-label="Close certificate viewer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Certificate Image */}
            <div
              className="relative mx-5 mb-4 rounded-xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                minHeight: "260px",
              }}
            >
              {cert.imagePath ? (
                <img
                  src={cert.imagePath}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-auto block"
                  style={{ maxHeight: "500px", objectFit: "contain" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    const parent = (e.target as HTMLImageElement).parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:260px;gap:16px;padding:32px">
                          <div style="font-size:48px">${cert.emoji}</div>
                          <p style="color:#A1A1AA;text-align:center;font-size:14px;line-height:1.6;font-family:Inter,sans-serif">
                            Certificate image not uploaded yet.<br/>
                            <span style="color:#71717A;font-size:12px;font-family:JetBrains Mono,monospace">
                              Place the file at: public/certificates/${cert.imagePath?.split("/").pop()}
                            </span>
                          </p>
                        </div>
                      `;
                    }
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-64 gap-4 p-8">
                  <span className="text-6xl">{cert.emoji}</span>
                  <div className="text-center">
                    <p className="text-white font-semibold mb-2" style={{ fontFamily: "Poppins,sans-serif" }}>
                      {cert.title}
                    </p>
                    <p className="text-[#A1A1AA] text-sm mb-3">
                      Upload your certificate image to display it here.
                    </p>
                    <code
                      className="text-xs px-3 py-1.5 rounded-lg"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#38BDF8",
                        fontFamily: "JetBrains Mono,monospace",
                      }}
                    >
                      public/certificates/
                    </code>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 px-5 pb-5">
              {cert.imagePath && (
                <a
                  href={cert.imagePath}
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)`,
                    boxShadow: `0 4px 15px ${cert.color}30`,
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download Certificate
                </a>
              )}
              {cert.imagePath && (
                <a
                  href={cert.imagePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#FFFFFF",
                  }}
                >
                  <ZoomIn className="w-4 h-4" />
                  Open Full Size
                </a>
              )}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(124,58,237,0.2))",
                    border: "1px solid rgba(56,189,248,0.4)",
                    color: "#38BDF8",
                    boxShadow: "0 0 20px rgba(56,189,248,0.15)",
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Verify on Credly
                </a>
              )}
              {!cert.imagePath && !cert.credentialUrl && (
                <div
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "#71717A",
                  }}
                >
                  📂 Add certificate image to /public/certificates/
                </div>
              )}

              {/* Navigation */}
              <div className="flex gap-2 ml-auto">
                <button
                  onClick={() => hasPrev && onNavigate(allCerts[currentIndex - 1])}
                  disabled={!hasPrev}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#FFFFFF",
                  }}
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => hasNext && onNavigate(allCerts[currentIndex + 1])}
                  disabled={!hasNext}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#FFFFFF",
                  }}
                  aria-label="Next certificate"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Dot navigation */}
            <div className="flex justify-center gap-1.5 pb-4">
              {allCerts.map((c, i) => (
                <button
                  key={c.title}
                  onClick={() => onNavigate(allCerts[i])}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === currentIndex ? "20px" : "6px",
                    height: "6px",
                    background: i === currentIndex ? cert.color : "rgba(255,255,255,0.15)",
                  }}
                  aria-label={`View ${c.title}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
