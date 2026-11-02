import React, { useEffect } from 'react';
import { Download, ExternalLink, FileText, Printer, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col rounded-2xl bg-[#140c26] border border-purple-800/60 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d0718] border-b border-purple-900/40">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-900/40 text-purple-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Manish S R — Official Curriculum Vitae</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 border border-purple-700/50 text-purple-300">
                  PDF
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Verified Academic & Industry Profile · Anna University CSE
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Manish_S_R_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-purple-950/50 border border-purple-900/30 transition-colors"
              title="Open raw PDF in new browser tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-purple-950/50 border border-purple-900/30 transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full bg-[#1b122e] relative overflow-hidden">
          <iframe
            src={`${PERSONAL_INFO.resumePath}#toolbar=1&navpanes=0&scrollbar=1`}
            title="Manish S R Resume"
            className="w-full h-full border-0"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#0d0718] border-t border-purple-900/40 flex flex-wrap items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span>Direct link: <code className="text-purple-300 font-mono text-[11px]">{PERSONAL_INFO.resumePath}</code></span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Manish_S_R_Resume.pdf"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Save Offline Copy
            </a>
            <span aria-hidden="true">·</span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
