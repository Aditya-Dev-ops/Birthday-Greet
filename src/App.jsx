// // src/App.jsx

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { birthdayData } from "./data/birthdayData";
// import FireCrackers from "./components/FireCrackers";
// import CircleSlider from "./components/CircleSlider";
// import StoryViewer from "./components/StoryViewer"; // <-- to build next

// export default function App() {
//   const headingRef = useRef(null);
//   const [showStories, setShowStories] = useState(false);

//   useEffect(() => {
//     gsap.fromTo(
//       headingRef.current,
//       { scale: 0, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 2, ease: "bounce.out" }
//     );
//   }, []);

//   return (
//     <div className="bg-gradient-to-b from-pink-100 to-yellow-100 min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
//       <FireCrackers />

//       {/* Heading */}
//       <h1
//         ref={headingRef}
//         className="text-3xl font-bold text-pink-700 drop-shadow-lg z-10 mb-10 absolute top-10"
//       >
//         {birthdayData.heading}
//       </h1>

//       {/* Show Circle first, then Stories */}
//       {!showStories ? (
//         <CircleSlider
//           media={birthdayData.imagesAnimation}
//           onAnimationEnd={() => setShowStories(true)}
//         />
//       ) : (
//         <StoryViewer stories={birthdayData.imagesStory} />
//       )}
//     </div>
//   );
// }


// src/App.jsx

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { birthdayData } from "./data/birthdayData";
// import FireCrackers from "./components/FireCrackers";
// import CircleSlider from "./components/CircleSlider";
// import StoryViewer from "./components/StoryViewer";

// export default function App() {
//   const headingRef = useRef(null);
//   const [showCircle, setShowCircle] = useState(false);
//   const [showStories, setShowStories] = useState(false);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: () => setShowCircle(true), // after heading animation is done, show circle
//     });

//     tl.fromTo(
//       headingRef.current,
//       { scale: 0, opacity: 0 },
//       { scale: 1, opacity: 1, duration: 2, ease: "bounce.out" }
//     )
//       .to(headingRef.current, {
//         scale: 2,
//         opacity: 0,
//         duration: 1.5,
//         ease: "power2.inOut",
//         delay: 0.5,
//       });
//   }, []);

//   return (
//     <div className="bg-gradient-to-b from-pink-100 to-yellow-100 min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
//       <FireCrackers />

//       {/* Heading */}
//       <h1
//         ref={headingRef}
//         className="text-3xl font-bold text-pink-700 drop-shadow-lg z-10 mb-10 items-center justify-center"
//       >
//         {birthdayData.heading}
//       </h1>

//       {/* CircleSlider starts AFTER heading animation, then Stories */}
//       {showCircle &&
//         (!showStories ? (
//           <CircleSlider
//             media={birthdayData.imagesAnimation}
//             onAnimationEnd={() => setShowStories(true)}
//           />
//         ) : (
//           <StoryViewer stories={birthdayData.imagesStory} />
//         ))}
//     </div>
//   );
// }




// src/App.jsx

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { birthdayData } from "./data/birthdayData";
import FireCrackers from "./components/FireCrackers";
import CircleSlider from "./components/CircleSlider";
import StoryViewer from "./components/StoryViewer";

export default function App() {
  const headingRef = useRef(null);
  const [showHeading, setShowHeading] = useState(true); // control heading visibility
  const [showStories, setShowStories] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setShowHeading(false), // hide heading after animation
    });

    tl.fromTo(
      headingRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "bounce.out" }
    )
      .to(headingRef.current, {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        delay: 1, // keep it visible for 1s before fading
        ease: "power2.inOut",
      });
  }, []);

  return (
    <div className="bg-gradient-to-b from-pink-100 to-yellow-100 min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      <FireCrackers />

      {/* Heading (only visible at first) */}
      {showHeading && (
        <h1
          ref={headingRef}
          className="text-3xl font-bold text-pink-700 drop-shadow-lg z-10 mb-10 absolute top-10"
        >
          {birthdayData.heading}
        </h1>
      )}

      {/* Show Circle first, then Stories */}
      {!showStories ? (
        <CircleSlider
          media={birthdayData.imagesAnimation}
          onAnimationEnd={() => setShowStories(true)}
        />
      ) : (
        <StoryViewer stories={birthdayData.imagesStory} />
      )}
    </div>
  );
}