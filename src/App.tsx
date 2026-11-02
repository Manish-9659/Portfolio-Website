/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogisticsControlTowerDemo } from './components/LogisticsControlTowerDemo';
import { ProjectsSection } from './components/ProjectsSection';
import { GitHubAnalyzerDemo } from './components/GitHubAnalyzerDemo';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { AchievementsSection } from './components/AchievementsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Default to dark electric purple
    return true;
  });

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      document.body.className = "bg-[#0b0814] text-slate-100 antialiased selection:bg-purple-600 selection:text-white";
    } else {
      root.classList.remove('dark');
      document.body.className = "bg-[#fcfaff] text-slate-900 antialiased selection:bg-purple-500 selection:text-white";
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} transition-colors duration-200`}>
      {/* Navigation Top Bar Contract */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        openResumeModal={() => setIsResumeModalOpen(true)}
      />

      <main className="w-full">
        {/* Hero Section */}
        <Hero openResumeModal={() => setIsResumeModalOpen(true)} />

        {/* Standout Interactive Showcase: Logistics Control Tower */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LogisticsControlTowerDemo />
        </section>

        {/* Featured Projects Grid with Deep Dive Modals */}
        <ProjectsSection />

        {/* Standout Interactive Showcase: Live GitHub Analyzer */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GitHubAnalyzerDemo />
        </section>

        {/* Industry Experience & Internships */}
        <ExperienceSection />

        {/* Technical & Creative Skills Matrix */}
        <SkillsSection />

        {/* Education & Certifications */}
        <EducationCertifications />

        {/* Awards & Creative Laurels Spotlight (CAIN Film Festival Winner) */}
        <AchievementsSection />

        {/* About & Engineering Philosophy */}
        <AboutSection />

        {/* Contact & msenthil.com-inspired Collaboration Briefing */}
        <ContactSection openResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Official Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
