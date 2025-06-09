import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const Partners = () => {
  const partnerCategories = [
    {
      title: "Cloud Partners",
      description:
        "Leading cloud platform providers for scalable infrastructure",
      href: "/partners/cloud-partners",
      icon: (
        <svg
          className="w-12 h-12"
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
      partners: ["AWS", "Microsoft Azure", "Google Cloud Platform"],
      benefits: [
        "Enterprise-grade cloud solutions",
        "Multi-cloud expertise",
        "Cost optimization strategies",
        "24/7 cloud support",
      ],
    },
    {
      title: "Technology Partners",
      description: "Industry-leading hardware and infrastructure solutions",
      href: "/partners/technology-partners",
      icon: (
        <svg
          className="w-12 h-12"
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
      partners: ["Cisco", "Dell Technologies", "HP Enterprise", "Lenovo"],
      benefits: [
        "Enterprise hardware solutions",
        "Network infrastructure",
        "Server & storage systems",
        "Professional services",
      ],
    },
    {
      title: "Security Partners",
      description: "Advanced cybersecurity and threat protection solutions",
      href: "/partners/security-partners",
      icon: (
        <svg
          className="w-12 h-12"
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
      partners: [
        "Palo Alto Networks",
        "SentinelOne",
        "CrowdStrike",
        "Fortinet",
      ],
      benefits: [
        "Next-gen firewall solutions",
        "Endpoint protection",
        "Threat intelligence",
        "Security monitoring",
      ],
    },
    {
      title: "Integration Partners",
      description: "Specialized solutions for seamless system integration",
      href: "/partners/integration-partners",
      icon: (
        <svg
          className="w-12 h-12"
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
      partners: [
        "Zebra Technologies",
        "Honeywell",
        "Motorola Solutions",
        "Datalogic",
      ],
      benefits: [
        "IoT and mobility solutions",
        "Barcode & RFID systems",
        "Data capture solutions",
        "Warehouse automation",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/20 via-purple-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Partners
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge
            solutions and exceptional value to our clients
          </p>
        </div>
      </section>

      {/* Partner Categories */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Partnership Categories
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto leading-relaxed">
                Our strategic partnerships with leading technology providers
                enable us to offer comprehensive solutions across all aspects of
                enterprise technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {partnerCategories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-tech-gradient rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-tech-text-dark mb-3 group-hover:text-tech-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-tech-text-medium mb-4 leading-relaxed">
                        {category.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-tech-text-dark mb-2">
                          Key Partners:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.partners.map((partner, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-tech-primary/10 text-tech-primary text-sm rounded-full"
                            >
                              {partner}
                            </span>
                          ))}
                        </div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {category.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-tech-text-medium"
                          >
                            <div className="w-2 h-2 bg-tech-primary rounded-full flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={category.href}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        View Partners
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
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Partnership Benefits */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
                Partnership Benefits
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Our strategic alliances provide you with access to the best
                technologies and expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Certified Expertise
                </h3>
                <p className="text-tech-text-medium">
                  Our team holds premier certifications from all major
                  technology partners
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Cost Savings
                </h3>
                <p className="text-tech-text-medium">
                  Partner discounts and volume pricing passed directly to our
                  clients
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                  Latest Technology
                </h3>
                <p className="text-tech-text-medium">
                  Early access to cutting-edge solutions and beta programs
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                <p className="text-tech-text-medium">
                  Extended support networks and escalation paths for critical
                  issues
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Become a Partner */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Interested in Partnering with Us?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              We're always looking for strategic partnerships that bring value
              to our clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Partner With Us
              </a>
              <a
                href="/about"
                className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default Partners;
