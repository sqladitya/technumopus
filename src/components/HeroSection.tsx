import EnhancedInteractiveCoreNetwork from "./EnhancedInteractiveCoreNetwork";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-fixed bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      style={{
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Fixed Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/90 via-purple-600/85 to-slate-900/95" />

      {/* Enhanced Interactive Core Network Animation - Only in Hero Section */}
      <EnhancedInteractiveCoreNetwork className="opacity-80" />

      {/* Very subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Minimal floating elements for depth */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-tech-primary/8 rounded-full blur-2xl" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Digital
            <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Transformation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions for the modern enterprise
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white hover:bg-gray-50 text-tech-primary rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Explore Services
            </button>
            <button className="px-8 py-4 border-2 border-white/80 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Simple scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce z-20">
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
