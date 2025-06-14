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
        "System Deployment",
        "Performance Monitoring",
        "Maintenance & Support",
      ],
      technologies: ["Dell", "HP", "Cisco", "Lenovo", "VMware"],
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
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-slate-900/90"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-pink-300 uppercase tracking-wider">
              Our Services
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-none">
            Technology
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Solutions
            </span>
            <br />
            That Transform
          </h1>

          <p className="text-xl md:text-2xl font-light text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your
            digital transformation journey and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">
                  What We Offer
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Service Portfolio
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
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
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.detailedDescription}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Key Features:
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                <span className="text-gray-700 text-sm">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
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
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Track Record
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Numbers that speak to our commitment to excellence and client
                success
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">
                  Our Process
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How We Work
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our services can help you achieve your technology
            goals and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 px-10 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Learn About Us
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
      </section>

      <Footer />
    </div>
  );
};

export default Services;
