import Link from "next/link";
import "./page.css";

export default function IndividualServicePage() {
  return (
    <main className="individual-page">

      {/* =====================================================
          INDIVIDUAL HERO
      ===================================================== */}

      <section className="individual-hero">

        <div className="individual-hero-content">

          <span className="individual-eyebrow">
            INDIVIDUAL ASSISTANCE
          </span>

          <h1>
            Cheque Problems?
            <span> Know What To Do Next.</span>
          </h1>

          <p>
            Whether your cheque has bounced or you are concerned about
            cheque misuse, understand your situation and explore the
            appropriate assistance.
          </p>

          <div className="individual-hero-buttons">

            <a
              href="#individual-options"
              className="individual-primary-btn"
            >
              EXPLORE YOUR OPTIONS
              <span>→</span>
            </a>

            <Link
              href="/service/"
              className="individual-secondary-btn"
            >
              BACK TO SERVICES
              <span>→</span>
            </Link>

          </div>

        </div>


        {/* =================================================
            HERO VISUAL
        ================================================= */}

        <div className="individual-hero-visual">

          <div className="individual-hero-image-wrap">

            <img
              src="/individual-cheque-assistance.png"
              alt="Individual cheque assistance"
              className="individual-hero-image"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          INDIVIDUAL OPTIONS
      ===================================================== */}

      <section
        id="individual-options"
        className="individual-options"
      >

        <div className="individual-container">

          <div className="individual-heading">

            <span className="individual-eyebrow">
              WHAT DO YOU NEED HELP WITH?
            </span>

            <h2>
              Choose the situation
              <span> you are dealing with</span>
            </h2>

            <p>
              Select the type of cheque-related issue you are
              dealing with. We will collect the relevant details
              according to your situation.
            </p>

          </div>


          <div className="individual-option-grid">


            {/* =================================================
                CHEQUE BOUNCE
            ================================================= */}

            <div className="individual-option-card">

              <div className="individual-option-number">
                01
              </div>

              <div className="individual-option-icon">
                ₹
              </div>

              <span className="individual-option-label">
                CHEQUE BOUNCE
              </span>

              <h3>
                My Cheque Has
                <br />
                Bounced
              </h3>

              <p>
                For individuals dealing with an unpaid or bounced
                cheque and looking to understand recovery,
                notice-related requirements and possible next steps.
              </p>

              <Link
                href="/service/individual/cheque-bounce/"
                className="individual-option-btn"
              >
                GET BOUNCE ASSISTANCE
                <span>→</span>
              </Link>

            </div>


            {/* =================================================
                CHEQUE MISUSE
            ================================================= */}

            <div className="individual-option-card">

              <div className="individual-option-number">
                02
              </div>

              <div className="individual-option-icon misuse">
                !
              </div>

              <span className="individual-option-label">
                CHEQUE MISUSE
              </span>

              <h3>
                My Cheque Has
                <br />
                Been Misused
              </h3>

              <p>
                For individuals concerned about a cheque issued
                as security, left blank, or potentially used
                beyond the intended purpose.
              </p>

              <Link
                href="/service/individual/cheque-misuse/"
                className="individual-option-btn"
              >
                GET MISUSE ASSISTANCE
                <span>→</span>
              </Link>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          CUSTOM ASSISTANCE
          Existing third section can remain below this.
      ===================================================== */}

      <section className="individual-custom">

        <div className="individual-custom-inner">

          <div>

            <span className="individual-eyebrow">
              NEED SOMETHING DIFFERENT?
            </span>

            <h2>
              Have a <span>Specific Situation?</span>
            </h2>

            <p>
              If your cheque-related matter does not fit into the
              options above, you can share your situation and
              request assistance.
            </p>

          </div>

          <Link
            href="/contact/"
            className="individual-custom-btn"
          >
            REQUEST ASSISTANCE
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}