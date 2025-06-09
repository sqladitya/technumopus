const ProfessionalBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-100" />

      {/* Subtle overlay with very light pink tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/3 via-transparent to-purple-500/5" />

      {/* Minimal geometric pattern - very subtle */}
      <div className="absolute inset-0 opacity-[0.01]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="subtle-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-tech-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#subtle-grid)" />
        </svg>
      </div>

      {/* Very subtle corner accents */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-tech-primary/2 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl" />

      {/* Clean minimal dots pattern */}
      <div className="absolute inset-0 opacity-[0.008]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="minimal-dots"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="30"
                cy="30"
                r="1"
                fill="currentColor"
                className="text-tech-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#minimal-dots)" />
        </svg>
      </div>
    </div>
  );
};

export default ProfessionalBackground;
