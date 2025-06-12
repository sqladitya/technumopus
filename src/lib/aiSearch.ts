import { searchData, type SearchItem } from "./searchData";

export interface AISearchResult {
  type: "page" | "suggestion" | "answer" | "action";
  title: string;
  description: string;
  href?: string;
  action?: () => void;
  confidence: number;
  category: string;
  icon: string;
}

export interface AISearchResponse {
  results: AISearchResult[];
  interpretation: string;
  suggestions: string[];
}

// Keywords and phrases that indicate different types of queries
const INTENT_PATTERNS = {
  services: [
    "services",
    "service",
    "offering",
    "offerings",
    "solutions",
    "solution",
    "what do you do",
    "what do you offer",
    "capabilities",
    "help with",
  ],
  sap: [
    "sap",
    "erp",
    "enterprise resource planning",
    "sap consulting",
    "sap implementation",
    "sap support",
  ],
  cloud: [
    "cloud",
    "aws",
    "azure",
    "google cloud",
    "gcp",
    "cloud migration",
    "cloud architecture",
    "cloud services",
  ],
  company: [
    "about",
    "company",
    "who are you",
    "what is technum",
    "your company",
    "history",
    "story",
    "mission",
  ],
  contact: [
    "contact",
    "get in touch",
    "reach out",
    "talk to someone",
    "phone",
    "email",
    "address",
    "location",
  ],
  careers: [
    "jobs",
    "careers",
    "hiring",
    "work",
    "employment",
    "join team",
    "open positions",
    "apply",
  ],
  partners: ["partners", "partnership", "alliances", "vendors", "integrations"],
  pricing: [
    "price",
    "pricing",
    "cost",
    "how much",
    "quote",
    "estimate",
    "budget",
  ],
  support: [
    "support",
    "help",
    "assistance",
    "problem",
    "issue",
    "troubleshoot",
  ],
};

// Common questions and their responses
const COMMON_QUESTIONS = {
  "what services do you offer": {
    answer:
      "We offer SAP Consulting, Software Development Platform, Cloud Architecture, and Hardware Infrastructure services.",
    pages: [
      "sap-consulting",
      "saas-development",
      "cloud-architecture",
      "hardware-infrastructure",
    ],
  },
  "who are you": {
    answer:
      "We are Technum Opus, a technology consulting company specializing in digital transformation and enterprise solutions.",
    pages: ["about", "leadership"],
  },
  "how can i contact you": {
    answer:
      "You can reach us through our contact page, or get in touch with our team directly for inquiries and support.",
    pages: ["contact"],
  },
  "what is sap": {
    answer:
      "SAP is enterprise software for business operations and customer relations. We provide SAP consulting, implementation, and optimization services.",
    pages: ["sap-consulting"],
  },
  "cloud services": {
    answer:
      "We provide comprehensive cloud architecture services including AWS, Azure, and Google Cloud implementation and migration.",
    pages: ["cloud-architecture", "cloud-partners"],
  },
};

function detectIntent(query: string): string[] {
  const normalizedQuery = query.toLowerCase();
  const intents: string[] = [];

  Object.entries(INTENT_PATTERNS).forEach(([intent, patterns]) => {
    if (patterns.some((pattern) => normalizedQuery.includes(pattern))) {
      intents.push(intent);
    }
  });

  return intents;
}

function findRelevantPages(query: string, intents: string[]): SearchItem[] {
  const normalizedQuery = query.toLowerCase();
  let relevantPages: SearchItem[] = [];

  // First, get pages that match the query directly
  relevantPages = searchData.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
    const descriptionMatch = item.description
      .toLowerCase()
      .includes(normalizedQuery);
    const keywordMatch = item.keywords?.some(
      (keyword) =>
        keyword.toLowerCase().includes(normalizedQuery) ||
        normalizedQuery.includes(keyword.toLowerCase()),
    );
    return titleMatch || descriptionMatch || keywordMatch;
  });

  // Then add pages based on detected intents
  intents.forEach((intent) => {
    switch (intent) {
      case "services":
        relevantPages.push(
          ...searchData.filter((item) => item.category === "Services"),
        );
        break;
      case "sap":
        relevantPages.push(
          ...searchData.filter((item) => item.id.includes("sap")),
        );
        break;
      case "cloud":
        relevantPages.push(
          ...searchData.filter((item) => item.id.includes("cloud")),
        );
        break;
      case "company":
        relevantPages.push(
          ...searchData.filter((item) => item.category === "Company"),
        );
        break;
      case "contact":
        relevantPages.push(
          ...searchData.filter((item) => item.id === "contact"),
        );
        break;
      case "careers":
        relevantPages.push(
          ...searchData.filter((item) => item.id === "careers"),
        );
        break;
      case "partners":
        relevantPages.push(
          ...searchData.filter((item) => item.category === "Partners"),
        );
        break;
    }
  });

  // Remove duplicates and sort by relevance
  const uniquePages = Array.from(
    new Map(relevantPages.map((item) => [item.id, item])).values(),
  );

  return uniquePages.slice(0, 5); // Limit to top 5 results
}

function generateAIResponse(query: string, intents: string[]): string {
  const normalizedQuery = query.toLowerCase();

  // Check for common questions first
  for (const [question, response] of Object.entries(COMMON_QUESTIONS)) {
    if (
      normalizedQuery.includes(question.toLowerCase()) ||
      question.toLowerCase().includes(normalizedQuery)
    ) {
      return response.answer;
    }
  }

  // Generate response based on intents
  if (intents.includes("services")) {
    return "I can help you learn about our technology services including SAP Consulting, Software Development, Cloud Architecture, and Hardware Infrastructure.";
  }

  if (intents.includes("sap")) {
    return "We specialize in SAP consulting services including implementation, optimization, and support for enterprise SAP solutions.";
  }

  if (intents.includes("cloud")) {
    return "Our cloud architecture services help businesses migrate to and optimize their use of AWS, Azure, and Google Cloud platforms.";
  }

  if (intents.includes("company")) {
    return "Technum Opus is a technology consulting company focused on digital transformation and enterprise solutions. Learn more about our story and leadership team.";
  }

  if (intents.includes("contact")) {
    return "You can reach out to our team through the contact page for inquiries, support, or to discuss your technology needs.";
  }

  if (intents.includes("careers")) {
    return "We're always looking for talented individuals to join our team. Check out our careers page for current openings and opportunities.";
  }

  if (intents.includes("partners")) {
    return "We work with leading technology partners including cloud providers, security experts, and system integrators to deliver comprehensive solutions.";
  }

  // Default response
  return "I found some relevant information based on your query. Let me show you the most relevant pages and resources.";
}

function generateSuggestions(query: string, intents: string[]): string[] {
  const suggestions: string[] = [];

  if (intents.includes("services")) {
    suggestions.push(
      "What SAP services do you offer?",
      "Tell me about cloud architecture",
      "What is your software development platform?",
    );
  } else if (intents.includes("cloud")) {
    suggestions.push(
      "AWS migration services",
      "Azure cloud solutions",
      "Google Cloud consulting",
    );
  } else if (intents.includes("sap")) {
    suggestions.push(
      "SAP implementation process",
      "SAP optimization services",
      "SAP support options",
    );
  } else {
    suggestions.push(
      "What services do you offer?",
      "How can I contact you?",
      "Tell me about your company",
      "What are your cloud capabilities?",
    );
  }

  return suggestions.slice(0, 3);
}

export function processAIQuery(query: string): AISearchResponse {
  const intents = detectIntent(query);
  const relevantPages = findRelevantPages(query, intents);
  const interpretation = generateAIResponse(query, intents);
  const suggestions = generateSuggestions(query, intents);

  // Convert pages to AI search results
  const results: AISearchResult[] = relevantPages.map((page) => ({
    type: "page" as const,
    title: page.title,
    description: page.description,
    href: page.href,
    confidence: 0.8,
    category: page.category,
    icon: getCategoryIcon(page.category),
  }));

  // Add contextual suggestions based on query
  if (intents.includes("pricing")) {
    results.unshift({
      type: "suggestion",
      title: "Get a Custom Quote",
      description:
        "Contact our team to discuss your specific needs and get a personalized quote.",
      href: "/contact",
      confidence: 0.9,
      category: "AI Suggestion",
      icon: "💼",
    });
  }

  if (intents.includes("support")) {
    results.unshift({
      type: "suggestion",
      title: "Contact Support",
      description: "Get immediate assistance from our technical support team.",
      href: "/contact",
      confidence: 0.9,
      category: "AI Suggestion",
      icon: "🛠️",
    });
  }

  return {
    results,
    interpretation,
    suggestions,
  };
}

function getCategoryIcon(category: string): string {
  switch (category) {
    case "AI Assistant":
      return "🤖";
    case "Pages":
      return "🏠";
    case "Services":
      return "⚙️";
    case "Company":
      return "🏢";
    case "Partners":
      return "🤝";
    case "Support":
      return "🛠️";
    case "Legal":
      return "⚖️";
    default:
      return "📄";
  }
}

// Predefined AI search suggestions for when no query is entered
export const AI_SEARCH_SUGGESTIONS = [
  "What services do you offer?",
  "How can I migrate to the cloud?",
  "Tell me about SAP consulting",
  "What makes your company different?",
  "How much do your services cost?",
  "Do you offer support after implementation?",
  "What industries do you work with?",
  "How can I contact your team?",
];
