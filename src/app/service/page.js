import Link from "next/link";

export const metadata = {
  title: "Cheque Bounce Advisor™ Services",
  description:
    "Explore cheque bounce, cheque misuse and customized assistance services for individuals, businesses, banks and NBFCs.",
};

export default function ServicePage() {
  return (
    <main className="service-page">

      {/* =====================================================
          SERVICE HERO
      ===================================================== */}

      <section className="service-hero">

        <div className="service-hero-content">

          <span className="service-eyebrow">
            CHEQUE BOUNCE ADVISOR™ SERVICES
          </span>

          <h1>
            Assistance Built Around
            <br />
            <span>Your Situation.</span>
          </h1>

          <p>
            Whether you are an individual, business, bank or NBFC,
            choose the type of assistance you need and tell us what
            you are dealing with.
          </p>

          <div className="service-hero-buttons">

            <a
              href="#who-are-you"
              className="service-primary-btn"
            >
              Find Your Assistance
              <span>→</span>
            </a>

            <Link
              href="/"
              className="service-secondary-btn"
            >
              Back To Home
            </Link>

          </div>

        </div>


        {/* RIGHT SIDE VISUAL */}

       {/* RIGHT SIDE VISUAL */}

<div className="service-hero-visual">

  <div className="service-hero-image-wrap">

    <img
      src="/service-hero-woman.png"
      alt="Cheque Assistance"
      className="service-hero-image"
    />

  </div>

</div>

      </section>


      {/* =====================================================
          WHO ARE YOU?
      ===================================================== */}

      <section
        id="who-are-you"
        className="service-who-section"
      >

        <div className="service-section-heading">

          <span className="service-eyebrow">
            GET STARTED
          </span>

          <h2>
            How Can We <span>Assist You?</span>
          </h2>

          <p>
            Start by selecting the category that best describes
            your situation.
          </p>

        </div>


        <div className="service-category-grid">

          {/* INDIVIDUAL */}

          <div className="service-category-card">

            <div className="service-category-number">
              01
            </div>

            <div className="service-category-icon">
              👤
            </div>

            <h3>
              Individual
            </h3>

            <p>
              For individuals dealing with a cheque bounce,
              cheque misuse or related concern.
            </p>

            <Link
  href="/service/individual/"
  className="service-category-btn"
>
  GET STARTED
  <span>→</span>
</Link>

          </div>


          {/* BUSINESS */}

          <div className="service-category-card">

            <div className="service-category-number">
              02
            </div>

            <div className="service-category-icon">
              🏢
            </div>

            <h3>
              Business / Corporate
            </h3>

            <p>
              For businesses handling cheque payments,
              recoveries or recurring cheque-related matters.
            </p>

            <Link
  href="/service/business/"
  className="service-category-btn"
>
  GET BUSINESS ASSISTANCE
  <span>→</span>
</Link>

          </div>


          {/* BANK / NBFC */}

          <div className="service-category-card">

            <div className="service-category-number">
              03
            </div>

            <div className="service-category-icon">
              🏦
            </div>

            <h3>
              Bank / NBFC
            </h3>

            <p>
              For banks and NBFCs dealing with recurring
              cheque-related requirements.
            </p>

            <Link
  href="/service/bank-nbfc/"
  className="service-category-btn"
>
  GET INSTITUTIONAL ASSISTANCE
  <span>→</span>
</Link>

          </div>

        </div>

      </section>








      

    </main>
  );
}