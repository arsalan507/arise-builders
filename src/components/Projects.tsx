"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Arise Residence",
    subtitle: "Independent 2BHK Flats",
    location: "Hegdenagar, Bengaluru",
    area: "800 sq.ft",
    type: "G+3 Independent Flats",
    status: "Under Construction",
    image: "/arise-residence.jpg",
    description:
      "A modern G+3 independent flat complex with optimized 2BHK layouts on each floor — featuring open-plan living, dedicated parking, balconies, and a rooftop deck. Designed for maximum comfort and natural ventilation on a compact 800 sq.ft footprint.",
  },
  {
    id: 2,
    title: "Arise Heights",
    subtitle: "Independent 2BHK Flats",
    location: "Hegdenagar, Bengaluru",
    area: "800 sq.ft",
    type: "G+3 Independent Flats",
    status: "Upcoming",
    image: "/arise-heights.jpg",
    description:
      "A premium G+3 independent flat offering classic and contemporary elevation options — each 2BHK unit features spacious balconies, elegant interiors, and thoughtful layouts built for modern family living in one of Bengaluru\u2019s most connected neighborhoods.",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        }
      );

      projectRefs.current.forEach((ref, i) => {
        const image = ref.querySelector(".project-image");
        const content = ref.querySelector(".project-content");
        const tags = ref.querySelectorAll(".project-tag");

        const tl = gsap.timeline({
          scrollTrigger: { trigger: ref, start: "top 75%" },
        });

        tl.fromTo(
          image,
          {
            clipPath:
              i % 2 === 0
                ? "polygon(0 0, 0 0, 0 100%, 0 100%)"
                : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          },
          {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            duration: 1.5,
            ease: "power4.inOut",
          }
        );

        tl.fromTo(
          content,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.8"
        );

        tl.fromTo(
          tags,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out" },
          "-=0.4"
        );

        const imgEl = image?.querySelector("img");
        if (!imgEl) return;
        gsap.to(imgEl, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: ref,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden"
      style={{
        background: "#F0ECE4",
        paddingTop: "clamp(5rem, 8vw, 10rem)",
        paddingBottom: "clamp(5rem, 8vw, 10rem)",
      }}
    >
      <span
        className="absolute -right-8 top-20 font-bold select-none hidden lg:block"
        style={{ fontFamily: "'DM Serif Display', serif", fontSize: "200px", color: "#E5E0D6", userSelect: "none" }}
      >
        02
      </span>

      <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "clamp(2.5rem, 5vw, 7rem)", paddingRight: "clamp(2.5rem, 5vw, 7rem)" }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: "5rem", opacity: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
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
              Our Projects
            </span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem" }}>
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              }}
            >
              Featured
              <br />
              <span style={{ color: "#C8956C" }}>Developments</span>
            </h2>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#8F8776",
                maxWidth: "28rem",
                fontSize: "0.875rem",
                lineHeight: "1.7",
              }}
            >
              Each project is a unique story of vision, innovation, and
              meticulous execution. Explore our current developments shaping
              Bengaluru&apos;s residential landscape.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div>
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => { if (el) projectRefs.current[i] = el; }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
                gap: "clamp(2rem, 4vw, 4rem)",
                alignItems: "center",
                marginBottom: i < projects.length - 1 ? "clamp(4rem, 8vw, 8rem)" : "0",
                direction: i % 2 === 1 ? "rtl" : "ltr",
              }}
            >
              {/* Image */}
              <div
                className="project-image img-zoom"
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  direction: "ltr",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {/* Status badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    left: "1.5rem",
                    padding: "0.5rem 1rem",
                    background: "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "9999px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "#1A1A1A",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#C8956C",
                        display: "inline-block",
                      }}
                    />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="project-content" style={{ direction: "ltr", opacity: 0 }}>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#C8956C",
                    fontSize: "0.875rem",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.subtitle}
                </span>

                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                    marginBottom: "1rem",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: "#8F8776",
                    lineHeight: "1.7",
                    marginBottom: "2rem",
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                  {[
                    { label: "Location", value: project.location },
                    { label: "Area", value: project.area },
                    { label: "Type", value: project.type },
                  ].map((tag) => (
                    <div
                      key={tag.label}
                      className="project-tag"
                      style={{
                        padding: "0.75rem 1rem",
                        background: "#FAF8F5",
                        borderRadius: "0.5rem",
                        opacity: 0,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.625rem",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "#A89F93",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {tag.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.875rem",
                          color: "#1A1A1A",
                          fontWeight: 500,
                        }}
                      >
                        {tag.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="group hover-target"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "#1A1A1A",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#C8956C"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#1A1A1A"}
                >
                  <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>Learn More</span>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      border: "1px solid #D4CFC3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
