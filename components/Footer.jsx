"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Footer({ setIsChatOpen }) {
  useEffect(() => {
    const footer = document.querySelector(".customF");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footer.classList.add("in-view");
        } else {
          footer.classList.remove("in-view");
        }
      },
      { threshold: 0.3 },
    );
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className="py-2 px-4"
      style={{ background: "linear-gradient(to right, #f1f2f4, #f3e3d4)" }}
    >
      <div
        style={{
          backgroundColor: "#191816",
          padding: "5rem 2.5rem",
          borderRadius: "20px",
          margin: "1rem",
        }}
        className="customF"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Heading */}
          <div style={{ width: "fit-content" }}>
            <h2
              className="text-white leading-tight text-center"
              style={{ fontSize: "60px" }}
            >
              <span className="letsWork block">Let's Work</span>
              <span className="together block" style={{ marginLeft: "12%" }}>
                Together
              </span>
            </h2>
          </div>

          {/* Right Column - Text and Button */}
          <div className="space-y-6 flex flex-col justify-center">
            <p
              className="text-white leading-relaxed"
              style={{ fontSize: "16px" }}
            >
              Sparx Technologies blends technology and process design to
              transform claims into faster, smarter, and more seamless
              experiences.
            </p>
            <div>
              <Button
                onClick={() => setIsChatOpen(true)}
                className="text-black rounded-full text-sm flex items-center"
                style={{
                  backgroundColor: "white",
                  padding: "20px 25px",
                  cursor: "pointer",
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white mb-12"></div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="space-y-4">
            <img
              src="/Logos/SparX/Sparx-W-Dark-RGB-01.png"
              alt="AccuraCore Logo"
              className="w-35 object-contain"
              style={{ marginBottom: "15px" }}
            />
            <div className="flex space-x-3">
              {/* Facebook */}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img
                  src="/Icons/Facebook.svg"
                  alt="Facebook"
                  className="w-4 h-4"
                />
              </div>

              {/* Twitter */}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img
                  src="/Icons/Twitter.svg"
                  alt="Twitter"
                  className="w-4 h-4"
                />
              </div>

              {/* LinkedIn */}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img
                  src="/Icons/Linkdin.svg"
                  alt="LinkedIn"
                  className="w-4 h-4"
                />
              </div>

              {/* Instagram */}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <img
                  src="/Icons/Instagram.svg"
                  alt="Instagram"
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>

          {/* Address Column */}
          <div className="space-y-4">
            <h3 className="text-white" style={{ fontSize: "20px" }}>
              Address
            </h3>
            <p className="text-gray-300" style={{ fontSize: "14px" }}>
              8910 W 192nd St. Unit M
              <br />
              Mokena, IL 60448
            </p>
          </div>

          {/* Contact Us Column */}
          {/* Contact Us Column */}
          <div className="space-y-4">
            <h3 className="text-white" style={{ fontSize: "20px" }}>
              Contact Us
            </h3>
            <div className="space-y-2">
              <p className="text-gray-300" style={{ fontSize: "14px" }}>
                <a href="tel:+18778877279" className="hover:text-white">
                  +1 (877) 887-7279
                </a>
              </p>
              <p className="text-gray-300" style={{ fontSize: "14px" }}>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@sparxtech.com"
                  target="_blank"
                >
                  admin@sparxtech.com
                </a>
              </p>
            </div>
          </div>

          {/* Our Policies Column */}
          <div className="space-y-4">
            <h3 className="text-white" style={{ fontSize: "20px" }}>
              Our Policies
            </h3>
            <div className="space-y-2">
              <p
                className="text-gray-300 hover:text-white cursor-pointer"
                style={{ fontSize: "14px" }}
              >
                Privacy Policies
              </p>
              <p
                className="text-gray-300 hover:text-white cursor-pointer"
                style={{ fontSize: "14px" }}
              >
                Terms of use
              </p>
              <p
                className="text-gray-300 hover:text-white cursor-pointer"
                style={{ fontSize: "14px" }}
              >
                Refund Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
