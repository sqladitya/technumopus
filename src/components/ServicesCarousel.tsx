import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Strategy & Consulting",
      subtitle: "Digital Transformation Strategy",
      description:
        "Navigate your transformation journey with strategic insights and proven methodologies.",
      image: "/placeholder.svg",
      href: "/services/consulting",
      color: "from-purple-600 to-blue-600",
    },
    {
      title: "Technology",
      subtitle: "Cloud & Infrastructure",
      description:
        "Build scalable, secure, and intelligent cloud-native architectures.",
      image: "/placeholder.svg",
      href: "/services/cloud-architecture",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Operations",
      subtitle: "Managed Services",
      description:
        "Optimize operations with AI-powered automation and intelligent workflows.",
      image: "/placeholder.svg",
      href: "/services/operations",
      color: "from-cyan-600 to-teal-600",
    },
    {
      title: "Industry X",
      subtitle: "Digital Engineering",
      description:
        "Reinvent products and services with digital engineering excellence.",
      image: "/placeholder.svg",
      href: "/services/engineering",
      color: "from-teal-600 to-green-600",
    },
    {
      title: "Interactive",
      subtitle: "Experience Design",
      description:
        "Create exceptional user experiences that drive engagement and growth.",
      image: "/placeholder.svg",
      href: "/services/design",
      color: "from-green-600 to-purple-600",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Our
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              CAPABILITIES
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            End-to-end services that transform how you operate, innovate and
            grow.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div
                  className={`relative h-96 lg:h-[500px] bg-gradient-to-br ${service.color} rounded-2xl overflow-hidden group`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10 h-full flex items-center">
                    <div className="grid lg:grid-cols-2 gap-8 w-full px-8 lg:px-16">
                      {/* Content */}
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                            {service.title}
                          </div>
                          <h3 className="text-4xl lg:text-5xl font-bold text-white">
                            {service.subtitle}
                          </h3>
                          <p className="text-lg text-white/90 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <Link
                          to={service.href}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 group"
                        >
                          Learn More
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
                        </Link>
                      </div>

                      {/* Visual */}
                      <div className="hidden lg:flex items-center justify-center">
                        <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                          <div className="w-60 h-60 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="w-40 h-40 bg-white/30 rounded-full flex items-center justify-center">
                              <div className="text-6xl text-white animate-pulse">
                                {index === 0 && "🎯"}
                                {index === 1 && "☁️"}
                                {index === 2 && "⚙️"}
                                {index === 3 && "🔧"}
                                {index === 4 && "🎨"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-purple-500 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + services.length) % services.length,
              )
            }
            className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % services.length)
            }
            className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
