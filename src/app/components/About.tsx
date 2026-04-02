import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Code2, BrainCircuit, Palette } from "lucide-react";

const stats = [
  { value: "2", label: "Internships" },
  { value: "3+", label: "Projects Built" },
  { value: "2", label: "Degrees" },
  { value: "2026", label: "Available From" },
];

const education = [
  {
    icon: GraduationCap,
    school: "Gujarat Power Engineering and Research Institute",
    degree: "Bachelor of Engineering — Computer Engineering",
    period: "2025 – 2028",
    skills: ["Web Design", "Software Development"],
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: GraduationCap,
    school: "K D Polytechnic",
    degree: "Diploma in Computer Engineering",
    period: "2022 – 2025",
    skills: ["Machine Learning", "Web Design"],
    color: "from-indigo-500 to-blue-600",
  },
];

const highlights = [
  {
    icon: MapPin,
    title: "Mehsana, Gujarat, India",
    subtitle: "Open to remote opportunities",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Calendar,
    title: "Available from 2026",
    subtitle: "Open to internships & full-time roles",
    color: "from-emerald-500 to-teal-600",
  },
];

const interests = [
  { icon: BrainCircuit, label: "Machine Learning" },
  { icon: Code2, label: "Software Development" },
  { icon: Palette, label: "Web Design" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-violet-600 font-medium text-sm uppercase tracking-widest mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Software Development &{" "}
              <span className="text-violet-600">Systems Design</span>
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Hi, I'm <strong>Preyal Modi</strong> — a dedicated Computer Engineering student
              from Mehsana, Gujarat, with a strong foundation in software development,
              systems design, and machine learning. I believe in building solutions that
              are not just functional but also thoughtfully designed.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              I've gained real-world experience through internships at{" "}
              <strong>InfoLabz</strong> (Machine Learning) and{" "}
              <strong>Flu Social</strong> (Web Design & Development). I'm passionate about
              combining ML intelligence with beautiful web interfaces to create impactful
              digital products.
            </p>

            {/* Interests */}
            <div className="flex flex-wrap gap-3 mb-8">
              {interests.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-slate-600 text-sm border border-slate-100 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-3">
              {highlights.map(({ icon: Icon, title, subtitle, color }) => (
                <div key={title} className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 text-sm">{title}</p>
                    <p className="text-slate-500 text-xs">{subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats + Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-100 text-center hover:shadow-md transition-shadow duration-200"
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                    {value}
                  </p>
                  <p className="text-slate-500 text-sm">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Education Cards */}
            <div className="flex flex-col gap-4">
              {education.map(({ icon: Icon, school, degree, period, skills, color }, i) => (
                <motion.div
                  key={school}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className={`bg-gradient-to-br ${color} rounded-2xl p-5 text-white`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-sm mb-0.5">{school}</p>
                      <p className="text-white/80 text-xs mb-2">{degree}</p>
                      <p className="text-white/60 text-xs mb-3">{period}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {skills.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full bg-white/15 text-xs text-white/90"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
