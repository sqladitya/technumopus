const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[800px] bg-hero-gradient overflow-hidden"
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Large pulsing blur - top left */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-technum-purple/20 rounded-full blur-4xl animate-pulse-slow" />

        {/* Medium spinning blur - top right */}
        <div className="absolute top-32 right-32 w-48 h-48 bg-technum-purple-light/30 rounded-full blur-5xl animate-spin-slow" />

        {/* Small floating blur - bottom left */}
        <div className="absolute bottom-40 left-40 w-32 h-32 bg-technum-purple/25 rounded-full blur-4xl animate-float" />

        {/* Medium pulsing blur - center right */}
        <div
          className="absolute top-1/2 right-20 w-40 h-40 bg-technum-purple-light/20 rounded-full blur-5xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />

        {/* Large spinning blur - bottom center */}
        <div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-56 h-56 bg-technum-purple/15 rounded-full blur-4xl animate-spin-slow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-16 left-16 w-2 h-2 bg-technum-purple rounded-full opacity-60" />
      <div className="absolute top-24 left-20 w-1 h-1 bg-technum-purple-light rounded-full opacity-40" />
      <div className="absolute top-20 right-20 w-2 h-2 bg-technum-purple rounded-full opacity-60" />
      <div className="absolute bottom-32 left-24 w-1.5 h-1.5 bg-technum-purple-light rounded-full opacity-50" />
      <div className="absolute bottom-28 right-28 w-1 h-1 bg-technum-purple rounded-full opacity-40" />

      {/* Main Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[800px] px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-technum-text-dark mb-6 leading-tight">
            Innovation Meets
            <span className="block bg-purple-gradient bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-technum-text-medium mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into digital reality with cutting-edge technology
            and unparalleled expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-purple-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-technum-purple text-technum-purple rounded-lg font-semibold hover:bg-technum-purple hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
