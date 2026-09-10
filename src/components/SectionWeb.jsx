import React from "react";
import { motion } from "framer-motion";

const SectionWeb = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "140px",
        width: "100%",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <motion.svg
        viewBox="0 0 1000 140"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <motion.path
          d="M0 70 Q250 10 500 70 T1000 70"
          fill="none"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1"
          strokeDasharray="8 10"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
          viewport={{ once: true }}
        />

        <motion.path
          d="M0 70 Q250 130 500 70 T1000 70"
          fill="none"
          stroke="rgba(255,42,42,0.35)"
          strokeWidth="1"
          strokeDasharray="5 12"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
        />

        <motion.circle
          cx="500"
          cy="70"
          r="3"
          fill="#ff2a2a"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.svg>
    </div>
  );
};

export default SectionWeb;