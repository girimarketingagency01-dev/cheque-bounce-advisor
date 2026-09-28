"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./page.css";

const faqs = [
  {
    category: "Basics",
    question: "What is a cheque bounce?",
    answer:
      "A cheque bounce occurs when a bank is unable to process a cheque for payment, commonly because of insufficient funds, signature mismatch, account-related issues or other banking and technical reasons. The consequences depend on the circumstances of the transaction and the applicable law."
  },

  {
    category: "Legal Process",
    question: "What are the legal ramifications of cheque bounce?",
    answer:
      "A bounced cheque can have serious legal consequences, including potential criminal proceedings and financial liabilities. The applicable consequences depend on the facts of the matter and the requirements of the Negotiable Instruments Act and other applicable laws. A cheque bounce advisor can help explain the possible legal implications and available steps."
  },

  {
    category: "Settlement",
    question: "Can a cheque bounce dispute be resolved through settlement?",
    answer:
      "Yes. Parties may explore an amicable settlement depending on the circumstances of the dispute. Assistance may include reviewing the matter, communicating with the other party, discussing settlement or repayment options and preparing relevant settlement documentation."
  },

  {
    category: "Notice",
    question: "What should I do after receiving a cheque bounce notice?",
    answer:
      "Upon receiving a notice regarding a bounced cheque, it is important to review the notice carefully and understand the relevant dates, allegations and documents. Professional guidance can help you understand your rights and responsibilities and determine the appropriate next steps."
  },

  {
    category: "Basics",
    question: "What are the common reasons for a cheque to bounce?",
    answer:
      "Common reasons can include insufficient funds, signature mismatch, incorrect account details, stop-payment instructions, expired or stale cheques and certain technical or banking errors. The exact reason is generally mentioned in the bank return memo."
  },

  {
    category: "Basics",
    question: "How can I avoid a cheque bounce?",
    answer:
      "Maintaining sufficient funds, keeping accurate records, verifying cheque details, using correct signatures and maintaining communication with the concerned party can help reduce the possibility of cheque-related disputes."
  },

  {
    category: "Legal Process",
    question: "What is the legal process for handling a bounced cheque?",
    answer:
      "The process can involve communication between the parties, issuance of a legal notice where applicable, attempts at settlement and, where necessary, initiation of appropriate legal proceedings. The exact process depends on the facts and applicable law."
  },

  {
    category: "Legal Process",
    question: "What action can be taken if a cheque bounces?",
    answer:
      "On receiving information about a cheque bounce, the payee may first communicate with the drawer and seek payment. If payment is not received or is denied, the matter may require professional legal guidance to determine the appropriate course of action under applicable law."
  },

  {
    category: "Legal Process",
    question: "What is the time limit for a cheque bounce case?",
    answer:
      "The applicable timelines depend on the specific circumstances and statutory requirements governing cheque dishonour proceedings. Important dates relating to the bank return memo, notice and subsequent proceedings should therefore be tracked carefully."
  },

  {
    category: "Legal Process",
    question: "How long does a cheque bounce case take?",
    answer:
      "The time required to dispose of a cheque bounce matter can vary considerably depending on the court, case load, procedural requirements, evidence and circumstances of the case. There is no single fixed duration applicable to every matter."
  },

  {
    category: "Legal Process",
    question: "What penalty can apply to cheque bounce?",
    answer:
      "Under Section 138 of the Negotiable Instruments Act, a person found guilty may be punished with imprisonment for a term which may extend to two years, or with a fine which may extend to twice the amount of the cheque, or with both, subject to the applicable legal requirements and court proceedings."
  },

  {
    category: "Documents",
    question: "What documents are required for a cheque bounce matter?",
    answer:
      "Relevant documents may include the original or copy of the cheque, bank return memo, bank statements, legal notice and proof of delivery, correspondence with the other party, invoices, agreements and other documents connected with the transaction."
  },

  {
    category: "Documents",
    question: "Why is the bank return memo important?",
    answer:
      "The bank return memo records the reason for dishonour communicated by the bank. It can be an important document when reviewing a cheque bounce matter and determining the relevant next steps."
  },

  {
    category: "Settlement",
    question: "Can I negotiate a repayment plan after a cheque bounce?",
    answer:
      "Depending on the circumstances and willingness of the parties, a repayment plan or settlement may be negotiated. The terms should be clearly documented so that both parties understand their respective obligations."
  },

  {
    category: "Settlement",
    question: "How can a cheque bounce case be withdrawn after settlement?",
    answer:
      "The complainant may seek appropriate relief after reaching an amicable settlement with the other party. The precise procedure depends on the stage of the proceedings and the directions of the concerned court. Settlement documents and the appropriate application may be required."
  },

  {
    category: "Cheque Misuse",
    question: "What can I do if my security cheque has been misused?",
    answer:
      "If a security cheque has allegedly been presented or used in a manner that you dispute, the relevant transaction, cheque issuance, communications and supporting documents should be reviewed carefully. The appropriate response depends on the facts and applicable law."
  },

  {
    category: "Cheque Misuse",
    question: "What should I do if a cheque was presented without my permission?",
    answer:
      "You should preserve the cheque-related records, bank return information, communications and other relevant documents. Professional guidance can help determine what steps may be appropriate based on how and why the cheque was issued and subsequently presented."
  },

  {
    category: "Business",
    question: "Can a cheque bounce affect my business?",
    answer:
      "A cheque-related dispute can create financial, operational and commercial difficulties for a business. The practical impact depends on the transaction, amount involved, relationship between the parties and the steps taken to resolve the matter."
  },

  {
    category: "Business",
    question: "What should a business keep as evidence in a cheque dispute?",
    answer:
      "Businesses should preserve relevant cheques, invoices, agreements, purchase orders, bank records, return memos, emails, messages, payment records and other documents connected with the transaction."
  },

  {
    category: "Banks / NBFCs",
    question: "Does a bounced cheque affect my credit score?",
    answer:
      "A cheque dishonour does not automatically mean that a credit score will be affected. However, repeated dishonour of cheques connected with loan or credit repayment may have implications depending on the lender's reporting practices and the circumstances involved."
  },

  {
    category: "Banks / NBFCs",
    question: "What if the cheque was issued for a loan or EMI?",
    answer:
      "Where a cheque relates to repayment of a loan or financial obligation, the matter may involve additional contractual and financial considerations. The loan documents, payment history, bank records and reason for dishonour should be reviewed before deciding on the next step."
  },

  {
    category: "CBA",
    question: "What does Cheque Bounce Advisor help with?",
    answer:
      "Cheque Bounce Advisor is an educational and assistance platform focused on cheque-related matters. It provides information and assistance relating to cheque bounce, cheque misuse, notices, documentation, settlements and related issues."
  },

  {
    category: "CBA",
    question: "Is this platform an advertisement for legal services?",
    answer:
      "No. In compliance with Rule 36 of the Bar Council of India Rules, this platform functions as an educational resource and public knowledge initiative. It does not constitute an offer for legal representation, solicitation or an invitation to create an attorney-client relationship."
  },

  {
    category: "CBA",
    question: "How is CBA different from a traditional law firm?",
    answer:
      "CBA is positioned as a specialized consultancy and independent educational resource. It focuses specifically on cheque-related matters and combines information, case-oriented assistance and financial understanding rather than operating as a conventional law firm."
  },

  {
    category: "CBA",
    question: "How can I contact CBA about my cheque bounce matter?",
    answer:
      "You can contact the CBA helpline to discuss your cheque-related concern and understand the available assistance. Keep the relevant cheque, bank return memo and supporting documents available so the matter can be discussed more clearly."
  }
];

const categories = [
  "All",
  "Basics",
  "Legal Process",
  "Notice",
  "Settlement",
  "Documents",
  "Cheque Misuse",
  "Business",
  "Banks / NBFCs",
  "CBA"
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenIndex(null);
  };

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <>
      <Header />

      <main className="faq-page">

        {/* =====================================================
            FAQ MAIN SECTION
        ===================================================== */}

        <section className="faq-main-section">

          <div className="faq-layout">

            {/* =================================================
                LEFT STICKY CONTENT
            ================================================= */}

            <aside className="faq-intro">

              <div className="faq-intro-inner">

                <span className="faq-eyebrow">
                  FREQUENTLY ASKED QUESTIONS
                </span>

                <h1>
                  Questions About
                  <span>Cheque Bounce?</span>
                </h1>

                <p>
                  Find answers to common questions about cheque bounce
                  matters, settlements, notices, documents and related
                  assistance.
                </p>

                <div className="faq-intro-line">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>

            </aside>


            {/* =================================================
                RIGHT SCROLLABLE FAQ AREA
            ================================================= */}

            <div className="faq-content">

              <div className="faq-content-inner">

                {/* CATEGORY BAR */}

                <div className="faq-category-wrap">

                  <div className="faq-category-bar">

                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        className={
                          activeCategory === category
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                          handleCategoryChange(category)
                        }
                      >
                        {category}
                      </button>
                    ))}

                  </div>

                </div>


                {/* FAQ LIST */}

                <div className="faq-list">

                  {filteredFaqs.map((faq, index) => {

                    const isOpen = openIndex === index;

                    return (
                      <article
                        className={`faq-item ${
                          isOpen ? "open" : ""
                        }`}
                        key={`${faq.category}-${faq.question}`}
                      >

                        <button
                          type="button"
                          className="faq-question"
                          onClick={() => handleToggle(index)}
                          aria-expanded={isOpen}
                        >

                          <span>
                            {faq.question}
                          </span>

                          <span className="faq-toggle">
                            {isOpen ? "×" : "+"}
                          </span>

                        </button>


                        <div
                          className={`faq-answer ${
                            isOpen ? "show" : ""
                          }`}
                        >
                          <div className="faq-answer-inner">
                            {faq.answer}
                          </div>
                        </div>

                      </article>
                    );

                  })}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA SECTION
        ===================================================== */}

        <section className="faq-cta">

          <div className="faq-cta-inner">

            <div className="faq-cta-content">

              <span className="faq-cta-eyebrow">
                NEED ASSISTANCE?
              </span>

              <h2>
                Dealing With a
                <span>Cheque Bounce</span>
                Matter?
              </h2>

              <p>
                Understand your situation, explore your options,
                and take the next step with greater clarity.
              </p>

              <a
                href="tel:9891188400"
                className="faq-cta-button"
              >
                Call Now CBA Helpline
                <span>→</span>
              </a>

            </div>


            <div className="faq-cta-visual">

              <div className="faq-cta-image-wrap">

                <img
                  src="/hero-team.png"
                  alt="CBA assistance team"
                />

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}