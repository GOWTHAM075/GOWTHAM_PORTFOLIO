import React from "react";
import { motion } from "framer-motion";
import { Code2, Lightbulb, Zap, Download } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: Code2,
      title: "CLEAN CODE",
      text: "Maintainable & Scalable",
    },
    {
      icon: Lightbulb,
      title: "PROBLEM SOLVER",
      text: "Turn ideas into reality",
    },
    {
      icon: Zap,
      title: "ALWAYS LEARNING",
      text: "Better than yesterday",
    },
  ];

  const stats = [
    ["1.5+", "YEARS EXPERIENCE"],
    ["4+", "PROJECTS COMPLETED"],
    ["2+", "HAPPY CLIENTS"],
    ["100%", "COMMITMENT"],
  ];

  return (
    <section
      id="about"
      style={{
        position: "relative",
        minHeight: "720px",
        padding: "110px 8%",
        background: "#090909",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          BACKGROUND GRID
          ===================================================== */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.035,
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "45px 45px",
          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          RED WEB
          ===================================================== */}

      <svg
        viewBox="0 0 900 500"
        style={{
          position: "absolute",
          right: "-100px",
          top: "-50px",
          width: "650px",
          opacity: 0.28,
          pointerEvents: "none",
        }}
      >
        <g
          fill="none"
          stroke="#ff2a2a"
          strokeWidth="1"
        >
          <path d="M900 0 Q700 130 500 500" />
          <path d="M900 0 Q780 180 620 500" />
          <path d="M900 0 Q850 250 760 500" />
          <path d="M900 0 Q900 250 900 500" />

          <path d="M850 70 Q720 120 610 170" />
          <path d="M820 130 Q700 190 610 230" />
          <path d="M790 200 Q690 260 640 300" />
          <path d="M750 280 Q700 330 680 370" />
        </g>
      </svg>

      {/* =====================================================
          LEFT RED LINE
          ===================================================== */}

      <div
        className="about-red-line"
        style={{
          position: "absolute",
          left: "4%",
          top: 0,
          bottom: 0,
          width: "1px",
          background: "rgba(255,42,42,.45)",
        }}
      />

      {/* =====================================================
          SECTION LABEL
          ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
        style={{
          position: "relative",
          zIndex: 2,
          marginBottom: "18px",
          color: "#999",
          fontFamily: "monospace",
          fontSize: "12px",
          letterSpacing: "4px",
        }}
      >
        <span style={{ color: "#ff2a2a" }}>01</span>
        {" / "}
        ABOUT
      </motion.div>

      {/* =====================================================
          TITLE
          ===================================================== */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        style={{
          position: "relative",
          zIndex: 2,
          margin: 0,
          fontSize: "clamp(48px, 7vw, 82px)",
          lineHeight: 0.95,
          fontWeight: 900,
          letterSpacing: "-4px",
        }}
      >
        ABOUT{" "}
        <span style={{ color: "#ff2a2a" }}>
          ME
        </span>
      </motion.h2>

      {/* =====================================================
          RED UNDERLINE
          ===================================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "38px",
          height: "3px",
          background: "#ff2a2a",
          marginTop: "20px",
          marginBottom: "50px",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div
        className="about-content"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns:
            "minmax(280px, 1fr) minmax(500px, 1.5fr)",
          gap: "70px",
          alignItems: "start",
        }}
      >
        {/* =================================================
            LEFT CONTENT
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#aaa",
              fontSize: "17px",
              lineHeight: 1.8,
              maxWidth: "500px",
            }}
          >
            I'm a passionate Full Stack Developer who loves
            building clean, scalable and user-friendly web
            applications.
          </p>

          <p
            style={{
              marginTop: "18px",
              color: "#777",
              fontSize: "16px",
              lineHeight: 1.8,
              maxWidth: "500px",
            }}
          >
            I enjoy turning ideas into real products and
            constantly exploring new technologies to create
            better digital experiences.
          </p>

          {/* RESUME */}

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "30px",
              padding: "15px 22px",
              border: "1px solid #ff2a2a",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 700,
              transition: "all .3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ff2a2a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <Download size={17} />
            DOWNLOAD RESUME
          </motion.a>
        </motion.div>

        {/* =================================================
            RIGHT CARDS
            ================================================= */}

        <div
          className="about-cards"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, minmax(150px, 1fr))",
            gap: "14px",
          }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                  borderColor: "#ff2a2a",
                }}
                style={{
                  minHeight: "190px",
                  padding: "25px 18px",
                  border:
                    "1px solid rgba(255,42,42,.25)",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,.025), rgba(255,0,0,.015))",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  transition:
                    "border-color .3s ease",
                }}
              >
                {/* ICON */}

                <div
                  style={{
                    width: "62px",
                    height: "62px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #ff2a2a",
                    color: "#ff2a2a",
                    marginBottom: "18px",
                  }}
                >
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                  />
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontSize: "13px",
                    fontWeight: 800,
                    letterSpacing: "1px",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    margin: "8px 0 0",
                    color: "#777",
                    fontSize: "12px",
                  }}
                >
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          STATS
          ===================================================== */}

      <motion.div
        className="about-stats"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns:
            "repeat(4, 1fr)",
          marginTop: "75px",
          borderTop:
            "1px solid rgba(255,255,255,.08)",
          paddingTop: "35px",
        }}
      >
        {stats.map(([number, label], index) => (
          <div
            key={label}
            style={{
              textAlign: "center",
              borderRight:
                index !== stats.length - 1
                  ? "1px solid rgba(255,255,255,.1)"
                  : "none",
            }}
          >
            <div
              style={{
                color: "#ff2a2a",
                fontSize: "28px",
                fontWeight: 900,
              }}
            >
              {number}
            </div>

            <div
              style={{
                marginTop: "7px",
                color: "#777",
                fontFamily: "monospace",
                fontSize: "10px",
                letterSpacing: "2px",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* =====================================================
          BOTTOM TEXT
          ===================================================== */}

      <div
        className="about-bottom"
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "70px",
          display: "flex",
          justifyContent: "space-between",
          color: "#555",
          fontFamily: "monospace",
          fontSize: "10px",
          letterSpacing: "3px",
          gap: "20px",
        }}
      >
        <span>
          BUILD • SOLVE • REPEAT
        </span>

        <span>
          SPIDER MINDSET / DEVELOPER LIFESTYLE
        </span>
      </div>

      {/* =====================================================
          RESPONSIVE
          ===================================================== */}

      <style>{`
        @media (max-width: 1000px) {
          #about {
            padding-left: 7% !important;
            padding-right: 7% !important;
          }

          .about-content {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }

          .about-cards {
            grid-template-columns:
              repeat(3, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 700px) {
          #about {
            min-height: auto !important;
            padding: 85px 6% !important;
          }

          .about-red-line {
            left: 3% !important;
          }

          #about h2 {
            font-size: 52px !important;
            line-height: .9 !important;
            letter-spacing: -4px !important;
          }

          #about > div[style*="marginTop"] {
            margin-bottom: 38px !important;
          }

          .about-content {
            gap: 40px !important;
          }

          .about-content p {
            font-size: 15px !important;
            line-height: 1.75 !important;
          }

          .about-content > div:first-child {
            width: 100%;
          }

          .about-cards {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }

          .about-cards > div {
            min-height: 155px !important;
            padding: 22px 18px !important;
          }

          .about-cards > div > div {
            width: 55px !important;
            height: 55px !important;
            margin-bottom: 14px !important;
          }

          .about-cards svg {
            width: 24px !important;
            height: 24px !important;
          }

          .about-stats {
            grid-template-columns:
              repeat(2, 1fr) !important;
            margin-top: 55px !important;
            padding-top: 25px !important;
            row-gap: 25px !important;
          }

          .about-stats > div {
            border-right: none !important;
          }

          .about-stats > div:nth-child(1),
          .about-stats > div:nth-child(2) {
            border-bottom:
              1px solid rgba(255,255,255,.08) !important;
            padding-bottom: 22px !important;
          }

          .about-stats > div:nth-child(1),
          .about-stats > div:nth-child(3) {
            border-right:
              1px solid rgba(255,255,255,.08) !important;
          }

          .about-bottom {
            flex-direction: column !important;
            gap: 12px !important;
            margin-top: 45px !important;
            font-size: 8px !important;
            line-height: 1.6 !important;
          }
        }

        @media (max-width: 450px) {
          #about {
            padding: 75px 5% !important;
          }

          #about h2 {
            font-size: 45px !important;
            letter-spacing: -3px !important;
          }

          .about-content p {
            font-size: 14px !important;
          }

          .about-stats {
            grid-template-columns:
              repeat(2, 1fr) !important;
          }

          .about-stats > div:nth-child(1),
          .about-stats > div:nth-child(3) {
            border-right:
              1px solid rgba(255,255,255,.08) !important;
          }

          .about-stats > div > div:first-child {
            font-size: 24px !important;
          }

          .about-stats > div > div:last-child {
            font-size: 8px !important;
            letter-spacing: 1px !important;
          }
        }

        @media (max-width: 360px) {
          #about h2 {
            font-size: 41px !important;
          }

          .about-bottom {
            letter-spacing: 2px !important;
          }
        }
      `}</style>
    </section>
  );
}