import { useEffect } from "react";
import { useSearch } from "@/hooks/useSearch";
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

const SearchDialog = () => {
  const {
    isOpen,
    query,
    setQuery,
    filteredResults,
    closeSearch,
    handleSelect,
  } = useSearch();

  const { openSearch } = useSearchContext();

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

  // Group results by category
  const groupedResults = filteredResults.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, typeof filteredResults>,
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
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
      default:
        return "📄";
    }
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={closeSearch}>
      <DialogTitle className="sr-only">
        Search Technum Opus - Find pages, services, and more
      </DialogTitle>
      <DialogDescription className="sr-only">
        Use this search dialog to quickly find pages, services, company
        information, partners, and other content on the Technum Opus website.
        Type your search query and press Enter or click on a result to navigate.
      </DialogDescription>
      <CommandInput
        placeholder="Search pages, services, and more... (Cmd+K)"
        value={query}
        onValueChange={setQuery}
        className="text-base"
      />
      <CommandList>
        <CommandEmpty>
          <div className="flex flex-col items-center gap-3 py-8">
            <div className="text-5xl opacity-40">🔍</div>
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground mb-1">
                No results found for "{query}"
              </p>
              <p className="text-xs text-muted-foreground">
                Try searching for "SAP", "cloud", "partners", "careers", or any
                service name
              </p>
            </div>
          </div>
        </CommandEmpty>

        {Object.entries(groupedResults).map(([category, items]) => (
          <CommandGroup key={category} heading={category}>
            {items.map((item) => (
              <CommandItem
                key={item.id}
                value={`${item.title} ${item.description} ${item.keywords?.join(
                  " ",
                )}`}
                onSelect={() => handleSelect(item)}
                className="flex items-start gap-3 p-3 cursor-pointer rounded-lg hover:bg-accent/50 transition-colors duration-200"
              >
                <div className="text-lg mt-1 flex-shrink-0">
                  {getCategoryIcon(item.category)}
                </div>
                <div className="flex-1 space-y-1 min-w-0">
                  <div className="font-medium text-sm text-foreground group-hover:text-accent-foreground">
                    {item.title}
                  </div>
                  <div className="text-xs text-muted-foreground line-clamp-2 overflow-hidden leading-relaxed">
                    {item.description}
                  </div>
                  <div className="text-xs text-muted-foreground/60 font-mono">
                    {item.url}
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}

        {/* Search tips when no query */}
        {!query.trim() && (
          <CommandGroup heading="Search Tips">
            <CommandItem disabled className="opacity-75">
              <div className="text-xs text-muted-foreground">
                💡 Try searching for "SAP", "cloud", "partners", "careers", or
                any service
              </div>
            </CommandItem>
            <CommandItem disabled className="opacity-75">
              <div className="text-xs text-muted-foreground">
                ⌨️ Use Cmd+K (Mac) or Ctrl+K (Windows) to open search anytime
              </div>
            </CommandItem>
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
