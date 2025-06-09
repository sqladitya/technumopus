import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const SapConsulting = () => {
  const features = [
    {
      title: "SAP S/4HANA Implementation",
      description:
        "Complete S/4HANA implementation services from planning to go-live support",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "SAP Migration Services",
      description:
        "Seamless migration from legacy SAP systems to modern platforms",
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
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
    },
    {
      title: "SAP System Optimization",
      description:
        "Performance tuning and optimization of existing SAP environments",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "SAP Support & Maintenance",
      description:
        "24/7 support and ongoing maintenance for your SAP landscape",
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
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  const benefits = [
    "Reduced operational costs by up to 30%",
    "Improved business process efficiency",
    "Enhanced data visibility and analytics",
    "Streamlined compliance and reporting",
    "Scalable solution for business growth",
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/20 via-purple-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            SAP Consulting Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Expert SAP implementations, optimizations, and support to transform
            your business operations
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
                  Transform Your Business with SAP
                </h2>
                <div className="space-y-6 text-lg text-tech-text-medium leading-relaxed">
                  <p>
                    As certified SAP partners, we bring deep expertise in
                    implementing, optimizing, and supporting SAP solutions
                    across all business functions. Our team has successfully
                    delivered over 100 SAP projects for enterprises worldwide.
                  </p>
                  <p>
                    Whether you're looking to migrate to S/4HANA, implement new
                    SAP modules, or optimize your existing SAP landscape, we
                    provide end-to-end consulting services that align with your
                    business objectives.
                  </p>
                  <p>
                    Our approach combines industry best practices with
                    innovative methodologies to ensure successful SAP
                    deployments that drive measurable business value.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-tech-primary mb-2">
                        100+
                      </div>
                      <div className="text-tech-text-medium">SAP Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-tech-primary mb-2">
                        15+
                      </div>
                      <div className="text-tech-text-medium">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-tech-primary mb-2">
                        50+
                      </div>
                      <div className="text-tech-text-medium">
                        Certified Consultants
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-tech-primary mb-2">
                        99%
                      </div>
                      <div className="text-tech-text-medium">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Services Features */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
                Our SAP Services
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Comprehensive SAP consulting services to accelerate your digital
                transformation
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

      {/* Benefits Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                  Business Benefits
                </h2>
                <p className="text-lg text-tech-text-medium mb-8">
                  Our SAP consulting services deliver tangible business value
                  through improved efficiency, cost reduction, and enhanced
                  operational visibility.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-tech-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                      <p className="text-tech-text-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-tech-text-dark mb-6">
                  Implementation Methodology
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-tech-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-tech-text-dark mb-1">
                        Assessment & Planning
                      </h4>
                      <p className="text-sm text-tech-text-medium">
                        Current state analysis and future state design
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-tech-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-tech-text-dark mb-1">
                        System Configuration
                      </h4>
                      <p className="text-sm text-tech-text-medium">
                        SAP system setup and customization
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-tech-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-tech-text-dark mb-1">
                        Testing & Training
                      </h4>
                      <p className="text-sm text-tech-text-medium">
                        Comprehensive testing and user training programs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-tech-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-tech-text-dark mb-1">
                        Go-Live & Support
                      </h4>
                      <p className="text-sm text-tech-text-medium">
                        Deployment and ongoing support services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* CTA Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Ready to Transform Your SAP Landscape?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Let's discuss how our SAP consulting services can drive your
              business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </a>
              <a
                href="/about"
                className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default SapConsulting;
