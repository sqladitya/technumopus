import { useEffect, useRef } from "react";

interface CircuitBoardAnimationProps {
  className?: string;
  particleColor?: string;
  lineColor?: string;
  numParticles?: number;
}

const CircuitBoardAnimation = ({
  className = "",
  particleColor = "rgba(255, 0, 127, 0.6)",
  lineColor = "rgba(255, 0, 127, 0.1)",
  numParticles = 80,
}: CircuitBoardAnimationProps) => {
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

    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulseSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 1.5; // Slower movement for subtle effect
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Pulsing effect
        this.opacity += Math.sin(Date.now() * this.pulseSpeed) * 0.01;
        this.opacity = Math.max(0.1, Math.min(0.8, this.opacity));
      }

      draw() {
        if (!ctx) return;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor.replace(
          /[\d\.]+\)$/g,
          `${this.opacity})`,
        );
        ctx.fill();

        // Add a subtle glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = particleColor.replace(
          /[\d\.]+\)$/g,
          `${this.opacity * 0.3})`,
        );
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    function drawCircuitLines() {
      if (!ctx) return;

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            // Only connect nearby particles
            const opacity = (120 - distance) / 120;
            ctx.beginPath();
            ctx.strokeStyle = lineColor.replace(
              /[\d\.]+\)$/g,
              `${opacity * 0.3})`,
            );
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw additional circuit-like patterns
      ctx.strokeStyle = lineColor;
      for (let i = 0; i < particles.length; i++) {
        if (Math.random() > 0.95) {
          // Occasional circuit lines
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);

          // Create L-shaped circuit paths
          const direction = Math.random() > 0.5 ? 1 : -1;
          const length = Math.random() * 60 + 20;

          if (Math.random() > 0.5) {
            ctx.lineTo(particles[i].x + length * direction, particles[i].y);
            ctx.lineTo(
              particles[i].x + length * direction,
              particles[i].y + length * direction,
            );
          } else {
            ctx.lineTo(particles[i].x, particles[i].y + length * direction);
            ctx.lineTo(
              particles[i].x + length * direction,
              particles[i].y + length * direction,
            );
          }

          ctx.stroke();
        }
      }
    }

    function animate() {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawCircuitLines();

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    // Event listeners
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [particleColor, lineColor, numParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        zIndex: 1,
        opacity: 0.7,
      }}
    />
  );
};

export default CircuitBoardAnimation;
