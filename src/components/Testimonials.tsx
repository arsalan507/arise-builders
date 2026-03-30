"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner · Whitefield",
    text: "Arise Builders exceeded every expectation. From the initial design consultation to the final walkthrough, the attention to detail was remarkable. Our villa feels like it was crafted just for us.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Property Investor · Bengaluru",
    text: "What impressed me most was the transparency. Weekly updates, honest timelines, and zero hidden costs. In an industry where trust is rare, Arise Builders stands apart.",
    rating: 5,
  },
  {
    name: "Anil & Meera Reddy",
    role: "Homeowners · Sarjapur",
    text: "We were first-time home builders and were nervous about the whole process. The team at Arise made it effortless — they handled everything from approvals to interiors with absolute professionalism.",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { y: 60, opacity: 0 });
      gsap.to(contentRef.current, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: contentRef.current, start: "top 85%" },
      });
    });

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        paddingTop: "clamp(5rem, 8vw, 10rem)",
        paddingBottom: "clamp(5rem, 8vw, 10rem)",
        background: "#F0ECE4",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "clamp(2.5rem, 5vw, 7rem)", paddingRight: "clamp(2.5rem, 5vw, 7rem)" }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "4rem" }}>
          <div style={{ width: "3rem", height: "1px", background: "#C8956C" }} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C8956C",
            }}
          >
            Client Stories
          </span>
          <div style={{ width: "3rem", height: "1px", background: "#C8956C" }} />
        </div>

        <div ref={contentRef} style={{ maxWidth: "56rem", margin: "0 auto", textAlign: "center" }}>
          {/* Stars */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem", marginBottom: "2rem" }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#C8956C">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <div style={{ position: "relative", minHeight: "200px" }}>
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.8s ease, transform 0.8s ease",
                  pointerEvents: i === active ? "auto" : "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "clamp(1.25rem, 3vw, 2.25rem)",
                    lineHeight: "1.35",
                    color: "#1A1A1A",
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>
            ))}
          </div>

          {/* Author */}
          <div style={{ position: "relative", marginTop: "2.5rem", minHeight: "3rem" }}>
            {testimonials.map((t, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  opacity: i === active ? 1 : 0,
                  transition: "opacity 0.6s ease",
                  pointerEvents: i === active ? "auto" : "none",
                }}
              >
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, color: "#1A1A1A" }}>
                  {t.name}
                </p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", marginTop: "0.25rem", color: "#8F8776" }}>
                  {t.role}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginTop: "5rem" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="hover-target"
                style={{
                  width: i === active ? "2rem" : "0.5rem",
                  height: "0.5rem",
                  borderRadius: "9999px",
                  background: i === active ? "#C8956C" : "#D4CFC3",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
