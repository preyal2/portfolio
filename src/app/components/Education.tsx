import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap, Calendar, Award, MapPin, CheckCircle2 } from "lucide-react";

const educations = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    period: "2025 – Present",
    institution: "Institute of Technology and Research, Mevad",
    university: "Gujarat Technological University",
    grade: null,
    status: "Ongoing",
    color: "#2563EB",
    emoji: "🎓",
    highlights: [
      "Specializing in Artificial Intelligence and Machine Learning",
      "Core courses: Database Management Systems, Object Oriented Programming",
      "Exploring Cloud Computing foundations and Distributed Systems",
      "Hands-on lab training in Data Structures & Algorithms",
    ],
  },
  {
    degree: "Diploma",
    field: "Computer Engineering",
    period: "2022 – 2025",
    institution: "K D Polytechnic, Patan",
    university: null,
    grade: "CGPA: 7.46",
    status: "Completed",
    color: "#7C3AED",
    emoji: "📜",
    highlights: [
      "Graduated with First Class Distinction",
      "Acquired strong foundations in Web Development (HTML/CSS/JS/PHP)",
      "Learned Computer Networks, Operating Systems, and Software Engineering",
      "Completed final year web-based project with practical DBMS implementation",
    ],
  },
  {
    degree: "Secondary School",
    field: "Science & Mathematics",
    period: "2021 – 2022",
    institution: "Shri J M Chaudhary Sarvajanik Vidyalaya",
    university: "Mehsana",
    grade: "60.34%",
    status: "Completed",
    color: "#38BDF8",
    emoji: "🏫",
    highlights: [
      "Strong focus on Physics, Chemistry, and Advanced Mathematics",
      "Acquired baseline computer fundamentals and logic design skills",
      "Engaged in technical science exhibitions and extracurriculars",
    ],
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="relative section-padding overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(ellipse, #2563EB, transparent 70%)", filter: "blur(60px)" }}
        />
        <div className="absolute inset-0 dot-pattern opacity-15" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeader
          badge="Education"
          title="Academic"
          highlight="Background"
          subtitle="Building a robust foundation in Computer Science and Engineering principles."
        />

        <div className="relative">
          {/* Vertical timeline spine */}
          <div
            className="absolute left-8 md:left-12 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(180deg, transparent, #2563EB 15%, #7C3AED 50%, #38BDF8 85%, transparent)",
            }}
          />

          <div className="flex flex-col gap-8">
            {educations.map((edu, i) => (
              <motion.div
                key={edu.degree + edu.period}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-20 md:pl-28"
              >
                {/* Timeline node */}
                <div
                  className="absolute left-5 md:left-9 top-6 w-8 h-8 rounded-full flex items-center justify-center -translate-x-1/2 z-10"
                  style={{
                    background: `linear-gradient(135deg, ${edu.color}, ${edu.color}88)`,
                    boxShadow: `0 0 20px ${edu.color}40`,
                    border: "3px solid #0A0A0A",
                  }}
                >
                  <GraduationCap className="w-3.5 h-3.5 text-white" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="glass-card rounded-2xl p-6 group relative overflow-hidden"
                  style={{ border: `1px solid ${edu.color}20` }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle at left, ${edu.color}06, transparent 65%)` }}
                  />

                  {/* Accent side bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ background: `linear-gradient(180deg, ${edu.color}, transparent)` }}
                  />

                  <div className="relative z-10">
                    {/* Title and Badge row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="text-xl">{edu.emoji}</span>
                          <span
                            className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                            style={{
                              background: edu.status === "Ongoing"
                                ? "rgba(16,185,129,0.12)"
                                : `${edu.color}15`,
                              border: `1px solid ${edu.status === "Ongoing" ? "rgba(16,185,129,0.22)" : edu.color + "25"}`,
                              color: edu.status === "Ongoing" ? "#34D399" : edu.color,
                              fontFamily: "JetBrains Mono,monospace",
                            }}
                          >
                            {edu.status === "Ongoing" ? "Active" : "Completed"}
                          </span>
                        </div>
                        <h3 className="text-white font-bold text-lg" style={{ fontFamily: "Poppins,sans-serif" }}>
                          {edu.degree}
                        </h3>
                        <p
                          className="font-semibold text-sm"
                          style={{
                            background: `linear-gradient(135deg, ${edu.color}, #38BDF8)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {edu.field}
                        </p>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <div className="flex items-center gap-1.5 text-xs text-[#A1A1AA] justify-end mb-1.5">
                          <Calendar className="w-3.5 h-3.5" style={{ color: edu.color }} />
                          {edu.period}
                        </div>
                        {edu.grade && (
                          <span
                            className="inline-block px-3 py-1 rounded-full text-xs font-bold"
                            style={{
                              background: `${edu.color}12`,
                              border: `1px solid ${edu.color}28`,
                              color: edu.color,
                              fontFamily: "JetBrains Mono,monospace",
                            }}
                          >
                            {edu.grade}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* School/College location */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5 text-xs text-[#A1A1AA]">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" style={{ color: edu.color }} />
                        {edu.institution}
                      </div>
                      {edu.university && (
                        <div className="flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-[#71717A]" />
                          {edu.university}
                        </div>
                      )}
                    </div>

                    {/* Highlights bullet checklist — easily readable for recruiter */}
                    <div>
                      <p
                        className="text-white text-xs font-bold uppercase tracking-wider mb-2.5"
                        style={{ fontFamily: "JetBrains Mono,monospace" }}
                      >
                        Key Highlights
                      </p>
                      <ul className="space-y-1.5">
                        {edu.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-[#A1A1AA] leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/80 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
