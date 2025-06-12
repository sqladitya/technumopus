import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    title: "Perpetually Adaptive Enterprise",
    subtitle: "Transform Your Business for the Digital Age",
    description:
      "Enterprises that embrace agility and innovation can navigate the shifting global environment with confidence, and redefine success.",
    buttonText: "Discover Our Solutions",
    buttonLink: "/services",
    backgroundImage:
      "linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)",
    overlay:
      "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%)",
  },
  {
    id: 2,
    title: "Digital Transformation Excellence",
    subtitle: "Your Trusted Technology Partner",
    description:
      "We help global enterprises reimagine their operations, modernize legacy systems, and unlock new sources of innovation and growth.",
    buttonText: "Explore Services",
    buttonLink: "/services",
    backgroundImage:
      "linear-gradient(135deg, #064e3b 0%, #047857 50%, #059669 100%)",
    overlay:
      "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)",
  },
  {
    id: 3,
    title: "Future-Ready Solutions",
    subtitle: "Innovation Meets Implementation",
    description:
      "From cloud architecture to enterprise applications, we deliver cutting-edge solutions that drive measurable business outcomes.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    backgroundImage:
      "linear-gradient(135deg, #581c87 0%, #7c3aed 50%, #8b5cf6 100%)",
    overlay:
      "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Hero Carousel */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100" : "opacity-0",
            )}
          >
            {/* Background */}
            <div
              className="absolute inset-0"
              style={{
                background: slide.backgroundImage,
              }}
            />

            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: slide.overlay,
              }}
            />

            {/* Content */}
            <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-5xl mx-auto">
                <div className="mb-6">
                  <div className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                    TECHNUM OPUS
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-6 font-medium">
                    {slide.subtitle}
                  </h2>
                </div>

                <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={slide.buttonLink}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg"
                  >
                    {slide.buttonText}
                  </Link>
                  <Link
                    to="/about"
                    className="px-8 py-4 border-2 border-white/80 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
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
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
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

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/70",
              )}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-linear"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
