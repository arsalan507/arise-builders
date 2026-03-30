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
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { y: 60, opacity: 0 });
      gsap.to(headerRef.current, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
      });

      // Animated timeline line
      gsap.set(lineRef.current, { scaleY: 0 });
      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: "none",
        transformOrigin: "top",
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 1,
        },
      });

      const stepItems = stepsRef.current?.querySelectorAll(".step-item");
      stepItems?.forEach((step, i) => {
        gsap.set(step, { x: 60, opacity: 0 });
        gsap.to(step, {
          x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 85%" },
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
        className="absolute -right-8 top-20 text-[200px] font-bold select-none hidden lg:block"
        style={{ fontFamily: "'DM Serif Display', serif", color: "#2D2820" }}
      >
        04
      </span>

      <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "clamp(2.5rem, 5vw, 7rem)", paddingRight: "clamp(2.5rem, 5vw, 7rem)" }}>
        {/* Header */}
        <div ref={headerRef} className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px]" style={{ background: "#C8956C" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C8956C" }}>
              How We Work
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Our <span style={{ color: "#C8956C" }}>Process</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#8F8776" }}>
              A transparent, collaborative approach that keeps you involved and informed — from the first sketch to the final key handover.
            </p>
          </div>
        </div>

        {/* Steps — clean left-aligned with right content */}
        <div ref={stepsRef} className="grid md:grid-cols-[1fr_2px_1.8fr] gap-0 md:gap-8">
          {/* Left: duration labels */}
          <div className="hidden md:flex flex-col">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex items-start justify-end pr-8"
                style={{ paddingTop: i === 0 ? "4px" : "0", marginBottom: i < steps.length - 1 ? "3rem" : "0" }}
              >
                <div className="text-right">
                  <span
                    className="text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C8956C" }}
                  >
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Center: vertical line with dots */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 w-[1px] mx-auto" style={{ background: "#2D2820" }}>
              <div
                ref={lineRef}
                className="w-full h-full"
                style={{ background: "#C8956C" }}
              />
            </div>
            {steps.map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 z-10"
                style={{
                  top: i === 0 ? "4px" : `calc(${i} / ${steps.length - 1} * 100%)`,
                  borderColor: "#C8956C",
                  background: "#1A1A1A",
                }}
              />
            ))}
          </div>

          {/* Right: step content */}
          <div>
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="step-item flex gap-6 md:pl-8"
                style={{ marginBottom: i < steps.length - 1 ? "3rem" : "0" }}
              >
                {/* Mobile: dot + duration */}
                <div className="md:hidden flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: "#C8956C", background: "#1A1A1A" }} />
                  <div className="w-[1px] flex-1" style={{ background: "#2D2820" }} />
                </div>

                <div className="flex-1 pb-2">
                  {/* Mobile duration */}
                  <span
                    className="md:hidden text-xs tracking-[0.2em] uppercase mb-2 block"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C8956C" }}
                  >
                    {step.duration}
                  </span>

                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className="text-2xl md:text-3xl"
                      style={{ fontFamily: "'DM Serif Display', serif", color: "#C8956C" }}
                    >
                      {step.num}
                    </span>
                    <h3 className="text-xl md:text-2xl" style={{ fontFamily: "'DM Serif Display', serif" }}>
                      {step.title}
                    </h3>
                  </div>

                  <p
                    className="text-sm leading-relaxed max-w-md"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#8F8776" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
