import {
  Home,
  Users,
  Briefcase,
  Newspaper,
  Phone,
  Cloud,
  Code,
  Server,
  Cpu,
  Zap,
  Shield,
  Settings,
  Building,
  FileText,
  Info,
  UserCheck,
  Eye,
  Lock,
  Cookie,
  Brain,
  Bot,
  Sparkles,
  MessageSquare,
  Search,
  Lightbulb,
} from "lucide-react";

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  icon: any;
  keywords?: string[];
}

export interface SearchCategory {
  name: string;
  items: SearchItem[];
}

export const searchData: SearchItem[] = [
  // Pages
  {
    id: "home",
    title: "Home",
    description:
      "Technum Opus homepage - Technology consulting and digital transformation",
    href: "/",
    category: "Pages",
    icon: Home,
    keywords: ["homepage", "main", "start", "technum", "opus"],
  },

  // Company
  {
    id: "about",
    title: "About Us",
    description: "Learn about our story, mission, and commitment to excellence",
    href: "/about",
    category: "Company",
    icon: Info,
    keywords: ["about", "story", "mission", "company", "who we are"],
  },
  {
    id: "leadership",
    title: "Leadership",
    description: "Meet our leadership team and executive management",
    href: "/leadership",
    category: "Company",
    icon: UserCheck,
    keywords: ["leadership", "team", "executives", "management", "leaders"],
  },
  {
    id: "careers",
    title: "Careers",
    description: "Join our team and build your career with us",
    href: "/careers",
    category: "Company",
    icon: Briefcase,
    keywords: ["careers", "jobs", "hiring", "work", "opportunities", "team"],
  },
  {
    id: "news-insights",
    title: "News & Insights",
    description: "Latest news and thought leadership from our experts",
    href: "/news-insights",
    category: "Company",
    icon: Newspaper,
    keywords: ["news", "insights", "blog", "articles", "thought leadership"],
  },
  {
    id: "what-we-believe",
    title: "What We Believe",
    description: "Our values, principles, and core beliefs",
    href: "/about/what-we-believe",
    category: "Company",
    icon: Eye,
    keywords: ["values", "principles", "beliefs", "culture", "philosophy"],
  },

  // Services
  {
    id: "services",
    title: "All Services",
    description: "Complete overview of our technology services and solutions",
    href: "/services",
    category: "Services",
    icon: Settings,
    keywords: ["services", "solutions", "offerings", "all services"],
  },
  {
    id: "sap-consulting",
    title: "SAP Consulting",
    description: "Enterprise SAP implementations and optimization services",
    href: "/services/sap-consulting",
    category: "Services",
    icon: Building,
    keywords: ["sap", "consulting", "enterprise", "erp", "implementation"],
  },
  {
    id: "saas-development",
    title: "Software Development Platform",
    description: "Scalable cloud-based software solutions and development",
    href: "/services/saas-development",
    category: "Services",
    icon: Code,
    keywords: [
      "saas",
      "software",
      "development",
      "platform",
      "applications",
      "cloud",
    ],
  },
  {
    id: "cloud-architecture",
    title: "Cloud Architecture",
    description:
      "Robust and secure cloud infrastructure design and implementation",
    href: "/services/cloud-architecture",
    category: "Services",
    icon: Cloud,
    keywords: [
      "cloud",
      "architecture",
      "infrastructure",
      "aws",
      "azure",
      "gcp",
    ],
  },
  {
    id: "hardware-infrastructure",
    title: "Hardware Infrastructure",
    description: "Complete hardware solutions and deployment services",
    href: "/services/hardware-infrastructure",
    category: "Services",
    icon: Server,
    keywords: [
      "hardware",
      "infrastructure",
      "servers",
      "deployment",
      "physical",
    ],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "End-to-end digital transformation and modernization services",
    href: "/services/digital-transformation",
    category: "Services",
    icon: Zap,
    keywords: [
      "digital",
      "transformation",
      "modernization",
      "automation",
      "digitization",
    ],
  },

  // Partners
  {
    id: "partners",
    title: "All Partners",
    description: "Our complete network of technology and business partners",
    href: "/partners",
    category: "Partners",
    icon: Users,
    keywords: ["partners", "alliances", "ecosystem", "network"],
  },
  {
    id: "cloud-partners",
    title: "Cloud Partners",
    description: "Leading cloud service providers and platform partners",
    href: "/partners/cloud-partners",
    category: "Partners",
    icon: Cloud,
    keywords: ["cloud", "aws", "azure", "google", "providers"],
  },
  {
    id: "technology-partners",
    title: "Technology Partners",
    description: "Strategic technology alliances and vendor relationships",
    href: "/partners/technology-partners",
    category: "Partners",
    icon: Cpu,
    keywords: ["technology", "vendors", "alliances", "strategic"],
  },
  {
    id: "security-partners",
    title: "Security Partners",
    description: "Cybersecurity and compliance experts and solutions",
    href: "/partners/security-partners",
    category: "Partners",
    icon: Shield,
    keywords: ["security", "cybersecurity", "compliance", "protection"],
  },
  {
    id: "integration-partners",
    title: "Integration Partners",
    description: "System integration specialists and implementation experts",
    href: "/partners/integration-partners",
    category: "Partners",
    icon: Settings,
    keywords: ["integration", "systems", "implementation", "specialists"],
  },
  {
    id: "view-all-partners",
    title: "View All Partners",
    description: "Complete partner directory and ecosystem overview",
    href: "/partners/view-all",
    category: "Partners",
    icon: Users,
    keywords: ["all partners", "directory", "complete", "list"],
  },

  // AI Assistant
  {
    id: "ai-chat",
    title: "AI Chat Assistant",
    description:
      "Get instant help and answers with our AI-powered chat assistant",
    href: "#ai-chat",
    category: "AI Assistant",
    icon: Bot,
    keywords: ["ai", "chat", "assistant", "help", "bot", "support"],
  },
  {
    id: "ai-search",
    title: "AI-Powered Search",
    description: "Search with natural language and get intelligent suggestions",
    href: "#ai-search",
    category: "AI Assistant",
    icon: Search,
    keywords: ["ai search", "smart search", "intelligent", "natural language"],
  },
  {
    id: "ai-recommendations",
    title: "AI Service Recommendations",
    description: "Get personalized service recommendations based on your needs",
    href: "#ai-recommendations",
    category: "AI Assistant",
    icon: Lightbulb,
    keywords: ["ai recommendations", "suggestions", "personalized", "services"],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions Advisor",
    description: "Get expert guidance on AI and machine learning solutions",
    href: "#ai-solutions",
    category: "AI Assistant",
    icon: Brain,
    keywords: ["ai solutions", "machine learning", "advisor", "expert"],
  },
  {
    id: "ai-insights",
    title: "AI Business Insights",
    description: "Discover how AI can transform your business operations",
    href: "#ai-insights",
    category: "AI Assistant",
    icon: Sparkles,
    keywords: ["ai insights", "business", "transformation", "analytics"],
  },
  {
    id: "ai-feedback",
    title: "Smart Feedback Assistant",
    description: "Provide feedback and suggestions with AI-enhanced forms",
    href: "#ai-feedback",
    category: "AI Assistant",
    icon: MessageSquare,
    keywords: ["ai feedback", "smart forms", "suggestions", "enhancement"],
  },

  // Legal & Policies
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch with our team for inquiries and support",
    href: "/contact",
    category: "Support",
    icon: Phone,
    keywords: ["contact", "support", "inquiry", "get in touch", "help"],
  },
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    description: "Our privacy policy and data protection practices",
    href: "/privacy-policy",
    category: "Legal",
    icon: Lock,
    keywords: ["privacy", "policy", "data", "protection", "gdpr"],
  },
  {
    id: "terms-of-service",
    title: "Terms of Service",
    description: "Terms and conditions for using our services",
    href: "/terms-of-service",
    category: "Legal",
    icon: FileText,
    keywords: ["terms", "service", "conditions", "legal", "agreement"],
  },
  {
    id: "cookie-policy",
    title: "Cookie Policy",
    description: "Information about how we use cookies on our website",
    href: "/cookie-policy",
    category: "Legal",
    icon: Cookie,
    keywords: ["cookies", "policy", "tracking", "web", "privacy"],
  },
];

export const searchCategories: SearchCategory[] = [
  {
    name: "Pages",
    items: searchData.filter((item) => item.category === "Pages"),
  },
  {
    name: "Company",
    items: searchData.filter((item) => item.category === "Company"),
  },
  {
    name: "Services",
    items: searchData.filter((item) => item.category === "Services"),
  },
  {
    name: "Partners",
    items: searchData.filter((item) => item.category === "Partners"),
  },
  {
    name: "Support",
    items: searchData.filter((item) => item.category === "Support"),
  },
  {
    name: "Legal",
    items: searchData.filter((item) => item.category === "Legal"),
  },
];

export function searchItems(query: string): SearchItem[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();

  return searchData
    .filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
      const descriptionMatch = item.description
        .toLowerCase()
        .includes(normalizedQuery);
      const keywordMatch = item.keywords?.some((keyword) =>
        keyword.toLowerCase().includes(normalizedQuery),
      );

      return titleMatch || descriptionMatch || keywordMatch;
    })
    .sort((a, b) => {
      // Prioritize title matches over description/keyword matches
      const aTitle = a.title.toLowerCase().includes(normalizedQuery);
      const bTitle = b.title.toLowerCase().includes(normalizedQuery);

      if (aTitle && !bTitle) return -1;
      if (!aTitle && bTitle) return 1;

      return 0;
    });
}

export function getItemsByCategory(category: string): SearchItem[] {
  return searchData.filter((item) => item.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(searchData.map((item) => item.category)));
}
