import React from "react";
import { motion } from "framer-motion";

const skillsTop = [
  "HTML5",
  "CSS3",
  "JAVASCRIPT",
  "REACT.JS",
  "NODE.JS",
  "EXPRESS.JS",
  "MONGODB",
];

const skillsBottom = [
  "MYSQL",
  "TAILWIND CSS",
  "PYTHON",
  "JAVA",
  "C / C++",
  "GIT",
  "UI / UX",
];

const SkillCard = ({ name, index }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        borderColor: "#ff2a2a",
      }}
      style={{
        position: "relative",
        flex: "0 0 180px",
        height: 90,
        background: "#0b0b0b",
        border: "1px solid #222",
        padding: "18px 20px",
        overflow: "hidden",
        transition: "border-color .25s ease",
      }}
    >
      {/* Top red line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 38,
          height: 3,
          background: "#ff2a2a",
        }}
      />

      {/* Number */}
      <span
        style={{
          position: "absolute",
          top: 12,
          right: 14,
          fontSize: 8,
          letterSpacing: "2px",
          color: "#444",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Skill */}
      <div
        style={{
          position: "absolute",
          left: 20,
          bottom: 27,
          fontSize: 18,
          fontWeight: 900,
          color: "#fff",
          whiteSpace: "nowrap",
          letterSpacing: "-0.5px",
        }}
      >
        {name}
      </div>

      {/* Label */}
      <div
        style={{
          position: "absolute",
          left: 20,
          bottom: 11,
          fontSize: 6,
          letterSpacing: "3px",
          color: "#555",
        }}
      >
        TECHNOLOGY
      </div>

      {/* Bottom corner */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: 12,
          height: 12,
          borderLeft: "1px solid #ff2a2a",
          borderBottom: "1px solid #ff2a2a",
        }}
      />
    </motion.div>
  );
};

const TrainRow = ({ skills, reverse = false }) => {
  const duplicated = [...skills, ...skills];

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        borderTop: "1px solid #1b1b1b",
        borderBottom: "1px solid #1b1b1b",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          width: "max-content",
          gap: 3,
        }}
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: reverse ? 30 : 26,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicated.map((skill, index) => (
          <SkillCard
            key={`${skill}-${index}`}
            name={skill}
            index={index % skills.length}
          />
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        position: "relative",
        background: "#080808",
        color: "#fff",
        padding: "85px 0",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.035,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: "65px 65px",
        }}
      />

      {/* Web */}
      <motion.svg
        viewBox="0 0 500 500"
        style={{
          position: "absolute",
          right: "-170px",
          top: 50,
          width: 450,
          height: 450,
          opacity: 0.07,
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
        {[70, 120, 170, 220].map((r) => (
          <circle
            key={r}
            cx="250"
            cy="250"
            r={r}
            fill="none"
            stroke="#fff"
            strokeWidth="1"
          />
        ))}

        {[0, 30, 60, 90, 120, 150].map((angle) => {
          const rad = (angle * Math.PI) / 180;

          return (
            <line
              key={angle}
              x1="250"
              y1="250"
              x2={250 + Math.cos(rad) * 250}
              y2={250 + Math.sin(rad) * 250}
              stroke="#fff"
              strokeWidth="1"
            />
          );
        })}
      </motion.svg>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <div
          style={{
            width: "88%",
            maxWidth: 1400,
            margin: "0 auto 55px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              fontSize: 9,
              letterSpacing: "3px",
              color: "#666",
            }}
          >
            <span style={{ color: "#ff2a2a" }}>03</span>
            <span>/</span>
            <span>TECHNICAL ARSENAL</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              margin: "18px 0 0",
              fontSize: "clamp(48px, 7vw, 92px)",
              lineHeight: 0.85,
              fontWeight: 900,
              letterSpacing: "-5px",
            }}
          >
            WHAT I{" "}
            <span
              style={{
                color: "#ff2a2a",
                textShadow: "0 0 20px rgba(255,42,42,.25)",
              }}
            >
              WORK WITH
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 110 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              height: 3,
              background: "#ff2a2a",
              marginTop: 22,
            }}
          />
        </div>

        {/* Frontend */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: 12,
              top: 10,
              zIndex: 5,
              color: "#ff2a2a",
              fontSize: 7,
              letterSpacing: "2px",
              writingMode: "vertical-rl",
            }}
          >
            FRONTEND
          </div>

          <TrainRow skills={skillsTop} />
        </div>

        {/* Middle line */}
        <div
          style={{
            height: 30,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "5%",
              right: "5%",
              top: "50%",
              height: 1,
              background: "#171717",
            }}
          />

          <motion.div
            animate={{
              x: ["0vw", "100vw"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              top: "calc(50% - 1px)",
              width: 80,
              height: 2,
              background: "#ff2a2a",
              boxShadow: "0 0 10px rgba(255,42,42,.6)",
            }}
          />
        </div>

        {/* Backend */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              right: 12,
              top: 10,
              zIndex: 5,
              color: "#ff2a2a",
              fontSize: 7,
              letterSpacing: "2px",
              writingMode: "vertical-rl",
            }}
          >
            BACKEND
          </div>

          <TrainRow skills={skillsBottom} reverse />
        </div>

        {/* Bottom info */}
        <div
          style={{
            width: "88%",
            maxWidth: 1400,
            margin: "25px auto 0",
            display: "flex",
            justifyContent: "space-between",
            fontSize: 8,
            letterSpacing: "2px",
            color: "#444",
          }}
        >
          <span>FRONTEND / BACKEND / DATABASE / TOOLS</span>
          <span>14 TECHNOLOGIES</span>
        </div>
      </div>

      {/* Mobile */}
      <style>
        {`
          @media (max-width: 700px) {
            #skills {
              padding: 65px 0 !important;
            }

            #skills h2 {
              font-size: 45px !important;
              letter-spacing: -3px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;