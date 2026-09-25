"use client";

import Link from "next/link";

export default function Header() {
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
          <Link href="/" className="logo-link">
            <img
              src="/logo.png"
              alt="Cheque Bounce Advisor"
              className="site-logo"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/cheque-bounce-case-expert/">Service</Link>
            <Link href="/about-us/">About Us</Link>
            <Link href="/blog/">Blog</Link>
            <Link href="/faq/">FAQ</Link>

            <Link href="/contact/" className="talk-button">
              Talk To CBA
              <span>→</span>
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button className="mobile-menu-button" aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>
    </>
  );
}