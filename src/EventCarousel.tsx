import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import advRegLunch from "./assets/events/adv-reg-lunch.jpg";
import careerPanel from "./assets/events/career-panel.jpg";
import ghostRoboInfoSession from "./assets/events/ghost-robo-info-session.jpg";
import kickoffSocial from "./assets/events/kickoff-social.jpg";
import munchAndMingle from "./assets/events/munch-and-mingle.jpg";
import pennMedPanel from "./assets/events/penn-med-panel.jpg";
import studySession from "./assets/events/study-session.jpg";

const eventImages = [
  { src: advRegLunch, alt: "Advanced Registration Lunch" },
  { src: careerPanel, alt: "Career Panel" },
  { src: ghostRoboInfoSession, alt: "Ghost Robotics Info Session" },
  { src: kickoffSocial, alt: "Kickoff Social" },
  { src: munchAndMingle, alt: "Munch and Mingle" },
  { src: pennMedPanel, alt: "Penn Med Panel" },
  { src: studySession, alt: "Study Session" },
];

const EventCarousel = () => {
  const slides = [...eventImages, ...eventImages, ...eventImages];
  const totalUnique = eventImages.length;

  const [current, setCurrent] = useState(totalUnique);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [stepPx, setStepPx] = useState(344); 
  const [cardWidthPx, setCardWidthPx] = useState(320);
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track || track.children.length < 2) return;
      const first = track.children[0] as HTMLElement;
      const second = track.children[1] as HTMLElement;
      const firstRect = first.getBoundingClientRect();
      const secondRect = second.getBoundingClientRect();
      const delta = Math.abs(secondRect.left - firstRect.left);
      if (delta > 0) setStepPx(delta);
      if (firstRect.width > 0) setCardWidthPx(firstRect.width);

      const gapPx = Math.max(delta - firstRect.width, 0);
      const widthPx = firstRect.width * visibleCount + gapPx * (visibleCount - 1);
      if (widthPx > 0) setViewportWidth(widthPx);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [visibleCount]);

  useEffect(() => {
    const computeVisible = () => {
      const w = window.innerWidth;
      if (w < 768) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    computeVisible();
    window.addEventListener("resize", computeVisible);
    return () => window.removeEventListener("resize", computeVisible);
  }, []);

  const logicalIndex = ((current % totalUnique) + totalUnique) % totalUnique;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShouldAnimate(true);
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShouldAnimate(true);
    setCurrent((prev) => prev - 1);
  };

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShouldAnimate(true);
    setCurrent(totalUnique + index);
  };

  const handleAnimationComplete = () => {
    //wraparound
    if (current >= totalUnique * 2) {
      setShouldAnimate(false);
      setCurrent((prev) => prev - totalUnique);
      requestAnimationFrame(() => setIsAnimating(false));
      return;
    }
    if (current < totalUnique) {
      setShouldAnimate(false);
      setCurrent((prev) => prev + totalUnique);
      requestAnimationFrame(() => setIsAnimating(false));
      return;
    }
    setIsAnimating(false);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div
        className="relative overflow-hidden mx-auto"
        style={{ width: viewportWidth ? `${viewportWidth}px` : undefined }}
      >
        <motion.div
          ref={trackRef}
          className="flex gap-6"
          animate={{ x: -(current * stepPx) }}
          transition={{ duration: shouldAnimate ? 0.5 : 0, ease: "easeInOut" }}
          onAnimationComplete={handleAnimationComplete}
          style={{ willChange: "transform" }}
        >
          {slides.map((image, i) => (
            <div key={`${image.alt}-${i}`} className="flex-shrink-0 w-80 h-80">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 cursor-pointer z-10"
          aria-label="Previous image"
        >
          <motion.svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ x: -2 }}
            transition={{ duration: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </motion.svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-700 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 cursor-pointer z-10"
          aria-label="Next image"
        >
          <motion.svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {eventImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === logicalIndex
                ? "bg-pensa-blue-70 scale-125"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>

      
    </div>
  );
};

export default EventCarousel;
