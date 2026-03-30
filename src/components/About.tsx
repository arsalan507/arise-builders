"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );

      textRefs.current.forEach((ref) => {
        gsap.fromTo(
          ref,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: ref, start: "top 85%" },
          }
        );
      });

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          transformOrigin: "left",
          scrollTrigger: { trigger: lineRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 1.5,
          ease: "power4.inOut",
          scrollTrigger: { trigger: imageRef.current, start: "top 80%" },
        }
      );

      const statItems = statsRef.current?.querySelectorAll(".stat-item");
      if (statItems) {
        gsap.fromTo(
          statItems,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden"
      style={{ paddingTop: "clamp(5rem, 8vw, 10rem)", paddingBottom: "clamp(5rem, 8vw, 10rem)" }}
    >
      <span
        className="absolute -left-8 top-20 font-bold select-none hidden lg:block"
        style={{ fontFamily: "'DM Serif Display', serif", fontSize: "200px", color: "#EDE9E0", userSelect: "none" }}
      >
        01
      </span>

      <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "clamp(2.5rem, 5vw, 7rem)", paddingRight: "clamp(2.5rem, 5vw, 7rem)" }}>
        {/* Section Label */}
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
            About Us
          </span>
        </div>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: "clamp(3rem, 5vw, 6rem)",
            alignItems: "start",
          }}
        >
          {/* Left: Text Content */}
          <div>
            <h2
              ref={headingRef}
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
                lineHeight: "1.1",
                marginBottom: "2rem",
                opacity: 0,
              }}
            >
              Building
              <br />
              <span style={{ color: "#C8956C" }}>Bengaluru&apos;s</span>
              <br />
              Future Homes
            </h2>

            <div
              ref={lineRef}
              style={{
                width: "100%",
                height: "1px",
                background: "#D4CFC3",
                marginBottom: "2rem",
                transform: "scaleX(0)",
              }}
            />

            <p
              ref={(el) => { if (el) textRefs.current[0] = el; }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#6B6355",
                fontSize: "1.0625rem",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
                opacity: 0,
              }}
            >
              Arise Builders was founded with a singular vision &mdash; to
              create residential spaces that seamlessly blend modern
              architecture with the warmth and character of Bengaluru&apos;s
              vibrant culture.
            </p>

            <p
              ref={(el) => { if (el) textRefs.current[1] = el; }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#8F8776",
                lineHeight: "1.7",
                marginBottom: "2.5rem",
                opacity: 0,
              }}
            >
              Every home we build is a testament to our commitment to quality
              craftsmanship, sustainable practices, and designs that stand the
              test of time. We don&apos;t just construct buildings &mdash; we
              craft living experiences that families cherish for generations.
            </p>

            {/* Values */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
            >
              {[
                { icon: "01", text: "Quality First" },
                { icon: "02", text: "Sustainable Design" },
                { icon: "03", text: "On-Time Delivery" },
                { icon: "04", text: "Transparent Pricing" },
              ].map((val) => (
                <div key={val.icon} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#C8956C",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      marginTop: "2px",
                    }}
                  >
                    {val.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#1A1A1A",
                      fontSize: "0.875rem",
                    }}
                  >
                    {val.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + Stats */}
          <div>
            <div
              ref={imageRef}
              className="img-zoom"
              style={{
                position: "relative",
                aspectRatio: "4/5",
                borderRadius: "0.5rem",
                overflow: "hidden",
                marginBottom: "2.5rem",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction site"
                fill
                style={{ objectFit: "cover" }}
              />
              {/* Floating card */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "0.5rem",
                  padding: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.875rem",
                    color: "#8F8776",
                    marginBottom: "0.25rem",
                  }}
                >
                  Our Promise
                </p>
                <p
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "1.0625rem",
                    color: "#1A1A1A",
                  }}
                >
                  &ldquo;Every brick laid with purpose, every space designed with heart.&rdquo;
                </p>
              </div>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "1.5rem",
                textAlign: "center",
              }}
            >
              {[
                { number: "2+", label: "Active Projects" },
                { number: "10+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="stat-item" style={{ opacity: 0 }}>
                  <p
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      color: "#1A1A1A",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {stat.number}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.6875rem",
                      color: "#8F8776",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Team Section ── */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "clamp(2.5rem, 5vw, 7rem)",
          paddingRight: "clamp(2.5rem, 5vw, 7rem)",
          paddingTop: "clamp(4rem, 6vw, 7rem)",
          paddingBottom: "clamp(4rem, 6vw, 7rem)",
          borderTop: "1px solid #EDE9E0",
          marginTop: "clamp(4rem, 6vw, 7rem)",
        }}
      >
        {/* Team header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
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
              The People Behind Arise
            </span>
          </div>
          <h3
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "#1A1A1A",
            }}
          >
            Meet Our <span style={{ color: "#C8956C" }}>Leadership</span>
          </h3>
        </div>

        {/* Team grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "2rem",
          }}
        >
          {/* Card 1 — Founder & CEO (brother, with photo) */}
          <div
            style={{
              background: "white",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid #EDE9E0",
              transition: "box-shadow 0.3s, transform 0.3s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(200,149,108,0.12)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {/* Photo */}
            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "#1A1A1A" }}>
              <Image
                src="/founder.jpg"
                alt="Azhan Ahmed — Founder & CEO"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
              {/* Gradient overlay at bottom */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(26,26,26,0.6), transparent)" }} />
              {/* Designation badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  left: "1.25rem",
                  padding: "0.35rem 0.85rem",
                  background: "#C8956C",
                  borderRadius: "9999px",
                }}
              >
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "white" }}>
                  Founder &amp; CEO
                </span>
              </div>
            </div>
            {/* Text */}
            <div style={{ padding: "1.5rem" }}>
              <h4 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.375rem", color: "#1A1A1A", marginBottom: "0.5rem" }}>
                Azhan Ahmed
              </h4>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8125rem", color: "#8F8776", lineHeight: "1.75" }}>
                With an unwavering belief that every family deserves a home built with purpose, he founded Arise Builders to bring precision engineering and genuine care together under one roof. His vision is simple — build fewer homes, but build them right.
              </p>
            </div>
          </div>

          {/* Card 2 — Co-Founder & Chairman (father, placeholder) */}
          <div
            style={{
              background: "white",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid #EDE9E0",
              transition: "box-shadow 0.3s, transform 0.3s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(200,149,108,0.12)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {/* Photo */}
            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "#1A1A1A" }}>
              <Image
                src="/chairman.jpg"
                alt="Amjad Ahmed — Co-Founder & Chairman"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(26,26,26,0.6), transparent)" }} />
              {/* Designation badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  left: "1.25rem",
                  padding: "0.35rem 0.85rem",
                  background: "#C8956C",
                  borderRadius: "9999px",
                }}
              >
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "white" }}>
                  Co-Founder &amp; Chairman
                </span>
              </div>
            </div>
            {/* Text */}
            <div style={{ padding: "1.5rem" }}>
              <h4 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.375rem", color: "#1A1A1A", marginBottom: "0.5rem" }}>
                Amjad Ahmed
              </h4>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8125rem", color: "#8F8776", lineHeight: "1.75" }}>
                The bedrock of Arise Builders. Decades of experience in construction and deep roots in Bengaluru's real estate landscape make him the guiding force behind every major decision the company takes.
              </p>
            </div>
          </div>

          {/* Card 3 — Director, Projects (friend, placeholder) */}
          <div
            style={{
              background: "white",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid #EDE9E0",
              transition: "box-shadow 0.3s, transform 0.3s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(200,149,108,0.12)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {/* Photo */}
            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "#1A1A1A" }}>
              <Image
                src="/yaseen.jpg"
                alt="Mohammed Yaseen — Director, Projects"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(26,26,26,0.6), transparent)" }} />
              {/* Designation badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  left: "1.25rem",
                  padding: "0.35rem 0.85rem",
                  background: "#C8956C",
                  borderRadius: "9999px",
                }}
              >
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "white" }}>
                  Director &mdash; Projects
                </span>
              </div>
            </div>
            {/* Text */}
            <div style={{ padding: "1.5rem" }}>
              <h4 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.375rem", color: "#1A1A1A", marginBottom: "0.5rem" }}>
                Mohammed Yaseen
              </h4>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.8125rem", color: "#8F8776", lineHeight: "1.75" }}>
                The man who turns blueprints into reality. With sharp attention to site execution, material quality, and on-ground timelines, he ensures every project at Arise is delivered exactly as promised — no compromises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
