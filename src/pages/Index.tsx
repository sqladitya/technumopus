import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import {
  Section,
  ServicesSection,
  PartnersSection,
  AboutSection,
  ClientStoriesSection,
} from "@/components/ContentSections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-white">
      <Navigation />
      <HeroSection />

      {/* Services Section */}
      <Section className="bg-white" id="services">
        <ServicesSection />
      </Section>

      {/* Client Success Stories */}
      <ClientStoriesSection />

      {/* Value Proposition Section */}
      <Section className="bg-white">
        <div className="text-center py-20">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            360° VALUE
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            We help organizations reinvent themselves through technology,
            strategy, and innovation to create lasting value for all
            stakeholders.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-xl"
            >
              Explore Our Capabilities
              <svg
                className="w-6 h-6"
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
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-xl"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="bg-gray-50" id="about">
        <AboutSection />
      </Section>

      {/* Partners Section */}
      <Section className="bg-white" id="partners">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
            STRATEGIC PARTNERSHIPS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powered by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with the world's leading technology providers to
            deliver comprehensive, best-in-class solutions.
          </p>
        </div>
        <PartnersSection />
      </Section>

      {/* Industry Focus Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
            INDUSTRY EXPERTISE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Select Your Industry.
            <span className="block">Discover Our Impact.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Financial Services", icon: "🏦" },
            { name: "Healthcare", icon: "🏥" },
            { name: "Manufacturing", icon: "🏭" },
            { name: "Retail & Consumer", icon: "🛍️" },
            { name: "Energy & Utilities", icon: "⚡" },
            { name: "Government", icon: "🏛️" },
            { name: "Telecommunications", icon: "📡" },
            { name: "Education", icon: "🎓" },
          ].map((industry, index) => (
            <Link
              key={index}
              to={`/industries/${industry.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 text-center"
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {industry.name}
              </h3>
            </Link>
          ))}
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section className="bg-black text-white">
        <div className="text-center py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of organizations that trust Technum Opus to drive
            their digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 text-xl"
            >
              Get Started Today
              <svg
                className="w-6 h-6"
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
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 text-xl"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
