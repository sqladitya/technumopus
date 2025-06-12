import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const Careers = () => {
  const benefits = [
    {
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Competitive Compensation",
      description:
        "Market-leading salaries, performance bonuses, and equity options",
    },
    {
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, dental, vision, and wellness programs",
    },
    {
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Learning & Development",
      description:
        "Continuous learning opportunities, certifications, and conference attendance",
    },
    {
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Flexible Work",
      description:
        "Remote work options, flexible hours, and work-life balance support",
    },
  ];

  const openPositions = [
    {
      title: "Senior SAP Consultant",
      department: "SAP Practice",
      location: "Remote / Hybrid",
      type: "Full-time",
      description:
        "Lead SAP S/4HANA implementations and guide clients through digital transformation initiatives.",
      requirements: [
        "5+ years SAP consulting experience",
        "S/4HANA certification preferred",
        "Strong client communication skills",
      ],
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Services",
      location: "Remote / Hybrid",
      type: "Full-time",
      description:
        "Design and implement scalable cloud architectures for enterprise clients across AWS, Azure, and GCP.",
      requirements: [
        "Cloud architecture certification",
        "5+ years enterprise experience",
        "Multi-cloud expertise",
      ],
    },
    {
      title: "Full Stack Developer",
      department: "Software Development",
      location: "Remote / Hybrid",
      type: "Full-time",
      description:
        "Develop modern web applications and SAAS platforms using cutting-edge technologies.",
      requirements: [
        "React/Node.js expertise",
        "3+ years development experience",
        "API design knowledge",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Hybrid",
      type: "Full-time",
      description:
        "Build and maintain CI/CD pipelines, infrastructure automation, and monitoring systems.",
      requirements: [
        "Kubernetes/Docker experience",
        "Infrastructure as Code",
        "Monitoring and logging tools",
      ],
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Remote / Hybrid",
      type: "Full-time",
      description:
        "Identify and develop new business opportunities with enterprise clients.",
      requirements: [
        "B2B sales experience",
        "Technology sector knowledge",
        "Relationship building skills",
      ],
    },
  ];

  return (
    <SectionBackground variant="light">
      <Navigation />

      {/* Hero Section */}
      <SectionBackground variant="gradient">
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tech-text-dark mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-tech-text-medium max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology and
              transforming businesses worldwide.
            </p>
          </div>
        </section>
      </SectionBackground>

      {/* Why Join Us Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
                Why Choose Technum Opus?
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Join a culture of innovation, growth, and excellence where your
                contributions make a real impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-tech-text-dark mb-4 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-tech-text-medium text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Open Positions Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Explore opportunities to grow your career with us
              </p>
            </div>

            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-tech-text-dark">
                          {position.title}
                        </h3>
                        <span className="px-3 py-1 bg-tech-primary/10 text-tech-primary rounded-full text-sm font-medium">
                          {position.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-tech-text-medium">
                        <span>📍 {position.location}</span>
                        <span>🏢 {position.department}</span>
                      </div>
                      <p className="text-tech-text-medium mb-6 leading-relaxed">
                        {position.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-tech-text-dark mb-3">
                          Requirements:
                        </h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-tech-text-medium"
                            >
                              <span className="w-2 h-2 bg-tech-primary rounded-full"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:col-span-1 flex flex-col justify-center">
                      <button className="w-full bg-tech-gradient text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 mb-4">
                        Apply Now
                      </button>
                      <button className="w-full border-2 border-tech-primary text-tech-primary py-3 px-6 rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Culture Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
                Our Culture
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Building an environment where innovation thrives and people grow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                  Innovation First
                </h3>
                <p className="text-tech-text-medium">
                  We encourage creative thinking and provide the resources to
                  turn ideas into reality.
                </p>
              </div>
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                  Continuous Learning
                </h3>
                <p className="text-tech-text-medium">
                  Stay ahead with ongoing training, certifications, and skill
                  development opportunities.
                </p>
              </div>
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                  Work-Life Balance
                </h3>
                <p className="text-tech-text-medium">
                  Flexible work arrangements that support your personal and
                  professional growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </SectionBackground>
  );
};

export default Careers;
