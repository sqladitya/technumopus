import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Section } from "@/components/ContentSections";

const Leadership = () => {
  const executiveTeam = [
    {
      name: "Sarah Chen",
      title: "Chief Executive Officer & Founder",
      bio: "Sarah founded Technum Opus with a vision to democratize enterprise technology. With over 20 years in technology leadership, she previously led digital transformation initiatives at Fortune 500 companies.",
      specialties: [
        "Digital Strategy",
        "Enterprise Architecture",
        "Innovation Management",
      ],
      experience: "20+ years",
      category: "Executive",
    },
    {
      name: "Michael Rodriguez",
      title: "Chief Technology Officer",
      bio: "Michael oversees all technical operations and innovation at Technum Opus. He brings 18 years of experience in cloud architecture and enterprise software development.",
      specialties: ["Cloud Architecture", "DevOps", "System Integration"],
      experience: "18+ years",
      category: "Executive",
    },
    {
      name: "Emily Thompson",
      title: "Chief Operating Officer",
      bio: "Emily ensures operational excellence across all Technum Opus initiatives. Her background in process optimization and project management drives our delivery excellence.",
      specialties: [
        "Operations Management",
        "Process Optimization",
        "Quality Assurance",
      ],
      experience: "15+ years",
      category: "Executive",
    },
    {
      name: "David Park",
      title: "Chief Financial Officer",
      bio: "David manages financial strategy and operations, bringing deep expertise in technology sector finance and strategic planning.",
      specialties: [
        "Financial Strategy",
        "Investment Planning",
        "Risk Management",
      ],
      experience: "17+ years",
      category: "Executive",
    },
  ];

  const departmentHeads = [
    {
      name: "Dr. Rajesh Patel",
      title: "Head of SAP Practice",
      bio: "Leading our SAP consulting division with deep expertise in S/4HANA transformations and enterprise implementations.",
      specialties: ["SAP S/4HANA", "Enterprise Integration", "Digital Core"],
      experience: "22+ years",
      category: "Department Head",
    },
    {
      name: "Lisa Wang",
      title: "Head of Cloud Services",
      bio: "Driving our cloud strategy and helping clients achieve scalable, secure cloud architectures across all major platforms.",
      specialties: ["AWS", "Azure", "Multi-Cloud Strategy"],
      experience: "14+ years",
      category: "Department Head",
    },
    {
      name: "James Mitchell",
      title: "Head of Software Development",
      bio: "Leading our SAAS development initiatives and custom software solutions with a focus on scalability and innovation.",
      specialties: ["Full-Stack Development", "Microservices", "API Design"],
      experience: "16+ years",
      category: "Department Head",
    },
    {
      name: "Maria Garcia",
      title: "Head of Digital Transformation",
      bio: "Guiding organizations through comprehensive digital transformation journeys with strategic planning and change management.",
      specialties: [
        "Change Management",
        "Digital Strategy",
        "Process Reengineering",
      ],
      experience: "19+ years",
      category: "Department Head",
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <Section className="bg-accenture-black text-white pt-24 pb-16">
        <div className="text-center animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-6">
            LEADERSHIP
          </div>
          <h1 className="text-display font-semibold text-white mb-8">
            Meet Our Leadership Team
          </h1>
          <p className="text-body-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Experienced leaders driving innovation and excellence in technology
            solutions
          </p>
        </div>
      </Section>

      {/* Executive Team */}
      <Section className="bg-white">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            EXECUTIVE LEADERSHIP
          </div>
          <h2 className="text-heading-xl font-semibold text-accenture-text-primary mb-6">
            Executive Leadership
          </h2>
          <p className="text-body-xl text-gray-400 max-w-3xl mx-auto">
            Our executive team brings decades of combined experience in
            technology, business strategy, and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {executiveTeam.map((leader, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 border border-accenture-purple/20 rounded-xl p-8 hover:from-accenture-purple/5 hover:to-accenture-purple/10 hover:border-accenture-purple/40 hover:shadow-accenture transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-accenture-purple rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-white">
                    {leader.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-semibold text-accenture-text-primary mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-accenture-purple font-semibold mb-4">
                    {leader.title}
                  </p>
                  <p className="text-accenture-text-secondary mb-6 leading-relaxed">
                    {leader.bio}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-body-sm font-semibold text-accenture-text-tertiary uppercase tracking-wider mb-3">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-accenture-purple/10 text-accenture-purple rounded-full text-sm font-medium border border-accenture-purple/20"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-body-sm text-accenture-text-light">
                    <span className="font-semibold">Experience:</span>{" "}
                    {leader.experience}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Department Heads */}
      <Section className="bg-accenture-gray-50">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            DEPARTMENT LEADERS
          </div>
          <h2 className="text-heading-xl font-semibold text-black mb-6">
            Department Leaders
          </h2>
          <p className="text-body-xl text-gray-400 max-w-3xl mx-auto">
            Department heads who ensure excellence in their respective areas of
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {departmentHeads.map((leader, index) => (
            <div
              key={index}
              className="group text-center bg-white border border-accenture-purple/20 rounded-xl p-6 hover:shadow-accenture hover:border-accenture-purple/40 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-accenture-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-bold text-white">
                  {leader.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="text-heading-md font-semibold text-accenture-text-primary mb-2">
                {leader.name}
              </h3>
              <p className="text-accenture-purple font-semibold mb-4">
                {leader.title}
              </p>
              <p className="text-accenture-text-secondary text-sm mb-4 leading-relaxed">
                {leader.bio}
              </p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-1 justify-center">
                  {leader.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-accenture-purple/10 text-accenture-purple rounded-full text-xs font-medium border border-accenture-purple/20"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-body-sm text-accenture-text-light">
                <span className="font-semibold">Experience:</span>{" "}
                {leader.experience}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership Excellence Stats */}
      <Section className="bg-white">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            LEADERSHIP EXCELLENCE
          </div>
          <h2 className="text-heading-xl font-semibold text-accenture-text-primary mb-6">
            Leadership Excellence
          </h2>
          <p className="text-body-xl text-gray-400 max-w-3xl mx-auto">
            Our leadership team's collective impact and achievements
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              number: "150+",
              label: "Combined Years Experience",
              color: "accenture-purple",
            },
            {
              number: "25+",
              label: "Industry Certifications",
              color: "accenture-purple",
            },
            {
              number: "500+",
              label: "Projects Led",
              color: "accenture-purple",
            },
            {
              number: "98%",
              label: "Client Satisfaction",
              color: "accenture-purple",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="group text-center bg-gradient-to-br from-white to-gray-50 border border-accenture-purple/20 rounded-xl p-6 md:p-8 hover:from-accenture-purple/5 hover:to-accenture-purple/10 hover:border-accenture-purple/40 hover:shadow-accenture transition-all duration-300 hover:-translate-y-2 animate-fade-in"
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

      {/* Call to Action */}
      <Section className="bg-accenture-purple text-white">
        <div className="text-center py-12 animate-fade-in">
          <h2 className="text-heading-xl font-semibold text-white mb-6">
            Ready to work with our leadership team?
          </h2>
          <p className="text-body-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Connect with our experienced leaders to discuss how we can help
            transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-accenture-purple rounded-lg font-semibold hover:bg-accenture-gray-50 transition-all duration-300 hover:scale-105 text-xl"
            >
              Get in touch
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
              to="/about"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-xl"
            >
              Learn more about us
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Leadership;
