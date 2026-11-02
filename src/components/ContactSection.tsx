import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ArrowUpRight, Github, Linkedin, Download, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  openResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ openResumeModal }) => {
  const [intent, setIntent] = useState<'internship' | 'project' | 'speaking' | 'general'>('internship');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    // Simulate real-time dispatch and store in local state
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 border-b border-purple-900/20 bg-radial-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-purple-900/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Connect & Collaborate</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Let's Build Something Impactful
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
              Open to internship opportunities, data analytics consulting, collaborative research, and creative storytelling projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
          {/* Left Column: Direct Info Cards & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#130b24] border border-purple-900/40 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Communication</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you're looking for an analytical mind to drive your supply chain data pipelines or a versatile creative to head visual narratives, my inbox is always open.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-[#0b0614] border border-purple-900/40 hover:border-purple-600/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-purple-900/40 text-purple-400 group-hover:text-purple-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-purple-400 uppercase">Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-[#0b0614] border border-purple-900/40 hover:border-purple-600/50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-purple-900/40 text-purple-400 group-hover:text-purple-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-purple-400 uppercase">Phone & WhatsApp</div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-[#0b0614] border border-purple-900/40">
                  <div className="p-2 rounded-lg bg-purple-900/40 text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-purple-400 uppercase">Location</div>
                    <div className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">Tamil Nadu, India</div>
                  </div>
                </div>
              </div>

              {/* Profiles & PDF Action */}
              <div className="pt-4 border-t border-purple-900/30 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#0b0614] border border-purple-900/40 text-xs font-medium text-slate-200 hover:text-white hover:border-purple-600/50 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-purple-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#0b0614] border border-purple-900/40 text-xs font-medium text-slate-200 hover:text-white hover:border-purple-600/50 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-purple-400" />
                    <span>GitHub Profile</span>
                  </a>
                </div>

                <button
                  onClick={openResumeModal}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-purple-600/30 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Verified Resume (PDF)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: msenthil.com-style Engagement Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#130b24] border border-purple-900/40 shadow-xl shadow-purple-950/20">
              <h3 className="text-xl font-bold text-white mb-2">Send an Inquiry or Invitation</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the quick briefing form below. I typically respond within 24 hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-purple-300">{name}</span>. Your message regarding <span className="font-semibold text-purple-300">{intent}</span> has been noted. I look forward to connecting with you.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-5 py-2 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-xs text-purple-200 border border-purple-700/50 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Inquiry Intent Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Inquiry Intent:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'internship', label: 'Internship / Hiring' },
                        { id: 'project', label: 'Data & AI Project' },
                        { id: 'speaking', label: 'Speaking / Panel' },
                        { id: 'general', label: 'General Collab' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setIntent(item.id as any)}
                          className={`py-2 px-2.5 rounded-lg text-xs font-medium transition-all text-center ${
                            intent === item.id
                              ? 'bg-purple-600 text-white font-semibold shadow-sm'
                              : 'bg-[#0b0614] text-slate-400 hover:text-slate-200 border border-purple-900/40'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-300 font-medium mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Senthil Kumar"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0514] border border-purple-900/50 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-300 font-medium mb-1">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="senthil@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0514] border border-purple-900/50 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 font-medium mb-1">
                      Organization / Institution (Optional)
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Anna University / Tech Corp"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0514] border border-purple-900/50 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 font-medium mb-1">
                      Message / Project Scope *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe the opportunity, project context, or question..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0514] border border-purple-900/50 text-white text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-purple-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Message to Manish'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
