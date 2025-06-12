import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useChatbot, type ChatMessage } from "@/hooks/useChatbot";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
  ExternalLink,
  Search,
  Loader2,
  Sparkles,
  Globe,
  RefreshCw,
} from "lucide-react";

const AIChatbot = () => {
  const {
    isOpen,
    isMinimized,
    messages,
    isTyping,
    openChat,
    closeChat,
    toggleMinimize,
    sendMessage,
    clearMessages,
  } = useChatbot();

  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    sendMessage(inputValue.trim());
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const renderMessage = (message: ChatMessage) => {
    if (message.type === "loading") {
      return (
        <div className="flex gap-3 justify-start">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <Loader2 className="h-4 w-4 text-white animate-spin" />
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 max-w-[75%]">
            <div className="flex items-center gap-2 text-blue-700">
              <Search className="h-4 w-4" />
              <span className="text-sm">{message.content}</span>
            </div>
          </div>
        </div>
      );
    }

    if (message.type === "search-result") {
      return (
        <div className="flex gap-3 justify-start">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
              <Globe className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="max-w-[85%] space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2">
              <div className="flex items-center gap-2 text-green-700 mb-2">
                <Search className="h-4 w-4" />
                <span className="text-sm font-medium">{message.content}</span>
              </div>
            </div>

            {message.searchResults && (
              <div className="space-y-2">
                {message.searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <ExternalLink className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-blue-600 text-sm leading-tight">
                          {result.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1">
                          {result.url}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {result.snippet}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {result.source}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 px-2 text-xs text-blue-600 hover:text-blue-800"
                        onClick={() => window.open(result.url, "_blank")}
                      >
                        Read more
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="text-xs text-gray-500">
              {formatTime(message.timestamp)}
            </div>
          </div>
        </div>
      );
    }

    // Regular user or AI message
    return (
      <div
        className={cn(
          "flex gap-3",
          message.type === "user" ? "justify-end" : "justify-start",
        )}
      >
        {message.type === "ai" && (
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
          </div>
        )}

        <div
          className={cn(
            "max-w-[75%] space-y-1",
            message.type === "user" ? "items-end" : "items-start",
          )}
        >
          <div
            className={cn(
              "rounded-lg px-3 py-2 text-sm whitespace-pre-wrap",
              message.type === "user"
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : "bg-gray-100 text-gray-900 border border-gray-200",
            )}
          >
            {message.content}
          </div>
          <div className="text-xs text-gray-500">
            {formatTime(message.timestamp)}
          </div>
        </div>

        {message.type === "user" && (
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
              <User className="h-4 w-4 text-gray-600" />
            </div>
          </div>
        )}
      </div>
    );
  };

  const quickActions = [
    {
      label: "Search latest AI trends",
      icon: <Search className="h-3 w-3" />,
      action: () => sendMessage("Search for latest AI trends"),
    },
    {
      label: "Our services",
      icon: <Sparkles className="h-3 w-3" />,
      action: () => sendMessage("What services do you offer?"),
    },
    {
      label: "Cloud solutions",
      icon: <Globe className="h-3 w-3" />,
      action: () => sendMessage("Tell me about your cloud services"),
    },
    {
      label: "Contact info",
      icon: <ExternalLink className="h-3 w-3" />,
      action: () => sendMessage("How can I contact you?"),
    },
  ];

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <Button
          onClick={openChat}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-200" />
          <span className="sr-only">Open AI Chat</span>
        </Button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <Card
          className={cn(
            "fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] transition-all duration-300 shadow-2xl border-0",
            isMinimized ? "h-14" : "h-[36rem] max-h-[calc(100vh-3rem)]",
          )}
        >
          {/* Header */}
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-lg font-semibold">
              <Bot className="h-5 w-5" />
              AI Assistant
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30 text-xs"
              >
                Web Search
              </Badge>
            </CardTitle>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearMessages}
                  className="h-8 w-8 text-white hover:bg-white/20"
                  title="Clear chat"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMinimize}
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                {isMinimized ? (
                  <Maximize2 className="h-4 w-4" />
                ) : (
                  <Minimize2 className="h-4 w-4" />
                )}
                <span className="sr-only">
                  {isMinimized ? "Maximize" : "Minimize"}
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeChat}
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close chat</span>
              </Button>
            </div>
          </CardHeader>

          {/* Chat Content */}
          {!isMinimized && (
            <CardContent className="p-0 flex flex-col h-[calc(36rem-4rem)]">
              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.length === 0 && (
                    <div className="text-center text-gray-500 py-8">
                      <Bot className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                      <p className="text-sm font-medium mb-2">
                        Welcome to Enhanced AI Assistant!
                      </p>
                      <p className="text-xs mb-4 leading-relaxed">
                        I can help with company information, perform web
                        searches, and answer questions on any topic. Try the
                        quick actions below:
                      </p>

                      {/* Quick Action Buttons */}
                      <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
                        {quickActions.map((action, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={action.action}
                            className="h-8 text-xs justify-start gap-1.5 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
                          >
                            {action.icon}
                            {action.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {messages.map((message) => (
                    <div key={message.id}>{renderMessage(message)}</div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex gap-3 justify-start">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="bg-gray-100 rounded-lg px-3 py-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="border-t p-4 space-y-2">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    placeholder="Ask anything or request a web search..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isTyping}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    size="icon"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Send message</span>
                  </Button>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Press Enter to send • Shift+Enter for new line</span>
                  <div className="flex items-center gap-1">
                    <Globe className="h-3 w-3" />
                    <span>Web search enabled</span>
                  </div>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      )}
    </>
  );
};

export default AIChatbot;
