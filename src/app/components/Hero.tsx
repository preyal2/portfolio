import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  ArrowDown, Github, Linkedin, Mail, ExternalLink,
  Download, Sparkles, Brain, Code2,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const roles = [
  "Computer Engineering Student",
  "AI Builder",
  "Vibe Coder",
  "Machine Learning Enthusiast",
  "Cloud Explorer",
  "Problem Solver",
];

// Only 2 subtle floating icons — clean and minimal
const floatingIcons = [
  { Icon: Brain, color: "#2563EB", x: "7%", y: "25%", delay: 0, size: 24 },
  { Icon: Code2, color: "#38BDF8", x: "88%", y: "60%", delay: 1, size: 22 },
];

function RoleTyper({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[index];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          65
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index, roles]);

  return (
    <span className="gradient-text font-bold">
      {displayed}
      <span
        className="ml-0.5 inline-block w-0.5 h-[1em] rounded-full align-middle"
        style={{
          background: "linear-gradient(135deg,#2563EB,#7C3AED)",
          verticalAlign: "middle",
          animation: "pulse 1s step-end infinite",
        }}
      />
    </span>
  );
}

interface HeroProps {
  onHireMeClick: () => void;
}

export function Hero({ onHireMeClick }: HeroProps) {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Aurora orbs — reduced opacity, no animation clutter */}
        <div
          className="absolute w-[650px] h-[650px] -top-48 -left-48 rounded-full opacity-[0.12]"
          style={{
            background: "radial-gradient(circle, #2563EB 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] bottom-[-80px] right-[-120px] rounded-full opacity-[0.10]"
          style={{
            background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        {/* Subtle dot grid */}
        <div className="absolute inset-0 dot-pattern opacity-20" />

        {/* 2 minimal floating icons */}
        {floatingIcons.map(({ Icon, color, x, y, delay, size }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: x, top: y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 1.5, duration: 0.6 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6 + i * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
              className="p-3 rounded-2xl"
              style={{
                background: `${color}12`,
                border: `1px solid ${color}22`,
                backdropFilter: "blur(8px)",
              }}
            >
              <Icon style={{ color, width: size, height: size }} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div>
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 tracking-wide"
            style={{
              background: "rgba(37,99,235,0.1)",
              border: "1px solid rgba(37,99,235,0.22)",
              color: "#93C5FD",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Internships &amp; Full-Time Job Roles
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#A1A1AA] text-lg mb-2 font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Hi there, I'm 👋
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white font-extrabold leading-tight mb-3"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
            }}
          >
            Preyal{" "}
            <span className="gradient-text">Modi</span>
          </motion.h1>

          {/* Role typer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-2xl md:text-3xl mb-6 h-10 flex items-center gap-3"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div
              className="h-0.5 w-8 rounded-full flex-shrink-0"
              style={{ background: "linear-gradient(90deg,#2563EB,#7C3AED)" }}
            />
            <RoleTyper roles={roles} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-[#A1A1AA] text-base leading-relaxed mb-10 max-w-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            I build AI-powered applications using modern tools, explore Cloud
            Computing and Data Analytics, and transform ideas into practical
            software that solves real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <button
              onClick={onHireMeClick}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm relative overflow-hidden group hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #10B981, #059669)",
                border: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              Hire Me / Recruiter Hub
            </button>

            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm relative overflow-hidden group"
              style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Sparkles className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Explore Projects</span>
            </button>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-3"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/preyal2",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/preyalmodi",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:modipreyal@gmail.com",
                label: "Email",
              },
              {
                icon: ExternalLink,
                href: "https://preyal1portfolio.netlify.app/",
                label: "Portfolio",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="group w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Icon className="w-4 h-4 text-[#A1A1AA] group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Single clean glow ring */}
            <div
              className="absolute inset-[-3px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #2563EB, #7C3AED, #38BDF8, #2563EB)",
                filter: "blur(4px)",
                opacity: 0.55,
                animation: "spin-slow 10s linear infinite",
              }}
            />

            {/* Profile image */}
            <div
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden"
              style={{ border: "2px solid rgba(255,255,255,0.08)" }}
            >
              <ImageWithFallback
                src="/profile.png"
                alt="Preyal Modi — Computer Engineering Student & AI Builder"
                className="w-full h-full object-cover"
              />
              {/* Subtle tint */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.06), rgba(124,58,237,0.06))",
                }}
              />
            </div>

            {/* Floating stat chips */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              className="absolute -left-10 top-16 px-4 py-3 rounded-2xl animate-float-slow"
              style={{
                background: "rgba(10,10,10,0.85)",
                border: "1px solid rgba(37,99,235,0.28)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 24px rgba(37,99,235,0.12)",
              }}
            >
              <p className="text-[#A1A1AA] text-xs mb-0.5">Internships</p>
              <p
                className="text-white font-bold text-sm"
                style={{ fontFamily: "Poppins,sans-serif" }}
              >
                3+ Completed ✓
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-10 bottom-20 px-4 py-3 rounded-2xl animate-float"
              style={{
                background: "rgba(10,10,10,0.85)",
                border: "1px solid rgba(124,58,237,0.28)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 24px rgba(124,58,237,0.12)",
                animationDelay: "2s",
              }}
            >
              <p className="text-[#A1A1AA] text-xs mb-0.5">Certifications</p>
              <p
                className="text-white font-bold text-sm"
                style={{ fontFamily: "Poppins,sans-serif" }}
              >
                30+ Verified Badges
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full whitespace-nowrap"
              style={{
                background: "rgba(10,10,10,0.88)",
                border: "1px solid rgba(56,189,248,0.28)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 0 24px rgba(56,189,248,0.12)",
              }}
            >
              <p
                className="text-sky-400 text-xs font-semibold"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                🔥 Daily LeetCode
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#71717A] hover:text-white transition-colors duration-300"
      >
        <span
          className="text-xs uppercase tracking-[0.2em]"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
