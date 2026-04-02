import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Mail,
  MapPin,
  Linkedin,
  Send,
  Github,
  CheckCircle,
  Instagram,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Mehsana, Gujarat, India",
    href: "https://maps.google.com/?q=Mehsana,Gujarat,India",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/preyalmodi",
    href: "https://www.linkedin.com/in/preyalmodi",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/preyal2",
    href: "https://github.com/preyal2",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "modipreyal@gmail.com",
    href: "mailto:modipreyal@gmail.com",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@preyal____",
    href: "https://www.instagram.com/preyal____/",
    color: "from-fuchsia-500 to-pink-500",
  },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-violet-600 font-medium text-sm uppercase tracking-widest mb-3">
            Say hello
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto mb-6" />
          <p className="text-slate-500 max-w-lg mx-auto">
            Whether you have a project idea, internship opportunity, or just want
            to connect — I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-violet-200 hover:shadow-md transition-all duration-200 group"
              >
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">{label}</p>
                  <p className="font-medium text-slate-700 group-hover:text-violet-700 transition-colors text-sm">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability Badge */}
            <div className="mt-2 p-5 bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl text-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium">Open to opportunities</span>
              </div>
              <p className="text-violet-200 text-sm">
                Currently looking for internships and project collaborations. Based in
                Mehsana, Gujarat — open to remote work too!
              </p>
            </div>

            {/* Quick links */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-sm font-medium text-slate-700 mb-3">Quick Links</p>
            <div className="flex gap-3 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/preyalmodi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0077B5] text-white text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/preyal2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/preyal____/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="mailto:modipreyal@gmail.com"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 max-w-xs">
                    Thanks for reaching out! I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 px-5 py-2 rounded-full border border-slate-200 text-slate-600 text-sm hover:border-violet-300 hover:text-violet-700 transition-all"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-600 mb-1.5 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder-slate-400 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-600 mb-1.5 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder-slate-400 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-600 mb-1.5 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Internship / Collaboration / Project"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder-slate-400 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-slate-600 mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Hi Preyal, I'd love to connect about..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 placeholder-slate-400 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
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
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
