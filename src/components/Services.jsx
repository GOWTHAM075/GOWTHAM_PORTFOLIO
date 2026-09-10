import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "Define",
    subtitle: "Define & Strategize",
    desc: "Establish clean targets, outline visual guidelines, establish system architectures, and map user flows.",
    position: "right",
    rotation: 2,
  },
  {
    step: "02",
    title: "Design",
    subtitle: "Design & Blueprint",
    desc: "Design award-winning visual layouts, premium motion assets, custom grids, and bold responsive systems.",
    position: "left",
    rotation: -2,
  },
  {
    step: "03",
    title: "Build",
    subtitle: "Architect & Compile",
    desc: "Engineer fast React layouts, integrate fluid motion mechanics, and secure robust server pipelines.",
    position: "right",
    rotation: 1.5,
  },
  {
    step: "04",
    title: "Launch",
    subtitle: "Validate & Launch",
    desc: "Perform SEO audits, clean up code hierarchies, evaluate core vitals, and deploy globally.",
    position: "left",
    rotation: -2.5,
  },
];

const Services = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(
    scrollYProgress,
    {
      stiffness: 100,
      damping: 20,
      restDelta: 0.001,
    }
  );

  const cardVariants = {
    inactive: {
      backgroundColor: "#171717",
      color: "#ffffff",
      borderColor:
        "rgba(255,255,255,0.12)",
      boxShadow:
        "0 10px 30px rgba(0,0,0,0.25)",
      scale: 0.96,
    },

    active: {
      backgroundColor: "#ff2a2a",
      color: "#ffffff",
      borderColor: "#ff2a2a",
      boxShadow:
        "0 25px 50px rgba(255,42,42,0.3)",
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const badgeVariants = {
    inactive: {
      backgroundColor: "#222222",
      color: "#ff2a2a",
    },

    active: {
      backgroundColor: "#111111",
      color: "#ffffff",
    },
  };

  return (
    <section
      ref={containerRef}
      id="services"
      className="services-section relative w-full py-32 bg-[#111111] text-white select-none overflow-hidden"
      style={{
        backgroundColor: "#111111",
      }}
    >
      {/* =====================================================
          DARK GRID
          ===================================================== */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.06,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* =====================================================
          RED GLOW - RIGHT
          ===================================================== */}

      <div
        className="absolute pointer-events-none"
        style={{
          width: "650px",
          height: "650px",
          right: "-300px",
          top: "80px",
          borderRadius: "50%",
          background: "#ff2a2a",
          opacity: 0.08,
          filter: "blur(130px)",
        }}
      />

      {/* =====================================================
          RED GLOW - LEFT
          ===================================================== */}

      <div
        className="absolute pointer-events-none"
        style={{
          width: "450px",
          height: "450px",
          left: "-250px",
          bottom: "100px",
          borderRadius: "50%",
          background: "#ff2a2a",
          opacity: 0.045,
          filter: "blur(120px)",
        }}
      />

      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="services-header max-w-4xl mx-auto px-6 text-center mb-28 relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-[#181818] shadow-sm text-xs font-mono tracking-widest text-[#FF2A2A] mb-6 uppercase">
          How we work
        </div>

        <div className="relative inline-block">
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl tracking-tighter leading-none max-w-3xl mx-auto text-white uppercase mb-8">
            Let us show you how we drive your brand to new heights
          </h2>

          {/* SKETCH ARROW */}

          <div className="hidden lg:block absolute -right-20 top-0 text-white pointer-events-none">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              className="rotate-12 opacity-80"
            >
              <path
                d="M5,10 C15,20 20,40 50,45 M50,45 L40,35 M50,45 L42,52"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <p className="text-[#888888] text-base md:text-lg font-light max-w-xl mx-auto">
          We break down boundaries and deploy custom-built workflows designed
          to turn high-fidelity concepts into production-grade ecosystems.
        </p>
      </div>

      {/* =====================================================
          TIMELINE
          ===================================================== */}

      <div className="services-timeline relative max-w-5xl mx-auto px-6 min-h-[1400px] z-10">

        {/* =================================================
            DESKTOP S CURVE
            ================================================= */}

        <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* BACKGROUND LINE */}

            <path
              d="M 50,0 C 85,15 85,15 85,25 C 85,37 15,37 15,50 C 15,63 85,63 85,75 C 85,85 50,87 50,100"
              fill="none"
              stroke="#333333"
              strokeWidth="0.3"
              strokeDasharray="0.8, 0.8"
            />

            {/* ACTIVE SCROLL LINE */}

            <motion.path
              d="M 50,0 C 85,15 85,15 85,25 C 85,37 15,37 15,50 C 15,63 85,63 85,75 C 85,85 50,87 50,100"
              fill="none"
              stroke="#FF2A2A"
              strokeWidth="0.4"
              strokeDasharray="0.8, 0.8"
              style={{
                pathLength,
              }}
            />
          </svg>
        </div>

        {/* =================================================
            MOBILE VERTICAL LINE
            ================================================= */}

        <div className="services-mobile-line absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] pointer-events-none md:hidden z-0">

          <div className="w-full h-full bg-[#292929] border-dashed border-l-2 border-[#333333]" />

          <motion.div
            style={{
              scaleY: pathLength,
              originY: 0,
            }}
            className="absolute inset-0 bg-[#ff2a2a] border-l-2 border-[#FF2A2A]"
          />
        </div>

        {/* =================================================
            PROCESS CARDS
            ================================================= */}

        <div className="services-cards relative flex flex-col md:block w-full h-full space-y-12 md:space-y-0">

          {processSteps.map((step, index) => {
            const isLeft =
              step.position === "left";

            const yOffset =
              index * 320;

            return (
              <motion.div
                key={step.step}
                initial="inactive"
                whileInView="active"
                viewport={{
                  once: false,
                  amount: 0.6,
                }}
                className={`
                  services-card-wrapper
                  w-full md:w-[420px]
                  relative z-10
                  flex md:absolute
                `}
                style={{
                  top: `${yOffset}px`,
                  left: isLeft
                    ? "0px"
                    : "auto",
                  right: !isLeft
                    ? "0px"
                    : "auto",
                }}
              >
                {/* =================================================
                    CARD
                    ================================================= */}

                <motion.div
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                    services-card
                    w-full
                    border
                    rounded-[2rem]
                    p-8
                    relative
                    flex
                    flex-col
                    items-start
                    text-left
                    select-none
                  "
                  style={{
                    rotate: `${step.rotation}deg`,
                  }}
                >
                  {/* TAG HOLE */}

                  <div className="w-full flex justify-center mb-6">
                    <div className="w-4 h-4 rounded-full border-2 border-current bg-[#111111]" />
                  </div>

                  {/* BADGE */}

                  <motion.div
                    variants={badgeVariants}
                    className="px-3 py-1 rounded-full font-mono text-[10px] tracking-widest font-semibold uppercase mb-6"
                  >
                    STEP {step.step}
                  </motion.div>

                  {/* TITLE */}

                  <h3 className="font-display font-black text-3xl uppercase tracking-tight mb-2">
                    {step.title}
                  </h3>

                  {/* SUBTITLE */}

                  <h5 className="font-serif italic text-lg opacity-85 mb-4">
                    {step.subtitle}
                  </h5>

                  {/* DESCRIPTION */}

                  <p className="text-sm font-light leading-relaxed opacity-75">
                    {step.desc}
                  </p>

                  {/* RIBBON */}

                  <div className="absolute right-6 top-8 w-2 h-8 rounded-sm bg-current opacity-20" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          BOTTOM
          ===================================================== */}

      <div className="services-bottom max-w-md mx-auto px-6 text-center mt-36 z-10 relative">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            rotate: -5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: -3,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
          }}
          className="inline-block"
        >
          <span className="font-mono text-2xl md:text-3xl text-[#FF2A2A] font-bold tracking-tight italic select-none">
            Ready to be delivered!
          </span>

          <svg
            width="40"
            height="20"
            viewBox="0 0 40 20"
            fill="none"
            className="mx-auto mt-2 text-[#FF2A2A] opacity-80"
          >
            <path
              d="M2,2 Q20,18 38,2 M38,2 L30,4 M38,2 L36,10"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* =====================================================
          RESPONSIVE
          ===================================================== */}

      <style>{`
        @media (max-width: 767px) {
          #services {
            padding-top: 90px !important;
            padding-bottom: 80px !important;
          }

          .services-header {
            margin-bottom: 75px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .services-header h2 {
            font-size: 39px !important;
            line-height: 1 !important;
            letter-spacing: -2px !important;
          }

          .services-header p {
            font-size: 14px !important;
            line-height: 1.7 !important;
          }

          .services-timeline {
            padding-left: 22px !important;
            padding-right: 22px !important;
            min-height: 1420px !important;
          }

          .services-mobile-line {
            left: 50% !important;
          }

          .services-cards {
            gap: 45px !important;
          }

          .services-card-wrapper {
            width: calc(100% - 15px) !important;
            margin-left: 7px !important;
          }

          .services-card {
            padding: 25px !important;
            border-radius: 1.5rem !important;
          }

          .services-card h3 {
            font-size: 28px !important;
          }

          .services-card h5 {
            font-size: 16px !important;
          }

          .services-card p {
            font-size: 13px !important;
            line-height: 1.7 !important;
          }

          .services-bottom {
            margin-top: 100px !important;
          }

          .services-bottom span {
            font-size: 21px !important;
          }
        }

        @media (max-width: 500px) {
          #services {
            padding-top: 75px !important;
          }

          .services-header {
            margin-bottom: 65px !important;
          }

          .services-header h2 {
            font-size: 35px !important;
          }

          .services-header p {
            font-size: 13px !important;
          }

          .services-timeline {
            padding-left: 15px !important;
            padding-right: 15px !important;
            min-height: 1390px !important;
          }

          .services-card-wrapper {
            width: calc(100% - 8px) !important;
            margin-left: 4px !important;
          }

          .services-card {
            padding: 22px !important;
          }

          .services-card h3 {
            font-size: 25px !important;
          }

          .services-card h5 {
            font-size: 15px !important;
          }

          .services-card p {
            font-size: 12px !important;
          }

          .services-bottom {
            margin-top: 90px !important;
          }

          .services-bottom span {
            font-size: 19px !important;
          }
        }

        @media (max-width: 360px) {
          .services-header h2 {
            font-size: 32px !important;
          }

          .services-timeline {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }

          .services-card {
            padding: 19px !important;
          }

          .services-card h3 {
            font-size: 23px !important;
          }

          .services-bottom span {
            font-size: 17px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;