import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const SaasDevelopment = () => {
  const features = [
    {
      title: "Multi-Tenant Architecture",
      description:
        "Scalable SaaS solutions with secure multi-tenant isolation and data segregation",
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: "Cloud-Native Development",
      description:
        "Built for the cloud with microservices, containerization, and auto-scaling capabilities",
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
    {
      title: "API-First Design",
      description:
        "RESTful APIs and GraphQL endpoints for seamless integrations and third-party connections",
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
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Advanced Analytics",
      description:
        "Built-in analytics dashboard with real-time reporting and business intelligence",
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
  ];

  const techStack = [
    {
      name: "Frontend",
      technologies: ["React", "TypeScript", "Next.js", "Vue.js"],
    },
    { name: "Backend", technologies: ["Node.js", "Python", "Java", "Go"] },
    {
      name: "Database",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    },
    {
      name: "Cloud",
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes"],
    },
    {
      name: "DevOps",
      technologies: ["Docker", "CI/CD", "Terraform", "Monitoring"],
    },
    {
      name: "Security",
      technologies: ["OAuth", "JWT", "Encryption", "Compliance"],
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
            SaaS Platform Development
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Build scalable, secure, and feature-rich Software-as-a-Service
            platforms that drive business growth
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                  Modern SaaS Solutions
                </h2>
                <div className="space-y-6 text-lg text-tech-text-medium leading-relaxed">
                  <p>
                    We specialize in developing cutting-edge SaaS platforms that
                    combine modern architecture patterns with robust business
                    functionality. Our solutions are designed to scale from
                    startup to enterprise level.
                  </p>
                  <p>
                    Using cloud-native technologies and microservices
                    architecture, we build platforms that are resilient,
                    performant, and cost-effective. Every solution includes
                    built-in security, analytics, and integration capabilities.
                  </p>
                  <p>
                    From concept to deployment, we guide you through the entire
                    SaaS development lifecycle, ensuring your platform meets
                    market demands and exceeds user expectations.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-tech-primary mb-2">
                        50+
                      </div>
                      <div className="text-tech-text-medium">
                        SaaS Platforms Built
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-tech-primary mb-2">
                        1M+
                      </div>
                      <div className="text-tech-text-medium">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-tech-primary mb-2">
                        99.9%
                      </div>
                      <div className="text-tech-text-medium">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-tech-primary mb-2">
                        6 Mo
                      </div>
                      <div className="text-tech-text-medium">
                        Avg. Time to Market
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Key Features */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
                Platform Capabilities
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Essential features that make your SaaS platform competitive and
                scalable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-tech-gradient rounded-lg flex items-center justify-center mb-6 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-tech-text-medium leading-relaxed">
                    {feature.description}
                  </p>
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
              <h2 className="text-4xl font-bold text-tech-text-dark mb-4">
                Technology Stack
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                We use cutting-edge technologies to build robust and scalable
                SaaS platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStack.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-tech-text-dark mb-4">
                    {category.name}
                  </h3>
                  <div className="space-y-2">
                    {category.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block px-3 py-1 bg-tech-primary/10 text-tech-primary text-sm rounded-full mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
              <h2 className="text-4xl font-bold text-tech-text-dark mb-4">
                Development Process
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Our proven methodology for building successful SaaS platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Discovery & Planning
                </h3>
                <p className="text-tech-text-medium">
                  Market research, requirements gathering, and technical
                  architecture design
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  MVP Development
                </h3>
                <p className="text-tech-text-medium">
                  Rapid prototyping and minimum viable product development with
                  core features
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Testing & Refinement
                </h3>
                <p className="text-tech-text-medium">
                  Comprehensive testing, user feedback integration, and platform
                  optimization
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Launch & Scale
                </h3>
                <p className="text-tech-text-medium">
                  Production deployment, monitoring setup, and ongoing feature
                  development
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* CTA Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Ready to Build Your SaaS Platform?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Let's discuss your SaaS idea and create a roadmap for success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/about"
                className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default SaasDevelopment;
