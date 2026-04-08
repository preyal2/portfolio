import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("Home", "#home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span
            className={`font-semibold transition-colors ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
          >
            Preyal Modi
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.label, link.href)}
                className={`relative text-sm font-medium transition-colors group ${
                  scrolled ? "text-slate-600 hover:text-blue-600" : "text-white/80 hover:text-white"
                } ${active === link.label ? (scrolled ? "text-blue-600" : "text-white") : ""}`}
              >
                {link.label}
                {active === link.label && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="https://www.linkedin.com/in/preyalmodi"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5"
        >
          LinkedIn
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors ${
            scrolled ? "text-slate-700" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-slate-100 px-6 pb-4"
          >
            <ul className="flex flex-col gap-4 pt-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.label, link.href)}
                    className={`text-sm font-medium transition-colors ${
                      active === link.label ? "text-blue-600" : "text-slate-600"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://www.linkedin.com/in/preyalmodi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm font-medium"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
