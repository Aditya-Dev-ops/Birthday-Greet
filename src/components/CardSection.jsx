// src/components/CardSection.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CardSection({ title, text, bg, image }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r ${bg} p-10 rounded-2xl shadow-xl`}
    >
      {image && (
        <img
          src={image}
          alt="memory"
          className="w-64 h-64 object-cover rounded-2xl shadow-lg mb-6"
        />
      )}
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg max-w-2xl">{text}</p>
    </section>
  );
}
