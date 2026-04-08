import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Briefcase, CalendarDays, MapPin, CheckCircle } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Machine Learning Intern",
    company: "InfoLabz",
    location: "Gujarat, India",
    period: "Jun 2024 – Aug 2024",
    duration: "3 months",
    type: "Internship",
    color: "from-blue-500 to-purple-600",
    badge: "ML",
    highlights: [
      "Developed and trained machine learning models using Python and scikit-learn",
      "Performed data preprocessing, feature engineering, and model evaluation",
      "Gained hands-on experience with real-world ML pipelines and datasets",
      "Collaborated with the development team on AI-driven product features",
    ],
    skills: ["Python", "Machine Learning", "scikit-learn", "Pandas", "NumPy"],
  },
  {
    id: 2,
    role: "Website Designing and Development Intern",
    company: "Flu Social",
    location: "Gujarat, India",
    period: "Aug 2023",
    duration: "1 month",
    type: "Internship",
    color: "from-green-500 to-blue-600",
    badge: "Web",
    highlights: [
      "Designed and developed responsive web pages using HTML, CSS, and JavaScript",
      "Worked closely with the design team to implement UI/UX improvements",
      "Contributed to building web components and landing pages",
      "Gained practical experience in web development workflows",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Web Design", "Responsive Design"],
  },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-medium text-sm uppercase tracking-widest mb-3">
            Work history
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mx-auto mb-6" />
          <p className="text-slate-500 max-w-lg mx-auto">
            Real-world internship experience building ML solutions and web products.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-green-200 to-transparent md:-translate-x-px hidden sm:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-0 md:gap-8 items-start ${
                  i % 2 === 0 ? "" : "md:direction-rtl"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-green-600 border-4 border-white shadow-md -translate-x-1/2 z-10 hidden sm:block" />

                {/* Card — alternates left / right */}
                <div className={`${i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"} md:col-span-1`}>
                  <div className="bg-white rounded-2xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 overflow-hidden">
                    {/* Top gradient bar */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${exp.color}`} />

                    <div className="p-6">
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`text-xs font-bold px-2 py-0.5 rounded-full text-white bg-gradient-to-r ${exp.color}`}
                            >
                              {exp.badge}
                            </span>
                            <span className="text-xs text-slate-300 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="font-bold text-slate-800 text-lg">{exp.role}</h3>
                          <p className="text-blue-600 font-semibold text-sm">{exp.company}</p>
                        </div>
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <Briefcase className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="flex items-center gap-1.5 text-xs text-slate-500">
                          <CalendarDays className="w-3.5 h-3.5" />
                          {exp.period} · {exp.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="flex flex-col gap-2 mb-4">
                        {exp.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skill tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
