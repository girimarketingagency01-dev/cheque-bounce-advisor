"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* DISCLAIMER BAR */}
      <div className="disclaimer-bar">
        <div className="disclaimer-track">

          <span>
            Disclaimer – This platform is not a law firm. It is an educational
            resource and public knowledge initiative for Negotiable Instruments
            Act compliance and does not constitute an offer for legal
            representation, a solicitation, or an invitation to create an
            attorney-client relationship under Rule 36 of the Bar Council of
            India Rules.
          </span>

          <span aria-hidden="true">
            Disclaimer – This platform is not a law firm. It is an educational
            resource and public knowledge initiative for Negotiable Instruments
            Act compliance and does not constitute an offer for legal
            representation, a solicitation, or an invitation to create an
            attorney-client relationship under Rule 36 of the Bar Council of
            India Rules.
          </span>

        </div>
      </div>


      {/* MAIN HEADER */}
      <header className="site-header">

        <div className="header-inner">

          {/* LOGO */}
          <Link
            href="/"
            className="logo-link"
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="Cheque Bounce Advisor"
              className="site-logo"
            />
          </Link>


          {/* DESKTOP NAV */}
          <nav className="desktop-nav">

            <Link href="/">
              Home
            </Link>

            <Link href="/service/">
              Service
            </Link>

            <Link href="/about-us/">
              About Us
            </Link>

            <Link href="/blog/">
              Blog
            </Link>

            <Link href="/faq/">
              FAQ
            </Link>

            <Link
              href="/contact/"
              className="talk-button"
            >
              Talk To CBA
              <span>→</span>
            </Link>

          </nav>


          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className={`mobile-menu-button ${
              menuOpen ? "menu-open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>


        {/* MOBILE NAV */}
        <div
          className={`mobile-nav ${
            menuOpen ? "mobile-nav-open" : ""
          }`}
        >

          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/service/" onClick={closeMenu}>
            Service
          </Link>

          <Link href="/about-us/" onClick={closeMenu}>
            About Us
          </Link>

          <Link href="/blog/" onClick={closeMenu}>
            Blog
          </Link>

          <Link href="/faq/" onClick={closeMenu}>
            FAQ
          </Link>

          <Link
            href="/contact/"
            className="mobile-talk-button"
            onClick={closeMenu}
          >
            Talk To CBA
            <span>→</span>
          </Link>


          {/* MOBILE SOCIAL ICONS */}
          <div className="mobile-social">

            <a
              href="https://www.instagram.com/chequebounceadvisor.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram-icon.png"
                alt="Instagram"
              />
            </a>

            <a
              href="https://www.facebook.com/Chequebounceadvisor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/facebook-icon.png"
                alt="Facebook"
              />
            </a>

            <a
              href="https://wa.me/919891188400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/whatsapp-icon.png"
                alt="WhatsApp"
              />
            </a>

          </div>

        </div>

      </header>
    </>
  );
}