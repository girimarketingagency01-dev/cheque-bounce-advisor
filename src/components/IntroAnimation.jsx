"use client";

import { useEffect, useState } from "react";
import "./intro-animation.css";

export default function IntroAnimation() {
  const [visible, setVisible] = useState(true);
  const [exit, setExit] = useState(false);
  const [showCheque, setShowCheque] = useState(false);
  const [stamp, setStamp] = useState(false);

  useEffect(() => {
    // CHEQUE SCENE START
    const chequeTimer = setTimeout(() => {
      setShowCheque(true);
    }, 2700);

    // BOUNCE STAMP
    const stampTimer = setTimeout(() => {
      setStamp(true);
    }, 4000);

    // START EXIT
    const exitTimer = setTimeout(() => {
      setExit(true);
    }, 5400);

    // REMOVE INTRO
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 5900);

    return () => {
      clearTimeout(chequeTimer);
      clearTimeout(stampTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Intro completely removed after animation
  if (!visible) {
    return null;
  }

  return (
    <div
      className={`cba-intro ${
        exit ? "cba-intro-exit" : ""
      }`}
    >

      {/* =====================================================
          BRANDING
      ===================================================== */}

      <div
        className={`cba-intro-brand ${
          showCheque ? "cba-intro-brand-up" : ""
        }`}
      >

        {/* LOGO */}
        <div className="cba-intro-logo">
          <img
            src="/logoanimation.png"
            alt="Cheque Bounce Advisor"
          />
        </div>


        {/* GOLD SHINING LINE */}
        <div className="cba-intro-line">
          <span />
        </div>


        {/* CHEQUE BOUNCE */}
        <div className="cba-intro-title">
          CHEQUE BOUNCE
        </div>


        {/* TYPEWRITER */}
        <div className="cba-intro-advisor">
          <span className="cba-typewriter">
            ADVISOR
          </span>
        </div>

      </div>


      {/* =====================================================
          REAL CHEQUE
      ===================================================== */}

      <div
        className={`cba-intro-cheque ${
          showCheque ? "cba-intro-cheque-show" : ""
        }`}
      >

        <div className="cba-intro-real-cheque-wrap">

          <img
            src="/real-cheque.png"
            alt="Cheque"
            className="cba-intro-real-cheque"
          />


          {/* BOUNCE STAMP */}

          {stamp && (
            <div className="cba-bounce-stamp">
              <div className="cba-bounce-stamp-inner">
                BOUNCE
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}