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
    <div className="bg-corporate-bg-primary">
      <Navigation />
      <HeroSection />

      {/* Services Section */}
      <Section className="bg-corporate-bg-primary" id="services">
        <ServicesSection />
      </Section>

      {/* Client Success Stories */}
      <ClientStoriesSection />

      {/* Value Proposition Section */}
      <Section className="bg-corporate-bg-primary">
        <div className="text-center py-24 animate-fade-in">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-corporate-text-primary mb-10 leading-tight">
            360° VALUE
          </h2>
          <p className="text-2xl md:text-3xl text-corporate-text-secondary max-w-5xl mx-auto mb-16 leading-relaxed">
            We help organizations reinvent themselves through technology,
            strategy, and innovation to create lasting value for all
            stakeholders and drive sustainable competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-corporate-blue text-white rounded-xl font-semibold hover:bg-corporate-blue-dark transition-all duration-300 hover:scale-105 shadow-corporate-lg text-xl"
            >
              Explore Our Capabilities
              <svg
                className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
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
              className="group inline-flex items-center gap-4 px-12 py-6 border-2 border-corporate-blue text-corporate-blue rounded-xl font-semibold hover:bg-corporate-blue hover:text-white transition-all duration-300 text-xl"
            >
              Start Your Transformation
              <svg
                className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
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
            </Link>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section className="bg-corporate-bg-secondary" id="about">
        <AboutSection />
      </Section>

      {/* Partners Section */}
      <Section className="bg-corporate-bg-primary" id="partners">
        <div className="text-center mb-20 animate-fade-in">
          <div className="text-sm font-semibold text-corporate-blue uppercase tracking-wider mb-6">
            STRATEGIC PARTNERSHIPS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-corporate-text-primary mb-8">
            Powered by Industry Leaders
          </h2>
          <p className="text-xl md:text-2xl text-corporate-text-secondary max-w-4xl mx-auto">
            We collaborate with the world's leading technology providers to
            deliver comprehensive, best-in-class solutions that drive business
            value.
          </p>
        </div>
        <PartnersSection />
      </Section>

      {/* Industry Focus Section */}
      <Section className="bg-corporate-bg-secondary">
        <div className="text-center mb-20 animate-fade-in">
          <div className="text-sm font-semibold text-corporate-blue uppercase tracking-wider mb-6">
            INDUSTRY EXPERTISE
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-corporate-text-primary mb-8">
            Select Your Industry.
            <span className="block text-corporate-blue">
              Discover Our Impact.
            </span>
          </h2>
          <p className="text-xl text-corporate-text-secondary max-w-4xl mx-auto">
            Deep industry knowledge combined with cutting-edge technology
            solutions across multiple sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: "Financial Services", icon: "🏦", color: "corporate-blue" },
            { name: "Healthcare", icon: "🏥", color: "corporate-green" },
            { name: "Manufacturing", icon: "🏭", color: "corporate-purple" },
            {
              name: "Retail & Consumer",
              icon: "🛍️",
              color: "corporate-orange",
            },
            { name: "Energy & Utilities", icon: "⚡", color: "corporate-blue" },
            { name: "Government", icon: "🏛️", color: "corporate-green" },
            {
              name: "Telecommunications",
              icon: "📡",
              color: "corporate-purple",
            },
            { name: "Education", icon: "🎓", color: "corporate-orange" },
          ].map((industry, index) => (
            <Link
              key={index}
              to={`/industries/${industry.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer hover:-translate-y-2 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>
              <h3 className="text-lg font-bold text-corporate-text-primary group-hover:text-corporate-blue transition-colors duration-300">
                {industry.name}
              </h3>
            </Link>
          ))}
        </div>
      </Section>

      {/* Awards and Recognition Section */}
      <Section className="bg-corporate-bg-primary">
        <div className="text-center mb-20 animate-fade-in">
          <div className="text-sm font-semibold text-corporate-blue uppercase tracking-wider mb-6">
            AWARDS & RECOGNITION
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-corporate-text-primary mb-8">
            Industry Recognition
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Digital Innovator",
              organization: "Tech Excellence Awards",
              year: "2024",
              color: "from-corporate-blue to-corporate-blue-dark",
            },
            {
              title: "Top Consulting Firm",
              organization: "Industry Leaders",
              year: "2024",
              color: "from-corporate-purple to-purple-600",
            },
            {
              title: "Cloud Excellence",
              organization: "Cloud Awards",
              year: "2023",
              color: "from-corporate-green to-green-600",
            },
            {
              title: "Innovation Leader",
              organization: "Technology Review",
              year: "2023",
              color: "from-corporate-orange to-red-600",
            },
          ].map((award, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${award.color} rounded-2xl p-8 text-white shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-500 hover:-translate-y-2 animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute top-4 right-4 text-4xl opacity-20">
                🏆
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3">{award.title}</h3>
                <p className="text-white/80 mb-4">{award.organization}</p>
                <div className="text-2xl font-bold">{award.year}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section className="bg-corporate-black text-white">
        <div className="text-center py-24 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-4xl mx-auto">
            Join thousands of organizations that trust Technum Opus to drive
            their digital transformation and achieve sustainable competitive
            advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 px-12 py-6 bg-corporate-blue text-white rounded-xl font-semibold hover:bg-corporate-blue-dark transition-all duration-300 hover:scale-105 shadow-corporate-lg text-xl"
            >
              Get Started Today
              <svg
                className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
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
              className="group inline-flex items-center gap-4 px-12 py-6 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-corporate-black transition-all duration-300 text-xl"
            >
              Learn About Our Approach
              <svg
                className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
