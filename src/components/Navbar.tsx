"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    // Animate nav in after preloader
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3.5, ease: "power3.out" }
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      tl.current = gsap.timeline();
      tl.current
        .to(menuRef.current, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.8,
          ease: "power4.inOut",
        })
        .fromTo(
          ".menu-item",
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        );
    } else {
      document.body.style.overflow = "";
      gsap.to(menuRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 opacity-0 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        style={{ padding: scrolled ? "12px 0" : "24px 0" }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "clamp(2.5rem, 5vw, 7rem)", paddingRight: "clamp(2.5rem, 5vw, 7rem)" }} className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 hover-target"
          >
            <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
              <span
                className="text-white text-lg font-bold"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                A
              </span>
            </div>
            <div>
              <span
                className="text-lg font-medium tracking-wide text-dark"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Arise
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-warm-500 block -mt-1">
                Builders
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center" style={{ gap: "2.5rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover-target"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.875rem",
                  color: "#6B6355",
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                  transition: "color 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#1A1A1A"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#6B6355"}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA + Menu */}
          <div className="flex items-center" style={{ gap: "1.5rem" }}>
            <a
              href="#contact"
              className="hidden md:flex hover-target"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.75rem",
                background: "#C8956C",
                color: "#FAF8F5",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "background 0.3s, transform 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#b5804f";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#C8956C";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              Let&apos;s Talk
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 hover-target p-2"
            >
              <span
                className={`w-6 h-[1.5px] bg-dark transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-dark transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[1.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 bg-dark flex items-center justify-center"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      >
        <div className="text-center">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="menu-item block text-5xl md:text-7xl text-cream mb-6 hover:text-accent transition-colors duration-300 hover-target"
              style={{
                fontFamily: "'DM Serif Display', serif",
                opacity: 0,
              }}
            >
              <span className="text-accent text-lg mr-4">0{i + 1}</span>
              {link.name}
            </a>
          ))}
          <div className="menu-item mt-16 opacity-0">
            <p className="text-warm-500 text-sm tracking-[0.2em] uppercase">
              Bengaluru, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
