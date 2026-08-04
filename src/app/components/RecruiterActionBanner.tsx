import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Mail, Linkedin, Send, Copy, Check } from "lucide-react";

interface RecruiterActionBannerProps {
  onHireMeClick: () => void;
}

export function RecruiterActionBanner({ onHireMeClick }: RecruiterActionBannerProps) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("modipreyal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 z-50 md:max-w-md w-auto"
        >
          <div
            className="glass-card rounded-2xl p-4 flex flex-col gap-3 shadow-2xl"
            style={{
              background: "rgba(21, 21, 21, 0.92)",
              border: "1px solid rgba(37, 99, 235, 0.22)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(37, 99, 235, 0.1)",
            }}
          >
            {/* Header info */}
            <button
              onClick={onHireMeClick}
              className="flex items-center gap-3 w-full text-left transition-all duration-200 hover:opacity-80 group/banner-header"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border border-blue-500/20 group-hover/banner-header:border-emerald-400/40 transition-colors">
                <img
                  src="/profile.png"
                  alt="Preyal Modi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className="text-white text-xs font-semibold group-hover/banner-header:text-emerald-400 transition-colors"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Preyal Modi
                </p>
                <p className="text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider">
                  Available for Internships &amp; Jobs
                </p>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </button>

            {/* Quick CTAs */}
            <div className="grid grid-cols-3 gap-2">
              {/* Resume download */}
              <a
                href="/resume.pdf"
                download
                className="flex flex-col items-center justify-center py-2.5 rounded-xl text-center group transition-all duration-200 hover:bg-white/[0.04]"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <Download className="w-4 h-4 text-blue-400 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] text-white font-medium">Resume</span>
              </a>

              {/* Copy/Click Email */}
              <button
                onClick={copyEmail}
                className="flex flex-col items-center justify-center py-2.5 rounded-xl text-center group transition-all duration-200 hover:bg-white/[0.04]"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400 mb-1" />
                ) : (
                  <Copy className="w-4 h-4 text-violet-400 mb-1 group-hover:scale-110 transition-transform" />
                )}
                <span className="text-[10px] text-white font-medium">
                  {copied ? "Copied!" : "Copy Email"}
                </span>
              </button>

              {/* LinkedIn URL */}
              <a
                href="https://www.linkedin.com/in/preyalmodi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-2.5 rounded-xl text-center group transition-all duration-200 hover:bg-white/[0.04]"
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <Linkedin className="w-4 h-4 text-sky-400 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] text-white font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
