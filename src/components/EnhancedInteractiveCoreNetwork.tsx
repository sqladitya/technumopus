import { useEffect, useRef, useState } from "react";

interface EnhancedInteractiveCoreNetworkProps {
  className?: string;
}

const EnhancedInteractiveCoreNetwork = ({
  className = "",
}: EnhancedInteractiveCoreNetworkProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringCore, setIsHoveringCore] = useState(false);
  const [activeSegment, setActiveSegment] = useState<number | null>(null);
  const [isParticleBurst, setIsParticleBurst] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const services = [
    "SAP CONSULTING",
    "SAAS DEVELOPMENT",
    "CLOUD ARCHITECTURE",
    "HARDWARE SOLUTIONS",
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left - rect.width / 2,
          y: e.clientY - rect.top - rect.height / 2,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCoreClick = () => {
    setIsParticleBurst(true);
    setTimeout(() => setIsParticleBurst(false), 2000);
  };

  const calculateSatelliteTransform = (index: number) => {
    const distance = Math.sqrt(mousePosition.x ** 2 + mousePosition.y ** 2);
    const maxDistance = 200;
    const pullStrength = Math.max(0, 1 - distance / maxDistance) * 40;

    const angle = Math.atan2(mousePosition.y, mousePosition.x);
    const offsetX = Math.cos(angle) * pullStrength;
    const offsetY = Math.sin(angle) * pullStrength;

    return `translate(${offsetX}px, ${offsetY}px)`;
  };

  const getSatelliteGlow = (index: number) => {
    const distance = Math.sqrt(mousePosition.x ** 2 + mousePosition.y ** 2);
    const maxDistance = 150;
    const glowIntensity = Math.max(0, 1 - distance / maxDistance);
    const shadowSize = 10 + glowIntensity * 20;

    return `0 0 ${shadowSize}px rgba(165, 243, 252, ${0.4 + glowIntensity * 0.6})`;
  };

  const getZoomScale = () => {
    const scrollFactor = Math.min(scrollY / 1000, 1);
    return 0.7 + scrollFactor * 0.6;
  };

  const getTiltRotation = () => {
    const scrollFactor = Math.min(scrollY / 1000, 1);
    return scrollFactor * 15;
  };

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 flex items-center justify-center pointer-events-none ${className}`}
      style={{
        background: "#0d1321",
        perspective: "1000px",
        zIndex: 1,
      }}
    >
      {/* Animation Container */}
      <div
        className="relative"
        style={{
          width: "800px",
          height: "800px",
          transform: `scale(${getZoomScale()}) rotateX(${getTiltRotation()}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Connection Lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              width: "300px",
              height: "2px",
              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              background: isParticleBurst
                ? "linear-gradient(to right, rgba(59, 130, 246, 0.8), transparent)"
                : "linear-gradient(to right, rgba(255, 255, 255, 0.6), transparent)",
              animation: isParticleBurst
                ? "connectionLineActive 2s ease-out"
                : "connectionLineFade 4s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        {/* Segments (Rotating Rings) */}
        {services.map((service, i) => (
          <div
            key={`segment-${i}`}
            className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer"
            style={{
              width: `${150 + i * 60}px`,
              height: `${150 + i * 60}px`,
              transform: "translate(-50%, -50%)",
              animation: `segmentRotate${i % 2 === 0 ? "CW" : "CCW"} ${8 + i * 2}s linear infinite`,
            }}
            onMouseEnter={() => setActiveSegment(i)}
            onMouseLeave={() => setActiveSegment(null)}
          >
            <div
              className="w-full h-full rounded-full border-2 transition-all duration-300"
              style={{
                borderColor:
                  activeSegment === i
                    ? [
                        "rgba(255, 255, 255, 0.8)",
                        "rgba(34, 197, 94, 0.8)",
                        "rgba(236, 72, 153, 0.8)",
                        "rgba(147, 197, 253, 0.8)",
                      ][i]
                    : [
                        "rgba(255, 255, 255, 0.4)",
                        "rgba(34, 197, 94, 0.4)",
                        "rgba(236, 72, 153, 0.4)",
                        "rgba(147, 197, 253, 0.4)",
                      ][i],
                boxShadow:
                  activeSegment === i
                    ? `0 0 20px ${["rgba(255, 255, 255, 0.5)", "rgba(34, 197, 94, 0.5)", "rgba(236, 72, 153, 0.5)", "rgba(147, 197, 253, 0.5)"][i]}`
                    : "none",
              }}
            />

            {/* Segment Label */}
            {activeSegment === i && (
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-white text-sm font-bold uppercase tracking-wider pointer-events-none"
                style={{
                  animation: "labelFadeIn 0.3s ease-out",
                  textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                }}
              >
                {service}
              </div>
            )}
          </div>
        ))}

        {/* Core Center */}
        <div
          className="absolute top-1/2 left-1/2 pointer-events-auto cursor-pointer"
          style={{
            width: "120px",
            height: "120px",
            transform: `translate(-50%, -50%) scale(${isHoveringCore ? 1.3 : 1})`,
            transition: "transform 0.3s ease-out",
          }}
          onMouseEnter={() => setIsHoveringCore(true)}
          onMouseLeave={() => setIsHoveringCore(false)}
          onClick={handleCoreClick}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: "radial-gradient(circle, #3b82f6, #1e40af)",
              boxShadow: isHoveringCore
                ? "0 0 60px rgba(59, 130, 246, 0.8), inset 0 0 20px rgba(30, 64, 175, 0.5)"
                : "0 0 30px rgba(59, 130, 246, 0.6), inset 0 0 15px rgba(30, 64, 175, 0.3)",
              animation: "corePulse 2s ease-in-out infinite",
            }}
          />
        </div>

        {/* Satellites */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`satellite-${i}`}
            className="absolute top-1/2 left-1/2"
            style={{
              width: "16px",
              height: "16px",
              transform: "translate(-50%, -50%)",
              animation: `satelliteOrbit${i % 2 === 0 ? "CW" : "CCW"} ${6 + i * 0.5}s linear infinite`,
            }}
          >
            <div
              className="w-full h-full rounded-full bg-blue-300"
              style={{
                transform: calculateSatelliteTransform(i),
                boxShadow: getSatelliteGlow(i),
                transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out",
              }}
            />
          </div>
        ))}

        {/* Particles */}
        {isParticleBurst &&
          Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-300 rounded-full"
              style={
                {
                  transform: "translate(-50%, -50%)",
                  animation: `particleBurst 2s ease-out forwards`,
                  animationDelay: `${i * 0.1}s`,
                  "--particle-x": `${Math.cos((i * 36 * Math.PI) / 180) * 200}px`,
                  "--particle-y": `${Math.sin((i * 36 * Math.PI) / 180) * 200}px`,
                } as React.CSSProperties & { [key: string]: string }
              }
            />
          ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes corePulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(${isHoveringCore ? 1.3 : 1});
          }
          50% {
            transform: translate(-50%, -50%)
              scale(${isHoveringCore ? 1.4 : 1.1});
          }
        }

        @keyframes segmentRotateCW {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes segmentRotateCCW {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }

        @keyframes satelliteOrbitCW {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(250px)
              rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(250px)
              rotate(-360deg);
          }
        }

        @keyframes satelliteOrbitCCW {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(180px)
              rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg) translateX(180px)
              rotate(360deg);
          }
        }

        @keyframes connectionLineFade {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes connectionLineActive {
          0% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }

        @keyframes labelFadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-8px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(-8px) scale(1);
          }
        }

        @keyframes particleBurst {
          0% {
            transform: translate(-50%, -50%) translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%)
              translate(var(--particle-x), var(--particle-y)) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default EnhancedInteractiveCoreNetwork;
