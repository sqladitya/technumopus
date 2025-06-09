import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const CloudPartners = () => {
  const cloudPartners = [
    {
      name: "Amazon Web Services (AWS)",
      logo: "/assets/aws-logo.svg",
      tier: "Premier Partner",
      description:
        "Leading cloud platform providing scalable infrastructure, storage, and computing services worldwide.",
      services: [
        "EC2 Compute Services",
        "S3 Storage Solutions",
        "RDS Database Services",
        "Lambda Serverless Computing",
        "CloudFormation Infrastructure as Code",
        "AWS Security Services",
      ],
      certifications: [
        "AWS Solutions Architect Professional",
        "AWS DevOps Engineer Professional",
        "AWS Security Specialty",
        "AWS Advanced Networking",
      ],
      caseStudies: [
        "Migrated 500+ servers to AWS with zero downtime",
        "Reduced infrastructure costs by 40% through optimization",
        "Implemented multi-region disaster recovery solution",
      ],
    },
    {
      name: "Microsoft Azure",
      logo: "/assets/azure-logo.svg",
      tier: "Gold Partner",
      description:
        "Comprehensive cloud platform offering integrated services for computing, analytics, storage and networking.",
      services: [
        "Azure Virtual Machines",
        "Azure SQL Database",
        "Azure Active Directory",
        "Azure DevOps Services",
        "Azure Kubernetes Service",
        "Azure Security Center",
      ],
      certifications: [
        "Azure Solutions Architect Expert",
        "Azure Administrator Associate",
        "Azure Security Engineer Associate",
        "Azure DevOps Engineer Expert",
      ],
      caseStudies: [
        "Modernized legacy applications using Azure PaaS",
        "Implemented hybrid cloud architecture for enterprise client",
        "Deployed AI/ML solutions using Azure Cognitive Services",
      ],
    },
    {
      name: "Google Cloud Platform",
      logo: "/assets/google-cloud-logo.svg",
      tier: "Premier Partner",
      description:
        "Advanced cloud platform with leading AI/ML capabilities and global infrastructure for modern applications.",
      services: [
        "Compute Engine",
        "Google Kubernetes Engine",
        "BigQuery Analytics",
        "Cloud AI Platform",
        "Cloud Storage",
        "Cloud Security Command Center",
      ],
      certifications: [
        "Google Cloud Professional Architect",
        "Google Cloud Professional DevOps Engineer",
        "Google Cloud Professional Data Engineer",
        "Google Cloud Professional Security Engineer",
      ],
      caseStudies: [
        "Built scalable data analytics platform using BigQuery",
        "Implemented ML-powered recommendation engine",
        "Migrated containerized applications to GKE",
      ],
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/20 via-blue-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Cloud Partners
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Partnering with the world's leading cloud platforms to deliver
              scalable, secure, and innovative solutions for your business
              transformation
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                500+
              </div>
              <div className="text-white/80">Cloud Migrations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                99.99%
              </div>
              <div className="text-white/80">Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                40%
              </div>
              <div className="text-white/80">Average Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Detail */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-20">
              {cloudPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Partner Info */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-4 mb-6">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-16 h-12 object-contain"
                          />
                          <div>
                            <h3 className="text-2xl font-bold text-tech-text-dark">
                              {partner.name}
                            </h3>
                            <span className="inline-block px-3 py-1 bg-tech-primary/10 text-tech-primary text-sm rounded-full font-semibold">
                              {partner.tier}
                            </span>
                          </div>
                        </div>
                        <p className="text-tech-text-medium mb-6 leading-relaxed">
                          {partner.description}
                        </p>

                        {/* Certifications */}
                        <div className="mb-6">
                          <h4 className="font-bold text-tech-text-dark mb-3">
                            Our Certifications
                          </h4>
                          <div className="space-y-2">
                            {partner.certifications.map((cert, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2"
                              >
                                <div className="w-2 h-2 bg-tech-primary rounded-full flex-shrink-0" />
                                <span className="text-sm text-tech-text-medium">
                                  {cert}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Services */}
                      <div className="lg:col-span-1">
                        <h4 className="text-xl font-bold text-tech-text-dark mb-4">
                          Key Services
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {partner.services.map((service, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                            >
                              <svg
                                className="w-5 h-5 text-tech-primary mt-0.5 flex-shrink-0"
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
                                {service}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Case Studies */}
                      <div className="lg:col-span-1">
                        <h4 className="text-xl font-bold text-tech-text-dark mb-4">
                          Success Stories
                        </h4>
                        <div className="space-y-4">
                          {partner.caseStudies.map((study, idx) => (
                            <div
                              key={idx}
                              className="bg-tech-gradient/10 rounded-lg p-4 border-l-4 border-tech-primary"
                            >
                              <p className="text-tech-text-medium text-sm">
                                {study}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6">
                          <button className="w-full px-6 py-3 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
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

      {/* Cloud Benefits */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Why Cloud Partnership Matters
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto">
                Our cloud partnerships ensure you get the best of breed
                solutions with expert implementation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mb-6">
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
                  Faster Time to Market
                </h3>
                <p className="text-tech-text-medium">
                  Accelerate your digital transformation with proven cloud
                  architectures and best practices.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-green-gradient rounded-full flex items-center justify-center mb-6">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Cost Optimization
                </h3>
                <p className="text-tech-text-medium">
                  Reduce infrastructure costs through right-sizing, reserved
                  instances, and intelligent automation.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mb-6">
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
                  Enterprise Security
                </h3>
                <p className="text-tech-text-medium">
                  Implement robust security frameworks with compliance and
                  governance built-in from day one.
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
              Ready to Transform Your Business with Cloud?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Let our cloud experts help you choose the right platform and
              strategy for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Cloud Journey
              </a>
              <a
                href="/services/cloud-architecture"
                className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
              >
                View Cloud Services
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default CloudPartners;
