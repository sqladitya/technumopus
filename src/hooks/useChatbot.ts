import { useState, useCallback } from "react";

export interface ChatMessage {
  id: string;
  type: "user" | "ai" | "search-result" | "loading";
  content: string;
  timestamp: Date;
  searchResults?: SearchResult[];
  isStreaming?: boolean;
}

export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  source: string;
}

export interface UseChatbotReturn {
  isOpen: boolean;
  isMinimized: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleMinimize: () => void;
  sendMessage: (content: string) => void;
  clearMessages: () => void;
}

// Enhanced AI responses with more context and personality
const AI_RESPONSES: Record<string, string[]> = {
  greeting: [
    "Hello! I'm your AI assistant powered by advanced language models. I can help you with questions about Technum Opus, perform web searches, and provide detailed information on various topics. What would you like to explore today?",
    "Hi there! 👋 I'm here to assist you with anything you need. I can search the web, answer questions about our services, or help with general inquiries. How can I help you today?",
    "Welcome! I'm an AI assistant with access to real-time web search. Feel free to ask me about Technum Opus services, current events, technical questions, or anything else you're curious about!",
  ],

  services: [
    "Technum Opus offers comprehensive technology solutions including:\n\n🔹 **SAP Consulting** - Enterprise implementations and optimization\n🔹 **Software Development Platform** - Scalable cloud-based solutions\n🔹 **Cloud Architecture** - AWS, Azure, and Google Cloud expertise\n🔹 **Hardware Infrastructure** - Complete deployment and management\n\nWhich area interests you most? I can provide detailed information or search for the latest industry insights.",
    "Our service portfolio spans the full technology stack. From SAP enterprise solutions to modern cloud architectures, we help businesses transform digitally. Would you like me to search for recent case studies or explain any specific service in detail?",
  ],

  sap: [
    "Our SAP expertise covers the full implementation lifecycle:\n\n✅ **Assessment & Planning** - Business process analysis\n✅ **Implementation** - Custom SAP deployments\n✅ **Integration** - Seamless system connectivity\n✅ **Optimization** - Performance tuning\n✅ **Support** - Ongoing maintenance\n\nWould you like me to search for the latest SAP trends or explain any specific module?",
    "SAP is at the core of enterprise digital transformation. We specialize in S/4HANA migrations, cloud implementations, and business process optimization. I can search for recent SAP updates or case studies if you're interested!",
  ],

  cloud: [
    "Our cloud architecture services leverage leading platforms:\n\n☁️ **AWS** - Complete ecosystem including EC2, Lambda, RDS\n☁️ **Microsoft Azure** - Enterprise integration and hybrid solutions\n☁️ **Google Cloud** - AI/ML capabilities and data analytics\n\nWe handle migration, security, optimization, and cost management. Want me to search for current cloud trends or pricing information?",
    "Cloud transformation is essential for modern businesses. We provide end-to-end services from assessment to ongoing optimization. I can search for the latest cloud security practices or cost optimization strategies if you'd like!",
  ],

  company: [
    "Technum Opus is a forward-thinking technology consultancy founded on the principle of delivering transformative solutions. We combine deep technical expertise with business acumen to help organizations navigate digital complexity.\n\n🏢 **Our Focus**: Enterprise solutions, digital transformation, and strategic technology partnerships\n🌟 **Our Approach**: Collaborative, innovative, and results-driven\n\nWould you like me to search for recent company news or industry recognition?",
    "We're passionate about technology's power to transform businesses. Our team brings decades of combined experience in enterprise solutions, cloud computing, and digital innovation. I can search for our latest projects or industry insights if you're interested!",
  ],

  contact: [
    "Ready to start your digital transformation journey? Our expert team is here to help:\n\n📧 **General Inquiries**: Contact us through our website\n🤝 **Partnerships**: Collaboration opportunities\n💼 **Career Opportunities**: Join our growing team\n🆘 **Support**: Technical assistance and consulting\n\nI can also search for our office locations or recent contact information if needed.",
    "Getting in touch is easy! We're available for consultations, project discussions, and partnership opportunities. Would you like me to search for our latest contact information or find the best way to reach our team?",
  ],

  partners: [
    "Our strategic partnerships enable comprehensive solutions:\n\n🤝 **Cloud Partners**: AWS, Microsoft, Google Cloud\n🔐 **Security Partners**: Leading cybersecurity providers\n⚙️ **Technology Partners**: SAP, Oracle, and integration specialists\n🏗️ **Implementation Partners**: System integrators and consultants\n\nThese partnerships ensure we deliver best-in-class solutions. Want me to search for recent partnership announcements?",
    "We believe in the power of partnerships to deliver exceptional value. Our ecosystem includes major cloud providers, security specialists, and technology vendors. I can search for specific partner information or joint solution offerings if you're interested!",
  ],

  careers: [
    "Join our innovative team! We're always seeking talented professionals in:\n\n💻 **Software Development** - Full-stack, cloud-native applications\n☁️ **Cloud Architecture** - AWS, Azure, GCP expertise\n🏢 **SAP Consulting** - Functional and technical roles\n🔒 **Cybersecurity** - Security architecture and compliance\n📊 **Data Analytics** - BI, ML, and data engineering\n\nI can search for current openings or industry salary trends if you're interested!",
    "We offer exciting career opportunities in cutting-edge technology. Our culture values innovation, continuous learning, and work-life balance. Would you like me to search for our current job openings or company culture information?",
  ],

  search: [
    "I can search the web for you! Just ask me to search for anything and I'll find the most current information available. Try phrases like:\n\n🔍 'Search for latest AI trends'\n🔍 'Find information about cloud computing costs'\n🔍 'Look up SAP S/4HANA migration best practices'\n\nWhat would you like me to search for?",
    "My web search capabilities let me find real-time information on any topic. I can research technical questions, market trends, news updates, or anything else you're curious about. What shall I search for you?",
  ],

  help: [
    "Here's what I can help you with:\n\n🏢 **Company Info** - Services, team, values, contact details\n🔍 **Web Search** - Real-time information on any topic\n💬 **General Questions** - Technology, business, current events\n📚 **Research** - In-depth analysis and explanations\n🤖 **AI Assistance** - Problem-solving and recommendations\n\nJust ask naturally - I understand context and can have detailed conversations!",
    "I'm designed to be your comprehensive AI assistant. I can discuss our services, search the web for current information, explain complex topics, and help with research. What's on your mind today?",
  ],

  default: [
    "That's an interesting question! Let me help you with that. I can search the web for the most current information or provide insights based on my knowledge. Would you like me to search for more details on this topic?",
    "I'd be happy to help you with that! I have access to both our company information and web search capabilities. Let me know if you'd like me to search for more specific or current information.",
    "Great question! I can provide information from my knowledge base or search the web for the latest details. What specific aspect would you like me to focus on or research further?",
  ],
};

// Enhanced intent detection with more sophisticated patterns
const INTENT_KEYWORDS = {
  greeting: [
    "hello",
    "hi",
    "hey",
    "good morning",
    "good afternoon",
    "good evening",
    "howdy",
    "greetings",
    "what's up",
    "how are you",
    "nice to meet you",
  ],
  services: [
    "services",
    "what do you do",
    "offerings",
    "solutions",
    "capabilities",
    "products",
    "what can you offer",
    "service portfolio",
    "what services",
  ],
  sap: [
    "sap",
    "erp",
    "enterprise resource planning",
    "s/4hana",
    "hana",
    "sap consulting",
    "sap implementation",
    "sap migration",
  ],
  cloud: [
    "cloud",
    "aws",
    "azure",
    "google cloud",
    "gcp",
    "cloud migration",
    "cloud computing",
    "cloud architecture",
    "cloud services",
    "cloud native",
  ],
  company: [
    "about",
    "company",
    "who are you",
    "what is technum",
    "your company",
    "business",
    "organization",
    "firm",
    "about us",
    "company info",
  ],
  contact: [
    "contact",
    "get in touch",
    "reach out",
    "phone",
    "email",
    "address",
    "location",
    "how to contact",
    "speak to someone",
    "talk to team",
  ],
  partners: [
    "partners",
    "partnership",
    "alliances",
    "vendors",
    "integrations",
    "collaborate",
    "work with",
    "partner with",
    "ecosystem",
  ],
  careers: [
    "jobs",
    "careers",
    "hiring",
    "work",
    "employment",
    "join team",
    "openings",
    "positions",
    "opportunities",
    "work at",
    "apply",
  ],
  search: [
    "search",
    "find",
    "look up",
    "research",
    "google",
    "search for",
    "find information",
    "look for",
    "web search",
    "search the web",
  ],
  help: [
    "help",
    "assist",
    "support",
    "what can you do",
    "how can you help",
    "capabilities",
    "features",
    "what are you",
    "how do you work",
  ],
};

// Web search trigger phrases
const SEARCH_TRIGGERS = [
  "search for",
  "find",
  "look up",
  "research",
  "google",
  "what's the latest",
  "current",
  "recent",
  "news about",
  "information about",
  "tell me about",
  "find information",
  "search the web",
  "look for",
];

function detectIntent(message: string): string {
  const normalizedMessage = message.toLowerCase();

  // Check for search triggers first
  if (SEARCH_TRIGGERS.some((trigger) => normalizedMessage.includes(trigger))) {
    return "search-request";
  }

  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS)) {
    if (keywords.some((keyword) => normalizedMessage.includes(keyword))) {
      return intent;
    }
  }

  // Check if it's a question that might benefit from web search
  if (
    normalizedMessage.includes("?") ||
    normalizedMessage.startsWith("what") ||
    normalizedMessage.startsWith("how") ||
    normalizedMessage.startsWith("when") ||
    normalizedMessage.startsWith("where") ||
    normalizedMessage.startsWith("why") ||
    normalizedMessage.startsWith("who")
  ) {
    return "question";
  }

  return "default";
}

function getRandomResponse(responses: string[]): string {
  return responses[Math.floor(Math.random() * responses.length)];
}

function shouldSearchWeb(message: string, intent: string): boolean {
  const normalizedMessage = message.toLowerCase();

  // Always search if explicit search request
  if (intent === "search-request") return true;

  // Search for questions about current events, trends, news
  const searchIndicators = [
    "latest",
    "current",
    "recent",
    "new",
    "news",
    "trends",
    "2024",
    "2025",
    "price",
    "cost",
    "market",
    "industry",
    "update",
    "release",
    "announcement",
  ];

  return searchIndicators.some((indicator) =>
    normalizedMessage.includes(indicator),
  );
}

function extractSearchQuery(message: string): string {
  const normalizedMessage = message.toLowerCase();

  // Remove search trigger phrases
  let query = message;
  SEARCH_TRIGGERS.forEach((trigger) => {
    const regex = new RegExp(trigger, "gi");
    query = query.replace(regex, "").trim();
  });

  // Remove question words at the beginning if it's a direct question
  query = query.replace(/^(what|how|when|where|why|who)\s+/i, "").trim();

  return query || message;
}

// Simulate web search functionality (in a real app, this would call an actual search API)
async function performWebSearch(query: string): Promise<SearchResult[]> {
  // Simulate API delay
  await new Promise((resolve) =>
    setTimeout(resolve, 1500 + Math.random() * 1000),
  );

  // Mock search results (in production, this would be real search results)
  const mockResults: SearchResult[] = [
    {
      title: `Latest Information on ${query}`,
      url: "https://example.com/search-result-1",
      snippet: `Here are the most recent developments and insights about ${query}. This information includes current trends, expert opinions, and relevant data points that help understand the topic better.`,
      source: "TechNews Today",
    },
    {
      title: `${query} - Industry Analysis & Trends`,
      url: "https://example.com/search-result-2",
      snippet: `Comprehensive analysis of ${query} including market trends, technical specifications, and future outlook. Expert insights and data-driven perspectives on current developments.`,
      source: "Industry Weekly",
    },
    {
      title: `Complete Guide to ${query}`,
      url: "https://example.com/search-result-3",
      snippet: `In-depth guide covering all aspects of ${query}. Includes best practices, implementation strategies, and real-world examples from leading organizations.`,
      source: "Tech Authority",
    },
  ];

  return mockResults;
}

export function useChatbot(): UseChatbotReturn {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const openChat = useCallback(() => {
    setIsOpen(true);
    setIsMinimized(false);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
    setIsMinimized(false);
  }, []);

  const toggleMinimize = useCallback(() => {
    setIsMinimized((prev) => !prev);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    // Add user message immediately
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const intent = detectIntent(content);
      const shouldSearch = shouldSearchWeb(content, intent);

      if (shouldSearch || intent === "search-request") {
        // Show loading message
        const loadingMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          type: "loading",
          content: "🔍 Searching the web for current information...",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, loadingMessage]);

        // Extract search query
        const searchQuery = extractSearchQuery(content);

        // Perform web search
        const searchResults = await performWebSearch(searchQuery);

        // Remove loading message and add search results
        setMessages((prev) => prev.filter((msg) => msg.type !== "loading"));

        const searchResultMessage: ChatMessage = {
          id: (Date.now() + 2).toString(),
          type: "search-result",
          content: `I found some current information about "${searchQuery}":`,
          timestamp: new Date(),
          searchResults,
        };

        setMessages((prev) => [...prev, searchResultMessage]);

        // Add AI response after search
        setTimeout(() => {
          const aiResponse = `Based on my search results, here's what I found about ${searchQuery}. The search results show current information and trends. Would you like me to search for more specific details or help you with anything else related to this topic?`;

          const aiMessage: ChatMessage = {
            id: (Date.now() + 3).toString(),
            type: "ai",
            content: aiResponse,
            timestamp: new Date(),
          };

          setMessages((prev) => [...prev, aiMessage]);
          setIsTyping(false);
        }, 1000);
      } else {
        // Regular AI response
        setTimeout(
          () => {
            const responses = AI_RESPONSES[intent] || AI_RESPONSES.default;
            const aiResponse = getRandomResponse(responses);

            const aiMessage: ChatMessage = {
              id: (Date.now() + 1).toString(),
              type: "ai",
              content: aiResponse,
              timestamp: new Date(),
            };

            setMessages((prev) => [...prev, aiMessage]);
            setIsTyping(false);
          },
          1000 + Math.random() * 1500,
        );
      }
    } catch (error) {
      // Error handling
      setTimeout(() => {
        const errorMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          type: "ai",
          content:
            "I apologize, but I encountered an issue while processing your request. Please try again or ask a different question.",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    }
  }, []);

  return {
    isOpen,
    isMinimized,
    messages,
    isTyping,
    openChat,
    closeChat,
    toggleMinimize,
    sendMessage,
    clearMessages,
  };
}
