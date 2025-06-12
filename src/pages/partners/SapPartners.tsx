import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const SapPartners = () => {
  const sapPartners = [
    {
      name: "SAP SE",
      logo: "/assets/sap-logo.svg",
      tier: "Premier Partner",
      description:
        "The leading provider of enterprise application software, helping companies of all sizes and in all industries run at their best.",
      services: [
        "SAP S/4HANA Implementation",
        "SAP SuccessFactors HCM",
        "SAP Ariba Procurement",
        "SAP Concur Travel & Expense",
        "SAP Analytics Cloud",
        "SAP Integration Suite",
      ],
      certifications: [
        "SAP Certified Application Associate - S/4HANA",
        "SAP Certified Technology Associate - Integration",
        "SAP Certified Application Specialist - SuccessFactors",
        "SAP Certified Development Associate - ABAP",
      ],
      caseStudies: [
        "Migrated Fortune 500 company from SAP ECC to S/4HANA",
        "Implemented global HR transformation with SuccessFactors",
        "Reduced procurement costs by 25% with SAP Ariba",
      ],
    },
    {
      name: "SAP Business Network",
      logo: "/assets/sap-business-network-logo.svg",
      tier: "Solution Partner",
      description:
        "The world's largest business network connecting millions of buyers and suppliers to collaborate and do business together.",
      services: [
        "Supplier Discovery & Onboarding",
        "Procurement Automation",
        "Supply Chain Collaboration",
        "Invoice Management",
        "Contract Lifecycle Management",
        "Risk Management",
      ],
      certifications: [
        "SAP Ariba Certified Consultant",
        "SAP Fieldglass Certified Implementation",
        "SAP Concur Certified Administrator",
        "SAP Business Network Integration Specialist",
      ],
      caseStudies: [
        "Connected 10,000+ suppliers in unified procurement platform",
        "Automated invoice processing reducing cycle time by 60%",
        "Implemented risk monitoring across global supply chain",
      ],
    },
    {
      name: "SAP Analytics & AI",
      logo: "/assets/sap-analytics-logo.svg",
      tier: "Technology Partner",
      description:
        "Advanced analytics and artificial intelligence solutions that transform data into actionable insights for better business outcomes.",
      services: [
        "SAP Analytics Cloud Planning",
        "SAP Data Intelligence",
        "SAP HANA Cloud Analytics",
        "Machine Learning Integration",
        "Predictive Analytics",
        "Real-time Reporting & Dashboards",
      ],
      certifications: [
        "SAP Analytics Cloud Certified Consultant",
        "SAP Data Intelligence Certified Associate",
        "SAP HANA Cloud Certified Professional",
        "SAP Machine Learning Specialist",
      ],
      caseStudies: [
        "Built enterprise-wide analytics platform for retail chain",
        "Implemented predictive maintenance reducing downtime by 40%",
        "Created real-time financial reporting for multinational corporation",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-orange-900 via-orange-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-orange-700/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              SAP Partners
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Certified SAP expertise delivering enterprise-grade solutions that
              transform your business processes and drive operational excellence
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                200+
              </div>
              <div className="text-white/80">SAP Implementations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                15+
              </div>
              <div className="text-white/80">Years SAP Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                50%
              </div>
              <div className="text-white/80">Process Efficiency Gain</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Detail */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-20">
              {sapPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Partner Info */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                              SAP
                            </span>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {partner.name}
                            </h3>
                            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-semibold">
                              {partner.tier}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {partner.description}
                        </p>

                        {/* Certifications */}
                        <div className="mb-6">
                          <h4 className="font-bold text-gray-900 mb-3">
                            Our Certifications
                          </h4>
                          <div className="space-y-2">
                            {partner.certifications.map((cert, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2"
                              >
                                <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0" />
                                <span className="text-sm text-gray-600">
                                  {cert}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Services */}
                      <div className="lg:col-span-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          Key Services
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {partner.services.map((service, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                            >
                              <svg
                                className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span className="text-gray-600">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Case Studies */}
                      <div className="lg:col-span-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">
                          Success Stories
                        </h4>
                        <div className="space-y-4">
                          {partner.caseStudies.map((study, idx) => (
                            <div
                              key={idx}
                              className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-600"
                            >
                              <p className="text-gray-600 text-sm">{study}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6">
                          <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                            View Case Studies
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* SAP Benefits */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why SAP Partnership Matters
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Our SAP partnerships ensure you get certified expertise and
                proven methodologies for successful digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mb-6">
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Process Optimization
                </h3>
                <p className="text-gray-600">
                  Streamline your business processes with SAP's best practices
                  and intelligent automation capabilities.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6">
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Real-time Insights
                </h3>
                <p className="text-gray-600">
                  Make data-driven decisions with real-time analytics and
                  intelligent reporting across your entire organization.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6">
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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H10a2 2 0 00-2-2V6m8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Scalable Architecture
                </h3>
                <p className="text-gray-600">
                  Build a future-ready foundation that scales with your business
                  growth and adapts to changing market demands.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* SAP Solutions Overview */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive SAP Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                From ERP to analytics, we deliver end-to-end SAP solutions
                tailored to your industry and business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ERP & Finance
                </h3>
                <p className="text-gray-600">S/4HANA, Finance, Controlling</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-blue-600"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Human Capital
                </h3>
                <p className="text-gray-600">SuccessFactors, HR, Payroll</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Procurement
                </h3>
                <p className="text-gray-600">Ariba, Fieldglass, Concur</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-purple-600"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Analytics
                </h3>
                <p className="text-gray-600">Analytics Cloud, BI Platform</p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* CTA Section */}
      <SectionBackground variant="dark">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise with SAP?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let our certified SAP consultants help you modernize your business
              processes and unlock new opportunities for growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Your SAP Journey
              </a>
              <a
                href="/services/sap-consulting"
                className="px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                View SAP Services
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default SapPartners;
