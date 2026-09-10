import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const Hero = ({ active = true }) => {
  // ==============================
  // MOUSE PARALLAX
  // ==============================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  const imageX = useTransform(
    smoothX,
    [-1, 1],
    [-15, 15]
  );

  const imageY = useTransform(
    smoothY,
    [-1, 1],
    [-12, 12]
  );

  const handleMouseMove = (e) => {
    const x =
      (e.clientX / window.innerWidth) * 2 - 1;

    const y =
      (e.clientY / window.innerHeight) * 2 - 1;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // ==============================
  // TEXT ANIMATIONS
  // ==============================

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const fadeUpVariants = {
    initial: {
      y: 40,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const profileVariants = {
    initial: {
      opacity: 0,
      y: 70,
      scale: 0.92,
    },

    animate: {
      opacity: 1,
      y: 0,
      scale: 1,

      transition: {
        duration: 1.1,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen overflow-hidden bg-black flex items-center"
    >

      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className="absolute inset-0 bg-black" />

      {/* Red atmospheric glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[5%] top-[15%] w-[500px] h-[500px] rounded-full bg-[#FF2A2A] blur-[150px] pointer-events-none"
      />

      {/* Bottom red glow */}

      <motion.div
        animate={{
          opacity: [0.04, 0.09, 0.04],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-250px] left-[25%] w-[700px] h-[400px] rounded-full bg-[#FF2A2A] blur-[150px] pointer-events-none"
      />

      {/* ==================================================
          GRID
      ================================================== */}

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* ==================================================
          LEFT TOP WEB
      ================================================== */}

      <motion.svg
        viewBox="0 0 500 500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.13 }}
        transition={{ duration: 2 }}
        className="absolute left-[-180px] top-[-160px] w-[500px] h-[500px] pointer-events-none"
      >
        <g
          fill="none"
          stroke="#FF2A2A"
          strokeWidth="1"
        >
          <path d="M250 250 L0 0" />
          <path d="M250 250 L250 0" />
          <path d="M250 250 L500 0" />
          <path d="M250 250 L0 250" />

          <circle
            cx="250"
            cy="250"
            r="80"
          />

          <circle
            cx="250"
            cy="250"
            r="150"
          />

          <circle
            cx="250"
            cy="250"
            r="220"
          />
        </g>
      </motion.svg>

      {/* ==================================================
          RIGHT WEB
      ================================================== */}

      <motion.svg
        viewBox="0 0 600 600"
        animate={{
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] top-[30px] w-[650px] h-[650px] opacity-[0.16] pointer-events-none"
      >
        <g
          fill="none"
          stroke="#FF2A2A"
          strokeWidth="1"
        >
          <circle
            cx="300"
            cy="300"
            r="100"
          />

          <circle
            cx="300"
            cy="300"
            r="180"
          />

          <circle
            cx="300"
            cy="300"
            r="260"
          />

          <circle
            cx="300"
            cy="300"
            r="330"
          />

          <path d="M300 0 L300 600" />
          <path d="M0 300 L600 300" />

          <path d="M70 70 L530 530" />
          <path d="M530 70 L70 530" />

          <path d="M300 300 L600 100" />
          <path d="M300 300 L600 500" />
          <path d="M300 300 L0 100" />
          <path d="M300 300 L0 500" />
        </g>
      </motion.svg>

      {/* ==================================================
          FLOATING PARTICLES
      ================================================== */}

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[8%] top-[28%] w-2 h-2 rounded-full bg-[#FF2A2A] shadow-[0_0_20px_#FF2A2A]"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute left-[43%] top-[18%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_15px_white]"
      />

      <motion.div
        animate={{
          y: [0, -12, 0],
          opacity: [0.1, 0.7, 0.1],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute right-[30%] bottom-[25%] w-1.5 h-1.5 rounded-full bg-[#FF2A2A]"
      />

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">

        {/* ==================================================
            LEFT CONTENT
        ================================================== */}

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={active ? "animate" : "initial"}
          className="lg:col-span-7 flex flex-col justify-center"
        >

          {/* SMALL TITLE */}

          <motion.div
            variants={fadeUpVariants}
            className="flex items-center gap-4 mb-5"
          >
            <span className="w-10 h-[2px] bg-[#FF2A2A]" />

            <h2 className="text-[#FF2A2A] font-mono tracking-[0.2em] text-xs md:text-sm font-semibold uppercase">
              CREATIVE DEVELOPMENT AGENCY
            </h2>
          </motion.div>

          {/* ==================================================
              HERO NAME
          ================================================== */}

          <motion.h1
            variants={fadeUpVariants}
            className="font-display font-black uppercase select-none mb-7"
          >

            {/* HI I'M */}

            <span className="block text-white text-5xl sm:text-6xl md:text-[76px] leading-[0.9] tracking-tighter">
              HI, I'M
            </span>

            {/* GOWTHAM */}

            <motion.span
              whileHover={{
                x: 8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="block text-[#FF2A2A] text-5xl sm:text-6xl md:text-[76px] leading-[0.9] tracking-tighter cursor-default"
            >
              GOWTHAM
            </motion.span>

            {/* FULL STACK */}

            <span className="block text-white text-5xl sm:text-6xl md:text-[76px] leading-[0.9] tracking-tighter">
              FULL STACK
            </span>

            {/* DEVELOPER */}

            <span className="relative inline-block text-white text-5xl sm:text-6xl md:text-[76px] leading-[0.9] tracking-tighter">

              DEVELOPER

              <motion.span
                initial={{
                  width: 0,
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 1,
                  delay: 1.2,
                }}
                className="absolute left-0 bottom-[-10px] h-[3px] bg-[#FF2A2A]"
              />

            </span>

          </motion.h1>

          {/* ==================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            variants={fadeUpVariants}
            className="text-white/65 text-base md:text-lg font-light max-w-xl mb-9 leading-relaxed"
          >
            Crafting modern web applications with
            React.js, Node.js, and Tailwind CSS.
            Focused on peak performance, clean design
            engineering, and cinematic interactions.
          </motion.p>

          {/* ==================================================
              BUTTONS
          ================================================== */}

          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap gap-4 items-center"
          >

            {/* VIEW WORK */}

            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full select-none transition-all duration-300 shadow-xl shadow-white/5"
            >
              View My Work

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            {/* CONTACT */}

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white font-medium rounded-full border border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              Contact Me

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

          </motion.div>

        </motion.div>

        {/* ==================================================
            RIGHT PROFILE
        ================================================== */}

        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">

          <motion.div
            variants={profileVariants}
            initial="initial"
            animate={active ? "animate" : "initial"}
            className="relative w-[270px] sm:w-[330px] md:w-[370px] lg:w-[410px]"
          >

            {/* OUTER ROTATING RING */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-18px] rounded-[25px] border border-[#FF2A2A]/30"
            />

            {/* SECOND ROTATING RING */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-8px] rounded-[25px] border border-white/10"
            />

            {/* GLOW */}

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[#FF2A2A] blur-[80px] opacity-20 pointer-events-none"
            />

            {/* ==================================================
                IMAGE PARALLAX
            ================================================== */}

            <motion.div
              style={{
                x: imageX,
                y: imageY,
              }}
              className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-white/10 bg-[#080808] shadow-2xl"
            >

              <motion.img
                src="/profile.jpg"
                alt="Gowtham"
                draggable="false"
                animate={{
                  y: [0, -5, 0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-full h-full object-cover object-top select-none"
              />

              {/* DARK GRADIENT */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none" />

              {/* RED LIGHT */}

              <motion.div
                animate={{
                  opacity: [0.15, 0.5, 0.15],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-0 w-[3px] h-full bg-[#FF2A2A] shadow-[0_0_25px_#FF2A2A]"
              />

              {/* PROFILE INFORMATION */}

              <div className="absolute left-6 right-6 bottom-6 flex items-end justify-between">

                <div>

                  <p className="font-mono text-[9px] tracking-[0.3em] text-white/45 uppercase mb-1">
                    FULL STACK DEVELOPER
                  </p>

                  <h3 className="font-display font-black text-2xl text-white uppercase">
                    GOWTHAM
                    <span className="text-[#FF2A2A]">
                      .
                    </span>
                  </h3>

                </div>

                {/* STATUS */}

                <div className="flex items-center gap-2">

                  <span className="w-2 h-2 rounded-full bg-[#FF2A2A] shadow-[0_0_15px_#FF2A2A]" />

                  <span className="font-mono text-[8px] text-white/50 tracking-widest">
                    AVAILABLE
                  </span>

                </div>

              </div>

            </motion.div>

            {/* ==================================================
                CORNER DETAILS
            ================================================== */}

            <div className="absolute -top-5 -left-5 w-10 h-10 border-t-2 border-l-2 border-[#FF2A2A]" />

            <div className="absolute -bottom-5 -right-5 w-10 h-10 border-b-2 border-r-2 border-[#FF2A2A]" />

            {/* CROSSHAIR */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -right-12 top-1/2 hidden md:block"
            >
              <div className="relative w-8 h-8">

                <div className="absolute left-1/2 top-0 w-[1px] h-full bg-[#FF2A2A]/60" />

                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#FF2A2A]/60" />

                <div className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-[#FF2A2A] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#FF2A2A]" />

              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* ==================================================
          LEFT BOTTOM LABEL
      ================================================== */}

      <div className="absolute left-8 md:left-16 bottom-8 hidden md:flex items-center gap-4">

        <span className="w-8 h-[2px] bg-[#FF2A2A]" />

        <span className="font-mono text-[9px] tracking-[0.3em] text-white/35 uppercase">
          BASED IN INDIA
        </span>

      </div>

      {/* ==================================================
          RIGHT BOTTOM LABEL
      ================================================== */}

      <div className="absolute right-8 md:right-16 bottom-8 hidden md:flex items-center gap-4">

        <span className="w-8 h-[2px] bg-[#FF2A2A]" />

        <span className="font-mono text-[9px] tracking-[0.3em] text-white/35 uppercase">
          AVAILABLE FOR NEW PROJECTS
        </span>

      </div>

      {/* ==================================================
          SCROLL INDICATOR
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer select-none"
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({
              behavior: "smooth",
            });
        }}
      >

        <span className="font-mono text-[9px] tracking-[0.3em] text-white/35 uppercase mb-2">
          SCROLL DOWN
        </span>

        <ArrowDown
          size={14}
          className="text-white/40"
        />

      </motion.div>

      {/* ==================================================
          MOBILE
      ================================================== */}

     <style>
  {`
    @media (max-width: 1024px) {
      #home {
        min-height: 100vh;
        padding-top: 100px;
        padding-bottom: 90px;
      }

      #home > div.relative.z-10 {
        padding-top: 110px !important;
      }
    }

    @media (max-width: 768px) {
      #home > div.relative.z-10 {
        padding-left: 24px !important;
        padding-right: 24px !important;
        padding-top: 105px !important;
        padding-bottom: 60px !important;
        gap: 55px !important;
      }

      #home h1 {
        margin-bottom: 25px !important;
      }

      #home h1 span {
        font-size: clamp(43px, 13vw, 58px) !important;
      }

      #home p {
        font-size: 15px !important;
        line-height: 1.7 !important;
        margin-bottom: 28px !important;
      }

      #home .lg\\:col-span-5 {
        justify-content: center !important;
      }
    }

    @media (max-width: 500px) {
      #home {
        min-height: auto;
        padding-top: 80px;
      }

      #home > div.relative.z-10 {
        padding-left: 20px !important;
        padding-right: 20px !important;
        padding-top: 100px !important;
      }

      #home h2 {
        font-size: 10px !important;
      }

      #home h1 span {
        font-size: 44px !important;
        letter-spacing: -2px !important;
      }

      #home .flex-wrap a {
        width: 100%;
        justify-content: center;
        padding: 14px 20px !important;
      }

      #home .relative.w-\\[270px\\] {
        width: 245px !important;
      }
    }

    @media (max-width: 360px) {
      #home h1 span {
        font-size: 40px !important;
      }

      #home .relative.w-\\[270px\\] {
        width: 220px !important;
      }
    }
  `}
</style>
    </section>
  );
};

export default Hero;