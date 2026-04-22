"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "@/components/Loader";
import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import { FadeInWebsite } from "@/components/FadeInWebsite";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [navbarDone, setNavbarDone] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const mainRef = useRef(null);

  const products = [
    {
      name: "AccuraCore",
      desc: "The new standard in Contractor CRMs.",
      link: "https://accuracore.com",
    },
    {
      name: "ClaimCore",
      desc: "The CRM that multiplies Adjustor productivity.",
      link: "https://claimcore.com",
    },
    {
      name: "AccuraCam",
      desc: "The advanced camera that powers the future.",
      link: "https://accuracam.com",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = loading || !navbarDone ? "hidden" : "auto";
  }, [loading, navbarDone]);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      {/* Navbar triggers navbarDone when fully expanded */}
      <AnimatedNavbar
        products={products}
        onAnimationComplete={() => setNavbarDone(true)}
        onProductClick={() => setIsProductsOpen(true)}
      />

      {/* Website content only renders when navbar animation is done */}
      {navbarDone && (
        <div
          ref={mainRef}
          className="relative opacity-0"
          style={{
            perspective: "1500px",
            transformStyle: "preserve-3d",
            overflowX: "hidden",
            background:
              "linear-gradient(to right, rgb(241, 242, 244), rgb(243, 227, 212))",
          }}
        >
          {/* Fade-in animation after navbar */}
          <FadeInWebsite mainRef={mainRef} setIsChatOpen={setIsChatOpen} />
        </div>
      )}

      {isProductsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-xl relative">
            {/* Close button */}
            <button
              onClick={() => setIsProductsOpen(false)}
              className="absolute top-4 right-4 text-black text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6">Our Products</h2>

            <div className="space-y-4">
              {products.map((product, i) => (
                <a
                  key={i}
                  href={product.link}
                  target="_blank"
                  className="block p-4 border rounded-xl hover:bg-gray-100"
                >
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl w-[90%] max-w-[600px] max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setIsChatOpen(false)}
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
              {["name", "email", "phone", "company"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              ))}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Software of Interest
                </p>
                {["AccuraCore", "ClaimCore", "AccuraCam"].map((s) => (
                  <label key={s} className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value={s}
                      className="h-4 w-4 text-red-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700 text-[13px]">{s}</span>
                  </label>
                ))}
              </div>
              <button
                type="submit"
                className="w-full text-white font-bold py-3 rounded-full transition-colors duration-300 shadow-md"
                style={{ backgroundColor: "red", fontSize: "15px" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
