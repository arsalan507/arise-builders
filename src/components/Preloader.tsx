"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false),
    });

    // Counter animation
    const counter = { value: 0 };
    tl.to(counter, {
      value: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value).toString();
        }
      },
    });

    // Slide text up
    tl.to(
      textRef.current,
      {
        y: -40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
      },
      "-=0.3"
    );

    // Slide preloader up
    tl.to(preloaderRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <div ref={textRef} className="text-center">
        <p
          className="text-warm-400 text-sm tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Arise Builders
        </p>
        <span
          ref={counterRef}
          className="text-8xl md:text-9xl font-light text-white"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          0
        </span>
        <div className="w-48 h-[1px] bg-warm-700 mx-auto mt-8">
          <div
            className="h-full bg-accent"
            style={{
              animation: "loadBar 2.5s cubic-bezier(0.65, 0, 0.35, 1) forwards",
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes loadBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
