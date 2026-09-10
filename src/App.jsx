import React from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import MouseWebTrail from "./components/MouseWebTrail";
import Preloader from "./components/Preloader";



function App() {
  return (
    <div
      style={{
        background: "#080808",
        minHeight: "100vh",
        position: "relative",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      {/* =====================================================
          GLOBAL SPIDER-MAN / WEB ATMOSPHERE
          ===================================================== */}

   
      {/* Mouse-following web point */}
      <MouseWebTrail />

  
      {/* =====================================================
          GLOBAL AMBIENT LIGHT
          ===================================================== */}

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* Top red atmosphere */}
        <div
          style={{
            position: "absolute",
            top: "-280px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,42,42,0.08) 0%, rgba(255,42,42,0.025) 40%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />

        {/* Bottom red atmosphere */}
        <div
          style={{
            position: "absolute",
            bottom: "-350px",
            right: "-180px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,42,42,0.055) 0%, transparent 68%)",
            filter: "blur(30px)",
          }}
        />

        {/* Very subtle screen vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.28) 100%)",
          }}
        />
      </div>

      {/* =====================================================
          MAIN WEBSITE
          ===================================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* ===================================================
            NAVIGATION
            =================================================== */}
        <Preloader />
        <Navbar />

        {/* ===================================================
            HERO
            =================================================== */}

        <Hero />

        {/* ===================================================
            ABOUT
            =================================================== */}

        <About />

        {/* ===================================================
            SKILLS
            =================================================== */}

        <Skills />

        {/* ===================================================
            TECH STACK
            =================================================== */}

        <Stack />

        {/* ===================================================
            PROJECTS
            =================================================== */}

        <Projects />

        {/* ===================================================
            SERVICES
            =================================================== */}

        <Services />

        {/* ===================================================
            EXPERIENCE
            =================================================== */}

        <Experience />

        {/* ===================================================
            CONTACT
            =================================================== */}

        <Contact />

        {/* ===================================================
            FOOTER
            =================================================== */}

        <Footer />
      </div>

      {/* =====================================================
          GLOBAL STYLES
          ===================================================== */}

      <style>
        {`
          html {
            scroll-behavior: smooth;
            background: #080808;
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            padding: 0;
            background: #080808;
            color: #fff;
            overflow-x: hidden;
          }

          body::-webkit-scrollbar {
            width: 7px;
          }

          body::-webkit-scrollbar-track {
            background: #080808;
          }

          body::-webkit-scrollbar-thumb {
            background: #ff2a2a;
            border-radius: 10px;
          }

          body::-webkit-scrollbar-thumb:hover {
            background: #ff4545;
          }

          ::selection {
            background: #ff2a2a;
            color: #fff;
          }

          ::-moz-selection {
            background: #ff2a2a;
            color: #fff;
          }

          a {
            -webkit-tap-highlight-color: transparent;
          }

          button {
            -webkit-tap-highlight-color: transparent;
          }

          input,
          textarea,
          button {
            font-family: inherit;
          }

          img {
            max-width: 100%;
          }

          /* Prevent horizontal movement caused by animations */
          section {
            max-width: 100%;
          }

          @media (max-width: 700px) {
            body {
              overflow-x: hidden;
            }

            body::-webkit-scrollbar {
              width: 4px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }

            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;