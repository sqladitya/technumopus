import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Notification Area */}
      <div className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-md rounded-lg px-4 py-2 shadow-lg">
        <p className="text-sm text-technum-text-medium">Latest Updates</p>
      </div>

      {/* Navigation Bar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-white/70 backdrop-blur-sm",
        )}
      >
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-gradient rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">TO</span>
              </div>
              <span className="text-lg font-semibold text-technum-text-dark">
                Technum Opus
              </span>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-technum-text-medium hover:text-technum-purple transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-technum-text-medium hover:text-technum-purple transition-colors font-medium"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-technum-text-medium hover:text-technum-purple transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#partners"
                className="text-technum-text-medium hover:text-technum-purple transition-colors font-medium"
              >
                Partners
              </a>
              <a
                href="#careers"
                className="text-technum-text-medium hover:text-technum-purple transition-colors font-medium"
              >
                Careers
              </a>
              <a
                href="#contact"
                className="text-technum-text-medium hover:text-technum-purple transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-purple-gradient rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
};

export default Navigation;
