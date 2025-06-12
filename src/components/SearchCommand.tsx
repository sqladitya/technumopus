import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Command } from "cmdk";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
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
  const [selectedItem, setSelectedItem] = useState<SearchItem | null>(null);
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
      setSelectedItem(null);
    }
  }, [isOpen]);

  const filteredItems = query.length > 0 ? searchItems(query) : [];
  const hasResults = filteredItems.length > 0;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent
        className={cn(
          "max-w-2xl p-0 gap-0 overflow-hidden",
          "bg-white dark:bg-gray-900",
          className,
        )}
        onPointerDownOutside={close}
        onEscapeKeyDown={close}
      >
        <VisuallyHidden>
          <DialogTitle>Search</DialogTitle>
        </VisuallyHidden>
        <Command
          className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
          shouldFilter={false}
          value={selectedItem?.id}
          onValueChange={(value) => {
            const item = filteredItems.find((item) => item.id === value);
            setSelectedItem(item || null);
          }}
        >
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input
              placeholder="Search pages, services, and more..."
              value={query}
              onValueChange={setQuery}
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>

          <Command.List className="max-h-[400px] overflow-y-auto p-2">
            {!query && (
              <div className="px-2 py-4 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  Search Technum Opus
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Find pages, services, partners, and more...
                </p>
                <div className="flex flex-wrap justify-center gap-1">
                  {["Services", "Partners", "Company", "Contact"].map(
                    (category) => (
                      <Badge
                        key={category}
                        variant="secondary"
                        className="text-xs"
                      >
                        {category}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
            )}

            {query && !hasResults && (
              <div className="px-2 py-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <FileText className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-sm font-medium text-foreground mb-2">
                  No results found
                </h3>
                <p className="text-xs text-muted-foreground">
                  Try searching for something else or browse our services.
                </p>
              </div>
            )}

            {query && hasResults && (
              <>
                {searchCategories.map((category) => {
                  const categoryItems = filteredItems.filter(
                    (item) => item.category === category.name,
                  );

                  if (categoryItems.length === 0) return null;

                  return (
                    <Command.Group key={category.name} heading={category.name}>
                      {categoryItems.map((item) => (
                        <Command.Item
                          key={item.id}
                          value={item.id}
                          onSelect={() => handleSelect(item)}
                          className="flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-accent transition-colors"
                        >
                          <div className="flex items-center justify-center w-8 h-8 rounded-md bg-muted mt-0.5">
                            <item.icon className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1 space-y-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium text-foreground leading-none">
                                {item.title}
                              </p>
                              <Badge variant="outline" className="text-xs">
                                {item.category}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {item.description}
                            </p>
                            <p className="text-xs text-muted-foreground/60 font-mono">
                              {item.href}
                            </p>
                          </div>
                        </Command.Item>
                      ))}
                    </Command.Group>
                  );
                })}
              </>
            )}

            {!query && (
              <>
                {searchCategories.slice(0, 3).map((category) => (
                  <Command.Group key={category.name} heading={category.name}>
                    {category.items.slice(0, 3).map((item) => (
                      <Command.Item
                        key={item.id}
                        value={item.id}
                        onSelect={() => handleSelect(item)}
                        className="flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-accent transition-colors"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-md bg-muted mt-0.5">
                          <item.icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="flex-1 space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium text-foreground leading-none">
                              {item.title}
                            </p>
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))}
              </>
            )}
          </Command.List>

          <div className="border-t p-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">↑↓</span>
                </kbd>
                <span>to navigate</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">↵</span>
                </kbd>
                <span>to select</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⎋</span>
                </kbd>
                <span>to close</span>
              </div>
            </div>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

export default SearchCommand;
