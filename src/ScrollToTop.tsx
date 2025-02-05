import React, { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="z-50 fixed bottom-12 right-12">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-4 bg-zinc-300 text-slate-800 rounded-full shadow-lg hover:shadow-sm transition-colors"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
