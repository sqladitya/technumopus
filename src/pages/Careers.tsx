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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Learning & Development",
      description:
        "Continuous education, certifications, conferences, and skill development",
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
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, and generous PTO",
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
  ];

  const openPositions = [
    {
      title: "Senior SAP Consultant",
      department: "Consulting",
      location: "New York, NY / Remote",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Lead SAP implementation projects and provide expert guidance to enterprise clients.",
    },
    {
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "7+ years",
      description:
        "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description:
        "Develop modern web applications using React, Node.js, and cloud technologies.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Austin, TX / Remote",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Build and maintain CI/CD pipelines, infrastructure automation, and monitoring systems.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Seattle, WA / Remote",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Drive product strategy and roadmap for our SaaS platform offerings.",
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Chicago, IL / Remote",
      type: "Full-time",
      experience: "4+ years",
      description:
        "Identify and develop new business opportunities with enterprise clients.",
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
            Join Our Growing Team
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Build the future of digital transformation with passionate
            professionals who love what they do
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-6">
                Why Choose Technum Opus?
              </h2>
              <p className="text-xl text-tech-text-medium max-w-4xl mx-auto leading-relaxed">
                We're not just a technology company – we're a community of
                innovators, problem-solvers, and visionaries working together to
                shape the digital future. Join us and be part of something
                extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-tech-gradient rounded-lg flex items-center justify-center mb-6 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-tech-text-medium leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Company Culture Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                  Our Culture
                </h2>
                <div className="space-y-6 text-lg text-tech-text-medium leading-relaxed">
                  <p>
                    At Technum Opus, we believe that great work comes from great
                    people working in a great environment. Our culture is built
                    on trust, transparency, and mutual respect.
                  </p>
                  <p>
                    We encourage innovation, celebrate diversity, and foster an
                    inclusive workplace where everyone can grow and thrive.
                    Whether you're just starting your career or you're a
                    seasoned professional, you'll find opportunities to learn,
                    lead, and make a meaningful impact.
                  </p>
                  <p>
                    Our team spans the globe, but we're united by a shared
                    passion for technology and a commitment to delivering
                    exceptional value to our clients.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tech-primary mb-2">
                      95%
                    </div>
                    <div className="text-tech-text-medium">
                      Employee Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tech-primary mb-2">
                      4.8/5
                    </div>
                    <div className="text-tech-text-medium">
                      Glassdoor Rating
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tech-primary mb-2">
                      50+
                    </div>
                    <div className="text-tech-text-medium">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-tech-primary mb-2">
                      25+
                    </div>
                    <div className="text-tech-text-medium">
                      Countries Represented
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-tech-text-dark mb-6 text-center">
                    What Our Team Says
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-tech-text-medium italic mb-4">
                        "The learning opportunities here are incredible. I've
                        grown more in two years at Technum Opus than I did in
                        five years at my previous company."
                      </p>
                      <div className="font-semibold text-tech-text-dark">
                        - Sarah K., Senior Developer
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-tech-text-medium italic mb-4">
                        "The work-life balance is amazing, and the team is
                        incredibly supportive. I feel valued and empowered to do
                        my best work."
                      </p>
                      <div className="font-semibold text-tech-text-dark">
                        - Mike T., Cloud Architect
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Open Positions Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Find your next opportunity and join our mission to transform
                businesses through technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-tech-text-dark mb-2">
                        {position.title}
                      </h3>
                      <div className="space-y-1">
                        <p className="text-tech-primary font-semibold">
                          {position.department}
                        </p>
                        <p className="text-tech-text-medium">
                          {position.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-tech-primary/10 text-tech-primary text-sm rounded-full mb-2">
                        {position.type}
                      </span>
                      <p className="text-sm text-tech-text-medium">
                        {position.experience}
                      </p>
                    </div>
                  </div>

                  <p className="text-tech-text-medium mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  <button className="w-full px-6 py-3 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-tech-text-medium mb-6">
                Don't see a position that fits? We're always looking for
                talented individuals.
              </p>
              <button className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300">
                Send Us Your Resume
              </button>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Application Process Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
                Our Hiring Process
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                We've designed our process to be thorough yet respectful of your
                time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Application Review
                </h3>
                <p className="text-tech-text-medium">
                  We carefully review your application and resume within 5
                  business days
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Initial Screening
                </h3>
                <p className="text-tech-text-medium">
                  A brief phone or video call to discuss your background and
                  interests
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Technical Interview
                </h3>
                <p className="text-tech-text-medium">
                  Role-specific interviews with team members and technical
                  assessments
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Final Decision
                </h3>
                <p className="text-tech-text-medium">
                  We'll make a decision quickly and provide feedback regardless
                  of outcome
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default Careers;
