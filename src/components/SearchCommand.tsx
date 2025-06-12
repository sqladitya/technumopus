import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { cn } from "@/lib/utils";
import {
  searchCategories,
  searchItems,
  type SearchItem,
} from "@/lib/searchData";
import { useSearchContext } from "./SearchProvider";
import { Search, FileText } from "lucide-react";

interface SearchCommandProps {
  className?: string;
}

export function SearchCommand({ className }: SearchCommandProps) {
  const { isOpen, closeSearch } = useSearchContext();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSelect = (item: SearchItem) => {
    closeSearch();
    navigate(item.href);
    setQuery("");
  };

  // Reset query when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  const filteredItems = query.length > 0 ? searchItems(query) : [];

  // Group results by category
  const groupedResults = filteredItems.reduce(
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
        placeholder="Search pages, services, and more..."
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
              Try searching for "SAP", "cloud", "partners", "careers", or any
              service name
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

        {/* Search tips when no query */}
        {!query.trim() && (
          <CommandGroup>
            <CommandItem className="flex flex-col items-center gap-2 py-6 cursor-default">
              <span className="text-2xl">💡</span>
              <p className="text-xs text-muted-foreground text-center">
                Try searching for "SAP", "cloud", "partners", "careers", or any
                service
              </p>
            </CommandItem>
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}

export default SearchCommand;
