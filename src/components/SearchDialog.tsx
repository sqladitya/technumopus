import { useEffect } from "react";
import { useSearch } from "@/hooks/useSearch";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

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
      case "Services":
        return "⚙️";
      case "Company":
        return "🏢";
      case "Partners":
        return "🤝";
      case "Industries":
        return "🏭";
      case "Contact":
        return "📧";
      default:
        return "📄";
    }
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={closeSearch}>
      <CommandInput
        placeholder="Search pages, services, and more..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>
          <div className="flex flex-col items-center gap-2 py-6">
            <div className="text-4xl opacity-50">🔍</div>
            <p className="text-sm text-muted-foreground">
              No results found for "{query}"
            </p>
            <p className="text-xs text-muted-foreground">
              Try searching for services, company info, or contact details
            </p>
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
                className="flex items-start gap-3 p-4 cursor-pointer"
              >
                <div className="text-lg mt-0.5">
                  {getCategoryIcon(item.category)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-muted-foreground overflow-hidden text-ellipsis line-clamp-2">
                    {item.description}
                  </div>
                  <div className="text-xs text-muted-foreground opacity-60">
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
