import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPartnersOpen, setIsPartnersOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [activeLink, setActiveLink] = useState("home");
  const servicesRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside (support both mouse and touch events)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      // Check if click is outside any dropdown area (desktop only)
      if (window.innerWidth >= 1024) {
        const isOutsideServices =
          servicesRef.current && !servicesRef.current.contains(target);
        const isOutsidePartners =
          partnersRef.current && !partnersRef.current.contains(target);
        const isOutsideCompany =
          companyRef.current && !companyRef.current.contains(target);

        if (isOutsideServices) {
          setIsServicesOpen(false);
        }
        if (isOutsidePartners) {
          setIsPartnersOpen(false);
        }
        if (isOutsideCompany) {
          setIsCompanyOpen(false);
        }
      }

      // For mobile, check if click is outside the mobile menu
      const mobileMenu = document.querySelector("[data-mobile-menu]");
      const mobileMenuButton = document.querySelector(
        "[data-mobile-menu-button]",
      );
      const isOutsideMobileMenu = !mobileMenu || !mobileMenu.contains(target);
      const isNotMobileMenuButton =
        !mobileMenuButton || !mobileMenuButton.contains(target);

      if (
        window.innerWidth < 1024 &&
        isOutsideMobileMenu &&
        isNotMobileMenuButton &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
        closeAllDropdowns();
      }
    };

    // Add both mouse and touch event listeners for better mobile support
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper functions to manage dropdown states
  const openCompanyDropdown = () => {
    setIsCompanyOpen(true);
    setIsServicesOpen(false);
    setIsPartnersOpen(false);
  };

  const openServicesDropdown = () => {
    setIsServicesOpen(true);
    setIsCompanyOpen(false);
    setIsPartnersOpen(false);
  };

  const openPartnersDropdown = () => {
    setIsPartnersOpen(true);
    setIsCompanyOpen(false);
    setIsServicesOpen(false);
  };

  const closeAllDropdowns = () => {
    setIsCompanyOpen(false);
    setIsServicesOpen(false);
    setIsPartnersOpen(false);
  };

  const closeMobileMenu = () => {
    closeAllDropdowns();
    setIsMobileMenuOpen(false);
  };

  // Handle swipe gestures for mobile menu
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;

    // Close mobile menu on left swipe (swipe left to close)
    if (isLeftSwipe && isMobileMenuOpen) {
      closeMobileMenu();
    }
  };

  // Enhanced mobile menu close handler
  const handleBackdropClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    closeMobileMenu();
  };

  const services = [
    {
      name: "SAP Consulting",
      href: "/services/sap-consulting",
      description: "Enterprise SAP implementations",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      name: "SAAS Platform Development",
      href: "/services/saas-development",
      description: "Scalable cloud solutions",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      name: "Cloud Architecture",
      href: "/services/cloud-architecture",
      description: "Secure cloud infrastructure",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      name: "Hardware Infrastructure",
      href: "/services/hardware-infrastructure",
      description: "Complete hardware solutions",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
    },
    {
      name: "Digital Transformation",
      href: "/services/digital-transformation",
      description: "Business modernization",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  const partners = [
    {
      name: "Cloud Partners",
      href: "/partners/cloud-partners",
      description: "AWS, Azure, Google Cloud",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      name: "Technology Partners",
      href: "/partners/technology-partners",
      description: "Cisco, Dell, HP, Lenovo",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
    {
      name: "Security Partners",
      href: "/partners/security-partners",
      description: "Palo Alto, SentinelOne",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      name: "Integration Partners",
      href: "/partners/integration-partners",
      description: "Zebra Technologies and more",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
  ];

  const companyLinks = [
    {
      name: "About Us",
      href: "/about",
      description: "Our story and mission",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      name: "Leadership Team",
      href: "/leadership",
      description: "Meet our executives",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      name: "Careers",
      href: "/careers",
      description: "Join our team",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
          />
        </svg>
      ),
    },
    {
      name: "News & Insights",
      href: "/news-insights",
      description: "Latest updates",
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-20 lg:hidden backdrop-blur-md"
          onClick={handleBackdropClick}
          style={{
            touchAction: "manipulation",
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
            userSelect: "none",
          }}
        />
      )}

      {/* Navigation Bar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-200/50"
            : "bg-white/70 backdrop-blur-lg",
        )}
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-tech-primary/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 group">
              <a
                href="/"
                className="flex items-center gap-3 sm:gap-4 transition-transform duration-300 hover:scale-105"
              >
                <div className="relative">
                  <Logo />
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-tech-primary to-purple-500 rounded-lg opacity-20 group-hover:opacity-40 blur transition-opacity duration-300" />
                </div>
                <div className="relative">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-tech-text-dark to-gray-700 bg-clip-text text-transparent">
                    Technum{" "}
                    <span className="bg-gradient-to-r from-tech-primary to-purple-500 bg-clip-text text-transparent">
                      Opus
                    </span>
                  </span>
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
                </div>
              </a>
            </div>

            {/* Enhanced Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              <a
                href="/"
                onMouseEnter={() => {
                  closeAllDropdowns();
                  setActiveLink("home");
                }}
                className="relative px-4 py-2 text-gray-700 hover:text-tech-primary font-semibold transition-all duration-300 group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-tech-primary to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>

              {/* Enhanced Company Dropdown */}
              <div className="relative" ref={companyRef}>
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  onMouseEnter={() => {
                    openCompanyDropdown();
                    setActiveLink("company");
                  }}
                  className="relative px-4 py-2 text-gray-700 hover:text-tech-primary font-semibold transition-all duration-300 group flex items-center gap-2"
                >
                  <span className="relative z-10">Company</span>
                  <svg
                    className={cn(
                      "w-4 h-4 transition-all duration-300 group-hover:text-tech-primary",
                      isCompanyOpen ? "rotate-180 text-tech-primary" : "",
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <div
                    className={cn(
                      "absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-tech-primary to-purple-500 transition-all duration-300",
                      isCompanyOpen ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-max bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 transition-all duration-500 transform origin-top",
                    isCompanyOpen
                      ? "opacity-100 visible translate-y-0 scale-100"
                      : "opacity-0 invisible -translate-y-4 scale-95",
                  )}
                  onMouseLeave={closeAllDropdowns}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/20 via-purple-500/20 to-tech-primary/20 rounded-2xl p-px">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl h-full w-full">
                      <div className="p-3">
                        <div className="text-sm font-bold text-gray-800 mb-2 pb-2 border-b border-gradient-to-r from-gray-200 to-gray-100">
                          Company Information
                        </div>
                        <div className="space-y-1">
                          {companyLinks.map((link) => (
                            <a
                              key={link.name}
                              href={link.href}
                              onClick={closeAllDropdowns}
                              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5 transition-all duration-300 group whitespace-nowrap"
                            >
                              <div className="text-tech-primary group-hover:text-purple-500 transition-colors duration-300">
                                {link.icon}
                              </div>
                              <div className="text-sm font-medium text-gray-700 group-hover:text-tech-primary transition-colors duration-300">
                                {link.name}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onMouseEnter={() => {
                    openServicesDropdown();
                    setActiveLink("services");
                  }}
                  className="relative px-4 py-2 text-gray-700 hover:text-tech-primary font-semibold transition-all duration-300 group flex items-center gap-2"
                >
                  <span className="relative z-10">Services</span>
                  <svg
                    className={cn(
                      "w-4 h-4 transition-all duration-300 group-hover:text-tech-primary",
                      isServicesOpen ? "rotate-180 text-tech-primary" : "",
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <div
                    className={cn(
                      "absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-tech-primary to-purple-500 transition-all duration-300",
                      isServicesOpen ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-max bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 transition-all duration-500 transform origin-top",
                    isServicesOpen
                      ? "opacity-100 visible translate-y-0 scale-100"
                      : "opacity-0 invisible -translate-y-4 scale-95",
                  )}
                  onMouseLeave={closeAllDropdowns}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/20 via-purple-500/20 to-tech-primary/20 rounded-2xl p-px">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl h-full w-full">
                      <div className="p-3">
                        <div className="text-sm font-bold text-gray-800 mb-2 pb-2 border-b border-gradient-to-r from-gray-200 to-gray-100">
                          Our Services
                        </div>
                        <div className="space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              onClick={closeAllDropdowns}
                              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5 transition-all duration-300 group whitespace-nowrap"
                            >
                              <div className="text-tech-primary group-hover:text-purple-500 transition-colors duration-300">
                                {service.icon}
                              </div>
                              <div className="text-sm font-medium text-gray-700 group-hover:text-tech-primary transition-colors duration-300">
                                {service.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <Link
                            to="/services"
                            onClick={closeAllDropdowns}
                            className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-tech-primary hover:text-purple-500 transition-all duration-300 whitespace-nowrap group"
                          >
                            View All Services
                            <svg
                              className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Partners Dropdown */}
              <div className="relative" ref={partnersRef}>
                <div className="flex items-center">
                  <a
                    href="/partners"
                    className="relative px-4 py-2 text-gray-700 hover:text-tech-primary font-semibold transition-all duration-300 group"
                    onMouseEnter={() => {
                      openPartnersDropdown();
                      setActiveLink("partners");
                    }}
                  >
                    <span className="relative z-10">Partners</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-tech-primary to-purple-500 group-hover:w-full transition-all duration-300" />
                  </a>
                  <button
                    onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                    onMouseEnter={openPartnersDropdown}
                    className="ml-1 p-1 text-gray-700 hover:text-tech-primary transition-all duration-300"
                  >
                    <svg
                      className={cn(
                        "w-4 h-4 transition-all duration-300",
                        isPartnersOpen ? "rotate-180 text-tech-primary" : "",
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-max bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 transition-all duration-500 transform origin-top",
                    isPartnersOpen
                      ? "opacity-100 visible translate-y-0 scale-100"
                      : "opacity-0 invisible -translate-y-4 scale-95",
                  )}
                  onMouseLeave={closeAllDropdowns}
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/20 via-purple-500/20 to-tech-primary/20 rounded-2xl p-px">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl h-full w-full">
                      <div className="p-3">
                        <div className="text-sm font-bold text-gray-800 mb-2 pb-2 border-b border-gradient-to-r from-gray-200 to-gray-100">
                          Partner Categories
                        </div>
                        <div className="space-y-1">
                          {partners.map((partner) => (
                            <a
                              key={partner.name}
                              href={partner.href}
                              onClick={closeAllDropdowns}
                              className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5 transition-all duration-300 group whitespace-nowrap"
                            >
                              <div className="text-tech-primary group-hover:text-purple-500 transition-colors duration-300">
                                {partner.icon}
                              </div>
                              <div className="text-sm font-medium text-gray-700 group-hover:text-tech-primary transition-colors duration-300">
                                {partner.name}
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <a
                            href="/partners/view-all"
                            onClick={closeAllDropdowns}
                            className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-tech-primary hover:text-purple-500 transition-all duration-300 whitespace-nowrap group"
                          >
                            View All Partners
                            <svg
                              className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/contact"
                onMouseEnter={() => {
                  closeAllDropdowns();
                  setActiveLink("contact");
                }}
                className="relative px-4 py-2 text-gray-700 hover:text-tech-primary font-semibold transition-all duration-300 group"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-tech-primary to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              data-mobile-menu-button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (isMobileMenuOpen) {
                  closeMobileMenu();
                } else {
                  setIsMobileMenuOpen(true);
                }
              }}
              className="lg:hidden relative p-3 text-gray-700 hover:text-tech-primary transition-all duration-300 group"
              aria-label="Toggle mobile menu"
              style={{ touchAction: "manipulation" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              <svg
                className={cn(
                  "w-6 h-6 transition-all duration-500 relative z-10",
                  isMobileMenuOpen && "rotate-90 scale-110",
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          data-mobile-menu
          className={cn(
            "lg:hidden absolute left-4 right-4 top-20 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl transition-all duration-500 transform z-40",
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0 scale-100 max-h-96"
              : "opacity-0 invisible -translate-y-8 scale-95 max-h-0",
          )}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            touchAction: "pan-y",
            WebkitTouchCallout: "none",
          }}
        >
          {/* Gradient border for mobile menu */}
          <div className="absolute inset-0 bg-gradient-to-r from-tech-primary/20 via-purple-500/20 to-tech-primary/20 rounded-2xl p-px">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl h-full w-full">
              <div className="max-h-80 overflow-y-auto">
                <div className="px-6 py-6 space-y-6 relative">
                  {/* Mobile Home Link */}
                  <a
                    href="/"
                    onClick={closeMobileMenu}
                    className="block text-gray-700 hover:text-tech-primary font-semibold transition-all duration-300 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5"
                  >
                    Home
                  </a>

                  {/* Mobile Company Section */}
                  <div
                    className={cn(
                      "rounded-xl transition-all duration-300",
                      isCompanyOpen &&
                        "bg-gradient-to-r from-tech-primary/5 to-purple-500/5",
                    )}
                  >
                    <button
                      onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                      className={cn(
                        "flex items-center justify-between w-full text-left text-gray-700 hover:text-tech-primary font-semibold transition-all duration-300 p-3 rounded-xl hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5",
                        isCompanyOpen &&
                          "text-tech-primary bg-gradient-to-r from-tech-primary/5 to-purple-500/5",
                      )}
                      style={{ touchAction: "manipulation" }}
                    >
                      Company
                      <svg
                        className={cn(
                          "w-5 h-5 transition-all duration-300",
                          isCompanyOpen ? "rotate-180 text-tech-primary" : "",
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={cn(
                        "ml-4 space-y-2 transition-all duration-500 overflow-hidden",
                        isCompanyOpen
                          ? "max-h-64 opacity-100 pb-3"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      {companyLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={closeMobileMenu}
                          className="flex items-center gap-3 py-2 px-3 text-gray-600 hover:text-tech-primary transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5"
                        >
                          <div className="w-4 h-4 text-tech-primary flex-shrink-0">
                            {link.icon}
                          </div>
                          <div className="text-sm font-medium">{link.name}</div>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Services Section */}
                  <div
                    className={cn(
                      "rounded-xl transition-all duration-300",
                      isServicesOpen &&
                        "bg-gradient-to-r from-tech-primary/5 to-purple-500/5",
                    )}
                  >
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={cn(
                        "flex items-center justify-between w-full text-left text-gray-700 hover:text-tech-primary font-semibold transition-all duration-300 p-3 rounded-xl hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5",
                        isServicesOpen &&
                          "text-tech-primary bg-gradient-to-r from-tech-primary/5 to-purple-500/5",
                      )}
                      style={{ touchAction: "manipulation" }}
                    >
                      Services
                      <svg
                        className={cn(
                          "w-5 h-5 transition-all duration-300",
                          isServicesOpen ? "rotate-180 text-tech-primary" : "",
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={cn(
                        "ml-4 space-y-2 transition-all duration-500 overflow-hidden",
                        isServicesOpen
                          ? "max-h-80 opacity-100 pb-3"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={closeMobileMenu}
                          className="flex items-center gap-3 py-2 px-3 text-gray-600 hover:text-tech-primary transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5"
                        >
                          <div className="w-4 h-4 text-tech-primary flex-shrink-0">
                            {service.icon}
                          </div>
                          <div className="text-sm font-medium">
                            {service.name}
                          </div>
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 py-2 px-3 text-tech-primary text-sm font-semibold rounded-lg hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5 transition-all duration-300"
                      >
                        View All Services
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Mobile Partners Section */}
                  <div
                    className={cn(
                      "rounded-xl transition-all duration-300",
                      isPartnersOpen &&
                        "bg-gradient-to-r from-tech-primary/5 to-purple-500/5",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <a
                        href="/partners"
                        onClick={closeMobileMenu}
                        className="flex-1 text-left text-gray-700 hover:text-tech-primary font-semibold transition-all duration-300 p-3 rounded-xl hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5"
                      >
                        Partners
                      </a>
                      <button
                        onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                        className={cn(
                          "p-3 text-gray-700 hover:text-tech-primary transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5",
                          isPartnersOpen &&
                            "text-tech-primary bg-gradient-to-r from-tech-primary/5 to-purple-500/5",
                        )}
                        style={{ touchAction: "manipulation" }}
                      >
                        <svg
                          className={cn(
                            "w-5 h-5 transition-all duration-300",
                            isPartnersOpen
                              ? "rotate-180 text-tech-primary"
                              : "",
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className={cn(
                        "ml-4 space-y-2 transition-all duration-500 overflow-hidden",
                        isPartnersOpen
                          ? "max-h-64 opacity-100 pb-3"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      {partners.map((partner) => (
                        <a
                          key={partner.name}
                          href={partner.href}
                          onClick={closeMobileMenu}
                          className="flex items-center gap-3 py-2 px-3 text-gray-600 hover:text-tech-primary transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5"
                        >
                          <div className="w-4 h-4 text-tech-primary flex-shrink-0">
                            {partner.icon}
                          </div>
                          <div className="text-sm font-medium">
                            {partner.name}
                          </div>
                        </a>
                      ))}
                      <a
                        href="/partners/view-all"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 py-2 px-3 text-tech-primary text-sm font-semibold rounded-lg hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5 transition-all duration-300"
                      >
                        View All Partners
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Mobile Contact Link */}
                  <a
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="block text-gray-700 hover:text-tech-primary font-semibold transition-all duration-300 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-tech-primary/5 hover:to-purple-500/5"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-tech-primary to-purple-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-tech-primary to-purple-500 rounded-full opacity-20 group-hover:opacity-40 blur transition-opacity duration-300" />
        <svg
          className="w-6 h-6 text-white relative z-10 group-hover:-translate-y-0.5 transition-transform duration-300"
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
