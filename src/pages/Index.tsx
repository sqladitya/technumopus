import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import {
  Section,
  ContentCardsSection,
  ValuePropositionSection,
  ClientStoriesSection,
  AwardsSection,
  CultureSection,
  NewsSection,
  ServicesSection,
  AboutSection,
} from "@/components/ContentSections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-white">
      <Navigation />
      <HeroSection />

      {/* Content Cards Grid - Accenture's signature layout */}
      <ContentCardsSection />

      {/* 360° Value - Accenture's core message */}
      <ValuePropositionSection />

      {/* Client Stories Carousel */}
      <ClientStoriesSection />

      {/* Services Overview */}
      <ServicesSection />

      {/* Awards Section with floating cards */}
      <AwardsSection />

      {/* About Section */}
      <AboutSection />

      {/* Culture Section */}
      <CultureSection />

      {/* Industries Section */}
      <Section className="bg-white">
        <div className="text-center mb-10 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            INDUSTRIES
          </div>
          <h2 className="text-heading-xl font-semibold text-accenture-text-primary mb-6">
            Industry expertise that drives results
          </h2>
          <p className="text-body-xl text-gray-400 max-w-3xl mx-auto">
            We combine deep industry knowledge with technology innovation to
            solve complex business challenges
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {[
            { name: "Banking", icon: "🏦", href: "/industries/banking" },
            { name: "Healthcare", icon: "🏥", href: "/industries/healthcare" },
            {
              name: "Manufacturing",
              icon: "🏭",
              href: "/industries/manufacturing",
            },
            { name: "Retail", icon: "🛍️", href: "/industries/retail" },
            { name: "Energy", icon: "⚡", href: "/industries/energy" },
            {
              name: "Automotive",
              icon: "🚗",
              href: "/industries/automotive",
            },
            {
              name: "Communications",
              icon: "📡",
              href: "/industries/communications",
            },
            { name: "Insurance", icon: "🛡️", href: "/industries/insurance" },
            {
              name: "Life Sciences",
              icon: "🧬",
              href: "/industries/life-sciences",
            },
            { name: "Travel", icon: "✈️", href: "/industries/travel" },
            {
              name: "Consumer Goods",
              icon: "📦",
              href: "/industries/consumer-goods",
            },
            { name: "High Tech", icon: "💻", href: "/industries/high-tech" },
          ].map((industry, index) => (
            <Link
              key={index}
              to={industry.href}
              className="group flex flex-col items-center p-6 bg-gradient-to-br from-white to-gray-50 border border-accenture-purple/30 rounded-xl hover:from-accenture-purple/10 hover:to-accenture-purple/20 hover:border-accenture-purple/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 filter group-hover:drop-shadow-lg">
                {industry.icon}
              </div>
              <span className="text-gray-700 font-semibold text-center group-hover:text-accenture-purple transition-colors text-sm">
                {industry.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/industries"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-accenture-purple text-accenture-purple rounded-lg font-semibold hover:bg-accenture-purple hover:text-white transition-all duration-300"
          >
            View all industries
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
      </Section>

      {/* Technology Innovation Section */}
      <Section className="bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-6">
            INNOVATION
          </div>
          <h2 className="text-heading-xl font-semibold text-gray-900 mb-8">
            The technologies that will reshape business
          </h2>
          <p className="text-body-xl text-gray-700 mb-12 leading-relaxed">
            From artificial intelligence to quantum computing, we help
            organizations harness emerging technologies to create competitive
            advantage and drive growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {[
              {
                title: "Artificial Intelligence",
                description: "AI that amplifies human potential",
                icon: "🤖",
              },
              {
                title: "Cloud Computing",
                description: "Cloud-first transformation",
                icon: "☁️",
              },
              {
                title: "Quantum Computing",
                description: "Quantum advantage for business",
                icon: "⚛️",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-heading-md font-semibold text-gray-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-700">{tech.description}</p>
              </div>
            ))}
          </div>

          <Link
            to="/insights/technology-vision"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105"
          >
            Explore Technology Vision
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
      </Section>

      {/* News Section */}
      <NewsSection />

      {/* Career CTA Section */}
      <Section className="bg-accenture-purple text-gray-900">
        <div className="text-center py-12 animate-fade-in">
          <h2 className="text-heading-xl font-semibold text-gray-900 mb-6">
            Join us. Shape the future.
          </h2>
          <p className="text-body-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Be part of a team that's creating 360° value for clients, people,
            shareholders, partners and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/careers"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-accenture-purple rounded-lg font-semibold hover:bg-accenture-gray-50 transition-all duration-300 hover:scale-105 text-xl"
            >
              Explore careers
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
              to="/about/life-at-accenture"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-gray-800 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 text-xl"
            >
              Life at Technum Opus
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
