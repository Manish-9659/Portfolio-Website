import React, { useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone, Database, Film, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_STATS } from '../data/portfolioData';

interface HeroProps {
  openResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ openResumeModal }) => {
  const [activeLens, setActiveLens] = useState<'analytics' | 'creative'>('analytics');

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-radial-purple border-b border-purple-900/20">
      {/* Background ambient decorative grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f14350d_1px,transparent_1px),linear-gradient(to_bottom,#1f14350d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & Focal Profile Lockup */}
          <div className="lg:col-span-7 space-y-6">
            {/* Focal Profile Photo & Name Lockup */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 pt-2">
              <div className="relative shrink-0">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 shadow-2xl shadow-purple-600/40 glow-purple">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#140c26]">
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-center scale-[1.18]"
                    />
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500 text-[10px] font-mono font-semibold text-emerald-300 shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-purple-400 uppercase">
                  <span>Available for 2026/2027 Roles</span>
                  <span aria-hidden="true" className="text-purple-600">·</span>
                  <span className="text-slate-400">Anna University</span>
                </div>
                {/* Name made significantly bigger and striking */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                  MANISH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400">S R</span>
                </h1>
                <p className="text-sm sm:text-base font-semibold text-purple-300 font-mono">
                  Data Analytics & AI Engineer · Logistics Intelligence
                </p>
              </div>
            </div>

            {/* Value Proposition Display Sub-Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100 text-balance leading-snug">
              Transforming <span className="text-purple-300">Complex Data</span> Into Strategic Business Impact.
            </h2>

            {/* Editorial Lead Prose */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Computer Science & Engineering undergraduate at Anna University with hands-on internship experience in supply chain logistics intelligence, predictive modeling, and interactive Power BI architectures—complemented by international award-winning creative direction in cinema.
            </p>

            {/* Clean Metadata with typographic separators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Thuckalay, Tamil Nadu, India</span>
              </div>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-purple-300 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-purple-300 transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Projects & Dashboards</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={openResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-purple-200 bg-[#170e2b] hover:bg-[#20143d] border border-purple-800/40 rounded-lg transition-all hover:border-purple-600/60"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>View & Download Resume</span>
              </button>
            </div>

            {/* Social Proof Profiles */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs text-slate-500">Connect:</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-purple-300 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-purple-400" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-purple-300 transition-colors"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>GitHub</span>
              </a>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <a
                href="#contact"
                className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
              >
                Send Direct Message →
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Dual-Lens Profile Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#140c26]/90 border border-purple-800/30 p-6 shadow-2xl shadow-purple-950/50 backdrop-blur-sm">
              {/* Card Header with Lens Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-purple-900/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">manish_profile.env</span>
                </div>

                {/* Interactive Lens Switcher */}
                <div className="flex items-center p-0.5 bg-[#0b0714] rounded-lg border border-purple-900/40 text-xs">
                  <button
                    onClick={() => setActiveLens('analytics')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all font-medium ${
                      activeLens === 'analytics'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Database className="w-3 h-3" />
                    <span>Data & AI</span>
                  </button>
                  <button
                    onClick={() => setActiveLens('creative')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all font-medium ${
                      activeLens === 'creative'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Film className="w-3 h-3" />
                    <span>Film & Directing</span>
                  </button>
                </div>
              </div>

              {/* Lens Content */}
              {activeLens === 'analytics' ? (
                <div className="space-y-4 pt-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-white">Logistics & Predictive Modeling</h3>
                      <p className="text-xs text-slate-400">FemtoSoft Technologies Intern · Supply Chain Analytics</p>
                    </div>
                    <span className="font-mono text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                      Active Model
                    </span>
                  </div>

                  {/* Simulated Telemetry Block */}
                  <div className="p-3.5 rounded-lg bg-[#0c0717] border border-purple-900/40 font-mono text-xs space-y-2 text-slate-300">
                    <div className="flex justify-between items-center text-purple-300">
                      <span>PROJECT: Smart Control Tower</span>
                      <span className="text-[11px] text-slate-500">v2.4-Colab</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">On-Time Delivery Target:</span>
                      <span className="text-emerald-400 font-semibold tabular-nums">98.4% achieved</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Primary Dashboards:</span>
                      <span className="text-slate-200">Power BI · DAX · Python</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Query Optimization:</span>
                      <span className="text-purple-300">Normalized SQL Views</span>
                    </div>
                  </div>

                  {/* Core competencies highlights */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>End-to-end data cleaning & automated outlier detection</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Interactive visual dashboards for executive decision-making</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 pt-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-white">Cinematography & Creative Direction</h3>
                      <p className="text-xs text-purple-400">MEI International Film Festival · Winner</p>
                    </div>
                    <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#0c0717] border border-purple-900/40 space-y-2 text-xs">
                    <div className="font-semibold text-purple-300">Debut Short Film: "CAIN"</div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      Directed, timed, and graded using DaVinci Resolve Studio. Honored by an international jury for pacing, sound design, and narrative tension.
                    </p>
                    <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-400">
                      <span>DaVinci Resolve Studio</span>
                      <span>·</span>
                      <span>Canva Visuals</span>
                      <span>·</span>
                      <span>Color Timing</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Second Prize: Poster Design (AI in Education Symposium)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>Second Prize: Inter-Collegiate Short Film Contest</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Card Footer Quote */}
              <div className="mt-5 pt-3 border-t border-purple-900/30 flex items-center justify-between text-xs text-slate-400">
                <span className="italic">"Data gives clarity; storytelling moves people."</span>
                <div className="flex items-center gap-1.5 font-semibold text-purple-300">
                  <div className="w-5 h-5 rounded-full overflow-hidden border border-purple-500/60 shrink-0 bg-[#140c26]">
                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-center scale-[1.18]"
                    />
                  </div>
                  <span>— Manish S R</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: 4-Column Metric Strip (§1.H) */}
        <div className="mt-16 pt-10 border-t border-purple-900/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {HIGHLIGHT_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#120a22]/60 border border-purple-900/30 hover:border-purple-600/40 transition-colors"
              >
                <div className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 font-mono tabular-nums">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">{stat.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
