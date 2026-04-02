import { useRef } from "react";
import { motion, useInView } from "motion/react";

const skillCategories = [
  {
    title: "Web Development",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-100",
    skills: [
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Tailwind CSS", level: 78 },
    ],
  },
  {
    title: "Machine Learning",
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
    skills: [
      { name: "Python", level: 85 },
      { name: "scikit-learn", level: 78 },
      { name: "Data Analysis", level: 80 },
      { name: "TensorFlow / Keras", level: 65 },
    ],
  },
  {
    title: "Tools & Design",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-100",
    skills: [
      { name: "Figma / UI Design", level: 82 },
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 92 },
      { name: "MySQL / Databases", level: 72 },
    ],
  },
];

const techTags = [
  "Python", "JavaScript", "HTML5", "CSS3", "React",
  "Tailwind CSS", "scikit-learn", "TensorFlow", "Pandas",
  "NumPy", "Node.js", "MySQL", "Git", "GitHub",
  "Figma", "Bootstrap", "REST APIs", "Linux", "VS Code",
];

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-700">{name}</span>
        <span className="text-xs text-slate-400">{level}%</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-violet-600 font-medium text-sm uppercase tracking-widest mb-3">
            What I work with
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Skills &amp; Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto" />
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + catIdx * 0.1 }}
              className={`${category.bgColor} rounded-2xl p-6 border ${category.borderColor}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <h3 className="font-bold text-slate-800">{category.title}</h3>
              </div>
              {category.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={category.color}
                  delay={0.4 + catIdx * 0.1 + skillIdx * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech Tags Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-slate-500 text-sm mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.03 }}
                className="px-4 py-1.5 bg-white rounded-full text-slate-600 text-sm border border-slate-200 hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50 transition-all duration-200 cursor-default shadow-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
