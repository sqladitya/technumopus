const HeroAccents = () => {
  return (
    <>
      {/* Magenta accent shapes matching the logo style */}
      <div className="absolute top-1/4 left-10 w-32 h-16 bg-tech-primary/20 rounded-r-full blur-sm animate-pulse-slow" />
      <div className="absolute top-1/3 right-16 w-24 h-24 bg-tech-secondary/30 rounded-full blur-md animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-20 h-40 bg-tech-primary/15 rounded-full blur-lg animate-spin-slow" />

      {/* Geometric accent elements inspired by the logo */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
        <div className="w-16 h-8 bg-tech-primary/30 rounded-r-full" />
      </div>

      <div className="absolute bottom-32 right-20">
        <div className="w-12 h-12 border-2 border-tech-primary/40 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-tech-secondary/60 rounded-full" />
      </div>

      {/* Play button inspired accent */}
      <div className="absolute top-1/2 left-16 transform -translate-y-1/2">
        <div
          className="w-8 h-8 bg-tech-primary/25 clip-path-triangle animate-pulse-slow"
          style={{
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
          }}
        />
      </div>
    </>
  );
};

export default HeroAccents;
