"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "Residential Construction",
    description:
      "From luxury villas to modern apartments, we bring your dream home to life with precision engineering and contemporary design sensibilities.",
    features: ["Custom Floor Plans", "Premium Materials", "Smart Home Ready"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Architecture & Design",
    description:
      "Our in-house architects create spaces that balance aesthetics with functionality, tailored to Bengaluru's climate and lifestyle.",
    features: ["3D Visualization", "Vastu Compliant", "Green Architecture"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Interior Solutions",
    description:
      "End-to-end interior design and execution that transforms spaces into refined, comfortable living environments.",
    features: ["Modular Kitchens", "Custom Furniture", "Lighting Design"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h18" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Project Management",
    description:
      "Transparent, on-schedule project execution with real-time updates. We keep you informed at every stage of construction.",
    features: ["Weekly Updates", "Budget Tracking", "Quality Audits"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { y: 60, opacity: 0 });
      gsap.to(headerRef.current, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
      });

      cardRefs.current.forEach((ref, i) => {
        gsap.set(ref, { y: 80, opacity: 0 });
        gsap.to(ref, {
          y: 0, opacity: 1, duration: 0.8, delay: (i % 2) * 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ref, start: "top 88%" },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden" style={{ paddingTop: "clamp(5rem, 8vw, 10rem)", paddingBottom: "clamp(5rem, 8vw, 10rem)" }}>
      <span
        className="absolute -left-8 top-20 text-[200px] font-bold select-none hidden lg:block"
        style={{ fontFamily: "'DM Serif Display', serif", color: "#EDE9E0" }}
      >
        03
      </span>

      <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "clamp(2.5rem, 5vw, 7rem)", paddingRight: "clamp(2.5rem, 5vw, 7rem)" }}>
        <div ref={headerRef} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px]" style={{ background: "#C8956C" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C8956C" }}>
              What We Do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Our <span style={{ color: "#C8956C" }}>Services</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: "1.5rem" }}>
          {services.map((service, i) => (
            <div
              key={service.num}
              ref={(el) => { if (el) cardRefs.current[i] = el; }}
              className="group relative hover-target"
              style={{
                padding: "clamp(2rem, 3vw, 3rem)",
                borderRadius: "1rem",
                background: "white",
                border: "1px solid #EDE9E0",
                boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
                transition: "border-color 0.4s, box-shadow 0.4s, transform 0.3s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,149,108,0.4)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(200,149,108,0.12)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#EDE9E0";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 20px rgba(0,0,0,0.04)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Big background number */}
              <span
                style={{
                  position: "absolute", top: "1.5rem", right: "2rem",
                  fontSize: "5rem", fontWeight: "bold", userSelect: "none",
                  fontFamily: "'DM Serif Display', serif", color: "#F0ECE4",
                }}
              >
                {service.num}
              </span>

              {/* Icon */}
              <div
                style={{
                  width: "3.5rem", height: "3.5rem", borderRadius: "0.75rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.5rem",
                  background: "#F0ECE4", color: "#C8956C",
                }}
              >
                {service.icon}
              </div>

              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                {service.title}
              </h3>

              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#8F8776", fontSize: "0.875rem", lineHeight: "1.7", marginBottom: "1.5rem" }}>
                {service.description}
              </p>

              {/* Divider */}
              <div style={{ width: "100%", height: "1px", background: "#EDE9E0", marginBottom: "1.25rem" }} />

              {/* Features */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {service.features.map((f) => (
                  <span
                    key={f}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem",
                      padding: "0.4rem 0.85rem", borderRadius: "9999px",
                      background: "#FAF8F5", color: "#6B6355", border: "1px solid #EDE9E0",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
