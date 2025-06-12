import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const CloudArchitecture = () => {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <SectionBackground variant="gradient">
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              text-white
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tech-text-dark mb-6">
                Cloud Architecture Solutions
              </h1>
              text-gray-200
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Design and implement robust, scalable cloud infrastructure that
                powers your digital transformation and accelerates business
                growth.
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
                  Enterprise Cloud Infrastructure
                </h2>
                <p className="text-lg text-tech-text-medium mb-6">
                  Our cloud architecture services help you build secure,
                  scalable, and cost-effective cloud solutions. From migration
                  strategy to implementation, we ensure your cloud
                  infrastructure supports your business objectives.
                </p>
                <p className="text-lg text-tech-text-medium mb-8">
                  With expertise across AWS, Microsoft Azure, and Google Cloud
                  Platform, we design multi-cloud and hybrid solutions that
                  provide flexibility, resilience, and optimal performance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    AWS
                  </span>
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    Microsoft Azure
                  </span>
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    Google Cloud
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
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        />
                      </svg>
                    </div>
                    <p className="text-tech-text-medium font-medium">
                      Cloud Infrastructure Design
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
                Cloud Architecture Services
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Comprehensive cloud solutions from strategy to implementation
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Cloud Strategy & Planning
                </h3>
                <p className="text-tech-text-medium">
                  Develop comprehensive cloud adoption strategies aligned with
                  your business goals and technical requirements.
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Cloud Migration
                </h3>
                <p className="text-tech-text-medium">
                  Seamless migration of applications and data to the cloud with
                  minimal downtime and risk mitigation.
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Security & Compliance
                </h3>
                <p className="text-tech-text-medium">
                  Implement robust security frameworks and ensure compliance
                  with industry standards and regulations.
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
                  Optimize cloud infrastructure for performance, cost
                  efficiency, and resource utilization.
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
                  Monitoring & Analytics
                </h3>
                <p className="text-tech-text-medium">
                  Comprehensive monitoring solutions with real-time analytics
                  and automated alerting systems.
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  DevOps & Automation
                </h3>
                <p className="text-tech-text-medium">
                  Implement CI/CD pipelines and infrastructure automation for
                  faster deployments and better reliability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Cloud Platforms */}
      <SectionBackground variant="light">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Multi-Cloud Expertise
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Certified expertise across all major cloud platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">AWS</span>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Amazon Web Services
                </h3>
                <p className="text-tech-text-medium mb-6">
                  Comprehensive AWS solutions including EC2, S3, Lambda, RDS,
                  and advanced services like EKS and ECS.
                </p>
                <div className="space-y-2 text-sm text-tech-text-medium">
                  <div>• EC2 & Auto Scaling</div>
                  <div>• Lambda & Serverless</div>
                  <div>• EKS & Container Services</div>
                  <div>• CloudFormation & CDK</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">Azure</span>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Microsoft Azure
                </h3>
                <p className="text-tech-text-medium mb-6">
                  Enterprise Azure solutions with deep integration into
                  Microsoft ecosystem and hybrid cloud capabilities.
                </p>
                <div className="space-y-2 text-sm text-tech-text-medium">
                  <div>• Azure VMs & App Services</div>
                  <div>• Azure Functions</div>
                  <div>• AKS & Container Instances</div>
                  <div>• ARM Templates & Bicep</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">GCP</span>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Google Cloud Platform
                </h3>
                <p className="text-tech-text-medium mb-6">
                  Advanced GCP services with focus on data analytics, machine
                  learning, and scalable compute solutions.
                </p>
                <div className="space-y-2 text-sm text-tech-text-medium">
                  <div>• Compute Engine & App Engine</div>
                  <div>• Cloud Functions</div>
                  <div>• GKE & Cloud Run</div>
                  <div>• Deployment Manager</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Benefits Section */}
      <SectionBackground variant="gradient">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Cloud Architecture Benefits
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Transform your business with the power of cloud computing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Scalability
                </h3>
                <p className="text-tech-text-medium">
                  Auto-scaling capabilities that grow with your business needs
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Cost Efficiency
                </h3>
                <p className="text-tech-text-medium">
                  Reduce infrastructure costs with pay-as-you-use pricing models
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Enhanced Security
                </h3>
                <p className="text-tech-text-medium">
                  Enterprise-grade security with compliance and data protection
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                  Performance
                </h3>
                <p className="text-tech-text-medium">
                  High-performance infrastructure with global availability
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
              Ready to Modernize Your Infrastructure?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Transform your business with scalable, secure, and cost-effective
              cloud architecture solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Cloud Journey
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

export default CloudArchitecture;
