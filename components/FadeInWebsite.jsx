"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import EverythingYouNeedSection from "@/components/everything-you-need-section";
import Footer from "@/components/Footer";
import IndustriesServed from "@/components/Industries-served";
import OurCoreProducts from "@/components/our-core-products";
import { Button } from "@/components/ui/button";
import WhyChooseSparX from "@/components/why-choose-sparx";

export function FadeInWebsite({ mainRef, setIsChatOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Track scroll
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mainRef.current) {
      gsap.to(mainRef.current, {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      });
    }
  }, [mainRef]);

  // Hero fade out logic
  const heroHeight = typeof window !== "undefined" ? window.innerHeight : 800;
  const fadeOutProgress = Math.min(scrollY / heroHeight, 1);
  const heroOpacity = 1 - fadeOutProgress * 1.2;
  const heroScale = 1 - fadeOutProgress * 0.1;
  const heroVisible = fadeOutProgress < 1;

  return (
    <>
      {/* Hero Section */}
      {heroVisible && (
        <section
          id="about"
          className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat flex items-center transition-all duration-700 ease-in-out"
          style={{
            background: "linear-gradient(to right, #f1f2f4, #f3e3d4)",
            opacity: heroOpacity,
            transform: `scale(${heroScale})`,
            zIndex: 0,
          }}
        >
          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
            <div style={{ marginLeft: "5%", marginTop: "10rem" }}>
              <h1
                className="text-gray-900 leading-tight mb-6 custom-font-1"
                style={{ fontSize: "50px", fontWeight: "400" }}
              >
                Empowering the Future with Smarter Digital{" "}
                <span
                  style={{
                    backgroundColor: "#FF3A41",
                    borderRadius: "10px",
                    color: "#fff",
                    padding: "0 8px",
                  }}
                >
                  Solutions
                </span>
              </h1>
              <p className="text-md text-gray-700 mb-8 leading-relaxed custom-font-2">
                From intelligent insurance automation to real-time video
                analytics and secure data platforms—Sparx builds solutions that
                redefine industries.
              </p>
              <Button
                className="text-white rounded-full text-sm flex items-center"
                style={{
                  backgroundColor: "#FF3A41",
                  padding: "25px 15px",
                  border: "2px solid #f8a8ac",
                }}
                onClick={() => setIsChatOpen(true)}
              >
                Talk to Our Experts
                <img
                  src="/Icons/Vector.png"
                  alt="Arrow Icon"
                  className="w-3 h-4 ml-2"
                />
              </Button>
            </div>

            {/* Hero Right Image */}
            <div className="flex justify-center relative w-[90%] mt-[8rem]">
              <img
                src="/Icons/red-left.png"
                alt="red"
                className="object-contain custom-element-1 animate-pulse-move"
              />
              <img
                src="/Images/Hero-Image.png"
                alt="Hero Illustration"
                className="object-contain custom-image-1"
                style={{
                  width: "65%",
                  filter: "drop-shadow(0px 33px 70px rgba(255, 0, 0, 0.4))",
                }}
              />
              <img
                src="/Icons/blue-right.png"
                alt="blue"
                className="object-contain custom-element-2 animate-blue-move"
              />
            </div>
          </div>
        </section>
      )}

      {/* Rest of Sections */}
      <div
        className="relative z-20 bg-white transition-all duration-700 ease-in-out"
        style={{ marginTop: "100vh" }}
      >
        <div id="products">
          <OurCoreProducts />
        </div>
        <EverythingYouNeedSection />
        <div id="why">
          <WhyChooseSparX />
        </div>
        <IndustriesServed />
        <div id="contact">
          <Footer setIsChatOpen={setIsChatOpen} />
        </div>
      </div>
    </>
  );
}
