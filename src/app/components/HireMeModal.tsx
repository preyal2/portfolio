import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Download,
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  Briefcase,
  MapPin,
  Calendar,
  Sparkles,
  MessageSquare,
  Award,
  Code2,
} from "lucide-react";

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HireMeModal({ isOpen, onClose }: HireMeModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText("modipreyal@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMessageClick = () => {
    onClose();
    setTimeout(() => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="hire-me-overlay"
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(16px)" }}
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl my-8"
            style={{
              background: "#0D0D14",
              border: "1px solid rgba(37, 99, 235, 0.25)",
              boxShadow: "0 0 60px rgba(37, 99, 235, 0.15), 0 20px 50px rgba(0, 0, 0, 0.7)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top gradient border */}
            <div
              className="h-1.5 w-full"
              style={{
                background: "linear-gradient(90deg, #2563EB, #7C3AED, #38BDF8)",
              }}
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "#A1A1AA",
              }}
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Content */}
            <div className="p-6 md:p-8 pb-4">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left">
                {/* Profile Pic with Glow */}
                <div className="relative flex-shrink-0">
                  <div
                    className="absolute inset-[-2px] rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                      filter: "blur(3px)",
                    }}
                  />
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 relative">
                    <img
                      src="/profile.png"
                      alt="Preyal Modi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0D0D14] animate-pulse" />
                </div>

                {/* Profile details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-1.5">
                    <span
                      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full"
                      style={{
                        background: "rgba(16, 185, 129, 0.12)",
                        border: "1px solid rgba(16, 185, 129, 0.25)",
                        color: "#34D399",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      Immediate Joiner
                    </span>
                    <span
                      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full"
                      style={{
                        background: "rgba(37, 99, 235, 0.12)",
                        border: "1px solid rgba(37, 99, 235, 0.25)",
                        color: "#93C5FD",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      Open to Remote / Relocate
                    </span>
                  </div>
                  <h3
                    className="text-white text-2xl font-extrabold"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Preyal Modi
                  </h3>
                  <p className="text-[#38BDF8] text-sm font-semibold mt-0.5">
                    Software Engineering | AI | ML Roles
                  </p>
                  <p className="text-[#A1A1AA] text-xs mt-2 leading-relaxed">
                    Actively seeking Internship &amp; Full-Time opportunities. Experienced in designing machine learning pipelines and engineering responsive full-stack applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-white/5" />

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 divide-x divide-white/5 bg-white/[0.01] py-4 border-b border-white/5 text-center">
              <div>
                <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider font-semibold">Roles</p>
                <p className="text-white text-xs font-bold mt-1">SWE, AI &amp; ML</p>
              </div>
              <div>
                <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider font-semibold">Availability</p>
                <p className="text-emerald-400 text-xs font-bold mt-1">Immediate</p>
              </div>
              <div>
                <p className="text-[10px] text-[#8E8E93] uppercase tracking-wider font-semibold">Location</p>
                <p className="text-white text-xs font-bold mt-1">India / Remote</p>
              </div>
            </div>

            {/* Body Content */}
            <div className="p-6 md:p-8 pt-6 flex flex-col md:flex-row gap-6">
              {/* Left Column - Why Hire Me */}
              <div className="flex-1 space-y-4">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Why Hire Preyal?
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-md bg-emerald-500/10 flex items-center justify-center flex-shrink-0 text-emerald-400 mt-0.5">
                      <Briefcase className="w-3 h-3" />
                    </span>
                    <div className="text-xs">
                      <span className="font-semibold text-white block">3+ Professional Internships</span>
                      <span className="text-[#A1A1AA]">Completed internships in Emerging Tech (Edunet × AICTE), ML (InfoLabz), and Web Dev (Flu Social).</span>
                    </div>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-md bg-violet-500/10 flex items-center justify-center flex-shrink-0 text-violet-400 mt-0.5">
                      <Code2 className="w-3 h-3" />
                    </span>
                    <div className="text-xs">
                      <span className="font-semibold text-white block">Strong Coding &amp; CS Fundamentals</span>
                      <span className="text-[#A1A1AA]">Computer Engineering student at GTU. Active LeetCode daily coder solving algorithmic problems.</span>
                    </div>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-md bg-sky-500/10 flex items-center justify-center flex-shrink-0 text-sky-400 mt-0.5">
                      <Award className="w-3 h-3" />
                    </span>
                    <div className="text-xs">
                      <span className="font-semibold text-white block">30+ Certified Credentials</span>
                      <span className="text-[#A1A1AA]">IBM SkillsBuild badges, NPTEL IIT Roorkee, AICTE &amp; GTU-ITR certifications.</span>
                    </div>
                  </li>
                </ul>

                {/* Opportunity Selector for Recruiters */}
                <div className="pt-2">
                  <p className="text-white font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5" style={{ fontFamily: "JetBrains Mono,monospace" }}>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Quick Opportunity Reachout:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { title: "💼 Full-Time Offer", desc: "SWE / AI / ML Engineer", subject: "Job Offer / Opportunity" },
                      { title: "🚀 Internship Role", desc: "Summer / Project / Remote", subject: "Internship Opportunity" },
                    ].map(({ title, desc, subject }) => (
                      <a
                        key={title}
                        href={`mailto:modipreyal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Hi Preyal,\n\nWe came across your portfolio and would love to discuss an opportunity with you.\n\nCompany:\nRole:\n\nBest regards,")}`}
                        className="p-2.5 rounded-xl text-left transition-all duration-200 hover:-translate-y-0.5 group"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        <p className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">{title}</p>
                        <p className="text-[10px] text-[#A1A1AA] mt-0.5">{desc}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Actions Panel */}
              <div className="w-full md:w-[220px] flex-shrink-0 flex flex-col gap-2.5">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  Recruiter Actions
                </h4>

                {/* Download Resume */}
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl justify-center font-bold text-white text-xs transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #2563EB, #7C3AED)",
                    boxShadow: "0 4px 15px rgba(37, 99, 235, 0.3)",
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>

                {/* Email Copy/Click */}
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl justify-center font-bold text-white text-xs transition-all duration-200 hover:bg-white/[0.04]"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      Email Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-violet-400" />
                      Copy Direct Email
                    </>
                  )}
                </button>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/preyalmodi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl justify-center font-bold text-white text-xs transition-all duration-200 hover:bg-white/[0.04]"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  Connect on LinkedIn
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/preyal2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl justify-center font-bold text-white text-xs transition-all duration-200 hover:bg-white/[0.04]"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  <Github className="w-4 h-4 text-[#A1A1AA]" />
                  Visit GitHub Profile
                </a>

                {/* Scroll to Contact Form */}
                <button
                  onClick={handleMessageClick}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl justify-center font-bold text-[#7DD3FC] text-xs transition-all duration-300 hover:bg-sky-400/10"
                  style={{
                    background: "rgba(56, 189, 248, 0.06)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                  }}
                >
                  <Mail className="w-4 h-4" />
                  Send Instant Message
                </button>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="bg-[#0A0A0E] px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] text-[#8E8E93] border-t border-white/5 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" /> Mehsana, Gujarat, India (Open to relocation)
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-400" /> Available: Immediately (July 2026 onwards)
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
