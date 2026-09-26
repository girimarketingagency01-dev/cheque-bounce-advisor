"use client";

import Link from "next/link";
import "./page.css";

export default function BankNbfcPage() {
  return (
    <main className="bank-nbfc-page">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="bank-nbfc-hero">

        <div className="bank-nbfc-hero-content">

          <span className="bank-nbfc-eyebrow">
            BANK & NBFC ASSISTANCE
          </span>

          <h1>
            Cheque Matters
            <span> For Banks & NBFCs</span>
          </h1>

          <p>
            Structured assistance for banks, NBFCs and financial
            institutions dealing with cheque bounce, cheque misuse,
            security cheque and related recovery matters.
          </p>

          <div className="bank-nbfc-hero-buttons">

            <Link
              href="/service/bank-nbfc/cheque-bounce"
              className="bank-nbfc-primary-btn"
            >
              Cheque Bounce Assistance
              <span>→</span>
            </Link>

            <Link
              href="/service/bank-nbfc/cheque-misuse"
              className="bank-nbfc-secondary-btn"
            >
              Cheque Misuse Assistance
              <span>→</span>
            </Link>

          </div>

        </div>


        {/* =====================================================
            HERO VISUAL
        ===================================================== */}

        <div className="bank-nbfc-hero-visual">

          <div className="bank-nbfc-visual-card">

            <div className="bank-nbfc-visual-top">

              <span>
                FINANCIAL INSTITUTION
              </span>

              <span>
                CBA
              </span>

            </div>


            <div className="bank-nbfc-visual-content">

              <div className="bank-nbfc-document">

                <div className="bank-nbfc-document-header">

                  <span>
                    CHEQUE ASSISTANCE
                  </span>

                  <span>
                    BANK / NBFC
                  </span>

                </div>


                <div className="bank-nbfc-document-line large"></div>

                <div className="bank-nbfc-document-line"></div>

                <div className="bank-nbfc-document-row">

                  <div className="bank-nbfc-document-line short"></div>

                  <div className="bank-nbfc-document-line amount"></div>

                </div>


                <div className="bank-nbfc-document-stamp">
                  ASSISTANCE
                </div>

              </div>

            </div>


            <div className="bank-nbfc-visual-footer">

              <span>✓</span>

              Structured Case Assistance

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="bank-nbfc-intro">

        <div className="bank-nbfc-container">

          <div className="bank-nbfc-intro-heading">

            <span className="bank-nbfc-section-eyebrow">
              OUR SERVICES
            </span>

            <h2>
              Assistance For
              <span> Financial Institutions</span>
            </h2>

            <p>
              Select the type of cheque-related matter you need
              assistance with. Each service has a dedicated form
              designed around the information relevant to banks,
              NBFCs and financial institutions.
            </p>

          </div>


          {/* =====================================================
              SERVICE CARDS
          ===================================================== */}

          <div className="bank-nbfc-service-grid">


            {/* =================================================
                CHEQUE BOUNCE
            ================================================= */}

            <article className="bank-nbfc-service-card">

              <div className="bank-nbfc-card-number">
                01
              </div>

              <div className="bank-nbfc-card-icon">
                ₹
              </div>

              <span className="bank-nbfc-card-eyebrow">
                BANK / NBFC
              </span>

              <h3>
                Cheque Bounce
              </h3>

              <p>
                Assistance for matters involving dishonoured
                cheques, unpaid financial obligations, recovery
                requirements and related cheque bounce situations.
              </p>

              <div className="bank-nbfc-card-points">

                <span>
                  ✓ Cheque bounce matters
                </span>

                <span>
                  ✓ Recovery-related information
                </span>

                <span>
                  ✓ Notice and document assistance
                </span>

              </div>

              <Link
                href="/service/bank-nbfc/cheque-bounce"
                className="bank-nbfc-card-button"
              >
                Explore Cheque Bounce
                <span>→</span>
              </Link>

            </article>




            {/* =================================================
                CHEQUE MISUSE
            ================================================= */}

            <article className="bank-nbfc-service-card featured">

              <div className="bank-nbfc-card-number">
                02
              </div>

              <div className="bank-nbfc-card-icon">
                !
              </div>

              <span className="bank-nbfc-card-eyebrow">
                BANK / NBFC
              </span>

              <h3>
                Cheque Misuse
              </h3>

              <p>
                Assistance for matters involving security cheques,
                disputed cheque presentation, cheque misuse claims
                and related financial institution concerns.
              </p>

              <div className="bank-nbfc-card-points">

                <span>
                  ✓ Security cheque matters
                </span>

                <span>
                  ✓ Cheque misuse concerns
                </span>

                <span>
                  ✓ Case information & documents
                </span>

              </div>

              <Link
                href="/service/bank-nbfc/cheque-misuse"
                className="bank-nbfc-card-button"
              >
                Explore Cheque Misuse
                <span>→</span>
              </Link>

            </article>

          </div>

        </div>

      </section>

{/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="bank-nbfc-process">

        <div className="bank-nbfc-container">

          <div className="bank-nbfc-process-heading">

            <span className="bank-nbfc-section-eyebrow">
              SIMPLE PROCESS
            </span>

            <h2>
              Start With The
              <span> Right Information</span>
            </h2>

            <p>
              Choose the relevant service and provide the case
              information through the dedicated assistance form.
            </p>

          </div>


          <div className="bank-nbfc-process-grid">


            <div className="bank-nbfc-process-item">

              <span>
                01
              </span>

              <h3>
                Select Service
              </h3>

              <p>
                Choose cheque bounce or cheque misuse based on
                the nature of the matter.
              </p>

            </div>


            <div className="bank-nbfc-process-item">

              <span>
                02
              </span>

              <h3>
                Share Details
              </h3>

              <p>
                Provide relevant financial institution and
                cheque-related information.
              </p>

            </div>


            <div className="bank-nbfc-process-item">

              <span>
                03
              </span>

              <h3>
                Upload Documents
              </h3>

              <p>
                Add cheque, notice, statement or other supporting
                documents relevant to the matter.
              </p>

            </div>


            <div className="bank-nbfc-process-item">

              <span>
                04
              </span>

              <h3>
                Case Review
              </h3>

              <p>
                The information submitted can be reviewed for the
                assistance requested.
              </p>

            </div>

          </div>

        </div>

      </section>
      


      


      

    </main>
  );
}