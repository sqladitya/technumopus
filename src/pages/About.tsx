import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Section,
  ContentCardsSection,
  ValuePropositionSection,
  ClientStoriesSection,
  AwardsSection,
} from "@/components/ContentSections";
import SectionBackground from "@/components/SectionBackground";

const About = () => {
  const aboutStats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "8+", label: "Years Experience" },
  ];

  return (
    <div className="bg-white">
      <Navigation />

      {/* Hero Section - Home Page Style */}
      <SectionBackground variant="gradient">
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tech-text-dark mb-6 leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-tech-primary to-purple-600 bg-clip-text text-transparent">
                  Technum Opus
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-tech-text-medium max-w-4xl mx-auto mb-8 leading-relaxed">
                Empowering businesses through innovative technology solutions.
                We are passionate about digital transformation and committed to
                excellence in every project we deliver.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-tech-gradient text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get in Touch
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
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-tech-primary text-tech-primary rounded-lg font-semibold hover:bg-tech-primary hover:text-white transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SectionBackground>

      {/* Stats Section - Home Page Style */}
      <Section className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {aboutStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-tech-primary mb-2">
                {stat.number}
              </div>
              <div className="text-tech-text-medium font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Content Cards Section - Reuse Home Page Component */}
      <ContentCardsSection />

      {/* Our Story Section - Home Page Style */}
      <Section className="bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-tech-primary/10 to-purple-500/10 rounded-2xl flex items-center justify-center">
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
                  <p className="text-tech-text-medium font-medium text-lg">
                    Building the Future Together
                  </p>
                </div>
              </div>
              {/* Decorative elements like home page */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-tech-primary/5 rounded-full blur-xl"></div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
              OUR STORY
            </div>
            <h2 className="text-heading-xl font-semibold text-accenture-text-primary mb-6">
              Innovation that drives results
            </h2>
            <p className="text-body-lg text-accenture-text-tertiary mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between complex technology
              and business success, Technum Opus has grown from a small
              consultancy to a comprehensive technology partner serving
              enterprises across industries.
            </p>
            <p className="text-body-lg text-accenture-text-tertiary mb-8 leading-relaxed">
              Our journey began with a simple belief: that technology should
              empower businesses, not complicate them. Today, we continue to
              uphold this principle while delivering cutting-edge solutions that
              drive measurable results.
            </p>
            <Link
              to="/about/what-we-believe"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300"
            >
              Our Values
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
        </div>
      </Section>

      {/* Value Proposition - Reuse Home Page Component */}
      <ValuePropositionSection />

      {/* Mission & Vision Section - Home Page Style */}
      <Section className="bg-gradient-to-br from-gray-50 via-white to-gray-100/50">
        <div className="text-center mb-16">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            MISSION & VISION
          </div>
          <h2 className="text-heading-xl font-semibold text-accenture-text-primary mb-6">
            Our purpose and aspirations
          </h2>
          <p className="text-body-lg text-accenture-text-tertiary max-w-3xl mx-auto">
            What drives us every day and where we're heading tomorrow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100">
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
            <h3 className="text-heading-md font-semibold text-accenture-text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-accenture-text-tertiary leading-relaxed">
              To empower businesses with innovative technology solutions that
              drive growth, efficiency, and competitive advantage. We deliver
              enterprise-grade services with a personal touch, ensuring every
              client achieves their digital transformation goals.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100">
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
            <h3 className="text-heading-md font-semibold text-accenture-text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-accenture-text-tertiary leading-relaxed">
              To be the leading technology partner for enterprises seeking
              transformative solutions. We envision a future where businesses
              seamlessly leverage technology to innovate, scale, and create
              lasting value for their customers and stakeholders.
            </p>
          </div>
        </div>
      </Section>

      {/* Client Stories - Reuse Home Page Component */}
      <ClientStoriesSection />

      {/* Awards Section - Reuse Home Page Component */}
      <AwardsSection />

      {/* CTA Section - Home Page Style */}
      <Section className="bg-gradient-to-br from-accenture-black via-accenture-black-light to-accenture-gray-900">
        <div className="text-center text-white">
          <h2 className="text-heading-xl font-semibold text-white mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-body-xl text-white/80 max-w-3xl mx-auto mb-12">
            Join hundreds of satisfied clients who have achieved their digital
            transformation goals with Technum Opus.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-accenture-purple rounded-lg font-semibold hover:bg-accenture-gray-50 transition-all duration-300 hover:scale-105 text-xl"
            >
              Start Your Journey
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
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-xl"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
