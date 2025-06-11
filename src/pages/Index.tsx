import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import InsightsSection from "@/components/InsightsSection";
import ClientStoriesCarousel from "@/components/ClientStoriesCarousel";
import AwardsSection from "@/components/AwardsSection";
import NewsCarousel from "@/components/NewsCarousel";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-purple-900 via-black to-pink-900"></div>
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              <span className="block">Let there be</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CHANGE
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a global professional services company with leading
              capabilities in digital, cloud and security. Combining unmatched
              experience and specialized skills across more than 40 industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                to="/services"
                className="group px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Explore Services
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </span>
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServicesCarousel />

      {/* Value Proposition Section */}
      <ValuePropositionSection />

      {/* Insights Section */}
      <InsightsSection />

      {/* Client Stories Carousel */}
      <ClientStoriesCarousel />

      {/* Awards Section */}
      <AwardsSection />

      {/* Technology Stack Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Technology
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                LEADERSHIP
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We leverage cutting-edge technologies to drive innovation and
              create lasting value for our clients across industries.
            </p>
          </div>

          {/* Floating Tech Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Cloud", icon: "☁️" },
              { name: "AI/ML", icon: "🤖" },
              { name: "Blockchain", icon: "⛓️" },
              { name: "IoT", icon: "📡" },
              { name: "Security", icon: "🛡️" },
              { name: "Analytics", icon: "📊" },
            ].map((tech, index) => (
              <div
                key={index}
                className="group text-center transform hover:scale-110 transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300">
                  {tech.icon}
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Carousel */}
      <NewsCarousel />

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-black to-pink-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Culture of
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  INNOVATION
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our people are at the heart of everything we do. We foster an
                inclusive culture where diverse perspectives drive breakthrough
                innovations and exceptional client outcomes.
              </p>
              <div className="space-y-4">
                {[
                  "Diverse and inclusive workforce",
                  "Continuous learning and development",
                  "Innovation-first mindset",
                  "Collaborative global teams",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Join Our Team
                <svg
                  className="w-4 h-4"
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
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-1">
                <div className="bg-black rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-400 mb-2">
                        50+
                      </div>
                      <div className="text-gray-300 text-sm">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-pink-400 mb-2">
                        699K+
                      </div>
                      <div className="text-gray-300 text-sm">People</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-400 mb-2">
                        120+
                      </div>
                      <div className="text-gray-300 text-sm">Cities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">
                        $50B+
                      </div>
                      <div className="text-gray-300 text-sm">Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's create something extraordinary together. Start your digital
            transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Conversation
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
