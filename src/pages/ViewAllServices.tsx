import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";
import { Link } from "react-router-dom";

const ViewAllServices = () => {
  const serviceCategories = [
    {
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise-grade technology solutions",
      services: [
        {
          name: "SAP Consulting",
          description: "Enterprise SAP implementations and optimization",
          href: "/services/sap-consulting",
          features: [
            "S/4HANA Implementation",
            "System Integration",
            "Performance Optimization",
            "Security & Compliance",
          ],
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Cloud & Software Solutions",
      description: "Modern cloud-native and software development services",
      services: [
        {
          name: "SAAS Platform Development",
          description: "Scalable cloud-based software solutions",
          href: "/services/saas-development",
          features: [
            "Multi-tenant Architecture",
            "API Development",
            "Scalable Infrastructure",
            "Security & Compliance",
          ],
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          ),
        },
        {
          name: "Cloud Architecture",
          description: "Robust and secure cloud infrastructure",
          href: "/services/cloud-architecture",
          features: [
            "Cloud Migration",
            "Infrastructure as Code",
            "Security & Compliance",
            "Cost Optimization",
          ],
          icon: (
            <svg
              className="w-8 h-8"
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
        },
      ],
    },
    {
      title: "Infrastructure Solutions",
      description: "Physical and network infrastructure services",
      services: [
        {
          name: "Hardware Infrastructure",
          description: "Complete hardware solutions and deployment",
          href: "/services/hardware-infrastructure",
          features: [
            "Server & Storage",
            "Network Infrastructure",
            "Data Center Solutions",
            "Hardware Deployment",
          ],
          icon: (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive transformation and modernization services",
      services: [
        {
          name: "Digital Transformation",
          description: "End-to-end business transformation and modernization",
          href: "/services/digital-transformation",
          features: [
            "Process Automation",
            "Data Analytics & AI",
            "Cloud Migration",
            "Digital Customer Experience",
          ],
          icon: (
            <svg
              className="w-8 h-8"
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
          ),
        },
      ],
    },
  ];

  const serviceStats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered projects across all service lines",
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      description: "Consistently high satisfaction ratings from our clients",
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Deep expertise across technology domains",
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Certified professionals ready to help you succeed",
    },
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "Banking, insurance, and fintech solutions",
      services: ["SAP Banking", "Cloud Security", "Compliance Systems"],
    },
    {
      name: "Healthcare",
      description: "Healthcare technology and life sciences",
      services: [
        "HIPAA Compliance",
        "Medical SaaS",
        "Healthcare Infrastructure",
      ],
    },
    {
      name: "Manufacturing",
      description: "Industrial and manufacturing operations",
      services: [
        "SAP Manufacturing",
        "IoT Infrastructure",
        "Supply Chain Systems",
      ],
    },
    {
      name: "Retail & E-commerce",
      description: "Retail technology and e-commerce platforms",
      services: ["E-commerce Platforms", "POS Systems", "Inventory Management"],
    },
    {
      name: "Government",
      description: "Public sector and government solutions",
      services: [
        "Government Cloud",
        "Secure Infrastructure",
        "Compliance Systems",
      ],
    },
    {
      name: "Education",
      description: "Educational institutions and EdTech",
      services: [
        "Learning Platforms",
        "Campus Infrastructure",
        "Student Information Systems",
      ],
    },
  ];

  const technologyStack = [
    {
      category: "Enterprise Platforms",
      technologies: [
        "SAP S/4HANA",
        "SAP ECC",
        "SAP BW/4HANA",
        "SAP Fiori",
        "Oracle",
        "Microsoft Dynamics",
      ],
    },
    {
      category: "Cloud Platforms",
      technologies: [
        "AWS",
        "Microsoft Azure",
        "Google Cloud Platform",
        "IBM Cloud",
        "Oracle Cloud",
      ],
    },
    {
      category: "Development",
      technologies: [
        "React",
        "Node.js",
        "Python",
        "Java",
        ".NET",
        "TypeScript",
        "GraphQL",
      ],
    },
    {
      category: "Infrastructure",
      technologies: [
        "Docker",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "Jenkins",
        "GitLab CI/CD",
      ],
    },
    {
      category: "Databases",
      technologies: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Oracle",
        "SQL Server",
        "Elasticsearch",
      ],
    },
    {
      category: "Hardware Partners",
      technologies: [
        "Dell Technologies",
        "HP Enterprise",
        "Cisco",
        "Lenovo",
        "VMware",
        "NetApp",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-accenture-purple/20 via-purple-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            All Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive technology solutions designed to accelerate your
            digital transformation journey. From enterprise SAP implementations
            to cutting-edge cloud architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-accenture-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </a>
            <a
              href="/services"
              className="px-8 py-4 border-2 border-accenture-purple text-accenture-purple rounded-lg font-semibold hover:bg-accenture-purple hover:text-white transition-all duration-300"
            >
              Browse Services
            </a>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <SectionBackground variant="light">
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-accenture-text-primary mb-6">
                Our Service Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Organized by solution type to help you find exactly what you
                need for your business transformation.
              </p>
            </div>

            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-accenture-text-primary mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                    >
                      <div className="w-16 h-16 bg-accenture-purple/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accenture-purple/20 transition-colors duration-300">
                        <div className="text-accenture-purple">
                          {service.icon}
                        </div>
                      </div>

                      <h4 className="text-2xl font-bold text-accenture-text-primary mb-4">
                        {service.name}
                      </h4>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-accenture-purple rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={service.href}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105"
                      >
                        Learn More
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
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionBackground>

      {/* Service Statistics */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-accenture-text-primary mb-6">
                Proven Track Record
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our success is measured by the success of our clients. Here are
                some key metrics that showcase our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-accenture-purple mb-4">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-accenture-text-primary mb-3">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Industries We Serve */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-accenture-text-primary mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our solutions are tailored to meet the specific requirements and
                compliance needs of various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-accenture-text-primary mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-accenture-text-primary mb-3">
                      Key Services:
                    </div>
                    {industry.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-accenture-purple rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Technology Stack */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                Our Technology Stack
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                We leverage cutting-edge technologies and maintain partnerships
                with leading vendors to deliver best-in-class solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologyStack.map((stack, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-tech-text-dark mb-6">
                    {stack.category}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {stack.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="text-sm text-tech-text-medium bg-gray-50 rounded px-3 py-2 text-center"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our comprehensive service portfolio is designed to meet your
            specific business needs. Let's discuss how we can help accelerate
            your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-tech-primary text-white rounded-lg font-semibold hover:bg-tech-primary-dark transition-all duration-300 hover:scale-105"
            >
              Schedule Consultation
            </a>
            <Link
              to="/about"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ViewAllServices;
