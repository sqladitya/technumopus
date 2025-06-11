import { useState, useEffect } from "react";

const AwardsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    const element = document.getElementById("awards-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const awards = [
    {
      title: "Leader in Digital Transformation",
      organization: "Gartner Magic Quadrant",
      year: "2024",
      category: "Technology Consulting",
      color: "from-blue-500 to-purple-600",
      position: { top: "10%", left: "5%" },
      delay: 0,
    },
    {
      title: "Best Cloud Partner",
      organization: "AWS Partner Awards",
      year: "2024",
      category: "Cloud Migration",
      color: "from-orange-500 to-red-600",
      position: { top: "20%", right: "10%" },
      delay: 200,
    },
    {
      title: "Innovation Excellence",
      organization: "Tech Innovation Awards",
      year: "2023",
      category: "AI & Machine Learning",
      color: "from-green-500 to-teal-600",
      position: { top: "60%", left: "8%" },
      delay: 400,
    },
    {
      title: "Customer Choice Award",
      organization: "Software Reviews",
      year: "2024",
      category: "Enterprise Software",
      color: "from-purple-500 to-pink-600",
      position: { top: "45%", right: "5%" },
      delay: 600,
    },
    {
      title: "Top Employer",
      organization: "Great Place to Work",
      year: "2024",
      category: "Technology Sector",
      color: "from-indigo-500 to-blue-600",
      position: { top: "75%", left: "25%" },
      delay: 800,
    },
    {
      title: "Security Excellence",
      organization: "Cybersecurity Awards",
      year: "2023",
      category: "Enterprise Security",
      color: "from-red-500 to-pink-600",
      position: { top: "30%", left: "45%" },
      delay: 1000,
    },
  ];

  return (
    <section
      id="awards-section"
      className="relative py-20 bg-gradient-to-br from-gray-900 to-black overflow-hidden min-h-screen"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl lg:text-6xl font-bold">
              Recognition &
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AWARDS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our commitment to excellence is recognized by industry leaders and
              clients worldwide.
            </p>
          </div>
        </div>

        {/* Floating Awards Cards */}
        <div className="relative min-h-[600px]">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`absolute w-64 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0 rotate-0"
                  : "opacity-0 translate-y-20 rotate-12"
              }`}
              style={{
                ...award.position,
                transitionDelay: `${award.delay}ms`,
              }}
            >
              <div
                className={`bg-gradient-to-br ${award.color} rounded-2xl p-6 shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer group`}
              >
                {/* Award Icon */}
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
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
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {award.year}
                  </div>
                </div>

                {/* Award Content */}
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-white/90 text-sm font-medium">
                    {award.organization}
                  </p>
                  <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs text-white font-medium">
                    {award.category}
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-32">
          <div
            className={`grid md:grid-cols-4 gap-8 transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { number: "15+", label: "Industry Awards", icon: "🏆" },
              { number: "25+", label: "Certifications", icon: "📜" },
              { number: "100%", label: "Client Satisfaction", icon: "⭐" },
              { number: "500+", label: "Success Stories", icon: "📊" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div
            className={`transition-all duration-1000 delay-1500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of industry leaders who trust us with their digital
              transformation.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              Start Your Success Story
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements Animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        @keyframes floatReverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(10px) rotate(-2deg);
          }
        }

        .floating-card:nth-child(odd) {
          animation: float 6s ease-in-out infinite;
        }

        .floating-card:nth-child(even) {
          animation: floatReverse 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AwardsSection;
