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
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

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

      const mobileMenu = document.querySelector("[data-mobile-sidebar]");
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

  // Handle swipe gestures for mobile sidebar
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchEnd - touchStart;
    const isRightSwipe = distance > 50;

    if (isRightSwipe && isMobileMenuOpen) {
      closeMobileMenu();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    closeMobileMenu();
  };

  const services = [
    {
      name: "SAP Consulting",
      href: "/services/sap-consulting",
      description: "Enterprise SAP implementations and optimization",
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
      description: "Scalable cloud-based software solutions",
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
      description: "Robust and secure cloud infrastructure",
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
      description: "Complete hardware solutions and deployment",
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
      description: "End-to-end business transformation and modernization",
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
      description: "AWS, Microsoft Azure, Google Cloud",
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
      description: "Palo Alto Networks, SentinelOne",
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
      description: "Our story, mission, and values",
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
      description: "Meet our executive leadership",
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
      description: "Join our growing team",
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
      description: "Latest updates and thought leadership",
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
      {/* Mobile Sidebar Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={handleBackdropClick}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        data-mobile-sidebar
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="TECHNUM OPUS Logo"
                width="40"
                height="40"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-black text-pink-600 leading-tight tracking-wide">
                TECHNUM
              </div>
              <div className="text-sm font-bold text-gray-800 leading-tight tracking-widest">
                OPUS
              </div>
            </div>
          </Link>
          <button
            onClick={closeMobileMenu}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="py-6">
            {/* Home Link */}
            <div className="px-6 mb-2">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
              >
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </Link>
            </div>

            {/* Company Section */}
            <div className="px-6 mb-3">
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Company
                </div>
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
              <div
                className={cn(
                  "mt-2 ml-8 space-y-1 overflow-hidden transition-all duration-300",
                  isCompanyOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <div className="text-gray-400">{link.icon}</div>
                    <div>
                      <div className="text-sm font-medium">{link.name}</div>
                      <div className="text-xs text-gray-500">
                        {link.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services Section */}
            <div className="px-6 mb-3">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  Services
                </div>
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
              <div
                className={cn(
                  "mt-2 ml-8 space-y-1 overflow-hidden transition-all duration-300",
                  isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <div className="text-gray-400">{service.icon}</div>
                    <div>
                      <div className="text-sm font-medium">{service.name}</div>
                      <div className="text-xs text-gray-500">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 px-4 py-2 text-pink-600 hover:text-pink-700 hover:bg-pink-50 rounded-lg transition-colors duration-200 mt-2"
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <div className="text-sm font-medium">View All Services</div>
                </Link>
              </div>
            </div>

            {/* Partners Section */}
            <div className="px-6 mb-3">
              <button
                onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
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
                  Partners
                </div>
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
              <div
                className={cn(
                  "mt-2 ml-8 space-y-1 overflow-hidden transition-all duration-300",
                  isPartnersOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                {partners.map((partner) => (
                  <Link
                    key={partner.name}
                    to={partner.href}
                    onClick={closeMobileMenu}
                    className="flex items-center gap-3 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <div className="text-gray-400">{partner.icon}</div>
                    <div>
                      <div className="text-sm font-medium">{partner.name}</div>
                      <div className="text-xs text-gray-500">
                        {partner.description}
                      </div>
                    </div>
                  </Link>
                ))}
                <Link
                  to="/partners/view-all"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 px-4 py-2 text-pink-600 hover:text-pink-700 hover:bg-pink-50 rounded-lg transition-colors duration-200 mt-2"
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <div className="text-sm font-medium">View All Partners</div>
                </Link>
              </div>
            </div>

            {/* Contact Link */}
            <div className="px-6">
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
            : "bg-white/90 backdrop-blur-sm",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <img
                    src="/logo.png"
                    alt="TECHNUM OPUS Logo"
                    width="44"
                    height="44"
                    className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500/30 via-fuchsia-500/30 to-pink-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg" />
                  <div className="absolute -inset-1 bg-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                </div>
                <div className="flex flex-col">
                  <div className="text-2xl font-black text-pink-600 leading-tight tracking-wide">
                    TECHNUM
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-bold text-gray-800 leading-tight tracking-widest">
                      OPUS
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="w-16 h-0.5 bg-gray-800"></div>
                      <div className="w-16 h-0.5 bg-gray-800"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on tablets and phones */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                to="/"
                onMouseEnter={closeAllDropdowns}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 rounded-md hover:bg-gray-50"
              >
                Home
              </Link>

              {/* Company Dropdown */}
              <div className="relative" ref={companyRef}>
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  onMouseEnter={openCompanyDropdown}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 rounded-md hover:bg-gray-50"
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

                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-max bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 transform origin-top-left",
                    isCompanyOpen
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95",
                  )}
                  onMouseLeave={closeAllDropdowns}
                >
                  <div className="p-3">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                      Company
                    </div>
                    <div className="space-y-1">
                      {companyLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          onClick={closeAllDropdowns}
                          className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150 group whitespace-nowrap"
                        >
                          <div className="text-gray-400 group-hover:text-tech-primary transition-colors duration-150">
                            {link.icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              {link.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {link.description}
                            </div>
                          </div>
                        </Link>
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
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 rounded-md hover:bg-gray-50"
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

                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-max bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 transform origin-top-left",
                    isServicesOpen
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95",
                  )}
                  onMouseLeave={closeAllDropdowns}
                >
                  <div className="p-3">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                      Our Services
                    </div>
                    <div className="space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={closeAllDropdowns}
                          className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150 group whitespace-nowrap"
                        >
                          <div className="text-gray-400 group-hover:text-tech-primary transition-colors duration-150">
                            {service.icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              {service.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        to="/services"
                        onClick={closeAllDropdowns}
                        className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-tech-primary hover:text-tech-primary-dark transition-colors duration-150 whitespace-nowrap"
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
                </div>
              </div>

              {/* Partners Dropdown */}
              <div className="relative" ref={partnersRef}>
                <button
                  onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                  onMouseEnter={openPartnersDropdown}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 rounded-md hover:bg-gray-50"
                >
                  Partners
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

                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-max bg-white rounded-lg shadow-lg border border-gray-200 transition-all duration-200 transform origin-top-left",
                    isPartnersOpen
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95",
                  )}
                  onMouseLeave={closeAllDropdowns}
                >
                  <div className="p-3">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                      Partners
                    </div>
                    <div className="space-y-1">
                      {partners.map((partner) => (
                        <Link
                          key={partner.name}
                          to={partner.href}
                          onClick={closeAllDropdowns}
                          className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150 group whitespace-nowrap"
                        >
                          <div className="text-gray-400 group-hover:text-tech-primary transition-colors duration-150">
                            {partner.icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              {partner.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {partner.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        to="/partners/view-all"
                        onClick={closeAllDropdowns}
                        className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-tech-primary hover:text-tech-primary-dark transition-colors duration-150 whitespace-nowrap"
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                onMouseEnter={closeAllDropdowns}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 rounded-md hover:bg-gray-50"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button - Visible on tablets and phones */}
            <button
              data-mobile-menu-button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 rounded-md hover:bg-gray-50"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
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
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-30 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 hover:border-tech-primary"
      >
        <svg
          className="w-5 h-5 text-gray-600 hover:text-tech-primary transition-colors duration-200"
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
