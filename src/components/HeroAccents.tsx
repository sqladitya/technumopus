const HeroAccents = () => {
  return (
    <>
      {/* Vibrant pink accent shapes matching the new color scheme */}
      <div className="absolute top-1/4 left-10 w-32 h-16 bg-tech-primary/25 rounded-r-full blur-sm animate-pulse-slow shadow-lg shadow-tech-primary/20" />
      <div className="absolute top-1/3 right-16 w-24 h-24 bg-tech-secondary/35 rounded-full blur-md animate-float shadow-xl shadow-tech-secondary/25" />
      <div className="absolute bottom-1/4 left-1/4 w-20 h-40 bg-tech-primary/20 rounded-full blur-lg animate-spin-slow" />

      {/* Geometric accent elements inspired by the logo */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
        <div className="w-16 h-8 bg-tech-primary/35 rounded-r-full shadow-lg shadow-tech-primary/20" />
      </div>

      <div className="absolute bottom-32 right-20">
        <div className="w-12 h-12 border-2 border-tech-primary/50 rounded-full animate-spin-slow shadow-lg shadow-tech-primary/30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-tech-secondary/70 rounded-full" />
      </div>

      {/* Play button inspired accent with enhanced glow */}
      <div className="absolute top-1/2 left-16 transform -translate-y-1/2">
        <div
          className="w-8 h-8 bg-tech-primary/30 animate-pulse-slow shadow-lg shadow-tech-primary/40"
          style={{
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
          }}
        />
      </div>

      {/* Additional vibrant accents */}
      <div
        className="absolute top-3/4 right-1/4 w-16 h-16 bg-tech-primary/15 rounded-lg blur-md animate-float shadow-xl shadow-tech-primary/20"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-10 h-20 bg-tech-secondary/25 rounded-full blur-sm animate-pulse-slow"
        style={{ animationDelay: "2.5s" }}
      />
    </>
  );
};

export default HeroAccents;
