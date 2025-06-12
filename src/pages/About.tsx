import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-accenture-black min-h-screen flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-accenture-purple/20 backdrop-blur-sm border border-accenture-purple/30 rounded-full px-6 py-2 mb-8">
              <div className="w-2 h-2 bg-accenture-purple rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-accenture-purple uppercase tracking-wider">
                About Technum Opus
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-none">
              Where
              <br />
              <span className="bg-gradient-to-r from-accenture-purple to-accenture-purple-light bg-clip-text text-transparent">
                Innovation
              </span>
              <br />
              Meets Excellence
            </h1>

            <p className="text-2xl md:text-3xl font-light text-white/80 mb-8 leading-relaxed max-w-4xl">
              Transforming businesses through cutting-edge technology solutions,
              strategic innovation, and unwavering commitment to excellence.
            </p>

            <p className="text-lg text-white/70 mb-12 leading-relaxed max-w-3xl">
              For over a decade, we've been at the forefront of digital
              transformation, helping organizations reimagine their
              possibilities and achieve extraordinary results through the power
              of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/contact"
                className="group relative overflow-hidden px-8 py-4 bg-accenture-purple text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-accenture-purple/25 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-accenture-purple-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
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
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "1000+",
                label: "Projects Delivered",
                color: "text-accenture-purple",
              },
              {
                number: "250+",
                label: "Global Clients",
                color: "text-accenture-purple",
              },
              {
                number: "85+",
                label: "Expert Team",
                color: "text-accenture-purple",
              },
              {
                number: "10+",
                label: "Years Excellence",
                color: "text-accenture-purple",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div
                    className={`text-5xl md:text-6xl font-bold ${stat.color} mb-3`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-accenture-text-secondary font-semibold text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-accenture-purple/10 rounded-full px-4 py-2 mb-6">
                  <span className="text-sm font-bold text-accenture-purple uppercase tracking-wider">
                    Our Story
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Built on a Foundation of
                  <span className="text-accenture-purple"> Innovation</span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-accenture-text-secondary leading-relaxed">
                  Founded in 2015 by visionary technologists, Technum Opus was
                  born from a simple yet powerful belief: that technology should
                  empower human potential, not replace it. We saw organizations
                  struggling to bridge the gap between technological possibility
                  and practical implementation.
                </p>

                <p className="text-lg text-accenture-text-secondary leading-relaxed">
                  What began as a boutique consulting firm has evolved into a
                  comprehensive technology partner, trusted by Fortune 500
                  companies and innovative startups alike. Our journey has been
                  marked by continuous learning, adaptation, and an unwavering
                  commitment to our clients' success.
                </p>

                <p className="text-lg text-accenture-text-secondary leading-relaxed">
                  Today, we stand as industry leaders in digital transformation,
                  combining deep technical expertise with strategic business
                  insight to deliver solutions that don't just meet today's
                  needs—they anticipate tomorrow's opportunities.
                </p>
              </div>

              <Link
                to="/about/leadership"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark hover:shadow-lg transition-all duration-300"
              >
                Meet Our Leadership
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accenture-purple/10 via-gray-50 to-accenture-purple/10 rounded-3xl p-8 shadow-2xl">
                <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
                  <div className="w-24 h-24 bg-accenture-purple rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-12 h-12 text-white"
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
                  <h3 className="text-2xl font-bold text-accenture-text-primary">
                    Innovation First
                  </h3>
                  <p className="text-accenture-text-secondary leading-relaxed">
                    Every solution we create is designed to push boundaries and
                    unlock new possibilities for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accenture-purple/10 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-bold text-accenture-purple uppercase tracking-wider">
                Our Purpose
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-accenture-text-primary mb-6">
              Driven by Purpose, Guided by Vision
            </h2>
            <p className="text-xl text-accenture-text-secondary max-w-3xl mx-auto font-medium">
              Our mission and vision shape every decision we make and every
              solution we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-accenture-purple rounded-2xl flex items-center justify-center shadow-lg">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-accenture-text-primary">
                    Our Mission
                  </h3>
                </div>
                <p className="text-body-xl text-accenture-text-primary leading-relaxed font-medium">
                  To empower organizations worldwide with transformative
                  technology solutions that drive sustainable growth,
                  operational excellence, and competitive advantage. We believe
                  in technology that serves humanity, creating value that
                  extends far beyond code and systems.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-accenture-purple rounded-2xl flex items-center justify-center shadow-lg">
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-accenture-text-primary">
                    Our Vision
                  </h3>
                </div>
                <p className="text-body-xl text-accenture-text-primary leading-relaxed font-medium">
                  To be the trusted technology partner that organizations turn
                  to when they want to transform possibilities into reality,
                  creating lasting impact through innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-accenture-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-bold text-accenture-purple uppercase tracking-wider">
                Core Values
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Principles That Define Us
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              These core values are the foundation of our culture and guide
              every interaction, decision, and solution we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💡",
                title: "Innovation Excellence",
                description:
                  "Constantly pushing boundaries to deliver cutting-edge solutions that set new industry standards.",
              },
              {
                icon: "🎯",
                title: "Client Success",
                description:
                  "Your success is our success. We measure our achievement by the value we create for your organization.",
              },
              {
                icon: "🤝",
                title: "Integrity First",
                description:
                  "Transparency, honesty, and ethical practices form the foundation of every relationship we build.",
              },
              {
                icon: "🚀",
                title: "Continuous Growth",
                description:
                  "We never stop learning, evolving, and improving to stay ahead of tomorrow's challenges.",
              },
            ].map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center h-full">
                  <div className="text-4xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-accenture-text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-body-lg text-accenture-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
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
              We're more than a technology provider—we're your strategic partner
              in digital transformation
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
                    <li key={featureIndex} className="flex items-center gap-3">
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

      {/* CTA Section */}
      <section className="relative py-24 bg-accenture-black overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Vision Into Reality?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the hundreds of organizations that have partnered with Technum
            Opus to achieve extraordinary results through innovative technology
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group relative overflow-hidden px-10 py-4 bg-accenture-purple text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-accenture-purple/25 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Start Your Transformation</span>
              <div className="absolute inset-0 bg-accenture-purple-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-10 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Our Services
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
