import { useEffect, useState } from "react";

export default function StoryViewer({ stories }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showStory, setShowStory] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStory(false); // fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % stories.length);
        setShowStory(true); // fade in next
      }, 1000);
    }, 5000); // 5s per story
    return () => clearTimeout(timer);
  }, [currentIndex, stories.length]);

  const storyObj = stories[currentIndex];
  if (!storyObj) return null;

  const { type, src, story, bgColor, textColor } = storyObj;

  return (
    <div
      className="flex items-center justify-center h-screen w-screen transition-colors duration-700"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={`relative max-w-lg w-full p-6 rounded-2xl shadow-lg transition-all duration-1000 ${
          showStory ? "opacity-100 scale-100" : "opacity-0 scale-50 rotate-[360deg]"
        }`}
      >
        {type === "image" ? (
          <img
            src={src}
            alt="story"
            className="w-full h-80 object-cover rounded-xl"
          />
        ) : (
          <video
            src={src}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-80 object-cover rounded-xl"
          />
        )}

        <p
          className="mt-4 text-center text-xl font-bold transition-opacity duration-700"
          style={{ color: textColor }}
        >
          {story || ""}
        </p>
      </div>
    </div>
  );
}