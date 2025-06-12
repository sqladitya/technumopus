import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/20 via-purple-600/15 to-slate-900/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Technum Opus
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Pioneering digital transformation with innovation, expertise, and
            unwavering commitment to excellence
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-tech-text-dark mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-tech-text-medium leading-relaxed">
                  <p>
                    Founded in 2008, Technum Opus emerged from a simple yet
                    powerful vision: to bridge the gap between cutting-edge
                    technology and business success. What started as a small
                    team of passionate technologists has evolved into a trusted
                    partner for enterprises worldwide.
                  </p>
                  <p>
                    Our journey began when our founders recognized that many
                    organizations struggled to harness the true potential of
                    digital technologies. They were caught between rapidly
                    evolving tech landscapes and the practical need to maintain
                    business continuity while driving growth.
                  </p>
                  <p>
                    Today, we stand as a testament to the power of innovation
                    guided by experience. We've helped over 500 organizations
                    transform their operations, streamline their processes, and
                    achieve unprecedented levels of efficiency and growth.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-tech-primary mb-2">
                        15+
                      </div>
                      <div className="text-tech-text-medium">
                        Years of Excellence
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-tech-primary mb-2">
                        500+
                      </div>
                      <div className="text-tech-text-medium">
                        Projects Delivered
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-tech-primary mb-2">
                        50+
                      </div>
                      <div className="text-tech-text-medium">
                        Expert Team Members
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-tech-primary mb-2">
                        99%
                      </div>
                      <div className="text-tech-text-medium">
                        Client Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Mission Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Empowering organizations to thrive in the digital age through
                innovative technology solutions
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-white"
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
                <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                  Transform. Innovate. Excel.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-tech-primary"
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
                  <h4 className="text-lg font-semibold text-tech-text-dark mb-2">
                    Innovation-Driven
                  </h4>
                  <p className="text-tech-text-medium">
                    We leverage cutting-edge technologies to solve complex
                    business challenges
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-tech-primary"
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
                  <h4 className="text-lg font-semibold text-tech-text-dark mb-2">
                    Client-Centric
                  </h4>
                  <p className="text-tech-text-medium">
                    Your success is our priority, and we tailor solutions to
                    your unique needs
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-tech-primary"
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
                  <h4 className="text-lg font-semibold text-tech-text-dark mb-2">
                    Excellence
                  </h4>
                  <p className="text-tech-text-medium">
                    We maintain the highest standards of quality in everything
                    we deliver
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Values Section */}
      <SectionBackground variant="light">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                The principles that guide our actions and define our culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mb-6">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Integrity
                </h3>
                <p className="text-tech-text-medium">
                  We operate with transparency, honesty, and ethical principles
                  in all our interactions
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mb-6">
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
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Innovation
                </h3>
                <p className="text-tech-text-medium">
                  We continuously explore new technologies and methodologies to
                  stay ahead of the curve
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mb-6">
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Collaboration
                </h3>
                <p className="text-tech-text-medium">
                  We believe in the power of teamwork and partnership to achieve
                  extraordinary results
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mb-6">
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-4">
                  Excellence
                </h3>
                <p className="text-tech-text-medium">
                  We strive for perfection in every project and maintain the
                  highest quality standards
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Call to Action Section */}
      <SectionBackground variant="gradient">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-tech-text-medium mb-8">
              Let's discuss how Technum Opus can help you achieve your digital
              transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default AboutUs;
