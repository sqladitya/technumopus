const EnhancedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-tech-primary opacity-95" />

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-tech-primary/20 via-purple-500/30 to-pink-400/20 animate-pulse-slow" />

      {/* Large floating orbs with glow effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-tech-primary/30 rounded-full blur-3xl animate-float opacity-60" />
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-purple-500/40 rounded-full blur-3xl animate-spin-slow opacity-50" />
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-48 bg-tech-secondary/25 rounded-full blur-3xl animate-pulse-slow opacity-40"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute -bottom-32 right-1/4 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl animate-float opacity-50"
        style={{ animationDelay: "4s" }}
      />

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
            <pattern
              id="dots"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="white" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-ping opacity-60" />
      <div className="absolute top-1/3 left-2/3 w-1 h-1 bg-tech-primary rounded-full animate-pulse opacity-80" />
      <div
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-50"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-2/3 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-ping opacity-40"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute bottom-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse opacity-70"
        style={{ animationDelay: "3s" }}
      />

      {/* Tech circuit patterns */}
      <svg
        className="absolute top-10 left-10 w-80 h-80 text-white/10"
        viewBox="0 0 200 200"
      >
        <g className="animate-spin-slow" style={{ animationDuration: "20s" }}>
          <path
            d="M20,20 L180,20 L180,100 L100,100 L100,180 L20,180 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="20" cy="20" r="4" fill="currentColor" />
          <circle cx="180" cy="20" r="4" fill="currentColor" />
          <circle cx="100" cy="100" r="4" fill="currentColor" />
          <circle cx="20" cy="180" r="4" fill="currentColor" />
        </g>
      </svg>

      <svg
        className="absolute bottom-10 right-10 w-60 h-60 text-tech-primary/20"
        viewBox="0 0 150 150"
      >
        <g
          className="animate-spin-slow"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        >
          <polygon
            points="75,10 130,60 100,130 50,130 20,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="75" cy="75" r="8" fill="currentColor" />
        </g>
      </svg>

      {/* Animated light rays */}
      <div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-tech-primary/30 to-transparent animate-pulse"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Radial glow effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tech-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Hexagonal pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons"
              width="80"
              height="70"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="40,7 60,25 60,55 40,70 20,55 20,25"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default EnhancedBackground;
