import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import {
  Terminal, Layout, Database, Brain, Wrench, BookOpen,
} from "lucide-react";

type Level = "Expert" | "Advanced" | "Intermediate" | "Familiar";

interface SkillItem {
  name: string;
  icon: string;
  color: string;
  level: Level;
  width: number; // visual bar width %
}

const levelColor: Record<Level, string> = {
  Expert:       "#22C55E",
  Advanced:     "#38BDF8",
  Intermediate: "#A78BFA",
  Familiar:     "#6B7280",
};

const programming: SkillItem[] = [
  { name: "Python",     icon: "🐍", color: "#2563EB", level: "Advanced",     width: 85 },
  { name: "JavaScript", icon: "⚡", color: "#EAB308", level: "Advanced",     width: 80 },
  { name: "Java",       icon: "☕", color: "#F59E0B", level: "Intermediate", width: 70 },
  { name: "SQL",        icon: "🗃️", color: "#38BDF8", level: "Intermediate", width: 75 },
  { name: "C++",        icon: "⚙️", color: "#8B5CF6", level: "Intermediate", width: 65 },
  { name: "C",          icon: "🔧", color: "#6366F1", level: "Intermediate", width: 65 },
];

const frontend: SkillItem[] = [
  { name: "HTML5",       icon: "🌐", color: "#EA580C", level: "Expert",       width: 90 },
  { name: "CSS3",        icon: "🎨", color: "#2563EB", level: "Advanced",     width: 85 },
  { name: "React",       icon: "⚛️", color: "#38BDF8", level: "Advanced",     width: 75 },
  { name: "Tailwind CSS",icon: "💨", color: "#38BDF8", level: "Advanced",     width: 80 },
  { name: "Bootstrap",   icon: "🅱️", color: "#7C3AED", level: "Intermediate", width: 75 },
];

const backendDb: SkillItem[] = [
  { name: "MySQL",      icon: "🐬", color: "#2563EB", level: "Intermediate", width: 75 },
  { name: "Node.js",    icon: "🟢", color: "#22C55E", level: "Intermediate", width: 65 },
  { name: "MongoDB",    icon: "🍃", color: "#47A248", level: "Intermediate", width: 65 },
  { name: "Express.js", icon: "🚂", color: "#A1A1AA", level: "Familiar",     width: 60 },
  { name: "PHP",        icon: "🐘", color: "#777BB4", level: "Familiar",     width: 55 },
];

const mlAi: SkillItem[] = [
  { name: "Pandas",       icon: "🐼", color: "#2563EB", level: "Advanced",     width: 80 },
  { name: "NumPy",        icon: "🔢", color: "#38BDF8", level: "Advanced",     width: 78 },
  { name: "Scikit-learn", icon: "🤖", color: "#F7931E", level: "Intermediate", width: 75 },
  { name: "TensorFlow",   icon: "🧠", color: "#FF6F00", level: "Intermediate", width: 70 },
  { name: "Matplotlib",   icon: "📊", color: "#11557C", level: "Intermediate", width: 72 },
];

const cloudTools: SkillItem[] = [
  { name: "VS Code", icon: "💻", color: "#007ACC", level: "Expert",       width: 90 },
  { name: "GitHub",  icon: "🐙", color: "#A1A1AA", level: "Advanced",     width: 82 },
  { name: "Git",     icon: "🔀", color: "#F05032", level: "Advanced",     width: 80 },
  { name: "IBM Cloud",icon: "☁️", color: "#0F62FE", level: "Familiar",    width: 65 },
  { name: "WordPress",icon: "📝", color: "#21759B", level: "Intermediate", width: 70 },
  { name: "Postman", icon: "📮", color: "#FF6C37", level: "Intermediate", width: 68 },
];

const csCore: SkillItem[] = [
  { name: "Data Structures", icon: "🌳", color: "#10B981", level: "Intermediate", width: 75 },
  { name: "OOP",             icon: "🏗️", color: "#EC4899", level: "Advanced",     width: 78 },
  { name: "DBMS",            icon: "🗄️", color: "#8B5CF6", level: "Intermediate", width: 73 },
  { name: "Algorithms",      icon: "🧮", color: "#2563EB", level: "Intermediate", width: 72 },
  { name: "OS",              icon: "💾", color: "#F59E0B", level: "Familiar",      width: 68 },
  { name: "Networks",        icon: "🔗", color: "#38BDF8", level: "Familiar",      width: 65 },
  { name: "Embedded Systems",icon: "🔌", color: "#6366F1", level: "Familiar",      width: 60 },
];

function LevelBadge({ level }: { level: Level }) {
  return (
    <span
      className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
      style={{
        background: `${levelColor[level]}18`,
        border: `1px solid ${levelColor[level]}30`,
        color: levelColor[level],
        fontFamily: "JetBrains Mono,monospace",
      }}
    >
      {level}
    </span>
  );
}

function SkillRow({ s, idx }: { s: SkillItem; idx: number }) {
  return (
    <div className="flex flex-col gap-1.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-semibold text-white flex items-center gap-2 min-w-0">
          <span className="text-base flex-shrink-0">{s.icon}</span>
          <span className="truncate">{s.name}</span>
        </span>
        <LevelBadge level={s.level} />
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${s.width}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: idx * 0.04 }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}88)` }}
        />
      </div>
    </div>
  );
}

function SkillSimpleRow({ s, idx }: { s: SkillItem; idx: number }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs gap-2">
        <span className="text-white font-medium flex items-center gap-1.5 min-w-0">
          <span className="flex-shrink-0">{s.icon}</span>
          <span className="truncate">{s.name}</span>
        </span>
        <LevelBadge level={s.level} />
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${s.width}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: idx * 0.05 }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}88)` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative section-padding overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/4 top-1/4 w-[600px] h-[600px] rounded-full opacity-[0.025]"
          style={{
            background: "radial-gradient(circle, #2563EB, transparent 65%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute right-1/4 bottom-1/4 w-[600px] h-[600px] rounded-full opacity-[0.025]"
          style={{
            background: "radial-gradient(circle, #7C3AED, transparent 65%)",
            filter: "blur(90px)",
          }}
        />
        <div className="absolute inset-0 dot-pattern opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Expertise"
          title="Skills &"
          highlight="Technologies"
          subtitle="A full-stack developer toolkit covering AI, Web, Cloud, and Computer Science fundamentals."
        />

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {(Object.entries(levelColor) as [Level, string][]).map(([level, color]) => (
            <span
              key={level}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: `${color}12`, border: `1px solid ${color}25`, color }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
              {level}
            </span>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1: Core Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 lg:col-span-2 relative overflow-hidden group min-h-[280px]"
            style={{ border: "1px solid rgba(37,99,235,0.15)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-5">
              <Terminal className="w-4.5 h-4.5 text-blue-400" />
              <h3 className="text-white font-bold text-sm" style={{ fontFamily: "Poppins,sans-serif" }}>
                Programming &amp; Query Languages
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {programming.map((s, idx) => <SkillRow key={s.name} s={s} idx={idx} />)}
            </div>
          </motion.div>

          {/* Card 2: Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 relative overflow-hidden group min-h-[280px]"
            style={{ border: "1px solid rgba(56,189,248,0.15)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-5">
              <Layout className="w-4.5 h-4.5 text-sky-400" />
              <h3 className="text-white font-bold text-sm" style={{ fontFamily: "Poppins,sans-serif" }}>
                Frontend &amp; UI Design
              </h3>
            </div>
            <div className="space-y-3">
              {frontend.map((s, idx) => <SkillSimpleRow key={s.name} s={s} idx={idx} />)}
            </div>
          </motion.div>

          {/* Card 3: Backend & Database */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 relative overflow-hidden group min-h-[280px]"
            style={{ border: "1px solid rgba(34,197,94,0.15)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-5">
              <Database className="w-4.5 h-4.5 text-emerald-400" />
              <h3 className="text-white font-bold text-sm" style={{ fontFamily: "Poppins,sans-serif" }}>
                Backend &amp; Databases
              </h3>
            </div>
            <div className="space-y-3">
              {backendDb.map((s, idx) => <SkillSimpleRow key={s.name} s={s} idx={idx} />)}
            </div>
          </motion.div>

          {/* Card 4: ML & AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 relative overflow-hidden group min-h-[280px]"
            style={{ border: "1px solid rgba(249,115,22,0.15)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-5">
              <Brain className="w-4.5 h-4.5 text-orange-400" />
              <h3 className="text-white font-bold text-sm" style={{ fontFamily: "Poppins,sans-serif" }}>
                ML &amp; Data Science
              </h3>
            </div>
            <div className="space-y-3">
              {mlAi.map((s, idx) => <SkillSimpleRow key={s.name} s={s} idx={idx} />)}
            </div>
          </motion.div>

          {/* Card 5: Dev Tools & Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 relative overflow-hidden group min-h-[280px]"
            style={{ border: "1px solid rgba(124,58,237,0.15)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-5">
              <Wrench className="w-4.5 h-4.5 text-violet-400" />
              <h3 className="text-white font-bold text-sm" style={{ fontFamily: "Poppins,sans-serif" }}>
                Dev Tools &amp; Cloud
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {cloudTools.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors"
                >
                  <span className="text-white text-xs font-medium flex items-center gap-2">
                    <span className="text-base">{s.icon}</span>
                    {s.name}
                  </span>
                  <LevelBadge level={s.level} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 6: CS Core — full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 lg:col-span-3 relative overflow-hidden group"
            style={{ border: "1px solid rgba(236,72,153,0.15)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-5">
              <BookOpen className="w-4.5 h-4.5 text-pink-400" />
              <h3 className="text-white font-bold text-sm" style={{ fontFamily: "Poppins,sans-serif" }}>
                CS Core Foundations
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
              {csCore.map((s, idx) => (
                <motion.div
                  key={s.name}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:border-pink-500/20 transition-all cursor-default"
                >
                  <span className="text-2xl mb-2">{s.icon}</span>
                  <span className="text-xs text-white font-medium block truncate w-full" style={{ fontFamily: "Poppins,sans-serif" }}>
                    {s.name}
                  </span>
                  <span
                    className="text-[10px] mt-1.5 font-semibold px-1.5 py-0.5 rounded-full"
                    style={{
                      background: `${levelColor[s.level]}15`,
                      color: levelColor[s.level],
                      fontFamily: "JetBrains Mono,monospace",
                    }}
                  >
                    {s.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
