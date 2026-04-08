import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Monitor, Database, CloudRain, Layers, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  category: string;
  github: string;
  live: string;
  icon: any;
  color: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A highly responsive, modern dark-themed personal portfolio showcasing professional web development skills with dynamic filtering.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    features: ["Modern dark aesthetics", "Smooth scroll animations", "Responsive Grid UI"],
    category: "web",
    github: "https://github.com/preyal2",
    live: "#",
    icon: Layers,
    color: "from-blue-500 to-green-500",
  },
  {
    id: 2,
    title: "Library Management System",
    description: "A comprehensive OOP-driven application to manage library inventory, handle borrow/return logic, and track student records securely.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Java", "OOP", "MySQL", "JDBC"],
    features: ["Add/Remove books", "Issue & Return logic", "Late fine calculation"],
    category: "software",
    github: "https://github.com/preyal2",
    live: "#",
    icon: Database,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A real-time weather forecasting application fetching live location-based climatic conditions via RESTful APIs.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["JavaScript", "OpenWeather API", "HTML/CSS"],
    features: ["Live weather search", "5-day forecast mapping", "Auto location detection"],
    category: "api",
    github: "https://github.com/preyal2",
    live: "#",
    icon: CloudRain,
    color: "from-green-400 to-green-600",
  },
  {
    id: 4,
    title: "Online Shopping Cart",
    description: "A dynamic frontend e-commerce web application that allows users to browse products, manage their cart, and simulate checkout.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["HTML", "CSS", "JavaScript"],
    features: ["Add to cart functionality", "Dynamic price calculation", "Responsive checkout UI"],
    category: "web",
    github: "https://github.com/preyal2",
    live: "#",
    icon: Monitor,
    color: "from-blue-500 to-slate-400",
  },
];

const filters = ["All", "web", "software", "api"];
const filterLabels: Record<string, string> = {
  All: "All Projects",
  web: "Web Development",
  software: "Programming / OOP",
  api: "API / Mini Projects",
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
    <section id="projects" className="py-24 bg-[#0F172A]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-green-500 font-medium text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" /> Feature Work
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Real-World Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto">
            Practical projects built with clean code and modern technologies demonstrating both front-end aesthetics and backend logic.
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
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                activeFilter === f
                  ? "bg-blue-600 text-white shadow-blue-500/20 shadow-lg scale-105"
                  : "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {filterLabels[f]}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative h-60 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Category badge */}
                  <div className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 backdrop-blur-md text-slate-200 text-xs font-medium uppercase tracking-wider`}>
                    <project.icon className="w-3.5 h-3.5 text-blue-400" />
                    {filterLabels[project.category]}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="font-bold text-2xl text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-[15px] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map(feature => (
                        <li key={feature} className="text-sm text-slate-300 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Spacer to push buttons to bottom if descriptions vary */}
                  <div className="mt-auto">
                    {/* Tags (Technologies) */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white rounded-xl text-sm font-semibold transition-colors"
                      >
                        <Github className="w-4 h-4" /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
