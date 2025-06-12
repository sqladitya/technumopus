import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
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
        const isOutsideIndustries =
          industriesRef.current && !industriesRef.current.contains(target);
        const isOutsideCompany =
          companyRef.current && !companyRef.current.contains(target);

        if (isOutsideServices) setIsServicesOpen(false);
        if (isOutsideIndustries) setIsIndustriesOpen(false);
        if (isOutsideCompany) setIsCompanyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

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

  const closeAllDropdowns = () => {
    setIsServicesOpen(false);
    setIsIndustriesOpen(false);
    setIsCompanyOpen(false);
  };

  const closeMobileMenu = () => {
    closeAllDropdowns();
    setIsMobileMenuOpen(false);
  };

  const services = [
    {
      category: "TRANSFORMATION",
      items: [
        {
          name: "Digital Transformation",
          href: "/services/digital-transformation",
          description: "End-to-end business transformation",
        },
        {
          name: "Cloud Migration",
          href: "/services/cloud-architecture",
          description: "Secure cloud infrastructure",
        },
        {
          name: "Data & Analytics",
          href: "/services/data-analytics",
          description: "AI-powered insights",
        },
      ],
    },
    {
      category: "TECHNOLOGY",
      items: [
        {
          name: "SAP Consulting",
          href: "/services/sap-consulting",
          description: "Enterprise SAP solutions",
        },
        {
          name: "Application Development",
          href: "/services/saas-development",
          description: "Custom software solutions",
        },
        {
          name: "Infrastructure",
          href: "/services/hardware-infrastructure",
          description: "IT infrastructure management",
        },
      ],
    },
  ];

  const industries = [
    {
      name: "Financial Services",
      href: "/industries/financial-services",
      icon: "🏦",
    },
    { name: "Healthcare", href: "/industries/healthcare", icon: "🏥" },
    { name: "Manufacturing", href: "/industries/manufacturing", icon: "🏭" },
    { name: "Retail", href: "/industries/retail", icon: "🛍️" },
    { name: "Energy", href: "/industries/energy", icon: "⚡" },
    { name: "Government", href: "/industries/government", icon: "🏛️" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about", description: "Our story and mission" },
    { name: "Leadership", href: "/leadership", description: "Executive team" },
    { name: "Careers", href: "/careers", description: "Join our team" },
    {
      name: "News & Insights",
      href: "/news-insights",
      description: "Latest updates",
    },
  ];

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-6 bg-corporate-black text-white">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="TECHNUM OPUS"
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg font-bold">TECHNUM OPUS</span>
          </Link>
          <button
            onClick={closeMobileMenu}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
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

        {/* Mobile Menu Content */}
        <div className="p-6 space-y-4">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="block py-3 text-corporate-text-primary hover:text-corporate-blue font-medium"
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full py-3 text-corporate-text-primary hover:text-corporate-blue font-medium"
            >
              Services
              <svg
                className={cn(
                  "w-4 h-4 transition-transform",
                  isServicesOpen && "rotate-180",
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
            {isServicesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {services
                  .flatMap((category) => category.items)
                  .map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      onClick={closeMobileMenu}
                      className="block py-2 text-sm text-corporate-text-secondary hover:text-corporate-blue"
                    >
                      {service.name}
                    </Link>
                  ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
              className="flex items-center justify-between w-full py-3 text-corporate-text-primary hover:text-corporate-blue font-medium"
            >
              Industries
              <svg
                className={cn(
                  "w-4 h-4 transition-transform",
                  isIndustriesOpen && "rotate-180",
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
            {isIndustriesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    to={industry.href}
                    onClick={closeMobileMenu}
                    className="block py-2 text-sm text-corporate-text-secondary hover:text-corporate-blue"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
              className="flex items-center justify-between w-full py-3 text-corporate-text-primary hover:text-corporate-blue font-medium"
            >
              Company
              <svg
                className={cn(
                  "w-4 h-4 transition-transform",
                  isCompanyOpen && "rotate-180",
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
            {isCompanyOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={closeMobileMenu}
                    className="block py-2 text-sm text-corporate-text-secondary hover:text-corporate-blue"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="block py-3 text-corporate-text-primary hover:text-corporate-blue font-medium"
          >
            Contact
          </Link>

          <div className="pt-4">
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block w-full px-6 py-3 bg-corporate-blue text-white text-center rounded-lg font-semibold hover:bg-corporate-blue-dark transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-corporate-black/95 backdrop-blur-md shadow-corporate"
            : "bg-corporate-black",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 z-50">
              <img
                src="/logo.png"
                alt="TECHNUM OPUS"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-white">TECHNUM OPUS</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                onMouseEnter={closeAllDropdowns}
                className="text-white hover:text-corporate-blue font-medium transition-colors duration-200"
              >
                Home
              </Link>

              {/* Services Mega Menu */}
              <div className="relative" ref={servicesRef}>
                <button
                  onMouseEnter={() => setIsServicesOpen(true)}
                  className="flex items-center gap-1 text-white hover:text-corporate-blue font-medium transition-colors duration-200"
                >
                  Services
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-max bg-white rounded-xl shadow-corporate-xl border transition-all duration-300 transform origin-top-left",
                    isServicesOpen
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95",
                  )}
                  onMouseLeave={closeAllDropdowns}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-8 min-w-[600px]">
                      {services.map((category) => (
                        <div key={category.category}>
                          <div className="text-xs font-semibold text-corporate-text-tertiary uppercase tracking-wider mb-4">
                            {category.category}
                          </div>
                          <div className="space-y-3">
                            {category.items.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                onClick={closeAllDropdowns}
                                className="block group p-3 rounded-lg hover:bg-corporate-bg-secondary transition-colors duration-200"
                              >
                                <div className="font-semibold text-corporate-text-primary group-hover:text-corporate-blue mb-1">
                                  {service.name}
                                </div>
                                <div className="text-sm text-corporate-text-secondary">
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t mt-6 pt-4">
                      <Link
                        to="/services"
                        onClick={closeAllDropdowns}
                        className="inline-flex items-center gap-2 px-4 py-2 text-corporate-blue hover:text-corporate-blue-dark font-semibold transition-colors"
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

              {/* Industries Dropdown */}
              <div className="relative" ref={industriesRef}>
                <button
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  className="flex items-center gap-1 text-white hover:text-corporate-blue font-medium transition-colors duration-200"
                >
                  Industries
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-max bg-white rounded-xl shadow-corporate-xl border transition-all duration-300 transform origin-top-left",
                    isIndustriesOpen
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95",
                  )}
                  onMouseLeave={closeAllDropdowns}
                >
                  <div className="p-6 min-w-[320px]">
                    <div className="text-xs font-semibold text-corporate-text-tertiary uppercase tracking-wider mb-4">
                      INDUSTRIES
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {industries.map((industry) => (
                        <Link
                          key={industry.name}
                          to={industry.href}
                          onClick={closeAllDropdowns}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-corporate-bg-secondary transition-colors duration-200 group"
                        >
                          <span className="text-lg">{industry.icon}</span>
                          <span className="font-medium text-corporate-text-primary group-hover:text-corporate-blue">
                            {industry.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Dropdown */}
              <div className="relative" ref={companyRef}>
                <button
                  onMouseEnter={() => setIsCompanyOpen(true)}
                  className="flex items-center gap-1 text-white hover:text-corporate-blue font-medium transition-colors duration-200"
                >
                  Company
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={cn(
                    "absolute top-full left-0 mt-2 w-max bg-white rounded-xl shadow-corporate-xl border transition-all duration-300 transform origin-top-left",
                    isCompanyOpen
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95",
                  )}
                  onMouseLeave={closeAllDropdowns}
                >
                  <div className="p-6 min-w-[280px]">
                    <div className="text-xs font-semibold text-corporate-text-tertiary uppercase tracking-wider mb-4">
                      COMPANY
                    </div>
                    <div className="space-y-3">
                      {companyLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          onClick={closeAllDropdowns}
                          className="block p-3 rounded-lg hover:bg-corporate-bg-secondary transition-colors duration-200 group"
                        >
                          <div className="font-semibold text-corporate-text-primary group-hover:text-corporate-blue mb-1">
                            {link.name}
                          </div>
                          <div className="text-sm text-corporate-text-secondary">
                            {link.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                onMouseEnter={closeAllDropdowns}
                className="text-white hover:text-corporate-blue font-medium transition-colors duration-200"
              >
                Contact
              </Link>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="px-6 py-2 bg-corporate-blue hover:bg-corporate-blue-dark text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-corporate"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-corporate-blue transition-colors"
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
    </>
  );
};

export default Navigation;
