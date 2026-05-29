"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Loader({ onFinish }) {
  const [bgColor, setBgColor] = useState(
    "linear-gradient(to right, #f1f2f4, #f3e3d4)"
  );
  const [logo, setLogo] = useState("/Logos/SparX/SparX-white-bg.png");
  const logoContainerRef = useRef(null);

  useEffect(() => {
    // Slide-up animation relative to container height
    gsap.fromTo(
      logoContainerRef.current,
      { y: "50%", opacity: 0 }, // start slightly below center
      {
        y: "0%", // end exactly at center
        opacity: 1,
        duration: 1.8,
        ease: "power3.out",
        onComplete: startFlipFlopAnimation,
      }
    );
  }, []);

  const startFlipFlopAnimation = () => {
    let flip = false;
    let count = 0;

    const interval = setInterval(() => {
      flip = !flip;
      count++;

      setBgColor(
        flip ? "#FF3A41" : "linear-gradient(to right, #f1f2f4, #f3e3d4)"
      );
      setLogo(
        flip
          ? "/Logos/SparX/SparX-red-bg.png"
          : "/Logos/SparX/SparX-white-bg.png"
      );

      if (count === 6) {
        clearInterval(interval);
        setTimeout(runFinalAnimation, 800);
      }
    }, 1500);
  };

  const runFinalAnimation = () => {
    gsap.to(".loader-logo", {
      duration: 1.2,
      y: "-40vh",
      scale: 0.6,
      ease: "power3.inOut",
      onComplete: onFinish,
    });
  };

  return (
    <div
      className="loader-overlay fixed inset-0 flex items-center justify-center z-[9999]"
      style={{ background: bgColor }}
    >
      {/* Centered container with larger height for better slide-up */}
      <div
        ref={logoContainerRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "25vh", // increased height for smoother slide
          width: "auto",
        }}
      >
        <img
          src={logo}
          alt="SparX Logo"
          className="loader-logo w-44 md:w-56 select-none"
          draggable="false"
        />
      </div>
    </div>
  );
}
