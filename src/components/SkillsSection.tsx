import React, { useState } from 'react';
import { Cpu, Database, Palette, Terminal, Globe, Award, Sparkles, Check, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES, SOFT_SKILLS, LANGUAGES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Database className="w-4 h-4 text-purple-400" />;
      case 1:
        return <Terminal className="w-4 h-4 text-purple-400" />;
      case 2:
        return <Globe className="w-4 h-4 text-purple-400" />;
      case 3:
        return <Palette className="w-4 h-4 text-purple-400" />;
      default:
        return <Cpu className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-purple-900/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical & Creative Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Skills, Toolsets & Methodologies
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              A balanced blend of analytical rigor in data science and high-end visual craftsmanship in digital media.
            </p>
          </div>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-[#130b24] border transition-all duration-300 flex flex-col justify-between ${
                selectedCategory === idx
                  ? 'border-purple-500 shadow-lg shadow-purple-950/40 bg-[#160d2a]'
                  : 'border-purple-900/40 hover:border-purple-700/50'
              }`}
              onClick={() => setSelectedCategory(idx)}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#0b0614] border border-purple-900/40">
                    {getCategoryIcon(idx)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{cat.category}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{cat.description}</p>
              </div>

              {/* Skills list inside category */}
              <div className="space-y-2.5 pt-4 border-t border-purple-900/30">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span className="font-mono text-[10px] text-purple-300">{skill.level}</span>
                    </div>
                    <p className="text-[11px] text-slate-400">{skill.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dual Strip: Soft Skills & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10 pt-6">
          {/* Soft Skills */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-[#120a22] border border-purple-900/40">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Core Working Strengths & Soft Skills</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SOFT_SKILLS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0b0614] border border-purple-900/30 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#120a22] border border-purple-900/40">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>Languages</span>
            </h4>
            <div className="space-y-2.5">
              {LANGUAGES.map((lang, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#0b0614] border border-purple-900/30 text-xs"
                >
                  <span className="font-semibold text-white">{lang.name}</span>
                  <span className="text-slate-400 font-mono text-[11px]">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
