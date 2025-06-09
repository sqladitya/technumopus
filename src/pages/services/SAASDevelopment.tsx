import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const SAASDevelopment = () => {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <SectionBackground variant="gradient">
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tech-text-dark mb-6">
                SAAS Platform Development
              </h1>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Build scalable, secure, and high-performance
                Software-as-a-Service platforms that drive business growth and
                customer satisfaction.
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
                  Next-Generation SAAS Solutions
                </h2>
                <p className="text-lg text-tech-text-medium mb-6">
                  Our SAAS development services help you create cloud-native
                  applications that scale with your business. From MVP to
                  enterprise-grade platforms, we deliver solutions that drive
                  user engagement and revenue growth.
                </p>
                <p className="text-lg text-tech-text-medium mb-8">
                  With expertise in modern frameworks, microservices
                  architecture, and cloud platforms, we ensure your SAAS
                  platform is built for performance, security, and scalability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    React/Next.js
                  </span>
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    Node.js
                  </span>
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    Microservices
                  </span>
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    Kubernetes
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
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <p className="text-tech-text-medium font-medium">
                      Modern SAAS Architecture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Development Process */}
      <SectionBackground variant="gradient">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Our SAAS Development Process
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                A proven methodology that ensures successful platform delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-white font-bold text-lg">1</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-3">
                  Discovery & Planning
                </h3>
                <p className="text-tech-text-medium">
                  Understanding your business requirements, target audience, and
                  technical specifications.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-3">
                  Architecture Design
                </h3>
                <p className="text-tech-text-medium">
                  Creating scalable system architecture with security,
                  performance, and maintainability in mind.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-3">
                  Development & Testing
                </h3>
                <p className="text-tech-text-medium">
                  Agile development with continuous testing, code reviews, and
                  quality assurance.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-3">
                  Deployment & Support
                </h3>
                <p className="text-tech-text-medium">
                  Cloud deployment with monitoring, maintenance, and ongoing
                  feature development.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Services Grid */}
      <SectionBackground variant="light">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Comprehensive SAAS Services
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                End-to-end platform development from concept to scale
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Custom Platform Development
                </h3>
                <p className="text-tech-text-medium">
                  Build tailored SAAS platforms that perfectly match your
                  business model and customer needs.
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
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Database Architecture
                </h3>
                <p className="text-tech-text-medium">
                  Design and implement scalable database solutions with optimal
                  performance and data integrity.
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Security Implementation
                </h3>
                <p className="text-tech-text-medium">
                  Enterprise-grade security with authentication, authorization,
                  and data protection compliance.
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Performance Optimization
                </h3>
                <p className="text-tech-text-medium">
                  Optimize platform performance for fast loading times and
                  seamless user experience.
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
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Analytics & Reporting
                </h3>
                <p className="text-tech-text-medium">
                  Built-in analytics dashboards and reporting tools to track
                  user behavior and business metrics.
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
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  API Development
                </h3>
                <p className="text-tech-text-medium">
                  RESTful and GraphQL APIs for seamless integration with
                  third-party services and mobile applications.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Technology Stack */}
      <SectionBackground variant="gradient">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Modern Technology Stack
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                We use cutting-edge technologies to build robust and scalable
                SAAS platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-tech-text-dark mb-6">
                  Frontend
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        R
                      </span>
                    </div>
                    <span className="text-tech-text-medium">React/Next.js</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-sm">
                        V
                      </span>
                    </div>
                    <span className="text-tech-text-medium">
                      Vue.js/Nuxt.js
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-600 font-semibold text-sm">
                        T
                      </span>
                    </div>
                    <span className="text-tech-text-medium">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                      <span className="text-pink-600 font-semibold text-sm">
                        T
                      </span>
                    </div>
                    <span className="text-tech-text-medium">Tailwind CSS</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-tech-text-dark mb-6">
                  Backend
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">
                        N
                      </span>
                    </div>
                    <span className="text-tech-text-medium">Node.js</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">
                        N
                      </span>
                    </div>
                    <span className="text-tech-text-medium">.NET Core</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        P
                      </span>
                    </div>
                    <span className="text-tech-text-medium">Python/Django</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-semibold text-sm">
                        G
                      </span>
                    </div>
                    <span className="text-tech-text-medium">Go/Golang</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-tech-text-dark mb-6">
                  Infrastructure
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-orange-600 font-semibold text-sm">
                        A
                      </span>
                    </div>
                    <span className="text-tech-text-medium">AWS/Azure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        K
                      </span>
                    </div>
                    <span className="text-tech-text-medium">Kubernetes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        D
                      </span>
                    </div>
                    <span className="text-tech-text-medium">Docker</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">
                        M
                      </span>
                    </div>
                    <span className="text-tech-text-medium">
                      MongoDB/PostgreSQL
                    </span>
                  </div>
                </div>
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
              Ready to Build Your SAAS Platform?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Transform your idea into a scalable SAAS platform that delivers
              exceptional user experience and drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default SAASDevelopment;
