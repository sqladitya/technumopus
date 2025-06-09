import { useEffect, useRef, useState } from "react";

interface EnhancedInteractiveCoreNetworkProps {
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

const EnhancedInteractiveCoreNetwork = ({
  className = "",
}: EnhancedInteractiveCoreNetworkProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHoveringContainer, setIsHoveringContainer] = useState(false);
  const [verticalLineActive, setVerticalLineActive] = useState(false);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [satellites, setSatellites] = useState<SatelliteState[]>([]);
  const [particles, setParticles] = useState<ParticleState[]>([]);

  const services = [
    "SAP CONSULTING",
    "SAAS PLATFORM DEVELOPMENT",
    "CLOUD ARCHITECTURE",
    "HARDWARE INFRASTRUCTURE SOLUTIONS",
  ];

  // Initialize satellites
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

    // Initialize particles
    const initialParticles: ParticleState[] = Array.from({ length: 10 }).map(
      () => ({
        x: 0,
        y: 0,
        active: false,
      }),
    );
    setParticles(initialParticles);
  }, []);

  // Core click handler
  const handleCoreClick = () => {
    // Toggle vertical line
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

  // Mouse movement handler
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

  // Mouse leave handler
  const handleMouseLeave = () => {
    setSatellites((prev) =>
      prev.map((satellite) => ({
        ...satellite,
        transform: "",
        boxShadow: "0 0 8px rgba(165, 243, 252, 0.4)",
      })),
    );
  };

  // Scroll handler
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
      className={`fixed inset-0 flex items-center justify-center ${className}`}
      style={{
        margin: 0,
        overflow: "hidden",
        background: "#0d1321",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        zIndex: 1,
      }}
    >
      {/* Container */}
      <div
        ref={containerRef}
        className="container"
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          perspective: "1000px",
          animation: "zoom 12s infinite ease-in-out",
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
        {/* Vertical Line from Core to Bottom */}
        <div
          className={`vertical-line ${verticalLineActive ? "active" : ""}`}
          style={{
            position: "fixed",
            width: "4px",
            height: "calc(100vh - 50%)",
            background: verticalLineActive
              ? "linear-gradient(to bottom, rgba(59, 130, 246, 1), rgba(59, 130, 246, 0.7), rgba(59, 130, 246, 0.4), rgba(59, 130, 246, 0.1))"
              : "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%)",
            transformOrigin: "top center",
            animation: verticalLineActive
              ? "verticalGlow 3s infinite ease-in-out"
              : "verticalFade 6s infinite ease-in-out",
            transition: "background 0.3s ease",
            zIndex: 2,
            boxShadow: verticalLineActive
              ? "0 0 15px rgba(59, 130, 246, 0.5)"
              : "0 0 8px rgba(255, 255, 255, 0.3)",
          }}
        />

        {/* Core */}
        <div
          className="core"
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
          {/* Segments */}
          {services.map((service, i) => (
            <div
              key={`segment-${i}`}
              className="segment"
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
                animation: `spin${i} ${hoveredSegment === i ? 8 : 15}s linear infinite`,
                transition:
                  "border-color 0.3s ease, animation-duration 0.3s ease",
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={() => setHoveredSegment(i)}
              onMouseLeave={() => setHoveredSegment(null)}
            >
              {/* Segment Label */}
              <div
                className="segment-label"
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

          {/* Core Center */}
          <div
            className="core-center"
            style={{
              width: "150px",
              height: "150px",
              background: "radial-gradient(circle, #3b82f6, #1e40af)",
              borderRadius: "50%",
              boxShadow:
                "0 0 40px rgba(59, 130, 246, 0.7), inset 0 0 20px rgba(255, 255, 255, 0.3)",
              animation: "pulse 4s infinite ease-in-out",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              position: "relative",
              zIndex: 10,
            }}
          />

          {/* Particles Container */}
          <div
            className="particles"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            {particles.map((particle, i) => (
              <div
                key={`particle-${i}`}
                className="particle"
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
                }}
              />
            ))}
          </div>
        </div>

        {/* Satellites */}
        {satellites.map((satellite, i) => (
          <div
            key={`satellite-${i}`}
            className="satellite"
            style={{
              position: "absolute",
              width: "15px",
              height: "15px",
              background: "#a5b4fc",
              borderRadius: "50%",
              animation: `orbit 10s linear infinite`,
              animationDelay: `${-i}s`,
              boxShadow: satellite.boxShadow,
              transition: "box-shadow 0.2s ease",
              top: "50%",
              left: "50%",
              transformOrigin: "50% 50%",
              transform:
                satellite.transform ||
                `translate(-50%, -50%) rotate(${satellite.baseAngle}deg) translateX(${satellite.orbitRadius}px) rotate(-${satellite.baseAngle}deg)`,
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes zoom {
          0%,
          100% {
            transform: scale(0.7) rotateX(10deg);
          }
          50% {
            transform: scale(1.3) rotateX(-10deg);
          }
        }

        .container:hover {
          transform: scale(0.9) rotateX(0deg) !important;
        }

        .core:hover .core-center {
          transform: scale(1.3) rotate(5deg) !important;
          box-shadow:
            0 0 60px rgba(59, 130, 246, 1),
            inset 0 0 30px rgba(255, 255, 255, 0.5) !important;
        }

        @keyframes pulse {
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

        @keyframes spin0 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes spin1 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }

        @keyframes spin2 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes spin3 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(var(--orbit-radius, 300px))
              rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(var(--orbit-radius, 300px))
              rotate(-360deg);
          }
        }

        @keyframes fade {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes verticalFade {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes verticalGlow {
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

export default EnhancedInteractiveCoreNetwork;
