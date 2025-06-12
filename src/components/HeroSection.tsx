import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    category: "DIGITAL TRANSFORMATION",
    title: "Perpetually Adaptive Enterprise",
    subtitle: "Navigate disruption with confidence",
    description:
      "Enterprises that embrace agility and innovation can navigate the shifting global environment with confidence, and redefine success for the digital age.",
    buttonText: "Explore Our Approach",
    buttonLink: "/services/digital-transformation",
    backgroundGradient:
      "from-corporate-black via-corporate-gray-800 to-corporate-gray-700",
    accentColor: "corporate-blue",
  },
  {
    id: 2,
    category: "TECHNOLOGY INNOVATION",
    title: "Future-Ready Solutions",
    subtitle: "Transform possibilities into reality",
    description:
      "We help organizations reimagine their operations, modernize legacy systems, and unlock new sources of innovation and sustainable growth.",
    buttonText: "Discover Solutions",
    buttonLink: "/services",
    backgroundGradient:
      "from-corporate-purple via-purple-900 to-corporate-gray-800",
    accentColor: "corporate-purple",
  },
  {
    id: 3,
    category: "BUSINESS EXCELLENCE",
    title: "360° Value Creation",
    subtitle: "Drive measurable outcomes",
    description:
      "From strategy to execution, we deliver comprehensive solutions that drive measurable business outcomes and competitive advantage.",
    buttonText: "Start Your Journey",
    buttonLink: "/contact",
    backgroundGradient:
      "from-corporate-blue-dark via-corporate-blue to-corporate-gray-700",
    accentColor: "corporate-blue-accent",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, 6000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / 600; // 6 seconds = 600 intervals of 10ms
      });
    }, 10);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isAutoPlaying, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-corporate-black"
    >
      {/* Hero Carousel */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-all duration-1000 ease-in-out",
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105",
            )}
          >
            {/* Background Gradient */}
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br",
                slide.backgroundGradient,
              )}
            />

            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-hero-pattern opacity-60" />

            {/* Subtle Animation Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse-soft" />
            </div>

            {/* Content */}
            <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-6xl mx-auto">
                {/* Category */}
                <div className="mb-6 animate-fade-in">
                  <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white uppercase tracking-wider">
                    {slide.category}
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight animate-slide-up">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-8 font-medium animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {slide.subtitle}
                </h2>

                {/* Description */}
                <p
                  className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <Link
                    to={slide.buttonLink}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-corporate-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-corporate-lg text-lg"
                  >
                    {slide.buttonText}
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
                    to="/about"
                    className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/80 text-white rounded-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-lg"
                  >
                    Learn More
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-corporate-black/50 to-transparent" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group"
        >
          <svg
            className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5"
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
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group"
        >
          <svg
            className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5"
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

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "relative w-12 h-1 rounded-full transition-all duration-300",
                index === currentSlide
                  ? "bg-white"
                  : "bg-white/30 hover:bg-white/50",
              )}
            >
              {index === currentSlide && (
                <div
                  className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Slide Info */}
        <div className="absolute bottom-8 left-8 z-30 text-white">
          <div className="text-sm opacity-70">
            {String(currentSlide + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 z-30 text-white">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm opacity-70">Scroll</span>
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
