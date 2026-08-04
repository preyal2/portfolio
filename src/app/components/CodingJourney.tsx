import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import {
  Code2, ExternalLink, Flame, Target, Trophy, Zap,
  CheckCircle, TrendingUp, Github, Star,
} from "lucide-react";

const LEETCODE_USERNAME = "preyal2";
const GITHUB_REPO = "https://github.com/preyal2/daily-leetcode";

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
  totalQuestions: number;
  easyTotal: number;
  mediumTotal: number;
  hardTotal: number;
}

function StatBar({
  label,
  solved,
  total,
  color,
  delay,
}: {
  label: string;
  solved: number;
  total: number;
  color: string;
  delay: number;
}) {
  const pct = total > 0 ? Math.min((solved / total) * 100, 100) : 0;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
          style={{
            background: `${color}18`,
            border: `1px solid ${color}28`,
            color,
            fontFamily: "JetBrains Mono,monospace",
          }}
        >
          {label}
        </span>
        <span
          className="text-xs font-bold"
          style={{ color, fontFamily: "JetBrains Mono,monospace" }}
        >
          {solved} / {total}
        </span>
      </div>
      <div className="h-2 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
        />
      </div>
    </div>
  );
}

export function CodingJourney() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Using alfa-leetcode-api (free, no auth needed)
        const res = await fetch(
          `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/solved`
        );
        if (!res.ok) throw new Error("API error");
        const data = await res.json();

        // Also fetch user profile for ranking
        const profileRes = await fetch(
          `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}`
        );
        const profile = profileRes.ok ? await profileRes.json() : {};

        setStats({
          totalSolved: data.solvedProblem || 0,
          easySolved: data.easySolved || 0,
          mediumSolved: data.mediumSolved || 0,
          hardSolved: data.hardSolved || 0,
          acceptanceRate: profile.acceptanceRate || 0,
          ranking: profile.ranking || 0,
          totalQuestions: data.totalSubmissionNum?.[0]?.count || 0,
          easyTotal: 851,
          mediumTotal: 1793,
          hardTotal: 790,
        });
      } catch {
        // Show fallback UI without crashing
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const highlights = [
    {
      icon: Flame,
      label: "Consistency",
      value: "Daily Streak",
      desc: "Committed to resolving at least one DSA challenge every day.",
      color: "#2563EB",
    },
    {
      icon: Target,
      label: "Topic Focus",
      value: "Core DSA",
      desc: "Strong focus on Arrays, Trees, Dynamic Programming, and Graphs.",
      color: "#7C3AED",
    },
    {
      icon: Trophy,
      label: "Interview Prep",
      value: "Faang Ready",
      desc: "Solving curated problems aimed at top tier engineering roles.",
      color: "#38BDF8",
    },
    {
      icon: Zap,
      label: "Tooling",
      value: "Python / Java",
      desc: "Using clean, robust, and complexity optimized code solutions.",
      color: "#22C55E",
    },
  ];

  return (
    <section
      id="coding"
      className="relative section-padding overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-[-150px] top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="absolute inset-0 dot-pattern opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Coding Practice"
          title="Consistency &"
          highlight="Problem Solving"
          subtitle="Sharpening logical thinking and software engineering patterns through daily coding puzzles."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — LeetCode Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* LeetCode Profile Card */}
            <div
              className="glass-card rounded-2xl p-6 relative overflow-hidden"
              style={{ border: "1px solid rgba(245,158,11,0.2)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.2)" }}
                  >
                    🧩
                  </div>
                  <div>
                    <h3 className="text-white font-bold" style={{ fontFamily: "Poppins,sans-serif" }}>
                      LeetCode Stats
                    </h3>
                    <p
                      className="text-[#A1A1AA] text-sm"
                      style={{ fontFamily: "JetBrains Mono,monospace" }}
                    >
                      @{LEETCODE_USERNAME}
                    </p>
                  </div>
                </div>
                <a
                  href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg,#F59E0B,#F97316)",
                    boxShadow: "0 4px 15px rgba(245,158,11,0.3)",
                  }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Open LeetCode
                </a>
              </div>

              {loading && (
                <div className="flex items-center justify-center py-8 gap-3">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
                    style={{ borderColor: "rgba(245,158,11,0.3)", borderTopColor: "#F59E0B" }}
                  />
                  <span className="text-[#A1A1AA] text-sm" style={{ fontFamily: "JetBrains Mono,monospace" }}>
                    Loading stats from API...
                  </span>
                </div>
              )}

              {!loading && stats && (
                <div className="space-y-5">
                  {/* Total Solved */}
                  <div className="text-center py-4 rounded-xl" style={{ background: "rgba(245,158,11,0.06)" }}>
                    <motion.p
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="text-5xl font-extrabold"
                      style={{ color: "#F59E0B", fontFamily: "Poppins,sans-serif" }}
                    >
                      {stats.totalSolved}
                    </motion.p>
                    <p className="text-[#A1A1AA] text-xs mt-1 font-semibold uppercase tracking-wider">Problems Solved</p>
                    {stats.ranking > 0 && (
                      <p
                        className="text-[#F59E0B] text-xs mt-1.5 font-semibold"
                        style={{ fontFamily: "JetBrains Mono,monospace" }}
                      >
                        Global Ranking: #{stats.ranking.toLocaleString()}
                      </p>
                    )}
                  </div>

                  {/* Difficulty breakdown */}
                  <div className="space-y-3">
                    <StatBar
                      label="Easy"
                      solved={stats.easySolved}
                      total={stats.easyTotal}
                      color="#22C55E"
                      delay={0.1}
                    />
                    <StatBar
                      label="Medium"
                      solved={stats.mediumSolved}
                      total={stats.mediumTotal}
                      color="#F59E0B"
                      delay={0.2}
                    />
                    <StatBar
                      label="Hard"
                      solved={stats.hardSolved}
                      total={stats.hardTotal}
                      color="#EF4444"
                      delay={0.3}
                    />
                  </div>
                </div>
              )}

              {!loading && !stats && (
                <div className="space-y-4">
                  <img
                    src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Nunito&ext=heatmap&border=0&radius=12`}
                    alt="LeetCode Stats"
                    className="w-full rounded-xl"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="text-center">
                    <a
                      href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-400 text-sm hover:text-amber-300 transition-colors"
                      style={{ fontFamily: "JetBrains Mono,monospace" }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View full stats on LeetCode
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* LeetCode Activity Card (always shown if dynamic API succeeded or not) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-4 overflow-hidden"
              style={{ border: "1px solid rgba(245,158,11,0.12)" }}
            >
              <p
                className="text-[#A1A1AA] text-xs mb-3 font-semibold tracking-widest uppercase text-center"
                style={{ fontFamily: "JetBrains Mono,monospace" }}
              >
                Detailed Submission Chart
              </p>
              <img
                src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Nunito&ext=heatmap&border=0&radius=8`}
                alt={`LeetCode stats for ${LEETCODE_USERNAME}`}
                className="w-full rounded-lg mx-auto block"
                style={{ maxWidth: "500px" }}
                loading="lazy"
                onError={(e) => {
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) parent.style.display = "none";
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right — Philosophy + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Daily LeetCode Repo */}
            <motion.a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 glass-card rounded-2xl p-5 group"
              style={{ border: "1px solid rgba(37,99,235,0.2)" }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)" }}
              >
                📁
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-white font-bold" style={{ fontFamily: "Poppins,sans-serif" }}>
                    daily-leetcode
                  </p>
                  <span
                    className="text-xs px-2.5 py-0.5 rounded-full font-semibold"
                    style={{
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.22)",
                      color: "#34D399",
                      fontFamily: "JetBrains Mono,monospace",
                    }}
                  >
                    Active Repo
                  </span>
                </div>
                <p className="text-[#A1A1AA] text-xs mt-1">
                  Daily DSA solutions — consistency tracker and interview prep repository
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-[#A1A1AA] group-hover:text-blue-400 transition-colors flex-shrink-0" />
            </motion.a>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value, desc, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-xl p-4 cursor-default"
                  style={{ border: `1px solid ${color}18` }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${color}15` }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color }} />
                  </div>
                  <p className="text-white font-bold text-sm" style={{ fontFamily: "Poppins,sans-serif" }}>
                    {value}
                  </p>
                  <p className="text-[#A1A1AA] text-[10px] uppercase font-bold tracking-wider mt-0.5">{label}</p>
                  <p className="text-[#71717A] text-[11px] leading-relaxed mt-1">{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Philosophy */}
            <div
              className="glass-card rounded-2xl p-6"
              style={{ border: "1px solid rgba(124,58,237,0.15)" }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <TrendingUp className="w-4 h-4 text-violet-400" />
                <h4 className="text-white font-semibold text-sm" style={{ fontFamily: "Poppins,sans-serif" }}>
                  My Problem Solving Strategy
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  { icon: "🎯", text: "Solve at least one problem daily to maintain continuous brain warmup" },
                  { icon: "🧠", text: "Breakdown complex queries into modular, recognizable sub-problems" },
                  { icon: "📝", text: "Analyze space & time complexity limits before submitting solutions" },
                  { icon: "🚀", text: "Focus primarily on Medium & Hard algorithms for maximum analytical growth" },
                  { icon: "🔄", text: "Regularly clean up and optimize solution repositories on GitHub" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="text-base flex-shrink-0">{icon}</span>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg,#F59E0B,#F97316)",
                  boxShadow: "0 4px 15px rgba(245,158,11,0.25)",
                }}
              >
                🧩 View LeetCode Profile
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Github className="w-4 h-4" />
                Solutions GitHub Repository
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
