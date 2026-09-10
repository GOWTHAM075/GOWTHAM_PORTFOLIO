import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Wrench,
  Layers,
  Code2,
} from "lucide-react";

const stackData = {
  FRONTEND: [
    {
      name: "HTML5",
      desc: "Semantic & accessible markup",
      level: "ADVANCED",
    },
    {
      name: "CSS3",
      desc: "Responsive layouts & animations",
      level: "ADVANCED",
    },
    {
      name: "JAVASCRIPT",
      desc: "Modern ES6+ development",
      level: "ADVANCED",
    },
    {
      name: "REACT.JS",
      desc: "Interactive UI development",
      level: "ADVANCED",
    },
    {
      name: "TAILWIND CSS",
      desc: "Utility-first styling",
      level: "INTERMEDIATE",
    },
  ],

  BACKEND: [
    {
      name: "NODE.JS",
      desc: "Server-side JavaScript",
      level: "ADVANCED",
    },
    {
      name: "EXPRESS.JS",
      desc: "REST API development",
      level: "ADVANCED",
    },
    {
      name: "PYTHON",
      desc: "Backend & scripting",
      level: "INTERMEDIATE",
    },
    {
      name: "JAVA",
      desc: "Application development",
      level: "INTERMEDIATE",
    },
    {
      name: "API",
      desc: "REST API integration",
      level: "ADVANCED",
    },
  ],

  DATABASE: [
    {
      name: "MONGODB",
      desc: "NoSQL database",
      level: "ADVANCED",
    },
    {
      name: "MYSQL",
      desc: "Relational database",
      level: "INTERMEDIATE",
    },
  ],

  TOOLS: [
    {
      name: "GIT",
      desc: "Version control",
      level: "ADVANCED",
    },
    {
      name: "GITHUB",
      desc: "Code collaboration",
      level: "ADVANCED",
    },
    {
      name: "VITE",
      desc: "Modern frontend tooling",
      level: "ADVANCED",
    },
    {
      name: "VS CODE",
      desc: "Development environment",
      level: "ADVANCED",
    },
  ],
};

const categories = [
  {
    name: "FRONTEND",
    icon: Monitor,
  },
  {
    name: "BACKEND",
    icon: Server,
  },
  {
    name: "DATABASE",
    icon: Database,
  },
  {
    name: "TOOLS",
    icon: Wrench,
  },
];

export default function Stack() {
  const [active, setActive] = useState("FRONTEND");

  const ActiveIcon =
    categories.find((item) => item.name === active)?.icon || Code2;

  return (
    <section
      id="stack"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "120px 40px",
        background: "#111111",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* ================= BACKGROUND GRID ================= */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.045,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          pointerEvents: "none",
        }}
      />

      {/* ================= RED GLOW ================= */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          right: "-180px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,42,42,0.14) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* ================= WEB ================= */}
      <svg
        viewBox="0 0 500 500"
        style={{
          position: "absolute",
          right: "-100px",
          top: "80px",
          width: "480px",
          height: "480px",
          opacity: 0.06,
          pointerEvents: "none",
        }}
      >
        <g
          fill="none"
          stroke="#ff2a2a"
          strokeWidth="1"
        >
          <circle cx="250" cy="250" r="55" />
          <circle cx="250" cy="250" r="110" />
          <circle cx="250" cy="250" r="165" />
          <circle cx="250" cy="250" r="220" />

          <line x1="250" y1="0" x2="250" y2="500" />
          <line x1="0" y1="250" x2="500" y2="250" />
          <line x1="70" y1="70" x2="430" y2="430" />
          <line x1="430" y1="70" x2="70" y2="430" />
        </g>
      </svg>

      {/* ================= RED SIDE LINE ================= */}
      <div
        style={{
          position: "absolute",
          left: "40px",
          top: "0",
          bottom: "0",
          width: "1px",
          background:
            "linear-gradient(transparent, #ff2a2a 20%, #ff2a2a 80%, transparent)",
          opacity: 0.7,
        }}
      />

      {/* ================= CONTENT ================= */}
      <div
        className="stack-wrapper"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1250px",
          margin: "0 auto",
          paddingLeft: "55px",
        }}
      >
        {/* ================= SECTION NUMBER ================= */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              color: "#ff2a2a",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "3px",
            }}
          >
            03
          </span>

          <div
            style={{
              width: "45px",
              height: "1px",
              background: "#ff2a2a",
            }}
          />

          <span
            style={{
              color: "#777",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "3px",
            }}
          >
            TECHNICAL STACK
          </span>
        </motion.div>

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="stack-heading"
            style={{
              margin: 0,
              fontSize: "clamp(60px, 8vw, 105px)",
              lineHeight: 0.9,
              letterSpacing: "-6px",
              fontWeight: 900,
            }}
          >
            WHAT I
            <br />
            <span style={{ color: "#ff2a2a" }}>
              WORK WITH.
            </span>
          </h2>

          <p
            className="stack-intro"
            style={{
              maxWidth: "650px",
              marginTop: "30px",
              color: "#999",
              fontSize: "16px",
              lineHeight: 1.8,
            }}
          >
            A practical collection of technologies and tools I use
            to design, develop and deliver modern web applications.
          </p>
        </motion.div>

        {/* ================= MAIN AREA ================= */}
        <div
          className="stack-main"
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: "60px",
            marginTop: "75px",
            alignItems: "start",
          }}
        >
          {/* ================= CATEGORY ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="stack-categories"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = active === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => setActive(category.name)}
                  className={`stack-category ${
                    isActive ? "active" : ""
                  }`}
                >
                  <span className="category-number">
                    0{index + 1}
                  </span>

                  <Icon size={17} />

                  <span>{category.name}</span>

                  <span className="category-arrow">
                    →
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* ================= ACTIVE STACK ================= */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="stack-active"
          >
            {/* ACTIVE HEADER */}
            <div className="stack-active-header">
              <div className="active-icon">
                <ActiveIcon size={22} />
              </div>

              <div>
                <div className="active-small">
                  CURRENT CATEGORY
                </div>

                <h3>{active}</h3>
              </div>
            </div>

            {/* SKILLS */}
            <div className="stack-skills">
              {stackData[active].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="stack-skill-card"
                >
                  <div className="skill-top">
                    <span className="skill-index">
                      0{index + 1}
                    </span>

                    <span className="skill-level">
                      {skill.level}
                    </span>
                  </div>

                  <div className="skill-name">
                    {skill.name}
                  </div>

                  <div className="skill-desc">
                    {skill.desc}
                  </div>

                  <div className="skill-line">
                    <span />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================= BOTTOM ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="stack-bottom"
        >
          <span>BUILD • CREATE • IMPROVE</span>

          <span>
            {Object.values(stackData).flat().length}+ TECHNOLOGIES
          </span>
        </motion.div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        .stack-category {
          width: 100%;
          height: 58px;
          padding: 0 15px;
          border: none;
          border-bottom: 1px solid #292929;
          background: transparent;
          color: #777;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-align: left;
          transition: all 0.25s ease;
        }

        .stack-category:hover {
          color: #fff;
          padding-left: 20px;
        }

        .stack-category.active {
          background: #ff2a2a;
          color: #fff;
          border-color: #ff2a2a;
          padding-left: 18px;
        }

        .category-number {
          font-size: 9px;
          opacity: 0.55;
          width: 20px;
        }

        .category-arrow {
          margin-left: auto;
          font-size: 16px;
          opacity: 0.5;
          transition: transform 0.25s ease;
        }

        .stack-category:hover .category-arrow,
        .stack-category.active .category-arrow {
          transform: translateX(4px);
          opacity: 1;
        }

        .stack-active {
          min-width: 0;
        }

        .stack-active-header {
          display: flex;
          align-items: center;
          gap: 18px;
          padding-bottom: 25px;
          border-bottom: 1px solid #292929;
          margin-bottom: 25px;
        }

        .active-icon {
          width: 50px;
          height: 50px;
          min-width: 50px;
          border: 1px solid #ff2a2a;
          color: #ff2a2a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .active-small {
          color: #666;
          font-size: 9px;
          letter-spacing: 2px;
          margin-bottom: 4px;
        }

        .stack-active-header h3 {
          margin: 0;
          font-size: 45px;
          line-height: 1;
          letter-spacing: -2px;
        }

        .stack-skills {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }

        .stack-skill-card {
          min-width: 0;
          min-height: 155px;
          padding: 20px;
          border: 1px solid #292929;
          background: rgba(8,8,8,0.65);
          position: relative;
          overflow: hidden;
          transition: border-color 0.25s ease,
            transform 0.25s ease,
            background 0.25s ease;
        }

        .stack-skill-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #ff2a2a;
          transition: width 0.3s ease;
        }

        .stack-skill-card:hover {
          border-color: #444;
          transform: translateY(-4px);
          background: rgba(20,20,20,0.85);
        }

        .stack-skill-card:hover::before {
          width: 100%;
        }

        .skill-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .skill-index {
          color: #555;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .skill-level {
          color: #ff2a2a;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .skill-name {
          font-size: 23px;
          font-weight: 900;
          letter-spacing: -0.5px;
          margin-bottom: 7px;
          word-break: break-word;
        }

        .skill-desc {
          color: #666;
          font-size: 11px;
          line-height: 1.5;
        }

        .skill-line {
          position: absolute;
          bottom: 18px;
          left: 20px;
          right: 20px;
          height: 1px;
          background: #242424;
          overflow: hidden;
        }

        .skill-line span {
          display: block;
          width: 35%;
          height: 100%;
          background: #ff2a2a;
        }

        .stack-bottom {
          margin-top: 70px;
          padding-top: 22px;
          border-top: 1px solid #292929;
          display: flex;
          justify-content: space-between;
          color: #555;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          #stack {
            padding: 95px 25px !important;
          }

          .stack-wrapper {
            padding-left: 35px !important;
          }

          .stack-main {
            grid-template-columns: 210px 1fr !important;
            gap: 35px !important;
          }

          .stack-skills {
            grid-template-columns: 1fr !important;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          #stack {
            padding: 80px 15px !important;
          }

          #stack > div[style*="left: 40px"] {
            left: 15px !important;
          }

          .stack-wrapper {
            padding-left: 20px !important;
          }

          .stack-heading {
            font-size: 52px !important;
            letter-spacing: -4px !important;
          }

          .stack-intro {
            font-size: 14px !important;
            line-height: 1.7 !important;
            margin-top: 22px !important;
          }

          .stack-main {
            display: block !important;
            margin-top: 45px !important;
          }

          /*
             Mobile category selector
          */
          .stack-categories {
            display: flex;
            overflow-x: auto;
            gap: 8px;
            padding-bottom: 10px;
            margin: 0 -5px 35px;
            scrollbar-width: none;
          }

          .stack-categories::-webkit-scrollbar {
            display: none;
          }

          .stack-category {
            width: auto !important;
            min-width: max-content;
            height: 46px !important;
            padding: 0 14px !important;
            border: 1px solid #292929 !important;
            background: #0c0c0c !important;
            gap: 8px !important;
            font-size: 9px !important;
            letter-spacing: 1.2px !important;
            white-space: nowrap;
          }

          .stack-category:hover {
            padding-left: 14px !important;
          }

          .stack-category.active {
            background: #ff2a2a !important;
            border-color: #ff2a2a !important;
          }

          .category-number {
            display: none;
          }

          .category-arrow {
            display: none;
          }

          /*
             Active category
          */
          .stack-active-header {
            gap: 13px;
            padding-bottom: 20px;
            margin-bottom: 18px;
          }

          .active-icon {
            width: 43px;
            height: 43px;
            min-width: 43px;
          }

          .active-small {
            font-size: 8px;
            letter-spacing: 1.5px;
          }

          .stack-active-header h3 {
            font-size: 34px !important;
            letter-spacing: -1px;
          }

          /*
             Mobile cards
          */
          .stack-skills {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 10px !important;
          }

          .stack-skill-card {
            min-height: 140px !important;
            padding: 15px !important;
          }

          .skill-top {
            margin-bottom: 22px;
          }

          .skill-level {
            font-size: 7px;
            letter-spacing: 1px;
          }

          .skill-name {
            font-size: 17px !important;
            letter-spacing: -0.3px;
            line-height: 1.1;
          }

          .skill-desc {
            font-size: 9px;
            line-height: 1.4;
          }

          .skill-line {
            bottom: 13px;
            left: 15px;
            right: 15px;
          }

          .stack-bottom {
            margin-top: 50px;
            flex-direction: column;
            gap: 10px;
            line-height: 1.5;
          }
        }

        /* ================= SMALL PHONES ================= */

        @media (max-width: 380px) {
          #stack {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }

          .stack-wrapper {
            padding-left: 16px !important;
          }

          .stack-heading {
            font-size: 45px !important;
            letter-spacing: -3px !important;
          }

          .stack-skills {
            grid-template-columns: 1fr !important;
          }

          .stack-skill-card {
            min-height: 125px !important;
          }

          .skill-top {
            margin-bottom: 18px;
          }

          .skill-name {
            font-size: 20px !important;
          }

          .skill-desc {
            font-size: 10px;
          }
        }
      `}</style>
    </section>
  );
}