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
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          text: "text-blue-600",
          accent: "bg-blue-100",
        };
      case "gray":
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          text: "text-gray-600",
          accent: "bg-gray-100",
        };
      case "red":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-600",
          accent: "bg-red-100",
        };
      case "purple":
        return {
          bg: "bg-purple-50",
          border: "border-purple-200",
          text: "text-purple-600",
          accent: "bg-purple-100",
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          text: "text-gray-600",
          accent: "bg-gray-100",
        };
    }
  };

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <SectionBackground variant="gradient">
        <section className="pt-24 pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-tech-text-dark mb-6">
              Our <span className="text-tech-primary">Partners</span>
            </h1>
            <p className="text-xl md:text-2xl text-tech-text-medium max-w-4xl mx-auto">
              Industry leaders we collaborate with to deliver exceptional
              solutions
            </p>
          </div>
        </section>
      </SectionBackground>

      {/* Partner Categories */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
                Partner Categories
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                We work with best-in-class partners across different technology
                domains
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {partnerCategories.map((category, index) => {
                const colors = getColorClasses(category.color);
                return (
                  <div
                    key={index}
                    className={`${colors.bg} ${colors.border} border rounded-3xl p-8`}
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                        {category.title}
                      </h3>
                      <p className="text-tech-text-medium">
                        {category.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {category.partners.map((partner, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            {partner.logo && (
                              <img
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                className="w-12 h-12 object-contain"
                              />
                            )}
                            <div>
                              <h4 className="font-bold text-tech-text-dark">
                                {partner.name}
                              </h4>
                            </div>
                          </div>
                          <div
                            className={`${colors.accent} ${colors.text} px-3 py-1 rounded-full text-sm font-medium`}
                          >
                            {partner.tier}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Partners Logos Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
                Trusted by Industry Leaders
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

      <Footer />
    </div>
  );
};

export default ViewAllPartners;
