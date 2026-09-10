import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MouseWebTrail = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      setPoints((prev) => [
        ...prev.slice(-8),
        {
          x: e.clientX,
          y: e.clientY,
          id: Date.now() + Math.random(),
        },
      ]);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 999,
      }}
    >
      <AnimatePresence>
        {points.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{
              opacity: 0,
              scale: 0.3,
            }}
            animate={{
              opacity: index / points.length,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            style={{
              position: "absolute",
              left: point.x,
              top: point.y,
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "#ff2a2a",
              boxShadow: "0 0 10px rgba(255,42,42,0.7)",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MouseWebTrail;