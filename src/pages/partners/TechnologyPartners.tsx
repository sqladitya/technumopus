import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const TechnologyPartners = () => {
  const technologyPartners = [
    {
      name: "Cisco",
      logo: (
        <svg viewBox="0 0 120 50" className="w-20 h-8">
          <g fill="#1BA0D7">
            <rect x="15" y="20" width="3" height="15" rx="1.5" />
            <rect x="21" y="17" width="3" height="21" rx="1.5" />
            <rect x="27" y="15" width="3" height="25" rx="1.5" />
            <rect x="33" y="13" width="3" height="29" rx="1.5" />
            <rect x="39" y="17" width="3" height="21" rx="1.5" />
            <rect x="45" y="20" width="3" height="15" rx="1.5" />
            <rect x="51" y="23" width="3" height="9" rx="1.5" />
          </g>
          <text
            x="65"
            y="30"
            fill="#1BA0D7"
            fontSize="16"
            fontFamily="Arial"
            fontWeight="bold"
          >
            cisco
          </text>
        </svg>
      ),
      tier: "Gold Partner",
      description:
        "Leading networking and cybersecurity solutions provider enabling secure connections and digital transformation.",
      specialties: [
        "Network Infrastructure",
        "Cybersecurity Solutions",
        "Collaboration Tools",
        "Data Center Technologies",
        "SD-WAN Solutions",
        "Wireless Technologies",
      ],
      products: [
        "Cisco Catalyst Switches",
        "Cisco ASR Routers",
        "Cisco Firepower Security",
        "Cisco Webex",
        "Cisco DNA Center",
        "Cisco Meraki Cloud",
      ],
      benefits: [
        "99.9% network uptime guarantee",
        "24/7 technical support",
        "Advanced threat protection",
        "Scalable infrastructure solutions",
      ],
    },
    {
      name: "Dell Technologies",
      logo: (
        <svg viewBox="0 0 120 50" className="w-20 h-8">
          <g>
            <circle cx="25" cy="25" r="18" fill="#007DB8" />
            <text
              x="25"
              y="30"
              fill="white"
              fontSize="10"
              fontFamily="Arial"
              fontWeight="bold"
              textAnchor="middle"
            >
              DELL
            </text>
          </g>
          <text
            x="50"
            y="22"
            fill="#007DB8"
            fontSize="9"
            fontFamily="Arial"
            fontWeight="600"
          >
            Technologies
          </text>
          <text x="50" y="33" fill="#666" fontSize="7" fontFamily="Arial">
            Trusted. Worldwide.
          </text>
        </svg>
      ),
      tier: "Premier Partner",
      description:
        "Comprehensive technology solutions spanning servers, storage, networking, and end-user computing for enterprises.",
      specialties: [
        "Server Infrastructure",
        "Storage Solutions",
        "Hyperconverged Infrastructure",
        "Desktop & Laptop Solutions",
        "Workstation Technology",
        "Edge Computing",
      ],
      products: [
        "Dell PowerEdge Servers",
        "Dell PowerStore Storage",
        "Dell VxRail HCI",
        "Dell OptiPlex Desktops",
        "Dell Precision Workstations",
        "Dell EMC Unity Storage",
      ],
      benefits: [
        "End-to-end infrastructure solutions",
        "ProSupport enterprise services",
        "Advanced lifecycle management",
        "Energy-efficient designs",
      ],
    },
    {
      name: "HP Enterprise",
      logo: (
        <svg viewBox="0 0 120 50" className="w-20 h-8">
          <g>
            <circle cx="25" cy="25" r="15" fill="#0096D6" />
            <text
              x="25"
              y="30"
              fill="white"
              fontSize="16"
              fontFamily="Arial"
              fontWeight="bold"
              textAnchor="middle"
            >
              hp
            </text>
          </g>
          <text
            x="50"
            y="20"
            fill="#0096D6"
            fontSize="9"
            fontFamily="Arial"
            fontWeight="500"
          >
            Hewlett-Packard
          </text>
          <text x="50" y="32" fill="#666" fontSize="8" fontFamily="Arial">
            Enterprise
          </text>
        </svg>
      ),
      tier: "Gold Partner",
      description:
        "Edge-to-cloud platform-as-a-service company providing intelligent solutions for hybrid cloud environments.",
      specialties: [
        "Hybrid Cloud Solutions",
        "Edge Computing",
        "AI & Analytics",
        "High Performance Computing",
        "Storage & Data Management",
        "Network Management",
      ],
      products: [
        "HPE ProLiant Servers",
        "HPE SimpliVity HCI",
        "HPE Primera Storage",
        "HPE Aruba Networking",
        "HPE GreenLake Cloud",
        "HPE Apollo Systems",
      ],
      benefits: [
        "Consumption-based IT models",
        "Autonomous infrastructure",
        "Edge-to-cloud solutions",
        "AI-driven insights",
      ],
    },
    {
      name: "Lenovo",
      logo: "/assets/lenovo-logo.svg",
      tier: "Authorized Partner",
      description:
        "Global technology leader providing innovative hardware solutions for modern workplaces and data centers.",
      specialties: [
        "ThinkPad Laptops",
        "ThinkCentre Desktops",
        "ThinkStation Workstations",
        "ThinkSystem Servers",
        "Storage Solutions",
        "Smart Devices",
      ],
      products: [
        "ThinkPad X1 Series",
        "ThinkCentre M Series",
        "ThinkStation P Series",
        "ThinkSystem SR Series",
        "ThinkAgile Solutions",
        "Legion Gaming Systems",
      ],
      benefits: [
        "Reliable business computing",
        "Award-winning designs",
        "Enterprise-grade security",
        "Comprehensive warranty support",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/20 via-gray-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Technology Partners
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Collaborating with industry leaders to deliver enterprise-grade
              hardware, infrastructure, and technology solutions that power your
              business
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                10,000+
              </div>
              <div className="text-white/80">Devices Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                99.5%
              </div>
              <div className="text-white/80">Hardware Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                24/7
              </div>
              <div className="text-white/80">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {technologyPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-300"
                >
                  <div className="p-8">
                    {/* Partner Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        {typeof partner.logo === "string" ? (
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-16 h-8 object-contain"
                          />
                        ) : (
                          <div className="flex items-center">
                            {partner.logo}
                          </div>
                        )}
                        <div>
                          <h3 className="text-2xl font-bold text-tech-text-dark">
                            {partner.name}
                          </h3>
                          <span className="inline-block px-3 py-1 bg-tech-primary/10 text-tech-primary text-sm rounded-full font-semibold">
                            {partner.tier}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-tech-text-medium mb-6 leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="font-bold text-tech-text-dark mb-3">
                        Specialties
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {partner.specialties.map((specialty, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-tech-primary rounded-full flex-shrink-0" />
                            <span className="text-sm text-tech-text-medium">
                              {specialty}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Products */}
                    <div className="mb-6">
                      <h4 className="font-bold text-tech-text-dark mb-3">
                        Key Products
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.products.slice(0, 4).map((product, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-tech-text-medium text-xs rounded-full"
                          >
                            {product}
                          </span>
                        ))}
                        {partner.products.length > 4 && (
                          <span className="px-3 py-1 bg-tech-primary/10 text-tech-primary text-xs rounded-full">
                            +{partner.products.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-bold text-tech-text-dark mb-3">
                        Partnership Benefits
                      </h4>
                      <div className="space-y-2">
                        {partner.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <svg
                              className="w-4 h-4 text-tech-primary mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm text-tech-text-medium">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full px-6 py-3 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      View Solutions
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Technology Benefits */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Enterprise Technology Advantages
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto">
                Our technology partnerships deliver proven, enterprise-grade
                solutions with comprehensive support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
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
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Scalable Infrastructure
                </h3>
                <p className="text-tech-text-medium text-sm">
                  Future-proof technology that grows with your business needs
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-green-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Enterprise Security
                </h3>
                <p className="text-tech-text-medium text-sm">
                  Built-in security features and compliance frameworks
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
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
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  High Performance
                </h3>
                <p className="text-tech-text-medium text-sm">
                  Optimized hardware for maximum efficiency and speed
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-orange-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  24/7 Support
                </h3>
                <p className="text-tech-text-medium text-sm">
                  Round-the-clock technical support and maintenance
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* CTA Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Upgrade Your Technology Infrastructure
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Let our experts help you choose the right technology solutions for
              your business requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Technology Consultation
              </a>
              <a
                href="/services/hardware-infrastructure"
                className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
              >
                View Infrastructure Services
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default TechnologyPartners;
