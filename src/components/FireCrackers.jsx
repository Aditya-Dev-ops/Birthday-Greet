// src/components/FireCrackers.jsx
import { useEffect, useRef } from "react";

export default function FireCrackers() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    function createFirework(x, y) {
      for (let i = 0; i < 50; i++) {
        particles.push({
          x,
          y,
          radius: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 8,
          dy: (Math.random() - 0.5) * 8,
          alpha: 1,
        });
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.alpha -= 0.01;
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
          ctx.fill();
        }
      });
      requestAnimationFrame(animate);
    }

    animate();

    const interval = setInterval(() => {
      createFirework(Math.random() * canvas.width, Math.random() * canvas.height / 2);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
}