import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const DigitalTransformation = () => {
  const transformationAreas = [
    {
      title: "Process Automation",
      description:
        "Streamline operations with intelligent automation and workflow optimization",
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      benefits: [
        "Reduce manual tasks by 80%",
        "Improve accuracy and consistency",
        "24/7 automated workflows",
        "Real-time process monitoring",
      ],
    },
    {
      title: "Data Analytics & AI",
      description:
        "Unlock insights with advanced analytics, machine learning, and AI solutions",
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
      benefits: [
        "Predictive analytics capabilities",
        "Real-time business intelligence",
        "AI-powered decision making",
        "Data-driven insights",
      ],
    },
    {
      title: "Cloud Migration",
      description:
        "Modernize infrastructure with secure, scalable cloud solutions",
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
      benefits: [
        "99.9% uptime guarantee",
        "Scalable infrastructure",
        "Cost optimization",
        "Enhanced security",
      ],
    },
    {
      title: "Digital Customer Experience",
      description:
        "Transform customer interactions with omnichannel digital solutions",
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        </svg>
      ),
      benefits: [
        "Personalized experiences",
        "Multi-channel integration",
        "Customer journey optimization",
        "Real-time engagement",
      ],
    },
  ];

  const transformationProcess = [
    {
      step: "1",
      title: "Assessment & Strategy",
      description:
        "Comprehensive analysis of current state and digital readiness assessment",
      activities: [
        "Business process evaluation",
        "Technology landscape audit",
        "Digital maturity assessment",
        "Strategic roadmap development",
      ],
    },
    {
      step: "2",
      title: "Design & Planning",
      description:
        "Detailed blueprint and implementation planning for transformation initiatives",
      activities: [
        "Solution architecture design",
        "Integration planning",
        "Change management strategy",
        "Risk mitigation planning",
      ],
    },
    {
      step: "3",
      title: "Implementation & Execution",
      description:
        "Agile implementation with continuous monitoring and adjustment",
      activities: [
        "Phased rollout approach",
        "User training and adoption",
        "Quality assurance testing",
        "Performance optimization",
      ],
    },
    {
      step: "4",
      title: "Optimization & Scale",
      description: "Continuous improvement and scaling of digital capabilities",
      activities: [
        "Performance monitoring",
        "User feedback integration",
        "Capability expansion",
        "ROI measurement",
      ],
    },
  ];

  const industryExpertise = [
    {
      industry: "Financial Services",
      focus: "Digital banking, fintech integration, regulatory compliance",
      outcomes: [
        "50% faster transactions",
        "Enhanced fraud detection",
        "Improved customer onboarding",
      ],
    },
    {
      industry: "Healthcare",
      focus: "Patient experience, telemedicine, data interoperability",
      outcomes: [
        "30% improved patient satisfaction",
        "Streamlined operations",
        "HIPAA compliance",
      ],
    },
    {
      industry: "Manufacturing",
      focus: "Industry 4.0, IoT integration, supply chain optimization",
      outcomes: [
        "25% operational efficiency",
        "Predictive maintenance",
        "Smart factory capabilities",
      ],
    },
    {
      industry: "Retail & E-commerce",
      focus:
        "Omnichannel experiences, inventory optimization, customer analytics",
      outcomes: [
        "40% increase in conversion",
        "Personalized shopping",
        "Real-time inventory",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/20 via-purple-600/15 to-blue-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Digital Transformation Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Accelerate your digital journey with comprehensive transformation
              strategies, cutting-edge technologies, and proven methodologies
              that drive measurable business outcomes
            </p>
          </div>

          {/* Transformation Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                200+
              </div>
              <div className="text-white/80">Transformations Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                85%
              </div>
              <div className="text-white/80">ROI Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                60%
              </div>
              <div className="text-white/80">Process Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                90%
              </div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
                  Comprehensive Digital Transformation
                </h2>
                <p className="text-lg text-tech-text-medium mb-6">
                  Our digital transformation services help organizations
                  reimagine their business models, optimize operations, and
                  create new value propositions through strategic technology
                  adoption.
                </p>
                <p className="text-lg text-tech-text-medium mb-8">
                  From process automation and cloud migration to AI
                  implementation and customer experience enhancement, we provide
                  end-to-end transformation solutions that drive sustainable
                  growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    Strategy & Planning
                  </span>
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    Technology Implementation
                  </span>
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    Change Management
                  </span>
                  <span className="px-4 py-2 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                    Performance Optimization
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-tech-primary/10 to-purple-600/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-bold text-tech-text-dark mb-2">
                        Accelerated Growth
                      </h3>
                      <p className="text-sm text-tech-text-medium">
                        Faster innovation and market response
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mx-auto mb-4">
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
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-bold text-tech-text-dark mb-2">
                        Proven Results
                      </h3>
                      <p className="text-sm text-tech-text-medium">
                        Measurable business outcomes
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4">
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
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <h3 className="font-bold text-tech-text-dark mb-2">
                        Best Practices
                      </h3>
                      <p className="text-sm text-tech-text-medium">
                        Industry-proven methodologies
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-gradient rounded-full flex items-center justify-center mx-auto mb-4">
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
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="font-bold text-tech-text-dark mb-2">
                        Expert Team
                      </h3>
                      <p className="text-sm text-tech-text-medium">
                        Certified transformation specialists
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Transformation Areas */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Transformation Focus Areas
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto">
                Comprehensive digital transformation across all aspects of your
                business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {transformationAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-tech-gradient rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {area.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                        {area.title}
                      </h3>
                      <p className="text-tech-text-medium mb-6 leading-relaxed">
                        {area.description}
                      </p>
                      <div className="space-y-2">
                        {area.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <svg
                              className="w-5 h-5 text-green-500 flex-shrink-0"
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
                            <span className="text-tech-text-medium">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Transformation Process */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Our Transformation Process
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto">
                Proven methodology for successful digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {transformationProcess.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full">
                    <div className="w-12 h-12 bg-tech-gradient rounded-full flex items-center justify-center mb-6">
                      <span className="text-xl font-bold text-white">
                        {phase.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                      {phase.title}
                    </h3>
                    <p className="text-tech-text-medium mb-6">
                      {phase.description}
                    </p>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-tech-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-tech-text-medium">
                            {activity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < transformationProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-tech-primary/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Industry Expertise */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Industry Expertise
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto">
                Tailored transformation solutions for your industry's unique
                challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industryExpertise.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                    {industry.industry}
                  </h3>
                  <p className="text-tech-text-medium mb-6">
                    <strong>Focus Areas:</strong> {industry.focus}
                  </p>
                  <div>
                    <h4 className="font-bold text-tech-text-dark mb-3">
                      Key Outcomes:
                    </h4>
                    <div className="space-y-2">
                      {industry.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <svg
                            className="w-4 h-4 text-green-500 flex-shrink-0"
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
                          <span className="text-tech-text-medium text-sm">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* CTA Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Start your digital transformation journey with a comprehensive
              assessment and strategic roadmap
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Transformation
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

export default DigitalTransformation;
