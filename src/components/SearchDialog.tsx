import { useEffect } from "react";
import { useSearchContext } from "@/components/SearchProvider";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import {
  searchItems,
  searchCategories,
  type SearchItem,
} from "@/lib/searchData";
import {
  processAIQuery,
  AI_SEARCH_SUGGESTIONS,
  type AISearchResult,
} from "@/lib/aiSearch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Search,
  Home,
  Building,
  Settings,
  Users,
  HeadphonesIcon,
  Scale,
  Bot,
  Lightbulb,
  FileText,
  Zap,
} from "lucide-react";

const SearchDialog = () => {
  const { isOpen, closeSearch, openSearch } = useSearchContext();
  const [query, setQuery] = useState("");
  const [isAIMode, setIsAIMode] = useState(false);
  const [aiResponse, setAiResponse] = useState<{
    results: AISearchResult[];
    interpretation: string;
    suggestions: string[];
  } | null>(null);
  const navigate = useNavigate();

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open search with Cmd+K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (!isOpen) {
          openSearch();
        }
      }

      // Close search with Escape
      if (e.key === "Escape" && isOpen) {
        closeSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeSearch, openSearch]);

  const handleSelect = (item: SearchItem | AISearchResult) => {
    // Handle AI Assistant actions differently
    if ("category" in item && item.category === "AI Assistant") {
      const searchItem = item as SearchItem;
      switch (searchItem.id) {
        case "ai-chat":
          // Open AI chat interface
          alert(
            "AI Chat Assistant: Hello! How can I help you today? (This would open an AI chat interface)",
          );
          break;
        case "ai-search":
          // Enable AI search mode
          setIsAIMode(true);
          setQuery("");
          return; // Don't close search, switch to AI mode
        case "ai-recommendations":
          // Show service recommendations
          alert(
            "AI Service Recommendations: Based on your interests, I recommend checking out our SAP Consulting and Cloud Architecture services. (This would show personalized recommendations)",
          );
          break;
        case "ai-solutions":
          // Open AI solutions advisor
          alert(
            "AI Solutions Advisor: I can help you understand how AI can benefit your business. What industry are you in? (This would open an AI advisory session)",
          );
          break;
        case "ai-insights":
          // Show business insights
          alert(
            "AI Business Insights: Did you know that 70% of businesses see ROI within 18 months of AI implementation? (This would show AI-powered insights)",
          );
          break;
        case "ai-feedback":
          // Open smart feedback form
          alert(
            "Smart Feedback Assistant: I'll help you provide detailed feedback with intelligent suggestions. (This would open an AI-enhanced feedback form)",
          );
          break;
        default:
          break;
      }
    } else {
      // Regular navigation for both SearchItem and AISearchResult
      const href = "href" in item ? item.href : (item as SearchItem).href;
      if (href && !href.startsWith("#")) {
        navigate(href);
      }
    }
    closeSearch();
    setQuery("");
    setIsAIMode(false);
    setAiResponse(null);
  };

  const handleSuggestionSelect = (suggestion: string) => {
    setQuery(suggestion);
    handleAISearch(suggestion);
  };

  const handleAISearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      const response = processAIQuery(searchQuery);
      setAiResponse(response);
    } else {
      setAiResponse(null);
    }
  };

  // Reset state when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setIsAIMode(false);
      setAiResponse(null);
    }
  }, [isOpen]);

  // Handle AI search when query changes in AI mode
  useEffect(() => {
    if (isAIMode && query.trim()) {
      const timeoutId = setTimeout(() => {
        handleAISearch(query);
      }, 300); // Debounce AI search

      return () => clearTimeout(timeoutId);
    } else if (isAIMode && !query.trim()) {
      setAiResponse(null);
    }
  }, [query, isAIMode]);

  const filteredResults =
    !isAIMode && query.length > 0 ? searchItems(query) : [];

  // Group results by category (for regular search)
  const groupedResults = filteredResults.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, SearchItem[]>,
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI Assistant":
        return <Bot className="w-4 h-4" />;
      case "Pages":
        return <Home className="w-4 h-4" />;
      case "Quick Actions":
        return <Zap className="w-4 h-4" />;
      case "Services":
        return <Settings className="w-4 h-4" />;
      case "Company":
        return <Building className="w-4 h-4" />;
      case "Partners":
        return <Users className="w-4 h-4" />;
      case "Industries":
        return <Building className="w-4 h-4" />;
      case "Technologies":
        return <Settings className="w-4 h-4" />;
      case "Resources":
        return <FileText className="w-4 h-4" />;
      case "Contact":
        return <HeadphonesIcon className="w-4 h-4" />;
      case "Support":
        return <HeadphonesIcon className="w-4 h-4" />;
      case "Legal":
        return <Scale className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={closeSearch}>
      <VisuallyHidden>
        <DialogTitle>
          Search Technum Opus - Find pages, services, and more
        </DialogTitle>
      </VisuallyHidden>
      <VisuallyHidden>
        <DialogDescription>
          Use this search dialog to quickly find pages, services, company
          information, partners, and other content on the Technum Opus website.
          Type your search query and press Enter or click on a result to
          navigate.
        </DialogDescription>
      </VisuallyHidden>

      <div className="flex items-center gap-2 p-2 border-b">
        <div className="flex-1">
          <CommandInput
            placeholder={
              isAIMode
                ? "Ask me anything about our services..."
                : "Search pages, services, or ask AI for help..."
            }
            value={query}
            onValueChange={setQuery}
            className="border-0 focus:ring-0"
          />
        </div>
        <Button
          variant={isAIMode ? "default" : "outline"}
          size="sm"
          onClick={() => {
            setIsAIMode(!isAIMode);
            setQuery("");
            setAiResponse(null);
          }}
          className="flex items-center gap-1 shrink-0"
        >
          {isAIMode ? (
            <>
              <Sparkles className="w-3 h-3" />
              AI
            </>
          ) : (
            <>
              <Search className="w-3 h-3" />
              Search
            </>
          )}
        </Button>
      </div>

      <CommandList>
        {isAIMode ? (
          // AI Search Mode
          <>
            {aiResponse && query.trim() && (
              <>
                {/* AI Interpretation */}
                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-purple-200">
                  <div className="flex items-start gap-3">
                    <Bot className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-purple-900 mb-1">
                        AI Response
                      </p>
                      <p className="text-sm text-purple-700">
                        {aiResponse.interpretation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI Search Results */}
                {aiResponse.results.length > 0 && (
                  <CommandGroup heading="Relevant Pages & Resources">
                    {aiResponse.results.map((result, index) => (
                      <CommandItem
                        key={`ai-result-${index}`}
                        value={`ai-result-${index}`}
                        onSelect={() => handleSelect(result)}
                        className="flex items-start gap-3 p-3 cursor-pointer rounded-lg hover:bg-accent/50 transition-colors duration-200"
                      >
                        <div className="mt-0.5">
                          {getCategoryIcon(result.category)}
                        </div>
                        <div className="flex-1 space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-foreground leading-none">
                              {result.title}
                            </p>
                            {result.type === "suggestion" && (
                              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                                AI Suggestion
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {result.description}
                          </p>
                          {result.href && !result.href.startsWith("#") && (
                            <p className="text-xs text-muted-foreground/60 font-mono">
                              {result.href}
                            </p>
                          )}
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}

                {/* AI Suggestions */}
                {aiResponse.suggestions.length > 0 && (
                  <CommandGroup heading="Related Questions">
                    {aiResponse.suggestions.map((suggestion, index) => (
                      <CommandItem
                        key={`suggestion-${index}`}
                        value={`suggestion-${index}`}
                        onSelect={() => handleSuggestionSelect(suggestion)}
                        className="flex items-start gap-3 p-3 cursor-pointer rounded-lg hover:bg-accent/50 transition-colors duration-200"
                      >
                        <Lightbulb className="w-4 h-4 mt-0.5 text-yellow-600" />
                        <div className="flex-1">
                          <p className="text-sm text-foreground">
                            {suggestion}
                          </p>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </>
            )}

            {/* AI Mode - No Query */}
            {!query.trim() && (
              <>
                <CommandGroup heading="🤖 Ask AI Assistant">
                  <div className="p-4 text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Ask me anything about our services, company, or how we can
                      help you!
                    </p>
                  </div>
                  {AI_SEARCH_SUGGESTIONS.map((suggestion, index) => (
                    <CommandItem
                      key={`default-suggestion-${index}`}
                      value={`default-suggestion-${index}`}
                      onSelect={() => handleSuggestionSelect(suggestion)}
                      className="flex items-start gap-3 p-3 cursor-pointer rounded-lg hover:bg-accent/50 transition-colors duration-200"
                    >
                      <Lightbulb className="w-4 h-4 mt-0.5 text-blue-600" />
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{suggestion}</p>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}

            {/* AI Mode - No Results */}
            {query.trim() && !aiResponse && (
              <CommandEmpty>
                <div className="flex flex-col items-center gap-2 py-6">
                  <span className="text-2xl">🤖</span>
                  <p className="text-sm font-medium">
                    Processing your question...
                  </p>
                  <p className="text-xs text-muted-foreground text-center">
                    AI is analyzing your query to provide the best response
                  </p>
                </div>
              </CommandEmpty>
            )}
          </>
        ) : (
          // Regular Search Mode
          <>
            <CommandEmpty>
              <div className="flex flex-col items-center gap-2 py-6">
                <span className="text-2xl">🔍</span>
                <p className="text-sm font-medium">
                  No results found for "{query}"
                </p>
                <p className="text-xs text-muted-foreground text-center">
                  Try searching for "SAP", "cloud", "partners", "careers", or
                  switch to AI mode for natural language search
                </p>
              </div>
            </CommandEmpty>

            {Object.entries(groupedResults).map(([category, items]) => (
              <CommandGroup key={category} heading={category}>
                {items.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={item.id}
                    onSelect={() => handleSelect(item)}
                    className="flex items-start gap-3 p-3 cursor-pointer rounded-lg hover:bg-accent/50 transition-colors duration-200"
                  >
                    <span className="text-lg mt-0.5">
                      {getCategoryIcon(item.category)}
                    </span>
                    <div className="flex-1 space-y-1 min-w-0">
                      <p className="text-sm font-medium text-foreground leading-none">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                      <p className="text-xs text-muted-foreground/60 font-mono">
                        {item.href}
                      </p>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}

            {/* Show all page suggestions when no query */}
            {!query.trim() && (
              <>
                {/* AI Assistant first */}
                <CommandGroup heading="✨ AI Assistant">
                  {searchCategories
                    .find((cat) => cat.name === "AI Assistant")
                    ?.items.slice(0, 3)
                    .map((item) => (
                      <CommandItem
                        key={item.id}
                        value={item.id}
                        onSelect={() => handleSelect(item)}
                        className="flex items-start gap-3 p-3 cursor-pointer rounded-lg hover:bg-accent/50 transition-colors duration-200 border border-purple-200 bg-purple-50/50"
                      >
                        <span className="text-lg mt-0.5">
                          {getCategoryIcon(item.category)}
                        </span>
                        <div className="flex-1 space-y-1 min-w-0">
                          <p className="text-sm font-medium text-foreground leading-none">
                            {item.title}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </CommandItem>
                    ))}
                </CommandGroup>

                {/* Popular pages */}
                <CommandGroup heading="Popular Pages">
                  {[
                    searchCategories.find((cat) => cat.name === "Pages")
                      ?.items[0], // Home
                    ...(searchCategories
                      .find((cat) => cat.name === "Company")
                      ?.items.slice(0, 2) || []), // About, Leadership
                    ...(searchCategories
                      .find((cat) => cat.name === "Services")
                      ?.items.slice(0, 2) || []), // All Services, SAP
                    searchCategories.find((cat) => cat.name === "Support")
                      ?.items[0], // Contact
                  ]
                    .filter(Boolean)
                    .map((item) => (
                      <CommandItem
                        key={item!.id}
                        value={item!.id}
                        onSelect={() => handleSelect(item!)}
                        className="flex items-start gap-3 p-3 cursor-pointer rounded-lg hover:bg-accent/50 transition-colors duration-200"
                      >
                        <span className="text-lg mt-0.5">
                          {getCategoryIcon(item!.category)}
                        </span>
                        <div className="flex-1 space-y-1 min-w-0">
                          <p className="text-sm font-medium text-foreground leading-none">
                            {item!.title}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {item!.description}
                          </p>
                        </div>
                      </CommandItem>
                    ))}
                </CommandGroup>

                {/* All other categories */}
                {searchCategories
                  .filter((cat) => cat.name !== "AI Assistant")
                  .map((category) => (
                    <CommandGroup
                      key={category.name}
                      heading={`${category.name} (${category.items.length})`}
                    >
                      {category.items.map((item) => (
                        <CommandItem
                          key={item.id}
                          value={item.id}
                          onSelect={() => handleSelect(item)}
                          className="flex items-start gap-3 p-3 cursor-pointer rounded-lg hover:bg-accent/50 transition-colors duration-200"
                        >
                          <span className="text-lg mt-0.5">
                            {getCategoryIcon(item.category)}
                          </span>
                          <div className="flex-1 space-y-1 min-w-0">
                            <p className="text-sm font-medium text-foreground leading-none">
                              {item.title}
                            </p>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {item.description}
                            </p>
                            <p className="text-xs text-muted-foreground/60 font-mono">
                              {item.href}
                            </p>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ))}

                {/* Search tips at the bottom */}
                <CommandGroup>
                  <CommandItem className="flex flex-col items-center gap-2 py-4 cursor-default">
                    <span className="text-lg">💡</span>
                    <p className="text-xs text-muted-foreground text-center">
                      Switch to AI mode for natural language search, or browse
                      all{" "}
                      {searchCategories.reduce(
                        (acc, cat) => acc + cat.items.length,
                        0,
                      )}{" "}
                      pages above
                    </p>
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
