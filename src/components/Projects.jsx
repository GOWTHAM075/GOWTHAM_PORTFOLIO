import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "DHAAN FOODS",
    category: "E-COMMERCE / FULL STACK",
    description:
      "A modern food e-commerce platform with product browsing, cart, checkout, order processing and customer tracking.",
    tech: ["React", "JavaScript", "Node.js", "API"],
    image: "/projects/dhaan-foods.png",
    link: "https://dhaanfoods.com",
    featured: true,
  },
  {
    number: "02",
    title: "JOB PORTAL",
    category: "FULL STACK / WEB APPLICATION",
    description:
      "A responsive job portal designed for connecting candidates with job opportunities through a clean and modern interface.",
    tech: ["React", "JavaScript", "Node.js"],
    image: "/projects/job-portal.png",
    link: "#",
    featured: false,
  },
  {
    number: "03",
    title: "PORTFOLIO",
    category: "WEB DEVELOPMENT",
    description:
      "A highly interactive developer portfolio designed around a bold dark interface with motion and custom visual elements.",
    tech: ["React", "Vite", "Framer Motion"],
    image: "/projects/portfolio.png",
    link: "#",
    featured: false,
  },
];

const ProjectImage = ({ project }) => {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      style={{
        position: "relative",
        width: "100%",
        height: "260px",
        overflow: "hidden",
        background: "#090909",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        variants={{
          rest: {
            scale: 1,
          },
          hover: {
            scale: 1.04,
          },
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />

      {/* Dark overlay */}
      <motion.div
        variants={{
          rest: {
            opacity: 0.08,
          },
          hover: {
            opacity: 0.18,
          },
        }}
        transition={{
          duration: 0.4,
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: "#000",
          pointerEvents: "none",
        }}
      />

      {/* Red scan line */}
      <motion.div
        variants={{
          rest: {
            top: "-5%",
            opacity: 0,
          },
          hover: {
            top: "105%",
            opacity: 0.8,
          },
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          height: "2px",
          background: "#ff2a2a",
          boxShadow: "0 0 15px rgba(255,42,42,.8)",
          pointerEvents: "none",
        }}
      />

      {/* Top left corner */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderTop: "2px solid #ff2a2a",
          borderLeft: "2px solid #ff2a2a",
          pointerEvents: "none",
        }}
      />

      {/* Bottom right corner */}
      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: 32,
          height: 32,
          borderRight: "2px solid #ff2a2a",
          borderBottom: "2px solid #ff2a2a",
          pointerEvents: "none",
        }}
      />

      {/* Project number */}
      <div
        style={{
          position: "absolute",
          top: 16,
          right: 18,
          padding: "6px 9px",
          background: "rgba(0,0,0,.7)",
          border: "1px solid rgba(255,42,42,.35)",
          color: "#fff",
          fontFamily: "monospace",
          fontSize: "9px",
          letterSpacing: "2px",
        }}
      >
        {project.number}
      </div>

      {/* View indicator */}
      <motion.div
        variants={{
          rest: {
            opacity: 0,
            y: 10,
          },
          hover: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.3,
        }}
        style={{
          position: "absolute",
          left: 18,
          bottom: 18,
          padding: "7px 11px",
          background: "#ff2a2a",
          color: "#000",
          fontFamily: "monospace",
          fontSize: "8px",
          fontWeight: 700,
          letterSpacing: "1px",
        }}
      >
        VIEW PROJECT ↗
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#111111",
        color: "#ffffff",
        padding: "110px 8%",
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
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "45px 45px",
          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          RED GLOW
          ===================================================== */}

      <motion.div
        animate={{
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          right: "-250px",
          top: "100px",
          borderRadius: "50%",
          background: "#ff2a2a",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          WEB
          ===================================================== */}

      <motion.svg
        viewBox="0 0 500 500"
        style={{
          position: "absolute",
          right: "-50px",
          top: 0,
          width: "500px",
          height: "500px",
          opacity: 0.1,
          pointerEvents: "none",
        }}
        animate={{
          rotate: [0, 3, 0, -3, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <g
          fill="none"
          stroke="#ff2a2a"
          strokeWidth="1"
        >
          <path d="M500 0 L250 500" />
          <path d="M500 0 L350 500" />
          <path d="M500 0 L450 500" />
          <path d="M500 0 L500 500" />

          <path d="M450 40 Q470 60 500 70" />
          <path d="M400 80 Q450 120 500 130" />
          <path d="M350 130 Q430 180 500 195" />
          <path d="M300 190 Q410 250 500 270" />
          <path d="M250 260 Q380 330 500 350" />
          <path d="M200 340 Q350 410 500 430" />
        </g>
      </motion.svg>

      {/* =====================================================
          HEADER
          ===================================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "40px",
          marginBottom: "55px",
        }}
      >
        <div>
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            style={{
              color: "#777777",
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "4px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                color: "#ff2a2a",
              }}
            >
              04
            </span>

            {" / "}

            SELECTED WORK
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            style={{
              margin: 0,
              fontSize: "clamp(55px, 8vw, 100px)",
              lineHeight: 0.85,
              fontWeight: 900,
              letterSpacing: "-6px",
            }}
          >
            PROJECT
            <span
              style={{
                color: "#ff2a2a",
              }}
            >
              S
            </span>
          </motion.h2>

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 110,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            style={{
              height: "3px",
              background: "#ff2a2a",
              marginTop: "22px",
            }}
          />
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            maxWidth: "320px",
            color: "#666666",
            fontFamily: "monospace",
            fontSize: "11px",
            lineHeight: 1.8,
            letterSpacing: "1px",
          }}
        >
          A selection of digital products,
          experiments and full-stack applications
          I've built.
        </motion.div>
      </div>

      {/* =====================================================
          PROJECTS
          ===================================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
            }}
            whileHover={{
              x: 5,
            }}
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns:
                "minmax(350px, 1.05fr) minmax(300px, .95fr)",
              gap: "45px",
              alignItems: "center",
              padding: "22px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.018)",
              transition:
                "border-color .3s ease, background .3s ease",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.borderColor =
                "rgba(255,42,42,.55)";

              event.currentTarget.style.background =
                "rgba(255,42,42,.025)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.borderColor =
                "rgba(255,255,255,0.1)";

              event.currentTarget.style.background =
                "rgba(255,255,255,0.018)";
            }}
          >
            {/* IMAGE */}

            <ProjectImage project={project} />

            {/* CONTENT */}

            <div
              style={{
                position: "relative",
                minWidth: 0,
                padding: "10px 15px 10px 0",
              }}
            >
              {/* Number */}

              <div
                style={{
                  color: "#ff2a2a",
                  fontFamily: "monospace",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  marginBottom: "12px",
                }}
              >
                {project.number} /
              </div>

              {/* Category */}

              <div
                style={{
                  color: "#666",
                  fontFamily: "monospace",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  marginBottom: "15px",
                }}
              >
                {project.category}
              </div>

              {/* Title */}

              <h3
                style={{
                  margin: 0,
                  fontSize:
                    "clamp(30px, 4vw, 55px)",
                  lineHeight: 0.9,
                  fontWeight: 900,
                  letterSpacing: "-3px",
                }}
              >
                {project.title}
              </h3>

              {/* Red line */}

              <div
                style={{
                  width: "40px",
                  height: "3px",
                  background: "#ff2a2a",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              />

              {/* Description */}

              <p
                style={{
                  margin: 0,
                  maxWidth: "520px",
                  color: "#858585",
                  fontSize: "13px",
                  lineHeight: 1.7,
                }}
              >
                {project.description}
              </p>

              {/* TECH */}

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginTop: "20px",
                }}
              >
                {project.tech.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "6px 9px",
                      border:
                        "1px solid rgba(255,42,42,.3)",
                      color: "#999",
                      fontFamily: "monospace",
                      fontSize: "8px",
                      letterSpacing: "1px",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* LINK */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  marginTop: "25px",
                }}
              >
                {project.link !== "#" ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      x: 5,
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#fff",
                      textDecoration: "none",
                      fontFamily: "monospace",
                      fontSize: "10px",
                      letterSpacing: "1px",
                    }}
                  >
                    LIVE PROJECT
                    <span
                      style={{
                        color: "#ff2a2a",
                        fontSize: "16px",
                      }}
                    >
                      ↗
                    </span>
                  </motion.a>
                ) : (
                  <span
                    style={{
                      color: "#555",
                      fontFamily: "monospace",
                      fontSize: "9px",
                      letterSpacing: "1px",
                    }}
                  >
                    PROJECT PREVIEW
                  </span>
                )}
              </div>

              {/* Arrow */}

              <motion.div
                whileHover={{
                  rotate: 45,
                  scale: 1.1,
                }}
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  width: "42px",
                  height: "42px",
                  border:
                    "1px solid rgba(255,42,42,.45)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ff2a2a",
                  fontSize: "19px",
                  cursor: "pointer",
                }}
              >
                ↗
              </motion.div>
            </div>

            {/* Bottom red line */}

            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: project.featured
                  ? "30%"
                  : "15%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                height: "2px",
                background: "#ff2a2a",
              }}
            />
          </motion.article>
        ))}
      </div>

      {/* =====================================================
          BOTTOM
          ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
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
          marginTop: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            color: "#444",
            fontFamily: "monospace",
            fontSize: "9px",
            letterSpacing: "3px",
          }}
        >
          MORE PROJECTS COMING SOON
        </div>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#777",
            textDecoration: "none",
            fontFamily: "monospace",
            fontSize: "9px",
            letterSpacing: "2px",
          }}
        >
          VIEW GITHUB ↗
        </a>
      </motion.div>

      {/* =====================================================
          RESPONSIVE
          ===================================================== */}
<style>
  {`
    @media (max-width: 900px) {
      #projects {
        padding-left: 6% !important;
        padding-right: 6% !important;
      }

      #projects article {
        grid-template-columns: 1fr !important;
        gap: 25px !important;
      }
    }

    @media (max-width: 600px) {
      #projects {
        padding-top: 75px !important;
        padding-bottom: 75px !important;
      }

      #projects h2 {
        font-size: 52px !important;
        letter-spacing: -4px !important;
      }

      #projects article {
        padding: 12px !important;
      }

      #projects article > div:first-child {
        height: 200px !important;
      }

      #projects article > div:last-child {
        padding: 5px 5px 15px !important;
      }

      #projects article h3 {
        font-size: 30px !important;
        letter-spacing: -2px !important;
      }

      #projects article p {
        font-size: 13px !important;
        line-height: 1.7 !important;
      }

      #projects article > div:last-child > div:last-child {
        margin-top: 20px !important;
      }

      #projects > div:last-child {
        flex-direction: column !important;
        align-items: flex-start !important;
      }
    }

    @media (max-width: 380px) {
      #projects h2 {
        font-size: 46px !important;
      }

      #projects article > div:first-child {
        height: 180px !important;
      }
    }
  `}
</style>
    </section>
  );
};

export default Projects;