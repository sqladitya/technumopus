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
import {
  Search,
  Home,
  Building,
  Settings,
  Users,
  HeadphonesIcon,
  Scale,
  FileText,
  Lightbulb,
} from "lucide-react";

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
    const href = item.href;
    if (href && !href.startsWith("#")) {
      navigate(href);
    }
    closeSearch();
    setQuery("");
  };

  // Reset state when dialog closes
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  const filteredResults = query.length > 0 ? searchItems(query) : [];

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
      case "Pages":
        return <Home className="w-4 h-4" />;
      case "Services":
        return <Settings className="w-4 h-4" />;
      case "Company":
        return <Building className="w-4 h-4" />;
      case "Partners":
        return <Users className="w-4 h-4" />;
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

      <div className="p-2 border-b">
        <CommandInput
          placeholder="Search pages, services, and more..."
          value={query}
          onValueChange={setQuery}
          className="border-0 focus:ring-0"
        />
      </div>

      <CommandList>
        <CommandEmpty>
          <div className="flex flex-col items-center gap-2 py-6">
            <Search className="w-8 h-8 text-gray-400" />
            <p className="text-sm font-medium">
              No results found for "{query}"
            </p>
            <p className="text-xs text-muted-foreground text-center">
              Try searching for "SAP", "cloud", "partners", "careers", or other
              keywords
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
                <div className="mt-0.5">{getCategoryIcon(item.category)}</div>
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
                    <div className="mt-0.5">
                      {getCategoryIcon(item!.category)}
                    </div>
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

            {/* All categories */}
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
                    <div className="mt-0.5">
                      {getCategoryIcon(item.category)}
                    </div>
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
                <Lightbulb className="w-5 h-5 text-blue-500" />
                <p className="text-xs text-muted-foreground text-center">
                  Browse all{" "}
                  {searchCategories.reduce(
                    (acc, cat) => acc + cat.items.length,
                    0,
                  )}{" "}
                  pages above or type to search
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
