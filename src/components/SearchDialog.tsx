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
    navigate(item.href);
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
            {/* Popular pages first */}
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
                  Type to search or browse all{" "}
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
