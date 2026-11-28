
"use client";

import { useRef } from "react";

const HELPLINE = "+919891188400";
const WHATSAPP_URL = "https://wa.me/919891188400?text=Hello+Cheque+Bounce+Advisor,+I+need+assistance+with+a+cheque+bounce+matter.+Please+contact+me+to+discuss+my+case.&utm_source=chatgpt.com";

export default function CBAChatWidget() {
  const callClicked = useRef(false);
  const whatsappClicked = useRef(false);

  const handleCallClick = (e) => {
    e.preventDefault();

    if (callClicked.current) return;
    callClicked.current = true;

    const callUrl = `tel:${HELPLINE}`;

    if (typeof window.gtag_report_conversion === "function") {
      window.gtag_report_conversion(callUrl);
    } else {
      window.location.href = callUrl;
    }
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();

    if (whatsappClicked.current) return;
    whatsappClicked.current = true;

    if (
      typeof window.gtag_report_whatsapp_conversion === "function"
    ) {
      window.gtag_report_whatsapp_conversion(WHATSAPP_URL);
    } else {
      window.location.href = WHATSAPP_URL;
    }
  };

  return (
    <>
      {/* WHATSAPP BUTTON - BOTTOM LEFT */}
      <a
        href={WHATSAPP_URL}
        onClick={handleWhatsAppClick}
        className="cba-floating-btn cba-whatsapp-launcher"
        aria-label="WhatsApp CBA Support"
        title="WhatsApp CBA Support"
      >
        <span className="cba-whatsapp-pulse"></span>

        <span className="cba-whatsapp-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M16.04 2.67A13.25 13.25 0 0 0 4.65 22.7L2.67 29.33l6.8-1.78a13.3 13.3 0 1 0 6.57-24.88Zm0 24.22a11 11 0 0 1-5.6-1.53l-.4-.24-4.03 1.05 1.08-3.92-.26-.41a10.95 10.95 0 1 1 9.21 5.05Zm6.02-8.2c-.33-.17-1.94-.96-2.24-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.39.25-.72.08-.33-.17-1.4-.52-2.66-1.65-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.51.14-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.42-.03-.58-.08-.17-.74-1.78-1.02-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73 0 1.61 1.18 3.17 1.35 3.39.17.22 2.32 3.54 5.63 4.97.79.34 1.4.55 1.88.7.79.25 1.51.22 2.08.13.63-.1 1.94-.79 2.21-1.56.28-.77.28-1.43.19-1.56-.08-.14-.3-.22-.63-.39Z" />
          </svg>
        </span>

        <span className="cba-floating-text">WHATSAPP</span>
      </a>

      {/* CALL BUTTON - BOTTOM RIGHT */}
      <a
        href={`tel:${HELPLINE}`}
        onClick={handleCallClick}
        className="cba-floating-btn cba-call-launcher"
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

        <span className="cba-floating-text">CALL NOW</span>
      </a>

      <style jsx>{`
        .cba-floating-btn {
          position: fixed;
          bottom: 28px;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-width: 160px;
          height: 60px;
          padding: 0 22px;
          border-radius: 50px;
          color: #ffffff;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          animation: launcherAppear 0.55s ease both;
          overflow: visible;
        }

        .cba-floating-btn:hover {
          transform: translateY(-4px);
        }

        /* WHATSAPP - LEFT SIDE */
        .cba-whatsapp-launcher {
          left: 28px;
          background: linear-gradient(135deg, #25d366, #128c45);
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.38);
        }

        .cba-whatsapp-launcher:hover {
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.48);
        }

        .cba-whatsapp-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 27px;
          height: 27px;
          flex-shrink: 0;
        }

        .cba-whatsapp-icon svg {
          width: 27px;
          height: 27px;
        }

        .cba-whatsapp-pulse {
          position: absolute;
          inset: -5px;
          border: 2px solid rgba(37, 211, 102, 0.55);
          border-radius: 50px;
          animation: pulseRing 2s ease-out infinite;
          pointer-events: none;
        }

        /* CALL - RIGHT SIDE */
        .cba-call-launcher {
          right: 28px;
          background: linear-gradient(135deg, #e32129, #b90009);
          box-shadow: 0 8px 25px rgba(215, 25, 32, 0.38);
        }

        .cba-call-launcher:hover {
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

        .cba-call-pulse {
          position: absolute;
          inset: -5px;
          border: 2px solid rgba(215, 25, 32, 0.55);
          border-radius: 50px;
          animation: pulseRing 2s ease-out infinite;
          pointer-events: none;
        }

        .cba-floating-text {
          position: relative;
          z-index: 2;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.7px;
          white-space: nowrap;
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
          .cba-floating-btn {
            bottom: 20px;
            min-width: 0;
            height: 52px;
            padding: 0 13px;
            gap: 7px;
          }

          .cba-whatsapp-launcher {
            left: 12px;
          }

          .cba-call-launcher {
            right: 12px;
          }

          .cba-whatsapp-icon,
          .cba-whatsapp-icon svg {
            width: 23px;
            height: 23px;
          }

          .cba-call-icon,
          .cba-call-icon svg {
            width: 21px;
            height: 21px;
          }

          .cba-floating-text {
            font-size: 12px;
            letter-spacing: 0.3px;
          }
        }

        @media (max-width: 360px) {
          .cba-floating-btn {
            height: 48px;
            padding: 0 10px;
            gap: 5px;
          }

          .cba-whatsapp-launcher {
            left: 8px;
          }

          .cba-call-launcher {
            right: 8px;
          }

          .cba-floating-text {
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cba-floating-btn,
          .cba-call-pulse,
          .cba-whatsapp-pulse {
            animation: none;
          }

          .cba-floating-btn {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
