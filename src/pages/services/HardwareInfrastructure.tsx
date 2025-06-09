import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const HardwareInfrastructure = () => {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <SectionBackground variant="gradient">
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tech-text-dark mb-6">
                Hardware Infrastructure Solutions
              </h1>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Complete hardware infrastructure deployment, management, and
                optimization services to power your enterprise operations.
              </p>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Service Overview */}
      <SectionBackground variant="light">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
                  Enterprise Hardware Solutions
                </h2>
                <p className="text-lg text-tech-text-medium mb-6">
                  Our hardware infrastructure services provide comprehensive
                  solutions from planning and procurement to deployment and
                  ongoing maintenance. We ensure your physical infrastructure
                  supports your business growth and technology requirements.
                </p>
                <p className="text-lg text-tech-text-medium mb-8">
                  With partnerships across leading hardware vendors like Dell,
                  HP, Cisco, and Lenovo, we deliver cost-effective solutions
                  that maximize performance and reliability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    Dell Technologies
                  </span>
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    HP Enterprise
                  </span>
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    Cisco Systems
                  </span>
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    Lenovo
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-tech-primary/10 to-purple-500/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-12 h-12 text-white"
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
                    </div>
                    <p className="text-tech-text-medium font-medium">
                      Enterprise Hardware Systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Services Grid */}
      <SectionBackground variant="gradient">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Hardware Infrastructure Services
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                End-to-end hardware solutions for modern enterprises
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mb-6">
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
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Server Solutions
                </h3>
                <p className="text-tech-text-medium">
                  High-performance server deployment including rack servers,
                  blade systems, and hyper-converged infrastructure.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6">
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
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Network Infrastructure
                </h3>
                <p className="text-tech-text-medium">
                  Complete networking solutions including switches, routers,
                  firewalls, and wireless access points.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
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
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Storage Systems
                </h3>
                <p className="text-tech-text-medium">
                  Scalable storage solutions including SAN, NAS, and
                  software-defined storage for enterprise data management.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Data Center Setup
                </h3>
                <p className="text-tech-text-medium">
                  Complete data center design and implementation including
                  power, cooling, and physical security systems.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6">
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Maintenance & Support
                </h3>
                <p className="text-tech-text-medium">
                  Proactive maintenance, 24/7 monitoring, and rapid response
                  support to minimize downtime and ensure reliability.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mb-6">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Security Hardware
                </h3>
                <p className="text-tech-text-medium">
                  Physical security solutions including firewalls, intrusion
                  detection systems, and access control hardware.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Hardware Partners */}
      <SectionBackground variant="light">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Trusted Hardware Partners
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Partnerships with industry-leading hardware manufacturers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">Dell</span>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Dell Technologies
                </h3>
                <p className="text-tech-text-medium text-sm">
                  PowerEdge servers, PowerScale storage, and networking
                  solutions for enterprise environments.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">HP</span>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  HP Enterprise
                </h3>
                <p className="text-tech-text-medium text-sm">
                  ProLiant servers, 3PAR storage, and Aruba networking for
                  hybrid cloud infrastructure.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">Cisco</span>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Cisco Systems
                </h3>
                <p className="text-tech-text-medium text-sm">
                  UCS servers, Catalyst switches, and ASA firewalls for
                  enterprise networking and security.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-base">Lenovo</span>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Lenovo
                </h3>
                <p className="text-tech-text-medium text-sm">
                  ThinkSystem servers, ThinkAgile solutions, and enterprise
                  workstations for business productivity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Implementation Process */}
      <SectionBackground variant="gradient">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Implementation Process
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Structured approach to hardware infrastructure deployment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Assessment
                </h3>
                <p className="text-tech-text-medium text-sm">
                  Evaluate current infrastructure and business requirements
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Design
                </h3>
                <p className="text-tech-text-medium text-sm">
                  Create detailed infrastructure design and specifications
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Procurement
                </h3>
                <p className="text-tech-text-medium text-sm">
                  Source and procure hardware with best pricing and terms
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Deployment
                </h3>
                <p className="text-tech-text-medium text-sm">
                  Professional installation and configuration services
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Support
                </h3>
                <p className="text-tech-text-medium text-sm">
                  Ongoing maintenance and technical support services
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* CTA Section */}
      <SectionBackground variant="light">
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Let us help you design and implement a robust hardware
              infrastructure that supports your business growth and
              technological advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get Infrastructure Quote
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
              >
                Explore All Services
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default HardwareInfrastructure;
