export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  categoryTag: string;
  year: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  techTags: string[];
  roleText: string;

  // Modal Popup Data
  modalHeader: string;
  metrics: ProjectMetric[];
  architecturalExecution: string;
  technicalInnovations: string[];
  toolsBadges: string[];

  // Image & layout asset slots
  mockupType: 'recraft' | 'gourmet';
  featuredImage: string;
  screenshots: string[];
  wireframes: string[];
  accentColor: string;

  // Backwards compatibility aliases
  summary?: string;
  description?: string;
  role?: string;
  category?: string;
  platform?: string;
  techStack?: string[];
  highlightPoints?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconName: 'mail' | 'github' | 'linkedin';
}

