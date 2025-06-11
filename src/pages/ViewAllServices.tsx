import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ViewAllServices = () => {
  const serviceCategories = [
    {
      title: "Enterprise Solutions",
      description:
        "Transform your core business operations with intelligent enterprise solutions",
      services: [
        {
          name: "SAP Consulting",
          description:
            "End-to-end SAP implementations and optimizations for modern enterprises",
          href: "/services/sap-consulting",
          features: [
            "S/4HANA Migration & Implementation",
            "Business Process Optimization",
            "Integration & Data Management",
            "Support & Maintenance",
          ],
          icon: "🏢",
        },
      ],
    },
    {
      title: "Digital Solutions",
      description:
        "Build the future with cutting-edge digital technologies and platforms",
      services: [
        {
          name: "Software Development",
          description:
            "Custom software solutions that scale with your business needs",
          href: "/services/saas-development",
          features: [
            "Web & Mobile Applications",
            "API Development & Integration",
            "Cloud-Native Architecture",
            "DevOps & Automation",
          ],
          icon: "💻",
        },
        {
          name: "Cloud Architecture",
          description:
            "Design and implement robust cloud infrastructure solutions",
          href: "/services/cloud-architecture",
          features: [
            "Cloud Strategy & Migration",
            "Multi-Cloud Solutions",
            "Security & Compliance",
            "Performance Optimization",
          ],
          icon: "☁️",
        },
      ],
    },
    {
      title: "Infrastructure Solutions",
      description:
        "Build reliable, scalable infrastructure that powers your business",
      services: [
        {
          name: "Hardware Infrastructure",
          description:
            "Enterprise-grade hardware solutions and deployment services",
          href: "/services/hardware-infrastructure",
          features: [
            "Data Center Solutions",
            "Network Infrastructure",
            "Security Hardware",
            "Maintenance & Support",
          ],
          icon: "🔧",
        },
        {
          name: "Digital Transformation",
          description:
            "Comprehensive transformation strategies and implementation",
          href: "/services/digital-transformation",
          features: [
            "Strategy & Roadmap",
            "Process Automation",
            "Change Management",
            "Training & Adoption",
          ],
          icon: "🚀",
        },
      ],
    },
  ];

  const capabilities = [
    {
      title: "Strategy & Consulting",
      description: "Define your digital transformation roadmap",
      icon: "🎯",
    },
    {
      title: "Implementation",
      description: "Execute with precision and expertise",
      icon: "⚙️",
    },
    {
      title: "Support & Optimization",
      description: "Ensure ongoing success and continuous improvement",
      icon: "📈",
    },
  ];

  const clientSuccess = [
    {
      metric: "40%",
      description: "Average reduction in operational costs",
    },
    {
      metric: "60%",
      description: "Faster time-to-market for new products",
    },
    {
      metric: "99.9%",
      description: "System uptime and reliability",
    },
    {
      metric: "500+",
      description: "Successful project deliveries",
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Services That
              <br />
              <span className="text-pink-400">Drive Results</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your
              digital transformation and create sustainable competitive
              advantage
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    to={service.href}
                    className="group bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-pink-200"
                  >
                    <div className="flex items-start gap-6">
                      <div className="text-5xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-pink-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide">
                            Key Capabilities
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-pink-600 rounded-full"></div>
                                <span className="text-sm text-gray-600">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-pink-600 font-medium">
                          Learn more
                          <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful outcomes for every
              project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl mb-6">{capability.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Our success is measured by the value we create for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {clientSuccess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-4">
                  {item.metric}
                </div>
                <p className="text-pink-100 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let's discuss your specific needs and create a tailored solution
            that drives results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-semibold rounded-lg hover:bg-slate-900 hover:text-white transition-colors"
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
