import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const CloudArchitecture = () => {
  const cloudServices = [
    {
      title: "Cloud Migration Strategy",
      description:
        "Comprehensive migration planning and execution from on-premises to cloud infrastructure",
      features: [
        "Migration assessment and planning",
        "Risk analysis and mitigation",
        "Phased migration approach",
        "Minimal downtime strategies",
      ],
    },
    {
      title: "Infrastructure as Code",
      description:
        "Automated infrastructure provisioning and management using modern IaC tools",
      features: [
        "Terraform and CloudFormation",
        "Automated deployment pipelines",
        "Infrastructure versioning",
        "Environment consistency",
      ],
    },
    {
      title: "Security & Compliance",
      description:
        "Enterprise-grade security measures and compliance frameworks for cloud environments",
      features: [
        "Identity and Access Management",
        "Network security and encryption",
        "Compliance automation (SOX, HIPAA, PCI)",
        "Security monitoring and alerting",
      ],
    },
    {
      title: "Cost Optimization",
      description:
        "Intelligent resource management and cost optimization strategies for cloud infrastructure",
      features: [
        "Resource usage monitoring",
        "Auto-scaling configurations",
        "Reserved instance optimization",
        "Cost allocation and reporting",
      ],
    },
  ];

  const cloudPlatforms = [
    {
      name: "Amazon Web Services",
      services: ["EC2", "S3", "RDS", "Lambda", "EKS", "CloudFormation"],
      specialty: "Enterprise-scale solutions",
    },
    {
      name: "Microsoft Azure",
      services: [
        "Virtual Machines",
        "Blob Storage",
        "Azure SQL",
        "Functions",
        "AKS",
        "ARM Templates",
      ],
      specialty: "Hybrid cloud solutions",
    },
    {
      name: "Google Cloud Platform",
      services: [
        "Compute Engine",
        "Cloud Storage",
        "Cloud SQL",
        "Cloud Functions",
        "GKE",
        "Deployment Manager",
      ],
      specialty: "Data analytics and AI",
    },
  ];

  const architecturePatterns = [
    {
      title: "Microservices Architecture",
      description: "Scalable, loosely-coupled service-oriented design",
      benefits: [
        "Independent scaling",
        "Technology diversity",
        "Fault isolation",
        "Team autonomy",
      ],
    },
    {
      title: "Serverless Architecture",
      description: "Event-driven, pay-per-use computing model",
      benefits: [
        "Cost efficiency",
        "Auto-scaling",
        "No server management",
        "Faster deployment",
      ],
    },
    {
      title: "Multi-Cloud Architecture",
      description: "Distributed architecture across multiple cloud providers",
      benefits: [
        "Vendor independence",
        "Risk mitigation",
        "Best-of-breed services",
        "Geographic distribution",
      ],
    },
    {
      title: "Hybrid Cloud Architecture",
      description:
        "Seamless integration between on-premises and cloud resources",
      benefits: [
        "Gradual migration",
        "Data sovereignty",
        "Legacy system integration",
        "Cost optimization",
      ],
    },
  ];

  const industries = [
    "Financial Services",
    "Healthcare & Life Sciences",
    "Retail & E-commerce",
    "Manufacturing & Logistics",
    "Media & Entertainment",
    "Government & Public Sector",
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
                Cloud Architecture Solutions
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Design and implement enterprise-grade cloud architectures that
                provide scalability, security, and cost-efficiency for your
                business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-tech-primary rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Get Cloud Assessment
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
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
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
                Our Cloud Architecture Services
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                From strategy to implementation, we provide comprehensive cloud
                architecture services that transform your IT infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {cloudServices.map((service, index) => (
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

      {/* Cloud Platforms */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                Multi-Cloud Expertise
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                We are certified experts across all major cloud platforms,
                ensuring the best fit for your specific requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                    {platform.name}
                  </h3>
                  <p className="text-tech-primary font-semibold mb-6">
                    {platform.specialty}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-tech-text-dark mb-3">
                      Core Services:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {platform.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="text-sm text-tech-text-medium bg-gray-50 rounded px-3 py-1"
                        >
                          {service}
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

      {/* Architecture Patterns */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                Modern Architecture Patterns
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                We implement proven architecture patterns that ensure
                scalability, reliability, and maintainability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {architecturePatterns.map((pattern, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                    {pattern.title}
                  </h3>
                  <p className="text-tech-text-medium mb-6">
                    {pattern.description}
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-tech-text-dark mb-3">
                      Key Benefits:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {pattern.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-tech-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-tech-text-medium">
                            {benefit}
                          </span>
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

      {/* Industries */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                Industry Expertise
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Our cloud architecture solutions are tailored to meet the
                specific requirements and compliance needs of various
                industries.
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
                    Success Story: Enterprise Cloud Migration
                  </h2>
                  <p className="text-tech-text-medium mb-6">
                    We successfully migrated a Fortune 500 company's entire
                    infrastructure to a multi-cloud environment, resulting in
                    significant cost savings and improved performance across all
                    business units.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <div className="text-3xl font-bold text-tech-primary mb-2">
                        40%
                      </div>
                      <div className="text-tech-text-medium">
                        Cost Reduction
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-tech-primary mb-2">
                        99.99%
                      </div>
                      <div className="text-tech-text-medium">
                        Uptime Achieved
                      </div>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-tech-primary text-white rounded-lg font-semibold hover:bg-tech-primary-dark transition-all duration-300"
                  >
                    Discuss Your Migration
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
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        />
                      </svg>
                      <div className="text-lg font-semibold text-tech-text-dark">
                        Multi-Cloud Architecture
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
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let's design a cloud architecture that scales with your business and
            optimizes your operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-tech-primary text-white rounded-lg font-semibold hover:bg-tech-primary-dark transition-all duration-300 hover:scale-105"
            >
              Schedule Consultation
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

export default CloudArchitecture;
