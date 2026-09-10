import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "120px 6%",
        background: "#080808",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* ================= BACKGROUND GRID ================= */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.055,
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
          top: "10%",
          right: "-180px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,42,42,0.16) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          left: "-150px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,42,42,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* ================= WEB ================= */}
      <svg
        viewBox="0 0 500 500"
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "500px",
          height: "500px",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      >
        <g
          fill="none"
          stroke="#ff2a2a"
          strokeWidth="1"
        >
          <circle cx="250" cy="250" r="60" />
          <circle cx="250" cy="250" r="120" />
          <circle cx="250" cy="250" r="180" />
          <circle cx="250" cy="250" r="240" />

          <line x1="250" y1="0" x2="250" y2="500" />
          <line x1="0" y1="250" x2="500" y2="250" />
          <line x1="73" y1="73" x2="427" y2="427" />
          <line x1="427" y1="73" x2="73" y2="427" />
        </g>
      </svg>

      {/* ================= CONTENT ================= */}
      <div
        className="contact-wrapper"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1250px",
          margin: "0 auto",
        }}
      >
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "22px",
            }}
          >
            <span
              style={{
                color: "#ff2a2a",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "3px",
              }}
            >
              05
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
                color: "#999",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "3px",
              }}
            >
              GET IN TOUCH
            </span>
          </div>

          <h2
            className="contact-title"
            style={{
              margin: 0,
              fontSize: "clamp(55px, 9vw, 110px)",
              lineHeight: 0.9,
              letterSpacing: "-6px",
              fontWeight: 900,
            }}
          >
            LET'S
            <br />
            <span style={{ color: "#ff2a2a" }}>TALK.</span>
          </h2>

          <div
            style={{
              marginTop: "30px",
              width: "70px",
              height: "4px",
              background: "#ff2a2a",
            }}
          />
        </motion.div>

        {/* ================= MAIN GRID ================= */}
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: "80px",
            marginTop: "80px",
            alignItems: "start",
          }}
        >
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p
              style={{
                margin: "0 0 40px",
                maxWidth: "480px",
                color: "#aaa",
                fontSize: "17px",
                lineHeight: 1.8,
              }}
            >
              Have a project in mind, need a website, or want to build
              something great together? Feel free to reach out.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:gowthamkumar075@gmail.com"
              className="contact-info-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                padding: "20px 0",
                borderBottom: "1px solid #292929",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <div className="contact-icon">
                <Mail size={20} />
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    color: "#666",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    marginBottom: "6px",
                  }}
                >
                  EMAIL
                </div>

                <div
                  className="contact-value"
                  style={{
                    fontSize: "15px",
                    wordBreak: "break-word",
                  }}
                >
                  gowthamkumar075@gmail.com
                </div>
              </div>

              <ArrowUpRight
                size={18}
                color="#666"
                className="contact-arrow"
              />
            </a>

            {/* PHONE */}
            <a
              href="tel:+919444553360"
              className="contact-info-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                padding: "20px 0",
                borderBottom: "1px solid #292929",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <div className="contact-icon">
                <Phone size={20} />
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    color: "#666",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    marginBottom: "6px",
                  }}
                >
                  PHONE
                </div>

                <div
                  className="contact-value"
                  style={{
                    fontSize: "15px",
                  }}
                >
                  +91 9444553360
                </div>
              </div>

              <ArrowUpRight
                size={18}
                color="#666"
                className="contact-arrow"
              />
            </a>

            {/* LOCATION */}
            <div
              className="contact-info-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                padding: "20px 0",
                borderBottom: "1px solid #292929",
              }}
            >
              <div className="contact-icon">
                <MapPin size={20} />
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    color: "#666",
                    fontSize: "10px",
                    letterSpacing: "2px",
                    marginBottom: "6px",
                  }}
                >
                  LOCATION
                </div>

                <div
                  className="contact-value"
                  style={{
                    fontSize: "15px",
                  }}
                >
                  Bangalore, India
                </div>
              </div>
            </div>

            {/* AVAILABILITY */}
            <div
              style={{
                marginTop: "35px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "#aaa",
                fontSize: "12px",
                letterSpacing: "1px",
              }}
            >
              <span
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  background: "#ff2a2a",
                  boxShadow: "0 0 15px rgba(255,42,42,0.8)",
                }}
              />

              AVAILABLE FOR PROJECTS
            </div>
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => e.preventDefault()}
            className="contact-form"
          >
            {/* NAME */}
            <div className="field">
              <label>YOUR NAME</label>

              <input
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="field">
              <label>EMAIL ADDRESS</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* SUBJECT */}
            <div className="field">
              <label>SUBJECT</label>

              <input
                type="text"
                placeholder="What is this about?"
              />
            </div>

            {/* MESSAGE */}
            <div className="field">
              <label>MESSAGE</label>

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="contact-submit"
            >
              <span>SEND MESSAGE</span>

              <Send size={18} />
            </button>
          </motion.form>
        </div>

        {/* ================= BOTTOM ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-bottom"
          style={{
            marginTop: "100px",
            paddingTop: "25px",
            borderTop: "1px solid #222",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#555",
            fontSize: "10px",
            letterSpacing: "2px",
          }}
        >
          <span>LET'S BUILD SOMETHING.</span>

          <span>GOWTHAM © 2026</span>
        </motion.div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        .contact-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border: 1px solid #2b2b2b;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff2a2a;
          transition: all 0.25s ease;
        }

        .contact-info-card {
          transition: all 0.25s ease;
        }

        .contact-info-card:hover {
          border-color: #ff2a2a !important;
        }

        .contact-info-card:hover .contact-icon {
          background: #ff2a2a;
          color: #fff;
          border-color: #ff2a2a;
        }

        .contact-info-card:hover .contact-arrow {
          color: #ff2a2a !important;
          transform: translate(3px, -3px);
        }

        .contact-arrow {
          transition: all 0.25s ease;
        }

        .contact-form {
          padding: 35px;
          border: 1px solid #252525;
          background: rgba(15,15,15,0.75);
          position: relative;
        }

        .contact-form::before {
          content: "";
          position: absolute;
          top: -1px;
          left: -1px;
          width: 70px;
          height: 3px;
          background: #ff2a2a;
        }

        .field {
          margin-bottom: 27px;
        }

        .field label {
          display: block;
          color: #777;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .field input,
        .field textarea {
          width: 100%;
          border: 1px solid #292929;
          background: #0b0b0b;
          color: #fff;
          padding: 16px 17px;
          outline: none;
          font-family: inherit;
          font-size: 14px;
          transition: border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .field input {
          height: 52px;
        }

        .field textarea {
          min-height: 145px;
          resize: vertical;
          line-height: 1.6;
        }

        .field input::placeholder,
        .field textarea::placeholder {
          color: #444;
        }

        .field input:focus,
        .field textarea:focus {
          border-color: #ff2a2a;
          box-shadow: 0 0 0 1px rgba(255,42,42,0.15);
        }

        .contact-submit {
          width: 100%;
          min-height: 56px;
          border: none;
          background: #ff2a2a;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          transition: all 0.25s ease;
        }

        .contact-submit:hover {
          background: #fff;
          color: #080808;
        }

        @media (max-width: 1000px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }

          .contact-form {
            max-width: 100%;
          }
        }

        @media (max-width: 700px) {
          #contact {
            padding: 85px 18px !important;
          }

          .contact-title {
            font-size: 58px !important;
            letter-spacing: -4px !important;
          }

          .contact-grid {
            margin-top: 55px !important;
            gap: 50px !important;
          }

          .contact-form {
            padding: 22px 18px !important;
          }

          .contact-form::before {
            width: 50px;
          }

          .field {
            margin-bottom: 22px;
          }

          .field input {
            height: 54px;
          }

          .field textarea {
            min-height: 140px;
          }

          .contact-bottom {
            margin-top: 65px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
            line-height: 1.5;
          }
        }

        @media (max-width: 430px) {
          #contact {
            padding-left: 15px !important;
            padding-right: 15px !important;
          }

          .contact-title {
            font-size: 50px !important;
            letter-spacing: -3px !important;
          }

          .contact-grid {
            margin-top: 45px !important;
          }

          .contact-form {
            padding: 20px 15px !important;
          }

          .contact-value {
            font-size: 14px !important;
          }

          .contact-icon {
            width: 40px;
            height: 40px;
            min-width: 40px;
          }

          .contact-info-card {
            gap: 13px !important;
          }
        }
      `}</style>
    </section>
  );
}