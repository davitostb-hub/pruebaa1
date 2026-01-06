import React, { useEffect, useRef, useState } from "react";
import { RevealProps } from "../types";

export const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} style={{ width, position: "relative", overflow: "hidden" }}>
      <div
        className={`transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
        style={{ transitionDelay: `${delay}s` }}
      >
        {children}
      </div>
    </div>
  );
};