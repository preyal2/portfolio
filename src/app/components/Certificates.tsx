import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Award, X, ZoomIn, ExternalLink } from "lucide-react";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: string;
  color: string;
  badge: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Cyber Security Awareness Month",
    issuer: "DSCI & MyGov",
    date: "November 05, 2025",
    image: "/cert-cyber-security.jpg",
    category: "Cybersecurity",
    color: "from-red-500 to-rose-600",
    badge: "🔐",
  },
  {
    id: 2,
    title: "Data Privacy Pledge",
    issuer: "DSCI & MyGov",
    date: "November 11, 2025",
    image: "/cert-data-privacy.jpg",
    category: "Data Privacy",
    color: "from-blue-500 to-green-600",
    badge: "🛡️",
  },
  {
    id: 3,
    title: "Cybercrime-Free Digital Bharat",
    issuer: "Ministry of Home Affairs & I4C",
    date: "November 05, 2025",
    image: "/cert-cybercrime-free.jpg",
    category: "Cybersecurity",
    color: "from-amber-500 to-yellow-600",
    badge: "🇮🇳",
  },
  {
    id: 4,
    title: "Rashtriya Khel Mohatsav 2025",
    issuer: "Physical Education Foundation of India (PEFI)",
    date: "August 29, 2025",
    image: "/cert-khel-mohatsav.jpg",
    category: "Sports",
    color: "from-green-500 to-emerald-600",
    badge: "🏆",
  },
  {
    id: 5,
    title: "AI For All – AI Appreciate",
    issuer: "Intel & Digital India (CBSE)",
    date: "December 11, 2025",
    image: "/cert-intel-ai.jpg",
    category: "Artificial Intelligence",
    color: "from-blue-500 to-purple-600",
    badge: "🤖",
  },
];

export function Certificates() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-blue-600 font-medium text-sm uppercase tracking-widest mb-3">
            My Achievements
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Certificates
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mx-auto mb-6" />
          <p className="text-slate-500 max-w-xl mx-auto">
            Recognized achievements and certifications earned through participation, learning, and commitment to excellence.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(cert)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden bg-slate-50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback if image not found
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add(
                        "flex",
                        "items-center",
                        "justify-center"
                      );
                      const span = document.createElement("span");
                      span.className = "text-6xl";
                      span.textContent = cert.badge;
                      parent.appendChild(span);
                    }
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white font-medium text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <ZoomIn className="w-4 h-4" />
                    View Certificate
                  </div>
                </div>
                {/* Category badge */}
                <div
                  className={`absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white text-xs font-medium`}
                >
                  <Award className="w-3 h-3" />
                  {cert.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-blue-600 text-sm font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-slate-300 text-xs">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full"
            >
              {/* Lightbox Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-800">{selected.title}</h3>
                  <p className="text-blue-600 text-sm">{selected.issuer}</p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selected.image}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {/* Certificate Image */}
              <div className="p-4 bg-slate-50">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full rounded-lg object-contain max-h-[65vh]"
                />
              </div>
              {/* Footer */}
              <div className="px-5 py-3 border-t border-slate-100 flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full bg-gradient-to-r ${selected.color} text-white text-xs font-medium`}
                >
                  {selected.category}
                </span>
                <span className="text-slate-300 text-xs">{selected.date}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
