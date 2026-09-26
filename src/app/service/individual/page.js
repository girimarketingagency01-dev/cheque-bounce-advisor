import Link from "next/link";

export default function IndividualServicePage() {
  return (
    <main className="individual-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="individual-hero">

        <div className="individual-hero-content">

          <span className="service-eyebrow">
            INDIVIDUAL ASSISTANCE
          </span>

          <h1>
            Cheque Problems?
            <br />
            <span>Know What To Do Next.</span>
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
              Explore Your Options
              <span>↓</span>
            </a>

            <Link
              href="/service/"
              className="individual-secondary-btn"
            >
              Back To Services
            </Link>

          </div>

        </div>


        {/* VISUAL */}

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
          OPTIONS
      ===================================================== */}

      <section
        id="individual-options"
        className="individual-options"
      >

        <div className="individual-container">

          <div className="individual-heading">

            <span className="service-eyebrow">
              WHAT DO YOU NEED HELP WITH?
            </span>

            <h2>
              Choose Your <span>Situation</span>
            </h2>

            <p>
              Select the option that best describes your cheque-related
              situation. You will then be guided to the relevant form.
            </p>

          </div>


          <div className="individual-option-grid">


            {/* CHEQUE BOUNCE */}

            <Link
              href="/service/individual/cheque-bounce/"
              className="individual-option-card"
            >

              <div className="individual-option-number">
                01
              </div>

              <div className="individual-option-icon bounce-icon">
                ₹
              </div>

              <span className="individual-option-label">
                PAYMENT / RECOVERY
              </span>

              <h3>
                My Cheque Has Bounced
              </h3>

              <p>
                Get assistance in understanding your bounced cheque,
                recovery options, notice-related requirements and
                possible next steps.
              </p>

              <div className="individual-option-link">
                Get Bounce Assistance
                <span>→</span>
              </div>

            </Link>


            {/* CHEQUE MISUSE */}

            <Link
              href="/service/individual/cheque-misuse/"
              className="individual-option-card misuse-card"
            >

              <div className="individual-option-number">
                02
              </div>

              <div className="individual-option-icon misuse-icon">
                !
              </div>

              <span className="individual-option-label">
                SECURITY / MISUSE
              </span>

              <h3>
                My Cheque Has Been Misused
              </h3>

              <p>
                If a cheque was given as security, left blank or may have
                been used beyond your intended purpose, share your details
                to understand the available assistance.
              </p>

              <div className="individual-option-link">
                Get Misuse Assistance
                <span>→</span>
              </div>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          CUSTOM ASSISTANCE
      ===================================================== */}

      <section className="individual-custom">

        <div className="individual-custom-inner">

          <div>

            <span className="service-eyebrow">
              NEED SOMETHING DIFFERENT?
            </span>

            <h2>
              Have a <span>Specific Situation?</span>
            </h2>

            <p>
              If your cheque-related matter does not fit into the options
              above, you can share your situation and request assistance.
            </p>

          </div>

          <Link
            href="/contact/"
            className="individual-custom-btn"
          >
            Request Assistance
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}