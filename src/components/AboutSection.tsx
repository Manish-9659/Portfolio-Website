import React from 'react';
import { Compass, GraduationCap, Lightbulb, MapPin, Sparkles, Target, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
              <User className="w-3.5 h-3.5" />
              <span>Background & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Data Scientist by Discipline, Visual Storyteller by Instinct.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Based in Thuckalay, Tamil Nadu, I am currently pursuing my Bachelor of Engineering in Computer Science and Engineering at University College of Engineering, Nagercoil (Anna University).
              </p>
              <p>
                My technical obsession began with numbers and patterns—translating raw, messy logistics records into clean predictive architectures. During my internship at <span className="text-purple-300 font-semibold">FemtoSoft Technologies</span>, I dove into supply chain analytics, developing Power BI interactive control towers that allowed operators to immediately detect delivery bottlenecks and optimize transport routes.
              </p>
              <p>
                What sets my engineering approach apart is creative communication. As an international film festival award-winning director for my debut short film <span className="text-purple-300 font-semibold">"CAIN"</span> (MEI International Film Festival), I apply the exact same visual pacing, color harmony, and audience empathy to enterprise dashboards and data storytelling that I do to cinema.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-[#130b24] border border-purple-900/40 space-y-1.5">
                <Target className="w-4 h-4 text-purple-400" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Rigorous Precision</h4>
                <p className="text-[11px] text-slate-400">No guesswork; statistical evidence driving every conclusion.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#130b24] border border-purple-900/40 space-y-1.5">
                <Compass className="w-4 h-4 text-purple-400" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Business Impact</h4>
                <p className="text-[11px] text-slate-400">Transforming technical analysis into measurable operational ROI.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#130b24] border border-purple-900/40 space-y-1.5">
                <Lightbulb className="w-4 h-4 text-purple-400" />
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Visual Empathy</h4>
                <p className="text-[11px] text-slate-400">Dashboards crafted so any stakeholder can act immediately.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Profile At-A-Glance Bento Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#130b24] border border-purple-800/40 shadow-xl shadow-purple-950/30 space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/80 shadow-lg shadow-purple-600/40 glow-purple-sm shrink-0 bg-[#140c26]">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center scale-[1.15]"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-purple-300 font-medium font-mono">{PERSONAL_INFO.role}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-purple-400" />
                    <span>{PERSONAL_INFO.location}</span>
                  </p>
                </div>
              </div>

              {/* Fast facts */}
              <div className="space-y-3 pt-2 text-xs">
                <div className="flex justify-between py-2 border-b border-purple-900/30">
                  <span className="text-slate-400">Academic Institution:</span>
                  <span className="text-white font-medium text-right">Anna University (UCE Nagercoil)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-purple-900/30">
                  <span className="text-slate-400">Degree & Term:</span>
                  <span className="text-purple-300 font-mono">B.E. CSE (2023 – 2027)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-purple-900/30">
                  <span className="text-slate-400">Primary Domain:</span>
                  <span className="text-slate-200">Data Analytics & Predictive Logistics</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Creative Domain:</span>
                  <span className="text-slate-200">DaVinci Resolve / Film Directing</span>
                </div>
              </div>

              {/* Direct email CTA */}
              <div className="pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-950/80 hover:bg-purple-900 text-purple-200 border border-purple-700/50 text-xs font-semibold transition-colors"
                >
                  <span>Connect with Manish via Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
