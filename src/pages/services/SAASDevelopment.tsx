import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const SAASDevelopment = () => {
  const saasServices = [
    {
      title: "Multi-Tenant Architecture",
      description:
        "Scalable SaaS platforms with secure tenant isolation and shared infrastructure",
      features: [
        "Tenant data isolation",
        "Shared infrastructure optimization",
        "Custom tenant configurations",
        "Resource allocation management",
      ],
    },
    {
      title: "API Development & Integration",
      description:
        "Robust RESTful and GraphQL APIs with comprehensive third-party integrations",
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "Third-party API integrations",
        "Rate limiting and security",
      ],
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Auto-scaling cloud infrastructure that grows with your business needs",
      features: [
        "Auto-scaling capabilities",
        "Load balancing",
        "Database optimization",
        "CDN implementation",
      ],
    },
    {
      title: "Security & Compliance",
      description:
        "Enterprise-grade security measures and compliance with industry standards",
      features: [
        "OAuth 2.0 and JWT authentication",
        "Data encryption at rest and in transit",
        "SOC 2 Type II compliance",
        "GDPR compliance frameworks",
      ],
    },
  ];

  const industries = [
    "Financial Technology",
    "Healthcare & Medical",
    "E-commerce & Retail",
    "Education Technology",
    "Human Resources",
    "Marketing & Analytics",
  ];

  const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "TypeScript",
    "PostgreSQL & MongoDB",
    "AWS & Azure",
    "Docker & Kubernetes",
    "Redis & ElasticSearch",
    "Stripe & Payment APIs",
  ];

  const developmentProcess = [
    {
      step: "1",
      title: "Discovery & Planning",
      description:
        "Understanding your business requirements and defining the technical roadmap",
    },
    {
      step: "2",
      title: "Architecture Design",
      description:
        "Creating scalable, secure, and maintainable system architecture",
    },
    {
      step: "3",
      title: "Development & Testing",
      description:
        "Agile development with continuous testing and quality assurance",
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "Production deployment with ongoing monitoring and support",
    },
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
                SAAS Platform Development
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Build powerful, scalable SaaS platforms that grow with your
                business. Modern architecture, robust security, and seamless
                user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-tech-primary rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Capabilities
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
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
                Our SAAS Development Services
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                From concept to deployment, we provide end-to-end SaaS
                development services that deliver exceptional user experiences
                and business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {saasServices.map((service, index) => (
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

      {/* Development Process */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
                and long-term platform success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developmentProcess.map((process, index) => (
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

      {/* Technology Stack */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                Technology Stack
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                We use cutting-edge technologies to build robust, scalable, and
                secure SaaS platforms.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="text-lg font-semibold text-tech-text-dark">
                    {tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Industries Served */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Our SaaS development expertise spans across multiple industries,
                delivering tailored solutions for unique business needs.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white transition-all duration-300 border border-white/20"
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
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-gradient-to-br from-tech-primary/5 to-purple-600/5 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-tech-text-dark mb-6">
                    Success Story: FinTech SaaS Platform
                  </h2>
                  <p className="text-tech-text-medium mb-6">
                    We developed a comprehensive financial management SaaS
                    platform that now serves over 10,000 businesses worldwide
                    with real-time analytics, automated reporting, and seamless
                    integrations.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-3xl font-bold text-tech-primary mb-2">
                        300%
                      </div>
                      <div className="text-tech-text-medium">
                        Revenue Growth
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-tech-primary mb-2">
                        99.9%
                      </div>
                      <div className="text-tech-text-medium">Uptime SLA</div>
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
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      <div className="text-lg font-semibold text-tech-text-dark">
                        Platform Analytics Dashboard
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
            Ready to Build Your SaaS Platform?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's discuss your vision and create a scalable SaaS solution that
            drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-tech-primary text-white rounded-lg font-semibold hover:bg-tech-primary-dark transition-all duration-300 hover:scale-105"
            >
              Get Started Today
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

export default SAASDevelopment;
