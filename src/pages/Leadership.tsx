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
      bio: "Emily ensures operational excellence and client satisfaction across all projects. With 15 years in consulting and project management, she has delivered over 200 successful implementations.",
      specialties: [
        "Project Management",
        "Process Optimization",
        "Client Relations",
      ],
      experience: "15+ years",
      category: "Executive",
    },
  ];

  const managers = [
    {
      name: "David Park",
      title: "Engineering Manager",
      bio: "David leads our engineering teams and ensures technical excellence across all projects. He specializes in agile methodologies and team development with a focus on delivering scalable solutions.",
      specialties: ["Team Leadership", "Agile Development", "Code Quality"],
      experience: "12+ years",
      category: "Management",
    },
    {
      name: "Dr. Aisha Patel",
      title: "Product Manager",
      bio: "Dr. Patel drives product strategy and innovation. She holds a PhD in Computer Science and bridges the gap between technical capabilities and business requirements.",
      specialties: ["Product Strategy", "Requirements Analysis", "Innovation"],
      experience: "14+ years",
      category: "Management",
    },
    {
      name: "James Wilson",
      title: "Project Manager",
      bio: "James manages complex enterprise implementations and ensures projects are delivered on time and within budget. He's PMP certified with expertise in enterprise solutions.",
      specialties: ["Project Planning", "Risk Management", "Client Delivery"],
      experience: "10+ years",
      category: "Management",
    },
    {
      name: "Lisa Zhang",
      title: "QA Manager",
      bio: "Lisa oversees quality assurance processes and testing strategies. She ensures all deliverables meet the highest standards of quality and reliability.",
      specialties: [
        "Quality Assurance",
        "Testing Strategy",
        "Process Improvement",
      ],
      experience: "11+ years",
      category: "Management",
    },
  ];

  const developers = [
    {
      name: "Alex Thompson",
      title: "Senior Full-Stack Developer",
      bio: "Alex specializes in modern web technologies and full-stack development. He leads the development of complex web applications and mentors junior developers.",
      specialties: ["React", "Node.js", "TypeScript", "Database Design"],
      experience: "8+ years",
      category: "Development",
    },
    {
      name: "Maria Santos",
      title: "Senior Frontend Developer",
      bio: "Maria creates beautiful and intuitive user interfaces. She's an expert in modern frontend frameworks and has a keen eye for user experience design.",
      specialties: ["React", "Vue.js", "CSS", "UX Design"],
      experience: "7+ years",
      category: "Development",
    },
    {
      name: "Jordan Kim",
      title: "Senior Backend Developer",
      bio: "Jordan builds robust and scalable backend systems. He specializes in microservices architecture and API development for enterprise applications.",
      specialties: ["Java", "Python", "Microservices", "API Development"],
      experience: "9+ years",
      category: "Development",
    },
    {
      name: "Rachel Green",
      title: "Mobile Developer",
      bio: "Rachel develops native and cross-platform mobile applications. She has expertise in both iOS and Android development with a focus on performance optimization.",
      specialties: ["React Native", "iOS", "Android", "Mobile Performance"],
      experience: "6+ years",
      category: "Development",
    },
    {
      name: "Thomas Brown",
      title: "SAP Developer",
      bio: "Thomas specializes in SAP development and customization. He has extensive experience in ABAP programming and SAP module implementations.",
      specialties: ["ABAP", "SAP HANA", "SAP S/4HANA", "SAP Integration"],
      experience: "10+ years",
      category: "Development",
    },
    {
      name: "Anna Martinez",
      title: "Database Developer",
      bio: "Anna designs and optimizes database systems for enterprise applications. She's an expert in both SQL and NoSQL databases with focus on performance tuning.",
      specialties: [
        "SQL Server",
        "MongoDB",
        "PostgreSQL",
        "Performance Tuning",
      ],
      experience: "8+ years",
      category: "Development",
    },
  ];

  const devopsTeam = [
    {
      name: "Chris Johnson",
      title: "Senior DevOps Engineer",
      bio: "Chris leads our DevOps initiatives and automation strategies. He designs and implements CI/CD pipelines and ensures seamless deployment processes.",
      specialties: ["Docker", "Kubernetes", "Jenkins", "AWS"],
      experience: "9+ years",
      category: "DevOps",
    },
    {
      name: "Samantha Lee",
      title: "Infrastructure Engineer",
      bio: "Samantha manages cloud infrastructure and ensures system reliability. She specializes in infrastructure as code and monitoring solutions.",
      specialties: ["Terraform", "Ansible", "Monitoring", "Infrastructure"],
      experience: "7+ years",
      category: "DevOps",
    },
    {
      name: "Robert Chen",
      title: "Site Reliability Engineer",
      bio: "Robert ensures system uptime and performance optimization. He implements monitoring solutions and incident response procedures for maximum reliability.",
      specialties: ["SRE", "Monitoring", "Performance", "Incident Management"],
      experience: "8+ years",
      category: "DevOps",
    },
  ];

  const cloudExperts = [
    {
      name: "Jennifer Davis",
      title: "AWS Solutions Architect",
      bio: "Jennifer designs and implements AWS cloud solutions. She's AWS certified and specializes in creating scalable, secure, and cost-effective cloud architectures.",
      specialties: [
        "AWS",
        "Cloud Architecture",
        "Security",
        "Cost Optimization",
      ],
      experience: "10+ years",
      category: "Cloud",
    },
    {
      name: "Kevin Wang",
      title: "Azure Cloud Specialist",
      bio: "Kevin leads Microsoft Azure implementations and migrations. He has extensive experience in Azure services and hybrid cloud solutions.",
      specialties: ["Azure", "Hybrid Cloud", "Migration", "Active Directory"],
      experience: "9+ years",
      category: "Cloud",
    },
    {
      name: "Diana Rodriguez",
      title: "Google Cloud Engineer",
      bio: "Diana implements Google Cloud Platform solutions with focus on data analytics and machine learning. She's certified in multiple GCP services.",
      specialties: ["GCP", "BigQuery", "Machine Learning", "Data Analytics"],
      experience: "7+ years",
      category: "Cloud",
    },
    {
      name: "Mark Thompson",
      title: "Multi-Cloud Architect",
      bio: "Mark designs solutions that span multiple cloud providers. He specializes in cloud-agnostic architectures and helps clients avoid vendor lock-in.",
      specialties: [
        "Multi-Cloud",
        "Cloud Migration",
        "Architecture",
        "Strategy",
      ],
      experience: "12+ years",
      category: "Cloud",
    },
  ];

  const renderTeamSection = (
    title: string,
    description: string,
    team: any[],
    bgColor: string,
  ) => (
    <SectionBackground variant={bgColor as any}>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
              {title}
            </h2>
            <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Profile Image Placeholder */}
                <div className="w-20 h-20 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </span>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-tech-text-dark mb-2">
                    {member.name}
                  </h3>
                  <p className="text-tech-primary font-semibold mb-1">
                    {member.title}
                  </p>
                  <p className="text-sm text-tech-text-medium font-medium">
                    {member.experience} experience
                  </p>
                </div>

                <p className="text-tech-text-medium mb-6 leading-relaxed text-sm">
                  {member.bio}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-tech-text-dark text-sm">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map(
                      (specialty: string, idx: number) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-tech-primary/10 text-tech-primary text-xs rounded-full font-medium"
                        >
                          {specialty}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/20 via-purple-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Team
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Meet the talented professionals who drive innovation and deliver
            exceptional results across all aspects of technology
          </p>
        </div>
      </section>

      {/* Team Philosophy Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Our Team Philosophy
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto leading-relaxed">
                We believe that great technology solutions come from great
                people. Our diverse team brings together expertise from every
                corner of the technology landscape, united by a shared
                commitment to excellence and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-14 h-14 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-white"
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
                  Collaborative
                </h3>
                <p className="text-tech-text-medium text-sm">
                  We work together across disciplines to achieve the best
                  outcomes
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-14 h-14 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Innovative
                </h3>
                <p className="text-tech-text-medium text-sm">
                  We constantly explore new technologies and creative solutions
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-14 h-14 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-white"
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
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Excellence
                </h3>
                <p className="text-tech-text-medium text-sm">
                  We maintain the highest standards in everything we do
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-14 h-14 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-white"
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
                <h3 className="text-lg font-bold text-tech-text-dark mb-3">
                  Agile
                </h3>
                <p className="text-tech-text-medium text-sm">
                  We adapt quickly to changing needs and emerging opportunities
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Executive Leadership */}
      {renderTeamSection(
        "Executive Leadership",
        "Visionary leaders with proven track records in driving digital transformation and business growth",
        executiveTeam,
        "gradient",
      )}

      {/* Management Team */}
      {renderTeamSection(
        "Management Team",
        "Experienced managers who ensure projects are delivered successfully while fostering team growth",
        managers,
        "light",
      )}

      {/* Development Team */}
      {renderTeamSection(
        "Development Team",
        "Skilled developers who craft innovative solutions using cutting-edge technologies and best practices",
        developers,
        "gradient",
      )}

      {/* DevOps Team */}
      {renderTeamSection(
        "DevOps & Infrastructure",
        "DevOps experts who ensure reliable, scalable, and automated deployment and infrastructure management",
        devopsTeam,
        "light",
      )}

      {/* Cloud Experts */}
      {renderTeamSection(
        "Cloud Specialists",
        "Cloud experts who design and implement scalable, secure solutions across all major cloud platforms",
        cloudExperts,
        "gradient",
      )}

      {/* Team Statistics */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Team by Numbers
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Our diverse and talented team represents the depth and breadth
                of modern technology expertise
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-bold text-tech-primary mb-2">
                  25+
                </div>
                <div className="text-tech-text-medium">Team Members</div>
              </div>
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-bold text-tech-primary mb-2">
                  150+
                </div>
                <div className="text-tech-text-medium">
                  Years Combined Experience
                </div>
              </div>
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-bold text-tech-primary mb-2">
                  50+
                </div>
                <div className="text-tech-text-medium">Certifications</div>
              </div>
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-bold text-tech-primary mb-2">
                  5
                </div>
                <div className="text-tech-text-medium">Speciality Areas</div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Join Our Team CTA */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              We're always looking for exceptional talent who share our passion
              for technology and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default Leadership;
