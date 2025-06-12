import { useState, useEffect, useCallback } from "react";

export interface UseSearchReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useSearch(): UseSearchReturn {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    console.log("Search opened");
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    console.log("Search closed");
    setIsOpen(false);
  }, []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + K to open search
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        open();
      }

      // Escape to close search
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, close]);

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

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
