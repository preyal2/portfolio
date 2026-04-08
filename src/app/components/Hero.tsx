import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Sparkles, Mail, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const profileImage = "/profile.jpg";

const roles = [
  "Software Developer",
  "Systems Designer",
  "ML Enthusiast",
  "Web Designer",
  "Problem Solver",
];

function RoleTyper({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[index];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index, roles]);

  return (
    <span className="text-blue-300 font-medium text-lg">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-green-600/20 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,92,246,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Available for internships &amp; collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Preyal Modi
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-0.5 w-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-full" />
            <RoleTyper roles={roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-slate-200 text-lg leading-relaxed mb-8 max-w-md"
          >
            A passionate Computer Engineering student from Mehsana, Gujarat, with
            hands-on internship experience in Machine Learning and Web Development.
            I love building smart, elegant solutions to real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all duration-200"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/preyal2",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/preyalmodi",
                label: "LinkedIn",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/preyal____/",
                label: "Instagram",
              },
              {
                icon: Mail,
                href: "mailto:modipreyal@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-200"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-green-600 blur-2xl opacity-40 scale-110" />
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/40"
              style={{ animation: "spin 20s linear infinite" }}
            />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <ImageWithFallback
                src={profileImage}
                alt="Preyal Modi"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -left-6 top-1/4 bg-white rounded-2xl px-4 py-2.5 shadow-xl"
            >
              <p className="text-xs text-slate-500">Education</p>
              <p className="font-bold text-slate-800">BE + Diploma</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              className="absolute -right-6 bottom-1/4 bg-white rounded-2xl px-4 py-2.5 shadow-xl"
            >
              <p className="text-xs text-slate-500">Internships</p>
              <p className="font-bold text-slate-800">2 Done</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors flex flex-col items-center gap-1"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
