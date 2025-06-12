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
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: {
      primary: { text: "See how we help", href: "/services" },
      secondary: { text: "Client stories", href: "/insights/case-studies" },
    },
  },
  {
    id: 2,
    category: "DIGITAL TRANSFORMATION",
    title: "TECHNOLOGY VISION",
    subtitle: "The human+ difference",
    description:
      "Discover how emerging technologies will reshape business and society in the next three to five years through human-centered innovation.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: {
      primary: { text: "Read the report", href: "/insights/technology-vision" },
      secondary: { text: "Interactive version", href: "/insights/interactive" },
    },
  },
  {
    id: 3,
    category: "INNOVATION",
    title: "FUTURE READY",
    subtitle: "Embrace what's next",
    description:
      "From artificial intelligence to quantum computing, we help organizations harness emerging technologies to create competitive advantage and drive growth.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    cta: {
      primary: { text: "Explore innovation", href: "/services/technology" },
      secondary: { text: "Watch demo", href: "/demo" },
    },
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Only enable auto-play on desktop (screens larger than md)
    if (
      !isPlaying ||
      (typeof window !== "undefined" && window.innerWidth < 768)
    )
      return;

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

  // On mobile, always show the first slide
  const currentSlideData =
    typeof window !== "undefined" && window.innerWidth < 768
      ? heroSlides[0]
      : heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen bg-accenture-black overflow-hidden">
      {/* Mobile: Single static hero */}
      <div className="block md:hidden">
        <div className="absolute inset-0">
          {/* Background Image with Enhanced Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-accenture-black via-accenture-black/90 to-accenture-black/70 z-10" />
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroSlides[0].image})`,
                filter: "brightness(0.3) contrast(1.2) saturate(1.1)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accenture-purple/20 to-accenture-purple/10 z-5" />
          </div>

          {/* Content */}
          <div className="relative z-20 flex items-center min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-16">
              <div className="max-w-5xl text-left">
                {/* Category */}
                <div className="mb-6 animate-slide-in-left text-left">
                  <span className="inline-flex items-center px-4 py-2 bg-accenture-purple/20 backdrop-blur-sm border border-accenture-purple/30 rounded-full text-accenture-purple text-sm font-bold uppercase tracking-wider shadow-glow-purple">
                    <span className="w-2 h-2 bg-accenture-purple rounded-full mr-2 animate-pulse"></span>
                    {heroSlides[0].category}
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl font-heading text-white mb-6 leading-tight animate-slide-in-left drop-shadow-2xl text-left">
                  {heroSlides[0].title}
                </h1>

                {/* Subtitle */}
                <h2
                  className="text-xl sm:text-2xl text-white/95 mb-8 font-medium animate-slide-in-left drop-shadow-lg text-left"
                  style={{ animationDelay: "0.2s" }}
                >
                  {heroSlides[0].subtitle}
                </h2>

                {/* Description */}
                <p
                  className="text-base sm:text-lg text-white/85 mb-10 max-w-3xl leading-relaxed animate-slide-in-left drop-shadow-md text-left"
                  style={{ animationDelay: "0.4s" }}
                >
                  {heroSlides[0].description}
                </p>

                {/* CTA Buttons */}
                <div
                  className="flex flex-col gap-4 animate-slide-in-left justify-start"
                  style={{ animationDelay: "0.6s" }}
                >
                  <Link
                    to={heroSlides[0].cta.primary.href}
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accenture-purple text-white rounded-xl font-semibold hover:bg-accenture-purple-dark transition-all duration-300 shadow-purple text-base w-full sm:w-auto"
                  >
                    {heroSlides[0].cta.primary.text}
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

                  <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 border-2 border-white/60 text-white rounded-xl font-semibold hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-base w-full sm:w-auto">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    {heroSlides[0].cta.secondary.text}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Full slider */}
      <div className="hidden md:block">
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
            {/* Background Image with Enhanced Overlay */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-accenture-black via-accenture-black/90 to-accenture-black/70 z-10" />
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  filter: "brightness(0.3) contrast(1.2) saturate(1.1)",
                }}
              />
              {/* Additional purple gradient overlay for Accenture branding */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accenture-purple/20 to-accenture-purple/10 z-5" />
            </div>

            {/* Enhanced Visual Elements */}
            <div className="absolute inset-0 z-5">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accenture-purple/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse-glow" />
              <div
                className="absolute top-1/2 right-1/3 w-32 h-32 bg-accenture-purple/20 rounded-full blur-xl animate-float"
                style={{ animationDelay: "2s" }}
              />
            </div>

            {/* Content with Enhanced Typography */}
            <div className="relative z-20 flex items-center min-h-screen">
              <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="max-w-5xl text-left">
                  {/* Category with Enhanced Styling */}
                  <div className="mb-8 animate-slide-in-left text-left">
                    <span className="inline-flex items-center px-6 py-3 bg-accenture-purple/20 backdrop-blur-sm border border-accenture-purple/30 rounded-full text-accenture-purple text-body-sm font-bold uppercase tracking-wider shadow-glow-purple">
                      <span className="w-2 h-2 bg-accenture-purple rounded-full mr-3 animate-pulse"></span>
                      {slide.category}
                    </span>
                  </div>

                  {/* Main Title with Enhanced Typography */}
                  <h1 className="text-hero font-heading text-white mb-8 leading-none animate-slide-in-left drop-shadow-2xl text-left">
                    {slide.title}
                  </h1>

                  {/* Subtitle with Glow Effect */}
                  <h2
                    className="text-heading-xl text-white/95 mb-10 font-medium animate-slide-in-left drop-shadow-lg text-left"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {slide.subtitle}
                  </h2>

                  {/* Description with Better Spacing */}
                  <p
                    className="text-body-xl text-white/85 mb-14 max-w-4xl leading-relaxed animate-slide-in-left drop-shadow-md text-left"
                    style={{ animationDelay: "0.4s" }}
                  >
                    {slide.description}
                  </p>

                  {/* Enhanced CTA Buttons */}
                  <div
                    className="flex flex-col sm:flex-row gap-6 animate-slide-in-left justify-start mb-20"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <Link
                      to={slide.cta.primary.href}
                      className="group inline-flex items-center gap-4 px-10 py-5 bg-accenture-purple text-white rounded-xl font-semibold hover:bg-accenture-purple-dark transition-all duration-300 hover:scale-105 shadow-purple hover:shadow-xl text-lg backdrop-blur-sm border border-accenture-purple/20"
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

                    <button className="group inline-flex items-center gap-4 px-10 py-5 bg-white/10 border-2 border-white/60 text-white rounded-xl font-semibold hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-lg">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      {slide.cta.secondary.text}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Enhanced Slide Controls - Left Aligned */}
        <div className="absolute bottom-10 left-6 z-30 flex items-center gap-6">
          {/* Slide Indicators with Progress */}
          <div className="flex gap-4">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "relative w-16 h-2 rounded-full transition-all duration-300 overflow-hidden",
                  index === currentSlide
                    ? "bg-accenture-purple shadow-glow-purple"
                    : "bg-white/30 hover:bg-white/50",
                )}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-gradient-to-r from-accenture-purple to-accenture-purple-light rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Enhanced Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-white/10 border border-white/20 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
          >
            {isPlaying ? (
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        {/* Enhanced Navigation Arrows */}
        <button
          onClick={() =>
            goToSlide(
              (currentSlide - 1 + heroSlides.length) % heroSlides.length,
            )
          }
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 hover:bg-accenture-purple/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group"
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
          onClick={() => goToSlide((currentSlide + 1) % heroSlides.length)}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 hover:bg-accenture-purple/80 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group"
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

        {/* Enhanced Scroll Indicator - Left Aligned */}
        <div className="absolute bottom-10 left-80 z-30 text-white/70">
          <div className="flex flex-col items-center gap-3 animate-bounce">
            <span className="text-body-sm uppercase tracking-wider font-medium">
              Explore
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-white/70 to-transparent"></div>
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

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 z-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(166, 0, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(166, 0, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
