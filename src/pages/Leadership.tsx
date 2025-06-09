import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const Leadership = () => {
  const leaders = [
    {
      name: "Sarah Chen",
      title: "Chief Executive Officer & Founder",
      bio: "Sarah founded Technum Opus with a vision to democratize enterprise technology. With over 20 years in technology leadership, she previously led digital transformation initiatives at Fortune 500 companies. Sarah holds an MBA from Stanford and a Computer Science degree from MIT.",
      specialties: [
        "Digital Strategy",
        "Enterprise Architecture",
        "Innovation Management",
      ],
      image: "/api/placeholder/300/400",
    },
    {
      name: "Michael Rodriguez",
      title: "Chief Technology Officer",
      bio: "Michael oversees all technical operations and innovation at Technum Opus. He brings 18 years of experience in cloud architecture and enterprise software development. Previously, he was VP of Engineering at a leading SaaS company and holds multiple cloud certifications.",
      specialties: ["Cloud Architecture", "DevOps", "System Integration"],
      image: "/api/placeholder/300/400",
    },
    {
      name: "Emily Thompson",
      title: "Chief Operating Officer",
      bio: "Emily ensures operational excellence and client satisfaction across all projects. With 15 years in consulting and project management, she has delivered over 200 successful implementations. She is PMP certified and holds a degree in Business Administration.",
      specialties: [
        "Project Management",
        "Process Optimization",
        "Client Relations",
      ],
      image: "/api/placeholder/300/400",
    },
    {
      name: "David Park",
      title: "Chief Financial Officer",
      bio: "David manages financial strategy and business operations. He brings 12 years of experience from investment banking and tech startups. David is a CPA and holds an MBA in Finance from Wharton, with expertise in scaling technology businesses.",
      specialties: [
        "Financial Strategy",
        "Business Development",
        "Risk Management",
      ],
      image: "/api/placeholder/300/400",
    },
    {
      name: "Dr. Aisha Patel",
      title: "Chief Innovation Officer",
      bio: "Dr. Patel leads research and development of cutting-edge solutions. She holds a PhD in Computer Science and has published over 30 research papers on AI and machine learning. Previously, she led innovation labs at major tech companies.",
      specialties: [
        "Artificial Intelligence",
        "Research & Development",
        "Emerging Technologies",
      ],
      image: "/api/placeholder/300/400",
    },
    {
      name: "James Wilson",
      title: "VP of Sales & Marketing",
      bio: "James drives growth and client acquisition strategies. With 14 years in B2B technology sales, he has consistently exceeded targets and built strong client relationships. He holds an MBA in Marketing and specializes in enterprise solution sales.",
      specialties: [
        "Enterprise Sales",
        "Marketing Strategy",
        "Business Growth",
      ],
      image: "/api/placeholder/300/400",
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/20 via-purple-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Leadership Team
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Meet the visionary leaders driving innovation and excellence at
            Technum Opus
          </p>
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Leadership Philosophy
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto leading-relaxed">
                Our leadership team combines decades of experience with a shared
                commitment to innovation, integrity, and client success. We
                believe in leading by example, fostering a culture of continuous
                learning, and empowering our teams to deliver exceptional
                results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Visionary Thinking
                </h3>
                <p className="text-tech-text-medium">
                  We anticipate future trends and guide our organization toward
                  innovative solutions
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Collaborative Leadership
                </h3>
                <p className="text-tech-text-medium">
                  We foster teamwork, open communication, and shared
                  decision-making
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
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
                  Results-Driven
                </h3>
                <p className="text-tech-text-medium">
                  We focus on delivering measurable value and exceeding
                  expectations
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Leadership Team Grid */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
                Executive Team
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Leaders with proven track records in driving digital
                transformation and business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Profile Image Placeholder */}
                  <div className="w-24 h-24 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">
                      {leader.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-tech-text-dark mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-tech-primary font-semibold">
                      {leader.title}
                    </p>
                  </div>

                  <p className="text-tech-text-medium mb-6 leading-relaxed">
                    {leader.bio}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-tech-text-dark">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {leader.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-tech-primary/10 text-tech-primary text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Join Our Team CTA */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Want to Join Our Leadership Team?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              We're always looking for exceptional leaders who share our vision
              and values
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default Leadership;
