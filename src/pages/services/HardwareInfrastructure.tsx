import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const HardwareInfrastructure = () => {
  const hardwareServices = [
    {
      title: "Server & Storage Solutions",
      description:
        "Enterprise-grade servers and storage systems designed for maximum performance and reliability",
      features: [
        "High-performance server configurations",
        "Scalable storage arrays (SAN/NAS)",
        "Backup and disaster recovery systems",
        "Virtualization infrastructure",
      ],
    },
    {
      title: "Network Infrastructure",
      description:
        "Robust networking solutions that ensure secure and efficient data flow across your organization",
      features: [
        "Enterprise switches and routers",
        "Wireless infrastructure deployment",
        "Network security appliances",
        "Load balancing and optimization",
      ],
    },
    {
      title: "Data Center Solutions",
      description:
        "Complete data center design, build, and management services for optimal IT operations",
      features: [
        "Data center design and planning",
        "Power and cooling systems",
        "Physical security infrastructure",
        "Environmental monitoring",
      ],
    },
    {
      title: "Hardware Deployment",
      description:
        "Professional installation, configuration, and deployment of hardware infrastructure",
      features: [
        "Site survey and preparation",
        "Hardware installation and setup",
        "Configuration and testing",
        "Documentation and training",
      ],
    },
  ];

  const hardwarePartners = [
    {
      name: "Dell Technologies",
      products: [
        "PowerEdge Servers",
        "PowerStore Storage",
        "PowerSwitch Networking",
      ],
      specialty: "Enterprise Infrastructure",
    },
    {
      name: "HP Enterprise",
      products: ["ProLiant Servers", "Primera Storage", "Aruba Networking"],
      specialty: "Hybrid Cloud Solutions",
    },
    {
      name: "Cisco Systems",
      products: ["UCS Servers", "Catalyst Switches", "ASA Firewalls"],
      specialty: "Network Infrastructure",
    },
    {
      name: "Lenovo",
      products: [
        "ThinkSystem Servers",
        "ThinkAgile Solutions",
        "Storage Arrays",
      ],
      specialty: "AI & HPC Solutions",
    },
  ];

  const deploymentProcess = [
    {
      step: "1",
      title: "Assessment & Planning",
      description:
        "Comprehensive evaluation of current infrastructure and future requirements",
    },
    {
      step: "2",
      title: "Design & Procurement",
      description:
        "Custom hardware design and procurement of optimal solutions",
    },
    {
      step: "3",
      title: "Installation & Configuration",
      description:
        "Professional installation and configuration of all hardware components",
    },
    {
      step: "4",
      title: "Testing & Support",
      description:
        "Thorough testing and ongoing support for optimal performance",
    },
  ];

  const solutionTypes = [
    {
      title: "Compute Infrastructure",
      description: "High-performance servers and compute solutions",
      components: [
        "Blade Servers",
        "Rack Servers",
        "Hyper-Converged Infrastructure",
        "GPU Computing",
      ],
    },
    {
      title: "Storage Systems",
      description: "Scalable and reliable data storage solutions",
      components: [
        "All-Flash Arrays",
        "Hybrid Storage",
        "Backup Appliances",
        "Archive Systems",
      ],
    },
    {
      title: "Networking Equipment",
      description: "Advanced networking for seamless connectivity",
      components: [
        "Core Switches",
        "Access Points",
        "Firewalls",
        "Load Balancers",
      ],
    },
    {
      title: "Security Hardware",
      description: "Physical and network security infrastructure",
      components: [
        "Next-Gen Firewalls",
        "IPS/IDS Systems",
        "VPN Appliances",
        "Security Cameras",
      ],
    },
  ];

  const industries = [
    "Financial Services",
    "Healthcare Systems",
    "Manufacturing",
    "Education",
    "Government",
    "Retail & E-commerce",
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/20 via-purple-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hardware Infrastructure Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Complete hardware solutions and deployment services from
                procurement to installation, ensuring optimal performance and
                reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-tech-primary rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Get Hardware Quote
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Solutions
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-tech-primary/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <SectionBackground variant="light">
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                Our Hardware Infrastructure Services
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                From design to deployment, we provide comprehensive hardware
                infrastructure services that power your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {hardwareServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-tech-text-medium mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-tech-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-tech-text-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Solution Types */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                Infrastructure Solution Types
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                We provide complete hardware solutions across all infrastructure
                components to meet your specific business requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutionTypes.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-tech-text-medium mb-6">
                    {solution.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-tech-text-dark mb-3">
                      Key Components:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.components.map((component, componentIndex) => (
                        <div
                          key={componentIndex}
                          className="text-sm text-tech-text-medium bg-gray-50 rounded px-3 py-1"
                        >
                          {component}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Hardware Partners */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                Trusted Hardware Partners
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                We partner with leading hardware manufacturers to provide
                best-in-class solutions for your infrastructure needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {hardwarePartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <h3 className="text-xl font-bold text-tech-text-dark mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-tech-primary font-semibold mb-4 text-sm">
                    {partner.specialty}
                  </p>
                  <div className="space-y-2">
                    {partner.products.map((product, productIndex) => (
                      <div
                        key={productIndex}
                        className="text-sm text-tech-text-medium bg-gray-50 rounded px-3 py-1"
                      >
                        {product}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Deployment Process */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                Our Deployment Process
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                A systematic approach to hardware deployment that ensures
                minimal disruption and maximum efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deploymentProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-tech-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                    {process.title}
                  </h3>
                  <p className="text-tech-text-medium">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Industries */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Our hardware infrastructure solutions are designed to meet the
                specific requirements of various industries and compliance
                standards.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="text-lg font-semibold text-tech-text-dark">
                    {industry}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Case Study */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-tech-text-dark mb-6">
                    Success Story: Data Center Modernization
                  </h2>
                  <p className="text-tech-text-medium mb-6">
                    We completely modernized a regional bank's data center
                    infrastructure, implementing redundant systems and improving
                    performance while maintaining 100% uptime during the
                    transition.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-3xl font-bold text-tech-primary mb-2">
                        50%
                      </div>
                      <div className="text-tech-text-medium">
                        Power Reduction
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-tech-primary mb-2">
                        100%
                      </div>
                      <div className="text-tech-text-medium">
                        Uptime Maintained
                      </div>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-tech-primary text-white rounded-lg font-semibold hover:bg-tech-primary-dark transition-all duration-300"
                  >
                    Discuss Your Project
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-tech-primary/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-24 h-24 text-tech-primary mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                      </svg>
                      <div className="text-lg font-semibold text-tech-text-dark">
                        Modern Data Center
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's design and deploy a hardware infrastructure solution that
            meets your performance, reliability, and budget requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-tech-primary text-white rounded-lg font-semibold hover:bg-tech-primary-dark transition-all duration-300 hover:scale-105"
            >
              Request Consultation
            </a>
            <a
              href="/about"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn About Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HardwareInfrastructure;
