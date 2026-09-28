"use client";

import Link from "next/link";
import "./page.css";

export default function BusinessPage() {
  return (
    <main className="business-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="business-hero">

        <div className="business-hero-content">

          <span className="business-eyebrow">
            BUSINESS & CORPORATE ASSISTANCE
          </span>

          <h1>
            Protect Your
            <span> Business Interests</span>
          </h1>

          <p>
            Cheque bounce and cheque misuse issues can affect
            business cash flow, vendor relationships and day-to-day
            operations. Get structured assistance for your business
            and corporate cheque-related matters.
          </p>

          <div className="business-hero-buttons">

            <a
              href="#business-services"
              className="business-primary-btn"
            >
              EXPLORE BUSINESS ASSISTANCE
              <span>→</span>
            </a>

            <a
              href="#custom-assistance"
              className="business-secondary-btn"
            >
              CUSTOMIZED ASSISTANCE
              <span>→</span>
            </a>

          </div>

        </div>


       {/* =====================================================
    HERO VISUAL
===================================================== */}

<div className="business-hero-visual">

  <div className="business-hero-image-wrap">

    <img
      src="/business-cheque-assistance.png"
      alt="Business cheque assistance"
      className="business-hero-image"
    />

  </div>

</div>


      </section>


      {/* =====================================================
          BUSINESS SERVICES
      ===================================================== */}

      <section
        id="business-services"
        className="business-services"
      >

        <div className="business-container">

          <div className="business-heading">

            <span className="business-eyebrow">
              BUSINESS CHEQUE MATTERS
            </span>

            <h2>
              Choose the assistance
              <span> you need</span>
            </h2>

            <p>
              Select the type of cheque-related issue you are
              dealing with. We will collect the relevant details
              according to your business requirement.
            </p>

          </div>


          <div className="business-service-grid">


            {/* =================================================
                CHEQUE BOUNCE
            ================================================= */}

            <div className="business-service-card">

              <div className="business-service-number">
                01
              </div>

              <div className="business-service-icon">
                ₹
              </div>

              <span className="business-service-label">
                CHEQUE BOUNCE
              </span>

              <h3>
                Business Cheque
                <br />
                Bounce Assistance
              </h3>

              <p>
                For businesses dealing with unpaid or bounced
                cheques from customers, vendors, clients or
                other parties.
              </p>

              <Link
                href="/service/business/cheque-bounce/"
                className="business-service-btn"
              >
                GET BUSINESS ASSISTANCE
                <span>→</span>
              </Link>

            </div>


            {/* =================================================
                CHEQUE MISUSE
            ================================================= */}

            <div className="business-service-card">

              <div className="business-service-number">
                02
              </div>

              <div className="business-service-icon misuse">
                !
              </div>

              <span className="business-service-label">
                CHEQUE MISUSE
              </span>

              <h3>
                Business Cheque
                <br />
                Misuse Assistance
              </h3>

              <p>
                For businesses facing concerns involving security
                cheques, blank cheques, unauthorized use or other
                cheque-related disputes.
              </p>

              <Link
                href="/service/business/cheque-misuse/"
                className="business-service-btn"
              >
                GET BUSINESS ASSISTANCE
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BUSINESS NEEDS
      ===================================================== */}

      <section className="business-needs">

        <div className="business-container">

          <div className="business-needs-grid">

            <div className="business-needs-content">

              <span className="business-eyebrow">
                FOR BUSINESSES & CORPORATES
              </span>

              <h2>
                Built for recurring
                <span> cheque matters</span>
              </h2>

              <p>
                Businesses that regularly deal with customers,
                vendors, distributors or financial transactions
                may encounter cheque-related issues repeatedly.
              </p>

              <p>
                Instead of handling every matter separately,
                businesses can discuss their requirements and
                explore a customized assistance arrangement.
              </p>

            </div>


            <div className="business-needs-list">

              <div className="business-needs-item">
                <span>01</span>
                <div>
                  <strong>Multiple Cheque Matters</strong>
                  <p>
                    Assistance for recurring cheque-related
                    requirements.
                  </p>
                </div>
              </div>

              <div className="business-needs-item">
                <span>02</span>
                <div>
                  <strong>Customer & Vendor Issues</strong>
                  <p>
                    Organize information related to unpaid
                    or disputed cheques.
                  </p>
                </div>
              </div>

              <div className="business-needs-item">
                <span>03</span>
                <div>
                  <strong>Customized Support</strong>
                  <p>
                    Discuss your business requirements with
                    our team.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CUSTOMIZED ASSISTANCE
      ===================================================== */}

      <section
        id="custom-assistance"
        className="business-custom"
      >

        <div className="business-custom-inner">

          <div className="business-custom-content">

            <span className="business-eyebrow">
              NEED A CUSTOMIZED SOLUTION?
            </span>

            <h2>
              Have recurring cheque
              <span> matters?</span>
            </h2>

            <p>
              If your business regularly deals with cheque bounce
              or cheque misuse matters, tell us about your
              requirements and discuss a customized assistance
              arrangement.
            </p>

          </div>


          <Link
            href="/service/business/contact/"
            className="business-custom-btn"
          >
            GET CUSTOMIZED ASSISTANCE
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}