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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchDialog = () => {
  const { isOpen, closeSearch, openSearch } = useSearchContext();
  const [query, setQuery] = useState("");
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

  const handleSelect = (item: SearchItem) => {
    // Handle AI Assistant actions differently
    if (item.category === "AI Assistant") {
      switch (item.id) {
        case "ai-chat":
          // Open AI chat interface
          alert(
            "AI Chat Assistant: Hello! How can I help you today? (This would open an AI chat interface)",
          );
          break;
        case "ai-search":
          // Enhance current search with AI
          alert(
            "AI-Powered Search: Try asking me questions like 'What services do you offer for cloud migration?' (This would enable AI search mode)",
          );
          break;
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
      // Regular navigation for non-AI items
      navigate(item.href);
    }
    closeSearch();
    setQuery("");
  };

  // Reset query when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  const filteredResults = query.length > 0 ? searchItems(query) : [];

  // Group results by category
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
        return "🤖";
      case "Pages":
        return "🏠";
      case "Quick Actions":
        return "⚡";
      case "Services":
        return "⚙️";
      case "Company":
        return "🏢";
      case "Partners":
        return "🤝";
      case "Industries":
        return "🏭";
      case "Technologies":
        return "🚀";
      case "Resources":
        return "📚";
      case "Contact":
        return "📧";
      case "Support":
        return "🛠️";
      case "Legal":
        return "⚖️";
      default:
        return "📄";
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

      <CommandInput
        placeholder="Search pages, services, or ask AI for help..."
        value={query}
        onValueChange={setQuery}
      />

      <CommandList>
        <CommandEmpty>
          <div className="flex flex-col items-center gap-2 py-6">
            <span className="text-2xl">🔍</span>
            <p className="text-sm font-medium">
              No results found for "{query}"
            </p>
            <p className="text-xs text-muted-foreground text-center">
              Try searching for "SAP", "cloud", "AI assistant", "partners",
              "careers", or any service name
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
                searchCategories.find((cat) => cat.name === "Pages")?.items[0], // Home
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
            {searchCategories.map((category) => (
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
                <span className="text-lg">🤖</span>
                <p className="text-xs text-muted-foreground text-center">
                  Try AI Assistant for smart help, or browse all{" "}
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
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
