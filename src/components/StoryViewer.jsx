
// import { useEffect, useState, useRef } from "react";

// export default function StoryViewer({ stories }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showStory, setShowStory] = useState(true);
//   const timerRef = useRef(null);

//   // Auto play logic
//   useEffect(() => {
//     if (timerRef.current) clearTimeout(timerRef.current);

//     timerRef.current = setTimeout(() => {
//       handleNext();
//     }, 5000); // 5s per story

//     return () => {
//       if (timerRef.current) clearTimeout(timerRef.current);
//     };
//   }, [currentIndex, stories.length]);

//   const handleNext = () => {
//     setShowStory(false);
//     setTimeout(() => {
//       setCurrentIndex((prev) => (prev + 1) % stories.length);
//       setShowStory(true);
//     }, 600); // transition delay
//   };

//   const handlePrev = () => {
//     setShowStory(false);
//     setTimeout(() => {
//       setCurrentIndex((prev) =>
//         prev === 0 ? stories.length - 1 : prev - 1
//       );
//       setShowStory(true);
//     }, 600);
//   };

//   const storyObj = stories[currentIndex];
//   if (!storyObj) return null;

//   const { type, src, story, bgGradient, textColor } = storyObj;

//   return (
//     <div
//       className="flex items-center justify-center h-screen w-screen transition-colors duration-700 relative"
//       style={{ backgroundColor: bgGradient }}
//     >
      

//       {/* Story Content */}
//       <div
//         className={`relative max-w-lg w-full p-6 rounded-2xl shadow-lg transition-all duration-700 ${
//           showStory
//             ? "opacity-100 scale-100"
//             : "opacity-0 scale-50 rotate-[360deg]"
//         }`}
//       >
//         {type === "image" ? (
//           <img
//             src={src}
//             alt="story"
//             className="w-full h-80 object-cover rounded-xl"
//           />
//         ) : (
//           <video
//             src={src}
//             autoPlay
//             muted
//             playsInline
//             loop
//             className="w-full h-80 object-cover rounded-xl"
//           />
//         )}

//         <p
//           className="mt-4 text-center text-xl font-bold transition-opacity duration-700"
//           style={{ color: textColor }}
//         >
//           {story || ""}
//         </p>
//       </div>

//      <div>
//         {/* Back Button */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
//           >
//           ⬅
//         </button>

//           {/* Next Button */}
//         <button
//           onClick={handleNext}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
//           >
//           ➡
//         </button>
//      </div>
//     </div>
//   );
// }




import { useEffect, useState, useRef } from "react";

export default function StoryViewer({ stories }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showStory, setShowStory] = useState(true);
  const timerRef = useRef(null);

  // Auto play logic
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      handleNext();
    }, 5000); // 5s per story

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, stories.length]);

  const handleNext = () => {
    setShowStory(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
      setShowStory(true);
    }, 600); // transition delay
  };

  const handlePrev = () => {
    setShowStory(false);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? stories.length - 1 : prev - 1
      );
      setShowStory(true);
    }, 600);
  };

  const storyObj = stories[currentIndex];
  if (!storyObj) return null;

  const { type, src, story, bgGradient, textColor } = storyObj;

  return (
    <div
      className=" flex flex-col items-center justify-center h-screen w-screen transition-colors duration-700 relative"
      style={{ backgroundImage: bgGradient }}
    >
      {/* Story Content */}
      <div
        className={`z-40 relative max-w-lg w-full p-6 rounded-2xl shadow-lg transition-all duration-700 ${
          showStory
            ? "opacity-100 scale-100"
            : "opacity-0 scale-50 rotate-[360deg]"
        }`}
      >
        {type === "image" ? (
          <img
            src={src}
            alt="story"
            className=" w-full h-80 object-cover rounded-xl"
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

      {/* Footer Navigation */}
      <div className="absolute bottom-20 flex items-center gap-6">
        <button
          onClick={handlePrev}
          className="bg-black/40 text-white px-4 py-2 rounded-full hover:bg-black/70 transition"
        >
          ⬅ Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-black/40 text-white px-4 py-2 rounded-full hover:bg-black/70 transition"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}