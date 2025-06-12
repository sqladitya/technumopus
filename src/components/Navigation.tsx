import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useSearchContext } from "@/components/SearchProvider";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);
  const [dropdownPositions, setDropdownPositions] = useState<{
    [key: string]: { left?: number; right?: number; maxWidth?: number };
  }>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const companyDropdownRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const partnersDropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { openSearch } = useSearchContext();

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

  // Handle keyboard shortcuts for dropdowns and mobile menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Escape key closes dropdowns and mobile menu
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Calculate optimal dropdown position to prevent off-screen positioning
  const calculateDropdownPosition = (
    dropdownElement: HTMLElement,
    triggerElement: HTMLElement,
    dropdownWidth: number,
  ) => {
    const triggerRect = triggerElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const padding = 16; // Space from viewport edge

    // Default position (left-aligned)
    let position: { left?: number; right?: number; maxWidth?: number } = {};

    // Check if dropdown would go off the right edge
    const wouldOverflowRight =
      triggerRect.left + dropdownWidth > viewportWidth - padding;

    if (wouldOverflowRight) {
      // Position right-aligned to the trigger
      const rightOffset = viewportWidth - triggerRect.right;
      position.right = rightOffset;

      // If still too wide, constrain the width
      const maxPossibleWidth = triggerRect.right - padding;
      if (dropdownWidth > maxPossibleWidth) {
        position.maxWidth = maxPossibleWidth;
      }
    } else {
      // Default left-aligned position
      position.left = 0;
    }

    return position;
  };

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);

    // Calculate position after a brief delay to ensure refs are ready
    setTimeout(() => {
      let dropdownElement: HTMLDivElement | null = null;
      let triggerElement: HTMLElement | null = null;
      let dropdownWidth = 0;

      if (dropdown === "company" && companyDropdownRef.current) {
        dropdownElement = companyDropdownRef.current;
        triggerElement = dropdownElement.parentElement?.querySelector(
          "button",
        ) as HTMLElement;
        dropdownWidth = 320; // min-w-[320px]
      } else if (dropdown === "services" && servicesDropdownRef.current) {
        dropdownElement = servicesDropdownRef.current;
        triggerElement = dropdownElement.parentElement?.querySelector(
          "button",
        ) as HTMLElement;
        dropdownWidth = 400; // min-w-[400px]
      } else if (dropdown === "partners" && partnersDropdownRef.current) {
        dropdownElement = partnersDropdownRef.current;
        triggerElement = dropdownElement.parentElement?.querySelector(
          "button",
        ) as HTMLElement;
        dropdownWidth = 600; // min-w-[600px]
      }

      if (dropdownElement && triggerElement) {
        const position = calculateDropdownPosition(
          dropdownElement,
          triggerElement,
          dropdownWidth,
        );
        setDropdownPositions((prev) => ({
          ...prev,
          [dropdown]: position,
        }));
      }
    }, 10);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveMobileDropdown(
      activeMobileDropdown === dropdown ? null : dropdown,
    );
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const services = [
    {
      name: "SAP Consulting",
      href: "/services/sap-consulting",
      description: "Enterprise SAP implementations and optimization",
    },
    {
      name: "Software Development Platform",
      href: "/services/saas-development",
      description: "Scalable cloud-based software solutions",
    },
    {
      name: "Cloud Architecture",
      href: "/services/cloud-architecture",
      description: "Robust and secure cloud infrastructure",
    },
    {
      name: "Hardware Infrastructure",
      href: "/services/hardware-infrastructure",
      description: "Complete hardware solutions and deployment",
    },
  ];

  const company = [
    {
      name: "About Us",
      href: "/about",
      description: "Our story and mission",
    },
    {
      name: "Leadership",
      href: "/leadership",
      description: "Meet our leadership team",
    },
    {
      name: "Careers",
      href: "/careers",
      description: "Join our team",
    },
    {
      name: "News & Insights",
      href: "/news-insights",
      description: "Latest news and thought leadership",
    },
    {
      name: "What We Believe",
      href: "/about/what-we-believe",
      description: "Our values and principles",
    },
  ];

  const partners = [
    {
      category: "TECHNOLOGY PARTNERS",
      items: [
        {
          name: "Cloud Partners",
          href: "/partners/cloud-partners",
          description: "Leading cloud service providers",
        },
        {
          name: "Technology Partners",
          href: "/partners/technology-partners",
          description: "Strategic technology alliances",
        },
        {
          name: "Integration Partners",
          href: "/partners/integration-partners",
          description: "System integration specialists",
        },
      ],
    },
    {
      category: "INDUSTRY PARTNERS",
      items: [
        {
          name: "Security Partners",
          href: "/partners/security-partners",
          description: "Cybersecurity and compliance experts",
        },
        {
          name: "SAP Partners",
          href: "/partners/sap-partners",
          description: "SAP ecosystem partners",
        },
        {
          name: "View All Partners",
          href: "/partners/view-all",
          description: "Complete partner directory",
        },
      ],
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
          <Link to="/" onClick={handleMobileLinkClick}>
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

        <div className="p-6 space-y-4 overflow-y-auto">
          <Link
            to="/"
            onClick={handleMobileLinkClick}
            className="block text-lg font-medium text-accenture-text-primary hover:text-accenture-purple py-2"
          >
            Home
          </Link>

          {/* Mobile Company Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDropdown("company")}
              className="flex items-center justify-between w-full text-lg font-medium text-accenture-text-primary hover:text-accenture-purple py-2"
            >
              Company
              <svg
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeMobileDropdown === "company" ? "rotate-180" : "",
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
            {activeMobileDropdown === "company" && (
              <div className="pl-4 mt-2 space-y-2">
                {company.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleMobileLinkClick}
                    className="block text-base text-accenture-text-secondary hover:text-accenture-purple py-2"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDropdown("services")}
              className="flex items-center justify-between w-full text-lg font-medium text-accenture-text-primary hover:text-accenture-purple py-2"
            >
              Services
              <svg
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeMobileDropdown === "services" ? "rotate-180" : "",
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
            {activeMobileDropdown === "services" && (
              <div className="pl-4 mt-2 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={handleMobileLinkClick}
                    className="block text-base text-accenture-text-secondary hover:text-accenture-purple py-2"
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={handleMobileLinkClick}
                  className="block text-base text-accenture-purple hover:text-accenture-purple-dark py-2 font-medium"
                >
                  View All Services
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Partners Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDropdown("partners")}
              className="flex items-center justify-between w-full text-lg font-medium text-accenture-text-primary hover:text-accenture-purple py-2"
            >
              Partners
              <svg
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeMobileDropdown === "partners" ? "rotate-180" : "",
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
            {activeMobileDropdown === "partners" && (
              <div className="pl-4 mt-2 space-y-2">
                {partners
                  .flatMap((category) => category.items)
                  .map((partner) => (
                    <Link
                      key={partner.name}
                      to={partner.href}
                      onClick={handleMobileLinkClick}
                      className="block text-base text-accenture-text-secondary hover:text-accenture-purple py-2"
                    >
                      {partner.name}
                    </Link>
                  ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            onClick={handleMobileLinkClick}
            className="block text-lg font-medium text-accenture-text-primary hover:text-accenture-purple py-2"
          >
            Contact
          </Link>

          {/* Mobile Search Button */}
          <button
            onClick={() => {
              openSearch();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 w-full text-lg font-medium text-accenture-text-primary hover:text-accenture-purple py-2"
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
            <kbd className="ml-auto px-2 py-1 bg-accenture-gray-100 text-accenture-text-tertiary rounded text-xs">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
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
              {/* Home */}
              <Link
                to="/"
                className="text-white hover:text-accenture-purple font-medium transition-colors duration-200"
              >
                Home
              </Link>

              {/* Company Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => handleDropdownEnter("company")}
                  className="flex items-center gap-1 text-white hover:text-accenture-purple font-medium transition-colors duration-200"
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
                  ref={companyDropdownRef}
                  className={cn(
                    "absolute top-full mt-2 w-max bg-white rounded-lg shadow-accenture-xl border transition-all duration-300 transform",
                    activeDropdown === "company"
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95",
                    dropdownPositions.company?.right !== undefined
                      ? "origin-top-right"
                      : "origin-top-left",
                  )}
                  style={{
                    left:
                      dropdownPositions.company?.left !== undefined
                        ? dropdownPositions.company.left
                        : undefined,
                    right:
                      dropdownPositions.company?.right !== undefined
                        ? dropdownPositions.company.right
                        : undefined,
                    maxWidth: dropdownPositions.company?.maxWidth,
                  }}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="p-6 min-w-[320px]">
                    <div className="space-y-3">
                      {company.map((item) => (
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
                  ref={servicesDropdownRef}
                  className={cn(
                    "absolute top-full mt-2 w-max bg-white rounded-lg shadow-accenture-xl border transition-all duration-300 transform",
                    activeDropdown === "services"
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95",
                    dropdownPositions.services?.right !== undefined
                      ? "origin-top-right"
                      : "origin-top-left",
                  )}
                  style={{
                    left:
                      dropdownPositions.services?.left !== undefined
                        ? dropdownPositions.services.left
                        : undefined,
                    right:
                      dropdownPositions.services?.right !== undefined
                        ? dropdownPositions.services.right
                        : undefined,
                    maxWidth: dropdownPositions.services?.maxWidth,
                  }}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="p-6 min-w-[400px]">
                    <div className="space-y-4">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block group p-4 rounded-lg hover:bg-accenture-gray-50 transition-colors duration-200"
                        >
                          <div className="font-bold text-accenture-text-primary group-hover:text-accenture-purple mb-2 transition-colors text-lg">
                            {service.name}
                          </div>
                          <div className="text-sm text-accenture-text-tertiary leading-relaxed">
                            {service.description}
                          </div>
                        </Link>
                      ))}

                      {/* View All Services Link */}
                      <div className="pt-4 border-t border-accenture-gray-200">
                        <Link
                          to="/services"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center gap-2 p-4 rounded-lg hover:bg-accenture-gray-50 transition-colors duration-200"
                        >
                          <span className="font-semibold text-accenture-purple group-hover:text-accenture-purple-dark transition-colors">
                            View All Services
                          </span>
                          <svg
                            className="w-4 h-4 text-accenture-purple group-hover:text-accenture-purple-dark transition-all duration-200 group-hover:translate-x-1"
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

              {/* Partners Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => handleDropdownEnter("partners")}
                  className="flex items-center gap-1 text-white hover:text-accenture-purple font-medium transition-colors duration-200"
                >
                  Partners
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
                    activeDropdown === "partners"
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95",
                  )}
                  onMouseLeave={handleDropdownLeave}
                >
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-12 min-w-[600px]">
                      {partners.map((category) => (
                        <div key={category.category}>
                          <div className="text-xs font-bold text-accenture-text-tertiary uppercase tracking-wider mb-4">
                            {category.category}
                          </div>
                          <div className="space-y-3">
                            {category.items.map((partner) => (
                              <Link
                                key={partner.name}
                                to={partner.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block group p-3 rounded-lg hover:bg-accenture-gray-50 transition-colors duration-200"
                              >
                                <div className="font-semibold text-accenture-text-primary group-hover:text-accenture-purple mb-1 transition-colors">
                                  {partner.name}
                                </div>
                                <div className="text-sm text-accenture-text-tertiary">
                                  {partner.description}
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

              {/* Contact */}
              <Link
                to="/contact"
                className="text-white hover:text-accenture-purple font-medium transition-colors duration-200"
              >
                Contact
              </Link>

              {/* Search Button */}
              <button
                onClick={openSearch}
                className="flex items-center gap-2 px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
                title="Search"
              >
                <svg
                  className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
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
                <span className="hidden xl:inline text-sm font-medium">
                  Search
                </span>
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
