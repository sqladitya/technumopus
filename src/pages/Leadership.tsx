import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

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

  const allLeaders = [...executiveTeam, ...departmentHeads];

  return (
    <SectionBackground variant="light">
      <Navigation />

      {/* Hero Section */}
      <SectionBackground variant="gradient">
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accenture-text-primary mb-6">
              Meet Our Leadership Team
            </h1>
            <p className="text-xl md:text-2xl text-accenture-text-secondary max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in
              technology solutions
            </p>
          </div>
        </section>
      </SectionBackground>

      {/* Executive Team */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accenture-text-primary mb-6">
                Executive Leadership
              </h2>
              <p className="text-xl text-accenture-text-secondary max-w-3xl mx-auto">
                Our executive team brings decades of combined experience in
                technology, business strategy, and operational excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {executiveTeam.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-24 h-24 bg-accenture-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-white">
                        {leader.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-4">
                        {leader.title}
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {leader.bio}
                      </p>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">
                          Specialties:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {leader.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-accenture-purple/10 text-accenture-purple rounded-full text-sm font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-accenture-text-tertiary">
                        <strong>Experience:</strong> {leader.experience}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Department Heads */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accenture-text-primary mb-6">
                Department Leaders
              </h2>
              <p className="text-xl text-accenture-text-secondary max-w-3xl mx-auto">
                Department heads who ensure excellence in their respective areas
                of expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {departmentHeads.map((leader, index) => (
                <div
                  key={index}
                  className="text-center bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                >
                  <div className="w-20 h-20 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-xl font-bold text-white">
                      {leader.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {leader.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {leader.bio}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {leader.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-tech-primary/10 text-tech-primary rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-tech-text-light">
                    <strong>Experience:</strong> {leader.experience}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Leadership Stats */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-accenture-text-primary mb-6">
                Leadership Excellence
              </h2>
              <p className="text-xl text-accenture-text-secondary max-w-3xl mx-auto">
                Our leadership team's collective impact and achievements
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-bold text-tech-primary mb-2">
                  150+
                </div>
                <div className="text-gray-600">Combined Years Experience</div>
              </div>
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-bold text-tech-primary mb-2">
                  25+
                </div>
                <div className="text-gray-600">Industry Certifications</div>
              </div>
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Projects Led</div>
              </div>
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </SectionBackground>
  );
};

export default Leadership;
