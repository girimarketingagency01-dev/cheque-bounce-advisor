"use client";

import Link from "next/link";
import "./page.css";

export default function AboutPage() {
  const principles = [
    {
      number: "01",
      title: "Unified Framework",
      text: "A unified framework that connects financial cause with legal consequence.",
    },
    {
      number: "02",
      title: "Structured Handling",
      text: "Structured, insight-driven handling of recovery matters instead of ad-hoc or reactive steps.",
    },
    {
      number: "03",
      title: "Clarity at Every Stage",
      text: "Clarity at every stage so each action is both legally sound and strategically aligned.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Case Filing",
      text: "Your case details are captured on our secure platform, including cheque information and key parties involved, so everything starts in an organised way.",
    },
    {
      number: "02",
      title: "Initial Communication Plan",
      text: "CBA helps you frame the first formal communication to the issuer of the cheque, aligning tone, content, and timing so your position is clear from the start.",
    },
    {
      number: "03",
      title: "Expert Assignment",
      text: "A dedicated CBA expert evaluates your situation, reviews context and documents, and sets out a clear direction on how the matter should move forward.",
    },
    {
      number: "04",
      title: "Document Upload",
      text: "All important records and supporting documents are collected and organised on the platform, making it easier to review, track, and act without missing anything.",
    },
    {
      number: "05",
      title: "Review & Strategy Alignment",
      text: "CBA reviews the complete picture, clarifies both sides of the matter, and aligns a practical strategy so every next step serves a clear objective.",
    },
    {
      number: "06",
      title: "Resolution & Follow-Through",
      text: "A structured resolution path is agreed and documented, and CBA supports you in following through so outcomes are implemented and learnings feed back into better future systems.",
    },
  ];

  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-bg-number">
          01
        </div>

        <div className="about-container about-hero-grid">

          <div className="about-hero-content">

            <span className="about-eyebrow">
              ABOUT CHEQUE BOUNCE ADVISOR™
            </span>

            <h1>
              More Than Advice.
              <span>
                A Structured Ecosystem.
              </span>
            </h1>

            <p className="about-hero-description">
              India’s specialised ecosystem for cheque bounce
              and NI Act matters, where financial discipline
              meets legal clarity.
            </p>

            <div className="about-hero-actions">

              <Link
                href="/service"
                className="about-primary-btn"
              >
                Explore Our Services
                <span>→</span>
              </Link>

              <a
                href="#our-process"
                className="about-secondary-btn"
              >
                Our Process
              </a>

            </div>

          </div>


          {/* =================================================
    HERO IMAGE
================================================= */}

<div className="about-hero-visual">

  <img
    src="/about-expert.png"
    alt="Cheque Bounce Advisor Expert"
    className="about-hero-image"
  />

</div>

  </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="about-introduction">

        <div className="about-container">

          <div className="about-section-label">
            <span>02</span>
            WHO WE ARE
          </div>


          <div className="about-intro-grid">

            <div className="about-intro-heading">

              <h2>
                India’s Premier
                <span>
                  NI Act Multi-Service Ecosystem
                </span>
              </h2>

            </div>


            <div className="about-intro-copy">

              <p>
                Cheque Bounce Advisor™ (CBA) is India’s
                specialised ecosystem for cheque bounce and
                NI Act matters, where financial discipline
                meets legal clarity.
              </p>

              <p>
                Formed by experts from legal, financial,
                accountancy, and investment backgrounds,
                CBA works through one unified, accountable
                framework instead of fragmented advice.
              </p>

              <p>
                By combining real-world litigation exposure
                with deep financial insight, we help clients
                handle recovery matters more effectively
                while also reducing the risks that lead to
                such disputes.
              </p>

            </div>

          </div>


          {/* Quote */}

          <div className="about-quote">

            <div className="about-quote-mark">
              “
            </div>

            <p>
              Our platform functions as a single,
              accountable interface—offering consistent,
              high-quality support across regions, while
              actively working to reduce the occurrence and
              impact of cheque-related disputes.
            </p>

            <span>
              CHEQUE BOUNCE ADVISOR™
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRINCIPLES
      ===================================================== */}

      <section className="about-principles">

        <div className="about-container">

          <div className="about-section-label light">
            <span>03</span>
            THE CBA FRAMEWORK
          </div>

          <div className="about-principles-heading">

            <div>

              <span className="about-small-red">
                WHY CHEQUE BOUNCE ADVISOR™
              </span>

              <h2>
                One Matter.
                <br />
                <span>Multiple Dimensions.</span>
              </h2>

            </div>

            <p>
              A cheque-related dispute is not simply a legal
              issue. It can involve financial impact,
              procedure, documentation and strategy.
            </p>

          </div>


          <div className="about-principles-grid">

            {principles.map((item) => (
              <article
                className="about-principle-card"
                key={item.number}
              >

                <span className="about-principle-number">
                  {item.number}
                </span>

                <div className="about-principle-line"></div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <span className="about-principle-arrow">
                  ↗
                </span>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CBA
      ===================================================== */}

      <section className="about-why">

        <div className="about-container">

          <div className="about-section-label">
            <span>04</span>
            WHY CHOOSE CBA
          </div>


          <div className="about-why-grid">

            <div className="about-why-title">

              <span>
                BECAUSE DELAY, CONFUSION,
                <br />
                AND WRONG STRATEGY
              </span>

              <h2>
                Cost You
                <strong>Money.</strong>
              </h2>

            </div>


            <div className="about-why-content">

              <p className="about-why-lead">
                When a cheque bounces, the problem is not
                just legal—it is financial, procedural, and
                strategic.
              </p>

              <p>
                Most people lose time, weaken their position,
                or take incorrect steps simply because they
                lack the right guidance at the right moment.
              </p>

              <p>
                Cheque Bounce Advisor™ (CBA) exists to remove
                that uncertainty. This is not a generic
                advisory platform. It is a focussed,
                high-discipline system built to help you act
                correctly, quickly, and effectively, when it
                matters the most.
              </p>


              <div className="about-check-list">

                <div>
                  <span>✓</span>
                  Clear direction at each step so you don’t
                  act late or act wrong.
                </div>

                <div>
                  <span>✓</span>
                  Structured, NI Act-aligned processes instead
                  of fragmented advice.
                </div>

                <div>
                  <span>✓</span>
                  Integrated view of financial impact,
                  procedure, and legal consequence.
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        className="about-process"
        id="our-process"
      >

        <div className="about-container">

          <div className="about-section-label">
            <span>05</span>
            OUR PROCESS
          </div>


          <div className="about-process-heading">

            <span>
              CBA’S ELITE JOURNEY
            </span>

            <h2>
              From Case Filing
              <br />
              <span>To Follow-Through.</span>
            </h2>

          </div>


          <div className="about-process-list">

            {process.map((item, index) => (

              <article
                className="about-process-item"
                key={item.number}
              >

                <div className="about-process-number">
                  {item.number}
                </div>


                <div className="about-process-main">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>


                <div className="about-process-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CLOSING CTA
      ===================================================== */}

      <section className="about-closing">

        <div className="about-container">

          <div className="about-closing-inner">

            <div>

              <span>
                CHEQUE BOUNCE ADVISOR™
              </span>

              <h2>
                Clarity Before
                <br />
                <strong>the Next Step.</strong>
              </h2>

            </div>


            <div className="about-closing-right">

              <p>
                A structured approach can make every stage
                easier to understand, organise and act upon.
              </p>

              <Link
                href="/service"
                className="about-closing-btn"
              >
                Explore Services
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}