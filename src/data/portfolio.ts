import { Project, NavItem, SocialLink, EducationItem, SkillDomain } from '@/types';

export const PERSONAL_INFO = {
  name: 'Kaushik Kalyan Bojja',
  headline: 'KAUSHIK KALYAN BOJJA',
  title: 'UI/UX Designer & Flutter Developer',
  location: 'Cuttack, India',
  phone: '+91 966-840-2957',
  email: 'kkbojja@zohomail.in', // Verified production email
  github: 'https://github.com/kaushik-codex/', // Verified GitHub gateway
  linkedin: 'https://www.linkedin.com/in/kkbojja/', // Verified LinkedIn profile
  availabilityStatus: 'Available for selective freelance & full-time roles',
  heroStatement: 'Sculpting high-precision design systems and translating them into fluid, production-grade Flutter applications.',
  summary:
    'Hybrid UI/UX Designer and Mobile Developer specializing in bridging the gap between high-fidelity layouts and responsive digital products. Experience executing an end-to-end design process: translating initial low-fidelity wireframes into high-fidelity Figma components, interactive prototypes, and production-grade frontend structures. Adept at eliminating the designer-developer divide by applying strong user empathy, rigorous information architecture, and structured design token systems to cross-platform experiences.',
  closingStatement: 'Currently crafting seamless cross-platform experiences. Available for selective freelance & full-time roles.',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Selected Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Email', href: `mailto:${PERSONAL_INFO.email}`, iconName: 'mail' },
  { label: 'GitHub', href: PERSONAL_INFO.github, iconName: 'github' },
  { label: 'LinkedIn', href: PERSONAL_INFO.linkedin, iconName: 'linkedin' },
];

export const PROJECTS: Project[] = [
  {
    id: 'recraft-ai',
    categoryTag: '01 // Flutter / Mobile',
    year: '2026',
    title: 'ReCraft AI',
    subtitle: 'AI-Powered Upcycling & Sustainability App',
    shortDescription: 'An eco-friendly mobile experience utilizing on-device image recognition to convert household waste into structured, step-by-step upcycling projects.',
    techTags: ['Flutter', 'Dart', 'AI Vision', 'Custom Canvas', 'Mobile UX'],
    roleText: 'Role: Lead UI/UX Designer & Flutter Developer',

    // Modal Popup Data
    modalHeader: 'CASE STUDY // 01 Flutter / Mobile',
    metrics: [
      { label: 'USER FLOWS', value: '4-Step Frictionless' },
      { label: 'PALETTE', value: 'Eco Green Architecture' },
      { label: 'TARGET PLATFORMS', value: 'iOS & Android' },
    ],
    architecturalExecution: 'ReCraft AI addresses the challenge of household material waste by bridging complex machine-learning image processing with a highly intuitive user flow. By utilizing direct-in-code layout prototyping, interactive responsive scaling, and clean navigation paradigms, the interface minimizes user friction during real-time object classification validation loops.',
    technicalInnovations: [
      'Frictionless Verification UI: Built a high-speed prediction feedback view with smart tag status levels (High confidence tags) ensuring users maintain system control.',
      'Structured Data Hierarchy: Designed recipe-style layout card architecture utilizing clean custom indicators for compartmentalized information (Materials, Steps, Previews).',
      'Code-First Layout Verification: Iterated padding configurations, touch target sizes, and visual flows directly through responsive Flutter widget lifecycles.',
    ],
    toolsBadges: ['Flutter', 'Dart', 'AI Object Detection', 'Thumb-Zone UX', 'Material Design', 'iOS & Android'],

    // Layout assets
    mockupType: 'recraft',
    featuredImage: '/projects/recraft-ai/recraft-home.jpg',
    screenshots: [
      '/projects/recraft-ai/recraft-home.jpg',
      '/projects/recraft-ai/recraft-detection.jpg',
      '/projects/recraft-ai/recraft-ideas.jpg',
      '/projects/recraft-ai/recraft-preview.jpg',
      '/projects/recraft-ai/recraft-about.jpg',
    ],
    wireframes: [
      '/projects/recraft-ai/recraft-wireframe.svg',
      '/projects/recraft-ai/recraft-detection.jpg',
      '/projects/recraft-ai/recraft-about.jpg',
    ],
    accentColor: '#15803D',

    // Compatibility fields
    summary: 'An eco-friendly mobile experience utilizing on-device image recognition to convert household waste into structured, step-by-step upcycling projects.',
    description: 'ReCraft AI addresses the challenge of household material waste by bridging complex machine-learning image processing with a highly intuitive user flow. By utilizing direct-in-code layout prototyping, interactive responsive scaling, and clean navigation paradigms, the interface minimizes user friction during real-time object classification validation loops.',
    role: 'Lead UI/UX Designer & Flutter Developer',
    category: 'Flutter / Mobile',
    platform: 'Flutter / Mobile',
    techStack: ['Flutter', 'Dart', 'AI Vision', 'Custom Canvas', 'Mobile UX'],
    highlightPoints: [
      'Frictionless Verification UI: Built a high-speed prediction feedback view with smart tag status levels (High confidence tags) ensuring users maintain system control.',
      'Structured Data Hierarchy: Designed recipe-style layout card architecture utilizing clean custom indicators for compartmentalized information (Materials, Steps, Previews).',
      'Code-First Layout Verification: Iterated padding configurations, touch target sizes, and visual flows directly through responsive Flutter widget lifecycles.',
    ],
  },
  {
    id: 'gourmet',
    categoryTag: '02 // Cross-Platform Mobile',
    year: '2026',
    title: 'Gourmet',
    subtitle: 'High-Speed Food Discovery & Delivery System',
    shortDescription: 'A streamlined mobile marketplace optimized for immediate discovery, using visual food tags and frictionless linear layouts to eliminate decision fatigue.',
    techTags: ['Flutter', 'Dart', 'State Management', 'E-Commerce UX', 'Layout Wireframing'],
    roleText: 'Role: UI/UX Designer & Flutter Developer',

    // Modal Popup Data
    modalHeader: 'CASE STUDY // 02 Cross-Platform Mobile',
    metrics: [
      { label: 'HIERARCHY', value: 'Visual Card First' },
      { label: 'SCANNING SPEED', value: 'Instant Filtering' },
      { label: 'TARGET PLATFORMS', value: 'iOS & Android' },
    ],
    architecturalExecution: 'Gourmet optimizes the mobile food ordering journey by removing cognitive barriers during user onboarding and item search phases. The platform leverages immediate entry fields, high-visibility visual banners, and persistent bottom tracking indicators to create a highly accessible user loop optimized for rapid conversion loops.',
    technicalInnovations: [
      'Frictionless Entry Strategy: Engineered an elegant, minimal authorization view containing inline visual password visibility modifiers to decrease login drop-offs.',
      'Horizontal Thumb Filters: Built high-speed tag components for categorized indexing (Pizza, Burger, etc.) immediately below main query modules.',
      'Scannable List Signifiers: Leveraged absolute layout alignment using explicit vector icon hints and navigation arrow chevrons to clarify interactive affordances across profile dashboards.',
    ],
    toolsBadges: ['Flutter', 'Dart', 'Horizontal Sliders', 'Linear Layout Systems', 'Affordance Mapping', 'iOS & Android'],

    // Layout assets
    mockupType: 'gourmet',
    featuredImage: '/projects/gourmet/gourmet-home.svg',
    screenshots: [
      '/projects/gourmet/gourmet-home.svg',
      '/projects/gourmet/gourmet-auth.svg',
    ],
    wireframes: [
      '/projects/gourmet/gourmet-wireframe.svg',
    ],
    accentColor: '#F97316',

    // Compatibility fields
    summary: 'A streamlined mobile marketplace optimized for immediate discovery, using visual food tags and frictionless linear layouts to eliminate decision fatigue.',
    description: 'Gourmet optimizes the mobile food ordering journey by removing cognitive barriers during user onboarding and item search phases. The platform leverages immediate entry fields, high-visibility visual banners, and persistent bottom tracking indicators to create a highly accessible user loop optimized for rapid conversion loops.',
    role: 'UI/UX Designer & Flutter Developer',
    category: 'Cross-Platform Mobile',
    platform: 'Cross-Platform Mobile',
    techStack: ['Flutter', 'Dart', 'State Management', 'E-Commerce UX', 'Layout Wireframing'],
    highlightPoints: [
      'Frictionless Entry Strategy: Engineered an elegant, minimal authorization view containing inline visual password visibility modifiers to decrease login drop-offs.',
      'Horizontal Thumb Filters: Built high-speed tag components for categorized indexing (Pizza, Burger, etc.) immediately below main query modules.',
      'Scannable List Signifiers: Leveraged absolute layout alignment using explicit vector icon hints and navigation arrow chevrons to clarify interactive affordances across profile dashboards.',
    ],
  },
];

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    title: 'UI/UX & Design Tools',
    subtitle: 'Figma & Visual Systems',
    skills: [
      'Figma & Auto-Layout',
      'Components & Variants',
      'Interactive Prototyping',
      'Wireframing & User Flows',
      'Ergonomics & Interaction Design',
      'Visual Hierarchy & Design Tokens',
    ],
  },
  {
    title: 'Frontend Engineering',
    subtitle: 'Cross-Platform Mobile',
    skills: [
      'Flutter & Dart SDK',
      'Firebase (Auth & Backend)',
      'State Management (Provider / BLoC)',
      'Git & GitHub Version Control',
      'Clean Architecture & Modular Patterns',
      'Cross-Platform iOS & Android',
    ],
  },
  {
    title: 'Languages & Architecture',
    subtitle: 'Modular Engineering',
    skills: [
      'Dart',
      'Python',
      'SQL & Relational Databases',
      'Clean Modular Architecture',
      'Information Architecture',
      'Design Token Systems',
    ],
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    degree: 'Master in Computer Applications (MCA)',
    institution: 'Ajay Binay Institute of Technology',
    affiliation: 'Biju Patnaik University of Technology (BPUT)',
    period: '2024 – 2026',
    score: 'Completed',
    details: 'Mastered advanced computing, modular software architecture, algorithms, and high-performance cross-platform mobile systems.',
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'Sakti Sai Degree College, Kuspangi',
    affiliation: 'Utkal University',
    period: '2021 – 2024',
    score: '83.7%',
    details: 'Core algorithms, data structures, relational database management systems, and object-oriented software engineering.',
  },
  {
    degree: '+2 Science',
    institution: 'Sri Chaitanya Junior College, Rajahmundry',
    affiliation: 'APBIE',
    period: '2019 – 2021',
    score: '85.7%',
  },
  {
    degree: 'Matriculation',
    institution: 'Govt. High School, Kalimela',
    affiliation: 'BSE Odisha',
    period: '2014 – 2019',
    score: '80%',
  },
];
