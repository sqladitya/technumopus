import CircuitBoardAnimation from "./CircuitBoardAnimation";

interface SubtleCircuitBackgroundProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

const SubtleCircuitBackground = ({
  children,
  variant = "light",
  className = "",
}: SubtleCircuitBackgroundProps) => {
  const getColors = () => {
    if (variant === "light") {
      return {
        particleColor: "rgba(255, 0, 127, 0.15)",
        lineColor: "rgba(255, 0, 127, 0.05)",
      };
    } else {
      return {
        particleColor: "rgba(255, 255, 255, 0.2)",
        lineColor: "rgba(255, 255, 255, 0.08)",
      };
    }
  };

  const colors = getColors();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Circuit Board Animation */}
      <CircuitBoardAnimation
        particleColor={colors.particleColor}
        lineColor={colors.lineColor}
        numParticles={30}
        className="opacity-60"
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SubtleCircuitBackground;
