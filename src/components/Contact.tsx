"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current, { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
      });

      gsap.fromTo(formRef.current, { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 85%" },
      });

      gsap.fromTo(infoRef.current, { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out",
        scrollTrigger: { trigger: infoRef.current, start: "top 85%" },
      });
    });

    return () => ctx.revert();
  }, []);

  const inputStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    width: "100%",
    background: "transparent",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "1px solid #D4CFC3",
    padding: "0.75rem 0",
    color: "#1A1A1A",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.3s",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "0.75rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#8F8776",
    marginBottom: "0.5rem",
    display: "block",
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden"
      style={{ paddingTop: "clamp(5rem, 8vw, 10rem)", paddingBottom: "clamp(5rem, 8vw, 10rem)" }}
    >
      <span
        className="absolute -left-8 top-20 font-bold select-none hidden lg:block"
        style={{ fontFamily: "'DM Serif Display', serif", fontSize: "200px", color: "#EDE9E0", userSelect: "none" }}
      >
        05
      </span>

      <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "clamp(2.5rem, 5vw, 7rem)", paddingRight: "clamp(2.5rem, 5vw, 7rem)" }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: "4rem", opacity: 0 }}>
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
              Get In Touch
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              marginBottom: "1rem",
            }}
          >
            Let&apos;s Build
            <br />
            <span style={{ color: "#C8956C" }}>Together</span>
          </h2>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#8F8776",
              maxWidth: "32rem",
              fontSize: "1.0625rem",
            }}
          >
            Ready to start your dream project? Reach out and let&apos;s discuss
            how we can bring your vision to life.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "clamp(3rem, 6vw, 6rem)",
          }}
        >
          {/* Form */}
          <form
            ref={formRef}
            style={{ opacity: 0 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input type="text" placeholder="Your name" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Phone</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" style={inputStyle} />
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={labelStyle}>Email</label>
              <input type="email" placeholder="your@email.com" style={inputStyle} />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={labelStyle}>Project Type</label>
              <select
                style={{ ...inputStyle, appearance: "none" as const }}
                defaultValue=""
              >
                <option value="" disabled>Select project type</option>
                <option value="villa">Individual Villa</option>
                <option value="apartment">Apartment Complex</option>
                <option value="renovation">Renovation</option>
                <option value="commercial">Commercial Space</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={labelStyle}>Tell Us About Your Project</label>
              <textarea
                rows={4}
                placeholder="Describe your dream project..."
                style={{ ...inputStyle, resize: "none" }}
              />
            </div>

            <button
              type="submit"
              className="group hover-target"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 2.5rem",
                background: "#1A1A1A",
                color: "#FAF8F5",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                border: "none",
                cursor: "pointer",
                transition: "background 0.5s",
                marginTop: "1rem",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#C8956C"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#1A1A1A"}
            >
              Send Message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>

          {/* Info */}
          <div ref={infoRef} style={{ opacity: 0 }}>
            <div style={{ marginBottom: "2.5rem" }}>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8F8776", marginBottom: "1rem" }}>
                Visit Our Office
              </h4>
              <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.125rem", color: "#1A1A1A" }}>
                Bengaluru, Karnataka
              </p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", marginTop: "0.25rem", color: "#8F8776" }}>
                India
              </p>
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8F8776", marginBottom: "1rem" }}>
                Working Hours
              </h4>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1A1A1A" }}>
                Monday &ndash; Saturday
              </p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", color: "#8F8776" }}>
                9:00 AM &ndash; 7:00 PM IST
              </p>
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8F8776", marginBottom: "1rem" }}>
                Follow Us
              </h4>
              <div style={{ display: "flex", gap: "1rem" }}>
                {["Instagram", "LinkedIn", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="hover-target"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.875rem",
                      color: "#1A1A1A",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#C8956C"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#1A1A1A"}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div
              style={{
                aspectRatio: "1/1",
                borderRadius: "1rem",
                overflow: "hidden",
                position: "relative",
                background: "#EDE9E0",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url('https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.8,
                }}
              />
              <div style={{ position: "absolute", inset: 0, background: "rgba(26,26,26,0.2)" }} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "center", color: "white" }}>
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      background: "#C8956C",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 0.75rem",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.875rem", fontWeight: 500 }}>
                    Bengaluru, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
