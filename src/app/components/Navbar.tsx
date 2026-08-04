import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code2, Download, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Home",           href: "#home" },
  { label: "About",          href: "#about" },
  { label: "Skills",         href: "#skills" },
  { label: "Experience",     href: "#experience" },
  { label: "Projects",       href: "#projects" },
  { label: "LeetCode",       href: "#coding" },
  { label: "Certifications", href: "#certificates" },
  { label: "Education",      href: "#education" },
  { label: "Contact",        href: "#contact" },
];

interface NavbarProps {
  onHireMeClick: () => void;
  isLight?: boolean;
  onToggleTheme?: () => void;
}

export function Navbar({ onHireMeClick, isLight = false, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(navLinks.find((l) => l.href === `#${id}`)?.label || "Home");
          }
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNav = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Scroll progress indicator */}
      <div
        className="absolute top-0 left-0 h-[2px]"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #2563EB, #7C3AED, #38BDF8)",
          transition: "width 0.1s linear",
          boxShadow: "0 0 8px rgba(37,99,235,0.7)",
        }}
      />

      <div
        className="transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(9,9,11,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("Home", "#home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 via-violet-600 to-sky-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-600/50 transition-shadow duration-300">
              <Code2 className="w-4 h-4 text-white" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600 via-violet-600 to-sky-500 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            </div>
            <span className="font-bold text-white text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
              Preyal<span className="gradient-text">.</span>
            </span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.label, link.href)}
                  className="relative px-2.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-lg group"
                  style={{
                    color: active === link.label ? "#FFFFFF" : "#A1A1AA",
                  }}
                >
                  <span className="relative z-10">{link.label}</span>
                  {active === link.label && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "rgba(37,99,235,0.12)",
                        border: "1px solid rgba(37,99,235,0.2)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={onHireMeClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-extrabold tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #10B981, #059669)",
                border: "1px solid rgba(52,211,153,0.4)",
                boxShadow: "0 0 12px rgba(16,185,129,0.25)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Hire Me
            </button>
            <a
              href="https://www.linkedin.com/in/preyalmodi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400"
              style={{
                background: "rgba(37,99,235,0.14)",
                border: "1px solid rgba(37,99,235,0.28)",
              }}
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-semibold hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
            {/* Theme Toggle Button */}
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: isLight ? "rgba(37,99,235,0.08)" : "rgba(255,255,255,0.08)",
                  border: isLight ? "1px solid rgba(37,99,235,0.2)" : "1px solid rgba(255,255,255,0.12)",
                  color: isLight ? "#2563EB" : "#F59E0B",
                }}
                title={isLight ? "Switch to Dark Theme" : "Switch to Light Theme"}
              >
                {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "rgba(9,9,11,0.95)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.label, link.href)}
                  className="text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: active === link.label ? "#FFFFFF" : "#A1A1AA",
                    background: active === link.label ? "rgba(59,130,246,0.1)" : "transparent",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="flex flex-col gap-2.5 mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <button
                  onClick={onHireMeClick}
                  className="w-full text-center py-2.5 rounded-full text-sm font-bold text-white flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #10B981, #059669)",
                    boxShadow: "0 0 10px rgba(16,185,129,0.2)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  Hire Me / Recruiter Hub
                </button>
                <div className="flex gap-2 w-full">
                  <a
                    href="https://www.linkedin.com/in/preyalmodi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-full text-xs font-semibold text-white"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="flex-1 text-center py-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-semibold"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
