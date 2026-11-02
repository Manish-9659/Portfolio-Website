export interface Project {
  id: string;
  title: string;
  category: 'data-ai' | 'web' | 'creative';
  categoryLabel: string;
  role: string;
  duration: string;
  tools: string[];
  description: string;
  highlights: string[];
  liveDemoAvailable?: boolean;
  githubUrl?: string;
  impactMetric?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  scoreLabel?: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  category: 'ai' | 'devops' | 'business';
  status: string;
}

export interface Achievement {
  title: string;
  organization: string;
  award: string;
  category: 'film' | 'academic' | 'design';
  description: string;
  year?: string;
}

export const PERSONAL_INFO = {
  name: "Manish S R",
  role: "Data Analytics & AI Engineer",
  tagline: "Computer Science Undergraduate · Logistics Intelligence · Creative Filmmaker",
  location: "Thuckalay, Tamil Nadu, India",
  phone: "+91 7418541749",
  email: "manish20sree@gmail.com",
  linkedin: "https://linkedin.com/in/manish-s-r-a62b942a",
  linkedinHandle: "manish-s-r-a62b942a",
  github: "https://github.com/Manish-9659",
  githubHandle: "Manish-9659",
  profileImage: "/assets/aistudio/linked_in__a7f205f3.jpeg",
  resumePath: "/assets/aistudio/Manish_S_R_Resume_1_5075a69c.pdf",
  summary: "Computer Science and Engineering undergraduate at Anna University with an obsession for extracting strategic business intelligence from complex datasets. Experienced in logistics analytics, predictive modeling, and Power BI interactive dashboard architecture, complemented by an award-winning creative eye in cinematic storytelling and DaVinci Resolve."
};

export const HIGHLIGHT_STATS = [
  { value: "98.4%", label: "Logistics SLA Rate", description: "Predictive Analytics & Control Tower" },
  { value: "3+", label: "Flagship Projects", description: "Logistics Intelligence & Web Systems" },
  { value: "6+", label: "Industry Credentials", description: "Infosys AI, DevOps, Wadhwani" },
  { value: "1st", label: "International Film Award", description: "Best Debut Film at MEI Film Festival" }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "FemtoSoft Technologies",
    role: "AI & Data Science Intern",
    period: "09 June 2026 – 09 July 2026",
    location: "Tamil Nadu, India",
    description: "Intensive industry internship centered on applied Artificial Intelligence and supply chain data science.",
    bulletPoints: [
      "Engineered an interactive Supply Chain Logistics Dashboard to monitor and analyze delivery performance, bottleneck detection, and operational turnaround time.",
      "Architected custom Power BI dashboards with real-time visual telemetry, making critical business metrics immediately accessible to executive stakeholders.",
      "Conducted exploratory data analysis (EDA) and predictive forecasting routines in Google Colab using Python data libraries.",
      "Acquired hands-on exposure to enterprise data pipelines, resolving delivery anomalies and improving operational dispatch visibility."
    ],
    technologies: ["Power BI", "Python", "Google Colab", "Data Cleaning", "Logistics Analytics", "DAX", "Pandas"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "logistics-control-tower",
    title: "AI-Powered Smart Logistics Intelligence & Control Tower",
    category: "data-ai",
    categoryLabel: "Data Science & AI",
    role: "Lead Analytics Developer",
    duration: "2026",
    tools: ["Power BI", "Python", "Google Colab", "Data Modeling", "Predictive Analytics"],
    description: "End-to-end operational intelligence tower that analyzes high-throughput shipment logistics, isolates transit delays, and forecasts delivery bottlenecks.",
    highlights: [
      "Processed multi-source shipping datasets to benchmark delivery performance and shipment status indicators.",
      "Built dynamic Power BI reporting surfaces enabling fleet managers to filter performance by geography, carrier, and transit window.",
      "Trained predictive heuristics in Python to anticipate shipment delays before dispatch.",
      "Standardized data extraction pipelines to eliminate raw tracking discrepancies."
    ],
    liveDemoAvailable: true,
    impactMetric: "98.4% On-time tracking accuracy across test routes"
  },
  {
    id: "github-analyzer",
    title: "GitHub Profile & Ecosystem Analyzer",
    category: "web",
    categoryLabel: "Web Engineering",
    role: "Frontend & API Developer",
    duration: "2025 – 2026",
    tools: ["JavaScript (ES6+)", "HTML5", "CSS3 / Tailwind", "GitHub REST API"],
    description: "A fast, responsive web application that queries the GitHub REST API to dissect developer profiles, language breakdown, and repository momentum.",
    highlights: [
      "Created an intuitive search interface parsing public GitHub profile metrics in real-time.",
      "Visualized repository star distributions, fork ratios, and recent commit velocity.",
      "Implemented responsive UI design patterns ensuring flawless rendering on mobile and desktop viewports.",
      "Crafted resilient error states and rate-limit fallbacks for seamless user experience."
    ],
    liveDemoAvailable: true,
    githubUrl: "https://github.com/Manish-9659",
    impactMetric: "Instant sub-second developer audit & breakdown"
  },
  {
    id: "smdrt-logistics-platform",
    title: "SMDRT Logistics Database Intelligence Platform",
    category: "data-ai",
    categoryLabel: "Database & Analytics",
    role: "Database Architect & Analyst",
    duration: "2025",
    tools: ["SQL", "Relational Schema Design", "Data Modeling", "Operations Reporting"],
    description: "Relational database platform designed to consolidate fragmented warehouse throughput, vendor inventory, and logistics dispatch records.",
    highlights: [
      "Designed normalized relational schemas to maintain operational records for logistics networks.",
      "Authored complex SQL queries and aggregate views for tracking inventory turnover and carrier turnaround.",
      "Delivered structured dashboard reports simplifying inventory reconciliation for operational teams.",
      "Enforced data integrity constraints and optimized query execution indexes."
    ],
    impactMetric: "Structured 10k+ shipment records with zero anomalies"
  },
  {
    id: "cain-short-film",
    title: "CAIN — Award-Winning Debut Film",
    category: "creative",
    categoryLabel: "Cinematography & Direction",
    role: "Director, Cinematographer & Editor",
    duration: "2024",
    tools: ["DaVinci Resolve Studio", "Canva", "Visual Storytelling", "Sound Design"],
    description: "Critically acclaimed short film exploring psychological depth and narrative tension, honored as Best Debut Film at the MEI International Film Festival.",
    highlights: [
      "Directed and executed full creative vision from scriptwriting to final post-production color grading.",
      "Mastered color timing, spatial audio design, and pacing using DaVinci Resolve Studio.",
      "Selected and awarded Best Debut Film at the MEI International Film Festival among hundreds of submissions.",
      "Engineered promotional posters and marketing collateral in Canva, receiving additional symposium honors."
    ],
    impactMetric: "Winner: Best Debut Film at MEI International Film Festival"
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Data Analytics & Visualization",
    description: "Extracting actionable enterprise insights through rigorous cleaning, modeling, and storytelling.",
    skills: [
      { name: "Power BI", level: "Advanced", detail: "Interactive Dashboards, DAX, KPI Reporting" },
      { name: "SQL", level: "Proficient", detail: "Complex Queries, Joins, Aggregations, Schema Design" },
      { name: "Microsoft Excel", level: "Advanced", detail: "Pivot Tables, VLOOKUP/XLOOKUP, Financial/Logistics Modeling" },
      { name: "Data Cleaning", level: "Proficient", detail: "Handling Missing Data, Outlier Detection, Normalization" },
      { name: "Data Visualization", level: "Advanced", detail: "Visual Hierarchy, Interactive Visuals, Trend Analysis" }
    ]
  },
  {
    category: "Programming & Data Science",
    description: "Scripting exploratory pipelines, automation, and intelligent models.",
    skills: [
      { name: "Python", level: "Proficient", detail: "Pandas, NumPy, Matplotlib, Data Wrangling, Scikit-learn basics" },
      { name: "JavaScript", level: "Proficient", detail: "ES6+, Async/Await, DOM, REST APIs, JSON" },
      { name: "Google Colab", level: "Advanced", detail: "Cloud Notebooks, Exploratory Data Analysis, Workflow Prototyping" }
    ]
  },
  {
    category: "Web & Modern Frontend",
    description: "Building responsive, high-performance web applications and dashboards.",
    skills: [
      { name: "HTML5 & Semantic Markup", level: "Advanced", detail: "Accessible structure, modern web standards" },
      { name: "CSS3 & Modern Layouts", level: "Advanced", detail: "Flexbox, CSS Grid, Transitions, Keyframes" },
      { name: "Tailwind CSS", level: "Advanced", detail: "Utility-first design systems, responsive viewports" }
    ]
  },
  {
    category: "Creative Media & Tools",
    description: "High-retention video production, cinematic color grading, and visual communication.",
    skills: [
      { name: "DaVinci Resolve Studio", level: "Advanced", detail: "Color Grading, Video Editing, Sound Synchronization" },
      { name: "Canva Pro", level: "Advanced", detail: "Poster Design, Brand Identity, Slide Decks" },
      { name: "Git & Version Control", level: "Proficient", detail: "GitHub Workflows, Commits, Branching" }
    ]
  }
];

export const SOFT_SKILLS = [
  "Analytical Problem Solving",
  "Technical Communication",
  "Cross-functional Teamwork",
  "Creative & Strategic Thinking",
  "Rapid Adaptability",
  "Data-Driven Storytelling"
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.E. — Computer Science and Engineering",
    institution: "University College of Engineering, Nagercoil (Anna University)",
    period: "2023 – 2027",
    description: "Focus on Data Structures, Algorithms, Relational Databases, Operating Systems, Machine Learning, and Big Data concepts."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sir CP Memorial Government Higher Secondary School",
    period: "2022 – 2023",
    score: "74%",
    scoreLabel: "Grade"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Ignite Bootcamp",
    issuer: "Wadhwani Foundation",
    category: "business",
    status: "Certified"
  },
  {
    title: "Artificial Intelligence Foundations",
    issuer: "Infosys Springboard",
    category: "ai",
    status: "Certified"
  },
  {
    title: "Continuous Integration & Delivery (DevOps)",
    issuer: "Professional Certification",
    category: "devops",
    status: "Certified"
  },
  {
    title: "Ethical AI & Responsible Machine Learning",
    issuer: "Industry Standard Certification",
    category: "ai",
    status: "Certified"
  },
  {
    title: "Agile Methodology & Scrum",
    issuer: "Project Management Standard",
    category: "business",
    status: "Certified"
  },
  {
    title: "Basics of Business Communication",
    issuer: "Executive Workplace Skills",
    category: "business",
    status: "Certified"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Best Debut Film — \"CAIN\"",
    organization: "MEI International Film Festival",
    award: "Winner Trophy 🏆",
    category: "film",
    description: "Awarded top honor for debut directorial short film, recognized by an international jury for compelling visual tension, cinematic pacing, and color grading.",
    year: "2024"
  },
  {
    title: "Second Prize — Poster Design",
    organization: "AI in Future Education Symposium",
    award: "2nd Prize Winner 🥈",
    category: "design",
    description: "Conceptualized and designed an infographic poster visualizing ethical AI integration in modern educational institutions.",
    year: "2025"
  },
  {
    title: "Second Prize — Short Film Contest",
    organization: "Inter-Collegiate Film Festival",
    award: "2nd Prize Winner 🎬",
    category: "film",
    description: "Recognized for creative storytelling, cinematic camerawork, and emotional resonance in narrative cinema.",
    year: "2024"
  }
];

export const LANGUAGES = [
  { name: "Tamil", proficiency: "Native / Bilingual" },
  { name: "English", proficiency: "Professional Working Proficiency" },
  { name: "Hindi", proficiency: "Conversational" }
];
