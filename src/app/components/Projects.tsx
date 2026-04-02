import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ExternalLink, Github, BrainCircuit, Globe, Layers } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  live: string;
  icon: typeof BrainCircuit;
  color: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "ML Prediction Model",
    description:
      "A machine learning project built during my internship at InfoLabz. Developed a predictive model using Python and scikit-learn to solve a classification problem with real-world data, including data preprocessing and model evaluation.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSSUyMG5ldXJhbCUyMG5ldHdvcmslMjBwcm9qZWN0fGVufDF8fHx8MTc3NTEyOTg4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "scikit-learn", "Pandas", "NumPy"],
    category: "ml",
    github: "https://github.com/preyal2",
    live: "#",
    icon: BrainCircuit,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 2,
    title: "Flu Social Website",
    description:
      "Designed and developed a responsive website during my internship at Flu Social. Built modern web pages using HTML, CSS, and JavaScript with a focus on clean UI and smooth user experience.",
    image:
      "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc1MTI5ODg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["HTML", "CSS", "JavaScript", "Web Design"],
    category: "web",
    github: "https://github.com/preyal2",
    live: "#",
    icon: Globe,
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience. Built with React and Tailwind CSS, featuring smooth animations, responsive design, and a modern UI.",
    image:
      "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHByb2plY3QlMjBsYXB0b3B8ZW58MXx8fHwxNzc1MTI4ODUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Tailwind CSS", "TypeScript", "Motion"],
    category: "web",
    github: "https://github.com/preyal2",
    live: "#",
    icon: Layers,
    color: "from-pink-500 to-rose-500",
  },
];

const filters = ["All", "ml", "web"];
const filterLabels: Record<string, string> = {
  All: "All Projects",
  ml: "Machine Learning",
  web: "Web Development",
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-violet-600 font-medium text-sm uppercase tracking-widest mb-3">
            What I've built
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto mb-6" />
          <p className="text-slate-500 max-w-xl mx-auto">
            Projects from my internships and personal learning — spanning machine
            learning models to responsive web applications.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-200"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {filterLabels[f]}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-violet-200 shadow-sm hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Category badge */}
                  <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-medium`}>
                    <project.icon className="w-3 h-3" />
                    {filterLabels[project.category]}
                  </div>
                  {/* Action buttons on hover */}
                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-slate-700 hover:bg-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-slate-700 hover:bg-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-slate-800 mb-2 group-hover:text-violet-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-violet-50 text-violet-700 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/preyal2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-200 text-slate-600 font-medium hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
