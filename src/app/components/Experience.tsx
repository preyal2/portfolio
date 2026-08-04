import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Emerging Technologies Intern",
    company: "Edunet Foundation",
    location: "India (Remote)",
    period: "Jun 12, 2026 – Jul 10, 2026",
    duration: "4 weeks",
    type: "Full-time",
    color: "#2563EB",
    colorSecondary: "#6366F1",
    gradient: "from-blue-600 to-indigo-500",
    emoji: "🤖",
    summary:
      "Completed a 4-week internship in Emerging Technologies (Agentic AI, Cyber Security & Quantum Computing) leveraging IBM SkillsBuild, IBM Cloud, and IBM BoB — organised by Edunet Foundation in collaboration with AICTE.",
    impact: [
      "Developed an industry-relevant project in Artificial Intelligence and Cloud Computing",
      "Explored Agentic AI concepts and autonomous agent architectures using IBM tools",
      "Completed modules on Cyber Security fundamentals and threat-analysis frameworks",
      "Gained hands-on exposure to Quantum Computing principles on IBM platforms",
      "Awarded Certificate of Completion by Edunet Foundation & AICTE (Internship ID: INTERNSHIP_177763906469f49e98e105d)",
    ],
    tags: ["Agentic AI", "Cyber Security", "Quantum Computing", "IBM SkillsBuild", "IBM Cloud", "IBM BoB"],
    link: null,
  },
  {
    role: "Machine Learning Intern",
    company: "InfoLabz IT Services Pvt Ltd",
    location: "Ahmedabad, Gujarat",
    period: "June 2024 – August 2024",
    duration: "3 months",
    type: "Full-time",
    color: "#2563EB",
    colorSecondary: "#7C3AED",
    gradient: "from-blue-600 to-violet-600",
    emoji: "🤖",
    summary:
      "Built and evaluated machine learning models for real-world business forecasting and predictive analytics in a production environment.",
    impact: [
      "Developed predictive ML models using Python — improving forecast accuracy",
      "Performed data preprocessing, feature engineering, and EDA on business datasets",
      "Evaluated model performance with cross-validation and accuracy metrics",
      "Visualized insights using Matplotlib and presented findings to the team",
      "Collaborated with senior engineers on model optimization strategies",
    ],
    tags: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Feature Engineering"],
    link: null,
  },
  {
    role: "Web Development Intern",
    company: "Flu Social Pvt Ltd",
    location: "Gujarat, India",
    period: "August 2023 – September 2023",
    duration: "2 months",
    type: "Full-time",
    color: "#38BDF8",
    colorSecondary: "#22C55E",
    gradient: "from-sky-500 to-emerald-500",
    emoji: "🌐",
    summary:
      "Developed responsive, pixel-perfect websites for live client projects with cross-browser compatibility and WordPress deployments.",
    impact: [
      "Built fully responsive websites from design mockups for real clients",
      "Ensured pixel-perfect UI and cross-browser compatibility across all deliverables",
      "Worked with WordPress for client CMS deployments and customizations",
      "Collaborated in an agile team environment on multiple concurrent projects",
      "Applied accessibility and performance best practices throughout",
    ],
    tags: ["HTML", "CSS", "JavaScript", "WordPress", "Responsive Design", "UI/UX"],
    link: null,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative section-padding overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #0D0D16 100%)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-[-80px] bottom-0 w-[350px] h-[350px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #38BDF8, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="absolute inset-0 dot-pattern opacity-15" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeader
          badge="3+ Internships Completed"
          title="Professional"
          highlight="Experience (3+)"
          subtitle="Real-world internship experience spanning 3+ completed roles in Emerging Technologies (Edunet × AICTE × IBM), Machine Learning (InfoLabz), and Web Development (Flu Social)."
        />

        {/* Experience cards — vertical stack, no alternating (cleaner on all screen sizes) */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div
                className="glass-card rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${exp.color}22` }}
              >
                {/* Gradient top stripe */}
                <div className={`h-1 w-full bg-gradient-to-r ${exp.gradient}`} />

                <div className="p-6">
                  {/* ── Header row ── */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                    {/* Left: role + company */}
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 mt-0.5"
                        style={{
                          background: `${exp.color}12`,
                          border: `1px solid ${exp.color}22`,
                        }}
                      >
                        {exp.emoji}
                      </div>

                      <div>
                        {/* Role title — biggest, first thing a recruiter reads */}
                        <h3
                          className="text-white font-bold text-xl leading-tight mb-1"
                          style={{ fontFamily: "Poppins,sans-serif" }}
                        >
                          {exp.role}
                        </h3>
                        {/* Company name — second most important */}
                        <p
                          className="font-semibold text-base mb-2"
                          style={{ color: exp.color, fontFamily: "Inter,sans-serif" }}
                        >
                          {exp.company}
                        </p>
                        {/* Meta row: date, location, type */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#A1A1AA]">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" style={{ color: exp.color }} />
                            {exp.period}
                            <span
                              className="px-2 py-0.5 rounded-full font-medium"
                              style={{
                                background: `${exp.color}12`,
                                border: `1px solid ${exp.color}22`,
                                color: exp.color,
                                fontFamily: "JetBrains Mono,monospace",
                              }}
                            >
                              {exp.duration}
                            </span>
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3 h-3" style={{ color: exp.color }} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: type badge */}
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap self-start"
                      style={{
                        background: `${exp.color}12`,
                        border: `1px solid ${exp.color}28`,
                        color: exp.color,
                        fontFamily: "JetBrains Mono,monospace",
                      }}
                    >
                      <Briefcase className="w-3 h-3" />
                      {exp.type} Internship
                    </span>
                  </div>

                  {/* Separator */}
                  <div className="h-px mb-5" style={{ background: `${exp.color}14` }} />

                  {/* Summary */}
                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-5" style={{ fontFamily: "Inter,sans-serif" }}>
                    {exp.summary}
                  </p>

                  {/* Impact bullets — what they actually did */}
                  <div className="mb-5">
                    <p
                      className="text-white text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2"
                      style={{ fontFamily: "JetBrains Mono,monospace" }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Key Contributions
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {exp.impact.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-[#A1A1AA] leading-snug"
                        >
                          <span
                            className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: `${exp.color}15` }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: exp.color }}
                            />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: `${exp.color}10`,
                          border: `1px solid ${exp.color}20`,
                          color: exp.color,
                          fontFamily: "JetBrains Mono,monospace",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
