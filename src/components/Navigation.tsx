import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const services = [
    {
      category: "STRATEGY & CONSULTING",
      items: [
        {
          name: "Business Strategy",
          href: "/services/business-strategy",
          description: "Strategic transformation for sustainable growth",
        },
        {
          name: "Technology Strategy",
          href: "/services/technology-strategy",
          description: "Technology-led business innovation",
        },
        {
          name: "Operations",
          href: "/services/operations",
          description: "Operational excellence and efficiency",
        },
        {
          name: "Sustainability",
          href: "/services/sustainability",
          description: "Sustainable business transformation",
        },
      ],
    },
    {
      category: "TECHNOLOGY",
      items: [
        {
          name: "Application Services",
          href: "/services/application-services",
          description: "End-to-end application development",
        },
        {
          name: "Cloud Solutions",
          href: "/services/cloud-solutions",
          description: "Cloud-first transformation",
        },
        {
          name: "Data & AI",
          href: "/services/data-ai",
          description: "Intelligent data solutions",
        },
        {
          name: "Infrastructure",
          href: "/services/infrastructure",
          description: "Modern IT infrastructure",
        },
      ],
    },
    {
      category: "INTERACTIVE",
      items: [
        {
          name: "Customer Experience",
          href: "/services/customer-experience",
          description: "Human-centered design",
        },
        {
          name: "Digital Marketing",
          href: "/services/digital-marketing",
          description: "Personalized customer engagement",
        },
        {
          name: "Commerce",
          href: "/services/commerce",
          description: "Connected commerce experiences",
        },
      ],
    },
  ];

  const industries = [
    { name: "Automotive", href: "/industries/automotive" },
    { name: "Banking", href: "/industries/banking" },
    { name: "Capital Markets", href: "/industries/capital-markets" },
    { name: "Communications", href: "/industries/communications" },
    { name: "Consumer Goods", href: "/industries/consumer-goods" },
    { name: "Energy", href: "/industries/energy" },
    {
      name: "Health & Public Service",
      href: "/industries/health-public-service",
    },
    { name: "High Tech", href: "/industries/high-tech" },
    { name: "Industrial", href: "/industries/industrial" },
    { name: "Insurance", href: "/industries/insurance" },
    { name: "Life Sciences", href: "/industries/life-sciences" },
    { name: "Media & Entertainment", href: "/industries/media-entertainment" },
    { name: "Natural Resources", href: "/industries/natural-resources" },
    { name: "Retail", href: "/industries/retail" },
    { name: "Software & Platforms", href: "/industries/software-platforms" },
    { name: "Travel", href: "/industries/travel" },
    { name: "Utilities", href: "/industries/utilities" },
  ];

  const about = [
    {
      name: "What We Believe",
      href: "/about/what-we-believe",
      description: "Our purpose and values",
    },
    {
      name: "Leadership",
      href: "/about/leadership",
      description: "Meet our leadership team",
    },
    { name: "Careers", href: "/careers", description: "Join our team" },
    {
      name: "Newsroom",
      href: "/newsroom",
      description: "Latest news and updates",
    },
    {
      name: "Investor Relations",
      href: "/investors",
      description: "Financial information",
    },
  ];

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-6 bg-accenture-black text-white">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="text-xl font-bold">TECHNUM OPUS</span>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
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

        <div className="p-6 space-y-6 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg font-medium text-accenture-text-primary hover:text-accenture-purple"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg font-medium text-accenture-text-primary hover:text-accenture-purple"
          >
            Services
          </Link>
          <Link
            to="/industries"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg font-medium text-accenture-text-primary hover:text-accenture-purple"
          >
            Industries
          </Link>

          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg font-medium text-accenture-text-primary hover:text-accenture-purple"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-lg font-medium text-accenture-text-primary hover:text-accenture-purple"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Main Navigation - Accenture Style */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-40 bg-accenture-black transition-all duration-300",
          isScrolled ? "shadow-accenture" : "",
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-white tracking-tight">
                TECHNUM OPUS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div
              className="hidden lg:flex items-center space-x-8"
              ref={dropdownRef}
            >
              {/* Services Mega Menu */}
              <div className="relative">
                <button
                  onMouseEnter={() => handleDropdownEnter("services")}
                  className="flex items-center gap-1 text-white hover:text-accenture-purple font-medium transition-colors duration-200"
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
                    "absolute top-full left-0 mt-2 w-max bg-white rounded-lg shadow-accenture-xl border transition-all duration-300 transform origin-top-left",
                    activeDropdown === "services"
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95",
                  )}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-12 min-w-[800px]">
                      {services.map((category) => (
                        <div key={category.category}>
                          <div className="text-xs font-bold text-accenture-text-tertiary uppercase tracking-wider mb-4">
                            {category.category}
                          </div>
                          <div className="space-y-3">
                            {category.items.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block group p-3 rounded-lg hover:bg-accenture-gray-50 transition-colors duration-200"
                              >
                                <div className="font-semibold text-accenture-text-primary group-hover:text-accenture-purple mb-1 transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-sm text-accenture-text-tertiary">
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => handleDropdownEnter("industries")}
                  className="flex items-center gap-1 text-white hover:text-accenture-purple font-medium transition-colors duration-200"
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
                    "absolute top-full left-0 mt-2 w-max bg-white rounded-lg shadow-accenture-xl border transition-all duration-300 transform origin-top-left",
                    activeDropdown === "industries"
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95",
                  )}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="p-6 max-w-md">
                    <div className="grid grid-cols-2 gap-3">
                      {industries.map((industry) => (
                        <Link
                          key={industry.name}
                          to={industry.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block p-3 rounded-lg hover:bg-accenture-gray-50 transition-colors duration-200 text-accenture-text-primary hover:text-accenture-purple font-medium"
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* About Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => handleDropdownEnter("about")}
                  className="flex items-center gap-1 text-white hover:text-accenture-purple font-medium transition-colors duration-200"
                >
                  About
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
                    "absolute top-full left-0 mt-2 w-max bg-white rounded-lg shadow-accenture-xl border transition-all duration-300 transform origin-top-left",
                    activeDropdown === "about"
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95",
                  )}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="p-6 min-w-[320px]">
                    <div className="space-y-3">
                      {about.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block group p-3 rounded-lg hover:bg-accenture-gray-50 transition-colors duration-200"
                        >
                          <div className="font-semibold text-accenture-text-primary group-hover:text-accenture-purple mb-1 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-sm text-accenture-text-tertiary">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="text-white hover:text-accenture-purple font-medium transition-colors duration-200"
              >
                Contact
              </Link>

              {/* Search Button */}
              <button className="p-2 text-white hover:text-accenture-purple transition-colors duration-200">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-accenture-purple transition-colors"
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
