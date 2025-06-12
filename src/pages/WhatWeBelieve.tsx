import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const WhatWeBelieve = () => {
  const coreBeliefs = [
    {
      title: "Technology Should Empower, Not Complicate",
      description:
        "We believe technology should simplify processes, enhance capabilities, and empower people to achieve more. Every solution we design starts with the human experience.",
      icon: "⚡",
    },
    {
      title: "Innovation Through Collaboration",
      description:
        "The best solutions emerge when diverse minds work together. We foster collaborative environments where creativity flourishes and breakthrough innovations are born.",
      icon: "🤝",
    },
    {
      title: "Excellence is Non-Negotiable",
      description:
        "We hold ourselves to the highest standards in everything we do. From code quality to client service, excellence is not just a goal—it's our commitment.",
      icon: "🎯",
    },
    {
      title: "Sustainability Drives Progress",
      description:
        "True innovation considers long-term impact. We design solutions that not only solve today's challenges but create a foundation for tomorrow's growth.",
      icon: "🌱",
    },
    {
      title: "Transparency Builds Trust",
      description:
        "Open communication, honest feedback, and transparent processes form the foundation of lasting partnerships. Trust is earned through consistency and integrity.",
      icon: "🔍",
    },
    {
      title: "Learning Never Stops",
      description:
        "In a rapidly evolving industry, continuous learning is essential. We invest in our team's growth and stay at the forefront of technological advancement.",
      icon: "📚",
    },
  ];

  const principles = [
    {
      title: "Client-Centric Approach",
      description:
        "Every decision we make is guided by what's best for our clients. Their success is our success.",
      details: [
        "Understanding unique business needs",
        "Customized solutions, not one-size-fits-all",
        "Long-term partnership mindset",
        "Proactive support and guidance",
      ],
    },
    {
      title: "Innovation Leadership",
      description:
        "We don't just adopt new technologies—we pioneer their practical application in business contexts.",
      details: [
        "Early adoption of emerging technologies",
        "R&D investment in future solutions",
        "Thought leadership in industry trends",
        "Creative problem-solving approaches",
      ],
    },
    {
      title: "Quality Assurance",
      description:
        "Quality is built into every process, from initial consultation to final delivery and beyond.",
      details: [
        "Rigorous testing and validation",
        "Continuous improvement processes",
        "Industry best practices",
        "Performance monitoring and optimization",
      ],
    },
    {
      title: "Team Excellence",
      description:
        "Our people are our greatest asset. We invest in their growth and create an environment where they thrive.",
      details: [
        "Continuous learning and development",
        "Diverse and inclusive culture",
        "Recognition and career advancement",
        "Work-life balance support",
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
              What We Believe
            </h1>
            <p className="text-xl md:text-2xl text-tech-text-medium max-w-3xl mx-auto">
              Our values and principles guide everything we do, shaping how we
              work, grow, and serve our clients.
            </p>
          </div>
        </section>
      </SectionBackground>

      {/* Core Beliefs Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
                Our Core Beliefs
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                These fundamental beliefs shape our culture, guide our
                decisions, and define our approach to technology and business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreBeliefs.map((belief, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-6 text-center">{belief.icon}</div>
                  <h3 className="text-xl font-semibold text-accenture-text-primary mb-4 text-center">
                    {belief.title}
                  </h3>
                  <p className="text-body-lg text-gray-600 leading-relaxed text-center">
                    {belief.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Principles Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
                Our Operating Principles
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                These principles translate our beliefs into actionable practices
                that drive our daily operations and strategic decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-tech-text-medium mb-6 leading-relaxed">
                    {principle.description}
                  </p>
                  <ul className="space-y-3">
                    {principle.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-tech-text-medium"
                      >
                        <div className="w-2 h-2 bg-tech-primary rounded-full flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Impact Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
                Living Our Values
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Our beliefs and principles create measurable impact for our
                clients, team, and community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-bold text-tech-primary mb-4">
                  98%
                </div>
                <h3 className="text-xl font-semibold text-tech-text-dark mb-2">
                  Client Satisfaction
                </h3>
                <p className="text-tech-text-medium">
                  Our client-centric approach delivers exceptional results
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-bold text-tech-primary mb-4">
                  95%
                </div>
                <h3 className="text-xl font-semibold text-tech-text-dark mb-2">
                  Employee Retention
                </h3>
                <p className="text-tech-text-medium">
                  Our culture of growth and excellence attracts top talent
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-4xl font-bold text-tech-primary mb-4">
                  500+
                </div>
                <h3 className="text-xl font-semibold text-tech-text-dark mb-2">
                  Successful Projects
                </h3>
                <p className="text-tech-text-medium">
                  Consistent delivery of quality solutions across industries
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Call to Action */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Ready to Experience Our Values in Action?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Let's discuss how our beliefs and principles can drive success for
              your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Start a Conversation
              </button>
              <button className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </SectionBackground>
  );
};

export default WhatWeBelieve;
