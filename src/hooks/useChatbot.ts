import { useState, useCallback } from "react";

export interface ChatMessage {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
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

// Predefined AI responses for common questions
const AI_RESPONSES: Record<string, string> = {
  greeting:
    "Hello! I'm your AI assistant. I'm here to help you learn about Technum Opus's services, company information, and answer any questions you might have. What would you like to know?",

  services:
    "We offer several key services: SAP Consulting for enterprise implementations, Software Development Platform for scalable cloud solutions, Cloud Architecture for robust infrastructure, and Hardware Infrastructure for complete deployment. Which service interests you most?",

  sap: "Our SAP Consulting services include implementation, optimization, and support for enterprise SAP solutions. We help businesses streamline their operations with customized SAP deployments. Would you like to know more about our SAP implementation process?",

  cloud:
    "We provide comprehensive cloud architecture services for AWS, Azure, and Google Cloud platforms. Our team helps with cloud migration, infrastructure design, and optimization. Are you looking to migrate to the cloud or optimize your existing cloud setup?",

  company:
    "Technum Opus is a technology consulting company focused on digital transformation and enterprise solutions. We combine deep technical expertise with business insight to help organizations modernize and grow. Would you like to learn about our leadership team or company values?",

  contact:
    "You can reach out to our team through our contact page for inquiries, support, or to discuss your technology needs. Our experts are ready to help you find the right solutions. What specific area would you like assistance with?",

  partners:
    "We work with leading technology partners including cloud providers like AWS, Azure, and Google Cloud, as well as security experts and system integrators. Our partner ecosystem helps us deliver comprehensive solutions. Are you interested in a specific partnership area?",

  careers:
    "We're always looking for talented individuals to join our team! Check out our careers page for current openings in areas like SAP consulting, cloud architecture, and software development. What type of role are you interested in?",

  default:
    "Thank you for your question! I'd be happy to help you learn more about Technum Opus. You can ask me about our services (SAP, cloud, software development), company information, careers, or how to get in touch with our team.",
};

// Keywords for intent detection
const INTENT_KEYWORDS = {
  greeting: [
    "hello",
    "hi",
    "hey",
    "good morning",
    "good afternoon",
    "good evening",
  ],
  services: [
    "services",
    "what do you do",
    "offerings",
    "solutions",
    "capabilities",
  ],
  sap: ["sap", "erp", "enterprise resource planning"],
  cloud: ["cloud", "aws", "azure", "google cloud", "migration"],
  company: ["about", "company", "who are you", "what is technum"],
  contact: ["contact", "get in touch", "reach out", "phone", "email"],
  partners: ["partners", "partnership", "alliances"],
  careers: ["jobs", "careers", "hiring", "work", "employment"],
};

function detectIntent(message: string): string {
  const normalizedMessage = message.toLowerCase();

  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS)) {
    if (keywords.some((keyword) => normalizedMessage.includes(keyword))) {
      return intent;
    }
  }

  return "default";
}

function generateAIResponse(userMessage: string): string {
  const intent = detectIntent(userMessage);
  return AI_RESPONSES[intent] || AI_RESPONSES.default;
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

  const sendMessage = useCallback((content: string) => {
    // Add user message immediately
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(
      () => {
        const aiResponse = generateAIResponse(content);
        const aiMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          type: "ai",
          content: aiResponse,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, aiMessage]);
        setIsTyping(false);
      },
      1000 + Math.random() * 2000,
    ); // Random delay between 1-3 seconds
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
