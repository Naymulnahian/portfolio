import {
  Certificate,
  NavItem,
  Project,
  SkillCategory,
  SocialLink,
  StatItem,
  TimelineItem,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_POINTS: string[] = [
  "Software Engineering student",
  "AI & Machine Learning enthusiast",
  "Research-oriented learner",
  "Deep Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Data Science",
  "Backend development",
  "Full-stack development",
  "Open source contributor",
  "Academic research",
];

export const ABOUT_STATS: StatItem[] = [
  { label: "Years of learning", value: "3", suffix: "+" },
  { label: "Projects shipped", value: "12", suffix: "+" },
  { label: "Research interests", value: "6" },
  { label: "Technologies learned", value: "25", suffix: "+" },
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python", level: 92 },
      { name: "Java", level: 78 },
      { name: "C", level: 70 },
      { name: "C++", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 82 },
    ],
  },
  {
    category: "Frontend",
    icon: "LayoutTemplate",
    skills: [
      { name: "Next.js", level: 85 },
      { name: "React", level: 88 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 78 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Database",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 78 },
    ],
  },
  {
    category: "AI / ML",
    icon: "BrainCircuit",
    skills: [
      { name: "NumPy", level: 90 },
      { name: "Pandas", level: 88 },
      { name: "Matplotlib", level: 82 },
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 83 },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "Linux", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 72 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "AI-Powered PCB Design Platform",
    description:
      "A design assistant that uses machine learning to suggest optimal component placement and routing for printed circuit boards, cutting manual layout time for early-stage prototypes.",
    tags: ["Python", "PyTorch", "Next.js", "FastAPI"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Plant Disease Detection",
    description:
      "A convolutional neural network trained on leaf imagery to classify crop diseases in real time, packaged behind a lightweight web interface for field use.",
    tags: ["TensorFlow", "CNN", "Python", "Flask"],
    github: "#",
    demo: "#",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "An end-to-end attendance pipeline combining face detection and embedding-based recognition, with a dashboard for exporting attendance records.",
    tags: ["OpenCV", "Python", "PostgreSQL", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "ML-Based Research Projects",
    description:
      "A collection of applied research experiments spanning model interpretability, dataset bias analysis, and reproducible benchmarking pipelines.",
    tags: ["Scikit-learn", "Pandas", "Jupyter", "NumPy"],
    github: "#",
    demo: "#",
  },
];

export const RESEARCH_INTERESTS: { title: string; icon: string }[] = [
  { title: "Machine Learning", icon: "Cpu" },
  { title: "Artificial Intelligence", icon: "BrainCircuit" },
  { title: "Deep Learning", icon: "Layers" },
  { title: "Computer Vision", icon: "ScanEye" },
  { title: "Natural Language Processing", icon: "MessageSquareText" },
  { title: "Healthcare AI", icon: "HeartPulse" },
  { title: "Industrial AI", icon: "Factory" },
  { title: "Human-Centered AI", icon: "Users" },
];

export const RESEARCH_TIMELINE: TimelineItem[] = [
  {
    title: "Independent research — model evaluation",
    org: "Self-directed",
    period: "2025 — Present",
    points: [
      "Investigating evaluation methodology for small-scale vision models under distribution shift.",
      "Building reproducible benchmarking scripts shared with peers for coursework and side projects.",
    ],
  },
  {
    title: "Paper reading & review group",
    org: "Peer research circle",
    period: "2024 — Present",
    points: [
      "Weekly critical reviews of recent ML papers with written summaries and reproduced results where feasible.",
    ],
  },
];

export const PUBLICATIONS_PLACEHOLDER = "No publications yet — actively pursuing first submission.";
export const ONGOING_RESEARCH_PLACEHOLDER =
  "Currently scoping a study on lightweight model evaluation under data drift.";
export const CONFERENCE_GOALS =
  "Targeting a workshop submission to a venue such as NeurIPS or ICLR within the next research cycle.";
export const FUTURE_VISION =
  "Long-term interest in building AI systems that remain reliable and interpretable when deployed in healthcare and industrial settings.";

export const EDUCATION: TimelineItem[] = [
  {
    title: "B.Sc. in Software Engineering",
    org: "University Name",
    period: "2022 — 2026",
    location: "City, Country",
    points: [
      "Relevant coursework: Algorithms, Operating Systems, Database Systems, Machine Learning, Software Engineering, Artificial Intelligence, Computer Networks.",
    ],
  },
];

export const ACHIEVEMENTS: StatItem[] = [
  { label: "Projects completed", value: "12", suffix: "+" },
  { label: "Research papers reviewed", value: "20", suffix: "+" },
  { label: "Hackathons", value: "5" },
  { label: "Open source contributions", value: "15", suffix: "+" },
  { label: "Technical certifications", value: "8" },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    title: "Research Assistant",
    org: "University Research Lab",
    period: "2025 — Present",
    points: [
      "Supporting a faculty-led research project on applied machine learning, including data preparation and experiment tracking.",
    ],
  },
  {
    title: "Software Engineering Intern",
    org: "Company Name",
    period: "Summer 2025",
    points: [
      "Contributed to a production web application, shipping features across the frontend and backend.",
    ],
  },
  {
    title: "Open Source Contributor",
    org: "Various projects",
    period: "2024 — Present",
    points: [
      "Submitted patches and documentation improvements to open-source ML tooling repositories.",
    ],
  },
  {
    title: "Teaching Assistant",
    org: "University Name",
    period: "2024",
    points: [
      "Assisted in an introductory programming course, holding office hours and grading assignments.",
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  { title: "Deep Learning Specialization", issuer: "DeepLearning.AI", date: "2025" },
  { title: "Machine Learning", issuer: "Stanford Online", date: "2024" },
  { title: "TensorFlow Developer Certificate", issuer: "TensorFlow", date: "2025" },
  { title: "Python for Data Science", issuer: "IBM", date: "2024" },
  { title: "Docker Fundamentals", issuer: "Docker", date: "2024" },
  { title: "Git & GitHub Essentials", issuer: "GitHub", date: "2023" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "#", icon: "Github" },
  { label: "LinkedIn", href: "#", icon: "Linkedin" },
  { label: "Email", href: "mailto:hello@example.com", icon: "Mail" },
  { label: "Google Scholar", href: "#", icon: "GraduationCap" },
  { label: "ORCID", href: "#", icon: "Fingerprint" },
  { label: "ResearchGate", href: "#", icon: "FlaskConical" },
];

export const TOP_LANGUAGES: { name: string; percent: number }[] = [
  { name: "Python", percent: 42 },
  { name: "TypeScript", percent: 26 },
  { name: "JavaScript", percent: 14 },
  { name: "C++", percent: 10 },
  { name: "Other", percent: 8 },
];
