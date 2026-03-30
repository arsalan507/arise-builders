"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene3D from "./Scene3D";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.2 });

      const words = headingRef.current?.querySelectorAll(".word");
      if (words) {
        tl.fromTo(
          words,
          { y: 120, opacity: 0, rotateX: 40 },
          { y: 0, opacity: 1, rotateX: 0, stagger: 0.15, duration: 1.2, ease: "power4.out" }
        );
      }

      tl.fromTo(subRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5");
      tl.fromTo(tagRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4");
      tl.fromTo(imageRef.current, { scale: 1.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }, "-=1");
      tl.fromTo(scrollIndicatorRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.3");

      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(headingRef.current, {
        scale: 0.9,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "60% top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div ref={imageRef} style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(250,248,245,0.95) 0%, rgba(250,248,245,0.80) 50%, rgba(250,248,245,0.40) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #FAF8F5 0%, transparent 40%)" }} />
      </div>

      {/* 3D Scene */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          opacity: 0.4,
          pointerEvents: "none",
        }}
        className="hidden lg:block"
      >
        <Scene3D />
      </div>

      {/* Content */}
      <div
        className="relative"
        style={{
          zIndex: 10,
          paddingTop: "8rem",
          paddingBottom: "5rem",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "clamp(2.5rem, 5vw, 7rem)",
          paddingRight: "clamp(2.5rem, 5vw, 7rem)",
        }}
      >
        <div style={{ maxWidth: "48rem" }}>
          {/* Tag */}
          <div
            ref={tagRef}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              border: "1px solid #D4CFC3",
              marginBottom: "2rem",
              opacity: 0,
            }}
          >
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C8956C", display: "inline-block" }} />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6B6355",
              }}
            >
              Based in Bengaluru
            </span>
          </div>

          {/* Main Heading */}
          <h1
            ref={headingRef}
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              lineHeight: "0.95",
              marginBottom: "2rem",
              perspective: "1000px",
            }}
          >
            <span className="word" style={{ display: "inline-block", opacity: 0 }}>We </span>{" "}
            <span className="word" style={{ display: "inline-block", opacity: 0 }}>Build</span>
            <br />
            <span className="word" style={{ display: "inline-block", opacity: 0, color: "#C8956C" }}>Spaces</span>{" "}
            <span className="word" style={{ display: "inline-block", opacity: 0 }}>That</span>
            <br />
            <span className="word" style={{ display: "inline-block", opacity: 0 }}>Inspire</span>
          </h1>

          {/* Sub text */}
          <p
            ref={subRef}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#6B6355",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              maxWidth: "32rem",
              lineHeight: "1.7",
              opacity: 0,
            }}
          >
            Crafting exceptional residential experiences in Bengaluru. Where
            architectural vision meets precise craftsmanship.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2.5rem" }}>
            <a
              href="#projects"
              className="group hover-target"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 2rem",
                background: "#1A1A1A",
                color: "#FAF8F5",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "background 0.5s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#C8956C"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#1A1A1A"}
            >
              View Our Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
            <a
              href="#contact"
              className="hover-target"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 2rem",
                border: "1px solid #B0A89E",
                color: "#1A1A1A",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "border-color 0.5s, color 0.5s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#C8956C";
                (e.currentTarget as HTMLElement).style.color = "#C8956C";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#B0A89E";
                (e.currentTarget as HTMLElement).style.color = "#1A1A1A";
              }}
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.625rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#8F8776",
          }}
        >
          Scroll
        </span>
        <div style={{ width: "1px", height: "3rem", background: "#D4CFC3", position: "relative", overflow: "hidden" }}>
          <div className="animate-bounce" style={{ width: "100%", height: "1rem", background: "#C8956C", position: "absolute" }} />
        </div>
      </div>

      {/* Side Text */}
      <div
        className="hidden xl:block"
        style={{
          position: "absolute",
          right: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          writingMode: "vertical-rl",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <span style={{ fontSize: "0.625rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#A89F93" }}>
          Est. 2026 &mdash; Bengaluru, Karnataka
        </span>
      </div>
    </section>
  );
}
