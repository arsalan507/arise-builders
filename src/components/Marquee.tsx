"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite scroll animation
      gsap.to(track1Ref.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      gsap.to(track2Ref.current, {
        xPercent: 50,
        ease: "none",
        duration: 25,
        repeat: -1,
      });

      // Speed up on scroll
      gsap.to(track1Ref.current, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const words = [
    "Residential",
    "Commercial",
    "Architecture",
    "Interior Design",
    "Renovation",
    "Villas",
    "Apartments",
    "Sustainable",
  ];

  return (
    <div
      ref={marqueeRef}
      className="overflow-hidden border-y border-warm-200" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
    >
      {/* Track 1 */}
      <div className="flex whitespace-nowrap mb-4" ref={track1Ref}>
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className="text-5xl md:text-7xl lg:text-8xl mx-6 text-warm-200 hover:text-accent transition-colors duration-300"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {word}
            <span className="text-accent mx-6">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
