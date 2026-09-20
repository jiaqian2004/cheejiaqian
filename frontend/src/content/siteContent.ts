export interface ExperienceEntry {
  role: string
  company: string
  period: string
  summary: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ProjectEntry {
  title: string
  stack: string[]
  description: string
  link: string
}

export interface SiteContent {
  name: string
  initials: string
  tagline: string
  heroGreeting: string
  bio: string
  experience: ExperienceEntry[]
  skills: SkillGroup[]
  projects: ProjectEntry[]
  social: {
    github: string
    linkedin: string
    email: string
  }
}

export const siteContent: SiteContent = {
  name: 'Chee Jia Qian',
  initials: 'CJQ',
  tagline: 'Software Engineer | IT Project Coordination',
  heroGreeting: "Hello! I'm",
  bio: 'Software Systems Development graduate with hands-on experience in enterprise software development across the full software development lifecycle. Skilled in requirement analysis, full-stack development, software testing, and technical documentation, with a strong interest in backend development and IT project coordination.',
  experience: [
    {
      role: 'IT Intern – Software Development',
      company: 'Current Tech Industries Sdn. Bhd.',
      period: 'Jan 2026 – Jul 2026',
      summary:
        'Analysed business requirements and delivered technical solutions for an enterprise CRM system; designed ERDs and relational schemas; built full-stack features (backend logic, RESTful APIs, database ops, responsive UI); conducted software testing and technical documentation.',
    },
    {
      role: 'IT Intern – Software Development',
      company: 'eHub IT Solutions Sdn Bhd',
      period: 'Nov 2023 – Jan 2024',
      summary:
        'Maintained and enhanced POS system features for retail/F&B clients; enhanced web and mobile interfaces; implemented automated tax calculation and backend analytics support.',
    },
  ],
  skills: [
    { category: 'Languages', items: ['Java', 'Python', 'PHP', 'JavaScript', 'HTML', 'CSS', 'C++', 'C'] },
    {
      category: 'Frameworks & Technologies',
      items: ['Laravel', 'Vue.js', 'React.js', 'Inertia.js', 'Ant Design', 'Flutter (Dart)', 'RESTful API'],
    },
    { category: 'Database', items: ['MySQL', 'Supabase', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'Postman', 'VS Code', 'Android Studio', 'Figma'] },
  ],
  projects: [
    {
      title: 'Enterprise Customer Relationship Management (CRM) System',
      stack: ['Laravel', 'Vue.js', 'MySQL', 'RESTful API'],
      description:
        'Developed an enterprise CRM system with integrated business modules — product, order, commission, settlement, dashboard, and sales management. Designed ERDs and relational database schemas, and implemented full-stack features from requirement analysis through testing and technical documentation.',
      link: '',
    },
    {
      title: 'Food Recipe & Cooking Assistant Application (FYP)',
      stack: ['Flutter', 'Supabase', 'Flask', 'YOLO', 'Spoonacular API'],
      description:
        'Cross-platform mobile app integrating AI-powered ingredient recognition, personalized recipe recommendation, meal planning, and grocery management. Integrated Supabase authentication, real-time database services, and RESTful APIs.',
      link: '',
    },
  ],
  social: {
    github: '',
    linkedin: '',
    email: 'jiaqian0711@gmail.com',
  },
}
