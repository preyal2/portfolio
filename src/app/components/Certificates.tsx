import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { CertificateModal } from "./CertificateModal";
import {
  ExternalLink, Award, Calendar, Trophy, Eye, Download,
} from "lucide-react";

export interface Certificate {
  title: string;
  issuer: string;
  issuerShort: string;
  date: string;
  type: string;
  skills: string[];
  color: string;
  emoji: string;
  credentialUrl: string | null;
  score: string | null;
  gradient: string;
  imagePath: string | null;
}

export const certificates: Certificate[] = [
  {
    title: "4-Week Internship in Emerging Technologies",
    issuer: "Edunet Foundation × AICTE",
    issuerShort: "Edunet",
    date: "Jun 12 – Jul 10, 2026",
    type: "Internship Certificate",
    skills: ["Agentic AI", "Cyber Security", "Quantum Computing", "IBM SkillsBuild", "IBM Cloud"],
    color: "#2563EB",
    emoji: "🤖",
    credentialUrl: null,
    score: "ID: INTERNSHIP_177763906469f49e98e105d",
    gradient: "from-blue-600 to-indigo-600",
    imagePath: "/certificates/edunet-emerging-tech-internship.jpg",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    issuerShort: "IBM",
    date: "Jun 22, 2026",
    type: "Course Certificate",
    skills: ["AI Fundamentals", "Machine Learning Basics", "Neural Networks", "IBM Watson"],
    color: "#7C3AED",
    emoji: "🧠",
    credentialUrl: "https://www.credly.com/badges/755ad53a-777d-4e88-b533-414f93e07f12",
    score: null,
    gradient: "from-violet-600 to-purple-600",
    imagePath: "/certificates/ibm-getting-started-ai.jpg",
  },
  {
    title: "Journey to Cloud: Envisioning Your Solution",
    issuer: "IBM SkillsBuild",
    issuerShort: "IBM",
    date: "Jun 24, 2026",
    type: "Course Certificate",
    skills: ["Cloud Architecture", "IBM Cloud", "Cloud Strategy", "Solution Design"],
    color: "#38BDF8",
    emoji: "☁️",
    credentialUrl: "https://www.credly.com/badges/87bea39d-7709-42b6-940e-b45defc86aa2",
    score: null,
    gradient: "from-cyan-600 to-teal-600",
    imagePath: "/certificates/ibm-journey-to-cloud.jpg",
  },
  {
    title: "Getting Started with Cybersecurity",
    issuer: "IBM SkillsBuild",
    issuerShort: "IBM",
    date: "Jun 24, 2026",
    type: "Course Certificate",
    skills: ["Cybersecurity Fundamentals", "Network Security", "Threat Analysis", "Security Protocols"],
    color: "#22C55E",
    emoji: "🔐",
    credentialUrl: "https://www.credly.com/badges/1756a8a2-b4f7-4da6-af11-c51e866cc98b",
    score: null,
    gradient: "from-emerald-600 to-green-600",
    imagePath: "/certificates/ibm-cybersecurity.jpg",
  },
  {
    title: "Business Analytics and Data Mining Modeling using R",
    issuer: "NPTEL — IIT Roorkee",
    issuerShort: "NPTEL",
    date: "Jan – Apr 2026",
    type: "Elite · 12-Week Course · 4 Credits",
    skills: ["R Programming", "Data Mining", "Business Analytics", "Statistical Modeling", "IIT Roorkee"],
    color: "#F59E0B",
    emoji: "🏆",
    credentialUrl: null,
    score: "62% · Elite",
    gradient: "from-amber-600 to-orange-600",
    imagePath: "/certificates/nptel-business-analytics.jpg",
  },
  {
    title: "Advanced Web Development with Tailwind CSS",
    issuer: "GTU-ITR",
    issuerShort: "GTU-ITR",
    date: "Nov 10 – Nov 14, 2025",
    type: "Workshop & Hands on Training",
    skills: ["Tailwind CSS", "Web Development", "HTML5", "Responsive Design", "Frontend Development"],
    color: "#2563EB",
    emoji: "🎨",
    credentialUrl: null,
    score: "Cert No: GTU-ITR/CE/Workshop/2025/49",
    gradient: "from-sky-400 to-blue-500",
    imagePath: "/certificates/gtu-itr-tailwind.jpg",
  },
];

export function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="relative section-padding overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-[-100px] top-1/3 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Credentials"
          title="Verified"
          highlight="Certifications (30+)"
          subtitle="Over 30+ verified certificates, badges, and learning milestones from IBM SkillsBuild, Edunet × AICTE, NPTEL (IIT Roorkee), and GTU-ITR."
        />

        {/* Drive Link Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(124,58,237,0.08))",
            border: "1px solid rgba(37,99,235,0.25)",
          }}
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="text-2xl flex-shrink-0">📂</span>
            <div>
              <h4 className="text-white font-bold text-sm" style={{ fontFamily: "Poppins,sans-serif" }}>
                Full Certificate Repository (30+ Credentials)
              </h4>
              <p className="text-[#A1A1AA] text-xs">
                View all original certificates, course completion letters, and badges stored on Google Drive.
              </p>
            </div>
          </div>
          <a
            href="https://drive.google.com/drive/u/2/folders/13RzKm24o8PFo9S9sfnpyM99dtJg9AWXt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-300 hover:scale-105 whitespace-nowrap shadow-lg"
            style={{
              background: "linear-gradient(135deg, #2563EB, #7C3AED)",
              boxShadow: "0 4px 14px rgba(37,99,235,0.3)",
            }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View 30+ Certs on Google Drive
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl overflow-hidden group relative cursor-default flex flex-col"
              style={{ border: `1px solid ${cert.color}20` }}
            >
              {/* Gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${cert.gradient}`} />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top, ${cert.color}08, transparent 60%)` }}
              />

              <div className="p-5 relative z-10 flex flex-col flex-1">
                {/* Issuer + icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold"
                      style={{
                        background: `${cert.color}15`,
                        border: `1px solid ${cert.color}25`,
                        color: cert.color,
                        fontFamily: "Poppins,sans-serif",
                      }}
                    >
                      <Award className="w-3.5 h-3.5" />
                      {cert.issuer}
                    </div>
                    {cert.credentialUrl && (
                      <span
                        className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold"
                        style={{
                          background: "rgba(34,197,94,0.12)",
                          border: "1px solid rgba(34,197,94,0.25)",
                          color: "#34D399",
                          fontFamily: "JetBrains Mono,monospace",
                        }}
                      >
                        ✓ Verified Badge
                      </span>
                    )}
                  </div>
                  <span className="text-3xl">{cert.emoji}</span>
                </div>

                {/* Title */}
                <h3
                  className="text-white font-bold text-base leading-snug mb-2 flex-1"
                  style={{ fontFamily: "Poppins,sans-serif" }}
                >
                  {cert.title}
                </h3>

                {/* Type & Date */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-xs text-[#A1A1AA]">
                  <span className="flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5" style={{ color: cert.color }} />
                    {cert.type}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" style={{ color: cert.color }} />
                    {cert.date}
                  </span>
                </div>

                {/* Extra Meta information (score / cert code) */}
                {cert.score && (
                  <div className="mb-4">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#E4E4E7",
                        fontFamily: "JetBrains Mono,monospace",
                      }}
                    >
                      {cert.score.startsWith("Cert") || cert.score.startsWith("ID:") ? "" : "Result: "}{cert.score}
                    </span>
                  </div>
                )}

                {/* Skills gained */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-medium"
                      style={{
                        background: `${cert.color}10`,
                        border: `1px solid ${cert.color}18`,
                        color: cert.color,
                        fontFamily: "JetBrains Mono,monospace",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2 mt-auto">
                  <div className="flex gap-2">
                    {/* View Certificate */}
                    <button
                      onClick={() => setSelected(cert)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: `linear-gradient(135deg, ${cert.color}, ${cert.color}cc)`,
                        boxShadow: `0 4px 12px ${cert.color}20`,
                      }}
                    >
                      <Eye className="w-4 h-4" />
                      View Certificate
                    </button>

                    {/* Download */}
                    {cert.imagePath && (
                      <a
                        href={cert.imagePath}
                        download
                        onClick={(e) => e.stopPropagation()}
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#A1A1AA",
                        }}
                        title="Download Certificate"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Blockchain Verify Badge button */}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(124,58,237,0.1))",
                        border: "1px solid rgba(37,99,235,0.22)",
                        color: "#93C5FD",
                      }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Verify Badge on Credly
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-center"
        >
          {[
            { emoji: "🏆", label: "Total Certifications", count: "30+ Verified Badges" },
            { emoji: "🏢", label: "Internships Done", count: "3+ Professional Experience" },
            { emoji: "🎓", label: "NPTEL & Universities", count: "IIT Roorkee & GTU Certified" },
          ].map(({ emoji, label, count }) => (
            <div
              key={label}
              className="glass-card px-5 py-3 rounded-xl flex items-center gap-3"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span className="text-xl">{emoji}</span>
              <div className="text-left">
                <p className="text-white text-sm font-semibold" style={{ fontFamily: "Poppins,sans-serif" }}>
                  {label}
                </p>
                <p
                  className="text-[#A1A1AA] text-xs font-medium"
                  style={{ fontFamily: "JetBrains Mono,monospace" }}
                >
                  {count}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <CertificateModal
        cert={selected}
        allCerts={certificates}
        onClose={() => setSelected(null)}
        onNavigate={(cert) => setSelected(cert)}
      />
    </section>
  );
}
