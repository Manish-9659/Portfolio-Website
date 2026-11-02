import React from 'react';
import { Award, BookOpen, CheckCircle, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-purple-900/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Foundation & Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Education & Certifications
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              Strong theoretical groundwork in computer science backed by industry-standard certifications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
          {/* Left Column: Education Journey */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Formal Education</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#130b24] border border-purple-900/40 relative overflow-hidden group hover:border-purple-600/40 transition-colors"
                >
                  {/* Score badge / highlight */}
                  {edu.score && (
                    <div className="absolute top-5 right-5 text-right">
                      <span className="text-lg sm:text-xl font-bold font-mono text-purple-300 tabular-nums">
                        {edu.score}
                      </span>
                      <div className="text-[10px] text-purple-400 font-mono uppercase tracking-wider">
                        {edu.scoreLabel}
                      </div>
                    </div>
                  )}

                  <div className="text-xs font-mono text-purple-400 mb-1">{edu.period}</div>
                  <h4 className="text-base sm:text-lg font-bold text-white pr-16">{edu.degree}</h4>
                  <div className="text-xs text-slate-300 mt-1 font-medium">{edu.institution}</div>

                  {edu.description && (
                    <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-purple-900/20 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Industry Certifications */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Professional Certifications</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#130b24] border border-purple-900/40 flex flex-col justify-between hover:border-purple-600/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="font-mono text-[11px] text-purple-400">{cert.issuer}</span>
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
                        <CheckCircle className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug">{cert.title}</h4>
                  </div>

                  <div className="mt-4 pt-2 border-t border-purple-900/20 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="capitalize text-slate-400">{cert.category} Domain</span>
                    <span className="font-mono text-purple-300">{cert.status}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Credential summary box */}
            <div className="p-4 rounded-xl bg-[#0e071a] border border-purple-800/30 text-xs text-slate-300 leading-relaxed">
              <span className="font-semibold text-purple-300">Continuous Upskilling:</span> Actively pursuing specialized coursework in Applied Machine Learning, advanced DAX for Power BI enterprise cubes, and scalable database performance tuning.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
