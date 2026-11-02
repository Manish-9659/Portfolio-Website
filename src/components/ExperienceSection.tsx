import React from 'react';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-purple-900/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Professional Industry Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Internship & Applied Engineering
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              Practical exposure to real-world corporate data pipelines, AI modeling, and logistics decision intelligence.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="pt-10 max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-6 sm:pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:to-purple-950"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 w-5 h-5 rounded-full bg-[#120a22] border-2 border-purple-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-purple-400 shadow-sm shadow-purple-500" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#130b24] border border-purple-900/40 shadow-xl shadow-purple-950/20 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-900/30 pb-4">
                  <div>
                    <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase">
                      {exp.company}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{exp.period}</span>
                    </div>
                    <span>·</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements Bullets */}
                <div className="space-y-3 pt-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Core Contributions & Business Impact
                  </h4>
                  <div className="space-y-2.5">
                    {exp.bulletPoints.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-purple-900/30">
                  <div className="text-xs text-slate-400 mb-2">Technologies & Competencies:</div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[#0a0514] border border-purple-900/40 text-xs font-mono text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
