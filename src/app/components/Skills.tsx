import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import {
  Terminal, Layout, Database, Brain, Wrench, BookOpen,
  Bot, LineChart, Network, Sparkles, Cpu, Code2,
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
  { name: "Python 3.12",    icon: "🐍", color: "#2563EB", level: "Expert",       width: 92 },
  { name: "TypeScript 5.7", icon: "🔷", color: "#3178C6", level: "Advanced",     width: 88 },
  { name: "JavaScript ES6+",icon: "⚡", color: "#EAB308", level: "Advanced",     width: 85 },
  { name: "SQL (ACID)",     icon: "🗃️", color: "#38BDF8", level: "Advanced",     width: 82 },
  { name: "PHP 8.3",        icon: "🐘", color: "#777BB4", level: "Advanced",     width: 80 },
  { name: "Java",           icon: "☕", color: "#F59E0B", level: "Intermediate", width: 72 },
  { name: "C / C++",        icon: "⚙️", color: "#8B5CF6", level: "Intermediate", width: 70 },
];

const dataAnalytics: SkillItem[] = [
  { name: "Pandas 2.x",        icon: "🐼", color: "#2563EB", level: "Advanced",     width: 88 },
  { name: "NumPy",             icon: "🔢", color: "#38BDF8", level: "Advanced",     width: 85 },
  { name: "Matplotlib & Seaborn", icon: "📊", color: "#11557C", level: "Advanced", width: 84 },
  { name: "Jupyter Lab",       icon: "🪐", color: "#F37626", level: "Advanced",     width: 85 },
  { name: "SciPy",             icon: "🔬", color: "#8CAAE6", level: "Intermediate", width: 76 },
];

const mlAi: SkillItem[] = [
  { name: "Scikit-Learn", icon: "🤖", color: "#F7931E", level: "Advanced",     width: 85 },
  { name: "PyTorch 2.x",  icon: "🔥", color: "#EE4C2C", level: "Intermediate", width: 76 },
  { name: "XGBoost",      icon: "🌳", color: "#1572B6", level: "Intermediate", width: 78 },
  { name: "TensorFlow",   icon: "🧠", color: "#FF6F00", level: "Intermediate", width: 72 },
  { name: "OpenCV",       icon: "👁️", color: "#5C3EE8", level: "Intermediate", width: 68 },
];

const genAi: SkillItem[] = [
  { name: "Google Gemini 3.8 Flash", icon: "⚡", color: "#4285F4", level: "Advanced", width: 90 },
  { name: "Autonomous LLM Agents",   icon: "🤖", color: "#FF6F00", level: "Advanced", width: 86 },
  { name: "Prompt Chaining & Eng",   icon: "🔗", color: "#00A67E", level: "Advanced", width: 88 },
  { name: "Web Speech API (TTS/STT)",icon: "🎙️", color: "#38BDF8", level: "Advanced", width: 84 },
];

const frontend: SkillItem[] = [
  { name: "React 19",       icon: "⚛️", color: "#61DAFB", level: "Advanced",     width: 88 },
  { name: "Tailwind CSS",   icon: "💨", color: "#38BDF8", level: "Expert",       width: 90 },
  { name: "Vite 6",         icon: "⚡", color: "#646CFF", level: "Advanced",     width: 85 },
  { name: "HTML5 & Canvas", icon: "🌐", color: "#EA580C", level: "Expert",       width: 92 },
  { name: "CSS3 / Glass",   icon: "🎨", color: "#2563EB", level: "Expert",       width: 90 },
];

const backendSystems: SkillItem[] = [
  { name: "FastAPI",          icon: "🚀", color: "#009688", level: "Advanced",     width: 82 },
  { name: "PHP 8.3 MVC",      icon: "🐘", color: "#777BB4", level: "Advanced",     width: 82 },
  { name: "Node.js & Express",icon: "🟢", color: "#22C55E", level: "Intermediate", width: 75 },
  { name: "MySQL / SQLite",   icon: "🗄️", color: "#2563EB", level: "Advanced",     width: 84 },
  { name: "REST APIs & RBAC", icon: "🔒", color: "#10B981", level: "Advanced",     width: 85 },
];

const networksCloud: SkillItem[] = [
  { name: "Cisco IOS / Packet Tracer", icon: "🌐", color: "#1BA0D7", level: "Advanced",     width: 82 },
  { name: "802.1Q VLANs & OSPF",       icon: "🔀", color: "#2563EB", level: "Advanced",     width: 80 },
  { name: "Git & GitHub Actions",      icon: "🐙", color: "#F05032", level: "Advanced",     width: 85 },
  { name: "MikroTik RouterOS",         icon: "📡", color: "#A1A1AA", level: "Intermediate", width: 75 },
  { name: "Docker & Cloud (GCP/IBM)",  icon: "☁️", color: "#4285F4", level: "Intermediate", width: 74 },
];

const csCore: SkillItem[] = [
  { name: "Data Structures", icon: "🌳", color: "#10B981", level: "Advanced",     width: 85 },
  { name: "14 Interview Patterns", icon: "🎯", color: "#F59E0B", level: "Advanced", width: 88 },
  { name: "UMPIRE Methodology", icon: "📐", color: "#38BDF8", level: "Advanced",   width: 85 },
  { name: "Big-O Asymptotic Proofs", icon: "🧮", color: "#EF4444", level: "Advanced", width: 82 },
  { name: "OOP Architecture", icon: "🏗️", color: "#EC4899", level: "Advanced",     width: 80 },
  { name: "DBMS & Normalization", icon: "🗄️", color: "#8B5CF6", level: "Advanced", width: 80 },
  { name: "Computer Networks & ACLs", icon: "🔗", color: "#06B6D4", level: "Advanced", width: 80 },
  { name: "Operating Systems", icon: "💾", color: "#F97316", level: "Intermediate", width: 72 },
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
          badge="Technical Competency Matrix"
          title="Skills &"
          highlight="Technologies"
          subtitle="Production-tested technical capabilities across Data Analytics, Machine Learning, Generative AI & Autonomous Agents, Full-Stack Architecture, and Computer Science foundations."
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

          {/* Card 1: Core Languages (lg:col-span-2) */}
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

          {/* Card 2: Generative AI & Autonomous Agents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 relative overflow-hidden group min-h-[280px]"
            style={{ border: "1px solid rgba(66,133,244,0.18)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-5">
              <Sparkles className="w-4.5 h-4.5 text-blue-400" />
              <h3 className="text-white font-bold text-sm" style={{ fontFamily: "Poppins,sans-serif" }}>
                Next-Gen AI &amp; Autonomous Agents
              </h3>
            </div>
            <div className="space-y-3">
              {genAi.map((s, idx) => <SkillSimpleRow key={s.name} s={s} idx={idx} />)}
            </div>
          </motion.div>

          {/* Card 3: Data Analytics & Wrangling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 relative overflow-hidden group min-h-[280px]"
            style={{ border: "1px solid rgba(217,70,239,0.18)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-5">
              <LineChart className="w-4.5 h-4.5 text-fuchsia-400" />
              <h3 className="text-white font-bold text-sm" style={{ fontFamily: "Poppins,sans-serif" }}>
                Data Analytics &amp; EDA
              </h3>
            </div>
            <div className="space-y-3">
              {dataAnalytics.map((s, idx) => <SkillSimpleRow key={s.name} s={s} idx={idx} />)}
            </div>
          </motion.div>

          {/* Card 4: Machine Learning & Predictive Modeling */}
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
                Machine Learning &amp; AI
              </h3>
            </div>
            <div className="space-y-3">
              {mlAi.map((s, idx) => <SkillSimpleRow key={s.name} s={s} idx={idx} />)}
            </div>
          </motion.div>

          {/* Card 5: Frontend & Modern UI */}
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
                Frontend &amp; UI Engineering
              </h3>
            </div>
            <div className="space-y-3">
              {frontend.map((s, idx) => <SkillSimpleRow key={s.name} s={s} idx={idx} />)}
            </div>
          </motion.div>

          {/* Card 6: Backend & Production APIs */}
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
                Backend &amp; Database Systems
              </h3>
            </div>
            <div className="space-y-3">
              {backendSystems.map((s, idx) => <SkillSimpleRow key={s.name} s={s} idx={idx} />)}
            </div>
          </motion.div>

          {/* Card 7: Systems, Networks & Cloud Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 lg:col-span-2 relative overflow-hidden group min-h-[280px]"
            style={{ border: "1px solid rgba(124,58,237,0.15)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 mb-5">
              <Network className="w-4.5 h-4.5 text-violet-400" />
              <h3 className="text-white font-bold text-sm" style={{ fontFamily: "Poppins,sans-serif" }}>
                Systems, Networks &amp; Cloud Infrastructure
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {networksCloud.map((s, idx) => <SkillRow key={s.name} s={s} idx={idx} />)}
            </div>
          </motion.div>

          {/* Card 8: CS Core Foundations & 14 Interview Patterns (lg:col-span-3) */}
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
                CS Core Foundations &amp; Algorithmic Discipline (245+ Solved DSA)
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-3">
              {csCore.map((s) => (
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
