"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 95%" },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        background: "#1A1A1A",
        color: "#FAF8F5",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        opacity: 0,
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "clamp(2.5rem, 5vw, 7rem)", paddingRight: "clamp(2.5rem, 5vw, 7rem)" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  background: "#C8956C",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontFamily: "'DM Serif Display', serif", color: "white", fontSize: "1.125rem", fontWeight: "bold" }}>
                  A
                </span>
              </div>
              <div>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.125rem", fontWeight: 500, letterSpacing: "0.05em" }}>
                  Arise
                </span>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.625rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.25em",
                    color: "#8F8776",
                    display: "block",
                    marginTop: "-2px",
                  }}
                >
                  Builders
                </span>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#8F8776",
                maxWidth: "24rem",
                fontSize: "0.875rem",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
              }}
            >
              Crafting exceptional residential spaces in Bengaluru. Where
              architectural vision meets precise craftsmanship &mdash; building
              homes that families cherish for generations.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "#",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1A1A1A"/>
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="hover-target"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    border: "1px solid #3D3830",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8F8776",
                    textDecoration: "none",
                    transition: "border-color 0.3s, color 0.3s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#C8956C";
                    (e.currentTarget as HTMLElement).style.color = "#C8956C";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#3D3830";
                    (e.currentTarget as HTMLElement).style.color = "#8F8776";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#8F8776",
                marginBottom: "1.5rem",
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Home", "About", "Projects", "Services", "Process", "Contact"].map((link) => (
                <li key={link} style={{ marginBottom: "0.75rem" }}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover-target"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#A89F93",
                      fontSize: "0.875rem",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#C8956C"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#A89F93"}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#8F8776",
                marginBottom: "1.5rem",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Residential Construction", "Architecture & Design", "Interior Solutions", "Project Management"].map((s) => (
                <li key={s} style={{ marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#A89F93",
                      fontSize: "0.875rem",
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #2D2820",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#6B6355", fontSize: "0.75rem" }}>
            &copy; {new Date().getFullYear()} Arise Builders. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#4A453F", fontSize: "0.75rem" }}>
            Designed &amp; Built with precision in Bengaluru
          </p>
        </div>
      </div>
    </footer>
  );
}
