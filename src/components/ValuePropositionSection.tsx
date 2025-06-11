import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ValuePropositionSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    const element = document.getElementById("value-proposition");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const values = [
    {
      number: "360°",
      title: "VALUE",
      description: "We deliver 360° value to our clients",
      details: [
        "Comprehensive technology solutions",
        "End-to-end service delivery",
        "Measurable business outcomes",
        "Sustainable competitive advantage",
      ],
    },
    {
      number: "100%",
      title: "HUMAN",
      description: "Technology amplifies human ingenuity",
      details: [
        "Human-centered design approach",
        "Augmented intelligence solutions",
        "Workforce transformation",
        "Skills development programs",
      ],
    },
    {
      number: "∞",
      title: "INNOVATION",
      description: "Infinite possibilities through innovation",
      details: [
        "Cutting-edge research & development",
        "Emerging technology adoption",
        "Innovation labs and centers",
        "Patent portfolio development",
      ],
    },
  ];

  return (
    <section id="value-proposition" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Main Value Proposition */}
        <div className="text-center mb-20">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-6xl lg:text-8xl font-bold">
              <span className="block text-white">360°</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                VALUE
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We help our clients reinvent their organizations through the
              application of digital technologies, creating 360° value for all
              stakeholders.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Discover Our Impact
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
        </div>

        {/* Value Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-purple-900 hover:to-pink-900 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Icon/Number */}
                <div className="text-center mb-8">
                  <div className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                    {value.number}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-lg">{value.description}</p>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  {value.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start gap-3 group-hover:text-white transition-colors"
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl text-gray-300 mb-8">
              Ready to unlock 360° value for your organization?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ValuePropositionSection;
