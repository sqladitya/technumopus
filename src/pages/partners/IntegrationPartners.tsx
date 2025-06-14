import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const IntegrationPartners = () => {
  const integrationPartners = [
    {
      name: "Zebra Technologies",
      logo: (
        <svg viewBox="0 0 120 50" className="w-20 h-8">
          <g>
            <rect x="15" y="15" width="35" height="4" fill="#000" />
            <rect x="20" y="21" width="25" height="4" fill="#000" />
            <rect x="15" y="27" width="35" height="4" fill="#000" />
            <rect x="20" y="33" width="25" height="4" fill="#000" />
          </g>
          <text
            x="60"
            y="28"
            fill="#000"
            fontSize="12"
            fontFamily="Arial"
            fontWeight="bold"
          >
            ZEBRA
          </text>
          <text x="60" y="40" fill="#666" fontSize="8" fontFamily="Arial">
            TECHNOLOGIES
          </text>
        </svg>
      ),
      tier: "Premier Partner",
      description:
        "Leading provider of enterprise mobile computing, data capture, radio frequency identification (RFID) and real-time location solutions.",
      specialties: [
        "Mobile Computing Solutions",
        "Barcode & RFID Systems",
        "Data Capture Technology",
        "Warehouse Management",
        "Asset Tracking",
        "Workforce Management",
      ],
      solutions: [
        "MC3300 Mobile Computer",
        "TC8000 Touch Computer",
        "ZT610 Industrial Printer",
        "DS3600 Scanner Series",
        "FX7500 RFID Reader",
        "RTLS Solutions",
      ],
      industries: [
        "Retail & E-commerce",
        "Manufacturing",
        "Transportation & Logistics",
        "Healthcare",
        "Government",
        "Hospitality",
      ],
    },
    {
      name: "Honeywell",
      logo: (
        <svg viewBox="0 0 120 50" className="w-20 h-8">
          <text
            x="10"
            y="30"
            fill="#ED1C24"
            fontSize="14"
            fontFamily="Arial"
            fontWeight="bold"
          >
            Honeywell
          </text>
        </svg>
      ),
      tier: "Gold Partner",
      description:
        "Global technology company providing industry-specific solutions including mobile computers, barcode scanners, and voice-directed workflow solutions.",
      specialties: [
        "Voice-Directed Solutions",
        "Mobile Computing Devices",
        "Scanning & Mobility",
        "Workplace Safety Tech",
        "Industrial Automation",
        "Connected Buildings",
      ],
      solutions: [
        "Vocollect Voice Solutions",
        "CN80 Mobile Computer",
        "CT40 Mobile Computer",
        "Granit Scanners",
        "Dolphin Mobile Computers",
        "Safety & Productivity Solutions",
      ],
      industries: [
        "Warehousing & Distribution",
        "Manufacturing",
        "Retail",
        "Healthcare",
        "Field Service",
        "Cold Storage",
      ],
    },
    {
      name: "Motorola Solutions",
      logo: (
        <svg viewBox="0 0 120 50" className="w-20 h-8">
          <text
            x="10"
            y="30"
            fill="#0071CE"
            fontSize="12"
            fontFamily="Arial"
            fontWeight="bold"
          >
            MOTOROLA
          </text>
          <text x="10" y="42" fill="#666" fontSize="8" fontFamily="Arial">
            SOLUTIONS
          </text>
        </svg>
      ),
      tier: "Authorized Partner",
      description:
        "Mission-critical communications and analytics company helping organizations be their best in moments that matter.",
      specialties: [
        "Two-Way Radio Systems",
        "Video Security Solutions",
        "Command Center Software",
        "Mobile Applications",
        "Analytics Platform",
        "Public Safety Technology",
      ],
      solutions: [
        "MOTOTRBO Radio Systems",
        "APX Mission Critical",
        "CommandCentral Software",
        "VideoManager Platform",
        "Emergency CallWorks",
        "Smart Public Safety",
      ],
      industries: [
        "Public Safety",
        "Government",
        "Education",
        "Healthcare",
        "Manufacturing",
        "Transportation",
      ],
    },
    {
      name: "Datalogic",
      logo: (
        <svg viewBox="0 0 120 50" className="w-20 h-8">
          <text
            x="10"
            y="30"
            fill="#E31E24"
            fontSize="12"
            fontFamily="Arial"
            fontWeight="bold"
          >
            Datalogic
          </text>
        </svg>
      ),
      tier: "Certified Partner",
      description:
        "Global leader in automatic data capture and factory automation markets, specialized in designing and producing barcode readers and mobile computers.",
      specialties: [
        "Automatic Data Capture",
        "Machine Vision Systems",
        "Mobile Computers",
        "Fixed Barcode Readers",
        "Laser Marking Systems",
        "Industrial Automation",
      ],
      solutions: [
        "Skorpio X5 Mobile Computer",
        "Memor 35 HC Mobile Computer",
        "Matrix Series Imagers",
        "PowerScan Scanners",
        "Magellan Retail Scanners",
        "IMPACT Software Platform",
      ],
      industries: [
        "Retail",
        "Manufacturing",
        "Transportation & Logistics",
        "Healthcare",
        "Postal Services",
        "Banking & Finance",
      ],
    },
    {
      name: "Intermec (Honeywell)",
      logo: (
        <svg viewBox="0 0 120 50" className="w-20 h-8">
          <text
            x="10"
            y="30"
            fill="#005B96"
            fontSize="12"
            fontFamily="Arial"
            fontWeight="bold"
          >
            intermec
          </text>
        </svg>
      ),
      tier: "Legacy Partner",
      description:
        "Now part of Honeywell, Intermec provides rugged mobile computers, barcode printers, and automatic identification solutions for challenging environments.",
      specialties: [
        "Rugged Mobile Computing",
        "Industrial Barcode Printers",
        "Vehicle-Mount Computers",
        "Media & Ribbons",
        "RFID Solutions",
        "Professional Services",
      ],
      solutions: [
        "CN75 Ultra-Rugged Mobile",
        "PC43 Desktop Printer",
        "PM45 Industrial Printer",
        "CV61 Vehicle Computer",
        "SmartSystems Software",
        "PrintSet Software",
      ],
      industries: [
        "Warehousing",
        "Manufacturing",
        "Field Service",
        "Transportation",
        "Public Safety",
        "Government",
      ],
    },
    {
      name: "Impinj",
      logo: (
        <svg viewBox="0 0 120 50" className="w-20 h-8">
          <text
            x="10"
            y="30"
            fill="#1F4E79"
            fontSize="14"
            fontFamily="Arial"
            fontWeight="bold"
          >
            impinj
          </text>
        </svg>
      ),
      tier: "Technology Partner",
      description:
        "Leading provider of RAIN RFID solutions enabling businesses and people to identify, locate, authenticate, and engage every item with a digital identity.",
      specialties: [
        "RAIN RFID Technology",
        "Item Intelligence Platform",
        "RFID Readers & Gateways",
        "RFID Tags & Inlays",
        "Connectivity Solutions",
        "Partner Integrations",
      ],
      solutions: [
        "ItemSense Software Platform",
        "Speedway RFID Readers",
        "xSpan Gateway Platform",
        "Monza RFID Tag Chips",
        "Industrial RFID Tags",
        "Retail RFID Solutions",
      ],
      industries: [
        "Retail & Apparel",
        "Healthcare & Life Sciences",
        "Food & Agriculture",
        "Industrial IoT",
        "Aviation",
        "Automotive",
      ],
    },
  ];

  const integrationBenefits = [
    {
      title: "Real-time Visibility",
      description:
        "Track assets, inventory, and workforce in real-time across your entire operation",
      icon: "eye",
      color: "blue",
    },
    {
      title: "Automated Workflows",
      description:
        "Streamline processes with automated data capture and intelligent routing",
      icon: "automation",
      color: "green",
    },
    {
      title: "Enhanced Accuracy",
      description:
        "Eliminate manual errors with advanced scanning and verification technology",
      icon: "target",
      color: "pink",
    },
    {
      title: "Mobility Solutions",
      description:
        "Empower workers with rugged mobile devices for any environment",
      icon: "mobile",
      color: "orange",
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-indigo-900 via-purple-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Integration Partners
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Seamlessly connecting systems and processes with cutting-edge
              integration solutions from leading technology partners
            </p>
          </div>

          {/* Integration Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                2000+
              </div>
              <div className="text-white/80">Systems Integrated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                98%
              </div>
              <div className="text-white/80">Data Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                60%
              </div>
              <div className="text-white/80">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                24/7
              </div>
              <div className="text-white/80">System Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Integration Advantages
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto">
                Transform your operations with intelligent integration solutions
                that connect people, processes, and technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {integrationBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center"
                >
                  <div
                    className={`w-16 h-16 bg-${benefit.color}-gradient rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {benefit.icon === "eye" && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      )}
                      {benefit.icon === "automation" && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      )}
                      {benefit.icon === "target" && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      )}
                      {benefit.icon === "mobile" && (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-tech-text-medium text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Partners Grid */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Our Integration Partners
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto">
                Working with industry leaders to deliver comprehensive
                integration solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrationPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8">
                    {/* Partner Header */}
                    <div className="text-center mb-6">
                      <div className="flex justify-center mb-4">
                        {partner.logo}
                      </div>
                      <h3 className="text-xl font-bold text-tech-text-dark mb-2">
                        {partner.name}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-600 text-sm rounded-full font-semibold">
                        {partner.tier}
                      </span>
                    </div>

                    <p className="text-tech-text-medium mb-6 leading-relaxed text-center">
                      {partner.description}
                    </p>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="font-bold text-tech-text-dark mb-3">
                        Specialties
                      </h4>
                      <div className="space-y-2">
                        {partner.specialties
                          .slice(0, 4)
                          .map((specialty, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                              <span className="text-sm text-tech-text-medium">
                                {specialty}
                              </span>
                            </div>
                          ))}
                        {partner.specialties.length > 4 && (
                          <div className="text-sm text-indigo-600 font-medium">
                            +{partner.specialties.length - 4} more specialties
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Key Solutions */}
                    <div className="mb-6">
                      <h4 className="font-bold text-tech-text-dark mb-3">
                        Key Solutions
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.solutions.slice(0, 3).map((solution, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-tech-text-medium text-xs rounded-full"
                          >
                            {solution}
                          </span>
                        ))}
                        {partner.solutions.length > 3 && (
                          <span className="px-2 py-1 bg-indigo-500/10 text-indigo-600 text-xs rounded-full">
                            +{partner.solutions.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Industries */}
                    <div className="mb-6">
                      <h4 className="font-bold text-tech-text-dark mb-3">
                        Target Industries
                      </h4>
                      <div className="text-sm text-tech-text-medium">
                        {partner.industries.slice(0, 3).join(", ")}
                        {partner.industries.length > 3 &&
                          ` +${partner.industries.length - 3} more`}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Explore Solutions
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Integration Process */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Our Integration Process
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto">
                A proven methodology for successful system integration and
                deployment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Assessment
                </h3>
                <p className="text-tech-text-medium">
                  Analyze current systems and identify integration requirements
                  and opportunities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Design
                </h3>
                <p className="text-tech-text-medium">
                  Create comprehensive integration architecture and detailed
                  implementation plan.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Implementation
                </h3>
                <p className="text-tech-text-medium">
                  Deploy and configure integration solutions with minimal
                  business disruption.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Optimization
                </h3>
                <p className="text-tech-text-medium">
                  Monitor, tune, and optimize integrated systems for peak
                  performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* CTA Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Ready to Integrate Your Systems?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Transform your operations with seamless integration solutions
              tailored to your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Integration Project
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-indigo-500 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                View Integration Services
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default IntegrationPartners;
