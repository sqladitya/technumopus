import { useEffect, useRef, useState } from "react";

interface HeroAnimationProps {
  className?: string;
}

interface SatelliteState {
  transform: string;
  boxShadow: string;
  orbitRadius: number;
  baseAngle: number;
}

interface ParticleState {
  x: number;
  y: number;
  active: boolean;
}

const HeroAnimation = ({ className = "" }: HeroAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHoveringContainer, setIsHoveringContainer] = useState(false);
  const [verticalLineActive, setVerticalLineActive] = useState(false);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [satellites, setSatellites] = useState<SatelliteState[]>([]);
  const [particles, setParticles] = useState<ParticleState[]>([]);

  const heroServices = [
    "SAP CONSULTING",
    "SAAS PLATFORM DEVELOPMENT",
    "CLOUD ARCHITECTURE",
    "HARDWARE INFRASTRUCTURE SOLUTIONS",
  ];

  // Initialize satellites and particles
  useEffect(() => {
    const initialSatellites: SatelliteState[] = Array.from({ length: 8 }).map(
      (_, i) => ({
        transform: "",
        boxShadow: "0 0 8px rgba(165, 243, 252, 0.4)",
        orbitRadius: 250 + (i % 4) * 50,
        baseAngle: i * 45,
      }),
    );
    setSatellites(initialSatellites);

    const initialParticles: ParticleState[] = Array.from({ length: 10 }).map(
      () => ({
        x: 0,
        y: 0,
        active: false,
      }),
    );
    setParticles(initialParticles);
  }, []);

  // Core click handler - activates vertical line and particle burst
  const handleCoreClick = () => {
    setVerticalLineActive((prev) => !prev);

    // Trigger particle burst
    setParticles((prev) =>
      prev.map(() => {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200 + 100;
        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          active: true,
        };
      }),
    );

    // Reset particles after animation
    setTimeout(() => {
      setParticles((prev) => prev.map((p) => ({ ...p, active: false })));
    }, 1000);
  };

  // Mouse movement handler for satellite interaction
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    setSatellites((prev) =>
      prev.map((satellite, i) => {
        const influenceX = (mouseX / rect.width) * 40;
        const influenceY = (mouseY / rect.height) * 40;

        // Calculate current satellite position
        const angle =
          satellite.baseAngle + (Date.now() / 100) * (i % 2 === 0 ? 1 : -1);
        const satelliteX =
          satellite.orbitRadius * Math.cos((angle * Math.PI) / 180) +
          influenceX;
        const satelliteY =
          satellite.orbitRadius * Math.sin((angle * Math.PI) / 180) +
          influenceY;

        // Calculate distance to mouse and glow intensity
        const distanceToMouse = Math.sqrt(
          (mouseX - satelliteX) ** 2 + (mouseY - satelliteY) ** 2,
        );
        const glowIntensity = Math.max(0.4, 1 - distanceToMouse / 300);

        return {
          ...satellite,
          transform: `rotate(${angle}deg) translate(${satellite.orbitRadius + influenceX}px, ${influenceY}px) rotate(-${angle}deg)`,
          boxShadow: `0 0 ${glowIntensity * 20}px rgba(165, 243, 252, ${glowIntensity})`,
        };
      }),
    );
  };

  // Mouse leave handler - reset satellites
  const handleMouseLeave = () => {
    setSatellites((prev) =>
      prev.map((satellite) => ({
        ...satellite,
        transform: "",
        boxShadow: "0 0 8px rgba(165, 243, 252, 0.4)",
      })),
    );
  };

  // Scroll handler for zoom effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate container transform based on scroll
  const getContainerTransform = () => {
    const zoomFactor = 0.7 + scrollY / 1000;
    const rotationX = (scrollY % 20) - 10;
    return `scale(${zoomFactor}) rotateX(${rotationX}deg)`;
  };

  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)",
        zIndex: 1,
      }}
    >
      {/* Vertical Line from Center to Bottom - Hero Section Only */}
      <div
        className={`hero-vertical-line ${verticalLineActive ? "active" : ""}`}
        style={{
          position: "fixed",
          width: "3px",
          height: "50vh",
          background: verticalLineActive
            ? "linear-gradient(to bottom, rgba(59, 130, 246, 1), rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.5), rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))"
            : "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          transformOrigin: "top center",
          animation: verticalLineActive
            ? "heroVerticalGlow 3s infinite ease-in-out"
            : "heroVerticalFade 6s infinite ease-in-out",
          transition: "all 0.3s ease",
          zIndex: 5,
          borderRadius: "2px",
          boxShadow: verticalLineActive
            ? "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3)"
            : "0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)",
        }}
      />

      {/* Hero Animation Container */}
      <div
        ref={containerRef}
        className="hero-animation-container"
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          perspective: "1000px",
          animation: "heroZoom 12s infinite ease-in-out",
          transition: "transform 0.3s ease",
          transform:
            scrollY > 0
              ? getContainerTransform()
              : isHoveringContainer
                ? "scale(0.9) rotateX(0deg)"
                : undefined,
          top: "50%",
          left: "50%",
          marginTop: "-400px",
          marginLeft: "-400px",
        }}
        onMouseEnter={() => setIsHoveringContainer(true)}
        onMouseLeave={() => {
          setIsHoveringContainer(false);
          handleMouseLeave();
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Hero Core System */}
        <div
          className="hero-core"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transformStyle: "preserve-3d",
          }}
          onClick={handleCoreClick}
        >
          {/* Hero Service Segments */}
          {heroServices.map((service, i) => (
            <div
              key={`hero-segment-${i}`}
              className="hero-segment"
              style={{
                position: "absolute",
                width:
                  i === 0 ? "100%" : i === 1 ? "80%" : i === 2 ? "60%" : "40%",
                height:
                  i === 0 ? "100%" : i === 1 ? "80%" : i === 2 ? "60%" : "40%",
                top: "50%",
                left: "50%",
                border: "3px solid transparent",
                borderRadius: "50%",
                borderTopColor:
                  hoveredSegment === i
                    ? "rgba(255, 255, 255, 0.8)"
                    : [
                        "rgba(255, 255, 255, 0.4)",
                        "rgba(34, 197, 94, 0.4)",
                        "rgba(236, 72, 153, 0.4)",
                        "rgba(147, 197, 253, 0.4)",
                      ][i],
                transform: "translate(-50%, -50%)",
                transformOrigin: "center center",
                animation: `heroSpin${i} ${hoveredSegment === i ? 8 : 15}s linear infinite`,
                transition:
                  "border-color 0.3s ease, animation-duration 0.3s ease",
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={() => setHoveredSegment(i)}
              onMouseLeave={() => setHoveredSegment(null)}
            >
              {/* Hero Service Label */}
              <div
                className="hero-segment-label"
                style={{
                  position: "absolute",
                  color: "#fff",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  opacity: hoveredSegment === i ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                  zIndex: 15,
                  textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                  fontWeight: "600",
                  ...(i === 0 && {
                    top: "-50px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }),
                  ...(i === 1 && {
                    top: "-50px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }),
                  ...(i === 2 && {
                    bottom: "-50px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }),
                  ...(i === 3 && {
                    right: "-100px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }),
                }}
              >
                {service}
              </div>
            </div>
          ))}

          {/* Hero Core Center - The Digital Heart */}
          <div
            className="hero-core-center"
            style={{
              width: "150px",
              height: "150px",
              background: "radial-gradient(circle, #3b82f6, #1e40af)",
              borderRadius: "50%",
              boxShadow:
                "0 0 40px rgba(59, 130, 246, 0.7), inset 0 0 20px rgba(255, 255, 255, 0.3)",
              animation: "heroPulse 4s infinite ease-in-out",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              position: "relative",
              zIndex: 10,
            }}
          />

          {/* Hero Particles System */}
          <div
            className="hero-particles"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            {particles.map((particle, i) => (
              <div
                key={`hero-particle-${i}`}
                className="hero-particle"
                style={{
                  position: "absolute",
                  width: "5px",
                  height: "5px",
                  background: "#93c5fd",
                  borderRadius: "50%",
                  top: "50%",
                  left: "50%",
                  transform: particle.active
                    ? `translate(calc(-50% + ${particle.x}px), calc(-50% + ${particle.y}px))`
                    : "translate(-50%, -50%)",
                  opacity: particle.active ? 0.7 : 0,
                  transition: particle.active
                    ? "opacity 0.5s ease, transform 1s ease"
                    : "none",
                  boxShadow: "0 0 10px rgba(147, 197, 253, 0.6)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Satellites - Enterprise Connections */}
        {satellites.map((satellite, i) => (
          <div
            key={`hero-satellite-${i}`}
            className="hero-satellite"
            style={
              {
                position: "absolute",
                width: "15px",
                height: "15px",
                background: "#a5b4fc",
                borderRadius: "50%",
                animation: `heroOrbit 10s linear infinite`,
                animationDelay: `${-i}s`,
                boxShadow: satellite.boxShadow,
                transition: "box-shadow 0.2s ease",
                top: "50%",
                left: "50%",
                transformOrigin: "50% 50%",
                "--orbit-radius": `${satellite.orbitRadius}px`,
                transform: satellite.transform || `translate(-50%, -50%)`,
              } as React.CSSProperties & { "--orbit-radius": string }
            }
          />
        ))}
      </div>

      {/* Hero-Specific CSS Animations */}
      <style jsx>{`
        @keyframes heroZoom {
          0%,
          100% {
            transform: scale(0.7) rotateX(10deg);
          }
          50% {
            transform: scale(1.3) rotateX(-10deg);
          }
        }

        .hero-animation-container:hover {
          transform: scale(0.9) rotateX(0deg) !important;
        }

        .hero-core:hover .hero-core-center {
          transform: scale(1.3) rotate(5deg) !important;
          box-shadow:
            0 0 60px rgba(59, 130, 246, 1),
            inset 0 0 30px rgba(255, 255, 255, 0.5) !important;
        }

        @keyframes heroPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        @keyframes heroSpin0 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes heroSpin1 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }

        @keyframes heroSpin2 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes heroSpin3 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }

        @keyframes heroOrbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg)
              translateX(var(--orbit-radius, 300px));
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg)
              translateX(var(--orbit-radius, 300px));
          }
        }

        @keyframes heroVerticalFade {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes heroVerticalGlow {
          0%,
          100% {
            opacity: 0.6;
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroAnimation;
