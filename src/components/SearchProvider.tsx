import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchItem } from "@/hooks/useSearch";

interface SearchContextType {
  isOpen: boolean;
  query: string;
  setQuery: (query: string) => void;
  openSearch: () => void;
  closeSearch: () => void;
  handleSelect: (item: SearchItem) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};

interface SearchProviderProps {
  children: React.ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const openSearch = () => setIsOpen(true);

  const closeSearch = () => {
    setIsOpen(false);
    setQuery("");
  };

  const handleSelect = (item: SearchItem) => {
    navigate(item.url);
    closeSearch();
  };

  const value: SearchContextType = {
    isOpen,
    query,
    setQuery,
    openSearch,
    closeSearch,
    handleSelect,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
