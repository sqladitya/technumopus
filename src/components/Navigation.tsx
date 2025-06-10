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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const servicesRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse position tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (navRef.current) {
      navRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (navRef.current) {
        navRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
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
      icon: "🏢",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "SAAS Platform Development",
      href: "/services/saas-development",
      description: "Scalable cloud solutions",
      icon: "⚡",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Cloud Architecture",
      href: "/services/cloud-architecture",
      description: "Secure cloud infrastructure",
      icon: "☁️",
      gradient: "from-teal-500 to-green-500",
    },
    {
      name: "Hardware Infrastructure",
      href: "/services/hardware-infrastructure",
      description: "Complete hardware solutions",
      icon: "🔧",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Digital Transformation",
      href: "/services/digital-transformation",
      description: "Business modernization",
      icon: "🚀",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  const partners = [
    {
      name: "Cloud Partners",
      href: "/partners/cloud-partners",
      description: "AWS, Azure, Google Cloud",
      icon: "☁️",
      gradient: "from-sky-500 to-blue-500",
    },
    {
      name: "Technology Partners",
      href: "/partners/technology-partners",
      description: "Cisco, Dell, HP, Lenovo",
      icon: "💻",
      gradient: "from-gray-500 to-slate-600",
    },
    {
      name: "Security Partners",
      href: "/partners/security-partners",
      description: "Palo Alto, SentinelOne",
      icon: "🛡️",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "Integration Partners",
      href: "/partners/integration-partners",
      description: "Zebra Technologies and more",
      icon: "🔗",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const companyLinks = [
    {
      name: "About Us",
      href: "/about",
      description: "Our story and mission",
      icon: "ℹ️",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      name: "Leadership Team",
      href: "/leadership",
      description: "Meet our executives",
      icon: "👥",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      name: "Careers",
      href: "/careers",
      description: "Join our team",
      icon: "💼",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "News & Insights",
      href: "/news-insights",
      description: "Latest updates",
      icon: "📰",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <>
      {/* Beautiful Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-20 lg:hidden"
          onClick={handleBackdropClick}
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.2) 0%, transparent 50%),
              linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)
            `,
            backdropFilter: "blur(20px) saturate(180%)",
            touchAction: "manipulation",
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
            userSelect: "none",
          }}
        />
      )}

      {/* Stunning Navigation Bar */}
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
          isScrolled
            ? "bg-white/80 backdrop-blur-2xl shadow-2xl shadow-purple-500/10 border-b border-white/20"
            : "bg-gradient-to-r from-white/60 via-white/70 to-white/60 backdrop-blur-xl",
        )}
        style={{
          background: isScrolled
            ? `
                linear-gradient(135deg, 
                  rgba(255,255,255,0.95) 0%, 
                  rgba(255,255,255,0.85) 50%, 
                  rgba(255,255,255,0.95) 100%
                ),
                radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(255, 0, 127, 0.03) 0%, 
                  transparent 50%
                )
              `
            : `
                linear-gradient(135deg, 
                  rgba(255,255,255,0.7) 0%, 
                  rgba(255,255,255,0.8) 50%, 
                  rgba(255,255,255,0.7) 100%
                ),
                radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(255, 0, 127, 0.05) 0%, 
                  transparent 50%
                )
              `,
        }}
      >
        {/* Magical Border Effects */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background: `linear-gradient(90deg, 
              transparent 0%, 
              rgba(255, 0, 127, 0.4) 20%, 
              rgba(168, 85, 247, 0.4) 40%, 
              rgba(59, 130, 246, 0.4) 60%, 
              rgba(16, 185, 129, 0.4) 80%, 
              transparent 100%
            )`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Spectacular Logo */}
            <div className="flex items-center gap-4 flex-shrink-0 group">
              <a
                href="/"
                className="flex items-center gap-4 transition-all duration-500 hover:scale-105 group"
              >
                <div className="relative">
                  <div className="relative z-10">
                    <Logo />
                  </div>
                  {/* Animated glow effect */}
                  <div
                    className="absolute -inset-2 opacity-30 group-hover:opacity-60 transition-all duration-500 rounded-xl blur-xl"
                    style={{
                      background: `conic-gradient(
                        from 0deg,
                        #ff007f,
                        #8b5cf6,
                        #3b82f6,
                        #10b981,
                        #f59e0b,
                        #ef4444,
                        #ff007f
                      )`,
                      animation: "spin 8s linear infinite",
                    }}
                  />
                  {/* Inner glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-lg opacity-40 group-hover:opacity-70 blur transition-all duration-500" />
                </div>

                <div className="relative group/text">
                  <h1
                    className="text-3xl lg:text-4xl font-black tracking-tight"
                    style={{
                      background: `linear-gradient(135deg, 
                        #1f2937 0%, 
                        #374151 30%, 
                        #1f2937 60%, 
                        #4b5563 100%
                      )`,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Technum{" "}
                    <span
                      className="relative"
                      style={{
                        background: `linear-gradient(135deg, 
                          #ff007f 0%, 
                          #8b5cf6 25%, 
                          #3b82f6 50%, 
                          #8b5cf6 75%, 
                          #ff007f 100%
                        )`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        backgroundSize: "300% 300%",
                        animation: "gradientShift 4s ease-in-out infinite",
                      }}
                    >
                      Opus
                    </span>
                  </h1>
                  {/* Text shine effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover/text:opacity-100 transition-all duration-700"
                    style={{
                      animation: "shine 2s ease-in-out infinite",
                    }}
                  />
                </div>
              </a>
            </div>

            {/* Magnificent Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href="/"
                onMouseEnter={closeAllDropdowns}
                className="relative px-6 py-3 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 group overflow-hidden rounded-xl"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-4/5 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              </a>

              {/* Enhanced Company Dropdown */}
              <div className="relative" ref={companyRef}>
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  onMouseEnter={openCompanyDropdown}
                  className="relative px-6 py-3 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 group flex items-center gap-2 overflow-hidden rounded-xl"
                >
                  <span className="relative z-10">Company</span>
                  <svg
                    className={cn(
                      "w-4 h-4 transition-all duration-500 group-hover:text-purple-600",
                      isCompanyOpen ? "rotate-180 text-purple-600" : "",
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
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
                  <div
                    className={cn(
                      "absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-500",
                      isCompanyOpen ? "w-4/5" : "w-0 group-hover:w-4/5",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                </button>

                {/* Spectacular Dropdown */}
                <div
                  className={cn(
                    "absolute top-full left-0 mt-3 w-max transition-all duration-700 transform origin-top-left",
                    isCompanyOpen
                      ? "opacity-100 visible translate-y-0 scale-100"
                      : "opacity-0 invisible -translate-y-4 scale-95",
                  )}
                  onMouseLeave={closeAllDropdowns}
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(255,255,255,0.95) 0%, 
                        rgba(255,255,255,0.9) 100%
                      )
                    `,
                    backdropFilter: "blur(20px) saturate(180%)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "20px",
                    boxShadow: `
                      0 25px 50px -12px rgba(0,0,0,0.1),
                      0 0 0 1px rgba(255,255,255,0.2),
                      inset 0 1px 0 rgba(255,255,255,0.3)
                    `,
                  }}
                >
                  <div className="p-4">
                    <div className="text-sm font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200/50">
                      Company Information
                    </div>
                    <div className="space-y-1">
                      {companyLinks.map((link, index) => (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={closeAllDropdowns}
                          className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group hover:transform hover:scale-[1.02] whitespace-nowrap"
                          style={{
                            background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.5) 100%)`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `linear-gradient(135deg, 
                              rgba(255,255,255,0.8) 0%, 
                              rgba(255,255,255,0.4) 100%
                            )`;
                            e.currentTarget.style.boxShadow =
                              "0 8px 25px -8px rgba(0,0,0,0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.5) 100%)`;
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <div
                            className={cn(
                              "w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-all duration-300 group-hover:scale-110",
                              `bg-gradient-to-br ${link.gradient}`,
                            )}
                            style={{
                              boxShadow: "0 4px 15px -3px rgba(0,0,0,0.2)",
                            }}
                          >
                            {link.icon}
                          </div>
                          <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            {link.name}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  onMouseEnter={openServicesDropdown}
                  className="relative px-6 py-3 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 group flex items-center gap-2 overflow-hidden rounded-xl"
                >
                  <span className="relative z-10">Services</span>
                  <svg
                    className={cn(
                      "w-4 h-4 transition-all duration-500 group-hover:text-blue-600",
                      isServicesOpen ? "rotate-180 text-blue-600" : "",
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
                  <div
                    className={cn(
                      "absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 transition-all duration-500",
                      isServicesOpen ? "w-4/5" : "w-0 group-hover:w-4/5",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                </button>

                <div
                  className={cn(
                    "absolute top-full left-0 mt-3 w-max transition-all duration-700 transform origin-top-left",
                    isServicesOpen
                      ? "opacity-100 visible translate-y-0 scale-100"
                      : "opacity-0 invisible -translate-y-4 scale-95",
                  )}
                  onMouseLeave={closeAllDropdowns}
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(255,255,255,0.95) 0%, 
                        rgba(255,255,255,0.9) 100%
                      )
                    `,
                    backdropFilter: "blur(20px) saturate(180%)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "20px",
                    boxShadow: `
                      0 25px 50px -12px rgba(0,0,0,0.1),
                      0 0 0 1px rgba(255,255,255,0.2),
                      inset 0 1px 0 rgba(255,255,255,0.3)
                    `,
                  }}
                >
                  <div className="p-4">
                    <div className="text-sm font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200/50">
                      Our Services
                    </div>
                    <div className="space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={closeAllDropdowns}
                          className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group hover:transform hover:scale-[1.02] whitespace-nowrap"
                          style={{
                            background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.5) 100%)`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `linear-gradient(135deg, 
                              rgba(255,255,255,0.8) 0%, 
                              rgba(255,255,255,0.4) 100%
                            )`;
                            e.currentTarget.style.boxShadow =
                              "0 8px 25px -8px rgba(0,0,0,0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.5) 100%)`;
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <div
                            className={cn(
                              "w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-all duration-300 group-hover:scale-110",
                              `bg-gradient-to-br ${service.gradient}`,
                            )}
                            style={{
                              boxShadow: "0 4px 15px -3px rgba(0,0,0,0.2)",
                            }}
                          >
                            {service.icon}
                          </div>
                          <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            {service.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-200/50 mt-3 pt-3">
                      <Link
                        to="/services"
                        onClick={closeAllDropdowns}
                        className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl transition-all duration-300 hover:transform hover:scale-105 group whitespace-nowrap"
                        style={{
                          boxShadow: "0 8px 25px -8px rgba(59, 130, 246, 0.3)",
                        }}
                      >
                        View All Services
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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

              {/* Enhanced Partners Dropdown */}
              <div className="relative" ref={partnersRef}>
                <div className="flex items-center">
                  <a
                    href="/partners"
                    className="relative px-6 py-3 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 group overflow-hidden rounded-xl"
                    onMouseEnter={openPartnersDropdown}
                  >
                    <span className="relative z-10">Partners</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-500 via-green-500 to-emerald-500 group-hover:w-4/5 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                  </a>
                  <button
                    onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                    onMouseEnter={openPartnersDropdown}
                    className="ml-1 p-2 text-gray-700 hover:text-gray-900 transition-all duration-300"
                  >
                    <svg
                      className={cn(
                        "w-4 h-4 transition-all duration-500",
                        isPartnersOpen ? "rotate-180 text-teal-600" : "",
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
                    "absolute top-full left-0 mt-3 w-max transition-all duration-700 transform origin-top-left",
                    isPartnersOpen
                      ? "opacity-100 visible translate-y-0 scale-100"
                      : "opacity-0 invisible -translate-y-4 scale-95",
                  )}
                  onMouseLeave={closeAllDropdowns}
                  style={{
                    background: `
                      linear-gradient(135deg, 
                        rgba(255,255,255,0.95) 0%, 
                        rgba(255,255,255,0.9) 100%
                      )
                    `,
                    backdropFilter: "blur(20px) saturate(180%)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    borderRadius: "20px",
                    boxShadow: `
                      0 25px 50px -12px rgba(0,0,0,0.1),
                      0 0 0 1px rgba(255,255,255,0.2),
                      inset 0 1px 0 rgba(255,255,255,0.3)
                    `,
                  }}
                >
                  <div className="p-4">
                    <div className="text-sm font-bold text-gray-800 mb-3 pb-2 border-b border-gray-200/50">
                      Partner Categories
                    </div>
                    <div className="space-y-1">
                      {partners.map((partner) => (
                        <a
                          key={partner.name}
                          href={partner.href}
                          onClick={closeAllDropdowns}
                          className="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 group hover:transform hover:scale-[1.02] whitespace-nowrap"
                          style={{
                            background: `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.5) 100%)`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `linear-gradient(135deg, 
                              rgba(255,255,255,0.8) 0%, 
                              rgba(255,255,255,0.4) 100%
                            )`;
                            e.currentTarget.style.boxShadow =
                              "0 8px 25px -8px rgba(0,0,0,0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = `linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.5) 100%)`;
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <div
                            className={cn(
                              "w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-all duration-300 group-hover:scale-110",
                              `bg-gradient-to-br ${partner.gradient}`,
                            )}
                            style={{
                              boxShadow: "0 4px 15px -3px rgba(0,0,0,0.2)",
                            }}
                          >
                            {partner.icon}
                          </div>
                          <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            {partner.name}
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="border-t border-gray-200/50 mt-3 pt-3">
                      <a
                        href="/partners/view-all"
                        onClick={closeAllDropdowns}
                        className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-xl transition-all duration-300 hover:transform hover:scale-105 group whitespace-nowrap"
                        style={{
                          boxShadow: "0 8px 25px -8px rgba(20, 184, 166, 0.3)",
                        }}
                      >
                        View All Partners
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                className="relative px-6 py-3 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 group overflow-hidden rounded-xl"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 group-hover:w-4/5 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
              </a>
            </div>

            {/* Beautiful Mobile Menu Button */}
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
              className="lg:hidden relative p-4 text-gray-700 hover:text-gray-900 transition-all duration-300 group rounded-xl"
              aria-label="Toggle mobile menu"
              style={{ touchAction: "manipulation" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
              <svg
                className={cn(
                  "w-6 h-6 transition-all duration-700 relative z-10",
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

        {/* Spectacular Mobile Menu */}
        <div
          data-mobile-menu
          className={cn(
            "lg:hidden absolute left-4 right-4 top-24 transition-all duration-700 transform z-40",
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0 scale-100 max-h-96"
              : "opacity-0 invisible -translate-y-8 scale-95 max-h-0",
          )}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(255,255,255,0.95) 0%, 
                rgba(255,255,255,0.9) 100%
              )
            `,
            backdropFilter: "blur(25px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "24px",
            boxShadow: `
              0 25px 50px -12px rgba(0,0,0,0.15),
              0 0 0 1px rgba(255,255,255,0.2),
              inset 0 1px 0 rgba(255,255,255,0.3)
            `,
            touchAction: "pan-y",
            WebkitTouchCallout: "none",
          }}
        >
          <div className="max-h-80 overflow-y-auto">
            <div className="px-6 py-6 space-y-4">
              {/* Mobile Home Link */}
              <a
                href="/"
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5"
              >
                Home
              </a>

              {/* Mobile sections with enhanced styling */}
              {[
                {
                  title: "Company",
                  isOpen: isCompanyOpen,
                  setOpen: setIsCompanyOpen,
                  items: companyLinks,
                  gradient: "from-purple-500/5 to-pink-500/5",
                },
                {
                  title: "Services",
                  isOpen: isServicesOpen,
                  setOpen: setIsServicesOpen,
                  items: services,
                  gradient: "from-blue-500/5 to-teal-500/5",
                },
              ].map(({ title, isOpen, setOpen, items, gradient }) => (
                <div
                  key={title}
                  className={cn(
                    "rounded-2xl transition-all duration-500",
                    isOpen && `bg-gradient-to-r ${gradient}`,
                  )}
                >
                  <button
                    onClick={() => setOpen(!isOpen)}
                    className={cn(
                      "flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 p-4 rounded-2xl",
                      isOpen && "text-gray-900",
                    )}
                    style={{
                      touchAction: "manipulation",
                      background: isOpen
                        ? `linear-gradient(135deg, ${gradient.split(" ")[1]} 0%, ${gradient.split(" ")[3]} 100%)`
                        : "transparent",
                    }}
                  >
                    {title}
                    <svg
                      className={cn(
                        "w-5 h-5 transition-all duration-500",
                        isOpen ? "rotate-180" : "",
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
                      "ml-4 space-y-2 transition-all duration-700 overflow-hidden",
                      isOpen
                        ? "max-h-80 opacity-100 pb-4"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    {items.map((item) => (
                      <a
                        key={item.name}
                        href={
                          title === "Services" ? (item as any).href : item.href
                        }
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 py-3 px-4 text-gray-600 hover:text-gray-900 transition-all duration-300 rounded-xl hover:bg-white/50"
                      >
                        <div
                          className={cn(
                            "w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold",
                            `bg-gradient-to-br ${(item as any).gradient}`,
                          )}
                        >
                          {(item as any).icon}
                        </div>
                        <div className="text-sm font-medium">{item.name}</div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile Partners Section */}
              <div
                className={cn(
                  "rounded-2xl transition-all duration-500",
                  isPartnersOpen &&
                    "bg-gradient-to-r from-teal-500/5 to-green-500/5",
                )}
              >
                <div className="flex items-center justify-between">
                  <a
                    href="/partners"
                    onClick={closeMobileMenu}
                    className="flex-1 text-left text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 p-4 rounded-2xl"
                  >
                    Partners
                  </a>
                  <button
                    onClick={() => setIsPartnersOpen(!isPartnersOpen)}
                    className={cn(
                      "p-4 text-gray-700 hover:text-gray-900 transition-all duration-300 rounded-2xl",
                      isPartnersOpen && "text-gray-900",
                    )}
                    style={{ touchAction: "manipulation" }}
                  >
                    <svg
                      className={cn(
                        "w-5 h-5 transition-all duration-500",
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
                    "ml-4 space-y-2 transition-all duration-700 overflow-hidden",
                    isPartnersOpen
                      ? "max-h-64 opacity-100 pb-4"
                      : "max-h-0 opacity-0",
                  )}
                >
                  {partners.map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.href}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 py-3 px-4 text-gray-600 hover:text-gray-900 transition-all duration-300 rounded-xl hover:bg-white/50"
                    >
                      <div
                        className={cn(
                          "w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold",
                          `bg-gradient-to-br ${partner.gradient}`,
                        )}
                      >
                        {partner.icon}
                      </div>
                      <div className="text-sm font-medium">{partner.name}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Link */}
              <a
                href="/contact"
                onClick={closeMobileMenu}
                className="block text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-pink-500/5 hover:to-rose-500/5"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mesmerizing Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 group"
        style={{
          background: `
            conic-gradient(
              from 0deg,
              #ff007f,
              #8b5cf6,
              #3b82f6,
              #10b981,
              #f59e0b,
              #ef4444,
              #ff007f
            )
          `,
          animation: "spin 8s linear infinite",
        }}
      >
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-50 transition-colors duration-300">
          <svg
            className="w-6 h-6 text-gray-700 group-hover:-translate-y-1 transition-transform duration-300"
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
        </div>
      </button>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
