import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const SAPConsulting = () => {
  const sapServices = [
    {
      title: "SAP S/4HANA Implementation",
      description:
        "Complete migration from SAP ECC to S/4HANA with minimal business disruption",
      features: [
        "System assessment and readiness check",
        "Data migration and cleansing",
        "Custom development and integration",
        "User training and change management",
      ],
    },
    {
      title: "SAP System Integration",
      description:
        "Seamless integration of SAP with third-party systems and cloud platforms",
      features: [
        "API development and management",
        "Real-time data synchronization",
        "Legacy system integration",
        "Cloud connectivity solutions",
      ],
    },
    {
      title: "Performance Optimization",
      description:
        "Enhance system performance and optimize resource utilization",
      features: [
        "System performance analysis",
        "Database optimization",
        "Custom code reviews",
        "Infrastructure tuning",
      ],
    },
    {
      title: "SAP Security & Compliance",
      description:
        "Implement robust security measures and ensure regulatory compliance",
      features: [
        "Role-based access control",
        "Security audit and assessment",
        "Compliance frameworks (SOX, GDPR)",
        "Continuous monitoring",
      ],
    },
  ];

  const industries = [
    "Manufacturing",
    "Retail & Consumer Goods",
    "Financial Services",
    "Healthcare & Life Sciences",
    "Energy & Utilities",
    "Automotive",
  ];

  const certifications = [
    "SAP Certified Application Associate",
    "SAP Certified Technology Associate",
    "SAP Certified Development Associate",
    "SAP S/4HANA Implementation Certified",
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
                SAP Consulting Services
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Transform your business operations with expert SAP
                implementations, optimizations, and ongoing support from
                certified professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white text-tech-primary rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Get Consultation
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Services
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    SAP Expertise
                  </h3>
                  <p className="text-white/80">
                    15+ years of SAP experience with 200+ successful
                    implementations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <SectionBackground variant="light">
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Our SAP Services
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto leading-relaxed">
                Comprehensive SAP solutions covering the entire lifecycle from
                implementation to optimization and ongoing support.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sapServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-tech-text-medium mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-tech-text-medium"
                      >
                        <div className="w-2 h-2 bg-tech-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Industries Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                  Industry Expertise
                </h2>
                <p className="text-lg text-tech-text-medium mb-8 leading-relaxed">
                  Our SAP consultants have deep industry knowledge and
                  experience working with organizations across various sectors.
                  We understand the unique challenges and requirements of
                  different industries.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center"
                    >
                      <span className="font-semibold text-tech-text-dark">
                        {industry}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-tech-text-dark mb-6">
                  Why Choose Our SAP Team?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-tech-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-tech-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-tech-text-dark mb-1">
                        Certified Experts
                      </h4>
                      <p className="text-tech-text-medium text-sm">
                        All our consultants hold multiple SAP certifications and
                        have hands-on experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-tech-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-tech-primary"
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
                    <div>
                      <h4 className="font-semibold text-tech-text-dark mb-1">
                        Proven Methodology
                      </h4>
                      <p className="text-tech-text-medium text-sm">
                        Time-tested implementation methodology with 99% success
                        rate
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-tech-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-tech-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-tech-text-dark mb-1">
                        24/7 Support
                      </h4>
                      <p className="text-tech-text-medium text-sm">
                        Round-the-clock support and maintenance services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Certifications Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
                Our Certifications
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Our team holds industry-recognized SAP certifications ensuring
                the highest level of expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
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
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-tech-text-dark">{cert}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Case Study Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                  Success Story
                </h2>
                <p className="text-xl text-tech-text-medium">
                  How we helped a Fortune 500 company transform their operations
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                    Global Manufacturing Company S/4HANA Migration
                  </h3>
                  <p className="text-tech-text-medium mb-6 leading-relaxed">
                    We successfully migrated a global manufacturing company from
                    SAP ECC 6.0 to S/4HANA, resulting in significant
                    improvements in performance, user experience, and business
                    processes. The project was completed on time and under
                    budget with zero downtime during the go-live.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-tech-primary rounded-full" />
                      <span className="text-tech-text-medium">
                        50% improvement in system performance
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-tech-primary rounded-full" />
                      <span className="text-tech-text-medium">
                        Zero downtime during migration
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-tech-primary rounded-full" />
                      <span className="text-tech-text-medium">
                        30% reduction in operational costs
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-tech-gradient rounded-xl p-8 text-white">
                    <div className="text-4xl font-bold mb-2">18</div>
                    <div className="text-sm mb-4">Months</div>
                    <div className="text-xs opacity-80">Project Duration</div>
                  </div>
                </div>
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
              Ready to Optimize Your SAP Environment?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Let our certified SAP experts help you maximize your investment
              and drive business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
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

export default SAPConsulting;
