import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Folder, Award, Briefcase, Code2, Flame, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Folder,
    value: 10,
    suffix: "+",
    label: "Projects Built",
    description: "AI, Web & ML projects",
    color: "#2563EB",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: Briefcase,
    value: 3,
    suffix: "+",
    label: "Internships Completed",
    description: "Emerging Tech, ML & Web Dev",
    color: "#7C3AED",
    gradient: "from-violet-600 to-violet-400",
  },
  {
    icon: Award,
    value: 30,
    suffix: "+",
    label: "Certifications & Badges",
    description: "IBM, AICTE, NPTEL & GTU",
    color: "#38BDF8",
    gradient: "from-sky-600 to-sky-400",
  },
  {
    icon: Flame,
    value: 365,
    suffix: "+",
    label: "Days Coding",
    description: "Daily LeetCode practice",
    color: "#F97316",
    gradient: "from-orange-600 to-orange-400",
  },
  {
    icon: Code2,
    value: 20,
    suffix: "+",
    label: "GitHub Repos",
    description: "Open source & personal",
    color: "#10B981",
    gradient: "from-emerald-600 to-emerald-400",
  },
  {
    icon: TrendingUp,
    value: 100,
    suffix: "%",
    label: "Growth Mindset",
    description: "Always learning, always growing",
    color: "#EC4899",
    gradient: "from-pink-600 to-pink-400",
  },
];

function AnimatedCounter({
  target,
  suffix,
  color,
}: {
  target: number;
  suffix: string;
  color: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-4xl font-extrabold" style={{ color, fontFamily: "Poppins,sans-serif" }}>
      {count}
      <span>{suffix}</span>
    </div>
  );
}

export function Achievements() {
  return (
    <section
      id="achievements"
      className="relative section-padding overflow-hidden"
      style={{ background: "linear-gradient(180deg, #09090B 0%, #0D0D14 50%, #09090B 100%)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="Milestones"
          title="By the"
          highlight="Numbers"
          subtitle="Small steps every day, big leaps over time."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 text-center group relative overflow-hidden cursor-default"
                style={{ border: `1px solid ${item.color}18` }}
              >
                {/* Radial glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${item.color}10, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10`}
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>

                {/* Counter */}
                <div className="relative z-10 mb-1">
                  <AnimatedCounter target={item.value} suffix={item.suffix} color={item.color} />
                </div>

                {/* Label */}
                <p className="text-white font-semibold text-sm mb-1 relative z-10" style={{ fontFamily: "Poppins,sans-serif" }}>
                  {item.label}
                </p>
                <p className="text-[#71717A] text-xs relative z-10">{item.description}</p>

                {/* Shimmer line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
