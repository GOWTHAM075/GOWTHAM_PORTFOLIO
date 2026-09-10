import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setShowName(true);
    }, 650);

    let value = 0;

    const interval = setInterval(() => {
      const increment =
        value < 30
          ? Math.floor(Math.random() * 5) + 2
          : value < 70
          ? Math.floor(Math.random() * 8) + 3
          : Math.floor(Math.random() * 5) + 2;

      value += increment;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setFinished(true);

          setTimeout(() => {
            if (onComplete) onComplete();
          }, 850);
        }, 700);
      }

      setProgress(value);
    }, 90);

    return () => {
      clearTimeout(nameTimer);
      clearInterval(interval);
    };
  }, [onComplete]);

  const status =
    progress < 20
      ? "CONNECTING"
      : progress < 40
      ? "LOADING ASSETS"
      : progress < 60
      ? "BUILDING SYSTEM"
      : progress < 80
      ? "INITIALIZING UI"
      : progress < 100
      ? "FINALIZING"
      : "SYSTEM READY";

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(10px)",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 20000,
            background: "#050505",
            color: "#fff",
            overflow: "hidden",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          {/* =====================================================
              BACKGROUND GRID
          ====================================================== */}

          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.035,
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,.6) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,.6) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* =====================================================
              RED ATMOSPHERE
          ====================================================== */}

          <motion.div
            animate={{
              scale: [0.8, 1.25, 0.8],
              opacity: [0.05, 0.16, 0.05],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: "550px",
              height: "550px",
              borderRadius: "50%",
              background: "#ff2a2a",
              filter: "blur(150px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />

          {/* =====================================================
              CINEMATIC WEB
          ====================================================== */}

          <motion.svg
            viewBox="0 0 1000 1000"
            initial={{
              opacity: 0,
              scale: 0.25,
              rotate: -8,
            }}
            animate={{
              opacity: 0.14,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 2,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              position: "absolute",
              width: "min(100vw, 1000px)",
              height: "min(100vw, 1000px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          >
            <g
              fill="none"
              stroke="#ff2a2a"
              strokeWidth="1"
            >
              <circle cx="500" cy="500" r="80" />
              <circle cx="500" cy="500" r="150" />
              <circle cx="500" cy="500" r="230" />
              <circle cx="500" cy="500" r="320" />
              <circle cx="500" cy="500" r="420" />
              <circle cx="500" cy="500" r="480" />

              <line
                x1="500"
                y1="0"
                x2="500"
                y2="1000"
              />

              <line
                x1="0"
                y1="500"
                x2="1000"
                y2="500"
              />

              <line
                x1="146"
                y1="146"
                x2="854"
                y2="854"
              />

              <line
                x1="854"
                y1="146"
                x2="146"
                y2="854"
              />

              <line
                x1="75"
                y1="250"
                x2="925"
                y2="750"
              />

              <line
                x1="925"
                y1="250"
                x2="75"
                y2="750"
              />

              <line
                x1="250"
                y1="75"
                x2="750"
                y2="925"
              />

              <line
                x1="750"
                y1="75"
                x2="250"
                y2="925"
              />
            </g>
          </motion.svg>

          {/* =====================================================
              ANIMATED WEB PULSE
          ====================================================== */}

          <motion.div
            animate={{
              scale: [0.2, 1.4],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "1px solid #ff2a2a",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />

          <motion.div
            animate={{
              scale: [0.1, 1.8],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: 0.8,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "1px solid rgba(255,42,42,.5)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />

          {/* =====================================================
              TOP BAR
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            style={{
              position: "absolute",
              top: "30px",
              left: "35px",
              right: "35px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 10,
              fontFamily: "monospace",
              fontSize: "9px",
              letterSpacing: "2px",
            }}
          >
            <span style={{ color: "#555" }}>
              GOWTHAM / 2026
            </span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#666",
              }}
            >
              <motion.span
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#ff2a2a",
                  boxShadow: "0 0 12px #ff2a2a",
                }}
              />

              SYSTEM ONLINE
            </div>
          </motion.div>

          {/* =====================================================
              CENTER CONTENT
          ====================================================== */}

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              zIndex: 5,
              textAlign: "center",
            }}
          >
            {/* =================================================
                GK LOGO CENTER
            ================================================== */}

            <motion.div
              initial={{
                scale: 0,
                rotate: -180,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.1,
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
              style={{
                position: "relative",
                width: "100px",
                height: "100px",
                marginBottom: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Outer rotating circle */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "1px solid #ff2a2a",
                  borderTopColor: "transparent",
                  borderLeftColor: "transparent",
                  boxShadow:
                    "0 0 25px rgba(255,42,42,.2)",
                }}
              />

              {/* Inner rotating circle */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  inset: "9px",
                  borderRadius: "50%",
                  border:
                    "1px dashed rgba(255,42,42,.4)",
                }}
              />

              {/* Soft glow */}

              <motion.div
                animate={{
                  opacity: [0.12, 0.35, 0.12],
                  scale: [0.9, 1.08, 0.9],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  width: "65px",
                  height: "65px",
                  borderRadius: "50%",
                  background: "#ff2a2a",
                  filter: "blur(22px)",
                }}
              />

              {/* =================================================
                  YOUR GK LOGO
              ================================================== */}

              <motion.img
                src="/gk-logo.png"
                alt="GK Logo"
                initial={{
                  scale: 0.5,
                  opacity: 0,
                  filter: "blur(8px)",
                }}
                animate={{
                  scale: [0.5, 1.08, 1],
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 1.15,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  position: "relative",
                  width: "68px",
                  height: "68px",
                  objectFit: "contain",
                  zIndex: 5,
                  filter:
                    "drop-shadow(0 0 14px rgba(255,42,42,.4))",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </motion.div>

            {/* =================================================
                NAME REVEAL
            ================================================== */}

            <div
              style={{
                overflow: "hidden",
                position: "relative",
              }}
            >
              <motion.h1
                initial={{
                  y: 120,
                  opacity: 0,
                  filter: "blur(12px)",
                }}
                animate={
                  showName
                    ? {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  margin: 0,
                  fontSize:
                    "clamp(5px, 10vw, 130px)",
                  lineHeight: 0.8,
                  fontWeight: 900,
                  letterSpacing: "-8px",
                }}
              >
                GOWTHAM 
                <span
                  style={{
                    color: "#ff2a2a",
                  }}
                >
                _KUMAR_
                </span>
              </motion.h1>

              {/* subtle name highlight */}

              <motion.div
                initial={{
                  left: "-30%",
                }}
                animate={{
                  left: "130%",
                }}
                transition={{
                  duration: 1.2,
                  delay: 1.1,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  width: "20%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,.22), transparent)",
                  transform: "skewX(-20deg)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* =================================================
                ROLE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.45,
                duration: 0.6,
              }}
              style={{
                marginTop: "25px",
                fontFamily: "monospace",
                fontSize: "10px",
                letterSpacing: "4px",
                color: "#777",
              }}
            >
              &lt;
              <span
                style={{
                  color: "#ff2a2a",
                }}
              >
                FULL_STACK_DEVELOPER
              </span>
              /&gt;
            </motion.div>

            {/* =================================================
                STATUS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.8,
              }}
              style={{
                marginTop: "38px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "monospace",
                fontSize: "8px",
                letterSpacing: "2px",
                color: "#555",
              }}
            >
              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                style={{
                  width: "5px",
                  height: "5px",
                  background: "#ff2a2a",
                }}
              />

              {status}
            </motion.div>
          </div>

          {/* =====================================================
              SIDE DATA
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.4,
            }}
            style={{
              position: "absolute",
              left: "35px",
              top: "50%",
              transform: "translateY(-50%)",
              writingMode: "vertical-rl",
              color: "#333",
              fontFamily: "monospace",
              fontSize: "7px",
              letterSpacing: "3px",
            }}
            className="side-data"
          >
            CODE • DESIGN • EXPERIENCE
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.6,
            }}
            style={{
              position: "absolute",
              right: "35px",
              top: "50%",
              transform: "translateY(-50%)",
              writingMode: "vertical-rl",
              color: "#333",
              fontFamily: "monospace",
              fontSize: "7px",
              letterSpacing: "3px",
            }}
            className="side-data"
          >
            CREATIVE DEVELOPMENT
          </motion.div>

          {/* =====================================================
              PROGRESS
          ====================================================== */}

          <div
            className="preloader-progress"
            style={{
              position: "absolute",
              left: "35px",
              right: "35px",
              bottom: "35px",
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                fontFamily: "monospace",
                fontSize: "8px",
                letterSpacing: "2px",
              }}
            >
              <span
                style={{
                  color: "#444",
                }}
              >
                LOADING PORTFOLIO
              </span>

              <motion.span
                key={progress}
                initial={{
                  opacity: 0.5,
                }}
                animate={{
                  opacity: 1,
                }}
                style={{
                  color: "#ff2a2a",
                }}
              >
                {String(progress).padStart(3, "0")}%
              </motion.span>
            </div>

            {/* progress track */}

            <div
              style={{
                position: "relative",
                height: "2px",
                background: "#202020",
              }}
            >
              <motion.div
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.2,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  height: "100%",
                  left: 0,
                  top: 0,
                  background:
                    "linear-gradient(90deg, #6d1010, #ff2a2a)",
                  boxShadow:
                    "0 0 15px rgba(255,42,42,.8)",
                }}
              />

              {/* progress point */}

              <motion.div
                animate={{
                  left: `${progress}%`,
                  opacity: progress > 0 ? 1 : 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  top: "-4px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#ff2a2a",
                  boxShadow:
                    "0 0 12px #ff2a2a",
                  transform: "translateX(-50%)",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "9px",
                fontFamily: "monospace",
                fontSize: "7px",
                color: "#292929",
                letterSpacing: "1.5px",
              }}
            >
              <span>SECURE CONNECTION</span>
              <span>BUILD 01.2026</span>
            </div>
          </div>

          {/* =====================================================
              CORNERS
          ====================================================== */}

          <div className="corner tl" />
          <div className="corner tr" />
          <div className="corner bl" />
          <div className="corner br" />

          {/* =====================================================
              FINAL LOGO GLOW
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={
              progress === 100
                ? {
                    opacity: [0, 0.8, 0],
                    scale: [0.8, 1.15, 1.35],
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,42,42,.35), transparent 70%)",
              filter: "blur(20px)",
              transform: "translate(-50%, -50%)",
              zIndex: 15,
              pointerEvents: "none",
            }}
          />

          {/* =====================================================
              MOBILE
          ====================================================== */}

          <style>{`
            .corner {
              position: absolute;
              width: 30px;
              height: 30px;
              opacity: .5;
            }

            .tl {
              top: 22px;
              left: 22px;
              border-top: 1px solid #ff2a2a;
              border-left: 1px solid #ff2a2a;
            }

            .tr {
              top: 22px;
              right: 22px;
              border-top: 1px solid #ff2a2a;
              border-right: 1px solid #ff2a2a;
            }

            .bl {
              bottom: 22px;
              left: 22px;
              border-bottom: 1px solid #ff2a2a;
              border-left: 1px solid #ff2a2a;
            }

            .br {
              bottom: 22px;
              right: 22px;
              border-bottom: 1px solid #ff2a2a;
              border-right: 1px solid #ff2a2a;
            }

            @media (max-width: 700px) {

              .side-data {
                display: none !important;
              }

              .preloader-progress {
                left: 20px !important;
                right: 20px !important;
                bottom: 25px !important;
              }

              .preloader-progress
                > div:last-child {
                font-size: 6px !important;
              }

              .corner {
                width: 20px !important;
                height: 20px !important;
              }

              .tl {
                top: 17px !important;
                left: 17px !important;
              }

              .tr {
                top: 17px !important;
                right: 17px !important;
              }

              .bl {
                bottom: 17px !important;
                left: 17px !important;
              }

              .br {
                bottom: 17px !important;
                right: 17px !important;
              }

              /* smaller center logo on mobile */

              .preloader-progress {
                bottom: 25px !important;
              }
            }

            @media (max-width: 450px) {

              .preloader-progress {
                bottom: 20px !important;
              }

              .preloader-progress
                > div:last-child {
                display: none;
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}