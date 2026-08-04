import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Github, ExternalLink, Star, Filter, ChevronDown, ChevronUp } from "lucide-react";

type FilterType = "all" | "ai" | "web" | "ml" | "practice";

const filters: { id: FilterType; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI" },
  { id: "web", label: "Web" },
  { id: "ml", label: "Machine Learning" },
  { id: "practice", label: "Coding Practice" },
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
    title: "Smart Recipe Preparation Agent",
    description:
      "An AI-powered recipe preparation web application that helps users discover recipes, ingredients, and cooking instructions through a clean, responsive, and user-friendly interface.",
    tags: ["ai", "web"] as FilterType[],
    tech: ["HTML", "CSS", "JavaScript", "AI", "Responsive Design"],
    live: "https://recipepreparationagent.netlify.app/",
    github: "https://github.com/preyal2/SmartRecipePreparationAgent",
    featured: true,
    emoji: "🍳",
    gradient: "from-orange-600 via-red-600 to-pink-600",
    colorPrimary: "#F97316",
    colorSecondary: "#EC4899",
    keyFeatures: [
      "AI-driven recipe discovery and recommendation engine",
      "Smart ingredient list with quantity scaling",
      "Step-by-step cooking instructions with timers",
      "Fully responsive design across all devices",
    ],
    challenges:
      "Integrating an AI agent into a pure HTML/CSS/JS architecture without a backend framework required careful API orchestration and graceful error handling.",
    learning: ["AI API Integration", "UX Design", "Vanilla JS Architecture"],
  },
  {
    id: 2,
    title: "Personalized Nutrition Agent",
    description:
      "An AI-powered nutrition assistant that recommends personalized diet plans using user preferences such as age, food choices, health conditions, and location.",
    tags: ["ai", "ml"] as FilterType[],
    tech: ["AI", "JavaScript", "React", "Machine Learning"],
    live: null,
    github: null,
    featured: false,
    emoji: "🥗",
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    colorPrimary: "#22C55E",
    colorSecondary: "#38BDF8",
    keyFeatures: [
      "User profiling via age, health goals, and dietary preferences",
      "AI-generated personalized meal plans",
      "Nutritional breakdown per recommended meal",
      "Location-aware food suggestions",
    ],
    challenges:
      "Building a reliable AI model that accounts for diverse dietary restrictions and local food availability while maintaining recommendation quality.",
    learning: ["Health AI", "Personalization Algorithms", "React State Management"],
  },
  {
    id: 3,
    title: "Developer Portfolio",
    description:
      "A modern developer portfolio showcasing projects, internships, certifications, GitHub stats, skills, and achievements with premium animations and fully responsive design.",
    tags: ["web"] as FilterType[],
    tech: ["React", "Tailwind CSS", "Vite", "TypeScript", "Framer Motion"],
    live: "https://preyal1portfolio.netlify.app/",
    github: "https://github.com/preyal2/portfolio",
    featured: false,
    emoji: "💼",
    gradient: "from-blue-600 via-violet-600 to-purple-600",
    colorPrimary: "#2563EB",
    colorSecondary: "#7C3AED",
    keyFeatures: [
      "Live GitHub API & LeetCode stats integration",
      "Glassmorphism dark theme with custom cursor",
      "Animated section reveals and micro-interactions",
      "Certificate viewer with modal & download",
    ],
    challenges:
      "Architecting a fast, accessible SPA with multiple live API calls while keeping Lighthouse score high through lazy loading and optimized assets.",
    learning: ["React Architecture", "API Integration", "Performance Optimization"],
  },
  {
    id: 4,
    title: "Daily LeetCode",
    description:
      "A repository containing daily Data Structures and Algorithms solutions demonstrating consistency, problem-solving skills, and rigorous interview preparation.",
    tags: ["practice"] as FilterType[],
    tech: ["Python", "Java", "Data Structures", "Algorithms", "DSA"],
    live: null,
    github: "https://github.com/preyal2/daily-leetcode",
    featured: false,
    emoji: "⚡",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    colorPrimary: "#F59E0B",
    colorSecondary: "#F97316",
    keyFeatures: [
      "Organised by problem category (Arrays, Trees, DP, Graphs)",
      "Multiple language solutions (Python + Java)",
      "Consistent daily commit streak",
      "Annotated with time & space complexity analysis",
    ],
    challenges:
      "Maintaining daily consistency while balancing internships, coursework, and project development without sacrificing solution quality.",
    learning: ["DSA Mastery", "Problem Patterns", "Interview Readiness"],
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
          badge="Featured Work"
          title="My"
          highlight="Projects"
          subtitle="Building practical solutions at the intersection of AI, Web, and Data."
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
