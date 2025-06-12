import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const heroSlides = [
  {
    id: 1,
    category: "TRANSFORMATION",
    title: "CHANGE THAT MATTERS",
    subtitle: "For you and your business",
    description:
      "Reinvent your organization with the power of data, artificial intelligence and human ingenuity to create lasting impact that drives sustainable growth.",
    image: "/api/placeholder/1920/1080",
    cta: {
      primary: { text: "See how we help", href: "/services" },
      secondary: { text: "Client stories", href: "/insights/case-studies" },
    },
  },
  {
    id: 2,
    category: "DIGITAL TRANSFORMATION",
    title: "CHANGE THAT MATTERS",
    subtitle: "For you and your business",
    description:
      "Reinvent your organization with the power of data, artificial intelligence and human ingenuity to create lasting impact.",
    image: "/api/placeholder/1920/1080",
    cta: {
      primary: { text: "See how we help", href: "/services" },
      secondary: { text: "Client stories", href: "/insights/case-studies" },
    },
  },
  {
    id: 3,
    category: "INNOVATION",
    title: "TECHNOLOGY VISION",
    subtitle: "The human+ difference",
    description:
      "Discover how emerging technologies will reshape business and society in the next three to five years.",
    image: "/api/placeholder/1920/1080",
    cta: {
      primary: { text: "Read the report", href: "/insights/technology-vision" },
      secondary: { text: "Interactive version", href: "/insights/interactive" },
    },
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 8000);
  };

  return (
    <section className="relative min-h-screen bg-accenture-black overflow-hidden">
      {/* Hero Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-in-out",
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105",
          )}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-accenture-black via-accenture-black/80 to-transparent z-10" />
            <div
              className="w-full h-full bg-cover bg-center bg-accenture-gray-800"
              style={{
                backgroundImage: `url(${slide.image})`,
                filter: "brightness(0.4) contrast(1.1)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-20 flex items-center min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-20">
              <div className="max-w-4xl">
                {/* Category */}
                <div className="mb-6 animate-fade-in">
                  <span className="inline-block px-0 py-2 text-accenture-purple text-body-sm font-bold uppercase tracking-wider">
                    {slide.category}
                  </span>
                </div>

                {/* Main Title - Accenture's signature large typography */}
                <h1 className="text-hero font-heading text-white mb-8 leading-none animate-slide-up">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <h2
                  className="text-heading-xl text-white/90 mb-8 font-medium animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {slide.subtitle}
                </h2>

                {/* Description */}
                <p
                  className="text-body-xl text-white/80 mb-12 max-w-3xl leading-relaxed animate-slide-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-6 animate-slide-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <Link
                    to={slide.cta.primary.href}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-accenture-purple text-white rounded-lg font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105 shadow-purple text-lg"
                  >
                    {slide.cta.primary.text}
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

                  <button className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/60 text-white rounded-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-lg">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {slide.cta.secondary.text}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-6 z-30 flex items-center gap-4">
        {/* Slide Indicators */}
        <div className="flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-12 h-1 rounded-full transition-all duration-300",
                index === currentSlide
                  ? "bg-accenture-purple"
                  : "bg-white/30 hover:bg-white/50",
              )}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 text-white/70 hover:text-white transition-colors"
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)
        }
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
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
        onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-6 z-30 text-white/70">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-body-sm uppercase tracking-wider">Scroll</span>
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
    </section>
  );
};

export default HeroSection;
