import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-slate-900/90"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-8">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                About Technum Opus
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-none">
              Where
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
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
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
      <SectionBackground variant="light" className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "1000+",
                label: "Projects Delivered",
                color: "from-purple-600 to-purple-700",
              },
              {
                number: "250+",
                label: "Global Clients",
                color: "from-blue-600 to-blue-700",
              },
              {
                number: "85+",
                label: "Expert Team",
                color: "from-green-600 to-green-700",
              },
              {
                number: "10+",
                label: "Years Excellence",
                color: "from-orange-600 to-orange-700",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div
                    className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-700 font-semibold text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>

      {/* Our Story */}
      <SectionBackground variant="gradient" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
                  <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">
                    Our Story
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Built on a Foundation of
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Innovation
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded in 2015 by visionary technologists, Technum Opus was
                  born from a simple yet powerful belief: that technology should
                  empower human potential, not replace it. We saw organizations
                  struggling to bridge the gap between technological possibility
                  and practical implementation.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  What began as a boutique consulting firm has evolved into a
                  comprehensive technology partner, trusted by Fortune 500
                  companies and innovative startups alike. Our journey has been
                  marked by continuous learning, adaptation, and an unwavering
                  commitment to our clients' success.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we stand as industry leaders in digital transformation,
                  combining deep technical expertise with strategic business
                  insight to deliver solutions that don't just meet today's
                  needs—they anticipate tomorrow's opportunities.
                </p>
              </div>

              <Link
                to="/about/leadership"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
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
              <div className="aspect-square bg-gradient-to-br from-purple-100 via-blue-50 to-purple-100 rounded-3xl p-8 shadow-2xl">
                <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
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
                  <h3 className="text-2xl font-bold text-gray-900">
                    Innovation First
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every solution we create is designed to push boundaries and
                    unlock new possibilities for our clients.
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Mission & Vision */}
      <SectionBackground variant="light" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-bold text-purple-700 uppercase tracking-wider">
                Our Purpose
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Driven by Purpose, Guided by Vision
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
              Our mission and vision shape every decision we make and every
              solution we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
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
                  <h3 className="text-3xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-body-xl text-gray-600 leading-relaxed">
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
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
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
                  <h3 className="text-3xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-body-xl text-gray-600 leading-relaxed">
                  To be the trusted technology partner that organizations turn
                  to when they want to transform possibilities into reality,
                  creating lasting impact through innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>

      {/* Core Values */}
      <SectionBackground variant="dark" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-bold text-purple-300 uppercase tracking-wider">
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
                  <p className="text-body-lg text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>

      {/* Why Choose Us */}
      <SectionBackground variant="gradient" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Organizations Choose
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Technum Opus
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <p className="text-body-xl text-gray-600 mb-6 leading-relaxed">
                  {reason.description}
                </p>
                <ul className="space-y-3">
                  {reason.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-600 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionBackground>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

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
              className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Start Your Transformation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
