import { useEffect, useRef } from "react";

interface MinimalOrbitalAnimationProps {
  className?: string;
}

const MinimalOrbitalAnimation = ({
  className = "",
}: MinimalOrbitalAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 flex items-center justify-center pointer-events-none ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)",
        zIndex: 1,
      }}
    >
      {/* Animation Container */}
      <div
        className="relative"
        style={{
          width: "600px",
          height: "600px",
        }}
      >
        {/* Central Blue Orb */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: "120px",
            height: "120px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, #3b82f6 0%, #1e40af 70%, #1e3a8a 100%)",
            borderRadius: "50%",
            boxShadow: `
              0 0 40px rgba(59, 130, 246, 0.6),
              0 0 80px rgba(59, 130, 246, 0.4),
              0 0 120px rgba(59, 130, 246, 0.2),
              inset 0 0 30px rgba(30, 64, 175, 0.3)
            `,
            animation: "centralPulse 3s ease-in-out infinite",
          }}
        />

        {/* Orbital Path 1 - Top Arc */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: "280px",
            height: "280px",
            transform: "translate(-50%, -50%)",
            border: "1px solid rgba(148, 163, 184, 0.3)",
            borderRadius: "50%",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)",
          }}
        />

        {/* Orbital Path 2 - Right Arc */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: "400px",
            height: "400px",
            transform: "translate(-50%, -50%) rotate(45deg)",
            border: "1px solid rgba(236, 72, 153, 0.4)",
            borderRadius: "50%",
            clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)",
          }}
        />

        {/* Orbital Path 3 - Bottom Arc */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: "320px",
            height: "320px",
            transform: "translate(-50%, -50%) rotate(90deg)",
            border: "1px solid rgba(59, 130, 246, 0.4)",
            borderRadius: "50%",
            clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Satellite 1 - Orbiting on Path 1 */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: "280px",
            height: "280px",
            transform: "translate(-50%, -50%)",
            animation: "orbit1 8s linear infinite",
          }}
        >
          <div
            className="absolute top-0 left-1/2"
            style={{
              width: "8px",
              height: "8px",
              transform: "translate(-50%, -50%)",
              background: "#a5b4fc",
              borderRadius: "50%",
              boxShadow: "0 0 15px rgba(165, 180, 252, 0.8)",
            }}
          />
        </div>

        {/* Satellite 2 - Orbiting on Path 2 */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: "400px",
            height: "400px",
            transform: "translate(-50%, -50%)",
            animation: "orbit2 12s linear infinite reverse",
          }}
        >
          <div
            className="absolute top-0 left-1/2"
            style={{
              width: "6px",
              height: "6px",
              transform: "translate(-50%, -50%)",
              background: "#ec4899",
              borderRadius: "50%",
              boxShadow: "0 0 12px rgba(236, 72, 153, 0.8)",
            }}
          />
        </div>

        {/* Satellite 3 - Orbiting on Path 3 */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: "320px",
            height: "320px",
            transform: "translate(-50%, -50%)",
            animation: "orbit3 10s linear infinite",
          }}
        >
          <div
            className="absolute top-0 left-1/2"
            style={{
              width: "7px",
              height: "7px",
              transform: "translate(-50%, -50%)",
              background: "#3b82f6",
              borderRadius: "50%",
              boxShadow: "0 0 14px rgba(59, 130, 246, 0.8)",
            }}
          />
        </div>

        {/* Additional Satellite on larger orbit */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: "180px",
            height: "180px",
            transform: "translate(-50%, -50%)",
            animation: "orbit4 6s linear infinite reverse",
          }}
        >
          <div
            className="absolute top-0 left-1/2"
            style={{
              width: "5px",
              height: "5px",
              transform: "translate(-50%, -50%)",
              background: "#94a3b8",
              borderRadius: "50%",
              boxShadow: "0 0 10px rgba(148, 163, 184, 0.6)",
            }}
          />
        </div>

        {/* Subtle connecting line from center */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: "1px",
            height: "200px",
            transform: "translate(-50%, -50%) rotate(45deg)",
            background:
              "linear-gradient(to bottom, rgba(59, 130, 246, 0.3), transparent)",
            transformOrigin: "center top",
            animation: "lineRotate 15s linear infinite",
          }}
        />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes centralPulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.9;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 1;
          }
        }

        @keyframes orbit1 {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes orbit2 {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes orbit3 {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes orbit4 {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes lineRotate {
          from {
            transform: translate(-50%, -50%) rotate(45deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(405deg);
          }
        }
      `}</style>
    </div>
  );
};

export default MinimalOrbitalAnimation;
