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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tech-text-dark mb-6">
              About Technum Opus
            </h1>
            <p className="text-xl md:text-2xl text-tech-text-medium max-w-3xl mx-auto">
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
                <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-tech-text-medium mb-6 leading-relaxed">
                  Founded in 2015, Technum Opus emerged from a simple yet
                  powerful vision: to bridge the gap between cutting-edge
                  technology and practical business solutions. Our founders
                  recognized that while technology was advancing rapidly, many
                  organizations struggled to harness its full potential.
                </p>
                <p className="text-lg text-tech-text-medium mb-8 leading-relaxed">
                  What started as a small consulting firm has grown into a
                  comprehensive technology partner, helping organizations across
                  industries transform their operations, enhance their
                  capabilities, and achieve sustainable growth through
                  innovative solutions.
                </p>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                    Our Mission
                  </h3>
                  <p className="text-body-xl text-gray-400 leading-relaxed">
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
                  <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                    Our Vision
                  </h3>
                  <p className="text-body-xl text-gray-400 leading-relaxed">
                    To be the trusted technology partner that organizations turn
                    to when they want to transform possibilities into reality,
                    creating lasting impact through innovative solutions.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-tech-primary mb-2">
                      500+
                    </div>
                    <div className="text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-tech-primary mb-2">
                      150+
                    </div>
                    <div className="text-gray-400">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-tech-primary mb-2">
                      50+
                    </div>
                    <div className="text-tech-text-medium">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-tech-primary mb-2">
                      8+
                    </div>
                    <div className="text-tech-text-medium">
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
              <h2 className="text-3xl md:text-4xl font-bold text-tech-text-dark mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">I</span>
                </div>
                <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                  Innovation
                </h3>
                <p className="text-tech-text-medium">
                  Continuously pushing boundaries to deliver cutting-edge
                  solutions that drive progress.
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">E</span>
                </div>
                <h3 className="text-xl font-semibold text-accenture-text-primary mb-4">
                  Excellence
                </h3>
                <p className="text-body-lg text-gray-600">
                  Maintaining the highest standards in everything we do, from
                  code quality to client service.
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">I</span>
                </div>
                <h3 className="text-xl font-semibold text-accenture-text-primary mb-4">
                  Integrity
                </h3>
                <p className="text-body-lg text-gray-600">
                  Building trust through transparency, honesty, and ethical
                  business practices.
                </p>
              </div>

              <div className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">C</span>
                </div>
                <h3 className="text-xl font-semibold text-tech-text-dark mb-4">
                  Collaboration
                </h3>
                <p className="text-tech-text-medium">
                  Working together with clients and partners to achieve shared
                  success and mutual growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      <Footer />
    </SectionBackground>
  );
};

export default AboutUs;
