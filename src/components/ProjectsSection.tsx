import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight, BarChart2, CheckCircle2, Code2, Film, Layers, Sparkles, X } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'data-ai' | 'web' | 'creative'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 border-b border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-purple-900/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
              <Layers className="w-3.5 h-3.5" />
              <span>Engineered Solutions & Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Featured Projects & Flagship Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              From enterprise logistics dashboards and relational platforms to open-source developer tools and international award-winning cinema.
            </p>
          </div>

          {/* Interactive Filter Segmented Controls (§1.A allowed for interactive buttons) */}
          <div className="flex items-center p-1 bg-[#120a22] rounded-lg border border-purple-900/40 text-xs shrink-0 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Works ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('data-ai')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap ${
                activeFilter === 'data-ai'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Data & AI ({PROJECTS.filter(p => p.category === 'data-ai').length})
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap ${
                activeFilter === 'web'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Web Engineering ({PROJECTS.filter(p => p.category === 'web').length})
            </button>
            <button
              onClick={() => setActiveFilter('creative')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all whitespace-nowrap ${
                activeFilter === 'creative'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Creative & Film ({PROJECTS.filter(p => p.category === 'creative').length})
            </button>
          </div>
        </div>

        {/* Dynamic Bento / Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#130b24] border border-purple-900/35 hover:border-purple-600/50 transition-all duration-300 hover:-translate-y-1 group shadow-lg shadow-purple-950/20"
            >
              <div>
                {/* Clean unboxed metadata kicker */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-purple-400">{project.categoryLabel}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="font-mono">{project.duration}</span>
                  </div>
                  {project.impactMetric && (
                    <span className="text-[11px] font-mono text-emerald-400">
                      {project.impactMetric}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs font-medium text-slate-400 mt-1">
                  Role: <span className="text-slate-300">{project.role}</span>
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Bullet highlights */}
                <div className="space-y-1.5 mt-4 pt-4 border-t border-purple-900/20">
                  {project.highlights.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with Tools & Interactive Trigger */}
              <div className="pt-6 mt-4 border-t border-purple-900/30 flex flex-wrap items-center justify-between gap-3">
                {/* Tools used as clean typographic metadata */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-[#0b0614] border border-purple-900/30 text-purple-300">
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-200 transition-colors ml-auto group/btn"
                >
                  <span>Project Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl rounded-2xl bg-[#140c26] border border-purple-800/60 p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-purple-950/60 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
                <span>{selectedProject.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">{selectedProject.duration}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mt-1 pr-8">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-purple-300 mt-1 font-mono">
                Project Lead: {selectedProject.role}
              </p>

              <div className="my-5 p-4 rounded-xl bg-[#0c0717] border border-purple-900/40 text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </div>

              {selectedProject.impactMetric && (
                <div className="p-3 rounded-lg bg-purple-950/40 border border-purple-800/40 text-xs font-mono text-purple-300 mb-5">
                  ⭐ <span className="font-semibold text-white">Impact Benchmark:</span> {selectedProject.impactMetric}
                </div>
              )}

              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Key Engineering Highlights & Execution</h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-purple-900/30">
                <div className="text-xs font-semibold text-slate-400 mb-2">Technologies & Architecture:</div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tools.map((tool, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-[#090510] border border-purple-900/40 text-xs font-mono text-purple-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
