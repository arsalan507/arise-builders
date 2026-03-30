"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discovery & Site Visit",
    description:
      "We begin by understanding your vision, requirements, and budget. Our architects visit the site and create initial concept sketches tailored to the plot.",
    duration: "Week 1–2",
  },
  {
    num: "02",
    title: "Design & 3D Rendering",
    description:
      "Detailed architectural plans, 3D renderings, and material selections. We iterate until the design perfectly matches your expectations.",
    duration: "Week 3–6",
  },
  {
    num: "03",
    title: "Approvals & Permits",
    description:
      "We handle all BBMP/BDA government approvals, permits, and compliance requirements with complete transparency at every step.",
    duration: "Week 7–10",
  },
  {
    num: "04",
    title: "Construction",
    description:
      "Precision construction with regular quality audits, weekly progress reports, and on-site walkthroughs. Built to last for decades.",
    duration: "Month 4–18",
  },
  {
    num: "05",
    title: "Handover & Possession",
    description:
      "Final inspection, snagging, finishing touches, and a thorough walkthrough. Your dream home delivered on time with complete documentation.",
    duration: "Final Month",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { y: 60, opacity: 0 });
      gsap.to(headerRef.current, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
      });

      const stepItems = stepsRef.current?.querySelectorAll(".step-item");
      stepItems?.forEach((step) => {
        gsap.set(step, { y: 40, opacity: 0 });
        gsap.to(step, {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 88%" },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden"
      style={{ background: "#1A1A1A", color: "#FAF8F5", paddingTop: "clamp(5rem, 8vw, 10rem)", paddingBottom: "clamp(5rem, 8vw, 10rem)" }}
    >
      <span
        className="absolute -right-8 top-20 font-bold select-none hidden lg:block"
        style={{ fontFamily: "'DM Serif Display', serif", fontSize: "200px", color: "#2D2820", userSelect: "none" }}
      >
        04
      </span>

      <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "clamp(2.5rem, 5vw, 7rem)", paddingRight: "clamp(2.5rem, 5vw, 7rem)" }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: "5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "3rem", height: "1px", background: "#C8956C" }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C8956C" }}>
              How We Work
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem" }}>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
              Our <span style={{ color: "#C8956C" }}>Process</span>
            </h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", maxWidth: "28rem", fontSize: "0.875rem", lineHeight: "1.7", color: "#8F8776" }}>
              A transparent, collaborative approach that keeps you involved and informed — from the first sketch to the final key handover.
            </p>
          </div>
        </div>

        {/* Steps — each step is one row: duration | dot+line | content */}
        <div ref={stepsRef}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="step-item"
              style={{
                display: "grid",
                gridTemplateColumns: "140px 24px 1fr",
                gap: "0 2rem",
                paddingBottom: i < steps.length - 1 ? "3rem" : "0",
              }}
            >
              {/* Left: duration label — aligned to top of this row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                  paddingTop: "0.35rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#C8956C",
                    textAlign: "right",
                  }}
                >
                  {step.duration}
                </span>
              </div>

              {/* Center: dot + vertical line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "2px solid #C8956C",
                    background: "#1A1A1A",
                    flexShrink: 0,
                    marginTop: "0.35rem",
                    zIndex: 1,
                  }}
                />
                {i < steps.length - 1 && (
                  <div style={{ width: "1px", flex: 1, background: "#2D2820", marginTop: "-1px" }} />
                )}
              </div>

              {/* Right: step content */}
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <span
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                      color: "#C8956C",
                    }}
                  >
                    {step.num}
                  </span>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}>
                    {step.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: "1.7",
                    color: "#8F8776",
                    maxWidth: "32rem",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
