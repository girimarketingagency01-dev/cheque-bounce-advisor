"use client";

import { useState } from "react";
import "./page.css";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    matter: formData.get("matter"),
    message: formData.get("message"),

    source: "Contact Page",

    page_url: window.location.href,
  };

  try {
    const response = await fetch(
      "/api/leadify",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Lead submission failed"
      );
    }

    setSubmitted(true);

    form.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

  } catch (error) {

    console.error("Leadify Error:", error);

    alert(
      "Your enquiry could not be submitted. Please try again."
    );

  }
};

  return (
    <main className="contact-page">

      <section className="contact-wrapper">

        {/* LEFT CONTACT PANEL */}

        <div className="contact-info">

          <div className="contact-info-sticky">

            <span className="contact-eyebrow">
              GET IN TOUCH
            </span>

            <h1>
              Let’s Talk About
              <span>Your Matter.</span>
            </h1>

            <p className="contact-intro">
              Have a cheque bounce, cheque misuse or related
              financial matter? Get in touch with Cheque Bounce
              Advisor for information and assistance.
            </p>

            {/* HELPLINE */}

            <div className="contact-block">

              <span className="contact-label">
                HELPLINE
              </span>

              <a
                href="tel:+919891188400"
                className="contact-call-btn"
              >
                Call CBA Helpline
                <span>↗</span>
              </a>

            </div>

            {/* EMAIL */}

            <div className="contact-block">

              <span className="contact-label">
                EMAIL
              </span>

              <a
                href="mailto:contact@chequebounceadvisor.com"
                className="contact-link"
              >
                contact@chequebounceadvisor.com
              </a>

            </div>

            {/* ADDRESS */}

            <div className="contact-block">

              <span className="contact-label">
                OFFICE
              </span>

              <a
                href="https://maps.app.goo.gl/t3Kmn7y6Ps49JFT56"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-address"
              >
                UGF 1, E-108, Haji Colony,
                <br />
                Block D, Pandav Nagar,
                <br />
                Delhi, 110092
              </a>

            </div>

            {/* SOCIALS */}

            <div className="contact-social-section">

              <span className="contact-label">
                FOLLOW CBA
              </span>

              <div className="contact-socials">

                <a
                  href="https://www.instagram.com/chequebounceadvisor.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                >
                  <img
                    src="/instagram-icon.png"
                    alt="Instagram"
                  />

                  <span>Instagram</span>

                  <b>↗</b>
                </a>

                <a
                  href="https://www.facebook.com/Chequebounceadvisor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                >
                  <img
                    src="/facebook-icon.png"
                    alt="Facebook"
                  />

                  <span>Facebook</span>

                  <b>↗</b>
                </a>

                <a
                  href="https://x.com/mychequebounce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social"
                >
                  <img
                    src="/twitter-icon.png"
                    alt="Twitter"
                  />

                  <span>Twitter / X</span>

                  <b>↗</b>
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT CONTACT FORM */}

        <div className="contact-form-area">

          <div className="contact-form-card">

            <div className="contact-form-heading">

              <span className="contact-form-number">
                01
              </span>

              <div>

                <span className="contact-label dark">
                  SEND AN ENQUIRY
                </span>

                <h2>
                  Tell Us About
                  <span>Your Matter.</span>
                </h2>

              </div>

            </div>

            <p className="contact-form-description">
              Share a few details about your requirement and
              our team can review the information you provide.
            </p>

            {/* SUCCESS MESSAGE */}

            {submitted && (
              <div className="contact-success">
                Your enquiry has been submitted successfully.
              </div>
            )}

            {/* ERROR MESSAGE */}

            {error && (
              <div className="contact-error">
                {error}
              </div>
            )}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}

              <div className="contact-field">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />

              </div>

              {/* PHONE */}

              <div className="contact-field">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />

              </div>

              {/* EMAIL */}

              <div className="contact-field">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />

              </div>

              {/* MATTER TYPE */}

              <div className="contact-field">

                <label htmlFor="matter">
                  Matter Type
                </label>

                <select
                  id="matter"
                  name="matter"
                  defaultValue=""
                  required
                >

                  <option
                    value=""
                    disabled
                  >
                    Select your matter
                  </option>

                  <option value="individual-cheque-bounce">
                    Individual Cheque Bounce
                  </option>

                  <option value="individual-cheque-misuse">
                    Individual Cheque Misuse
                  </option>

                  <option value="business-cheque-bounce">
                    Business Cheque Bounce
                  </option>

                  <option value="business-cheque-misuse">
                    Business Cheque Misuse
                  </option>

                  <option value="bank-nbfc-cheque-bounce">
                    Bank / NBFC Cheque Bounce
                  </option>

                  <option value="bank-nbfc-cheque-misuse">
                    Bank / NBFC Cheque Misuse
                  </option>

                  <option value="other">
                    Other Enquiry
                  </option>

                </select>

              </div>

              {/* MESSAGE */}

              <div className="contact-field contact-field-full">

                <label htmlFor="message">
                  Tell Us More
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Briefly describe your matter..."
                  required
                />

              </div>

              {/* SUBMIT */}

              <div className="contact-submit-row">

                <button
                  type="submit"
                  className="contact-submit-btn"
                  disabled={submitting}
                >
                  {submitting
                    ? "Submitting..."
                    : "Submit Enquiry"}

                  <span>
                    {submitting ? "..." : "→"}
                  </span>
                </button>

                <p>
                  Your information is used only to respond
                  to your enquiry.
                </p>

              </div>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}