import { motion } from "motion/react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 ${
            centered ? "mx-auto" : ""
          }`}
          style={{
            background: "rgba(37,99,235,0.1)",
            border: "1px solid rgba(37,99,235,0.2)",
            color: "#93C5FD",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          {badge}
        </motion.div>
      )}

      <h2
        className={`font-bold mb-4 ${centered ? "mx-auto" : ""}`}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {highlight ? (
          <>
            {title}{" "}
            <span className="gradient-text">{highlight}</span>
          </>
        ) : (
          <span className="gradient-text">{title}</span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`text-[#A1A1AA] text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {subtitle}
        </p>
      )}

      <div className={`mt-5 h-[2px] w-16 rounded-full ${centered ? "mx-auto" : ""}`}
           style={{ background: "linear-gradient(90deg, #2563EB, #7C3AED)" }} />
    </motion.div>
  );
}
