import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Heart, Code2, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github,      href: "https://github.com/preyal2",                   label: "GitHub",    color: "#FFFFFF" },
  { icon: Linkedin,    href: "https://www.linkedin.com/in/preyalmodi",        label: "LinkedIn",  color: "#60A5FA" },
  { icon: Mail,        href: "mailto:modipreyal@gmail.com",                    label: "Email",     color: "#A78BFA" },
  { icon: ExternalLink,href: "https://preyal1portfolio.netlify.app/",          label: "Portfolio", color: "#34D399" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "LeetCode", href: "#coding" },
  { label: "Certificates", href: "#certificates" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{
        background: "linear-gradient(180deg, #09090B 0%, #050507 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-5"
          style={{ background: "radial-gradient(ellipse, #3B82F6, transparent 70%)", filter: "blur(40px)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Row */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white" style={{ fontFamily: "Poppins,sans-serif" }}>
                Preyal<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
              Computer Engineering Student | AI Builder | Vibe Coder — building the future one commit at a time.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color,
                  }}
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide" style={{ fontFamily: "Poppins,sans-serif" }}>
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-left text-sm text-[#A1A1AA] hover:text-blue-400 transition-colors duration-200 py-0.5"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide" style={{ fontFamily: "Poppins,sans-serif" }}>
              Let's Connect
            </h4>
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
              Open to internships, collaborations, and interesting conversations about AI and tech.
            </p>
            <a
              href="mailto:modipreyal@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                boxShadow: "0 4px 15px rgba(37,99,235,0.25)",
              }}
            >
              <Mail className="w-4 h-4" />
              modipreyal@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-8" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#71717A] text-sm text-center sm:text-left"
            style={{ fontFamily: "Inter,sans-serif" }}
          >
            Designed & Developed with{" "}
            <Heart className="w-3.5 h-3.5 inline text-red-400 fill-current" />{" "}
            by{" "}
            <span className="gradient-text font-semibold">Preyal Modi</span>
            {" "} · © {new Date().getFullYear()} All Rights Reserved
          </motion.p>

          <div className="flex items-center gap-4">
            <p className="text-[#71717A] text-xs" style={{ fontFamily: "JetBrains Mono,monospace" }}>
              React + Vite + TypeScript + Tailwind
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(37,99,235,0.1)",
                border: "1px solid rgba(37,99,235,0.2)",
              }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
