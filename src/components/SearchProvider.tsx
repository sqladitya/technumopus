import React, { createContext, useContext, useState, useEffect } from "react";
import SearchCommand from "./SearchCommand";

interface SearchContextType {
  isOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};

interface SearchProviderProps {
  children: React.ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openSearch = () => setIsOpen(true);
  const closeSearch = () => setIsOpen(false);
  const toggleSearch = () => setIsOpen((prev) => !prev);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + K to open search
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        openSearch();
      }

      // Escape to close search
      if (event.key === "Escape" && isOpen) {
        closeSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent scrolling when search is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const value = {
    isOpen,
    openSearch,
    closeSearch,
    toggleSearch,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
      <SearchCommand />
    </SearchContext.Provider>
  );
}

export default SearchProvider;
