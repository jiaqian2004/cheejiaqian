export interface ExperienceEntry {
  role: string
  company: string
  year: string
  period: string
  summary: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ProjectLink {
  label: string
  href: string
  kind: 'demo' | 'github'
}

export interface ProjectEntry {
  /** Stable URL-safe id; used as the anchor on the /projects page. */
  slug: string
  title: string
  /** Short type label shown under the title on the /projects page, e.g. "IoT / Embedded". */
  category: string
  stack: string[]
  description: string
  image?: string
  links: ProjectLink[]
}

export interface AboutField {
  label: string
  value: string
}

export interface SiteContent {
  name: string
  initials: string
  tagline: string
  heroGreeting: string
  heroRoleLines: string[]
  bio: string
  aboutFields: AboutField[]
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
  tagline: 'Software Engineer | Full Stack Developer',
  heroGreeting: "Hello! I'm",
  heroRoleLines: ['Software Engineering', 'Full Stack Developer'],
  bio: 'Software Systems Development graduate with hands-on experience in enterprise software development across the full software development lifecycle. Skilled in requirement analysis, full-stack development, software testing, and technical documentation, with a strong interest in Full Stack development and IT project coordination.',
  aboutFields: [
    { label: 'Name', value: 'Chee Jia Qian' },
    { label: 'Role', value: 'Software Engineer & Full Stack Developer' },
    { label: 'Education', value: 'B.IT (Hons), Software Systems Development ( TAR UMT )' },
    { label: 'Focus', value: 'Backend Development, Full Stack Developer' },
    { label: 'Languages', value: 'English, Chinese, Malay, Hakka' },
    { label: 'Hobby', value: 'Gym, Swimming, Badminton' },
  ],
  experience: [
    {
      role: 'IT Intern – Software Development',
      company: 'Current Tech Industries Sdn. Bhd.',
      year: '2026',
      period: 'Jan 2026 – Jul 2026',
      summary:
        'Analysed business requirements and delivered technical solutions for an enterprise CRM system; designed ERDs and relational schemas; built full-stack features (backend logic, RESTful APIs, database ops, responsive UI); conducted software testing and technical documentation.',
    },
    {
      role: 'IT Intern – Software Development',
      company: 'eHub IT Solutions Sdn Bhd',
      year: '2023',
      period: 'Nov 2023 – Jan 2024',
      summary:
        'Maintained and enhanced POS system features for retail/F&B clients; enhanced web and mobile interfaces; implemented automated tax calculation and backend analytics support.',
    },
  ],
  skills: [
    { category: 'Languages', items: ['Java', 'Python', 'PHP', 'JavaScript', 'HTML', 'CSS', 'C++', 'C'] },
    {
      category: 'Frontend',
      items: ['Vue.js', 'React.js', 'Inertia.js', 'Ant Design', 'Tailwind', 'Flutter (Dart)'],
    },
    {
      category: 'Backend',
      items: ['Laravel', 'FastAPI', 'Flask', 'RESTful API'],
    },
    { category: 'Database', items: ['MySQL', 'Supabase', 'Firebase', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Postman', 'VS Code', 'Android Studio', 'Figma', 'Playwright'] },
    { category: 'Platforms', items: ['Linux', 'AWS'] },
  ],
  projects: [
    {
      slug: 'crm-system',
      title: 'Enterprise Customer Relationship Management (CRM) System',
      category: 'Web / Enterprise',
      stack: ['Laravel', 'Vue.js', 'MySQL', 'RESTful API'],
      description:
        'Developed an enterprise CRM system with integrated business modules product, order, commission, settlement, dashboard, and sales management. Designed ERDs and relational database schemas, and implemented full-stack features from requirement analysis through testing and technical documentation.',
      image: '/img/crmSystem.webp',
      links: [],
    },
    {
      slug: 'food-recipe-app',
      title: 'Food Recipe & Cooking Assistant Application (FYP)',
      category: 'Mobile / AI',
      stack: ['Flutter', 'Supabase', 'Flask', 'YOLO', 'Spoonacular API'],
      description:
        'Cross-platform mobile app integrating AI-powered ingredient recognition, personalized recipe recommendation, meal planning, and grocery management. Integrated Supabase authentication, real-time database services, and RESTful APIs.',
      image: '/img/foodta.webp',
      links: [
        {
          label: 'Video Demo',
          href: 'https://drive.google.com/file/d/140iJUbrzZavc5SEUodFXjRh0l-s_BcAj/view?usp=sharing',
          kind: 'demo',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/jiaqian2004/Food_Recipe_Cooking_Assistant_App_FYP',
          kind: 'github',
        },
      ],
    },
    {
      slug: 'smart-home-iot',
      title: 'Smart Home System (IoT)',
      category: 'IoT / Embedded',
      stack: ['Node-RED', 'C++', 'Python', 'MQTT', 'GPIO', 'Arduino IDE', 'Sensors', 'ESP32', 'Raspberry Pi'],
      description:
        'IoT-based smart home system integrating automated lighting, smart window control, smoke detection, automatic door opening, and fingerprint-based door access. Designed to improve home automation, safety, security, and convenience through interconnected sensors and smart devices.',
      image: '/img/iot.webp',
      links: [
        {
          label: 'Video Demo',
          href: 'https://drive.google.com/file/d/1uMeN2ZMc9QFrxumhcND2qV0PdY6DiM_e/view?usp=sharing',
          kind: 'demo',
        },
      ],
    },
    {
      slug: 'fashion-ecommerce',
      title: 'Fashion E-Commerce Website - Frontend Design',
      category: 'Web / Frontend',
      stack: ['HTML', 'CSS', 'JavaScript'],
      description:
        'Designed and developed a fashion e-commerce website frontend featuring product browsing, category navigation, search, wishlist, and shopping cart interactions. Focused on creating a clean, playful, and engaging shopping experience through responsive layouts and interactive UI components.',
      image: '/img/anyplex.webp',
      links: [
        {
          label: 'Video Demo',
          href: 'https://drive.google.com/file/d/1c4NylmdAx_GbsN6JFIXWKeE8mPnuB8mJ/view?usp=sharing',
          kind: 'demo',
        },
      ],
    },
    {
      slug: 'c-pos-system',
      title: 'C POS System — Console Application',
      category: 'Desktop / Console',
      stack: ['C', 'Data Structures', 'File Handling', 'Console Application'],
      description:
        'Developed a console-based Point-of-Sale system in C featuring menu management, sales order processing, transaction handling, and user input validation. Implemented core programming concepts including functions, arrays, file handling, and structured data management.',
      image: '/img/console.webp',
      links: [
        {
          label: 'Video Demo',
          href: 'https://drive.google.com/file/d/1JWCduj0WaeOr30-cVmA2xJzmu2N3IcLz/view?usp=sharing',
          kind: 'demo',
        },
      ],
    },
  ],
  social: {
    github: 'https://github.com/jiaqian2004',
    linkedin: 'https://www.linkedin.com/in/jia-qian-chee-972675291/',
    email: 'jiaqian0711@gmail.com',
  },
}
