import Image from "next/image";
import StoriesCarousel from "@/components/StoriesCarousel";

export default function Home() {
  return (
    <div className="home-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="hero">

        <div className="hero-content">

          <div className="hero-label">
            <span></span>
            CHEQUE BOUNCE ASSISTANCE
          </div>

          <h1>
            Cheque Bounced?
            <br />
            <span>Don't Panic.</span>
          </h1>

          <p>
            Get professional assistance to understand your cheque bounce
            matter, explore your recovery options, and take the appropriate
            next step.
          </p>

          <div className="hero-buttons">

            <a href="/contact" className="primary-btn">
              Talk To CBA
              <span>→</span>
            </a>

            <a
              href="/service/"
              className="secondary-btn"
            >
              Explore Services
            </a>

          </div>

        </div>


        <div className="hero-image">

          <div className="hero-image-glow"></div>

          <Image
            src="/hero-team.png"
            alt="Cheque Bounce Advisor™ Expert Team"
            width={650}
            height={750}
            priority
            className="person-image"
          />

        </div>

      </section>


      {/* =====================================================
          SECTION 2 - THE PROBLEM
      ===================================================== */}
      <section className="problem-section">

        <div className="problem-container">

          <div className="problem-heading">

            <span className="section-eyebrow">
              UNDERSTANDING THE PROBLEM
            </span>

            <h2>
              One Bounced Cheque.
              <br />
              <span>Multiple Problems.</span>
            </h2>

            <p>
              A cheque bounce can affect your cash flow, delay recovery,
              and leave you uncertain about what to do next.
            </p>

          </div>


          <div className="problem-grid">

            <div className="problem-card">

              <div className="problem-icon">
                ₹
              </div>

              <div className="problem-number">
                01
              </div>

              <h3>
                Payment Stuck
              </h3>

              <p>
                Your expected payment may remain blocked, affecting your
                cash flow and financial planning.
              </p>

            </div>


            <div className="problem-card">

              <div className="problem-icon recovery-icon">
                ↻
              </div>

              <div className="problem-number">
                02
              </div>

              <h3>
                Recovery Delayed
              </h3>

              <p>
                Repeated follow-ups can consume time while the amount you
                are trying to recover remains outstanding.
              </p>

            </div>


            <div className="problem-card">

              <div className="problem-icon">
                ⚖
              </div>

              <div className="problem-number">
                03
              </div>

              <h3>
                Next Step Unclear
              </h3>

              <p>
                Understanding the appropriate recovery process can help
                you decide what to do next.
              </p>

            </div>

          </div>


          <div className="problem-cta">

            <div>

              <h3>
                Not sure what to do after a cheque bounce?
              </h3>

              <p>
                Understand your situation and explore your next step.
              </p>

            </div>

            <a href="/contact" className="problem-cta-button">
              Talk To CBA
              <span>→</span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 3 - HOW IT WORKS
      ===================================================== */}
      <section className="how-it-works">

        <div className="how-it-works-container">


          {/* HEADING */}
          <div className="how-it-works-heading">

            <span className="section-eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              A Clear Path After a{" "}
              <span>Cheque Bounce</span>
            </h2>

            <p>
              Understand your situation, explore the available options,
              and move forward with greater clarity.
            </p>

          </div>


          {/* STEPS */}
          <div className="how-it-works-grid">


            {/* STEP 01 */}
            <div className="how-step">

              <div className="how-step-top">

                <span className="how-number">
                  01
                </span>

                <span className="how-line"></span>

              </div>

              <div className="how-icon">
                ✓
              </div>

              <h3>
                Understand Your Case
              </h3>

              <p>
                Understand the basic details of your cheque bounce matter
                and identify the documents and information relevant to
                your situation.
              </p>

            </div>


            {/* STEP 02 */}
            <div className="how-step">

              <div className="how-step-top">

                <span className="how-number">
                  02
                </span>

                <span className="how-line"></span>

              </div>

              <div className="how-icon">
                ◇
              </div>

              <h3>
                Explore Your Options
              </h3>

              <p>
                Learn about the possible next steps based on the nature
                of your cheque bounce or cheque misuse matter.
              </p>

            </div>


            {/* STEP 03 */}
            <div className="how-step">

              <div className="how-step-top">

                <span className="how-number">
                  03
                </span>

              </div>

              <div className="how-icon">
                →
              </div>

              <h3>
                Move Forward With Clarity
              </h3>

              <p>
                Get the information and assistance needed to understand
                what you can do next.
              </p>

            </div>


          </div>

        </div>

      </section>






{/* =====================================================
    SECTION 4 - WHAT WE HELP WITH
===================================================== */}

<section className="help-section">

  <div className="help-container">

    {/* HEADING */}
    <div className="help-heading">

      <span className="section-eyebrow">
        OUR AREAS OF ASSISTANCE
      </span>

      <h2>
        Assistance For Different{" "}
        <span>Cheque Matters</span>
      </h2>

      <p>
        Explore the different cheque-related situations where
        Cheque Bounce Advisor™ can help you understand your
        situation and explore the appropriate next steps.
      </p>

    </div>


    {/* CARDS */}
    <div className="help-grid">

      {/* CARD 01 */}
      <div className="help-card">

        <div className="help-card-top">
          <span className="help-number">01</span>

          <div className="help-icon">
            ₹
          </div>
        </div>

        <h3>
          Cheque Bounce
        </h3>

        <p>
          Assistance to understand a bounced cheque, the available
          information, and the possible next steps.
        </p>

        

      </div>


      {/* CARD 02 */}
      <div className="help-card">

        <div className="help-card-top">
          <span className="help-number">02</span>

          <div className="help-icon">
            ↗
          </div>
        </div>

        <h3>
          Cheque Recovery
        </h3>

        <p>
          Understand the recovery process and the information
          that may be relevant when a cheque amount remains unpaid.
        </p>

        

      </div>


      {/* CARD 03 */}
      <div className="help-card">

        <div className="help-card-top">
          <span className="help-number">03</span>

          <div className="help-icon">
            ▣
          </div>
        </div>

        <h3>
          Security Cheque Issues
        </h3>

        <p>
          Understand situations involving security cheques,
          their presentation, and related concerns.
        </p>

        

      </div>


      {/* CARD 04 */}
      <div className="help-card">

        <div className="help-card-top">
          <span className="help-number">04</span>

          <div className="help-icon">
            ✓
          </div>
        </div>

        <h3>
          Cheque Misuse Matters
        </h3>

        <p>
          Assistance to understand concerns involving alleged
          misuse or unauthorized use of a cheque.
        </p>

        

      </div>

    </div>

  </div>

</section>




{/* =====================================================
    SECTION 5 - WHO WE ASSIST
===================================================== */}

<section className="assist-section">

  <div className="assist-container">

    {/* LEFT SIDE */}
    <div className="assist-intro">

      <span className="section-eyebrow">
        WHO WE ASSIST
      </span>

      <h2>
        Every Cheque Matter
        <br />
        <span>Is Different.</span>
      </h2>

      <p>
        Whether you are trying to recover a payment, dealing with a
        security cheque concern, or facing a cheque misuse issue,
        understanding your situation is the first step.
      </p>

      <div className="assist-note">
        <span className="assist-note-line"></span>

        <p>
          Cheque Bounce Advisor™ helps you understand your
          cheque-related situation and explore the appropriate
          next steps.
        </p>
      </div>

    </div>


    {/* RIGHT SIDE */}
    <div className="assist-list">

      {/* 01 */}
      <div className="assist-item">

        <div className="assist-item-number">
          01
        </div>

        <div className="assist-item-content">

          <h3>
            Individuals
          </h3>

          <p>
            For people dealing with personal cheque bounce,
            recovery, or cheque-related concerns.
          </p>

        </div>

        <span className="assist-arrow">
          →
        </span>

      </div>


      {/* 02 */}
      <div className="assist-item">

        <div className="assist-item-number">
          02
        </div>

        <div className="assist-item-content">

          <h3>
            Businesses
          </h3>

          <p>
            For businesses dealing with outstanding payments,
            bounced cheques, or recovery-related concerns.
          </p>

        </div>

        <span className="assist-arrow">
          →
        </span>

      </div>


      {/* 03 */}
      <div className="assist-item">

        <div className="assist-item-number">
          03
        </div>

        <div className="assist-item-content">

          <h3>
            Creditors / Payees
          </h3>

          <p>
            For those who were expecting payment through a cheque
            and need to understand the available next steps.
          </p>

        </div>

        <span className="assist-arrow">
          →
        </span>

      </div>


      {/* 04 */}
      <div className="assist-item">

        <div className="assist-item-number">
          04
        </div>

        <div className="assist-item-content">

          <h3>
            Issuers / Borrowers
          </h3>

          <p>
            For those facing concerns involving security cheques,
            cheque presentation, or alleged cheque misuse.
          </p>

        </div>

        <span className="assist-arrow">
          →
        </span>

      </div>

    </div>

  </div>

</section>





{/* =====================================================
    SECTION 6 - REAL STORIES, REAL RESULTS
===================================================== */}

<section className="stories-section">

  <div className="stories-container">

    <div className="stories-heading">

      <span className="section-eyebrow">
        REAL STORIES, REAL RESULTS
      </span>

      <h2>
        Cheque Bounce Problems?
        <br />
        <span>Listen To Those Who Faced Them</span>
      </h2>

      <p>
        Hear real experiences from people who have faced
        cheque-related problems.
      </p>

    </div>

    <StoriesCarousel />

  </div>

</section>







{/* =====================================================
    SECTION 7 - FAQ
===================================================== */}

<section className="faq-section">

  <div className="faq-container">

    {/* LEFT CONTENT */}
    <div className="faq-intro">

      <span className="section-eyebrow">
        FREQUENTLY ASKED QUESTIONS
      </span>

      <h2>
        Questions About
        <br />
        <span>Cheque Bounce?</span>
      </h2>

      <p>
        Find answers to common questions about cheque bounce matters,
        settlements, notices, documents and the assistance process.
      </p>

    </div>


    {/* RIGHT FAQ */}
    <div className="faq-list">

      <details className="faq-item" open>
        <summary>
          <span>How to withdraw cheque bounce case?</span>
          <b>+</b>
        </summary>

        <div className="faq-answer">
          <p>
            The complainant can withdraw the case in the event of reaching
            for an amicable settlement with the accused/other party.
            We at <strong>Cheque Bounce Advisor™</strong> help in preparation
            and filing of an application for withdrawal along with copy of
            MOU with the terms of settlement of making payment and same is
            filed before the concerned Court for its consideration and
            compliance.
          </p>
        </div>
      </details>


      <details className="faq-item">
        <summary>
          <span>Assistance in Resolving Disputes</span>
          <b>+</b>
        </summary>

        <div className="faq-answer">
          <p>
            A cheque bounce advisor can assist in resolving disputes by
            reviewing the circumstances surrounding the bounced cheque,
            communicating with the other party involved, exploring
            settlement options, and providing legal advice on the best
            course of action to achieve a favorable resolution.
          </p>
        </div>
      </details>


      <details className="faq-item">
        <summary>
          <span>Steps to Take Upon Receiving a Notice</span>
          <b>+</b>
        </summary>

        <div className="faq-answer">
          <p>
            Upon receiving a notice regarding a bounced cheque, it’s
            essential to seek advice from a cheque bounce advisor immediately.
            They can assess the situation, advise on your legal rights and
            obligations, help you understand the contents of the notice,
            and guide you through the necessary steps to address the issue
            effectively.
          </p>
        </div>
      </details>


      <details className="faq-item">
        <summary>
          <span>Preventing Cheque Bounces</span>
          <b>+</b>
        </summary>

        <div className="faq-answer">
          <p>
            Common reasons for cheques to bounce include insufficient funds,
            signature mismatch, post-dated cheques, and technical errors.
            A cheque bounce advisor can provide guidance on how to prevent
            cheque bounces by ensuring sufficient funds, verifying recipient
            details, and following best practices for cheque issuance.
          </p>
        </div>
      </details>


      <details className="faq-item">
        <summary>
          <span>Legal Process for Handling Bounced Cheques</span>
          <b>+</b>
        </summary>

        <div className="faq-answer">
          <p>
            The legal process for handling a bounced cheque typically
            involves sending a legal notice to the issuer, attempting to
            resolve the matter amicably, and pursuing legal action if
            necessary. A cheque bounce advisor can explain the legal process
            in detail, represent you in court proceedings, and help you
            navigate through the complexities of the legal system.
          </p>
        </div>
      </details>


      <details className="faq-item">
        <summary>
          <span>Consequences of Issuing a Bounced Cheque</span>
          <b>+</b>
        </summary>

        <div className="faq-answer">
          <p>
            Consequences of issuing a bounced cheque may include damage to
            your credit score, criminal charges, imprisonment, and financial
            penalties. A cheque bounce advisor can help mitigate these
            consequences by offering legal advice, negotiating settlements,
            and representing your interests in legal proceedings.
          </p>
        </div>
      </details>


      <details className="faq-item">
        <summary>
          <span>Negotiating Settlements or Repayment Plans</span>
          <b>+</b>
        </summary>

        <div className="faq-answer">
          <p>
            A cheque bounce advisor can assist in negotiating settlements
            or repayment plans with the recipient of the bounced cheque.
            They can facilitate communication between both parties, explore
            options for resolving the dispute outside of court, and draft
            legally binding agreements to ensure compliance with the terms
            of the settlement.
          </p>
        </div>
      </details>


      <details className="faq-item">
        <summary>
          <span>Required Documents and Evidence</span>
          <b>+</b>
        </summary>

        <div className="faq-answer">
          <p>
            To pursue legal action for a bounced cheque, you may need
            documents such as the bounced cheque itself, bank statements,
            correspondence with the issuer, and any relevant contracts or
            agreements. A cheque bounce advisor can help you gather and
            organize these documents, assess their relevance to your case,
            and prepare a strong legal strategy.
          </p>
        </div>
      </details>


      <details className="faq-item">
        <summary>
          <span>Rights and Responsibilities of Parties Involved</span>
          <b>+</b>
        </summary>

        <div className="faq-answer">
          <p>
            Both the cheque issuer and recipient have rights and
            responsibilities in the case of a bounced cheque. A cheque
            bounce advisor can clarify these rights and responsibilities,
            explain the legal obligations of each party, and ensure that
            your interests are protected throughout the legal process.
          </p>
        </div>
      </details>

    </div>

  </div>

</section>






{/* =====================================================
    SECTION 8 - FINAL CTA
===================================================== */}

<section className="final-cta-section">

  <div className="final-cta-container">

    {/* LEFT CONTENT */}
    <div className="final-cta-content">

      <span className="final-cta-eyebrow">
        NEED ASSISTANCE?
      </span>

      <h2>
        Dealing With a
        <br />
        <span>Cheque Bounce Matter?</span>
      </h2>

      <p>
        Understand your situation, explore your options,
        and take the next step with greater clarity.
      </p>

      <a href="/contact" className="final-cta-button">  
        Get Assistance Now
        <span>→</span>
      </a>

    </div>


    {/* RIGHT TEAM IMAGE */}
    <div className="final-cta-image">

      <div className="final-cta-image-glow"></div>

      <img
        src="/hero-team.png"
        alt="Cheque Bounce Advisor Expert Team"
      />

    </div>

  </div>

</section>
    </div>

    
  );
}