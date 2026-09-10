import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const navItems = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "STACK", id: "stack" },
    { label: "WORK", id: "projects" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "CONTACT", id: "contact" },
  ];

  return (
    <footer
      style={{
        position: "relative",
        background: "#080808",
        color: "#fff",
        overflow: "hidden",
        borderTop: "1px solid #222",
      }}
    >
      {/* ================= BACKGROUND GRID ================= */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* ================= RED GLOW ================= */}

      <motion.div
        animate={{
          opacity: [0.04, 0.09, 0.04],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: 450,
          height: 450,
          right: "-220px",
          bottom: "-220px",
          borderRadius: "50%",
          background: "#ff2a2a",
          filter: "blur(110px)",
          pointerEvents: "none",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "88%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "75px 0 25px",
        }}
      >
        {/* ================= TOP ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "50px",
            paddingBottom: "55px",
          }}
        >
          {/* BRAND */}

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "18px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  background: "#ff2a2a",
                  display: "block",
                  boxShadow: "0 0 12px rgba(255,42,42,.7)",
                }}
              />

              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "9px",
                  letterSpacing: "3px",
                  color: "#666",
                }}
              >
                06 / END OF THE LINE
              </span>
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(55px, 8vw, 100px)",
                lineHeight: 0.8,
                fontWeight: 900,
                letterSpacing: "-6px",
              }}
            >
              GOWTHAM
              <span
                style={{
                  color: "#ff2a2a",
                }}
              >
                .
              </span>
            </h2>

            <div
              style={{
                marginTop: "20px",
                color: "#666",
                fontFamily: "monospace",
                fontSize: "10px",
                letterSpacing: "3px",
              }}
            >
              FULL STACK DEVELOPER
            </div>
          </div>

          {/* MESSAGE */}

          <div
            style={{
              maxWidth: "280px",
              paddingTop: "15px",
            }}
          >
            <div
              style={{
                color: "#777",
                fontSize: "11px",
                lineHeight: 1.8,
              }}
            >
              Building modern web experiences
              with clean code, thoughtful design
              and meaningful interaction.
            </div>

            <div
              style={{
                width: "45px",
                height: "2px",
                background: "#ff2a2a",
                marginTop: "20px",
              }}
            />
          </div>
        </motion.div>

        {/* ================= DIVIDER ================= */}

        <div
          style={{
            height: "1px",
            background: "#222",
            position: "relative",
          }}
        >
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "120px",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "2px",
              background: "#ff2a2a",
            }}
          />
        </div>

        {/* ================= NAVIGATION ================= */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "1fr auto 1fr",
            alignItems: "center",
            gap: "30px",
            padding: "30px 0",
          }}
        >
          {/* LEFT */}

          <div
            style={{
              color: "#444",
              fontFamily: "monospace",
              fontSize: "8px",
              letterSpacing: "2px",
            }}
          >
            NAVIGATE
          </div>

          {/* NAV */}

          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "22px",
            }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                whileHover={{
                  color: "#ff2a2a",
                  y: -2,
                }}
                style={{
                  border: 0,
                  background: "transparent",
                  color: "#777",
                  cursor: "pointer",
                  fontFamily: "monospace",
                  fontSize: "8px",
                  letterSpacing: "1.5px",
                  padding: 0,
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* BACK TO TOP */}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <motion.button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              whileHover={{
                scale: 1.05,
                borderColor: "#ff2a2a",
                color: "#ff2a2a",
              }}
              style={{
                width: "38px",
                height: "38px",
                border: "1px solid #333",
                background: "transparent",
                color: "#777",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>
        </div>

        {/* ================= SOCIAL / CONTACT ================= */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            padding: "20px 0 30px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -3,
                borderColor: "#ff2a2a",
              }}
              style={{
                width: "38px",
                height: "32px",
                border: "1px solid #292929",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#777",
                textDecoration: "none",
                fontFamily: "monospace",
                fontSize: "8px",
                transition: "border-color .25s",
              }}
            >
              GH
            </motion.a>

            <motion.a
              href="#"
              whileHover={{
                y: -3,
                borderColor: "#ff2a2a",
              }}
              style={{
                width: "38px",
                height: "32px",
                border: "1px solid #292929",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#777",
                textDecoration: "none",
                fontFamily: "monospace",
                fontSize: "8px",
                transition: "border-color .25s",
              }}
            >
              LI
            </motion.a>

            <motion.a
              href="#"
              whileHover={{
                y: -3,
                borderColor: "#ff2a2a",
              }}
              style={{
                width: "38px",
                height: "32px",
                border: "1px solid #292929",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#777",
                textDecoration: "none",
                fontFamily: "monospace",
                fontSize: "8px",
                transition: "border-color .25s",
              }}
            >
              IG
            </motion.a>
          </div>

          <motion.div
            animate={{
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#555",
              fontFamily: "monospace",
              fontSize: "8px",
              letterSpacing: "2px",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#ff2a2a",
                boxShadow:
                  "0 0 8px rgba(255,42,42,.8)",
              }}
            />

            AVAILABLE FOR WORK
          </motion.div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          style={{
            borderTop: "1px solid #1c1c1c",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            color: "#444",
            fontFamily: "monospace",
            fontSize: "8px",
            letterSpacing: "1.5px",
          }}
        >
          <span>
            © 2026 GOWTHAM. ALL RIGHTS RESERVED.
          </span>

          <span>
            BUILD • LEARN • GROW
          </span>
        </div>
      </div>

      {/* ================= MOBILE ================= */}

      <style>
        {`
          @media (max-width: 700px) {
            #footer-content {
              width: 90%;
            }

            footer h2 {
              font-size: 58px !important;
              letter-spacing: -4px !important;
            }

            footer > div > div:first-child {
              flex-direction: column !important;
              gap: 25px !important;
            }

            footer nav {
              gap: 14px !important;
            }

            footer nav button {
              font-size: 7px !important;
            }

            footer > div > div:nth-last-child(2) {
              flex-direction: column !important;
              align-items: flex-start !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;