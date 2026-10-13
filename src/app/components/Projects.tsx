import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Github, ExternalLink, Star, Filter, ChevronDown, ChevronUp } from "lucide-react";

type FilterType = "all" | "ai" | "ml" | "analytics" | "web" | "practice";

const filters: { id: FilterType; label: string }[] = [
  { id: "all", label: "All Projects (12)" },
  { id: "ai", label: "AI & Agents" },
  { id: "ml", label: "Machine Learning" },
  { id: "analytics", label: "Data Analytics" },
  { id: "web", label: "Web & Systems" },
  { id: "practice", label: "DSA & Practice" },
];

interface Project {
  id: number;
  title: string;
  description: string;
  tags: FilterType[];
  tech: string[];
  live: string | null;
  github: string | null;
  featured: boolean;
  emoji: string;
  gradient: string;
  colorPrimary: string;
  colorSecondary: string;
  keyFeatures: string[];
  challenges: string;
  learning: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Technical Interview Coach & Evaluator",
    description:
      "A real-time intelligent mock interview coach powered by Google Gemini 3.8 Flash across 5 specialized engineering tracks (DSA, Frontend, Backend, System Design, Behavioral) with two-way voice dictation and in-browser code execution sandbox.",
    tags: ["ai", "web"] as FilterType[],
    tech: ["React 19", "TypeScript 5.7", "Gemini 3.8 Flash", "Web Speech API", "Tailwind CSS", "Vite 6"],
    live: "https://preyal2.github.io/ai-interview-coach/",
    github: "https://github.com/preyal2/ai-interview-coach",
    featured: true,
    emoji: "🤖",
    gradient: "from-blue-600 via-indigo-600 to-cyan-500",
    colorPrimary: "#38BDF8",
    colorSecondary: "#2563EB",
    keyFeatures: [
      "Real-time multi-criteria scoring powered by Google Gemini 3.8 Flash across 5 tracks: DSA, Frontend, Backend, System Design, Behavioral",
      "Full bidirectional audio: AI problem narration and speech synthesis paired with live browser voice-to-text dictation",
      "In-browser multi-language code runner (Python, JavaScript, TypeScript, Java, C++) with time & space complexity grading",
      "Dynamic candidate readiness scorecards with actionable category breakdowns and model answers",
    ],
    challenges:
      "Orchestrating low-latency bidirectional voice streams while executing multi-tier Gemini prompt cascades and isolated code sandboxing.",
    learning: ["Gemini 3.8 API Integration", "Web Speech API", "In-Browser Code Execution", "Voice UX Design"],
  },
  {
    id: 2,
    title: "Student Academic Performance & Exam Prediction",
    description:
      "A predictive machine learning pipeline forecasting Math, Reading, and Writing exam scores with supervised regression models, comprehensive EDA correlation heatmaps, residual distribution plots, and an interactive web GUI.",
    tags: ["ml", "analytics"] as FilterType[],
    tech: ["Python 3.11", "Scikit-Learn", "XGBoost", "Pandas 2.x", "Seaborn", "HTML5/CSS3"],
    live: "https://preyal2.github.io/Student-Performance-Prediction/Development/frontend/",
    github: "https://github.com/preyal2/Student-Performance-Prediction",
    featured: true,
    emoji: "🎯",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    colorPrimary: "#A855F7",
    colorSecondary: "#7C3AED",
    keyFeatures: [
      "Supervised regression pipeline forecasting Math, Reading, and Writing scores using demographic and study habit indicators",
      "Rigorous Exploratory Data Analysis (EDA) with multi-variable correlation matrices, residual distribution plots, and RMSE optimization",
      "Trained multiple regressors (Random Forest, XGBoost, Ridge, Lasso) with cross-validation hyperparameter tuning",
      "Interactive prediction web interface with real-time inference execution and complete GTU academic case study documentation",
    ],
    challenges:
      "Engineering high-predictive-power feature sets from categorical socio-economic data while preventing data leakage and overfitting.",
    learning: ["Supervised Regression", "Feature Engineering", "Residual Analysis", "Model Deployment"],
  },
  {
    id: 3,
    title: "Smart Recipe Autonomous AI Culinary Agent",
    description:
      "An autonomous multi-step culinary AI agent that evaluates strict dietary restrictions, allergen constraints, and target calories with context-aware ingredient substitution algorithms and macro balancing.",
    tags: ["ai", "web"] as FilterType[],
    tech: ["TypeScript 5.7", "React 19", "Vite 6", "Autonomous Agents", "LLM Chaining", "Tailwind CSS"],
    live: "https://recipepreparationagent.netlify.app/",
    github: "https://github.com/preyal2/SmartRecipePreparationAgent",
    featured: true,
    emoji: "🧠",
    gradient: "from-orange-600 via-amber-600 to-red-600",
    colorPrimary: "#F97316",
    colorSecondary: "#EA580C",
    keyFeatures: [
      "Autonomous multi-step LLM reasoning engine evaluating strict dietary restrictions, allergen constraints, and caloric goals",
      "Context-aware culinary ingredient substitution algorithm utilizing semantic prompt chains and nutritional macro-balancing",
      "Step-by-step interactive cooking instructions with synchronized preparation timers and portion scaling",
      "Zero-runtime-error type-safe architecture engineered with TypeScript 5.7 and React 19",
    ],
    challenges:
      "Designing robust LLM chain validation routines to guarantee culinary feasibility and nutritional consistency across unpredictable user inputs.",
    learning: ["Autonomous Agent Workflows", "Semantic Prompt Chaining", "Constraint Satisfaction", "React 19"],
  },
  {
    id: 4,
    title: "DocuMorph — Lossless Word (.docx) ⇄ PDF Platform",
    description:
      "A high-fidelity bidirectional document conversion engine preserving complex layouts, custom fonts, multi-column tables, equations, and vector graphics with 100% on-device air-gapped security (zero cloud leakage).",
    tags: ["web"] as FilterType[],
    tech: ["Python 3.12", "FastAPI", "LibreOffice / COM Engine", "HTML5", "CSS3", "Glassmorphism"],
    live: "https://preyal2.github.io/documorph-converter/",
    github: "https://github.com/preyal2/documorph-converter",
    featured: true,
    emoji: "📄",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    colorPrimary: "#10B981",
    colorSecondary: "#059669",
    keyFeatures: [
      "High-fidelity bidirectional conversion preserving complex layouts, custom fonts, multi-column tables, equations, and vector graphics",
      "100% on-device air-gapped security architecture guaranteeing zero document leakage to external third-party cloud APIs",
      "High-speed FastAPI asynchronous REST backend paired with an elegant, responsive glassmorphic web conversion portal",
      "Automated document cleanup, mime-type verification, and streaming binary downloads",
    ],
    challenges:
      "Achieving pixel-perfect layout parity across complex embedded styles without commercial proprietary cloud conversion SDKs.",
    learning: ["FastAPI Asynchronous Pipelines", "Air-Gapped Security", "COM Automation", "Binary File Handling"],
  },
  {
    id: 5,
    title: "IronCore Gym Management & Fitness Enterprise",
    description:
      "A production-grade gym enterprise platform featuring decoupled MVC architecture, triple-tier RBAC (Admin, Trainer, Member), automated MySQL/SQLite PDO database fallback, and interactive Chart.js revenue analytics.",
    tags: ["web"] as FilterType[],
    tech: ["PHP 8.3", "MySQL", "SQLite", "Dual-Driver PDO", "JavaScript ES6+", "Chart.js", "Tailwind CSS"],
    live: "https://preyal2.github.io/ironcore-gym-management-system/",
    github: "https://github.com/preyal2/ironcore-gym-management-system",
    featured: true,
    emoji: "🏋️",
    gradient: "from-amber-600 via-red-600 to-rose-600",
    colorPrimary: "#EF4444",
    colorSecondary: "#DC2626",
    keyFeatures: [
      "Production-ready PHP 8.3 decoupled MVC architecture with normalized 19-table database schema and cascade constraints",
      "Automated zero-config PDO database fallback between MySQL and SQLite with dynamic SQL dialect translation",
      "Triple-Tier Role-Based Access Control (RBAC) with BCrypt session security for Admin, Trainer, and Member portals",
      "Financial & attendance telemetry: Interactive Chart.js graphs tracking Monthly Recurring Revenue (MRR) and attendance trends",
    ],
    challenges:
      "Architecting a dual-driver database abstraction layer that transparently handles SQLite vs MySQL dialect differences with zero code duplication.",
    learning: ["Decoupled MVC Architecture", "Database Normalization", "Dual-Driver Portability", "RBAC Security"],
  },
  {
    id: 6,
    title: "Movie Data Analytics & Box Office Intelligence",
    description:
      "An end-to-end Exploratory Data Analysis (EDA) pipeline analyzing 10,000+ films from 1960 to 2015 from the TMDb archive, discovering key ROI metrics, optimal runtime windows, and 50-year genre profitability heatmaps.",
    tags: ["analytics"] as FilterType[],
    tech: ["Python 3.12", "Pandas 2.x", "NumPy", "Matplotlib", "Seaborn Cubehelix", "Jupyter Lab"],
    live: null,
    github: "https://github.com/preyal2/Data-Analytics-with-Movie-Data",
    featured: true,
    emoji: "🎬",
    gradient: "from-fuchsia-600 via-pink-600 to-rose-600",
    colorPrimary: "#D946EF",
    colorSecondary: "#C026D3",
    keyFeatures: [
      "Point-to-point EDA pipeline cleaning, zero-value filtering, and profit metric engineering across 10,000+ TMDb films",
      "Quantitative proof demonstrating higher budgets yield >50% higher audience popularity with optimal 100–180 min commercial runtime",
      "Engineered dual decade heatmaps (budget × genre × year & revenue × genre × year) mapping genre profitability over 50 years",
      "Rigorous handling of zero-value outliers, inflation-adjusted profit margins, and distribution skewness",
    ],
    challenges:
      "Handling missing and zero revenue values in historical movie records without introducing survivor bias into longitudinal ROI conclusions.",
    learning: ["Longitudinal EDA", "Multivariate Correlation", "Seaborn Cubehelix Heatmaps", "Hypothesis Testing"],
  },
  {
    id: 7,
    title: "Modern Developer Portfolio & Digital Showcase",
    description:
      "A modern, high-performance developer portfolio built with React 19, TypeScript 5.7, Tailwind CSS, and Vite 6 — featuring live GitHub and LeetCode API telemetry, glassmorphic UI, and automated CI/CD.",
    tags: ["web"] as FilterType[],
    tech: ["React 19", "TypeScript 5.7", "Tailwind CSS", "Vite 6", "Framer Motion", "CI/CD"],
    live: "https://portfolio-preyal2s-projects.vercel.app",
    github: "https://github.com/preyal2/portfolio",
    featured: false,
    emoji: "🌐",
    gradient: "from-blue-600 via-violet-600 to-purple-600",
    colorPrimary: "#3B82F6",
    colorSecondary: "#7C3AED",
    keyFeatures: [
      "Ultra-responsive interactive UI engineered with React 19, TypeScript, and modern glassmorphic Tailwind styling",
      "Live API telemetry integration fetching real-time GitHub repositories, commit graphs, and LeetCode algorithmic stats",
      "Interactive Recruiter Action Hub with 1-click modal, direct PDF resume download, and verified certification viewer",
      "Dual deployment pipelines automated across Vercel and Netlify with instant build verifications",
    ],
    challenges:
      "Architecting a fast, accessible SPA with multiple live API calls while keeping Lighthouse score high through lazy loading and optimized assets.",
    learning: ["React 19 Architecture", "Strict TypeScript", "Performance Optimization", "Automated CI/CD"],
  },
  {
    id: 8,
    title: "Enterprise Campus Network Architecture & Simulation",
    description:
      "Modular Core, Distribution, and Access hierarchical enterprise campus network design featuring Router-on-a-Stick inter-VLAN routing, dynamic OSPF routing, DHCP pools, and extended Cisco IOS ACL traffic isolation.",
    tags: ["web"] as FilterType[],
    tech: ["Cisco IOS", "Packet Tracer (.pkt)", "MikroTik RouterOS", "802.1Q VLANs", "Multi-Area OSPF", "ACLs"],
    live: "https://github.com/preyal2/Campus-Network-Design-and-Implementation/blob/main/College%20Campus%20Network%20Design%20and%20Configuration.pdf",
    github: "https://github.com/preyal2/Campus-Network-Design-and-Implementation",
    featured: false,
    emoji: "🏫",
    gradient: "from-sky-600 via-blue-600 to-indigo-600",
    colorPrimary: "#0284C7",
    colorSecondary: "#1D4ED8",
    keyFeatures: [
      "Hierarchical campus topology: Modular Core, Distribution, and Access layers serving Academic, Administrative, Hostel, and Guest zones",
      "Inter-VLAN & Multi-Area OSPF: Robust Router-on-a-Stick sub-interfaces, dynamic OSPF routing with cost metrics, and central DHCP pools",
      "Enterprise Security Matrix: Extended Cisco IOS Access Control Lists (ACLs) isolating administrative servers and student networks",
      "Comprehensive GTU case study report with complete topology blueprints, CLI scripts, and packet captures",
    ],
    challenges:
      "Calculating optimal subnet boundaries and VLSM addressing to avoid route summarization overhead across multi-building campuses.",
    learning: ["Hierarchical Network Design", "802.1Q Trunking", "OSPF Routing Convergence", "Enterprise ACLs"],
  },
  {
    id: 9,
    title: "Smart College Transit & IoT Radar Simulation",
    description:
      "A modern, interactive College Transportation Web Platform featuring real-time GPS radar telemetry simulation, Web Speech voice alerts, Patan → ITR route timetable, dynamic student QR bus pass generator, seat occupancy heatmap, and emergency SOS alerts.",
    tags: ["web"] as FilterType[],
    tech: ["HTML5 Canvas", "Web Speech API", "Web Audio API", "JavaScript ES6+", "QR Pass Engine", "LocalStorage"],
    live: "https://smarttransport1.netlify.app/",
    github: "https://github.com/preyal2/smart-college-transport",
    featured: true,
    emoji: "🚌",
    gradient: "from-teal-600 via-emerald-600 to-cyan-600",
    colorPrimary: "#00C7B7",
    colorSecondary: "#06B6D4",
    keyFeatures: [
      "Live Bus Tracking Simulation & HTML5 Canvas Radar telemetry with variable speed controls (1x-5x)",
      "Web Speech Text-to-Speech voice announcements & procedural Web Audio synthesizer tones",
      "Verified digital student bus pass with holographic styling, dynamic Canvas QR generator, and PNG/PDF export",
      "Authentic 13-stop Patan → ITR route schedule, fare planner & interactive bus seat occupancy heatmap",
    ],
    challenges:
      "Implementing a real-time sweep radar and dynamic client-side matrix QR generator using pure HTML5 Canvas and Vanilla JavaScript with zero external dependencies.",
    learning: ["HTML5 Canvas Radar", "Web Speech & Audio APIs", "Simulation Engines", "Zero-Dependency Architecture"],
  },
  {
    id: 10,
    title: "Daily LeetCode Algorithmic Vault (245+ Solved)",
    description:
      "A curated algorithmic practice repository containing 245+ verified solutions (58 Easy, 141 Medium, 46 Hard) in Python 3.12 with sub-millisecond runtimes, optimal Big-O bounds, and automated LeetSync CI/CD synchronization.",
    tags: ["practice"] as FilterType[],
    tech: ["Python 3.12", "LeetSync CI/CD", "Big-O Analysis", "Data Structures", "Algorithms", "DSA"],
    live: "https://leetcode.com/u/preyal2/",
    github: "https://github.com/preyal2/daily-leetcode",
    featured: true,
    emoji: "⚡",
    gradient: "from-amber-500 via-yellow-500 to-orange-500",
    colorPrimary: "#F59E0B",
    colorSecondary: "#EA580C",
    keyFeatures: [
      "245+ verified solutions spanning 58 Easy, 141 Medium, and 46 Hard problems with sub-millisecond execution times",
      "Structured pattern matrix covering 8 domains: Two Pointers, Sliding Window, Linked Lists, Trees, DP, Backtracking, Graphs",
      "Continuous live LeetCode synchronization via LeetSync maintaining an active GitHub contribution streak",
      "Annotated with formal time and space complexity proofs and edge case breakdowns",
    ],
    challenges:
      "Consistently engineering optimal upper-bound asymptotic complexity solutions ($O(1)$ auxiliary space and $O(N)$ runtime).",
    learning: ["Algorithmic Optimization", "Complexity Analysis", "CI/CD LeetSync", "Competitive Programming"],
  },
  {
    id: 11,
    title: "Big Tech Coding Interview Patterns Masterclass",
    description:
      "Architectural blueprints and deep breakdowns of 14 essential algorithmic patterns (Sliding Window, Fast & Slow Pointers, Monotonic Stack, Top-K, In-Place Reversals) with strict UMPIRE methodology and Big-O proofs.",
    tags: ["practice"] as FilterType[],
    tech: ["Python 3.12", "UMPIRE Framework", "Mathematical Big-O Proofs", "14 Patterns", "DSA"],
    live: null,
    github: "https://github.com/preyal2/coding-interview-patterns",
    featured: false,
    emoji: "📐",
    gradient: "from-cyan-600 via-blue-600 to-indigo-600",
    colorPrimary: "#06B6D4",
    colorSecondary: "#2563EB",
    keyFeatures: [
      "14 Algorithmic Blueprints: Deep breakdowns of Sliding Window, Fast & Slow Pointers, Monotonic Stack, Top-K, In-Place Reversals",
      "UMPIRE Problem-Solving: Strict 6-step discipline (Understand, Match, Plan, Implement, Review, Evaluate) applied to every problem",
      "Formal mathematical Big-O time and space proofs with dry runs on critical edge cases",
      "Practical decision trees guiding optimal pattern selection based on constraints and data topologies",
    ],
    challenges:
      "Distilling complex algorithmic paradigms into intuitive, repeatable problem-matching templates.",
    learning: ["UMPIRE Problem Solving", "Pattern Recognition", "In-Depth Complexity Proofs", "Interview Strategy"],
  },
  {
    id: 12,
    title: "Beginner-to-Advanced DSA Roadmap & Problem Vault",
    description:
      "A progressive, structured DSA curriculum advancing from arrays and pointer arithmetic to advanced dynamic programming and graph algorithms — including an interactive 1,900+ problem tracking sheet and Tier-1 Google question vault.",
    tags: ["practice"] as FilterType[],
    tech: ["Python 3.12", "1,900+ Problem Sheet", "Tier-1 Google Vault", "Gemini 3.8 Copilot", "DSA"],
    live: null,
    github: "https://github.com/preyal2/dsa-beginner-to-advanced",
    featured: false,
    emoji: "🚀",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    colorPrimary: "#8B5CF6",
    colorSecondary: "#EC4899",
    keyFeatures: [
      "Curated Progressive Roadmap: Complete structured curriculum advancing from array fundamentals and pointer arithmetic to advanced DP and graphs",
      "1,900+ Problem Sheet: Interactive problem tracking matrix mapped across Tier-1 company archives and coding contest benchmarks",
      "AI Algorithmic Copilot: Integrated problem-solving frameworks powered by Gemini 3.8 Flash for hint generation and complexity optimization",
      "Comprehensive categorization with difficulty tiers and prerequisite dependency graphs",
    ],
    challenges:
      "Structuring an end-to-end curriculum that bridges the gap between novice fundamentals and FAANG-level hard problems.",
    learning: ["Curriculum Engineering", "Advanced Graph Theory", "Dynamic Programming", "AI Copilot Integration"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-2xl overflow-hidden group relative flex flex-col"
      style={{ border: `1px solid ${project.colorPrimary}20` }}
    >
      {/* Gradient banner */}
      <div
        className={`h-28 w-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center flex-shrink-0`}
      >
        {/* Subtle noise overlay on banner */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
        }} />
        <span className="text-5xl drop-shadow-lg relative z-10">{project.emoji}</span>
        {project.featured && (
          <span
            className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
            style={{
              background: "rgba(0,0,0,0.35)",
              border: "1px solid rgba(245,158,11,0.5)",
              color: "#FCD34D",
              backdropFilter: "blur(8px)",
            }}
          >
            <Star className="w-3 h-3 fill-current" />
            Featured
          </span>
        )}
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top, ${project.colorPrimary}08, transparent 55%)`,
        }}
      />

      {/* Card body */}
      <div className="p-6 relative z-10 flex flex-col flex-1">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3
            className="text-white font-bold text-lg leading-snug"
            style={{ fontFamily: "Poppins,sans-serif" }}
          >
            {project.title}
          </h3>
          {/* Action icons — top right */}
          <div className="flex gap-1.5 flex-shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View code on GitHub"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#A1A1AA",
                }}
                title="View on GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open live demo"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: `${project.colorPrimary}15`,
                  border: `1px solid ${project.colorPrimary}30`,
                  color: project.colorPrimary,
                }}
                title="Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                background: `${project.colorPrimary}10`,
                border: `1px solid ${project.colorPrimary}20`,
                color: project.colorPrimary,
                fontFamily: "JetBrains Mono,monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200 mb-3 self-start"
          style={{ color: project.colorPrimary }}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" /> Hide Details
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" /> Key Features &amp; Learnings
            </>
          )}
        </button>

        {/* Expanded details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Key Features */}
              <div className="mb-3">
                <p
                  className="text-white text-xs font-bold uppercase tracking-wide mb-2"
                  style={{ fontFamily: "JetBrains Mono,monospace" }}
                >
                  Key Features
                </p>
                <ul className="space-y-1">
                  {project.keyFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-xs text-[#A1A1AA] leading-relaxed"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: project.colorPrimary }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenge */}
              <div className="mb-3 p-3 rounded-xl" style={{ background: `${project.colorPrimary}08`, border: `1px solid ${project.colorPrimary}15` }}>
                <p
                  className="text-white text-xs font-bold uppercase tracking-wide mb-1"
                  style={{ fontFamily: "JetBrains Mono,monospace" }}
                >
                  Challenge Solved
                </p>
                <p className="text-[#A1A1AA] text-xs leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              {/* Learning Outcomes */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.learning.map((l) => (
                  <span
                    key={l}
                    className="px-2 py-0.5 rounded-md text-[10px] font-semibold"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      color: "#34D399",
                      fontFamily: "JetBrains Mono,monospace",
                    }}
                  >
                    ✓ {l}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA row */}
        <div className="flex gap-3 mt-auto pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#A1A1AA",
              }}
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${project.colorPrimary}, ${project.colorSecondary})`,
                boxShadow: `0 4px 15px ${project.colorPrimary}25`,
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {!project.github && !project.live && (
            <div
              className="flex-1 inline-flex items-center justify-center py-2.5 rounded-xl text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "#71717A",
              }}
            >
              🔒 In Development
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [active, setActive] = useState<FilterType>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <section
      id="projects"
      className="relative section-padding overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D0D16 0%, #0A0A0A 100%)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(ellipse, #7C3AED, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute inset-0 dot-pattern opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="12 Featured Repositories"
          title="Featured"
          highlight="Projects (12)"
          subtitle="Point-to-point production implementations spanning Generative AI agents, Machine Learning models, Exploratory Data Analytics, and full-stack systems."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Filter className="w-4 h-4 text-[#A1A1AA] self-center mr-1" />
          {filters.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background:
                  active === id
                    ? "linear-gradient(135deg,#2563EB,#7C3AED)"
                    : "rgba(255,255,255,0.04)",
                border:
                  active === id
                    ? "1px solid transparent"
                    : "1px solid rgba(255,255,255,0.08)",
                color: active === id ? "#FFFFFF" : "#A1A1AA",
                boxShadow:
                  active === id ? "0 4px 20px rgba(37,99,235,0.3)" : "none",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/preyal2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#FFFFFF",
            }}
          >
            <Github className="w-4 h-4" />
            View All Repositories on GitHub
            <ExternalLink className="w-3.5 h-3.5 text-[#A1A1AA]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
