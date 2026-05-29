"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

export const AnimatedNavbar = ({ onAnimationComplete, onProductClick }) => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      navRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    tl.to(navRef.current, {
      width: "95%",
      duration: 1.2,
      ease: "power3.inOut",
    });
    tl.fromTo(
      logoRef.current,
      { scale: 1 },
      { scale: 1, duration: 1, ease: "power3.out" },
      "-=1.2"
    );

    tl.add(() => {
      setExpanded(true);
      if (onAnimationComplete) onAnimationComplete();
    });
  }, [onAnimationComplete]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full flex flex-col items-center">
      {/* Navbar */}
      <nav
        ref={navRef}
        className="flex items-center justify-between rounded-full px-6 py-4"
        style={{
          backgroundColor: "rgb(25, 24, 23)",
          width: "10%",
          overflow: "hidden",
        }}
      >
        {/* Logo */}
        <div className="flex items-center" ref={logoRef}>
          <img
            src="/Logos/SparX/header-logo.png"
            alt="SparX Logo"
            className="w-24 object-contain"
          />
        </div>

        {/* Menu items */}
        {expanded && (
          <>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 text-white">
              {[
                { label: "About", id: "about" },
                { label: "Products", id: "products" },
                { label: "Why Choose Us", id: "why" },
                { label: "Contact Us", id: "contact" },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="cursor-pointer hover:text-red-200 text-[12px]"
                >
                  {item.label}
                </div>
              ))}
            </div>

            {/* Desktop Button */}
            <div className="hidden md:flex flex-col space-y-3">
              <Button
                className="text-white rounded-full flex items-center"
                style={{
                  backgroundColor: "#FF3A41",
                  padding: "25px 15px",
                  border: "2px solid #f8a8ac",
                  fontSize: "13px",
                }}
                onClick={onProductClick}
              >
                Explore Our Products
                <img
                  src="/Icons/Vector.png"
                  alt="Arrow Icon"
                  className="w-3 h-4 ml-2"
                />
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center ml-2">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                  <X className="text-white w-8 h-8" />
                ) : (
                  <Menu className="text-white w-8 h-8" />
                )}
              </button>
            </div>
          </>
        )}
      </nav>

      {/* Mobile menu (below navbar) */}
      {menuOpen && expanded && (
        <div className="md:hidden bg-[#191817] px-6 py-6 space-y-6 w-[95%] mt-2 rounded-3xl shadow-lg">
          {/* Menu Links */}
          <div className="flex flex-col space-y-4 text-white text-sm">
            {["About", "Products", "Why Choose Us", "Contact Us"].map((item) => (
              <span
                key={item}
                onClick={() =>
                  handleScroll(item.toLowerCase().replace(/\s+/g, ""))
                }
                className="cursor-pointer hover:text-red-200"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="flex flex-col space-y-3 mt-4">
            <Button
              className="text-white rounded-full flex items-center justify-center w-full"
              style={{
                backgroundColor: "#FF3A41",
                padding: "25px 15px",
                border: "2px solid #f8a8ac",
                fontSize: "13px",
              }}
              onClick={onProductClick}
            >
              Explore Our Products
              <img
                src="/Icons/Vector.png"
                alt="Arrow Icon"
                className="w-3 h-4 ml-2"
              />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
