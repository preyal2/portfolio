import { useState, useRef } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import {
  Mail, Phone, MapPin, Github, Linkedin, ExternalLink,
  Send, Download, Loader2, CheckCircle, AlertCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "modipreyal@gmail.com",
    href: "mailto:modipreyal@gmail.com",
    color: "#2563EB",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9104830813",
    href: "tel:+919104830813",
    color: "#10B981",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mehsana, Gujarat, India",
    href: null,
    color: "#8B5CF6",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/preyal2",
    href: "https://github.com/preyal2",
    color: "#A1A1AA",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/preyalmodi",
    href: "https://www.linkedin.com/in/preyalmodi",
    color: "#60A5FA",
  },
  {
    icon: ExternalLink,
    label: "Portfolio",
    value: "preyal1portfolio.netlify.app",
    href: "https://preyal1portfolio.netlify.app/",
    color: "#38BDF8",
  },
];

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Using Web3Forms (free, no backend needed)
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "ccf555c9-d212-44d6-8424-e3bae446ee92",
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      // Fallback: open email client
      const subject = encodeURIComponent(form.subject || "Portfolio Contact");
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:modipreyal@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.85rem 1.1rem",
    borderRadius: "0.75rem",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#FFFFFF",
    fontSize: "0.9rem",
    fontFamily: "Inter,sans-serif",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const inputFocusStyle = {
    borderColor: "rgba(37,99,235,0.5)",
    boxShadow: "0 0 0 3px rgba(37,99,235,0.08)",
  };

  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #2563EB, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionHeader
          badge="Get In Touch"
          title="Let's"
          highlight="Connect"
          subtitle="Open to internships, collaborations, and exciting opportunities."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white font-bold text-xl mb-3" style={{ fontFamily: "Poppins,sans-serif" }}>
              Ready to <span className="gradient-text">collaborate?</span>
            </h3>
            <p className="text-[#A1A1AA] leading-relaxed mb-8">
              Whether you have a project in mind, want to discuss AI, or just want to say hello — my inbox is always open!
            </p>

            {/* Contact cards */}
            <div className="space-y-3 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 group"
                  style={{ border: `1px solid ${color}15` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15` }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[#71717A] text-xs mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="text-white text-sm font-medium hover:text-blue-400 transition-colors truncate block"
                        style={{ fontFamily: "JetBrains Mono,monospace" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium" style={{ fontFamily: "JetBrains Mono,monospace" }}>
                        {value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)", boxShadow: "0 4px 15px rgba(37,99,235,0.3)" }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="https://github.com/preyal2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-7 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-1.5" style={{ fontFamily: "Inter,sans-serif" }}>
                    Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.08)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-1.5">
                    Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.08)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-1.5">
                  Subject <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  id="contact-subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.08)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-1.5">
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  onFocus={(e) => Object.assign(e.target.style, { ...inputFocusStyle, resize: "vertical", minHeight: "120px" })}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.08)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm"
                >
                  <CheckCircle className="w-4 h-4" />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Please try again.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg,#2563EB,#7C3AED)",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
                }}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
