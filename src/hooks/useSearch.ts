import { useMemo } from "react";
import { useSearchContext } from "@/components/SearchProvider";

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  keywords?: string[];
}

// Comprehensive search data based on the site structure
const searchData: SearchItem[] = [
  // Home and Main Pages
  {
    id: "home",
    title: "Home",
    description:
      "Technum Opus homepage - Technology consulting and digital transformation",
    category: "Pages",
    url: "/",
    keywords: ["home", "main", "technum", "opus"],
  },

  // Company Pages
  {
    id: "about",
    title: "About Us",
    description: "Learn about our story, mission, and commitment to excellence",
    category: "Company",
    url: "/about",
    keywords: ["about", "company", "story", "mission", "values"],
  },
  {
    id: "leadership",
    title: "Leadership",
    description: "Meet our leadership team and executive board",
    category: "Company",
    url: "/leadership",
    keywords: ["leadership", "team", "executives", "management"],
  },
  {
    id: "careers",
    title: "Careers",
    description: "Join our team and shape the future of technology",
    category: "Company",
    url: "/careers",
    keywords: ["careers", "jobs", "hiring", "opportunities", "employment"],
  },
  {
    id: "news-insights",
    title: "News & Insights",
    description: "Latest news, thought leadership, and industry insights",
    category: "Company",
    url: "/news-insights",
    keywords: [
      "news",
      "insights",
      "articles",
      "thought leadership",
      "industry",
    ],
  },
  {
    id: "what-we-believe",
    title: "What We Believe",
    description: "Our values, principles, and company culture",
    category: "Company",
    url: "/about/what-we-believe",
    keywords: ["values", "principles", "culture", "beliefs"],
  },

  // Services
  {
    id: "services",
    title: "All Services",
    description: "Comprehensive overview of all our technology services",
    category: "Services",
    url: "/services",
    keywords: ["services", "solutions", "offerings"],
  },
  {
    id: "sap-consulting",
    title: "SAP Consulting",
    description:
      "Enterprise SAP implementations, optimization, and digital transformation",
    category: "Services",
    url: "/services/sap-consulting",
    keywords: ["sap", "consulting", "enterprise", "erp", "implementation"],
  },
  {
    id: "saas-development",
    title: "Software Development Platform",
    description:
      "Scalable cloud-based software solutions and custom development",
    category: "Services",
    url: "/services/saas-development",
    keywords: [
      "saas",
      "software",
      "development",
      "platform",
      "cloud",
      "custom",
    ],
  },
  {
    id: "cloud-architecture",
    title: "Cloud Architecture",
    description:
      "Robust and secure cloud infrastructure design and implementation",
    category: "Services",
    url: "/services/cloud-architecture",
    keywords: [
      "cloud",
      "architecture",
      "infrastructure",
      "aws",
      "azure",
      "google",
    ],
  },
  {
    id: "hardware-infrastructure",
    title: "Hardware Infrastructure",
    description:
      "Complete hardware solutions, deployment, and infrastructure management",
    category: "Services",
    url: "/services/hardware-infrastructure",
    keywords: [
      "hardware",
      "infrastructure",
      "servers",
      "networking",
      "deployment",
    ],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "End-to-end digital transformation and modernization services",
    category: "Services",
    url: "/services/digital-transformation",
    keywords: ["digital", "transformation", "modernization", "automation"],
  },

  // Partners
  {
    id: "partners",
    title: "All Partners",
    description: "Our strategic partnerships and technology alliances",
    category: "Partners",
    url: "/partners",
    keywords: ["partners", "alliances", "partnerships"],
  },
  {
    id: "cloud-partners",
    title: "Cloud Partners",
    description: "Leading cloud service providers and platform partners",
    category: "Partners",
    url: "/partners/cloud-partners",
    keywords: ["cloud", "partners", "aws", "azure", "google cloud"],
  },
  {
    id: "technology-partners",
    title: "Technology Partners",
    description: "Strategic technology alliances and vendor partnerships",
    category: "Partners",
    url: "/partners/technology-partners",
    keywords: ["technology", "partners", "vendors", "alliances"],
  },
  {
    id: "integration-partners",
    title: "Integration Partners",
    description: "System integration specialists and implementation partners",
    category: "Partners",
    url: "/partners/integration-partners",
    keywords: ["integration", "partners", "implementation", "systems"],
  },
  {
    id: "security-partners",
    title: "Security Partners",
    description: "Cybersecurity and compliance experts and partners",
    category: "Partners",
    url: "/partners/security-partners",
    keywords: ["security", "partners", "cybersecurity", "compliance"],
  },

  // Contact
  {
    id: "contact",
    title: "Contact Us",
    description: "Get in touch with our team for consultations and inquiries",
    category: "Contact",
    url: "/contact",
    keywords: ["contact", "inquiries", "consultation", "reach out"],
  },

  // Industries (based on the Index.tsx content)
  {
    id: "banking",
    title: "Banking Solutions",
    description: "Financial services and banking technology solutions",
    category: "Industries",
    url: "/industries/banking",
    keywords: ["banking", "financial", "fintech", "finance"],
  },
  {
    id: "healthcare",
    title: "Healthcare Solutions",
    description: "Healthcare technology and digital health solutions",
    category: "Industries",
    url: "/industries/healthcare",
    keywords: ["healthcare", "health", "medical", "hospital"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing Solutions",
    description: "Industrial manufacturing and automation solutions",
    category: "Industries",
    url: "/industries/manufacturing",
    keywords: ["manufacturing", "industrial", "automation", "factory"],
  },
  {
    id: "retail",
    title: "Retail Solutions",
    description: "Retail technology and e-commerce solutions",
    category: "Industries",
    url: "/industries/retail",
    keywords: ["retail", "ecommerce", "shopping", "commerce"],
  },
  {
    id: "energy",
    title: "Energy Solutions",
    description: "Energy sector technology and smart grid solutions",
    category: "Industries",
    url: "/industries/energy",
    keywords: ["energy", "power", "utilities", "smart grid"],
  },

  // Quick Actions and Frequently Searched
  {
    id: "get-quote",
    title: "Get a Quote",
    description: "Request a consultation and quote for our services",
    category: "Quick Actions",
    url: "/contact",
    keywords: ["quote", "consultation", "pricing", "estimate", "proposal"],
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description: "Success stories and client implementations",
    category: "Resources",
    url: "/news-insights",
    keywords: [
      "case studies",
      "success stories",
      "implementations",
      "examples",
    ],
  },
  {
    id: "ai-solutions",
    title: "AI & Machine Learning",
    description: "Artificial intelligence and machine learning solutions",
    category: "Technologies",
    url: "/services",
    keywords: [
      "ai",
      "artificial intelligence",
      "machine learning",
      "ml",
      "automation",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Services",
    description: "Comprehensive cybersecurity and data protection",
    category: "Services",
    url: "/partners/security-partners",
    keywords: [
      "cybersecurity",
      "security",
      "data protection",
      "compliance",
      "privacy",
    ],
  },
  {
    id: "support",
    title: "Support & Maintenance",
    description: "Ongoing support and system maintenance services",
    category: "Services",
    url: "/contact",
    keywords: [
      "support",
      "maintenance",
      "help",
      "assistance",
      "technical support",
    ],
  },
];

export const useSearch = () => {
  const { isOpen, query, setQuery, openSearch, closeSearch, handleSelect } =
    useSearchContext();

  const filteredResults = useMemo(() => {
    if (!query.trim()) return searchData;

    const lowercaseQuery = query.toLowerCase();

    return searchData
      .filter((item) => {
        // Search in title, description, and keywords
        const searchableText = [
          item.title,
          item.description,
          ...(item.keywords || []),
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(lowercaseQuery);
      })
      .sort((a, b) => {
        // Prioritize exact title matches
        const aExactMatch = a.title.toLowerCase().includes(lowercaseQuery);
        const bExactMatch = b.title.toLowerCase().includes(lowercaseQuery);

        if (aExactMatch && !bExactMatch) return -1;
        if (!aExactMatch && bExactMatch) return 1;

        // Then prioritize by category (Pages first, then Services, etc.)
        const categoryOrder = [
          "Pages",
          "Quick Actions",
          "Services",
          "Company",
          "Partners",
          "Industries",
          "Technologies",
          "Resources",
          "Contact",
        ];
        const aIndex = categoryOrder.indexOf(a.category);
        const bIndex = categoryOrder.indexOf(b.category);

        return aIndex - bIndex;
      });
  }, [query]);

  return {
    isOpen,
    query,
    setQuery,
    filteredResults,
    openSearch,
    closeSearch,
    handleSelect,
  };
};
