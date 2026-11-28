
"use client";

import { useState } from "react";

const HELPLINE = "+919891188400";

export default function CBAChatWidget() {
  const [visible] = useState(true);

  const handleCallClick = (e) => {
    e.preventDefault();

    const callUrl = `tel:${HELPLINE}`;

    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(callUrl);
    } else {
      window.location.href = callUrl;
    }
  };

  if (!visible) return null;

  return (
    <div className="cba-chat-widget">
      <a
        href={`tel:${HELPLINE}`}
        onClick={handleCallClick}
        className="cba-call-launcher"
        aria-label="Call CBA Support Now"
        title="Call CBA Support"
      >
        <span className="cba-call-pulse"></span>

        <span className="cba-call-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92z" />
          </svg>
        </span>

        <span className="cba-call-text">CALL NOW</span>
      </a>

      <style jsx>{`
        .cba-chat-widget {
          position: fixed;
          right: 28px;
          bottom: 28px;
          z-index: 99999;
          font-family: var(--font-manrope), sans-serif;
        }

        .cba-call-launcher {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: 160px;
          height: 60px;
          padding: 0 22px;
          border-radius: 50px;
          background: linear-gradient(135deg, #e32129, #b90009);
          color: #ffffff;
          text-decoration: none;
          box-shadow: 0 8px 25px rgba(215, 25, 32, 0.38);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
          animation: launcherAppear 0.55s ease both;
          overflow: visible;
        }

        .cba-call-launcher:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(215, 25, 32, 0.48);
        }

        .cba-call-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 25px;
          height: 25px;
          flex-shrink: 0;
        }

        .cba-call-icon svg {
          width: 25px;
          height: 25px;
        }

        .cba-call-text {
          position: relative;
          z-index: 2;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.7px;
          white-space: nowrap;
        }

        .cba-call-pulse {
          position: absolute;
          inset: -5px;
          border: 2px solid rgba(215, 25, 32, 0.55);
          border-radius: 50px;
          animation: pulseRing 2s ease-out infinite;
          pointer-events: none;
        }

        @keyframes launcherAppear {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.85);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.16);
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          .cba-chat-widget {
            right: 18px;
            bottom: 20px;
          }

          .cba-call-launcher {
            min-width: 148px;
            height: 55px;
            padding: 0 19px;
            gap: 9px;
          }

          .cba-call-icon,
          .cba-call-icon svg {
            width: 23px;
            height: 23px;
          }

          .cba-call-text {
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cba-call-launcher,
          .cba-call-pulse {
            animation: none;
          }

          .cba-call-launcher {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
