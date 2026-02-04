
"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

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
      { threshold: 0.3 }
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
          <div style={{width:"fit-content"}}>
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
              AllClaims blends technology and process design to transform claims
              into faster, smarter, and more seamless experiences.
            </p>
            <div>
              <Button
                onClick={() => setIsOpen(true)}
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
              8910 W 192nd St. Unit P
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

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl w-[90%] max-w-[600px] max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h3 className="text-md lg:text-md text-center text-gray-900 mb-2">
              Registration Form
            </h3>
            <p className="text-gray-500 text-sm mb-6 text-center">
              Please fill out this form with the required information
            </p>

            <form
              action="https://formspree.io/f/mjgrbokk"
              method="POST"
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Software of Interest */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Software of Interest
                </p>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="AccuraCore"
                      className="h-4 w-4 text-red-500 border-gray-300 rounded"
                    />
                    <span
                      className="ml-2 text-gray-700"
                      style={{ fontSize: "13px" }}
                    >
                      AccuraCore
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="ClaimCore"
                      className="h-4 w-4 text-red-500 border-gray-300 rounded"
                    />
                    <span
                      className="ml-2 text-gray-700"
                      style={{ fontSize: "13px" }}
                    >
                      ClaimCore
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="AccuraCam"
                      className="h-4 w-4 text-red-500 border-gray-300 rounded"
                    />
                    <span
                      className="ml-2 text-gray-700"
                      style={{ fontSize: "13px" }}
                    >
                      AccuraCam
                    </span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full text-white font-bold py-3 rounded-full transition-colors duration-300 shadow-md"
                style={{
                  backgroundColor: "red",
                  padding: "10px 15px",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </footer>
  );
}