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
        return "bg-gradient-to-br from-gray-50 via-white to-gray-100/50 relative overflow-hidden text-accenture-text-primary";
      case "dark":
        return "bg-gradient-to-br from-accenture-black via-accenture-gray-900 to-accenture-gray-800 relative overflow-hidden text-white";
      case "gradient":
        return "bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 relative overflow-hidden text-accenture-text-primary";
      default:
        return "bg-gradient-to-br from-gray-50 via-white to-gray-100/50 relative overflow-hidden text-accenture-text-primary";
    }
  };

  return (
    <div className={`${getBackgroundClasses()} ${className}`}>
      {/* Very subtle background elements */}
      {variant === "gradient" && (
        <>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-tech-primary/[0.02] rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/[0.02] rounded-full blur-3xl" />
        </>
      )}

      {/* Minimal pattern overlay */}
      <div className="absolute inset-0 opacity-[0.006]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={`pattern-${variant}`}
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="20"
                cy="20"
                r="0.5"
                fill="currentColor"
                className="text-tech-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pattern-${variant})`} />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionBackground;
