import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    year: "2026",
    role: "FULL STACK DEVELOPER",
    company: "FREELANCE / PROJECTS",
    description:
      "Building modern websites and full-stack applications with React, JavaScript, Node.js, APIs and databases.",
  },
  {
    year: "2025",
    role: "WEB DEVELOPER",
    company: "PROJECT WORK",
    description:
      "Developed responsive interfaces, e-commerce experiences and custom web solutions focused on performance and usability.",
  },
  {
    year: "2024",
    role: "DEVELOPER",
    company: "LEARNING / BUILDING",
    description:
      "Started building real-world applications and developed a strong foundation in modern web technologies.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#111111",
        color: "#ffffff",
        padding: "120px 8%",
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.045,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          RED GLOW
      ====================================================== */}
      <div
        style={{
          position: "absolute",
          width: "550px",
          height: "550px",
          left: "-300px",
          top: "180px",
          borderRadius: "50%",
          background: "#ff2a2a",
          opacity: 0.07,
          filter: "blur(130px)",
          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          SECOND RED GLOW
      ====================================================== */}
      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "450px",
          right: "-250px",
          bottom: "100px",
          borderRadius: "50%",
          background: "#ff2a2a",
          opacity: 0.045,
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          SPIDER WEB
      ====================================================== */}
      <svg
        viewBox="0 0 500 500"
        style={{
          position: "absolute",
          left: "-70px",
          top: "-30px",
          width: "500px",
          height: "500px",
          opacity: 0.10,
          pointerEvents: "none",
        }}
      >
        <g
          fill="none"
          stroke="#ff2a2a"
          strokeWidth="1"
        >
          {/* Main web lines */}
          <path d="M0 0 L500 500" />
          <path d="M0 0 L350 500" />
          <path d="M0 0 L220 500" />
          <path d="M0 0 L100 500" />

          <path d="M0 0 L500 100" />
          <path d="M0 0 L500 220" />
          <path d="M0 0 L500 350" />

          {/* Curved web rings */}
          <path d="M55 0 Q45 45 0 55" />
          <path d="M110 0 Q90 90 0 110" />
          <path d="M175 0 Q145 145 0 175" />
          <path d="M250 0 Q205 205 0 250" />
          <path d="M330 0 Q270 270 0 330" />
          <path d="M410 0 Q335 335 0 410" />
        </g>
      </svg>

      {/* =====================================================
          HEADER
      ====================================================== */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          marginBottom: "75px",
        }}
      >
        <div
          style={{
            color: "#777",
            fontFamily: "monospace",
            fontSize: "12px",
            letterSpacing: "4px",
            marginBottom: "18px",
          }}
        >
          <span style={{ color: "#ff2a2a" }}>03</span>
          {" / "}
          EXPERIENCE
        </div>

        <h2
          style={{
            margin: 0,
            fontSize: "clamp(55px, 9vw, 110px)",
            lineHeight: 0.9,
            fontWeight: 900,
            letterSpacing: "-6px",
          }}
        >
          MY{" "}
          <span style={{ color: "#ff2a2a" }}>
            JOURNEY
          </span>
        </h2>
      </div>

      {/* =====================================================
          TIMELINE
      ====================================================== */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* TIMELINE LINE */}
        <div
          style={{
            position: "absolute",
            left: "105px",
            top: 0,
            bottom: 0,
            width: "1px",
            background:
              "linear-gradient(to bottom, #ff2a2a, rgba(255,42,42,.08))",
          }}
        />

        {experience.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "140px 1fr",
              gap: "45px",
              paddingBottom:
                index === experience.length - 1
                  ? "0"
                  : "65px",
            }}
          >
            {/* YEAR */}
            <div
              style={{
                color: "#ff2a2a",
                fontFamily: "monospace",
                fontSize: "13px",
                letterSpacing: "2px",
                paddingTop: "5px",
              }}
            >
              {item.year}
            </div>

            {/* TIMELINE DOT */}
            <motion.div
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15 + 0.2,
                type: "spring",
                stiffness: 180,
                damping: 12,
              }}
              style={{
                position: "absolute",
                left: "100px",
                top: "3px",
                width: "11px",
                height: "11px",
                borderRadius: "50%",
                background: "#ff2a2a",
                boxShadow:
                  "0 0 20px rgba(255,42,42,.7)",
              }}
            />

            {/* CONTENT CARD */}
            <motion.div
              whileHover={{
                y: -4,
              }}
              style={{
                border:
                  "1px solid rgba(255,255,255,.1)",
                background:
                  "rgba(255,255,255,.025)",
                padding: "30px",
                transition:
                  "border-color .3s ease, transform .3s ease, background .3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "#ff2a2a";

                e.currentTarget.style.transform =
                  "translateX(8px)";

                e.currentTarget.style.background =
                  "rgba(255,42,42,.035)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,.1)";

                e.currentTarget.style.transform =
                  "translateX(0)";

                e.currentTarget.style.background =
                  "rgba(255,255,255,.025)";
              }}
            >
              {/* COMPANY */}
              <div
                style={{
                  color: "#777",
                  fontFamily: "monospace",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                {item.company}
              </div>

              {/* ROLE */}
              <h3
                style={{
                  margin: 0,
                  fontSize: "clamp(25px, 4vw, 45px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: "-2px",
                }}
              >
                {item.role}
              </h3>

              {/* RED LINE */}
              <div
                style={{
                  width: "35px",
                  height: "3px",
                  background: "#ff2a2a",
                  margin: "20px 0",
                }}
              />

              {/* DESCRIPTION */}
              <p
                style={{
                  margin: 0,
                  color: "#888",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  maxWidth: "650px",
                }}
              >
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* =====================================================
          BOTTOM LABEL
      ====================================================== */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "70px",
          color: "#555",
          fontFamily: "monospace",
          fontSize: "10px",
          letterSpacing: "3px",
        }}
      >
        ALWAYS BUILDING. ALWAYS LEARNING.
      </div>

      {/* =====================================================
          MOBILE
      ====================================================== */}
      <style>
        {`
          @media (max-width: 700px) {

            #experience {
              padding: 80px 6%;
            }

            #experience > div:nth-of-type(4) {
              margin-left: 0 !important;
            }

            #experience > div:nth-of-type(4) > div {
              grid-template-columns: 1fr !important;
              gap: 15px !important;
              padding-bottom: 45px !important;
            }

            #experience > div:nth-of-type(4) > div > div:nth-child(2) {
              display: none;
            }

          }
        `}
      </style>
    </section>
  );
}