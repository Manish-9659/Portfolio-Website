import React from 'react';
import { Award, Film, Palette, Star, Trophy, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-purple-900/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
              <Trophy className="w-3.5 h-3.5" />
              <span>Honors & Creative Laurels</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Awards, Laurels & Distinctions
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              Recognized internationally and inter-collegiately for visionary film direction, technical design, and storytelling.
            </p>
          </div>
        </div>

        {/* Feature Spotlight: CAIN Film Festival Laurel */}
        <div className="mt-10 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1c0f33] via-[#130b24] to-[#0a0514] border border-purple-700/50 shadow-2xl shadow-purple-950/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Laurel Graphic */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#0e071a]/90 border border-purple-800/40">
              {/* Cinema Laurel Wreath SVG */}
              <div className="relative mb-3 flex items-center justify-center">
                <svg className="w-32 h-24 text-purple-400 fill-current opacity-90" viewBox="0 0 100 80">
                  {/* Left Wreath Branch */}
                  <path d="M42 75 C30 70 15 50 20 20 C22 30 28 42 38 48 C28 40 24 25 28 10 C32 24 40 34 46 38 C38 30 36 15 42 5 C46 18 50 28 52 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Right Wreath Branch */}
                  <path d="M58 75 C70 70 85 50 80 20 C78 30 72 42 62 48 C72 40 76 25 72 10 C68 24 60 34 54 38 C62 30 64 15 58 5 C54 18 50 28 48 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                  <Film className="w-6 h-6 text-purple-300" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 mt-1">WINNER</span>
                </div>
              </div>

              <div className="text-xs font-mono text-purple-300 uppercase tracking-widest font-bold">
                MEI International
              </div>
              <div className="text-xs font-serif text-slate-300 mt-0.5">Film Festival 2024</div>
              <div className="mt-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-600/50 text-[11px] font-semibold text-purple-200">
                Best Debut Film
              </div>
            </div>

            {/* Description & Narrative */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>Premier Directorial Achievement</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                "CAIN" — Honored as Best Debut Film
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                As director, cinematographer, and post-production colorist, Manish spearheaded the short film "CAIN", creating a tense, psychologically gripping cinematic narrative. The film was evaluated and selected by an international jury at the MEI International Film Festival for its atmospheric visual language, sophisticated sound design, and color timing in DaVinci Resolve Studio.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Film className="w-4 h-4 text-purple-400" />
                  <span>Cinematography & Directing</span>
                </div>
                <span>·</span>
                <div>DaVinci Resolve Studio Color Grading</div>
                <span>·</span>
                <div>Festival Laurels & Trophy Awarded</div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {ACHIEVEMENTS.filter(a => a.category !== 'film' || a.award.includes('2nd')).map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#130b24] border border-purple-900/40 hover:border-purple-600/40 transition-colors space-y-3"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-purple-400">{item.organization}</span>
                <span className="font-semibold text-amber-300 font-mono text-xs">{item.award}</span>
              </div>
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
              <div className="pt-2 text-[11px] font-mono text-slate-400">
                Conferred: {item.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
