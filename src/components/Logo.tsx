interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={`${sizeClasses[size]} bg-tech-gradient rounded-lg flex items-center justify-center ${className}`}
    >
      <span className="text-white text-sm font-bold">TO</span>
    </div>
  );
};

export default Logo;
