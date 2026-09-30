import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* =====================================================
          FOOTER MAIN
      ===================================================== */}

      <div className="footer-main">

        {/* BRAND */}
        <div className="footer-brand">

          <Link href="/" className="footer-logo-link">
            <img
              src="/logo.png"
              alt="Cheque Bounce Advisor"
              className="footer-logo"
            />
          </Link>

          <p>
            Professional assistance for cheque bounce,
            cheque recovery and cheque misuse matters.
          </p>

          {/* SOCIAL */}
          <div className="footer-social">

            {/* Replace # with your actual Instagram URL */}
             <a
    href="https://www.instagram.com/chequebounceadvisor.in/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <img
      src="/instagram-icon.png"
      alt="Instagram"
    />
  </a>

            {/* Replace # with your actual Facebook URL */}
             <a
    href="https://www.facebook.com/Chequebounceadvisor"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <img
      src="/facebook-icon.png"
      alt="Facebook"
    />
  </a>

  {/* Replace # with your actual Twitter URL */}
             <a
    href="https://x.com/mychequebounce"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"

  >
    <img
      src="/twitter-icon.png"
      alt="Twitter"
    />
  </a>

          </div>

        </div>


        {/* MENU */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <Link href="/">Home</Link>

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

        </div>


        {/* CONTACT */}
        <div className="footer-column footer-contact">

          <h3>Contact</h3>

          <a href="tel:+919891188400">
            +91 9891188400
          </a>

          <a href="mailto:contact@chequebounceadvisor.com">
            contact@chequebounceadvisor.com
          </a>

          <a
            href="https://maps.app.goo.gl/t3Kmn7y6Ps49JFT56"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address"
          >
            UGF 1, E-108, Haji Colony,
            <br />
            Block D, Pandav Nagar,
            <br />
            Delhi, 110092
          </a>

        </div>


        {/* WHATSAPP */}
        <div className="footer-action">

          <h3>Need Assistance?</h3>

          <p>
            Speak with our team about your
            cheque bounce matter.
          </p>

          <a
    href="https://wa.me/919891188400"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <img
      src="/whatsapp-icon.png"
      alt="WhatsApp"
    />
  </a>
            

        </div>

      </div>


      {/* =====================================================
          DISCLAIMER
      ===================================================== */}

      <div className="footer-disclaimer">

        <p>
          <strong>Disclaimer – </strong>
          This platform is not a law firm. It is an educational
          resource and public knowledge initiative for Negotiable
          Instruments Act compliance and does not constitute an
          offer for legal representation, a solicitation, or an
          invitation to create an attorney-client relationship
          under Rule 36 of the Bar Council of India Rules.
        </p>

      </div>


      {/* =====================================================
          FOOTER BOTTOM
      ===================================================== */}

      <div className="footer-bottom">

        <p>
          ©2024 ChequeBounceAdvisor, all rights reserved.
        </p>

        <div className="footer-legal">

          <Link href="/terms-and-conditions/">
            Terms &amp; Conditions
          </Link>

          <Link href="/privacy-policy/">
            Privacy Policy
          </Link>

        </div>

      </div>

    </footer>
  );
}