import { useEffect, useRef } from "react";

interface OrbitalRingsAnimationProps {
  className?: string;
  ringColor?: string;
  numRings?: number;
}

const OrbitalRingsAnimation = ({
  className = "",
  ringColor = "rgba(255, 0, 127, 0.5)",
  numRings = 12,
}: OrbitalRingsAnimationProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const rings: Ring[] = [];

    class Ring {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      opacity: number;
      angle: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 50 + 30;
        this.maxRadius = this.radius * 3; // Larger expansion for more dramatic effect
        this.speed = Math.random() * 0.8 + 0.3; // Slightly faster expansion
        this.opacity = 0.6; // Starting opacity
        this.angle = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02; // Rotation speed
      }

      update() {
        this.radius += this.speed;
        this.angle += this.rotationSpeed;

        // Fade out as ring expands
        this.opacity = 0.6 * (1 - this.radius / this.maxRadius);

        // Reset ring when it reaches maximum size
        if (this.radius > this.maxRadius) {
          this.radius = Math.random() * 50 + 30;
          this.maxRadius = this.radius * 3;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.opacity = 0.6;
          this.angle = Math.random() * Math.PI * 2;
        }
      }

      draw() {
        if (!ctx) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // Main ring
        ctx.beginPath();
        ctx.ellipse(0, 0, this.radius, this.radius / 2, 0, 0, Math.PI * 2);
        ctx.strokeStyle = ringColor.replace(/[\d\.]+\)$/g, `${this.opacity})`);
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner ring for depth effect
        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          this.radius * 0.7,
          (this.radius * 0.7) / 2,
          0,
          0,
          Math.PI * 2,
        );
        ctx.strokeStyle = ringColor.replace(
          /[\d\.]+\)$/g,
          `${this.opacity * 0.5})`,
        );
        ctx.lineWidth = 1;
        ctx.stroke();

        // Add some orbital dots for extra effect
        if (this.opacity > 0.3) {
          const numDots = 6;
          for (let i = 0; i < numDots; i++) {
            const dotAngle = (i / numDots) * Math.PI * 2;
            const dotX = Math.cos(dotAngle) * this.radius;
            const dotY = Math.sin(dotAngle) * (this.radius / 2);

            ctx.beginPath();
            ctx.arc(dotX, dotY, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = ringColor.replace(
              /[\d\.]+\)$/g,
              `${this.opacity * 0.8})`,
            );
            ctx.fill();
          }
        }

        ctx.restore();
      }
    }

    // Initialize rings
    for (let i = 0; i < numRings; i++) {
      rings.push(new Ring());
    }

    function animate() {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rings.forEach((ring) => {
        ring.update();
        ring.draw();
      });

      requestAnimationFrame(animate);
    }

    // Event listeners
    const handleResize = () => {
      resizeCanvas();
      // Reinitialize rings on resize
      rings.length = 0;
      for (let i = 0; i < numRings; i++) {
        rings.push(new Ring());
      }
    };

    window.addEventListener("resize", handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ringColor, numRings]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        zIndex: 1,
        opacity: 0.8,
      }}
    />
  );
};

export default OrbitalRingsAnimation;
