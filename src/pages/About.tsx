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

const About = () => {
  return (
    <div className="bg-white">
      <Navigation />

      {/* Custom Hero Section for About Page */}
      <section className="relative overflow-hidden bg-accenture-black min-h-screen flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accenture-black/90 to-accenture-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4 animate-fade-in">
              ABOUT TECHNUM OPUS
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-slide-up">
              INNOVATION
              <br />
              <span className="text-accenture-purple">THAT MATTERS</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-8 animate-slide-up">
              Building the future through technology excellence
            </h2>
            <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl animate-fade-in">
              Since our founding, we've been dedicated to creating
              transformative technology solutions that empower businesses to
              achieve sustainable growth and lasting competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-scale-in">
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105 text-xl"
              >
                Our capabilities
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
                to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-xl"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accenture-purple/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 left-0 w-64 h-64 bg-accenture-purple/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

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

      {/* About Section - Company specific content */}
      <Section className="bg-white">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            OUR STORY
          </div>
          <h2 className="text-heading-xl font-semibold text-accenture-text-primary mb-6">
            Founded on innovation, driven by results
          </h2>
          <p className="text-body-xl text-gray-400 max-w-3xl mx-auto">
            From a small consultancy to a comprehensive technology partner, our
            journey has been defined by one constant: delivering exceptional
            value to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h3 className="text-heading-lg font-semibold text-accenture-text-primary mb-6">
              Where we started
            </h3>
            <p className="text-accenture-text-tertiary mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between complex technology
              and business success, Technum Opus has grown from a small
              consultancy to a comprehensive technology partner serving
              enterprises across industries.
            </p>
            <p className="text-accenture-text-tertiary mb-8 leading-relaxed">
              Our journey began with a simple belief: that technology should
              empower businesses, not complicate them. Today, we continue to
              uphold this principle while delivering cutting-edge solutions that
              drive measurable results.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accenture-purple mb-2">
                  500+
                </div>
                <div className="text-accenture-text-tertiary">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accenture-purple mb-2">
                  150+
                </div>
                <div className="text-accenture-text-tertiary">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accenture-purple mb-2">
                  50+
                </div>
                <div className="text-accenture-text-tertiary">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accenture-purple mb-2">
                  8+
                </div>
                <div className="text-accenture-text-tertiary">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="aspect-video bg-gradient-to-br from-accenture-purple/10 to-accenture-black/5 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-accenture-gradient rounded-full flex items-center justify-center mx-auto mb-4">
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
                <p className="text-accenture-text-primary font-semibold text-lg">
                  Building the Future Together
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accenture-purple/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accenture-purple/5 rounded-full blur-xl"></div>
          </div>
        </div>
      </Section>

      {/* Culture Section */}
      <CultureSection />

      {/* Leadership Team Section */}
      <Section className="bg-white">
        <div className="text-center mb-10 animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-4">
            LEADERSHIP
          </div>
          <h2 className="text-heading-xl font-semibold text-accenture-text-primary mb-6">
            Experienced leaders driving innovation
          </h2>
          <p className="text-body-xl text-gray-400 max-w-3xl mx-auto">
            Our leadership team brings decades of combined experience in
            technology, business strategy, and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              title: "Chief Executive Officer",
              experience: "20+ years",
              specialty: "Digital Strategy",
            },
            {
              name: "Michael Rodriguez",
              title: "Chief Technology Officer",
              experience: "18+ years",
              specialty: "Cloud Architecture",
            },
            {
              name: "Emily Thompson",
              title: "Chief Operating Officer",
              experience: "15+ years",
              specialty: "Operations Excellence",
            },
          ].map((leader, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 border border-accenture-purple/30 rounded-xl hover:from-accenture-purple/10 hover:to-accenture-purple/20 hover:border-accenture-purple/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in p-8 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-accenture-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-white">
                  {leader.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-accenture-text-primary mb-2 group-hover:text-accenture-purple transition-colors">
                {leader.name}
              </h3>
              <p className="text-accenture-text-tertiary mb-2">
                {leader.title}
              </p>
              <p className="text-sm text-accenture-purple font-medium">
                {leader.experience} • {leader.specialty}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/leadership"
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-accenture-purple text-accenture-purple rounded-lg font-semibold hover:bg-accenture-purple hover:text-white transition-all duration-300"
          >
            Meet our leadership team
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
      <Section className="bg-accenture-black text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="text-body-sm font-bold text-accenture-purple uppercase tracking-wider mb-6">
            INNOVATION
          </div>
          <h2 className="text-heading-xl font-semibold text-white mb-8">
            The technologies that will reshape business
          </h2>
          <p className="text-body-xl text-white/80 mb-12 leading-relaxed">
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
                <h3 className="text-heading-md font-semibold text-white mb-3">
                  {tech.title}
                </h3>
                <p className="text-white/70">{tech.description}</p>
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105"
          >
            Explore our services
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
      <Section className="bg-accenture-purple text-white">
        <div className="text-center py-12 animate-fade-in">
          <h2 className="text-heading-xl font-semibold text-white mb-6">
            Join us. Shape the future.
          </h2>
          <p className="text-body-xl text-white/90 mb-12 max-w-3xl mx-auto">
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
              to="/about/what-we-believe"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-xl"
            >
              Our values
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default About;
