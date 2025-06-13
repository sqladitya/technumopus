import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Section } from "@/components/ContentSections";

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
      description: "Remote work options, flexible hours, and work-life balance",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Team Culture",
      description:
        "Collaborative environment, team events, and inclusive culture",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Innovation Time",
      description:
        "20% time for personal projects and exploring new technologies",
    },
  ];

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      description:
        "Join our engineering team to build scalable SaaS platforms and enterprise solutions.",
      requirements: [
        "5+ years of software development experience",
        "Proficiency in React, Node.js, and cloud platforms",
        "Experience with microservices architecture",
        "Strong problem-solving skills",
      ],
    },
    {
      title: "SAP Consultant",
      department: "Consulting",
      location: "New York, NY / Remote",
      type: "Full-time",
      description:
        "Lead SAP implementation projects and provide expert consulting to enterprise clients.",
      requirements: [
        "SAP certification (S/4HANA preferred)",
        "3+ years of SAP implementation experience",
        "Strong client-facing skills",
        "Experience with business process optimization",
      ],
    },
    {
      title: "Cloud Architect",
      department: "Architecture",
      location: "Seattle, WA / Remote",
      type: "Full-time",
      description:
        "Design and implement enterprise cloud architectures for our diverse client base.",
      requirements: [
        "AWS/Azure/GCP certifications",
        "5+ years of cloud architecture experience",
        "Infrastructure as Code expertise",
        "Security and compliance knowledge",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Operations",
      location: "Austin, TX / Remote",
      type: "Full-time",
      description:
        "Build and maintain CI/CD pipelines and infrastructure automation.",
      requirements: [
        "3+ years of DevOps experience",
        "Kubernetes and Docker expertise",
        "CI/CD pipeline management",
        "Monitoring and observability tools",
      ],
    },
  ];

  const workCulture = [
    {
      title: "Innovation First",
      description:
        "We encourage creative thinking and provide time for exploring new technologies and solutions.",
      icon: "💡",
    },
    {
      title: "Growth Mindset",
      description:
        "Continuous learning and development opportunities to advance your career and skills.",
      icon: "🚀",
    },
    {
      title: "Work-Life Balance",
      description:
        "Flexible schedules and remote work options to maintain a healthy work-life balance.",
      icon: "⚖️",
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <Section className="bg-accenture-black text-white pt-24 pb-16">
        <div className="text-center animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-6">
            CAREERS
          </div>
          <h1 className="text-display font-semibold text-white mb-8">
            Build Your Future With Us
          </h1>
          <p className="text-body-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
            Be part of a team that's shaping the future of technology and
            transforming businesses worldwide through innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="#open-positions"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105 text-xl"
            >
              View Open Positions
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-xl"
            >
              Contact HR
            </Link>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-white">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            BENEFITS & PERKS
          </div>
          <h2 className="text-heading-xl font-semibold text-gray-900 mb-6">
            Why Work With Us
          </h2>
          <p className="text-body-xl text-gray-400 max-w-3xl mx-auto">
            We believe in investing in our people with comprehensive benefits
            and a culture that promotes growth and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 border border-accenture-purple/20 rounded-xl p-8 text-center hover:from-accenture-purple/5 hover:to-accenture-purple/10 hover:border-accenture-purple/40 hover:shadow-accenture transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-accenture-purple rounded-xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-heading-md font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Open Positions */}
      <Section className="bg-accenture-gray-50" id="open-positions">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            OPEN POSITIONS
          </div>
          <h2 className="text-heading-xl font-semibold text-gray-900 mb-6">
            Current Opportunities
          </h2>
          <p className="text-body-xl text-gray-400 max-w-3xl mx-auto">
            Explore our current job openings and find the perfect role to
            advance your career in technology.
          </p>
        </div>

        <div className="space-y-6">
          {openPositions.map((position, index) => (
            <div
              key={index}
              className="group bg-white border border-accenture-purple/20 rounded-xl p-8 hover:shadow-accenture hover:border-accenture-purple/40 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-heading-md font-semibold text-gray-900">
                      {position.title}
                    </h3>
                    <span className="px-3 py-1.5 bg-accenture-purple/10 text-accenture-purple text-sm font-medium rounded-full border border-accenture-purple/20">
                      {position.department}
                    </span>
                    <span className="px-3 py-1.5 bg-accenture-purple/10 text-accenture-purple text-sm font-medium rounded-full border border-accenture-purple/20">
                      {position.type}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 flex items-center gap-2">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {position.location}
                  </p>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  <div>
                    <h4 className="text-body-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accenture-purple rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-3 lg:w-48">
                  <button className="px-6 py-3 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105">
                    Apply Now
                  </button>
                  <button className="px-6 py-3 border-2 border-accenture-purple text-accenture-purple rounded-lg font-semibold hover:bg-accenture-purple hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <p className="text-gray-700 mb-6">
            Don't see a role that fits? We're always looking for talented
            individuals.
          </p>
          <button className="px-10 py-4 bg-accenture-purple text-white rounded-lg font-semibold text-lg hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105">
            Send Your Resume
          </button>
        </div>
      </Section>

      {/* Work Culture */}
      <Section className="bg-white">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            OUR CULTURE
          </div>
          <h2 className="text-heading-xl font-semibold text-gray-900 mb-6">
            What Makes Us Different
          </h2>
          <p className="text-body-xl text-gray-400 max-w-3xl mx-auto">
            Our culture is built on collaboration, innovation, and a shared
            commitment to excellence in everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workCulture.map((culture, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 border border-accenture-purple/20 rounded-xl p-8 text-center hover:from-accenture-purple/5 hover:to-accenture-purple/10 hover:border-accenture-purple/40 hover:shadow-accenture transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {culture.icon}
              </div>
              <h3 className="text-heading-md font-semibold text-gray-900 mb-4">
                {culture.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {culture.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Statistics Section */}
      <Section className="bg-accenture-gray-50">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            WHY JOIN US
          </div>
          <h2 className="text-heading-xl font-semibold text-accenture-text-primary mb-6">
            Our Impact in Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              number: "500+",
              label: "Team Members",
              color: "accenture-purple",
            },
            {
              number: "50+",
              label: "Countries Served",
              color: "accenture-purple",
            },
            {
              number: "98%",
              label: "Employee Satisfaction",
              color: "accenture-purple",
            },
            {
              number: "4.9",
              label: "Glassdoor Rating",
              color: "accenture-purple",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center bg-white border border-accenture-purple/20 rounded-xl p-6 md:p-8 hover:shadow-accenture hover:border-accenture-purple/40 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-accenture-purple mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-accenture-text-secondary font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-accenture-purple text-white">
        <div className="text-center py-12 animate-fade-in">
          <h2 className="text-heading-xl font-semibold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-body-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Take the next step in your career and become part of a team that's
            making a real impact in the world of technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="#open-positions"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-accenture-purple rounded-lg font-semibold hover:bg-accenture-gray-50 transition-all duration-300 hover:scale-105 text-xl"
            >
              View Open Positions
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-xl"
            >
              Contact HR
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Careers;
