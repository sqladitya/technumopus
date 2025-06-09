import HeroAccents from "./HeroAccents";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-hero-gradient overflow-hidden"
    >
      {/* Abstract Tech Background Elements */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Floating geometric shapes with magenta theme */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-lg animate-float opacity-60" />
        <div className="absolute top-40 right-40 w-24 h-24 border border-tech-primary/30 rounded-full animate-pulse-slow opacity-40" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-tech-pink/20 rounded-lg animate-spin-slow opacity-50" />
        <div
          className="absolute bottom-32 right-32 w-20 h-20 border border-white/15 rounded-full animate-float opacity-30"
          style={{ animationDelay: "2s" }}
        />

        {/* Tech circuit-like lines */}
        <svg
          className="absolute top-1/4 left-10 w-64 h-64 text-white/10"
          viewBox="0 0 100 100"
        >
          <path
            d="M10,10 L90,10 L90,50 L50,50 L50,90 L10,90 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
          <circle cx="90" cy="10" r="2" fill="currentColor" />
          <circle cx="50" cy="50" r="2" fill="currentColor" />
        </svg>

        {/* Logo-inspired magenta accents */}
        <HeroAccents />

        {/* Additional magenta glow effects */}
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-tech-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/3 left-1/3 w-64 h-32 bg-tech-secondary/15 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Digital
            <span className="block bg-gradient-to-r from-tech-primary to-tech-pink-light bg-clip-text text-transparent">
              Transformation
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions for the modern enterprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-tech-primary hover:bg-tech-primary-light text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-tech-primary/30">
              Explore Services
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-tech-primary transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
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
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
