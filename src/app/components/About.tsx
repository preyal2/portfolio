import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import {
  MapPin, Mail, Phone, GraduationCap, Briefcase, Award,
  Target, CheckCircle2, Linkedin, Github,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ─── Recruiter-priority "Quick Snapshot" data ──────────────────────────────
const snapshot = [
  { label: "Looking For",  value: "SWE / AI / ML Internships & Jobs", icon: Target,           color: "#2563EB" },
  { label: "Education",    value: "B.E. Computer Engineering",  icon: GraduationCap,    color: "#7C3AED" },
  { label: "Experience",   value: "3+ Internships Completed",   icon: Briefcase,        color: "#22C55E" },
  { label: "Certifications",value: "30+ Certificates & Badges", icon: Award,            color: "#F59E0B" },
];

// ─── Core competencies as recruiter-scannable bullets ──────────────────────
const strengths = [
  "Builds AI-powered web applications end-to-end",
  "Machine Learning: data prep, model training & evaluation",
  "Full-Stack: React, Tailwind, Node.js, MySQL",
  "Python developer — Pandas, NumPy, Scikit-learn, TensorFlow",
  "Active on LeetCode — daily DSA practice streak",
  "Strong communicator, fast learner, team player",
];

export function About() {
  return (
    <section
      id="about"
      className="relative section-padding overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-[-180px] top-[-80px] w-[450px] h-[450px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="About Me"
          title="Who I"
          highlight="Am"
          subtitle="A Computer Engineering student building AI-powered applications and growing every single day."
        />

        <div className="grid lg:grid-cols-[340px_1fr] gap-10 items-start">
          {/* ── LEFT COLUMN: Profile + Quick Snapshot ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            {/* Profile photo */}
            <div
              className="rounded-2xl overflow-hidden w-full aspect-square max-w-[280px] mx-auto lg:mx-0"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 50px rgba(37,99,235,0.12)",
              }}
            >
              <ImageWithFallback
                src="/profile.png"
                alt="Preyal Modi — Computer Engineering Student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name + location badge */}
            <div className="text-center lg:text-left">
              <h3
                className="text-white font-bold text-xl mb-1"
                style={{ fontFamily: "Poppins,sans-serif" }}
              >
                Preyal Modi
              </h3>
              <p className="text-[#A1A1AA] text-sm flex items-center gap-1.5 justify-center lg:justify-start">
                <MapPin className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                Mehsana, Gujarat, India
              </p>
            </div>

            {/* Contact mini-row */}
            <div className="flex flex-col gap-2">
              {[
                { icon: Mail,     value: "modipreyal@gmail.com",        href: "mailto:modipreyal@gmail.com",           color: "#2563EB" },
                { icon: Phone,    value: "+91 9104830813",               href: "tel:+919104830813",                     color: "#22C55E" },
                { icon: Linkedin, value: "linkedin.com/in/preyalmodi",   href: "https://www.linkedin.com/in/preyalmodi",color: "#60A5FA" },
                { icon: Github,   value: "github.com/preyal2",           href: "https://github.com/preyal2",           color: "#A1A1AA" },
              ].map(({ icon: Icon, value, href, color }) => (
                <a
                  key={value}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 hover:bg-white/[0.04] group"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15` }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color }} />
                  </div>
                  <span
                    className="text-xs text-[#A1A1AA] group-hover:text-white transition-colors truncate"
                    style={{ fontFamily: "JetBrains Mono,monospace" }}
                  >
                    {value}
                  </span>
                </a>
              ))}
            </div>

            {/* Quick Snapshot — most recruiter-relevant */}
            <div
              className="rounded-2xl p-4 flex flex-col gap-3"
              style={{
                background: "rgba(37,99,235,0.04)",
                border: "1px solid rgba(37,99,235,0.14)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1"
                style={{ fontFamily: "JetBrains Mono,monospace" }}
              >
                ⚡ Quick Snapshot
              </p>
              {snapshot.map(({ label, value, icon: Icon, color }) => (
                <div key={label} className="flex items-start gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${color}15` }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#71717A] text-[10px] uppercase tracking-wider font-semibold">
                      {label}
                    </p>
                    <p className="text-white text-sm font-semibold leading-snug" style={{ fontFamily: "Poppins,sans-serif" }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Story + Strengths ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-7"
          >
            {/* Bio — short, skimmable */}
            <div>
              <h3
                className="text-white font-bold text-2xl mb-4"
                style={{ fontFamily: "Poppins,sans-serif" }}
              >
                Computer Engineering Student &amp;{" "}
                <span className="gradient-text">AI Builder</span>
              </h3>
              <div className="space-y-3 text-[#A1A1AA] leading-relaxed text-[15px]" style={{ fontFamily: "Inter,sans-serif" }}>
                <p>
                  I'm a <strong className="text-white">3rd-year Computer Engineering student</strong> at Gujarat Technological University,
                  passionate about <strong className="text-white">Artificial Intelligence, Machine Learning, and Cloud Computing</strong>.
                  I build practical AI-powered applications and ship real projects — not just coursework.
                </p>
                <p>
                  Through <strong className="text-white">3+ industry internships</strong> (Emerging Tech at Edunet × AICTE, ML at InfoLabz, and Web Dev at Flu Social),
                  I have worked on real-world codebases, collaborated in teams, and delivered production-ready solutions.
                </p>
                <p>
                  I maintain a <strong className="text-white">daily LeetCode practice habit</strong> and hold{" "}
                  <strong className="text-white">30+ verified certifications &amp; badges</strong> from IBM SkillsBuild, Edunet, NPTEL IIT Roorkee, and GTU-ITR.
                  My goal is to grow into a <strong className="text-white">Software Engineer specializing in AI and Cloud Technologies</strong>.
                </p>
              </div>
            </div>

            {/* Core Strengths — recruiter checklist */}
            <div>
              <div
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(21,21,21,0.8)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p
                  className="text-white font-bold text-sm mb-4 flex items-center gap-2"
                  style={{ fontFamily: "Poppins,sans-serif" }}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  What I Bring to the Table
                </p>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {strengths.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2.5 text-sm text-[#A1A1AA] leading-snug"
                    >
                      <span className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stat bar — key numbers at a glance */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { value: "10+",  label: "Projects",       color: "#2563EB" },
                { value: "3+",   label: "Internships",    color: "#7C3AED" },
                { value: "30+",  label: "Certificates",   color: "#F59E0B" },
                { value: "365+", label: "Days Coding",    color: "#22C55E" },
              ].map(({ value, label, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3 }}
                  className="glass-card rounded-xl py-4 px-3 text-center cursor-default"
                  style={{ border: `1px solid ${color}18` }}
                >
                  <p
                    className="font-extrabold text-2xl mb-0.5"
                    style={{ color, fontFamily: "Poppins,sans-serif" }}
                  >
                    {value}
                  </p>
                  <p className="text-[#71717A] text-xs leading-snug">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
