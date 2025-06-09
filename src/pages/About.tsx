import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const About = () => {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section */}
      <SectionBackground variant="gradient">
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tech-text-dark mb-6">
                About Technum Opus
              </h1>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Empowering businesses through innovative technology solutions
                since our founding. We are passionate about digital
                transformation and committed to excellence.
              </p>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Our Story Section */}
      <SectionBackground variant="light">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-tech-text-medium mb-6">
                  Founded with a vision to bridge the gap between complex
                  technology and business success, Technum Opus has grown from a
                  small consultancy to a comprehensive technology partner
                  serving enterprises across industries.
                </p>
                <p className="text-lg text-tech-text-medium mb-6">
                  Our journey began with a simple belief: that technology should
                  empower businesses, not complicate them. Today, we continue to
                  uphold this principle while delivering cutting-edge solutions
                  that drive measurable results.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-tech-primary/10 to-purple-500/10 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
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
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <p className="text-tech-text-medium font-medium">
                      Building the Future Together
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Mission & Vision Section */}
      <SectionBackground variant="gradient">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Mission & Vision
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Our core purpose and future aspirations guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
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
                <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                  Our Mission
                </h3>
                <p className="text-tech-text-medium">
                  To empower businesses with innovative technology solutions
                  that drive growth, efficiency, and competitive advantage. We
                  deliver enterprise-grade services with a personal touch,
                  ensuring every client achieves their digital transformation
                  goals.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
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
                <h3 className="text-2xl font-bold text-tech-text-dark mb-4">
                  Our Vision
                </h3>
                <p className="text-tech-text-medium">
                  To be the leading technology partner for enterprises seeking
                  transformative solutions. We envision a future where
                  businesses seamlessly leverage technology to innovate, scale,
                  and create lasting value for their customers and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Values Section */}
      <SectionBackground variant="light">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Our Values
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                The principles that guide our actions and define our culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-3">
                  Innovation
                </h3>
                <p className="text-tech-text-medium">
                  Continuously pushing boundaries to deliver cutting-edge
                  solutions
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-3">
                  Integrity
                </h3>
                <p className="text-tech-text-medium">
                  Building trust through transparency and ethical business
                  practices
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-text-dark mb-3">
                  Collaboration
                </h3>
                <p className="text-tech-text-medium">
                  Working as partners with our clients to achieve shared success
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
                <h3 className="text-xl font-bold text-tech-text-dark mb-3">
                  Excellence
                </h3>
                <p className="text-tech-text-medium">
                  Delivering superior quality in every project and interaction
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Stats Section */}
      <SectionBackground variant="gradient">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and client
                success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-tech-primary mb-2">
                  500+
                </div>
                <div className="text-sm text-tech-text-medium uppercase tracking-wider">
                  Projects Completed
                </div>
              </div>

              <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-tech-primary mb-2">
                  99%
                </div>
                <div className="text-sm text-tech-text-medium uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </div>

              <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-tech-primary mb-2">
                  50+
                </div>
                <div className="text-sm text-tech-text-medium uppercase tracking-wider">
                  Team Members
                </div>
              </div>

              <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-tech-primary mb-2">
                  10+
                </div>
                <div className="text-sm text-tech-text-medium uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </div>
  );
};

export default About;
