"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    title: "Bengaluru Expertise",
    description:
      "Deep understanding of local regulations, soil conditions, climate patterns, and architectural preferences unique to Bengaluru.",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80",
  },
  {
    title: "Premium Materials",
    description:
      "We source only the finest materials — from TMT steel to AAC blocks — ensuring structural integrity that lasts decades.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    title: "Zero Cost Overruns",
    description:
      "Transparent fixed-price contracts with no hidden charges. What we quote is what you pay — guaranteed.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((ref) => {
        gsap.fromTo(
          ref,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: ref, start: "top 85%" },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        paddingTop: "clamp(5rem, 8vw, 10rem)",
        paddingBottom: "clamp(5rem, 8vw, 10rem)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "clamp(2.5rem, 5vw, 7rem)",
          paddingRight: "clamp(2.5rem, 5vw, 7rem)",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
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
              Why Us
            </span>
            <div style={{ width: "3rem", height: "1px", background: "#C8956C" }} />
          </div>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            }}
          >
            Why <span style={{ color: "#C8956C" }}>Arise</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "2.5rem",
          }}
        >
          {reasons.map((reason, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
            >
              {/* Image */}
              <div
                style={{
                  aspectRatio: "3/2",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                }}
                className="img-zoom"
              >
                <Image
                  src={reason.image}
                  alt={reason.title}
                  width={600}
                  height={400}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.5rem",
                  marginBottom: "0.75rem",
                  color: "#C8956C",
                }}
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#8F8776",
                  fontSize: "0.875rem",
                  lineHeight: "1.7",
                }}
              >
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
