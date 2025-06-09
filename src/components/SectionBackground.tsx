interface SectionBackgroundProps {
  variant?: "light" | "dark" | "gradient";
  children: React.ReactNode;
  className?: string;
}

const SectionBackground = ({
  variant = "light",
  children,
  className = "",
}: SectionBackgroundProps) => {
  const getBackgroundClasses = () => {
    switch (variant) {
      case "light":
        return "bg-gradient-to-br from-white via-gray-50 to-tech-bg-light relative overflow-hidden";
      case "dark":
        return "bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800 relative overflow-hidden";
      case "gradient":
        return "bg-gradient-to-br from-tech-bg-light via-purple-50 to-pink-50 relative overflow-hidden";
      default:
        return "bg-white relative overflow-hidden";
    }
  };

  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={`dots-${variant}`}
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="12"
                cy="12"
                r="1"
                fill="currentColor"
                className="text-tech-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dots-${variant})`} />
        </svg>
      </div>

      {/* Floating Orbs */}
      {variant === "light" && (
        <>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-tech-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        </>
      )}

      {variant === "gradient" && (
        <>
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-tech-primary/10 rounded-full blur-2xl animate-glow-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl animate-glow-pulse"
            style={{ animationDelay: "2s" }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionBackground;
