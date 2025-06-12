import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const AboutUs = () => {
  return (
    <SectionBackground variant="light">
      <Navigation />

      {/* Hero Section */}
      <SectionBackground variant="gradient">
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accenture-text-primary mb-6">
              About Technum Opus
            </h1>
            <p className="text-xl md:text-2xl text-accenture-text-secondary max-w-3xl mx-auto">
              Pioneering digital transformation with innovation, expertise, and
              unwavering commitment to excellence
            </p>
          </div>
        </section>
      </SectionBackground>

      {/* Our Story Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accenture-purple/10 rounded-full px-4 py-2 mb-6">
                  <span className="text-sm font-bold text-accenture-purple uppercase tracking-wider">
                    Our Story
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-accenture-text-primary mb-6">
                  Built on a Foundation of
                  <span className="text-accenture-purple"> Innovation</span>
                </h2>
                <p className="text-lg text-accenture-text-secondary mb-6 leading-relaxed">
                  Founded in 2015, Technum Opus emerged from a simple yet
                  powerful vision: to bridge the gap between cutting-edge
                  technology and practical business solutions. Our founders
                  recognized that while technology was advancing rapidly, many
                  organizations struggled to harness its full potential.
                </p>
                <p className="text-lg text-accenture-text-secondary mb-8 leading-relaxed">
                  What started as a small consulting firm has grown into a
                  comprehensive technology partner, helping organizations across
                  industries transform their operations, enhance their
                  capabilities, and achieve sustainable growth through
                  innovative solutions.
                </p>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-accenture-text-primary mb-4">
                    Our Mission
                  </h3>
                  <p className="text-body-xl text-accenture-text-primary leading-relaxed">
                    To empower organizations worldwide with transformative
                    technology solutions that drive sustainable growth,
                    operational excellence, and competitive advantage. We
                    believe in technology that serves humanity, creating value
                    that extends far beyond code and systems.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-accenture-text-primary mb-4">
                    Our Vision
                  </h3>
                  <p className="text-body-xl text-accenture-text-primary leading-relaxed">
                    To be the trusted technology partner that organizations turn
                    to when they want to transform possibilities into reality,
                    creating lasting impact through innovative solutions.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accenture-purple mb-2">
                      500+
                    </div>
                    <div className="text-accenture-text-secondary">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accenture-purple mb-2">
                      150+
                    </div>
                    <div className="text-accenture-text-secondary">
                      Happy Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accenture-purple mb-2">
                      50+
                    </div>
                    <div className="text-accenture-text-secondary">
                      Team Members
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accenture-purple mb-2">
                      8+
                    </div>
                    <div className="text-accenture-text-secondary">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Values Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accenture-text-primary mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-accenture-text-secondary max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-accenture-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">I</span>
                </div>
                <h3 className="text-xl font-semibold text-accenture-text-primary mb-4">
                  Innovation
                </h3>
                <p className="text-accenture-text-secondary">
                  Continuously pushing boundaries to deliver cutting-edge
                  solutions that drive progress.
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-accenture-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">E</span>
                </div>
                <h3 className="text-xl font-semibold text-accenture-text-primary mb-4">
                  Excellence
                </h3>
                <p className="text-accenture-text-secondary">
                  Maintaining the highest standards in everything we do, from
                  code quality to client service.
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-accenture-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">I</span>
                </div>
                <h3 className="text-xl font-semibold text-accenture-text-primary mb-4">
                  Integrity
                </h3>
                <p className="text-accenture-text-secondary">
                  Building trust through transparency, honesty, and ethical
                  business practices.
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-accenture-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">C</span>
                </div>
                <h3 className="text-xl font-semibold text-accenture-text-primary mb-4">
                  Collaboration
                </h3>
                <p className="text-accenture-text-secondary">
                  Working together with clients and partners to achieve shared
                  success and mutual growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Why Choose Us Section */}
      <SectionBackground variant="light">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-accenture-text-primary mb-6">
                Why Organizations Choose
                <span className="bg-gradient-to-r from-accenture-purple to-accenture-purple-light bg-clip-text text-transparent">
                  {" "}
                  Technum Opus
                </span>
              </h2>
              <p className="text-xl text-accenture-text-secondary max-w-3xl mx-auto">
                We're more than a technology provider—we're your strategic
                partner in digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Proven Expertise",
                  description:
                    "Over a decade of experience delivering complex technology solutions across diverse industries.",
                  features: [
                    "Enterprise-grade solutions",
                    "Industry best practices",
                    "Certified professionals",
                  ],
                },
                {
                  title: "End-to-End Solutions",
                  description:
                    "From strategy and planning to implementation and support, we handle every aspect of your digital journey.",
                  features: [
                    "Strategy consulting",
                    "Custom development",
                    "Ongoing maintenance",
                  ],
                },
                {
                  title: "Innovation Leadership",
                  description:
                    "We don't just follow trends—we set them. Our solutions leverage the latest technologies and methodologies.",
                  features: [
                    "Cutting-edge technology",
                    "Future-ready architecture",
                    "Scalable solutions",
                  ],
                },
              ].map((reason, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-accenture-text-primary mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-body-xl text-accenture-text-secondary mb-6 leading-relaxed">
                    {reason.description}
                  </p>
                  <ul className="space-y-3">
                    {reason.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-accenture-purple rounded-full"></div>
                        <span className="text-accenture-text-secondary font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </SectionBackground>
  );
};

export default AboutUs;
