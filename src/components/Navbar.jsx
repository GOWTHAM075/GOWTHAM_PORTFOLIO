import React, { useState } from "react";

const links = [
  ["01", "HOME", "#home"],
  ["02", "ABOUT", "#about"],
  ["03", "STACK", "#stack"],
  ["04", "WORK", "#projects"],
  ["05", "EXPERIENCE", "#experience"],
  ["06", "CONTACT", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const goTo = (href) => {
    setOpen(false);

    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  return (
    <>
      <header className="site-navbar">
        <div className="navbar-inner">
          <button className="navbar-logo" onClick={() => goTo("#home")}>
            GOWTHAM<span>.</span>
          </button>

          <nav className="desktop-nav">
            {links.map(([number, name, href]) => (
              <button key={href} onClick={() => goTo(href)}>
                <span>{number}</span>
                {name}
              </button>
            ))}
          </nav>

          <button
            className="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
          >
            {open ? "CLOSE ×" : "MENU +"}
          </button>
        </div>
      </header>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <div className="mobile-panel-inner">
          {links.map(([number, name, href]) => (
            <button key={href} onClick={() => goTo(href)}>
              <span>{number}</span>
              {name}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .site-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 72px;
          z-index: 1000;
          background: rgba(17,17,17,.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #292929;
          font-family: monospace;
        }

        .navbar-inner {
          height: 100%;
          max-width: 1400px;
          margin: auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          border: 0;
          background: transparent;
          color: #fff;
          cursor: pointer;
          font-family: monospace;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          padding: 0;
        }

        .navbar-logo span {
          color: #ff2a2a;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .desktop-nav button {
          border: 0;
          background: transparent;
          color: #888;
          padding: 12px 13px;
          cursor: pointer;
          font-family: monospace;
          font-size: 9px;
          letter-spacing: 1px;
          transition: .2s ease;
        }

        .desktop-nav button:hover {
          color: #ff2a2a;
        }

        .desktop-nav button span {
          color: #444;
          margin-right: 7px;
        }

        .mobile-menu {
          display: none;
          background: transparent;
          border: 1px solid #333;
          color: #fff;
          padding: 10px 13px;
          cursor: pointer;
          font-family: monospace;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .mobile-panel {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
          background: rgba(17,17,17,.98);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          transform: translateY(-110%);
          opacity: 0;
          pointer-events: none;
          transition: transform .35s ease, opacity .25s ease;
          overflow-y: auto;
        }

        .mobile-panel.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-panel-inner {
          padding: 15px 25px 40px;
        }

        .mobile-panel button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 21px 5px;
          border: 0;
          border-bottom: 1px solid #292929;
          background: transparent;
          color: #fff;
          font-family: monospace;
          font-size: 15px;
          text-align: left;
        }

        .mobile-panel button span {
          color: #ff2a2a;
          font-size: 9px;
          min-width: 20px;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .mobile-menu {
            display: block;
          }
        }

        @media (max-width: 500px) {
          .navbar-inner {
            padding: 0 18px;
          }

          .mobile-panel-inner {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        @media (max-width: 360px) {
          .navbar-inner {
            padding: 0 14px;
          }
        }
      `}</style>
    </>
  );
}