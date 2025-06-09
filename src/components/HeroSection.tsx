import HeroAccents from "./HeroAccents";
import EnhancedBackground from "./EnhancedBackground";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background */}
      <EnhancedBackground />

      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20" />

      {/* Tech-inspired floating elements */}
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

        {/* Enhanced floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-lg animate-float opacity-60 shadow-lg shadow-white/10" />
        <div className="absolute top-40 right-40 w-24 h-24 border border-tech-primary/40 rounded-full animate-pulse-slow opacity-50 shadow-xl shadow-tech-primary/20" />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-tech-pink/20 rounded-lg animate-spin-slow opacity-50 shadow-lg shadow-tech-pink/30" />
        <div
          className="absolute bottom-32 right-32 w-20 h-20 border border-white/20 rounded-full animate-float opacity-40 shadow-lg shadow-white/10"
          style={{ animationDelay: "2s" }}
        />

        {/* Logo-inspired magenta accents */}
        <HeroAccents />

        {/* Additional enhanced glow effects */}
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-tech-primary/15 rounded-full blur-3xl animate-pulse-slow shadow-2xl shadow-tech-primary/30" />
        <div
          className="absolute bottom-1/3 left-1/3 w-64 h-32 bg-tech-secondary/20 rounded-full blur-2xl animate-float shadow-xl shadow-tech-secondary/25"
          style={{ animationDelay: "3s" }}
        />

        {/* Floating code elements */}
        <div className="absolute top-1/4 left-1/3 text-white/20 font-mono text-sm animate-pulse">
          &lt;/&gt;
        </div>
        <div
          className="absolute bottom-1/4 right-1/3 text-tech-primary/30 font-mono text-lg animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          {}
        </div>
        <div
          className="absolute top-2/3 left-1/4 text-purple-300/25 font-mono text-xs animate-ping"
          style={{ animationDelay: "2s" }}
        >
          01010101
        </div>
      </div>

      {/* Main Hero Content with enhanced styling */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced title with better effects */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="relative">
              Empowering Digital
              {/* Text glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent blur-sm">
                Empowering Digital
              </span>
            </span>
            <span className="block bg-gradient-to-r from-tech-primary via-purple-400 to-tech-pink-light bg-clip-text text-transparent relative">
              Transformation
              {/* Enhanced glow for gradient text */}
              <span className="absolute inset-0 bg-gradient-to-r from-tech-primary via-purple-400 to-tech-pink-light bg-clip-text text-transparent blur-sm opacity-50">
                Transformation
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed relative">
            Innovative solutions for the modern enterprise
            {/* Subtle text shadow */}
            <span className="absolute inset-0 text-white/30 blur-sm">
              Innovative solutions for the modern enterprise
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
            <button className="px-8 py-4 bg-tech-primary hover:bg-tech-primary-light text-white rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-xl shadow-tech-primary/40 border border-tech-primary/50 backdrop-blur-sm">
              <span className="relative z-10">Explore Services</span>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-tech-primary/20 rounded-lg blur-lg" />
            </button>
            <button className="px-8 py-4 border-2 border-white/80 text-white rounded-lg font-semibold hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-white/20">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="relative">
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
          {/* Glow effect for scroll indicator */}
          <div className="absolute inset-0 text-white/30 blur-sm">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
