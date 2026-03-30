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

            {/* Phone & WhatsApp */}
            <div style={{ marginBottom: "2.5rem" }}>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8F8776", marginBottom: "1rem" }}>
                Call or WhatsApp
              </h4>
              <a
                href="tel:+916361296119"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "1.125rem",
                  color: "#1A1A1A",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                +91 63612 96119
              </a>
              <a
                href="https://wa.me/916361296119"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-target"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.6rem 1.25rem",
                  background: "#25D366",
                  color: "white",
                  borderRadius: "9999px",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "background 0.3s, transform 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#1DA851";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "#25D366";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
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
