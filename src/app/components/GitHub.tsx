import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import {
  Github, Star, GitFork, Users, BookOpen, Code2, ExternalLink, Eye,
} from "lucide-react";

const GITHUB_USERNAME = "preyal2";

interface GitHubProfile {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  homepage: string | null;
  topics: string[];
  updated_at: string;
  watchers_count: number;
}

const languageColors: Record<string, string> = {
  Python: "#3B82F6",
  JavaScript: "#EAB308",
  TypeScript: "#38BDF8",
  HTML: "#F97316",
  CSS: "#8B5CF6",
  Java: "#F59E0B",
  C: "#6366F1",
  "C++": "#06B6D4",
  PHP: "#7C3AED",
  Shell: "#22C55E",
  default: "#A1A1AA",
};

function getLangColor(lang: string | null) {
  if (!lang) return languageColors.default;
  return languageColors[lang] || languageColors.default;
}

export function GitHub() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=8`),
        ]);

        if (!profileRes.ok || !reposRes.ok) throw new Error("GitHub API failed");

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        setProfile(profileData);
        setRepos(reposData.filter((r: GitHubRepo) => !r.name.includes(GITHUB_USERNAME)));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id="github"
      className="relative section-padding overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D0D14 0%, #09090B 100%)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-[-100px] top-1/4 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)", filter: "blur(80px)" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-15" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="GitHub Activity"
          title="Open Source &"
          highlight="Contributions"
          subtitle="Exploring ideas and building in public. Every commit tells a story."
        />

        {loading && (
          <div className="flex justify-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-12 h-12 rounded-full border-2 border-t-transparent animate-spin"
                style={{ borderColor: "rgba(37,99,235,0.3)", borderTopColor: "#2563EB" }}
              />
              <p className="text-[#A1A1AA] text-sm" style={{ fontFamily: "JetBrains Mono,monospace" }}>
                Fetching GitHub data...
              </p>
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-16">
            <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
              <Github className="w-12 h-12 text-[#A1A1AA] mx-auto mb-4" />
              <p className="text-white font-semibold mb-2">GitHub data unavailable</p>
              <p className="text-[#A1A1AA] text-sm mb-6">API rate limit may apply. View directly on GitHub.</p>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm hover:-translate-y-0.5 transition-transform duration-300"
              >
                <Github className="w-4 h-4" />
                Visit GitHub Profile
              </a>
            </div>
          </div>
        )}

        {!loading && !error && profile && (
          <div className="space-y-8">
            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={profile.avatar_url}
                  alt={profile.name}
                  className="w-20 h-20 rounded-2xl border-2"
                  style={{ borderColor: "rgba(37,99,235,0.3)" }}
                />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "Poppins,sans-serif" }}>
                    {profile.name || profile.login}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm mb-3">@{profile.login}</p>
                  {profile.bio && (
                    <p className="text-[#A1A1AA] text-sm mb-4">{profile.bio}</p>
                  )}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-6">
                    {[
                      { icon: BookOpen, value: profile.public_repos, label: "Repositories" },
                      { icon: Users, value: profile.followers, label: "Followers" },
                      { icon: Code2, value: profile.following, label: "Following" },
                    ].map(({ icon: Icon, value, label }) => (
                      <div key={label} className="text-center">
                        <div className="flex items-center gap-1.5 text-white font-bold text-lg">
                          <Icon className="w-4 h-4 text-blue-400" />
                          {value}
                        </div>
                        <p className="text-[#A1A1AA] text-xs">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-violet-600 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
                >
                  <Github className="w-4 h-4" />
                  View Profile
                </a>
              </div>
            </motion.div>

            {/* GitHub Contribution Heatmap embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6 text-center overflow-hidden"
            >
              <p className="text-[#A1A1AA] text-xs mb-4 font-semibold tracking-widest uppercase" style={{ fontFamily: "JetBrains Mono,monospace" }}>
                Contribution Activity
              </p>
              <div className="overflow-x-auto">
                <img
                  src={`https://ghchart.rshah.org/2563EB/${GITHUB_USERNAME}`}
                  alt="GitHub contribution graph"
                  className="mx-auto rounded-lg"
                  style={{ maxWidth: "100%", filter: "hue-rotate(0deg) saturate(1.5)" }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
            </motion.div>

            {/* Repos Grid */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6" style={{ fontFamily: "Poppins,sans-serif" }}>
                📁 Latest <span className="gradient-text">Repositories</span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {repos.slice(0, 8).map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ y: -4 }}
                    className="glass-card rounded-xl p-4 flex flex-col gap-3 group"
                    style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2 min-w-0">
                        <BookOpen className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-white text-sm font-semibold truncate group-hover:text-blue-400 transition-colors" style={{ fontFamily: "JetBrains Mono,monospace" }}>
                          {repo.name}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-[#71717A] group-hover:text-blue-400 transition-colors flex-shrink-0 ml-1" />
                    </div>

                    {repo.description && (
                      <p className="text-[#A1A1AA] text-xs leading-relaxed line-clamp-2 flex-1">
                        {repo.description}
                      </p>
                    )}

                    <div className="flex items-center gap-4 mt-auto">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <div
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                            style={{ background: getLangColor(repo.language) }}
                          />
                          <span className="text-[#A1A1AA] text-xs">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-[#A1A1AA] text-xs">
                        <Star className="w-3 h-3" />
                        {repo.stargazers_count}
                      </div>
                      <div className="flex items-center gap-1 text-[#A1A1AA] text-xs">
                        <GitFork className="w-3 h-3" />
                        {repo.forks_count}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
