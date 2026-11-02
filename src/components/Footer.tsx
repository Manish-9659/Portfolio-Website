import React from 'react';
import { ArrowUp, Github, Heart, Linkedin, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#07040e] border-t border-purple-900/30 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-900/20">
          {/* Brand & Wordmark */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-mono font-bold text-xs">
              M
            </div>
            <div>
              <span className="font-bold text-white text-sm">{PERSONAL_INFO.name}</span>
              <span className="text-slate-500 ml-2">· {PERSONAL_INFO.role}</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
            <a href="#experience" className="hover:text-purple-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-purple-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-purple-300 transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-purple-300 transition-colors">Awards</a>
            <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#120a22] hover:bg-purple-950/60 text-slate-400 hover:text-white border border-purple-900/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#120a22] hover:bg-purple-950/60 text-slate-400 hover:text-white border border-purple-900/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-[#120a22] hover:bg-purple-950/60 text-slate-400 hover:text-white border border-purple-900/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-purple-900/40 hover:bg-purple-800 text-purple-300 hover:text-white border border-purple-700/50 transition-colors flex items-center gap-1.5 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-medium hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Built with Anna University CSE excellence.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted in</span>
            <span className="text-purple-400 font-medium">{PERSONAL_INFO.location}</span>
            <span>with passion & precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
