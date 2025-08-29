// src/components/CircleImages.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CircleImages({ images }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const images = containerRef.current.children;
    const radius = 250;
    const angleStep = (2 * Math.PI) / images.length;

    Array.from(images).forEach((img, i) => {
      const angle = i * angleStep;
      gsap.set(img, {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      });
    });

    gsap.to(images, {
      rotation: 360,
      transformOrigin: "center center",
      repeat: -1,
      ease: "linear",
      duration: 30,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] flex items-center justify-center rotate-z-90"
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="mani"
          className="absolute w-32 h-32 rounded-full shadow-xl border-4 border-white object-cover"
        />
      ))}
    </div>
  );
}