// src/components/CircleSlider.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CircleSlider({ media, onAnimationEnd }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const items = sliderRef.current.querySelectorAll(".item");

    // Animate out after 20s
    const timer = setTimeout(() => {
      items.forEach((item) => {
        const randomX = gsap.utils.random(-500, 500);
        const randomY = gsap.utils.random(-500, 500);
        const randomRotation = gsap.utils.random(-360, 360);

        gsap.to(item, {
          x: randomX,
          y: randomY,
          rotation: randomRotation,
          opacity: 0,
          duration: 6,
          ease: "power3.out",
          onComplete: () => {
            if (item === items[items.length - 1] && onAnimationEnd) {
              onAnimationEnd();
            }
          },
        });
      });
    }, 60000);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div
      ref={sliderRef}
      className="slider z-50"
      style={{ "--quantity": media.length }}
    >
      {media.map((m, i) => (
        <div className="item" style={{ "--i": i + 1 }} key={i}>
          {m.type === "video" ? (
            <video
              src={m.src}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl w-full h-full object-cover"
            />
          ) : (
            <img
              src={m.src}
              alt={`mani-${i}`}
              className="rounded-xl w-full h-full object-cover"
            />
          )}
        </div>
      ))}
    </div>
  );
}