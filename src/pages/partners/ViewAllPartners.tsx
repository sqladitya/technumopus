import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";
import PartnersLogos from "@/components/PartnersLogos";

const ViewAllPartners = () => {
  const partnerCategories = [
    {
      title: "Cloud Partners",
      description: "Leading cloud platform providers",
      partners: [
        {
          name: "Amazon Web Services",
          logo: "/assets/aws-logo.svg",
          tier: "Premier",
        },
        {
          name: "Microsoft Azure",
          logo: "/assets/azure-logo.svg",
          tier: "Gold",
        },
        {
          name: "Google Cloud Platform",
          logo: "/assets/google-cloud-logo.svg",
          tier: "Premier",
        },
      ],
      color: "blue",
    },
    {
      title: "Technology Partners",
      description: "Enterprise hardware and infrastructure",
      partners: [
        { name: "Cisco", tier: "Gold" },
        { name: "Dell Technologies", tier: "Premier" },
        { name: "HP Enterprise", tier: "Gold" },
        { name: "Lenovo", logo: "/assets/lenovo-logo.svg", tier: "Authorized" },
      ],
      color: "gray",
    },
    {
      title: "Security Partners",
      description: "Cybersecurity and threat protection",
      partners: [
        { name: "Palo Alto Networks", tier: "Platinum" },
        {
          name: "SentinelOne",
          logo: "/assets/sentinelone-logo.svg",
          tier: "Elite",
        },
        { name: "CrowdStrike", tier: "Premier" },
        { name: "Fortinet", tier: "Gold" },
      ],
      color: "red",
    },
    {
      title: "Integration Partners",
      description: "System integration and mobility solutions",
      partners: [
        { name: "Zebra Technologies", tier: "Premier" },
        { name: "Honeywell", tier: "Gold" },
        { name: "Motorola Solutions", tier: "Authorized" },
        { name: "Datalogic", tier: "Certified" },
        { name: "Impinj", tier: "Technology" },
        { name: "Intermec (Honeywell)", tier: "Legacy" },
      ],
      color: "pink",
    },
  ];

  const partnershipPrograms = [
    {
      title: "Technology Partner Program",
      description: "Join our ecosystem of technology innovators",
      benefits: [
        "Co-marketing opportunities",
        "Technical training and certification",
        "Sales lead sharing",
        "Joint solution development",
      ],
      requirements: [
        "Proven technology expertise",
        "Market presence and reputation",
        "Commitment to customer success",
        "Technical integration capabilities",
      ],
    },
    {
      title: "Channel Partner Program",
      description: "Expand your reach through our partner network",
      benefits: [
        "Revenue sharing opportunities",
        "Access to exclusive solutions",
        "Marketing development funds",
        "Technical support resources",
      ],
      requirements: [
        "Sales and marketing capabilities",
        "Customer base alignment",
        "Geographic coverage",
        "Service delivery capabilities",
      ],
    },
  ];

  const getTierColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case "premier":
      case "platinum":
      case "elite":
        return "bg-yellow-100 text-yellow-800";
      case "gold":
        return "bg-orange-100 text-orange-800";
      case "authorized":
      case "certified":
        return "bg-blue-100 text-blue-800";
      case "technology":
      case "legacy":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/20 via-purple-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              All Partners
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Comprehensive overview of our strategic partnerships spanning
              cloud, technology, security, and integration solutions
            </p>
          </div>

          {/* Global Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                50+
              </div>
              <div className="text-white/80">Global Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                15+
              </div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                1000+
              </div>
              <div className="text-white/80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                24/7
              </div>
              <div className="text-white/80">Global Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories Overview */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Partner Ecosystem
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto">
                Our comprehensive partner network spans every aspect of
                enterprise technology
              </p>
            </div>

            <div className="space-y-12">
              {partnerCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Category Header */}
                      <div className="lg:w-1/3">
                        <div
                          className={`w-16 h-16 bg-${category.color}-gradient rounded-full flex items-center justify-center mb-6`}
                        >
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
                        <h3 className="text-3xl font-bold text-tech-text-dark mb-4">
                          {category.title}
                        </h3>
                        <p className="text-lg text-tech-text-medium mb-6">
                          {category.description}
                        </p>
                        <a
                          href={`/partners/${category.title.toLowerCase().replace(" ", "-")}`}
                          className={`inline-flex items-center gap-2 px-6 py-3 bg-${category.color}-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                        >
                          View Category
                          <svg
                            className="w-4 h-4"
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
                        </a>
                      </div>

                      {/* Partners Grid */}
                      <div className="lg:w-2/3">
                        <h4 className="text-xl font-bold text-tech-text-dark mb-6">
                          Featured Partners
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.partners.map((partner, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border hover:shadow-md transition-all duration-300"
                            >
                              <div className="flex items-center gap-4">
                                {partner.logo ? (
                                  <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="w-12 h-8 object-contain"
                                  />
                                ) : (
                                  <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                                    <span className="text-xs font-bold text-gray-600">
                                      {partner.name
                                        .split(" ")
                                        .map((w) => w[0])
                                        .join("")}
                                    </span>
                                  </div>
                                )}
                                <div>
                                  <div className="font-semibold text-tech-text-dark">
                                    {partner.name}
                                  </div>
                                </div>
                              </div>
                              <span
                                className={`px-3 py-1 text-xs font-semibold rounded-full ${getTierColor(partner.tier)}`}
                              >
                                {partner.tier}
                              </span>
                            </div>
                          ))}
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

      {/* Featured Partners Logos */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Featured Partners
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto">
                Industry leaders we collaborate with to deliver exceptional
                solutions
              </p>
            </div>
            <PartnersLogos />
          </div>
        </section>
      </SectionBackground>

      {/* Partnership Programs */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Partnership Programs
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto">
                Join our partner ecosystem and grow your business with us
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {partnershipPrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                      {program.title}
                    </h3>
                    <p className="text-tech-text-medium mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-tech-text-dark mb-3">
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {program.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <svg
                                className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
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
                              <span className="text-sm text-tech-text-medium">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-tech-text-dark mb-3">
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {program.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <svg
                                className="w-4 h-4 text-tech-primary mt-0.5 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                              <span className="text-sm text-tech-text-medium">
                                {req}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <button className="w-full px-6 py-3 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                        Apply for Partnership
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Partnership Value */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Partnership Value
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto">
                Why leading technology companies choose to partner with Technum{" "}
                <span className="text-tech-primary">Opus</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Expert Team
                </h3>
                <p className="text-tech-text-medium text-sm">
                  Certified professionals with deep technical expertise across
                  all partner technologies
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-green-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                  Proven Results
                </h3>
                <p className="text-tech-text-medium text-sm">
                  Track record of successful implementations and customer
                  satisfaction
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-purple-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Global Reach
                </h3>
                <p className="text-tech-text-medium text-sm">
                  International presence with ability to deliver solutions
                  worldwide
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-orange-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Customer Focus
                </h3>
                <p className="text-tech-text-medium text-sm">
                  Commitment to customer success and long-term partnership
                  relationships
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Join our ecosystem of technology leaders and grow your business
              through strategic partnerships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Become a Partner
              </a>
              <a
                href="/about"
                className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default ViewAllPartners;
