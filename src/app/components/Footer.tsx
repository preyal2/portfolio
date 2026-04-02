import { Code2, Heart, Github, Linkedin, ArrowUp, Mail, Instagram } from "lucide-react";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold leading-none">Preyal Modi</p>
              <p className="text-xs text-slate-500 mt-0.5">Software Development · Systems Design</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-5">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm hover:text-violet-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
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
                aria-label={label}
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center hover:border-violet-500 hover:text-violet-400 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-sm flex items-center gap-1.5">
            Made with{" "}
            <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" /> by
            Preyal Modi &copy; {new Date().getFullYear()} · Mehsana, Gujarat,
            India
          </p>
          <button
            onClick={scrollTop}
            className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center hover:border-violet-500 hover:text-violet-400 transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
