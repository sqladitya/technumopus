import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import {
  Section,
  ServicesSection,
  PartnersSection,
  AboutSection,
} from "@/components/ContentSections";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SectionBackground from "@/components/SectionBackground";

const Index = () => {
  return (
    <div className="bg-white">
      <Navigation />

      <HeroSection />

      {/* Services Section */}
      <SectionBackground variant="light">
        <SubtleCircuitBackground variant="light">
          <Section className="" id="services">
            <ServicesSection />
          </Section>
        </SubtleCircuitBackground>
      </SectionBackground>

      {/* About Section */}
      <SectionBackground variant="gradient">
        <Section className="" id="about">
          <AboutSection />
        </Section>
      </SectionBackground>

      {/* Partners Section */}
      <SectionBackground variant="light">
        <SubtleCircuitBackground variant="light">
          <Section className="" id="partners">
            <PartnersSection />
          </Section>
        </SubtleCircuitBackground>
      </SectionBackground>

      {/* Why Choose Us Section */}
      <SectionBackground variant="gradient">
        <Section className="">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-tech-text-dark mb-4">
              Why Choose Technum Opus
            </h2>
            <p className="text-xl text-tech-text-medium max-w-3xl mx-auto">
              We combine technical excellence with business insight to deliver
              transformative results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
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
                Innovation First
              </h3>
              <p className="text-tech-text-medium">
                We stay ahead of technology trends to deliver cutting-edge
                solutions that give you a competitive advantage.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
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
                Expert Team
              </h3>
              <p className="text-tech-text-medium">
                Our certified professionals bring deep expertise across
                enterprise technologies and emerging platforms.
              </p>
            </div>

            <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
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
                Proven Results
              </h3>
              <p className="text-tech-text-medium">
                Our track record speaks for itself - 500+ successful projects
                and 99% client satisfaction rate.
              </p>
            </div>
          </div>
        </Section>
      </SectionBackground>

      {/* Contact Form Section */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Index;
