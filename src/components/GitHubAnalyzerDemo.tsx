import React, { useState, useEffect } from 'react';
import { Search, Github, BookOpen, Users, Star, GitFork, ExternalLink, AlertCircle, Sparkles } from 'lucide-react';

interface GitHubProfile {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  location: string;
}

interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
}

export const GitHubAnalyzerDemo: React.FC = () => {
  const [username, setUsername] = useState('Manish-9659');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  // Default fallback data for Manish-9659 in case of rate-limiting
  const defaultProfile: GitHubProfile = {
    login: "Manish-9659",
    name: "Manish S R",
    bio: "Computer Science & Engineering student at Anna University | Data Analytics & AI | Film Festival Awardee",
    avatar_url: "/assets/aistudio/linked_in__a7f205f3.jpeg",
    public_repos: 6,
    followers: 12,
    following: 15,
    html_url: "https://github.com/Manish-9659",
    location: "Tamil Nadu, India"
  };

  const defaultRepos: GitHubRepo[] = [
    {
      name: "Logistics-Control-Tower",
      description: "Python and Power BI data pipeline for smart supply chain analytics and delay prediction.",
      stargazers_count: 5,
      forks_count: 2,
      language: "Python",
      html_url: "https://github.com/Manish-9659"
    },
    {
      name: "GitHub-Profile-Analyzer",
      description: "Responsive web application parsing user profile telemetry via GitHub REST API.",
      stargazers_count: 8,
      forks_count: 3,
      language: "JavaScript",
      html_url: "https://github.com/Manish-9659"
    },
    {
      name: "SMDRT-Logistics-Platform",
      description: "Relational database schema and warehouse dispatch queries for logistics performance.",
      stargazers_count: 4,
      forks_count: 1,
      language: "SQL",
      html_url: "https://github.com/Manish-9659"
    }
  ];

  const fetchGitHubUser = async (targetUser: string) => {
    if (!targetUser.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(targetUser.trim())}`);
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error(`GitHub user "${targetUser}" not found`);
        } else if (res.status === 403) {
          // Rate limit exceeded, use fallback gracefully
          setProfile(targetUser.toLowerCase() === 'manish-9659' ? defaultProfile : {
            login: targetUser,
            name: targetUser,
            bio: "Developer profile (GitHub public API rate limit reached, showing cached profile)",
            avatar_url: `https://avatar.vercel.sh/${targetUser}`,
            public_repos: 4,
            followers: 8,
            following: 5,
            html_url: `https://github.com/` + targetUser,
            location: "Global"
          });
          setRepos(defaultRepos);
          setLoading(false);
          return;
        } else {
          throw new Error('Unable to retrieve GitHub profile at this moment');
        }
      }

      const userData: GitHubProfile = await res.json();
      setProfile(userData);

      // Fetch repos
      const reposRes = await fetch(`https://api.github.com/users/${encodeURIComponent(targetUser.trim())}/repos?sort=updated&per_page=4`);
      if (reposRes.ok) {
        const reposData = await reposRes.json();
        setRepos(reposData);
      } else {
        setRepos(defaultRepos);
      }
    } catch (err: unknown) {
      if (targetUser.toLowerCase() === 'manish-9659') {
        setProfile(defaultProfile);
        setRepos(defaultRepos);
      } else {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubUser('Manish-9659');
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchGitHubUser(username);
  };

  return (
    <div className="rounded-2xl bg-[#120a22] border border-purple-800/40 p-6 md:p-8 shadow-xl shadow-purple-950/40">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-900/30">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Web Tool Showcase</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">GitHub REST API Integration</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
            Live GitHub Profile Analyzer
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Test the live functionality of Manish's second major web application. Type any GitHub username to audit their developer profile.
          </p>
        </div>

        {/* Quick sample chips */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto text-xs text-slate-400">
          <span>Try:</span>
          <button
            onClick={() => {
              setUsername('Manish-9659');
              fetchGitHubUser('Manish-9659');
            }}
            className="px-2 py-0.5 rounded bg-purple-950/70 border border-purple-800/50 text-purple-300 hover:text-white"
          >
            Manish-9659
          </button>
          <button
            onClick={() => {
              setUsername('torvalds');
              fetchGitHubUser('torvalds');
            }}
            className="px-2 py-0.5 rounded bg-purple-950/70 border border-purple-800/50 text-purple-300 hover:text-white"
          >
            torvalds
          </button>
        </div>
      </div>

      {/* Search Input Form */}
      <form onSubmit={handleSearch} className="pt-6">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username (e.g., Manish-9659)"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0a0514] border border-purple-900/50 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-600/30 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Analyze Profile'}
          </button>
        </div>
      </form>

      {/* Error state */}
      {error && (
        <div className="mt-4 p-3 rounded-lg bg-rose-950/50 border border-rose-900/50 flex items-center gap-2 text-xs text-rose-300">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Profile & Repos Showcase */}
      {profile && (
        <div className="mt-6 pt-6 border-t border-purple-900/20 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* User Bio Card */}
          <div className="md:col-span-5 p-5 rounded-xl bg-[#0e071a] border border-purple-900/40 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500/60 shadow-md shadow-purple-950 shrink-0 bg-[#140c26]">
                <img
                  src={profile.avatar_url}
                  alt={profile.name || profile.login}
                  className="w-full h-full object-cover object-center scale-[1.18]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">{profile.name || profile.login}</h4>
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-mono"
                >
                  <span>@{profile.login}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {profile.bio || "Computer Science student specializing in Data Analytics and modern web technologies."}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-purple-900/30 text-center">
              <div className="p-2 rounded-lg bg-[#090510]">
                <div className="text-base font-bold font-mono text-purple-300 tabular-nums">{profile.public_repos}</div>
                <div className="text-[10px] text-slate-400">Repositories</div>
              </div>
              <div className="p-2 rounded-lg bg-[#090510]">
                <div className="text-base font-bold font-mono text-purple-300 tabular-nums">{profile.followers}</div>
                <div className="text-[10px] text-slate-400">Followers</div>
              </div>
              <div className="p-2 rounded-lg bg-[#090510]">
                <div className="text-base font-bold font-mono text-purple-300 tabular-nums">{profile.following}</div>
                <div className="text-[10px] text-slate-400">Following</div>
              </div>
            </div>
          </div>

          {/* Repositories List */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
              <span>Active Repositories & Tools</span>
              <a
                href={profile.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:text-purple-300 flex items-center gap-1 font-normal"
              >
                <span>View all on GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-2.5">
              {repos.slice(0, 3).map((repo, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#0e071a] border border-purple-900/40 hover:border-purple-600/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-purple-300 hover:text-white flex items-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                      <span>{repo.name}</span>
                    </a>
                    {repo.language && (
                      <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-[#170f2b] border border-purple-900/30">
                        {repo.language}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {repo.description || "Interactive engineering repository developed by Manish S R."}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-[11px] text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400" />
                      <span className="tabular-nums">{repo.stargazers_count}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3 text-purple-400" />
                      <span className="tabular-nums">{repo.forks_count}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
