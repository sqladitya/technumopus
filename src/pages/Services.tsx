import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "SAP Consulting",
      description: "Enterprise SAP implementations and optimization",
      detailedDescription:
        "Transform your business operations with our comprehensive SAP consulting services. We provide end-to-end SAP implementations, system optimizations, and ongoing support to help you maximize your investment.",
      features: [
        "SAP S/4HANA Implementation",
        "System Integration & Migration",
        "Performance Optimization",
        "24/7 Support & Maintenance",
      ],
      technologies: ["SAP S/4HANA", "SAP ECC", "SAP BW/4HANA", "SAP Fiori"],
      href: "/services/sap-consulting",
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "SAAS Platform Development",
      description: "Scalable cloud-based software solutions",
      detailedDescription:
        "Build powerful, scalable SaaS platforms that grow with your business. Our development team creates robust, secure, and user-friendly software-as-a-service solutions using modern technologies.",
      features: [
        "Multi-tenant Architecture",
        "API Development & Integration",
        "Scalable Infrastructure",
        "Security & Compliance",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
      href: "/services/saas-development",
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Cloud Architecture",
      description: "Robust and secure cloud infrastructure",
      detailedDescription:
        "Design and implement enterprise-grade cloud architectures that provide scalability, security, and cost-efficiency. Our cloud experts help you migrate, optimize, and manage your cloud infrastructure.",
      features: [
        "Cloud Migration Strategy",
        "Infrastructure as Code",
        "Security & Compliance",
        "Cost Optimization",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Docker"],
      href: "/services/cloud-architecture",
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
    },
    {
      title: "Hardware Infrastructure",
      description: "Complete hardware solutions and deployment",
      detailedDescription:
        "From procurement to deployment, we provide comprehensive hardware infrastructure solutions. Our team ensures optimal performance, reliability, and cost-effectiveness for your hardware needs.",
      features: [
        "Hardware Procurement",
        "Data Center Setup",
        "Network Infrastructure",
        "Maintenance & Support",
      ],
      technologies: ["Cisco", "Dell", "HP", "Lenovo", "VMware"],
      href: "/services/hardware-infrastructure",
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
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/20 via-purple-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your
            digital transformation journey
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto leading-relaxed">
                From SAP implementations to cloud architecture, we provide
                end-to-end technology solutions that drive business growth and
                operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-tech-gradient rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-tech-text-dark mb-3">
                        {service.title}
                      </h3>
                      <p className="text-tech-text-medium mb-4 leading-relaxed">
                        {service.detailedDescription}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-tech-text-dark mb-2">
                            Key Features:
                          </h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-tech-text-medium"
                              >
                                <div className="w-1.5 h-1.5 bg-tech-primary rounded-full" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-tech-text-dark mb-2">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-tech-primary/10 text-tech-primary text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Link
                          to={service.href}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Stats Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
                Our Track Record
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Numbers that speak to our commitment to excellence and client
                success
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                  <div className="text-4xl md:text-5xl font-bold text-tech-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-tech-text-medium font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Process Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
                Our Process
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
                every time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Discovery & Analysis",
                  description:
                    "We analyze your current systems, understand your requirements, and identify opportunities for improvement.",
                },
                {
                  step: "2",
                  title: "Strategy & Planning",
                  description:
                    "Our experts develop a comprehensive strategy and detailed project plan tailored to your specific needs.",
                },
                {
                  step: "3",
                  title: "Implementation",
                  description:
                    "We execute the plan with precision, keeping you informed throughout the development and deployment process.",
                },
                {
                  step: "4",
                  title: "Support & Optimization",
                  description:
                    "Ongoing support, monitoring, and optimization to ensure your systems continue to perform at their best.",
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-tech-text-medium leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* CTA Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Let's discuss how our services can help you achieve your
              technology goals and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="/about"
                className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default Services;
