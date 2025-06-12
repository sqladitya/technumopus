import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTextFixer = () => {
  const location = useLocation();

  useEffect(() => {
    // Only apply fixes to non-home pages
    if (location.pathname === "/") return;

    const fixTextColors = () => {
      // Fix all gray text elements to be visible
      const grayTexts = document.querySelectorAll(
        ".text-gray-900, .text-gray-700, .text-gray-600",
      );
      grayTexts.forEach((el) => {
        if (el.classList.contains("text-gray-900")) {
          el.classList.remove("text-gray-900");
          el.classList.add("text-tech-text-dark");
        } else if (
          el.classList.contains("text-gray-700") ||
          el.classList.contains("text-gray-600")
        ) {
          el.classList.remove("text-gray-700", "text-gray-600");
          el.classList.add("text-tech-text-medium");
        }
      });

      // Make specific headings purple
      const headingsToMakePurple = [
        "Our Vision",
        "Our Mission",
        "Innovation",
        "Excellence",
        "Integrity",
        "Collaboration",
        "Innovation Excellence",
        "Innovation Through Collaboration",
        "Excellence is Non-Negotiable",
      ];

      document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((heading) => {
        const text = heading.textContent?.trim() || "";
        if (headingsToMakePurple.some((target) => text.includes(target))) {
          heading.classList.remove("text-gray-900", "text-tech-text-dark");
          heading.classList.add("text-accenture-purple");
          heading.style.color = "#a600ff";
        }
      });
    };

    // Apply fixes immediately and after a short delay for dynamic content
    fixTextColors();
    setTimeout(fixTextColors, 100);
    setTimeout(fixTextColors, 500);

    // Create observer for dynamic content
    const observer = new MutationObserver(fixTextColors);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
};

export default PageTextFixer;
