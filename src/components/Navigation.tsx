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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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
      const isOutsideMobileMenu = !mobileMenu || !mobileMenu.contains(target);

      if (window.innerWidth < 1024 && isOutsideMobileMenu && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        closeAllDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    setIsMobileMenuOpen(false);
    closeAllDropdowns();
  };

  const services = [
    {
      name: "SAP Consulting",
      href: "/services/sap-consulting",
      description: "Enterprise SAP implementations and optimization",
      icon: (
        <svg
          className="w-5 h-5"
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
      description: "Scalable cloud-based software solutions",
      icon: (
        <svg
          className="w-5 h-5"
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
      description: "Robust and secure cloud infrastructure",
      icon: (
        <svg
          className="w-5 h-5"
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
      description: "Complete hardware solutions and deployment",
      icon: (
        <svg
          className="w-5 h-5"
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
      description: "End-to-end business transformation and modernization",
      icon: (
        <svg
          className="w-5 h-5"
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
      description: "AWS, Microsoft Azure, Google Cloud",
      icon: (
        <svg
          className="w-5 h-5"
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
          className="w-5 h-5"
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
      description: "Palo Alto Networks, SentinelOne",
      icon: (
        <svg
          className="w-5 h-5"
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
          className="w-5 h-5"
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
      description: "Our story, mission, and values",
      icon: (
        <svg
          className="w-5 h-5"
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
      description: "Meet our executive leadership",
      icon: (
        <svg
          className="w-5 h-5"
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
      description: "Join our growing team",
      icon: (
        <svg
          className="w-5 h-5"
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
      description: "Latest updates and thought leadership",
      icon: (
        <svg
          className="w-5 h-5"
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
          className="fixed inset-0 bg-black/20 z-20 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Navigation Bar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-white/90 backdrop-blur-sm",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <a href="/" className="flex items-center gap-2 sm:gap-3">
                <Logo />
                <span className="text-lg sm:text-xl font-bold text-tech-text-dark">
                  Technum <span className="text-tech-primary">Opus</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a
                href="/"
                onMouseEnter={closeAllDropdowns}
                className="relative text-tech-text-medium hover:text-tech-primary font-medium transition-colors duration-300 group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-primary transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Company Dropdown */}
              <div className="relative" ref={companyRef}>
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  onMouseEnter={openCompanyDropdown}
                  className="relative text-tech-text-medium hover:text-tech-primary font-medium transition-colors duration-300 group flex items-center gap-1"
                >
                  Company
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isCompanyOpen ? "rotate-180" : "",
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
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-tech-primary transition-all duration-300",
                      isCompanyOpen ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  ></span>
                </button>

                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform",
                    isCompanyOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2",
                  )}
                  onMouseLeave={closeAllDropdowns}
                >
                  <div className="p-4">
                    <div className="text-sm font-semibold text-tech-text-dark mb-3 border-b border-gray-100 pb-3">
                      Company Information
                    </div>
                    <div className="space-y-1">
                      {companyLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={closeAllDropdowns}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-tech-primary/5 transition-colors duration-200 group"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-tech-primary/10 rounded-lg flex items-center justify-center group-hover:bg-tech-primary/20 transition-colors duration-200">
                            <div className="text-tech-primary">{link.icon}</div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-tech-text-dark group-hover:text-tech-primary transition-colors duration-200">
                              {link.name}
                            </div>
                            <div className="text-xs text-tech-text-medium mt-1">
                              {link.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onMouseEnter={openServicesDropdown}
                  className="relative text-tech-text-medium hover:text-tech-primary font-medium transition-colors duration-300 group flex items-center gap-1"
                >
                  Services
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isServicesOpen ? "rotate-180" : "",
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
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-tech-primary transition-all duration-300",
                      isServicesOpen ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  ></span>
                </button>

                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform",
                    isServicesOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2",
                  )}
                  onMouseLeave={closeAllDropdowns}
                >
                  <div className="p-4">
                    <div className="text-sm font-semibold text-tech-text-dark mb-3 border-b border-gray-100 pb-3">
                      Our Services
                    </div>
                    <div className="space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={closeAllDropdowns}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-tech-primary/5 transition-colors duration-200 group"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-tech-primary/10 rounded-lg flex items-center justify-center group-hover:bg-tech-primary/20 transition-colors duration-200">
                            <div className="text-tech-primary">
                              {service.icon}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-tech-text-dark group-hover:text-tech-primary transition-colors duration-200">
                              {service.name}
                            </div>
                            <div className="text-xs text-tech-text-medium mt-1">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-3 pt-3">
                      <Link
                        to="/services"
                        onClick={closeAllDropdowns}
                        className="flex items-center justify-center gap-2 text-sm font-medium text-tech-primary hover:text-tech-primary-dark transition-colors duration-200"
                      >
                        View All Services
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
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partners Dropdown */}
              <div className="relative" ref={partnersRef}>
                <div className="flex items-center">
                  <a
                    href="/partners"
                    className="relative text-tech-text-medium hover:text-tech-primary font-medium transition-colors duration-300 group"
                    onMouseEnter={openPartnersDropdown}
                  >
                    Partners
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <button
                    onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                    onMouseEnter={openPartnersDropdown}
                    className="ml-1 text-tech-text-medium hover:text-tech-primary transition-colors duration-300"
                  >
                    <svg
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isPartnersOpen ? "rotate-180" : "",
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
                    "absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform",
                    isPartnersOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2",
                  )}
                  onMouseLeave={closeAllDropdowns}
                >
                  <div className="p-4">
                    <div className="text-sm font-semibold text-tech-text-dark mb-3 border-b border-gray-100 pb-3">
                      Partner Categories
                    </div>
                    <div className="space-y-1">
                      {partners.map((partner) => (
                        <a
                          key={partner.name}
                          href={partner.href}
                          onClick={closeAllDropdowns}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-tech-primary/5 transition-colors duration-200 group"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-tech-primary/10 rounded-lg flex items-center justify-center group-hover:bg-tech-primary/20 transition-colors duration-200">
                            <div className="text-tech-primary">
                              {partner.icon}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-tech-text-dark group-hover:text-tech-primary transition-colors duration-200">
                              {partner.name}
                            </div>
                            <div className="text-xs text-tech-text-medium mt-1">
                              {partner.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-3 pt-3">
                      <a
                        href="/partners/view-all"
                        onClick={closeAllDropdowns}
                        className="flex items-center justify-center gap-2 text-sm font-medium text-tech-primary hover:text-tech-primary-dark transition-colors duration-200"
                      >
                        View All Partners
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
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/contact"
                onMouseEnter={closeAllDropdowns}
                className="relative text-tech-text-medium hover:text-tech-primary font-medium transition-colors duration-300 group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-tech-text-medium hover:text-tech-primary transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={cn(
                  "w-6 h-6 transition-transform duration-300",
                  isMobileMenuOpen && "rotate-90",
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

        {/* Mobile Menu */}
        <div
          data-mobile-menu
          className={cn(
            "lg:hidden absolute left-4 right-4 top-16 bg-white border border-gray-200 rounded-xl shadow-xl transition-all duration-300 transform z-40",
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0 max-h-96"
              : "opacity-0 invisible -translate-y-4 max-h-0",
          )}
        >
          <div className="max-h-80 overflow-y-auto">
            <div className="px-4 py-4 space-y-4 relative">
              {/* Mobile Home Link */}
              <a
                href="/"
                onClick={closeMobileMenu}
                className="block text-tech-text-dark hover:text-tech-primary font-medium transition-colors duration-300"
              >
                Home
              </a>

              {/* Mobile Company Section */}
              <div className={cn("rounded-lg", isCompanyOpen && "bg-gray-50")}>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                    className={cn(
                      "flex items-center justify-between flex-1 text-left text-tech-text-dark hover:text-tech-primary font-medium transition-colors duration-300 p-2 rounded-lg hover:bg-gray-50",
                      isCompanyOpen && "text-tech-primary bg-gray-50",
                    )}
                  >
                    Company
                    <svg
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isCompanyOpen ? "rotate-180" : "",
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
                  {/* Close button for mobile dropdown */}
                  {isCompanyOpen && (
                    <button
                      onClick={() => setIsCompanyOpen(false)}
                      className="p-2 text-tech-text-medium hover:text-tech-primary transition-colors duration-300 rounded-lg hover:bg-gray-100"
                      aria-label="Close company menu"
                    >
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                <div
                  className={cn(
                    "mt-2 ml-3 space-y-2 transition-all duration-300",
                    isCompanyOpen
                      ? "max-h-64 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden",
                  )}
                >
                  {companyLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-2 py-1.5 px-2 text-tech-text-medium hover:text-tech-primary transition-colors duration-300 rounded-md hover:bg-gray-50"
                    >
                      <div className="w-4 h-4 text-tech-primary flex-shrink-0">
                        {link.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{link.name}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Services Section */}
              <div className={cn("rounded-lg", isServicesOpen && "bg-gray-50")}>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={cn(
                      "flex items-center justify-between flex-1 text-left text-tech-text-dark hover:text-tech-primary font-medium transition-colors duration-300 p-2 rounded-lg hover:bg-gray-50",
                      isServicesOpen && "text-tech-primary bg-gray-50",
                    )}
                  >
                    Services
                    <svg
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isServicesOpen ? "rotate-180" : "",
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
                  {/* Close button for mobile dropdown */}
                  {isServicesOpen && (
                    <button
                      onClick={() => setIsServicesOpen(false)}
                      className="p-2 text-tech-text-medium hover:text-tech-primary transition-colors duration-300 rounded-lg hover:bg-gray-100"
                      aria-label="Close services menu"
                    >
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                <div
                  className={cn(
                    "mt-2 ml-3 space-y-2 transition-all duration-300",
                    isServicesOpen
                      ? "max-h-64 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden",
                  )}
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-2 py-1.5 px-2 text-tech-text-medium hover:text-tech-primary transition-colors duration-300 rounded-md hover:bg-gray-50"
                    >
                      <div className="w-4 h-4 text-tech-primary flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          {service.name}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2 py-1.5 px-2 text-tech-primary text-sm font-medium rounded-md hover:bg-gray-50"
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
              <div className={cn("rounded-lg", isPartnersOpen && "bg-gray-50")}>
                <div className="flex items-center justify-between">
                  <a
                    href="/partners"
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex-1 text-left text-tech-text-dark hover:text-tech-primary font-medium transition-colors duration-300 p-2 rounded-lg hover:bg-gray-50",
                    )}
                  >
                    Partners
                  </a>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                      className={cn(
                        "p-2 text-tech-text-dark hover:text-tech-primary transition-colors duration-300 rounded-lg hover:bg-gray-50",
                        isPartnersOpen && "text-tech-primary bg-gray-50",
                      )}
                    >
                      <svg
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isPartnersOpen ? "rotate-180" : "",
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
                    {/* Close button for mobile dropdown */}
                    {isPartnersOpen && (
                      <button
                        onClick={() => setIsPartnersOpen(false)}
                        className="p-2 text-tech-text-medium hover:text-tech-primary transition-colors duration-300 rounded-lg hover:bg-gray-100"
                        aria-label="Close partners menu"
                      >
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
                <div
                  className={cn(
                    "mt-2 ml-3 space-y-2 transition-all duration-300",
                    isPartnersOpen
                      ? "max-h-64 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden",
                  )}
                >
                  {partners.map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-2 py-1.5 px-2 text-tech-text-medium hover:text-tech-primary transition-colors duration-300 rounded-md hover:bg-gray-50"
                    >
                      <div className="w-4 h-4 text-tech-primary flex-shrink-0">
                        {partner.icon}
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          {partner.name}
                        </div>
                      </div>
                    </a>
                  ))}
                  <a
                    href="/partners/view-all"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2 py-1.5 px-2 text-tech-primary text-sm font-medium rounded-md hover:bg-gray-50"
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
                className="block text-tech-text-dark hover:text-tech-primary font-medium transition-colors duration-300 p-2 rounded-lg hover:bg-gray-50"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-tech-gradient rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white"
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
